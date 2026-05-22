(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const $e="modulepreload",qe=function(t){return"/"+t},ge={},M=function(e,n,o){let r=Promise.resolve();if(n&&n.length>0){let m=function(f){return Promise.all(f.map(y=>Promise.resolve(y).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=s?.nonce||s?.getAttribute("nonce");r=m(n.map(f=>{if(f=qe(f),f in ge)return;ge[f]=!0;const y=f.endsWith(".css"),R=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${R}`))return;const T=document.createElement("link");if(T.rel=y?"stylesheet":$e,y||(T.as="script"),T.crossOrigin="",T.href=f,d&&T.setAttribute("nonce",d),document.head.appendChild(T),y)return new Promise((C,G)=>{T.addEventListener("load",C),T.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return r.then(s=>{for(const d of s||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};var ze=/([:*])(\w+)/g,Ye="([^/]+)",je=/\*/g,Ke="?(?:.*)",We=/\/\?/g,Xe="/?([^/]+|)",Je="(?:/^|^)",Qe="";function we(t){return t===void 0&&(t="/"),ie()?location.pathname+location.search+location.hash:t}function A(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function K(t){return typeof t=="string"}function Ze(t){return typeof t=="function"}function W(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function et(t,e){return e.length===0||!t?null:t.slice(1,t.length).reduce(function(n,o,r){return n===null&&(n={}),n[e[r]]=decodeURIComponent(o),n},null)}function X(t){var e=A(t).split(/\?(.*)?$/);return[A(e[0]),e.slice(1).join("")]}function ae(t){for(var e={},n=t.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(r[0]!==""){var a=decodeURIComponent(r[0]);e[a]?(Array.isArray(e[a])||(e[a]=[e[a]]),e[a].push(decodeURIComponent(r[1]||""))):e[a]=decodeURIComponent(r[1]||"")}}return e}function Ie(t,e){var n=X(A(t.currentLocationPath)),o=n[0],r=n[1],a=r===""?null:ae(r),s=[],d;if(K(e.path)){if(d=Je+A(e.path).replace(ze,function(R,T,C){return s.push(C),Ye}).replace(je,Ke).replace(We,Xe)+"$",A(e.path)===""&&A(o)==="")return{url:o,queryString:r,hashString:W(t.to),route:e,data:null,params:a}}else d=e.path;var m=new RegExp(d,Qe),f=o.match(m);if(f){var y=K(e.path)?et(f,s):f.groups?f.groups:f.slice(1);return{url:A(o.replace(new RegExp("^"+t.instance.root),"")),queryString:r,hashString:W(t.to),route:e,data:y,params:a}}return!1}function Re(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function H(t,e){return typeof t[e]>"u"||t[e]===!0}function tt(t){if(!t)return{};var e=t.split(","),n={},o;return e.forEach(function(r){var a=r.split(":").map(function(s){return s.replace(/(^ +| +$)/g,"")});switch(a[0]){case"historyAPIMethod":n.historyAPIMethod=a[1];break;case"resolveOptionsStrategy":o||(o={}),o.strategy=a[1];break;case"resolveOptionsHash":o||(o={}),o.hash=a[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[a[0]]=a[1]==="true";break}}),o&&(n.resolveOptions=o),n}function ie(){return typeof window<"u"}function nt(t,e){return t===void 0&&(t=[]),e===void 0&&(e={}),t.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(o){n[o]&&(e[o]||(e[o]=[]),e[o].push(n[o]))})}),e}function L(t,e,n){var o=e||{},r=0;(function a(){if(!t[r]){n&&n(o);return}Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),a()):t[r](o,function(s){typeof s>"u"||s===!0?(r+=1,a()):n&&n(o)})})()}L.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};function _e(t,e){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=we(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function Z(t,e){for(var n=0;n<t.instance.routes.length;n++){var o=t.instance.routes[n],r=Ie(t,o);if(r&&(t.matches||(t.matches=[]),t.matches.push(r),t.resolveOptions.strategy==="ONE")){e();return}}e()}function ot(t,e){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function rt(t,e){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}var fe=ie(),at=Re();function it(t,e){if(H(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),o=fe&&t.resolveOptions&&t.resolveOptions.hash===!0;at?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!o){var r=location.hash;location.hash="",location.hash=r}t.instance.__freezeListening=!1},1))):fe&&(window.location.href=t.to)}e()}function Ne(t,e){var n=t.instance;if(!n.lastResolved()){e();return}L(n.lastResolved().map(function(o){return function(r,a){if(!o.route.hooks||!o.route.hooks.leave){a();return}var s=!1,d=t.instance.matchLocation(o.route.path,t.currentLocationPath,!1);if(o.route.path!=="*")s=!d;else{var m=t.matches?t.matches.find(function(f){return o.route.path===f.route.path}):!1;s=!m}if(H(t.navigateOptions,"callHooks")&&s){L(o.route.hooks.leave.map(function(f){return function(y,R){return f(function(T){T===!1?t.instance.__markAsClean(t):R()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return a()}]));return}else a()}}),{},function(){return e()})}function st(t,e){t.match.route.hooks&&t.match.route.hooks.before&&H(t.navigateOptions,"callHooks")?L(t.match.route.hooks.before.map(function(n){return function(r,a){return n(function(s){s===!1?t.instance.__markAsClean(t):a()},t.match)}}).concat([function(){return e()}])):e()}function lt(t,e){H(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()}function ct(t,e){t.match.route.hooks&&t.match.route.hooks.after&&H(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(n){return n(t.match)}),e()}function dt(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString){n.forEach(function(o){o.route.hooks&&o.route.hooks.already&&H(t.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(r){return r(t.match)})}),e(!1);return}e()}function ut(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var o=X(t.currentLocationPath),r=o[0],a=o[1],s=W(t.to);n.path=A(r);var d={url:n.path,queryString:a,hashString:s,data:null,route:n,params:a!==""?ae(a):null};t.matches=[d],t.match=d}e()}function pt(t,e){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),e()}function gt(t,e){t.instance._setCurrent(null),e()}function Oe(t,e){H(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var Ce=[dt,st,lt,ct],he=[Ne,ut,L.if(function(t){var e=t.notFoundHandled;return e},Ce.concat([Oe]),[pt,gt])];function oe(){return oe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},oe.apply(this,arguments)}function me(t,e){var n=0;function o(){if(n===t.matches.length){Oe(t,e);return}L(Ce,oe({},t,{match:t.matches[n]}),function(){n+=1,o()})}Ne(t,o)}function ee(t){t.instance.__markAsClean(t)}function re(){return re=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},re.apply(this,arguments)}var Ee="[data-navigo]";function _t(t,e){var n=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ee},o=this,r="/",a=null,s=[],d=!1,m,f=Re(),y=ie();t?r=A(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function R(i){return i.indexOf("#")>=0&&(n.hash===!0?i=i.split("#")[1]||"/":i=i.split("#")[0]),i}function T(i){return A(r+"/"+A(i))}function C(i,p,E,S){return i=K(i)?T(i):i,{name:S||A(String(i)),path:i,handler:p,hooks:nt(E)}}function G(i,p,E){var S=this;return typeof i=="object"&&!(i instanceof RegExp)?(Object.keys(i).forEach(function(v){if(typeof i[v]=="function")S.on(v,i[v]);else{var P=i[v],z=P.uses,Be=P.as,Ve=P.hooks;s.push(C(v,z,[m,Ve],Be))}}),this):(typeof i=="function"&&(E=p,p=i,i=r),s.push(C(i,p,[m,E])),this)}function u(i,p){if(o.__dirty){o.__waiting.push(function(){return o.resolve(i,p)});return}else o.__dirty=!0;i=i?A(r)+"/"+A(i):void 0;var E={instance:o,to:i,currentLocationPath:i,navigateOptions:{},resolveOptions:re({},n,p)};return L([_e,Z,L.if(function(S){var v=S.matches;return v&&v.length>0},me,he)],E,ee),E.matches?E.matches:!1}function _(i,p){if(o.__dirty){o.__waiting.push(function(){return o.navigate(i,p)});return}else o.__dirty=!0;i=A(r)+"/"+A(i);var E={instance:o,to:i,navigateOptions:p||{},resolveOptions:p&&p.resolveOptions?p.resolveOptions:n,currentLocationPath:R(i)};L([ot,rt,Z,L.if(function(S){var v=S.matches;return v&&v.length>0},me,he),it,ee],E,ee)}function h(i,p,E){var S=de(i,p);return S!==null?(_(S.replace(new RegExp("^/?"+r),""),E),!0):!1}function w(i){return this.routes=s=s.filter(function(p){return K(i)?A(p.path)!==A(i):Ze(i)?i!==p.handler:String(p.path)!==String(i)}),this}function I(){f&&(this.__popstateListener=function(){o.__freezeListening||u()},window.addEventListener("popstate",this.__popstateListener))}function N(){this.routes=s=[],f&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=d=!0}function U(i,p){return o._notFoundRoute=C("*",i,[m,p],"__NOT_FOUND__"),this}function k(){if(y)return x().forEach(function(i){if(i.getAttribute("data-navigo")==="false"||i.getAttribute("target")==="_blank"){i.hasListenerAttached&&i.removeEventListener("click",i.navigoHandler);return}i.hasListenerAttached||(i.hasListenerAttached=!0,i.navigoHandler=function(p){if((p.ctrlKey||p.metaKey)&&p.target.tagName.toLowerCase()==="a")return!1;var E=i.getAttribute("href");if(typeof E>"u"||E===null)return!1;if(E.match(/^(http|https)/)&&typeof URL<"u")try{var S=new URL(E);E=S.pathname+S.search}catch{}var v=tt(i.getAttribute("data-navigo-options"));d||(p.preventDefault(),p.stopPropagation(),o.navigate(A(E),v))},i.addEventListener("click",i.navigoHandler))}),o}function x(){return y?[].slice.call(document.querySelectorAll(n.linksSelector||Ee)):[]}function Q(i){return"/"+r+"/"+A(i)}function q(i){return m=i,this}function Fe(){return a}function de(i,p,E){var S=s.find(function(z){return z.name===i}),v=null;if(S){if(v=S.path,p)for(var P in p)v=v.replace(":"+P,p[P]);v=v.match(/^\//)?v:"/"+v}return v&&E&&!E.includeRoot&&(v=v.replace(new RegExp("^/"+r),"")),v}function Me(i){return i.getAttribute("href")}function ue(i){var p=X(A(i)),E=p[0],S=p[1],v=S===""?null:ae(S),P=W(i),z=C(E,function(){},[m],E);return{url:E,queryString:S,hashString:P,route:z,data:null,params:v}}function Ge(){return ue(A(we(r)).replace(new RegExp("^"+r),""))}function De(i){var p={instance:o,currentLocationPath:i,to:i,resolveOptions:n};return Z(p,function(){}),p.matches?p.matches:!1}function He(i,p,E){typeof p<"u"&&(typeof E>"u"||E)&&(p=T(p));var S={instance:o,to:p,currentLocationPath:p};_e(S,function(){}),typeof i=="string"&&(i=typeof E>"u"||E?T(i):i);var v=Ie(S,{name:String(i),path:i,handler:function(){},hooks:{}});return v||!1}function j(i,p,E){return typeof p=="string"&&(p=pe(p)),p?(p.hooks[i]||(p.hooks[i]=[]),p.hooks[i].push(E),function(){p.hooks[i]=p.hooks[i].filter(function(S){return S!==E})}):(console.warn("Route doesn't exists: "+p),function(){})}function pe(i){return typeof i=="string"?s.find(function(p){return p.name===T(i)}):s.find(function(p){return p.handler===i})}function xe(i){i.instance.__dirty=!1,i.instance.__waiting.length>0&&i.instance.__waiting.shift()()}this.root=r,this.routes=s,this.destroyed=d,this.current=a,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=xe,this.on=G,this.off=w,this.resolve=u,this.navigate=_,this.navigateByName=h,this.destroy=N,this.notFound=U,this.updatePageLinks=k,this.link=Q,this.hooks=q,this.extractGETParameters=function(i){return X(R(i))},this.lastResolved=Fe,this.generate=de,this.getLinkPath=Me,this.match=De,this.matchLocation=He,this.getCurrentLocation=Ge,this.addBeforeHook=j.bind(this,"before"),this.addAfterHook=j.bind(this,"after"),this.addAlreadyHook=j.bind(this,"already"),this.addLeaveHook=j.bind(this,"leave"),this.getRoute=pe,this._pathToMatchObject=ue,this._clean=A,this._checkForAHash=R,this._setCurrent=function(i){return a=o.current=i},I.call(this),k.call(this)}var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ht(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y={exports:{}},mt=Y.exports,ve;function Et(){return ve||(ve=1,(function(t,e){(function(n,o){var r={};n.PubSub?(r=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=r,o(r)),t!==void 0&&t.exports&&(e=t.exports=r),e.PubSub=r,t.exports=e=r})(typeof window=="object"&&window||mt||ft,function(n){var o={},r=-1,a="*";function s(u){var _;for(_ in u)if(Object.prototype.hasOwnProperty.call(u,_))return!0;return!1}function d(u){return function(){throw u}}function m(u,_,h){try{u(_,h)}catch(w){setTimeout(d(w),0)}}function f(u,_,h){u(_,h)}function y(u,_,h,w){var I=o[_],N=w?f:m,U;if(Object.prototype.hasOwnProperty.call(o,_))for(U in I)Object.prototype.hasOwnProperty.call(I,U)&&N(I[U],u,h)}function R(u,_,h){return function(){var I=String(u),N=I.lastIndexOf(".");for(y(u,u,_,h);N!==-1;)I=I.substr(0,N),N=I.lastIndexOf("."),y(u,I,_,h);y(u,a,_,h)}}function T(u){var _=String(u),h=!!(Object.prototype.hasOwnProperty.call(o,_)&&s(o[_]));return h}function C(u){for(var _=String(u),h=T(_)||T(a),w=_.lastIndexOf(".");!h&&w!==-1;)_=_.substr(0,w),w=_.lastIndexOf("."),h=T(_);return h}function G(u,_,h,w){u=typeof u=="symbol"?u.toString():u;var I=R(u,_,w),N=C(u);return N?(h===!0?I():setTimeout(I,0),!0):!1}n.publish=function(u,_){return G(u,_,!1,n.immediateExceptions)},n.publishSync=function(u,_){return G(u,_,!0,n.immediateExceptions)},n.subscribe=function(u,_){if(typeof _!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(o,u)||(o[u]={});var h="uid_"+String(++r);return o[u][h]=_,h},n.subscribeAll=function(u){return n.subscribe(a,u)},n.subscribeOnce=function(u,_){var h=n.subscribe(u,function(){n.unsubscribe(h),_.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){o={}},n.clearSubscriptions=function(_){var h;for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&h.indexOf(_)===0&&delete o[h]},n.countSubscriptions=function(_){var h,w,I=0;for(h in o)if(Object.prototype.hasOwnProperty.call(o,h)&&h.indexOf(_)===0){for(w in o[h])I++;break}return I},n.getSubscriptions=function(_){var h,w=[];for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&h.indexOf(_)===0&&w.push(h);return w},n.unsubscribe=function(u){var _=function(Q){var q;for(q in o)if(Object.prototype.hasOwnProperty.call(o,q)&&q.indexOf(Q)===0)return!0;return!1},h=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(o,u)||_(u)),w=!h&&typeof u=="string",I=typeof u=="function",N=!1,U,k,x;if(h){n.clearSubscriptions(u);return}for(U in o)if(Object.prototype.hasOwnProperty.call(o,U)){if(k=o[U],w&&k[u]){delete k[u],N=u;break}if(I)for(x in k)Object.prototype.hasOwnProperty.call(k,x)&&k[x]===u&&(delete k[x],N=!0)}return N}})})(Y,Y.exports)),Y.exports}var vt=Et();const l=ht(vt),c=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR"}),te={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var ne={};const b=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function ke(t,e=null){if(t in b)return b[t];if(typeof process<"u"&&ne&&ne[t]){const n=ne[t];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&te&&te[t]){const n=te[t];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return e}function yt(t){return ke(t,!1)===!0}function St(){return{...b}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:b,getFlag:ke,isEnabled:yt,getAllFlags:St});function bt(){console.log("[WebComponentBridge] Initializing global event bridge..."),document.addEventListener("nav-select",t=>{console.log("[WebComponentBridge] nav-select:",t.detail),l.publish(c.M5T_PRIMARY_NAV_TAP,t.detail)}),document.addEventListener("logo-click",t=>{console.log("[WebComponentBridge] logo-click:",t.detail),l.publish(c.M5T_PRIMARY_NAV_LOGO_TAP,t.detail)}),console.log("[WebComponentBridge] Global event bridge initialized")}function At(){console.log("[AppEvents] Initializing event listeners..."),l.subscribe(c.APP_READY,(t,e)=>{console.log("[AppEvents] APP_READY:",e)}),l.subscribe(c.APP_ERROR,(t,e)=>{console.error("[AppEvents] APP_ERROR:",e)}),l.subscribe(c.APP_SIGNOUT,(t,e)=>{console.log("[AppEvents] APP_SIGNOUT:",e)}),l.subscribe(c.ROUTE_NAV_BEFORE,(t,e)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",e),l.publish(c.UI_LOADING_START)}),l.subscribe(c.ROUTE_NAV_AFTER,(t,e)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",e),l.publish(c.UI_LOADING_END)}),l.subscribe(c.ROUTE_NAV_ERROR,(t,e)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",e),l.publish(c.APP_ERROR,{message:"Navigation error",details:e})}),l.subscribe(c.AUTH_SIGNIN_SUCCESS,(t,e)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",e)}),l.subscribe(c.AUTH_SIGNIN_FAIL,(t,e)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",e),l.publish(c.UI_TOAST,{message:e.message||"Sign in failed",type:"danger"})}),l.subscribe(c.AUTH_SIGNUP_SUCCESS,(t,e)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",e),l.publish(c.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),l.publish(c.AUTH_VERIFY_LINK)}),l.subscribe(c.AUTH_VERIFY_LINK,(t,e)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),l.subscribe(c.AUTH_SIGNUP_FAIL,(t,e)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",e),l.publish(c.UI_TOAST,{message:e.message||"Sign up failed",type:"danger"})}),l.subscribe(c.AUTH_SIGNOUT_SUCCESS,(t,e)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",e),l.publish(c.UI_TOAST,{message:"Signed out successfully",type:"info"})}),l.subscribe(c.AUTH_SIGNUP,(t,e)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),l.subscribe(c.AUTH_FORGOT,(t,e)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),l.subscribe(c.AUTH_FORGOT_SUCCESS,(t,e)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",e),l.publish(c.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),l.subscribe(c.AUTH_RESETHASH_NAV,(t,e)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),l.subscribe(c.AUTH_RESETHASH_SUCCESS,(t,e)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",e),l.publish(c.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),l.subscribe(c.AUTH_TOKEN_EXPIRED,(t,e)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",e),l.publish(c.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),l.subscribe(c.UI_LOADING_START,(t,e)=>{const n=document.getElementById("app-loader");n&&n.classList.add("active")}),l.subscribe(c.UI_LOADING_END,(t,e)=>{const n=document.getElementById("app-loader");n&&n.classList.remove("active")}),l.subscribe(c.UI_TOAST,(t,e)=>{console.log("[AppEvents] UI_TOAST:",e)}),l.subscribe(c.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const t="0.1",e=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${t} 5/22/2026, 11:36:54 AM|© ${e} Mach Five Tech`,"night")}),bt(),l.subscribe(c.M5T_PRIMARY_NAV_TAP,(t,e)=>{console.log("[AppEvents] M5T_PRIMARY_NAV_TAP:",e);const{token:n,level:o,primaryToken:r}=e;switch(n){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),l.publish(c.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${n}`,{primaryToken:r});break}}),l.subscribe(c.M5T_PRIMARY_NAV_LOGO_TAP,(t,e)=>{console.log("[AppEvents] M5T_PRIMARY_NAV_LOGO_TAP:",e);const n="0.1",o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${n} 5/22/2026, 11:36:54 AM|© ${o} Mach Five Tech`,"night",5e3)}),l.subscribe(c.M5T_PRIMARY_NAV_HOVER,(t,e)=>{console.log("[AppEvents] M5T_PRIMARY_NAV_HOVER:",e)}),l.subscribe(c.M5T_PRIMARY_NAV_DOUBLE_TAP,(t,e)=>{console.log("[AppEvents] M5T_PRIMARY_NAV_DOUBLE_TAP:",e)}),l.subscribe(c.M5T_PRIMARY_NAV_LONG_TAP,(t,e)=>{console.log("[AppEvents] M5T_PRIMARY_NAV_LONG_TAP:",e)}),l.subscribe(c.AUTH_SIGNOUT,(t,e)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(b.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}class F{static CONFIG={BASE_URL:window.location.hostname==="localhost"?"http://localhost:3333":"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#n=null;static#o=null;static#i=null;static async init({BASE_URL:e,navigateFunction:n,customConfig:o={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#i=n;else throw new Error("navigateFunction is required and must be a function");return e&&(this.CONFIG.BASE_URL=e),o&&Object.keys(o).length>0&&(this.CONFIG={...this.CONFIG,...o}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#c(),this.#l(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#d(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(r){return console.error("[AuthController] Initialization failed:",r),!1}}static#l(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((e=null)=>{e&&(console.log("[AuthController] mvvLegit navigation to:",e),this.#r(e))}).setOnState((e=null)=>{if(e)switch(console.log("[AuthController] Auth state changed:",e),e){case"AUTH":case 4:this.#g();break;case"UNAUTH":case 1:this.#_();break;case"UNVERF":case 2:this.#f();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#r(e){if(!this.#i){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",e);const n=e.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#i(n)}static#c(){try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#n=JSON.parse(e),console.log("[AuthController] Entity state loaded:",this.#n?.email))}catch(e){console.error("[AuthController] Error loading entity state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#o=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#a(e){try{this.#n=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#s(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#n}static async doSignin(e,n){try{const o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:n})}),r=await o.json();return o.status===303?(console.warn("[AuthController] Password reset required"),r.accessToken&&(mvvLegit.doSignin(r.accessToken),this.#a(r.entity)),setTimeout(()=>{this.#r(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:r}):o.ok&&r.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(r.accessToken),this.#a(r.entity),console.log("[AuthController] Explicitly navigating to home"),this.#r(this.CONFIG.ROUTES.HOME),{ok:!0,data:r}):{ok:!1,error:r.error||"Sign in failed",data:r}}catch(o){return console.error("[AuthController] Signin error:",o),{ok:!1,error:o.message}}}static async doSignout(e=!1){console.log("[AuthController] doSignout called, serverInitiated:",e);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!e&&n){const o=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",o),navigator.sendBeacon){const r=navigator.sendBeacon(o);console.log("[AuthController] Beacon sent:",r),r||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#s(),console.log("[AuthController] Stopping auth ping..."),this.#u(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=await n.json();return n.ok&&o.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#a(o.entity),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign up failed",data:o}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(e,n){try{const o=mvvLegit.getConf()?.token,r=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:n,modified_by:e})}),a=await r.json();return r.ok&&a.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:a}):{ok:!1,error:a.error||"Password reset failed",data:a}}catch(o){return console.error("[AuthController] Reset password error:",o),{ok:!1,error:o.message}}}static#d(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#p()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#u(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#p(){try{const e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log("[AuthController] Ping success"):(e.status===401||e.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(e){console.error("[AuthController] Ping error:",e)}}static setDeepLinkGuid(e){this.#o=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log("[AuthController] Deep-link GUID stored:",e)}static getDeepLinkGuid(){return this.#o}static clearDeepLink(){this.#o=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#g(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#d()}static#_(){console.log("[AuthController] User unauthenticated"),this.#u()}static#f(){console.log("[AuthController] User unverified")}static getAuthState(){try{const e=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(e);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const o=LZString.decompressFromUTF16(n),a=JSON.parse(o)?.state;return a===1?"UNAUTH":a===2?"UNVERF":a===4?"AUTH":a===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(e){this.#r(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#p()}}class g{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password..."},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña..."},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码..."}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:e,product:n,whitelabel:o,lang:r}){e&&(this.#t.buildMode=e),n&&(this.#t.product=n),o&&(this.#t.whitelabel=o),r&&(this.#t.lang=r)}static getContext(){return{...this.#t}}static get(e,n={}){const o={...this.#t,...n},{buildMode:r,product:a,whitelabel:s,lang:d}=o;try{const m=this.#e[r]?.[a]?.[s]?.[d]?.[e];return m?Array.isArray(m)?m[Math.floor(Math.random()*m.length)]:m:(console.warn(`[MicrocopyManager] Token not found: ${e} (${r}/${a}/${s}/${d})`),null)}catch(m){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,m),null}}static getAll(e={}){const n={...this.#t,...e},{buildMode:o,product:r,whitelabel:a,lang:s}=n;try{return this.#e[o]?.[r]?.[a]?.[s]||null}catch(d){return console.error("[MicrocopyManager] Error retrieving all tokens",d),null}}static has(e,n={}){const o={...this.#t,...n},{buildMode:r,product:a,whitelabel:s,lang:d}=o;try{return!!this.#e[r]?.[a]?.[s]?.[d]?.[e]}catch{return!1}}static getAvailableLanguages(){const{buildMode:e,product:n,whitelabel:o}=this.#t;try{return Object.keys(this.#e[e]?.[n]?.[o]||{})}catch{return[]}}static update(e,n,o={}){const r={...this.#t,...o},{buildMode:a,product:s,whitelabel:d,lang:m}=r;try{return this.#e[a]||(this.#e[a]={}),this.#e[a][s]||(this.#e[a][s]={}),this.#e[a][s][d]||(this.#e[a][s][d]={}),this.#e[a][s][d][m]||(this.#e[a][s][d][m]={}),this.#e[a][s][d][m][e]=n,!0}catch(f){return console.error(`[MicrocopyManager] Error updating token: ${e}`,f),!1}}static delete(e,n={}){const o={...this.#t,...n},{buildMode:r,product:a,whitelabel:s,lang:d}=o;try{return delete this.#e[r]?.[a]?.[s]?.[d]?.[e],!0}catch(m){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,m),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(n){return console.error("[MicrocopyManager] Error importing data",n),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:g});class D{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const e=this.#i();g.setContext(e),console.log("[I18nController] Initialized with context:",e),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),b.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#l(),this.#c(),this.#e=!0,this.refresh()}static#o(e){const n={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},o=e.toLowerCase();return n[o]||"DEV"}static#i(){const n=this.#o("production"),o=localStorage.getItem(b.FF_SSE_LS_WHITELABEL)||b.FF_SSE_I18N_WHITELABEL,r=localStorage.getItem(b.FF_SSE_LS_USER_LANG)||b.FF_SSE_I18N_LANG;return{buildMode:n,product:b.FF_SSE_I18N_PRODUCT,whitelabel:o,lang:r}}static#l(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,n,o)=>{b.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",o),this.#t=o,setTimeout(()=>{this.refresh()},b.FF_SSE_I18N_APPLY_DELAY_MS)},b.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#r())}static#r(){setInterval(()=>{const n=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");n&&n!==this.#t&&(this.#t=n,this.refresh())},500)}static#c(){this.#n||(this.#n=new MutationObserver(e=>{let n=!1;for(const o of e){for(const r of o.addedNodes)if(r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("data-meta-copywrite-i118n")||r.querySelector("[data-meta-copywrite-i118n]"))){n=!0;break}if(n)break}n&&(b.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#a(document.body),this.#s(document.body),b.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#a(e){const n=e.querySelectorAll("[data-meta-copywrite-i118n]");b.FF_SSE_I18N_DEBUG&&n.length>0&&console.log(`[I18nController] Processing ${n.length} elements`),n.forEach(o=>{try{const r=o.getAttribute("data-meta-copywrite-i118n"),a=JSON.parse(r);if(!a.token){console.warn("[I18nController] Missing token in config:",a);return}const s=a.attribute||"textContent",d=g.get(a.token);if(d===null){console.warn(`[I18nController] Microcopy not found for token: ${a.token}`);return}s==="textContent"?o.textContent=d:s==="innerHTML"?o.innerHTML=d:o.setAttribute(s,d),b.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${d}" to ${s} for token: ${a.token}`)}catch(r){console.error("[I18nController] Error processing element:",r,o)}})}static#s(e){e.querySelectorAll("*").forEach(o=>{o.shadowRoot&&(this.#a(o.shadowRoot),this.#s(o.shadowRoot))})}static setLanguage(e){const n=g.getAvailableLanguages();if(!n.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,n);return}localStorage.setItem(b.FF_SSE_LS_USER_LANG,e),g.setContext({lang:e}),b.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Language changed to:",e),this.refresh()}static setWhitelabel(e){localStorage.setItem(b.FF_SSE_LS_WHITELABEL,e),g.setContext({whitelabel:e}),b.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",e),this.refresh()}static getLanguage(){return g.getContext().lang}static getAvailableLanguages(){return g.getAvailableLanguages()}static getContext(){return g.getContext()}static destroy(){this.#n&&(this.#n.disconnect(),this.#n=null),this.#e=!1,this.#t=null,b.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D.initialize()}):D.initialize());window.m5t=Object.create(null);window.m5t.pubsub=l;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(t){console.log("mvvLegit (direct): ReferenceError -",t.message)}const Tt=Object.keys(window).filter(t=>t.toLowerCase().includes("mvv")||t.toLowerCase().includes("neodigm")||t.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",Tt);const O=new _t("/",{hash:!0});window.router=O;function se(t){const e=t?`${t.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${t} -> ${e}`),mvvLegit.isRouteAllowed(e)?!0:(console.warn(`[Router] Access denied to route: ${e}`),l.publish(c.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function $(t){console.log("[Router] Navigating to:",t),O.navigate(`/${t}`)}O.on("/",()=>{console.log("[Router] Route: /"),l.publish(c.ROUTE_NAV_BEFORE,{route:"splash"}),M(()=>Promise.resolve().then(()=>Pe),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"splash"})}).catch(t=>{console.error("[Router] Error loading splash route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"splash",error:t})})});O.on("/splash",()=>{console.log("[Router] Route: /splash"),l.publish(c.ROUTE_NAV_BEFORE,{route:"splash"}),M(()=>Promise.resolve().then(()=>Pe),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"splash"})}).catch(t=>{console.error("[Router] Error loading splash route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"splash",error:t})})});O.on("/signin",()=>{console.log("[Router] Route: /signin"),l.publish(c.ROUTE_NAV_BEFORE,{route:"signin"}),M(()=>Promise.resolve().then(()=>Lt),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signin"})}).catch(t=>{console.error("[Router] Error loading signin route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signin",error:t})})});O.on("/signup",()=>{console.log("[Router] Route: /signup"),l.publish(c.ROUTE_NAV_BEFORE,{route:"signup"}),M(()=>Promise.resolve().then(()=>Ht),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signup"})}).catch(t=>{console.error("[Router] Error loading signup route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signup",error:t})})});O.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),l.publish(c.ROUTE_NAV_BEFORE,{route:"verf-link"}),M(()=>Promise.resolve().then(()=>Vt),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(t=>{console.error("[Router] Error loading verf-link route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"verf-link",error:t})})});O.on("/forgot",()=>{console.log("[Router] Route: /forgot"),l.publish(c.ROUTE_NAV_BEFORE,{route:"forgot"}),M(()=>Promise.resolve().then(()=>Xt),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(t=>{console.error("[Router] Error loading forgot route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"forgot",error:t})})});O.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!se("resethash")){$("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"resethash"}),M(()=>Promise.resolve().then(()=>Zt),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(t=>{console.error("[Router] Error loading resethash route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"resethash",error:t})})});O.on("/home",()=>{if(console.log("[Router] Route: /home"),!se("home")){$("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"home"}),M(()=>Promise.resolve().then(()=>on),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"home"})}).catch(t=>{console.error("[Router] Error loading home route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"home",error:t})})});O.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!se("signout")){$("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"signout"}),M(()=>Promise.resolve().then(()=>sn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signout"})}).catch(t=>{console.error("[Router] Error loading signout route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signout",error:t})})});O.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),$("splash")});l.subscribe(c.ROUTE_NAV,(t,e)=>{console.log("[Router] ROUTE_NAV event received:",e),e?.route&&$(e.route)});function ye(){console.log("[App] Waiting for Neodigm 55 library...");let t=0;const e=100,n=setInterval(()=>{t++,t%10===0&&console.log(`[App] Still waiting... attempt ${t}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${t*100}ms`),clearInterval(n),wt()):t>=e&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,l.publish(c.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ye):ye();async function wt(){if(console.log("[App] Neodigm 55 loaded, initializing..."),At(),D.initialize(),console.log("[App] I18n Controller initialized"),!await F.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),$(n)}})){console.error("[App] AuthController initialization failed");return}const e=F.getEntity();e&&(console.log("[App] Session restored for:",e.email),l.publish(c.APP_USER_LOADED,{entity:e})),l.publish(c.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),O.resolve(),window.AuthController=F,window.I18nController=D,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController available globally)")}l.subscribe(c.ROUTE_NAV_AFTER,(t,e)=>{typeof D<"u"&&D.refresh&&setTimeout(()=>{D.refresh()},100)});function It(){return`
    <div class="auth-container">
      <div class="auth-left">
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

      <div class="auth-right">
        <section class="auth-right__vect">
        <!-- Diagram background via CSS -->
        </section>
      </div>
    </div>

    <style>
      .auth-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100vh;
        background: var(--color-gray-100);
      }

      @media (orientation: portrait) {
        .auth-container {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
        }
      }

      .auth-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem 2rem;
        background: var(--color-gray-200);
      }

      .auth-right { display: block; padding: 16px; }
      .auth-right__vect {
        height: 100%;
        background-image: var(--see-diagram-hex);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      @media (orientation: portrait) {
        .auth-right {
          min-height: 300px;
        }
      }

      .splash-content {
        text-align: center;
        max-width: 500px;
        width: 100%;
      }

      .splash-content h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 700;
        color: var(--color-gray-900);
      }

      .tagline {
        font-size: 1.2rem;
        margin-bottom: 3rem;
        color: var(--color-gray-700);
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
        border: 4px solid var(--color-gray-300);
        border-top-color: var(--color-primary-600);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .loading-text {
        font-size: 1rem;
        color: var(--color-gray-600);
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
        background: var(--color-primary-600);
        color: white;
      }

      .btn-primary:hover {
        background: var(--color-primary-700);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .btn-secondary {
        background: transparent;
        color: var(--color-gray-700);
        border: 2px solid var(--color-gray-400);
      }

      .btn-secondary:hover {
        background: var(--color-gray-300);
        border-color: var(--color-gray-500);
        transform: translateY(-2px);
      }
    </style>
  `}function Rt(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const t=localStorage.getItem(b.FF_SSE_LS_TOKEN),e=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!t,hasMvvTs:!!e});const n=document.getElementById("splash-loader"),o=document.getElementById("splash-actions");t?(console.log("[SplashRoute] Auth token found → HOME"),l.publish(c.ROUTE_NAV,{route:"home"})):e?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),l.publish(c.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),n&&(n.style.display="none"),o&&(o.style.display="flex"),document.querySelectorAll("[data-route]").forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${s}`),l.publish(c.ROUTE_NAV,{route:s})})}))},4e3)}const Pe=Object.freeze(Object.defineProperty({__proto__:null,init:Rt,render:It},Symbol.toStringTag,{value:"Module"}));function le(t){return t=String(t),Math.abs(t.split("").reduce((e,n)=>(e<<5)-e+n.charCodeAt(0)|0,0))}function Nt(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1 data-meta-copywrite-i118n='{"token": "welcome_back", "attribute": "textContent"}'>Welcome Back</h1>
        <p data-meta-copywrite-i118n='{"token": "please_enter_your_details", "attribute": "textContent"}'>Sign in to continue</p>

        <div class="auth-content">
          <form id="loginForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                data-meta-copywrite-i118n='{"token": "enter_your_email", "attribute": "placeholder"}'
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="password" data-meta-copywrite-i118n='{"token": "password", "attribute": "textContent"}'>PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  data-meta-copywrite-i118n='{"token": "enter_your_password", "attribute": "placeholder"}'
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
              <a href="#/forgot" class="link-brand--uc__underline" data-meta-copywrite-i118n='{"token": "forgot_password", "attribute": "textContent"}'>FORGOT PASSWORD</a>
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "dont_have_an_account", "attribute": "textContent"}'>START YOUR FREE ACCOUNT</span> &nbsp;  <a class="link-brand--uc__underline" href="#/signup" data-meta-copywrite-i118n='{"token": "sign_up", "attribute": "textContent"}'>SIGN UP</a>
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
  `}function Ot(){console.log("[SigninRoute] Initialized");const t=document.getElementById("loginForm"),e=document.getElementById("email"),n=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const a=n.type==="password"?"text":"password";n.type=a}),t?.addEventListener("submit",async a=>{a.preventDefault();const s=e.value.trim(),d=n.value;Ct(s,e)&&kt(d,n)&&await Pt(s,d)}),document.getElementById("link--uc__underline")?.addEventListener("click",a=>{a.preventDefault(),l.publish(c.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",a=>{a.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),l.publish(c.ROUTE_NAV,{route:"signup"})})}function Ct(t,e){if(!t)return J(e,g.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,o=(t.match(/\./g)||[]).length;return n!==1||o<1?(J(e,g.get("validation_email_invalid")),!1):!0}function kt(t,e){return t?t.length<10?(J(e,g.get("validation_password_min_length")),!1):!0:(J(e,g.get("validation_password_required")),!1)}function J(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Pt(t,e){const n=document.querySelector(".btn");n.disabled=!0,n.textContent=g.get("loading_signing_in");try{const o=le(e),r=await F.doSignin(t,o);r.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(g.get("success_welcome_back"),"success"),l.publish(c.AUTH_SIGNIN_SUCCESS,{entity:F.getEntity()})):r.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(g.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(r.error||g.get("error_signin_failed"),"danger"),n.disabled=!1,n.textContent=g.get("sign_in").toUpperCase())}catch(o){console.error("[SigninRoute] Sign in error:",o),typeof neodigmToast<"u"&&neodigmToast.q(o.message||g.get("error_network"),"danger"),n.disabled=!1,n.textContent=g.get("sign_in").toUpperCase(),l.publish(c.AUTH_SIGNIN_FAIL,{message:o.message})}}const Lt=Object.freeze(Object.defineProperty({__proto__:null,init:Ot,render:Nt},Symbol.toStringTag,{value:"Module"}));function Le(t){const e=[];return t.length<10&&e.push("at least 10 characters"),/[a-z]/.test(t)||e.push("1 lowercase"),/[A-Z]/.test(t)||e.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t)||e.push("1 special character"),/[^\x00-\x7F]/.test(t)&&e.push("ASCII characters only"),e}function Ue(t){return t.length===0?"":t.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":t.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function Ut(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1 data-meta-copywrite-i118n='{"token": "create_account", "attribute": "textContent"}'>Create Account</h1>
        <p data-meta-copywrite-i118n='{"token": "please_enter_your_details_to_get_started", "attribute": "textContent"}'>Join StreamSyncEngage</p>

        <div class="auth-content">
          <form id="signupForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="first" data-meta-copywrite-i118n='{"token": "first_name", "attribute": "textContent"}'>FIRST NAME</label>
              <input
                type="text"
                id="first"
                name="first"
                placeholder="Enter your first name"
                data-meta-copywrite-i118n='{"token": "enter_your_name", "attribute": "placeholder"}'
                autocomplete="given-name"
              />
            </div>

            <div class="form-group">
              <label for="last" data-meta-copywrite-i118n='{"token": "last_name", "attribute": "textContent"}'>LAST NAME</label>
              <input
                type="text"
                id="last"
                name="last"
                placeholder="Enter your last name"
                data-meta-copywrite-i118n='{"token": "enter_your_name", "attribute": "placeholder"}'
                autocomplete="family-name"
              />
            </div>

            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                data-meta-copywrite-i118n='{"token": "enter_your_email", "attribute": "placeholder"}'
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="company" data-meta-copywrite-i118n='{"token": "company", "attribute": "textContent"}'>COMPANY (OPTIONAL)</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                data-meta-copywrite-i118n='{"token": "enter_company_name", "attribute": "placeholder"}'
                autocomplete="organization"
              />
            </div>

            <div class="form-group">
              <label for="phone" data-meta-copywrite-i118n='{"token": "phone", "attribute": "textContent"}'>PHONE (OPTIONAL)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                data-meta-copywrite-i118n='{"token": "enter_phone_number", "attribute": "placeholder"}'
                autocomplete="tel"
              />
            </div>

            <div class="form-group">
              <label for="password" data-meta-copywrite-i118n='{"token": "password", "attribute": "textContent"}'>PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  data-meta-copywrite-i118n='{"token": "enter_your_password", "attribute": "placeholder"}'
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
              <label for="confirmPassword" data-meta-copywrite-i118n='{"token": "confirm_password", "attribute": "textContent"}'>CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  data-meta-copywrite-i118n='{"token": "reenter_password", "attribute": "placeholder"}'
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

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "create_account", "attribute": "textContent"}'>CREATE ACCOUNT</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "already_have_an_account", "attribute": "textContent"}'>ALREADY HAVE AN ACCOUNT?</span> &nbsp; <a class="link-brand--uc__underline" href="#/signin" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</a>
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
  `}function Ft(){console.log("[SignupRoute] Initialized");const t=document.getElementById("signupForm"),e=t.querySelector('button[type="submit"]');Se("togglePassword","password","eyeIcon"),Se("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",o=>{o.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),l.publish(c.ROUTE_NAV,{route:"signin"})}),t.addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("first").value.trim(),a=document.getElementById("last").value.trim(),s=document.getElementById("email").value.trim(),d=document.getElementById("company").value.trim(),m=document.getElementById("phone").value.trim(),f=document.getElementById("password").value,y=document.getElementById("confirmPassword").value,R=document.getElementById("first"),T=document.getElementById("last"),C=document.getElementById("email"),G=document.getElementById("password"),u=document.getElementById("confirmPassword");if(be(r,R,g.get("validation_first_name_required"))&&be(a,T,g.get("validation_last_name_required"))&&Mt(s,C)&&Gt(f,G)){if(f!==y){V(u,g.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=g.get("loading_creating_account"),await Dt(r,a,s,d,m,f)}})}function Se(t,e,n){const o=document.getElementById(t),r=document.getElementById(e),a=document.getElementById(n);!o||!r||!a||o.addEventListener("click",()=>{const s=r.type==="password";r.type=s?"text":"password",s?a.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:a.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function be(t,e,n){return t?!0:(V(e,n),!1)}function Mt(t,e){if(!t)return V(e,g.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,o=(t.match(/\./g)||[]).length;return n!==1||o<1?(V(e,g.get("validation_email_invalid")),!1):!0}function Gt(t,e){if(!t)return V(e,g.get("validation_password_required")),!1;const n=Le(t);return n.length>0?(V(e,Ue(n)),!1):!0}function V(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Dt(t,e,n,o,r,a){const s=document.querySelector('button[type="submit"]');try{const d=le(a),m={email:n,hash:d,first:t,last:e};o&&(m.company=o),r&&(m.phone=r);const f=await F.doSignup(m);if(f.ok)l.publish(c.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const y=f.error||f.message||g.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(y,"danger"),s.disabled=!1,s.textContent=g.get("create_account").toUpperCase(),l.publish(c.AUTH_SIGNUP_FAIL,{message:y})}}catch(d){console.error("[SignupRoute] Sign up error:",d),typeof neodigmToast<"u"&&neodigmToast.q(d.message||g.get("error_network"),"danger"),s.disabled=!1,s.textContent=g.get("create_account").toUpperCase(),l.publish(c.AUTH_SIGNUP_FAIL,{message:d.message})}}const Ht=Object.freeze(Object.defineProperty({__proto__:null,init:Ft,render:Ut},Symbol.toStringTag,{value:"Module"}));function xt(){return`
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
  `}function Bt(){console.log("[VerfLinkRoute] Initialized");const t=7200,e=Date.now(),n=document.getElementById("countdown-display");function o(){const a=Date.now()-e,s=Math.floor(a/1e3),d=Math.max(0,t-s),m=Math.floor(d/3600),f=Math.floor(d%3600/60),y=d%60,R=`${String(m).padStart(2,"0")}:${String(f).padStart(2,"0")}:${String(y).padStart(2,"0")}`;n&&(n.textContent=R,d<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),d===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),d===0&&(clearInterval(r),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}o();const r=setInterval(o,1e3);window.addEventListener("beforeunload",()=>{clearInterval(r)})}const Vt=Object.freeze(Object.defineProperty({__proto__:null,init:Bt,render:xt},Symbol.toStringTag,{value:"Module"})),$t="https://streamsyncengage-saas.onrender.com";class qt{constructor(){this.baseUrl=$t}async request(e,n={}){const o=`${this.baseUrl}${e}`,r={"Content-Type":"application/json",...n.headers};try{const a=await fetch(o,{...n,headers:r});if(a.status===401||a.status===403){l.publish(c.AUTH_TOKEN_EXPIRED,{status:a.status,endpoint:e});const d=await a.json().catch(()=>({}));throw new Error(d.error||"Authentication failed")}const s=await a.json();return{ok:a.ok,status:a.status,data:s}}catch(a){throw console.error("API Request Error:",a),l.publish(c.APP_ERROR,{message:a.message,endpoint:e}),a}}async get(e){return this.request(e,{method:"GET"})}async post(e,n){return this.request(e,{method:"POST",body:JSON.stringify(n)})}async put(e,n){return this.request(e,{method:"PUT",body:JSON.stringify(n)})}async delete(e){return this.request(e,{method:"DELETE"})}async signin(e,n){return this.post("/api/acctEntity/signin",{email:e,hash:n})}async signup(e){return this.post("/api/acctEntity/signup",e)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(e){return this.post("/api/acctEntity/forgot",{email:e})}async resetHash(e,n){return this.post("/api/acctEntity/resethash",{email:e,hash:n})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,n){return this.put(`/api/acctEntity/${e}`,n)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get("/ping")}}const zt=new qt;function Yt(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1 data-meta-copywrite-i118n='{"token": "forgot_password", "attribute": "textContent"}'>Forgot Password</h1>
        <p data-meta-copywrite-i118n='{"token": "enter_email_for_reset", "attribute": "textContent"}'>Please enter your email to receive a password reset link</p>

        <div class="auth-content">
          <form id="forgot-form" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                data-meta-copywrite-i118n='{"token": "enter_your_email", "attribute": "placeholder"}'
                autocomplete="email"
              />
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "send_reset_link", "attribute": "textContent"}'>SEND RESET LINK</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "remember_password", "attribute": "textContent"}'>Remember your password?</span> &nbsp; <a class="link-brand--uc__underline" href="#/signin" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</a>
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

  `}function jt(){console.log("[ForgotRoute] Initialized");const t=document.getElementById("forgot-form"),e=document.getElementById("email");t?.addEventListener("submit",async n=>{n.preventDefault();const o=e.value.trim();Kt(o,e)&&await Wt(o)})}function Kt(t,e){if(!t)return Ae(e,g.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,o=(t.match(/\./g)||[]).length;return n!==1||o<1?(Ae(e,g.get("validation_email_invalid")),!1):!0}function Ae(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Wt(t){const e=document.querySelector(".btn");e.disabled=!0,e.textContent="SENDING...";try{const n=await zt.forgotPassword(t);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(g.get("success_reset_link_sent"),"success"),l.publish(c.AUTH_FORGOT_SUCCESS,{email:t}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||g.get("error_signin_failed"),"danger"),e.disabled=!1,e.textContent=g.get("send_reset_link").toUpperCase())}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||g.get("error_network"),"danger"),e.disabled=!1,e.textContent=g.get("send_reset_link").toUpperCase()}}const Xt=Object.freeze(Object.defineProperty({__proto__:null,init:jt,render:Yt},Symbol.toStringTag,{value:"Module"}));function Jt(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1 data-meta-copywrite-i118n='{"token": "reset_password", "attribute": "textContent"}'>Reset Password</h1>
        <p data-meta-copywrite-i118n='{"token": "update_your_password", "attribute": "textContent"}'>Update your account password</p>

        <div class="auth-content">
          <form id="resethash-form" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value="${F.getEntity()?.email||""}"
                readonly
                style="opacity: 0.6; cursor: not-allowed;"
              />
            </div>

            <div class="form-group">
              <label for="new-password" data-meta-copywrite-i118n='{"token": "new_password", "attribute": "textContent"}'>NEW PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  placeholder="Enter new password"
                  data-meta-copywrite-i118n='{"token": "enter_new_password", "attribute": "placeholder"}'
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
              <label for="confirm-password" data-meta-copywrite-i118n='{"token": "confirm_new_password", "attribute": "textContent"}'>CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  data-meta-copywrite-i118n='{"token": "confirm_new_password", "attribute": "placeholder"}'
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

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "update_password", "attribute": "textContent"}'>UPDATE PASSWORD</button>
          </form>

          <p class="auth-switch">
            <a href="#/home" class="link-brand--uc__underline" data-meta-copywrite-i118n='{"token": "cancel", "attribute": "textContent"}'>CANCEL</a>
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
  `}function Qt(){console.log("[ResethashRoute] Initialized");const t=document.getElementById("resethash-form"),e=t.querySelector('button[type="submit"]');Te("toggleNewPassword","new-password","eyeIconNew"),Te("toggleConfirmPassword","confirm-password","eyeIconConfirm"),t?.addEventListener("submit",async n=>{n.preventDefault();const o=t.email.value.trim(),r=t.newPassword.value,a=t.confirmPassword.value,s=document.getElementById("new-password"),d=document.getElementById("confirm-password");if(!r){B(s,g.get("validation_new_password_required"));return}const m=Le(r);if(m.length>0){B(s,Ue(m));return}if(!a){B(d,g.get("validation_new_password_required"));return}if(r!==a){B(d,g.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=g.get("loading_resetting_password");try{const f=le(r),y=await F.doResetHash(o,f);y.ok?(typeof neodigmToast<"u"&&neodigmToast.q(g.get("success_password_reset"),"success"),l.publish(c.AUTH_RESETHASH_SUCCESS,{email:o})):(B(s,y.error||g.get("error_signin_failed")),e.disabled=!1,e.textContent=g.get("update_password").toUpperCase())}catch(f){console.error("[ResethashRoute] Reset password error:",f),B(s,f.message||g.get("error_network")),e.disabled=!1,e.textContent=g.get("update_password").toUpperCase()}})}function Te(t,e,n){const o=document.getElementById(t),r=document.getElementById(e),a=document.getElementById(n);!o||!r||!a||o.addEventListener("click",()=>{const s=r.type==="password";r.type=s?"text":"password",s?a.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:a.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function B(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}const Zt=Object.freeze(Object.defineProperty({__proto__:null,init:Qt,render:Jt},Symbol.toStringTag,{value:"Module"}));class en extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.parseButtons(),this.render(),this.attachEventListeners()}parseButtons(){const e=this.getAttribute("data-buttons");if(e)try{this.buttons=JSON.parse(e);const n=this.buttons.find(o=>o.selected);if(this.selectedPrimaryToken=n?n.token:this.buttons[0]?.token||null,this.selectedPrimaryToken&&this.showSecondary){const o=this.buttons.find(r=>r.token===this.selectedPrimaryToken);if(o?.secondary?.length>0){const r=o.secondary.find(a=>a.enabled);this.selectedSecondaryToken=r?.token||null}}}catch(n){console.error("[M5TPrimaryNav] Error parsing buttons:",n),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(n=>n.token===this.selectedPrimaryToken)?.secondary||[]}render(){const e=this.getSecondaryButtons(),n=e.length>0;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100vw;
          margin: 0;
        }

        .nav-wrapper {
          background: white;
          border: 2px solid #000000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .nav-container {
          display: grid;
          grid-template-areas: "logo ${this.buttons.map((o,r)=>`btn${r}`).join(" ")}";
          grid-template-columns: 84px repeat(${this.buttons.length}, 1fr);
          height: 64px;
          background: white;
          overflow: hidden;
        }

        .secondary-nav {
          display: grid;
          grid-template-columns: repeat(${e.length}, 1fr);
          height: 48px;
          background: #f8f9fa;
          border-top: 1px solid #dee2e6;
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
          color: #000000;
          border-right: 2px solid #000000;
          cursor: pointer;
          user-select: none;
          transition: background 0.3s ease;
        }

        .logo:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .nav-button {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          background: white;
          color: #333;
          border: none;
          border-bottom: 3px solid transparent;
          border-left: 1px solid #e0e0e0;
          font-family: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
          padding: 6px;
        }

        .nav-button:first-of-type {
          border-left: none;
        }

        .nav-button:hover:not(.selected):not(:disabled) {
          background: #f5f5f5;
          color: #000000;
        }

        .nav-button.selected {
          background: #fafafa;
          color: #000000;
          border-bottom: 4px solid #000000;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Icon styles */
        .nav-button-icon {
          font-size: 1rem;
          opacity: 0.8;
        }

        .nav-button.selected .nav-button-icon {
          opacity: 1;
        }

        /* Secondary navigation styles */
        .secondary-nav .nav-button {
          background: #f8f9fa;
          font-size: 0.75rem;
          font-weight: 500;
          border-bottom: 2px solid transparent;
          border-left: 1px solid #dee2e6;
          height: 48px;
          gap: 2px;
        }

        .secondary-nav .nav-button:first-of-type {
          border-left: none;
        }

        .secondary-nav .nav-button:hover:not(.selected):not(:disabled) {
          background: #e9ecef;
        }

        .secondary-nav .nav-button.selected {
          background: #e9ecef;
          border-bottom: 3px solid #495057;
        }

        .secondary-nav .nav-button-icon {
          font-size: 0.85rem;
        }

        /* Count badge */
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
          background: #000000;
          color: white;
          font-size: 11px;
          font-weight: 700;
          border-radius: 10px;
          line-height: 1;
        }

        /* Admin role indicator */
        .nav-button[data-admin="true"]::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          width: 8px;
          height: 8px;
          background: #dc3545;
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(220, 53, 69, 0.5);
        }

        /* Tooltip for tagline */
        .nav-button[title]:hover::after {
          content: attr(title);
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          font-size: 0.75rem;
          font-weight: 400;
          text-transform: none;
          letter-spacing: normal;
          white-space: nowrap;
          border-radius: 4px;
          pointer-events: none;
          z-index: 1001;
          opacity: 0;
          animation: tooltipFadeIn 0.2s ease-in forwards;
        }

        @keyframes tooltipFadeIn {
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          :host {
            width: 100vw;
          }

          .nav-container {
            height: 54px;
            grid-template-columns: 64px repeat(${this.buttons.length}, 1fr);
          }

          .secondary-nav {
            height: 42px;
            grid-template-columns: repeat(${e.length}, 1fr);
          }

          .logo {
            font-size: 1.1rem;
          }

          .nav-button {
            font-size: 0.75rem;
            gap: 2px;
          }

          .nav-button-icon {
            font-size: 0.9rem;
          }

          .secondary-nav .nav-button {
            font-size: 0.7rem;
          }

          .secondary-nav .nav-button-icon {
            font-size: 0.8rem;
          }

          .count-badge {
            top: 4px;
            right: 4px;
            min-width: 18px;
            height: 18px;
            font-size: 10px;
          }

          /* Hide tooltips on mobile */
          .nav-button[title]:hover::after {
            display: none;
          }
        }
      </style>

      <div class="nav-wrapper">
        <nav class="nav-container">
          <div class="logo">SSE</div>
          ${this.buttons.map((o,r)=>this.renderButton(o,r,"primary")).join("")}
        </nav>
        ${n?`
          <nav class="secondary-nav">
            ${e.map((o,r)=>this.renderButton(o,r,"secondary")).join("")}
          </nav>
        `:""}
      </div>
    `}renderButton(e,n,o="primary"){const r=o==="primary"?e.token===this.selectedPrimaryToken:e.token===this.selectedSecondaryToken,a=typeof e.count=="number"||e.count!==""&&e.count!=null,s=e.icon&&e.icon.trim()!=="",d=e.tagline&&e.tagline.trim()!=="";return`
      <button
        class="nav-button ${r?"selected":""}"
        data-token="${e.token}"
        data-level="${o}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?"":"disabled"}
        ${d?`title="${e.tagline}"`:""}
        style="grid-area: ${o==="primary"?`btn${n}`:"auto"}"
      >
        ${s?`<i class="${e.icon} nav-button-icon"></i>`:""}
        <span>${e.caption}</span>
        ${a?`<span class="count-badge">${e.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(o=>{o.addEventListener("click",r=>{const a=r.currentTarget.getAttribute("data-token"),s=r.currentTarget.getAttribute("data-level");a&&!r.currentTarget.disabled&&(s==="primary"?this.selectPrimaryButton(a):this.selectSecondaryButton(a))})});const n=this.shadowRoot.querySelector(".logo");n&&n.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}}))})}selectPrimaryButton(e){const n=this.buttons.find(o=>o.token===e);if(this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{token:e,level:"primary",hasSecondary:(n?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e){if(this.selectedPrimaryToken=e,n?.secondary?.length>0&&this.showSecondary){const o=n.secondary.find(r=>r.enabled);this.selectedSecondaryToken=o?.token||null}else this.selectedSecondaryToken=null;this.render(),this.attachEventListeners()}}selectSecondaryButton(e){this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{token:e,primaryToken:this.selectedPrimaryToken,level:"secondary",timestamp:Date.now()}})),this.selectedSecondaryToken!==e&&(this.selectedSecondaryToken=e,this.render(),this.attachEventListeners())}updateButtons(e){this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,n,o="primary"){let r;o==="primary"?r=this.buttons.find(a=>a.token===e):r=this.getSecondaryButtons().find(s=>s.token===e),r&&(r.count=n,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:this.selectedSecondaryToken}}}customElements.define("m5t-primary-nav",en);class ce{static#e=null;static#t={SSE_SaaS_Client:[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-profile-account)",admin_role:!1,tagline:"Manage account settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!0,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!0,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!0,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!0,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!0,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!0,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!0,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!0,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!0,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!0,tagline:"Manage application deployments",secondary:[]}],SSE_console_applet:[{token:"USER_MANAGEMENT",caption:"User Management",enabled:!0,icon:"fas fa-users",admin_role:!0,tagline:"Manage user accounts and permissions",secondary:[{token:"USER_MANAGEMENT_LIST",caption:"All Users",enabled:!0,icon:"fas fa-list",admin_role:!0,tagline:"View and edit all user accounts",secondary:[]},{token:"USER_MANAGEMENT_ROLES",caption:"Roles",enabled:!0,icon:"fas fa-user-tag",admin_role:!0,tagline:"Manage user roles and permissions",secondary:[]},{token:"USER_MANAGEMENT_ACTIVITY",caption:"Activity",enabled:!0,icon:"fas fa-history",admin_role:!0,tagline:"User activity and audit logs",secondary:[]}]},{token:"CORRESPONDENCE",caption:"Correspondence",enabled:!0,icon:"fas fa-mail-bulk",admin_role:!0,tagline:"Manage system correspondence and templates",secondary:[{token:"CORRESPONDENCE_ALL",caption:"All Messages",enabled:!0,icon:"fas fa-envelope-open",admin_role:!0,tagline:"View all system correspondence",secondary:[]},{token:"CORRESPONDENCE_TEMPLATES",caption:"Templates",enabled:!0,icon:"fas fa-file-code",admin_role:!0,tagline:"Email and SMS templates",secondary:[]}]},{token:"METERING",caption:"Metering",enabled:!0,icon:"fas fa-chart-area",admin_role:!0,tagline:"Usage metering and analytics",secondary:[{token:"METERING_OVERVIEW",caption:"Overview",enabled:!0,icon:"fas fa-eye",admin_role:!0,tagline:"Metering overview and trends",secondary:[]},{token:"METERING_DETAILS",caption:"Details",enabled:!0,icon:"fas fa-info-circle",admin_role:!0,tagline:"Detailed metering data",secondary:[]}]},{token:"CONFIG",caption:"Configuration",enabled:!0,icon:"fas fa-sliders-h",admin_role:!0,tagline:"System configuration and feature flags",secondary:[{token:"CONFIG_FEATURE_FLAGS",caption:"Feature Flags",enabled:!0,icon:"fas fa-flag",admin_role:!0,tagline:"Manage feature flags from coreMeta",secondary:[]},{token:"CONFIG_ENVIRONMENT",caption:"Environment",enabled:!0,icon:"fas fa-globe",admin_role:!0,tagline:"Environment-specific settings",secondary:[]}]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static getPrimaryNav(){return this.#e?this.#t[this.#e]||[]:(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const e=this.getPrimaryNav(),n=[];return e.forEach(o=>{n.push(o),o.secondary&&o.secondary.length>0&&n.push(...o.secondary)}),n}static getNavByToken(e){return this.getFlattenedNav().find(o=>o.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const n=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,o=await fetch(`${e}/coreMeta?meta_token=${n}`);if(!o.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${o.status}), using static config`),this.getPrimaryNav();const r=await o.json();return r.ok&&r.data&&r.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${n}`),r.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(n){return console.error("[NavMetaManager] Error fetching from coreMeta:",n),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:ce});ce.setAppToken("SSE_SaaS_Client");function tn(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-buttons='${ce.getPrimaryNavJSON()}'
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
        padding: 0;
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
  `}function nn(){console.log("[HomeRoute] Initialized")}const on=Object.freeze(Object.defineProperty({__proto__:null,init:nn,render:tn},Symbol.toStringTag,{value:"Module"}));function rn(){return`
    <div class="auth-container">
      <div class="auth-left">
        <h1 data-meta-copywrite-i118n='{"token": "sign_out", "attribute": "textContent"}'>Sign Out</h1>
        <p data-meta-copywrite-i118n='{"token": "are_you_sure_sign_out", "attribute": "textContent"}'>Are you sure you want to sign out?</p>

        <div class="auth-content">
          <button id="confirm-signout-btn" class="btn" data-meta-copywrite-i118n='{"token": "sign_out", "attribute": "textContent"}'>SIGN OUT</button>

          <p class="auth-switch">
            <a id="cancel-signout-btn" class="link-brand--uc__underline" href="#/home" data-meta-copywrite-i118n='{"token": "cancel", "attribute": "textContent"}'>CANCEL</a>
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
  `}function an(){console.log("[SignoutRoute] Initialized");const t=document.getElementById("confirm-signout-btn");t?.addEventListener("click",async()=>{t.disabled=!0,t.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await F.doSignout()})}const sn=Object.freeze(Object.defineProperty({__proto__:null,init:an,render:rn},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
