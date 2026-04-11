(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Me="modulepreload",xe=function(e){return"/"+e},ue={},F=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){let E=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(I=>({status:"fulfilled",value:I}),I=>({status:"rejected",reason:I}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=c?.nonce||c?.getAttribute("nonce");r=E(n.map(g=>{if(g=xe(g),g in ue)return;ue[g]=!0;const v=g.endsWith(".css"),I=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${I}`))return;const y=document.createElement("link");if(y.rel=v?"stylesheet":Me,v||(y.as="script"),y.crossOrigin="",y.href=g,f&&y.setAttribute("nonce",f),document.head.appendChild(y),v)return new Promise((O,k)=>{y.addEventListener("load",O),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return r.then(c=>{for(const f of c||[])f.status==="rejected"&&i(f.reason);return t().catch(i)})};var Ve=/([:*])(\w+)/g,$e="([^/]+)",je=/\*/g,ze="?(?:.*)",qe=/\/\?/g,Ke="/?([^/]+|)",Ye="(?:/^|^)",We="";function ye(e){return e===void 0&&(e="/"),re()?location.pathname+location.search+location.hash:e}function A(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function q(e){return typeof e=="string"}function Xe(e){return typeof e=="function"}function K(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Je(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,o,r){return n===null&&(n={}),n[t[r]]=decodeURIComponent(o),n},null)}function Y(e){var t=A(e).split(/\?(.*)?$/);return[A(t[0]),t.slice(1).join("")]}function oe(e){for(var t={},n=e.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(r[0]!==""){var i=decodeURIComponent(r[0]);t[i]?(Array.isArray(t[i])||(t[i]=[t[i]]),t[i].push(decodeURIComponent(r[1]||""))):t[i]=decodeURIComponent(r[1]||"")}}return t}function Te(e,t){var n=Y(A(e.currentLocationPath)),o=n[0],r=n[1],i=r===""?null:oe(r),c=[],f;if(q(t.path)){if(f=Ye+A(t.path).replace(Ve,function(I,y,O){return c.push(O),$e}).replace(je,ze).replace(qe,Ke)+"$",A(t.path)===""&&A(o)==="")return{url:o,queryString:r,hashString:K(e.to),route:t,data:null,params:i}}else f=t.path;var E=new RegExp(f,We),g=o.match(E);if(g){var v=q(t.path)?Je(g,c):g.groups?g.groups:g.slice(1);return{url:A(o.replace(new RegExp("^"+e.instance.root),"")),queryString:r,hashString:K(e.to),route:t,data:v,params:i}}return!1}function be(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function H(e,t){return typeof e[t]>"u"||e[t]===!0}function Ze(e){if(!e)return{};var t=e.split(","),n={},o;return t.forEach(function(r){var i=r.split(":").map(function(c){return c.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":n.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":o||(o={}),o.strategy=i[1];break;case"resolveOptionsHash":o||(o={}),o.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[i[0]]=i[1]==="true";break}}),o&&(n.resolveOptions=o),n}function re(){return typeof window<"u"}function Qe(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(o){n[o]&&(t[o]||(t[o]=[]),t[o].push(n[o]))})}),t}function L(e,t,n){var o=t||{},r=0;(function i(){if(!e[r]){n&&n(o);return}Array.isArray(e[r])?(e.splice.apply(e,[r,1].concat(e[r][0](o)?e[r][1]:e[r][2])),i()):e[r](o,function(c){typeof c>"u"||c===!0?(r+=1,i()):n&&n(o)})})()}L.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function de(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=ye(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function J(e,t){for(var n=0;n<e.instance.routes.length;n++){var o=e.instance.routes[n],r=Te(e,o);if(r&&(e.matches||(e.matches=[]),e.matches.push(r),e.resolveOptions.strategy==="ONE")){t();return}}t()}function et(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function tt(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var fe=re(),nt=be();function ot(e,t){if(H(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),o=fe&&e.resolveOptions&&e.resolveOptions.hash===!0;nt?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!o){var r=location.hash;location.hash="",location.hash=r}e.instance.__freezeListening=!1},1))):fe&&(window.location.href=e.to)}t()}function Ie(e,t){var n=e.instance;if(!n.lastResolved()){t();return}L(n.lastResolved().map(function(o){return function(r,i){if(!o.route.hooks||!o.route.hooks.leave){i();return}var c=!1,f=e.instance.matchLocation(o.route.path,e.currentLocationPath,!1);if(o.route.path!=="*")c=!f;else{var E=e.matches?e.matches.find(function(g){return o.route.path===g.route.path}):!1;c=!E}if(H(e.navigateOptions,"callHooks")&&c){L(o.route.hooks.leave.map(function(g){return function(v,I){return g(function(y){y===!1?e.instance.__markAsClean(e):I()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return t()})}function rt(e,t){e.match.route.hooks&&e.match.route.hooks.before&&H(e.navigateOptions,"callHooks")?L(e.match.route.hooks.before.map(function(n){return function(r,i){return n(function(c){c===!1?e.instance.__markAsClean(e):i()},e.match)}}).concat([function(){return t()}])):t()}function st(e,t){H(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function it(e,t){e.match.route.hooks&&e.match.route.hooks.after&&H(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function at(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(o){o.route.hooks&&o.route.hooks.already&&H(e.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(r){return r(e.match)})}),t(!1);return}t()}function lt(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var o=Y(e.currentLocationPath),r=o[0],i=o[1],c=K(e.to);n.path=A(r);var f={url:n.path,queryString:i,hashString:c,data:null,route:n,params:i!==""?oe(i):null};e.matches=[f],e.match=f}t()}function ct(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function ut(e,t){e.instance._setCurrent(null),t()}function Re(e,t){H(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var we=[at,rt,st,it],pe=[Ie,lt,L.if(function(e){var t=e.notFoundHandled;return t},we.concat([Re]),[ct,ut])];function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},te.apply(this,arguments)}function he(e,t){var n=0;function o(){if(n===e.matches.length){Re(e,t);return}L(we,te({},e,{match:e.matches[n]}),function(){n+=1,o()})}Ie(e,o)}function Z(e){e.instance.__markAsClean(e)}function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ne.apply(this,arguments)}var ge="[data-navigo]";function dt(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:ge},o=this,r="/",i=null,c=[],f=!1,E,g=be(),v=re();e?r=A(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function I(s){return s.indexOf("#")>=0&&(n.hash===!0?s=s.split("#")[1]||"/":s=s.split("#")[0]),s}function y(s){return A(r+"/"+A(s))}function O(s,d,m,S){return s=q(s)?y(s):s,{name:S||A(String(s)),path:s,handler:d,hooks:Qe(m)}}function k(s,d,m){var S=this;return typeof s=="object"&&!(s instanceof RegExp)?(Object.keys(s).forEach(function(_){if(typeof s[_]=="function")S.on(_,s[_]);else{var P=s[_],x=P.uses,De=P.as,Be=P.hooks;c.push(O(_,x,[E,Be],De))}}),this):(typeof s=="function"&&(m=d,d=s,s=r),c.push(O(s,d,[E,m])),this)}function u(s,d){if(o.__dirty){o.__waiting.push(function(){return o.resolve(s,d)});return}else o.__dirty=!0;s=s?A(r)+"/"+A(s):void 0;var m={instance:o,to:s,currentLocationPath:s,navigateOptions:{},resolveOptions:ne({},n,d)};return L([de,J,L.if(function(S){var _=S.matches;return _&&_.length>0},he,pe)],m,Z),m.matches?m.matches:!1}function p(s,d){if(o.__dirty){o.__waiting.push(function(){return o.navigate(s,d)});return}else o.__dirty=!0;s=A(r)+"/"+A(s);var m={instance:o,to:s,navigateOptions:d||{},resolveOptions:d&&d.resolveOptions?d.resolveOptions:n,currentLocationPath:I(s)};L([et,tt,J,L.if(function(S){var _=S.matches;return _&&_.length>0},he,pe),ot,Z],m,Z)}function h(s,d,m){var S=ae(s,d);return S!==null?(p(S.replace(new RegExp("^/?"+r),""),m),!0):!1}function T(s){return this.routes=c=c.filter(function(d){return q(s)?A(d.path)!==A(s):Xe(s)?s!==d.handler:String(d.path)!==String(s)}),this}function b(){g&&(this.__popstateListener=function(){o.__freezeListening||u()},window.addEventListener("popstate",this.__popstateListener))}function R(){this.routes=c=[],g&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=f=!0}function C(s,d){return o._notFoundRoute=O("*",s,[E,d],"__NOT_FOUND__"),this}function U(){if(v)return G().forEach(function(s){if(s.getAttribute("data-navigo")==="false"||s.getAttribute("target")==="_blank"){s.hasListenerAttached&&s.removeEventListener("click",s.navigoHandler);return}s.hasListenerAttached||(s.hasListenerAttached=!0,s.navigoHandler=function(d){if((d.ctrlKey||d.metaKey)&&d.target.tagName.toLowerCase()==="a")return!1;var m=s.getAttribute("href");if(typeof m>"u"||m===null)return!1;if(m.match(/^(http|https)/)&&typeof URL<"u")try{var S=new URL(m);m=S.pathname+S.search}catch{}var _=Ze(s.getAttribute("data-navigo-options"));f||(d.preventDefault(),d.stopPropagation(),o.navigate(A(m),_))},s.addEventListener("click",s.navigoHandler))}),o}function G(){return v?[].slice.call(document.querySelectorAll(n.linksSelector||ge)):[]}function X(s){return"/"+r+"/"+A(s)}function M(s){return E=s,this}function Le(){return i}function ae(s,d,m){var S=c.find(function(x){return x.name===s}),_=null;if(S){if(_=S.path,d)for(var P in d)_=_.replace(":"+P,d[P]);_=_.match(/^\//)?_:"/"+_}return _&&m&&!m.includeRoot&&(_=_.replace(new RegExp("^/"+r),"")),_}function Ce(s){return s.getAttribute("href")}function le(s){var d=Y(A(s)),m=d[0],S=d[1],_=S===""?null:oe(S),P=K(s),x=O(m,function(){},[E],m);return{url:m,queryString:S,hashString:P,route:x,data:null,params:_}}function Fe(){return le(A(ye(r)).replace(new RegExp("^"+r),""))}function ke(s){var d={instance:o,currentLocationPath:s,to:s,resolveOptions:n};return J(d,function(){}),d.matches?d.matches:!1}function He(s,d,m){typeof d<"u"&&(typeof m>"u"||m)&&(d=y(d));var S={instance:o,to:d,currentLocationPath:d};de(S,function(){}),typeof s=="string"&&(s=typeof m>"u"||m?y(s):s);var _=Te(S,{name:String(s),path:s,handler:function(){},hooks:{}});return _||!1}function z(s,d,m){return typeof d=="string"&&(d=ce(d)),d?(d.hooks[s]||(d.hooks[s]=[]),d.hooks[s].push(m),function(){d.hooks[s]=d.hooks[s].filter(function(S){return S!==m})}):(console.warn("Route doesn't exists: "+d),function(){})}function ce(s){return typeof s=="string"?c.find(function(d){return d.name===y(s)}):c.find(function(d){return d.handler===s})}function Ge(s){s.instance.__dirty=!1,s.instance.__waiting.length>0&&s.instance.__waiting.shift()()}this.root=r,this.routes=c,this.destroyed=f,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Ge,this.on=k,this.off=T,this.resolve=u,this.navigate=p,this.navigateByName=h,this.destroy=R,this.notFound=C,this.updatePageLinks=U,this.link=X,this.hooks=M,this.extractGETParameters=function(s){return Y(I(s))},this.lastResolved=Le,this.generate=ae,this.getLinkPath=Ce,this.match=ke,this.matchLocation=He,this.getCurrentLocation=Fe,this.addBeforeHook=z.bind(this,"before"),this.addAfterHook=z.bind(this,"after"),this.addAlreadyHook=z.bind(this,"already"),this.addLeaveHook=z.bind(this,"leave"),this.getRoute=ce,this._pathToMatchObject=le,this._clean=A,this._checkForAHash=I,this._setCurrent=function(s){return i=o.current=s},b.call(this),U.call(this)}var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var V={exports:{}},ht=V.exports,me;function gt(){return me||(me=1,(function(e,t){(function(n,o){var r={};n.PubSub?(r=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=r,o(r)),e!==void 0&&e.exports&&(t=e.exports=r),t.PubSub=r,e.exports=t=r})(typeof window=="object"&&window||ht||ft,function(n){var o={},r=-1,i="*";function c(u){var p;for(p in u)if(Object.prototype.hasOwnProperty.call(u,p))return!0;return!1}function f(u){return function(){throw u}}function E(u,p,h){try{u(p,h)}catch(T){setTimeout(f(T),0)}}function g(u,p,h){u(p,h)}function v(u,p,h,T){var b=o[p],R=T?g:E,C;if(Object.prototype.hasOwnProperty.call(o,p))for(C in b)Object.prototype.hasOwnProperty.call(b,C)&&R(b[C],u,h)}function I(u,p,h){return function(){var b=String(u),R=b.lastIndexOf(".");for(v(u,u,p,h);R!==-1;)b=b.substr(0,R),R=b.lastIndexOf("."),v(u,b,p,h);v(u,i,p,h)}}function y(u){var p=String(u),h=!!(Object.prototype.hasOwnProperty.call(o,p)&&c(o[p]));return h}function O(u){for(var p=String(u),h=y(p)||y(i),T=p.lastIndexOf(".");!h&&T!==-1;)p=p.substr(0,T),T=p.lastIndexOf("."),h=y(p);return h}function k(u,p,h,T){u=typeof u=="symbol"?u.toString():u;var b=I(u,p,T),R=O(u);return R?(h===!0?b():setTimeout(b,0),!0):!1}n.publish=function(u,p){return k(u,p,!1,n.immediateExceptions)},n.publishSync=function(u,p){return k(u,p,!0,n.immediateExceptions)},n.subscribe=function(u,p){if(typeof p!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(o,u)||(o[u]={});var h="uid_"+String(++r);return o[u][h]=p,h},n.subscribeAll=function(u){return n.subscribe(i,u)},n.subscribeOnce=function(u,p){var h=n.subscribe(u,function(){n.unsubscribe(h),p.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){o={}},n.clearSubscriptions=function(p){var h;for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&h.indexOf(p)===0&&delete o[h]},n.countSubscriptions=function(p){var h,T,b=0;for(h in o)if(Object.prototype.hasOwnProperty.call(o,h)&&h.indexOf(p)===0){for(T in o[h])b++;break}return b},n.getSubscriptions=function(p){var h,T=[];for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&h.indexOf(p)===0&&T.push(h);return T},n.unsubscribe=function(u){var p=function(X){var M;for(M in o)if(Object.prototype.hasOwnProperty.call(o,M)&&M.indexOf(X)===0)return!0;return!1},h=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(o,u)||p(u)),T=!h&&typeof u=="string",b=typeof u=="function",R=!1,C,U,G;if(h){n.clearSubscriptions(u);return}for(C in o)if(Object.prototype.hasOwnProperty.call(o,C)){if(U=o[C],T&&U[u]){delete U[u],R=u;break}if(b)for(G in U)Object.prototype.hasOwnProperty.call(U,G)&&U[G]===u&&(delete U[G],R=!0)}return R}})})(V,V.exports)),V.exports}var mt=gt();const a=pt(mt),l=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME.BACK.CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR"}),Q={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var ee={};const $=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure"});function Oe(e,t=null){if(e in $)return $[e];if(typeof process<"u"&&ee&&ee[e]){const n=ee[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&Q&&Q[e]){const n=Q[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return t}function _t(e){return Oe(e,!1)===!0}function Et(){return{...$}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:$,getFlag:Oe,isEnabled:_t,getAllFlags:Et});function vt(){console.log("[AppEvents] Initializing event listeners..."),a.subscribe(l.APP_READY,(e,t)=>{console.log("[AppEvents] APP_READY:",t)}),a.subscribe(l.APP_ERROR,(e,t)=>{console.error("[AppEvents] APP_ERROR:",t)}),a.subscribe(l.APP_SIGNOUT,(e,t)=>{console.log("[AppEvents] APP_SIGNOUT:",t)}),a.subscribe(l.ROUTE_NAV_BEFORE,(e,t)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",t),a.publish(l.UI_LOADING_START)}),a.subscribe(l.ROUTE_NAV_AFTER,(e,t)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",t),a.publish(l.UI_LOADING_END)}),a.subscribe(l.ROUTE_NAV_ERROR,(e,t)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",t),a.publish(l.APP_ERROR,{message:"Navigation error",details:t})}),a.subscribe(l.AUTH_SIGNIN_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",t)}),a.subscribe(l.AUTH_SIGNIN_FAIL,(e,t)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",t),a.publish(l.UI_TOAST,{message:t.message||"Sign in failed",type:"danger"})}),a.subscribe(l.AUTH_SIGNUP_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),a.publish(l.AUTH_VERIFY_LINK)}),a.subscribe(l.AUTH_VERIFY_LINK,(e,t)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),a.subscribe(l.AUTH_SIGNUP_FAIL,(e,t)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",t),a.publish(l.UI_TOAST,{message:t.message||"Sign up failed",type:"danger"})}),a.subscribe(l.AUTH_SIGNOUT_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Signed out successfully",type:"info"})}),a.subscribe(l.AUTH_SIGNUP,(e,t)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),a.subscribe(l.AUTH_FORGOT,(e,t)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),a.subscribe(l.AUTH_FORGOT_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),a.subscribe(l.AUTH_RESETHASH_NAV,(e,t)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),a.subscribe(l.AUTH_RESETHASH_SUCCESS,(e,t)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",t),a.publish(l.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),a.subscribe(l.AUTH_TOKEN_EXPIRED,(e,t)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",t),a.publish(l.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),a.subscribe(l.UI_LOADING_START,(e,t)=>{const n=document.getElementById("app-loader");n&&n.classList.add("active")}),a.subscribe(l.UI_LOADING_END,(e,t)=>{const n=document.getElementById("app-loader");n&&n.classList.remove("active")}),a.subscribe(l.UI_TOAST,(e,t)=>{console.log("[AppEvents] UI_TOAST:",t)}),a.subscribe(l.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const e="0.1",t=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${e} 4/10/2026, 7:05:25 PM|© ${t} Mach Five Tech`,"night")}),a.subscribe(l.AUTH_SIGNOUT,(e,t)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem($.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}class N{static CONFIG={BASE_URL:window.location.hostname==="localhost"?"http://localhost:3333":"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#i=!1;static#e=null;static#t=null;static#n=null;static#r=null;static async init({BASE_URL:t,navigateFunction:n,customConfig:o={}}={}){if(this.#i)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#r=n;else throw new Error("navigateFunction is required and must be a function");return t&&(this.CONFIG.BASE_URL=t),o&&Object.keys(o).length>0&&(this.CONFIG={...this.CONFIG,...o}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#d(),this.#u(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#a(),this.#i=!0,console.log("[AuthController] Initialized successfully"),!0}catch(r){return console.error("[AuthController] Initialization failed:",r),!1}}static#u(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((t=null)=>{t&&(console.log("[AuthController] mvvLegit navigation to:",t),this.#o(t))}).setOnState((t=null)=>{if(t)switch(console.log("[AuthController] Auth state changed:",t),t){case"AUTH":case 4:this.#p();break;case"UNAUTH":case 1:this.#h();break;case"UNVERF":case 2:this.#g();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#o(t){if(!this.#r){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",t);const n=t.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#r(n)}static#d(){try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);t&&(this.#t=JSON.parse(t),console.log("[AuthController] Entity state loaded:",this.#t?.email))}catch(t){console.error("[AuthController] Error loading entity state:",t),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#t=null}this.#n=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#s(t){try{this.#t=t,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(t)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#f(){this.#t=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#t}static async doSignin(t,n){try{const o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n})}),r=await o.json();return o.status===303?(console.warn("[AuthController] Password reset required"),r.accessToken&&(mvvLegit.doSignin(r.accessToken),this.#s(r.entity)),setTimeout(()=>{this.#o(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:r}):o.ok&&r.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(r.accessToken),this.#s(r.entity),console.log("[AuthController] Explicitly navigating to home"),this.#o(this.CONFIG.ROUTES.HOME),{ok:!0,data:r}):{ok:!1,error:r.error||"Sign in failed",data:r}}catch(o){return console.error("[AuthController] Signin error:",o),{ok:!1,error:o.message}}}static async doSignout(t=!1){console.log("[AuthController] doSignout called, serverInitiated:",t);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!t&&n){const o=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",o),navigator.sendBeacon){const r=navigator.sendBeacon(o);console.log("[AuthController] Beacon sent:",r),r||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Clearing entity state..."),this.#f(),console.log("[AuthController] Stopping auth ping..."),this.#l(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(t){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),o=await n.json();return n.ok&&o.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#s(o.entity),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign up failed",data:o}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(t,n){try{const o=mvvLegit.getConf()?.token,r=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n,modified_by:t})}),i=await r.json();return r.ok&&i.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:i}):{ok:!1,error:i.error||"Password reset failed",data:i}}catch(o){return console.error("[AuthController] Reset password error:",o),{ok:!1,error:o.message}}}static#a(){this.#e&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#e)),this.#e=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#c()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#e}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#l(){this.#e&&(clearInterval(this.#e),this.#e=null,console.log("[AuthController] Auth ping stopped"))}static async#c(){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);t.ok?console.log("[AuthController] Ping success"):(t.status===401||t.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(t){console.error("[AuthController] Ping error:",t)}}static setDeepLinkGuid(t){this.#n=t,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,t),console.log("[AuthController] Deep-link GUID stored:",t)}static getDeepLinkGuid(){return this.#n}static clearDeepLink(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#p(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#a()}static#h(){console.log("[AuthController] User unauthenticated"),this.#l()}static#g(){console.log("[AuthController] User unverified")}static getAuthState(){try{const t=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(t);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const o=LZString.decompressFromUTF16(n),i=JSON.parse(o)?.state;return i===1?"UNAUTH":i===2?"UNVERF":i===4?"AUTH":i===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(t){this.#o(t)}static isPingActive(){return this.#e!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#c()}}console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(e){console.log("mvvLegit (direct): ReferenceError -",e.message)}const St=Object.keys(window).filter(e=>e.toLowerCase().includes("mvv")||e.toLowerCase().includes("neodigm")||e.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",St);const w=new dt("/",{hash:!0});window.router=w;function se(e){const t=e?`${e.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),a.publish(l.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function j(e){console.log("[Router] Navigating to:",e),w.navigate(`/${e}`)}w.on("/",()=>{console.log("[Router] Route: /"),a.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),F(()=>Promise.resolve().then(()=>Ne),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:e})})});w.on("/splash",()=>{console.log("[Router] Route: /splash"),a.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),F(()=>Promise.resolve().then(()=>Ne),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:e})})});w.on("/signin",()=>{console.log("[Router] Route: /signin"),a.publish(l.ROUTE_NAV_BEFORE,{route:"signin"}),F(()=>Promise.resolve().then(()=>Nt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"signin"})}).catch(e=>{console.error("[Router] Error loading signin route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"signin",error:e})})});w.on("/signup",()=>{console.log("[Router] Route: /signup"),a.publish(l.ROUTE_NAV_BEFORE,{route:"signup"}),F(()=>Promise.resolve().then(()=>kt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"signup"})}).catch(e=>{console.error("[Router] Error loading signup route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"signup",error:e})})});w.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),a.publish(l.ROUTE_NAV_BEFORE,{route:"verf-link"}),F(()=>Promise.resolve().then(()=>Dt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(e=>{console.error("[Router] Error loading verf-link route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"verf-link",error:e})})});w.on("/forgot",()=>{console.log("[Router] Route: /forgot"),a.publish(l.ROUTE_NAV_BEFORE,{route:"forgot"}),F(()=>Promise.resolve().then(()=>qt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(e=>{console.error("[Router] Error loading forgot route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"forgot",error:e})})});w.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!se("resethash")){j("signin");return}a.publish(l.ROUTE_NAV_BEFORE,{route:"resethash"}),F(()=>Promise.resolve().then(()=>Wt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(e=>{console.error("[Router] Error loading resethash route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"resethash",error:e})})});w.on("/home",()=>{if(console.log("[Router] Route: /home"),!se("home")){j("signin");return}a.publish(l.ROUTE_NAV_BEFORE,{route:"home"}),F(()=>Promise.resolve().then(()=>Zt),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"home"})}).catch(e=>{console.error("[Router] Error loading home route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"home",error:e})})});w.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!se("signout")){j("signin");return}a.publish(l.ROUTE_NAV_BEFORE,{route:"signout"}),F(()=>Promise.resolve().then(()=>tn),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),a.publish(l.ROUTE_NAV_AFTER,{route:"signout"})}).catch(e=>{console.error("[Router] Error loading signout route:",e),a.publish(l.ROUTE_NAV_ERROR,{route:"signout",error:e})})});w.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),j("splash")});function _e(){console.log("[App] Waiting for Neodigm 55 library...");let e=0;const t=100,n=setInterval(()=>{e++,e%10===0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(n),At()):e>=t&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,a.publish(l.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_e):_e();async function At(){if(console.log("[App] Neodigm 55 loaded, initializing..."),vt(),!await N.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),j(n)}})){console.error("[App] AuthController initialization failed");return}const t=N.getEntity();t&&(console.log("[App] Session restored for:",t.email),a.publish(l.APP_USER_LOADED,{entity:t})),a.publish(l.APP_READY,{timestamp:new Date().toISOString(),sessionUser:t}),w.resolve(),window.AuthController=N,console.log("[App] StreamSyncEngage client initialized (AuthController available globally)")}function yt(){return`
    <div class="splash-container">
      <div class="splash-content">
        <h1>StreamSyncEngage</h1>
        <p class="tagline">Real-time messaging and account management platform</p>

        <div class="splash-actions">
          <button class="btn btn-primary" data-nav="signin">
            Sign In
          </button>
          <button class="btn btn-secondary" data-nav="signup">
            Sign Up
          </button>
        </div>

        <div class="splash-info">
          <p>Please check your email to verify your account if you just signed up.</p>
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
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      .splash-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 2rem;
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

      .splash-info {
        margin-top: 2rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        font-size: 0.9rem;
      }
    </style>
  `}function Tt(){console.log("[SplashRoute] Initialized"),document.querySelectorAll("[data-nav]").forEach(e=>{e.addEventListener("click",t=>{const n=t.target.getAttribute("data-nav");console.log("[SplashRoute] Button clicked, navigating to:",n),a.publish(l.ROUTE_NAV,{route:n}),window.location.hash=`#/${n}`})}),console.log("[SplashRoute] Attached click handlers to",document.querySelectorAll("[data-nav]").length,"buttons")}const Ne=Object.freeze(Object.defineProperty({__proto__:null,init:Tt,render:yt},Symbol.toStringTag,{value:"Module"}));function ie(e){return e=String(e),Math.abs(e.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0))}function bt(){return`
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
  `}function It(){console.log("[SigninRoute] Initialized");const e=document.getElementById("loginForm"),t=document.getElementById("email"),n=document.getElementById("password"),o=document.getElementById("togglePassword");document.querySelector(".auth-left h1")?.addEventListener("click",()=>{console.log("[SigninRoute] Welcome Back clicked - publishing UI_WELCOME_BACK_CLICKED"),a.publish(l.UI_WELCOME_BACK_CLICKED)}),o?.addEventListener("click",()=>{const c=n.type==="password"?"text":"password";n.type=c}),e?.addEventListener("submit",async c=>{c.preventDefault();const f=t.value.trim(),E=n.value;Rt(f,t)&&wt(E,n)&&await Ot(f,E)}),document.getElementById("link--uc__underline")?.addEventListener("click",c=>{c.preventDefault(),a.publish(l.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",c=>{c.preventDefault(),a.publish(l.AUTH_SIGNUP)})}function Rt(e,t){if(!e)return W(t,"Please enter your email"),!1;const n=(e.match(/@/g)||[]).length,o=(e.match(/\./g)||[]).length;return n!==1||o<1?(W(t,"Please enter a valid email address"),!1):!0}function wt(e,t){return e?e.length<10?(W(t,"Password must be at least 10 characters"),!1):!0:(W(t,"Please enter your password"),!1)}function W(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function Ot(e,t){const n=document.querySelector(".btn");n.disabled=!0,n.textContent="SIGNING IN...";try{const o=ie(t),r=await N.doSignin(e,o);r.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q("Welcome back!","success"),a.publish(l.AUTH_SIGNIN_SUCCESS,{entity:N.getEntity()})):r.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q("Password reset required - redirecting...","warning")):(typeof neodigmToast<"u"&&neodigmToast.q(r.error||"Sign in failed","danger"),n.disabled=!1,n.textContent="SIGN IN")}catch(o){console.error("[SigninRoute] Sign in error:",o),typeof neodigmToast<"u"&&neodigmToast.q(o.message||"Network error - please try again","danger"),n.disabled=!1,n.textContent="SIGN IN",a.publish(l.AUTH_SIGNIN_FAIL,{message:o.message})}}const Nt=Object.freeze(Object.defineProperty({__proto__:null,init:It,render:bt},Symbol.toStringTag,{value:"Module"}));function Ue(e){const t=[];return e.length<10&&t.push("at least 10 characters"),/[a-z]/.test(e)||t.push("1 lowercase"),/[A-Z]/.test(e)||t.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push("1 special character"),/[^\x00-\x7F]/.test(e)&&t.push("ASCII characters only"),t}function Pe(e){return e.length===0?"":e.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":e.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function Ut(){return`
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
  `}function Pt(){console.log("[SignupRoute] Initialized");const e=document.getElementById("signupForm"),t=e.querySelector('button[type="submit"]');Ee("togglePassword","password","eyeIcon"),Ee("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",o=>{o.preventDefault(),a.publish(l.AUTH_SIGNIN)}),e.addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("first").value.trim(),i=document.getElementById("last").value.trim(),c=document.getElementById("email").value.trim(),f=document.getElementById("company").value.trim(),E=document.getElementById("phone").value.trim(),g=document.getElementById("password").value,v=document.getElementById("confirmPassword").value,I=document.getElementById("first"),y=document.getElementById("last"),O=document.getElementById("email"),k=document.getElementById("password"),u=document.getElementById("confirmPassword");if(ve(r,I,"Please enter your first name")&&ve(i,y,"Please enter your last name")&&Lt(c,O)&&Ct(g,k)){if(g!==v){B(u,"Passwords do not match");return}t.disabled=!0,t.textContent="Creating account...",await Ft(r,i,c,f,E,g)}})}function Ee(e,t,n){const o=document.getElementById(e),r=document.getElementById(t),i=document.getElementById(n);!o||!r||!i||o.addEventListener("click",()=>{const c=r.type==="password";r.type=c?"text":"password",c?i.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:i.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function ve(e,t,n){return e?!0:(B(t,n),!1)}function Lt(e,t){if(!e)return B(t,"Please enter your email"),!1;const n=(e.match(/@/g)||[]).length,o=(e.match(/\./g)||[]).length;return n!==1||o<1?(B(t,"Please enter a valid email address"),!1):!0}function Ct(e,t){if(!e)return B(t,"Please enter a password"),!1;const n=Ue(e);return n.length>0?(B(t,Pe(n)),!1):!0}function B(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function Ft(e,t,n,o,r,i){const c=document.querySelector('button[type="submit"]');try{const f=ie(i),E={email:n,hash:f,first:e,last:t};o&&(E.company=o),r&&(E.phone=r);const g=await N.doSignup(E);if(g.ok)a.publish(l.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const v=g.error||g.message||"Sign up failed";typeof neodigmToast<"u"&&neodigmToast.q(v,"danger"),c.disabled=!1,c.textContent="CREATE ACCOUNT",a.publish(l.AUTH_SIGNUP_FAIL,{message:v})}}catch(f){console.error("[SignupRoute] Sign up error:",f),typeof neodigmToast<"u"&&neodigmToast.q(f.message||"Network error - please try again","danger"),c.disabled=!1,c.textContent="CREATE ACCOUNT",a.publish(l.AUTH_SIGNUP_FAIL,{message:f.message})}}const kt=Object.freeze(Object.defineProperty({__proto__:null,init:Pt,render:Ut},Symbol.toStringTag,{value:"Module"}));function Ht(){return`
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
  `}function Gt(){console.log("[VerfLinkRoute] Initialized");const e=7200,t=Date.now(),n=document.getElementById("countdown-display");function o(){const i=Date.now()-t,c=Math.floor(i/1e3),f=Math.max(0,e-c),E=Math.floor(f/3600),g=Math.floor(f%3600/60),v=f%60,I=`${String(E).padStart(2,"0")}:${String(g).padStart(2,"0")}:${String(v).padStart(2,"0")}`;n&&(n.textContent=I,f<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),f===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),f===0&&(clearInterval(r),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}o();const r=setInterval(o,1e3);window.addEventListener("beforeunload",()=>{clearInterval(r)})}const Dt=Object.freeze(Object.defineProperty({__proto__:null,init:Gt,render:Ht},Symbol.toStringTag,{value:"Module"})),Bt="https://streamsyncengage-saas.onrender.com";class Mt{constructor(){this.baseUrl=Bt}async request(t,n={}){const o=`${this.baseUrl}${t}`,r={"Content-Type":"application/json",...n.headers};try{const i=await fetch(o,{...n,headers:r});if(i.status===401||i.status===403){a.publish(l.AUTH_TOKEN_EXPIRED,{status:i.status,endpoint:t});const f=await i.json().catch(()=>({}));throw new Error(f.error||"Authentication failed")}const c=await i.json();return{ok:i.ok,status:i.status,data:c}}catch(i){throw console.error("API Request Error:",i),a.publish(l.APP_ERROR,{message:i.message,endpoint:t}),i}}async get(t){return this.request(t,{method:"GET"})}async post(t,n){return this.request(t,{method:"POST",body:JSON.stringify(n)})}async put(t,n){return this.request(t,{method:"PUT",body:JSON.stringify(n)})}async delete(t){return this.request(t,{method:"DELETE"})}async signin(t,n){return this.post("/api/acctEntity/signin",{email:t,hash:n})}async signup(t){return this.post("/api/acctEntity/signup",t)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(t){return this.post("/api/acctEntity/forgot",{email:t})}async resetHash(t,n){return this.post("/api/acctEntity/resethash",{email:t,hash:n})}async verifyAccount(t){return this.get(`/api/acctEntity/verify?CODE=${t}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(t){return this.get(`/api/acctEntity/${t}`)}async updateAccount(t,n){return this.put(`/api/acctEntity/${t}`,n)}async deleteAccount(t){return this.delete(`/api/acctEntity/${t}`)}async ping(){return this.get("/ping")}}const xt=new Mt;function Vt(){return`
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

  `}function $t(){console.log("[ForgotRoute] Initialized");const e=document.getElementById("forgot-form"),t=document.getElementById("email");e?.addEventListener("submit",async n=>{n.preventDefault();const o=t.value.trim();jt(o,t)&&await zt(o)})}function jt(e,t){if(!e)return Se(t,"Please enter your email address"),!1;const n=(e.match(/@/g)||[]).length,o=(e.match(/\./g)||[]).length;return n!==1||o<1?(Se(t,"Please enter a valid email address"),!1):!0}function Se(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function zt(e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent="SENDING...";try{const n=await xt.forgotPassword(e);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q("Password reset link sent!|Please check your email","success"),a.publish(l.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||"Failed to send reset link","danger"),t.disabled=!1,t.textContent="SEND RESET LINK")}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||"Network error - please try again","danger"),t.disabled=!1,t.textContent="SEND RESET LINK"}}const qt=Object.freeze(Object.defineProperty({__proto__:null,init:$t,render:Vt},Symbol.toStringTag,{value:"Module"}));function Kt(){return`
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
  `}function Yt(){console.log("[ResethashRoute] Initialized");const e=document.getElementById("resethash-form"),t=e.querySelector('button[type="submit"]');Ae("toggleNewPassword","new-password","eyeIconNew"),Ae("toggleConfirmPassword","confirm-password","eyeIconConfirm"),e?.addEventListener("submit",async n=>{n.preventDefault();const o=e.email.value.trim(),r=e.newPassword.value,i=e.confirmPassword.value,c=document.getElementById("new-password"),f=document.getElementById("confirm-password");if(!r){D(c,"Please enter a new password");return}const E=Ue(r);if(E.length>0){D(c,Pe(E));return}if(!i){D(f,"Please confirm your new password");return}if(r!==i){D(f,"Passwords do not match");return}t.disabled=!0,t.textContent="UPDATING...";try{const g=ie(r),v=await N.doResetHash(o,g);v.ok?a.publish(l.AUTH_RESETHASH_SUCCESS,{email:o}):(D(c,v.error||"Failed to reset password"),t.disabled=!1,t.textContent="UPDATE PASSWORD")}catch(g){console.error("[ResethashRoute] Reset password error:",g),D(c,g.message||"Network error - please try again"),t.disabled=!1,t.textContent="UPDATE PASSWORD"}})}function Ae(e,t,n){const o=document.getElementById(e),r=document.getElementById(t),i=document.getElementById(n);!o||!r||!i||o.addEventListener("click",()=>{const c=r.type==="password";r.type=c?"text":"password",c?i.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:i.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function D(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}const Wt=Object.freeze(Object.defineProperty({__proto__:null,init:Yt,render:Kt},Symbol.toStringTag,{value:"Module"}));function Xt(){const e=N.getEntity();return`
    <div class="home-container">
      <nav class="home-nav">
        <div class="nav-brand">
          <h1>StreamSyncEngage</h1>
        </div>
        <div class="nav-actions">
          <span class="user-email">${e?.email||"User"}</span>
          <button class="btn btn-secondary" id="signout-btn">Sign Out</button>
        </div>
      </nav>

      <main class="home-main">
        <div class="home-header">
          <h2>Dashboard</h2>
          <p>Welcome to StreamSyncEngage</p>
        </div>

        <div class="home-content">
          <div class="card">
            <h3>Quick Actions</h3>
            <div class="action-buttons">
              <button class="btn btn-primary" id="reset-password-btn">
                Reset Password
              </button>
              <button class="btn btn-outline" id="view-profile-btn">
                View Profile
              </button>
            </div>
          </div>

          <div class="card">
            <h3>Account Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Email:</span>
                <span class="info-value">${e?.email||"N/A"}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value">${e?.first||""} ${e?.last||""}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Company:</span>
                <span class="info-value">${e?.company||"N/A"}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Status:</span>
                <span class="status-badge status-${e?.status?.toLowerCase()||"unknown"}">${e?.status||"N/A"}</span>
              </div>
            </div>
          </div>
        </div>
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
        background: #f5f5f5;
      }

      .home-nav {
        background: white;
        padding: 1rem 2rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav-brand h1 {
        font-size: 1.5rem;
        color: #667eea;
      }

      .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .user-email {
        color: #666;
        font-size: 0.9rem;
      }

      .home-main {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .home-header {
        margin-bottom: 2rem;
      }

      .home-header h2 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

      .home-header p {
        color: #666;
      }

      .home-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .card {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .card h3 {
        font-size: 1.25rem;
        color: #333;
        margin-bottom: 1rem;
      }

      .action-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .info-grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid #f0f0f0;
      }

      .info-item:last-child {
        border-bottom: none;
      }

      .info-label {
        font-weight: 600;
        color: #666;
      }

      .info-value {
        color: #333;
      }

      .status-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.85rem;
        font-weight: 600;
      }

      .status-auth {
        background: #e8f5e9;
        color: #2e7d32;
      }

      .status-unverf {
        background: #fff3e0;
        color: #e65100;
      }

      .status-unknown {
        background: #f5f5f5;
        color: #666;
      }

      .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .btn-primary {
        background: #667eea;
        color: white;
      }

      .btn-primary:hover {
        background: #5568d3;
        transform: translateY(-1px);
      }

      .btn-secondary {
        background: #f44336;
        color: white;
      }

      .btn-secondary:hover {
        background: #d32f2f;
      }

      .btn-outline {
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
      }

      .btn-outline:hover {
        background: #f5f5f5;
      }

      @media (max-width: 768px) {
        .home-nav {
          flex-direction: column;
          gap: 1rem;
        }

        .nav-actions {
          width: 100%;
          justify-content: space-between;
        }
      }
    </style>
  `}function Jt(){console.log("[HomeRoute] Initialized");const e=document.getElementById("signout-btn"),t=document.getElementById("reset-password-btn"),n=document.getElementById("view-profile-btn");e.addEventListener("click",()=>{N.navigateTo("signout")}),t.addEventListener("click",()=>{console.log("[HomeRoute] Reset password button clicked"),a.publish(l.AUTH_RESETHASH_NAV)}),n.addEventListener("click",()=>{a.publish(l.UI_TOAST,{message:"Profile view coming soon!",type:"info"})})}const Zt=Object.freeze(Object.defineProperty({__proto__:null,init:Jt,render:Xt},Symbol.toStringTag,{value:"Module"}));function Qt(){return`
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
  `}function en(){console.log("[SignoutRoute] Initialized");const e=document.getElementById("confirm-signout-btn");e?.addEventListener("click",async()=>{e.disabled=!0,e.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await N.doSignout()})}const tn=Object.freeze(Object.defineProperty({__proto__:null,init:en,render:Qt},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
