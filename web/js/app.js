var h=void 0,i=null;function k(){return function(){}}var l,aa=aa||{},n=this;function ba(a){for(var a=a.split("."),b=n,c;c=a.shift();)if(b[c]!=i)b=b[c];else return i;return b}function ca(){}
function q(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function s(a){var b=q(a);return b=="array"||b=="object"&&typeof a.length=="number"}function t(a){return typeof a=="string"}function da(a){var b=typeof a;return b=="object"&&a!=i||b=="function"}function u(a){return a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),fa=0;function ga(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}else return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ga:ha;return v.apply(i,arguments)}var ia=Date.now||function(){return+new Date};
function w(a,b){function c(){}c.prototype=b.prototype;a.U=b.prototype;a.prototype=new c};function ja(a,b){for(var c=1;c<arguments.length;c++)var d=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a}function x(a){if(!ka.test(a))return a;a.indexOf("&")!=-1&&(a=a.replace(la,"&amp;"));a.indexOf("<")!=-1&&(a=a.replace(ma,"&lt;"));a.indexOf(">")!=-1&&(a=a.replace(na,"&gt;"));a.indexOf('"')!=-1&&(a=a.replace(oa,"&quot;"));return a}var la=/&/g,ma=/</g,na=/>/g,oa=/\"/g,ka=/[&<>\"]/;function pa(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var y,qa,ra,sa;function ta(){return n.navigator?n.navigator.userAgent:i}sa=ra=qa=y=!1;var ua;if(ua=ta()){var va=n.navigator;y=ua.indexOf("Opera")==0;qa=!y&&ua.indexOf("MSIE")!=-1;ra=!y&&ua.indexOf("WebKit")!=-1;sa=!y&&!ra&&va.product=="Gecko"}var wa=y,z=qa,A=sa,C=ra,xa=n.navigator,ya=(xa&&xa.platform||"").indexOf("Mac")!=-1,za;
a:{var Aa="",Ba;if(wa&&n.opera)var Ca=n.opera.version,Aa=typeof Ca=="function"?Ca():Ca;else if(A?Ba=/rv\:([^\);]+)(\)|;)/:z?Ba=/MSIE\s+([^\);]+)(\)|;)/:C&&(Ba=/WebKit\/(\S+)/),Ba)var Da=Ba.exec(ta()),Aa=Da?Da[1]:"";if(z){var Ea,Fa=n.document;Ea=Fa?Fa.documentMode:h;if(Ea>parseFloat(Aa)){za=String(Ea);break a}}za=Aa}var Ga={};
function D(a){var b;if(!(b=Ga[a])){b=0;for(var c=String(za).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;b==0&&e<f;e++){var g=c[e]||"",j=d[e]||"",o=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var E=o.exec(g)||["","",""],r=p.exec(j)||["","",""];if(E[0].length==0&&r[0].length==0)break;b=pa(E[1].length==0?0:parseInt(E[1],10),r[1].length==0?0:parseInt(r[1],10))||pa(E[2].length==0,r[2].length==
0)||pa(E[2],r[2])}while(b==0)}b=Ga[a]=b>=0}return b}var Ha={};function Ia(){return Ha[9]||(Ha[9]=z&&!!document.documentMode&&document.documentMode>=9)};function Ja(){}var Ka=0;l=Ja.prototype;l.key=0;l.u=!1;l.ia=!1;l.N=function(a,b,c,d,f,e){if(q(a)=="function")this.sa=!0;else if(a&&a.handleEvent&&q(a.handleEvent)=="function")this.sa=!1;else throw Error("Invalid listener argument");this.D=a;this.Fa=b;this.src=c;this.type=d;this.capture=!!f;this.ba=e;this.ia=!1;this.key=++Ka;this.u=!1};l.handleEvent=function(a){return this.sa?this.D.call(this.ba||this.src,a):this.D.handleEvent.call(this.D,a)};function La(a,b){for(var c in a)b.call(h,a[c],c,a)}function Ma(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Na(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Oa="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function Pa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<Oa.length;e++)c=Oa[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};!z||Ia();var Qa=!z||Ia(),Ra=z&&!D("8");!C||D("528");A&&D("1.9b")||z&&D("8")||wa&&D("9.5")||C&&D("528");!A||D("8");function Sa(a){this.stack=Error().stack||"";if(a)this.message=String(a)}w(Sa,Error);Sa.prototype.name="CustomError";function Ta(a,b){b.unshift(a);Sa.call(this,ja.apply(i,b));b.shift();this.pb=a}w(Ta,Sa);Ta.prototype.name="AssertionError";function Ua(a,b){throw new Ta("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var F=Array.prototype,Va=F.indexOf?function(a,b,c){return F.indexOf.call(a,b,c)}:function(a,b,c){c=c==i?0:c<0?Math.max(0,a.length+c):c;if(t(a))return!t(b)||b.length!=1?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Wa=F.forEach?function(a,b,c){F.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=t(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};function Xa(a){return F.concat.apply(F,arguments)}
function Ya(a){if(q(a)=="array")return Xa(a);else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}}function Za(a,b,c){return arguments.length<=2?F.slice.call(a,b):F.slice.call(a,b,c)};function $a(){}$a.prototype.ma=!1;$a.prototype.J=function(){if(!this.ma)this.ma=!0,this.l()};$a.prototype.l=function(){this.Pa&&ab.apply(i,this.Pa)};function ab(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];s(d)?ab.apply(i,d):d&&typeof d.J=="function"&&d.J()}};function G(a,b){this.type=a;this.currentTarget=this.target=b}w(G,$a);G.prototype.l=function(){delete this.type;delete this.target;delete this.currentTarget};G.prototype.t=!1;G.prototype.G=!0;G.prototype.preventDefault=function(){this.G=!1};function bb(a){bb[" "](a);return a}bb[" "]=ca;function H(a,b){a&&this.N(a,b)}w(H,G);l=H.prototype;l.target=i;l.relatedTarget=i;l.offsetX=0;l.offsetY=0;l.clientX=0;l.clientY=0;l.screenX=0;l.screenY=0;l.button=0;l.keyCode=0;l.charCode=0;l.ctrlKey=!1;l.altKey=!1;l.shiftKey=!1;l.metaKey=!1;l.Xa=!1;l.$=i;
l.N=function(a,b){var c=this.type=a.type;G.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(A){var f;a:{try{bb(d.nodeName);f=!0;break a}catch(e){}f=!1}f||(d=i)}}else if(c=="mouseover")d=a.fromElement;else if(c=="mouseout")d=a.toElement;this.relatedTarget=d;this.offsetX=C||a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=C||a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Xa=ya?a.metaKey:a.ctrlKey;this.state=a.state;this.$=a;delete this.G;delete this.t};
l.preventDefault=function(){H.U.preventDefault.call(this);var a=this.$;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ra)try{if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1}catch(b){}};l.l=function(){H.U.l.call(this);this.relatedTarget=this.currentTarget=this.target=this.$=i};var I={},J={},K={},L={};
function M(a,b,c,d,f){if(b)if(q(b)=="array")for(var e=0;e<b.length;e++)M(a,b[e],c,d,f);else{var d=!!d,g=J;b in g||(g[b]={b:0,f:0});g=g[b];d in g||(g[d]={b:0,f:0},g.b++);var g=g[d],j=u(a),o;g.f++;if(g[j]){o=g[j];for(e=0;e<o.length;e++)if(g=o[e],g.D==c&&g.ba==f){if(g.u)break;return}}else o=g[j]=[],g.b++;e=cb();e.src=a;g=new Ja;g.N(c,e,a,b,d,f);c=g.key;e.key=c;o.push(g);I[c]=g;K[j]||(K[j]=[]);K[j].push(g);a.addEventListener?(a==n||!a.la)&&a.addEventListener(b,e,d):a.attachEvent(b in L?L[b]:L[b]="on"+
b,e)}else throw Error("Invalid event type");}function cb(){var a=db,b=Qa?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function N(a,b,c,d,f){if(q(b)=="array")for(var e=0;e<b.length;e++)N(a,b[e],c,d,f);else{d=!!d;a:{e=J;if(b in e&&(e=e[b],d in e&&(e=e[d],a=u(a),e[a]))){a=e[a];break a}a=i}if(a)for(e=0;e<a.length;e++)if(a[e].D==c&&a[e].capture==d&&a[e].ba==f){eb(a[e].key);break}}}
function eb(a){if(I[a]){var b=I[a];if(!b.u){var c=b.src,d=b.type,f=b.Fa,e=b.capture;c.removeEventListener?(c==n||!c.la)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in L?L[d]:L[d]="on"+d,f);c=u(c);f=J[d][e][c];if(K[c]){var g=K[c],j=Va(g,b);j>=0&&F.splice.call(g,j,1);g.length==0&&delete K[c]}b.u=!0;f.va=!0;fb(d,e,c,f);delete I[a]}}}
function fb(a,b,c,d){if(!d.O&&d.va){for(var f=0,e=0;f<d.length;f++)d[f].u?d[f].Fa.src=i:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.va=!1;e==0&&(delete J[a][b][c],J[a][b].b--,J[a][b].b==0&&(delete J[a][b],J[a].b--),J[a].b==0&&delete J[a])}}function gb(a){var b,c=0,d=b==i;b=!!b;if(a==i)La(K,function(a){for(var e=a.length-1;e>=0;e--){var f=a[e];if(d||b==f.capture)eb(f.key),c++}});else if(a=u(a),K[a])for(var a=K[a],f=a.length-1;f>=0;f--){var e=a[f];if(d||b==e.capture)eb(e.key),c++}}
function hb(a,b,c,d,f){var e=1,b=u(b);if(a[b]){a.f--;a=a[b];a.O?a.O++:a.O=1;try{for(var g=a.length,j=0;j<g;j++){var o=a[j];o&&!o.u&&(e&=ib(o,f)!==!1)}}finally{a.O--,fb(c,d,b,a)}}return Boolean(e)}function ib(a,b){var c=a.handleEvent(b);a.ia&&eb(a.key);return c}
function jb(a,b){var c=b.type||b,d=J;if(!(c in d))return!0;if(t(b))b=new G(b,a);else if(b instanceof G)b.target=b.target||a;else{var f=b,b=new G(c,a);Pa(b,f)}var f=1,e,d=d[c],c=!0 in d,g;if(c){e=[];for(g=a;g;g=g.ga)e.push(g);g=d[!0];g.f=g.b;for(var j=e.length-1;!b.t&&j>=0&&g.f;j--)b.currentTarget=e[j],f&=hb(g,e[j],b.type,!0,b)&&b.G!=!1}if(!1 in d)if(g=d[!1],g.f=g.b,c)for(j=0;!b.t&&j<e.length&&g.f;j++)b.currentTarget=e[j],f&=hb(g,e[j],b.type,!1,b)&&b.G!=!1;else for(d=a;!b.t&&d&&g.f;d=d.ga)b.currentTarget=
d,f&=hb(g,d,b.type,!1,b)&&b.G!=!1;return Boolean(f)}
function db(a,b){if(!I[a])return!0;var c=I[a],d=c.type,f=J;if(!(d in f))return!0;var f=f[d],e,g;if(!Qa){e=b||ba("window.event");var j=!0 in f,o=!1 in f;if(j){if(e.keyCode<0||e.returnValue!=h)return!0;a:{var p=!1;if(e.keyCode==0)try{e.keyCode=-1;break a}catch(E){p=!0}if(p||e.returnValue==h)e.returnValue=!0}}p=new H;p.N(e,this);e=!0;try{if(j){for(var r=[],m=p.currentTarget;m;m=m.parentNode)r.push(m);g=f[!0];g.f=g.b;for(var B=r.length-1;!p.t&&B>=0&&g.f;B--)p.currentTarget=r[B],e&=hb(g,r[B],d,!0,p);if(o){g=
f[!1];g.f=g.b;for(B=0;!p.t&&B<r.length&&g.f;B++)p.currentTarget=r[B],e&=hb(g,r[B],d,!1,p)}}else e=ib(c,p)}finally{if(r)r.length=0;p.J()}return e}d=new H(b,this);try{e=ib(c,d)}finally{d.J()}return e};var kb;function lb(a,b){this.data=b;G.call(this,a)}w(lb,G);var mb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function O(){}w(O,$a);l=O.prototype;l.la=!0;l.ga=i;l.addEventListener=function(a,b,c,d){M(this,a,b,c,d)};l.removeEventListener=function(a,b,c,d){N(this,a,b,c,d)};l.dispatchEvent=function(a){return jb(this,a)};l.l=function(){O.U.l.call(this);gb(this);this.ga=i};var nb=n.window;function ob(a){if(typeof a.L=="function")return a.L();if(t(a))return a.split("");if(s(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ma(a)}function pb(a,b,c){if(typeof a.forEach=="function")a.forEach(b,c);else if(s(a)||t(a))Wa(a,b,c);else{var d;if(typeof a.aa=="function")d=a.aa();else if(typeof a.L!="function")if(s(a)||t(a)){d=[];for(var f=a.length,e=0;e<f;e++)d.push(e)}else d=Na(a);else d=h;for(var f=ob(a),e=f.length,g=0;g<e;g++)b.call(c,f[g],d&&d[g],a)}};function qb(a,b){this.m={};this.d=[];var c=arguments.length;if(c>1){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof qb?(c=a.aa(),d=a.L()):(c=Na(a),d=Ma(a));for(var f=0;f<c.length;f++)this.set(c[f],d[f])}}l=qb.prototype;l.b=0;l.Ka=0;l.L=function(){rb(this);for(var a=[],b=0;b<this.d.length;b++)a.push(this.m[this.d[b]]);return a};l.aa=function(){rb(this);return this.d.concat()};
l.clear=function(){this.m={};this.Ka=this.b=this.d.length=0};function rb(a){if(a.b!=a.d.length){for(var b=0,c=0;b<a.d.length;){var d=a.d[b];Object.prototype.hasOwnProperty.call(a.m,d)&&(a.d[c++]=d);b++}a.d.length=c}if(a.b!=a.d.length){for(var f={},c=b=0;b<a.d.length;)d=a.d[b],Object.prototype.hasOwnProperty.call(f,d)||(a.d[c++]=d,f[d]=1),b++;a.d.length=c}}l.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.m,a)?this.m[a]:b};
l.set=function(a,b){Object.prototype.hasOwnProperty.call(this.m,a)||(this.b++,this.d.push(a),this.Ka++);this.m[a]=b};function sb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function tb(){}tb.prototype.H=i;var ub;function vb(){}w(vb,tb);function wb(a){return(a=xb(a))?new ActiveXObject(a):new XMLHttpRequest}function yb(a){var b={};xb(a)&&(b[0]=!0,b[1]=!0);return b}vb.prototype.ca=i;
function xb(a){if(!a.ca&&typeof XMLHttpRequest=="undefined"&&typeof ActiveXObject!="undefined"){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.ca=d}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ca}ub=new vb;function zb(a){return Ab(a||arguments.callee.caller,[])}
function Ab(a,b){var c=[];if(Va(b,a)>=0)c.push("[...circular reference...]");else if(a&&b.length<50){c.push(Bb(a)+"(");for(var d=a.arguments,f=0;f<d.length;f++){f>0&&c.push(", ");var e;e=d[f];switch(typeof e){case "object":e=e?"object":"null";break;case "string":break;case "number":e=String(e);break;case "boolean":e=e?"true":"false";break;case "function":e=(e=Bb(e))?e:"[fn]";break;default:e=typeof e}e.length>40&&(e=e.substr(0,40)+"...");c.push(e)}b.push(a);c.push(")\n");try{c.push(Ab(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")}function Bb(a){if(Cb[a])return Cb[a];a=String(a);if(!Cb[a]){var b=/function ([^\(]+)/.exec(a);Cb[a]=b?b[1]:"[Anonymous]"}return Cb[a]}var Cb={};function P(a,b,c,d,f){this.reset(a,b,c,d,f)}P.prototype.Za=0;P.prototype.pa=i;P.prototype.oa=i;var Db=0;P.prototype.reset=function(a,b,c,d,f){this.Za=typeof f=="number"?f:Db++;this.tb=d||ia();this.C=a;this.Sa=b;this.ob=c;delete this.pa;delete this.oa};P.prototype.Ia=function(a){this.C=a};function Q(a){this.Ta=a}Q.prototype.Q=i;Q.prototype.C=i;Q.prototype.Y=i;Q.prototype.qa=i;function Eb(a,b){this.name=a;this.value=b}Eb.prototype.toString=function(){return this.name};var Fb=new Eb("SEVERE",1E3),Gb=new Eb("WARNING",900),Hb=new Eb("CONFIG",700),Ib=new Eb("FINE",500);Q.prototype.getParent=function(){return this.Q};Q.prototype.Ia=function(a){this.C=a};function Jb(a){if(a.C)return a.C;if(a.Q)return Jb(a.Q);Ua("Root logger has no level set.");return i}
Q.prototype.log=function(a,b,c){if(a.value>=Jb(this).value){a=this.Ra(a,b,c);b="log:"+a.Sa;n.console&&(n.console.timeStamp?n.console.timeStamp(b):n.console.markTimeline&&n.console.markTimeline(b));n.msWriteProfilerMark&&n.msWriteProfilerMark(b);for(b=this;b;){var c=b,d=a;if(c.qa)for(var f=0,e=h;e=c.qa[f];f++)e(d);b=b.getParent()}}};
Q.prototype.Ra=function(a,b,c){var d=new P(a,String(b),this.Ta);if(c){d.pa=c;var f;var e=arguments.callee.caller;try{var g;var j=ba("window.location.href");if(t(c))g={message:c,name:"Unknown error",lineNumber:"Not available",fileName:j,stack:"Not available"};else{var o,p,E=!1;try{o=c.lineNumber||c.nb||"Not available"}catch(r){o="Not available",E=!0}try{p=c.fileName||c.filename||c.sourceURL||j}catch(m){p="Not available",E=!0}g=E||!c.lineNumber||!c.fileName||!c.stack?{message:c.message,name:c.name,
lineNumber:o,fileName:p,stack:c.stack||"Not available"}:c}f="Message: "+x(g.message)+'\nUrl: <a href="view-source:'+g.fileName+'" target="_new">'+g.fileName+"</a>\nLine: "+g.lineNumber+"\n\nBrowser stack:\n"+x(g.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+x(zb(e)+"-> ")}catch(B){f="Exception trying to expose exception! You win, we lose. "+B}d.oa=f}return d};function R(a,b){a.log(Ib,b,h)}var Kb={},Lb=i;
function Mb(a){Lb||(Lb=new Q(""),Kb[""]=Lb,Lb.Ia(Hb));var b;if(!(b=Kb[a])){b=new Q(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Mb(a.substr(0,c));if(!c.Y)c.Y={};c.Y[d]=b;b.Q=c;Kb[a]=b}return b};function Nb(a){this.headers=new qb;this.w=a||i}w(Nb,O);Nb.prototype.e=Mb("goog.net.XhrIo");var Ob=/^https?$/i;l=Nb.prototype;l.k=!1;l.a=i;l.W=i;l.ea="";l.ta="";l.A=0;l.B="";l.Z=!1;l.M=!1;l.da=!1;l.o=!1;l.V=0;l.r=i;l.Ga="";l.hb=!1;
l.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request");b=b?b.toUpperCase():"GET";this.ea=a;this.B="";this.A=0;this.ta=b;this.Z=!1;this.k=!0;this.a=this.w?wb(this.w):wb(ub);this.W=this.w?this.w.H||(this.w.H=yb(this.w)):ub.H||(ub.H=yb(ub));this.a.onreadystatechange=v(this.Ca,this);try{R(this.e,S(this,"Opening Xhr")),this.da=!0,this.a.open(b,a,!0),this.da=!1}catch(f){R(this.e,S(this,"Error opening Xhr: "+f.message));Pb(this,f);return}var a=c||"",e=new qb(this.headers);
d&&pb(d,function(a,b){e.set(b,a)});b=="POST"&&!Object.prototype.hasOwnProperty.call(e.m,"Content-Type")&&e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");pb(e,function(a,b){this.a.setRequestHeader(b,a)},this);if(this.Ga)this.a.responseType=this.Ga;if("withCredentials"in this.a)this.a.withCredentials=this.hb;try{if(this.r)nb.clearTimeout(this.r),this.r=i;if(this.V>0)R(this.e,S(this,"Will abort after "+this.V+"ms if incomplete")),this.r=nb.setTimeout(v(this.gb,this),this.V);R(this.e,
S(this,"Sending request"));this.M=!0;this.a.send(a);this.M=!1}catch(g){R(this.e,S(this,"Send error: "+g.message)),Pb(this,g)}};l.gb=function(){if(typeof aa!="undefined"&&this.a)this.B="Timed out after "+this.V+"ms, aborting",this.A=8,R(this.e,S(this,this.B)),this.dispatchEvent("timeout"),this.abort(8)};function Pb(a,b){a.k=!1;if(a.a)a.o=!0,a.a.abort(),a.o=!1;a.B=b;a.A=5;Qb(a);Rb(a)}function Qb(a){if(!a.Z)a.Z=!0,a.dispatchEvent("complete"),a.dispatchEvent("error")}
l.abort=function(a){if(this.a&&this.k)R(this.e,S(this,"Aborting")),this.k=!1,this.o=!0,this.a.abort(),this.o=!1,this.A=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Rb(this)};l.l=function(){if(this.a){if(this.k)this.k=!1,this.o=!0,this.a.abort(),this.o=!1;Rb(this,!0)}Nb.U.l.call(this)};l.Ca=function(){!this.da&&!this.M&&!this.o?this.Ua():Sb(this)};l.Ua=function(){Sb(this)};
function Sb(a){if(a.k&&typeof aa!="undefined")if(a.W[1]&&Tb(a)==4&&Ub(a)==2)R(a.e,S(a,"Local request error detected and ignored"));else if(a.M&&Tb(a)==4)nb.setTimeout(v(a.Ca,a),0);else if(a.dispatchEvent("readystatechange"),Tb(a)==4){R(a.e,S(a,"Request complete"));a.k=!1;var b=Ub(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=b===0){b=String(a.ea).match(mb)[1]||i;if(!b&&self.location)b=self.location.protocol,b=b.substr(0,b.length-1);b=
!Ob.test(b?b.toLowerCase():"")}c=b}if(c)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.A=6;var d;try{d=Tb(a)>2?a.a.statusText:""}catch(f){R(a.e,"Can not get status: "+f.message),d=""}a.B=d+" ["+Ub(a)+"]";Qb(a)}Rb(a)}}function Rb(a,b){if(a.a){var c=a.a,d=a.W[0]?ca:i;a.a=i;a.W=i;if(a.r)nb.clearTimeout(a.r),a.r=i;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(f){a.e.log(Fb,"Problem encountered resetting onreadystatechange: "+f.message,h)}}}
function Tb(a){return a.a?a.a.readyState:0}function Ub(a){try{return Tb(a)>2?a.a.status:-1}catch(b){return a.e.log(Gb,"Can not get status: "+b.message,h),-1}}function S(a,b){return b+" ["+a.ta+" "+a.ea+" "+Ub(a)+"]"};function Vb(a){this.j={};this.F=a;this.S={};this.ra=new Nb;M(this.ra,"complete",this.Va,!1,this)}w(Vb,O);Vb.prototype.call=function(a){console.log("ServiceMethod ["+this.F.name+"].call >");this.ra.send(Wb(this,this.F.url,this.F.requiredURLParams,a),this.F.httpMethod,a)};Vb.prototype.Va=function(a){var b=Ub(a.target);b>399||b<200?a=new lb("fault",a):(a=a.target,a=a.a?sb(a.a.responseText):h,a=typeof a.fb!="undefined"&&a.fb==!1?new lb("fault",a):new lb("result",a));jb(this,a)};
function Wb(a,b,c,d){for(var f=c.length-1;f>=0;f--){var e=c[f],g=b.split("{"+e+"}");typeof d[e]!="undefined"?b=g.join(d[e]):console.log("ERROR > Missing required URL param '"+e+"' for method '"+a.F.name+"'")}return b};var Xb,T,Yb;function U(a,b){this.P=new a;this.view=new b(this.P);M(this.P,Zb,this.fa,!1,this)}w(U,O);U.prototype.fa=k();U.prototype.c=function(){this.view.c()};U.prototype.h=function(){this.view.h()};function $b(a){this.j={};this.$a=a;for(var b in a.methods){var c=a.methods[b];console.log("found method = "+c.name);typeof this[c.name]!="undefined"?console.log("WARNING > Duplicate method '"+c.name+"' for service '"+this.$a.name+"'. IGNORED!"):(console.log("adding method = "+c.name),this[c.name]=new Vb(c))}}w($b,O);function ac(a){console.log(a);this.j={};this.Ha=a;this.S={}}w(ac,O);function bc(a){var b=Xb,c;if(typeof b.S[a]!="undefined")c=b.S[a];else if(typeof b.Ha[a]!="undefined")c=b.Ha[a],c.name=a,c=new $b(c),b.S[a]=c;typeof c=="undefined"&&console.log("ERROR: Service '"+a+"' not found");return c};var cc;(cc="ScriptEngine"in n&&n.ScriptEngine()=="JScript")&&(n.ScriptEngineMajorVersion(),n.ScriptEngineMinorVersion(),n.ScriptEngineBuildVersion());function V(a,b){this.i=cc?[]:"";a!=i&&this.append.apply(this,arguments)}V.prototype.set=function(a){this.clear();this.append(a)};cc?(V.prototype.X=0,V.prototype.append=function(a,b,c){b==i?this.i[this.X++]=a:(this.i.push.apply(this.i,arguments),this.X=this.i.length);return this}):V.prototype.append=function(a,b,c){this.i+=a;if(b!=i)for(var d=1;d<arguments.length;d++)this.i+=arguments[d];return this};V.prototype.clear=function(){cc?this.X=this.i.length=0:this.i=""};
V.prototype.toString=function(){if(cc){var a=this.i.join("");this.clear();a&&this.append(a);return a}else return this.i};function dc(a,b){var c;c=(c=a.className)&&typeof c.split=="function"?c.split(/\s+/):[];var d=Za(arguments,1),f;f=c;for(var e=0,g=0;g<d.length;g++)Va(f,d[g])>=0||(f.push(d[g]),e++);f=e==d.length;a.className=c.join(" ");return f};var ec=!z||Ia();!A&&!z||z&&Ia()||A&&D("1.9.1");z&&D("9");function W(a){return t(a)?document.getElementById(a):a}function fc(){var a=document;if(gc(a))return a.querySelectorAll(".state_container");else if(a.getElementsByClassName)return a.getElementsByClassName("state_container");return hc()}function gc(a){return a.querySelectorAll&&a.querySelector&&(!C||document.compatMode=="CSS1Compat"||D("528"))}
function hc(){var a,b,c,d;a=document;if(gc(a))return a.querySelectorAll(".state_container");if(a.getElementsByClassName){var f=a.getElementsByClassName("state_container");return f}f=a.getElementsByTagName("*");d={};for(b=c=0;a=f[b];b++){var e=a.className;typeof e.split=="function"&&Va(e.split(/\s+/),"state_container")>=0&&(d[c++]=a)}d.length=c;return d}
function ic(a,b){La(b,function(b,d){d=="style"?a.style.cssText=b:d=="class"?a.className=b:d=="for"?a.htmlFor=b:d in jc?a.setAttribute(jc[d],b):d.lastIndexOf("aria-",0)==0?a.setAttribute(d,b):a[d]=b})}var jc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function kc(a,b,c){var d=arguments,f=document,e=d[0],g=d[1];if(!ec&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',x(g.name),'"');if(g.type){e.push(' type="',x(g.type),'"');var j={};Pa(j,g);g=j;delete g.type}e.push(">");e=e.join("")}e=f.createElement(e);if(g)t(g)?e.className=g:q(g)=="array"?dc.apply(i,[e].concat(g)):ic(e,g);d.length>2&&lc(f,e,d);return e}
function lc(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}for(var f=2;f<c.length;f++){var e=c[f];s(e)&&!(da(e)&&e.nodeType>0)?Wa(mc(e)?Ya(e):e,d):d(e)}}function mc(a){if(a&&typeof a.length=="number")if(da(a))return typeof a.item=="function"||typeof a.item=="string";else if(q(a)=="function")return typeof a.item=="function";return!1};z&&D(8);function X(a){return typeof a==="object"&&a&&a.jb===0?a.content:String(a).replace(nc,oc)}var pc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\u000b":"&#11;","\u000c":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function oc(a){return pc[a]}var nc=/[\x00\x22\x26\x27\x3c\x3e]/g;function qc(a,b){U.call(this,a,b);this.s=bc("Media")}w(qc,U);l=qc.prototype;l.c=function(){this.view.c();M(this.s.listMedia,"result",this.za,!1,this);M(this.s.listMedia,"fault",this.ya,!1,this);this.s.listMedia.call({event_id:T.I.get().id});M(this.view.q,"click",this.p,!1,this);M(this.view.ja,"click",this.ka,!1,this)};l.p=function(){Y("events")};l.refresh=function(){this.s.listMedia.call({event_id:T.I.get().id})};
l.za=function(a){console.log("ListMedia result>");console.log(a.data);for(var b=this.view.R,c;c=b.firstChild;)b.removeChild(c);for(b=0;b<a.data.length;b++){c=a.data[b];var d={};d.url="http://photos.gthrng.com/"+c._id.$id+"_thumb.jpg";d.lb="http://photos.gthrng.com/"+c._id.$id+".jpg";d.Wa="Gathering User";d.La="Just now";c=d;d=new V;d.append('<li class="photoitem"><img src="',X(c.url),'" width="220" /><p class="owner">',X(c.Wa),'</p><p class="timestamp">',X(c.La),'</p><hr class="clear"/></li>');c=
d.toString();d=document.createElement("div");d.innerHTML=c;this.view.R.appendChild(d)}this.view.R.appendChild(kc("hr",{"class":"clear"}));a=kc("div",{id:"endoftimeline"});a.innerHTML="<p>This event is happening right now. Take some pictures!</p>";this.view.R.appendChild(a)};l.ya=function(a){console.log("ListMedia fault>");console.log(a.data)};
l.Oa=function(a){var b,c;for(b=0,c=a.length;b<c;b+=1){var d=path=a[b].fullPath,f=new FileUploadOptions;f.fileKey="file";f.fileName=d.substr(d.lastIndexOf("/")+1);f.mimeType="image/jpeg";f.params={key:"969490e925ae635134d0977aa6e74f9e",event_id:"62ad28eb85c44f36b1a6b755ab5a40ca"};(new FileTransfer).upload(d,"http://api.gthrng.com/gathering/uploadMediaFile",rc,sc,f)}};
l.Na=function(a){console.log(a);typeof navigator.notification!="undefined"&&typeof navigator.notification.alert!="undefined"&&navigator.notification.alert("An error occurred during capture: "+a.code,i,"Phone-gap alert")};l.ka=function(){navigator.device.capture.captureImage(this.Oa,this.Na,{mb:1,sb:50})};function rc(a){Yb.media.component.refresh();console.log("Code = "+a.responseCode);console.log("Response = "+a.response);console.log("Sent = "+a.bytesSent)}
function sc(a){alert("An error has occurred: Code = "+a.code);console.log("upload error source "+a.source);console.log("upload error target "+a.target)}l.h=function(){this.view.h();N(this.view.ja,"click",this.ka,!1,this);N(this.view.q,"click",this.p,!1,this);N(this.s.listMedia,"result",this.za);N(this.s.listMedia,"fault",this.ya)};var Zb="set_attribute";function tc(a,b,c){this.Ma=b;this.ha=c;G.call(this,a)}w(tc,G);function Z(a){this.P=a;M(this.P,Zb,this.fa,!1,this)}Z.prototype.fa=k();Z.prototype.c=k();Z.prototype.h=k();function uc(a){Z.call(this,a)}w(uc,Z);uc.prototype.c=function(){this.q=W("backbutton");this.cb=W("donebutton");this.Ja=W("accountform")};(function(a){var b={},c=a.Object,d=c.defineProperty,f=b.hasOwnProperty,e=c.preventExtensions||c.freeze||c.seal||k();b.value=1;try{if(!d||!d(b,"_",b).ib)throw"set";return function(a){var b={},c,g;for(g in a)if(f.call(a,g))c=a[g],c.enumerable=1,c.configurable=0,d(b,g,c);e(b);return b}}catch(g){return"__defineGetter__"in b?function(a){var b={},c,d;for(d in a)if(f.call(a,d))c=a[d],f.call(c,"value")?f.call(c,"writable")&&c.writable?b[d]=c.value:(b.__defineGetter__(d,function(a){return function(){return a}}(c.value)),
b.__defineSetter__(d,function(){throw"read-only";})):(f.call(c,"get")&&b.__defineGetter__(d,c.get),f.call(c,"set")&&b.__defineSetter__(d,c.set));e(b);return b}:(id=0,a.execScript("Function execVBScript(code)\nExecuteGlobal(code)\nEnd Function","VBScript"),function(b){var c="StaticObject"+id++,d=["Class "+c,"Private o"],e={},g,m;for(m in b)if(f.call(b,m))if(g=b[m],f.call(g,"value"))e[m]=g.value,d.push("Public Property Get "+m,m+"=o."+m,"End Property"),f.call(g,"writable")&&g.writable&&d.push("Public Property Let "+
m+"(value)","o."+m+"=value","End Property");else{if(f.call(g,"get"))e[m]=g.get,d.push("Public Property Get "+m,m+"=o."+m+"()","End Property");if(f.call(g,"set"))e[m]=g.set,d.push("Public Property Let "+m+"(value)","o."+m+"(value)","End Property")}d.push("Private Sub Class_Initialize()","Set o="+c+"JS()","End Sub","End Class","Function "+c+"Factory()","Dim o","Set o=New "+c,"Set "+c+"Factory=o","End Function");a[c+"JS"]=function(){a[c+"JS"]=i;return e};execVBScript(d.join("\n"));return a[c+"Factory"]()})}})(this);function $(){this.j={}}w($,O);function vc(a,b,c,d){var f={};a[b+"_"]=c==h?i:c;f.get=function(){var c="";return c=a[b+"_"]};f.set=function(c){d!="readonly"&&(a[b+"_"]=d!=h&&d!=i?d(c):c);c=f.get();if(a.j[b]!=c){var g=new tc(Zb,b,c);jb(a,g);a.j[b]=c}};return a[b]=f};function wc(){this.j={}}w(wc,$);function xc(){this.j={}}w(xc,$);var yc={K:function(a,b){var c=b||new V;c.append('\t<div class="container state_container" id="login"><form id="loginform"><p class="wp7">Email Address</p><input class="textfield" id="email" name="email" type="email" placeholder="Email Address"/><p class="wp7">Password</p><input class="textfield" id="password" name="password" type="password" placeholder="Password"/><input class="visuallyhidden" type="submit"/><p><div id="no_account_link">I don\'t have an account yet.</div></p></form></div>');if(!b)return c.toString()}};function zc(){this.j={}}w(zc,$);var Ac={K:function(a,b){var c=b||new V;c.append('<div class="container state_container"><div id="header"><div id="navbar"><div class="button" id="backbutton"><div><p>Log in</p></div></div></div><p id="pagetitle">Create your Gathering account</p></div> <\!-- Header ends --\><form id="accountform" class="maincontent"><p class="wp7">Email address</p><input class="textfield" id="email" name="email" type="email" placeholder="Email address"><br/><p class="wp7">Your full name</p><input class="textfield" id="name" name="name" type="text" placeholder="Your full name"><p class="infotext">Fellow event guests will identify you by this name.</p><p class="wp7">Password</p><input class="textfield" id="password" name="password" type="password" placeholder="Password"><br/><p class="wp7">Password (again)</p><input class="textfield" id="password" name="retypepassword" type="password" placeholder="Password (again)"><br/><input class="checkbox" id="tos" name="tos" type="checkbox"><label for="tos">I have read and agree to the <a href="tos.html">Gathering Terms of Service</a>.</label><hr class="clear" /><div id="donebuttonwrapper"><div class="button bigbutton" id="donebutton"></div><p class="buttonlabel">Submit</p></div></form><hr class="clear" /></div> <\!--! end of #container --\>');
if(!b)return c.toString()}};function Bc(a){Z.call(this,a);this.rb=W("player-container")}w(Bc,Z);Bc.prototype.c=function(){this.q=W("backbutton");this.Qa=W("eventlist")};function Cc(a,b){U.call(this,a,b);this.z=bc("Events")}w(Cc,U);l=Cc.prototype;l.c=function(){this.view.c();M(this.z.listEventsUsersIsInvited,"result",this.xa,!1,this);M(this.z.listEventsUsersIsInvited,"fault",this.wa,!1,this);this.z.listEventsUsersIsInvited.call({email:T.v.get().email});M(this.view.q,"click",this.p,!1,this)};
l.na=function(a){a:{var a=a.target,b=0;do{for(var c=0;c<this.n.length;c++)if(this.n[c].element==a){a=this.n[c].event;break a}a=a.parentNode;b++}while(a&&a!=document.body&&b<20);a=i}T.I.set(a);console.log(a);Y("media")};l.p=function(){Y("login")};
l.xa=function(a){console.log("ListEvents result>");console.log(a.data);Dc(this);for(var b=0;b<a.data.length;b++){var c=a.data[b],d;d=c;var f=new V;f.append('<li class="eventitem clearfix now"><div class="eventiteminfo"><h2>',X(d.name),"</h2><p>",X(d.La),'</p></div><div class="eventitembadge now"><p>Now</p></div></li>');d=f.toString();f=document.createElement("div");M(f,"click",this.na,!1,this);f.innerHTML=d;this.n.push({element:f,event:c});this.view.Qa.appendChild(f)}};
l.wa=function(a){console.log("ListEvents fault>");console.log(a.data)};function Dc(a){if(typeof a.n!="undefined")for(var b=0;b<a.n.length;b++)N(a.n[b].element,"click",a.na);a.n=[]}l.h=function(){this.view.h();Dc(this);N(this.view.q,"click",this.p,!1,this);N(this.z.listEventsUsersIsInvited,"result",this.xa);N(this.z.listEventsUsersIsInvited,"fault",this.wa)};function Ec(){this.j={};var a=this;this.state=vc(this,"state","login",function(b){a.Ya.set(a.state.get());return b});this.v=vc(this,"user",{},i);this.I=vc(this,"currentEvent",{},i);this.Ya=vc(this,"prevState",i,i)}w(Ec,$);function Fc(a){for(var b=[],c=Gc,d=a.elements,f,e=0;f=d[e];e++)if(!(f.disabled||f.tagName.toLowerCase()=="fieldset")){var g=f.name;switch(f.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":f=Hc(f);if(f!=i)for(var j,o=0;j=f[o];o++)c(b,g,j);break;default:j=Hc(f),j!=i&&c(b,g,j)}}d=a.getElementsByTagName("input");for(e=0;f=d[e];e++)if(f.form==a&&f.type.toLowerCase()=="image")g=f.name,c(b,g,f.value),c(b,g+".x","0"),c(b,g+".y","0");return b.join("&")}
function Gc(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}function Hc(a){var b=a.type;if(b===h)return i;switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:i;case "select-one":return b=a.selectedIndex,b>=0?a.options[b].value:i;case "select-multiple":for(var b=[],c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:i;default:return a.value!==h?a.value:i}};function Ic(a,b){U.call(this,a,b);this.g=bc("Auth")}w(Ic,U);l=Ic.prototype;l.c=function(){this.view.c();var a=this;this.view.ua.onsubmit=function(b){b.preventDefault();return a.T(b)};M(this.view.bb,"click",this.ab,!1,this);M(this.g.login,"result",this.Ba,!1,this);M(this.g.login,"fault",this.Aa,!1,this)};l.ab=function(){Y("signup")};l.T=function(){this.g.login.call(Fc(this.view.ua));return!1};l.Ba=function(a){console.log("Login result>");console.log(a.data);T.v.set(a.data.result);Y("events")};
l.Aa=function(a){console.log("Login fault>");console.log(a.data)};l.h=function(){this.view.h();N(this.g.login,"result",this.Ba);N(this.g.login,"fault",this.Aa)};function Jc(a,b){U.call(this,a,b);this.g=bc("Auth")}w(Jc,U);l=Jc.prototype;l.c=function(){this.view.c();var a=this;this.view.Ja.onsubmit=function(b){b.preventDefault();return a.T(b)};M(this.g.signup,"result",this.Ea,!1,this);M(this.g.signup,"fault",this.Da,!1,this);M(this.view.cb,"click",this.eb,!1,this);M(this.view.q,"click",this.p,!1,this)};l.p=function(){Y("login")};l.eb=function(){this.T()};l.T=function(){this.g.signup.call(Fc(this.view.Ja));return!1};
l.Ea=function(a){console.log("Signup result>");console.log(a.data);T.v.set(a.data.result);Y("events")};l.Da=function(a){console.log("Signup fault>");console.log(a.data)};l.h=function(){this.view.h();N(this.g.signup,"result",this.Ea);N(this.g.signup,"fault",this.Da)};var Kc={K:function(a,b){var c=b||new V;c.append('<div class="container state_container"><div id="noscroll"><div id="header"><div id="navbar"><div class="button" id="backbutton"><div><p>Events</p></div></div></div><p id="pagetitle">',X(a.event.name),'</p></div> <\!-- Header ends --\><div id="sidebar"><div id="camerabuttonwrapper"><p class="buttonlabel">Camera</p><div class="button bigbutton" id="camerabutton">&nbsp;</div></div></div></div><ul id="photolist" class="maincontent"></ul></div> <\!--! end of #container --\>');
if(!b)return c.toString()}};function Lc(a){Z.call(this,a)}w(Lc,Z);Lc.prototype.c=function(){this.bb=W("no_account_link");this.ua=W("loginform");this.kb=W("email");this.qb=W("password")};var Mc={K:function(a,b){var c=b||new V;c.append('<div class="container state_container"><div id="header"><div id="navbar"><div class="button" id="backbutton"><div><p>Log out</p></div></div></div><p id="pagetitle">All events for ',X(a.v.name),'</p></div> <\!-- Header ends --\><ul id="eventlist" class="maincontent"></ul></div> <\!--! end of #container --\>');if(!b)return c.toString()}};function Nc(){this.j={}}w(Nc,$);function Oc(a){Z.call(this,a)}w(Oc,Z);Oc.prototype.c=function(){this.q=W("backbutton");this.R=W("photolist");this.ja=W("camerabuttonwrapper")};function Y(a){T.state.set(a)}function Pc(a){var d;if(a.Ma=="state"){console.log("state has changed!");var b;b=document;var c=i;(d=(c=gc(b)?b.querySelector(".state_container"):fc()[0])||i,b=d)&&b&&b.parentNode&&b.parentNode.removeChild(b);typeof kb!="undefined"&&kb.h();b=Yb[a.ha].template;c={v:T.v.get(),event:T.I.get()};b=b.K(c);c=document.createElement("div");c.innerHTML=b;document.body.appendChild(c);kb=Yb[a.ha].component;kb.c()}}
window.gthrng_main=function(a){T=new Ec;Xb=new ac(a.services);M(T,Zb,Pc);var a=new Ic(wc,Lc),b=new Jc(zc,uc),c=new Cc(Nc,Bc),d=new qc(xc,Oc);Yb={login:{template:yc,component:a},signup:{template:Ac,component:b},events:{template:Mc,component:c},media:{template:Kc,component:d}};Y("login")};window.gthrng_setCurrentState=Y;