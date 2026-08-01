(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Eu="modulepreload",yu=function(e){return"/"+e},Gt={},J=function(t,n,u){let r=Promise.resolve();if(n&&n.length>0){let s=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");r=s(n.map(c=>{if(c=yu(c),c in Gt)return;Gt[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const l=document.createElement("link");if(l.rel=f?"stylesheet":Eu,f||(l.as="script"),l.crossOrigin="",l.href=c,i&&l.setAttribute("nonce",i),document.head.appendChild(l),f)return new Promise((p,_)=>{l.addEventListener("load",p),l.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return t().catch(o)})};var vu=/([:*])(\w+)/g,Au="([^/]+)",Tu=/\*/g,Su="?(?:.*)",xu=/\/\?/g,wu="/?([^/]+|)",Cu="(?:/^|^)",ku="";function Nn(e){return e===void 0&&(e="/"),wt()?location.pathname+location.search+location.hash:e}function M(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function Ye(e){return typeof e=="string"}function Ru(e){return typeof e=="function"}function Ke(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Ou(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,u,r){return n===null&&(n={}),n[t[r]]=decodeURIComponent(u),n},null)}function je(e){var t=M(e).split(/\?(.*)?$/);return[M(t[0]),t.slice(1).join("")]}function xt(e){for(var t={},n=e.split("&"),u=0;u<n.length;u++){var r=n[u].split("=");if(r[0]!==""){var o=decodeURIComponent(r[0]);t[o]?(Array.isArray(t[o])||(t[o]=[t[o]]),t[o].push(decodeURIComponent(r[1]||""))):t[o]=decodeURIComponent(r[1]||"")}}return t}function In(e,t){var n=je(M(e.currentLocationPath)),u=n[0],r=n[1],o=r===""?null:xt(r),a=[],i;if(Ye(t.path)){if(i=Cu+M(t.path).replace(vu,function(d,l,p){return a.push(p),Au}).replace(Tu,Su).replace(xu,wu)+"$",M(t.path)===""&&M(u)==="")return{url:u,queryString:r,hashString:Ke(e.to),route:t,data:null,params:o}}else i=t.path;var s=new RegExp(i,ku),c=u.match(s);if(c){var f=Ye(t.path)?Ou(c,a):c.groups?c.groups:c.slice(1);return{url:M(u.replace(new RegExp("^"+e.instance.root),"")),queryString:r,hashString:Ke(e.to),route:t,data:f,params:o}}return!1}function Ln(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function Ee(e,t){return typeof e[t]>"u"||e[t]===!0}function Nu(e){if(!e)return{};var t=e.split(","),n={},u;return t.forEach(function(r){var o=r.split(":").map(function(a){return a.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":n.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":u||(u={}),u.strategy=o[1];break;case"resolveOptionsHash":u||(u={}),u.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[o[0]]=o[1]==="true";break}}),u&&(n.resolveOptions=u),n}function wt(){return typeof window<"u"}function Iu(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(u){n[u]&&(t[u]||(t[u]=[]),t[u].push(n[u]))})}),t}function ue(e,t,n){var u=t||{},r=0;(function o(){if(!e[r]){n&&n(u);return}Array.isArray(e[r])?(e.splice.apply(e,[r,1].concat(e[r][0](u)?e[r][1]:e[r][2])),o()):e[r](u,function(a){typeof a>"u"||a===!0?(r+=1,o()):n&&n(u)})})()}ue.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function $t(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=Nn(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function at(e,t){for(var n=0;n<e.instance.routes.length;n++){var u=e.instance.routes[n],r=In(e,u);if(r&&(e.matches||(e.matches=[]),e.matches.push(r),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Lu(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function Du(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var Ht=wt(),Fu=Ln();function Pu(e,t){if(Ee(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),u=Ht&&e.resolveOptions&&e.resolveOptions.hash===!0;Fu?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",u?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!u){var r=location.hash;location.hash="",location.hash=r}e.instance.__freezeListening=!1},1))):Ht&&(window.location.href=e.to)}t()}function Dn(e,t){var n=e.instance;if(!n.lastResolved()){t();return}ue(n.lastResolved().map(function(u){return function(r,o){if(!u.route.hooks||!u.route.hooks.leave){o();return}var a=!1,i=e.instance.matchLocation(u.route.path,e.currentLocationPath,!1);if(u.route.path!=="*")a=!i;else{var s=e.matches?e.matches.find(function(c){return u.route.path===c.route.path}):!1;a=!s}if(Ee(e.navigateOptions,"callHooks")&&a){ue(u.route.hooks.leave.map(function(c){return function(f,d){return c(function(l){l===!1?e.instance.__markAsClean(e):d()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return t()})}function Mu(e,t){e.match.route.hooks&&e.match.route.hooks.before&&Ee(e.navigateOptions,"callHooks")?ue(e.match.route.hooks.before.map(function(n){return function(r,o){return n(function(a){a===!1?e.instance.__markAsClean(e):o()},e.match)}}).concat([function(){return t()}])):t()}function Uu(e,t){Ee(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function Bu(e,t){e.match.route.hooks&&e.match.route.hooks.after&&Ee(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function Gu(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(u){u.route.hooks&&u.route.hooks.already&&Ee(e.navigateOptions,"callHooks")&&u.route.hooks.already.forEach(function(r){return r(e.match)})}),t(!1);return}t()}function $u(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var u=je(e.currentLocationPath),r=u[0],o=u[1],a=Ke(e.to);n.path=M(r);var i={url:n.path,queryString:o,hashString:a,data:null,route:n,params:o!==""?xt(o):null};e.matches=[i],e.match=i}t()}function Hu(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function Vu(e,t){e.instance._setCurrent(null),t()}function Fn(e,t){Ee(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var Pn=[Gu,Mu,Uu,Bu],Vt=[Dn,$u,ue.if(function(e){var t=e.notFoundHandled;return t},Pn.concat([Fn]),[Hu,Vu])];function bt(){return bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},bt.apply(this,arguments)}function zt(e,t){var n=0;function u(){if(n===e.matches.length){Fn(e,t);return}ue(Pn,bt({},e,{match:e.matches[n]}),function(){n+=1,u()})}Dn(e,u)}function it(e){e.instance.__markAsClean(e)}function Et(){return Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Et.apply(this,arguments)}var qt="[data-navigo]";function zu(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:qt},u=this,r="/",o=null,a=[],i=!1,s,c=Ln(),f=wt();e?r=M(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function d(v){return v.indexOf("#")>=0&&(n.hash===!0?v=v.split("#")[1]||"/":v=v.split("#")[0]),v}function l(v){return M(r+"/"+M(v))}function p(v,w,N,F){return v=Ye(v)?l(v):v,{name:F||M(String(v)),path:v,handler:w,hooks:Iu(N)}}function _(v,w,N){var F=this;return typeof v=="object"&&!(v instanceof RegExp)?(Object.keys(v).forEach(function(I){if(typeof v[I]=="function")F.on(I,v[I]);else{var ne=v[I],ke=ne.uses,mu=ne.as,bu=ne.hooks;a.push(p(I,ke,[s,bu],mu))}}),this):(typeof v=="function"&&(N=w,w=v,v=r),a.push(p(v,w,[s,N])),this)}function m(v,w){if(u.__dirty){u.__waiting.push(function(){return u.resolve(v,w)});return}else u.__dirty=!0;v=v?M(r)+"/"+M(v):void 0;var N={instance:u,to:v,currentLocationPath:v,navigateOptions:{},resolveOptions:Et({},n,w)};return ue([$t,at,ue.if(function(F){var I=F.matches;return I&&I.length>0},zt,Vt)],N,it),N.matches?N.matches:!1}function E(v,w){if(u.__dirty){u.__waiting.push(function(){return u.navigate(v,w)});return}else u.__dirty=!0;v=M(r)+"/"+M(v);var N={instance:u,to:v,navigateOptions:w||{},resolveOptions:w&&w.resolveOptions?w.resolveOptions:n,currentLocationPath:d(v)};ue([Lu,Du,at,ue.if(function(F){var I=F.matches;return I&&I.length>0},zt,Vt),Pu,it],N,it)}function T(v,w,N){var F=Q(v,w);return F!==null?(E(F.replace(new RegExp("^/?"+r),""),N),!0):!1}function A(v){return this.routes=a=a.filter(function(w){return Ye(v)?M(w.path)!==M(v):Ru(v)?v!==w.handler:String(w.path)!==String(v)}),this}function S(){c&&(this.__popstateListener=function(){u.__freezeListening||m()},window.addEventListener("popstate",this.__popstateListener))}function x(){this.routes=a=[],c&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=i=!0}function C(v,w){return u._notFoundRoute=p("*",v,[s,w],"__NOT_FOUND__"),this}function R(){if(f)return O().forEach(function(v){if(v.getAttribute("data-navigo")==="false"||v.getAttribute("target")==="_blank"){v.hasListenerAttached&&v.removeEventListener("click",v.navigoHandler);return}v.hasListenerAttached||(v.hasListenerAttached=!0,v.navigoHandler=function(w){if((w.ctrlKey||w.metaKey)&&w.target.tagName.toLowerCase()==="a")return!1;var N=v.getAttribute("href");if(typeof N>"u"||N===null)return!1;if(N.match(/^(http|https)/)&&typeof URL<"u")try{var F=new URL(N);N=F.pathname+F.search}catch{}var I=Nu(v.getAttribute("data-navigo-options"));i||(w.preventDefault(),w.stopPropagation(),u.navigate(M(N),I))},v.addEventListener("click",v.navigoHandler))}),u}function O(){return f?[].slice.call(document.querySelectorAll(n.linksSelector||qt)):[]}function P(v){return"/"+r+"/"+M(v)}function U(v){return s=v,this}function j(){return o}function Q(v,w,N){var F=a.find(function(ke){return ke.name===v}),I=null;if(F){if(I=F.path,w)for(var ne in w)I=I.replace(":"+ne,w[ne]);I=I.match(/^\//)?I:"/"+I}return I&&N&&!N.includeRoot&&(I=I.replace(new RegExp("^/"+r),"")),I}function B(v){return v.getAttribute("href")}function z(v){var w=je(M(v)),N=w[0],F=w[1],I=F===""?null:xt(F),ne=Ke(v),ke=p(N,function(){},[s],N);return{url:N,queryString:F,hashString:ne,route:ke,data:null,params:I}}function he(){return z(M(Nn(r)).replace(new RegExp("^"+r),""))}function X(v){var w={instance:u,currentLocationPath:v,to:v,resolveOptions:n};return at(w,function(){}),w.matches?w.matches:!1}function ot(v,w,N){typeof w<"u"&&(typeof N>"u"||N)&&(w=l(w));var F={instance:u,to:w,currentLocationPath:w};$t(F,function(){}),typeof v=="string"&&(v=typeof N>"u"||N?l(v):v);var I=In(F,{name:String(v),path:v,handler:function(){},hooks:{}});return I||!1}function Be(v,w,N){return typeof w=="string"&&(w=Bt(w)),w?(w.hooks[v]||(w.hooks[v]=[]),w.hooks[v].push(N),function(){w.hooks[v]=w.hooks[v].filter(function(F){return F!==N})}):(console.warn("Route doesn't exists: "+w),function(){})}function Bt(v){return typeof v=="string"?a.find(function(w){return w.name===l(v)}):a.find(function(w){return w.handler===v})}function gu(v){v.instance.__dirty=!1,v.instance.__waiting.length>0&&v.instance.__waiting.shift()()}this.root=r,this.routes=a,this.destroyed=i,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=gu,this.on=_,this.off=A,this.resolve=m,this.navigate=E,this.navigateByName=T,this.destroy=x,this.notFound=C,this.updatePageLinks=R,this.link=P,this.hooks=U,this.extractGETParameters=function(v){return je(d(v))},this.lastResolved=j,this.generate=Q,this.getLinkPath=B,this.match=X,this.matchLocation=ot,this.getCurrentLocation=he,this.addBeforeHook=Be.bind(this,"before"),this.addAfterHook=Be.bind(this,"after"),this.addAlreadyHook=Be.bind(this,"already"),this.addLeaveHook=Be.bind(this,"leave"),this.getRoute=Bt,this._pathToMatchObject=z,this._clean=M,this._checkForAHash=d,this._setCurrent=function(v){return o=u.current=v},S.call(this),R.call(this)}var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Re={exports:{}},Ku=Re.exports,Yt;function ju(){return Yt||(Yt=1,(function(e,t){(function(n,u){var r={};n.PubSub?(r=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=r,u(r)),e!==void 0&&e.exports&&(t=e.exports=r),t.PubSub=r,e.exports=t=r})(typeof window=="object"&&window||Ku||qu,function(n){var u={},r=-1,o="*";function a(m){var E;for(E in m)if(Object.prototype.hasOwnProperty.call(m,E))return!0;return!1}function i(m){return function(){throw m}}function s(m,E,T){try{m(E,T)}catch(A){setTimeout(i(A),0)}}function c(m,E,T){m(E,T)}function f(m,E,T,A){var S=u[E],x=A?c:s,C;if(Object.prototype.hasOwnProperty.call(u,E))for(C in S)Object.prototype.hasOwnProperty.call(S,C)&&x(S[C],m,T)}function d(m,E,T){return function(){var S=String(m),x=S.lastIndexOf(".");for(f(m,m,E,T);x!==-1;)S=S.substr(0,x),x=S.lastIndexOf("."),f(m,S,E,T);f(m,o,E,T)}}function l(m){var E=String(m),T=!!(Object.prototype.hasOwnProperty.call(u,E)&&a(u[E]));return T}function p(m){for(var E=String(m),T=l(E)||l(o),A=E.lastIndexOf(".");!T&&A!==-1;)E=E.substr(0,A),A=E.lastIndexOf("."),T=l(E);return T}function _(m,E,T,A){m=typeof m=="symbol"?m.toString():m;var S=d(m,E,A),x=p(m);return x?(T===!0?S():setTimeout(S,0),!0):!1}n.publish=function(m,E){return _(m,E,!1,n.immediateExceptions)},n.publishSync=function(m,E){return _(m,E,!0,n.immediateExceptions)},n.subscribe=function(m,E){if(typeof E!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(u,m)||(u[m]={});var T="uid_"+String(++r);return u[m][T]=E,T},n.subscribeAll=function(m){return n.subscribe(o,m)},n.subscribeOnce=function(m,E){var T=n.subscribe(m,function(){n.unsubscribe(T),E.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){u={}},n.clearSubscriptions=function(E){var T;for(T in u)Object.prototype.hasOwnProperty.call(u,T)&&T.indexOf(E)===0&&delete u[T]},n.countSubscriptions=function(E){var T,A,S=0;for(T in u)if(Object.prototype.hasOwnProperty.call(u,T)&&T.indexOf(E)===0){for(A in u[T])S++;break}return S},n.getSubscriptions=function(E){var T,A=[];for(T in u)Object.prototype.hasOwnProperty.call(u,T)&&T.indexOf(E)===0&&A.push(T);return A},n.unsubscribe=function(m){var E=function(P){var U;for(U in u)if(Object.prototype.hasOwnProperty.call(u,U)&&U.indexOf(P)===0)return!0;return!1},T=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(u,m)||E(m)),A=!T&&typeof m=="string",S=typeof m=="function",x=!1,C,R,O;if(T){n.clearSubscriptions(m);return}for(C in u)if(Object.prototype.hasOwnProperty.call(u,C)){if(R=u[C],A&&R[m]){delete R[m],x=m;break}if(S)for(O in R)Object.prototype.hasOwnProperty.call(R,O)&&R[O]===m&&(delete R[O],x=!0)}return x}})})(Re,Re.exports)),Re.exports}var Wu=ju();const b=Yu(Wu),g=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV.GO",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN.GO",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP.GO",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT.GO",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT.GO",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH.GO",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",LLM:"LLM",LLM_DO_DOWNLOAD:"LLM.DO.DOWNLOAD",LLM_STATUS:"LLM.STATUS",LLM_COMPLETE:"LLM.COMPLETE",LLM_ERROR:"LLM.ERROR",LLM_PROMPT:"LLM.PROMPT",LLM_RESPONSE:"LLM.RESPONSE",LLM_CANCEL:"LLM.CANCEL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),Ju=5e3,Zu=2e3,Qu=/^(AUTH|ROUTE|LLM)\./;function Xu(e,t){return t.some(n=>e===n||e.startsWith(`${n}.`))}function er(e=new Date){const t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}-${t(e.getMinutes())}-${t(e.getSeconds())}`}function tr(e,t){const n=URL.createObjectURL(new Blob([e],{type:"application/json"})),u=document.createElement("a");return u.href=n,u.download=t,u.style.display="none",document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e4),t}function nr(){return new Promise((e,t)=>{const n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.style.display="none",n.addEventListener("change",()=>{const u=n.files&&n.files[0];if(n.remove(),!u){t(new Error("[VCR] no file selected"));return}u.text().then(e,t)}),n.addEventListener("cancel",()=>{n.remove(),t(new Error("[VCR] file selection cancelled"))}),document.body.appendChild(n),n.click()})}function Kt(e){return typeof e.elapsed=="number"?e.elapsed:e.timestamp??0}function ur(e,t){return e<=0?Promise.resolve():new Promise(n=>{t.wake=n,t.timer=setTimeout(()=>{t.timer=null,n()},e)})}function rr(e){if(e===null||typeof e!="object")return e;try{return structuredClone(e)}catch{return or(e)}}function or(e){const t={_vcrPartial:!0};for(const n of Object.keys(e))try{const u=e[n];t[n]=u===null||typeof u!="object"?u:`[${Object.prototype.toString.call(u).slice(8,-1)}]`}catch(u){t[n]=`[unreadable: ${u.message}]`}return t}function jt(e){const t=new WeakSet;return JSON.stringify(e,(n,u)=>{if(typeof u=="bigint")return`${u}n`;if(typeof u=="function")return"[Function]";if(typeof u=="object"&&u!==null){if(t.has(u))return"[Circular]";t.add(u)}return u},2)}function ar(e,t={}){if(!e||typeof e.publish!="function")return console.warn("[VCR] PubSub.publish not found - recorder not installed"),null;if(e.publish.__vcr)return e.publish.__vcr;const n=t.maxEntries??Ju,u=t.app??"",r=[],o={};let a=0,i=0,s=0,c=null;window._vcrTimeline=r,window._isVCRRecording=!1;function f(l,p,_){r.length>=n&&(r.shift(),s++);const m=Date.now(),E={seq:a++,message:l,data:rr(p),timestamp:m,elapsed:m-i};_&&(E.sync=!0),u&&(E.app=u),r.push(E)}const d={start(){return r.length=0,a=0,s=0,i=Date.now(),window._isVCRRecording=!0,console.info(`[VCR] recording (cap ${n} events) - reproduce the issue, then run stopVCR()`),!0},stop(l={}){const{save:p=!0,filename:_}=l;window._isVCRRecording=!1,s&&console.warn(`[VCR] tape capped at ${n} - ${s} earlier event(s) dropped`),console.info(`[VCR] stopped - ${r.length} event(s) recorded`);const m=jt(r);return p&&r.length&&d.save(_,m),m},save(l,p){const _=l||`vcr-${u||"pubsub"}-${er()}.json`;try{return tr(p??jt(r),_),console.info(`[VCR] saved ${r.length} event(s) to ${_}`),_}catch(m){return console.error("[VCR] could not save file - copy _vcrTimeline instead",m),null}},peek(){return r},load(l){if(l===void 0)return nr().then(m=>d.load(m));const p=typeof l=="string"?JSON.parse(l):l;if(!Array.isArray(p))throw new TypeError("[VCR] load() expects the JSON string from stopVCR(), or an array");window._isVCRRecording=!1,r.length=0,r.push(...p),a=r.length,s=0;const _=p[0]?.app;return console.info(`[VCR] loaded ${r.length} event(s)${_?` from ${_}`:""} - playVCR() to replay`),r.length},async play(l={}){const{speed:p=1,maxGap:_=Zu,dryRun:m=!1,skip:E=[],quiet:T=!1}=l;if(c)return console.warn("[VCR] a replay is already running - stopPlayback() first"),{played:0,skipped:0,cancelled:!0,durationMs:0};if(!r.length)return console.warn("[VCR] tape is empty - record with startVCR(), or loadVCR(json)"),{played:0,skipped:0,cancelled:!1,durationMs:0};window._isVCRRecording&&(window._isVCRRecording=!1,console.warn("[VCR] recording stopped - cannot record and replay at once"));const A=r.slice(),S={cancelled:!1,timer:null,wake:null};c=S;const x=A.filter(B=>B.data&&B.data._vcrPartial).length;x&&console.warn(`[VCR] ${x} event(s) carry degraded payloads (were not cloneable when recorded)`);const C=A.filter(B=>Qu.test(B.message)).length;C&&!m&&console.warn(`[VCR] tape contains ${C} AUTH/ROUTE/LLM event(s) - replay will really navigate, sign out, or call the model. Try { dryRun: true } or { skip: ['AUTH', 'LLM'] }.`),console.info(`[VCR] ${m?"dry run":"replaying"} ${A.length} event(s) at ${p}x`);const R=Date.now();let O=0,P=0,U=null;for(let B=0;B<A.length;B++){const z=A[B];if(U){const he=Kt(z)-Kt(U),X=Math.min(Math.max(he,0),_);if(await ur(p>0?X/p:0,S),S.cancelled)break}if(U=z,E.length&&Xu(z.message,E)){P++,T||console.debug(`[VCR] ${B+1}/${A.length} skip ${z.message}`);continue}if(T||console.info(`[VCR] ${m?"·":"▶"} ${B+1}/${A.length} ${z.message}`,z.data??""),!m){const he=z.sync&&o.publishSync||o.publish;try{he.call(e,z.message,z.data)}catch(X){console.error(`[VCR] subscriber threw while replaying ${z.message}`,X)}}O++}const j=S.cancelled;c=null;const Q={played:O,skipped:P,cancelled:j,durationMs:Date.now()-R};return console.info(`[VCR] ${j?"cancelled":"replay complete"}`,Q),Q},stopPlayback(){return c?(c.cancelled=!0,c.timer&&clearTimeout(c.timer),c.wake&&c.wake(),!0):(console.info("[VCR] no replay running"),!1)},uninstall(){window._isVCRRecording=!1;for(const l of["publish","publishSync"])e[l]&&e[l].__vcrOriginal&&(e[l]=e[l].__vcrOriginal)}};for(const l of["publish","publishSync"]){const p=e[l];if(typeof p!="function")continue;const _=l==="publishSync";o[l]=p;const m=function(E,T){if(window._isVCRRecording)try{f(E,T,_)}catch(A){console.warn("[VCR] failed to record",E,A)}return p.apply(this,arguments)};m.__vcr=d,m.__vcrOriginal=p,e[l]=m}return window.startVCR=()=>d.start(),window.stopVCR=l=>d.stop(l),window.saveVCR=l=>d.save(l),window.loadVCR=l=>d.load(l),window.playVCR=l=>d.play(l),window.stopPlayback=()=>d.stopPlayback(),console.info(`[VCR] armed${u?` (${u})`:""} - startVCR() / stopVCR() to record, loadVCR() / playVCR() to replay`),d}const st={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var ct={};const L=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function Mn(e,t=null){if(e in L)return L[e];if(typeof process<"u"&&ct&&ct[e]){const n=ct[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&st&&st[e]){const n=st[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return t}function ir(e){return Mn(e,!1)===!0}function sr(){return{...L}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:L,getFlag:Mn,isEnabled:ir,getAllFlags:sr});const V=Object.freeze({USER:"user",ASSISTANT:"assistant"}),ae=Object.freeze({USER:"user",SYSTEM:"system",AUTOMATION:"automation"}),Y=Object.freeze({START:"start",DELTA:"delta",END:"end",ERROR:"error"}),q=Object.freeze({CANVAS:"canvas",AGENT:"agent",WORKFLOW:"workflow",STAGE:"stage"}),Wt=Object.freeze({CANVAS:[q.CANVAS],AGENT:[q.AGENT],AGENT_CANVAS:[q.CANVAS,q.AGENT],STAGE:[q.STAGE],WORKFLOW:[q.WORKFLOW]});Object.freeze({PROMPT:g.CONVERSATION_PROMPT,PROMPT_CANVAS:g.CONVERSATION_PROMPT_CANVAS,PROMPT_AGENT:g.CONVERSATION_PROMPT_AGENT,PROMPT_AGENT_CANVAS:g.CONVERSATION_PROMPT_AGENT_CANVAS,PROMPT_STAGE:g.CONVERSATION_PROMPT_STAGE,RESPONSE:g.CONVERSATION_RESPONSE,RESPONSE_CANVAS:g.CONVERSATION_RESPONSE_CANVAS,RESPONSE_WORKFLOW:g.CONVERSATION_RESPONSE_WORKFLOW});const cr="::";function lr(e){return typeof e=="string"&&e.trim().startsWith(cr)}let Jt=0;function yt(e="msg"){return globalThis.crypto&&typeof globalThis.crypto.randomUUID=="function"?`${e}_${globalThis.crypto.randomUUID()}`:(Jt+=1,`${e}_${Date.now().toString(36)}_${Jt}`)}function dr(e=new Date){return e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Zt(e){if(typeof e!="string")return"";const t=e.split(".");return t.length>2?t.slice(2).join("."):""}function de(e={}){const t=new Date,n=e.text??e.message??"";return{id:e.id??yt(e.role===V.ASSISTANT?"res":"req"),turnId:e.turnId??yt("turn"),role:e.role??V.USER,source:e.source??ae.USER,text:n,message:n,timestamp:e.timestamp??dr(t),ts:e.ts??t.getTime(),phase:e.phase??Y.END,sinks:e.sinks??[q.CANVAS],meta:e.meta??{}}}function Qt(e,t={}){const n=typeof e=="string"?{text:e}:e??{},u=n.role??t.role??V.USER;let r=n.phase;r||(r=n.streaming?Y.DELTA:Y.END);const o=Array.isArray(n.sinks)&&n.sinks.length?n.sinks:fr(t.subTopic,u);return de({...n,role:u,phase:r,sinks:o,source:n.source??t.source??ae.USER})}function fr(e,t=V.USER){return e&&Wt[e]?Wt[e]:t===V.ASSISTANT?[q.CANVAS]:[q.CANVAS]}const ze={base:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful.",contributors:new Map,register(e,t){if(typeof t!="function")throw new TypeError("[Conversation] contributor must be a function");return this.contributors.set(e,t),this},unregister(e){return this.contributors.delete(e),this},setBase(e){return this.base=e,this},compose(e={}){const t=[this.base];for(const[n,u]of this.contributors)try{const r=u(e);r&&t.push(String(r))}catch(r){console.warn(`[Conversation] system prompt contributor "${n}" failed`,r)}return t.filter(Boolean).join(`

`)},hash(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t+e.charCodeAt(n)|0;return(t>>>0).toString(36)}},ie=new Map;let vt=null;function hr(e){vt=e}function lt(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function pr(e){if(!e||typeof e!="object")throw new TypeError("[Templates] definition must be an object");if(!e.id||typeof e.id!="string")throw new TypeError("[Templates] id is required");if(!e.when||typeof e.when!="string")throw new TypeError(`[Templates] ${e.id}: when is required (it becomes the catalog line)`);if(typeof e.render!="function")throw new TypeError(`[Templates] ${e.id}: render must be a function`);if(typeof e.transcript!="function")throw new TypeError(`[Templates] ${e.id}: transcript must be a function - the model cannot see rendered markup`);return ie.has(e.id)&&console.warn(`[Templates] "${e.id}" re-registered - replacing`),ie.set(e.id,{params:{},source:null,fetch:null,...e}),e.id}function Xt(e){return ie.get(e)??null}function _r(){return[...ie.values()]}function gr(){return[...ie.keys()]}function Un(){return{type:"object",properties:{component_id:{type:["string","null"],enum:[...ie.keys(),null]},params:{type:"object"}},required:["component_id"],additionalProperties:!1}}function mr(){return JSON.stringify(Un())}function br(e,t={}){const n=ie.get(e);if(!n)return{ok:!1,params:{},errors:[`unknown template "${e}"`]};const u=[],r={};for(const[o,a]of Object.entries(n.params)){const i=t[o];if(i!=null){if(Array.isArray(a)){a.includes(i)?r[o]=i:u.push(`${o}: "${i}" is not one of ${a.join(", ")}`);continue}typeof i===a?r[o]=i:u.push(`${o}: expected ${a}, got ${typeof i}`)}}return{ok:u.length===0,params:r,errors:u}}function Er(){return ie.size===0?null:["The client can render these views. When a request matches one, return its id;","when none applies, return null and answer in prose.",...[...ie.values()].map(t=>{const n=Object.keys(t.params),u=n.length?` (params: ${n.join(", ")})`:"";return`- ${t.id}: ${t.when}${u}`})].join(`
`)}function yr(e,t){if(!e)return t;if(vt)try{return vt(e,t)}catch(n){console.warn(`[Templates] query "${e}" failed - falling back to dot path`,n)}return e.split(".").reduce((n,u)=>n==null?n:n[u],t)}async function vr(e,t={},n=null){const u=ie.get(e);if(!u)return{ok:!1,id:e,html:"",transcript:`Tried to show "${e}", which is not a registered view.`,errors:[`unknown template "${e}"`]};const r=br(e,t);try{const o=u.fetch?await u.fetch(r.params):n,a=yr(u.source,o);return{ok:!0,id:e,html:String(u.render(a,r.params)??""),transcript:String(u.transcript(a,r.params)??""),errors:r.errors}}catch(o){return console.error(`[Templates] "${e}" failed to hydrate`,o),{ok:!1,id:e,html:"",transcript:`The "${e}" view failed to load, so the user did not see it.`,errors:[...r.errors,o.message]}}}function Ar(){const e=t=>n=>{const u=n.detail?.pubsubTopic;u&&b.publish(u,n.detail)};document.addEventListener("nav-select",e()),document.addEventListener("logo-click",e()),document.addEventListener("nav-hover",e()),document.addEventListener("nav-double-tap",e()),document.addEventListener("nav-long-tap",e()),document.addEventListener("message-sent",e()),document.addEventListener("workflow-action",e())}function Tr(){console.log("[AppEvents] Initializing event listeners..."),b.subscribe(g.APP_READY,(n,u)=>{console.log("[AppEvents] APP_READY:",u)}),b.subscribe(g.APP_ERROR,(n,u)=>{console.error("[AppEvents] APP_ERROR:",u)}),b.subscribe(g.APP_SIGNOUT,(n,u)=>{console.log("[AppEvents] APP_SIGNOUT:",u)}),b.subscribe(g.ROUTE_NAV_BEFORE,(n,u)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",u),b.publish(g.UI_LOADING_START)}),b.subscribe(g.ROUTE_NAV_AFTER,(n,u)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",u),b.publish(g.UI_LOADING_END)}),b.subscribe(g.ROUTE_NAV_ERROR,(n,u)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",u),b.publish(g.APP_ERROR,{message:"Navigation error",details:u})}),b.subscribe(g.AUTH_SIGNIN_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",u)}),b.subscribe(g.AUTH_SIGNIN_FAIL,(n,u)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",u),b.publish(g.UI_TOAST,{message:u.message||"Sign in failed",type:"danger"})}),b.subscribe(g.AUTH_SIGNUP_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",u),b.publish(g.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"})}),b.subscribe(g.AUTH_VERIFY_LINK,(n,u)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),b.subscribe(g.AUTH_SIGNUP_FAIL,(n,u)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",u),b.publish(g.UI_TOAST,{message:u.message||"Sign up failed",type:"danger"})}),b.subscribe(g.AUTH_SIGNOUT_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",u),b.publish(g.UI_TOAST,{message:"Signed out successfully",type:"info"})}),b.subscribe(g.AUTH_SIGNUP,(n,u)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),b.subscribe(g.AUTH_FORGOT,(n,u)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),b.subscribe(g.AUTH_FORGOT_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",u),b.publish(g.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),b.subscribe(g.AUTH_RESETHASH_NAV,(n,u)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),b.subscribe(g.AUTH_RESETHASH_SUCCESS,(n,u)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",u),b.publish(g.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),b.subscribe(g.AUTH_TOKEN_EXPIRED,(n,u)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",u),b.publish(g.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),b.subscribe(g.I18N_SET_LANG,(n,u)=>{console.log("[AppEvents] I18N_SET_LANG:",u);const{langCode:r}=u;if(!r){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(r),console.log("[AppEvents] Language changed successfully to:",r),b.publish(g.UI_TOAST,{message:`Language changed to ${r}`,type:"success"})}catch(o){console.error("[AppEvents] Error changing language:",o),b.publish(g.UI_TOAST,{message:`Failed to change language: ${o.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),b.subscribe("CONVERSATION.PROMPT",(n,u)=>{const r=Qt(u,{role:V.USER,subTopic:Zt(n)});if(!r.text){console.warn("[AppEvents] CONVERSATION.PROMPT received without text",u);return}if(console.log(`[AppEvents] PROMPT ${r.sinks.join("+")} [${r.source}]:`,r.text),r.sinks.includes(q.STAGE)){const o=document.querySelector("m5t-chat-prompt-area");o?.setMessage?o.setMessage(r.text):console.warn("[AppEvents] STAGE sink: no m5t-chat-prompt-area on this route")}r.sinks.includes(q.CANVAS)&&(en(r),b.publish(g.CANVAS_DO_SCROLL)),r.sinks.includes(q.AGENT)&&(lr(r.text)?Sr(r):b.publish(g.LLM_PROMPT,{message:r.text,turnId:r.turnId}))}),b.subscribe("CONVERSATION.RESPONSE",(n,u)=>{const r=Qt(u,{role:V.ASSISTANT,subTopic:Zt(n)});if(!r.text&&r.phase!==Y.END){console.warn("[AppEvents] CONVERSATION.RESPONSE received without text",u);return}r.sinks.includes(q.CANVAS)&&en(r),r.sinks.includes(q.WORKFLOW)&&xr(r)}),b.subscribe(g.UI_LOADING_START,(n,u)=>{const r=document.getElementById("app-loader");r&&r.classList.add("active")}),b.subscribe(g.UI_LOADING_END,(n,u)=>{const r=document.getElementById("app-loader");r&&r.classList.remove("active")}),b.subscribe(g.UI_TOAST,(n,u)=>{console.log("[AppEvents] UI_TOAST:",u)}),b.subscribe(g.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const n="0.1",u=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${n} 8/1/2026, 2:53:00 PM|© ${u} Mach Five Tech`,"night")}),Ar(),b.subscribe("M5T_PRIMARY_NAV",(n,u)=>{const r=n.split(".")[1];switch(r){case"TAP":e(u);break;case"LOGO_TAP":t();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${r}`);break}});function e(n){const{token:u,level:r,primaryToken:o}=n;switch(u){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),b.publish(g.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${r} -> ${u}`,{primaryToken:o});break}}function t(n){const r=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 8/1/2026, 2:53:00 PM|© ${r} Mach Five Tech`,"night",5e3)}b.subscribe(g.LLM_DO_DOWNLOAD,(n,u)=>{console.log("[AppEvents] LLM_DO_DOWNLOAD:",u),window.LLMController?window.LLMController.loadModel():console.error("[AppEvents] LLMController not available")}),b.subscribe(g.LLM_STATUS,(n,u)=>{console.log("[AppEvents] LLM_STATUS:",u),u&&typeof neodigmToast<"u"&&(u.text||`${u.progressPercent}`)}),b.subscribe(g.LLM_COMPLETE,(n,u)=>{console.log("[AppEvents] LLM_COMPLETE:",u),b.publish(g.CONVERSATION_RESPONSE_CANVAS,de({role:V.ASSISTANT,source:ae.SYSTEM,text:`✓ AI Model Ready: ${u.modelId}`,phase:Y.END,meta:{modelId:u.modelId}}))}),b.subscribe(g.LLM_ERROR,(n,u)=>{console.error("[AppEvents] LLM_ERROR:",u);const r=`AI Error: ${u.error||"Unknown error"}`;typeof neodigmToast<"u"&&neodigmToast.q(r,"danger",8e3),b.publish(g.CONVERSATION_RESPONSE_CANVAS,de({id:u?.responseId,turnId:u?.turnId,role:V.ASSISTANT,source:ae.SYSTEM,text:`✗ ${r}`,phase:Y.ERROR}))}),b.subscribe(g.LLM_PROMPT,(n,u)=>{console.log("[AppEvents] LLM_PROMPT:",u),window.LLMController&&u?.message?window.LLMController.chat(u.message,{turnId:u.turnId}):console.error("[AppEvents] LLMController not available or no message provided")}),b.subscribe(g.LLM_RESPONSE,(n,u)=>{u&&(!u.done&&!u.fullContent||b.publish(g.CONVERSATION_RESPONSE_CANVAS,de({id:u.responseId,turnId:u.turnId,role:V.ASSISTANT,source:ae.SYSTEM,text:u.fullContent??"",phase:u.done?Y.END:Y.DELTA,meta:u.meta??{}})))}),b.subscribe(g.LLM_CANCEL,(n,u)=>{console.log("[AppEvents] LLM_CANCEL"),window.LLMController&&window.LLMController.cancelGeneration()}),b.subscribe(g.AUTH_SIGNOUT,(n,u)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(L.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}const Ge=new Map;function en(e){const t=document.getElementById("chat-messages");if(!t)return console.warn("[AppEvents] chat-messages element not found - may not be on home route"),null;let n=Ge.get(e.id);n&&!n.isConnected&&(Ge.delete(e.id),n=null);const u=!!e.meta?.componentId;return n||(n=document.createElement(u?"m5t-chat-workflow":e.role===V.ASSISTANT?"m5t-chat-response":"m5t-chat-prompt"),n.setAttribute("data-turn-id",e.turnId),n.setAttribute("data-message-id",e.id),n.setAttribute("timestamp",e.timestamp),Ge.set(e.id,n),t.prepend(n)),u?n.setContent?.(e.meta.html??"",{templateId:e.meta.componentId}):n.setAttribute("message",e.text),(e.phase===Y.END||e.phase===Y.ERROR)&&(n.setAttribute("phase",e.phase),Ge.delete(e.id)),n}async function Sr(e){console.log("[AppEvents] CLI command:",e.text);try{const t=(await J(async()=>{const{default:r}=await Promise.resolve().then(()=>Or);return{default:r}},void 0)).default,n=window.AuthController?.getEntity(),u=await t.process(e.text,n);b.publish(g.CONVERSATION_RESPONSE_CANVAS,de({turnId:e.turnId,role:V.ASSISTANT,source:ae.SYSTEM,text:u.message,phase:Y.END,meta:{command:!0}}))}catch(t){console.error("[AppEvents] CLI command failed",t),b.publish(g.CONVERSATION_RESPONSE_CANVAS,de({turnId:e.turnId,role:V.ASSISTANT,source:ae.SYSTEM,text:`Command failed: ${t.message}`,phase:Y.ERROR}))}b.publish(g.CANVAS_DO_SCROLL)}async function xr(e){const t=e.meta?.componentId;if(!t){console.warn("[AppEvents] WORKFLOW sink without meta.componentId - nothing to render",e);return}console.log("[AppEvents] WORKFLOW render:",t,e.meta.params??{});const n=await vr(t,e.meta.params??{},e.meta.payload??null);n.errors.length&&console.warn(`[AppEvents] template "${t}" reported:`,n.errors),b.publish(g.CONVERSATION_RESPONSE_CANVAS,de({turnId:e.turnId,role:V.ASSISTANT,source:ae.SYSTEM,text:n.transcript,phase:n.ok?Y.END:Y.ERROR,meta:{componentId:t,html:n.html,params:e.meta.params??{}}})),window.LLMController?.noteAssistant?.(n.transcript),b.publish(g.CANVAS_DO_SCROLL)}class fe{static CONFIG={BASE_URL:"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#n=null;static#u=null;static#a=null;static async init({BASE_URL:t,navigateFunction:n,customConfig:u={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#a=n;else throw new Error("navigateFunction is required and must be a function");return t&&(this.CONFIG.BASE_URL=t),u&&Object.keys(u).length>0&&(this.CONFIG={...this.CONFIG,...u}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#c(),this.#s(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#l(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(r){return console.error("[AuthController] Initialization failed:",r),!1}}static#s(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((t=null)=>{t&&(console.log("[AuthController] mvvLegit navigation to:",t),this.#r(t))}).setOnState((t=null)=>{if(t)switch(console.log("[AuthController] Auth state changed:",t),t){case"AUTH":case 4:this.#h();break;case"UNAUTH":case 1:this.#p();break;case"UNVERF":case 2:this.#_();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#r(t){if(!this.#a){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",t);const n=t.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#a(n)}static#c(){try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);t&&(this.#n=JSON.parse(t),console.log("[AuthController] Entity state loaded:",this.#n?.email))}catch(t){console.error("[AuthController] Error loading entity state:",t),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#u=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#o(t){try{this.#n=t,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(t)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#i(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#n}static async doSignin(t,n){try{const u=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n})}),r=await u.json();return u.status===303?(console.warn("[AuthController] Password reset required"),r.accessToken&&(mvvLegit.doSignin(r.accessToken),this.#o(r.entity)),setTimeout(()=>{this.#r(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:r}):u.ok&&r.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(r.accessToken),this.#o(r.entity),console.log("[AuthController] Explicitly navigating to home"),this.#r(this.CONFIG.ROUTES.HOME),{ok:!0,data:r}):{ok:!1,error:r.error||"Sign in failed",data:r}}catch(u){return console.error("[AuthController] Signin error:",u),{ok:!1,error:u.message}}}static async doSignout(t=!1){console.log("[AuthController] doSignout called, serverInitiated:",t);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!t&&n){const u=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",u),navigator.sendBeacon){const r=navigator.sendBeacon(u);console.log("[AuthController] Beacon sent:",r),r||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#i(),console.log("[AuthController] Stopping auth ping..."),this.#d(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(t){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),u=await n.json();return n.ok&&u.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#o(u.entity),{ok:!0,data:u}):{ok:!1,error:u.error||"Sign up failed",data:u}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(t,n){try{const u=mvvLegit.getConf()?.token,r=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${u}`,"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n,modified_by:t})}),o=await r.json();return r.ok&&o.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:o}):{ok:!1,error:o.error||"Password reset failed",data:o}}catch(u){return console.error("[AuthController] Reset password error:",u),{ok:!1,error:u.message}}}static#l(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#f()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#d(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#f(){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);t.ok?console.log("[AuthController] Ping success"):(t.status===401||t.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(t){console.error("[AuthController] Ping error:",t)}}static setDeepLinkGuid(t){this.#u=t,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,t),console.log("[AuthController] Deep-link GUID stored:",t)}static getDeepLinkGuid(){return this.#u}static clearDeepLink(){this.#u=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#h(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#l()}static#p(){console.log("[AuthController] User unauthenticated"),this.#d()}static#_(){console.log("[AuthController] User unverified")}static getAuthState(){try{const t=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(t);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const u=LZString.decompressFromUTF16(n),o=JSON.parse(u)?.state;return o===1?"UNAUTH":o===2?"UNVERF":o===4?"AUTH":o===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(t){this.#r(t)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#f()}}class k{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:t,product:n,whitelabel:u,lang:r}){t&&(this.#t.buildMode=t),n&&(this.#t.product=n),u&&(this.#t.whitelabel=u),r&&(this.#t.lang=r)}static getContext(){return{...this.#t}}static get(t,n={}){const u={...this.#t,...n},{buildMode:r,product:o,whitelabel:a,lang:i}=u;try{const s=this.#e[r]?.[o]?.[a]?.[i]?.[t];return s?Array.isArray(s)?s[Math.floor(Math.random()*s.length)]:s:(console.warn(`[MicrocopyManager] Token not found: ${t} (${r}/${o}/${a}/${i})`),null)}catch(s){return console.error(`[MicrocopyManager] Error retrieving token: ${t}`,s),null}}static getAll(t={}){const n={...this.#t,...t},{buildMode:u,product:r,whitelabel:o,lang:a}=n;try{return this.#e[u]?.[r]?.[o]?.[a]||null}catch(i){return console.error("[MicrocopyManager] Error retrieving all tokens",i),null}}static has(t,n={}){const u={...this.#t,...n},{buildMode:r,product:o,whitelabel:a,lang:i}=u;try{return!!this.#e[r]?.[o]?.[a]?.[i]?.[t]}catch{return!1}}static getAvailableLanguages(){const{buildMode:t,product:n,whitelabel:u}=this.#t;try{return Object.keys(this.#e[t]?.[n]?.[u]||{})}catch{return[]}}static update(t,n,u={}){const r={...this.#t,...u},{buildMode:o,product:a,whitelabel:i,lang:s}=r;try{return this.#e[o]||(this.#e[o]={}),this.#e[o][a]||(this.#e[o][a]={}),this.#e[o][a][i]||(this.#e[o][a][i]={}),this.#e[o][a][i][s]||(this.#e[o][a][i][s]={}),this.#e[o][a][i][s][t]=n,!0}catch(c){return console.error(`[MicrocopyManager] Error updating token: ${t}`,c),!1}}static delete(t,n={}){const u={...this.#t,...n},{buildMode:r,product:o,whitelabel:a,lang:i}=u;try{return delete this.#e[r]?.[o]?.[a]?.[i]?.[t],!0}catch(s){return console.error(`[MicrocopyManager] Error deleting token: ${t}`,s),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(t){try{return this.#e=t,!0}catch(n){return console.error("[MicrocopyManager] Error importing data",n),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:k});class be{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const t=this.#a();k.setContext(t),console.log("[I18nController] Initialized with context:",t),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),L.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#s(),this.#c(),this.#e=!0,this.refresh()}static#u(t){const n={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},u=t.toLowerCase();return n[u]||"DEV"}static#a(){const n=this.#u("production"),u=localStorage.getItem(L.FF_SSE_LS_WHITELABEL)||L.FF_SSE_I18N_WHITELABEL,r=localStorage.getItem(L.FF_SSE_LS_USER_LANG)||L.FF_SSE_I18N_LANG;return{buildMode:n,product:L.FF_SSE_I18N_PRODUCT,whitelabel:u,lang:r}}static#s(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((t,n,u)=>{L.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",u),this.#t=u,setTimeout(()=>{this.refresh()},L.FF_SSE_I18N_APPLY_DELAY_MS)},L.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#r())}static#r(){setInterval(()=>{const n=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");n&&n!==this.#t&&(this.#t=n,this.refresh())},500)}static#c(){this.#n||(this.#n=new MutationObserver(t=>{let n=!1;for(const u of t){for(const r of u.addedNodes)if(r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("data-meta-copywrite-i118n")||r.querySelector("[data-meta-copywrite-i118n]"))){n=!0;break}if(n)break}n&&(L.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#o(document.body),this.#i(document.body),L.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#o(t){const n=t.querySelectorAll("[data-meta-copywrite-i118n]");L.FF_SSE_I18N_DEBUG&&n.length>0&&console.log(`[I18nController] Processing ${n.length} elements`),n.forEach(u=>{try{const r=u.getAttribute("data-meta-copywrite-i118n"),o=JSON.parse(r);if(!o.token){console.warn("[I18nController] Missing token in config:",o);return}const a=o.attribute||"textContent",i=k.get(o.token);if(i===null){console.warn(`[I18nController] Microcopy not found for token: ${o.token}`);return}a==="textContent"?u.textContent=i:a==="innerHTML"?u.innerHTML=i:u.setAttribute(a,i),L.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${i}" to ${a} for token: ${o.token}`)}catch(r){console.error("[I18nController] Error processing element:",r,u)}})}static#i(t){t.querySelectorAll("*").forEach(u=>{u.shadowRoot&&(this.#o(u.shadowRoot),this.#i(u.shadowRoot))})}static setLanguage(t){const n=k.getAvailableLanguages();if(!n.includes(t)){console.error(`[I18nController] Language not available: ${t}. Available:`,n);return}localStorage.setItem(L.FF_SSE_LS_USER_LANG,t),k.setContext({lang:t}),console.log("[I18nController] Language changed to:",t);const u=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:t}});document.dispatchEvent(u),this.refresh()}static setWhitelabel(t){localStorage.setItem(L.FF_SSE_LS_WHITELABEL,t),k.setContext({whitelabel:t}),L.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",t),this.refresh()}static getLanguage(){return k.getContext().lang}static getAvailableLanguages(){return k.getAvailableLanguages()}static getContext(){return k.getContext()}static destroy(){this.#n&&(this.#n.disconnect(),this.#n=null),this.#e=!1,this.#t=null,L.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{be.initialize()}):be.initialize());class tn{static engine=null;static webllm=null;static isInitialized=!1;static currentModel=null;static isGenerating=!1;static isModelCached=!1;static DEFAULT_MODEL="Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC";static history=[];static MAX_HISTORY_MESSAGES=24;static noteAssistant(t){t&&(this.history.push({role:"assistant",content:String(t)}),this.trimHistory())}static trimHistory(){if(this.history.length<=this.MAX_HISTORY_MESSAGES)return;const t=this.history.length-this.MAX_HISTORY_MESSAGES;for(this.history=this.history.slice(t);this.history.length&&this.history[0].role!=="user";)this.history.shift();console.log(`[LLMController] Transcript trimmed to ${this.history.length} messages`)}static systemContext(){return{entity:globalThis.window?.AuthController?.getEntity?.()??null,route:globalThis.location?.hash??"",modelId:this.DEFAULT_MODEL}}static async initialize(){if(this.isInitialized)return console.log("[LLMController] Already initialized"),!0;console.log("[LLMController] Initializing WebLLM module...");try{if(!navigator.gpu)throw new Error("WebGPU is not available. Please use a supported browser (Chrome 113+, Edge 113+).");if(console.log("[LLMController] WebGPU detected"),this.webllm=await J(()=>import("https://esm.run/@mlc-ai/web-llm"),[]),console.log("[LLMController] WebLLM module loaded"),!this.webllm||!this.webllm.MLCEngine)throw new Error("MLCEngine not found in WebLLM module");return this.engine=new this.webllm.MLCEngine,console.log("[LLMController] MLCEngine created"),this.engine.setInitProgressCallback(t=>{this.handleInitProgress(t)}),this.isModelCached=await this.checkModelCache(),this.isInitialized=!0,console.log("[LLMController] Engine initialized, attempting auto-load..."),await this.autoLoadCachedModel(),console.log("[LLMController] Initialization complete"),!0}catch(t){return console.error("[LLMController] Initialization failed:",t),b.publish(g.LLM_ERROR,{error:t.message,phase:"initialization"}),!1}}static async checkModelCache(){console.log(`[LLMController] Checking cache for model: ${this.DEFAULT_MODEL}`);try{const n=(await caches.keys()).find(i=>i.includes("webllm/model"));if(!n)return console.log("[LLMController] No WebLLM model cache found"),!1;const o=(await(await caches.open(n)).keys()).filter(i=>i.url.includes(this.DEFAULT_MODEL)||i.url.includes("Hermes-2-Pro-Llama-3-8B")),a=o.length>0;return console.log(`[LLMController] Model cached: ${a} (${o.length} files)`),a}catch(t){return console.warn("[LLMController] Cache check failed:",t.message),!1}}static async autoLoadCachedModel(){try{this.isModelCached?console.log(`[LLMController] Loading cached model: ${this.DEFAULT_MODEL}`):console.log(`[LLMController] No cached model found - starting download: ${this.DEFAULT_MODEL}`),await this.loadModel(),console.log("[LLMController] Model ready")}catch(t){console.error("[LLMController] Auto-load failed:",t)}}static async loadModel(){if(!this.isInitialized)return console.error("[LLMController] Cannot load model: not initialized"),b.publish(g.LLM_ERROR,{error:"LLMController not initialized",modelId:this.DEFAULT_MODEL}),!1;const t=this.isModelCached;console.log(`[LLMController] Loading model: ${this.DEFAULT_MODEL} (cached: ${t})`);try{const n={temperature:.7,top_p:.95};return await this.engine.reload(this.DEFAULT_MODEL,n),this.currentModel=this.DEFAULT_MODEL,this.isModelCached=!0,console.log(`[LLMController] Model loaded successfully: ${this.DEFAULT_MODEL}`),b.publish(g.LLM_COMPLETE,{modelId:this.DEFAULT_MODEL,cached:t}),!0}catch(n){return console.error("[LLMController] Failed to load model:",n),b.publish(g.LLM_ERROR,{error:n.message,modelId:this.DEFAULT_MODEL,phase:"download"}),!1}}static handleInitProgress(t){const n=(t.progress*100).toFixed(1);let u=t.text;(n>0||!t.text.includes("Loading model from cache"))&&(u=`${n}% - ${t.text}`),console.log(`[LLMController] Progress: ${u}`),b.publish(g.LLM_STATUS,{progress:t.progress,progressPercent:parseFloat(n),text:u,modelId:this.currentModel||this.DEFAULT_MODEL})}static async chat(t,n={}){const{turnId:u}=n,r=yt("res");if(!this.currentModel){console.error("[LLMController] No model loaded - still downloading or initialization failed"),b.publish(g.LLM_ERROR,{error:"AI model is still loading. Please wait a moment and try again.",phase:"chat",turnId:u,responseId:r});return}if(this.isGenerating){console.warn("[LLMController] Already generating response");return}console.log(`[LLMController] Processing chat message: "${t}"`);const o=ze.compose(this.systemContext()),a=ze.hash(o);this.history.push({role:"user",content:t}),this.trimHistory();const i=[{role:"system",content:o},...this.history];this.isGenerating=!0;let s="",c=null;try{const f=await this.engine.chat.completions.create({stream:!0,messages:i,stream_options:{include_usage:!0}});for await(const d of f){const l=d.choices[0]?.delta?.content;l&&(s+=l,b.publish(g.LLM_RESPONSE,{content:l,fullContent:s,done:!1,turnId:u,responseId:r,meta:{model:this.DEFAULT_MODEL,systemHash:a}})),d.usage&&(c=d.usage,console.log("[LLMController] Usage stats:",d.usage))}this.history.push({role:"assistant",content:s}),this.trimHistory(),b.publish(g.LLM_RESPONSE,{content:"",fullContent:s,done:!0,turnId:u,responseId:r,meta:{model:this.DEFAULT_MODEL,systemHash:a,usage:c}}),console.log(`[LLMController] Response complete (${s.length} chars)`)}catch(f){console.error("[LLMController] Chat error:",f),b.publish(g.LLM_ERROR,{error:f.message,phase:"chat",turnId:u,responseId:r})}finally{this.isGenerating=!1}}static async route(t){if(!gr().length||!this.currentModel||this.isGenerating)return null;const n=this.history.slice(-4),u=[{role:"system",content:ze.compose(this.systemContext())},...n,{role:"user",content:t}];try{const o=(await this.engine.chat.completions.create({stream:!1,messages:u,max_tokens:128,response_format:{type:"json_object",schema:mr()}})).choices[0]?.message?.content;if(!o)return null;const a=JSON.parse(o);return a.component_id?(console.log("[LLMController] Routed to:",a.component_id,a.params??{}),{componentId:a.component_id,params:a.params??{}}):null}catch(r){return console.warn("[LLMController] Routing pass failed - falling through to prose",r),null}}static cancelGeneration(){if(!this.isGenerating||!this.engine){console.warn("[LLMController] Nothing to cancel");return}console.log("[LLMController] Cancelling generation...");try{this.engine.interruptGenerate(),this.isGenerating=!1,console.log("[LLMController] Generation cancelled")}catch(t){console.error("[LLMController] Cancel failed:",t)}}static getStatus(){return{modelId:this.DEFAULT_MODEL,isLoaded:!!this.currentModel,isCached:this.isModelCached,isGenerating:this.isGenerating,messageCount:this.history.length}}static resetConversation(){this.history=[],console.log("[LLMController] Conversation reset")}}class Ct{static _initialized=!1;static _debug=!1;static init(t={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=t.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const n=u=>{this._handleSSEMessage(u)};return window.mvvSSEther.onmessage(n),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(t){try{this._debug&&console.log("[MachVive] SSE message received:",t);const n=t?.data;if(!n){this._debug&&console.log("[MachVive] No data in message, skipping");return}const u=n.data||n.package||n;if(!u){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let r=u.cfg;const o=u.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",r,"type:",typeof r,"length:",r?.length),console.log("[MachVive] msg (raw):",o)),typeof r=="string"){if(r.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{r=JSON.parse(r),console.log("[MachVive] cfg (parsed):",r)}catch(i){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:r,cfgLength:r.length,error:i.message});return}}else if(!r){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const a=r?.topic;if(!a){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",a),!this._isValidTopic(a)){console.warn(`[MachVive] Topic '${a}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(a,o,t,n)}catch(n){console.error("[MachVive] Error handling SSE message:",n)}}static _isValidTopic(t){return!g||!g.hasOwnProperty(t)?(console.warn(`[MachVive] Topic '${t}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(t,n,u,r){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const o=window.PubSub||PubSub,a={message:n,metadata:{source:"sse",sseEventId:u.id,timestamp:u.timestamp,appGuid:r.app_guid,channelGuid:r.channel_guid,eventAction:r.event_action,status:r.status,class:r.class,raw:r}};console.log(`[MachVive] Publishing to topic '${t}':`,a);const i=g[t];console.log(`[MachVive] AppBroadcast.${t} = '${i}'`),o.publish(i,a),console.log(`[MachVive] ✓ Published SSE message to topic: ${t}`)}catch(o){console.error(`[MachVive] Error publishing to topic '${t}':`,o)}}static debug(t){return this._debug=t,console.log(`[MachVive] Debug mode ${t?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=Ct);typeof window<"u"&&(window.MachVive=Ct);ar(b,{app:"client-saas"});window.m5t=Object.create(null);window.m5t.pubsub=b;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(e){console.log("mvvLegit (direct): ReferenceError -",e.message)}const wr=Object.keys(window).filter(e=>e.toLowerCase().includes("mvv")||e.toLowerCase().includes("neodigm")||e.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",wr);const Z=new zu("/",{hash:!0});window.router=Z;function kt(e){const t=e?`${e.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),b.publish(g.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function we(e){console.log("[Router] Navigating to:",e),Z.navigate(`/${e}`)}Z.on("/",()=>{console.log("[Router] Route: /"),b.publish(g.ROUTE_NAV_BEFORE,{route:"splash"}),J(()=>Promise.resolve().then(()=>Bn),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"splash",error:e})})});Z.on("/splash",()=>{console.log("[Router] Route: /splash"),b.publish(g.ROUTE_NAV_BEFORE,{route:"splash"}),J(()=>Promise.resolve().then(()=>Bn),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"splash",error:e})})});Z.on("/signin",()=>{console.log("[Router] Route: /signin"),b.publish(g.ROUTE_NAV_BEFORE,{route:"signin"}),J(()=>Promise.resolve().then(()=>Ur),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"signin"})}).catch(e=>{console.error("[Router] Error loading signin route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"signin",error:e})})});Z.on("/signup",()=>{console.log("[Router] Route: /signup"),b.publish(g.ROUTE_NAV_BEFORE,{route:"signup"}),J(()=>Promise.resolve().then(()=>zr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"signup"})}).catch(e=>{console.error("[Router] Error loading signup route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"signup",error:e})})});Z.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),b.publish(g.ROUTE_NAV_BEFORE,{route:"verf-link"}),J(()=>Promise.resolve().then(()=>Kr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(e=>{console.error("[Router] Error loading verf-link route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"verf-link",error:e})})});Z.on("/forgot",()=>{console.log("[Router] Route: /forgot"),b.publish(g.ROUTE_NAV_BEFORE,{route:"forgot"}),J(()=>Promise.resolve().then(()=>to),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(e=>{console.error("[Router] Error loading forgot route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"forgot",error:e})})});Z.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!kt("resethash")){we("signin");return}b.publish(g.ROUTE_NAV_BEFORE,{route:"resethash"}),J(()=>Promise.resolve().then(()=>ro),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(e=>{console.error("[Router] Error loading resethash route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"resethash",error:e})})});Z.on("/home",()=>{if(console.log("[Router] Route: /home"),!kt("home")){we("signin");return}b.publish(g.ROUTE_NAV_BEFORE,{route:"home"}),J(()=>Promise.resolve().then(()=>So),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"home"})}).catch(e=>{console.error("[Router] Error loading home route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"home",error:e})})});Z.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!kt("signout")){we("signin");return}b.publish(g.ROUTE_NAV_BEFORE,{route:"signout"}),J(()=>Promise.resolve().then(()=>Co),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),b.publish(g.ROUTE_NAV_AFTER,{route:"signout"})}).catch(e=>{console.error("[Router] Error loading signout route:",e),b.publish(g.ROUTE_NAV_ERROR,{route:"signout",error:e})})});Z.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),we("splash")});b.subscribe(g.ROUTE_NAV,(e,t)=>{console.log("[Router] ROUTE_NAV event received:",t),t?.route&&we(t.route)});function nn(){console.log("[App] Waiting for Neodigm 55 library...");let e=0;const t=100,n=setInterval(()=>{e++,e%10===0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(n),Cr()):e>=t&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,b.publish(g.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",nn):nn();async function Cr(){if(console.log("[App] Neodigm 55 loaded, initializing..."),Tr(),be.initialize(),console.log("[App] I18n Controller initialized"),tn.initialize().then(n=>{n?console.log("[App] LLM Controller initialized successfully"):console.warn("[App] LLM Controller initialization failed (non-critical)")}).catch(n=>{console.error("[App] LLM Controller initialization error:",n)}),!await fe.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),we(n)}})){console.error("[App] AuthController initialization failed");return}const t=fe.getEntity();t&&(console.log("[App] Session restored for:",t.email),b.publish(g.APP_USER_LOADED,{entity:t})),b.publish(g.APP_READY,{timestamp:new Date().toISOString(),sessionUser:t}),Z.resolve(),window.AuthController=fe,window.I18nController=be,window.LLMController=tn,window.MachVive=Ct,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, LLMController, MachVive available globally)")}b.subscribe(g.ROUTE_NAV_AFTER,(e,t)=>{typeof be<"u"&&be.refresh&&setTimeout(()=>{be.refresh()},100)});const kr=Object.freeze({admin_root_role:{value:100,desc:"Administrator superuser infrastructure architecture"},admin_business_role:{value:90,desc:"Administrator financial oversight"},admin_support_role:{value:80,desc:"Administrator maintenance and configuration"},admin_readonly_role:{value:70,desc:"Administrator information help desk"},client_tier_3_role:{value:30,desc:"Client paid tier 3"},client_tier_2_role:{value:20,desc:"Client paid tier 2"},client_tier_1_role:{value:10,desc:"Client paid tier 1"},client_standard_role:{value:0,desc:"Client free tier 0"}});function un(e){return kr[e]||null}class Rr{static MIN_ROLE_VALUE=50;static COMMANDS={help:"Show available commands",clear:"Clear chat canvas",debug:"Toggle debug mode (::debug on|off)",version:"Show application version",feature:"Feature flag operations (::feature list|get|set)",model:"LLM model operations (::model status|download|clear)",reload:"Reload the page",export:"Export chat history as JSON",theme:"Toggle theme (::theme dark|light)",auth:"Show authentication status",template:"Template registry (::template list|show|schema|render)"};static hasAccess(t){if(!t||!t.class)return!1;let n=0;if(typeof t.class=="string"){const u=un(t.class);n=u?u.value:0}else typeof t.class=="object"&&t.class.value!==void 0&&(n=t.class.value);return console.log(`[CLIController] Role check: ${t.class} → value: ${n}`),n>=this.MIN_ROLE_VALUE}static async process(t,n){if(!this.hasAccess(n))return{error:!0,message:`⛔ **Access Denied**

CLI commands require admin privileges (role ≥ 50).`};const u=t.slice(2).trim(),[r,...o]=u.split(/\s+/);switch(console.log("[CLIController] Processing command:",r,"Args:",o),r.toLowerCase()){case"help":return this.cmdHelp();case"clear":return this.cmdClear();case"debug":return this.cmdDebug(o);case"version":return this.cmdVersion();case"feature":return this.cmdFeature(o);case"model":return this.cmdModel(o);case"reload":return this.cmdReload();case"export":return this.cmdExport();case"theme":return this.cmdTheme(o);case"auth":return this.cmdAuth(n);case"template":return this.cmdTemplate(o);default:return{error:!0,message:`❌ **Unknown command:** \`${r}\`

Type \`::help\` for available commands.`}}}static cmdHelp(){let t=`📖 **CLI Commands**

`;t+="Available commands (prefix with `::`)\n\n";for(const[n,u]of Object.entries(this.COMMANDS))t+=`• \`::${n}\` - ${u}
`;return t+=`
**Examples:**
`,t+="• `::debug on` - Enable debug logging\n",t+="• `::feature list` - Show all feature flags\n",t+="• `::model status` - Check LLM model status\n",{message:t}}static cmdClear(){const t=document.getElementById("chat-messages");if(!t)return{error:!0,message:"❌ Failed to clear canvas"};t.innerHTML="";const n=window.LLMController?.history?.length??0;return window.LLMController?.resetConversation(),{message:`✅ Chat canvas cleared${n?` (and ${n} transcript messages)`:""}`}}static cmdDebug(t){const n=t[0]?.toLowerCase();if(!n||!["on","off"].includes(n))return{message:`🐛 **Debug Mode**

Current state: \`${localStorage.getItem("debug_mode")==="true"?"ON":"OFF"}\`

Usage: \`::debug on|off\``};const u=n==="on";return localStorage.setItem("debug_mode",u),{message:`🐛 Debug mode ${u?"**enabled**":"**disabled**"}`}}static cmdVersion(){return{message:`ℹ️ **StreamSyncEngage SaaS Client**

Version: 1.0.0
Build: production
Node Env: production`}}static cmdFeature(t){const n=t[0]?.toLowerCase();if(!n)return{message:"🚩 **Feature Flags**\n\nUsage:\n• `::feature list` - List all flags\n• `::feature get <name>` - Get flag value\n• `::feature set <name> <value>` - Set flag value"};switch(n){case"list":{let u=`🚩 **Feature Flags**

`;const r=Object.entries(L).slice(0,20);for(const[o,a]of r)u+=`• \`${o}\`: \`${a}\`
`;return u+=`
*Showing 20 of ${Object.keys(L).length} flags*`,{message:u}}case"get":{const u=t[1];if(!u)return{error:!0,message:"❌ Flag name required: `::feature get <name>`"};const r=L[u];return r===void 0?{error:!0,message:`❌ Flag not found: \`${u}\``}:{message:`🚩 \`${u}\` = \`${r}\``}}case"set":return{message:`⚠️ **Feature flag modification**

Setting flags dynamically is not yet implemented.
Flags are loaded from \`featureFlags.js\`.`};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdModel(t){const n=t[0]?.toLowerCase();if(!n)return{message:"🤖 **LLM Model Operations**\n\nUsage:\n• `::model status` - Show model status\n• `::model download` - Download model\n• `::model clear` - Clear model cache"};switch(n){case"status":{if(!window.LLMController)return{error:!0,message:"❌ LLMController not available"};const u=window.LLMController.getStatus();let r=`🤖 **LLM Model Status**

`;return r+=`• Model: \`${u.modelId}\`
`,r+=`• Loaded: \`${u.isLoaded?"YES":"NO"}\`
`,r+=`• Cached: \`${u.isCached?"YES":"NO"}\`
`,r+=`• Generating: \`${u.isGenerating?"YES":"NO"}\`
`,r+=`• Message Count: \`${u.messageCount}\`
`,{message:r}}case"download":return window.LLMController?(window.LLMController.loadModel(),{message:"⏳ Starting model download..."}):{error:!0,message:"❌ LLMController not available"};case"clear":return{message:`⚠️ **Clear Model Cache**

Clearing browser cache requires manual action:
1. Open DevTools (F12)
2. Application → Storage → Cache Storage
3. Delete \`webllm/model\``};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdReload(){return setTimeout(()=>{window.location.reload()},500),{message:"🔄 Reloading page..."}}static cmdExport(){const t=document.getElementById("chat-messages");if(!t)return{error:!0,message:"❌ Chat canvas not found"};const u=Array.from(t.children).map(s=>({type:s.tagName.toLowerCase().includes("prompt")?"user":"assistant",message:s.getAttribute("message"),timestamp:s.getAttribute("timestamp")})),r=JSON.stringify(u,null,2),o=new Blob([r],{type:"application/json"}),a=URL.createObjectURL(o),i=document.createElement("a");return i.href=a,i.download=`chat-export-${Date.now()}.json`,i.click(),URL.revokeObjectURL(a),{message:`✅ Exported ${u.length} messages`}}static cmdTheme(t){const n=t[0]?.toLowerCase();return!n||!["dark","light"].includes(n)?{message:"🎨 **Theme Toggle**\n\nUsage: `::theme dark|light`"}:(localStorage.setItem("theme",n),{message:`🎨 Theme set to **${n}**

⚠️ Theme switching not yet implemented in UI.`})}static cmdTemplate(t){const n=t[0]?.toLowerCase();if(!n)return{message:"🧩 **Template Registry**\n\nUsage:\n• `::template list` - Registered views\n• `::template show <ID>` - Entry detail\n• `::template schema` - Grammar the model is constrained to\n• `::template render <ID> [json]` - Render without the model"};switch(n){case"list":{const u=_r();if(!u.length)return{message:`🧩 **Template Registry**

*No templates registered.*`};let r=`🧩 **Template Registry**

`;for(const o of u)r+=`• \`${o.id}\` - ${o.when}
`;return r+=`
*${u.length} registered*`,{message:r}}case"show":{const u=t[1];if(!u)return{error:!0,message:"❌ Template id required: `::template show <ID>`"};const r=Xt(u);if(!r)return{error:!0,message:`❌ Not registered: \`${u}\``};let o=`🧩 **${r.id}**

`;return o+=`• When: ${r.when}
`,o+=`• Params: \`${JSON.stringify(r.params)}\`
`,o+=`• Source: \`${r.source||"none"}\`
`,o+=`• Fetches: \`${r.fetch?"YES":"NO"}\`
`,{message:o}}case"schema":return{message:"🧩 **Routing Schema**\n\n```json\n"+JSON.stringify(Un(),null,2)+"\n```"};case"render":{const u=t[1];if(!u)return{error:!0,message:"❌ Template id required: `::template render <ID> [json]`"};if(!Xt(u))return{error:!0,message:`❌ Not registered: \`${u}\``};let r={};const o=t.slice(2).join(" ").trim();if(o)try{r=JSON.parse(o)}catch(a){return{error:!0,message:`❌ Params must be JSON: ${a.message}`}}return b.publish(g.CONVERSATION_RESPONSE_WORKFLOW,de({role:V.ASSISTANT,source:ae.SYSTEM,sinks:[q.WORKFLOW],meta:{componentId:u,params:r}})),{message:`🧩 Rendering \`${u}\`...`}}default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdAuth(t){if(!t)return{error:!0,message:"❌ Not authenticated"};let n="Unknown",u=0;if(typeof t.class=="string"){const o=un(t.class);o&&(n=o.desc,u=o.value)}else typeof t.class=="object"&&(n=t.class.desc||"Unknown",u=t.class.value||0);let r=`🔐 **Authentication Status**

`;return r+=`• Email: \`${t.email}\`
`,r+=`• Name: \`${t.first} ${t.last}\`
`,r+=`• Role: \`${t.class}\`
`,r+=`• Role Description: \`${n}\`
`,r+=`• Role Value: \`${u}\`
`,r+=`• Company: \`${t.company||"N/A"}\`
`,r+=`• Status: \`${t.status||"Unknown"}\`
`,{message:r}}}const Or=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"}));function Nr(){return`
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
  `}function Ir(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const e=localStorage.getItem(L.FF_SSE_LS_TOKEN),t=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!e,hasMvvTs:!!t});const n=document.getElementById("splash-loader"),u=document.getElementById("splash-actions");e?(console.log("[SplashRoute] Auth token found → HOME"),b.publish(g.ROUTE_NAV,{route:"home"})):t?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),b.publish(g.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),n&&(n.style.display="none"),u&&(u.style.display="flex"),document.querySelectorAll("[data-route]").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${a}`),b.publish(g.ROUTE_NAV,{route:a})})}))},4e3)}const Bn=Object.freeze(Object.defineProperty({__proto__:null,init:Ir,render:Nr},Symbol.toStringTag,{value:"Module"}));function Rt(e){return e=String(e),Math.abs(e.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0))}function Lr(){return`
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
  `}function Dr(){console.log("[SigninRoute] Initialized");const e=document.getElementById("loginForm"),t=document.getElementById("email"),n=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const o=n.type==="password"?"text":"password";n.type=o}),e?.addEventListener("submit",async o=>{o.preventDefault();const a=t.value.trim(),i=n.value;Fr(a,t)&&Pr(i,n)&&await Mr(a,i)}),document.getElementById("link--uc__underline")?.addEventListener("click",o=>{o.preventDefault(),b.publish(g.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",o=>{o.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),b.publish(g.ROUTE_NAV,{route:"signup"})})}function Fr(e,t){if(!e)return We(t,k.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,u=(e.match(/\./g)||[]).length;return n!==1||u<1?(We(t,k.get("validation_email_invalid")),!1):!0}function Pr(e,t){return e?e.length<10?(We(t,k.get("validation_password_min_length")),!1):!0:(We(t,k.get("validation_password_required")),!1)}function We(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function Mr(e,t){const n=document.querySelector(".btn");n.disabled=!0,n.textContent=k.get("loading_signing_in");try{const u=Rt(t),r=await fe.doSignin(e,u);r.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(k.get("success_welcome_back"),"success"),b.publish(g.AUTH_SIGNIN_SUCCESS,{entity:fe.getEntity()})):r.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(k.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(r.error||k.get("error_signin_failed"),"danger"),n.disabled=!1,n.textContent=k.get("sign_in").toUpperCase())}catch(u){console.error("[SigninRoute] Sign in error:",u),typeof neodigmToast<"u"&&neodigmToast.q(u.message||k.get("error_network"),"danger"),n.disabled=!1,n.textContent=k.get("sign_in").toUpperCase(),b.publish(g.AUTH_SIGNIN_FAIL,{message:u.message})}}const Ur=Object.freeze(Object.defineProperty({__proto__:null,init:Dr,render:Lr},Symbol.toStringTag,{value:"Module"}));function Gn(e){const t=[];return e.length<10&&t.push("at least 10 characters"),/[a-z]/.test(e)||t.push("1 lowercase"),/[A-Z]/.test(e)||t.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push("1 special character"),/[^\x00-\x7F]/.test(e)&&t.push("ASCII characters only"),t}function $n(e){return e.length===0?"":e.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":e.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function Br(){return`
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
  `}function Gr(){console.log("[SignupRoute] Initialized");const e=document.getElementById("signupForm"),t=e.querySelector('button[type="submit"]');rn("togglePassword","password","eyeIcon"),rn("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",u=>{u.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),b.publish(g.ROUTE_NAV,{route:"signin"})}),e.addEventListener("submit",async u=>{u.preventDefault();const r=document.getElementById("first").value.trim(),o=document.getElementById("last").value.trim(),a=document.getElementById("email").value.trim(),i=document.getElementById("company").value.trim(),s=document.getElementById("phone").value.trim(),c=document.getElementById("password").value,f=document.getElementById("confirmPassword").value,d=document.getElementById("first"),l=document.getElementById("last"),p=document.getElementById("email"),_=document.getElementById("password"),m=document.getElementById("confirmPassword");if(on(r,d,k.get("validation_first_name_required"))&&on(o,l,k.get("validation_last_name_required"))&&$r(a,p)&&Hr(c,_)){if(c!==f){Ae(m,k.get("validation_password_mismatch"));return}t.disabled=!0,t.textContent=k.get("loading_creating_account"),await Vr(r,o,a,i,s,c)}})}function rn(e,t,n){const u=document.getElementById(e),r=document.getElementById(t),o=document.getElementById(n);!u||!r||!o||u.addEventListener("click",()=>{const a=r.type==="password";r.type=a?"text":"password",a?o.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:o.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function on(e,t,n){return e?!0:(Ae(t,n),!1)}function $r(e,t){if(!e)return Ae(t,k.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,u=(e.match(/\./g)||[]).length;return n!==1||u<1?(Ae(t,k.get("validation_email_invalid")),!1):!0}function Hr(e,t){if(!e)return Ae(t,k.get("validation_password_required")),!1;const n=Gn(e);return n.length>0?(Ae(t,$n(n)),!1):!0}function Ae(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function Vr(e,t,n,u,r,o){const a=document.querySelector('button[type="submit"]');try{const i=Rt(o),s={email:n,hash:i,first:e,last:t};u&&(s.company=u),r&&(s.phone=r);const c=await fe.doSignup(s);if(c.ok)b.publish(g.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const f=c.error||c.message||k.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(f,"danger"),a.disabled=!1,a.textContent=k.get("create_account").toUpperCase(),b.publish(g.AUTH_SIGNUP_FAIL,{message:f})}}catch(i){console.error("[SignupRoute] Sign up error:",i),typeof neodigmToast<"u"&&neodigmToast.q(i.message||k.get("error_network"),"danger"),a.disabled=!1,a.textContent=k.get("create_account").toUpperCase(),b.publish(g.AUTH_SIGNUP_FAIL,{message:i.message})}}const zr=Object.freeze(Object.defineProperty({__proto__:null,init:Gr,render:Br},Symbol.toStringTag,{value:"Module"}));function qr(){return`
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
  `}function Yr(){console.log("[VerfLinkRoute] Initialized");const e=7200,t=Date.now(),n=document.getElementById("countdown-display");function u(){const o=Date.now()-t,a=Math.floor(o/1e3),i=Math.max(0,e-a),s=Math.floor(i/3600),c=Math.floor(i%3600/60),f=i%60,d=`${String(s).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(f).padStart(2,"0")}`;n&&(n.textContent=d,i<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),i===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),i===0&&(clearInterval(r),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}u();const r=setInterval(u,1e3);window.addEventListener("beforeunload",()=>{clearInterval(r)})}const Kr=Object.freeze(Object.defineProperty({__proto__:null,init:Yr,render:qr},Symbol.toStringTag,{value:"Module"})),jr="https://streamsyncengage-saas.onrender.com";class Wr{constructor(){this.baseUrl=jr}async request(t,n={}){const u=`${this.baseUrl}${t}`,r={"Content-Type":"application/json",...n.headers};try{const o=await fetch(u,{...n,headers:r});if(o.status===401||o.status===403){b.publish(g.AUTH_TOKEN_EXPIRED,{status:o.status,endpoint:t});const i=await o.json().catch(()=>({}));throw new Error(i.error||"Authentication failed")}const a=await o.json();return{ok:o.ok,status:o.status,data:a}}catch(o){throw console.error("API Request Error:",o),b.publish(g.APP_ERROR,{message:o.message,endpoint:t}),o}}async get(t){return this.request(t,{method:"GET"})}async post(t,n){return this.request(t,{method:"POST",body:JSON.stringify(n)})}async put(t,n){return this.request(t,{method:"PUT",body:JSON.stringify(n)})}async delete(t){return this.request(t,{method:"DELETE"})}async signin(t,n){return this.post("/api/acctEntity/signin",{email:t,hash:n})}async signup(t){return this.post("/api/acctEntity/signup",t)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(t){return this.post("/api/acctEntity/forgot",{email:t})}async resetHash(t,n){return this.post("/api/acctEntity/resethash",{email:t,hash:n})}async verifyAccount(t){return this.get(`/api/acctEntity/verify?CODE=${t}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(t){return this.get(`/api/acctEntity/${t}`)}async updateAccount(t,n){return this.put(`/api/acctEntity/${t}`,n)}async deleteAccount(t){return this.delete(`/api/acctEntity/${t}`)}async ping(){return this.get("/ping")}}const Jr=new Wr;function Zr(){return`
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

  `}function Qr(){console.log("[ForgotRoute] Initialized");const e=document.getElementById("forgot-form"),t=document.getElementById("email");e?.addEventListener("submit",async n=>{n.preventDefault();const u=t.value.trim();Xr(u,t)&&await eo(u)})}function Xr(e,t){if(!e)return an(t,k.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,u=(e.match(/\./g)||[]).length;return n!==1||u<1?(an(t,k.get("validation_email_invalid")),!1):!0}function an(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function eo(e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent="SENDING...";try{const n=await Jr.forgotPassword(e);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(k.get("success_reset_link_sent"),"success"),b.publish(g.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||k.get("error_signin_failed"),"danger"),t.disabled=!1,t.textContent=k.get("send_reset_link").toUpperCase())}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||k.get("error_network"),"danger"),t.disabled=!1,t.textContent=k.get("send_reset_link").toUpperCase()}}const to=Object.freeze(Object.defineProperty({__proto__:null,init:Qr,render:Zr},Symbol.toStringTag,{value:"Module"}));function no(){return`
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
                value="${fe.getEntity()?.email||""}"
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
  `}function uo(){console.log("[ResethashRoute] Initialized");const e=document.getElementById("resethash-form"),t=e.querySelector('button[type="submit"]');sn("toggleNewPassword","new-password","eyeIconNew"),sn("toggleConfirmPassword","confirm-password","eyeIconConfirm"),e?.addEventListener("submit",async n=>{n.preventDefault();const u=e.email.value.trim(),r=e.newPassword.value,o=e.confirmPassword.value,a=document.getElementById("new-password"),i=document.getElementById("confirm-password");if(!r){ye(a,k.get("validation_new_password_required"));return}const s=Gn(r);if(s.length>0){ye(a,$n(s));return}if(!o){ye(i,k.get("validation_new_password_required"));return}if(r!==o){ye(i,k.get("validation_password_mismatch"));return}t.disabled=!0,t.textContent=k.get("loading_resetting_password");try{const c=Rt(r),f=await fe.doResetHash(u,c);f.ok?(typeof neodigmToast<"u"&&neodigmToast.q(k.get("success_password_reset"),"success"),b.publish(g.AUTH_RESETHASH_SUCCESS,{email:u})):(ye(a,f.error||k.get("error_signin_failed")),t.disabled=!1,t.textContent=k.get("update_password").toUpperCase())}catch(c){console.error("[ResethashRoute] Reset password error:",c),ye(a,c.message||k.get("error_network")),t.disabled=!1,t.textContent=k.get("update_password").toUpperCase()}})}function sn(e,t,n){const u=document.getElementById(e),r=document.getElementById(t),o=document.getElementById(n);!u||!r||!o||u.addEventListener("click",()=>{const a=r.type==="password";r.type=a?"text":"password",a?o.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:o.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function ye(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}const ro=Object.freeze(Object.defineProperty({__proto__:null,init:uo,render:no},Symbol.toStringTag,{value:"Module"}));class Xe{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"SILOS",caption:"Silos",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Data silo management",secondary:[{token:"CACHE",caption:"Cache",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Cache management and statistics",secondary:[]},{token:"LIFECYCLE",caption:"Lifecycle",enabled:!0,icon:"fas fa-recycle",admin_role:!1,tagline:"Data lifecycle and retention policies",secondary:[]}]},{token:"NOTIFICATIONS",caption:"Notifications",enabled:!0,icon:"fas fa-bell",admin_role:!1,tagline:"Notification management",secondary:[{token:"BELL_DRAWER",caption:"Bell Drawer",enabled:!0,icon:"fas fa-inbox",admin_role:!1,tagline:"Notification drawer configuration",secondary:[]},{token:"WEB_HOOKS",caption:"Web Hooks",enabled:!0,icon:"fas fa-webhook",admin_role:!1,tagline:"Webhook configuration and monitoring",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"fas fa-chart-line",admin_role:!1,tagline:"User engagement tools",secondary:[{token:"AB_TESTS",caption:"A/B Tests",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"FEEDBACK",caption:"Feedback",enabled:!0,icon:"fas fa-comments",admin_role:!1,tagline:"User feedback collection",secondary:[]},{token:"GUIDED_TOURS",caption:"Guided Tours",enabled:!0,icon:"fas fa-route",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"fas fa-clipboard-list",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]},{token:"SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"fas fa-images",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"SURVEYS",caption:"Surveys",enabled:!0,icon:"fas fa-poll",admin_role:!1,tagline:"Survey campaigns and analytics",secondary:[]},{token:"VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"fas fa-voicemail",admin_role:!1,tagline:"Voice message management",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static setAppToken(t){this.#t[t]||console.warn(`[NavMetaManager] Unknown app token: ${t}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=t,console.log(`[NavMetaManager] App token set: ${t}`)}static getAppToken(){return this.#e}static#n(t){if(!t)return t;const n=t.token.toLowerCase(),u=`nav_${n}`,r=`nav_${n}_tagline`,o=k.get(u)||t.caption,a=k.get(r)||t.tagline;return{...t,caption:o,tagline:a,secondary:t.secondary?t.secondary.map(i=>this.#n(i)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(n=>this.#n(n)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const t=this.getPrimaryNav(),n=[];return t.forEach(u=>{n.push(u),u.secondary&&u.secondary.length>0&&n.push(...u.secondary)}),n}static getNavByToken(t){return this.getFlattenedNav().find(u=>u.token===t)||null}static getAdminNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(t="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const n=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,u=await fetch(`${t}/coreMeta?meta_token=${n}`);if(!u.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${u.status}), using static config`),this.getPrimaryNav();const r=await u.json();return r.ok&&r.data&&r.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${n}`),r.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(n){return console.error("[NavMetaManager] Error fetching from coreMeta:",n),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:Xe});class oo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const t=Xe.getPrimaryNav();t&&t.length>0?(this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const t=this.getAttribute("data-buttons");if(t)try{this.buttons=JSON.parse(t);const n=this.buttons.find(u=>u.selected);this.selectedPrimaryToken=n?n.token:this.buttons[0]?.token||null}catch(n){console.error("[M5TPrimaryNav] Error parsing buttons:",n),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(n=>n.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(t,n){if(n==="primary"){const u=this.buttons.find(r=>r.token===t);return{caption:u?.caption||"",tagline:u?.tagline||""}}else for(const u of this.buttons)if(u.secondary){const r=u.secondary.find(o=>o.token===t);if(r)return{caption:r.caption||"",tagline:r.tagline||""}}return{caption:"",tagline:""}}render(){const t=this.getSecondaryButtons(),n=t.length>0;this.shadowRoot.innerHTML=`
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
          grid-template-areas: "logo ${this.buttons.map((u,r)=>`btn${r}`).join(" ")}";
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
          ${this.buttons.map((u,r)=>this.renderButton(u,r,"primary")).join("")}
        </nav>
        <nav class="secondary-nav">
          ${n?t.map((u,r)=>this.renderButton(u,r,"secondary")).join(""):""}
        </nav>
      </div>
    `}renderButton(t,n,u="primary"){const r=u==="primary"?t.token===this.selectedPrimaryToken:!1,o=typeof t.count=="number"&&t.count!==null&&t.count!==void 0,a=t.icon&&t.icon.trim()!=="",i=t.tagline&&t.tagline.trim()!=="";return`
      <button
        class="nav-button ${r?"selected":""}"
        data-token="${t.token}"
        data-level="${u}"
        data-admin="${t.admin_role||!1}"
        ${t.enabled?"":"disabled"}
        ${i?`title="${t.tagline}"`:""}
        style="grid-area: ${u==="primary"?`btn${n}`:"auto"}"
      >
        ${a?`<i class="${t.icon} nav-button-icon"></i>`:""}
        <span>${t.caption}</span>
        ${o?`<span class="count-badge">${t.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(u=>{const r=u.getAttribute("data-token"),o=u.getAttribute("data-level");u.addEventListener("click",a=>{r&&!a.currentTarget.disabled&&!this.longTapFired&&(o==="primary"?this.selectPrimaryButton(r):this.selectSecondaryButton(r)),this.longTapFired=!1}),u.addEventListener("dblclick",a=>{if(r&&!a.currentTarget.disabled){const i=this.getButtonData(r,o);console.log("[M5TPrimaryNav] Button double-clicked:",r),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:r,level:o,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))}}),u.addEventListener("mouseenter",a=>{if(r&&!a.currentTarget.disabled){const i=this.getButtonData(r,o);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:r,level:o,caption:i.caption,tagline:i.tagline,action:"enter",timestamp:Date.now()}}))}}),u.addEventListener("mouseleave",a=>{if(r&&!a.currentTarget.disabled){const i=this.getButtonData(r,o);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:r,level:o,caption:i.caption,tagline:i.tagline,action:"leave",timestamp:Date.now()}}))}}),u.addEventListener("mousedown",a=>{r&&!a.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const i=this.getButtonData(r,o);console.log("[M5TPrimaryNav] Button long-tap:",r),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:r,level:o,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),u.addEventListener("mouseup",a=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),u.addEventListener("mouseleave",a=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const n=this.shadowRoot.querySelector(".logo");n&&n.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(t){const n=this.buttons.find(r=>r.token===t),u=this.getButtonData(t,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,level:"primary",caption:u.caption,tagline:u.tagline,hasSecondary:(n?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==t&&(this.selectedPrimaryToken=t,this.render(),this.attachEventListeners())}selectSecondaryButton(t){const n=this.getButtonData(t,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:n.caption,tagline:n.tagline,timestamp:Date.now()}}))}updateButtons(t){this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(t,n,u="primary"){let r;u==="primary"?r=this.buttons.find(o=>o.token===t):r=this.getSecondaryButtons().find(a=>a.token===t),r&&(r.count=n,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",oo);class ao extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp"]}attributeChangedCallback(t,n,u){n!==u&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const t=this.getAttribute("timestamp");return t||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}escapeHtml(t){const n=document.createElement("div");return n.textContent=t,n.innerHTML}render(){const t=this.getMessage(),n=this.getTimestamp(),u=this.shouldShowTimestamp();this.shadowRoot.innerHTML=`
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
    `}}customElements.define("m5t-chat-prompt",ao);class io extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.attachEventListeners()}getPlaceholder(){return this.getAttribute("placeholder")||"Type your message..."}getMaxRows(){return parseInt(this.getAttribute("max-rows"))||5}render(){const t=this.getPlaceholder(),n=this.getMaxRows();this.shadowRoot.innerHTML=`
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
    `}attachEventListeners(){const t=this.shadowRoot.getElementById("prompt-textarea"),n=this.shadowRoot.getElementById("send-btn"),u=this.shadowRoot.getElementById("cancel-btn");!t||!n||!u||(t.addEventListener("input",()=>{this.autoExpandTextarea(t)}),t.addEventListener("keydown",r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),this.handleSend())}),n.addEventListener("click",()=>{this.handleSend()}),u.addEventListener("click",()=>{this.handleCancel()}))}autoExpandTextarea(t){t.style.height="auto",t.style.height=t.scrollHeight+"px"}handleSend(){const t=this.shadowRoot.getElementById("prompt-textarea");if(!t)return;const n=t.value.trim();if(!n){console.warn("[M5TChatPromptArea] Cannot send empty message");return}const u=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),r={message:n,timestamp:u,pubsubTopic:"CONVERSATION.PROMPT.AGENT_CANVAS"};console.log("[M5TChatPromptArea] Dispatching message-sent event:",r),t.value="",t.style.height="auto",this.dispatchEvent(new CustomEvent("message-sent",{bubbles:!0,composed:!0,detail:r}))}handleCancel(){const t=this.shadowRoot.getElementById("prompt-textarea");t&&(t.value="",t.style.height="auto",console.log("[M5TChatPromptArea] Input cancelled"),this.dispatchEvent(new CustomEvent("message-cancelled",{bubbles:!0,composed:!0})))}getMessage(){const t=this.shadowRoot.getElementById("prompt-textarea");return t?t.value:""}setMessage(t){const n=this.shadowRoot.getElementById("prompt-textarea");n&&(n.value=t,this.autoExpandTextarea(n))}clear(){this.handleCancel()}focus(){const t=this.shadowRoot.getElementById("prompt-textarea");t&&t.focus()}}customElements.define("m5t-chat-prompt-area",io);let qe=null,At=null;function so(e){At=Promise.resolve().then(e).then(t=>(qe=t,t)).catch(t=>(console.warn("[M5TChatResponse] markdown renderer failed to load - falling back to plain text",t),null))}function Hn(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}async function co(e){if(!qe&&At&&await At,qe)try{return qe(e)}catch(t){console.warn("[M5TChatResponse] markdown render failed - falling back to plain text",t)}return Hn(e).replace(/\n/g,"<br>")}const lo=e=>(globalThis.requestAnimationFrame||(t=>setTimeout(t,16)))(e),fo=`
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
`;class ho extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._built=!1,this._pending=!1,this._painted=null}static get observedAttributes(){return["message","timestamp","show-timestamp","avatar","show-avatar"]}connectedCallback(){this.buildShell(),this.paint()}attributeChangedCallback(t,n,u){if(!(n===u||!this._built)){if(t==="message"){this.schedulePaint();return}if(t==="avatar"||t==="show-avatar"){this.buildShell(),this._painted=null,this.paint();return}this.paintTimestamp()}}getMessage(){return this.getAttribute("message")||""}getTimestamp(){return this.getAttribute("timestamp")||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}getAvatar(){return this.getAttribute("avatar")||""}shouldShowAvatar(){return this.getAttribute("show-avatar")==="true"&&!!this.getAvatar()}buildShell(){const t=this.shouldShowAvatar()?`<img src="${Hn(this.getAvatar())}" alt="Avatar" class="avatar">`:"";this.shadowRoot.innerHTML=`
      <style>${fo}</style>
      <div class="bubble-wrapper">
        ${t}
        <div>
          <div class="bubble-content"></div>
          <div class="bubble-timestamp"></div>
        </div>
      </div>
    `,this._content=this.shadowRoot.querySelector(".bubble-content"),this._timestamp=this.shadowRoot.querySelector(".bubble-timestamp"),this._built=!0,this.paintTimestamp()}paintTimestamp(){this._timestamp&&(this._timestamp.textContent=this.getTimestamp(),this._timestamp.hidden=!this.shouldShowTimestamp())}schedulePaint(){this._pending||(this._pending=!0,lo(()=>{this._pending=!1,this.paint()}))}async paint(){if(!this._built||!this._content)return;const t=this.getMessage();if(t===this._painted||t===""&&this._painted===null)return;this._painted=t;const n=await co(t);this._painted===t&&(this._content.innerHTML=n)}}customElements.define("m5t-chat-response",ho);const po="CONVERSATION.PROMPT.AGENT_CANVAS",_o=`
  :host {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 92%;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .bubble-content {
    background: #242424;
    color: #e4e4e4;
    border: 1px solid #3a3a3a;
    border-left: 3px solid #edba08;
    border-radius: 4px 18px 18px 4px;
    padding: 1rem 1.25rem;
    font-size: 0.95rem;
    line-height: 1.5;
    word-wrap: break-word;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  /* A view that failed to hydrate - phase comes from the conversation envelope */
  :host([phase="error"]) .bubble-content {
    border-color: #DD4124;
    border-left-color: #DD4124;
    background: #2d2020;
  }

  .bubble-content h1,
  .bubble-content h2,
  .bubble-content h3 {
    margin: 0.5em 0 0.25em 0;
    color: #edba08;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .bubble-content h1 { font-size: 1.2em; }
  .bubble-content h2 { font-size: 1.1em; }
  .bubble-content h3 { font-size: 1em; }

  .bubble-content p { margin: 0.5em 0; }
  .bubble-content p:first-child { margin-top: 0; }
  .bubble-content p:last-child { margin-bottom: 0; }

  /* Tables are the common case - let them scroll rather than blow out the bubble */
  .bubble-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.75em 0;
    font-size: 0.9em;
  }

  .bubble-content th {
    text-align: left;
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 0.5px;
    color: #a8a8a8;
    border-bottom: 1px solid #3a3a3a;
    padding: 0.5em 0.75em;
  }

  .bubble-content td {
    padding: 0.5em 0.75em;
    border-bottom: 1px solid #2d2d2d;
  }

  .bubble-content tr:hover td { background: #2d2d2d; }

  .table-scroll { overflow-x: auto; }

  .bubble-content code {
    background: #1a1a1a;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    color: #92a8d1;
  }

  .bubble-content ul,
  .bubble-content ol { margin: 0.5em 0; padding-left: 1.5em; }

  .bubble-content li { margin: 0.25em 0; }

  .bubble-content a { color: #92a8d1; text-decoration: underline; }
  .bubble-content a:hover { color: #edba08; }

  /* Conversational affordance - a link that asks the next question */
  .bubble-content [data-n55-prompt] {
    cursor: pointer;
    color: #92a8d1;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.3s ease;
  }

  .bubble-content [data-n55-prompt]:hover { color: #edba08; }

  .bubble-content [data-n55-prompt]:focus-visible {
    outline: 2px solid #edba08;
    outline-offset: 2px;
    border-radius: 2px;
  }

  .bubble-timestamp {
    font-size: 0.75rem;
    color: #a8a8a8;
    margin-top: 0.25rem;
    padding: 0 0.5rem;
    text-align: left;
  }

  .bubble-timestamp[hidden] { display: none; }

  @media (max-width: 768px) {
    :host { max-width: 100%; }
    .bubble-content { padding: 0.75rem 1rem; font-size: 0.9rem; }
  }
`;class go extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._built=!1,this._html="",this._meta={}}static get observedAttributes(){return["timestamp","show-timestamp"]}connectedCallback(){this.buildShell(),this.paint()}attributeChangedCallback(t,n,u){n===u||!this._built||this.paintTimestamp()}setContent(t,n={}){this._html=String(t??""),this._meta=n??{},n.templateId&&this.setAttribute("template-id",n.templateId),this.paint()}getTimestamp(){return this.getAttribute("timestamp")||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}buildShell(){this._built||(this.shadowRoot.innerHTML=`
      <style>${_o}</style>
      <div>
        <div class="bubble-content"></div>
        <div class="bubble-timestamp"></div>
      </div>
    `,this._content=this.shadowRoot.querySelector(".bubble-content"),this._timestamp=this.shadowRoot.querySelector(".bubble-timestamp"),this._built=!0,this.shadowRoot.addEventListener("click",this.handleAction),this.shadowRoot.addEventListener("keydown",this.handleKey),this.paintTimestamp())}paintTimestamp(){this._timestamp&&(this._timestamp.textContent=this.getTimestamp(),this._timestamp.hidden=!this.shouldShowTimestamp())}paint(){if(!(!this._built||!this._content)){this._content.innerHTML=this._html;for(const t of this._content.querySelectorAll("[data-n55-prompt]"))t.hasAttribute("tabindex")||t.setAttribute("tabindex","0"),!t.hasAttribute("role")&&t.tagName!=="A"&&t.tagName!=="BUTTON"&&t.setAttribute("role","button")}}handleKey=t=>{if(t.key!=="Enter"&&t.key!==" ")return;const n=t.target?.closest?.("[data-n55-prompt]");n&&(t.preventDefault(),this.fireAction(n))};handleAction=t=>{const n=t.target?.closest?.("[data-n55-prompt]");n&&(t.preventDefault(),this.fireAction(n))};fireAction(t){const n=t.getAttribute("data-n55-prompt");n&&this.dispatchEvent(new CustomEvent("workflow-action",{bubbles:!0,composed:!0,detail:{pubsubTopic:t.getAttribute("data-n55-topic")||po,message:n,source:"user",meta:{origin:"template-link",templateId:this._meta.templateId??this.getAttribute("template-id")??null}}}))}}customElements.define("m5t-chat-workflow",go);pr({id:"ACCOUNT_SUMMARY",when:"the user asks about their own account, profile, role, or plan",render:()=>{const e=window.AuthController?.getEntity?.();return e?`
      <h3>Account</h3>
      <div class="table-scroll">
        <table>
          <tbody>
            ${[["Name",`${e.first??""} ${e.last??""}`.trim()],["Email",e.email],["Company",e.company||"—"],["Role",e.class],["Status",e.status]].map(([n,u])=>`
              <tr>
                <th scope="row">${lt(n)}</th>
                <td>${lt(u)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <p>
        <a data-n55-prompt="What can I do with the ${lt(e.class)} role?">what this role allows</a>
        &nbsp;·&nbsp;
        <a data-n55-prompt="How do I change my password?">change password</a>
      </p>
    `:"<p>No account is signed in.</p>"},transcript:()=>{const e=window.AuthController?.getEntity?.();return e?`Showed the user their account summary: ${e.email}, role ${e.class}, status ${e.status}. They can see it on screen.`:"Tried to show an account summary, but nobody is signed in."}});console.log("[Templates] Registered");so(async()=>{const{default:e}=await J(async()=>{const{default:n}=await Promise.resolve().then(()=>hs);return{default:n}},void 0),t=new e({html:!1,breaks:!0,linkify:!0,typographer:!0});return n=>t.render(n)});J(async()=>{const{search:e}=await Promise.resolve().then(()=>ws);return{search:e}},void 0).then(({search:e})=>hr((t,n)=>e(n,t))).catch(e=>console.warn("[HomeRoute] JMESPath unavailable - source falls back to dot paths",e));ze.register("templates",()=>Er());const cn="llm-status";Xe.setAppToken("client-saas");function mo(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-buttons='${Xe.getPrimaryNavJSON()}'
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
  `}function bo(){console.log("[HomeRoute] Initialized"),b.subscribe(g.CANVAS_DO_SCROLL,(e,t)=>{console.log("[HomeRoute] CANVAS.DO.SCROLL triggered"),Eo()}),b.subscribe(g.LLM_STATUS,(e,t)=>{console.log("[HomeRoute] LLM_STATUS:",t),t&&t.text&&b.publish(g.CONVERSATION_RESPONSE_CANVAS,de({id:cn,turnId:cn,role:V.ASSISTANT,source:ae.SYSTEM,text:`🔄 ${t.text}`,phase:Y.DELTA,meta:{progress:t.progressPercent}}))})}function Eo(){setTimeout(()=>{const e=document.getElementById("chat-messages");e?(e.scrollTo({top:0,behavior:"smooth"}),console.log("[HomeRoute] Scrolled chat-messages to bottom (top: 0 with column-reverse)")):console.warn("[HomeRoute] chat-messages element not found")},80)}function Ot(e,t="user",n="canvas"){const u=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),r={message:e,timestamp:u};if(t==="user"||t==="prompt")switch(n.toUpperCase()){case"CANVAS":b.publish(g.CONVERSATION_PROMPT_CANVAS,r);break;case"AGENT":b.publish(g.CONVERSATION_PROMPT_AGENT,r);break;case"AGENT_CANVAS":b.publish(g.CONVERSATION_PROMPT_AGENT_CANVAS,r);break;case"STAGE":b.publish(g.CONVERSATION_PROMPT_STAGE,r);break;default:b.publish(g.CONVERSATION_PROMPT_CANVAS,r)}else switch(n.toUpperCase()){case"CANVAS":b.publish(g.CONVERSATION_RESPONSE_CANVAS,r);break;case"WORKFLOW":b.publish(g.CONVERSATION_RESPONSE_WORKFLOW,r);break;default:b.publish(g.CONVERSATION_RESPONSE_CANVAS,r)}}function yo(e=10,t=500){const n=["Hey, how's it going?","Can you help me with something?","What's the weather like today?","I need assistance with my account","Tell me a joke!","How do I reset my password?","What are your hours?","Thanks for your help!","I have a question about billing","Can you explain this feature?","How do I upgrade my plan?","What's new in the latest update?","I'm having trouble logging in","Where can I find the settings?","How secure is my data?","Do you offer customer support?","What payment methods do you accept?","Can I cancel my subscription?","How do I export my data?","Is there a mobile app?"],u=["I'm doing great! How can I help you today?","Of course! I'd be happy to assist you.","Let me check that for you...","Here's what I found:","That's a great question!","I can help you with that.","Let me walk you through the steps.","You're very welcome!","I understand your concern. Let me explain...","That feature is located in the settings menu.","Your account is fully secured with encryption.","We're available 24/7 to help you!","We accept all major credit cards and PayPal.","You can upgrade anytime from your account settings.","The latest update includes several new features!","Try resetting your password using the forgot password link.","Your data is encrypted and stored securely.","Yes! Our mobile app is available for iOS and Android.","You can export your data from the account settings.","Absolutely! You can cancel anytime with no fees."];let r=0;const o=setInterval(()=>{if(r>=e){clearInterval(o),console.log(`[Test] Generated ${e} random bubbles`);return}const a=Math.random()>.5,i=a?"user":"assistant",s=a?n:u,c=s[Math.floor(Math.random()*s.length)];Ot(c,i),r++,console.log(`[Test] Added bubble ${r}/${e} (${i})`)},t)}let Oe=null;function vo(e=1e3){if(Oe){console.log("[Test] Bubble stream already running. Stop it first with stopBubbleStream()");return}console.log("[Test] Starting continuous bubble stream..."),Oe=setInterval(()=>{const t=Math.random()>.5,n=t?["Quick message!","Another one!","Test bubble","Hello there!","Random user text"]:["Response here","Got it!","Processing...","Here's the answer","Understood!"],u=n[Math.floor(Math.random()*n.length)];Ot(u,t?"user":"assistant")},e)}function Ao(){Oe?(clearInterval(Oe),Oe=null,console.log("[Test] Bubble stream stopped")):console.log("[Test] No bubble stream running")}function To(){const e=document.getElementById("chat-messages");e&&(e.innerHTML="",console.log("[Test] All bubbles cleared"))}window.addChatBubble=Ot;window.generateRandomBubbles=yo;window.startBubbleStream=vo;window.stopBubbleStream=Ao;window.clearAllBubbles=To;console.log("[HomeRoute] Test functions available:");console.log("  - window.generateRandomBubbles(count, delay) - Generate N bubbles with delay");console.log("  - window.startBubbleStream(delayMs) - Continuous bubble generation");console.log("  - window.stopBubbleStream() - Stop continuous generation");console.log("  - window.clearAllBubbles() - Remove all bubbles");console.log("  - window.addChatBubble(message, type) - Add single bubble");const So=Object.freeze(Object.defineProperty({__proto__:null,init:bo,render:mo},Symbol.toStringTag,{value:"Module"}));function xo(){return`
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
  `}function wo(){console.log("[SignoutRoute] Initialized");const e=document.getElementById("confirm-signout-btn");e?.addEventListener("click",async()=>{e.disabled=!0,e.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await fe.doSignout()})}const Co=Object.freeze(Object.defineProperty({__proto__:null,init:wo,render:xo},Symbol.toStringTag,{value:"Module"})),ln={};function ko(e){let t=ln[e];if(t)return t;t=ln[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);t.push(u)}for(let n=0;n<e.length;n++){const u=e.charCodeAt(n);t[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return t}function Te(e,t){typeof t!="string"&&(t=Te.defaultChars);const n=ko(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let r="";for(let o=0,a=u.length;o<a;o+=3){const i=parseInt(u.slice(o+1,o+3),16);if(i<128){r+=n[i];continue}if((i&224)===192&&o+3<a){const s=parseInt(u.slice(o+4,o+6),16);if((s&192)===128){const c=i<<6&1984|s&63;c<128?r+="��":r+=String.fromCharCode(c),o+=3;continue}}if((i&240)===224&&o+6<a){const s=parseInt(u.slice(o+4,o+6),16),c=parseInt(u.slice(o+7,o+9),16);if((s&192)===128&&(c&192)===128){const f=i<<12&61440|s<<6&4032|c&63;f<2048||f>=55296&&f<=57343?r+="���":r+=String.fromCharCode(f),o+=6;continue}}if((i&248)===240&&o+9<a){const s=parseInt(u.slice(o+4,o+6),16),c=parseInt(u.slice(o+7,o+9),16),f=parseInt(u.slice(o+10,o+12),16);if((s&192)===128&&(c&192)===128&&(f&192)===128){let d=i<<18&1835008|s<<12&258048|c<<6&4032|f&63;d<65536||d>1114111?r+="����":(d-=65536,r+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),o+=9;continue}}r+="�"}return r})}Te.defaultChars=";/?:@&=+$,#";Te.componentChars="";const dn={};function Ro(e){let t=dn[e];if(t)return t;t=dn[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?t.push(u):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Pe(e,t,n){typeof t!="string"&&(n=t,t=Pe.defaultChars),typeof n>"u"&&(n=!0);const u=Ro(t);let r="";for(let o=0,a=e.length;o<a;o++){const i=e.charCodeAt(o);if(n&&i===37&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){r+=e.slice(o,o+3),o+=2;continue}if(i<128){r+=u[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&o+1<a){const s=e.charCodeAt(o+1);if(s>=56320&&s<=57343){r+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[o])}return r}Pe.defaultChars=";/?:@&=+$,-_.!~*'()#";Pe.componentChars="-_.!~*'()";function Nt(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function Je(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Oo=/^([a-z0-9.+-]+:)/i,No=/:[0-9]*$/,Io=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Lo=["<",">",'"',"`"," ","\r",`
`,"	"],Do=["{","}","|","\\","^","`"].concat(Lo),Fo=["'"].concat(Do),fn=["%","/","?",";","#"].concat(Fo),hn=["/","?","#"],Po=255,pn=/^[+a-z0-9A-Z_-]{0,63}$/,Mo=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,_n={javascript:!0,"javascript:":!0},gn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function It(e,t){if(e&&e instanceof Je)return e;const n=new Je;return n.parse(e,t),n}Je.prototype.parse=function(e,t){let n,u,r,o=e;if(o=o.trim(),!t&&e.split("#").length===1){const c=Io.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let a=Oo.exec(o);if(a&&(a=a[0],n=a.toLowerCase(),this.protocol=a,o=o.substr(a.length)),(t||a||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=o.substr(0,2)==="//",r&&!(a&&_n[a])&&(o=o.substr(2),this.slashes=!0)),!_n[a]&&(r||a&&!gn[a])){let c=-1;for(let _=0;_<hn.length;_++)u=o.indexOf(hn[_]),u!==-1&&(c===-1||u<c)&&(c=u);let f,d;c===-1?d=o.lastIndexOf("@"):d=o.lastIndexOf("@",c),d!==-1&&(f=o.slice(0,d),o=o.slice(d+1),this.auth=f),c=-1;for(let _=0;_<fn.length;_++)u=o.indexOf(fn[_]),u!==-1&&(c===-1||u<c)&&(c=u);c===-1&&(c=o.length),o[c-1]===":"&&c--;const l=o.slice(0,c);o=o.slice(c),this.parseHost(l),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const _=this.hostname.split(/\./);for(let m=0,E=_.length;m<E;m++){const T=_[m];if(T&&!T.match(pn)){let A="";for(let S=0,x=T.length;S<x;S++)T.charCodeAt(S)>127?A+="x":A+=T[S];if(!A.match(pn)){const S=_.slice(0,m),x=_.slice(m+1),C=T.match(Mo);C&&(S.push(C[1]),x.unshift(C[2])),x.length&&(o=x.join(".")+o),this.hostname=S.join(".");break}}}}this.hostname.length>Po&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const i=o.indexOf("#");i!==-1&&(this.hash=o.substr(i),o=o.slice(0,i));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),gn[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Je.prototype.parseHost=function(e){let t=No.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const Uo=Object.freeze(Object.defineProperty({__proto__:null,decode:Te,encode:Pe,format:Nt,parse:It},Symbol.toStringTag,{value:"Module"})),Vn=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,zn=/[\0-\x1F\x7F-\x9F]/,Bo=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Lt=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,qn=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Yn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Go=Object.freeze(Object.defineProperty({__proto__:null,Any:Vn,Cc:zn,Cf:Bo,P:Lt,S:qn,Z:Yn},Symbol.toStringTag,{value:"Module"})),$o=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Ho=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var dt;const Vo=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),zo=(dt=String.fromCodePoint)!==null&&dt!==void 0?dt:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function qo(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Vo.get(e))!==null&&t!==void 0?t:e}var $;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})($||($={}));const Yo=32;var _e;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(_e||(_e={}));function Tt(e){return e>=$.ZERO&&e<=$.NINE}function Ko(e){return e>=$.UPPER_A&&e<=$.UPPER_F||e>=$.LOWER_A&&e<=$.LOWER_F}function jo(e){return e>=$.UPPER_A&&e<=$.UPPER_Z||e>=$.LOWER_A&&e<=$.LOWER_Z||Tt(e)}function Wo(e){return e===$.EQUALS||jo(e)}var G;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(G||(G={}));var le;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(le||(le={}));class Jo{constructor(t,n,u){this.decodeTree=t,this.emitCodePoint=n,this.errors=u,this.state=G.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=le.Strict}startEntity(t){this.decodeMode=t,this.state=G.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case G.EntityStart:return t.charCodeAt(n)===$.NUM?(this.state=G.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=G.NamedEntity,this.stateNamedEntity(t,n));case G.NumericStart:return this.stateNumericStart(t,n);case G.NumericDecimal:return this.stateNumericDecimal(t,n);case G.NumericHex:return this.stateNumericHex(t,n);case G.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|Yo)===$.LOWER_X?(this.state=G.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=G.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,u,r){if(n!==u){const o=u-n;this.result=this.result*Math.pow(r,o)+parseInt(t.substr(n,o),r),this.consumed+=o}}stateNumericHex(t,n){const u=n;for(;n<t.length;){const r=t.charCodeAt(n);if(Tt(r)||Ko(r))n+=1;else return this.addToNumericResult(t,u,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(t,u,n,16),-1}stateNumericDecimal(t,n){const u=n;for(;n<t.length;){const r=t.charCodeAt(n);if(Tt(r))n+=1;else return this.addToNumericResult(t,u,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(t,u,n,10),-1}emitNumericEntity(t,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===$.SEMI)this.consumed+=1;else if(this.decodeMode===le.Strict)return 0;return this.emitCodePoint(qo(this.result),this.consumed),this.errors&&(t!==$.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:u}=this;let r=u[this.treeIndex],o=(r&_e.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const a=t.charCodeAt(n);if(this.treeIndex=Zo(u,r,this.treeIndex+Math.max(1,o),a),this.treeIndex<0)return this.result===0||this.decodeMode===le.Attribute&&(o===0||Wo(a))?0:this.emitNotTerminatedNamedEntity();if(r=u[this.treeIndex],o=(r&_e.VALUE_LENGTH)>>14,o!==0){if(a===$.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==le.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:u}=this,r=(u[n]&_e.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,u){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[t]&~_e.VALUE_LENGTH:r[t+1],u),n===3&&this.emitCodePoint(r[t+2],u),u}end(){var t;switch(this.state){case G.NamedEntity:return this.result!==0&&(this.decodeMode!==le.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case G.NumericDecimal:return this.emitNumericEntity(0,2);case G.NumericHex:return this.emitNumericEntity(0,3);case G.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case G.EntityStart:return 0}}}function Kn(e){let t="";const n=new Jo(e,u=>t+=zo(u));return function(r,o){let a=0,i=0;for(;(i=r.indexOf("&",i))>=0;){t+=r.slice(a,i),n.startEntity(o);const c=n.write(r,i+1);if(c<0){a=i+n.end();break}a=i+c,i=c===0?a+1:a}const s=t+r.slice(a);return t="",s}}function Zo(e,t,n,u){const r=(t&_e.BRANCH_LENGTH)>>7,o=t&_e.JUMP_TABLE;if(r===0)return o!==0&&u===o?n:-1;if(o){const s=u-o;return s<0||s>=r?-1:e[n+s]-1}let a=n,i=a+r-1;for(;a<=i;){const s=a+i>>>1,c=e[s];if(c<u)a=s+1;else if(c>u)i=s-1;else return e[s+r]}return-1}const jn=Kn($o);Kn(Ho);function Qo(e,t=le.Legacy){return jn(e,t)}function Xo(e){return jn(e,le.Strict)}function ea(e){return Object.prototype.toString.call(e)}function Dt(e){return ea(e)==="[object String]"}const ta=Object.prototype.hasOwnProperty;function na(e,t){return ta.call(e,t)}function et(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){e[u]=n[u]})}}),e}function Wn(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Ft(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Ne(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const Jn=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,ua=/&([a-z#][a-z0-9]{1,31});/gi,ra=new RegExp(Jn.source+"|"+ua.source,"gi"),oa=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function aa(e,t){if(t.charCodeAt(0)===35&&oa.test(t)){const u=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Ft(u)?Ne(u):e}const n=Qo(e);return n!==e?n:e}function ia(e){return e.indexOf("\\")<0?e:e.replace(Jn,"$1")}function Se(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(ra,function(t,n,u){return n||aa(t,u)})}const sa=/[&<>"]/,ca=/[&<>"]/g,la={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function da(e){return la[e]}function ge(e){return sa.test(e)?e.replace(ca,da):e}const fa=/[.?*+^$[\]\\(){}|-]/g;function ha(e){return e.replace(fa,"\\$&")}function D(e){switch(e){case 9:case 32:return!0}return!1}function Ie(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Zn(e){return Lt.test(e)||qn.test(e)}function Le(e){return Zn(Ne(e))}function De(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function tt(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function mn(e){return e===32||e===9||e===10||e===13}function nt(e){let t=0;for(;t<e.length&&mn(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&mn(e.charCodeAt(n));n--);return e.slice(t,n+1)}const pa={mdurl:Uo,ucmicro:Go},_a=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Wn,asciiTrim:nt,assign:et,escapeHtml:ge,escapeRE:ha,fromCodePoint:Ne,has:na,isMdAsciiPunct:De,isPunctChar:Zn,isPunctCharCode:Le,isSpace:D,isString:Dt,isValidEntityCode:Ft,isWhiteSpace:Ie,lib:pa,normalizeReference:tt,unescapeAll:Se,unescapeMd:ia},Symbol.toStringTag,{value:"Module"}));function ga(e,t,n){let u,r,o,a;const i=e.posMax,s=e.pos;for(e.pos=t+1,u=1;e.pos<i;){if(o=e.src.charCodeAt(e.pos),o===93&&(u--,u===0)){r=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)u++;else if(n)return e.pos=s,-1}}let c=-1;return r&&(c=e.pos),e.pos=s,c}function ma(e,t,n){let u,r=t;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<n;){if(u=e.charCodeAt(r),u===10||u===60)return o;if(u===62)return o.pos=r+1,o.str=Se(e.slice(t+1,r)),o.ok=!0,o;if(u===92&&r+1<n){r+=2;continue}r++}return o}let a=0;for(;r<n&&(u=e.charCodeAt(r),!(u===32||u<32||u===127));){if(u===92&&r+1<n){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(u===40&&(a++,a>32))return o;if(u===41){if(a===0)break;a--}r++}return t===r||a!==0||(o.str=Se(e.slice(t,r)),o.pos=r,o.ok=!0),o}function ba(e,t,n,u){let r,o=t;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)a.str=u.str,a.marker=u.marker;else{if(o>=n)return a;let i=e.charCodeAt(o);if(i!==34&&i!==39&&i!==40)return a;t++,o++,i===40&&(i=41),a.marker=i}for(;o<n;){if(r=e.charCodeAt(o),r===a.marker)return a.pos=o+1,a.str+=Se(e.slice(t,o)),a.ok=!0,a;if(r===40&&a.marker===41)return a;r===92&&o+1<n&&o++,o++}return a.can_continue=!0,a.str+=Se(e.slice(t,o)),a}const Ea=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:ma,parseLinkLabel:ga,parseLinkTitle:ba},Symbol.toStringTag,{value:"Module"})),se={};se.code_inline=function(e,t,n,u,r){const o=e[t];return"<code"+r.renderAttrs(o)+">"+ge(o.content)+"</code>"};se.code_block=function(e,t,n,u,r){const o=e[t];return"<pre"+r.renderAttrs(o)+"><code>"+ge(e[t].content)+`</code></pre>
`};se.fence=function(e,t,n,u,r){const o=e[t],a=o.info?Se(o.info).trim():"";let i="",s="";if(a){const f=a.split(/(\s+)/g);i=f[0],s=f.slice(2).join("")}let c;if(n.highlight?c=n.highlight(o.content,i,s)||ge(o.content):c=ge(o.content),c.indexOf("<pre")===0)return c+`
`;if(a){const f=o.attrIndex("class"),d=o.attrs?o.attrs.slice():[];f<0?d.push(["class",n.langPrefix+i]):(d[f]=d[f].slice(),d[f][1]+=" "+n.langPrefix+i);const l={attrs:d};return`<pre><code${r.renderAttrs(l)}>${c}</code></pre>
`}return`<pre><code${r.renderAttrs(o)}>${c}</code></pre>
`};se.image=function(e,t,n,u,r){const o=e[t];return o.attrs[o.attrIndex("alt")][1]=r.renderInlineAsText(o.children,n,u),r.renderToken(e,t,n)};se.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};se.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};se.text=function(e,t){return ge(e[t].content)};se.html_block=function(e,t){return e[t].content};se.html_inline=function(e,t){return e[t].content};function Ce(){this.rules=et({},se)}Ce.prototype.renderAttrs=function(t){let n,u,r;if(!t.attrs)return"";for(r="",n=0,u=t.attrs.length;n<u;n++)r+=" "+ge(t.attrs[n][0])+'="'+ge(t.attrs[n][1])+'"';return r};Ce.prototype.renderToken=function(t,n,u){const r=t[n];let o="";if(r.hidden)return"";r.block&&r.nesting!==-1&&n&&t[n-1].hidden&&(o+=`
`),o+=(r.nesting===-1?"</":"<")+r.tag,o+=this.renderAttrs(r),r.nesting===0&&u.xhtmlOut&&(o+=" /");let a=!1;if(r.block&&(a=!0,r.nesting===1&&n+1<t.length)){const i=t[n+1];(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===r.tag)&&(a=!1)}return o+=a?`>
`:">",o};Ce.prototype.renderInline=function(e,t,n){let u="";const r=this.rules;for(let o=0,a=e.length;o<a;o++){const i=e[o].type;typeof r[i]<"u"?u+=r[i](e,o,t,n,this):u+=this.renderToken(e,o,t)}return u};Ce.prototype.renderInlineAsText=function(e,t,n){let u="";for(let r=0,o=e.length;r<o;r++)switch(e[r].type){case"text":u+=e[r].content;break;case"image":u+=this.renderInlineAsText(e[r].children,t,n);break;case"html_inline":case"html_block":u+=e[r].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};Ce.prototype.render=function(e,t,n){let u="";const r=this.rules;for(let o=0,a=e.length;o<a;o++){const i=e[o].type;i==="inline"?u+=this.renderInline(e[o].children,t,n):typeof r[i]<"u"?u+=r[i](e,o,t,n,this):u+=this.renderToken(e,o,t,n)}return u};function K(){this.__rules__=[],this.__cache__=null}K.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};K.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){t.indexOf(u)<0&&t.push(u)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||e.__cache__[n].push(u.fn))})})};K.prototype.at=function(e,t,n){const u=this.__find__(e),r=n||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=t,this.__rules__[u].alt=r.alt||[],this.__cache__=null};K.prototype.before=function(e,t,n,u){const r=this.__find__(e),o=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};K.prototype.after=function(e,t,n,u){const r=this.__find__(e),o=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};K.prototype.push=function(e,t,n){const u=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:u.alt||[]}),this.__cache__=null};K.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!0,n.push(u)},this),this.__cache__=null,n};K.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};K.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!1,n.push(u)},this),this.__cache__=null,n};K.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function te(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}te.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,r=n.length;u<r;u++)if(n[u][0]===t)return u;return-1};te.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};te.prototype.attrSet=function(t,n){const u=this.attrIndex(t),r=[t,n];u<0?this.attrPush(r):this.attrs[u]=r};te.prototype.attrGet=function(t){const n=this.attrIndex(t);let u=null;return n>=0&&(u=this.attrs[n][1]),u};te.prototype.attrJoin=function(t,n){const u=this.attrIndex(t);u<0?this.attrPush([t,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function Qn(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Qn.prototype.Token=te;const ya=/\r\n?|\n/g,va=/\0/g;function Aa(e){let t;t=e.src.replace(ya,`
`),t=t.replace(va,"�"),e.src=t}function Ta(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Sa(e){const t=e.tokens;for(let n=0,u=t.length;n<u;n++){const r=t[n];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function xa(e){return/^<a[>\s]/i.test(e)}function wa(e){return/^<\/a\s*>/i.test(e)}function Ca(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,u=t.length;n<u;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,o=0;for(let a=r.length-1;a>=0;a--){const i=r[a];if(i.type==="link_close"){for(a--;r[a].level!==i.level&&r[a].type!=="link_open";)a--;continue}if(i.type==="html_inline"&&(xa(i.content)&&o>0&&o--,wa(i.content)&&o++),!(o>0)&&i.type==="text"&&e.md.linkify.test(i.content)){const s=i.content;let c=e.md.linkify.match(s);const f=[];let d=i.level,l=0;c.length>0&&c[0].index===0&&a>0&&r[a-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const _=c[p].url,m=e.md.normalizeLink(_);if(!e.md.validateLink(m))continue;let E=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(E)?E=e.md.normalizeLinkText("mailto:"+E).replace(/^mailto:/,""):E=e.md.normalizeLinkText(E):E=e.md.normalizeLinkText("http://"+E).replace(/^http:\/\//,"");const T=c[p].index;if(T>l){const C=new e.Token("text","",0);C.content=s.slice(l,T),C.level=d,f.push(C)}const A=new e.Token("link_open","a",1);A.attrs=[["href",m]],A.level=d++,A.markup="linkify",A.info="auto",f.push(A);const S=new e.Token("text","",0);S.content=E,S.level=d,f.push(S);const x=new e.Token("link_close","a",-1);x.level=--d,x.markup="linkify",x.info="auto",f.push(x),l=c[p].lastIndex}if(l<s.length){const p=new e.Token("text","",0);p.content=s.slice(l),p.level=d,f.push(p)}t[n].children=r=Wn(r,a,f)}}}}const Xn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,ka=/\((c|tm|r)\)/i,Ra=/\((c|tm|r)\)/ig,Oa={c:"©",r:"®",tm:"™"};function Na(e,t){return Oa[t.toLowerCase()]}function Ia(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&(u.content=u.content.replace(Ra,Na)),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function La(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&Xn.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function Da(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(ka.test(e.tokens[t].content)&&Ia(e.tokens[t].children),Xn.test(e.tokens[t].content)&&La(e.tokens[t].children))}const Fa=/['"]/,bn=/['"]/g,En="’";function $e(e,t,n,u){e[t]||(e[t]=[]),e[t].push({pos:n,ch:u})}function Pa(e,t){let n="",u=0;t.sort((r,o)=>r.pos-o.pos);for(let r=0;r<t.length;r++){const o=t[r];n+=e.slice(u,o.pos)+o.ch,u=o.pos+1}return n+e.slice(u)}function Ma(e,t){let n;const u=[],r={};for(let o=0;o<e.length;o++){const a=e[o],i=e[o].level;for(n=u.length-1;n>=0&&!(u[n].level<=i);n--);if(u.length=n+1,a.type!=="text")continue;const s=a.content;let c=0;const f=s.length;e:for(;c<f;){bn.lastIndex=c;const d=bn.exec(s);if(!d)break;let l=!0,p=!0;c=d.index+1;const _=d[0]==="'";let m=32;if(d.index-1>=0)m=s.charCodeAt(d.index-1);else for(n=o-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let E=32;if(c<f)E=s.charCodeAt(c);else for(n=o+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){E=e[n].content.charCodeAt(0);break}const T=De(m)||Le(m),A=De(E)||Le(E),S=Ie(m),x=Ie(E);if(x?l=!1:A&&(S||T||(l=!1)),S?p=!1:T&&(x||A||(p=!1)),E===34&&d[0]==='"'&&m>=48&&m<=57&&(p=l=!1),l&&p&&(l=T,p=A),!l&&!p){_&&$e(r,o,d.index,En);continue}if(p)for(n=u.length-1;n>=0;n--){let C=u[n];if(u[n].level<i)break;if(C.single===_&&u[n].level===i){C=u[n];let R,O;_?(R=t.md.options.quotes[2],O=t.md.options.quotes[3]):(R=t.md.options.quotes[0],O=t.md.options.quotes[1]),$e(r,o,d.index,O),$e(r,C.token,C.pos,R),u.length=n;continue e}}l?u.push({token:o,pos:d.index,single:_,level:i}):p&&_&&$e(r,o,d.index,En)}}Object.keys(r).forEach(function(o){e[o].content=Pa(e[o].content,r[o])})}function Ua(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!Fa.test(e.tokens[t].content)||Ma(e.tokens[t].children,e)}function Ba(e){let t,n;const u=e.tokens,r=u.length;for(let o=0;o<r;o++){if(u[o].type!=="inline")continue;const a=u[o].children,i=a.length;for(t=0;t<i;t++)a[t].type==="text_special"&&(a[t].type="text");for(t=n=0;t<i;t++)a[t].type==="text"&&t+1<i&&a[t+1].type==="text"?a[t+1].content=a[t].content+a[t+1].content:(t!==n&&(a[n]=a[t]),n++);t!==n&&(a.length=n)}}const ft=[["normalize",Aa],["block",Ta],["inline",Sa],["linkify",Ca],["replacements",Da],["smartquotes",Ua],["text_join",Ba]];function Pt(){this.ruler=new K;for(let e=0;e<ft.length;e++)this.ruler.push(ft[e][0],ft[e][1])}Pt.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,u=t.length;n<u;n++)t[n](e)};Pt.prototype.State=Qn;function ce(e,t,n,u){this.src=e,this.md=t,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let o=0,a=0,i=0,s=0,c=r.length,f=!1;a<c;a++){const d=r.charCodeAt(a);if(!f)if(D(d)){i++,d===9?s+=4-s%4:s++;continue}else f=!0;(d===10||a===c-1)&&(d!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(i),this.sCount.push(s),this.bsCount.push(0),f=!1,i=0,s=0,o=a+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ce.prototype.push=function(e,t,n){const u=new te(e,t,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u};ce.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};ce.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};ce.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const u=this.src.charCodeAt(t);if(!D(u))break}return t};ce.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!D(this.src.charCodeAt(--t)))return t+1;return t};ce.prototype.skipChars=function(t,n){for(let u=this.src.length;t<u&&this.src.charCodeAt(t)===n;t++);return t};ce.prototype.skipCharsBack=function(t,n,u){if(t<=u)return t;for(;t>u;)if(n!==this.src.charCodeAt(--t))return t+1;return t};ce.prototype.getLines=function(t,n,u,r){if(t>=n)return"";const o=new Array(n-t);for(let a=0,i=t;i<n;i++,a++){let s=0;const c=this.bMarks[i];let f=c,d;for(i+1<n||r?d=this.eMarks[i]+1:d=this.eMarks[i];f<d&&s<u;){const l=this.src.charCodeAt(f);if(D(l))l===9?s+=4-(s+this.bsCount[i])%4:s++;else if(f-c<this.tShift[i])s++;else break;f++}s>u?o[a]=new Array(s-u+1).join(" ")+this.src.slice(f,d):o[a]=this.src.slice(f,d)}return o.join("")};ce.prototype.Token=te;const Ga=65536;function ht(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];return e.src.slice(n,u)}function yn(e){const t=[],n=e.length;let u=0,r=e.charCodeAt(u),o=!1,a=0,i="";for(;u<n;)r===124&&(o?(i+=e.substring(a,u-1),a=u):(t.push(i+e.substring(a,u)),i="",a=u+1)),o=r===92,u++,r=e.charCodeAt(u);return t.push(i+e.substring(a)),t}function $a(e,t,n,u){if(t+2>n)return!1;let r=t+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let o=e.bMarks[r]+e.tShift[r];if(o>=e.eMarks[r])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58||o>=e.eMarks[r])return!1;const i=e.src.charCodeAt(o++);if(i!==124&&i!==45&&i!==58&&!D(i)||a===45&&D(i))return!1;for(;o<e.eMarks[r];){const x=e.src.charCodeAt(o);if(x!==124&&x!==45&&x!==58&&!D(x))return!1;o++}let s=ht(e,t+1),c=s.split("|");const f=[];for(let x=0;x<c.length;x++){const C=c[x].trim();if(!C){if(x===0||x===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(C))return!1;C.charCodeAt(C.length-1)===58?f.push(C.charCodeAt(0)===58?"center":"right"):C.charCodeAt(0)===58?f.push("left"):f.push("")}if(s=ht(e,t).trim(),s.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=yn(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const d=c.length;if(d===0||d!==f.length)return!1;if(u)return!0;const l=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),_=e.push("table_open","table",1),m=[t,0];_.map=m;const E=e.push("thead_open","thead",1);E.map=[t,t+1];const T=e.push("tr_open","tr",1);T.map=[t,t+1];for(let x=0;x<c.length;x++){const C=e.push("th_open","th",1);f[x]&&(C.attrs=[["style","text-align:"+f[x]]]);const R=e.push("inline","",0);R.content=c[x].trim(),R.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let A,S=0;for(r=t+2;r<n&&!(e.sCount[r]<e.blkIndent);r++){let x=!1;for(let R=0,O=p.length;R<O;R++)if(p[R](e,r,n,!0)){x=!0;break}if(x||(s=ht(e,r).trim(),!s)||e.sCount[r]-e.blkIndent>=4||(c=yn(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),S+=d-c.length,S>Ga))break;if(r===t+2){const R=e.push("tbody_open","tbody",1);R.map=A=[t+2,0]}const C=e.push("tr_open","tr",1);C.map=[r,r+1];for(let R=0;R<d;R++){const O=e.push("td_open","td",1);f[R]&&(O.attrs=[["style","text-align:"+f[R]]]);const P=e.push("inline","",0);P.content=c[R]?c[R].trim():"",P.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return A&&(e.push("tbody_close","tbody",-1),A[1]=r),e.push("table_close","table",-1),m[1]=r,e.parentType=l,e.line=r,!0}function Ha(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let u=t+1,r=u;for(;u<n;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,r=u;continue}break}e.line=r;const o=e.push("code_block","code",0);return o.content=e.getLines(t,r,4+e.blkIndent,!1)+`
`,o.map=[t,e.line],!0}function Va(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||r+3>o)return!1;const a=e.src.charCodeAt(r);if(a!==126&&a!==96)return!1;let i=r;r=e.skipChars(r,a);let s=r-i;if(s<3)return!1;const c=e.src.slice(i,r),f=e.src.slice(r,o);if(a===96&&f.indexOf(String.fromCharCode(a))>=0)return!1;if(u)return!0;let d=t,l=!1;for(;d++,!(d>=n||(r=i=e.bMarks[d]+e.tShift[d],o=e.eMarks[d],r<o&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(r)===a&&!(e.sCount[d]-e.blkIndent>=4)&&(r=e.skipChars(r,a),!(r-i<s)&&(r=e.skipSpaces(r),!(r<o)))){l=!0;break}s=e.sCount[t],e.line=d+(l?1:0);const p=e.push("fence","code",0);return p.info=f,p.content=e.getLines(t+1,d,s,!0),p.markup=c,p.map=[t,e.line],!0}function za(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];const a=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(u)return!0;const i=[],s=[],c=[],f=[],d=e.md.block.ruler.getRules("blockquote"),l=e.parentType;e.parentType="blockquote";let p=!1,_;for(_=t;_<n;_++){const S=e.sCount[_]<e.blkIndent;if(r=e.bMarks[_]+e.tShift[_],o=e.eMarks[_],r>=o)break;if(e.src.charCodeAt(r++)===62&&!S){let C=e.sCount[_]+1,R,O;e.src.charCodeAt(r)===32?(r++,C++,O=!1,R=!0):e.src.charCodeAt(r)===9?(R=!0,(e.bsCount[_]+C)%4===3?(r++,C++,O=!1):O=!0):R=!1;let P=C;for(i.push(e.bMarks[_]),e.bMarks[_]=r;r<o;){const U=e.src.charCodeAt(r);if(D(U))U===9?P+=4-(P+e.bsCount[_]+(O?1:0))%4:P++;else break;r++}p=r>=o,s.push(e.bsCount[_]),e.bsCount[_]=e.sCount[_]+1+(R?1:0),c.push(e.sCount[_]),e.sCount[_]=P-C,f.push(e.tShift[_]),e.tShift[_]=r-e.bMarks[_];continue}if(p)break;let x=!1;for(let C=0,R=d.length;C<R;C++)if(d[C](e,_,n,!0)){x=!0;break}if(x){e.lineMax=_,e.blkIndent!==0&&(i.push(e.bMarks[_]),s.push(e.bsCount[_]),f.push(e.tShift[_]),c.push(e.sCount[_]),e.sCount[_]-=e.blkIndent);break}i.push(e.bMarks[_]),s.push(e.bsCount[_]),f.push(e.tShift[_]),c.push(e.sCount[_]),e.sCount[_]=-1}const m=e.blkIndent;e.blkIndent=0;const E=e.push("blockquote_open","blockquote",1);E.markup=">";const T=[t,0];E.map=T,e.md.block.tokenize(e,t,_);const A=e.push("blockquote_close","blockquote",-1);A.markup=">",e.lineMax=a,e.parentType=l,T[1]=e.line;for(let S=0;S<f.length;S++)e.bMarks[S+t]=i[S],e.tShift[S+t]=f[S],e.sCount[S+t]=c[S],e.bsCount[S+t]=s[S];return e.blkIndent=m,!0}function qa(e,t,n,u){const r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.bMarks[t]+e.tShift[t];const a=e.src.charCodeAt(o++);if(a!==42&&a!==45&&a!==95)return!1;let i=1;for(;o<r;){const c=e.src.charCodeAt(o++);if(c!==a&&!D(c))return!1;c===a&&i++}if(i<3)return!1;if(u)return!0;e.line=t+1;const s=e.push("hr","hr",0);return s.map=[t,e.line],s.markup=Array(i+1).join(String.fromCharCode(a)),!0}function vn(e,t){const n=e.eMarks[t];let u=e.bMarks[t]+e.tShift[t];const r=e.src.charCodeAt(u++);if(r!==42&&r!==45&&r!==43)return-1;if(u<n){const o=e.src.charCodeAt(u);if(!D(o))return-1}return u}function An(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];let r=n;if(r+1>=u)return-1;let o=e.src.charCodeAt(r++);if(o<48||o>57)return-1;for(;;){if(r>=u)return-1;if(o=e.src.charCodeAt(r++),o>=48&&o<=57){if(r-n>=10)return-1;continue}if(o===41||o===46)break;return-1}return r<u&&(o=e.src.charCodeAt(r),!D(o))?-1:r}function Ya(e,t){const n=e.level+2;for(let u=t+2,r=e.tokens.length-2;u<r;u++)e.tokens[u].level===n&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function Ka(e,t,n,u){let r,o,a,i,s=t,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let f=!1;u&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(f=!0);let d,l,p;if((p=An(e,s))>=0){if(d=!0,a=e.bMarks[s]+e.tShift[s],l=Number(e.src.slice(a,p-1)),f&&l!==1)return!1}else if((p=vn(e,s))>=0)d=!1;else return!1;if(f&&e.skipSpaces(p)>=e.eMarks[s])return!1;if(u)return!0;const _=e.src.charCodeAt(p-1),m=e.tokens.length;d?(i=e.push("ordered_list_open","ol",1),l!==1&&(i.attrs=[["start",l]])):i=e.push("bullet_list_open","ul",1);const E=[s,0];i.map=E,i.markup=String.fromCharCode(_);let T=!1;const A=e.md.block.ruler.getRules("list"),S=e.parentType;for(e.parentType="list";s<n;){o=p,r=e.eMarks[s];const x=e.sCount[s]+p-(e.bMarks[s]+e.tShift[s]);let C=x;for(;o<r;){const X=e.src.charCodeAt(o);if(X===9)C+=4-(C+e.bsCount[s])%4;else if(X===32)C++;else break;o++}const R=o;let O;R>=r?O=1:O=C-x,O>4&&(O=1);const P=x+O;i=e.push("list_item_open","li",1),i.markup=String.fromCharCode(_);const U=[s,0];i.map=U,d&&(i.info=e.src.slice(a,p-1));const j=e.tight,Q=e.tShift[s],B=e.sCount[s],z=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=P,e.tight=!0,e.tShift[s]=R-e.bMarks[s],e.sCount[s]=C,R>=r&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,s,n,!0),(!e.tight||T)&&(c=!1),T=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=z,e.tShift[s]=Q,e.sCount[s]=B,e.tight=j,i=e.push("list_item_close","li",-1),i.markup=String.fromCharCode(_),s=e.line,U[1]=s,s>=n||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let he=!1;for(let X=0,ot=A.length;X<ot;X++)if(A[X](e,s,n,!0)){he=!0;break}if(he)break;if(d){if(p=An(e,s),p<0)break;a=e.bMarks[s]+e.tShift[s]}else if(p=vn(e,s),p<0)break;if(_!==e.src.charCodeAt(p-1))break}return d?i=e.push("ordered_list_close","ol",-1):i=e.push("bullet_list_close","ul",-1),i.markup=String.fromCharCode(_),E[1]=s,e.line=s,e.parentType=S,c&&Ya(e,m),!0}function ja(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t],a=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function i(A){const S=e.lineMax;if(A>=S||e.isEmpty(A))return null;let x=!1;if(e.sCount[A]-e.blkIndent>3&&(x=!0),e.sCount[A]<0&&(x=!0),!x){const O=e.md.block.ruler.getRules("reference"),P=e.parentType;e.parentType="reference";let U=!1;for(let j=0,Q=O.length;j<Q;j++)if(O[j](e,A,S,!0)){U=!0;break}if(e.parentType=P,U)return null}const C=e.bMarks[A]+e.tShift[A],R=e.eMarks[A];return e.src.slice(C,R+1)}let s=e.src.slice(r,o+1);o=s.length;let c=-1;for(r=1;r<o;r++){const A=s.charCodeAt(r);if(A===91)return!1;if(A===93){c=r;break}else if(A===10){const S=i(a);S!==null&&(s+=S,o=s.length,a++)}else if(A===92&&(r++,r<o&&s.charCodeAt(r)===10)){const S=i(a);S!==null&&(s+=S,o=s.length,a++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(r=c+2;r<o;r++){const A=s.charCodeAt(r);if(A===10){const S=i(a);S!==null&&(s+=S,o=s.length,a++)}else if(!D(A))break}const f=e.md.helpers.parseLinkDestination(s,r,o);if(!f.ok)return!1;const d=e.md.normalizeLink(f.str);if(!e.md.validateLink(d))return!1;r=f.pos;const l=r,p=a,_=r;for(;r<o;r++){const A=s.charCodeAt(r);if(A===10){const S=i(a);S!==null&&(s+=S,o=s.length,a++)}else if(!D(A))break}let m=e.md.helpers.parseLinkTitle(s,r,o);for(;m.can_continue;){const A=i(a);if(A===null)break;s+=A,r=o,o=s.length,a++,m=e.md.helpers.parseLinkTitle(s,r,o,m)}let E;for(r<o&&_!==r&&m.ok?(E=m.str,r=m.pos):(E="",r=l,a=p);r<o;){const A=s.charCodeAt(r);if(!D(A))break;r++}if(r<o&&s.charCodeAt(r)!==10&&E)for(E="",r=l,a=p;r<o;){const A=s.charCodeAt(r);if(!D(A))break;r++}if(r<o&&s.charCodeAt(r)!==10)return!1;const T=tt(s.slice(1,c));return T?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[T]>"u"&&(e.env.references[T]={title:E,href:d}),e.line=a),!0):!1}const Wa=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ja="[a-zA-Z_:][a-zA-Z0-9:._-]*",Za="[^\"'=<>`\\x00-\\x20]+",Qa="'[^']*'",Xa='"[^"]*"',ei="(?:"+Za+"|"+Qa+"|"+Xa+")",ti="(?:\\s+"+Ja+"(?:\\s*=\\s*"+ei+")?)",eu="<[A-Za-z][A-Za-z0-9\\-]*"+ti+"*\\s*\\/?>",tu="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",ni="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",ui="<[?][\\s\\S]*?[?]>",ri="<![A-Za-z][^>]*>",oi="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",ai=new RegExp("^(?:"+eu+"|"+tu+"|"+ni+"|"+ui+"|"+ri+"|"+oi+")"),ii=new RegExp("^(?:"+eu+"|"+tu+")"),me=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Wa.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(ii.source+"\\s*$"),/^$/,!1]];function si(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let a=e.src.slice(r,o),i=0;for(;i<me.length&&!me[i][0].test(a);i++);if(i===me.length)return!1;if(u)return me[i][2];let s=t+1;const c=me[i][1].test("");if(!me[i][1].test(a)){for(;s<n&&!(e.sCount[s]<e.blkIndent&&(c||!e.isEmpty(s)));s++)if(r=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],a=e.src.slice(r,o),me[i][1].test(a)){a.length!==0&&s++;break}}e.line=s;const f=e.push("html_block","",0);return f.map=[t,s],f.content=e.getLines(t,s,e.blkIndent,!0),!0}function ci(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(r);if(a!==35||r>=o)return!1;let i=1;for(a=e.src.charCodeAt(++r);a===35&&r<o&&i<=6;)i++,a=e.src.charCodeAt(++r);if(i>6||r<o&&!D(a))return!1;if(u)return!0;o=e.skipSpacesBack(o,r);const s=e.skipCharsBack(o,35,r);s>r&&D(e.src.charCodeAt(s-1))&&(o=s),e.line=t+1;const c=e.push("heading_open","h"+String(i),1);c.markup="########".slice(0,i),c.map=[t,e.line];const f=e.push("inline","",0);f.content=nt(e.src.slice(r,o)),f.map=[t,e.line],f.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup="########".slice(0,i),!0}function li(e,t,n){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let o=0,a,i=t+1;for(;i<n&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3)continue;if(e.sCount[i]>=e.blkIndent){let p=e.bMarks[i]+e.tShift[i];const _=e.eMarks[i];if(p<_&&(a=e.src.charCodeAt(p),(a===45||a===61)&&(p=e.skipChars(p,a),p=e.skipSpaces(p),p>=_))){o=a===61?1:2;break}}if(e.sCount[i]<0)continue;let l=!1;for(let p=0,_=u.length;p<_;p++)if(u[p](e,i,n,!0)){l=!0;break}if(l)break}if(!o)return e.parentType=r,!1;const s=nt(e.getLines(t,i,e.blkIndent,!1));e.line=i+1;const c=e.push("heading_open","h"+String(o),1);c.markup=String.fromCharCode(a),c.map=[t,e.line];const f=e.push("inline","",0);f.content=s,f.map=[t,e.line-1],f.children=[];const d=e.push("heading_close","h"+String(o),-1);return d.markup=String.fromCharCode(a),e.parentType=r,!0}function di(e,t,n){const u=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let o=t+1;for(e.parentType="paragraph";o<n&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let c=!1;for(let f=0,d=u.length;f<d;f++)if(u[f](e,o,n,!0)){c=!0;break}if(c)break}const a=nt(e.getLines(t,o,e.blkIndent,!1));e.line=o;const i=e.push("paragraph_open","p",1);i.map=[t,e.line];const s=e.push("inline","",0);return s.content=a,s.map=[t,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const He=[["table",$a,["paragraph","reference"]],["code",Ha],["fence",Va,["paragraph","reference","blockquote","list"]],["blockquote",za,["paragraph","reference","blockquote","list"]],["hr",qa,["paragraph","reference","blockquote","list"]],["list",Ka,["paragraph","reference","blockquote"]],["reference",ja],["html_block",si,["paragraph","reference","blockquote"]],["heading",ci,["paragraph","reference","blockquote"]],["lheading",li],["paragraph",di]];function ut(){this.ruler=new K;for(let e=0;e<He.length;e++)this.ruler.push(He[e][0],He[e][1],{alt:(He[e][2]||[]).slice()})}ut.prototype.tokenize=function(e,t,n){const u=this.ruler.getRules(""),r=u.length,o=e.md.options.maxNesting;let a=t,i=!1;for(;a<n&&(e.line=a=e.skipEmptyLines(a),!(a>=n||e.sCount[a]<e.blkIndent));){if(e.level>=o){e.line=n;break}const s=e.line;let c=!1;for(let f=0;f<r;f++)if(c=u[f](e,a,n,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!i,e.isEmpty(e.line-1)&&(i=!0),a=e.line,a<n&&e.isEmpty(a)&&(i=!0,a++,e.line=a)}};ut.prototype.parse=function(e,t,n,u){if(!e)return;const r=new this.State(e,t,n,u);this.tokenize(r,r.line,r.lineMax)};ut.prototype.State=ce;function Me(e,t,n,u){this.src=e,this.env=n,this.md=t,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Me.prototype.pushPending=function(){const e=new te("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Me.prototype.push=function(e,t,n){this.pending&&this.pushPending();const u=new te(e,t,n);let r=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(r),u};Me.prototype.scanDelims=function(e,t){const n=this.posMax,u=this.src.charCodeAt(e);let r;if(e===0)r=32;else if(e===1)r=this.src.charCodeAt(0),(r&63488)===55296&&(r=65533);else if(r=this.src.charCodeAt(e-1),(r&64512)===56320){const E=this.src.charCodeAt(e-2);r=(E&64512)===55296?65536+(E-55296<<10)+(r-56320):65533}else(r&64512)===55296&&(r=65533);let o=e;for(;o<n&&this.src.charCodeAt(o)===u;)o++;const a=o-e;let i=o<n?this.src.charCodeAt(o):32;if((i&64512)===55296){const E=this.src.charCodeAt(o+1);i=(E&64512)===56320?65536+(i-55296<<10)+(E-56320):65533}else(i&64512)===56320&&(i=65533);const s=De(r)||Le(r),c=De(i)||Le(i),f=Ie(r),d=Ie(i),l=!d&&(!c||f||s),p=!f&&(!s||d||c);return{can_open:l&&(t||!p||s),can_close:p&&(t||!l||c),length:a}};Me.prototype.Token=te;function fi(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function hi(e,t){let n=e.pos;for(;n<e.posMax&&!fi(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}const pi=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function _i(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,u=e.posMax;if(n+3>u||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const r=e.pending.match(pi);if(!r)return!1;const o=r[1],a=e.md.linkify.matchAtStart(e.src.slice(n-o.length));if(!a)return!1;let i=a.url;if(i.length<=o.length)return!1;let s=i.length;for(;s>0&&i.charCodeAt(s-1)===42;)s--;s!==i.length&&(i=i.slice(0,s));const c=e.md.normalizeLink(i);if(!e.md.validateLink(c))return!1;if(!t){e.pending=e.pending.slice(0,-o.length);const f=e.push("link_open","a",1);f.attrs=[["href",c]],f.markup="linkify",f.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(i);const l=e.push("link_close","a",-1);l.markup="linkify",l.info="auto"}return e.pos+=i.length-o.length,!0}function gi(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const u=e.pending.length-1,r=e.posMax;if(!t)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let o=u-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<r&&D(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const Mt=[];for(let e=0;e<256;e++)Mt.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Mt[e.charCodeAt(0)]=1});function mi(e,t){let n=e.pos;const u=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let r=e.src.charCodeAt(n);if(r===10){for(t||e.push("hardbreak","br",0),n++;n<u&&(r=e.src.charCodeAt(n),!!D(r));)n++;return e.pos=n,!0}let o=e.src[n];if(r>=55296&&r<=56319&&n+1<u){const i=e.src.charCodeAt(n+1);i>=56320&&i<=57343&&(o+=e.src[n+1],n++)}const a="\\"+o;if(!t){const i=e.push("text_special","",0);r<256&&Mt[r]!==0?i.content=o:i.content=a,i.markup=a,i.info="escape"}return e.pos=n+1,!0}function bi(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const r=n;n++;const o=e.posMax;for(;n<o&&e.src.charCodeAt(n)===96;)n++;const a=e.src.slice(r,n),i=a.length;if(e.backticksScanned&&(e.backticks[i]||0)<=r)return t||(e.pending+=a),e.pos+=i,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<o&&e.src.charCodeAt(s)===96;)s++;const f=s-c;if(f===i){if(!t){const d=e.push("code_inline","code",0);d.markup=a,d.content=e.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[f]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=i,!0}function Ei(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==126)return!1;const r=e.scanDelims(e.pos,!0);let o=r.length;const a=String.fromCharCode(u);if(o<2)return!1;let i;o%2&&(i=e.push("text","",0),i.content=a,o--);for(let s=0;s<o;s+=2)i=e.push("text","",0),i.content=a+a,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function Tn(e,t){let n;const u=[],r=t.length;for(let o=0;o<r;o++){const a=t[o];if(a.marker!==126||a.end===-1)continue;const i=t[a.end];n=e.tokens[a.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[i.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[i.token-1].type==="text"&&e.tokens[i.token-1].content==="~"&&u.push(i.token-1)}for(;u.length;){const o=u.pop();let a=o+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,o!==a&&(n=e.tokens[a],e.tokens[a]=e.tokens[o],e.tokens[o]=n)}}function yi(e){const t=e.tokens_meta,n=e.tokens_meta.length;Tn(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Tn(e,t[u].delimiters)}const nu={tokenize:Ei,postProcess:yi};function vi(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==95&&u!==42)return!1;const r=e.scanDelims(e.pos,u===42);for(let o=0;o<r.length;o++){const a=e.push("text","",0);a.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function Sn(e,t){const n=t.length;for(let u=n-1;u>=0;u--){const r=t[u];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const o=t[r.end],a=u>0&&t[u-1].end===r.end+1&&t[u-1].marker===r.marker&&t[u-1].token===r.token-1&&t[r.end+1].token===o.token+1,i=String.fromCharCode(r.marker),s=e.tokens[r.token];s.type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?i+i:i,s.content="";const c=e.tokens[o.token];c.type=a?"strong_close":"em_close",c.tag=a?"strong":"em",c.nesting=-1,c.markup=a?i+i:i,c.content="",a&&(e.tokens[t[u-1].token].content="",e.tokens[t[r.end+1].token].content="",u--)}}function Ai(e){const t=e.tokens_meta,n=e.tokens_meta.length;Sn(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Sn(e,t[u].delimiters)}const uu={tokenize:vi,postProcess:Ai};function Ti(e,t){let n,u,r,o,a="",i="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const f=e.pos,d=e.posMax,l=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let _=p+1;if(_<d&&e.src.charCodeAt(_)===40){for(c=!1,_++;_<d&&(n=e.src.charCodeAt(_),!(!D(n)&&n!==10));_++);if(_>=d)return!1;if(s=_,r=e.md.helpers.parseLinkDestination(e.src,_,e.posMax),r.ok){for(a=e.md.normalizeLink(r.str),e.md.validateLink(a)?_=r.pos:a="",s=_;_<d&&(n=e.src.charCodeAt(_),!(!D(n)&&n!==10));_++);if(r=e.md.helpers.parseLinkTitle(e.src,_,e.posMax),_<d&&s!==_&&r.ok)for(i=r.str,_=r.pos;_<d&&(n=e.src.charCodeAt(_),!(!D(n)&&n!==10));_++);}(_>=d||e.src.charCodeAt(_)!==41)&&(c=!0),_++}if(c){if(typeof e.env.references>"u")return!1;if(_<d&&e.src.charCodeAt(_)===91?(s=_+1,_=e.md.helpers.parseLinkLabel(e,_),_>=0?u=e.src.slice(s,_++):_=p+1):_=p+1,u||(u=e.src.slice(l,p)),o=e.env.references[tt(u)],!o)return e.pos=f,!1;a=o.href,i=o.title}if(!t){e.pos=l,e.posMax=p;const m=e.push("link_open","a",1),E=[["href",a]];m.attrs=E,i&&E.push(["title",i]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=_,e.posMax=d,!0}function Si(e,t){let n,u,r,o,a,i,s,c,f="";const d=e.pos,l=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,_=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(_<0)return!1;if(o=_+1,o<l&&e.src.charCodeAt(o)===40){for(o++;o<l&&(n=e.src.charCodeAt(o),!(!D(n)&&n!==10));o++);if(o>=l)return!1;for(c=o,i=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),i.ok&&(f=e.md.normalizeLink(i.str),e.md.validateLink(f)?o=i.pos:f=""),c=o;o<l&&(n=e.src.charCodeAt(o),!(!D(n)&&n!==10));o++);if(i=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<l&&c!==o&&i.ok)for(s=i.str,o=i.pos;o<l&&(n=e.src.charCodeAt(o),!(!D(n)&&n!==10));o++);else s="";if(o>=l||e.src.charCodeAt(o)!==41)return e.pos=d,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<l&&e.src.charCodeAt(o)===91?(c=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?r=e.src.slice(c,o++):o=_+1):o=_+1,r||(r=e.src.slice(p,_)),a=e.env.references[tt(r)],!a)return e.pos=d,!1;f=a.href,s=a.title}if(!t){u=e.src.slice(p,_);const m=[];e.md.inline.parse(u,e.md,e.env,m);const E=e.push("image","img",0),T=[["src",f],["alt",""]];E.attrs=T,E.children=m,E.content=u,s&&T.push(["title",s])}return e.pos=o,e.posMax=l,!0}const xi=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,wi=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Ci(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const u=e.pos,r=e.posMax;for(;;){if(++n>=r)return!1;const a=e.src.charCodeAt(n);if(a===60)return!1;if(a===62)break}const o=e.src.slice(u+1,n);if(wi.test(o)){const a=e.md.normalizeLink(o);if(!e.md.validateLink(a))return!1;if(!t){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}if(xi.test(o)){const a=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(a))return!1;if(!t){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}return!1}function ki(e){return/^<a[>\s]/i.test(e)}function Ri(e){return/^<\/a\s*>/i.test(e)}function Oi(e){const t=e|32;return t>=97&&t<=122}function Ni(e,t){if(!e.md.options.html)return!1;const n=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=n)return!1;const r=e.src.charCodeAt(u+1);if(r!==33&&r!==63&&r!==47&&!Oi(r))return!1;const o=e.src.slice(u).match(ai);if(!o)return!1;if(!t){const a=e.push("html_inline","",0);a.content=o[0],ki(a.content)&&e.linkLevel++,Ri(a.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const Ii=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Li=/^&([a-z][a-z0-9]{1,31});/i;function Di(e,t){const n=e.pos,u=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=u)return!1;if(e.src.charCodeAt(n+1)===35){const o=e.src.slice(n).match(Ii);if(o){if(!t){const a=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),i=e.push("text_special","",0);i.content=Ft(a)?Ne(a):Ne(65533),i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(n).match(Li);if(o){const a=Xo(o[0]);if(a!==o[0]){if(!t){const i=e.push("text_special","",0);i.content=a,i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function xn(e){const t={},n=e.length;if(!n)return;let u=0,r=-2;const o=[];for(let a=0;a<n;a++){const i=e[a];if(o.push(0),(e[u].marker!==i.marker||r!==i.token-1)&&(u=a),r=i.token,i.length=i.length||0,!i.close)continue;t.hasOwnProperty(i.marker)||(t[i.marker]=[-1,-1,-1,-1,-1,-1]);const s=t[i.marker][(i.open?3:0)+i.length%3];let c=u-o[u]-1,f=c;for(;c>s;c-=o[c]+1){const d=e[c];if(d.marker===i.marker&&d.open&&d.end<0){let l=!1;if((d.close||i.open)&&(d.length+i.length)%3===0&&(d.length%3!==0||i.length%3!==0)&&(l=!0),!l){const p=c>0&&!e[c-1].open?o[c-1]+1:0;o[a]=a-c+p,o[c]=p,i.open=!1,d.end=a,d.close=!1,f=-1,r=-2;break}}}f!==-1&&(t[i.marker][(i.open?3:0)+(i.length||0)%3]=f)}}function Fi(e){const t=e.tokens_meta,n=e.tokens_meta.length;xn(e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&xn(t[u].delimiters)}function Pi(e){let t,n,u=0;const r=e.tokens,o=e.tokens.length;for(t=n=0;t<o;t++)r[t].nesting<0&&u--,r[t].level=u,r[t].nesting>0&&u++,r[t].type==="text"&&t+1<o&&r[t+1].type==="text"?r[t+1].content=r[t].content+r[t+1].content:(t!==n&&(r[n]=r[t]),n++);t!==n&&(r.length=n)}const pt=[["text",hi],["linkify",_i],["newline",gi],["escape",mi],["backticks",bi],["strikethrough",nu.tokenize],["emphasis",uu.tokenize],["link",Ti],["image",Si],["autolink",Ci],["html_inline",Ni],["entity",Di]],_t=[["balance_pairs",Fi],["strikethrough",nu.postProcess],["emphasis",uu.postProcess],["fragments_join",Pi]];function Ue(){this.ruler=new K;for(let e=0;e<pt.length;e++)this.ruler.push(pt[e][0],pt[e][1]);this.ruler2=new K;for(let e=0;e<_t.length;e++)this.ruler2.push(_t[e][0],_t[e][1])}Ue.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),u=n.length,r=e.md.options.maxNesting,o=e.cache;if(typeof o[t]<"u"){e.pos=o[t];return}let a=!1;if(e.level<r){for(let i=0;i<u;i++)if(e.level++,a=n[i](e,!0),e.level--,a){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,o[t]=e.pos};Ue.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,u=e.posMax,r=e.md.options.maxNesting;for(;e.pos<u;){const o=e.pos;let a=!1;if(e.level<r){for(let i=0;i<n;i++)if(a=t[i](e,!1),a){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Ue.prototype.parse=function(e,t,n,u){const r=new this.State(e,t,n,u);this.tokenize(r);const o=this.ruler2.getRules(""),a=o.length;for(let i=0;i<a;i++)o[i](r)};Ue.prototype.State=Me;function Mi(e){const t={};e=e||{},t.src_Any=Vn.source,t.src_Cc=zn.source,t.src_Z=Yn.source,t.src_P=Lt.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function St(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){e[u]=n[u]})}),e}function rt(e){return Object.prototype.toString.call(e)}function Ui(e){return rt(e)==="[object String]"}function Bi(e){return rt(e)==="[object Object]"}function Gi(e){return rt(e)==="[object RegExp]"}function wn(e){return rt(e)==="[object Function]"}function $i(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const ru={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Hi(e){return Object.keys(e||{}).reduce(function(t,n){return t||ru.hasOwnProperty(n)},!1)}const Vi={"http:":{validate:function(e,t,n){const u=e.slice(t);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const u=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const u=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},zi="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",qi="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Yi(e){return function(t,n){const u=t.slice(n);return e.test(u)?u.match(e)[0].length:0}}function Cn(){return function(e,t){t.normalize(e)}}function Ze(e){const t=e.re=Mi(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(zi),n.push(t.src_xn),t.src_tlds=n.join("|");function u(i){return i.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(u(t.tpl_email_fuzzy),"i"),t.email_fuzzy_global=RegExp(u(t.tpl_email_fuzzy),"ig"),t.link_fuzzy=RegExp(u(t.tpl_link_fuzzy),"i"),t.link_fuzzy_global=RegExp(u(t.tpl_link_fuzzy),"ig"),t.link_no_ip_fuzzy=RegExp(u(t.tpl_link_no_ip_fuzzy),"i"),t.link_no_ip_fuzzy_global=RegExp(u(t.tpl_link_no_ip_fuzzy),"ig"),t.host_fuzzy_test=RegExp(u(t.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function o(i,s){throw new Error('(LinkifyIt) Invalid schema "'+i+'": '+s)}Object.keys(e.__schemas__).forEach(function(i){const s=e.__schemas__[i];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[i]=c,Bi(s)){Gi(s.validate)?c.validate=Yi(s.validate):wn(s.validate)?c.validate=s.validate:o(i,s),wn(s.normalize)?c.normalize=s.normalize:s.normalize?o(i,s):c.normalize=Cn();return}if(Ui(s)){r.push(i);return}o(i,s)}),r.forEach(function(i){e.__compiled__[e.__schemas__[i]]&&(e.__compiled__[i].validate=e.__compiled__[e.__schemas__[i]].validate,e.__compiled__[i].normalize=e.__compiled__[e.__schemas__[i]].normalize)}),e.__compiled__[""]={validate:null,normalize:Cn()};const a=Object.keys(e.__compiled__).filter(function(i){return i.length>0&&e.__compiled__[i]}).map($i).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i")}function ou(e,t,n,u){const r=e.slice(n,u);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=u,this.raw=r,this.text=r,this.url=r}function W(e,t){if(!(this instanceof W))return new W(e,t);t||Hi(e)&&(t=e,e={}),this.__opts__=St({},ru,t),this.__schemas__=St({},Vi,e),this.__compiled__={},this.__tlds__=qi,this.__tlds_replaced__=!1,this.re={},Ze(this)}W.prototype.add=function(t,n){return this.__schemas__[t]=n,Ze(this),this};W.prototype.set=function(t){return this.__opts__=St(this.__opts__,t),this};W.prototype.test=function(t){if(!t.length)return!1;let n,u;if(this.re.schema_test.test(t)){for(u=this.re.schema_search,u.lastIndex=0;(n=u.exec(t))!==null;)if(this.testSchemaAt(t,n[2],u.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&t.search(this.re.host_fuzzy_test)>=0&&t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&t.match(this.re.email_fuzzy)!==null)};W.prototype.pretest=function(t){return this.re.pretest.test(t)};W.prototype.testSchemaAt=function(t,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,u,this):0};W.prototype.match=function(t){const n=[],u=[],r=[],o=[];let a,i,s;function c(l,p){return l?p?l.index!==p.index?l.index<p.index?l:p:l.lastIndex>=p.lastIndex?l:p:l:p}if(!t.length)return null;if(this.re.schema_test.test(t))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(t))!==null;)i=this.testSchemaAt(t,a[2],s.lastIndex),i&&u.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+i});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(t))!==null;)r.push({schema:"",index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(t))!==null;)o.push({schema:"mailto:",index:a.index+a[1].length,lastIndex:a.index+a[0].length});const f=[0,0,0];let d=0;for(;;){const l=[u[f[0]],o[f[1]],r[f[2]]],p=c(c(l[0],l[1]),l[2]);if(!p)break;if(p===l[0]?f[0]++:p===l[1]?f[1]++:f[2]++,p.index<d)continue;const _=new ou(t,p.schema,p.index,p.lastIndex);this.__compiled__[_.schema].normalize(_,this),n.push(_),d=p.lastIndex}return n.length?n:null};W.prototype.matchAtStart=function(t){if(!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const u=this.testSchemaAt(t,n[2],n[0].length);if(!u)return null;const r=new ou(t,n[2],n.index+n[1].length,n.index+n[0].length+u);return this.__compiled__[r.schema].normalize(r,this),r};W.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(u,r,o){return u!==o[r-1]}).reverse(),Ze(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,Ze(this),this)};W.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};W.prototype.onCompile=function(){};const ve=2147483647,re=36,Ut=1,Fe=26,Ki=38,ji=700,au=72,iu=128,su="-",Wi=/^xn--/,Ji=/[^\0-\x7F]/,Zi=/[\x2E\u3002\uFF0E\uFF61]/g,Qi={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},gt=re-Ut,oe=Math.floor,mt=String.fromCharCode;function pe(e){throw new RangeError(Qi[e])}function Xi(e,t){const n=[];let u=e.length;for(;u--;)n[u]=t(e[u]);return n}function cu(e,t){const n=e.split("@");let u="";n.length>1&&(u=n[0]+"@",e=n[1]),e=e.replace(Zi,".");const r=e.split("."),o=Xi(r,t).join(".");return u+o}function lu(e){const t=[];let n=0;const u=e.length;for(;n<u;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<u){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}const es=e=>String.fromCodePoint(...e),ts=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:re},kn=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},du=function(e,t,n){let u=0;for(e=n?oe(e/ji):e>>1,e+=oe(e/t);e>gt*Fe>>1;u+=re)e=oe(e/gt);return oe(u+(gt+1)*e/(e+Ki))},fu=function(e){const t=[],n=e.length;let u=0,r=iu,o=au,a=e.lastIndexOf(su);a<0&&(a=0);for(let i=0;i<a;++i)e.charCodeAt(i)>=128&&pe("not-basic"),t.push(e.charCodeAt(i));for(let i=a>0?a+1:0;i<n;){const s=u;for(let f=1,d=re;;d+=re){i>=n&&pe("invalid-input");const l=ts(e.charCodeAt(i++));l>=re&&pe("invalid-input"),l>oe((ve-u)/f)&&pe("overflow"),u+=l*f;const p=d<=o?Ut:d>=o+Fe?Fe:d-o;if(l<p)break;const _=re-p;f>oe(ve/_)&&pe("overflow"),f*=_}const c=t.length+1;o=du(u-s,c,s==0),oe(u/c)>ve-r&&pe("overflow"),r+=oe(u/c),u%=c,t.splice(u++,0,r)}return String.fromCodePoint(...t)},hu=function(e){const t=[];e=lu(e);const n=e.length;let u=iu,r=0,o=au;for(const s of e)s<128&&t.push(mt(s));const a=t.length;let i=a;for(a&&t.push(su);i<n;){let s=ve;for(const f of e)f>=u&&f<s&&(s=f);const c=i+1;s-u>oe((ve-r)/c)&&pe("overflow"),r+=(s-u)*c,u=s;for(const f of e)if(f<u&&++r>ve&&pe("overflow"),f===u){let d=r;for(let l=re;;l+=re){const p=l<=o?Ut:l>=o+Fe?Fe:l-o;if(d<p)break;const _=d-p,m=re-p;t.push(mt(kn(p+_%m,0))),d=oe(_/m)}t.push(mt(kn(d,0))),o=du(r,c,i===a),r=0,++i}++r,++u}return t.join("")},ns=function(e){return cu(e,function(t){return Wi.test(t)?fu(t.slice(4).toLowerCase()):t})},us=function(e){return cu(e,function(t){return Ji.test(t)?"xn--"+hu(t):t})},pu={version:"2.3.1",ucs2:{decode:lu,encode:es},decode:fu,encode:hu,toASCII:us,toUnicode:ns},rs={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},os={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},as={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},is={default:rs,zero:os,commonmark:as},ss=/^(vbscript|javascript|file|data):/,cs=/^data:image\/(gif|png|jpeg|webp);/;function ls(e){const t=e.trim().toLowerCase();return ss.test(t)?cs.test(t):!0}const _u=["http:","https:","mailto:"];function ds(e){const t=It(e,!0);if(t.hostname&&(!t.protocol||_u.indexOf(t.protocol)>=0))try{t.hostname=pu.toASCII(t.hostname)}catch{}return Pe(Nt(t))}function fs(e){const t=It(e,!0);if(t.hostname&&(!t.protocol||_u.indexOf(t.protocol)>=0))try{t.hostname=pu.toUnicode(t.hostname)}catch{}return Te(Nt(t),Te.defaultChars+"%")}function ee(e,t){if(!(this instanceof ee))return new ee(e,t);t||Dt(e)||(t=e||{},e="default"),this.inline=new Ue,this.block=new ut,this.core=new Pt,this.renderer=new Ce,this.linkify=new W,this.validateLink=ls,this.normalizeLink=ds,this.normalizeLinkText=fs,this.utils=_a,this.helpers=et({},Ea),this.options={},this.configure(e),t&&this.set(t)}ee.prototype.set=function(e){return et(this.options,e),this};ee.prototype.configure=function(e){const t=this;if(Dt(e)){const n=e;if(e=is[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};ee.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(r){return n.indexOf(r)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};ee.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(r){return n.indexOf(r)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};ee.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};ee.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};ee.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};ee.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};ee.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};const hs=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),xe=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Qe=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!Qe(e[n],t[n]))return!1;return!0}if(xe(e)&&xe(t)){const n=Object.entries(e),u=new Set(Object.keys(t));if(n.length!==u.size)return!1;for(const[r,o]of n){if(!Qe(o,t[r]))return!1;u.delete(r)}return u.size===0}return!1},Ve=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(xe(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},ps=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",Rn=e=>e>="0"&&e<="9"||e==="-",_s=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var h;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(h||(h={}));const On={"(":h.TOK_LPAREN,")":h.TOK_RPAREN,"*":h.TOK_STAR,",":h.TOK_COMMA,".":h.TOK_DOT,":":h.TOK_COLON,"@":h.TOK_CURRENT,$:h.TOK_ROOT,"]":h.TOK_RBRACKET,"{":h.TOK_LBRACE,"}":h.TOK_RBRACE},gs={"!":!0,"<":!0,"=":!0,">":!0},ms={"	":!0,"\n":!0,"\r":!0," ":!0};class bs{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let u,r,o;for(;this._current<t.length;)if(ps(t[this._current]))u=this._current,r=this.consumeUnquotedIdentifier(t),n.push({start:u,type:h.TOK_UNQUOTEDIDENTIFIER,value:r});else if(On[t[this._current]]!==void 0)n.push({start:this._current,type:On[t[this._current]],value:t[this._current]}),this._current+=1;else if(Rn(t[this._current]))o=this.consumeNumber(t),n.push(o);else if(t[this._current]==="[")o=this.consumeLBracket(t),n.push(o);else if(t[this._current]==='"')u=this._current,r=this.consumeQuotedIdentifier(t),n.push({start:u,type:h.TOK_QUOTEDIDENTIFIER,value:r});else if(t[this._current]==="'")u=this._current,r=this.consumeRawStringLiteral(t),n.push({start:u,type:h.TOK_LITERAL,value:r});else if(t[this._current]==="`"){u=this._current;const a=this.consumeLiteral(t);n.push({start:u,type:h.TOK_LITERAL,value:a})}else if(gs[t[this._current]]!==void 0)o=this.consumeOperator(t),o&&n.push(o);else if(ms[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")u=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:u,type:h.TOK_AND,value:"&&"})):n.push({start:u,type:h.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")u=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:u,type:h.TOK_OR,value:"||"})):n.push({start:u,type:h.TOK_PIPE,value:"|"});else{const a=new Error(`Unknown character: ${t[this._current]}`);throw a.name="LexerError",a}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&_s(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const u=t.length;for(;t[this._current]!=='"'&&this._current<u;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==='"')?r+=2:r+=1,this._current=r}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const u=t.length;for(;t[this._current]!=="'"&&this._current<u;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="'")?o+=2:o+=1,this._current=o}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const u=t.length;for(;Rn(t[this._current])&&this._current<u;)this._current+=1;const r=parseInt(t.slice(n,this._current),10);return{start:n,value:r,type:h.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:h.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:h.TOK_FLATTEN,value:"[]"}):{start:n,type:h.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,u=t[n];if(this._current+=1,u==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:h.TOK_NE,value:"!="}):{start:n,type:h.TOK_NOT,value:"!"};if(u==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:h.TOK_LTE,value:"<="}):{start:n,type:h.TOK_LT,value:"<"};if(u===">")return t[this._current]==="="?(this._current+=1,{start:n,type:h.TOK_GTE,value:">="}):{start:n,type:h.TOK_GT,value:">"};if(u==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:h.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,u=t.length;for(;t[this._current]!=="`"&&this._current<u;){let a=this._current;t[a]==="\\"&&(t[a+1]==="\\"||t[a+1]==="`")?a+=2:a+=1,this._current=a}let r=t.slice(n,this._current).trimLeft();r=r.replace("\\`","`");const o=this.looksLikeJSON(r)?JSON.parse(r):JSON.parse(`"${r}"`);return this._current+=1,o}looksLikeJSON(t){const u=["true","false","null"],r="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||u.includes(t))return!0;if(r.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Es=new bs,H={[h.TOK_EOF]:0,[h.TOK_UNQUOTEDIDENTIFIER]:0,[h.TOK_QUOTEDIDENTIFIER]:0,[h.TOK_RBRACKET]:0,[h.TOK_RPAREN]:0,[h.TOK_COMMA]:0,[h.TOK_RBRACE]:0,[h.TOK_NUMBER]:0,[h.TOK_CURRENT]:0,[h.TOK_EXPREF]:0,[h.TOK_ROOT]:0,[h.TOK_PIPE]:1,[h.TOK_OR]:2,[h.TOK_AND]:3,[h.TOK_EQ]:5,[h.TOK_GT]:5,[h.TOK_LT]:5,[h.TOK_GTE]:5,[h.TOK_LTE]:5,[h.TOK_NE]:5,[h.TOK_FLATTEN]:9,[h.TOK_STAR]:20,[h.TOK_FILTER]:21,[h.TOK_DOT]:40,[h.TOK_NOT]:45,[h.TOK_LBRACE]:50,[h.TOK_LBRACKET]:55,[h.TOK_LPAREN]:60};class ys{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==h.TOK_EOF){const u=this.lookaheadToken(0);this.errorToken(u,`Unexpected token type: ${u.type}, value: ${u.value}`)}return n}loadTokens(t){this.tokens=[...Es.tokenize(t),{type:h.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let u=this.nud(n),r=this.lookahead(0);for(;t<H[r];)this.advance(),u=this.led(r,u),r=this.lookahead(0);return u}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,u,r;switch(t.type){case h.TOK_LITERAL:return{type:"Literal",value:t.value};case h.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case h.TOK_QUOTEDIDENTIFIER:const o={type:"Field",name:t.value};if(this.lookahead(0)===h.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return o;case h.TOK_NOT:return u=this.expression(H.Not),{type:"NotExpression",children:[u]};case h.TOK_STAR:return n={type:"Identity"},u=this.lookahead(0)===h.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(H.Star),{type:"ValueProjection",children:[n,u]};case h.TOK_FILTER:return this.led(t.type,{type:"Identity"});case h.TOK_LBRACE:return this.parseMultiselectHash();case h.TOK_FLATTEN:return n={type:h.TOK_FLATTEN,children:[{type:"Identity"}]},u=this.parseProjectionRHS(H.Flatten),{type:"Projection",children:[n,u]};case h.TOK_LBRACKET:return this.lookahead(0)===h.TOK_NUMBER||this.lookahead(0)===h.TOK_COLON?(u=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},u)):this.lookahead(0)===h.TOK_STAR&&this.lookahead(1)===h.TOK_RBRACKET?(this.advance(),this.advance(),u=this.parseProjectionRHS(H.Star),{children:[{type:"Identity"},u],type:"Projection"}):this.parseMultiselectList();case h.TOK_CURRENT:return{type:h.TOK_CURRENT};case h.TOK_ROOT:return{type:h.TOK_ROOT};case h.TOK_EXPREF:return r=this.expression(H.Expref),{type:"ExpressionReference",children:[r]};case h.TOK_LPAREN:const a=[];for(;this.lookahead(0)!==h.TOK_RPAREN;)this.lookahead(0)===h.TOK_CURRENT?(r={type:h.TOK_CURRENT},this.advance()):r=this.expression(0),a.push(r);return this.match(h.TOK_RPAREN),a[0];default:this.errorToken(t)}}led(t,n){let u;switch(t){case h.TOK_DOT:const r=H.Dot;return this.lookahead(0)!==h.TOK_STAR?(u=this.parseDotRHS(r),{type:"Subexpression",children:[n,u]}):(this.advance(),u=this.parseProjectionRHS(r),{type:"ValueProjection",children:[n,u]});case h.TOK_PIPE:return u=this.expression(H.Pipe),{type:h.TOK_PIPE,children:[n,u]};case h.TOK_OR:return u=this.expression(H.Or),{type:"OrExpression",children:[n,u]};case h.TOK_AND:return u=this.expression(H.And),{type:"AndExpression",children:[n,u]};case h.TOK_LPAREN:const o=n.name,a=[];let i;for(;this.lookahead(0)!==h.TOK_RPAREN;)this.lookahead(0)===h.TOK_CURRENT?(i={type:h.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===h.TOK_COMMA&&this.match(h.TOK_COMMA),a.push(i);return this.match(h.TOK_RPAREN),{name:o,type:"Function",children:a};case h.TOK_FILTER:const c=this.expression(0);return this.match(h.TOK_RBRACKET),u=this.lookahead(0)===h.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(H.Filter),{type:"FilterProjection",children:[n,u,c]};case h.TOK_FLATTEN:const f={type:h.TOK_FLATTEN,children:[n]},d=this.parseProjectionRHS(H.Flatten);return{type:"Projection",children:[f,d]};case h.TOK_EQ:case h.TOK_NE:case h.TOK_GT:case h.TOK_GTE:case h.TOK_LT:case h.TOK_LTE:return this.parseComparator(n,t);case h.TOK_LBRACKET:const l=this.lookaheadToken(0);return l.type===h.TOK_NUMBER||l.type===h.TOK_COLON?(u=this.parseIndexExpression(),this.projectIfSlice(n,u)):(this.match(h.TOK_STAR),this.match(h.TOK_RBRACKET),u=this.parseProjectionRHS(H.Star),{type:"Projection",children:[n,u]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const u=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw u.name="ParserError",u}parseIndexExpression(){if(this.lookahead(0)===h.TOK_COLON||this.lookahead(1)===h.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(h.TOK_RBRACKET),t}projectIfSlice(t,n){const u={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[u,this.parseProjectionRHS(H.Star)],type:"Projection"}:u}parseSliceExpression(){const t=[null,null,null];let n=0,u=this.lookahead(0);for(;u!==h.TOK_RBRACKET&&n<3;){if(u===h.TOK_COLON)n+=1,this.advance();else if(u===h.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}u=this.lookahead(0)}return this.match(h.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const u=this.expression(H[n]);return{type:"Comparator",name:n,children:[t,u]}}parseDotRHS(t){const n=this.lookahead(0);if([h.TOK_UNQUOTEDIDENTIFIER,h.TOK_QUOTEDIDENTIFIER,h.TOK_STAR].includes(n))return this.expression(t);if(n===h.TOK_LBRACKET)return this.match(h.TOK_LBRACKET),this.parseMultiselectList();if(n===h.TOK_LBRACE)return this.match(h.TOK_LBRACE),this.parseMultiselectHash();const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}parseProjectionRHS(t){if(H[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===h.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===h.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===h.TOK_DOT)return this.match(h.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==h.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===h.TOK_COMMA&&(this.match(h.TOK_COMMA),this.lookahead(0)===h.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(h.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[h.TOK_UNQUOTEDIDENTIFIER,h.TOK_QUOTEDIDENTIFIER];let u,r,o;for(;;){if(u=this.lookaheadToken(0),!n.includes(u.type))throw new Error(`Expecting an identifier token, got: ${u.type}`);if(r=u.value,this.advance(),this.match(h.TOK_COLON),o=this.expression(0),t.push({value:o,type:"KeyValuePair",name:r}),this.lookahead(0)===h.TOK_COMMA)this.match(h.TOK_COMMA);else if(this.lookahead(0)===h.TOK_RBRACE){this.match(h.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const vs=new ys;var y;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(y||(y={}));class As{constructor(t){this.TYPE_NAME_TABLE={[y.TYPE_NUMBER]:"number",[y.TYPE_ANY]:"any",[y.TYPE_STRING]:"string",[y.TYPE_ARRAY]:"array",[y.TYPE_OBJECT]:"object",[y.TYPE_BOOLEAN]:"boolean",[y.TYPE_EXPREF]:"expression",[y.TYPE_NULL]:"null",[y.TYPE_ARRAY_NUMBER]:"Array<number>",[y.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let u=0;for(let r=0;r<n.length;r+=1)u+=n[r];return u/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[u,r]=n;return u.includes(r)},this.functionEndsWith=n=>{const[u,r]=n;return u.includes(r,u.length-r.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[u,r]=n;return r.join(u)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>xe(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const u=[],r=this._interpreter,o=n[0],a=n[1];for(let i=0;i<a.length;i+=1)u.push(r.visit(o,a[i]));return u},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===y.TYPE_NUMBER)return Math.max(...n);const r=n;let o=r[0];for(let a=1;a<r.length;a+=1)o.localeCompare(r[a])<0&&(o=r[a]);return o},this.functionMaxBy=n=>{const u=n[1],r=n[0],o=this.createKeyFunction(u,[y.TYPE_NUMBER,y.TYPE_STRING]);let a=-1/0,i,s;for(let c=0;c<r.length;c+=1)s=o&&o(r[c]),s!==void 0&&s>a&&(a=s,i=r[c]);return i},this.functionMerge=n=>{let u={};for(let r=0;r<n.length;r+=1){const o=n[r];u=Object.assign(u,o)}return u},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===y.TYPE_NUMBER)return Math.min(...n);const r=n;let o=r[0];for(let a=1;a<r.length;a+=1)r[a].localeCompare(o)<0&&(o=r[a]);return o},this.functionMinBy=n=>{const u=n[1],r=n[0],o=this.createKeyFunction(u,[y.TYPE_NUMBER,y.TYPE_STRING]);let a=1/0,i,s;for(let c=0;c<r.length;c+=1)s=o&&o(r[c]),s!==void 0&&s<a&&(a=s,i=r[c]);return i},this.functionNotNull=n=>{for(let u=0;u<n.length;u+=1)if(this.getTypeName(n[u])!==y.TYPE_NULL)return n[u];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===y.TYPE_STRING){const o=n;let a="";for(let i=o.length-1;i>=0;i-=1)a+=o[i];return a}const r=n.slice(0);return r.reverse(),r},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const u=n[0].slice(0);if(u.length===0)return u;const r=this._interpreter,o=n[1],a=this.getTypeName(r.visit(o,u[0]));if(a!==void 0&&![y.TYPE_NUMBER,y.TYPE_STRING].includes(a))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[a]})`);const i=[];for(let s=0;s<u.length;s+=1)i.push([s,u[s]]);i.sort((s,c)=>{const f=r.visit(o,s[1]),d=r.visit(o,c[1]);if(this.getTypeName(f)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(f)]}`);if(this.getTypeName(d)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return f>d?1:f<d?-1:s[0]-c[0]});for(let s=0;s<i.length;s+=1)u[s]=i[s][1];return u},this.functionStartsWith=([n,u])=>n.startsWith(u),this.functionSum=([n])=>n.reduce((u,r)=>u+r,0),this.functionToArray=([n])=>this.getTypeName(n)===y.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const u=this.getTypeName(n);let r;return u===y.TYPE_NUMBER?n:u===y.TYPE_STRING&&(r=+n,!isNaN(r))?r:null},this.functionToString=([n])=>this.getTypeName(n)===y.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case y.TYPE_NUMBER:return"number";case y.TYPE_STRING:return"string";case y.TYPE_ARRAY:return"array";case y.TYPE_OBJECT:return"object";case y.TYPE_BOOLEAN:return"boolean";case y.TYPE_EXPREF:return"expref";case y.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[y.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[y.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[y.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[y.TYPE_STRING,y.TYPE_ARRAY]},{types:[y.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[y.TYPE_STRING]},{types:[y.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[y.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[y.TYPE_STRING]},{types:[y.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[y.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[y.TYPE_STRING,y.TYPE_ARRAY,y.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[y.TYPE_EXPREF]},{types:[y.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[y.TYPE_ARRAY_NUMBER,y.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[y.TYPE_ARRAY]},{types:[y.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[y.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[y.TYPE_ARRAY_NUMBER,y.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[y.TYPE_ARRAY]},{types:[y.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[y.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[y.TYPE_STRING,y.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[y.TYPE_ARRAY_STRING,y.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[y.TYPE_ARRAY]},{types:[y.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[y.TYPE_STRING]},{types:[y.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[y.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[y.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[y.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[y.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[y.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[y.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,u){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:u}}callFunction(t,n){const u=this.functionTable[t];if(u===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,u._signature),u._func.call(this,n)}validateInputSignatures(t,n){for(let u=0;u<n.length;u+=1)if("variadic"in n[u]&&u!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${u+1} must occur last`)}validateArgs(t,n,u){var r,o;let a;this.validateInputSignatures(t,u);const i=u.filter(m=>{var E;return(E=!m.optional)!==null&&E!==void 0?E:!1}).length,s=(o=(r=u[u.length-1])===null||r===void 0?void 0:r.variadic)!==null&&o!==void 0?o:!1,c=n.length<i,f=n.length>u.length,d=c&&(!s&&i>1||s)?"at least ":"";if(s&&c||!s&&(c||f))throw a=u.length>1,new Error(`ArgumentError: ${t}() takes ${d}${i} argument${a&&"s"||""} but received ${n.length}`);let l,p,_;for(let m=0;m<u.length;m+=1){_=!1,l=u[m].types,p=this.getTypeName(n[m]);let E;for(E=0;E<l.length;E+=1)if(p!==void 0&&this.typeMatches(p,l[E],n[m])){_=!0;break}if(!_&&p!==void 0){const T=l.map(A=>this.TYPE_NAME_TABLE[A]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${m+1} to be type (${T}) but received type ${this.TYPE_NAME_TABLE[p]} instead.`)}}}typeMatches(t,n,u){if(n===y.TYPE_ANY)return!0;if(n===y.TYPE_ARRAY_STRING||n===y.TYPE_ARRAY_NUMBER||n===y.TYPE_ARRAY){if(n===y.TYPE_ARRAY)return t===y.TYPE_ARRAY;if(t===y.TYPE_ARRAY){let r;n===y.TYPE_ARRAY_NUMBER?r=y.TYPE_NUMBER:n===y.TYPE_ARRAY_STRING&&(r=y.TYPE_STRING);for(let o=0;o<u.length;o+=1){const a=this.getTypeName(u[o]);if(a!==void 0&&r!==void 0&&!this.typeMatches(a,r,u[o]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return y.TYPE_STRING;case"[object Number]":return y.TYPE_NUMBER;case"[object Array]":return y.TYPE_ARRAY;case"[object Boolean]":return y.TYPE_BOOLEAN;case"[object Null]":return y.TYPE_NULL;case"[object Object]":return t.jmespathType===h.TOK_EXPREF?y.TYPE_EXPREF:y.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const u=this._interpreter;return o=>{const a=u.visit(t,o);if(!n.includes(this.getTypeName(a))){const i=`TypeError: expected one of (${n.map(s=>this.TYPE_NAME_TABLE[s]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(a)]}`;throw new Error(i)}return a}}}class Ts{constructor(){this._rootValue=null,this.runtime=new As(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let u,r,o,a,i,s,c,f,d,l,p;switch(t.type){case"Field":return n===null?null:xe(n)?(s=n[t.name],s===void 0?null:s):null;case"Subexpression":for(o=this.visit(t.children[0],n),l=1;l<t.children.length;l+=1)if(o=this.visit(t.children[1],o),o===null)return null;return o;case"IndexExpression":return c=this.visit(t.children[0],n),f=this.visit(t.children[1],c),f;case"Index":if(!Array.isArray(n))return null;let _=t.value;return _<0&&(_=n.length+_),o=n[_],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(n))return null;const m=[...t.children],E=this.computeSliceParams(n.length,m),[T,A,S]=E;if(o=[],S>0)for(l=T;l<A;l+=S)o.push(n[l]);else for(l=T;l>A;l+=S)o.push(n[l]);return o;case"Projection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;for(d=[],l=0;l<p.length;l+=1)r=this.visit(t.children[1],p[l]),r!==null&&d.push(r);return d;case"ValueProjection":if(p=this.visit(t.children[0],n),!xe(p))return null;d=[];const x=Object.values(p);for(l=0;l<x.length;l+=1)r=this.visit(t.children[1],x[l]),r!==null&&d.push(r);return d;case"FilterProjection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;const C=[],R=[];for(l=0;l<p.length;l+=1)u=this.visit(t.children[2],p[l]),Ve(u)||C.push(p[l]);for(let B=0;B<C.length;B+=1)r=this.visit(t.children[1],C[B]),r!==null&&R.push(r);return R;case"Comparator":switch(a=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case h.TOK_EQ:o=Qe(a,i);break;case h.TOK_NE:o=!Qe(a,i);break;case h.TOK_GT:o=a>i;break;case h.TOK_GTE:o=a>=i;break;case h.TOK_LT:o=a<i;break;case h.TOK_LTE:o=a<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return o;case h.TOK_FLATTEN:const O=this.visit(t.children[0],n);if(!Array.isArray(O))return null;let P=[];for(l=0;l<O.length;l+=1)r=O[l],Array.isArray(r)?P=[...P,...r]:P.push(r);return P;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(d=[],l=0;l<t.children.length;l+=1)d.push(this.visit(t.children[l],n));return d;case"MultiSelectHash":if(n===null)return null;d={};let U;for(l=0;l<t.children.length;l+=1)U=t.children[l],d[U.name]=this.visit(U.value,n);return d;case"OrExpression":return u=this.visit(t.children[0],n),Ve(u)&&(u=this.visit(t.children[1],n)),u;case"AndExpression":return a=this.visit(t.children[0],n),Ve(a)?a:this.visit(t.children[1],n);case"NotExpression":return a=this.visit(t.children[0],n),Ve(a);case"Literal":return t.value;case h.TOK_PIPE:return c=this.visit(t.children[0],n),this.visit(t.children[1],c);case h.TOK_CURRENT:return n;case h.TOK_ROOT:return this._rootValue;case"Function":const j=[];for(let B=0;B<t.children.length;B+=1)j.push(this.visit(t.children[B],n));return this.runtime.callFunction(t.name,j);case"ExpressionReference":const Q=t.children[0];return Q.jmespathType=h.TOK_EXPREF,Q;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[u,r,o]=n;if(o===null)o=1;else if(o===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const a=o<0;return u=u===null?a?t-1:0:this.capSliceRange(t,u,o),r=r===null?a?-1:t:this.capSliceRange(t,r,o),[u,r,o]}capSliceRange(t,n,u){let r=n;return r<0?(r+=t,r<0&&(r=u<0?-1:0)):r>=t&&(r=u<0?t-1:t),r}}const Ss=new Ts;y.TYPE_ANY;y.TYPE_ARRAY;y.TYPE_ARRAY_NUMBER;y.TYPE_ARRAY_STRING;y.TYPE_BOOLEAN;y.TYPE_EXPREF;y.TYPE_NULL;y.TYPE_NUMBER;y.TYPE_OBJECT;y.TYPE_STRING;function xs(e,t){const n=vs.parse(t);return Ss.search(n,e)}const ws=Object.freeze(Object.defineProperty({__proto__:null,search:xs},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
