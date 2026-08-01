(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const au="modulepreload",iu=function(e){return"/"+e},Ot={},K=function(t,n,u){let o=Promise.resolve();if(n&&n.length>0){let s=function(c){return Promise.all(c.map(l=>Promise.resolve(l).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");o=s(n.map(c=>{if(c=iu(c),c in Ot)return;Ot[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":au,l||(p.as="script"),p.crossOrigin="",p.href=c,i&&p.setAttribute("nonce",i),document.head.appendChild(p),l)return new Promise((h,f)=>{p.addEventListener("load",h),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};var su=/([:*])(\w+)/g,cu="([^/]+)",lu=/\*/g,du="?(?:.*)",fu=/\/\?/g,pu="/?([^/]+|)",hu="(?:/^|^)",gu="";function En(e){return e===void 0&&(e="/"),_t()?location.pathname+location.search+location.hash:e}function N(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function Be(e){return typeof e=="string"}function _u(e){return typeof e=="function"}function Ge(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function mu(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,u,o){return n===null&&(n={}),n[t[o]]=decodeURIComponent(u),n},null)}function Ve(e){var t=N(e).split(/\?(.*)?$/);return[N(t[0]),t.slice(1).join("")]}function gt(e){for(var t={},n=e.split("&"),u=0;u<n.length;u++){var o=n[u].split("=");if(o[0]!==""){var r=decodeURIComponent(o[0]);t[r]?(Array.isArray(t[r])||(t[r]=[t[r]]),t[r].push(decodeURIComponent(o[1]||""))):t[r]=decodeURIComponent(o[1]||"")}}return t}function vn(e,t){var n=Ve(N(e.currentLocationPath)),u=n[0],o=n[1],r=o===""?null:gt(o),a=[],i;if(Be(t.path)){if(i=hu+N(t.path).replace(su,function(d,p,h){return a.push(h),cu}).replace(lu,du).replace(fu,pu)+"$",N(t.path)===""&&N(u)==="")return{url:u,queryString:o,hashString:Ge(e.to),route:t,data:null,params:r}}else i=t.path;var s=new RegExp(i,gu),c=u.match(s);if(c){var l=Be(t.path)?mu(c,a):c.groups?c.groups:c.slice(1);return{url:N(u.replace(new RegExp("^"+e.instance.root),"")),queryString:o,hashString:Ge(e.to),route:t,data:l,params:r}}return!1}function yn(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function ge(e,t){return typeof e[t]>"u"||e[t]===!0}function bu(e){if(!e)return{};var t=e.split(","),n={},u;return t.forEach(function(o){var r=o.split(":").map(function(a){return a.replace(/(^ +| +$)/g,"")});switch(r[0]){case"historyAPIMethod":n.historyAPIMethod=r[1];break;case"resolveOptionsStrategy":u||(u={}),u.strategy=r[1];break;case"resolveOptionsHash":u||(u={}),u.hash=r[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[r[0]]=r[1]==="true";break}}),u&&(n.resolveOptions=u),n}function _t(){return typeof window<"u"}function Eu(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(u){n[u]&&(t[u]||(t[u]=[]),t[u].push(n[u]))})}),t}function X(e,t,n){var u=t||{},o=0;(function r(){if(!e[o]){n&&n(u);return}Array.isArray(e[o])?(e.splice.apply(e,[o,1].concat(e[o][0](u)?e[o][1]:e[o][2])),r()):e[o](u,function(a){typeof a>"u"||a===!0?(o+=1,r()):n&&n(u)})})()}X.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function Dt(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=En(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function Qe(e,t){for(var n=0;n<e.instance.routes.length;n++){var u=e.instance.routes[n],o=vn(e,u);if(o&&(e.matches||(e.matches=[]),e.matches.push(o),e.resolveOptions.strategy==="ONE")){t();return}}t()}function vu(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function yu(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var It=_t(),Au=yn();function Su(e,t){if(ge(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),u=It&&e.resolveOptions&&e.resolveOptions.hash===!0;Au?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",u?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!u){var o=location.hash;location.hash="",location.hash=o}e.instance.__freezeListening=!1},1))):It&&(window.location.href=e.to)}t()}function An(e,t){var n=e.instance;if(!n.lastResolved()){t();return}X(n.lastResolved().map(function(u){return function(o,r){if(!u.route.hooks||!u.route.hooks.leave){r();return}var a=!1,i=e.instance.matchLocation(u.route.path,e.currentLocationPath,!1);if(u.route.path!=="*")a=!i;else{var s=e.matches?e.matches.find(function(c){return u.route.path===c.route.path}):!1;a=!s}if(ge(e.navigateOptions,"callHooks")&&a){X(u.route.hooks.leave.map(function(c){return function(l,d){return c(function(p){p===!1?e.instance.__markAsClean(e):d()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return r()}]));return}else r()}}),{},function(){return t()})}function xu(e,t){e.match.route.hooks&&e.match.route.hooks.before&&ge(e.navigateOptions,"callHooks")?X(e.match.route.hooks.before.map(function(n){return function(o,r){return n(function(a){a===!1?e.instance.__markAsClean(e):r()},e.match)}}).concat([function(){return t()}])):t()}function Cu(e,t){ge(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function wu(e,t){e.match.route.hooks&&e.match.route.hooks.after&&ge(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function ku(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(u){u.route.hooks&&u.route.hooks.already&&ge(e.navigateOptions,"callHooks")&&u.route.hooks.already.forEach(function(o){return o(e.match)})}),t(!1);return}t()}function Tu(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var u=Ve(e.currentLocationPath),o=u[0],r=u[1],a=Ge(e.to);n.path=N(o);var i={url:n.path,queryString:r,hashString:a,data:null,route:n,params:r!==""?gt(r):null};e.matches=[i],e.match=i}t()}function Ru(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function Ou(e,t){e.instance._setCurrent(null),t()}function Sn(e,t){ge(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var xn=[ku,xu,Cu,wu],Lt=[An,Tu,X.if(function(e){var t=e.notFoundHandled;return t},xn.concat([Sn]),[Ru,Ou])];function ct(){return ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},ct.apply(this,arguments)}function Nt(e,t){var n=0;function u(){if(n===e.matches.length){Sn(e,t);return}X(xn,ct({},e,{match:e.matches[n]}),function(){n+=1,u()})}An(e,u)}function Xe(e){e.instance.__markAsClean(e)}function lt(){return lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},lt.apply(this,arguments)}var Ft="[data-navigo]";function Du(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ft},u=this,o="/",r=null,a=[],i=!1,s,c=yn(),l=_t();e?o=N(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function d(E){return E.indexOf("#")>=0&&(n.hash===!0?E=E.split("#")[1]||"/":E=E.split("#")[0]),E}function p(E){return N(o+"/"+N(E))}function h(E,x,T,L){return E=Be(E)?p(E):E,{name:L||N(String(E)),path:E,handler:x,hooks:Eu(T)}}function f(E,x,T){var L=this;return typeof E=="object"&&!(E instanceof RegExp)?(Object.keys(E).forEach(function(O){if(typeof E[O]=="function")L.on(O,E[O]);else{var Q=E[O],Se=Q.uses,ou=Q.as,ru=Q.hooks;a.push(h(O,Se,[s,ru],ou))}}),this):(typeof E=="function"&&(T=x,x=E,E=o),a.push(h(E,x,[s,T])),this)}function m(E,x){if(u.__dirty){u.__waiting.push(function(){return u.resolve(E,x)});return}else u.__dirty=!0;E=E?N(o)+"/"+N(E):void 0;var T={instance:u,to:E,currentLocationPath:E,navigateOptions:{},resolveOptions:lt({},n,x)};return X([Dt,Qe,X.if(function(L){var O=L.matches;return O&&O.length>0},Nt,Lt)],T,Xe),T.matches?T.matches:!1}function b(E,x){if(u.__dirty){u.__waiting.push(function(){return u.navigate(E,x)});return}else u.__dirty=!0;E=N(o)+"/"+N(E);var T={instance:u,to:E,navigateOptions:x||{},resolveOptions:x&&x.resolveOptions?x.resolveOptions:n,currentLocationPath:d(E)};X([vu,yu,Qe,X.if(function(L){var O=L.matches;return O&&O.length>0},Nt,Lt),Su,Xe],T,Xe)}function y(E,x,T){var L=oe(E,x);return L!==null?(b(L.replace(new RegExp("^/?"+o),""),T),!0):!1}function v(E){return this.routes=a=a.filter(function(x){return Be(E)?N(x.path)!==N(E):_u(E)?E!==x.handler:String(x.path)!==String(E)}),this}function A(){c&&(this.__popstateListener=function(){u.__freezeListening||m()},window.addEventListener("popstate",this.__popstateListener))}function S(){this.routes=a=[],c&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=i=!0}function C(E,x){return u._notFoundRoute=h("*",E,[s,x],"__NOT_FOUND__"),this}function k(){if(l)return R().forEach(function(E){if(E.getAttribute("data-navigo")==="false"||E.getAttribute("target")==="_blank"){E.hasListenerAttached&&E.removeEventListener("click",E.navigoHandler);return}E.hasListenerAttached||(E.hasListenerAttached=!0,E.navigoHandler=function(x){if((x.ctrlKey||x.metaKey)&&x.target.tagName.toLowerCase()==="a")return!1;var T=E.getAttribute("href");if(typeof T>"u"||T===null)return!1;if(T.match(/^(http|https)/)&&typeof URL<"u")try{var L=new URL(T);T=L.pathname+L.search}catch{}var O=bu(E.getAttribute("data-navigo-options"));i||(x.preventDefault(),x.stopPropagation(),u.navigate(N(T),O))},E.addEventListener("click",E.navigoHandler))}),u}function R(){return l?[].slice.call(document.querySelectorAll(n.linksSelector||Ft)):[]}function F(E){return"/"+o+"/"+N(E)}function M(E){return s=E,this}function J(){return r}function oe(E,x,T){var L=a.find(function(Se){return Se.name===E}),O=null;if(L){if(O=L.path,x)for(var Q in x)O=O.replace(":"+Q,x[Q]);O=O.match(/^\//)?O:"/"+O}return O&&T&&!T.includeRoot&&(O=O.replace(new RegExp("^/"+o),"")),O}function G(E){return E.getAttribute("href")}function B(E){var x=Ve(N(E)),T=x[0],L=x[1],O=L===""?null:gt(L),Q=Ge(E),Se=h(T,function(){},[s],T);return{url:T,queryString:L,hashString:Q,route:Se,data:null,params:O}}function ie(){return B(N(En(o)).replace(new RegExp("^"+o),""))}function W(E){var x={instance:u,currentLocationPath:E,to:E,resolveOptions:n};return Qe(x,function(){}),x.matches?x.matches:!1}function Je(E,x,T){typeof x<"u"&&(typeof T>"u"||T)&&(x=p(x));var L={instance:u,to:x,currentLocationPath:x};Dt(L,function(){}),typeof E=="string"&&(E=typeof T>"u"||T?p(E):E);var O=vn(L,{name:String(E),path:E,handler:function(){},hooks:{}});return O||!1}function Ne(E,x,T){return typeof x=="string"&&(x=Rt(x)),x?(x.hooks[E]||(x.hooks[E]=[]),x.hooks[E].push(T),function(){x.hooks[E]=x.hooks[E].filter(function(L){return L!==T})}):(console.warn("Route doesn't exists: "+x),function(){})}function Rt(E){return typeof E=="string"?a.find(function(x){return x.name===p(E)}):a.find(function(x){return x.handler===E})}function uu(E){E.instance.__dirty=!1,E.instance.__waiting.length>0&&E.instance.__waiting.shift()()}this.root=o,this.routes=a,this.destroyed=i,this.current=r,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=uu,this.on=f,this.off=v,this.resolve=m,this.navigate=b,this.navigateByName=y,this.destroy=S,this.notFound=C,this.updatePageLinks=k,this.link=F,this.hooks=M,this.extractGETParameters=function(E){return Ve(d(E))},this.lastResolved=J,this.generate=oe,this.getLinkPath=G,this.match=W,this.matchLocation=Je,this.getCurrentLocation=ie,this.addBeforeHook=Ne.bind(this,"before"),this.addAfterHook=Ne.bind(this,"after"),this.addAlreadyHook=Ne.bind(this,"already"),this.addLeaveHook=Ne.bind(this,"leave"),this.getRoute=Rt,this._pathToMatchObject=B,this._clean=N,this._checkForAHash=d,this._setCurrent=function(E){return r=u.current=E},A.call(this),k.call(this)}var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xe={exports:{}},Nu=xe.exports,Mt;function Fu(){return Mt||(Mt=1,(function(e,t){(function(n,u){var o={};n.PubSub?(o=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=o,u(o)),e!==void 0&&e.exports&&(t=e.exports=o),t.PubSub=o,e.exports=t=o})(typeof window=="object"&&window||Nu||Iu,function(n){var u={},o=-1,r="*";function a(m){var b;for(b in m)if(Object.prototype.hasOwnProperty.call(m,b))return!0;return!1}function i(m){return function(){throw m}}function s(m,b,y){try{m(b,y)}catch(v){setTimeout(i(v),0)}}function c(m,b,y){m(b,y)}function l(m,b,y,v){var A=u[b],S=v?c:s,C;if(Object.prototype.hasOwnProperty.call(u,b))for(C in A)Object.prototype.hasOwnProperty.call(A,C)&&S(A[C],m,y)}function d(m,b,y){return function(){var A=String(m),S=A.lastIndexOf(".");for(l(m,m,b,y);S!==-1;)A=A.substr(0,S),S=A.lastIndexOf("."),l(m,A,b,y);l(m,r,b,y)}}function p(m){var b=String(m),y=!!(Object.prototype.hasOwnProperty.call(u,b)&&a(u[b]));return y}function h(m){for(var b=String(m),y=p(b)||p(r),v=b.lastIndexOf(".");!y&&v!==-1;)b=b.substr(0,v),v=b.lastIndexOf("."),y=p(b);return y}function f(m,b,y,v){m=typeof m=="symbol"?m.toString():m;var A=d(m,b,v),S=h(m);return S?(y===!0?A():setTimeout(A,0),!0):!1}n.publish=function(m,b){return f(m,b,!1,n.immediateExceptions)},n.publishSync=function(m,b){return f(m,b,!0,n.immediateExceptions)},n.subscribe=function(m,b){if(typeof b!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(u,m)||(u[m]={});var y="uid_"+String(++o);return u[m][y]=b,y},n.subscribeAll=function(m){return n.subscribe(r,m)},n.subscribeOnce=function(m,b){var y=n.subscribe(m,function(){n.unsubscribe(y),b.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){u={}},n.clearSubscriptions=function(b){var y;for(y in u)Object.prototype.hasOwnProperty.call(u,y)&&y.indexOf(b)===0&&delete u[y]},n.countSubscriptions=function(b){var y,v,A=0;for(y in u)if(Object.prototype.hasOwnProperty.call(u,y)&&y.indexOf(b)===0){for(v in u[y])A++;break}return A},n.getSubscriptions=function(b){var y,v=[];for(y in u)Object.prototype.hasOwnProperty.call(u,y)&&y.indexOf(b)===0&&v.push(y);return v},n.unsubscribe=function(m){var b=function(F){var M;for(M in u)if(Object.prototype.hasOwnProperty.call(u,M)&&M.indexOf(F)===0)return!0;return!1},y=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(u,m)||b(m)),v=!y&&typeof m=="string",A=typeof m=="function",S=!1,C,k,R;if(y){n.clearSubscriptions(m);return}for(C in u)if(Object.prototype.hasOwnProperty.call(u,C)){if(k=u[C],v&&k[m]){delete k[m],S=m;break}if(A)for(R in k)Object.prototype.hasOwnProperty.call(k,R)&&k[R]===m&&(delete k[R],S=!0)}return S}})})(xe,xe.exports)),xe.exports}var Mu=Fu();const _=Lu(Mu),g=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV.GO",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN.GO",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP.GO",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT.GO",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT.GO",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH.GO",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",LLM:"LLM",LLM_DO_DOWNLOAD:"LLM.DO.DOWNLOAD",LLM_STATUS:"LLM.STATUS",LLM_COMPLETE:"LLM.COMPLETE",LLM_ERROR:"LLM.ERROR",LLM_PROMPT:"LLM.PROMPT",LLM_RESPONSE:"LLM.RESPONSE",LLM_CANCEL:"LLM.CANCEL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),Pu=5e3,Uu=2e3,Bu=/^(AUTH|ROUTE|LLM)\./;function Gu(e,t){return t.some(n=>e===n||e.startsWith(`${n}.`))}function Vu(e=new Date){const t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}-${t(e.getMinutes())}-${t(e.getSeconds())}`}function Hu(e,t){const n=URL.createObjectURL(new Blob([e],{type:"application/json"})),u=document.createElement("a");return u.href=n,u.download=t,u.style.display="none",document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e4),t}function zu(){return new Promise((e,t)=>{const n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.style.display="none",n.addEventListener("change",()=>{const u=n.files&&n.files[0];if(n.remove(),!u){t(new Error("[VCR] no file selected"));return}u.text().then(e,t)}),n.addEventListener("cancel",()=>{n.remove(),t(new Error("[VCR] file selection cancelled"))}),document.body.appendChild(n),n.click()})}function Pt(e){return typeof e.elapsed=="number"?e.elapsed:e.timestamp??0}function $u(e,t){return e<=0?Promise.resolve():new Promise(n=>{t.wake=n,t.timer=setTimeout(()=>{t.timer=null,n()},e)})}function qu(e){if(e===null||typeof e!="object")return e;try{return structuredClone(e)}catch{return ju(e)}}function ju(e){const t={_vcrPartial:!0};for(const n of Object.keys(e))try{const u=e[n];t[n]=u===null||typeof u!="object"?u:`[${Object.prototype.toString.call(u).slice(8,-1)}]`}catch(u){t[n]=`[unreadable: ${u.message}]`}return t}function Ut(e){const t=new WeakSet;return JSON.stringify(e,(n,u)=>{if(typeof u=="bigint")return`${u}n`;if(typeof u=="function")return"[Function]";if(typeof u=="object"&&u!==null){if(t.has(u))return"[Circular]";t.add(u)}return u},2)}function Wu(e,t={}){if(!e||typeof e.publish!="function")return console.warn("[VCR] PubSub.publish not found - recorder not installed"),null;if(e.publish.__vcr)return e.publish.__vcr;const n=t.maxEntries??Pu,u=t.app??"",o=[],r={};let a=0,i=0,s=0,c=null;window._vcrTimeline=o,window._isVCRRecording=!1;function l(p,h,f){o.length>=n&&(o.shift(),s++);const m=Date.now(),b={seq:a++,message:p,data:qu(h),timestamp:m,elapsed:m-i};f&&(b.sync=!0),u&&(b.app=u),o.push(b)}const d={start(){return o.length=0,a=0,s=0,i=Date.now(),window._isVCRRecording=!0,console.info(`[VCR] recording (cap ${n} events) - reproduce the issue, then run stopVCR()`),!0},stop(p={}){const{save:h=!0,filename:f}=p;window._isVCRRecording=!1,s&&console.warn(`[VCR] tape capped at ${n} - ${s} earlier event(s) dropped`),console.info(`[VCR] stopped - ${o.length} event(s) recorded`);const m=Ut(o);return h&&o.length&&d.save(f,m),m},save(p,h){const f=p||`vcr-${u||"pubsub"}-${Vu()}.json`;try{return Hu(h??Ut(o),f),console.info(`[VCR] saved ${o.length} event(s) to ${f}`),f}catch(m){return console.error("[VCR] could not save file - copy _vcrTimeline instead",m),null}},peek(){return o},load(p){if(p===void 0)return zu().then(m=>d.load(m));const h=typeof p=="string"?JSON.parse(p):p;if(!Array.isArray(h))throw new TypeError("[VCR] load() expects the JSON string from stopVCR(), or an array");window._isVCRRecording=!1,o.length=0,o.push(...h),a=o.length,s=0;const f=h[0]?.app;return console.info(`[VCR] loaded ${o.length} event(s)${f?` from ${f}`:""} - playVCR() to replay`),o.length},async play(p={}){const{speed:h=1,maxGap:f=Uu,dryRun:m=!1,skip:b=[],quiet:y=!1}=p;if(c)return console.warn("[VCR] a replay is already running - stopPlayback() first"),{played:0,skipped:0,cancelled:!0,durationMs:0};if(!o.length)return console.warn("[VCR] tape is empty - record with startVCR(), or loadVCR(json)"),{played:0,skipped:0,cancelled:!1,durationMs:0};window._isVCRRecording&&(window._isVCRRecording=!1,console.warn("[VCR] recording stopped - cannot record and replay at once"));const v=o.slice(),A={cancelled:!1,timer:null,wake:null};c=A;const S=v.filter(G=>G.data&&G.data._vcrPartial).length;S&&console.warn(`[VCR] ${S} event(s) carry degraded payloads (were not cloneable when recorded)`);const C=v.filter(G=>Bu.test(G.message)).length;C&&!m&&console.warn(`[VCR] tape contains ${C} AUTH/ROUTE/LLM event(s) - replay will really navigate, sign out, or call the model. Try { dryRun: true } or { skip: ['AUTH', 'LLM'] }.`),console.info(`[VCR] ${m?"dry run":"replaying"} ${v.length} event(s) at ${h}x`);const k=Date.now();let R=0,F=0,M=null;for(let G=0;G<v.length;G++){const B=v[G];if(M){const ie=Pt(B)-Pt(M),W=Math.min(Math.max(ie,0),f);if(await $u(h>0?W/h:0,A),A.cancelled)break}if(M=B,b.length&&Gu(B.message,b)){F++,y||console.debug(`[VCR] ${G+1}/${v.length} skip ${B.message}`);continue}if(y||console.info(`[VCR] ${m?"·":"▶"} ${G+1}/${v.length} ${B.message}`,B.data??""),!m){const ie=B.sync&&r.publishSync||r.publish;try{ie.call(e,B.message,B.data)}catch(W){console.error(`[VCR] subscriber threw while replaying ${B.message}`,W)}}R++}const J=A.cancelled;c=null;const oe={played:R,skipped:F,cancelled:J,durationMs:Date.now()-k};return console.info(`[VCR] ${J?"cancelled":"replay complete"}`,oe),oe},stopPlayback(){return c?(c.cancelled=!0,c.timer&&clearTimeout(c.timer),c.wake&&c.wake(),!0):(console.info("[VCR] no replay running"),!1)},uninstall(){window._isVCRRecording=!1;for(const p of["publish","publishSync"])e[p]&&e[p].__vcrOriginal&&(e[p]=e[p].__vcrOriginal)}};for(const p of["publish","publishSync"]){const h=e[p];if(typeof h!="function")continue;const f=p==="publishSync";r[p]=h;const m=function(b,y){if(window._isVCRRecording)try{l(b,y,f)}catch(v){console.warn("[VCR] failed to record",b,v)}return h.apply(this,arguments)};m.__vcr=d,m.__vcrOriginal=h,e[p]=m}return window.startVCR=()=>d.start(),window.stopVCR=p=>d.stop(p),window.saveVCR=p=>d.save(p),window.loadVCR=p=>d.load(p),window.playVCR=p=>d.play(p),window.stopPlayback=()=>d.stopPlayback(),console.info(`[VCR] armed${u?` (${u})`:""} - startVCR() / stopVCR() to record, loadVCR() / playVCR() to replay`),d}const et={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var tt={};const D=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function Cn(e,t=null){if(e in D)return D[e];if(typeof process<"u"&&tt&&tt[e]){const n=tt[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&et&&et[e]){const n=et[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return t}function Yu(e){return Cn(e,!1)===!0}function Ku(){return{...D}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:D,getFlag:Cn,isEnabled:Yu,getAllFlags:Ku});const H=Object.freeze({USER:"user",ASSISTANT:"assistant"}),le=Object.freeze({USER:"user",SYSTEM:"system",AUTOMATION:"automation"}),$=Object.freeze({START:"start",DELTA:"delta",END:"end",ERROR:"error"}),V=Object.freeze({CANVAS:"canvas",AGENT:"agent",WORKFLOW:"workflow",STAGE:"stage"}),Bt=Object.freeze({CANVAS:[V.CANVAS],AGENT:[V.AGENT],AGENT_CANVAS:[V.CANVAS,V.AGENT],STAGE:[V.STAGE],WORKFLOW:[V.WORKFLOW]});Object.freeze({PROMPT:g.CONVERSATION_PROMPT,PROMPT_CANVAS:g.CONVERSATION_PROMPT_CANVAS,PROMPT_AGENT:g.CONVERSATION_PROMPT_AGENT,PROMPT_AGENT_CANVAS:g.CONVERSATION_PROMPT_AGENT_CANVAS,PROMPT_STAGE:g.CONVERSATION_PROMPT_STAGE,RESPONSE:g.CONVERSATION_RESPONSE,RESPONSE_CANVAS:g.CONVERSATION_RESPONSE_CANVAS,RESPONSE_WORKFLOW:g.CONVERSATION_RESPONSE_WORKFLOW});const Zu="::";function Ju(e){return typeof e=="string"&&e.trim().startsWith(Zu)}let Gt=0;function dt(e="msg"){return globalThis.crypto&&typeof globalThis.crypto.randomUUID=="function"?`${e}_${globalThis.crypto.randomUUID()}`:(Gt+=1,`${e}_${Date.now().toString(36)}_${Gt}`)}function Qu(e=new Date){return e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Vt(e){if(typeof e!="string")return"";const t=e.split(".");return t.length>2?t.slice(2).join("."):""}function pe(e={}){const t=new Date,n=e.text??e.message??"";return{id:e.id??dt(e.role===H.ASSISTANT?"res":"req"),turnId:e.turnId??dt("turn"),role:e.role??H.USER,source:e.source??le.USER,text:n,message:n,timestamp:e.timestamp??Qu(t),ts:e.ts??t.getTime(),phase:e.phase??$.END,sinks:e.sinks??[V.CANVAS],meta:e.meta??{}}}function Ht(e,t={}){const n=typeof e=="string"?{text:e}:e??{},u=n.role??t.role??H.USER;let o=n.phase;o||(o=n.streaming?$.DELTA:$.END);const r=Array.isArray(n.sinks)&&n.sinks.length?n.sinks:Xu(t.subTopic,u);return pe({...n,role:u,phase:o,sinks:r,source:n.source??t.source??le.USER})}function Xu(e,t=H.USER){return e&&Bt[e]?Bt[e]:t===H.ASSISTANT?[V.CANVAS]:[V.CANVAS]}const zt={base:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful.",contributors:new Map,register(e,t){if(typeof t!="function")throw new TypeError("[Conversation] contributor must be a function");return this.contributors.set(e,t),this},unregister(e){return this.contributors.delete(e),this},setBase(e){return this.base=e,this},compose(e={}){const t=[this.base];for(const[n,u]of this.contributors)try{const o=u(e);o&&t.push(String(o))}catch(o){console.warn(`[Conversation] system prompt contributor "${n}" failed`,o)}return t.filter(Boolean).join(`

`)},hash(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t+e.charCodeAt(n)|0;return(t>>>0).toString(36)}};function eo(){const e=t=>n=>{const u=n.detail?.pubsubTopic;u&&_.publish(u,n.detail)};document.addEventListener("nav-select",e()),document.addEventListener("logo-click",e()),document.addEventListener("nav-hover",e()),document.addEventListener("nav-double-tap",e()),document.addEventListener("nav-long-tap",e()),document.addEventListener("message-sent",e())}function to(){console.log("[AppEvents] Initializing event listeners..."),_.subscribe(g.APP_READY,(n,u)=>{console.log("[AppEvents] APP_READY:",u)}),_.subscribe(g.APP_ERROR,(n,u)=>{console.error("[AppEvents] APP_ERROR:",u)}),_.subscribe(g.APP_SIGNOUT,(n,u)=>{console.log("[AppEvents] APP_SIGNOUT:",u)}),_.subscribe(g.ROUTE_NAV_BEFORE,(n,u)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",u),_.publish(g.UI_LOADING_START)}),_.subscribe(g.ROUTE_NAV_AFTER,(n,u)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",u),_.publish(g.UI_LOADING_END)}),_.subscribe(g.ROUTE_NAV_ERROR,(n,u)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",u),_.publish(g.APP_ERROR,{message:"Navigation error",details:u})}),_.subscribe(g.AUTH_SIGNIN_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",u)}),_.subscribe(g.AUTH_SIGNIN_FAIL,(n,u)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",u),_.publish(g.UI_TOAST,{message:u.message||"Sign in failed",type:"danger"})}),_.subscribe(g.AUTH_SIGNUP_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",u),_.publish(g.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"})}),_.subscribe(g.AUTH_VERIFY_LINK,(n,u)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),_.subscribe(g.AUTH_SIGNUP_FAIL,(n,u)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",u),_.publish(g.UI_TOAST,{message:u.message||"Sign up failed",type:"danger"})}),_.subscribe(g.AUTH_SIGNOUT_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",u),_.publish(g.UI_TOAST,{message:"Signed out successfully",type:"info"})}),_.subscribe(g.AUTH_SIGNUP,(n,u)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),_.subscribe(g.AUTH_FORGOT,(n,u)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),_.subscribe(g.AUTH_FORGOT_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",u),_.publish(g.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),_.subscribe(g.AUTH_RESETHASH_NAV,(n,u)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),_.subscribe(g.AUTH_RESETHASH_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",u),_.publish(g.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),_.subscribe(g.AUTH_TOKEN_EXPIRED,(n,u)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",u),_.publish(g.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),_.subscribe(g.I18N_SET_LANG,(n,u)=>{console.log("[AppEvents] I18N_SET_LANG:",u);const{langCode:o}=u;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),_.publish(g.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(r){console.error("[AppEvents] Error changing language:",r),_.publish(g.UI_TOAST,{message:`Failed to change language: ${r.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),_.subscribe("CONVERSATION.PROMPT",(n,u)=>{const o=Ht(u,{role:H.USER,subTopic:Vt(n)});if(!o.text){console.warn("[AppEvents] CONVERSATION.PROMPT received without text",u);return}if(console.log(`[AppEvents] PROMPT ${o.sinks.join("+")} [${o.source}]:`,o.text),o.sinks.includes(V.STAGE)){const r=document.querySelector("m5t-chat-prompt-area");r?.setMessage?r.setMessage(o.text):console.warn("[AppEvents] STAGE sink: no m5t-chat-prompt-area on this route")}o.sinks.includes(V.CANVAS)&&($t(o),_.publish(g.CANVAS_DO_SCROLL)),o.sinks.includes(V.AGENT)&&(Ju(o.text)?no(o):_.publish(g.LLM_PROMPT,{message:o.text,turnId:o.turnId}))}),_.subscribe("CONVERSATION.RESPONSE",(n,u)=>{const o=Ht(u,{role:H.ASSISTANT,subTopic:Vt(n)});if(!o.text&&o.phase!==$.END){console.warn("[AppEvents] CONVERSATION.RESPONSE received without text",u);return}o.sinks.includes(V.CANVAS)&&$t(o),o.sinks.includes(V.WORKFLOW)&&console.log("[AppEvents] WORKFLOW sink not implemented yet:",o.text)}),_.subscribe(g.UI_LOADING_START,(n,u)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),_.subscribe(g.UI_LOADING_END,(n,u)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),_.subscribe(g.UI_TOAST,(n,u)=>{console.log("[AppEvents] UI_TOAST:",u)}),_.subscribe(g.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const n="0.1",u=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${n} 8/1/2026, 11:07:48 AM|© ${u} Mach Five Tech`,"night")}),eo(),_.subscribe("M5T_PRIMARY_NAV",(n,u)=>{const o=n.split(".")[1];switch(o){case"TAP":e(u);break;case"LOGO_TAP":t();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function e(n){const{token:u,level:o,primaryToken:r}=n;switch(u){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),_.publish(g.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${u}`,{primaryToken:r});break}}function t(n){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 8/1/2026, 11:07:48 AM|© ${o} Mach Five Tech`,"night",5e3)}_.subscribe(g.LLM_DO_DOWNLOAD,(n,u)=>{console.log("[AppEvents] LLM_DO_DOWNLOAD:",u),window.LLMController?window.LLMController.loadModel():console.error("[AppEvents] LLMController not available")}),_.subscribe(g.LLM_STATUS,(n,u)=>{console.log("[AppEvents] LLM_STATUS:",u),u&&typeof neodigmToast<"u"&&(u.text||`${u.progressPercent}`)}),_.subscribe(g.LLM_COMPLETE,(n,u)=>{console.log("[AppEvents] LLM_COMPLETE:",u),_.publish(g.CONVERSATION_RESPONSE_CANVAS,pe({role:H.ASSISTANT,source:le.SYSTEM,text:`✓ AI Model Ready: ${u.modelId}`,phase:$.END,meta:{modelId:u.modelId}}))}),_.subscribe(g.LLM_ERROR,(n,u)=>{console.error("[AppEvents] LLM_ERROR:",u);const o=`AI Error: ${u.error||"Unknown error"}`;typeof neodigmToast<"u"&&neodigmToast.q(o,"danger",8e3),_.publish(g.CONVERSATION_RESPONSE_CANVAS,pe({id:u?.responseId,turnId:u?.turnId,role:H.ASSISTANT,source:le.SYSTEM,text:`✗ ${o}`,phase:$.ERROR}))}),_.subscribe(g.LLM_PROMPT,(n,u)=>{console.log("[AppEvents] LLM_PROMPT:",u),window.LLMController&&u?.message?window.LLMController.chat(u.message,{turnId:u.turnId}):console.error("[AppEvents] LLMController not available or no message provided")}),_.subscribe(g.LLM_RESPONSE,(n,u)=>{u&&(!u.done&&!u.fullContent||_.publish(g.CONVERSATION_RESPONSE_CANVAS,pe({id:u.responseId,turnId:u.turnId,role:H.ASSISTANT,source:le.SYSTEM,text:u.fullContent??"",phase:u.done?$.END:$.DELTA,meta:u.meta??{}})))}),_.subscribe(g.LLM_CANCEL,(n,u)=>{console.log("[AppEvents] LLM_CANCEL"),window.LLMController&&window.LLMController.cancelGeneration()}),_.subscribe(g.AUTH_SIGNOUT,(n,u)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(D.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}const Fe=new Map;function $t(e){const t=document.getElementById("chat-messages");if(!t)return console.warn("[AppEvents] chat-messages element not found - may not be on home route"),null;let n=Fe.get(e.id);return n&&!n.isConnected&&(Fe.delete(e.id),n=null),n||(n=document.createElement(e.role===H.ASSISTANT?"m5t-chat-response":"m5t-chat-prompt"),n.setAttribute("data-turn-id",e.turnId),n.setAttribute("data-message-id",e.id),n.setAttribute("timestamp",e.timestamp),Fe.set(e.id,n),t.prepend(n)),n.setAttribute("message",e.text),(e.phase===$.END||e.phase===$.ERROR)&&(n.setAttribute("phase",e.phase),Fe.delete(e.id)),n}async function no(e){console.log("[AppEvents] CLI command:",e.text);try{const t=(await K(async()=>{const{default:o}=await Promise.resolve().then(()=>io);return{default:o}},void 0)).default,n=window.AuthController?.getEntity(),u=await t.process(e.text,n);_.publish(g.CONVERSATION_RESPONSE_CANVAS,pe({turnId:e.turnId,role:H.ASSISTANT,source:le.SYSTEM,text:u.message,phase:$.END,meta:{command:!0}}))}catch(t){console.error("[AppEvents] CLI command failed",t),_.publish(g.CONVERSATION_RESPONSE_CANVAS,pe({turnId:e.turnId,role:H.ASSISTANT,source:le.SYSTEM,text:`Command failed: ${t.message}`,phase:$.ERROR}))}_.publish(g.CANVAS_DO_SCROLL)}class ae{static CONFIG={BASE_URL:"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#n=null;static#u=null;static#a=null;static async init({BASE_URL:t,navigateFunction:n,customConfig:u={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#a=n;else throw new Error("navigateFunction is required and must be a function");return t&&(this.CONFIG.BASE_URL=t),u&&Object.keys(u).length>0&&(this.CONFIG={...this.CONFIG,...u}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#c(),this.#s(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#l(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#s(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((t=null)=>{t&&(console.log("[AuthController] mvvLegit navigation to:",t),this.#o(t))}).setOnState((t=null)=>{if(t)switch(console.log("[AuthController] Auth state changed:",t),t){case"AUTH":case 4:this.#p();break;case"UNAUTH":case 1:this.#h();break;case"UNVERF":case 2:this.#g();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#o(t){if(!this.#a){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",t);const n=t.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#a(n)}static#c(){try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);t&&(this.#n=JSON.parse(t),console.log("[AuthController] Entity state loaded:",this.#n?.email))}catch(t){console.error("[AuthController] Error loading entity state:",t),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#u=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#r(t){try{this.#n=t,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(t)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#i(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#n}static async doSignin(t,n){try{const u=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n})}),o=await u.json();return u.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#r(o.entity)),setTimeout(()=>{this.#o(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):u.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#r(o.entity),console.log("[AuthController] Explicitly navigating to home"),this.#o(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(u){return console.error("[AuthController] Signin error:",u),{ok:!1,error:u.message}}}static async doSignout(t=!1){console.log("[AuthController] doSignout called, serverInitiated:",t);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!t&&n){const u=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",u),navigator.sendBeacon){const o=navigator.sendBeacon(u);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#i(),console.log("[AuthController] Stopping auth ping..."),this.#d(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(t){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),u=await n.json();return n.ok&&u.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#r(u.entity),{ok:!0,data:u}):{ok:!1,error:u.error||"Sign up failed",data:u}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(t,n){try{const u=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${u}`,"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n,modified_by:t})}),r=await o.json();return o.ok&&r.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:r}):{ok:!1,error:r.error||"Password reset failed",data:r}}catch(u){return console.error("[AuthController] Reset password error:",u),{ok:!1,error:u.message}}}static#l(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#f()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#d(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#f(){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);t.ok?console.log("[AuthController] Ping success"):(t.status===401||t.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(t){console.error("[AuthController] Ping error:",t)}}static setDeepLinkGuid(t){this.#u=t,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,t),console.log("[AuthController] Deep-link GUID stored:",t)}static getDeepLinkGuid(){return this.#u}static clearDeepLink(){this.#u=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#p(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#l()}static#h(){console.log("[AuthController] User unauthenticated"),this.#d()}static#g(){console.log("[AuthController] User unverified")}static getAuthState(){try{const t=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(t);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const u=LZString.decompressFromUTF16(n),r=JSON.parse(u)?.state;return r===1?"UNAUTH":r===2?"UNVERF":r===4?"AUTH":r===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(t){this.#o(t)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#f()}}class w{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:t,product:n,whitelabel:u,lang:o}){t&&(this.#t.buildMode=t),n&&(this.#t.product=n),u&&(this.#t.whitelabel=u),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(t,n={}){const u={...this.#t,...n},{buildMode:o,product:r,whitelabel:a,lang:i}=u;try{const s=this.#e[o]?.[r]?.[a]?.[i]?.[t];return s?Array.isArray(s)?s[Math.floor(Math.random()*s.length)]:s:(console.warn(`[MicrocopyManager] Token not found: ${t} (${o}/${r}/${a}/${i})`),null)}catch(s){return console.error(`[MicrocopyManager] Error retrieving token: ${t}`,s),null}}static getAll(t={}){const n={...this.#t,...t},{buildMode:u,product:o,whitelabel:r,lang:a}=n;try{return this.#e[u]?.[o]?.[r]?.[a]||null}catch(i){return console.error("[MicrocopyManager] Error retrieving all tokens",i),null}}static has(t,n={}){const u={...this.#t,...n},{buildMode:o,product:r,whitelabel:a,lang:i}=u;try{return!!this.#e[o]?.[r]?.[a]?.[i]?.[t]}catch{return!1}}static getAvailableLanguages(){const{buildMode:t,product:n,whitelabel:u}=this.#t;try{return Object.keys(this.#e[t]?.[n]?.[u]||{})}catch{return[]}}static update(t,n,u={}){const o={...this.#t,...u},{buildMode:r,product:a,whitelabel:i,lang:s}=o;try{return this.#e[r]||(this.#e[r]={}),this.#e[r][a]||(this.#e[r][a]={}),this.#e[r][a][i]||(this.#e[r][a][i]={}),this.#e[r][a][i][s]||(this.#e[r][a][i][s]={}),this.#e[r][a][i][s][t]=n,!0}catch(c){return console.error(`[MicrocopyManager] Error updating token: ${t}`,c),!1}}static delete(t,n={}){const u={...this.#t,...n},{buildMode:o,product:r,whitelabel:a,lang:i}=u;try{return delete this.#e[o]?.[r]?.[a]?.[i]?.[t],!0}catch(s){return console.error(`[MicrocopyManager] Error deleting token: ${t}`,s),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(t){try{return this.#e=t,!0}catch(n){return console.error("[MicrocopyManager] Error importing data",n),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:w});class he{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const t=this.#a();w.setContext(t),console.log("[I18nController] Initialized with context:",t),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),D.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#s(),this.#c(),this.#e=!0,this.refresh()}static#u(t){const n={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},u=t.toLowerCase();return n[u]||"DEV"}static#a(){const n=this.#u("production"),u=localStorage.getItem(D.FF_SSE_LS_WHITELABEL)||D.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(D.FF_SSE_LS_USER_LANG)||D.FF_SSE_I18N_LANG;return{buildMode:n,product:D.FF_SSE_I18N_PRODUCT,whitelabel:u,lang:o}}static#s(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((t,n,u)=>{D.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",u),this.#t=u,setTimeout(()=>{this.refresh()},D.FF_SSE_I18N_APPLY_DELAY_MS)},D.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#o())}static#o(){setInterval(()=>{const n=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");n&&n!==this.#t&&(this.#t=n,this.refresh())},500)}static#c(){this.#n||(this.#n=new MutationObserver(t=>{let n=!1;for(const u of t){for(const o of u.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){n=!0;break}if(n)break}n&&(D.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#r(document.body),this.#i(document.body),D.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#r(t){const n=t.querySelectorAll("[data-meta-copywrite-i118n]");D.FF_SSE_I18N_DEBUG&&n.length>0&&console.log(`[I18nController] Processing ${n.length} elements`),n.forEach(u=>{try{const o=u.getAttribute("data-meta-copywrite-i118n"),r=JSON.parse(o);if(!r.token){console.warn("[I18nController] Missing token in config:",r);return}const a=r.attribute||"textContent",i=w.get(r.token);if(i===null){console.warn(`[I18nController] Microcopy not found for token: ${r.token}`);return}a==="textContent"?u.textContent=i:a==="innerHTML"?u.innerHTML=i:u.setAttribute(a,i),D.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${i}" to ${a} for token: ${r.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,u)}})}static#i(t){t.querySelectorAll("*").forEach(u=>{u.shadowRoot&&(this.#r(u.shadowRoot),this.#i(u.shadowRoot))})}static setLanguage(t){const n=w.getAvailableLanguages();if(!n.includes(t)){console.error(`[I18nController] Language not available: ${t}. Available:`,n);return}localStorage.setItem(D.FF_SSE_LS_USER_LANG,t),w.setContext({lang:t}),console.log("[I18nController] Language changed to:",t);const u=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:t}});document.dispatchEvent(u),this.refresh()}static setWhitelabel(t){localStorage.setItem(D.FF_SSE_LS_WHITELABEL,t),w.setContext({whitelabel:t}),D.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",t),this.refresh()}static getLanguage(){return w.getContext().lang}static getAvailableLanguages(){return w.getAvailableLanguages()}static getContext(){return w.getContext()}static destroy(){this.#n&&(this.#n.disconnect(),this.#n=null),this.#e=!1,this.#t=null,D.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{he.initialize()}):he.initialize());class qt{static engine=null;static webllm=null;static isInitialized=!1;static currentModel=null;static isGenerating=!1;static isModelCached=!1;static DEFAULT_MODEL="Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC";static history=[];static systemContext(){return{entity:globalThis.window?.AuthController?.getEntity?.()??null,route:globalThis.location?.hash??"",modelId:this.DEFAULT_MODEL}}static async initialize(){if(this.isInitialized)return console.log("[LLMController] Already initialized"),!0;console.log("[LLMController] Initializing WebLLM module...");try{if(!navigator.gpu)throw new Error("WebGPU is not available. Please use a supported browser (Chrome 113+, Edge 113+).");if(console.log("[LLMController] WebGPU detected"),this.webllm=await K(()=>import("https://esm.run/@mlc-ai/web-llm"),[]),console.log("[LLMController] WebLLM module loaded"),!this.webllm||!this.webllm.MLCEngine)throw new Error("MLCEngine not found in WebLLM module");return this.engine=new this.webllm.MLCEngine,console.log("[LLMController] MLCEngine created"),this.engine.setInitProgressCallback(t=>{this.handleInitProgress(t)}),this.isModelCached=await this.checkModelCache(),this.isInitialized=!0,console.log("[LLMController] Engine initialized, attempting auto-load..."),await this.autoLoadCachedModel(),console.log("[LLMController] Initialization complete"),!0}catch(t){return console.error("[LLMController] Initialization failed:",t),_.publish(g.LLM_ERROR,{error:t.message,phase:"initialization"}),!1}}static async checkModelCache(){console.log(`[LLMController] Checking cache for model: ${this.DEFAULT_MODEL}`);try{const n=(await caches.keys()).find(i=>i.includes("webllm/model"));if(!n)return console.log("[LLMController] No WebLLM model cache found"),!1;const r=(await(await caches.open(n)).keys()).filter(i=>i.url.includes(this.DEFAULT_MODEL)||i.url.includes("Hermes-2-Pro-Llama-3-8B")),a=r.length>0;return console.log(`[LLMController] Model cached: ${a} (${r.length} files)`),a}catch(t){return console.warn("[LLMController] Cache check failed:",t.message),!1}}static async autoLoadCachedModel(){try{this.isModelCached?console.log(`[LLMController] Loading cached model: ${this.DEFAULT_MODEL}`):console.log(`[LLMController] No cached model found - starting download: ${this.DEFAULT_MODEL}`),await this.loadModel(),console.log("[LLMController] Model ready")}catch(t){console.error("[LLMController] Auto-load failed:",t)}}static async loadModel(){if(!this.isInitialized)return console.error("[LLMController] Cannot load model: not initialized"),_.publish(g.LLM_ERROR,{error:"LLMController not initialized",modelId:this.DEFAULT_MODEL}),!1;const t=this.isModelCached;console.log(`[LLMController] Loading model: ${this.DEFAULT_MODEL} (cached: ${t})`);try{const n={temperature:.7,top_p:.95};return await this.engine.reload(this.DEFAULT_MODEL,n),this.currentModel=this.DEFAULT_MODEL,this.isModelCached=!0,console.log(`[LLMController] Model loaded successfully: ${this.DEFAULT_MODEL}`),_.publish(g.LLM_COMPLETE,{modelId:this.DEFAULT_MODEL,cached:t}),!0}catch(n){return console.error("[LLMController] Failed to load model:",n),_.publish(g.LLM_ERROR,{error:n.message,modelId:this.DEFAULT_MODEL,phase:"download"}),!1}}static handleInitProgress(t){const n=(t.progress*100).toFixed(1);let u=t.text;(n>0||!t.text.includes("Loading model from cache"))&&(u=`${n}% - ${t.text}`),console.log(`[LLMController] Progress: ${u}`),_.publish(g.LLM_STATUS,{progress:t.progress,progressPercent:parseFloat(n),text:u,modelId:this.currentModel||this.DEFAULT_MODEL})}static async chat(t,n={}){const{turnId:u}=n,o=dt("res");if(!this.currentModel){console.error("[LLMController] No model loaded - still downloading or initialization failed"),_.publish(g.LLM_ERROR,{error:"AI model is still loading. Please wait a moment and try again.",phase:"chat",turnId:u,responseId:o});return}if(this.isGenerating){console.warn("[LLMController] Already generating response");return}console.log(`[LLMController] Processing chat message: "${t}"`);const r=zt.compose(this.systemContext()),a=zt.hash(r);this.history.push({role:"user",content:t});const i=[{role:"system",content:r},...this.history];this.isGenerating=!0;let s="",c=null;try{const l=await this.engine.chat.completions.create({stream:!0,messages:i,stream_options:{include_usage:!0}});for await(const d of l){const p=d.choices[0]?.delta?.content;p&&(s+=p,_.publish(g.LLM_RESPONSE,{content:p,fullContent:s,done:!1,turnId:u,responseId:o,meta:{model:this.DEFAULT_MODEL,systemHash:a}})),d.usage&&(c=d.usage,console.log("[LLMController] Usage stats:",d.usage))}this.history.push({role:"assistant",content:s}),_.publish(g.LLM_RESPONSE,{content:"",fullContent:s,done:!0,turnId:u,responseId:o,meta:{model:this.DEFAULT_MODEL,systemHash:a,usage:c}}),console.log(`[LLMController] Response complete (${s.length} chars)`)}catch(l){console.error("[LLMController] Chat error:",l),_.publish(g.LLM_ERROR,{error:l.message,phase:"chat",turnId:u,responseId:o})}finally{this.isGenerating=!1}}static cancelGeneration(){if(!this.isGenerating||!this.engine){console.warn("[LLMController] Nothing to cancel");return}console.log("[LLMController] Cancelling generation...");try{this.engine.interruptGenerate(),this.isGenerating=!1,console.log("[LLMController] Generation cancelled")}catch(t){console.error("[LLMController] Cancel failed:",t)}}static getStatus(){return{modelId:this.DEFAULT_MODEL,isLoaded:!!this.currentModel,isCached:this.isModelCached,isGenerating:this.isGenerating,messageCount:this.history.length}}static resetConversation(){this.history=[],console.log("[LLMController] Conversation reset")}}class mt{static _initialized=!1;static _debug=!1;static init(t={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=t.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const n=u=>{this._handleSSEMessage(u)};return window.mvvSSEther.onmessage(n),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(t){try{this._debug&&console.log("[MachVive] SSE message received:",t);const n=t?.data;if(!n){this._debug&&console.log("[MachVive] No data in message, skipping");return}const u=n.data||n.package||n;if(!u){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=u.cfg;const r=u.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",r)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(i){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:i.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const a=o?.topic;if(!a){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",a),!this._isValidTopic(a)){console.warn(`[MachVive] Topic '${a}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(a,r,t,n)}catch(n){console.error("[MachVive] Error handling SSE message:",n)}}static _isValidTopic(t){return!g||!g.hasOwnProperty(t)?(console.warn(`[MachVive] Topic '${t}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(t,n,u,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const r=window.PubSub||PubSub,a={message:n,metadata:{source:"sse",sseEventId:u.id,timestamp:u.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${t}':`,a);const i=g[t];console.log(`[MachVive] AppBroadcast.${t} = '${i}'`),r.publish(i,a),console.log(`[MachVive] ✓ Published SSE message to topic: ${t}`)}catch(r){console.error(`[MachVive] Error publishing to topic '${t}':`,r)}}static debug(t){return this._debug=t,console.log(`[MachVive] Debug mode ${t?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=mt);typeof window<"u"&&(window.MachVive=mt);Wu(_,{app:"client-saas"});window.m5t=Object.create(null);window.m5t.pubsub=_;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(e){console.log("mvvLegit (direct): ReferenceError -",e.message)}const uo=Object.keys(window).filter(e=>e.toLowerCase().includes("mvv")||e.toLowerCase().includes("neodigm")||e.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",uo);const j=new Du("/",{hash:!0});window.router=j;function bt(e){const t=e?`${e.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),_.publish(g.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function ye(e){console.log("[Router] Navigating to:",e),j.navigate(`/${e}`)}j.on("/",()=>{console.log("[Router] Route: /"),_.publish(g.ROUTE_NAV_BEFORE,{route:"splash"}),K(()=>Promise.resolve().then(()=>wn),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"splash",error:e})})});j.on("/splash",()=>{console.log("[Router] Route: /splash"),_.publish(g.ROUTE_NAV_BEFORE,{route:"splash"}),K(()=>Promise.resolve().then(()=>wn),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"splash",error:e})})});j.on("/signin",()=>{console.log("[Router] Route: /signin"),_.publish(g.ROUTE_NAV_BEFORE,{route:"signin"}),K(()=>Promise.resolve().then(()=>_o),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"signin"})}).catch(e=>{console.error("[Router] Error loading signin route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"signin",error:e})})});j.on("/signup",()=>{console.log("[Router] Route: /signup"),_.publish(g.ROUTE_NAV_BEFORE,{route:"signup"}),K(()=>Promise.resolve().then(()=>Ao),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"signup"})}).catch(e=>{console.error("[Router] Error loading signup route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"signup",error:e})})});j.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),_.publish(g.ROUTE_NAV_BEFORE,{route:"verf-link"}),K(()=>Promise.resolve().then(()=>Co),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(e=>{console.error("[Router] Error loading verf-link route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"verf-link",error:e})})});j.on("/forgot",()=>{console.log("[Router] Route: /forgot"),_.publish(g.ROUTE_NAV_BEFORE,{route:"forgot"}),K(()=>Promise.resolve().then(()=>Lo),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(e=>{console.error("[Router] Error loading forgot route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"forgot",error:e})})});j.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!bt("resethash")){ye("signin");return}_.publish(g.ROUTE_NAV_BEFORE,{route:"resethash"}),K(()=>Promise.resolve().then(()=>Mo),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(e=>{console.error("[Router] Error loading resethash route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"resethash",error:e})})});j.on("/home",()=>{if(console.log("[Router] Route: /home"),!bt("home")){ye("signin");return}_.publish(g.ROUTE_NAV_BEFORE,{route:"home"}),K(()=>Promise.resolve().then(()=>Qo),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"home"})}).catch(e=>{console.error("[Router] Error loading home route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"home",error:e})})});j.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!bt("signout")){ye("signin");return}_.publish(g.ROUTE_NAV_BEFORE,{route:"signout"}),K(()=>Promise.resolve().then(()=>tr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(g.ROUTE_NAV_AFTER,{route:"signout"})}).catch(e=>{console.error("[Router] Error loading signout route:",e),_.publish(g.ROUTE_NAV_ERROR,{route:"signout",error:e})})});j.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),ye("splash")});_.subscribe(g.ROUTE_NAV,(e,t)=>{console.log("[Router] ROUTE_NAV event received:",t),t?.route&&ye(t.route)});function jt(){console.log("[App] Waiting for Neodigm 55 library...");let e=0;const t=100,n=setInterval(()=>{e++,e%10===0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(n),oo()):e>=t&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,_.publish(g.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",jt):jt();async function oo(){if(console.log("[App] Neodigm 55 loaded, initializing..."),to(),he.initialize(),console.log("[App] I18n Controller initialized"),qt.initialize().then(n=>{n?console.log("[App] LLM Controller initialized successfully"):console.warn("[App] LLM Controller initialization failed (non-critical)")}).catch(n=>{console.error("[App] LLM Controller initialization error:",n)}),!await ae.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),ye(n)}})){console.error("[App] AuthController initialization failed");return}const t=ae.getEntity();t&&(console.log("[App] Session restored for:",t.email),_.publish(g.APP_USER_LOADED,{entity:t})),_.publish(g.APP_READY,{timestamp:new Date().toISOString(),sessionUser:t}),j.resolve(),window.AuthController=ae,window.I18nController=he,window.LLMController=qt,window.MachVive=mt,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, LLMController, MachVive available globally)")}_.subscribe(g.ROUTE_NAV_AFTER,(e,t)=>{typeof he<"u"&&he.refresh&&setTimeout(()=>{he.refresh()},100)});const ro=Object.freeze({admin_root_role:{value:100,desc:"Administrator superuser infrastructure architecture"},admin_business_role:{value:90,desc:"Administrator financial oversight"},admin_support_role:{value:80,desc:"Administrator maintenance and configuration"},admin_readonly_role:{value:70,desc:"Administrator information help desk"},client_tier_3_role:{value:30,desc:"Client paid tier 3"},client_tier_2_role:{value:20,desc:"Client paid tier 2"},client_tier_1_role:{value:10,desc:"Client paid tier 1"},client_standard_role:{value:0,desc:"Client free tier 0"}});function Wt(e){return ro[e]||null}class ao{static MIN_ROLE_VALUE=50;static COMMANDS={help:"Show available commands",clear:"Clear chat canvas",debug:"Toggle debug mode (::debug on|off)",version:"Show application version",feature:"Feature flag operations (::feature list|get|set)",model:"LLM model operations (::model status|download|clear)",reload:"Reload the page",export:"Export chat history as JSON",theme:"Toggle theme (::theme dark|light)",auth:"Show authentication status"};static hasAccess(t){if(!t||!t.class)return!1;let n=0;if(typeof t.class=="string"){const u=Wt(t.class);n=u?u.value:0}else typeof t.class=="object"&&t.class.value!==void 0&&(n=t.class.value);return console.log(`[CLIController] Role check: ${t.class} → value: ${n}`),n>=this.MIN_ROLE_VALUE}static async process(t,n){if(!this.hasAccess(n))return{error:!0,message:`⛔ **Access Denied**

CLI commands require admin privileges (role ≥ 50).`};const u=t.slice(2).trim(),[o,...r]=u.split(/\s+/);switch(console.log("[CLIController] Processing command:",o,"Args:",r),o.toLowerCase()){case"help":return this.cmdHelp();case"clear":return this.cmdClear();case"debug":return this.cmdDebug(r);case"version":return this.cmdVersion();case"feature":return this.cmdFeature(r);case"model":return this.cmdModel(r);case"reload":return this.cmdReload();case"export":return this.cmdExport();case"theme":return this.cmdTheme(r);case"auth":return this.cmdAuth(n);default:return{error:!0,message:`❌ **Unknown command:** \`${o}\`

Type \`::help\` for available commands.`}}}static cmdHelp(){let t=`📖 **CLI Commands**

`;t+="Available commands (prefix with `::`)\n\n";for(const[n,u]of Object.entries(this.COMMANDS))t+=`• \`::${n}\` - ${u}
`;return t+=`
**Examples:**
`,t+="• `::debug on` - Enable debug logging\n",t+="• `::feature list` - Show all feature flags\n",t+="• `::model status` - Check LLM model status\n",{message:t}}static cmdClear(){const t=document.getElementById("chat-messages");return t?(t.innerHTML="",{message:"✅ Chat canvas cleared"}):{error:!0,message:"❌ Failed to clear canvas"}}static cmdDebug(t){const n=t[0]?.toLowerCase();if(!n||!["on","off"].includes(n))return{message:`🐛 **Debug Mode**

Current state: \`${localStorage.getItem("debug_mode")==="true"?"ON":"OFF"}\`

Usage: \`::debug on|off\``};const u=n==="on";return localStorage.setItem("debug_mode",u),{message:`🐛 Debug mode ${u?"**enabled**":"**disabled**"}`}}static cmdVersion(){return{message:`ℹ️ **StreamSyncEngage SaaS Client**

Version: 1.0.0
Build: production
Node Env: production`}}static cmdFeature(t){const n=t[0]?.toLowerCase();if(!n)return{message:"🚩 **Feature Flags**\n\nUsage:\n• `::feature list` - List all flags\n• `::feature get <name>` - Get flag value\n• `::feature set <name> <value>` - Set flag value"};switch(n){case"list":{let u=`🚩 **Feature Flags**

`;const o=Object.entries(D).slice(0,20);for(const[r,a]of o)u+=`• \`${r}\`: \`${a}\`
`;return u+=`
*Showing 20 of ${Object.keys(D).length} flags*`,{message:u}}case"get":{const u=t[1];if(!u)return{error:!0,message:"❌ Flag name required: `::feature get <name>`"};const o=D[u];return o===void 0?{error:!0,message:`❌ Flag not found: \`${u}\``}:{message:`🚩 \`${u}\` = \`${o}\``}}case"set":return{message:`⚠️ **Feature flag modification**

Setting flags dynamically is not yet implemented.
Flags are loaded from \`featureFlags.js\`.`};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdModel(t){const n=t[0]?.toLowerCase();if(!n)return{message:"🤖 **LLM Model Operations**\n\nUsage:\n• `::model status` - Show model status\n• `::model download` - Download model\n• `::model clear` - Clear model cache"};switch(n){case"status":{if(!window.LLMController)return{error:!0,message:"❌ LLMController not available"};const u=window.LLMController.getStatus();let o=`🤖 **LLM Model Status**

`;return o+=`• Model: \`${u.modelId}\`
`,o+=`• Loaded: \`${u.isLoaded?"YES":"NO"}\`
`,o+=`• Cached: \`${u.isCached?"YES":"NO"}\`
`,o+=`• Generating: \`${u.isGenerating?"YES":"NO"}\`
`,o+=`• Message Count: \`${u.messageCount}\`
`,{message:o}}case"download":return window.LLMController?(window.LLMController.loadModel(),{message:"⏳ Starting model download..."}):{error:!0,message:"❌ LLMController not available"};case"clear":return{message:`⚠️ **Clear Model Cache**

Clearing browser cache requires manual action:
1. Open DevTools (F12)
2. Application → Storage → Cache Storage
3. Delete \`webllm/model\``};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdReload(){return setTimeout(()=>{window.location.reload()},500),{message:"🔄 Reloading page..."}}static cmdExport(){const t=document.getElementById("chat-messages");if(!t)return{error:!0,message:"❌ Chat canvas not found"};const u=Array.from(t.children).map(s=>({type:s.tagName.toLowerCase().includes("prompt")?"user":"assistant",message:s.getAttribute("message"),timestamp:s.getAttribute("timestamp")})),o=JSON.stringify(u,null,2),r=new Blob([o],{type:"application/json"}),a=URL.createObjectURL(r),i=document.createElement("a");return i.href=a,i.download=`chat-export-${Date.now()}.json`,i.click(),URL.revokeObjectURL(a),{message:`✅ Exported ${u.length} messages`}}static cmdTheme(t){const n=t[0]?.toLowerCase();return!n||!["dark","light"].includes(n)?{message:"🎨 **Theme Toggle**\n\nUsage: `::theme dark|light`"}:(localStorage.setItem("theme",n),{message:`🎨 Theme set to **${n}**

⚠️ Theme switching not yet implemented in UI.`})}static cmdAuth(t){if(!t)return{error:!0,message:"❌ Not authenticated"};let n="Unknown",u=0;if(typeof t.class=="string"){const r=Wt(t.class);r&&(n=r.desc,u=r.value)}else typeof t.class=="object"&&(n=t.class.desc||"Unknown",u=t.class.value||0);let o=`🔐 **Authentication Status**

`;return o+=`• Email: \`${t.email}\`
`,o+=`• Name: \`${t.first} ${t.last}\`
`,o+=`• Role: \`${t.class}\`
`,o+=`• Role Description: \`${n}\`
`,o+=`• Role Value: \`${u}\`
`,o+=`• Company: \`${t.company||"N/A"}\`
`,o+=`• Status: \`${t.status||"Unknown"}\`
`,{message:o}}}const io=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"}));function so(){return`
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
  `}function co(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const e=localStorage.getItem(D.FF_SSE_LS_TOKEN),t=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!e,hasMvvTs:!!t});const n=document.getElementById("splash-loader"),u=document.getElementById("splash-actions");e?(console.log("[SplashRoute] Auth token found → HOME"),_.publish(g.ROUTE_NAV,{route:"home"})):t?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),_.publish(g.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),n&&(n.style.display="none"),u&&(u.style.display="flex"),document.querySelectorAll("[data-route]").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${a}`),_.publish(g.ROUTE_NAV,{route:a})})}))},4e3)}const wn=Object.freeze(Object.defineProperty({__proto__:null,init:co,render:so},Symbol.toStringTag,{value:"Module"}));function Et(e){return e=String(e),Math.abs(e.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0))}function lo(){return`
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
  `}function fo(){console.log("[SigninRoute] Initialized");const e=document.getElementById("loginForm"),t=document.getElementById("email"),n=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const r=n.type==="password"?"text":"password";n.type=r}),e?.addEventListener("submit",async r=>{r.preventDefault();const a=t.value.trim(),i=n.value;po(a,t)&&ho(i,n)&&await go(a,i)}),document.getElementById("link--uc__underline")?.addEventListener("click",r=>{r.preventDefault(),_.publish(g.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",r=>{r.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),_.publish(g.ROUTE_NAV,{route:"signup"})})}function po(e,t){if(!e)return He(t,w.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,u=(e.match(/\./g)||[]).length;return n!==1||u<1?(He(t,w.get("validation_email_invalid")),!1):!0}function ho(e,t){return e?e.length<10?(He(t,w.get("validation_password_min_length")),!1):!0:(He(t,w.get("validation_password_required")),!1)}function He(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function go(e,t){const n=document.querySelector(".btn");n.disabled=!0,n.textContent=w.get("loading_signing_in");try{const u=Et(t),o=await ae.doSignin(e,u);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(w.get("success_welcome_back"),"success"),_.publish(g.AUTH_SIGNIN_SUCCESS,{entity:ae.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(w.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||w.get("error_signin_failed"),"danger"),n.disabled=!1,n.textContent=w.get("sign_in").toUpperCase())}catch(u){console.error("[SigninRoute] Sign in error:",u),typeof neodigmToast<"u"&&neodigmToast.q(u.message||w.get("error_network"),"danger"),n.disabled=!1,n.textContent=w.get("sign_in").toUpperCase(),_.publish(g.AUTH_SIGNIN_FAIL,{message:u.message})}}const _o=Object.freeze(Object.defineProperty({__proto__:null,init:fo,render:lo},Symbol.toStringTag,{value:"Module"}));function kn(e){const t=[];return e.length<10&&t.push("at least 10 characters"),/[a-z]/.test(e)||t.push("1 lowercase"),/[A-Z]/.test(e)||t.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push("1 special character"),/[^\x00-\x7F]/.test(e)&&t.push("ASCII characters only"),t}function Tn(e){return e.length===0?"":e.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":e.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function mo(){return`
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
  `}function bo(){console.log("[SignupRoute] Initialized");const e=document.getElementById("signupForm"),t=e.querySelector('button[type="submit"]');Yt("togglePassword","password","eyeIcon"),Yt("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",u=>{u.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),_.publish(g.ROUTE_NAV,{route:"signin"})}),e.addEventListener("submit",async u=>{u.preventDefault();const o=document.getElementById("first").value.trim(),r=document.getElementById("last").value.trim(),a=document.getElementById("email").value.trim(),i=document.getElementById("company").value.trim(),s=document.getElementById("phone").value.trim(),c=document.getElementById("password").value,l=document.getElementById("confirmPassword").value,d=document.getElementById("first"),p=document.getElementById("last"),h=document.getElementById("email"),f=document.getElementById("password"),m=document.getElementById("confirmPassword");if(Kt(o,d,w.get("validation_first_name_required"))&&Kt(r,p,w.get("validation_last_name_required"))&&Eo(a,h)&&vo(c,f)){if(c!==l){be(m,w.get("validation_password_mismatch"));return}t.disabled=!0,t.textContent=w.get("loading_creating_account"),await yo(o,r,a,i,s,c)}})}function Yt(e,t,n){const u=document.getElementById(e),o=document.getElementById(t),r=document.getElementById(n);!u||!o||!r||u.addEventListener("click",()=>{const a=o.type==="password";o.type=a?"text":"password",a?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Kt(e,t,n){return e?!0:(be(t,n),!1)}function Eo(e,t){if(!e)return be(t,w.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,u=(e.match(/\./g)||[]).length;return n!==1||u<1?(be(t,w.get("validation_email_invalid")),!1):!0}function vo(e,t){if(!e)return be(t,w.get("validation_password_required")),!1;const n=kn(e);return n.length>0?(be(t,Tn(n)),!1):!0}function be(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function yo(e,t,n,u,o,r){const a=document.querySelector('button[type="submit"]');try{const i=Et(r),s={email:n,hash:i,first:e,last:t};u&&(s.company=u),o&&(s.phone=o);const c=await ae.doSignup(s);if(c.ok)_.publish(g.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const l=c.error||c.message||w.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(l,"danger"),a.disabled=!1,a.textContent=w.get("create_account").toUpperCase(),_.publish(g.AUTH_SIGNUP_FAIL,{message:l})}}catch(i){console.error("[SignupRoute] Sign up error:",i),typeof neodigmToast<"u"&&neodigmToast.q(i.message||w.get("error_network"),"danger"),a.disabled=!1,a.textContent=w.get("create_account").toUpperCase(),_.publish(g.AUTH_SIGNUP_FAIL,{message:i.message})}}const Ao=Object.freeze(Object.defineProperty({__proto__:null,init:bo,render:mo},Symbol.toStringTag,{value:"Module"}));function So(){return`
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
  `}function xo(){console.log("[VerfLinkRoute] Initialized");const e=7200,t=Date.now(),n=document.getElementById("countdown-display");function u(){const r=Date.now()-t,a=Math.floor(r/1e3),i=Math.max(0,e-a),s=Math.floor(i/3600),c=Math.floor(i%3600/60),l=i%60,d=`${String(s).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(l).padStart(2,"0")}`;n&&(n.textContent=d,i<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),i===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),i===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}u();const o=setInterval(u,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const Co=Object.freeze(Object.defineProperty({__proto__:null,init:xo,render:So},Symbol.toStringTag,{value:"Module"})),wo="https://streamsyncengage-saas.onrender.com";class ko{constructor(){this.baseUrl=wo}async request(t,n={}){const u=`${this.baseUrl}${t}`,o={"Content-Type":"application/json",...n.headers};try{const r=await fetch(u,{...n,headers:o});if(r.status===401||r.status===403){_.publish(g.AUTH_TOKEN_EXPIRED,{status:r.status,endpoint:t});const i=await r.json().catch(()=>({}));throw new Error(i.error||"Authentication failed")}const a=await r.json();return{ok:r.ok,status:r.status,data:a}}catch(r){throw console.error("API Request Error:",r),_.publish(g.APP_ERROR,{message:r.message,endpoint:t}),r}}async get(t){return this.request(t,{method:"GET"})}async post(t,n){return this.request(t,{method:"POST",body:JSON.stringify(n)})}async put(t,n){return this.request(t,{method:"PUT",body:JSON.stringify(n)})}async delete(t){return this.request(t,{method:"DELETE"})}async signin(t,n){return this.post("/api/acctEntity/signin",{email:t,hash:n})}async signup(t){return this.post("/api/acctEntity/signup",t)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(t){return this.post("/api/acctEntity/forgot",{email:t})}async resetHash(t,n){return this.post("/api/acctEntity/resethash",{email:t,hash:n})}async verifyAccount(t){return this.get(`/api/acctEntity/verify?CODE=${t}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(t){return this.get(`/api/acctEntity/${t}`)}async updateAccount(t,n){return this.put(`/api/acctEntity/${t}`,n)}async deleteAccount(t){return this.delete(`/api/acctEntity/${t}`)}async ping(){return this.get("/ping")}}const To=new ko;function Ro(){return`
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

  `}function Oo(){console.log("[ForgotRoute] Initialized");const e=document.getElementById("forgot-form"),t=document.getElementById("email");e?.addEventListener("submit",async n=>{n.preventDefault();const u=t.value.trim();Do(u,t)&&await Io(u)})}function Do(e,t){if(!e)return Zt(t,w.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,u=(e.match(/\./g)||[]).length;return n!==1||u<1?(Zt(t,w.get("validation_email_invalid")),!1):!0}function Zt(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function Io(e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent="SENDING...";try{const n=await To.forgotPassword(e);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(w.get("success_reset_link_sent"),"success"),_.publish(g.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||w.get("error_signin_failed"),"danger"),t.disabled=!1,t.textContent=w.get("send_reset_link").toUpperCase())}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||w.get("error_network"),"danger"),t.disabled=!1,t.textContent=w.get("send_reset_link").toUpperCase()}}const Lo=Object.freeze(Object.defineProperty({__proto__:null,init:Oo,render:Ro},Symbol.toStringTag,{value:"Module"}));function No(){return`
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
                value="${ae.getEntity()?.email||""}"
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
  `}function Fo(){console.log("[ResethashRoute] Initialized");const e=document.getElementById("resethash-form"),t=e.querySelector('button[type="submit"]');Jt("toggleNewPassword","new-password","eyeIconNew"),Jt("toggleConfirmPassword","confirm-password","eyeIconConfirm"),e?.addEventListener("submit",async n=>{n.preventDefault();const u=e.email.value.trim(),o=e.newPassword.value,r=e.confirmPassword.value,a=document.getElementById("new-password"),i=document.getElementById("confirm-password");if(!o){_e(a,w.get("validation_new_password_required"));return}const s=kn(o);if(s.length>0){_e(a,Tn(s));return}if(!r){_e(i,w.get("validation_new_password_required"));return}if(o!==r){_e(i,w.get("validation_password_mismatch"));return}t.disabled=!0,t.textContent=w.get("loading_resetting_password");try{const c=Et(o),l=await ae.doResetHash(u,c);l.ok?(typeof neodigmToast<"u"&&neodigmToast.q(w.get("success_password_reset"),"success"),_.publish(g.AUTH_RESETHASH_SUCCESS,{email:u})):(_e(a,l.error||w.get("error_signin_failed")),t.disabled=!1,t.textContent=w.get("update_password").toUpperCase())}catch(c){console.error("[ResethashRoute] Reset password error:",c),_e(a,c.message||w.get("error_network")),t.disabled=!1,t.textContent=w.get("update_password").toUpperCase()}})}function Jt(e,t,n){const u=document.getElementById(e),o=document.getElementById(t),r=document.getElementById(n);!u||!o||!r||u.addEventListener("click",()=>{const a=o.type==="password";o.type=a?"text":"password",a?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function _e(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}const Mo=Object.freeze(Object.defineProperty({__proto__:null,init:Fo,render:No},Symbol.toStringTag,{value:"Module"}));class qe{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"SILOS",caption:"Silos",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Data silo management",secondary:[{token:"CACHE",caption:"Cache",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Cache management and statistics",secondary:[]},{token:"LIFECYCLE",caption:"Lifecycle",enabled:!0,icon:"fas fa-recycle",admin_role:!1,tagline:"Data lifecycle and retention policies",secondary:[]}]},{token:"NOTIFICATIONS",caption:"Notifications",enabled:!0,icon:"fas fa-bell",admin_role:!1,tagline:"Notification management",secondary:[{token:"BELL_DRAWER",caption:"Bell Drawer",enabled:!0,icon:"fas fa-inbox",admin_role:!1,tagline:"Notification drawer configuration",secondary:[]},{token:"WEB_HOOKS",caption:"Web Hooks",enabled:!0,icon:"fas fa-webhook",admin_role:!1,tagline:"Webhook configuration and monitoring",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"fas fa-chart-line",admin_role:!1,tagline:"User engagement tools",secondary:[{token:"AB_TESTS",caption:"A/B Tests",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"FEEDBACK",caption:"Feedback",enabled:!0,icon:"fas fa-comments",admin_role:!1,tagline:"User feedback collection",secondary:[]},{token:"GUIDED_TOURS",caption:"Guided Tours",enabled:!0,icon:"fas fa-route",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"fas fa-clipboard-list",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]},{token:"SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"fas fa-images",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"SURVEYS",caption:"Surveys",enabled:!0,icon:"fas fa-poll",admin_role:!1,tagline:"Survey campaigns and analytics",secondary:[]},{token:"VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"fas fa-voicemail",admin_role:!1,tagline:"Voice message management",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static setAppToken(t){this.#t[t]||console.warn(`[NavMetaManager] Unknown app token: ${t}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=t,console.log(`[NavMetaManager] App token set: ${t}`)}static getAppToken(){return this.#e}static#n(t){if(!t)return t;const n=t.token.toLowerCase(),u=`nav_${n}`,o=`nav_${n}_tagline`,r=w.get(u)||t.caption,a=w.get(o)||t.tagline;return{...t,caption:r,tagline:a,secondary:t.secondary?t.secondary.map(i=>this.#n(i)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(n=>this.#n(n)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const t=this.getPrimaryNav(),n=[];return t.forEach(u=>{n.push(u),u.secondary&&u.secondary.length>0&&n.push(...u.secondary)}),n}static getNavByToken(t){return this.getFlattenedNav().find(u=>u.token===t)||null}static getAdminNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(t="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const n=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,u=await fetch(`${t}/coreMeta?meta_token=${n}`);if(!u.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${u.status}), using static config`),this.getPrimaryNav();const o=await u.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${n}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(n){return console.error("[NavMetaManager] Error fetching from coreMeta:",n),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:qe});class Po extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const t=qe.getPrimaryNav();t&&t.length>0?(this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const t=this.getAttribute("data-buttons");if(t)try{this.buttons=JSON.parse(t);const n=this.buttons.find(u=>u.selected);this.selectedPrimaryToken=n?n.token:this.buttons[0]?.token||null}catch(n){console.error("[M5TPrimaryNav] Error parsing buttons:",n),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(n=>n.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(t,n){if(n==="primary"){const u=this.buttons.find(o=>o.token===t);return{caption:u?.caption||"",tagline:u?.tagline||""}}else for(const u of this.buttons)if(u.secondary){const o=u.secondary.find(r=>r.token===t);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const t=this.getSecondaryButtons(),n=t.length>0;this.shadowRoot.innerHTML=`
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
          grid-template-areas: "logo ${this.buttons.map((u,o)=>`btn${o}`).join(" ")}";
          grid-template-columns: 84px repeat(${this.buttons.length}, 1fr);
          height: 64px;
          background: white;
          overflow: hidden;
        }

        .secondary-nav {
          display: grid;
          grid-template-columns: repeat(${t.length||1}, 1fr);
          height: 48px;
          min-height: 48px;
          background: #2d2d2d;
          border-top: 2px solid #000000;
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
          background: #2d2d2d;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 500;
          border-bottom: none;
          border-left: 1px solid #555;
          height: 48px;
          gap: 2px;
        }

        .secondary-nav .nav-button:first-of-type {
          border-left: none;
        }

        .secondary-nav .nav-button:hover:not(:disabled) {
          background: #3a3a3a;
          color: #ffffff;
        }

        .secondary-nav .nav-button-icon {
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .secondary-nav .nav-button:hover:not(:disabled) .nav-button-icon {
          opacity: 1;
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
            min-height: 42px;
            grid-template-columns: repeat(${t.length||1}, 1fr);
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
          ${this.buttons.map((u,o)=>this.renderButton(u,o,"primary")).join("")}
        </nav>
        <nav class="secondary-nav">
          ${n?t.map((u,o)=>this.renderButton(u,o,"secondary")).join(""):""}
        </nav>
      </div>
    `}renderButton(t,n,u="primary"){const o=u==="primary"?t.token===this.selectedPrimaryToken:!1,r=typeof t.count=="number"&&t.count!==null&&t.count!==void 0,a=t.icon&&t.icon.trim()!=="",i=t.tagline&&t.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${t.token}"
        data-level="${u}"
        data-admin="${t.admin_role||!1}"
        ${t.enabled?"":"disabled"}
        ${i?`title="${t.tagline}"`:""}
        style="grid-area: ${u==="primary"?`btn${n}`:"auto"}"
      >
        ${a?`<i class="${t.icon} nav-button-icon"></i>`:""}
        <span>${t.caption}</span>
        ${r?`<span class="count-badge">${t.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(u=>{const o=u.getAttribute("data-token"),r=u.getAttribute("data-level");u.addEventListener("click",a=>{o&&!a.currentTarget.disabled&&!this.longTapFired&&(r==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),u.addEventListener("dblclick",a=>{if(o&&!a.currentTarget.disabled){const i=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:r,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))}}),u.addEventListener("mouseenter",a=>{if(o&&!a.currentTarget.disabled){const i=this.getButtonData(o,r);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:i.caption,tagline:i.tagline,action:"enter",timestamp:Date.now()}}))}}),u.addEventListener("mouseleave",a=>{if(o&&!a.currentTarget.disabled){const i=this.getButtonData(o,r);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:i.caption,tagline:i.tagline,action:"leave",timestamp:Date.now()}}))}}),u.addEventListener("mousedown",a=>{o&&!a.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const i=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:r,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),u.addEventListener("mouseup",a=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),u.addEventListener("mouseleave",a=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const n=this.shadowRoot.querySelector(".logo");n&&n.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(t){const n=this.buttons.find(o=>o.token===t),u=this.getButtonData(t,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,level:"primary",caption:u.caption,tagline:u.tagline,hasSecondary:(n?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==t&&(this.selectedPrimaryToken=t,this.render(),this.attachEventListeners())}selectSecondaryButton(t){const n=this.getButtonData(t,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:n.caption,tagline:n.tagline,timestamp:Date.now()}}))}updateButtons(t){this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(t,n,u="primary"){let o;u==="primary"?o=this.buttons.find(r=>r.token===t):o=this.getSecondaryButtons().find(a=>a.token===t),o&&(o.count=n,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",Po);class Uo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp"]}attributeChangedCallback(t,n,u){n!==u&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const t=this.getAttribute("timestamp");return t||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}escapeHtml(t){const n=document.createElement("div");return n.textContent=t,n.innerHTML}render(){const t=this.getMessage(),n=this.getTimestamp(),u=this.shouldShowTimestamp();this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-self: flex-end;
          max-width: 70%;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bubble-content {
          background: #92a8d1;
          color: #ffffff;
          border-radius: 18px 18px 4px 18px;
          padding: 0.875rem 1.25rem;
          font-size: 0.95rem;
          line-height: 1.5;
          word-wrap: break-word;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .bubble-timestamp {
          font-size: 0.75rem;
          color: #a8a8a8;
          margin-top: 0.25rem;
          padding: 0 0.5rem;
          text-align: right;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          :host {
            max-width: 85%;
          }

          .bubble-content {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
        }
      </style>

      <div class="bubble-content">${this.escapeHtml(t)}</div>
      ${u?`<div class="bubble-timestamp">${this.escapeHtml(n)}</div>`:""}
    `}}customElements.define("m5t-chat-prompt",Uo);class Bo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.attachEventListeners()}getPlaceholder(){return this.getAttribute("placeholder")||"Type your message..."}getMaxRows(){return parseInt(this.getAttribute("max-rows"))||5}render(){const t=this.getPlaceholder(),n=this.getMaxRows();this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 4px 32px;
        }

        .prompt-container {
          display: grid;
          grid-template-columns: 48px 1fr 48px;
          grid-template-areas: "cancel prompt send";
          gap: 12px;
          background: #2d2d2d;
          border: 2px solid #3a3a3a;
          border-radius: 28px;
          padding: 8px 12px;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .prompt-container:focus-within {
          border-color: #92a8d1;
          box-shadow: 0 4px 16px rgba(146, 168, 209, 0.3);
        }

        .cancel-btn {
          grid-area: cancel;
          width: 48px;
          height: 48px;
          background: #92a8d1;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cancel-btn:hover {
          background: #364C75;
          transform: scale(1.05);
        }

        .cancel-btn:active {
          transform: scale(0.95);
        }

        .prompt-area {
          grid-area: prompt;
          background: transparent;
          border: none;
          color: #e4e4e4;
          font-size: 1rem;
          font-family: inherit;
          line-height: 1.5;
          resize: none;
          overflow-y: auto;
          outline: none;
          padding: 8px 0;
          min-height: 24px;
          max-height: calc(1.5rem * ${n});
        }

        .prompt-area::placeholder {
          color: #a8a8a8;
        }

        .prompt-area::-webkit-scrollbar {
          width: 6px;
        }

        .prompt-area::-webkit-scrollbar-track {
          background: transparent;
        }

        .prompt-area::-webkit-scrollbar-thumb {
          background: #3a3a3a;
          border-radius: 3px;
        }

        .send-btn {
          grid-area: send;
          width: 48px;
          height: 48px;
          background: #92a8d1;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .send-btn:hover {
          background: #364C75;
          transform: scale(1.05);
        }

        .send-btn:active {
          transform: scale(0.95);
        }

        .send-btn:disabled,
        .cancel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          :host {
            padding: 4px 16px;
          }

          .prompt-container {
            gap: 8px;
            padding: 6px 10px;
          }

          .cancel-btn,
          .send-btn {
            width: 40px;
            height: 40px;
          }

          .prompt-area {
            font-size: 0.95rem;
          }
        }
      </style>

      <div class="prompt-container">
        <button class="cancel-btn" id="cancel-btn" title="Cancel">
          <!-- Placeholder: Blue square -->
        </button>

        <textarea
          class="prompt-area"
          id="prompt-textarea"
          placeholder="${t}"
          rows="1"
        ></textarea>

        <button class="send-btn" id="send-btn" title="Send (Enter)">
          <!-- Placeholder: Blue square -->
        </button>
      </div>
    `}attachEventListeners(){const t=this.shadowRoot.getElementById("prompt-textarea"),n=this.shadowRoot.getElementById("send-btn"),u=this.shadowRoot.getElementById("cancel-btn");!t||!n||!u||(t.addEventListener("input",()=>{this.autoExpandTextarea(t)}),t.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this.handleSend())}),n.addEventListener("click",()=>{this.handleSend()}),u.addEventListener("click",()=>{this.handleCancel()}))}autoExpandTextarea(t){t.style.height="auto",t.style.height=t.scrollHeight+"px"}handleSend(){const t=this.shadowRoot.getElementById("prompt-textarea");if(!t)return;const n=t.value.trim();if(!n){console.warn("[M5TChatPromptArea] Cannot send empty message");return}const u=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:n,timestamp:u,pubsubTopic:"CONVERSATION.PROMPT.AGENT_CANVAS"};console.log("[M5TChatPromptArea] Dispatching message-sent event:",o),t.value="",t.style.height="auto",this.dispatchEvent(new CustomEvent("message-sent",{bubbles:!0,composed:!0,detail:o}))}handleCancel(){const t=this.shadowRoot.getElementById("prompt-textarea");t&&(t.value="",t.style.height="auto",console.log("[M5TChatPromptArea] Input cancelled"),this.dispatchEvent(new CustomEvent("message-cancelled",{bubbles:!0,composed:!0})))}getMessage(){const t=this.shadowRoot.getElementById("prompt-textarea");return t?t.value:""}setMessage(t){const n=this.shadowRoot.getElementById("prompt-textarea");n&&(n.value=t,this.autoExpandTextarea(n))}clear(){this.handleCancel()}focus(){const t=this.shadowRoot.getElementById("prompt-textarea");t&&t.focus()}}customElements.define("m5t-chat-prompt-area",Bo);let Ue=null,ft=null;function Go(e){ft=Promise.resolve().then(e).then(t=>(Ue=t,t)).catch(t=>(console.warn("[M5TChatResponse] markdown renderer failed to load - falling back to plain text",t),null))}function Rn(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}async function Vo(e){if(!Ue&&ft&&await ft,Ue)try{return Ue(e)}catch(t){console.warn("[M5TChatResponse] markdown render failed - falling back to plain text",t)}return Rn(e).replace(/\n/g,"<br>")}const Ho=e=>(globalThis.requestAnimationFrame||(t=>setTimeout(t,16)))(e),zo=`
  :host {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 70%;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .bubble-wrapper {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #3a3a3a;
  }

  .bubble-content {
    background: #2d2d2d;
    color: #e4e4e4;
    border-radius: 18px 18px 18px 4px;
    border: 1px solid #3a3a3a;
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
    line-height: 1.5;
    word-wrap: break-word;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Failed turn - phase comes from the conversation envelope */
  :host([phase="error"]) .bubble-content {
    border-color: #DD4124;
    background: #2d2020;
  }

  /* Markdown styling */
  .bubble-content h1,
  .bubble-content h2,
  .bubble-content h3 {
    margin: 0.5em 0 0.25em 0;
    color: #edba08;
  }

  .bubble-content h1 { font-size: 1.4em; }
  .bubble-content h2 { font-size: 1.2em; }
  .bubble-content h3 { font-size: 1.1em; }

  .bubble-content p {
    margin: 0.5em 0;
  }

  .bubble-content p:first-child {
    margin-top: 0;
  }

  .bubble-content p:last-child {
    margin-bottom: 0;
  }

  .bubble-content code {
    background: #1a1a1a;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    color: #92a8d1;
  }

  .bubble-content pre {
    background: #1a1a1a;
    padding: 1em;
    border-radius: 6px;
    overflow-x: auto;
    margin: 0.5em 0;
  }

  .bubble-content pre code {
    background: none;
    padding: 0;
    color: #e4e4e4;
  }

  .bubble-content ul,
  .bubble-content ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
  }

  .bubble-content li {
    margin: 0.25em 0;
  }

  .bubble-content a {
    color: #92a8d1;
    text-decoration: underline;
  }

  .bubble-content a:hover {
    color: #edba08;
  }

  .bubble-content blockquote {
    border-left: 3px solid #3a3a3a;
    padding-left: 1em;
    margin: 0.5em 0;
    color: #a8a8a8;
  }

  .bubble-timestamp {
    font-size: 0.75rem;
    color: #a8a8a8;
    margin-top: 0.25rem;
    padding: 0 0.5rem;
    text-align: left;
  }

  .bubble-timestamp[hidden] {
    display: none;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    :host {
      max-width: 85%;
    }

    .bubble-content {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
    }

    .avatar {
      width: 28px;
      height: 28px;
    }
  }
`;class $o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._built=!1,this._pending=!1,this._painted=null}static get observedAttributes(){return["message","timestamp","show-timestamp","avatar","show-avatar"]}connectedCallback(){this.buildShell(),this.paint()}attributeChangedCallback(t,n,u){if(!(n===u||!this._built)){if(t==="message"){this.schedulePaint();return}if(t==="avatar"||t==="show-avatar"){this.buildShell(),this._painted=null,this.paint();return}this.paintTimestamp()}}getMessage(){return this.getAttribute("message")||""}getTimestamp(){return this.getAttribute("timestamp")||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}getAvatar(){return this.getAttribute("avatar")||""}shouldShowAvatar(){return this.getAttribute("show-avatar")==="true"&&!!this.getAvatar()}buildShell(){const t=this.shouldShowAvatar()?`<img src="${Rn(this.getAvatar())}" alt="Avatar" class="avatar">`:"";this.shadowRoot.innerHTML=`
      <style>${zo}</style>
      <div class="bubble-wrapper">
        ${t}
        <div>
          <div class="bubble-content"></div>
          <div class="bubble-timestamp"></div>
        </div>
      </div>
    `,this._content=this.shadowRoot.querySelector(".bubble-content"),this._timestamp=this.shadowRoot.querySelector(".bubble-timestamp"),this._built=!0,this.paintTimestamp()}paintTimestamp(){this._timestamp&&(this._timestamp.textContent=this.getTimestamp(),this._timestamp.hidden=!this.shouldShowTimestamp())}schedulePaint(){this._pending||(this._pending=!0,Ho(()=>{this._pending=!1,this.paint()}))}async paint(){if(!this._built||!this._content)return;const t=this.getMessage();if(t===this._painted||t===""&&this._painted===null)return;this._painted=t;const n=await Vo(t);this._painted===t&&(this._content.innerHTML=n)}}customElements.define("m5t-chat-response",$o);Go(async()=>{const{default:e}=await K(async()=>{const{default:n}=await Promise.resolve().then(()=>Vi);return{default:n}},void 0),t=new e({html:!1,breaks:!0,linkify:!0,typographer:!0});return n=>t.render(n)});const Qt="llm-status";qe.setAppToken("client-saas");function qo(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-buttons='${qe.getPrimaryNavJSON()}'
      ></m5t-primary-nav>

      <main class="home-main" id="chat-canvas">
        <!-- Chat bubbles will be injected here dynamically -->
        <div class="chat-messages" id="chat-messages">
          <!-- Messages will appear here via PubSub events -->
        </div>
      </main>

      <!-- Fixed Prompt Area -->
      <div class="prompt-area" id="prompt-area">
        <m5t-chat-prompt-area placeholder="Ask me anything..."></m5t-chat-prompt-area>
      </div>
    </div>

    <style>
      :root {
        overflow: hidden !important;
        scrollbar-gutter: auto !important;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        overflow: hidden !important;
        height: 100vh;
        width: 100vw;
        scrollbar-gutter: auto !important;
        scrollbar-width: none !important;
      }

      body {
        overflow: hidden !important;
        height: 100vh;
        width: 100vw;
        margin: 0 !important;
        padding: 0 !important;
        scrollbar-gutter: auto !important;
        scrollbar-width: none !important;
      }

      #app {
        overflow: hidden !important;
        height: 100vh;
        scrollbar-gutter: auto !important;
      }

      .home-container {
        height: 100vh;
        width: 100vw;
        background: #6c757d;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden !important;
        position: relative;
        scrollbar-gutter: auto !important;
      }

      /* Chat Canvas - Scrollable Area */
      .home-main {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        scrollbar-gutter: auto !important;
      }

      .chat-messages { 
        /* max-width: 900px; */
        /* margin: 0 auto; */
        padding: 32px 32px 100px 32px;
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
        overflow-y: auto;
        flex: 1;
        width: 100%;
      }

      /* Fixed Prompt Area */
      .prompt-area {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 80px;
        background: #1a1a1a;
        border-top: 2px solid #3a3a3a;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .chat-messages {
          padding: 1rem 0.75rem;
        }

        .chat-bubble {
          max-width: 85%;
        }

        .bubble-content {
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
        }

        .prompt-area {
          min-height: 70px;
          padding: 0.75rem;
        }
      }

      /* Custom Scrollbar - Applied to chat-messages (the actual scrolling container) */
      .chat-messages::-webkit-scrollbar {
        width: 8px;
      }

      .chat-messages::-webkit-scrollbar-track {
        background: #2d2d2d;
      }

      .chat-messages::-webkit-scrollbar-thumb {
        background: #92a8d1;
        border-radius: 4px;
      }

      .chat-messages::-webkit-scrollbar-thumb:hover {
        background: #364C75;
      }
    </style>
  `}function jo(){console.log("[HomeRoute] Initialized"),_.subscribe(g.CANVAS_DO_SCROLL,(e,t)=>{console.log("[HomeRoute] CANVAS.DO.SCROLL triggered"),Wo()}),_.subscribe(g.LLM_STATUS,(e,t)=>{console.log("[HomeRoute] LLM_STATUS:",t),t&&t.text&&_.publish(g.CONVERSATION_RESPONSE_CANVAS,pe({id:Qt,turnId:Qt,role:H.ASSISTANT,source:le.SYSTEM,text:`🔄 ${t.text}`,phase:$.DELTA,meta:{progress:t.progressPercent}}))})}function Wo(){setTimeout(()=>{const e=document.getElementById("chat-messages");e?(e.scrollTo({top:0,behavior:"smooth"}),console.log("[HomeRoute] Scrolled chat-messages to bottom (top: 0 with column-reverse)")):console.warn("[HomeRoute] chat-messages element not found")},80)}function vt(e,t="user",n="canvas"){const u=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:e,timestamp:u};if(t==="user"||t==="prompt")switch(n.toUpperCase()){case"CANVAS":_.publish(g.CONVERSATION_PROMPT_CANVAS,o);break;case"AGENT":_.publish(g.CONVERSATION_PROMPT_AGENT,o);break;case"AGENT_CANVAS":_.publish(g.CONVERSATION_PROMPT_AGENT_CANVAS,o);break;case"STAGE":_.publish(g.CONVERSATION_PROMPT_STAGE,o);break;default:_.publish(g.CONVERSATION_PROMPT_CANVAS,o)}else switch(n.toUpperCase()){case"CANVAS":_.publish(g.CONVERSATION_RESPONSE_CANVAS,o);break;case"WORKFLOW":_.publish(g.CONVERSATION_RESPONSE_WORKFLOW,o);break;default:_.publish(g.CONVERSATION_RESPONSE_CANVAS,o)}}function Yo(e=10,t=500){const n=["Hey, how's it going?","Can you help me with something?","What's the weather like today?","I need assistance with my account","Tell me a joke!","How do I reset my password?","What are your hours?","Thanks for your help!","I have a question about billing","Can you explain this feature?","How do I upgrade my plan?","What's new in the latest update?","I'm having trouble logging in","Where can I find the settings?","How secure is my data?","Do you offer customer support?","What payment methods do you accept?","Can I cancel my subscription?","How do I export my data?","Is there a mobile app?"],u=["I'm doing great! How can I help you today?","Of course! I'd be happy to assist you.","Let me check that for you...","Here's what I found:","That's a great question!","I can help you with that.","Let me walk you through the steps.","You're very welcome!","I understand your concern. Let me explain...","That feature is located in the settings menu.","Your account is fully secured with encryption.","We're available 24/7 to help you!","We accept all major credit cards and PayPal.","You can upgrade anytime from your account settings.","The latest update includes several new features!","Try resetting your password using the forgot password link.","Your data is encrypted and stored securely.","Yes! Our mobile app is available for iOS and Android.","You can export your data from the account settings.","Absolutely! You can cancel anytime with no fees."];let o=0;const r=setInterval(()=>{if(o>=e){clearInterval(r),console.log(`[Test] Generated ${e} random bubbles`);return}const a=Math.random()>.5,i=a?"user":"assistant",s=a?n:u,c=s[Math.floor(Math.random()*s.length)];vt(c,i),o++,console.log(`[Test] Added bubble ${o}/${e} (${i})`)},t)}let Ce=null;function Ko(e=1e3){if(Ce){console.log("[Test] Bubble stream already running. Stop it first with stopBubbleStream()");return}console.log("[Test] Starting continuous bubble stream..."),Ce=setInterval(()=>{const t=Math.random()>.5,n=t?["Quick message!","Another one!","Test bubble","Hello there!","Random user text"]:["Response here","Got it!","Processing...","Here's the answer","Understood!"],u=n[Math.floor(Math.random()*n.length)];vt(u,t?"user":"assistant")},e)}function Zo(){Ce?(clearInterval(Ce),Ce=null,console.log("[Test] Bubble stream stopped")):console.log("[Test] No bubble stream running")}function Jo(){const e=document.getElementById("chat-messages");e&&(e.innerHTML="",console.log("[Test] All bubbles cleared"))}window.addChatBubble=vt;window.generateRandomBubbles=Yo;window.startBubbleStream=Ko;window.stopBubbleStream=Zo;window.clearAllBubbles=Jo;console.log("[HomeRoute] Test functions available:");console.log("  - window.generateRandomBubbles(count, delay) - Generate N bubbles with delay");console.log("  - window.startBubbleStream(delayMs) - Continuous bubble generation");console.log("  - window.stopBubbleStream() - Stop continuous generation");console.log("  - window.clearAllBubbles() - Remove all bubbles");console.log("  - window.addChatBubble(message, type) - Add single bubble");const Qo=Object.freeze(Object.defineProperty({__proto__:null,init:jo,render:qo},Symbol.toStringTag,{value:"Module"}));function Xo(){return`
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
  `}function er(){console.log("[SignoutRoute] Initialized");const e=document.getElementById("confirm-signout-btn");e?.addEventListener("click",async()=>{e.disabled=!0,e.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await ae.doSignout()})}const tr=Object.freeze(Object.defineProperty({__proto__:null,init:er,render:Xo},Symbol.toStringTag,{value:"Module"})),Xt={};function nr(e){let t=Xt[e];if(t)return t;t=Xt[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);t.push(u)}for(let n=0;n<e.length;n++){const u=e.charCodeAt(n);t[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return t}function Ee(e,t){typeof t!="string"&&(t=Ee.defaultChars);const n=nr(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let o="";for(let r=0,a=u.length;r<a;r+=3){const i=parseInt(u.slice(r+1,r+3),16);if(i<128){o+=n[i];continue}if((i&224)===192&&r+3<a){const s=parseInt(u.slice(r+4,r+6),16);if((s&192)===128){const c=i<<6&1984|s&63;c<128?o+="��":o+=String.fromCharCode(c),r+=3;continue}}if((i&240)===224&&r+6<a){const s=parseInt(u.slice(r+4,r+6),16),c=parseInt(u.slice(r+7,r+9),16);if((s&192)===128&&(c&192)===128){const l=i<<12&61440|s<<6&4032|c&63;l<2048||l>=55296&&l<=57343?o+="���":o+=String.fromCharCode(l),r+=6;continue}}if((i&248)===240&&r+9<a){const s=parseInt(u.slice(r+4,r+6),16),c=parseInt(u.slice(r+7,r+9),16),l=parseInt(u.slice(r+10,r+12),16);if((s&192)===128&&(c&192)===128&&(l&192)===128){let d=i<<18&1835008|s<<12&258048|c<<6&4032|l&63;d<65536||d>1114111?o+="����":(d-=65536,o+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),r+=9;continue}}o+="�"}return o})}Ee.defaultChars=";/?:@&=+$,#";Ee.componentChars="";const en={};function ur(e){let t=en[e];if(t)return t;t=en[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?t.push(u):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function De(e,t,n){typeof t!="string"&&(n=t,t=De.defaultChars),typeof n>"u"&&(n=!0);const u=ur(t);let o="";for(let r=0,a=e.length;r<a;r++){const i=e.charCodeAt(r);if(n&&i===37&&r+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(r+1,r+3))){o+=e.slice(r,r+3),r+=2;continue}if(i<128){o+=u[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&r+1<a){const s=e.charCodeAt(r+1);if(s>=56320&&s<=57343){o+=encodeURIComponent(e[r]+e[r+1]),r++;continue}}o+="%EF%BF%BD";continue}o+=encodeURIComponent(e[r])}return o}De.defaultChars=";/?:@&=+$,-_.!~*'()#";De.componentChars="-_.!~*'()";function yt(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function ze(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const or=/^([a-z0-9.+-]+:)/i,rr=/:[0-9]*$/,ar=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ir=["<",">",'"',"`"," ","\r",`
`,"	"],sr=["{","}","|","\\","^","`"].concat(ir),cr=["'"].concat(sr),tn=["%","/","?",";","#"].concat(cr),nn=["/","?","#"],lr=255,un=/^[+a-z0-9A-Z_-]{0,63}$/,dr=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,on={javascript:!0,"javascript:":!0},rn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function At(e,t){if(e&&e instanceof ze)return e;const n=new ze;return n.parse(e,t),n}ze.prototype.parse=function(e,t){let n,u,o,r=e;if(r=r.trim(),!t&&e.split("#").length===1){const c=ar.exec(r);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let a=or.exec(r);if(a&&(a=a[0],n=a.toLowerCase(),this.protocol=a,r=r.substr(a.length)),(t||a||r.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=r.substr(0,2)==="//",o&&!(a&&on[a])&&(r=r.substr(2),this.slashes=!0)),!on[a]&&(o||a&&!rn[a])){let c=-1;for(let f=0;f<nn.length;f++)u=r.indexOf(nn[f]),u!==-1&&(c===-1||u<c)&&(c=u);let l,d;c===-1?d=r.lastIndexOf("@"):d=r.lastIndexOf("@",c),d!==-1&&(l=r.slice(0,d),r=r.slice(d+1),this.auth=l),c=-1;for(let f=0;f<tn.length;f++)u=r.indexOf(tn[f]),u!==-1&&(c===-1||u<c)&&(c=u);c===-1&&(c=r.length),r[c-1]===":"&&c--;const p=r.slice(0,c);r=r.slice(c),this.parseHost(p),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const f=this.hostname.split(/\./);for(let m=0,b=f.length;m<b;m++){const y=f[m];if(y&&!y.match(un)){let v="";for(let A=0,S=y.length;A<S;A++)y.charCodeAt(A)>127?v+="x":v+=y[A];if(!v.match(un)){const A=f.slice(0,m),S=f.slice(m+1),C=y.match(dr);C&&(A.push(C[1]),S.unshift(C[2])),S.length&&(r=S.join(".")+r),this.hostname=A.join(".");break}}}}this.hostname.length>lr&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const i=r.indexOf("#");i!==-1&&(this.hash=r.substr(i),r=r.slice(0,i));const s=r.indexOf("?");return s!==-1&&(this.search=r.substr(s),r=r.slice(0,s)),r&&(this.pathname=r),rn[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ze.prototype.parseHost=function(e){let t=rr.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const fr=Object.freeze(Object.defineProperty({__proto__:null,decode:Ee,encode:De,format:yt,parse:At},Symbol.toStringTag,{value:"Module"})),On=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Dn=/[\0-\x1F\x7F-\x9F]/,pr=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,St=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,In=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ln=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,hr=Object.freeze(Object.defineProperty({__proto__:null,Any:On,Cc:Dn,Cf:pr,P:St,S:In,Z:Ln},Symbol.toStringTag,{value:"Module"})),gr=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),_r=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var nt;const mr=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),br=(nt=String.fromCodePoint)!==null&&nt!==void 0?nt:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Er(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=mr.get(e))!==null&&t!==void 0?t:e}var U;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(U||(U={}));const vr=32;var ce;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(ce||(ce={}));function pt(e){return e>=U.ZERO&&e<=U.NINE}function yr(e){return e>=U.UPPER_A&&e<=U.UPPER_F||e>=U.LOWER_A&&e<=U.LOWER_F}function Ar(e){return e>=U.UPPER_A&&e<=U.UPPER_Z||e>=U.LOWER_A&&e<=U.LOWER_Z||pt(e)}function Sr(e){return e===U.EQUALS||Ar(e)}var P;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(P||(P={}));var re;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(re||(re={}));class xr{constructor(t,n,u){this.decodeTree=t,this.emitCodePoint=n,this.errors=u,this.state=P.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=re.Strict}startEntity(t){this.decodeMode=t,this.state=P.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case P.EntityStart:return t.charCodeAt(n)===U.NUM?(this.state=P.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=P.NamedEntity,this.stateNamedEntity(t,n));case P.NumericStart:return this.stateNumericStart(t,n);case P.NumericDecimal:return this.stateNumericDecimal(t,n);case P.NumericHex:return this.stateNumericHex(t,n);case P.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|vr)===U.LOWER_X?(this.state=P.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=P.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,u,o){if(n!==u){const r=u-n;this.result=this.result*Math.pow(o,r)+parseInt(t.substr(n,r),o),this.consumed+=r}}stateNumericHex(t,n){const u=n;for(;n<t.length;){const o=t.charCodeAt(n);if(pt(o)||yr(o))n+=1;else return this.addToNumericResult(t,u,n,16),this.emitNumericEntity(o,3)}return this.addToNumericResult(t,u,n,16),-1}stateNumericDecimal(t,n){const u=n;for(;n<t.length;){const o=t.charCodeAt(n);if(pt(o))n+=1;else return this.addToNumericResult(t,u,n,10),this.emitNumericEntity(o,2)}return this.addToNumericResult(t,u,n,10),-1}emitNumericEntity(t,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===U.SEMI)this.consumed+=1;else if(this.decodeMode===re.Strict)return 0;return this.emitCodePoint(Er(this.result),this.consumed),this.errors&&(t!==U.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:u}=this;let o=u[this.treeIndex],r=(o&ce.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const a=t.charCodeAt(n);if(this.treeIndex=Cr(u,o,this.treeIndex+Math.max(1,r),a),this.treeIndex<0)return this.result===0||this.decodeMode===re.Attribute&&(r===0||Sr(a))?0:this.emitNotTerminatedNamedEntity();if(o=u[this.treeIndex],r=(o&ce.VALUE_LENGTH)>>14,r!==0){if(a===U.SEMI)return this.emitNamedEntityData(this.treeIndex,r,this.consumed+this.excess);this.decodeMode!==re.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:u}=this,o=(u[n]&ce.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,o,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,u){const{decodeTree:o}=this;return this.emitCodePoint(n===1?o[t]&~ce.VALUE_LENGTH:o[t+1],u),n===3&&this.emitCodePoint(o[t+2],u),u}end(){var t;switch(this.state){case P.NamedEntity:return this.result!==0&&(this.decodeMode!==re.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case P.NumericDecimal:return this.emitNumericEntity(0,2);case P.NumericHex:return this.emitNumericEntity(0,3);case P.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case P.EntityStart:return 0}}}function Nn(e){let t="";const n=new xr(e,u=>t+=br(u));return function(o,r){let a=0,i=0;for(;(i=o.indexOf("&",i))>=0;){t+=o.slice(a,i),n.startEntity(r);const c=n.write(o,i+1);if(c<0){a=i+n.end();break}a=i+c,i=c===0?a+1:a}const s=t+o.slice(a);return t="",s}}function Cr(e,t,n,u){const o=(t&ce.BRANCH_LENGTH)>>7,r=t&ce.JUMP_TABLE;if(o===0)return r!==0&&u===r?n:-1;if(r){const s=u-r;return s<0||s>=o?-1:e[n+s]-1}let a=n,i=a+o-1;for(;a<=i;){const s=a+i>>>1,c=e[s];if(c<u)a=s+1;else if(c>u)i=s-1;else return e[s+o]}return-1}const Fn=Nn(gr);Nn(_r);function wr(e,t=re.Legacy){return Fn(e,t)}function kr(e){return Fn(e,re.Strict)}function Tr(e){return Object.prototype.toString.call(e)}function xt(e){return Tr(e)==="[object String]"}const Rr=Object.prototype.hasOwnProperty;function Or(e,t){return Rr.call(e,t)}function je(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){e[u]=n[u]})}}),e}function Mn(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Ct(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function we(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const Pn=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Dr=/&([a-z#][a-z0-9]{1,31});/gi,Ir=new RegExp(Pn.source+"|"+Dr.source,"gi"),Lr=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Nr(e,t){if(t.charCodeAt(0)===35&&Lr.test(t)){const u=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Ct(u)?we(u):e}const n=wr(e);return n!==e?n:e}function Fr(e){return e.indexOf("\\")<0?e:e.replace(Pn,"$1")}function ve(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Ir,function(t,n,u){return n||Nr(t,u)})}const Mr=/[&<>"]/,Pr=/[&<>"]/g,Ur={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Br(e){return Ur[e]}function de(e){return Mr.test(e)?e.replace(Pr,Br):e}const Gr=/[.?*+^$[\]\\(){}|-]/g;function Vr(e){return e.replace(Gr,"\\$&")}function I(e){switch(e){case 9:case 32:return!0}return!1}function ke(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Un(e){return St.test(e)||In.test(e)}function Te(e){return Un(we(e))}function Re(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function We(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function an(e){return e===32||e===9||e===10||e===13}function Ye(e){let t=0;for(;t<e.length&&an(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&an(e.charCodeAt(n));n--);return e.slice(t,n+1)}const Hr={mdurl:fr,ucmicro:hr},zr=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Mn,asciiTrim:Ye,assign:je,escapeHtml:de,escapeRE:Vr,fromCodePoint:we,has:Or,isMdAsciiPunct:Re,isPunctChar:Un,isPunctCharCode:Te,isSpace:I,isString:xt,isValidEntityCode:Ct,isWhiteSpace:ke,lib:Hr,normalizeReference:We,unescapeAll:ve,unescapeMd:Fr},Symbol.toStringTag,{value:"Module"}));function $r(e,t,n){let u,o,r,a;const i=e.posMax,s=e.pos;for(e.pos=t+1,u=1;e.pos<i;){if(r=e.src.charCodeAt(e.pos),r===93&&(u--,u===0)){o=!0;break}if(a=e.pos,e.md.inline.skipToken(e),r===91){if(a===e.pos-1)u++;else if(n)return e.pos=s,-1}}let c=-1;return o&&(c=e.pos),e.pos=s,c}function qr(e,t,n){let u,o=t;const r={ok:!1,pos:0,str:""};if(e.charCodeAt(o)===60){for(o++;o<n;){if(u=e.charCodeAt(o),u===10||u===60)return r;if(u===62)return r.pos=o+1,r.str=ve(e.slice(t+1,o)),r.ok=!0,r;if(u===92&&o+1<n){o+=2;continue}o++}return r}let a=0;for(;o<n&&(u=e.charCodeAt(o),!(u===32||u<32||u===127));){if(u===92&&o+1<n){if(e.charCodeAt(o+1)===32)break;o+=2;continue}if(u===40&&(a++,a>32))return r;if(u===41){if(a===0)break;a--}o++}return t===o||a!==0||(r.str=ve(e.slice(t,o)),r.pos=o,r.ok=!0),r}function jr(e,t,n,u){let o,r=t;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)a.str=u.str,a.marker=u.marker;else{if(r>=n)return a;let i=e.charCodeAt(r);if(i!==34&&i!==39&&i!==40)return a;t++,r++,i===40&&(i=41),a.marker=i}for(;r<n;){if(o=e.charCodeAt(r),o===a.marker)return a.pos=r+1,a.str+=ve(e.slice(t,r)),a.ok=!0,a;if(o===40&&a.marker===41)return a;o===92&&r+1<n&&r++,r++}return a.can_continue=!0,a.str+=ve(e.slice(t,r)),a}const Wr=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:qr,parseLinkLabel:$r,parseLinkTitle:jr},Symbol.toStringTag,{value:"Module"})),ne={};ne.code_inline=function(e,t,n,u,o){const r=e[t];return"<code"+o.renderAttrs(r)+">"+de(r.content)+"</code>"};ne.code_block=function(e,t,n,u,o){const r=e[t];return"<pre"+o.renderAttrs(r)+"><code>"+de(e[t].content)+`</code></pre>
`};ne.fence=function(e,t,n,u,o){const r=e[t],a=r.info?ve(r.info).trim():"";let i="",s="";if(a){const l=a.split(/(\s+)/g);i=l[0],s=l.slice(2).join("")}let c;if(n.highlight?c=n.highlight(r.content,i,s)||de(r.content):c=de(r.content),c.indexOf("<pre")===0)return c+`
`;if(a){const l=r.attrIndex("class"),d=r.attrs?r.attrs.slice():[];l<0?d.push(["class",n.langPrefix+i]):(d[l]=d[l].slice(),d[l][1]+=" "+n.langPrefix+i);const p={attrs:d};return`<pre><code${o.renderAttrs(p)}>${c}</code></pre>
`}return`<pre><code${o.renderAttrs(r)}>${c}</code></pre>
`};ne.image=function(e,t,n,u,o){const r=e[t];return r.attrs[r.attrIndex("alt")][1]=o.renderInlineAsText(r.children,n,u),o.renderToken(e,t,n)};ne.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};ne.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};ne.text=function(e,t){return de(e[t].content)};ne.html_block=function(e,t){return e[t].content};ne.html_inline=function(e,t){return e[t].content};function Ae(){this.rules=je({},ne)}Ae.prototype.renderAttrs=function(t){let n,u,o;if(!t.attrs)return"";for(o="",n=0,u=t.attrs.length;n<u;n++)o+=" "+de(t.attrs[n][0])+'="'+de(t.attrs[n][1])+'"';return o};Ae.prototype.renderToken=function(t,n,u){const o=t[n];let r="";if(o.hidden)return"";o.block&&o.nesting!==-1&&n&&t[n-1].hidden&&(r+=`
`),r+=(o.nesting===-1?"</":"<")+o.tag,r+=this.renderAttrs(o),o.nesting===0&&u.xhtmlOut&&(r+=" /");let a=!1;if(o.block&&(a=!0,o.nesting===1&&n+1<t.length)){const i=t[n+1];(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===o.tag)&&(a=!1)}return r+=a?`>
`:">",r};Ae.prototype.renderInline=function(e,t,n){let u="";const o=this.rules;for(let r=0,a=e.length;r<a;r++){const i=e[r].type;typeof o[i]<"u"?u+=o[i](e,r,t,n,this):u+=this.renderToken(e,r,t)}return u};Ae.prototype.renderInlineAsText=function(e,t,n){let u="";for(let o=0,r=e.length;o<r;o++)switch(e[o].type){case"text":u+=e[o].content;break;case"image":u+=this.renderInlineAsText(e[o].children,t,n);break;case"html_inline":case"html_block":u+=e[o].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};Ae.prototype.render=function(e,t,n){let u="";const o=this.rules;for(let r=0,a=e.length;r<a;r++){const i=e[r].type;i==="inline"?u+=this.renderInline(e[r].children,t,n):typeof o[i]<"u"?u+=o[i](e,r,t,n,this):u+=this.renderToken(e,r,t,n)}return u};function z(){this.__rules__=[],this.__cache__=null}z.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};z.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){t.indexOf(u)<0&&t.push(u)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||e.__cache__[n].push(u.fn))})})};z.prototype.at=function(e,t,n){const u=this.__find__(e),o=n||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=t,this.__rules__[u].alt=o.alt||[],this.__cache__=null};z.prototype.before=function(e,t,n,u){const o=this.__find__(e),r=u||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:t,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};z.prototype.after=function(e,t,n,u){const o=this.__find__(e),r=u||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:t,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};z.prototype.push=function(e,t,n){const u=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:u.alt||[]}),this.__cache__=null};z.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const o=this.__find__(u);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[o].enabled=!0,n.push(u)},this),this.__cache__=null,n};z.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};z.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const o=this.__find__(u);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[o].enabled=!1,n.push(u)},this),this.__cache__=null,n};z.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Z(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Z.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,o=n.length;u<o;u++)if(n[u][0]===t)return u;return-1};Z.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};Z.prototype.attrSet=function(t,n){const u=this.attrIndex(t),o=[t,n];u<0?this.attrPush(o):this.attrs[u]=o};Z.prototype.attrGet=function(t){const n=this.attrIndex(t);let u=null;return n>=0&&(u=this.attrs[n][1]),u};Z.prototype.attrJoin=function(t,n){const u=this.attrIndex(t);u<0?this.attrPush([t,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function Bn(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Bn.prototype.Token=Z;const Yr=/\r\n?|\n/g,Kr=/\0/g;function Zr(e){let t;t=e.src.replace(Yr,`
`),t=t.replace(Kr,"�"),e.src=t}function Jr(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Qr(e){const t=e.tokens;for(let n=0,u=t.length;n<u;n++){const o=t[n];o.type==="inline"&&e.md.inline.parse(o.content,e.md,e.env,o.children)}}function Xr(e){return/^<a[>\s]/i.test(e)}function ea(e){return/^<\/a\s*>/i.test(e)}function ta(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,u=t.length;n<u;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;let o=t[n].children,r=0;for(let a=o.length-1;a>=0;a--){const i=o[a];if(i.type==="link_close"){for(a--;o[a].level!==i.level&&o[a].type!=="link_open";)a--;continue}if(i.type==="html_inline"&&(Xr(i.content)&&r>0&&r--,ea(i.content)&&r++),!(r>0)&&i.type==="text"&&e.md.linkify.test(i.content)){const s=i.content;let c=e.md.linkify.match(s);const l=[];let d=i.level,p=0;c.length>0&&c[0].index===0&&a>0&&o[a-1].type==="text_special"&&(c=c.slice(1));for(let h=0;h<c.length;h++){const f=c[h].url,m=e.md.normalizeLink(f);if(!e.md.validateLink(m))continue;let b=c[h].text;c[h].schema?c[h].schema==="mailto:"&&!/^mailto:/i.test(b)?b=e.md.normalizeLinkText("mailto:"+b).replace(/^mailto:/,""):b=e.md.normalizeLinkText(b):b=e.md.normalizeLinkText("http://"+b).replace(/^http:\/\//,"");const y=c[h].index;if(y>p){const C=new e.Token("text","",0);C.content=s.slice(p,y),C.level=d,l.push(C)}const v=new e.Token("link_open","a",1);v.attrs=[["href",m]],v.level=d++,v.markup="linkify",v.info="auto",l.push(v);const A=new e.Token("text","",0);A.content=b,A.level=d,l.push(A);const S=new e.Token("link_close","a",-1);S.level=--d,S.markup="linkify",S.info="auto",l.push(S),p=c[h].lastIndex}if(p<s.length){const h=new e.Token("text","",0);h.content=s.slice(p),h.level=d,l.push(h)}t[n].children=o=Mn(o,a,l)}}}}const Gn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,na=/\((c|tm|r)\)/i,ua=/\((c|tm|r)\)/ig,oa={c:"©",r:"®",tm:"™"};function ra(e,t){return oa[t.toLowerCase()]}function aa(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&(u.content=u.content.replace(ua,ra)),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function ia(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&Gn.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function sa(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(na.test(e.tokens[t].content)&&aa(e.tokens[t].children),Gn.test(e.tokens[t].content)&&ia(e.tokens[t].children))}const ca=/['"]/,sn=/['"]/g,cn="’";function Me(e,t,n,u){e[t]||(e[t]=[]),e[t].push({pos:n,ch:u})}function la(e,t){let n="",u=0;t.sort((o,r)=>o.pos-r.pos);for(let o=0;o<t.length;o++){const r=t[o];n+=e.slice(u,r.pos)+r.ch,u=r.pos+1}return n+e.slice(u)}function da(e,t){let n;const u=[],o={};for(let r=0;r<e.length;r++){const a=e[r],i=e[r].level;for(n=u.length-1;n>=0&&!(u[n].level<=i);n--);if(u.length=n+1,a.type!=="text")continue;const s=a.content;let c=0;const l=s.length;e:for(;c<l;){sn.lastIndex=c;const d=sn.exec(s);if(!d)break;let p=!0,h=!0;c=d.index+1;const f=d[0]==="'";let m=32;if(d.index-1>=0)m=s.charCodeAt(d.index-1);else for(n=r-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let b=32;if(c<l)b=s.charCodeAt(c);else for(n=r+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){b=e[n].content.charCodeAt(0);break}const y=Re(m)||Te(m),v=Re(b)||Te(b),A=ke(m),S=ke(b);if(S?p=!1:v&&(A||y||(p=!1)),A?h=!1:y&&(S||v||(h=!1)),b===34&&d[0]==='"'&&m>=48&&m<=57&&(h=p=!1),p&&h&&(p=y,h=v),!p&&!h){f&&Me(o,r,d.index,cn);continue}if(h)for(n=u.length-1;n>=0;n--){let C=u[n];if(u[n].level<i)break;if(C.single===f&&u[n].level===i){C=u[n];let k,R;f?(k=t.md.options.quotes[2],R=t.md.options.quotes[3]):(k=t.md.options.quotes[0],R=t.md.options.quotes[1]),Me(o,r,d.index,R),Me(o,C.token,C.pos,k),u.length=n;continue e}}p?u.push({token:r,pos:d.index,single:f,level:i}):h&&f&&Me(o,r,d.index,cn)}}Object.keys(o).forEach(function(r){e[r].content=la(e[r].content,o[r])})}function fa(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!ca.test(e.tokens[t].content)||da(e.tokens[t].children,e)}function pa(e){let t,n;const u=e.tokens,o=u.length;for(let r=0;r<o;r++){if(u[r].type!=="inline")continue;const a=u[r].children,i=a.length;for(t=0;t<i;t++)a[t].type==="text_special"&&(a[t].type="text");for(t=n=0;t<i;t++)a[t].type==="text"&&t+1<i&&a[t+1].type==="text"?a[t+1].content=a[t].content+a[t+1].content:(t!==n&&(a[n]=a[t]),n++);t!==n&&(a.length=n)}}const ut=[["normalize",Zr],["block",Jr],["inline",Qr],["linkify",ta],["replacements",sa],["smartquotes",fa],["text_join",pa]];function wt(){this.ruler=new z;for(let e=0;e<ut.length;e++)this.ruler.push(ut[e][0],ut[e][1])}wt.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,u=t.length;n<u;n++)t[n](e)};wt.prototype.State=Bn;function ue(e,t,n,u){this.src=e,this.md=t,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const o=this.src;for(let r=0,a=0,i=0,s=0,c=o.length,l=!1;a<c;a++){const d=o.charCodeAt(a);if(!l)if(I(d)){i++,d===9?s+=4-s%4:s++;continue}else l=!0;(d===10||a===c-1)&&(d!==10&&a++,this.bMarks.push(r),this.eMarks.push(a),this.tShift.push(i),this.sCount.push(s),this.bsCount.push(0),l=!1,i=0,s=0,r=a+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ue.prototype.push=function(e,t,n){const u=new Z(e,t,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u};ue.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};ue.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};ue.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const u=this.src.charCodeAt(t);if(!I(u))break}return t};ue.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!I(this.src.charCodeAt(--t)))return t+1;return t};ue.prototype.skipChars=function(t,n){for(let u=this.src.length;t<u&&this.src.charCodeAt(t)===n;t++);return t};ue.prototype.skipCharsBack=function(t,n,u){if(t<=u)return t;for(;t>u;)if(n!==this.src.charCodeAt(--t))return t+1;return t};ue.prototype.getLines=function(t,n,u,o){if(t>=n)return"";const r=new Array(n-t);for(let a=0,i=t;i<n;i++,a++){let s=0;const c=this.bMarks[i];let l=c,d;for(i+1<n||o?d=this.eMarks[i]+1:d=this.eMarks[i];l<d&&s<u;){const p=this.src.charCodeAt(l);if(I(p))p===9?s+=4-(s+this.bsCount[i])%4:s++;else if(l-c<this.tShift[i])s++;else break;l++}s>u?r[a]=new Array(s-u+1).join(" ")+this.src.slice(l,d):r[a]=this.src.slice(l,d)}return r.join("")};ue.prototype.Token=Z;const ha=65536;function ot(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];return e.src.slice(n,u)}function ln(e){const t=[],n=e.length;let u=0,o=e.charCodeAt(u),r=!1,a=0,i="";for(;u<n;)o===124&&(r?(i+=e.substring(a,u-1),a=u):(t.push(i+e.substring(a,u)),i="",a=u+1)),r=o===92,u++,o=e.charCodeAt(u);return t.push(i+e.substring(a)),t}function ga(e,t,n,u){if(t+2>n)return!1;let o=t+1;if(e.sCount[o]<e.blkIndent||e.sCount[o]-e.blkIndent>=4)return!1;let r=e.bMarks[o]+e.tShift[o];if(r>=e.eMarks[o])return!1;const a=e.src.charCodeAt(r++);if(a!==124&&a!==45&&a!==58||r>=e.eMarks[o])return!1;const i=e.src.charCodeAt(r++);if(i!==124&&i!==45&&i!==58&&!I(i)||a===45&&I(i))return!1;for(;r<e.eMarks[o];){const S=e.src.charCodeAt(r);if(S!==124&&S!==45&&S!==58&&!I(S))return!1;r++}let s=ot(e,t+1),c=s.split("|");const l=[];for(let S=0;S<c.length;S++){const C=c[S].trim();if(!C){if(S===0||S===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(C))return!1;C.charCodeAt(C.length-1)===58?l.push(C.charCodeAt(0)===58?"center":"right"):C.charCodeAt(0)===58?l.push("left"):l.push("")}if(s=ot(e,t).trim(),s.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=ln(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const d=c.length;if(d===0||d!==l.length)return!1;if(u)return!0;const p=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),f=e.push("table_open","table",1),m=[t,0];f.map=m;const b=e.push("thead_open","thead",1);b.map=[t,t+1];const y=e.push("tr_open","tr",1);y.map=[t,t+1];for(let S=0;S<c.length;S++){const C=e.push("th_open","th",1);l[S]&&(C.attrs=[["style","text-align:"+l[S]]]);const k=e.push("inline","",0);k.content=c[S].trim(),k.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let v,A=0;for(o=t+2;o<n&&!(e.sCount[o]<e.blkIndent);o++){let S=!1;for(let k=0,R=h.length;k<R;k++)if(h[k](e,o,n,!0)){S=!0;break}if(S||(s=ot(e,o).trim(),!s)||e.sCount[o]-e.blkIndent>=4||(c=ln(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),A+=d-c.length,A>ha))break;if(o===t+2){const k=e.push("tbody_open","tbody",1);k.map=v=[t+2,0]}const C=e.push("tr_open","tr",1);C.map=[o,o+1];for(let k=0;k<d;k++){const R=e.push("td_open","td",1);l[k]&&(R.attrs=[["style","text-align:"+l[k]]]);const F=e.push("inline","",0);F.content=c[k]?c[k].trim():"",F.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return v&&(e.push("tbody_close","tbody",-1),v[1]=o),e.push("table_close","table",-1),m[1]=o,e.parentType=p,e.line=o,!0}function _a(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let u=t+1,o=u;for(;u<n;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,o=u;continue}break}e.line=o;const r=e.push("code_block","code",0);return r.content=e.getLines(t,o,4+e.blkIndent,!1)+`
`,r.map=[t,e.line],!0}function ma(e,t,n,u){let o=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||o+3>r)return!1;const a=e.src.charCodeAt(o);if(a!==126&&a!==96)return!1;let i=o;o=e.skipChars(o,a);let s=o-i;if(s<3)return!1;const c=e.src.slice(i,o),l=e.src.slice(o,r);if(a===96&&l.indexOf(String.fromCharCode(a))>=0)return!1;if(u)return!0;let d=t,p=!1;for(;d++,!(d>=n||(o=i=e.bMarks[d]+e.tShift[d],r=e.eMarks[d],o<r&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(o)===a&&!(e.sCount[d]-e.blkIndent>=4)&&(o=e.skipChars(o,a),!(o-i<s)&&(o=e.skipSpaces(o),!(o<r)))){p=!0;break}s=e.sCount[t],e.line=d+(p?1:0);const h=e.push("fence","code",0);return h.info=l,h.content=e.getLines(t+1,d,s,!0),h.markup=c,h.map=[t,e.line],!0}function ba(e,t,n,u){let o=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];const a=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(o)!==62)return!1;if(u)return!0;const i=[],s=[],c=[],l=[],d=e.md.block.ruler.getRules("blockquote"),p=e.parentType;e.parentType="blockquote";let h=!1,f;for(f=t;f<n;f++){const A=e.sCount[f]<e.blkIndent;if(o=e.bMarks[f]+e.tShift[f],r=e.eMarks[f],o>=r)break;if(e.src.charCodeAt(o++)===62&&!A){let C=e.sCount[f]+1,k,R;e.src.charCodeAt(o)===32?(o++,C++,R=!1,k=!0):e.src.charCodeAt(o)===9?(k=!0,(e.bsCount[f]+C)%4===3?(o++,C++,R=!1):R=!0):k=!1;let F=C;for(i.push(e.bMarks[f]),e.bMarks[f]=o;o<r;){const M=e.src.charCodeAt(o);if(I(M))M===9?F+=4-(F+e.bsCount[f]+(R?1:0))%4:F++;else break;o++}h=o>=r,s.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(k?1:0),c.push(e.sCount[f]),e.sCount[f]=F-C,l.push(e.tShift[f]),e.tShift[f]=o-e.bMarks[f];continue}if(h)break;let S=!1;for(let C=0,k=d.length;C<k;C++)if(d[C](e,f,n,!0)){S=!0;break}if(S){e.lineMax=f,e.blkIndent!==0&&(i.push(e.bMarks[f]),s.push(e.bsCount[f]),l.push(e.tShift[f]),c.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}i.push(e.bMarks[f]),s.push(e.bsCount[f]),l.push(e.tShift[f]),c.push(e.sCount[f]),e.sCount[f]=-1}const m=e.blkIndent;e.blkIndent=0;const b=e.push("blockquote_open","blockquote",1);b.markup=">";const y=[t,0];b.map=y,e.md.block.tokenize(e,t,f);const v=e.push("blockquote_close","blockquote",-1);v.markup=">",e.lineMax=a,e.parentType=p,y[1]=e.line;for(let A=0;A<l.length;A++)e.bMarks[A+t]=i[A],e.tShift[A+t]=l[A],e.sCount[A+t]=c[A],e.bsCount[A+t]=s[A];return e.blkIndent=m,!0}function Ea(e,t,n,u){const o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let r=e.bMarks[t]+e.tShift[t];const a=e.src.charCodeAt(r++);if(a!==42&&a!==45&&a!==95)return!1;let i=1;for(;r<o;){const c=e.src.charCodeAt(r++);if(c!==a&&!I(c))return!1;c===a&&i++}if(i<3)return!1;if(u)return!0;e.line=t+1;const s=e.push("hr","hr",0);return s.map=[t,e.line],s.markup=Array(i+1).join(String.fromCharCode(a)),!0}function dn(e,t){const n=e.eMarks[t];let u=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(u++);if(o!==42&&o!==45&&o!==43)return-1;if(u<n){const r=e.src.charCodeAt(u);if(!I(r))return-1}return u}function fn(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];let o=n;if(o+1>=u)return-1;let r=e.src.charCodeAt(o++);if(r<48||r>57)return-1;for(;;){if(o>=u)return-1;if(r=e.src.charCodeAt(o++),r>=48&&r<=57){if(o-n>=10)return-1;continue}if(r===41||r===46)break;return-1}return o<u&&(r=e.src.charCodeAt(o),!I(r))?-1:o}function va(e,t){const n=e.level+2;for(let u=t+2,o=e.tokens.length-2;u<o;u++)e.tokens[u].level===n&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function ya(e,t,n,u){let o,r,a,i,s=t,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let l=!1;u&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(l=!0);let d,p,h;if((h=fn(e,s))>=0){if(d=!0,a=e.bMarks[s]+e.tShift[s],p=Number(e.src.slice(a,h-1)),l&&p!==1)return!1}else if((h=dn(e,s))>=0)d=!1;else return!1;if(l&&e.skipSpaces(h)>=e.eMarks[s])return!1;if(u)return!0;const f=e.src.charCodeAt(h-1),m=e.tokens.length;d?(i=e.push("ordered_list_open","ol",1),p!==1&&(i.attrs=[["start",p]])):i=e.push("bullet_list_open","ul",1);const b=[s,0];i.map=b,i.markup=String.fromCharCode(f);let y=!1;const v=e.md.block.ruler.getRules("list"),A=e.parentType;for(e.parentType="list";s<n;){r=h,o=e.eMarks[s];const S=e.sCount[s]+h-(e.bMarks[s]+e.tShift[s]);let C=S;for(;r<o;){const W=e.src.charCodeAt(r);if(W===9)C+=4-(C+e.bsCount[s])%4;else if(W===32)C++;else break;r++}const k=r;let R;k>=o?R=1:R=C-S,R>4&&(R=1);const F=S+R;i=e.push("list_item_open","li",1),i.markup=String.fromCharCode(f);const M=[s,0];i.map=M,d&&(i.info=e.src.slice(a,h-1));const J=e.tight,oe=e.tShift[s],G=e.sCount[s],B=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=F,e.tight=!0,e.tShift[s]=k-e.bMarks[s],e.sCount[s]=C,k>=o&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,s,n,!0),(!e.tight||y)&&(c=!1),y=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=B,e.tShift[s]=oe,e.sCount[s]=G,e.tight=J,i=e.push("list_item_close","li",-1),i.markup=String.fromCharCode(f),s=e.line,M[1]=s,s>=n||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let ie=!1;for(let W=0,Je=v.length;W<Je;W++)if(v[W](e,s,n,!0)){ie=!0;break}if(ie)break;if(d){if(h=fn(e,s),h<0)break;a=e.bMarks[s]+e.tShift[s]}else if(h=dn(e,s),h<0)break;if(f!==e.src.charCodeAt(h-1))break}return d?i=e.push("ordered_list_close","ol",-1):i=e.push("bullet_list_close","ul",-1),i.markup=String.fromCharCode(f),b[1]=s,e.line=s,e.parentType=A,c&&va(e,m),!0}function Aa(e,t,n,u){let o=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],a=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(o)!==91)return!1;function i(v){const A=e.lineMax;if(v>=A||e.isEmpty(v))return null;let S=!1;if(e.sCount[v]-e.blkIndent>3&&(S=!0),e.sCount[v]<0&&(S=!0),!S){const R=e.md.block.ruler.getRules("reference"),F=e.parentType;e.parentType="reference";let M=!1;for(let J=0,oe=R.length;J<oe;J++)if(R[J](e,v,A,!0)){M=!0;break}if(e.parentType=F,M)return null}const C=e.bMarks[v]+e.tShift[v],k=e.eMarks[v];return e.src.slice(C,k+1)}let s=e.src.slice(o,r+1);r=s.length;let c=-1;for(o=1;o<r;o++){const v=s.charCodeAt(o);if(v===91)return!1;if(v===93){c=o;break}else if(v===10){const A=i(a);A!==null&&(s+=A,r=s.length,a++)}else if(v===92&&(o++,o<r&&s.charCodeAt(o)===10)){const A=i(a);A!==null&&(s+=A,r=s.length,a++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(o=c+2;o<r;o++){const v=s.charCodeAt(o);if(v===10){const A=i(a);A!==null&&(s+=A,r=s.length,a++)}else if(!I(v))break}const l=e.md.helpers.parseLinkDestination(s,o,r);if(!l.ok)return!1;const d=e.md.normalizeLink(l.str);if(!e.md.validateLink(d))return!1;o=l.pos;const p=o,h=a,f=o;for(;o<r;o++){const v=s.charCodeAt(o);if(v===10){const A=i(a);A!==null&&(s+=A,r=s.length,a++)}else if(!I(v))break}let m=e.md.helpers.parseLinkTitle(s,o,r);for(;m.can_continue;){const v=i(a);if(v===null)break;s+=v,o=r,r=s.length,a++,m=e.md.helpers.parseLinkTitle(s,o,r,m)}let b;for(o<r&&f!==o&&m.ok?(b=m.str,o=m.pos):(b="",o=p,a=h);o<r;){const v=s.charCodeAt(o);if(!I(v))break;o++}if(o<r&&s.charCodeAt(o)!==10&&b)for(b="",o=p,a=h;o<r;){const v=s.charCodeAt(o);if(!I(v))break;o++}if(o<r&&s.charCodeAt(o)!==10)return!1;const y=We(s.slice(1,c));return y?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[y]>"u"&&(e.env.references[y]={title:b,href:d}),e.line=a),!0):!1}const Sa=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],xa="[a-zA-Z_:][a-zA-Z0-9:._-]*",Ca="[^\"'=<>`\\x00-\\x20]+",wa="'[^']*'",ka='"[^"]*"',Ta="(?:"+Ca+"|"+wa+"|"+ka+")",Ra="(?:\\s+"+xa+"(?:\\s*=\\s*"+Ta+")?)",Vn="<[A-Za-z][A-Za-z0-9\\-]*"+Ra+"*\\s*\\/?>",Hn="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Oa="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Da="<[?][\\s\\S]*?[?]>",Ia="<![A-Za-z][^>]*>",La="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Na=new RegExp("^(?:"+Vn+"|"+Hn+"|"+Oa+"|"+Da+"|"+Ia+"|"+La+")"),Fa=new RegExp("^(?:"+Vn+"|"+Hn+")"),fe=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Sa.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Fa.source+"\\s*$"),/^$/,!1]];function Ma(e,t,n,u){let o=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(o)!==60)return!1;let a=e.src.slice(o,r),i=0;for(;i<fe.length&&!fe[i][0].test(a);i++);if(i===fe.length)return!1;if(u)return fe[i][2];let s=t+1;const c=fe[i][1].test("");if(!fe[i][1].test(a)){for(;s<n&&!(e.sCount[s]<e.blkIndent&&(c||!e.isEmpty(s)));s++)if(o=e.bMarks[s]+e.tShift[s],r=e.eMarks[s],a=e.src.slice(o,r),fe[i][1].test(a)){a.length!==0&&s++;break}}e.line=s;const l=e.push("html_block","",0);return l.map=[t,s],l.content=e.getLines(t,s,e.blkIndent,!0),!0}function Pa(e,t,n,u){let o=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(o);if(a!==35||o>=r)return!1;let i=1;for(a=e.src.charCodeAt(++o);a===35&&o<r&&i<=6;)i++,a=e.src.charCodeAt(++o);if(i>6||o<r&&!I(a))return!1;if(u)return!0;r=e.skipSpacesBack(r,o);const s=e.skipCharsBack(r,35,o);s>o&&I(e.src.charCodeAt(s-1))&&(r=s),e.line=t+1;const c=e.push("heading_open","h"+String(i),1);c.markup="########".slice(0,i),c.map=[t,e.line];const l=e.push("inline","",0);l.content=Ye(e.src.slice(o,r)),l.map=[t,e.line],l.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup="########".slice(0,i),!0}function Ua(e,t,n){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const o=e.parentType;e.parentType="paragraph";let r=0,a,i=t+1;for(;i<n&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3)continue;if(e.sCount[i]>=e.blkIndent){let h=e.bMarks[i]+e.tShift[i];const f=e.eMarks[i];if(h<f&&(a=e.src.charCodeAt(h),(a===45||a===61)&&(h=e.skipChars(h,a),h=e.skipSpaces(h),h>=f))){r=a===61?1:2;break}}if(e.sCount[i]<0)continue;let p=!1;for(let h=0,f=u.length;h<f;h++)if(u[h](e,i,n,!0)){p=!0;break}if(p)break}if(!r)return e.parentType=o,!1;const s=Ye(e.getLines(t,i,e.blkIndent,!1));e.line=i+1;const c=e.push("heading_open","h"+String(r),1);c.markup=String.fromCharCode(a),c.map=[t,e.line];const l=e.push("inline","",0);l.content=s,l.map=[t,e.line-1],l.children=[];const d=e.push("heading_close","h"+String(r),-1);return d.markup=String.fromCharCode(a),e.parentType=o,!0}function Ba(e,t,n){const u=e.md.block.ruler.getRules("paragraph"),o=e.parentType;let r=t+1;for(e.parentType="paragraph";r<n&&!e.isEmpty(r);r++){if(e.sCount[r]-e.blkIndent>3||e.sCount[r]<0)continue;let c=!1;for(let l=0,d=u.length;l<d;l++)if(u[l](e,r,n,!0)){c=!0;break}if(c)break}const a=Ye(e.getLines(t,r,e.blkIndent,!1));e.line=r;const i=e.push("paragraph_open","p",1);i.map=[t,e.line];const s=e.push("inline","",0);return s.content=a,s.map=[t,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=o,!0}const Pe=[["table",ga,["paragraph","reference"]],["code",_a],["fence",ma,["paragraph","reference","blockquote","list"]],["blockquote",ba,["paragraph","reference","blockquote","list"]],["hr",Ea,["paragraph","reference","blockquote","list"]],["list",ya,["paragraph","reference","blockquote"]],["reference",Aa],["html_block",Ma,["paragraph","reference","blockquote"]],["heading",Pa,["paragraph","reference","blockquote"]],["lheading",Ua],["paragraph",Ba]];function Ke(){this.ruler=new z;for(let e=0;e<Pe.length;e++)this.ruler.push(Pe[e][0],Pe[e][1],{alt:(Pe[e][2]||[]).slice()})}Ke.prototype.tokenize=function(e,t,n){const u=this.ruler.getRules(""),o=u.length,r=e.md.options.maxNesting;let a=t,i=!1;for(;a<n&&(e.line=a=e.skipEmptyLines(a),!(a>=n||e.sCount[a]<e.blkIndent));){if(e.level>=r){e.line=n;break}const s=e.line;let c=!1;for(let l=0;l<o;l++)if(c=u[l](e,a,n,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!i,e.isEmpty(e.line-1)&&(i=!0),a=e.line,a<n&&e.isEmpty(a)&&(i=!0,a++,e.line=a)}};Ke.prototype.parse=function(e,t,n,u){if(!e)return;const o=new this.State(e,t,n,u);this.tokenize(o,o.line,o.lineMax)};Ke.prototype.State=ue;function Ie(e,t,n,u){this.src=e,this.env=n,this.md=t,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Ie.prototype.pushPending=function(){const e=new Z("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Ie.prototype.push=function(e,t,n){this.pending&&this.pushPending();const u=new Z(e,t,n);let o=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(o),u};Ie.prototype.scanDelims=function(e,t){const n=this.posMax,u=this.src.charCodeAt(e);let o;if(e===0)o=32;else if(e===1)o=this.src.charCodeAt(0),(o&63488)===55296&&(o=65533);else if(o=this.src.charCodeAt(e-1),(o&64512)===56320){const b=this.src.charCodeAt(e-2);o=(b&64512)===55296?65536+(b-55296<<10)+(o-56320):65533}else(o&64512)===55296&&(o=65533);let r=e;for(;r<n&&this.src.charCodeAt(r)===u;)r++;const a=r-e;let i=r<n?this.src.charCodeAt(r):32;if((i&64512)===55296){const b=this.src.charCodeAt(r+1);i=(b&64512)===56320?65536+(i-55296<<10)+(b-56320):65533}else(i&64512)===56320&&(i=65533);const s=Re(o)||Te(o),c=Re(i)||Te(i),l=ke(o),d=ke(i),p=!d&&(!c||l||s),h=!l&&(!s||d||c);return{can_open:p&&(t||!h||s),can_close:h&&(t||!p||c),length:a}};Ie.prototype.Token=Z;function Ga(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Va(e,t){let n=e.pos;for(;n<e.posMax&&!Ga(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}const Ha=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function za(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,u=e.posMax;if(n+3>u||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const o=e.pending.match(Ha);if(!o)return!1;const r=o[1],a=e.md.linkify.matchAtStart(e.src.slice(n-r.length));if(!a)return!1;let i=a.url;if(i.length<=r.length)return!1;let s=i.length;for(;s>0&&i.charCodeAt(s-1)===42;)s--;s!==i.length&&(i=i.slice(0,s));const c=e.md.normalizeLink(i);if(!e.md.validateLink(c))return!1;if(!t){e.pending=e.pending.slice(0,-r.length);const l=e.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(i);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=i.length-r.length,!0}function $a(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const u=e.pending.length-1,o=e.posMax;if(!t)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let r=u-1;for(;r>=1&&e.pending.charCodeAt(r-1)===32;)r--;e.pending=e.pending.slice(0,r),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<o&&I(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const kt=[];for(let e=0;e<256;e++)kt.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){kt[e.charCodeAt(0)]=1});function qa(e,t){let n=e.pos;const u=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let o=e.src.charCodeAt(n);if(o===10){for(t||e.push("hardbreak","br",0),n++;n<u&&(o=e.src.charCodeAt(n),!!I(o));)n++;return e.pos=n,!0}let r=e.src[n];if(o>=55296&&o<=56319&&n+1<u){const i=e.src.charCodeAt(n+1);i>=56320&&i<=57343&&(r+=e.src[n+1],n++)}const a="\\"+r;if(!t){const i=e.push("text_special","",0);o<256&&kt[o]!==0?i.content=r:i.content=a,i.markup=a,i.info="escape"}return e.pos=n+1,!0}function ja(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const o=n;n++;const r=e.posMax;for(;n<r&&e.src.charCodeAt(n)===96;)n++;const a=e.src.slice(o,n),i=a.length;if(e.backticksScanned&&(e.backticks[i]||0)<=o)return t||(e.pending+=a),e.pos+=i,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<r&&e.src.charCodeAt(s)===96;)s++;const l=s-c;if(l===i){if(!t){const d=e.push("code_inline","code",0);d.markup=a,d.content=e.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[l]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=i,!0}function Wa(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==126)return!1;const o=e.scanDelims(e.pos,!0);let r=o.length;const a=String.fromCharCode(u);if(r<2)return!1;let i;r%2&&(i=e.push("text","",0),i.content=a,r--);for(let s=0;s<r;s+=2)i=e.push("text","",0),i.content=a+a,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0}function pn(e,t){let n;const u=[],o=t.length;for(let r=0;r<o;r++){const a=t[r];if(a.marker!==126||a.end===-1)continue;const i=t[a.end];n=e.tokens[a.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[i.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[i.token-1].type==="text"&&e.tokens[i.token-1].content==="~"&&u.push(i.token-1)}for(;u.length;){const r=u.pop();let a=r+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,r!==a&&(n=e.tokens[a],e.tokens[a]=e.tokens[r],e.tokens[r]=n)}}function Ya(e){const t=e.tokens_meta,n=e.tokens_meta.length;pn(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&pn(e,t[u].delimiters)}const zn={tokenize:Wa,postProcess:Ya};function Ka(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==95&&u!==42)return!1;const o=e.scanDelims(e.pos,u===42);for(let r=0;r<o.length;r++){const a=e.push("text","",0);a.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:o.length,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close})}return e.pos+=o.length,!0}function hn(e,t){const n=t.length;for(let u=n-1;u>=0;u--){const o=t[u];if(o.marker!==95&&o.marker!==42||o.end===-1)continue;const r=t[o.end],a=u>0&&t[u-1].end===o.end+1&&t[u-1].marker===o.marker&&t[u-1].token===o.token-1&&t[o.end+1].token===r.token+1,i=String.fromCharCode(o.marker),s=e.tokens[o.token];s.type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?i+i:i,s.content="";const c=e.tokens[r.token];c.type=a?"strong_close":"em_close",c.tag=a?"strong":"em",c.nesting=-1,c.markup=a?i+i:i,c.content="",a&&(e.tokens[t[u-1].token].content="",e.tokens[t[o.end+1].token].content="",u--)}}function Za(e){const t=e.tokens_meta,n=e.tokens_meta.length;hn(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&hn(e,t[u].delimiters)}const $n={tokenize:Ka,postProcess:Za};function Ja(e,t){let n,u,o,r,a="",i="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const l=e.pos,d=e.posMax,p=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let f=h+1;if(f<d&&e.src.charCodeAt(f)===40){for(c=!1,f++;f<d&&(n=e.src.charCodeAt(f),!(!I(n)&&n!==10));f++);if(f>=d)return!1;if(s=f,o=e.md.helpers.parseLinkDestination(e.src,f,e.posMax),o.ok){for(a=e.md.normalizeLink(o.str),e.md.validateLink(a)?f=o.pos:a="",s=f;f<d&&(n=e.src.charCodeAt(f),!(!I(n)&&n!==10));f++);if(o=e.md.helpers.parseLinkTitle(e.src,f,e.posMax),f<d&&s!==f&&o.ok)for(i=o.str,f=o.pos;f<d&&(n=e.src.charCodeAt(f),!(!I(n)&&n!==10));f++);}(f>=d||e.src.charCodeAt(f)!==41)&&(c=!0),f++}if(c){if(typeof e.env.references>"u")return!1;if(f<d&&e.src.charCodeAt(f)===91?(s=f+1,f=e.md.helpers.parseLinkLabel(e,f),f>=0?u=e.src.slice(s,f++):f=h+1):f=h+1,u||(u=e.src.slice(p,h)),r=e.env.references[We(u)],!r)return e.pos=l,!1;a=r.href,i=r.title}if(!t){e.pos=p,e.posMax=h;const m=e.push("link_open","a",1),b=[["href",a]];m.attrs=b,i&&b.push(["title",i]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=f,e.posMax=d,!0}function Qa(e,t){let n,u,o,r,a,i,s,c,l="";const d=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,f=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(f<0)return!1;if(r=f+1,r<p&&e.src.charCodeAt(r)===40){for(r++;r<p&&(n=e.src.charCodeAt(r),!(!I(n)&&n!==10));r++);if(r>=p)return!1;for(c=r,i=e.md.helpers.parseLinkDestination(e.src,r,e.posMax),i.ok&&(l=e.md.normalizeLink(i.str),e.md.validateLink(l)?r=i.pos:l=""),c=r;r<p&&(n=e.src.charCodeAt(r),!(!I(n)&&n!==10));r++);if(i=e.md.helpers.parseLinkTitle(e.src,r,e.posMax),r<p&&c!==r&&i.ok)for(s=i.str,r=i.pos;r<p&&(n=e.src.charCodeAt(r),!(!I(n)&&n!==10));r++);else s="";if(r>=p||e.src.charCodeAt(r)!==41)return e.pos=d,!1;r++}else{if(typeof e.env.references>"u")return!1;if(r<p&&e.src.charCodeAt(r)===91?(c=r+1,r=e.md.helpers.parseLinkLabel(e,r),r>=0?o=e.src.slice(c,r++):r=f+1):r=f+1,o||(o=e.src.slice(h,f)),a=e.env.references[We(o)],!a)return e.pos=d,!1;l=a.href,s=a.title}if(!t){u=e.src.slice(h,f);const m=[];e.md.inline.parse(u,e.md,e.env,m);const b=e.push("image","img",0),y=[["src",l],["alt",""]];b.attrs=y,b.children=m,b.content=u,s&&y.push(["title",s])}return e.pos=r,e.posMax=p,!0}const Xa=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,ei=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function ti(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const u=e.pos,o=e.posMax;for(;;){if(++n>=o)return!1;const a=e.src.charCodeAt(n);if(a===60)return!1;if(a===62)break}const r=e.src.slice(u+1,n);if(ei.test(r)){const a=e.md.normalizeLink(r);if(!e.md.validateLink(a))return!1;if(!t){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(r);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=r.length+2,!0}if(Xa.test(r)){const a=e.md.normalizeLink("mailto:"+r);if(!e.md.validateLink(a))return!1;if(!t){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(r);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=r.length+2,!0}return!1}function ni(e){return/^<a[>\s]/i.test(e)}function ui(e){return/^<\/a\s*>/i.test(e)}function oi(e){const t=e|32;return t>=97&&t<=122}function ri(e,t){if(!e.md.options.html)return!1;const n=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=n)return!1;const o=e.src.charCodeAt(u+1);if(o!==33&&o!==63&&o!==47&&!oi(o))return!1;const r=e.src.slice(u).match(Na);if(!r)return!1;if(!t){const a=e.push("html_inline","",0);a.content=r[0],ni(a.content)&&e.linkLevel++,ui(a.content)&&e.linkLevel--}return e.pos+=r[0].length,!0}const ai=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,ii=/^&([a-z][a-z0-9]{1,31});/i;function si(e,t){const n=e.pos,u=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=u)return!1;if(e.src.charCodeAt(n+1)===35){const r=e.src.slice(n).match(ai);if(r){if(!t){const a=r[1][0].toLowerCase()==="x"?parseInt(r[1].slice(1),16):parseInt(r[1],10),i=e.push("text_special","",0);i.content=Ct(a)?we(a):we(65533),i.markup=r[0],i.info="entity"}return e.pos+=r[0].length,!0}}else{const r=e.src.slice(n).match(ii);if(r){const a=kr(r[0]);if(a!==r[0]){if(!t){const i=e.push("text_special","",0);i.content=a,i.markup=r[0],i.info="entity"}return e.pos+=r[0].length,!0}}}return!1}function gn(e){const t={},n=e.length;if(!n)return;let u=0,o=-2;const r=[];for(let a=0;a<n;a++){const i=e[a];if(r.push(0),(e[u].marker!==i.marker||o!==i.token-1)&&(u=a),o=i.token,i.length=i.length||0,!i.close)continue;t.hasOwnProperty(i.marker)||(t[i.marker]=[-1,-1,-1,-1,-1,-1]);const s=t[i.marker][(i.open?3:0)+i.length%3];let c=u-r[u]-1,l=c;for(;c>s;c-=r[c]+1){const d=e[c];if(d.marker===i.marker&&d.open&&d.end<0){let p=!1;if((d.close||i.open)&&(d.length+i.length)%3===0&&(d.length%3!==0||i.length%3!==0)&&(p=!0),!p){const h=c>0&&!e[c-1].open?r[c-1]+1:0;r[a]=a-c+h,r[c]=h,i.open=!1,d.end=a,d.close=!1,l=-1,o=-2;break}}}l!==-1&&(t[i.marker][(i.open?3:0)+(i.length||0)%3]=l)}}function ci(e){const t=e.tokens_meta,n=e.tokens_meta.length;gn(e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&gn(t[u].delimiters)}function li(e){let t,n,u=0;const o=e.tokens,r=e.tokens.length;for(t=n=0;t<r;t++)o[t].nesting<0&&u--,o[t].level=u,o[t].nesting>0&&u++,o[t].type==="text"&&t+1<r&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==n&&(o[n]=o[t]),n++);t!==n&&(o.length=n)}const rt=[["text",Va],["linkify",za],["newline",$a],["escape",qa],["backticks",ja],["strikethrough",zn.tokenize],["emphasis",$n.tokenize],["link",Ja],["image",Qa],["autolink",ti],["html_inline",ri],["entity",si]],at=[["balance_pairs",ci],["strikethrough",zn.postProcess],["emphasis",$n.postProcess],["fragments_join",li]];function Le(){this.ruler=new z;for(let e=0;e<rt.length;e++)this.ruler.push(rt[e][0],rt[e][1]);this.ruler2=new z;for(let e=0;e<at.length;e++)this.ruler2.push(at[e][0],at[e][1])}Le.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),u=n.length,o=e.md.options.maxNesting,r=e.cache;if(typeof r[t]<"u"){e.pos=r[t];return}let a=!1;if(e.level<o){for(let i=0;i<u;i++)if(e.level++,a=n[i](e,!0),e.level--,a){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,r[t]=e.pos};Le.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,u=e.posMax,o=e.md.options.maxNesting;for(;e.pos<u;){const r=e.pos;let a=!1;if(e.level<o){for(let i=0;i<n;i++)if(a=t[i](e,!1),a){if(r>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Le.prototype.parse=function(e,t,n,u){const o=new this.State(e,t,n,u);this.tokenize(o);const r=this.ruler2.getRules(""),a=r.length;for(let i=0;i<a;i++)r[i](o)};Le.prototype.State=Ie;function di(e){const t={};e=e||{},t.src_Any=On.source,t.src_Cc=Dn.source,t.src_Z=Ln.source,t.src_P=St.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function ht(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){e[u]=n[u]})}),e}function Ze(e){return Object.prototype.toString.call(e)}function fi(e){return Ze(e)==="[object String]"}function pi(e){return Ze(e)==="[object Object]"}function hi(e){return Ze(e)==="[object RegExp]"}function _n(e){return Ze(e)==="[object Function]"}function gi(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const qn={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function _i(e){return Object.keys(e||{}).reduce(function(t,n){return t||qn.hasOwnProperty(n)},!1)}const mi={"http:":{validate:function(e,t,n){const u=e.slice(t);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const u=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const u=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},bi="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Ei="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function vi(e){return function(t,n){const u=t.slice(n);return e.test(u)?u.match(e)[0].length:0}}function mn(){return function(e,t){t.normalize(e)}}function $e(e){const t=e.re=di(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(bi),n.push(t.src_xn),t.src_tlds=n.join("|");function u(i){return i.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(u(t.tpl_email_fuzzy),"i"),t.email_fuzzy_global=RegExp(u(t.tpl_email_fuzzy),"ig"),t.link_fuzzy=RegExp(u(t.tpl_link_fuzzy),"i"),t.link_fuzzy_global=RegExp(u(t.tpl_link_fuzzy),"ig"),t.link_no_ip_fuzzy=RegExp(u(t.tpl_link_no_ip_fuzzy),"i"),t.link_no_ip_fuzzy_global=RegExp(u(t.tpl_link_no_ip_fuzzy),"ig"),t.host_fuzzy_test=RegExp(u(t.tpl_host_fuzzy_test),"i");const o=[];e.__compiled__={};function r(i,s){throw new Error('(LinkifyIt) Invalid schema "'+i+'": '+s)}Object.keys(e.__schemas__).forEach(function(i){const s=e.__schemas__[i];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[i]=c,pi(s)){hi(s.validate)?c.validate=vi(s.validate):_n(s.validate)?c.validate=s.validate:r(i,s),_n(s.normalize)?c.normalize=s.normalize:s.normalize?r(i,s):c.normalize=mn();return}if(fi(s)){o.push(i);return}r(i,s)}),o.forEach(function(i){e.__compiled__[e.__schemas__[i]]&&(e.__compiled__[i].validate=e.__compiled__[e.__schemas__[i]].validate,e.__compiled__[i].normalize=e.__compiled__[e.__schemas__[i]].normalize)}),e.__compiled__[""]={validate:null,normalize:mn()};const a=Object.keys(e.__compiled__).filter(function(i){return i.length>0&&e.__compiled__[i]}).map(gi).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i")}function jn(e,t,n,u){const o=e.slice(n,u);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=u,this.raw=o,this.text=o,this.url=o}function q(e,t){if(!(this instanceof q))return new q(e,t);t||_i(e)&&(t=e,e={}),this.__opts__=ht({},qn,t),this.__schemas__=ht({},mi,e),this.__compiled__={},this.__tlds__=Ei,this.__tlds_replaced__=!1,this.re={},$e(this)}q.prototype.add=function(t,n){return this.__schemas__[t]=n,$e(this),this};q.prototype.set=function(t){return this.__opts__=ht(this.__opts__,t),this};q.prototype.test=function(t){if(!t.length)return!1;let n,u;if(this.re.schema_test.test(t)){for(u=this.re.schema_search,u.lastIndex=0;(n=u.exec(t))!==null;)if(this.testSchemaAt(t,n[2],u.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&t.search(this.re.host_fuzzy_test)>=0&&t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&t.match(this.re.email_fuzzy)!==null)};q.prototype.pretest=function(t){return this.re.pretest.test(t)};q.prototype.testSchemaAt=function(t,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,u,this):0};q.prototype.match=function(t){const n=[],u=[],o=[],r=[];let a,i,s;function c(p,h){return p?h?p.index!==h.index?p.index<h.index?p:h:p.lastIndex>=h.lastIndex?p:h:p:h}if(!t.length)return null;if(this.re.schema_test.test(t))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(t))!==null;)i=this.testSchemaAt(t,a[2],s.lastIndex),i&&u.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+i});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(t))!==null;)o.push({schema:"",index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(t))!==null;)r.push({schema:"mailto:",index:a.index+a[1].length,lastIndex:a.index+a[0].length});const l=[0,0,0];let d=0;for(;;){const p=[u[l[0]],r[l[1]],o[l[2]]],h=c(c(p[0],p[1]),p[2]);if(!h)break;if(h===p[0]?l[0]++:h===p[1]?l[1]++:l[2]++,h.index<d)continue;const f=new jn(t,h.schema,h.index,h.lastIndex);this.__compiled__[f.schema].normalize(f,this),n.push(f),d=h.lastIndex}return n.length?n:null};q.prototype.matchAtStart=function(t){if(!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const u=this.testSchemaAt(t,n[2],n[0].length);if(!u)return null;const o=new jn(t,n[2],n.index+n[1].length,n.index+n[0].length+u);return this.__compiled__[o.schema].normalize(o,this),o};q.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(u,o,r){return u!==r[o-1]}).reverse(),$e(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,$e(this),this)};q.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};q.prototype.onCompile=function(){};const me=2147483647,ee=36,Tt=1,Oe=26,yi=38,Ai=700,Wn=72,Yn=128,Kn="-",Si=/^xn--/,xi=/[^\0-\x7F]/,Ci=/[\x2E\u3002\uFF0E\uFF61]/g,wi={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},it=ee-Tt,te=Math.floor,st=String.fromCharCode;function se(e){throw new RangeError(wi[e])}function ki(e,t){const n=[];let u=e.length;for(;u--;)n[u]=t(e[u]);return n}function Zn(e,t){const n=e.split("@");let u="";n.length>1&&(u=n[0]+"@",e=n[1]),e=e.replace(Ci,".");const o=e.split("."),r=ki(o,t).join(".");return u+r}function Jn(e){const t=[];let n=0;const u=e.length;for(;n<u;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<u){const r=e.charCodeAt(n++);(r&64512)==56320?t.push(((o&1023)<<10)+(r&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}const Ti=e=>String.fromCodePoint(...e),Ri=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ee},bn=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Qn=function(e,t,n){let u=0;for(e=n?te(e/Ai):e>>1,e+=te(e/t);e>it*Oe>>1;u+=ee)e=te(e/it);return te(u+(it+1)*e/(e+yi))},Xn=function(e){const t=[],n=e.length;let u=0,o=Yn,r=Wn,a=e.lastIndexOf(Kn);a<0&&(a=0);for(let i=0;i<a;++i)e.charCodeAt(i)>=128&&se("not-basic"),t.push(e.charCodeAt(i));for(let i=a>0?a+1:0;i<n;){const s=u;for(let l=1,d=ee;;d+=ee){i>=n&&se("invalid-input");const p=Ri(e.charCodeAt(i++));p>=ee&&se("invalid-input"),p>te((me-u)/l)&&se("overflow"),u+=p*l;const h=d<=r?Tt:d>=r+Oe?Oe:d-r;if(p<h)break;const f=ee-h;l>te(me/f)&&se("overflow"),l*=f}const c=t.length+1;r=Qn(u-s,c,s==0),te(u/c)>me-o&&se("overflow"),o+=te(u/c),u%=c,t.splice(u++,0,o)}return String.fromCodePoint(...t)},eu=function(e){const t=[];e=Jn(e);const n=e.length;let u=Yn,o=0,r=Wn;for(const s of e)s<128&&t.push(st(s));const a=t.length;let i=a;for(a&&t.push(Kn);i<n;){let s=me;for(const l of e)l>=u&&l<s&&(s=l);const c=i+1;s-u>te((me-o)/c)&&se("overflow"),o+=(s-u)*c,u=s;for(const l of e)if(l<u&&++o>me&&se("overflow"),l===u){let d=o;for(let p=ee;;p+=ee){const h=p<=r?Tt:p>=r+Oe?Oe:p-r;if(d<h)break;const f=d-h,m=ee-h;t.push(st(bn(h+f%m,0))),d=te(f/m)}t.push(st(bn(d,0))),r=Qn(o,c,i===a),o=0,++i}++o,++u}return t.join("")},Oi=function(e){return Zn(e,function(t){return Si.test(t)?Xn(t.slice(4).toLowerCase()):t})},Di=function(e){return Zn(e,function(t){return xi.test(t)?"xn--"+eu(t):t})},tu={version:"2.3.1",ucs2:{decode:Jn,encode:Ti},decode:Xn,encode:eu,toASCII:Di,toUnicode:Oi},Ii={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Li={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Ni={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Fi={default:Ii,zero:Li,commonmark:Ni},Mi=/^(vbscript|javascript|file|data):/,Pi=/^data:image\/(gif|png|jpeg|webp);/;function Ui(e){const t=e.trim().toLowerCase();return Mi.test(t)?Pi.test(t):!0}const nu=["http:","https:","mailto:"];function Bi(e){const t=At(e,!0);if(t.hostname&&(!t.protocol||nu.indexOf(t.protocol)>=0))try{t.hostname=tu.toASCII(t.hostname)}catch{}return De(yt(t))}function Gi(e){const t=At(e,!0);if(t.hostname&&(!t.protocol||nu.indexOf(t.protocol)>=0))try{t.hostname=tu.toUnicode(t.hostname)}catch{}return Ee(yt(t),Ee.defaultChars+"%")}function Y(e,t){if(!(this instanceof Y))return new Y(e,t);t||xt(e)||(t=e||{},e="default"),this.inline=new Le,this.block=new Ke,this.core=new wt,this.renderer=new Ae,this.linkify=new q,this.validateLink=Ui,this.normalizeLink=Bi,this.normalizeLinkText=Gi,this.utils=zr,this.helpers=je({},Wr),this.options={},this.configure(e),t&&this.set(t)}Y.prototype.set=function(e){return je(this.options,e),this};Y.prototype.configure=function(e){const t=this;if(xt(e)){const n=e;if(e=Fi[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};Y.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(o){return n.indexOf(o)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};Y.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(o){return n.indexOf(o)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};Y.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};Y.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};Y.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};Y.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};Y.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};const Vi=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
