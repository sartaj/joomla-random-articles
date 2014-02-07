




/*
     FILE ARCHIVED ON 19:24:08 Okt 14, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:31:42 Okt 14, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/

if(typeof(JX)==='undefined'){var JX={};}
JX.editors={instances:{}};JX.Classes={};JX.Options={};JX.JText={strings:{},'_':function(key,def){return typeof this.strings[key.toUpperCase()]!=='undefined'?this.strings[key.toUpperCase()]:def;},load:function(object){for(var key in object){this.strings[key.toUpperCase()]=object[key];}
return this;}};JX.replaceTokens=function(n){var els=document.getElementsByTagName('input');for(var i=0;i<els.length;i++){if((els[i].type=='hidden')&&(els[i].name.length==32)&&els[i].value=='1'){els[i].name=n;}}};