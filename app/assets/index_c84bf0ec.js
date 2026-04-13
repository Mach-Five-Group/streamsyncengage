(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Me="modulepreload",xe=function(e){return"/"+e},ue={},F=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){let S=function(g){return Promise.all(g.map(E=>Promise.resolve(E).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),p=c?.nonce||c?.getAttribute("nonce");r=S(n.map(g=>{if(g=xe(g),g in ue)return;ue[g]=!0;const E=g.endsWith(".css"),R=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${R}`))return;const y=document.createElement("link");if(y.rel=E?"stylesheet":Me,E||(y.as="script"),y.crossOrigin="",y.href=g,p&&y.setAttribute("nonce",p),document.head.appendChild(y),E)return new Promise((w,k)=>{y.addEventListener("load",w),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${g}`)))})}))}function s(c){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=c,window.dispatchEvent(p),!p.defaultPrevented)throw c}return r.then(c=>{for(const p of c||[])p.status==="rejected"&&s(p.reason);return t().catch(s)})};var Ve=/([:*])(\w+)/g,$e="([^/]+)",je=/\*/g,ze="?(?:.*)",qe=/\/\?/g,Ye="/?([^/]+|)",Ke="(?:/^|^)",We="";function ye(e){return e===void 0&&(e="/"),re()?location.pathname+location.search+location.hash:e}function A(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function q(e){return typeof e=="string"}function Xe(e){return typeof e=="function"}function Y(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Je(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,o,r){return n===null&&(n={}),n[t[r]]=decodeURIComponent(o),n},null)}function K(e){var t=A(e).split(/\?(.*)?$/);return[A(t[0]),t.slice(1).join("")]}function oe(e){for(var t={},n=e.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(r[0]!==""){var s=decodeURIComponent(r[0]);t[s]?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(decodeURIComponent(r[1]||""))):t[s]=decodeURIComponent(r[1]||"")}}return t}function Te(e,t){var n=K(A(e.currentLocationPath)),o=n[0],r=n[1],s=r===""?null:oe(r),c=[],p;if(q(t.path)){if(p=Ke+A(t.path).replace(Ve,function(R,y,w){return c.push(w),$e}).replace(je,ze).replace(qe,Ye)+"$",A(t.path)===""&&A(o)==="")return{url:o,queryString:r,hashString:Y(e.to),route:t,data:null,params:s}}else p=t.path;var S=new RegExp(p,We),g=o.match(S);if(g){var E=q(t.path)?Je(g,c):g.groups?g.groups:g.slice(1);return{url:A(o.replace(new RegExp("^"+e.instance.root),"")),queryString:r,hashString:Y(e.to),route:t,data:E,params:s}}return!1}function be(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function H(e,t){return typeof e[t]>"u"||e[t]===!0}function Ze(e){if(!e)return{};var t=e.split(","),n={},o;return t.forEach(function(r){var s=r.split(":").map(function(c){return c.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":n.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":o||(o={}),o.strategy=s[1];break;case"resolveOptionsHash":o||(o={}),o.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[s[0]]=s[1]==="true";break}}),o&&(n.resolveOptions=o),n}function re(){return typeof window<"u"}function Qe(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(o){n[o]&&(t[o]||(t[o]=[]),t[o].push(n[o]))})}),t}function L(e,t,n){var o=t||{},r=0;(function s(){if(!e[r]){n&&n(o);return}Array.isArray(e[r])?(e.splice.apply(e,[r,1].concat(e[r][0](o)?e[r][1]:e[r][2])),s()):e[r](o,function(c){typeof c>"u"||c===!0?(r+=1,s()):n&&n(o)})})()}L.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function de(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=ye(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function J(e,t){for(var n=0;n<e.instance.routes.length;n++){var o=e.instance.routes[n],r=Te(e,o);if(r&&(e.matches||(e.matches=[]),e.matches.push(r),e.resolveOptions.strategy==="ONE")){t();return}}t()}function et(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function tt(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var pe=re(),nt=be();function ot(e,t){if(H(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),o=pe&&e.resolveOptions&&e.resolveOptions.hash===!0;nt?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!o){var r=location.hash;location.hash="",location.hash=r}e.instance.__freezeListening=!1},1))):pe&&(window.location.href=e.to)}t()}function Re(e,t){var n=e.instance;if(!n.lastResolved()){t();return}L(n.lastResolved().map(function(o){return function(r,s){if(!o.route.hooks||!o.route.hooks.leave){s();return}var c=!1,p=e.instance.matchLocation(o.route.path,e.currentLocationPath,!1);if(o.route.path!=="*")c=!p;else{var S=e.matches?e.matches.find(function(g){return o.route.path===g.route.path}):!1;c=!S}if(H(e.navigateOptions,"callHooks")&&c){L(o.route.hooks.leave.map(function(g){return function(E,R){return g(function(y){y===!1?e.instance.__markAsClean(e):R()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return t()})}function rt(e,t){e.match.route.hooks&&e.match.route.hooks.before&&H(e.navigateOptions,"callHooks")?L(e.match.route.hooks.before.map(function(n){return function(r,s){return n(function(c){c===!1?e.instance.__markAsClean(e):s()},e.match)}}).concat([function(){return t()}])):t()}function st(e,t){H(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function it(e,t){e.match.route.hooks&&e.match.route.hooks.after&&H(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function at(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(o){o.route.hooks&&o.route.hooks.already&&H(e.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(r){return r(e.match)})}),t(!1);return}t()}function lt(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var o=K(e.currentLocationPath),r=o[0],s=o[1],c=Y(e.to);n.path=A(r);var p={url:n.path,queryString:s,hashString:c,data:null,route:n,params:s!==""?oe(s):null};e.matches=[p],e.match=p}t()}function ct(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function ut(e,t){e.instance._setCurrent(null),t()}function Ie(e,t){H(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var Oe=[at,rt,st,it],he=[Re,lt,L.if(function(e){var t=e.notFoundHandled;return t},Oe.concat([Ie]),[ct,ut])];function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},te.apply(this,arguments)}function fe(e,t){var n=0;function o(){if(n===e.matches.length){Ie(e,t);return}L(Oe,te({},e,{match:e.matches[n]}),function(){n+=1,o()})}Re(e,o)}function Z(e){e.instance.__markAsClean(e)}function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ne.apply(this,arguments)}var ge="[data-navigo]";function dt(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:ge},o=this,r="/",s=null,c=[],p=!1,S,g=be(),E=re();e?r=A(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function R(i){return i.indexOf("#")>=0&&(n.hash===!0?i=i.split("#")[1]||"/":i=i.split("#")[0]),i}function y(i){return A(r+"/"+A(i))}function w(i,d,m,v){return i=q(i)?y(i):i,{name:v||A(String(i)),path:i,handler:d,hooks:Qe(m)}}function k(i,d,m){var v=this;return typeof i=="object"&&!(i instanceof RegExp)?(Object.keys(i).forEach(function(_){if(typeof i[_]=="function")v.on(_,i[_]);else{var P=i[_],$=P.uses,De=P.as,Be=P.hooks;c.push(w(_,$,[S,Be],De))}}),this):(typeof i=="function"&&(m=d,d=i,i=r),c.push(w(i,d,[S,m])),this)}function u(i,d){if(o.__dirty){o.__waiting.push(function(){return o.resolve(i,d)});return}else o.__dirty=!0;i=i?A(r)+"/"+A(i):void 0;var m={instance:o,to:i,currentLocationPath:i,navigateOptions:{},resolveOptions:ne({},n,d)};return L([de,J,L.if(function(v){var _=v.matches;return _&&_.length>0},fe,he)],m,Z),m.matches?m.matches:!1}function h(i,d){if(o.__dirty){o.__waiting.push(function(){return o.navigate(i,d)});return}else o.__dirty=!0;i=A(r)+"/"+A(i);var m={instance:o,to:i,navigateOptions:d||{},resolveOptions:d&&d.resolveOptions?d.resolveOptions:n,currentLocationPath:R(i)};L([et,tt,J,L.if(function(v){var _=v.matches;return _&&_.length>0},fe,he),ot,Z],m,Z)}function f(i,d,m){var v=ae(i,d);return v!==null?(h(v.replace(new RegExp("^/?"+r),""),m),!0):!1}function T(i){return this.routes=c=c.filter(function(d){return q(i)?A(d.path)!==A(i):Xe(i)?i!==d.handler:String(d.path)!==String(i)}),this}function b(){g&&(this.__popstateListener=function(){o.__freezeListening||u()},window.addEventListener("popstate",this.__popstateListener))}function I(){this.routes=c=[],g&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=p=!0}function C(i,d){return o._notFoundRoute=w("*",i,[S,d],"__NOT_FOUND__"),this}function U(){if(E)return G().forEach(function(i){if(i.getAttribute("data-navigo")==="false"||i.getAttribute("target")==="_blank"){i.hasListenerAttached&&i.removeEventListener("click",i.navigoHandler);return}i.hasListenerAttached||(i.hasListenerAttached=!0,i.navigoHandler=function(d){if((d.ctrlKey||d.metaKey)&&d.target.tagName.toLowerCase()==="a")return!1;var m=i.getAttribute("href");if(typeof m>"u"||m===null)return!1;if(m.match(/^(http|https)/)&&typeof URL<"u")try{var v=new URL(m);m=v.pathname+v.search}catch{}var _=Ze(i.getAttribute("data-navigo-options"));p||(d.preventDefault(),d.stopPropagation(),o.navigate(A(m),_))},i.addEventListener("click",i.navigoHandler))}),o}function G(){return E?[].slice.call(document.querySelectorAll(n.linksSelector||ge)):[]}function X(i){return"/"+r+"/"+A(i)}function V(i){return S=i,this}function Le(){return s}function ae(i,d,m){var v=c.find(function($){return $.name===i}),_=null;if(v){if(_=v.path,d)for(var P in d)_=_.replace(":"+P,d[P]);_=_.match(/^\//)?_:"/"+_}return _&&m&&!m.includeRoot&&(_=_.replace(new RegExp("^/"+r),"")),_}function Ce(i){return i.getAttribute("href")}function le(i){var d=K(A(i)),m=d[0],v=d[1],_=v===""?null:oe(v),P=Y(i),$=w(m,function(){},[S],m);return{url:m,queryString:v,hashString:P,route:$,data:null,params:_}}function Fe(){return le(A(ye(r)).replace(new RegExp("^"+r),""))}function ke(i){var d={instance:o,currentLocationPath:i,to:i,resolveOptions:n};return J(d,function(){}),d.matches?d.matches:!1}function He(i,d,m){typeof d<"u"&&(typeof m>"u"||m)&&(d=y(d));var v={instance:o,to:d,currentLocationPath:d};de(v,function(){}),typeof i=="string"&&(i=typeof m>"u"||m?y(i):i);var _=Te(v,{name:String(i),path:i,handler:function(){},hooks:{}});return _||!1}function z(i,d,m){return typeof d=="string"&&(d=ce(d)),d?(d.hooks[i]||(d.hooks[i]=[]),d.hooks[i].push(m),function(){d.hooks[i]=d.hooks[i].filter(function(v){return v!==m})}):(console.warn("Route doesn't exists: "+d),function(){})}function ce(i){return typeof i=="string"?c.find(function(d){return d.name===y(i)}):c.find(function(d){return d.handler===i})}function Ge(i){i.instance.__dirty=!1,i.instance.__waiting.length>0&&i.instance.__waiting.shift()()}this.root=r,this.routes=c,this.destroyed=p,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Ge,this.on=k,this.off=T,this.resolve=u,this.navigate=h,this.navigateByName=f,this.destroy=I,this.notFound=C,this.updatePageLinks=U,this.link=X,this.hooks=V,this.extractGETParameters=function(i){return K(R(i))},this.lastResolved=Le,this.generate=ae,this.getLinkPath=Ce,this.match=ke,this.matchLocation=He,this.getCurrentLocation=Fe,this.addBeforeHook=z.bind(this,"before"),this.addAfterHook=z.bind(this,"after"),this.addAlreadyHook=z.bind(this,"already"),this.addLeaveHook=z.bind(this,"leave"),this.getRoute=ce,this._pathToMatchObject=le,this._clean=A,this._checkForAHash=R,this._setCurrent=function(i){return s=o.current=i},b.call(this),U.call(this)}var pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ht(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j={exports:{}},ft=j.exports,me;function gt(){return me||(me=1,(function(e,t){(function(n,o){var r={};n.PubSub?(r=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=r,o(r)),e!==void 0&&e.exports&&(t=e.exports=r),t.PubSub=r,e.exports=t=r})(typeof window=="object"&&window||ft||pt,function(n){var o={},r=-1,s="*";function c(u){var h;for(h in u)if(Object.prototype.hasOwnProperty.call(u,h))return!0;return!1}function p(u){return function(){throw u}}function S(u,h,f){try{u(h,f)}catch(T){setTimeout(p(T),0)}}function g(u,h,f){u(h,f)}function E(u,h,f,T){var b=o[h],I=T?g:S,C;if(Object.prototype.hasOwnProperty.call(o,h))for(C in b)Object.prototype.hasOwnProperty.call(b,C)&&I(b[C],u,f)}function R(u,h,f){return function(){var b=String(u),I=b.lastIndexOf(".");for(E(u,u,h,f);I!==-1;)b=b.substr(0,I),I=b.lastIndexOf("."),E(u,b,h,f);E(u,s,h,f)}}function y(u){var h=String(u),f=!!(Object.prototype.hasOwnProperty.call(o,h)&&c(o[h]));return f}function w(u){for(var h=String(u),f=y(h)||y(s),T=h.lastIndexOf(".");!f&&T!==-1;)h=h.substr(0,T),T=h.lastIndexOf("."),f=y(h);return f}function k(u,h,f,T){u=typeof u=="symbol"?u.toString():u;var b=R(u,h,T),I=w(u);return I?(f===!0?b():setTimeout(b,0),!0):!1}n.publish=function(u,h){return k(u,h,!1,n.immediateExceptions)},n.publishSync=function(u,h){return k(u,h,!0,n.immediateExceptions)},n.subscribe=function(u,h){if(typeof h!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(o,u)||(o[u]={});var f="uid_"+String(++r);return o[u][f]=h,f},n.subscribeAll=function(u){return n.subscribe(s,u)},n.subscribeOnce=function(u,h){var f=n.subscribe(u,function(){n.unsubscribe(f),h.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){o={}},n.clearSubscriptions=function(h){var f;for(f in o)Object.prototype.hasOwnProperty.call(o,f)&&f.indexOf(h)===0&&delete o[f]},n.countSubscriptions=function(h){var f,T,b=0;for(f in o)if(Object.prototype.hasOwnProperty.call(o,f)&&f.indexOf(h)===0){for(T in o[f])b++;break}return b},n.getSubscriptions=function(h){var f,T=[];for(f in o)Object.prototype.hasOwnProperty.call(o,f)&&f.indexOf(h)===0&&T.push(f);return T},n.unsubscribe=function(u){var h=function(X){var V;for(V in o)if(Object.prototype.hasOwnProperty.call(o,V)&&V.indexOf(X)===0)return!0;return!1},f=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(o,u)||h(u)),T=!f&&typeof u=="string",b=typeof u=="function",I=!1,C,U,G;if(f){n.clearSubscriptions(u);return}for(C in o)if(Object.prototype.hasOwnProperty.call(o,C)){if(U=o[C],T&&U[u]){delete U[u],I=u;break}if(b)for(G in U)Object.prototype.hasOwnProperty.call(U,G)&&U[G]===u&&(delete U[G],I=!0)}return I}})})(j,j.exports)),j.exports}var mt=gt();const a=ht(mt),l=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",WC_APP_PRIMARY_NAV_LOGO:"WC.APP.PRIMARY_NAV.LOGO",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR"}),Q={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var ee={};const B=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure"});function we(e,t=null){if(e in B)return B[e];if(typeof process<"u"&&ee&&ee[e]){const n=ee[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&Q&&Q[e]){const n=Q[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return t}function _t(e){return we(e,!1)===!0}function Et(){return{...B}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:B,getFlag:we,isEnabled:_t,getAllFlags:Et});function vt(){console.log("[AppEvents] Initializing event listeners..."),a.subscribe(l.APP_READY,(e,t)=>{console.log("[AppEvents] APP_READY:",t)}),a.subscribe(l.APP_ERROR,(e,t)=>{console.error("[AppEvents] APP_ERROR:",t)}),a.subscribe(l.APP_SIGNOUT,(e,t)=>{console.log("[AppEvents] APP_SIGNOUT:",t)}),a.subscribe(l.ROUTE_NAV_BEFORE,(e,t)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",t),a.publish(l.UI_LOADING_START)}),a.subscribe(l.ROUTE_NAV_AFTER,(e,t)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",t),a.publish(l.UI_LOADING_END)}),a.subscribe(l.ROUTE_NAV_ERROR,(e,t)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",t),a.publish(l.APP_ERROR,{message:"Navigation error",details:t})}),a.subscribe(l.AUTH_SIGNIN_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",t)}),a.subscribe(l.AUTH_SIGNIN_FAIL,(e,t)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",t),a.publish(l.UI_TOAST,{message:t.message||"Sign in failed",type:"danger"})}),a.subscribe(l.AUTH_SIGNUP_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),a.publish(l.AUTH_VERIFY_LINK)}),a.subscribe(l.AUTH_VERIFY_LINK,(e,t)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),a.subscribe(l.AUTH_SIGNUP_FAIL,(e,t)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",t),a.publish(l.UI_TOAST,{message:t.message||"Sign up failed",type:"danger"})}),a.subscribe(l.AUTH_SIGNOUT_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Signed out successfully",type:"info"})}),a.subscribe(l.AUTH_SIGNUP,(e,t)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),a.subscribe(l.AUTH_FORGOT,(e,t)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),a.subscribe(l.AUTH_FORGOT_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),a.subscribe(l.AUTH_RESETHASH_NAV,(e,t)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),a.subscribe(l.AUTH_RESETHASH_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),a.subscribe(l.AUTH_TOKEN_EXPIRED,(e,t)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",t),a.publish(l.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),a.subscribe(l.UI_LOADING_START,(e,t)=>{const n=document.getElementById("app-loader");n&&n.classList.add("active")}),a.subscribe(l.UI_LOADING_END,(e,t)=>{const n=document.getElementById("app-loader");n&&n.classList.remove("active")}),a.subscribe(l.UI_TOAST,(e,t)=>{console.log("[AppEvents] UI_TOAST:",t)}),a.subscribe(l.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const e="0.1",t=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${e} 4/13/2026, 1:59:54 PM|© ${t} Mach Five Tech`,"night")}),a.subscribe(l.WC_APP_PRIMARY_NAV_LOGO,(e,t)=>{console.log("[AppEvents] WC_APP_PRIMARY_NAV_LOGO clicked:",t);const n="0.1",o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${n} 4/13/2026, 1:59:54 PM|© ${o} Mach Five Tech`,"night",5e3)}),a.subscribe(l.AUTH_SIGNOUT,(e,t)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(B.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}class N{static CONFIG={BASE_URL:window.location.hostname==="localhost"?"http://localhost:3333":"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#i=!1;static#e=null;static#t=null;static#n=null;static#r=null;static async init({BASE_URL:t,navigateFunction:n,customConfig:o={}}={}){if(this.#i)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#r=n;else throw new Error("navigateFunction is required and must be a function");return t&&(this.CONFIG.BASE_URL=t),o&&Object.keys(o).length>0&&(this.CONFIG={...this.CONFIG,...o}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#d(),this.#u(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#a(),this.#i=!0,console.log("[AuthController] Initialized successfully"),!0}catch(r){return console.error("[AuthController] Initialization failed:",r),!1}}static#u(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((t=null)=>{t&&(console.log("[AuthController] mvvLegit navigation to:",t),this.#o(t))}).setOnState((t=null)=>{if(t)switch(console.log("[AuthController] Auth state changed:",t),t){case"AUTH":case 4:this.#h();break;case"UNAUTH":case 1:this.#f();break;case"UNVERF":case 2:this.#g();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#o(t){if(!this.#r){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",t);const n=t.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#r(n)}static#d(){try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);t&&(this.#t=JSON.parse(t),console.log("[AuthController] Entity state loaded:",this.#t?.email))}catch(t){console.error("[AuthController] Error loading entity state:",t),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#t=null}this.#n=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#s(t){try{this.#t=t,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(t)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#p(){this.#t=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#t}static async doSignin(t,n){try{const o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n})}),r=await o.json();return o.status===303?(console.warn("[AuthController] Password reset required"),r.accessToken&&(mvvLegit.doSignin(r.accessToken),this.#s(r.entity)),setTimeout(()=>{this.#o(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:r}):o.ok&&r.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(r.accessToken),this.#s(r.entity),console.log("[AuthController] Explicitly navigating to home"),this.#o(this.CONFIG.ROUTES.HOME),{ok:!0,data:r}):{ok:!1,error:r.error||"Sign in failed",data:r}}catch(o){return console.error("[AuthController] Signin error:",o),{ok:!1,error:o.message}}}static async doSignout(t=!1){console.log("[AuthController] doSignout called, serverInitiated:",t);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!t&&n){const o=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",o),navigator.sendBeacon){const r=navigator.sendBeacon(o);console.log("[AuthController] Beacon sent:",r),r||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#p(),console.log("[AuthController] Stopping auth ping..."),this.#l(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(t){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),o=await n.json();return n.ok&&o.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#s(o.entity),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign up failed",data:o}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(t,n){try{const o=mvvLegit.getConf()?.token,r=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n,modified_by:t})}),s=await r.json();return r.ok&&s.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:s}):{ok:!1,error:s.error||"Password reset failed",data:s}}catch(o){return console.error("[AuthController] Reset password error:",o),{ok:!1,error:o.message}}}static#a(){this.#e&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#e)),this.#e=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#c()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#e}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#l(){this.#e&&(clearInterval(this.#e),this.#e=null,console.log("[AuthController] Auth ping stopped"))}static async#c(){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);t.ok?console.log("[AuthController] Ping success"):(t.status===401||t.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(t){console.error("[AuthController] Ping error:",t)}}static setDeepLinkGuid(t){this.#n=t,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,t),console.log("[AuthController] Deep-link GUID stored:",t)}static getDeepLinkGuid(){return this.#n}static clearDeepLink(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#h(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#a()}static#f(){console.log("[AuthController] User unauthenticated"),this.#l()}static#g(){console.log("[AuthController] User unverified")}static getAuthState(){try{const t=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(t);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const o=LZString.decompressFromUTF16(n),s=JSON.parse(o)?.state;return s===1?"UNAUTH":s===2?"UNVERF":s===4?"AUTH":s===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(t){this.#o(t)}static isPingActive(){return this.#e!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#c()}}window.m5t=Object.create(null);window.m5t.pubsub=a;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(e){console.log("mvvLegit (direct): ReferenceError -",e.message)}const St=Object.keys(window).filter(e=>e.toLowerCase().includes("mvv")||e.toLowerCase().includes("neodigm")||e.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",St);const O=new dt("/",{hash:!0});window.router=O;function se(e){const t=e?`${e.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),a.publish(l.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function x(e){console.log("[Router] Navigating to:",e),O.navigate(`/${e}`)}O.on("/",()=>{console.log("[Router] Route: /"),a.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),F(()=>Promise.resolve().then(()=>Ne),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:e})})});O.on("/splash",()=>{console.log("[Router] Route: /splash"),a.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),F(()=>Promise.resolve().then(()=>Ne),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:e})})});O.on("/signin",()=>{console.log("[Router] Route: /signin"),a.publish(l.ROUTE_NAV_BEFORE,{route:"signin"}),F(()=>Promise.resolve().then(()=>Nt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"signin"})}).catch(e=>{console.error("[Router] Error loading signin route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"signin",error:e})})});O.on("/signup",()=>{console.log("[Router] Route: /signup"),a.publish(l.ROUTE_NAV_BEFORE,{route:"signup"}),F(()=>Promise.resolve().then(()=>kt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"signup"})}).catch(e=>{console.error("[Router] Error loading signup route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"signup",error:e})})});O.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),a.publish(l.ROUTE_NAV_BEFORE,{route:"verf-link"}),F(()=>Promise.resolve().then(()=>Dt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(e=>{console.error("[Router] Error loading verf-link route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"verf-link",error:e})})});O.on("/forgot",()=>{console.log("[Router] Route: /forgot"),a.publish(l.ROUTE_NAV_BEFORE,{route:"forgot"}),F(()=>Promise.resolve().then(()=>qt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(e=>{console.error("[Router] Error loading forgot route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"forgot",error:e})})});O.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!se("resethash")){x("signin");return}a.publish(l.ROUTE_NAV_BEFORE,{route:"resethash"}),F(()=>Promise.resolve().then(()=>Wt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(e=>{console.error("[Router] Error loading resethash route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"resethash",error:e})})});O.on("/home",()=>{if(console.log("[Router] Route: /home"),!se("home")){x("signin");return}a.publish(l.ROUTE_NAV_BEFORE,{route:"home"}),F(()=>Promise.resolve().then(()=>Qt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"home"})}).catch(e=>{console.error("[Router] Error loading home route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"home",error:e})})});O.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!se("signout")){x("signin");return}a.publish(l.ROUTE_NAV_BEFORE,{route:"signout"}),F(()=>Promise.resolve().then(()=>nn),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"signout"})}).catch(e=>{console.error("[Router] Error loading signout route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"signout",error:e})})});O.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),x("splash")});a.subscribe(l.ROUTE_NAV,(e,t)=>{console.log("[Router] ROUTE_NAV event received:",t),t?.route&&x(t.route)});function _e(){console.log("[App] Waiting for Neodigm 55 library...");let e=0;const t=100,n=setInterval(()=>{e++,e%10===0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(n),At()):e>=t&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,a.publish(l.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_e):_e();async function At(){if(console.log("[App] Neodigm 55 loaded, initializing..."),vt(),!await N.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),x(n)}})){console.error("[App] AuthController initialization failed");return}const t=N.getEntity();t&&(console.log("[App] Session restored for:",t.email),a.publish(l.APP_USER_LOADED,{entity:t})),a.publish(l.APP_READY,{timestamp:new Date().toISOString(),sessionUser:t}),O.resolve(),window.AuthController=N,console.log("[App] StreamSyncEngage client initialized (AuthController available globally)")}function yt(){return`
    <div class="splash-container">
      <div class="splash-content">
        <h1>StreamSyncEngage</h1>
        <p class="tagline">Real-time messaging and account management platform</p>

        <div class="splash-loader" id="splash-loader">
          <div class="spinner"></div>
          <p class="loading-text">Loading...</p>
        </div>

        <div class="splash-actions" id="splash-actions" style="display: none;">
          <button class="btn btn-primary" data-route="signin">
            Sign In
          </button>
          <button class="btn btn-secondary" data-route="signup">
            Sign Up
          </button>
        </div>
      </div>
    </div>

    <style>
      .splash-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 20px;
      }

      .splash-content {
        text-align: center;
        color: white;
        max-width: 500px;
      }

      .splash-content h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 700;
      }

      .tagline {
        font-size: 1.2rem;
        margin-bottom: 3rem;
        opacity: 0.9;
      }

      .splash-loader {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
      }

      .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .loading-text {
        font-size: 1rem;
        opacity: 0.8;
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }

      .splash-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
      }

      .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .btn-primary {
        background: white;
        color: #667eea;
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
      }

      .btn-secondary {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
      }

      .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
      }
    </style>
  `}function Tt(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const e=localStorage.getItem(B.FF_SSE_LS_TOKEN),t=localStorage.getItem("mvv_ts"),n=N.isAuthenticated(),o=document.getElementById("splash-loader"),r=document.getElementById("splash-actions");n&&e?(console.log("[SplashRoute] Authenticated user detected → HOME"),a.publish(l.ROUTE_NAV,{route:"home"})):t?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),a.publish(l.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),o&&(o.style.display="none"),r&&(r.style.display="flex"),document.querySelectorAll("[data-route]").forEach(c=>{c.addEventListener("click",()=>{const p=c.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${p}`),a.publish(l.ROUTE_NAV,{route:p})})}))},3600)}const Ne=Object.freeze(Object.defineProperty({__proto__:null,init:Tt,render:yt},Symbol.toStringTag,{value:"Module"}));function ie(e){return e=String(e),Math.abs(e.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0))}function bt(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Welcome Back</h1>
        <p>Sign in to continue</p>

        <div class="auth-content">
          <form id="loginForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email">EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="password">PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autocomplete="current-password"
                />
                <button type="button" id="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-footer">
              <a href="#/forgot" class="link-brand--uc__underline">FORGOT PASSWORD</a>
            </div>

            <button type="submit" class="btn">SIGN IN</button>
          </form>

          <p class="auth-switch">
            Start your free account &nbsp;  <a class="link-brand--uc__underline" href="#/signup">SIGN UP</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <div class="h-display__portrait--none">
            <br><br>
          </div>
          <h5 class="auth-hero-title">
            Stream Sync Engage is a delightful and easy way to send targeted instant messages to your app users. 
          </h5>
          <p class="auth-hero-description">
            You can easily send custom designed notifications, in-app surveys, product tours, voice mail, and slideshows. 
          </p>
        </div>
      </div>
    </div>
  `}function Rt(){console.log("[SigninRoute] Initialized");const e=document.getElementById("loginForm"),t=document.getElementById("email"),n=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const s=n.type==="password"?"text":"password";n.type=s}),e?.addEventListener("submit",async s=>{s.preventDefault();const c=t.value.trim(),p=n.value;It(c,t)&&Ot(p,n)&&await wt(c,p)}),document.getElementById("link--uc__underline")?.addEventListener("click",s=>{s.preventDefault(),a.publish(l.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",s=>{s.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),a.publish(l.ROUTE_NAV,{route:"signup"})})}function It(e,t){if(!e)return W(t,"Please enter your email"),!1;const n=(e.match(/@/g)||[]).length,o=(e.match(/\./g)||[]).length;return n!==1||o<1?(W(t,"Please enter a valid email address"),!1):!0}function Ot(e,t){return e?e.length<10?(W(t,"Password must be at least 10 characters"),!1):!0:(W(t,"Please enter your password"),!1)}function W(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function wt(e,t){const n=document.querySelector(".btn");n.disabled=!0,n.textContent="SIGNING IN...";try{const o=ie(t),r=await N.doSignin(e,o);r.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q("Welcome back!","success"),a.publish(l.AUTH_SIGNIN_SUCCESS,{entity:N.getEntity()})):r.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q("Password reset required - redirecting...","warning")):(typeof neodigmToast<"u"&&neodigmToast.q(r.error||"Sign in failed","danger"),n.disabled=!1,n.textContent="SIGN IN")}catch(o){console.error("[SigninRoute] Sign in error:",o),typeof neodigmToast<"u"&&neodigmToast.q(o.message||"Network error - please try again","danger"),n.disabled=!1,n.textContent="SIGN IN",a.publish(l.AUTH_SIGNIN_FAIL,{message:o.message})}}const Nt=Object.freeze(Object.defineProperty({__proto__:null,init:Rt,render:bt},Symbol.toStringTag,{value:"Module"}));function Ue(e){const t=[];return e.length<10&&t.push("at least 10 characters"),/[a-z]/.test(e)||t.push("1 lowercase"),/[A-Z]/.test(e)||t.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push("1 special character"),/[^\x00-\x7F]/.test(e)&&t.push("ASCII characters only"),t}function Pe(e){return e.length===0?"":e.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":e.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function Ut(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Create Account</h1>
        <p>Join StreamSyncEngage</p>

        <div class="auth-content">
          <form id="signupForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="first">FIRST NAME</label>
              <input
                type="text"
                id="first"
                name="first"
                placeholder="Enter your first name"
                autocomplete="given-name"
              />
            </div>

            <div class="form-group">
              <label for="last">LAST NAME</label>
              <input
                type="text"
                id="last"
                name="last"
                placeholder="Enter your last name"
                autocomplete="family-name"
              />
            </div>

            <div class="form-group">
              <label for="email">EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="company">COMPANY (OPTIONAL)</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                autocomplete="organization"
              />
            </div>

            <div class="form-group">
              <label for="phone">PHONE (OPTIONAL)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                autocomplete="tel"
              />
            </div>

            <div class="form-group">
              <label for="password">PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autocomplete="new-password"
                />
                <button type="button" id="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="confirmPassword">CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  autocomplete="new-password"
                />
                <button type="button" id="toggleConfirmPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconConfirm" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" class="btn">CREATE ACCOUNT</button>
          </form>

          <p class="auth-switch">
            Already have an account? &nbsp; <a class="link-brand--uc__underline" href="#/signin">SIGN IN</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <br><br>
          <h5 class="auth-hero-title">
            Stream Sync Engage makes it easy to communicate with your users in real-time.
          </h5>
          <p class="auth-hero-description">
            Send targeted messages, notifications, surveys, and more. Get started with a free account today.
          </p>
        </div>
      </div>
    </div>
  `}function Pt(){console.log("[SignupRoute] Initialized");const e=document.getElementById("signupForm"),t=e.querySelector('button[type="submit"]');Ee("togglePassword","password","eyeIcon"),Ee("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",o=>{o.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),a.publish(l.ROUTE_NAV,{route:"signin"})}),e.addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("first").value.trim(),s=document.getElementById("last").value.trim(),c=document.getElementById("email").value.trim(),p=document.getElementById("company").value.trim(),S=document.getElementById("phone").value.trim(),g=document.getElementById("password").value,E=document.getElementById("confirmPassword").value,R=document.getElementById("first"),y=document.getElementById("last"),w=document.getElementById("email"),k=document.getElementById("password"),u=document.getElementById("confirmPassword");if(ve(r,R,"Please enter your first name")&&ve(s,y,"Please enter your last name")&&Lt(c,w)&&Ct(g,k)){if(g!==E){M(u,"Passwords do not match");return}t.disabled=!0,t.textContent="Creating account...",await Ft(r,s,c,p,S,g)}})}function Ee(e,t,n){const o=document.getElementById(e),r=document.getElementById(t),s=document.getElementById(n);!o||!r||!s||o.addEventListener("click",()=>{const c=r.type==="password";r.type=c?"text":"password",c?s.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:s.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function ve(e,t,n){return e?!0:(M(t,n),!1)}function Lt(e,t){if(!e)return M(t,"Please enter your email"),!1;const n=(e.match(/@/g)||[]).length,o=(e.match(/\./g)||[]).length;return n!==1||o<1?(M(t,"Please enter a valid email address"),!1):!0}function Ct(e,t){if(!e)return M(t,"Please enter a password"),!1;const n=Ue(e);return n.length>0?(M(t,Pe(n)),!1):!0}function M(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function Ft(e,t,n,o,r,s){const c=document.querySelector('button[type="submit"]');try{const p=ie(s),S={email:n,hash:p,first:e,last:t};o&&(S.company=o),r&&(S.phone=r);const g=await N.doSignup(S);if(g.ok)a.publish(l.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const E=g.error||g.message||"Sign up failed";typeof neodigmToast<"u"&&neodigmToast.q(E,"danger"),c.disabled=!1,c.textContent="CREATE ACCOUNT",a.publish(l.AUTH_SIGNUP_FAIL,{message:E})}}catch(p){console.error("[SignupRoute] Sign up error:",p),typeof neodigmToast<"u"&&neodigmToast.q(p.message||"Network error - please try again","danger"),c.disabled=!1,c.textContent="CREATE ACCOUNT",a.publish(l.AUTH_SIGNUP_FAIL,{message:p.message})}}const kt=Object.freeze(Object.defineProperty({__proto__:null,init:Pt,render:Ut},Symbol.toStringTag,{value:"Module"}));function Ht(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Check Your Email</h1>
        <p>A verification link has been sent to the email address you provided.</p>

        <div class="auth-content">
          <!-- Countdown Timer -->
          <div class="countdown-wrapper">
            <div id="countdown-timer" class="countdown-timer">
              <div id="countdown-display" class="countdown-display">
                02:00:00
              </div>
              <div class="countdown-label">
                TIME REMAINING
              </div>
            </div>
          </div>

          <p class="text-center">
            Please click on that link to continue.
          </p>

          <p class="text-center">
            The link will expire in 2 hours.
          </p>

          <p class="text-center">
            Remember to check your spam folder.
          </p>

          <style>
            .countdown-wrapper {
              text-align: center;
              padding: 20px 0;
              margin-bottom: 40px;
            }

            .countdown-timer {
              display: inline-block;
              background: #000;
              border: 2px solid #333;
              border-radius: 8px;
              padding: 20px 40px;
              box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
            }

            .countdown-display {
              font-family: 'Courier New', 'Consolas', monospace;
              font-size: 48px;
              font-weight: bold;
              color: #dc2626;
              text-shadow:
                0 0 10px rgba(220, 38, 38, 0.8),
                0 0 20px rgba(220, 38, 38, 0.6),
                0 0 30px rgba(220, 38, 38, 0.4);
              letter-spacing: 4px;
            }

            .countdown-label {
              font-size: 12px;
              color: #666;
              text-transform: uppercase;
              letter-spacing: 2px;
              margin-top: 8px;
            }

            .text-center {
              text-align: center;
            }
          </style>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-hero-content">
          <h2>Almost There!</h2>
          <p>
            Just one more step to unlock your StreamSyncEngage account.
          </p>
          <p>
            Check your inbox for the verification email we just sent you.
          </p>
        </div>
      </div>
    </div>
  `}function Gt(){console.log("[VerfLinkRoute] Initialized");const e=7200,t=Date.now(),n=document.getElementById("countdown-display");function o(){const s=Date.now()-t,c=Math.floor(s/1e3),p=Math.max(0,e-c),S=Math.floor(p/3600),g=Math.floor(p%3600/60),E=p%60,R=`${String(S).padStart(2,"0")}:${String(g).padStart(2,"0")}:${String(E).padStart(2,"0")}`;n&&(n.textContent=R,p<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),p===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),p===0&&(clearInterval(r),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}o();const r=setInterval(o,1e3);window.addEventListener("beforeunload",()=>{clearInterval(r)})}const Dt=Object.freeze(Object.defineProperty({__proto__:null,init:Gt,render:Ht},Symbol.toStringTag,{value:"Module"})),Bt="https://streamsyncengage-saas.onrender.com";class Mt{constructor(){this.baseUrl=Bt}async request(t,n={}){const o=`${this.baseUrl}${t}`,r={"Content-Type":"application/json",...n.headers};try{const s=await fetch(o,{...n,headers:r});if(s.status===401||s.status===403){a.publish(l.AUTH_TOKEN_EXPIRED,{status:s.status,endpoint:t});const p=await s.json().catch(()=>({}));throw new Error(p.error||"Authentication failed")}const c=await s.json();return{ok:s.ok,status:s.status,data:c}}catch(s){throw console.error("API Request Error:",s),a.publish(l.APP_ERROR,{message:s.message,endpoint:t}),s}}async get(t){return this.request(t,{method:"GET"})}async post(t,n){return this.request(t,{method:"POST",body:JSON.stringify(n)})}async put(t,n){return this.request(t,{method:"PUT",body:JSON.stringify(n)})}async delete(t){return this.request(t,{method:"DELETE"})}async signin(t,n){return this.post("/api/acctEntity/signin",{email:t,hash:n})}async signup(t){return this.post("/api/acctEntity/signup",t)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(t){return this.post("/api/acctEntity/forgot",{email:t})}async resetHash(t,n){return this.post("/api/acctEntity/resethash",{email:t,hash:n})}async verifyAccount(t){return this.get(`/api/acctEntity/verify?CODE=${t}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(t){return this.get(`/api/acctEntity/${t}`)}async updateAccount(t,n){return this.put(`/api/acctEntity/${t}`,n)}async deleteAccount(t){return this.delete(`/api/acctEntity/${t}`)}async ping(){return this.get("/ping")}}const xt=new Mt;function Vt(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Forgot Password</h1>
        <p>Please enter your email to receive a password reset link</p>

        <div class="auth-content">
          <form id="forgot-form" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email">EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
            </div>

            <button type="submit" class="btn">SEND RESET LINK</button>
          </form>

          <p class="auth-switch">
            Remember your password? &nbsp; <a class="link-brand--uc__underline" href="#/signin">SIGN IN</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-hero-content">
          <h2>Password Reset</h2>
          <p>
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <p>
            The reset link will be valid for 2 hours.
          </p>
        </div>
      </div>
    </div>

  `}function $t(){console.log("[ForgotRoute] Initialized");const e=document.getElementById("forgot-form"),t=document.getElementById("email");e?.addEventListener("submit",async n=>{n.preventDefault();const o=t.value.trim();jt(o,t)&&await zt(o)})}function jt(e,t){if(!e)return Se(t,"Please enter your email address"),!1;const n=(e.match(/@/g)||[]).length,o=(e.match(/\./g)||[]).length;return n!==1||o<1?(Se(t,"Please enter a valid email address"),!1):!0}function Se(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function zt(e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent="SENDING...";try{const n=await xt.forgotPassword(e);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q("Password reset link sent!|Please check your email","success"),a.publish(l.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||"Failed to send reset link","danger"),t.disabled=!1,t.textContent="SEND RESET LINK")}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||"Network error - please try again","danger"),t.disabled=!1,t.textContent="SEND RESET LINK"}}const qt=Object.freeze(Object.defineProperty({__proto__:null,init:$t,render:Vt},Symbol.toStringTag,{value:"Module"}));function Yt(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Reset Password</h1>
        <p>Update your account password</p>

        <div class="auth-content">
          <form id="resethash-form" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value="${N.getEntity()?.email||""}"
                readonly
                style="opacity: 0.6; cursor: not-allowed;"
              />
            </div>

            <div class="form-group">
              <label for="new-password">NEW PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  placeholder="Enter new password"
                  required
                  autocomplete="new-password"
                />
                <button type="button" id="toggleNewPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconNew" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="confirm-password">CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  required
                  autocomplete="new-password"
                />
                <button type="button" id="toggleConfirmPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconConfirm" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" class="btn">UPDATE PASSWORD</button>
          </form>

          <p class="auth-switch">
            <a href="#/home" class="link-brand--uc__underline">CANCEL</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <div class="h-display__portrait--none">
            <br><br>
          </div>
          <h5 class="auth-hero-title">
            Keep your account secure with a strong password.
          </h5>
          <p class="auth-hero-description">
            Choose a unique password that you don't use anywhere else. You'll be signed out after updating and will need to sign in again with your new password.
          </p>
        </div>
      </div>
    </div>
  `}function Kt(){console.log("[ResethashRoute] Initialized");const e=document.getElementById("resethash-form"),t=e.querySelector('button[type="submit"]');Ae("toggleNewPassword","new-password","eyeIconNew"),Ae("toggleConfirmPassword","confirm-password","eyeIconConfirm"),e?.addEventListener("submit",async n=>{n.preventDefault();const o=e.email.value.trim(),r=e.newPassword.value,s=e.confirmPassword.value,c=document.getElementById("new-password"),p=document.getElementById("confirm-password");if(!r){D(c,"Please enter a new password");return}const S=Ue(r);if(S.length>0){D(c,Pe(S));return}if(!s){D(p,"Please confirm your new password");return}if(r!==s){D(p,"Passwords do not match");return}t.disabled=!0,t.textContent="UPDATING...";try{const g=ie(r),E=await N.doResetHash(o,g);E.ok?a.publish(l.AUTH_RESETHASH_SUCCESS,{email:o}):(D(c,E.error||"Failed to reset password"),t.disabled=!1,t.textContent="UPDATE PASSWORD")}catch(g){console.error("[ResethashRoute] Reset password error:",g),D(c,g.message||"Network error - please try again"),t.disabled=!1,t.textContent="UPDATE PASSWORD"}})}function Ae(e,t,n){const o=document.getElementById(e),r=document.getElementById(t),s=document.getElementById(n);!o||!r||!s||o.addEventListener("click",()=>{const c=r.type==="password";r.type=c?"text":"password",c?s.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:s.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function D(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}const Wt=Object.freeze(Object.defineProperty({__proto__:null,init:Kt,render:Yt},Symbol.toStringTag,{value:"Module"}));class Xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedToken=null,this.logoTopic=null}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.parseButtons(),this.render(),this.attachEventListeners()}parseButtons(){const t=this.getAttribute("data-buttons");if(t)try{this.buttons=JSON.parse(t);const n=this.buttons.find(o=>o.selected);this.selectedToken=n?n.token:this.buttons[0]?.token||null}catch(n){console.error("[M5TPrimaryNav] Error parsing buttons:",n),this.buttons=[]}}render(){const t=this.buttons.map((n,o)=>`btn${o}`).join(" ");this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 16px;
          z-index: 1000;
          width: calc(100vw - 32px);
          max-width: 1400px;
          margin: 0 auto;
        }

        .nav-container {
          display: grid;
          grid-template-areas: "logo ${t}";
          grid-template-columns: 84px repeat(${this.buttons.length}, 1fr);
          height: 84px;
          background: white;
          border: 2px solid var(--accent, #C94B4B);
          border-radius: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }

        .logo {
          grid-area: logo;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent, #C94B4B);
          border-right: 2px solid var(--accent, #C94B4B);
          cursor: pointer;
          user-select: none;
          transition: background 0.3s ease;
        }

        .logo:hover {
          background: rgba(201, 75, 75, 0.1);
        }

        .nav-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #333;
          border: none;
          border-bottom: 4px solid transparent;
          border-left: 1px solid #e0e0e0;
          font-family: var(--font-display, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif);
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .nav-button:first-of-type {
          border-left: none;
        }

        .nav-button:hover:not(.selected) {
          background: #f5f5f5;
          color: var(--accent, #C94B4B);
        }

        .nav-button.selected {
          background: #fafafa;
          color: var(--accent, #C94B4B);
          border-bottom: 6px solid var(--accent, #C94B4B);
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .count-badge {
          position: absolute;
          top: 8px;
          right: 12px;
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent, #C94B4B);
          color: white;
          font-size: 11px;
          font-weight: 700;
          border-radius: 10px;
          line-height: 1;
        }

        @media (max-width: 768px) {
          :host {
            width: calc(100vw - 16px);
          }

          .nav-container {
            height: 64px;
            grid-template-columns: 64px repeat(${this.buttons.length}, 1fr);
          }

          .logo {
            font-size: 1.2rem;
          }

          .nav-button {
            font-size: 0.85rem;
          }

          .count-badge {
            top: 4px;
            right: 4px;
            min-width: 18px;
            height: 18px;
            font-size: 10px;
          }
        }
      </style>

      <nav class="nav-container">
        <div class="logo">SSE</div>
        ${this.buttons.map((n,o)=>this.renderButton(n,o)).join("")}
      </nav>
    `}renderButton(t,n){const o=t.token===this.selectedToken,r=typeof t.count=="number"||t.count!==""&&t.count!=null;return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${t.token}"
        ${t.enabled?"":"disabled"}
        style="grid-area: btn${n}"
      >
        ${t.caption}
        ${r?`<span class="count-badge">${t.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(o=>{o.addEventListener("click",r=>{const s=r.currentTarget.getAttribute("data-token");s&&!r.currentTarget.disabled&&this.selectButton(s)})});const n=this.shadowRoot.querySelector(".logo");n&&n.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}}))})}selectButton(t){this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{token:t,timestamp:Date.now()}})),this.selectedToken!==t&&(this.selectedToken=t,this.render(),this.attachEventListeners())}updateButtons(t){this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(t,n){const o=this.buttons.find(r=>r.token===t);o&&(o.count=n,this.render(),this.attachEventListeners())}}customElements.define("m5t-primary-nav",Xt);function Jt(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-logo-topic="WC.APP.PRIMARY_NAV.LOGO"
        data-buttons='[
          {"token": "DASHBOARD", "caption": "Dashboard", "enabled": true, "selected": true},
          {"token": "ANALYTICS", "caption": "Analytics", "enabled": true},
          {"token": "MESSAGES", "caption": "Messages", "enabled": true, "count": 3},
          {"token": "SETTINGS", "caption": "Settings", "enabled": true},
          {"token": "RESET_PASSWORD", "caption": "Reset Password", "enabled": true},
          {"token": "SIGN_OUT", "caption": "Sign Out", "enabled": true}
        ]'
      ></m5t-primary-nav>

      <main class="home-main">
        <h1>Welcome to StreamSyncEngage</h1>
      </main>
    </div>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .home-container {
        min-height: 100vh;
        background: #6c757d;
        padding: 16px;
      }

      .home-main {
        max-width: 1200px;
        margin: 120px auto 0;
        padding: 2rem;
        color: white;
        text-align: center;
      }

      .home-main h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
    </style>
  `}function Zt(){console.log("[HomeRoute] Initialized");const e=document.querySelector("m5t-primary-nav");e&&e.addEventListener("nav-select",t=>{const n=t.detail.token;switch(console.log("[HomeRoute] Nav button clicked:",n),n){case"DASHBOARD":a.publish(l.UI_TOAST,{message:"Dashboard view",type:"info"});break;case"ANALYTICS":a.publish(l.UI_TOAST,{message:"Analytics view coming soon",type:"info"});break;case"MESSAGES":a.publish(l.UI_TOAST,{message:"3 new messages",type:"info"});break;case"SETTINGS":a.publish(l.UI_TOAST,{message:"Settings view",type:"info"});break;case"RESET_PASSWORD":console.log("[HomeRoute] Reset password requested"),a.publish(l.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[HomeRoute] Sign out requested"),N.navigateTo("signout");break}})}const Qt=Object.freeze(Object.defineProperty({__proto__:null,init:Zt,render:Jt},Symbol.toStringTag,{value:"Module"}));function en(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1>Sign Out</h1>
        <p>Are you sure you want to sign out?</p>

        <div class="auth-content">
          <button id="confirm-signout-btn" class="btn">SIGN OUT</button>

          <p class="auth-switch">
            <a id="cancel-signout-btn" class="link-brand--uc__underline" href="#/home">CANCEL</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <div class="h-display__portrait--none">
            <br><br>
          </div>
          <h5 class="auth-hero-title">
            Taking a break? We'll keep your data safe.
          </h5>
          <p class="auth-hero-description">
            You can sign back in anytime to continue managing your instant messages, notifications, and engagement campaigns.
          </p>
        </div>
      </div>
    </div>
  `}function tn(){console.log("[SignoutRoute] Initialized");const e=document.getElementById("confirm-signout-btn");e?.addEventListener("click",async()=>{e.disabled=!0,e.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await N.doSignout()})}const nn=Object.freeze(Object.defineProperty({__proto__:null,init:tn,render:en},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
