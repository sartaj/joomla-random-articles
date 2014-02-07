<?php
/**
* @version $Id: mod_randomart.php 2711 2006-09-27 
* By Sartaj Chowdhury www.muslimonline.org (based on most_read.php)
* @copyright Copyright (C) 2005 Open Source Matters. All rights reserved.
* @license http://www.gnu.org/copyleft/gpl.html GNU/GPL, see LICENSE.php
* Joomla! is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/

// no direct access
defined( '_VALID_MOS' ) or die( 'Restricted access' );

global $mosConfig_offset, $mosConfig_live_site;

$type 		= intval( $params->get( 'type', 1 ) );
$count 		= intval( $params->get( 'count', 5 ) );
$catid 		= trim( $params->get( 'catid' ) );
$secid 		= trim( $params->get( 'secid' ) );
$show_front	= $params->get( 'show_front', 1 );

$now 		= _CURRENT_SERVER_TIME;
$access 	= !$mainframe->getCfg( 'shownoauth' );
$nullDate 	= $database->getNullDate();
// select between Content Items, Static Content or both
switch ( $type ) {
	case 2:
	//Static Content only
		$query = "SELECT a.id, a.title"
		. "\n FROM #__content AS a"
		. "\n WHERE ( a.state = 1 AND a.sectionid = 0 )"
		. "\n AND ( a.publish_up = '$nullDate' OR a.publish_up <= '$now' )"
		. "\n AND ( a.publish_down = '$nullDate' OR a.publish_down >= '$now' )"
		. ( $access ? "\n AND a.access <= $my->gid" : '' )
		. "\n ORDER BY RAND() "
		. "\n LIMIT $count"
		;
		$database->setQuery( $query );
		$rows = $database->loadObjectList();
		break;

	case 3:
	//Both
		$query = "SELECT a.id, a.title, a.sectionid, a.catid, cc.access AS cat_access, s.access AS sec_access, cc.published AS cat_state, s.published AS sec_state"
		. "\n FROM #__content AS a"
		. "\n LEFT JOIN #__categories AS cc ON cc.id = a.catid"
		. "\n LEFT JOIN #__sections AS s ON s.id = a.sectionid"
		. "\n WHERE a.state = 1"
		. "\n AND ( a.publish_up = '$nullDate' OR a.publish_up <= '$now' )"
		. "\n AND ( a.publish_down = '$nullDate' OR a.publish_down >= '$now' )"
		. ( $access ? "\n AND a.access <= $my->gid" : '' )
		. "\n ORDER BY RAND() "
		. "\n LIMIT $count"
		;
		$database->setQuery( $query );
		$temp = $database->loadObjectList();
		
		$rows = array();
		if (count($temp)) {
			foreach ($temp as $row ) {
				if (($row->cat_state == 1 || $row->cat_state == '') &&  ($row->sec_state == 1 || $row->sec_state == '') &&  ($row->cat_access <= $my->gid || $row->cat_access == '' || !$access) &&  ($row->sec_access <= $my->gid || $row->sec_access == '' || !$access)) {
					$rows[] = $row;
				}
			}
		}
		unset($temp);
		break;

	case 1:
	default:
	//Content Items only
		$query = "SELECT a.id, a.title, a.sectionid, a.catid"
		. "\n FROM #__content AS a"
		. "\n LEFT JOIN #__content_frontpage AS f ON f.content_id = a.id"
		. "\n INNER JOIN #__categories AS cc ON cc.id = a.catid"
		. "\n INNER JOIN #__sections AS s ON s.id = a.sectionid"
		. "\n WHERE ( a.state = 1 AND a.sectionid > 0 )"
		. "\n AND ( a.publish_up = '$nullDate' OR a.publish_up <= '$now' )"
		. "\n AND ( a.publish_down = '$nullDate' OR a.publish_down >= '$now' )"
		. ( $access ? "\n AND a.access <= $my->gid AND cc.access <= $my->gid AND s.access <= $my->gid" : '' )
		. ( $catid ? "\n AND ( a.catid IN ( $catid ) )" : '' )
		. ( $secid ? "\n AND ( a.sectionid IN ( $secid ) )" : '' )
		. ( $show_front == "0" ? "\n AND f.content_id IS NULL" : '' )
		. "\n AND s.published = 1"
		. "\n AND cc.published = 1"
		. "\n ORDER BY RAND() "
		. "\n LIMIT $count"
		;
		$database->setQuery( $query );
		$rows = $database->loadObjectList();

		break;
}

// needed to reduce queries used by getItemid for Content Items
if ( ( $type == 1 ) || ( $type == 3 ) ) {
	$bs 	= $mainframe->getBlogSectionCount();
	$bc 	= $mainframe->getBlogCategoryCount();
	$gbs 	= $mainframe->getGlobalBlogSectionCount();
}

// Output
?>
<ul class="mostread<?php echo $moduleclass_sfx; ?>">
<?php
foreach ($rows as $row) {
	// get Itemid
	switch ( $type ) {
		case 2:
			$query = "SELECT id"
			. "\n FROM #__menu"
			. "\n WHERE type = 'content_typed'"
			. "\n AND componentid = $row->id"
			;
			$database->setQuery( $query );
			$Itemid = $database->loadResult();
			break;

		case 3:
			if ( $row->sectionid ) {
				$Itemid = $mainframe->getItemid( $row->id, 0, 0, $bs, $bc, $gbs );
			} else {
				$query = "SELECT id"
				. "\n FROM #__menu"
				. "\n WHERE type = 'content_typed'"
				. "\n AND componentid = $row->id"
				;
				$database->setQuery( $query );
				$Itemid = $database->loadResult();
			}
			break;

		case 1:
		default:
			$Itemid = $mainframe->getItemid( $row->id, 0, 0, $bs, $bc, $gbs );
			break;
	}

	// Blank itemid checker for SEF
	if ($Itemid == NULL) {
		$Itemid = '';
	} else {
		$Itemid = '&amp;Itemid='.$Itemid;
	}

 	$link = sefRelToAbs( 'index.php?option=com_content&amp;task=view&amp;id='. $row->id . $Itemid );
 	?>
 	<li class="mostread<?php echo $moduleclass_sfx; ?>">
		<a href="<?php echo $link; ?>" class="mostread<?php echo $moduleclass_sfx; ?>">
			<?php echo $row->title; ?></a>
 	</li>
 	<?php
}
?>
</ul>