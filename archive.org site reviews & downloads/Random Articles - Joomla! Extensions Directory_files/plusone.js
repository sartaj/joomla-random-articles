




/*
     FILE ARCHIVED ON 21:09:41 Jan 26, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:33:40 Oct 14, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=null,g=window,h="push",i="replace",k="length";var m=g,r=document,u=m.location,w=function(){},x=/\[native code\]/,A=function(a,b,c){return a[b]=a[b]||c},C=function(a){for(var b=0;b<this[k];b++)if(this[b]===a)return b;return-1},D=function(){var a;if((a=Object.create)&&x.test(a))a=a(f);else{a={};for(var b in a)a[b]=void 0}return a},E=A(m,"gapi",{});var F;F=A(m,"___jsl",D());A(F,"I",0);A(F,"hel",10);var G=function(){var a=u.href,b;if(F.dpo)b=F.h;else{b=F.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b},I=function(a){return A(A(F,"H",D()),a,D())};var J=A(F,"perf",D()),L=A(J,"g",D()),M=A(J,"i",D());A(J,"r",[]);D();D();var N=function(a,b,c){var e=J.r;"function"===typeof e?e(a,b,c):e[h]([a,b,c])},P=function(a,b,c){b&&0<b[k]&&(b=O(b),c&&0<c[k]&&(b+="___"+O(c)),28<b[k]&&(b=b.substr(0,28)+(b[k]-28)),c=b,b=A(M,"_p",D()),A(b,c,D())[a]=(new Date).getTime(),N(a,"_p",c))},O=function(a){return a.join("__")[i](/\./g,"_")[i](/\-/g,"_")[i](/\,/g,"_")};var Q=D(),R=[],S;S={a:"callback",g:"sync",e:"config",c:"_c",d:"h",l:"platform",i:"jsl",TIMEOUT:"timeout",f:"ontimeout",k:"mh",j:"u"};R[h]([S.i,function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?F[b]=A(F,b,[]).concat(c):A(F,b,c)}if(b=a[S.j])a=A(F,"us",[]),a[h](b),(b=/^https:(.*)$/.exec(b))&&a[h]("http:"+b[1])}]);var T=decodeURI("%73cript");Q.m=function(a){var b=F.ms||"/web/20130126210941/https://apis.google.com";a=a[0];var c;if(!(c=!a))c=0<=a.indexOf("..");if(c)throw"Bad hint";return b+"/"+a[i](/^\//,"")};
var U=function(a){return a.join(",")[i](/\./g,"_")[i](/-/g,"_")},W=function(a,b){for(var c=[],e=0;e<a[k];++e){var d=a[e];d&&0>C.call(b,d)&&c[h](d)}return c},aa=/^[\/_a-zA-Z0-9,.\-!:=]+$/,ba=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,ca=/\/cb=/g,da=/\/\//g,X=function(a){var b=r.createElement(T);b.setAttribute("src",a);b.async="true";(a=r.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(r.head||r.body||r.documentElement).appendChild(b)},Z=function(a,b){var c=b||{};"function"==
typeof b&&(c={},c[S.a]=b);var e=c,d=e&&e[S.c];if(d)for(var j=0;j<R[k];j++){var l=R[j][0],n=R[j][1];n&&Object.prototype.hasOwnProperty.call(d,l)&&n(d[l],a,e)}e=a?a.split(":"):[];if(!(d=c[S.d]))if(d=G(),!d)throw"Bad hint";j=d;l=A(F,"ah",D());if(!l["::"]||!e[k])Y(e||[],c,j);else{d=[];for(n=f;n=e.shift();){var q=n.split("."),q=l[n]||l[q[1]&&"ns:"+q[0]||""]||j,v=d[k]&&d[d[k]-1]||f,y=v;if(!v||v.hint!=q)y={hint:q,b:[]},d[h](y);y.b[h](n)}var B=d[k];if(1<B){var z=c[S.a];z&&(c[S.a]=function(){0==--B&&z()})}for(;e=
d.shift();)Y(e.b,c,e.hint)}},Y=function(a,b,c){var e=a.sort();a=[];for(var d=void 0,j=0;j<e[k];j++){var l=e[j];l!=d&&a[h](l);d=l}a=a||[];var n=b[S.a],q=b[S.e],d=b[S.TIMEOUT],v=b[S.f],y=f,B=!1;if(d&&!v||!d&&v)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=A(I(c),"r",[]).sort(),z=A(I(c),"L",[]).sort(),H=[].concat(e),V=function(a,b){if(B)return 0;m.clearTimeout(y);z[h].apply(z,p);var d=((E||{}).config||{}).update;d?d(q):q&&A(F,"cu",[])[h](q);if(b){P("me0",
a,H);try{$(function(){var a;a=c===G()?A(E,"_",D()):D();a=A(I(c),"_",a);b(a)})}finally{P("me1",a,H)}}n&&n();return 1};0<d&&(y=m.setTimeout(function(){B=!0;v()},d));var p=W(a,z);if(p[k]){var p=W(a,e),s=A(F,"CP",[]),t=s[k];s[t]=function(a){if(!a)return 0;P("ml1",p,H);var b=function(){s[t]=f;return V(p,a)};if(0<t&&s[t-1])s[t]=b;else for(b();(b=s[++t])&&b(););};if(p[k]){var K="loaded_"+F.I++;E[K]=function(a){s[t](a);E[K]=f};a=c.split(";");a=(d=Q[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[i]("__features__",
U(p))[i](/\/$/,"")+(e[k]?"/ed=1/exm="+U(e):"")+("/cb=gapi."+K);j=d.match(da);l=d.match(ca);if(!l||!(1===l[k]&&ba.test(d)&&aa.test(d)&&j&&1===j[k]))throw"Bad URL "+a;e[h].apply(e,p);P("ml0",p,H);b[S.g]||m.___gapisync?(b=a,"loading"!=r.readyState?X(b):r.write("<"+T+' src="'+encodeURI(b)+'"></'+T+">")):X(a)}else s[t](w)}else V(p)};var $=function(a){if(F.hee&&0<F.hel)try{return a()}catch(b){F.hel--,Z("debug_error",function(){g.___jsl.hefn(b)})}else return a()};E.load=function(a,b){return $(function(){return Z(a,b)})};L.bs0=g.gapi._bs||(new Date).getTime();N("bs0");L.bs1=(new Date).getTime();N("bs1");delete g.gapi._bs;})();
gapi.load("plusone-unsupported",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[69,100,71,98,96,79,74,45,17,86,82,92,94,61,90,30],"inline":{"css":1},"report":{},"oauth-flow":{"authUrl":"/web/20130126210941/https://accounts.google.com/o/oauth2/auth","proxyUrl":"/web/20130126210941/https://accounts.google.com/o/oauth2/postmessageRelay"},"isPlusUser":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"/web/20130126210941/https://apis.google.com/additnow/additnow.html?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"/web/20130126210941/https://plusone.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"/web/20130126210941/https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"hangout":{"url":"/web/20130126210941/https://talkgadget.google.com/widget/go?bsv"},"savetodrive":{"methods":["save"],"url":"/web/20130126210941/https://drive.google.com/savetodrivebutton?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"/web/20130126210941/https://plus.google.com","plusone":{"preloadUrl":["/web/20130126210941/https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"}},"debug":{"host":"/web/20130126210941/https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"/web/20130126210941/https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.sqZYWQ5C8Ko.O/m\u003d__features__/am\u003dQQ/rt\u003dj/d\u003d1/rs\u003dAItRSTPjTMFi86_vA6VZ2jAa4YutQ3Lwdg","u":"/web/20130126210941/http://apis.google.com/js/plusone.js","hee":true,"fp":"82aabf5ff7c16931d1eed28ededb20c21b3067f0","dpo":false},"fp":"82aabf5ff7c16931d1eed28ededb20c21b3067f0","annotation":["autocomplete","profile"],"bimodal":[]}});