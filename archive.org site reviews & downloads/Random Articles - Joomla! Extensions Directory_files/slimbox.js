




/*
     FILE ARCHIVED ON 19:33:39 Okt 14, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:33:39 Okt 14, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
	Slimbox v1.53 - The ultimate lightweight Lightbox clone
	(c) 2007-2008 Christophe Beyls </web/20131014193339/http://www.digitalia.be>
	MIT-style license.
*/
var Slimbox;(function(){var G=0,F,L,B,S,T,O,b,E,M,J=new Image(),K=new Image(),X,a,P,H,W,Z,I,Y,C;window.addEvent("domready",function(){b=V.bindWithEvent();$(document.body).adopt($$([X=new Element("div",{id:"lbOverlay"}),a=new Element("div",{id:"lbCenter"}),Z=new Element("div",{id:"lbBottomContainer"})]).setStyle("display","none"));P=new Element("div",{id:"lbImage"}).injectInside(a).adopt(H=new Element("a",{id:"lbPrevLink",href:"#"}),W=new Element("a",{id:"lbNextLink",href:"#"}));H.onclick=D;W.onclick=R;var d;I=new Element("div",{id:"lbBottom"}).injectInside(Z).adopt(d=new Element("a",{id:"lbCloseLink",href:"#"}),Y=new Element("div",{id:"lbCaption"}),C=new Element("div",{id:"lbNumber"}),new Element("div",{styles:{clear:"both"}}));d.onclick=X.onclick=N;E={overlay:X.effect("opacity",{duration:500}).set(0),image:P.effect("opacity",{duration:500,onComplete:A}),bottom:I.effect("margin-top",{duration:400})}});Slimbox={open:function(f,e,d){F=$extend({loop:false,overlayOpacity:0.8,resizeDuration:400,resizeTransition:false,initialWidth:250,initialHeight:250,animateCaption:true,showCounter:true,counterText:"Image {x} of {y}"},d||{});if(typeof f=="string"){f=[[f,e]];e=0}L=f;F.loop=F.loop&&(L.length>1);c();Q(true);O=window.getScrollTop()+(window.getHeight()/15);E.resize=a.effects($extend({duration:F.resizeDuration,onComplete:A},F.resizeTransition?{transition:F.resizeTransition}:{}));a.setStyles({top:O,width:F.initialWidth,height:F.initialHeight,marginLeft:-(F.initialWidth/2),display:""});E.overlay.start(F.overlayOpacity);G=1;return U(e)}};Element.extend({slimbox:function(d,e){$$(this).slimbox(d,e);return this}});Elements.extend({slimbox:function(d,g,f){g=g||function(h){return[h.href,h.title]};f=f||function(){return true};var e=this;e.forEach(function(h){h.onclick=function(){var i=e.filter(f,this);return Slimbox.open(i.map(g),i.indexOf(this),d)}});return e}});function c(){X.setStyles({top:window.getScrollTop(),height:window.getHeight()})}function Q(d){["object",window.ie?"select":"embed"].forEach(function(f){$each(document.getElementsByTagName(f),function(g){if(d){g._slimbox=g.style.visibility}g.style.visibility=d?"hidden":g._slimbox})});X.style.display=d?"":"none";var e=d?"addEvent":"removeEvent";window[e]("scroll",c)[e]("resize",c);document[e]("keydown",b)}function V(d){switch(d.code){case 27:case 88:case 67:N();break;case 37:case 80:D();break;case 39:case 78:R()}d.preventDefault()}function D(){return U(S)}function R(){return U(T)}function U(d){if((G==1)&&(d>=0)){G=2;B=d;S=((B||!F.loop)?B:L.length)-1;T=B+1;if(T==L.length){T=F.loop?0:-1}$$(H,W,P,Z).setStyle("display","none");E.bottom.stop().set(0);E.image.set(0);a.className="lbLoading";M=new Image();M.onload=A;M.src=L[d][0]}return false}function A(){switch(G++){case 2:a.className="";P.setStyles({backgroundImage:"url("+L[B][0]+")",display:""});$$(P,I).setStyle("width",M.width);$$(P,H,W).setStyle("height",M.height);Y.setHTML(L[B][1]||"");C.setHTML((F.showCounter&&(L.length>1))?F.counterText.replace(/{x}/,B+1).replace(/{y}/,L.length):"");if(S>=0){J.src=L[S][0]}if(T>=0){K.src=L[T][0]}if(a.clientHeight!=P.offsetHeight){E.resize.start({height:P.offsetHeight});break}G++;case 3:if(a.clientWidth!=P.offsetWidth){E.resize.start({width:P.offsetWidth,marginLeft:-P.offsetWidth/2});break}G++;case 4:Z.setStyles({top:O+a.clientHeight,marginLeft:a.style.marginLeft,visibility:"hidden",display:""});E.image.start(1);break;case 5:if(S>=0){H.style.display=""}if(T>=0){W.style.display=""}if(F.animateCaption){E.bottom.set(-I.offsetHeight).start(0)}Z.style.visibility="";G=1}}function N(){if(G){G=0;M.onload=Class.empty;for(var d in E){E[d].stop()}$$(a,Z).setStyle("display","none");E.overlay.chain(Q).start(0)}return false}})();

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
Slimbox.scanPage = function() {
	var links = $$("a").filter(function(el) {
		return el.rel && el.rel.test(/^lightbox/i);
	});
	$$(links).slimbox({/* Put custom options here */}, null, function(el) {
		return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
	});
};
window.addEvent("domready", Slimbox.scanPage);
