(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();const Vr="modulepreload",zr=function(e){return"/"+e},Zt={},ee=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let s=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");o=s(n.map(c=>{if(c=zr(c),c in Zt)return;Zt[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const l=document.createElement("link");if(l.rel=f?"stylesheet":Vr,f||(l.as="script"),l.crossOrigin="",l.href=c,i&&l.setAttribute("nonce",i),document.head.appendChild(l),f)return new Promise((p,g)=>{l.addEventListener("load",p),l.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function u(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&u(i.reason);return t().catch(u)})};var qr=/([:*])(\w+)/g,Yr="([^/]+)",Kr=/\*/g,jr="?(?:.*)",Wr=/\/\?/g,Jr="/?([^/]+|)",Zr="(?:/^|^)",Qr="";function Jn(e){return e===void 0&&(e="/"),Mt()?location.pathname+location.search+location.hash:e}function M(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function Je(e){return typeof e=="string"}function Xr(e){return typeof e=="function"}function Ze(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function eo(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,r,o){return n===null&&(n={}),n[t[o]]=decodeURIComponent(r),n},null)}function Qe(e){var t=M(e).split(/\?(.*)?$/);return[M(t[0]),t.slice(1).join("")]}function Pt(e){for(var t={},n=e.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");if(o[0]!==""){var u=decodeURIComponent(o[0]);t[u]?(Array.isArray(t[u])||(t[u]=[t[u]]),t[u].push(decodeURIComponent(o[1]||""))):t[u]=decodeURIComponent(o[1]||"")}}return t}function Zn(e,t){var n=Qe(M(e.currentLocationPath)),r=n[0],o=n[1],u=o===""?null:Pt(o),a=[],i;if(Je(t.path)){if(i=Zr+M(t.path).replace(qr,function(d,l,p){return a.push(p),Yr}).replace(Kr,jr).replace(Wr,Jr)+"$",M(t.path)===""&&M(r)==="")return{url:r,queryString:o,hashString:Ze(e.to),route:t,data:null,params:u}}else i=t.path;var s=new RegExp(i,Qr),c=r.match(s);if(c){var f=Je(t.path)?eo(c,a):c.groups?c.groups:c.slice(1);return{url:M(r.replace(new RegExp("^"+e.instance.root),"")),queryString:o,hashString:Ze(e.to),route:t,data:f,params:u}}return!1}function Qn(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function Ae(e,t){return typeof e[t]>"u"||e[t]===!0}function to(e){if(!e)return{};var t=e.split(","),n={},r;return t.forEach(function(o){var u=o.split(":").map(function(a){return a.replace(/(^ +| +$)/g,"")});switch(u[0]){case"historyAPIMethod":n.historyAPIMethod=u[1];break;case"resolveOptionsStrategy":r||(r={}),r.strategy=u[1];break;case"resolveOptionsHash":r||(r={}),r.hash=u[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[u[0]]=u[1]==="true";break}}),r&&(n.resolveOptions=r),n}function Mt(){return typeof window<"u"}function no(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(r){n[r]&&(t[r]||(t[r]=[]),t[r].push(n[r]))})}),t}function ie(e,t,n){var r=t||{},o=0;(function u(){if(!e[o]){n&&n(r);return}Array.isArray(e[o])?(e.splice.apply(e,[o,1].concat(e[o][0](r)?e[o][1]:e[o][2])),u()):e[o](r,function(a){typeof a>"u"||a===!0?(o+=1,u()):n&&n(r)})})()}ie.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function Qt(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=Jn(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function ht(e,t){for(var n=0;n<e.instance.routes.length;n++){var r=e.instance.routes[n],o=Zn(e,r);if(o&&(e.matches||(e.matches=[]),e.matches.push(o),e.resolveOptions.strategy==="ONE")){t();return}}t()}function ro(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function oo(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var Xt=Mt(),uo=Qn();function ao(e,t){if(Ae(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),r=Xt&&e.resolveOptions&&e.resolveOptions.hash===!0;uo?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",r?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!r){var o=location.hash;location.hash="",location.hash=o}e.instance.__freezeListening=!1},1))):Xt&&(window.location.href=e.to)}t()}function Xn(e,t){var n=e.instance;if(!n.lastResolved()){t();return}ie(n.lastResolved().map(function(r){return function(o,u){if(!r.route.hooks||!r.route.hooks.leave){u();return}var a=!1,i=e.instance.matchLocation(r.route.path,e.currentLocationPath,!1);if(r.route.path!=="*")a=!i;else{var s=e.matches?e.matches.find(function(c){return r.route.path===c.route.path}):!1;a=!s}if(Ae(e.navigateOptions,"callHooks")&&a){ie(r.route.hooks.leave.map(function(c){return function(f,d){return c(function(l){l===!1?e.instance.__markAsClean(e):d()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return u()}]));return}else u()}}),{},function(){return t()})}function io(e,t){e.match.route.hooks&&e.match.route.hooks.before&&Ae(e.navigateOptions,"callHooks")?ie(e.match.route.hooks.before.map(function(n){return function(o,u){return n(function(a){a===!1?e.instance.__markAsClean(e):u()},e.match)}}).concat([function(){return t()}])):t()}function so(e,t){Ae(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function co(e,t){e.match.route.hooks&&e.match.route.hooks.after&&Ae(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function lo(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(r){r.route.hooks&&r.route.hooks.already&&Ae(e.navigateOptions,"callHooks")&&r.route.hooks.already.forEach(function(o){return o(e.match)})}),t(!1);return}t()}function fo(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var r=Qe(e.currentLocationPath),o=r[0],u=r[1],a=Ze(e.to);n.path=M(o);var i={url:n.path,queryString:u,hashString:a,data:null,route:n,params:u!==""?Pt(u):null};e.matches=[i],e.match=i}t()}function ho(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function po(e,t){e.instance._setCurrent(null),t()}function er(e,t){Ae(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var tr=[lo,io,so,co],en=[Xn,fo,ie.if(function(e){var t=e.notFoundHandled;return t},tr.concat([er]),[ho,po])];function St(){return St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},St.apply(this,arguments)}function tn(e,t){var n=0;function r(){if(n===e.matches.length){er(e,t);return}ie(tr,St({},e,{match:e.matches[n]}),function(){n+=1,r()})}Xn(e,r)}function pt(e){e.instance.__markAsClean(e)}function xt(){return xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xt.apply(this,arguments)}var nn="[data-navigo]";function go(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:nn},r=this,o="/",u=null,a=[],i=!1,s,c=Qn(),f=Mt();e?o=M(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function d(v){return v.indexOf("#")>=0&&(n.hash===!0?v=v.split("#")[1]||"/":v=v.split("#")[0]),v}function l(v){return M(o+"/"+M(v))}function p(v,x,N,F){return v=Je(v)?l(v):v,{name:F||M(String(v)),path:v,handler:x,hooks:no(N)}}function g(v,x,N){var F=this;return typeof v=="object"&&!(v instanceof RegExp)?(Object.keys(v).forEach(function(L){if(typeof v[L]=="function")F.on(L,v[L]);else{var ae=v[L],Ne=ae.uses,Gr=ae.as,Hr=ae.hooks;a.push(p(L,Ne,[s,Hr],Gr))}}),this):(typeof v=="function"&&(N=x,x=v,v=o),a.push(p(v,x,[s,N])),this)}function b(v,x){if(r.__dirty){r.__waiting.push(function(){return r.resolve(v,x)});return}else r.__dirty=!0;v=v?M(o)+"/"+M(v):void 0;var N={instance:r,to:v,currentLocationPath:v,navigateOptions:{},resolveOptions:xt({},n,x)};return ie([Qt,ht,ie.if(function(F){var L=F.matches;return L&&L.length>0},tn,en)],N,pt),N.matches?N.matches:!1}function E(v,x){if(r.__dirty){r.__waiting.push(function(){return r.navigate(v,x)});return}else r.__dirty=!0;v=M(o)+"/"+M(v);var N={instance:r,to:v,navigateOptions:x||{},resolveOptions:x&&x.resolveOptions?x.resolveOptions:n,currentLocationPath:d(v)};ie([ro,oo,ht,ie.if(function(F){var L=F.matches;return L&&L.length>0},tn,en),ao,pt],N,pt)}function T(v,x,N){var F=ne(v,x);return F!==null?(E(F.replace(new RegExp("^/?"+o),""),N),!0):!1}function A(v){return this.routes=a=a.filter(function(x){return Je(v)?M(x.path)!==M(v):Xr(v)?v!==x.handler:String(x.path)!==String(v)}),this}function w(){c&&(this.__popstateListener=function(){r.__freezeListening||b()},window.addEventListener("popstate",this.__popstateListener))}function S(){this.routes=a=[],c&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=i=!0}function k(v,x){return r._notFoundRoute=p("*",v,[s,x],"__NOT_FOUND__"),this}function R(){if(f)return O().forEach(function(v){if(v.getAttribute("data-navigo")==="false"||v.getAttribute("target")==="_blank"){v.hasListenerAttached&&v.removeEventListener("click",v.navigoHandler);return}v.hasListenerAttached||(v.hasListenerAttached=!0,v.navigoHandler=function(x){if((x.ctrlKey||x.metaKey)&&x.target.tagName.toLowerCase()==="a")return!1;var N=v.getAttribute("href");if(typeof N>"u"||N===null)return!1;if(N.match(/^(http|https)/)&&typeof URL<"u")try{var F=new URL(N);N=F.pathname+F.search}catch{}var L=to(v.getAttribute("data-navigo-options"));i||(x.preventDefault(),x.stopPropagation(),r.navigate(M(N),L))},v.addEventListener("click",v.navigoHandler))}),r}function O(){return f?[].slice.call(document.querySelectorAll(n.linksSelector||nn)):[]}function P(v){return"/"+o+"/"+M(v)}function U(v){return s=v,this}function Q(){return u}function ne(v,x,N){var F=a.find(function(Ne){return Ne.name===v}),L=null;if(F){if(L=F.path,x)for(var ae in x)L=L.replace(":"+ae,x[ae]);L=L.match(/^\//)?L:"/"+L}return L&&N&&!N.includeRoot&&(L=L.replace(new RegExp("^/"+o),"")),L}function B(v){return v.getAttribute("href")}function Y(v){var x=Qe(M(v)),N=x[0],F=x[1],L=F===""?null:Pt(F),ae=Ze(v),Ne=p(N,function(){},[s],N);return{url:N,queryString:F,hashString:ae,route:Ne,data:null,params:L}}function pe(){return Y(M(Jn(o)).replace(new RegExp("^"+o),""))}function re(v){var x={instance:r,currentLocationPath:v,to:v,resolveOptions:n};return ht(x,function(){}),x.matches?x.matches:!1}function ft(v,x,N){typeof x<"u"&&(typeof N>"u"||N)&&(x=l(x));var F={instance:r,to:x,currentLocationPath:x};Qt(F,function(){}),typeof v=="string"&&(v=typeof N>"u"||N?l(v):v);var L=Zn(F,{name:String(v),path:v,handler:function(){},hooks:{}});return L||!1}function ze(v,x,N){return typeof x=="string"&&(x=Jt(x)),x?(x.hooks[v]||(x.hooks[v]=[]),x.hooks[v].push(N),function(){x.hooks[v]=x.hooks[v].filter(function(F){return F!==N})}):(console.warn("Route doesn't exists: "+x),function(){})}function Jt(v){return typeof v=="string"?a.find(function(x){return x.name===l(v)}):a.find(function(x){return x.handler===v})}function $r(v){v.instance.__dirty=!1,v.instance.__waiting.length>0&&v.instance.__waiting.shift()()}this.root=o,this.routes=a,this.destroyed=i,this.current=u,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=$r,this.on=g,this.off=A,this.resolve=b,this.navigate=E,this.navigateByName=T,this.destroy=S,this.notFound=k,this.updatePageLinks=R,this.link=P,this.hooks=U,this.extractGETParameters=function(v){return Qe(d(v))},this.lastResolved=Q,this.generate=ne,this.getLinkPath=B,this.match=re,this.matchLocation=ft,this.getCurrentLocation=pe,this.addBeforeHook=ze.bind(this,"before"),this.addAfterHook=ze.bind(this,"after"),this.addAlreadyHook=ze.bind(this,"already"),this.addLeaveHook=ze.bind(this,"leave"),this.getRoute=Jt,this._pathToMatchObject=Y,this._clean=M,this._checkForAHash=d,this._setCurrent=function(v){return u=r.current=v},w.call(this),R.call(this)}var mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var De={exports:{}},bo=De.exports,rn;function Eo(){return rn||(rn=1,(function(e,t){(function(n,r){var o={};n.PubSub?(o=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=o,r(o)),e!==void 0&&e.exports&&(t=e.exports=o),t.PubSub=o,e.exports=t=o})(typeof window=="object"&&window||bo||mo,function(n){var r={},o=-1,u="*";function a(b){var E;for(E in b)if(Object.prototype.hasOwnProperty.call(b,E))return!0;return!1}function i(b){return function(){throw b}}function s(b,E,T){try{b(E,T)}catch(A){setTimeout(i(A),0)}}function c(b,E,T){b(E,T)}function f(b,E,T,A){var w=r[E],S=A?c:s,k;if(Object.prototype.hasOwnProperty.call(r,E))for(k in w)Object.prototype.hasOwnProperty.call(w,k)&&S(w[k],b,T)}function d(b,E,T){return function(){var w=String(b),S=w.lastIndexOf(".");for(f(b,b,E,T);S!==-1;)w=w.substr(0,S),S=w.lastIndexOf("."),f(b,w,E,T);f(b,u,E,T)}}function l(b){var E=String(b),T=!!(Object.prototype.hasOwnProperty.call(r,E)&&a(r[E]));return T}function p(b){for(var E=String(b),T=l(E)||l(u),A=E.lastIndexOf(".");!T&&A!==-1;)E=E.substr(0,A),A=E.lastIndexOf("."),T=l(E);return T}function g(b,E,T,A){b=typeof b=="symbol"?b.toString():b;var w=d(b,E,A),S=p(b);return S?(T===!0?w():setTimeout(w,0),!0):!1}n.publish=function(b,E){return g(b,E,!1,n.immediateExceptions)},n.publishSync=function(b,E){return g(b,E,!0,n.immediateExceptions)},n.subscribe=function(b,E){if(typeof E!="function")return!1;b=typeof b=="symbol"?b.toString():b,Object.prototype.hasOwnProperty.call(r,b)||(r[b]={});var T="uid_"+String(++o);return r[b][T]=E,T},n.subscribeAll=function(b){return n.subscribe(u,b)},n.subscribeOnce=function(b,E){var T=n.subscribe(b,function(){n.unsubscribe(T),E.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){r={}},n.clearSubscriptions=function(E){var T;for(T in r)Object.prototype.hasOwnProperty.call(r,T)&&T.indexOf(E)===0&&delete r[T]},n.countSubscriptions=function(E){var T,A,w=0;for(T in r)if(Object.prototype.hasOwnProperty.call(r,T)&&T.indexOf(E)===0){for(A in r[T])w++;break}return w},n.getSubscriptions=function(E){var T,A=[];for(T in r)Object.prototype.hasOwnProperty.call(r,T)&&T.indexOf(E)===0&&A.push(T);return A},n.unsubscribe=function(b){var E=function(P){var U;for(U in r)if(Object.prototype.hasOwnProperty.call(r,U)&&U.indexOf(P)===0)return!0;return!1},T=typeof b=="string"&&(Object.prototype.hasOwnProperty.call(r,b)||E(b)),A=!T&&typeof b=="string",w=typeof b=="function",S=!1,k,R,O;if(T){n.clearSubscriptions(b);return}for(k in r)if(Object.prototype.hasOwnProperty.call(r,k)){if(R=r[k],A&&R[b]){delete R[b],S=b;break}if(w)for(O in R)Object.prototype.hasOwnProperty.call(R,O)&&R[O]===b&&(delete R[O],S=!0)}return S}})})(De,De.exports)),De.exports}var yo=Eo();const _=_o(yo),m=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV.GO",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN.GO",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP.GO",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT.GO",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT.GO",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH.GO",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",LLM:"LLM",LLM_DO_DOWNLOAD:"LLM.DO.DOWNLOAD",LLM_STATUS:"LLM.STATUS",LLM_COMPLETE:"LLM.COMPLETE",LLM_ERROR:"LLM.ERROR",LLM_PROMPT:"LLM.PROMPT",LLM_RESPONSE:"LLM.RESPONSE",LLM_CANCEL:"LLM.CANCEL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),vo=5e3,Ao=2e3,To=/^(AUTH|ROUTE|LLM)\./;function wo(e,t){return t.some(n=>e===n||e.startsWith(`${n}.`))}function So(e=new Date){const t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}-${t(e.getMinutes())}-${t(e.getSeconds())}`}function xo(e,t){const n=URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");return r.href=n,r.download=t,r.style.display="none",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e4),t}function ko(){return new Promise((e,t)=>{const n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.style.display="none",n.addEventListener("change",()=>{const r=n.files&&n.files[0];if(n.remove(),!r){t(new Error("[VCR] no file selected"));return}r.text().then(e,t)}),n.addEventListener("cancel",()=>{n.remove(),t(new Error("[VCR] file selection cancelled"))}),document.body.appendChild(n),n.click()})}function on(e){return typeof e.elapsed=="number"?e.elapsed:e.timestamp??0}function Co(e,t){return e<=0?Promise.resolve():new Promise(n=>{t.wake=n,t.timer=setTimeout(()=>{t.timer=null,n()},e)})}function Ro(e){if(e===null||typeof e!="object")return e;try{return structuredClone(e)}catch{return Oo(e)}}function Oo(e){const t={_vcrPartial:!0};for(const n of Object.keys(e))try{const r=e[n];t[n]=r===null||typeof r!="object"?r:`[${Object.prototype.toString.call(r).slice(8,-1)}]`}catch(r){t[n]=`[unreadable: ${r.message}]`}return t}function un(e){const t=new WeakSet;return JSON.stringify(e,(n,r)=>{if(typeof r=="bigint")return`${r}n`;if(typeof r=="function")return"[Function]";if(typeof r=="object"&&r!==null){if(t.has(r))return"[Circular]";t.add(r)}return r},2)}function No(e,t={}){if(!e||typeof e.publish!="function")return console.warn("[VCR] PubSub.publish not found - recorder not installed"),null;if(e.publish.__vcr)return e.publish.__vcr;const n=t.maxEntries??vo,r=t.app??"",o=[],u={};let a=0,i=0,s=0,c=null;window._vcrTimeline=o,window._isVCRRecording=!1;function f(l,p,g){o.length>=n&&(o.shift(),s++);const b=Date.now(),E={seq:a++,message:l,data:Ro(p),timestamp:b,elapsed:b-i};g&&(E.sync=!0),r&&(E.app=r),o.push(E)}const d={start(){return o.length=0,a=0,s=0,i=Date.now(),window._isVCRRecording=!0,console.info(`[VCR] recording (cap ${n} events) - reproduce the issue, then run stopVCR()`),!0},stop(l={}){const{save:p=!0,filename:g}=l;window._isVCRRecording=!1,s&&console.warn(`[VCR] tape capped at ${n} - ${s} earlier event(s) dropped`),console.info(`[VCR] stopped - ${o.length} event(s) recorded`);const b=un(o);return p&&o.length&&d.save(g,b),b},save(l,p){const g=l||`vcr-${r||"pubsub"}-${So()}.json`;try{return xo(p??un(o),g),console.info(`[VCR] saved ${o.length} event(s) to ${g}`),g}catch(b){return console.error("[VCR] could not save file - copy _vcrTimeline instead",b),null}},peek(){return o},load(l){if(l===void 0)return ko().then(b=>d.load(b));const p=typeof l=="string"?JSON.parse(l):l;if(!Array.isArray(p))throw new TypeError("[VCR] load() expects the JSON string from stopVCR(), or an array");window._isVCRRecording=!1,o.length=0,o.push(...p),a=o.length,s=0;const g=p[0]?.app;return console.info(`[VCR] loaded ${o.length} event(s)${g?` from ${g}`:""} - playVCR() to replay`),o.length},async play(l={}){const{speed:p=1,maxGap:g=Ao,dryRun:b=!1,skip:E=[],quiet:T=!1}=l;if(c)return console.warn("[VCR] a replay is already running - stopPlayback() first"),{played:0,skipped:0,cancelled:!0,durationMs:0};if(!o.length)return console.warn("[VCR] tape is empty - record with startVCR(), or loadVCR(json)"),{played:0,skipped:0,cancelled:!1,durationMs:0};window._isVCRRecording&&(window._isVCRRecording=!1,console.warn("[VCR] recording stopped - cannot record and replay at once"));const A=o.slice(),w={cancelled:!1,timer:null,wake:null};c=w;const S=A.filter(B=>B.data&&B.data._vcrPartial).length;S&&console.warn(`[VCR] ${S} event(s) carry degraded payloads (were not cloneable when recorded)`);const k=A.filter(B=>To.test(B.message)).length;k&&!b&&console.warn(`[VCR] tape contains ${k} AUTH/ROUTE/LLM event(s) - replay will really navigate, sign out, or call the model. Try { dryRun: true } or { skip: ['AUTH', 'LLM'] }.`),console.info(`[VCR] ${b?"dry run":"replaying"} ${A.length} event(s) at ${p}x`);const R=Date.now();let O=0,P=0,U=null;for(let B=0;B<A.length;B++){const Y=A[B];if(U){const pe=on(Y)-on(U),re=Math.min(Math.max(pe,0),g);if(await Co(p>0?re/p:0,w),w.cancelled)break}if(U=Y,E.length&&wo(Y.message,E)){P++,T||console.debug(`[VCR] ${B+1}/${A.length} skip ${Y.message}`);continue}if(T||console.info(`[VCR] ${b?"·":"▶"} ${B+1}/${A.length} ${Y.message}`,Y.data??""),!b){const pe=Y.sync&&u.publishSync||u.publish;try{pe.call(e,Y.message,Y.data)}catch(re){console.error(`[VCR] subscriber threw while replaying ${Y.message}`,re)}}O++}const Q=w.cancelled;c=null;const ne={played:O,skipped:P,cancelled:Q,durationMs:Date.now()-R};return console.info(`[VCR] ${Q?"cancelled":"replay complete"}`,ne),ne},stopPlayback(){return c?(c.cancelled=!0,c.timer&&clearTimeout(c.timer),c.wake&&c.wake(),!0):(console.info("[VCR] no replay running"),!1)},uninstall(){window._isVCRRecording=!1;for(const l of["publish","publishSync"])e[l]&&e[l].__vcrOriginal&&(e[l]=e[l].__vcrOriginal)}};for(const l of["publish","publishSync"]){const p=e[l];if(typeof p!="function")continue;const g=l==="publishSync";u[l]=p;const b=function(E,T){if(window._isVCRRecording)try{f(E,T,g)}catch(A){console.warn("[VCR] failed to record",E,A)}return p.apply(this,arguments)};b.__vcr=d,b.__vcrOriginal=p,e[l]=b}return window.startVCR=()=>d.start(),window.stopVCR=l=>d.stop(l),window.saveVCR=l=>d.save(l),window.loadVCR=l=>d.load(l),window.playVCR=l=>d.play(l),window.stopPlayback=()=>d.stopPlayback(),console.info(`[VCR] armed${r?` (${r})`:""} - startVCR() / stopVCR() to record, loadVCR() / playVCR() to replay`),d}const gt={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var mt={};const I=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_CLIENT_TEMPLATE_ROUTING:!0,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function nr(e,t=null){if(e in I)return I[e];if(typeof process<"u"&&mt&&mt[e]){const n=mt[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&gt&&gt[e]){const n=gt[e];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return t}function Lo(e){return nr(e,!1)===!0}function Io(){return{...I}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:I,getFlag:nr,isEnabled:Lo,getAllFlags:Io});const $=Object.freeze({USER:"user",ASSISTANT:"assistant"}),j=Object.freeze({USER:"user",SYSTEM:"system",AUTOMATION:"automation"}),V=Object.freeze({START:"start",DELTA:"delta",END:"end",ERROR:"error"}),H=Object.freeze({CANVAS:"canvas",AGENT:"agent",WORKFLOW:"workflow",STAGE:"stage"}),an=Object.freeze({CANVAS:[H.CANVAS],AGENT:[H.AGENT],AGENT_CANVAS:[H.CANVAS,H.AGENT],STAGE:[H.STAGE],WORKFLOW:[H.WORKFLOW]});Object.freeze({PROMPT:m.CONVERSATION_PROMPT,PROMPT_CANVAS:m.CONVERSATION_PROMPT_CANVAS,PROMPT_AGENT:m.CONVERSATION_PROMPT_AGENT,PROMPT_AGENT_CANVAS:m.CONVERSATION_PROMPT_AGENT_CANVAS,PROMPT_STAGE:m.CONVERSATION_PROMPT_STAGE,RESPONSE:m.CONVERSATION_RESPONSE,RESPONSE_CANVAS:m.CONVERSATION_RESPONSE_CANVAS,RESPONSE_WORKFLOW:m.CONVERSATION_RESPONSE_WORKFLOW});const Do="::";function Fo(e){return typeof e=="string"&&e.trim().startsWith(Do)}let sn=0;function kt(e="msg"){return globalThis.crypto&&typeof globalThis.crypto.randomUUID=="function"?`${e}_${globalThis.crypto.randomUUID()}`:(sn+=1,`${e}_${Date.now().toString(36)}_${sn}`)}function Po(e=new Date){return e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function cn(e){if(typeof e!="string")return"";const t=e.split(".");return t.length>2?t.slice(2).join("."):""}function W(e={}){const t=new Date,n=e.text??e.message??"";return{id:e.id??kt(e.role===$.ASSISTANT?"res":"req"),turnId:e.turnId??kt("turn"),role:e.role??$.USER,source:e.source??j.USER,text:n,message:n,timestamp:e.timestamp??Po(t),ts:e.ts??t.getTime(),phase:e.phase??V.END,sinks:e.sinks??[H.CANVAS],directive:e.directive??null,meta:e.meta??{}}}function rr(e){const t=e?.directive;return!t||typeof t!="object"||!t.componentId?null:{componentId:t.componentId,action:t.action??null,params:t.params??{}}}function ln(e,t={}){const n=typeof e=="string"?{text:e}:e??{},r=n.role??t.role??$.USER;let o=n.phase;o||(o=n.streaming?V.DELTA:V.END);const u=Array.isArray(n.sinks)&&n.sinks.length?n.sinks:Mo(t.subTopic,r);return W({...n,role:r,phase:o,sinks:u,source:n.source??t.source??j.USER})}function Mo(e,t=$.USER){return e&&an[e]?an[e]:t===$.ASSISTANT?[H.CANVAS]:[H.CANVAS]}const dn={base:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful.",contributors:new Map,register(e,t){if(typeof t!="function")throw new TypeError("[Conversation] contributor must be a function");return this.contributors.set(e,t),this},unregister(e){return this.contributors.delete(e),this},setBase(e){return this.base=e,this},compose(e={}){const t=[this.base];for(const[n,r]of this.contributors)try{const o=r(e);o&&t.push(String(o))}catch(o){console.warn(`[Conversation] system prompt contributor "${n}" failed`,o)}return t.filter(Boolean).join(`

`)},hash(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t+e.charCodeAt(n)|0;return(t>>>0).toString(36)}},K="NONE",rt=":",J=new Map;function fn(e={}){const t={};for(const[n,r]of Object.entries(e))Array.isArray(r)?t[n]={type:"string",required:!1,values:r}:typeof r=="string"?t[n]={type:r,required:!1,values:null}:t[n]={type:r?.type??"string",required:!!r?.required,values:Array.isArray(r?.values)?r.values:null};return t}let Ct=null;function Uo(e){Ct=e}function _e(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Le(e){const t=e!==null&&typeof e=="object"?JSON.stringify(e):String(e??"");return _e(t)}function ot(e){if(!e||typeof e!="object")throw new TypeError("[Templates] definition must be an object");if(!e.id||typeof e.id!="string")throw new TypeError("[Templates] id is required");if(e.id===K)throw new TypeError(`[Templates] "${K}" is reserved - it is how the model declines to route`);if(!/^[A-Z][A-Z0-9_]*$/.test(e.id))throw new TypeError(`[Templates] "${e.id}" must be SCREAMING_SNAKE_CASE - ids are emitted into a grammar`);if(!e.when||typeof e.when!="string")throw new TypeError(`[Templates] ${e.id}: when is required (it becomes the catalog line)`);if(typeof e.render!="function")throw new TypeError(`[Templates] ${e.id}: render must be a function`);if(typeof e.transcript!="function")throw new TypeError(`[Templates] ${e.id}: transcript must be a function - the model cannot see rendered markup`);J.has(e.id)&&console.warn(`[Templates] "${e.id}" re-registered - replacing`);const t={};for(const[n,r]of Object.entries(e.actions??{})){if(!/^[A-Z][A-Z0-9_]*$/.test(n))throw new TypeError(`[Templates] action "${n}" must be SCREAMING_SNAKE_CASE - it is emitted into a grammar`);if(typeof r?.run!="function")throw new TypeError(`[Templates] ${e.id}.${n}: run must be a function`);t[n]={...r,params:fn(r.params)}}return J.set(e.id,{source:null,fetch:null,...e,params:fn(e.params),actions:t,nav:e.nav?Array.isArray(e.nav)?e.nav:[e.nav]:[]}),e.id}function Rt(){const e=[];for(const[t,n]of J){e.push(t);for(const r of Object.keys(n.actions))e.push(`${t}${rt}${r}`)}return e}function Bo(e){const[t,n=null]=String(e??"").split(rt);return{componentId:t,action:n}}function ut(e,t){return J.get(e)?.actions?.[t]??null}function $o(e=[]){const t=[];for(const n of J.values())Array.isArray(n.tips)&&n.tips.length?t.push(...n.tips):n.navPrompt&&t.push(`Try asking: "${n.navPrompt}"`);return[...new Set([...t,...e])]}function Go(e){if(!e)return null;for(const t of J.values())if(t.nav.includes(e))return{id:t.id,prompt:t.navPrompt||`Show me the ${t.id.toLowerCase().replace(/_/g," ")}`};return null}function Ot(e){return J.get(e)??null}function Ho(){return[...J.values()]}function Vo(){return{type:"object",properties:{component_id:{type:"string",enum:[K,...J.keys()]},params:{type:"object"}},required:["component_id"],additionalProperties:!1}}function or(){if(J.size===0)return null;const e=Rt(),t=e.map((r,o)=>`"${o===0?"{":","}\\"${r}\\":" bool`);t.push('",\\"component_id\\":\\"" id "\\"}"');const n=[K,...e];return["# Routing decision. Generated from the template registry - do not hand-edit.",`root ::= ${t.join(" ")}`,'bool ::= "true" | "false"',`id ::= ${n.map(r=>`"${r}"`).join(" | ")}`].join(`
`)}function zo(e){let t;try{t=new URL(String(e))}catch{return!1}if(t.protocol!=="http:"&&t.protocol!=="https:")return!1;const n=t.hostname;return n==="localhost"||/^[^.]+(\.[^.]+)+$/.test(n)}function qo(e,t,n){return t.values?t.values.includes(n)?null:`${e}: "${n}" is not one of ${t.values.join(", ")}`:t.type==="url"?typeof n!="string"?`${e}: expected a URL string`:zo(n)?null:`${e}: "${n}" is not a fully qualified address (needs https:// and a real host)`:typeof n===t.type?null:`${e}: expected ${t.type}, got ${typeof n}`}function ur(e,t={}){const n=[],r={};for(const[o,u]of Object.entries(e)){const a=t[o];if(a==null||a===""){u.required&&n.push(`${o} is required`);continue}const i=qo(o,u,a);i?n.push(i):r[o]=a}return{ok:n.length===0,params:r,errors:n}}function Yo(e,t={}){const n=J.get(e);return n?ur(n.params,t):{ok:!1,params:{},errors:[`unknown template "${e}"`]}}function Ko(e,t,n={}){const r=ut(e,t);return r?ur(r.params,n):{ok:!1,params:{},errors:[`unknown action "${e}${rt}${t}"`]}}function jo(e,t){const n=ut(e,t);if(!n)return null;const r={},o=[];for(const[u,a]of Object.entries(n.params))r[u]=a.values?{type:"string",enum:a.values}:{type:a.type==="url"?"string":a.type},a.required&&o.push(u);return{type:"object",properties:r,...o.length?{required:o}:{},additionalProperties:!1}}function Wo(e,t){const n=jo(e,t);return n?JSON.stringify(n):null}function Jo(){if(J.size===0)return null;const e=[];for(const t of J.values()){const n=Object.keys(t.params);e.push(`- ${t.id}: ${t.when}${n.length?` (params: ${n.join(", ")})`:""}`);for(const[r,o]of Object.entries(t.actions)){const u=Object.keys(o.params);e.push(`- ${t.id}${rt}${r}: ${o.when}${u.length?` (needs: ${u.join(", ")})`:""}`)}}return e.join(`
`)}function ar(e=[]){const t=Jo();if(!t)return null;const n=e.length?["","Earlier messages from this user, for context only:",...e.map(r=>`- ${r}`)]:[];return["You are a router. Decide whether the user's last message is asking for one of the views below.","","Views:",t,`- ${K}: anything else`,"","","First mark true or false for each view: does the message specifically ask for THAT view?","Then name the one to render, or "+K+" if none was marked true.","",`Answer ${K} unless the message clearly and specifically asks for one of these views.`,`${K} is the correct answer for most messages, including general questions, greetings,`,"small talk, and any topic the views do not cover. Do not pick the closest view - only an",`exact fit. Do not try to be helpful here; answering ${K} lets the assistant reply`,`normally, which is usually what the user wants. When in any doubt, answer ${K}.`,...n].join(`
`)}function Zo(e,t){if(!e)return t;if(Ct)try{return Ct(e,t)}catch(n){console.warn(`[Templates] query "${e}" failed - falling back to dot path`,n)}return e.split(".").reduce((n,r)=>n==null?n:n[r],t)}async function Qo(e,t={},n=null){const r=J.get(e);if(!r)return{ok:!1,id:e,html:"",transcript:`Tried to show "${e}", which is not a registered view.`,errors:[`unknown template "${e}"`]};const o=Yo(e,t);try{const u=r.fetch?await r.fetch(o.params):n,a=Zo(r.source,u);return{ok:!0,id:e,html:String(r.render(a,o.params)??""),transcript:String(r.transcript(a,o.params)??""),errors:o.errors}}catch(u){return console.error(`[Templates] "${e}" failed to hydrate`,u),{ok:!1,id:e,html:"",transcript:`The "${e}" view failed to load, so the user did not see it.`,errors:[...o.errors,u.message]}}}function Xo(){const e=t=>n=>{const r=n.detail?.pubsubTopic;r&&_.publish(r,n.detail)};document.addEventListener("nav-select",e()),document.addEventListener("logo-click",e()),document.addEventListener("nav-hover",e()),document.addEventListener("nav-double-tap",e()),document.addEventListener("nav-long-tap",e()),document.addEventListener("message-sent",e()),document.addEventListener("workflow-action",e()),document.addEventListener("ether5-select",e()),document.addEventListener("ether5-verb",e())}function eu(){console.log("[AppEvents] Initializing event listeners..."),_.subscribe(m.APP_READY,(n,r)=>{console.log("[AppEvents] APP_READY:",r)}),_.subscribe(m.APP_ERROR,(n,r)=>{console.error("[AppEvents] APP_ERROR:",r)}),_.subscribe(m.APP_SIGNOUT,(n,r)=>{console.log("[AppEvents] APP_SIGNOUT:",r)}),_.subscribe(m.ROUTE_NAV_BEFORE,(n,r)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",r),_.publish(m.UI_LOADING_START)}),_.subscribe(m.ROUTE_NAV_AFTER,(n,r)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",r),_.publish(m.UI_LOADING_END)}),_.subscribe(m.ROUTE_NAV_ERROR,(n,r)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",r),_.publish(m.APP_ERROR,{message:"Navigation error",details:r})}),_.subscribe(m.AUTH_SIGNIN_SUCCESS,(n,r)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",r)}),_.subscribe(m.AUTH_SIGNIN_FAIL,(n,r)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",r),_.publish(m.UI_TOAST,{message:r.message||"Sign in failed",type:"danger"})}),_.subscribe(m.AUTH_SIGNUP_SUCCESS,(n,r)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",r),_.publish(m.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"})}),_.subscribe(m.AUTH_VERIFY_LINK,(n,r)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),_.subscribe(m.AUTH_SIGNUP_FAIL,(n,r)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",r),_.publish(m.UI_TOAST,{message:r.message||"Sign up failed",type:"danger"})}),_.subscribe(m.AUTH_SIGNOUT_SUCCESS,(n,r)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",r),_.publish(m.UI_TOAST,{message:"Signed out successfully",type:"info"})}),_.subscribe(m.AUTH_SIGNUP,(n,r)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),_.subscribe(m.AUTH_FORGOT,(n,r)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),_.subscribe(m.AUTH_FORGOT_SUCCESS,(n,r)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",r),_.publish(m.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),_.subscribe(m.AUTH_RESETHASH_NAV,(n,r)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),_.subscribe(m.AUTH_RESETHASH_SUCCESS,(n,r)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",r),_.publish(m.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),_.subscribe(m.AUTH_TOKEN_EXPIRED,(n,r)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",r),_.publish(m.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),_.subscribe(m.I18N_SET_LANG,(n,r)=>{console.log("[AppEvents] I18N_SET_LANG:",r);const{langCode:o}=r;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),_.publish(m.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(u){console.error("[AppEvents] Error changing language:",u),_.publish(m.UI_TOAST,{message:`Failed to change language: ${u.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),_.subscribe("CONVERSATION.PROMPT",(n,r)=>{const o=ln(r,{role:$.USER,subTopic:cn(n)});if(!o.text){console.warn("[AppEvents] CONVERSATION.PROMPT received without text",r);return}if(console.log(`[AppEvents] PROMPT ${o.sinks.join("+")} [${o.source}] ${o.turnId}:`,o.text),o.sinks.includes(H.STAGE)){const u=document.querySelector("m5t-chat-prompt-area");u?.setMessage?u.setMessage(o.text):console.warn("[AppEvents] STAGE sink: no m5t-chat-prompt-area on this route")}o.sinks.includes(H.CANVAS)&&(hn(o),_.publish(m.CANVAS_DO_SCROLL)),o.sinks.includes(H.AGENT)&&(Fo(o.text)?tu(o):ru(o))}),_.subscribe("CONVERSATION.RESPONSE",(n,r)=>{const o=ln(r,{role:$.ASSISTANT,subTopic:cn(n)});if(!o.text&&o.phase!==V.END&&!o.meta?.waiting){console.warn("[AppEvents] CONVERSATION.RESPONSE received without text",r);return}o.sinks.includes(H.CANVAS)&&hn(o),o.sinks.includes(H.WORKFLOW)&&au(o)}),_.subscribe(m.UI_LOADING_START,(n,r)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),_.subscribe(m.UI_LOADING_END,(n,r)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),_.subscribe(m.UI_TOAST,(n,r)=>{console.log("[AppEvents] UI_TOAST:",r)}),_.subscribe(m.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const n="0.1",r=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${n} 8/2/2026, 7:30:32 PM|© ${r} Mach Five Tech`,"night")}),Xo(),_.subscribe("M5T_PRIMARY_NAV",(n,r)=>{const o=n.split(".")[1];switch(o){case"TAP":e(r);break;case"LOGO_TAP":t();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function e(n){const{token:r,level:o,primaryToken:u}=n;switch(r){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),_.publish(m.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:{const a=Go(r);if(a){console.log(`[AppEvents] Navigation: ${o} -> ${r} asks "${a.prompt}"`),_.publish(m.CONVERSATION_PROMPT_AGENT_CANVAS,W({text:a.prompt,directive:{componentId:a.id,params:{}},source:j.AUTOMATION,sinks:[H.CANVAS,H.AGENT],meta:{origin:"nav",navToken:r}}));break}console.log(`[AppEvents] Navigation: ${o} -> ${r}`,{primaryToken:u});break}}}function t(n){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 8/2/2026, 7:30:32 PM|© ${o} Mach Five Tech`,"night",5e3)}_.subscribe(m.LLM_DO_DOWNLOAD,(n,r)=>{console.log("[AppEvents] LLM_DO_DOWNLOAD:",r),window.LLMController?window.LLMController.loadModel():console.error("[AppEvents] LLMController not available")}),_.subscribe(m.LLM_STATUS,(n,r)=>{console.log("[AppEvents] LLM_STATUS:",r),r&&typeof neodigmToast<"u"&&(r.text||`${r.progressPercent}`)}),_.subscribe(m.LLM_COMPLETE,(n,r)=>{console.log("[AppEvents] LLM_COMPLETE:",r),_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({role:$.ASSISTANT,source:j.SYSTEM,text:`✓ AI Model Ready: ${r.modelId}`,phase:V.END,meta:{modelId:r.modelId}}))}),_.subscribe(m.LLM_ERROR,(n,r)=>{console.error("[AppEvents] LLM_ERROR:",r);const o=`AI Error: ${r.error||"Unknown error"}`;typeof neodigmToast<"u"&&neodigmToast.q(o,"danger",8e3),_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({id:r?.responseId,turnId:r?.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:`✗ ${o}`,phase:V.ERROR}))}),_.subscribe(m.LLM_PROMPT,(n,r)=>{console.log("[AppEvents] LLM_PROMPT:",r),window.LLMController&&r?.message?window.LLMController.chat(r.message,{turnId:r.turnId}):console.error("[AppEvents] LLMController not available or no message provided")}),_.subscribe(m.LLM_RESPONSE,(n,r)=>{r&&(!r.done&&!r.fullContent||_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({id:r.responseId,turnId:r.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:r.fullContent??"",phase:r.done?V.END:V.DELTA,meta:r.meta??{}})))}),_.subscribe(m.LLM_CANCEL,(n,r)=>{console.log("[AppEvents] LLM_CANCEL"),window.LLMController&&window.LLMController.cancelGeneration()}),_.subscribe(m.AUTH_SIGNOUT,(n,r)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(I.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}const ye=new Map;function hn(e){const t=document.getElementById("chat-messages");if(!t)return console.warn("[AppEvents] chat-messages element not found - may not be on home route"),null;const n=!!e.meta?.waiting;e.role===$.ASSISTANT&&!n&&nu(e.turnId);let r=ye.get(e.id);r&&!r.isConnected&&(ye.delete(e.id),r=null);const o=e.role===$.ASSISTANT&&typeof e.meta?.html=="string";return r||(r=document.createElement(n?"m5t-chat-waiting":o?"m5t-chat-workflow":e.role===$.ASSISTANT?"m5t-chat-response":"m5t-chat-prompt"),r.setAttribute("data-turn-id",e.turnId),r.setAttribute("data-message-id",e.id),r.setAttribute("timestamp",e.timestamp),n&&(r.phrases=$o()),ye.set(e.id,r),t.prepend(r)),n||(o?r.setContent?.(e.meta.html??"",{templateId:e.meta.componentId}):r.setAttribute("message",e.text),(e.phase===V.END||e.phase===V.ERROR)&&(r.setAttribute("phase",e.phase),ye.delete(e.id))),r}async function tu(e){console.log("[AppEvents] CLI command:",e.text);try{const t=(await ee(async()=>{const{default:o}=await Promise.resolve().then(()=>du);return{default:o}},void 0)).default,n=window.AuthController?.getEntity(),r=await t.process(e.text,n);_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({turnId:e.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:r.message,phase:V.END,meta:{command:!0}}))}catch(t){console.error("[AppEvents] CLI command failed",t),_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({turnId:e.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:`Command failed: ${t.message}`,phase:V.ERROR}))}_.publish(m.CANVAS_DO_SCROLL)}const Nt=e=>`wait_${e}`;function ir(e){ye.has(Nt(e.turnId))||(_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({id:Nt(e.turnId),turnId:e.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:"",phase:V.DELTA,meta:{waiting:!0}})),_.publish(m.CANVAS_DO_SCROLL))}function nu(e){const t=Nt(e),n=ye.get(t);n&&(ye.delete(t),n.remove())}async function ru(e){let t=rr(e);if(!t&&I.FF_CLIENT_TEMPLATE_ROUTING&&(ir(e),t=await window.LLMController?.route?.(e.text)),!t){_.publish(m.LLM_PROMPT,{message:e.text,turnId:e.turnId});return}const{componentId:n,action:r}=Bo(t.componentId);r&&!Object.keys(t.params).length?t={componentId:n,action:r,params:await window.LLMController?.extractParams?.(n,r,e.text)??{}}:r&&(t={componentId:n,action:r,params:t.params}),window.LLMController?.noteUser?.(e.text),_.publish(m.CONVERSATION_RESPONSE_WORKFLOW,W({turnId:e.turnId,role:$.ASSISTANT,source:j.SYSTEM,sinks:[H.WORKFLOW],directive:t}))}const Ie=new Map,pn=8e3;function ou(e,t,n){return`${e}:${t}:${JSON.stringify(n)}`}async function uu(e,t,n,r){const o=ut(t,n);if(!o)return console.warn(`[AppEvents] unknown action ${t}:${n}`),{ok:!1};const u=Ko(t,n,r);if(!u.ok)return console.warn(`[AppEvents] ${t}:${n} rejected`,u.errors,r),_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({turnId:e.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:`${o.needs??"I need a bit more to do that."}

${u.errors.map(s=>`- ${s}`).join(`
`)}`,phase:V.END})),window.LLMController?.noteAssistant?.(`Could not ${n} - ${u.errors.join("; ")}. Asked the user to supply it.`),_.publish(m.CANVAS_DO_SCROLL),{ok:!1};const a=ou(t,n,u.params),i=Date.now();for(const[s,c]of Ie)i-c>pn&&Ie.delete(s);if(Ie.has(a))return console.warn(`[AppEvents] suppressed duplicate ${t}:${n} within ${pn}ms`,u.params),{ok:!0};Ie.set(a,i);try{return await o.run(u.params),{ok:!0}}catch(s){return Ie.delete(a),console.error(`[AppEvents] ${t}:${n} failed`,s),_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({turnId:e.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:`That did not go through: ${s.message}`,phase:V.ERROR})),window.LLMController?.noteAssistant?.(`${n} failed: ${s.message}. Nothing was changed.`),_.publish(m.CANVAS_DO_SCROLL),{ok:!1}}}async function au(e){const t=rr(e);if(!t){console.warn("[AppEvents] WORKFLOW sink without a directive - nothing to render",e);return}const{componentId:n,action:r,params:o}=t;if(console.log("[AppEvents] WORKFLOW render:",n,r??"(view)",o),r&&!(await uu(e,n,r,o)).ok)return;Ot(n)?.fetch&&ir(e);const u=await Qo(n,o,e.meta?.payload??null);u.errors.length&&console.warn(`[AppEvents] template "${n}" reported:`,u.errors),_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({turnId:e.turnId,role:$.ASSISTANT,source:j.SYSTEM,text:u.transcript,phase:u.ok?V.END:V.ERROR,meta:{componentId:n,html:u.html,params:o}})),window.LLMController?.noteAssistant?.(u.transcript),_.publish(m.CANVAS_DO_SCROLL)}class he{static CONFIG={BASE_URL:"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#n=null;static#r=null;static#a=null;static async init({BASE_URL:t,navigateFunction:n,customConfig:r={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#a=n;else throw new Error("navigateFunction is required and must be a function");return t&&(this.CONFIG.BASE_URL=t),r&&Object.keys(r).length>0&&(this.CONFIG={...this.CONFIG,...r}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#c(),this.#s(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#l(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#s(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((t=null)=>{t&&(console.log("[AuthController] mvvLegit navigation to:",t),this.#o(t))}).setOnState((t=null)=>{if(t)switch(console.log("[AuthController] Auth state changed:",t),t){case"AUTH":case 4:this.#h();break;case"UNAUTH":case 1:this.#p();break;case"UNVERF":case 2:this.#g();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#o(t){if(!this.#a){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",t);const n=t.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#a(n)}static#c(){try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);t&&(this.#n=JSON.parse(t),console.log("[AuthController] Entity state loaded:",this.#n?.email))}catch(t){console.error("[AuthController] Error loading entity state:",t),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#r=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#u(t){try{this.#n=t,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(t)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#i(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#n}static async doSignin(t,n){try{const r=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n})}),o=await r.json();return r.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#u(o.entity)),setTimeout(()=>{this.#o(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):r.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#u(o.entity),console.log("[AuthController] Explicitly navigating to home"),this.#o(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(r){return console.error("[AuthController] Signin error:",r),{ok:!1,error:r.message}}}static async doSignout(t=!1){console.log("[AuthController] doSignout called, serverInitiated:",t);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!t&&n){const r=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",r),navigator.sendBeacon){const o=navigator.sendBeacon(r);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#i(),console.log("[AuthController] Stopping auth ping..."),this.#d(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(t){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await n.json();return n.ok&&r.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#u(r.entity),{ok:!0,data:r}):{ok:!1,error:r.error||"Sign up failed",data:r}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(t,n){try{const r=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({email:t,hash:n,modified_by:t})}),u=await o.json();return o.ok&&u.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:u}):{ok:!1,error:u.error||"Password reset failed",data:u}}catch(r){return console.error("[AuthController] Reset password error:",r),{ok:!1,error:r.message}}}static#l(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#f()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#d(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#f(){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);t.ok?console.log("[AuthController] Ping success"):(t.status===401||t.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(t){console.error("[AuthController] Ping error:",t)}}static setDeepLinkGuid(t){this.#r=t,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,t),console.log("[AuthController] Deep-link GUID stored:",t)}static getDeepLinkGuid(){return this.#r}static clearDeepLink(){this.#r=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#h(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#l()}static#p(){console.log("[AuthController] User unauthenticated"),this.#d()}static#g(){console.log("[AuthController] User unverified")}static getAuthState(){try{const t=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(t);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const r=LZString.decompressFromUTF16(n),u=JSON.parse(r)?.state;return u===1?"UNAUTH":u===2?"UNVERF":u===4?"AUTH":u===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(t){this.#o(t)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#f()}}class C{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:t,product:n,whitelabel:r,lang:o}){t&&(this.#t.buildMode=t),n&&(this.#t.product=n),r&&(this.#t.whitelabel=r),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(t,n={}){const r={...this.#t,...n},{buildMode:o,product:u,whitelabel:a,lang:i}=r;try{const s=this.#e[o]?.[u]?.[a]?.[i]?.[t];return s?Array.isArray(s)?s[Math.floor(Math.random()*s.length)]:s:(console.warn(`[MicrocopyManager] Token not found: ${t} (${o}/${u}/${a}/${i})`),null)}catch(s){return console.error(`[MicrocopyManager] Error retrieving token: ${t}`,s),null}}static getAll(t={}){const n={...this.#t,...t},{buildMode:r,product:o,whitelabel:u,lang:a}=n;try{return this.#e[r]?.[o]?.[u]?.[a]||null}catch(i){return console.error("[MicrocopyManager] Error retrieving all tokens",i),null}}static has(t,n={}){const r={...this.#t,...n},{buildMode:o,product:u,whitelabel:a,lang:i}=r;try{return!!this.#e[o]?.[u]?.[a]?.[i]?.[t]}catch{return!1}}static getAvailableLanguages(){const{buildMode:t,product:n,whitelabel:r}=this.#t;try{return Object.keys(this.#e[t]?.[n]?.[r]||{})}catch{return[]}}static update(t,n,r={}){const o={...this.#t,...r},{buildMode:u,product:a,whitelabel:i,lang:s}=o;try{return this.#e[u]||(this.#e[u]={}),this.#e[u][a]||(this.#e[u][a]={}),this.#e[u][a][i]||(this.#e[u][a][i]={}),this.#e[u][a][i][s]||(this.#e[u][a][i][s]={}),this.#e[u][a][i][s][t]=n,!0}catch(c){return console.error(`[MicrocopyManager] Error updating token: ${t}`,c),!1}}static delete(t,n={}){const r={...this.#t,...n},{buildMode:o,product:u,whitelabel:a,lang:i}=r;try{return delete this.#e[o]?.[u]?.[a]?.[i]?.[t],!0}catch(s){return console.error(`[MicrocopyManager] Error deleting token: ${t}`,s),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(t){try{return this.#e=t,!0}catch(n){return console.error("[MicrocopyManager] Error importing data",n),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:C});class ve{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const t=this.#a();C.setContext(t),console.log("[I18nController] Initialized with context:",t),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#s(),this.#c(),this.#e=!0,this.refresh()}static#r(t){const n={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},r=t.toLowerCase();return n[r]||"DEV"}static#a(){const n=this.#r("production"),r=localStorage.getItem(I.FF_SSE_LS_WHITELABEL)||I.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(I.FF_SSE_LS_USER_LANG)||I.FF_SSE_I18N_LANG;return{buildMode:n,product:I.FF_SSE_I18N_PRODUCT,whitelabel:r,lang:o}}static#s(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((t,n,r)=>{I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",r),this.#t=r,setTimeout(()=>{this.refresh()},I.FF_SSE_I18N_APPLY_DELAY_MS)},I.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#o())}static#o(){setInterval(()=>{const n=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");n&&n!==this.#t&&(this.#t=n,this.refresh())},500)}static#c(){this.#n||(this.#n=new MutationObserver(t=>{let n=!1;for(const r of t){for(const o of r.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){n=!0;break}if(n)break}n&&(I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#u(document.body),this.#i(document.body),I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#u(t){const n=t.querySelectorAll("[data-meta-copywrite-i118n]");I.FF_SSE_I18N_DEBUG&&n.length>0&&console.log(`[I18nController] Processing ${n.length} elements`),n.forEach(r=>{try{const o=r.getAttribute("data-meta-copywrite-i118n"),u=JSON.parse(o);if(!u.token){console.warn("[I18nController] Missing token in config:",u);return}const a=u.attribute||"textContent",i=C.get(u.token);if(i===null){console.warn(`[I18nController] Microcopy not found for token: ${u.token}`);return}a==="textContent"?r.textContent=i:a==="innerHTML"?r.innerHTML=i:r.setAttribute(a,i),I.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${i}" to ${a} for token: ${u.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,r)}})}static#i(t){t.querySelectorAll("*").forEach(r=>{r.shadowRoot&&(this.#u(r.shadowRoot),this.#i(r.shadowRoot))})}static setLanguage(t){const n=C.getAvailableLanguages();if(!n.includes(t)){console.error(`[I18nController] Language not available: ${t}. Available:`,n);return}localStorage.setItem(I.FF_SSE_LS_USER_LANG,t),C.setContext({lang:t}),console.log("[I18nController] Language changed to:",t);const r=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:t}});document.dispatchEvent(r),this.refresh()}static setWhitelabel(t){localStorage.setItem(I.FF_SSE_LS_WHITELABEL,t),C.setContext({whitelabel:t}),I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",t),this.refresh()}static getLanguage(){return C.getContext().lang}static getAvailableLanguages(){return C.getAvailableLanguages()}static getContext(){return C.getContext()}static destroy(){this.#n&&(this.#n.disconnect(),this.#n=null),this.#e=!1,this.#t=null,I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{ve.initialize()}):ve.initialize());class gn{static engine=null;static webllm=null;static isInitialized=!1;static currentModel=null;static isGenerating=!1;static isModelCached=!1;static DEFAULT_MODEL="Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC";static history=[];static MAX_HISTORY_MESSAGES=24;static noteAssistant(t){t&&(this.history.push({role:"assistant",content:String(t)}),this.trimHistory())}static noteUser(t){t&&(this.history.push({role:"user",content:String(t)}),this.trimHistory())}static trimHistory(){if(this.history.length<=this.MAX_HISTORY_MESSAGES)return;const t=this.history.length-this.MAX_HISTORY_MESSAGES;for(this.history=this.history.slice(t);this.history.length&&this.history[0].role!=="user";)this.history.shift();console.log(`[LLMController] Transcript trimmed to ${this.history.length} messages`)}static systemContext(){return{entity:globalThis.window?.AuthController?.getEntity?.()??null,route:globalThis.location?.hash??"",modelId:this.DEFAULT_MODEL}}static async initialize(){if(this.isInitialized)return console.log("[LLMController] Already initialized"),!0;console.log("[LLMController] Initializing WebLLM module...");try{if(!navigator.gpu)throw new Error("WebGPU is not available. Please use a supported browser (Chrome 113+, Edge 113+).");if(console.log("[LLMController] WebGPU detected"),this.webllm=await ee(()=>import("https://esm.run/@mlc-ai/web-llm"),[]),console.log("[LLMController] WebLLM module loaded"),!this.webllm||!this.webllm.MLCEngine)throw new Error("MLCEngine not found in WebLLM module");return this.engine=new this.webllm.MLCEngine,console.log("[LLMController] MLCEngine created"),this.engine.setInitProgressCallback(t=>{this.handleInitProgress(t)}),this.isModelCached=await this.checkModelCache(),this.isInitialized=!0,console.log("[LLMController] Engine initialized, attempting auto-load..."),await this.autoLoadCachedModel(),console.log("[LLMController] Initialization complete"),!0}catch(t){return console.error("[LLMController] Initialization failed:",t),_.publish(m.LLM_ERROR,{error:t.message,phase:"initialization"}),!1}}static async checkModelCache(){console.log(`[LLMController] Checking cache for model: ${this.DEFAULT_MODEL}`);try{const n=(await caches.keys()).find(i=>i.includes("webllm/model"));if(!n)return console.log("[LLMController] No WebLLM model cache found"),!1;const u=(await(await caches.open(n)).keys()).filter(i=>i.url.includes(this.DEFAULT_MODEL)||i.url.includes("Hermes-2-Pro-Llama-3-8B")),a=u.length>0;return console.log(`[LLMController] Model cached: ${a} (${u.length} files)`),a}catch(t){return console.warn("[LLMController] Cache check failed:",t.message),!1}}static async autoLoadCachedModel(){try{this.isModelCached?console.log(`[LLMController] Loading cached model: ${this.DEFAULT_MODEL}`):console.log(`[LLMController] No cached model found - starting download: ${this.DEFAULT_MODEL}`),await this.loadModel(),console.log("[LLMController] Model ready")}catch(t){console.error("[LLMController] Auto-load failed:",t)}}static async loadModel(){if(!this.isInitialized)return console.error("[LLMController] Cannot load model: not initialized"),_.publish(m.LLM_ERROR,{error:"LLMController not initialized",modelId:this.DEFAULT_MODEL}),!1;const t=this.isModelCached;console.log(`[LLMController] Loading model: ${this.DEFAULT_MODEL} (cached: ${t})`);try{const n={temperature:.7,top_p:.95};return await this.engine.reload(this.DEFAULT_MODEL,n),this.currentModel=this.DEFAULT_MODEL,this.isModelCached=!0,console.log(`[LLMController] Model loaded successfully: ${this.DEFAULT_MODEL}`),_.publish(m.LLM_COMPLETE,{modelId:this.DEFAULT_MODEL,cached:t}),!0}catch(n){return console.error("[LLMController] Failed to load model:",n),_.publish(m.LLM_ERROR,{error:n.message,modelId:this.DEFAULT_MODEL,phase:"download"}),!1}}static handleInitProgress(t){const n=(t.progress*100).toFixed(1);let r=t.text;(n>0||!t.text.includes("Loading model from cache"))&&(r=`${n}% - ${t.text}`),console.log(`[LLMController] Progress: ${r}`),_.publish(m.LLM_STATUS,{progress:t.progress,progressPercent:parseFloat(n),text:r,modelId:this.currentModel||this.DEFAULT_MODEL})}static async chat(t,n={}){const{turnId:r}=n,o=kt("res");if(!this.currentModel){console.error("[LLMController] No model loaded - still downloading or initialization failed"),_.publish(m.LLM_ERROR,{error:"AI model is still loading. Please wait a moment and try again.",phase:"chat",turnId:r,responseId:o});return}if(this.isGenerating){console.warn("[LLMController] Already generating response");return}console.log(`[LLMController] Processing chat message: "${t}"`);const u=dn.compose(this.systemContext()),a=dn.hash(u);this.history.push({role:"user",content:t}),this.trimHistory();const i=[{role:"system",content:u},...this.history];this.isGenerating=!0;let s="",c=null;try{const f=await this.engine.chat.completions.create({stream:!0,messages:i,stream_options:{include_usage:!0}});for await(const d of f){const l=d.choices[0]?.delta?.content;l&&(s+=l,_.publish(m.LLM_RESPONSE,{content:l,fullContent:s,done:!1,turnId:r,responseId:o,meta:{model:this.DEFAULT_MODEL,systemHash:a}})),d.usage&&(c=d.usage,console.log("[LLMController] Usage stats:",d.usage))}this.history.push({role:"assistant",content:s}),this.trimHistory(),_.publish(m.LLM_RESPONSE,{content:"",fullContent:s,done:!0,turnId:r,responseId:o,meta:{model:this.DEFAULT_MODEL,systemHash:a,usage:c}}),console.log(`[LLMController] Response complete (${s.length} chars)`)}catch(f){console.error("[LLMController] Chat error:",f),_.publish(m.LLM_ERROR,{error:f.message,phase:"chat",turnId:r,responseId:o})}finally{this.isGenerating=!1}}static async route(t){if(!this.currentModel||this.isGenerating)return null;const n=this.history.filter(a=>a.role==="user").slice(-2).map(a=>a.content),r=ar(n),o=or();if(!r||!o)return null;const u=[{role:"system",content:r},{role:"user",content:t}];try{const i=(await this.engine.chat.completions.create({stream:!1,messages:u,max_tokens:256,temperature:0,response_format:{type:"grammar",grammar:o}})).choices[0]?.message?.content;if(!i)return null;console.log("[LLMController] routing raw:",i);const s=JSON.parse(i),c=s.component_id,f=Rt().filter(l=>s[l]===!0);return(c===K?f.length===0:f.includes(c))||console.warn(`[LLMController] routing marked [${f.join(", ")}] but chose ${c}`),c&&c!==K&&!Rt().includes(c)?(console.error(`[LLMController] routed to "${c}", which is not in the generated grammar - the constrained decode is NOT in effect. Treating as a miss.`),null):!c||c===K?(console.log(`[LLMController] Routed to: ${K} - answering in prose`),null):(console.log("[LLMController] Routed to:",c,s.params??{}),{componentId:c,params:s.params??{}})}catch(a){return console.warn("[LLMController] Routing pass failed - falling through to prose",a),null}}static async extractParams(t,n,r){const o=ut(t,n);if(!o||!Object.keys(o.params).length)return{};if(!this.currentModel||this.isGenerating)return{};const u=Wo(t,n);if(!u)return{};const i=[{role:"system",content:[`Extract these values from the user's message: ${Object.keys(o.params).join(", ")}.`,"Copy them exactly as the user wrote them. Do not invent, complete, or correct a value.","If a value is not present in the message, return an empty string for it."].join(`
`)},{role:"user",content:r}];try{const c=(await this.engine.chat.completions.create({stream:!1,messages:i,max_tokens:256,temperature:0,response_format:{type:"json_object",schema:u}})).choices[0]?.message?.content;return console.log("[LLMController] extract raw:",c),c?JSON.parse(c):{}}catch(s){return console.warn("[LLMController] extraction failed",s),{}}}static cancelGeneration(){if(!this.isGenerating||!this.engine){console.warn("[LLMController] Nothing to cancel");return}console.log("[LLMController] Cancelling generation...");try{this.engine.interruptGenerate(),this.isGenerating=!1,console.log("[LLMController] Generation cancelled")}catch(t){console.error("[LLMController] Cancel failed:",t)}}static getStatus(){return{modelId:this.DEFAULT_MODEL,isLoaded:!!this.currentModel,isCached:this.isModelCached,isGenerating:this.isGenerating,messageCount:this.history.length}}static resetConversation(){this.history=[],console.log("[LLMController] Conversation reset")}}class Ut{static _initialized=!1;static _debug=!1;static init(t={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=t.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const n=r=>{this._handleSSEMessage(r)};return window.mvvSSEther.onmessage(n),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(t){try{this._debug&&console.log("[MachVive] SSE message received:",t);const n=t?.data;if(!n){this._debug&&console.log("[MachVive] No data in message, skipping");return}const r=n.data||n.package||n;if(!r){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=r.cfg;const u=r.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",u)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(i){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:i.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const a=o?.topic;if(!a){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",a),!this._isValidTopic(a)){console.warn(`[MachVive] Topic '${a}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(a,u,t,n)}catch(n){console.error("[MachVive] Error handling SSE message:",n)}}static _isValidTopic(t){return!m||!m.hasOwnProperty(t)?(console.warn(`[MachVive] Topic '${t}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(t,n,r,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const u=window.PubSub||PubSub,a={message:n,metadata:{source:"sse",sseEventId:r.id,timestamp:r.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${t}':`,a);const i=m[t];console.log(`[MachVive] AppBroadcast.${t} = '${i}'`),u.publish(i,a),console.log(`[MachVive] ✓ Published SSE message to topic: ${t}`)}catch(u){console.error(`[MachVive] Error publishing to topic '${t}':`,u)}}static debug(t){return this._debug=t,console.log(`[MachVive] Debug mode ${t?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=Ut);typeof window<"u"&&(window.MachVive=Ut);No(_,{app:"client-saas"});window.m5t=Object.create(null);window.m5t.pubsub=_;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(e){console.log("mvvLegit (direct): ReferenceError -",e.message)}const iu=Object.keys(window).filter(e=>e.toLowerCase().includes("mvv")||e.toLowerCase().includes("neodigm")||e.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",iu);const te=new go("/",{hash:!0});window.router=te;function Bt(e){const t=e?`${e.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),_.publish(m.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function Re(e){console.log("[Router] Navigating to:",e),te.navigate(`/${e}`)}te.on("/",()=>{console.log("[Router] Route: /"),_.publish(m.ROUTE_NAV_BEFORE,{route:"splash"}),ee(()=>Promise.resolve().then(()=>sr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"splash",error:e})})});te.on("/splash",()=>{console.log("[Router] Route: /splash"),_.publish(m.ROUTE_NAV_BEFORE,{route:"splash"}),ee(()=>Promise.resolve().then(()=>sr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"splash"})}).catch(e=>{console.error("[Router] Error loading splash route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"splash",error:e})})});te.on("/signin",()=>{console.log("[Router] Route: /signin"),_.publish(m.ROUTE_NAV_BEFORE,{route:"signin"}),ee(()=>Promise.resolve().then(()=>Eu),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"signin"})}).catch(e=>{console.error("[Router] Error loading signin route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"signin",error:e})})});te.on("/signup",()=>{console.log("[Router] Route: /signup"),_.publish(m.ROUTE_NAV_BEFORE,{route:"signup"}),ee(()=>Promise.resolve().then(()=>Su),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"signup"})}).catch(e=>{console.error("[Router] Error loading signup route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"signup",error:e})})});te.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),_.publish(m.ROUTE_NAV_BEFORE,{route:"verf-link"}),ee(()=>Promise.resolve().then(()=>Cu),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(e=>{console.error("[Router] Error loading verf-link route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"verf-link",error:e})})});te.on("/forgot",()=>{console.log("[Router] Route: /forgot"),_.publish(m.ROUTE_NAV_BEFORE,{route:"forgot"}),ee(()=>Promise.resolve().then(()=>Fu),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(e=>{console.error("[Router] Error loading forgot route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"forgot",error:e})})});te.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!Bt("resethash")){Re("signin");return}_.publish(m.ROUTE_NAV_BEFORE,{route:"resethash"}),ee(()=>Promise.resolve().then(()=>Uu),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(e=>{console.error("[Router] Error loading resethash route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"resethash",error:e})})});te.on("/home",()=>{if(console.log("[Router] Route: /home"),!Bt("home")){Re("signin");return}_.publish(m.ROUTE_NAV_BEFORE,{route:"home"}),ee(()=>Promise.resolve().then(()=>Aa),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"home"})}).catch(e=>{console.error("[Router] Error loading home route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"home",error:e})})});te.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!Bt("signout")){Re("signin");return}_.publish(m.ROUTE_NAV_BEFORE,{route:"signout"}),ee(()=>Promise.resolve().then(()=>Sa),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),_.publish(m.ROUTE_NAV_AFTER,{route:"signout"})}).catch(e=>{console.error("[Router] Error loading signout route:",e),_.publish(m.ROUTE_NAV_ERROR,{route:"signout",error:e})})});te.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),Re("splash")});_.subscribe(m.ROUTE_NAV,(e,t)=>{console.log("[Router] ROUTE_NAV event received:",t),t?.route&&Re(t.route)});function mn(){console.log("[App] Waiting for Neodigm 55 library...");let e=0;const t=100,n=setInterval(()=>{e++,e%10===0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(n),su()):e>=t&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,_.publish(m.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",mn):mn();async function su(){if(console.log("[App] Neodigm 55 loaded, initializing..."),eu(),ve.initialize(),console.log("[App] I18n Controller initialized"),gn.initialize().then(n=>{n?console.log("[App] LLM Controller initialized successfully"):console.warn("[App] LLM Controller initialization failed (non-critical)")}).catch(n=>{console.error("[App] LLM Controller initialization error:",n)}),!await he.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),Re(n)}})){console.error("[App] AuthController initialization failed");return}const t=he.getEntity();t&&(console.log("[App] Session restored for:",t.email),_.publish(m.APP_USER_LOADED,{entity:t})),_.publish(m.APP_READY,{timestamp:new Date().toISOString(),sessionUser:t}),te.resolve(),window.AuthController=he,window.I18nController=ve,window.LLMController=gn,window.MachVive=Ut,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, LLMController, MachVive available globally)")}_.subscribe(m.ROUTE_NAV_AFTER,(e,t)=>{typeof ve<"u"&&ve.refresh&&setTimeout(()=>{ve.refresh()},100)});const cu=Object.freeze({admin_root_role:{value:100,desc:"Administrator superuser infrastructure architecture"},admin_business_role:{value:90,desc:"Administrator financial oversight"},admin_support_role:{value:80,desc:"Administrator maintenance and configuration"},admin_readonly_role:{value:70,desc:"Administrator information help desk"},client_tier_3_role:{value:30,desc:"Client paid tier 3"},client_tier_2_role:{value:20,desc:"Client paid tier 2"},client_tier_1_role:{value:10,desc:"Client paid tier 1"},client_standard_role:{value:0,desc:"Client free tier 0"}});function Lt(e){return cu[e]||null}class lu{static MIN_ROLE_VALUE=50;static COMMANDS={help:"Show available commands",clear:"Clear chat canvas",debug:"Toggle debug mode (::debug on|off)",version:"Show application version",feature:"Feature flag operations (::feature list|get|set)",model:"LLM model operations (::model status|download|clear)",reload:"Reload the page",export:"Export chat history as JSON",theme:"Toggle theme (::theme dark|light)",auth:"Show authentication status",template:"Template registry (::template list|show|schema|render)"};static hasAccess(t){if(!t||!t.class)return!1;let n=0;if(typeof t.class=="string"){const r=Lt(t.class);n=r?r.value:0}else typeof t.class=="object"&&t.class.value!==void 0&&(n=t.class.value);return console.log(`[CLIController] Role check: ${t.class} → value: ${n}`),n>=this.MIN_ROLE_VALUE}static async process(t,n){if(!this.hasAccess(n))return{error:!0,message:`⛔ **Access Denied**

CLI commands require admin privileges (role ≥ 50).`};const r=t.slice(2).trim(),[o,...u]=r.split(/\s+/);switch(console.log("[CLIController] Processing command:",o,"Args:",u),o.toLowerCase()){case"help":return this.cmdHelp();case"clear":return this.cmdClear();case"debug":return this.cmdDebug(u);case"version":return this.cmdVersion();case"feature":return this.cmdFeature(u);case"model":return this.cmdModel(u);case"reload":return this.cmdReload();case"export":return this.cmdExport();case"theme":return this.cmdTheme(u);case"auth":return this.cmdAuth(n);case"template":return this.cmdTemplate(u);default:return{error:!0,message:`❌ **Unknown command:** \`${o}\`

Type \`::help\` for available commands.`}}}static cmdHelp(){let t=`📖 **CLI Commands**

`;t+="Available commands (prefix with `::`)\n\n";for(const[n,r]of Object.entries(this.COMMANDS))t+=`• \`::${n}\` - ${r}
`;return t+=`
**Examples:**
`,t+="• `::debug on` - Enable debug logging\n",t+="• `::feature list` - Show all feature flags\n",t+="• `::model status` - Check LLM model status\n",{message:t}}static cmdClear(){const t=document.getElementById("chat-messages");if(!t)return{error:!0,message:"❌ Failed to clear canvas"};t.innerHTML="";const n=window.LLMController?.history?.length??0;return window.LLMController?.resetConversation(),{message:`✅ Chat canvas cleared${n?` (and ${n} transcript messages)`:""}`}}static cmdDebug(t){const n=t[0]?.toLowerCase();if(!n||!["on","off"].includes(n))return{message:`🐛 **Debug Mode**

Current state: \`${localStorage.getItem("debug_mode")==="true"?"ON":"OFF"}\`

Usage: \`::debug on|off\``};const r=n==="on";return localStorage.setItem("debug_mode",r),{message:`🐛 Debug mode ${r?"**enabled**":"**disabled**"}`}}static cmdVersion(){return{message:`ℹ️ **StreamSyncEngage SaaS Client**

Version: 1.0.0
Build: production
Node Env: production`}}static cmdFeature(t){const n=t[0]?.toLowerCase();if(!n)return{message:"🚩 **Feature Flags**\n\nUsage:\n• `::feature list` - List all flags\n• `::feature get <name>` - Get flag value\n• `::feature set <name> <value>` - Set flag value"};switch(n){case"list":{let r=`🚩 **Feature Flags**

`;const o=Object.entries(I).slice(0,20);for(const[u,a]of o)r+=`• \`${u}\`: \`${a}\`
`;return r+=`
*Showing 20 of ${Object.keys(I).length} flags*`,{message:r}}case"get":{const r=t[1];if(!r)return{error:!0,message:"❌ Flag name required: `::feature get <name>`"};const o=I[r];return o===void 0?{error:!0,message:`❌ Flag not found: \`${r}\``}:{message:`🚩 \`${r}\` = \`${o}\``}}case"set":return{message:`⚠️ **Feature flag modification**

Setting flags dynamically is not yet implemented.
Flags are loaded from \`featureFlags.js\`.`};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdModel(t){const n=t[0]?.toLowerCase();if(!n)return{message:"🤖 **LLM Model Operations**\n\nUsage:\n• `::model status` - Show model status\n• `::model download` - Download model\n• `::model clear` - Clear model cache"};switch(n){case"status":{if(!window.LLMController)return{error:!0,message:"❌ LLMController not available"};const r=window.LLMController.getStatus();let o=`🤖 **LLM Model Status**

`;return o+=`• Model: \`${r.modelId}\`
`,o+=`• Loaded: \`${r.isLoaded?"YES":"NO"}\`
`,o+=`• Cached: \`${r.isCached?"YES":"NO"}\`
`,o+=`• Generating: \`${r.isGenerating?"YES":"NO"}\`
`,o+=`• Message Count: \`${r.messageCount}\`
`,{message:o}}case"download":return window.LLMController?(window.LLMController.loadModel(),{message:"⏳ Starting model download..."}):{error:!0,message:"❌ LLMController not available"};case"clear":return{message:`⚠️ **Clear Model Cache**

Clearing browser cache requires manual action:
1. Open DevTools (F12)
2. Application → Storage → Cache Storage
3. Delete \`webllm/model\``};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdReload(){return setTimeout(()=>{window.location.reload()},500),{message:"🔄 Reloading page..."}}static cmdExport(){const t=document.getElementById("chat-messages");if(!t)return{error:!0,message:"❌ Chat canvas not found"};const r=Array.from(t.children).map(s=>({type:s.tagName.toLowerCase().includes("prompt")?"user":"assistant",message:s.getAttribute("message"),timestamp:s.getAttribute("timestamp")})),o=JSON.stringify(r,null,2),u=new Blob([o],{type:"application/json"}),a=URL.createObjectURL(u),i=document.createElement("a");return i.href=a,i.download=`chat-export-${Date.now()}.json`,i.click(),URL.revokeObjectURL(a),{message:`✅ Exported ${r.length} messages`}}static cmdTheme(t){const n=t[0]?.toLowerCase();return!n||!["dark","light"].includes(n)?{message:"🎨 **Theme Toggle**\n\nUsage: `::theme dark|light`"}:(localStorage.setItem("theme",n),{message:`🎨 Theme set to **${n}**

⚠️ Theme switching not yet implemented in UI.`})}static async cmdTemplate(t){const n=t[0]?.toLowerCase();if(!n)return{message:'🧩 **Template Registry**\n\nUsage:\n• `::template list` - Registered views\n• `::template show <ID>` - Entry detail\n• `::template schema` - Grammar the model is constrained to\n• `::template prompt` - The classifier system prompt\n• `::template route "<text>"` - Probe the router without spending a turn\n• `::template render <ID> [json]` - Render without the model'};switch(n){case"list":{const r=Ho();if(!r.length)return{message:`🧩 **Template Registry**

*No templates registered.*`};let o=`🧩 **Template Registry**

`;for(const u of r)o+=`• \`${u.id}\` - ${u.when}
`;return o+=`
*${r.length} registered*`,{message:o}}case"show":{const r=t[1];if(!r)return{error:!0,message:"❌ Template id required: `::template show <ID>`"};const o=Ot(r);if(!o)return{error:!0,message:`❌ Not registered: \`${r}\``};let u=`🧩 **${o.id}**

`;return u+=`• When: ${o.when}
`,u+=`• Params: \`${JSON.stringify(o.params)}\`
`,u+=`• Source: \`${o.source||"none"}\`
`,u+=`• Fetches: \`${o.fetch?"YES":"NO"}\`
`,{message:u}}case"schema":return{message:"🧩 **Routing Grammar** (EBNF - what constrains the decode)\n\n```\n"+(or()||"(nothing registered)")+"\n```\n\n**JSON Schema** (unused by routing; for param extraction)\n\n```json\n"+JSON.stringify(Vo(),null,2)+"\n```"};case"prompt":{const r=ar();return{message:r?"🧩 **Routing Prompt**\n\n```\n"+r+"\n```":"🧩 *No templates registered - the routing pass is skipped entirely.*"}}case"route":{const r=t.slice(1).join(" ").trim().replace(/^["']|["']$/g,"");if(!r)return{error:!0,message:'❌ Text required: `::template route "what is a cat"`'};if(!window.LLMController?.getStatus?.().isLoaded)return{error:!0,message:"⏳ Model not loaded yet - routing is skipped until it is"};const o=await window.LLMController.route(r);return{message:`🧭 \`${_e(r)}\`

`+(o?`→ **${o.componentId}**
params: \`${JSON.stringify(o.params)}\``:`→ **${K}** - would answer in prose

*(a failed pass also lands here - check the console)*`)}}case"render":{const r=t[1];if(!r)return{error:!0,message:"❌ Template id required: `::template render <ID> [json]`"};if(!Ot(r))return{error:!0,message:`❌ Not registered: \`${r}\``};let o={};const u=t.slice(2).join(" ").trim();if(u)try{o=JSON.parse(u)}catch(a){return{error:!0,message:`❌ Params must be JSON: ${a.message}`}}return _.publish(m.CONVERSATION_RESPONSE_WORKFLOW,W({role:$.ASSISTANT,source:j.SYSTEM,sinks:[H.WORKFLOW],directive:{componentId:r,params:o}})),{message:`🧩 Rendering \`${r}\`...`}}default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdAuth(t){if(!t)return{error:!0,message:"❌ Not authenticated"};let n="Unknown",r=0;if(typeof t.class=="string"){const u=Lt(t.class);u&&(n=u.desc,r=u.value)}else typeof t.class=="object"&&(n=t.class.desc||"Unknown",r=t.class.value||0);let o=`🔐 **Authentication Status**

`;return o+=`• Email: \`${t.email}\`
`,o+=`• Name: \`${t.first} ${t.last}\`
`,o+=`• Role: \`${t.class}\`
`,o+=`• Role Description: \`${n}\`
`,o+=`• Role Value: \`${r}\`
`,o+=`• Company: \`${t.company||"N/A"}\`
`,o+=`• Status: \`${t.status||"Unknown"}\`
`,{message:o}}}const du=Object.freeze(Object.defineProperty({__proto__:null,default:lu},Symbol.toStringTag,{value:"Module"}));function fu(){return`
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
  `}function hu(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const e=localStorage.getItem(I.FF_SSE_LS_TOKEN),t=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!e,hasMvvTs:!!t});const n=document.getElementById("splash-loader"),r=document.getElementById("splash-actions");e?(console.log("[SplashRoute] Auth token found → HOME"),_.publish(m.ROUTE_NAV,{route:"home"})):t?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),_.publish(m.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),n&&(n.style.display="none"),r&&(r.style.display="flex"),document.querySelectorAll("[data-route]").forEach(u=>{u.addEventListener("click",()=>{const a=u.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${a}`),_.publish(m.ROUTE_NAV,{route:a})})}))},4e3)}const sr=Object.freeze(Object.defineProperty({__proto__:null,init:hu,render:fu},Symbol.toStringTag,{value:"Module"}));function $t(e){return e=String(e),Math.abs(e.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0))}function pu(){return`
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
  `}function gu(){console.log("[SigninRoute] Initialized");const e=document.getElementById("loginForm"),t=document.getElementById("email"),n=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const u=n.type==="password"?"text":"password";n.type=u}),e?.addEventListener("submit",async u=>{u.preventDefault();const a=t.value.trim(),i=n.value;mu(a,t)&&_u(i,n)&&await bu(a,i)}),document.getElementById("link--uc__underline")?.addEventListener("click",u=>{u.preventDefault(),_.publish(m.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",u=>{u.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),_.publish(m.ROUTE_NAV,{route:"signup"})})}function mu(e,t){if(!e)return Xe(t,C.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,r=(e.match(/\./g)||[]).length;return n!==1||r<1?(Xe(t,C.get("validation_email_invalid")),!1):!0}function _u(e,t){return e?e.length<10?(Xe(t,C.get("validation_password_min_length")),!1):!0:(Xe(t,C.get("validation_password_required")),!1)}function Xe(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function bu(e,t){const n=document.querySelector(".btn");n.disabled=!0,n.textContent=C.get("loading_signing_in");try{const r=$t(t),o=await he.doSignin(e,r);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(C.get("success_welcome_back"),"success"),_.publish(m.AUTH_SIGNIN_SUCCESS,{entity:he.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(C.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||C.get("error_signin_failed"),"danger"),n.disabled=!1,n.textContent=C.get("sign_in").toUpperCase())}catch(r){console.error("[SigninRoute] Sign in error:",r),typeof neodigmToast<"u"&&neodigmToast.q(r.message||C.get("error_network"),"danger"),n.disabled=!1,n.textContent=C.get("sign_in").toUpperCase(),_.publish(m.AUTH_SIGNIN_FAIL,{message:r.message})}}const Eu=Object.freeze(Object.defineProperty({__proto__:null,init:gu,render:pu},Symbol.toStringTag,{value:"Module"}));function cr(e){const t=[];return e.length<10&&t.push("at least 10 characters"),/[a-z]/.test(e)||t.push("1 lowercase"),/[A-Z]/.test(e)||t.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push("1 special character"),/[^\x00-\x7F]/.test(e)&&t.push("ASCII characters only"),t}function lr(e){return e.length===0?"":e.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":e.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function yu(){return`
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
  `}function vu(){console.log("[SignupRoute] Initialized");const e=document.getElementById("signupForm"),t=e.querySelector('button[type="submit"]');_n("togglePassword","password","eyeIcon"),_n("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",r=>{r.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),_.publish(m.ROUTE_NAV,{route:"signin"})}),e.addEventListener("submit",async r=>{r.preventDefault();const o=document.getElementById("first").value.trim(),u=document.getElementById("last").value.trim(),a=document.getElementById("email").value.trim(),i=document.getElementById("company").value.trim(),s=document.getElementById("phone").value.trim(),c=document.getElementById("password").value,f=document.getElementById("confirmPassword").value,d=document.getElementById("first"),l=document.getElementById("last"),p=document.getElementById("email"),g=document.getElementById("password"),b=document.getElementById("confirmPassword");if(bn(o,d,C.get("validation_first_name_required"))&&bn(u,l,C.get("validation_last_name_required"))&&Au(a,p)&&Tu(c,g)){if(c!==f){Se(b,C.get("validation_password_mismatch"));return}t.disabled=!0,t.textContent=C.get("loading_creating_account"),await wu(o,u,a,i,s,c)}})}function _n(e,t,n){const r=document.getElementById(e),o=document.getElementById(t),u=document.getElementById(n);!r||!o||!u||r.addEventListener("click",()=>{const a=o.type==="password";o.type=a?"text":"password",a?u.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:u.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function bn(e,t,n){return e?!0:(Se(t,n),!1)}function Au(e,t){if(!e)return Se(t,C.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,r=(e.match(/\./g)||[]).length;return n!==1||r<1?(Se(t,C.get("validation_email_invalid")),!1):!0}function Tu(e,t){if(!e)return Se(t,C.get("validation_password_required")),!1;const n=cr(e);return n.length>0?(Se(t,lr(n)),!1):!0}function Se(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function wu(e,t,n,r,o,u){const a=document.querySelector('button[type="submit"]');try{const i=$t(u),s={email:n,hash:i,first:e,last:t};r&&(s.company=r),o&&(s.phone=o);const c=await he.doSignup(s);if(c.ok)_.publish(m.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const f=c.error||c.message||C.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(f,"danger"),a.disabled=!1,a.textContent=C.get("create_account").toUpperCase(),_.publish(m.AUTH_SIGNUP_FAIL,{message:f})}}catch(i){console.error("[SignupRoute] Sign up error:",i),typeof neodigmToast<"u"&&neodigmToast.q(i.message||C.get("error_network"),"danger"),a.disabled=!1,a.textContent=C.get("create_account").toUpperCase(),_.publish(m.AUTH_SIGNUP_FAIL,{message:i.message})}}const Su=Object.freeze(Object.defineProperty({__proto__:null,init:vu,render:yu},Symbol.toStringTag,{value:"Module"}));function xu(){return`
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
  `}function ku(){console.log("[VerfLinkRoute] Initialized");const e=7200,t=Date.now(),n=document.getElementById("countdown-display");function r(){const u=Date.now()-t,a=Math.floor(u/1e3),i=Math.max(0,e-a),s=Math.floor(i/3600),c=Math.floor(i%3600/60),f=i%60,d=`${String(s).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(f).padStart(2,"0")}`;n&&(n.textContent=d,i<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),i===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),i===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}r();const o=setInterval(r,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const Cu=Object.freeze(Object.defineProperty({__proto__:null,init:ku,render:xu},Symbol.toStringTag,{value:"Module"})),Ru="https://streamsyncengage-saas.onrender.com";class Ou{constructor(){this.baseUrl=Ru}async request(t,n={}){const r=`${this.baseUrl}${t}`,o={"Content-Type":"application/json",...n.headers};try{const u=await fetch(r,{...n,headers:o});if(u.status===401||u.status===403){_.publish(m.AUTH_TOKEN_EXPIRED,{status:u.status,endpoint:t});const i=await u.json().catch(()=>({}));throw new Error(i.error||"Authentication failed")}const a=await u.json();return{ok:u.ok,status:u.status,data:a}}catch(u){throw console.error("API Request Error:",u),_.publish(m.APP_ERROR,{message:u.message,endpoint:t}),u}}async get(t){return this.request(t,{method:"GET"})}async post(t,n){return this.request(t,{method:"POST",body:JSON.stringify(n)})}async put(t,n){return this.request(t,{method:"PUT",body:JSON.stringify(n)})}async delete(t){return this.request(t,{method:"DELETE"})}async signin(t,n){return this.post("/api/acctEntity/signin",{email:t,hash:n})}async signup(t){return this.post("/api/acctEntity/signup",t)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(t){return this.post("/api/acctEntity/forgot",{email:t})}async resetHash(t,n){return this.post("/api/acctEntity/resethash",{email:t,hash:n})}async verifyAccount(t){return this.get(`/api/acctEntity/verify?CODE=${t}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(t){return this.get(`/api/acctEntity/${t}`)}async updateAccount(t,n){return this.put(`/api/acctEntity/${t}`,n)}async deleteAccount(t){return this.delete(`/api/acctEntity/${t}`)}async ping(){return this.get("/ping")}}const je=new Ou;function Nu(){return`
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

  `}function Lu(){console.log("[ForgotRoute] Initialized");const e=document.getElementById("forgot-form"),t=document.getElementById("email");e?.addEventListener("submit",async n=>{n.preventDefault();const r=t.value.trim();Iu(r,t)&&await Du(r)})}function Iu(e,t){if(!e)return En(t,C.get("validation_email_required")),!1;const n=(e.match(/@/g)||[]).length,r=(e.match(/\./g)||[]).length;return n!==1||r<1?(En(t,C.get("validation_email_invalid")),!1):!0}function En(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}async function Du(e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent="SENDING...";try{const n=await je.forgotPassword(e);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(C.get("success_reset_link_sent"),"success"),_.publish(m.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||C.get("error_signin_failed"),"danger"),t.disabled=!1,t.textContent=C.get("send_reset_link").toUpperCase())}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||C.get("error_network"),"danger"),t.disabled=!1,t.textContent=C.get("send_reset_link").toUpperCase()}}const Fu=Object.freeze(Object.defineProperty({__proto__:null,init:Lu,render:Nu},Symbol.toStringTag,{value:"Module"}));function Pu(){return`
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
                value="${he.getEntity()?.email||""}"
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
  `}function Mu(){console.log("[ResethashRoute] Initialized");const e=document.getElementById("resethash-form"),t=e.querySelector('button[type="submit"]');yn("toggleNewPassword","new-password","eyeIconNew"),yn("toggleConfirmPassword","confirm-password","eyeIconConfirm"),e?.addEventListener("submit",async n=>{n.preventDefault();const r=e.email.value.trim(),o=e.newPassword.value,u=e.confirmPassword.value,a=document.getElementById("new-password"),i=document.getElementById("confirm-password");if(!o){Te(a,C.get("validation_new_password_required"));return}const s=cr(o);if(s.length>0){Te(a,lr(s));return}if(!u){Te(i,C.get("validation_new_password_required"));return}if(o!==u){Te(i,C.get("validation_password_mismatch"));return}t.disabled=!0,t.textContent=C.get("loading_resetting_password");try{const c=$t(o),f=await he.doResetHash(r,c);f.ok?(typeof neodigmToast<"u"&&neodigmToast.q(C.get("success_password_reset"),"success"),_.publish(m.AUTH_RESETHASH_SUCCESS,{email:r})):(Te(a,f.error||C.get("error_signin_failed")),t.disabled=!1,t.textContent=C.get("update_password").toUpperCase())}catch(c){console.error("[ResethashRoute] Reset password error:",c),Te(a,c.message||C.get("error_network")),t.disabled=!1,t.textContent=C.get("update_password").toUpperCase()}})}function yn(e,t,n){const r=document.getElementById(e),o=document.getElementById(t),u=document.getElementById(n);!r||!o||!u||r.addEventListener("click",()=>{const a=o.type==="password";o.type=a?"text":"password",a?u.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:u.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Te(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}const Uu=Object.freeze(Object.defineProperty({__proto__:null,init:Mu,render:Pu},Symbol.toStringTag,{value:"Module"}));class at{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"SILOS",caption:"Silos",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Data silo management",secondary:[{token:"CACHE",caption:"Cache",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Cache management and statistics",secondary:[]},{token:"LIFECYCLE",caption:"Lifecycle",enabled:!0,icon:"fas fa-recycle",admin_role:!1,tagline:"Data lifecycle and retention policies",secondary:[]}]},{token:"NOTIFICATIONS",caption:"Notifications",enabled:!0,icon:"fas fa-bell",admin_role:!1,tagline:"Notification management",secondary:[{token:"BELL_DRAWER",caption:"Bell Drawer",enabled:!0,icon:"fas fa-inbox",admin_role:!1,tagline:"Notification drawer configuration",secondary:[]},{token:"WEB_HOOKS",caption:"Web Hooks",enabled:!0,icon:"fas fa-webhook",admin_role:!1,tagline:"Webhook configuration and monitoring",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"fas fa-chart-line",admin_role:!1,tagline:"User engagement tools",secondary:[{token:"AB_TESTS",caption:"A/B Tests",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"FEEDBACK",caption:"Feedback",enabled:!0,icon:"fas fa-comments",admin_role:!1,tagline:"User feedback collection",secondary:[]},{token:"GUIDED_TOURS",caption:"Guided Tours",enabled:!0,icon:"fas fa-route",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"fas fa-clipboard-list",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]},{token:"SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"fas fa-images",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"SURVEYS",caption:"Surveys",enabled:!0,icon:"fas fa-poll",admin_role:!1,tagline:"Survey campaigns and analytics",secondary:[]},{token:"VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"fas fa-voicemail",admin_role:!1,tagline:"Voice message management",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static setAppToken(t){this.#t[t]||console.warn(`[NavMetaManager] Unknown app token: ${t}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=t,console.log(`[NavMetaManager] App token set: ${t}`)}static getAppToken(){return this.#e}static#n(t){if(!t)return t;const n=t.token.toLowerCase(),r=`nav_${n}`,o=`nav_${n}_tagline`,u=C.get(r)||t.caption,a=C.get(o)||t.tagline;return{...t,caption:u,tagline:a,secondary:t.secondary?t.secondary.map(i=>this.#n(i)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(n=>this.#n(n)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const t=this.getPrimaryNav(),n=[];return t.forEach(r=>{n.push(r),r.secondary&&r.secondary.length>0&&n.push(...r.secondary)}),n}static getNavByToken(t){return this.getFlattenedNav().find(r=>r.token===t)||null}static getAdminNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(t="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const n=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,r=await fetch(`${t}/coreMeta?meta_token=${n}`);if(!r.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${r.status}), using static config`),this.getPrimaryNav();const o=await r.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${n}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(n){return console.error("[NavMetaManager] Error fetching from coreMeta:",n),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:at});class Bu extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const t=at.getPrimaryNav();t&&t.length>0?(this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const t=this.getAttribute("data-buttons");if(t)try{this.buttons=JSON.parse(t);const n=this.buttons.find(r=>r.selected);this.selectedPrimaryToken=n?n.token:this.buttons[0]?.token||null}catch(n){console.error("[M5TPrimaryNav] Error parsing buttons:",n),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(n=>n.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(t,n){if(n==="primary"){const r=this.buttons.find(o=>o.token===t);return{caption:r?.caption||"",tagline:r?.tagline||""}}else for(const r of this.buttons)if(r.secondary){const o=r.secondary.find(u=>u.token===t);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const t=this.getSecondaryButtons(),n=t.length>0;this.shadowRoot.innerHTML=`
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
          grid-template-areas: "logo ${this.buttons.map((r,o)=>`btn${o}`).join(" ")}";
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
          ${this.buttons.map((r,o)=>this.renderButton(r,o,"primary")).join("")}
        </nav>
        <nav class="secondary-nav">
          ${n?t.map((r,o)=>this.renderButton(r,o,"secondary")).join(""):""}
        </nav>
      </div>
    `}renderButton(t,n,r="primary"){const o=r==="primary"?t.token===this.selectedPrimaryToken:!1,u=typeof t.count=="number"&&t.count!==null&&t.count!==void 0,a=t.icon&&t.icon.trim()!=="",i=t.tagline&&t.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${t.token}"
        data-level="${r}"
        data-admin="${t.admin_role||!1}"
        ${t.enabled?"":"disabled"}
        ${i?`title="${t.tagline}"`:""}
        style="grid-area: ${r==="primary"?`btn${n}`:"auto"}"
      >
        ${a?`<i class="${t.icon} nav-button-icon"></i>`:""}
        <span>${t.caption}</span>
        ${u?`<span class="count-badge">${t.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(r=>{const o=r.getAttribute("data-token"),u=r.getAttribute("data-level");r.addEventListener("click",a=>{o&&!a.currentTarget.disabled&&!this.longTapFired&&(u==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),r.addEventListener("dblclick",a=>{if(o&&!a.currentTarget.disabled){const i=this.getButtonData(o,u);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:u,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))}}),r.addEventListener("mouseenter",a=>{if(o&&!a.currentTarget.disabled){const i=this.getButtonData(o,u);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:u,caption:i.caption,tagline:i.tagline,action:"enter",timestamp:Date.now()}}))}}),r.addEventListener("mouseleave",a=>{if(o&&!a.currentTarget.disabled){const i=this.getButtonData(o,u);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:u,caption:i.caption,tagline:i.tagline,action:"leave",timestamp:Date.now()}}))}}),r.addEventListener("mousedown",a=>{o&&!a.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const i=this.getButtonData(o,u);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:u,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),r.addEventListener("mouseup",a=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),r.addEventListener("mouseleave",a=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const n=this.shadowRoot.querySelector(".logo");n&&n.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(t){const n=this.buttons.find(o=>o.token===t),r=this.getButtonData(t,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,level:"primary",caption:r.caption,tagline:r.tagline,hasSecondary:(n?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==t&&(this.selectedPrimaryToken=t,this.render(),this.attachEventListeners())}selectSecondaryButton(t){const n=this.getButtonData(t,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:n.caption,tagline:n.tagline,timestamp:Date.now()}}))}updateButtons(t){this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(t,n,r="primary"){let o;r==="primary"?o=this.buttons.find(u=>u.token===t):o=this.getSecondaryButtons().find(a=>a.token===t),o&&(o.count=n,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",Bu);class $u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp"]}attributeChangedCallback(t,n,r){n!==r&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const t=this.getAttribute("timestamp");return t||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}escapeHtml(t){const n=document.createElement("div");return n.textContent=t,n.innerHTML}render(){const t=this.getMessage(),n=this.getTimestamp(),r=this.shouldShowTimestamp();this.shadowRoot.innerHTML=`
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
      ${r?`<div class="bubble-timestamp">${this.escapeHtml(n)}</div>`:""}
    `}}customElements.define("m5t-chat-prompt",$u);class Gu extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.attachEventListeners()}getPlaceholder(){return this.getAttribute("placeholder")||"Type your message..."}getMaxRows(){return parseInt(this.getAttribute("max-rows"))||5}render(){const t=this.getPlaceholder(),n=this.getMaxRows();this.shadowRoot.innerHTML=`
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
    `}attachEventListeners(){const t=this.shadowRoot.getElementById("prompt-textarea"),n=this.shadowRoot.getElementById("send-btn"),r=this.shadowRoot.getElementById("cancel-btn");!t||!n||!r||(t.addEventListener("input",()=>{this.autoExpandTextarea(t)}),t.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this.handleSend())}),n.addEventListener("click",()=>{this.handleSend()}),r.addEventListener("click",()=>{this.handleCancel()}))}autoExpandTextarea(t){t.style.height="auto",t.style.height=t.scrollHeight+"px"}handleSend(){const t=this.shadowRoot.getElementById("prompt-textarea");if(!t)return;const n=t.value.trim();if(!n){console.warn("[M5TChatPromptArea] Cannot send empty message");return}const r=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:n,timestamp:r,pubsubTopic:"CONVERSATION.PROMPT.AGENT_CANVAS"};console.log("[M5TChatPromptArea] Dispatching message-sent event:",o),t.value="",t.style.height="auto",this.dispatchEvent(new CustomEvent("message-sent",{bubbles:!0,composed:!0,detail:o}))}handleCancel(){const t=this.shadowRoot.getElementById("prompt-textarea");t&&(t.value="",t.style.height="auto",console.log("[M5TChatPromptArea] Input cancelled"),this.dispatchEvent(new CustomEvent("message-cancelled",{bubbles:!0,composed:!0})))}getMessage(){const t=this.shadowRoot.getElementById("prompt-textarea");return t?t.value:""}setMessage(t){const n=this.shadowRoot.getElementById("prompt-textarea");n&&(n.value=t,this.autoExpandTextarea(n))}clear(){this.handleCancel()}focus(){const t=this.shadowRoot.getElementById("prompt-textarea");t&&t.focus()}}customElements.define("m5t-chat-prompt-area",Gu);let We=null,It=null;function Hu(e){It=Promise.resolve().then(e).then(t=>(We=t,t)).catch(t=>(console.warn("[M5TChatResponse] markdown renderer failed to load - falling back to plain text",t),null))}function dr(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}async function Vu(e){if(!We&&It&&await It,We)try{return We(e)}catch(t){console.warn("[M5TChatResponse] markdown render failed - falling back to plain text",t)}return dr(e).replace(/\n/g,"<br>")}const zu=e=>(globalThis.requestAnimationFrame||(t=>setTimeout(t,16)))(e),qu=`
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
`;class Yu extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._built=!1,this._pending=!1,this._painted=null}static get observedAttributes(){return["message","timestamp","show-timestamp","avatar","show-avatar"]}connectedCallback(){this.buildShell(),this.paint()}attributeChangedCallback(t,n,r){if(!(n===r||!this._built)){if(t==="message"){this.schedulePaint();return}if(t==="avatar"||t==="show-avatar"){this.buildShell(),this._painted=null,this.paint();return}this.paintTimestamp()}}getMessage(){return this.getAttribute("message")||""}getTimestamp(){return this.getAttribute("timestamp")||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}getAvatar(){return this.getAttribute("avatar")||""}shouldShowAvatar(){return this.getAttribute("show-avatar")==="true"&&!!this.getAvatar()}buildShell(){const t=this.shouldShowAvatar()?`<img src="${dr(this.getAvatar())}" alt="Avatar" class="avatar">`:"";this.shadowRoot.innerHTML=`
      <style>${qu}</style>
      <div class="bubble-wrapper">
        ${t}
        <div>
          <div class="bubble-content"></div>
          <div class="bubble-timestamp"></div>
        </div>
      </div>
    `,this._content=this.shadowRoot.querySelector(".bubble-content"),this._timestamp=this.shadowRoot.querySelector(".bubble-timestamp"),this._built=!0,this.paintTimestamp()}paintTimestamp(){this._timestamp&&(this._timestamp.textContent=this.getTimestamp(),this._timestamp.hidden=!this.shouldShowTimestamp())}schedulePaint(){this._pending||(this._pending=!0,zu(()=>{this._pending=!1,this.paint()}))}async paint(){if(!this._built||!this._content)return;const t=this.getMessage();if(t===this._painted||t===""&&this._painted===null)return;this._painted=t;const n=await Vu(t);this._painted===t&&(this._content.innerHTML=n)}}customElements.define("m5t-chat-response",Yu);const Ku="CONVERSATION.PROMPT.AGENT_CANVAS",ju=`
  :host {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 92%;
    animation: slideIn 0.3s ease-out;
  }

  /* A rendered template owns its own width. Tables, quilts and card grids need
     the whole canvas, and an <ether5-grid> in particular derives its cell size
     from the container's inline size - constraining the bubble here would shrink
     every card in it.
     Scoped to [template-id], which setContent() reflects only once real content
     is installed, so an empty bubble keeps the narrow default. */
  :host([template-id]) {
    align-self: stretch;
    max-width: none;
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
`;class Wu extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._built=!1,this._html="",this._meta={}}static get observedAttributes(){return["timestamp","show-timestamp"]}connectedCallback(){this.buildShell(),this.paint()}attributeChangedCallback(t,n,r){n===r||!this._built||this.paintTimestamp()}setContent(t,n={}){this._html=String(t??""),this._meta=n??{},n.templateId&&this.setAttribute("template-id",n.templateId),this.paint()}getTimestamp(){return this.getAttribute("timestamp")||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}buildShell(){this._built||(this.shadowRoot.innerHTML=`
      <style>${ju}</style>
      <div>
        <div class="bubble-content"></div>
        <div class="bubble-timestamp"></div>
      </div>
    `,this._content=this.shadowRoot.querySelector(".bubble-content"),this._timestamp=this.shadowRoot.querySelector(".bubble-timestamp"),this._built=!0,this.shadowRoot.addEventListener("click",this.handleAction),this.shadowRoot.addEventListener("keydown",this.handleKey),this.paintTimestamp())}paintTimestamp(){this._timestamp&&(this._timestamp.textContent=this.getTimestamp(),this._timestamp.hidden=!this.shouldShowTimestamp())}paint(){if(!(!this._built||!this._content)){this._content.innerHTML=this._html;for(const t of this._content.querySelectorAll("[data-n55-prompt]"))t.hasAttribute("tabindex")||t.setAttribute("tabindex","0"),!t.hasAttribute("role")&&t.tagName!=="A"&&t.tagName!=="BUTTON"&&t.setAttribute("role","button")}}handleKey=t=>{if(t.key!=="Enter"&&t.key!==" ")return;const n=t.target?.closest?.("[data-n55-prompt]");n&&(t.preventDefault(),this.fireAction(n))};handleAction=t=>{const n=t.target?.closest?.("[data-n55-prompt]");n&&(t.preventDefault(),this.fireAction(n))};fireAction(t){const n=t.getAttribute("data-n55-prompt");n&&this.dispatchEvent(new CustomEvent("workflow-action",{bubbles:!0,composed:!0,detail:{pubsubTopic:t.getAttribute("data-n55-topic")||Ku,message:n,source:"user",meta:{origin:"template-link",templateId:this._meta.templateId??this.getAttribute("template-id")??null}}}))}}customElements.define("m5t-chat-workflow",Wu);const Ju=3200,vn=["Working…"];let _t=0;const Zu=`
  :host {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 70%;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .bubble-content {
    background: #2d2d2d;
    color: #a8a8a8;
    border-radius: 18px 18px 18px 4px;
    border: 1px solid #3a3a3a;
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
    line-height: 1.5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-block-size: 1.5em;
  }

  /* Activity, so the rotation reads as work in progress rather than a slideshow */
  .dots {
    display: inline-flex;
    gap: 4px;
    flex: none;
  }

  .dots i {
    inline-size: 6px;
    block-size: 6px;
    border-radius: 50%;
    background: #edba08;
    animation: blink 1.4s ease-in-out infinite;
  }

  .dots i:nth-child(2) { animation-delay: 0.2s; }
  .dots i:nth-child(3) { animation-delay: 0.4s; }

  @keyframes blink {
    0%, 80%, 100% { opacity: 0.2; }
    40%           { opacity: 1; }
  }

  .phrase {
    transition: opacity 0.35s ease;
    text-wrap: pretty;
  }

  .phrase[data-fading="true"] { opacity: 0; }

  @media (prefers-reduced-motion: reduce) {
    :host { animation: none; }
    .dots i { animation: none; opacity: 0.65; }
    .phrase { transition: none; }
  }
`;class Qu extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._phrases=null,this._index=0,this._timer=null,this._built=!1}static get observedAttributes(){return["phrases","interval"]}set phrases(t){this._phrases=Array.isArray(t)?t.filter(Boolean):null,this._index=0,this._built&&this.paint()}get phrases(){if(this._phrases?.length)return this._phrases;const t=this.getAttribute("phrases");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)&&n.length)return n.filter(Boolean)}catch{}return vn}get interval(){const t=Number(this.getAttribute("interval"));return Number.isFinite(t)&&t>0?t:Ju}connectedCallback(){this.build();const t=this.phrases;this._index=t.length?_t%t.length:0,_t=(_t+1)%Math.max(t.length,1),this.paint(),this.start()}disconnectedCallback(){this.stop()}attributeChangedCallback(t){this._built&&(t==="phrases"&&this.paint(),t==="interval"&&this.start())}build(){this._built||(this.shadowRoot.innerHTML=`
      <style>${Zu}</style>
      <div class="bubble-content">
        <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="phrase"></span>
      </div>
    `,this._phraseEl=this.shadowRoot.querySelector(".phrase"),this._built=!0,this.setAttribute("role","status"),this.setAttribute("aria-live","polite"))}start(){this.stop(),!(this.phrases.length<2)&&(this._timer=setInterval(()=>this.advance(),this.interval))}stop(){this._timer&&clearInterval(this._timer),this._timer=null}advance(){const t=this.phrases;this._index=(this._index+1)%t.length,this._phraseEl.dataset.fading="true",setTimeout(()=>{this.isConnected&&(this.paint(),this._phraseEl.dataset.fading="false")},350)}paint(){if(!this._phraseEl)return;const t=this.phrases;this._phraseEl.textContent=t[this._index%t.length]??vn[0]}}customElements.define("m5t-chat-waiting",Qu);const Xu=500,ea=/^(AUTH|ROUTE|LLM)\./,An=`
  :host { display: block; font-size: 0.9rem; }

  .panel { display: flex; flex-direction: column; gap: 0.75rem; }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: #a8a8a8;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3a3a3a;
    flex: none;
  }

  .dot[data-state="recording"] { background: #DD4124; animation: pulse 1.2s ease-in-out infinite; }
  .dot[data-state="playing"]   { background: #009473; animation: pulse 1.2s ease-in-out infinite; }
  .dot[data-state="loaded"]    { background: #edba08; }

  @keyframes pulse { 50% { opacity: 0.25; } }

  .count { color: #e4e4e4; font-variant-numeric: tabular-nums; }

  .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }

  button {
    background: #2d2d2d;
    color: #e4e4e4;
    border: 1px solid #3a3a3a;
    border-radius: 4px;
    padding: 0.45rem 0.9rem;
    font: inherit;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover:not(:disabled) {
    background: #1a1a1a;
    border-color: #edba08;
    transform: translateY(-1px);
  }

  button:disabled { opacity: 0.35; cursor: not-allowed; }

  button:focus-visible { outline: 2px solid #edba08; outline-offset: 2px; }

  button[data-variant="record"]:not(:disabled) { border-color: #810000; color: #DD4124; }
  button[data-variant="play"]:not(:disabled)   { border-color: #003817; color: #009473; }

  .options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    font-size: 0.75rem;
    color: #a8a8a8;
    padding-top: 0.25rem;
    border-top: 1px solid #2d2d2d;
  }

  label { display: flex; align-items: center; gap: 0.35rem; cursor: pointer; }

  select {
    background: #2d2d2d;
    color: #e4e4e4;
    border: 1px solid #3a3a3a;
    border-radius: 3px;
    padding: 0.2rem 0.35rem;
    font: inherit;
    font-size: 0.75rem;
  }

  .warn { color: #F5DF4D; }
  .err  { color: #DD4124; }
`;class ta extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._playing=!1,this._note="",this._timer=null}connectedCallback(){this.build(),this.sync(),this._timer=setInterval(()=>this.sync(),Xu)}disconnectedCallback(){clearInterval(this._timer),this._timer=null}get installed(){return typeof window.startVCR=="function"}get recording(){return!!window._isVCRRecording}get tape(){return window._vcrTimeline??[]}build(){if(!this.installed){this.shadowRoot.innerHTML=`
        <style>${An}</style>
        <p class="err">
          The tape recorder is not in this build - no <code>installPubSubVCR()</code> call ran.
          Check the console for a <code>[VCR] armed</code> line.
        </p>
      `;return}this.shadowRoot.innerHTML=`
      <style>${An}</style>
      <div class="panel">
        <div class="status">
          <span class="dot" data-state="idle"></span>
          <span class="label">Idle</span>
          <span class="count"></span>
        </div>

        <div class="row">
          <button data-act="record" data-variant="record">● Record</button>
          <button data-act="stop">■ Stop</button>
          <button data-act="save">⤓ Save</button>
          <button data-act="load">⤒ Load</button>
          <button data-act="play" data-variant="play">▶ Play</button>
          <button data-act="cancel">⏹ Cancel</button>
        </div>

        <div class="options">
          <label>
            Speed
            <select data-opt="speed">
              <option value="1">1×</option>
              <option value="4">4×</option>
              <option value="0">instant</option>
            </select>
          </label>
          <label><input type="checkbox" data-opt="dryRun"> Dry run</label>
          <label><input type="checkbox" data-opt="skip" checked> Skip AUTH/LLM</label>
          <span class="note"></span>
        </div>
      </div>
    `,this.shadowRoot.addEventListener("click",this.onClick)}onClick=t=>{const n=t.target?.closest?.("button")?.dataset?.act;n&&this.run(n)};opt(t){const n=this.shadowRoot.querySelector(`[data-opt="${t}"]`);return n?n.type==="checkbox"?n.checked:n.value:null}async run(t){try{switch(t){case"record":window.startVCR(),this._note="";break;case"stop":window.stopVCR({save:!1}),this._note=`stopped - ${this.tape.length} event(s) on tape`;break;case"save":window.saveVCR(),this._note="written to Downloads";break;case"load":{const n=await window.loadVCR();this._note=`loaded ${n??this.tape.length} event(s)`;break}case"play":{if(this._playing)return;this._playing=!0,this._note="",this.sync();const n=await window.playVCR({speed:Number(this.opt("speed")),dryRun:this.opt("dryRun"),skip:this.opt("skip")?["AUTH","LLM"]:[]});this._playing=!1,this._note=n.cancelled?`cancelled after ${n.played}`:`played ${n.played}, skipped ${n.skipped} in ${n.durationMs}ms`;break}case"cancel":window.stopPlayback(),this._playing=!1;break}}catch(n){console.error("[M5TVcrControls] action failed",t,n),this._playing=!1,this._note=n.message}this.sync()}sync(){if(!this.installed)return;const{length:t}=this.tape,n=this.recording,r=this._playing,o=n?"recording":r?"playing":t?"loaded":"idle",u={recording:"Recording",playing:"Replaying",loaded:"Tape ready",idle:"Idle"};this.shadowRoot.querySelector(".dot").dataset.state=o,this.shadowRoot.querySelector(".label").textContent=u[o],this.shadowRoot.querySelector(".count").textContent=t?`${t} event(s)`:"";const a={record:n||r,stop:!n,save:!t||n,load:n||r,play:!t||n||r,cancel:!r};for(const[c,f]of Object.entries(a))this.shadowRoot.querySelector(`[data-act="${c}"]`).disabled=f;const i=this.tape.filter(c=>ea.test(c.message)).length,s=this.shadowRoot.querySelector(".note");this._note?(s.className="note",s.textContent=this._note):i&&!this.opt("skip")&&!this.opt("dryRun")?(s.className="note warn",s.textContent=`⚠ ${i} AUTH/ROUTE/LLM event(s) will really fire`):(s.className="note",s.textContent="")}}customElements.define("m5t-vcr-controls",ta);const na=`
  :host {
    container-type: inline-size;
    display: block;
    inline-size: 100%;

    --e5-gap: 24px;
    --e5-cols: 4;
    --e5-span-w: 2;   /* read by WIDE cards; drops to 1 in a single column */
  }

  .grid {
    display: grid;
    gap: var(--e5-gap);
    grid-template-columns: repeat(var(--e5-cols), minmax(0, 1fr));
    grid-auto-rows: calc(
      (100cqi - (var(--e5-cols) - 1) * var(--e5-gap)) / var(--e5-cols)
    );
    /* Backfill the holes a WIDE or TALL span leaves behind. Decouples visual
       order from DOM order - see the header. */
    grid-auto-flow: row dense;
  }

  @container (inline-size < 880px) { :host { --e5-cols: 3; } }
  @container (inline-size < 600px) { :host { --e5-cols: 2; } }
  @container (inline-size < 360px) { :host { --e5-cols: 1; --e5-span-w: 1; } }

  ::slotted(ether5-card) { min-inline-size: 0; }
`;class ra extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._built=!1}static get observedAttributes(){return["data-ether5-gap","data-ether5-cols"]}connectedCallback(){this.build(),this.paint(),this.hasAttribute("role")||this.setAttribute("role","list")}attributeChangedCallback(){this._built&&this.paint()}build(){this._built||(this.shadowRoot.innerHTML=`<style>${na}</style><div class="grid" part="grid"><slot></slot></div>`,this._built=!0)}paint(){const t=this.getAttribute("data-ether5-gap"),n=this.getAttribute("data-ether5-cols");t&&this.style.setProperty("--e5-gap",/^\d+$/.test(t)?`${t}px`:t),n&&this.style.setProperty("--e5-cols",n)}}customElements.define("ether5-grid",ra);const oa=new Set(["SQUARE","WIDE","TALL"]),ua=`
  :host {
    /* Definite block size comes from the grid row span, which container-type:
       size requires. With it, cq units below resolve against the card itself. */
    container-type: size;

    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    background: var(--e5-cap-bg, #000);
    box-shadow: 0 2px 6px rgb(0 0 0 / 0.35);
    transition: box-shadow 0.3s ease, outline-color 0.3s ease;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  :host([data-ether5-shape="WIDE"]) {
    /* --e5-span-w drops to 1 when the grid is down to a single column, where a
       2-column span would overflow. Inherited across the shadow boundary. */
    grid-column: span var(--e5-span-w, 2);
  }

  :host([data-ether5-shape="TALL"]) { grid-row: span 2; }

  :host([selected]) {
    outline-color: var(--e5-accent, #edba08);
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.5);
  }

  /* ---- resting face: two rows, 50% each ---- */

  .face {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 50% 50%;
    inline-size: 100%;
    block-size: 100%;
    cursor: pointer;
  }

  .cap, .body {
    min-block-size: 0;   /* a grid item will not shrink below content without this */
    overflow: hidden;
    padding: 6cqmin 7cqmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .cap  { background: var(--e5-cap-bg, #000);   color: var(--e5-cap-fg, #fff); }
  .body { background: var(--e5-body-bg, #fff);  color: var(--e5-body-fg, #000); gap: 2cqmin; }

  /* Type scales with the card's SHORT axis (cqmin), so a WIDE card does not get
     wall-sized text and a TALL one does not get hairline text. */
  .caption {
    font-size: clamp(0.75rem, 11cqmin, 1.6rem);
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title {
    font-size: clamp(0.7rem, 7cqmin, 1.05rem);
    font-weight: 600;
    line-height: 1.25;
    text-wrap: pretty;
  }

  .desc {
    font-size: clamp(0.62rem, 5.2cqmin, 0.9rem);
    line-height: 1.35;
    opacity: 0.78;
  }

  /* Multi-line ellipsis. The -webkit- prefixed form is the interoperable one;
     the unprefixed properties are listed after for engines that have moved on. */
  .clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--e5-lines, 2);
    line-clamp: var(--e5-lines, 2);
    overflow: hidden;
  }

  .title { --e5-lines: 2; }
  .desc  { --e5-lines: 2; }

  /* ---- disclosed detail ---- */

  .detail {
    position: absolute;
    inset: 0;
    background: var(--e5-body-bg, #fff);
    color: var(--e5-body-fg, #000);
    padding: 7cqmin;
    display: flex;
    flex-direction: column;
    gap: 3cqmin;
    /* transform only - no layout or paint work while it animates */
    transform: translateY(100%);
    transition: transform 0.28s cubic-bezier(0.2, 0, 0, 1);
    pointer-events: none;
  }

  .detail .desc { --e5-lines: 8; opacity: 0.86; }
  .detail .title { --e5-lines: 3; }

  /* Hover-disclosure only where hovering is real. On touch, tapping selects,
     and [selected] discloses - otherwise a tap leaves a card stuck open. */
  @media (hover: hover) {
    :host(:hover) .detail { transform: translateY(0); pointer-events: auto; }
  }

  :host(:focus-within) .detail,
  :host([selected]) .detail { transform: translateY(0); pointer-events: auto; }

  @media (prefers-reduced-motion: reduce) {
    .detail { transition: none; }
  }

  /* ---- iconic verbs ---- */

  .verbs {
    margin-block-start: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2cqmin;
    align-items: center;
    min-block-size: 0;
  }

  ::slotted([slot="verbs"]) { display: contents; }

  .verbs:empty { display: none; }
`;class aa extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._built=!1}static get observedAttributes(){return["data-ether5-caption","data-ether5-title","data-ether5-desc","data-ether5-gap","selected"]}connectedCallback(){this.build(),this.paint(),this.hasAttribute("data-ether5-shape")||this.setAttribute("data-ether5-shape","SQUARE"),this.hasAttribute("role")||this.setAttribute("role","group")}attributeChangedCallback(){this._built&&this.paint()}get shape(){const t=(this.getAttribute("data-ether5-shape")||"SQUARE").toUpperCase();return oa.has(t)?t:"SQUARE"}get selected(){return this.hasAttribute("selected")}set selected(t){this.toggleAttribute("selected",!!t)}get caption(){return this.getAttribute("data-ether5-caption")||""}get title(){return this.getAttribute("data-ether5-title")||""}get desc(){return this.getAttribute("data-ether5-desc")||""}get token(){return this.getAttribute("data-ether5-token")||""}build(){this._built||(this.shadowRoot.innerHTML=`
      <style>${ua}</style>
      <div class="face" part="face">
        <span class="cap"><span class="caption"></span></span>
        <span class="body">
          <span class="title clamp"></span>
          <span class="desc clamp"></span>
        </span>
      </div>
      <div class="detail" part="detail">
        <span class="title clamp"></span>
        <span class="desc clamp"></span>
        <div class="verbs"><slot name="verbs"></slot></div>
      </div>
    `,this._face=this.shadowRoot.querySelector(".face"),this._built=!0,this._face.addEventListener("click",this.handleSelect),this.shadowRoot.querySelector(".verbs").addEventListener("click",this.handleVerb))}paint(){const t=this.getAttribute("data-ether5-gap");t&&this.style.setProperty("--e5-gap",/^\d+$/.test(t)?`${t}px`:t);for(const n of this.shadowRoot.querySelectorAll(".caption"))n.textContent=this.caption;for(const n of this.shadowRoot.querySelectorAll(".title"))n.textContent=this.title;for(const n of this.shadowRoot.querySelectorAll(".desc"))n.textContent=this.desc;this.setAttribute("aria-label",[this.caption,this.title].filter(Boolean).join(" - ")||"Card")}handleSelect=t=>{t.preventDefault(),this.selected=!this.selected,this.paint(),this.emit("ether5-select",{selected:this.selected,message:this.selected&&this.getAttribute("data-ether5-prompt")||void 0})};handleVerb=t=>{const n=t.target?.closest?.("[data-ether5-verb]");n&&(t.preventDefault(),t.stopPropagation(),this.emit("ether5-verb",{verb:n.getAttribute("data-ether5-verb")}))};emit(t,n){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:{pubsubTopic:this.getAttribute("data-ether5-topic")||void 0,token:this.token,caption:this.caption,title:this.title,shape:this.shape,...n}}))}}customElements.define("ether5-card",aa);function ia(e,t){return(Array.isArray(e?.tags)?e.tags:[]).find(r=>r?.tag===t)?.value||""}function sa(e){return e?String(e).trim().replace(/^[a-z][a-z0-9+.-]*:\/\//i,"").replace(/^[^@/]*@/,"").split(/[/?#]/)[0].replace(/:\d+$/,"").replace(/^www\./i,"").toLowerCase():""}function fr(e){const t=Array.isArray(e?.app_domains)?e.app_domains:[];return sa(t[0]?.domain)||"no domain"}function Tn(e){return ia(e,"app_name")||fr(e)}function ca(e){const n=(Array.isArray(e?.modified)?e.modified:[]).map(r=>Date.parse(r?.modified_tz)).filter(r=>Number.isFinite(r));return n.length?new Date(Math.max(...n)).toISOString():e?.created?.created_tz||""}const la=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60]];function da(e,t=Date.now()){const n=Date.parse(e);if(!Number.isFinite(n))return"Never updated";const r=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),o=(n-t)/1e3,u=Math.abs(o);for(const[a,i]of la)if(u>=i)return`Updated ${r.format(Math.round(o/i),a)}`;return"Updated just now"}function fa(e,t=Date.now()){const n=da(ca(e),t),r=e?.status;return r&&r!=="ENABLED"?`${n} · ${r}`:n}const wn=["WIDE","SQUARE","SQUARE","TALL","SQUARE","WIDE","SQUARE","WIDE"];function ha(e){return wn[e%wn.length]}function Sn(e,t){return Array.isArray(e)?t?e.filter(n=>n?.owner_guid===t):(console.warn("[etherApps] no signed-in guid - showing every app the API returned"),e):[]}const xn=50;function kn(){const e=window.AuthController?.getEntity?.();return e?.class?typeof e.class=="object"?e.class.value??0:Lt(e.class)?.value??0:0}ot({id:"ACCOUNT_SUMMARY",when:"the user asks about their own account, profile, role, or plan",render:()=>{const e=window.AuthController?.getEntity?.();return e?`
      <h3>Account</h3>
      <div class="table-scroll">
        <table>
          <tbody>
            ${[["Name",`${e.first??""} ${e.last??""}`.trim()],["Email",e.email],["Company",e.company||"—"],["Role",e.class],["Status",e.status]].map(([n,r])=>`
              <tr>
                <th scope="row">${_e(n)}</th>
                <td>${_e(r)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <p>
        <a data-n55-prompt="What can I do with the ${_e(e.class)} role?">what this role allows</a>
        &nbsp;·&nbsp;
        <a data-n55-prompt="How do I change my password?">change password</a>
      </p>
    `:"<p>No account is signed in.</p>"},transcript:()=>{const e=window.AuthController?.getEntity?.();return e?`Showed the user their account summary: ${e.email}, role ${e.class}, status ${e.status}. They can see it on screen.`:"Tried to show an account summary, but nobody is signed in."}});ot({id:"VCR_TIME_TRAVEL",when:"the user explicitly asks to record or replay this session with the event tape recorder, or to time-travel debug",render:()=>kn()<xn?"<p>Time-travel debugging needs an administrator role.</p>":`
      <h3>Time Travel</h3>
      <p>
        Record this session's event timeline, save it as JSON, and replay it here or
        in another browser.
      </p>

      <m5t-vcr-controls></m5t-vcr-controls>

      <p>
        <a data-n55-prompt="What gets captured on a VCR tape, and what does not?">what gets captured</a>
        &nbsp;·&nbsp;
        <a data-n55-prompt="How do I send a VCR tape to support?">send a tape to support</a>
        &nbsp;·&nbsp;
        <a data-n55-prompt="Why is replaying a tape with AUTH events dangerous?">why skip AUTH/LLM</a>
      </p>
    `,transcript:()=>kn()<xn?"The user asked to time-travel debug, but their role does not allow it. Nothing was shown.":"Showed the user the time-travel debugging panel: transport controls for the PubSub tape recorder (record, stop, save, load, play, cancel) with speed, dry-run, and skip-AUTH/LLM options. It is on screen and working - do not repeat the button list back to them."});ot({id:"DASHBOARD",when:"the user asks about their data, engagements, apps, activity, metrics, or anything else inside the application that the other views do not specifically cover - this is the general landing view",nav:"HOME_DASH",navPrompt:"Show me the dashboard",render:()=>{const e=window.AuthController?.getEntity?.(),t=e?.first?`, ${_e(e.first)}`:"",n=[["Engagements","—"],["Active apps","—"],["Messages","—"]];return`
      <h3>Dashboard</h3>
      <p>Welcome back${t}. This view is a stub - the tiles are not wired to data yet.</p>

      <div class="table-scroll">
        <table>
          <thead>
            <tr>${n.map(([r])=>`<th scope="col">${_e(r)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            <tr>${n.map(([,r])=>`<td>${_e(r)}</td>`).join("")}</tr>
          </tbody>
        </table>
      </div>

      <p>
        <a data-n55-prompt="Show me my account">account</a>
        &nbsp;·&nbsp;
        <a data-n55-prompt="What can I do from here?">what can I do here</a>
      </p>
    `},transcript:()=>"Showed the user the dashboard, which is currently a stub with placeholder tiles and no real figures. Do not invent numbers for it; say it is not wired up yet if asked."});const pa=24;ot({id:"MY_APPS",when:"the user asks about their apps, widgets, cards, or what is installed in their account",nav:"HOME_APPS",navPrompt:"Show me my apps",actions:{CREATE_APP:{when:"the user wants to add, create, or register a new app, usually giving a name and a URL",needs:"To add an app I need a name and a fully qualified URL.",params:{name:{type:"string",required:!0},url:{type:"url",required:!0}},run:async({name:e,url:t})=>{const n=await je.post("/m5t/v5/sseEtherSubscriberApp/mine",{name:e,url:t});if(!n.ok)throw new Error(n.data?.message||n.data?.error||"create failed");const r=n.data?.data?.guid;let o=null;try{o=(await je.post(`/m5t/v5/sseEtherSubscriberApp/mine/${r}/verify`,{})).data}catch(u){console.warn("[CREATE_APP] verification did not run",u)}return o&&!o.verified&&console.info(`[CREATE_APP] ${e} stays DRAFT: ${o.reason}`),{created:n.data,verified:o}}}},fetch:()=>je.get("/m5t/v5/sseEtherSubscriberApp/mine"),source:"data.data",render:e=>{const t=window.AuthController?.getEntity?.()?.guid,n=Sn(e,t);return n.length?`
      <h3>My Apps</h3>
      <ether5-grid data-ether5-gap="${pa}">
        ${n.map((r,o)=>`
          <ether5-card
            data-ether5-shape="${Le(ha(o))}"
            data-ether5-caption="${Le(fr(r))}"
            data-ether5-title="${Le(Tn(r))}"
            data-ether5-desc="${Le(fa(r))}"
            data-ether5-token="${Le(r.guid??"")}"></ether5-card>
        `).join("")}
      </ether5-grid>
      <p>
        <a data-n55-prompt="Which of my apps get the most engagement?">which get the most engagement</a>
        &nbsp;·&nbsp;
        <a data-n55-prompt="How do I add a new app?">add a new app</a>
      </p>
    `:`
        <h3>My Apps</h3>
        <p>No apps yet.</p>
        <p><a data-n55-prompt="How do I add a new app?">add your first app</a></p>
      `},transcript:e=>{const t=window.AuthController?.getEntity?.()?.guid,n=Sn(e,t);return n.length?`Showed the user their ${n.length} app card(s): `+n.map(r=>Tn(r)).join(", ")+". Only names, domains, last-modified dates and lifecycle status are on screen - no usage or engagement figures. An app shows DRAFT until its domain answers 200 to a verification ping.":"Showed the user their apps: they have none yet."}});console.log("[Templates] Registered");Hu(async()=>{const{default:e}=await ee(async()=>{const{default:n}=await Promise.resolve().then(()=>dc);return{default:n}},void 0),t=new e({html:!1,breaks:!0,linkify:!0,typographer:!0});return n=>t.render(n)});ee(async()=>{const{search:e}=await Promise.resolve().then(()=>wc);return{search:e}},void 0).then(({search:e})=>Uo((t,n)=>e(n,t))).catch(e=>console.warn("[HomeRoute] JMESPath unavailable - source falls back to dot paths",e));const Cn="llm-status";at.setAppToken("client-saas");function ga(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-buttons='${at.getPrimaryNavJSON()}'
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
  `}function ma(){console.log("[HomeRoute] Initialized"),_.subscribe(m.CANVAS_DO_SCROLL,(e,t)=>{console.log("[HomeRoute] CANVAS.DO.SCROLL triggered"),_a()}),_.subscribe(m.LLM_STATUS,(e,t)=>{console.log("[HomeRoute] LLM_STATUS:",t),t&&t.text&&_.publish(m.CONVERSATION_RESPONSE_CANVAS,W({id:Cn,turnId:Cn,role:$.ASSISTANT,source:j.SYSTEM,text:`🔄 ${t.text}`,phase:V.DELTA,meta:{progress:t.progressPercent}}))})}function _a(){setTimeout(()=>{const e=document.getElementById("chat-messages");e?(e.scrollTo({top:0,behavior:"smooth"}),console.log("[HomeRoute] Scrolled chat-messages to bottom (top: 0 with column-reverse)")):console.warn("[HomeRoute] chat-messages element not found")},80)}function Gt(e,t="user",n="canvas"){const r=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:e,timestamp:r};if(t==="user"||t==="prompt")switch(n.toUpperCase()){case"CANVAS":_.publish(m.CONVERSATION_PROMPT_CANVAS,o);break;case"AGENT":_.publish(m.CONVERSATION_PROMPT_AGENT,o);break;case"AGENT_CANVAS":_.publish(m.CONVERSATION_PROMPT_AGENT_CANVAS,o);break;case"STAGE":_.publish(m.CONVERSATION_PROMPT_STAGE,o);break;default:_.publish(m.CONVERSATION_PROMPT_CANVAS,o)}else switch(n.toUpperCase()){case"CANVAS":_.publish(m.CONVERSATION_RESPONSE_CANVAS,o);break;case"WORKFLOW":_.publish(m.CONVERSATION_RESPONSE_WORKFLOW,o);break;default:_.publish(m.CONVERSATION_RESPONSE_CANVAS,o)}}function ba(e=10,t=500){const n=["Hey, how's it going?","Can you help me with something?","What's the weather like today?","I need assistance with my account","Tell me a joke!","How do I reset my password?","What are your hours?","Thanks for your help!","I have a question about billing","Can you explain this feature?","How do I upgrade my plan?","What's new in the latest update?","I'm having trouble logging in","Where can I find the settings?","How secure is my data?","Do you offer customer support?","What payment methods do you accept?","Can I cancel my subscription?","How do I export my data?","Is there a mobile app?"],r=["I'm doing great! How can I help you today?","Of course! I'd be happy to assist you.","Let me check that for you...","Here's what I found:","That's a great question!","I can help you with that.","Let me walk you through the steps.","You're very welcome!","I understand your concern. Let me explain...","That feature is located in the settings menu.","Your account is fully secured with encryption.","We're available 24/7 to help you!","We accept all major credit cards and PayPal.","You can upgrade anytime from your account settings.","The latest update includes several new features!","Try resetting your password using the forgot password link.","Your data is encrypted and stored securely.","Yes! Our mobile app is available for iOS and Android.","You can export your data from the account settings.","Absolutely! You can cancel anytime with no fees."];let o=0;const u=setInterval(()=>{if(o>=e){clearInterval(u),console.log(`[Test] Generated ${e} random bubbles`);return}const a=Math.random()>.5,i=a?"user":"assistant",s=a?n:r,c=s[Math.floor(Math.random()*s.length)];Gt(c,i),o++,console.log(`[Test] Added bubble ${o}/${e} (${i})`)},t)}let Fe=null;function Ea(e=1e3){if(Fe){console.log("[Test] Bubble stream already running. Stop it first with stopBubbleStream()");return}console.log("[Test] Starting continuous bubble stream..."),Fe=setInterval(()=>{const t=Math.random()>.5,n=t?["Quick message!","Another one!","Test bubble","Hello there!","Random user text"]:["Response here","Got it!","Processing...","Here's the answer","Understood!"],r=n[Math.floor(Math.random()*n.length)];Gt(r,t?"user":"assistant")},e)}function ya(){Fe?(clearInterval(Fe),Fe=null,console.log("[Test] Bubble stream stopped")):console.log("[Test] No bubble stream running")}function va(){const e=document.getElementById("chat-messages");e&&(e.innerHTML="",console.log("[Test] All bubbles cleared"))}window.addChatBubble=Gt;window.generateRandomBubbles=ba;window.startBubbleStream=Ea;window.stopBubbleStream=ya;window.clearAllBubbles=va;console.log("[HomeRoute] Test functions available:");console.log("  - window.generateRandomBubbles(count, delay) - Generate N bubbles with delay");console.log("  - window.startBubbleStream(delayMs) - Continuous bubble generation");console.log("  - window.stopBubbleStream() - Stop continuous generation");console.log("  - window.clearAllBubbles() - Remove all bubbles");console.log("  - window.addChatBubble(message, type) - Add single bubble");const Aa=Object.freeze(Object.defineProperty({__proto__:null,init:ma,render:ga},Symbol.toStringTag,{value:"Module"}));function Ta(){return`
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
  `}function wa(){console.log("[SignoutRoute] Initialized");const e=document.getElementById("confirm-signout-btn");e?.addEventListener("click",async()=>{e.disabled=!0,e.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await he.doSignout()})}const Sa=Object.freeze(Object.defineProperty({__proto__:null,init:wa,render:Ta},Symbol.toStringTag,{value:"Module"})),Rn={};function xa(e){let t=Rn[e];if(t)return t;t=Rn[e]=[];for(let n=0;n<128;n++){const r=String.fromCharCode(n);t.push(r)}for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return t}function xe(e,t){typeof t!="string"&&(t=xe.defaultChars);const n=xa(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let o="";for(let u=0,a=r.length;u<a;u+=3){const i=parseInt(r.slice(u+1,u+3),16);if(i<128){o+=n[i];continue}if((i&224)===192&&u+3<a){const s=parseInt(r.slice(u+4,u+6),16);if((s&192)===128){const c=i<<6&1984|s&63;c<128?o+="��":o+=String.fromCharCode(c),u+=3;continue}}if((i&240)===224&&u+6<a){const s=parseInt(r.slice(u+4,u+6),16),c=parseInt(r.slice(u+7,u+9),16);if((s&192)===128&&(c&192)===128){const f=i<<12&61440|s<<6&4032|c&63;f<2048||f>=55296&&f<=57343?o+="���":o+=String.fromCharCode(f),u+=6;continue}}if((i&248)===240&&u+9<a){const s=parseInt(r.slice(u+4,u+6),16),c=parseInt(r.slice(u+7,u+9),16),f=parseInt(r.slice(u+10,u+12),16);if((s&192)===128&&(c&192)===128&&(f&192)===128){let d=i<<18&1835008|s<<12&258048|c<<6&4032|f&63;d<65536||d>1114111?o+="����":(d-=65536,o+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),u+=9;continue}}o+="�"}return o})}xe.defaultChars=";/?:@&=+$,#";xe.componentChars="";const On={};function ka(e){let t=On[e];if(t)return t;t=On[e]=[];for(let n=0;n<128;n++){const r=String.fromCharCode(n);/^[0-9a-z]$/i.test(r)?t.push(r):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Ge(e,t,n){typeof t!="string"&&(n=t,t=Ge.defaultChars),typeof n>"u"&&(n=!0);const r=ka(t);let o="";for(let u=0,a=e.length;u<a;u++){const i=e.charCodeAt(u);if(n&&i===37&&u+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(u+1,u+3))){o+=e.slice(u,u+3),u+=2;continue}if(i<128){o+=r[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&u+1<a){const s=e.charCodeAt(u+1);if(s>=56320&&s<=57343){o+=encodeURIComponent(e[u]+e[u+1]),u++;continue}}o+="%EF%BF%BD";continue}o+=encodeURIComponent(e[u])}return o}Ge.defaultChars=";/?:@&=+$,-_.!~*'()#";Ge.componentChars="-_.!~*'()";function Ht(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function et(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Ca=/^([a-z0-9.+-]+:)/i,Ra=/:[0-9]*$/,Oa=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Na=["<",">",'"',"`"," ","\r",`
`,"	"],La=["{","}","|","\\","^","`"].concat(Na),Ia=["'"].concat(La),Nn=["%","/","?",";","#"].concat(Ia),Ln=["/","?","#"],Da=255,In=/^[+a-z0-9A-Z_-]{0,63}$/,Fa=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Dn={javascript:!0,"javascript:":!0},Fn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Vt(e,t){if(e&&e instanceof et)return e;const n=new et;return n.parse(e,t),n}et.prototype.parse=function(e,t){let n,r,o,u=e;if(u=u.trim(),!t&&e.split("#").length===1){const c=Oa.exec(u);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let a=Ca.exec(u);if(a&&(a=a[0],n=a.toLowerCase(),this.protocol=a,u=u.substr(a.length)),(t||a||u.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=u.substr(0,2)==="//",o&&!(a&&Dn[a])&&(u=u.substr(2),this.slashes=!0)),!Dn[a]&&(o||a&&!Fn[a])){let c=-1;for(let g=0;g<Ln.length;g++)r=u.indexOf(Ln[g]),r!==-1&&(c===-1||r<c)&&(c=r);let f,d;c===-1?d=u.lastIndexOf("@"):d=u.lastIndexOf("@",c),d!==-1&&(f=u.slice(0,d),u=u.slice(d+1),this.auth=f),c=-1;for(let g=0;g<Nn.length;g++)r=u.indexOf(Nn[g]),r!==-1&&(c===-1||r<c)&&(c=r);c===-1&&(c=u.length),u[c-1]===":"&&c--;const l=u.slice(0,c);u=u.slice(c),this.parseHost(l),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const g=this.hostname.split(/\./);for(let b=0,E=g.length;b<E;b++){const T=g[b];if(T&&!T.match(In)){let A="";for(let w=0,S=T.length;w<S;w++)T.charCodeAt(w)>127?A+="x":A+=T[w];if(!A.match(In)){const w=g.slice(0,b),S=g.slice(b+1),k=T.match(Fa);k&&(w.push(k[1]),S.unshift(k[2])),S.length&&(u=S.join(".")+u),this.hostname=w.join(".");break}}}}this.hostname.length>Da&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const i=u.indexOf("#");i!==-1&&(this.hash=u.substr(i),u=u.slice(0,i));const s=u.indexOf("?");return s!==-1&&(this.search=u.substr(s),u=u.slice(0,s)),u&&(this.pathname=u),Fn[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};et.prototype.parseHost=function(e){let t=Ra.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const Pa=Object.freeze(Object.defineProperty({__proto__:null,decode:xe,encode:Ge,format:Ht,parse:Vt},Symbol.toStringTag,{value:"Module"})),hr=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,pr=/[\0-\x1F\x7F-\x9F]/,Ma=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,zt=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,gr=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,mr=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Ua=Object.freeze(Object.defineProperty({__proto__:null,Any:hr,Cc:pr,Cf:Ma,P:zt,S:gr,Z:mr},Symbol.toStringTag,{value:"Module"})),Ba=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),$a=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var bt;const Ga=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Ha=(bt=String.fromCodePoint)!==null&&bt!==void 0?bt:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Va(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Ga.get(e))!==null&&t!==void 0?t:e}var z;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(z||(z={}));const za=32;var me;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(me||(me={}));function Dt(e){return e>=z.ZERO&&e<=z.NINE}function qa(e){return e>=z.UPPER_A&&e<=z.UPPER_F||e>=z.LOWER_A&&e<=z.LOWER_F}function Ya(e){return e>=z.UPPER_A&&e<=z.UPPER_Z||e>=z.LOWER_A&&e<=z.LOWER_Z||Dt(e)}function Ka(e){return e===z.EQUALS||Ya(e)}var G;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(G||(G={}));var fe;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(fe||(fe={}));class ja{constructor(t,n,r){this.decodeTree=t,this.emitCodePoint=n,this.errors=r,this.state=G.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=fe.Strict}startEntity(t){this.decodeMode=t,this.state=G.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case G.EntityStart:return t.charCodeAt(n)===z.NUM?(this.state=G.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=G.NamedEntity,this.stateNamedEntity(t,n));case G.NumericStart:return this.stateNumericStart(t,n);case G.NumericDecimal:return this.stateNumericDecimal(t,n);case G.NumericHex:return this.stateNumericHex(t,n);case G.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|za)===z.LOWER_X?(this.state=G.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=G.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,r,o){if(n!==r){const u=r-n;this.result=this.result*Math.pow(o,u)+parseInt(t.substr(n,u),o),this.consumed+=u}}stateNumericHex(t,n){const r=n;for(;n<t.length;){const o=t.charCodeAt(n);if(Dt(o)||qa(o))n+=1;else return this.addToNumericResult(t,r,n,16),this.emitNumericEntity(o,3)}return this.addToNumericResult(t,r,n,16),-1}stateNumericDecimal(t,n){const r=n;for(;n<t.length;){const o=t.charCodeAt(n);if(Dt(o))n+=1;else return this.addToNumericResult(t,r,n,10),this.emitNumericEntity(o,2)}return this.addToNumericResult(t,r,n,10),-1}emitNumericEntity(t,n){var r;if(this.consumed<=n)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===z.SEMI)this.consumed+=1;else if(this.decodeMode===fe.Strict)return 0;return this.emitCodePoint(Va(this.result),this.consumed),this.errors&&(t!==z.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:r}=this;let o=r[this.treeIndex],u=(o&me.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const a=t.charCodeAt(n);if(this.treeIndex=Wa(r,o,this.treeIndex+Math.max(1,u),a),this.treeIndex<0)return this.result===0||this.decodeMode===fe.Attribute&&(u===0||Ka(a))?0:this.emitNotTerminatedNamedEntity();if(o=r[this.treeIndex],u=(o&me.VALUE_LENGTH)>>14,u!==0){if(a===z.SEMI)return this.emitNamedEntityData(this.treeIndex,u,this.consumed+this.excess);this.decodeMode!==fe.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:r}=this,o=(r[n]&me.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,o,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,r){const{decodeTree:o}=this;return this.emitCodePoint(n===1?o[t]&~me.VALUE_LENGTH:o[t+1],r),n===3&&this.emitCodePoint(o[t+2],r),r}end(){var t;switch(this.state){case G.NamedEntity:return this.result!==0&&(this.decodeMode!==fe.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case G.NumericDecimal:return this.emitNumericEntity(0,2);case G.NumericHex:return this.emitNumericEntity(0,3);case G.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case G.EntityStart:return 0}}}function _r(e){let t="";const n=new ja(e,r=>t+=Ha(r));return function(o,u){let a=0,i=0;for(;(i=o.indexOf("&",i))>=0;){t+=o.slice(a,i),n.startEntity(u);const c=n.write(o,i+1);if(c<0){a=i+n.end();break}a=i+c,i=c===0?a+1:a}const s=t+o.slice(a);return t="",s}}function Wa(e,t,n,r){const o=(t&me.BRANCH_LENGTH)>>7,u=t&me.JUMP_TABLE;if(o===0)return u!==0&&r===u?n:-1;if(u){const s=r-u;return s<0||s>=o?-1:e[n+s]-1}let a=n,i=a+o-1;for(;a<=i;){const s=a+i>>>1,c=e[s];if(c<r)a=s+1;else if(c>r)i=s-1;else return e[s+o]}return-1}const br=_r(Ba);_r($a);function Ja(e,t=fe.Legacy){return br(e,t)}function Za(e){return br(e,fe.Strict)}function Qa(e){return Object.prototype.toString.call(e)}function qt(e){return Qa(e)==="[object String]"}const Xa=Object.prototype.hasOwnProperty;function ei(e,t){return Xa.call(e,t)}function it(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(r){e[r]=n[r]})}}),e}function Er(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Yt(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Pe(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const yr=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,ti=/&([a-z#][a-z0-9]{1,31});/gi,ni=new RegExp(yr.source+"|"+ti.source,"gi"),ri=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function oi(e,t){if(t.charCodeAt(0)===35&&ri.test(t)){const r=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Yt(r)?Pe(r):e}const n=Ja(e);return n!==e?n:e}function ui(e){return e.indexOf("\\")<0?e:e.replace(yr,"$1")}function ke(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(ni,function(t,n,r){return n||oi(t,r)})}const ai=/[&<>"]/,ii=/[&<>"]/g,si={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function ci(e){return si[e]}function be(e){return ai.test(e)?e.replace(ii,ci):e}const li=/[.?*+^$[\]\\(){}|-]/g;function di(e){return e.replace(li,"\\$&")}function D(e){switch(e){case 9:case 32:return!0}return!1}function Me(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function vr(e){return zt.test(e)||gr.test(e)}function Ue(e){return vr(Pe(e))}function Be(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function st(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function Pn(e){return e===32||e===9||e===10||e===13}function ct(e){let t=0;for(;t<e.length&&Pn(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&Pn(e.charCodeAt(n));n--);return e.slice(t,n+1)}const fi={mdurl:Pa,ucmicro:Ua},hi=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Er,asciiTrim:ct,assign:it,escapeHtml:be,escapeRE:di,fromCodePoint:Pe,has:ei,isMdAsciiPunct:Be,isPunctChar:vr,isPunctCharCode:Ue,isSpace:D,isString:qt,isValidEntityCode:Yt,isWhiteSpace:Me,lib:fi,normalizeReference:st,unescapeAll:ke,unescapeMd:ui},Symbol.toStringTag,{value:"Module"}));function pi(e,t,n){let r,o,u,a;const i=e.posMax,s=e.pos;for(e.pos=t+1,r=1;e.pos<i;){if(u=e.src.charCodeAt(e.pos),u===93&&(r--,r===0)){o=!0;break}if(a=e.pos,e.md.inline.skipToken(e),u===91){if(a===e.pos-1)r++;else if(n)return e.pos=s,-1}}let c=-1;return o&&(c=e.pos),e.pos=s,c}function gi(e,t,n){let r,o=t;const u={ok:!1,pos:0,str:""};if(e.charCodeAt(o)===60){for(o++;o<n;){if(r=e.charCodeAt(o),r===10||r===60)return u;if(r===62)return u.pos=o+1,u.str=ke(e.slice(t+1,o)),u.ok=!0,u;if(r===92&&o+1<n){o+=2;continue}o++}return u}let a=0;for(;o<n&&(r=e.charCodeAt(o),!(r===32||r<32||r===127));){if(r===92&&o+1<n){if(e.charCodeAt(o+1)===32)break;o+=2;continue}if(r===40&&(a++,a>32))return u;if(r===41){if(a===0)break;a--}o++}return t===o||a!==0||(u.str=ke(e.slice(t,o)),u.pos=o,u.ok=!0),u}function mi(e,t,n,r){let o,u=t;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)a.str=r.str,a.marker=r.marker;else{if(u>=n)return a;let i=e.charCodeAt(u);if(i!==34&&i!==39&&i!==40)return a;t++,u++,i===40&&(i=41),a.marker=i}for(;u<n;){if(o=e.charCodeAt(u),o===a.marker)return a.pos=u+1,a.str+=ke(e.slice(t,u)),a.ok=!0,a;if(o===40&&a.marker===41)return a;o===92&&u+1<n&&u++,u++}return a.can_continue=!0,a.str+=ke(e.slice(t,u)),a}const _i=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:gi,parseLinkLabel:pi,parseLinkTitle:mi},Symbol.toStringTag,{value:"Module"})),le={};le.code_inline=function(e,t,n,r,o){const u=e[t];return"<code"+o.renderAttrs(u)+">"+be(u.content)+"</code>"};le.code_block=function(e,t,n,r,o){const u=e[t];return"<pre"+o.renderAttrs(u)+"><code>"+be(e[t].content)+`</code></pre>
`};le.fence=function(e,t,n,r,o){const u=e[t],a=u.info?ke(u.info).trim():"";let i="",s="";if(a){const f=a.split(/(\s+)/g);i=f[0],s=f.slice(2).join("")}let c;if(n.highlight?c=n.highlight(u.content,i,s)||be(u.content):c=be(u.content),c.indexOf("<pre")===0)return c+`
`;if(a){const f=u.attrIndex("class"),d=u.attrs?u.attrs.slice():[];f<0?d.push(["class",n.langPrefix+i]):(d[f]=d[f].slice(),d[f][1]+=" "+n.langPrefix+i);const l={attrs:d};return`<pre><code${o.renderAttrs(l)}>${c}</code></pre>
`}return`<pre><code${o.renderAttrs(u)}>${c}</code></pre>
`};le.image=function(e,t,n,r,o){const u=e[t];return u.attrs[u.attrIndex("alt")][1]=o.renderInlineAsText(u.children,n,r),o.renderToken(e,t,n)};le.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};le.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};le.text=function(e,t){return be(e[t].content)};le.html_block=function(e,t){return e[t].content};le.html_inline=function(e,t){return e[t].content};function Oe(){this.rules=it({},le)}Oe.prototype.renderAttrs=function(t){let n,r,o;if(!t.attrs)return"";for(o="",n=0,r=t.attrs.length;n<r;n++)o+=" "+be(t.attrs[n][0])+'="'+be(t.attrs[n][1])+'"';return o};Oe.prototype.renderToken=function(t,n,r){const o=t[n];let u="";if(o.hidden)return"";o.block&&o.nesting!==-1&&n&&t[n-1].hidden&&(u+=`
`),u+=(o.nesting===-1?"</":"<")+o.tag,u+=this.renderAttrs(o),o.nesting===0&&r.xhtmlOut&&(u+=" /");let a=!1;if(o.block&&(a=!0,o.nesting===1&&n+1<t.length)){const i=t[n+1];(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===o.tag)&&(a=!1)}return u+=a?`>
`:">",u};Oe.prototype.renderInline=function(e,t,n){let r="";const o=this.rules;for(let u=0,a=e.length;u<a;u++){const i=e[u].type;typeof o[i]<"u"?r+=o[i](e,u,t,n,this):r+=this.renderToken(e,u,t)}return r};Oe.prototype.renderInlineAsText=function(e,t,n){let r="";for(let o=0,u=e.length;o<u;o++)switch(e[o].type){case"text":r+=e[o].content;break;case"image":r+=this.renderInlineAsText(e[o].children,t,n);break;case"html_inline":case"html_block":r+=e[o].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Oe.prototype.render=function(e,t,n){let r="";const o=this.rules;for(let u=0,a=e.length;u<a;u++){const i=e[u].type;i==="inline"?r+=this.renderInline(e[u].children,t,n):typeof o[i]<"u"?r+=o[i](e,u,t,n,this):r+=this.renderToken(e,u,t,n)}return r};function Z(){this.__rules__=[],this.__cache__=null}Z.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};Z.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(r){t.indexOf(r)<0&&t.push(r)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(r){r.enabled&&(n&&r.alt.indexOf(n)<0||e.__cache__[n].push(r.fn))})})};Z.prototype.at=function(e,t,n){const r=this.__find__(e),o=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=t,this.__rules__[r].alt=o.alt||[],this.__cache__=null};Z.prototype.before=function(e,t,n,r){const o=this.__find__(e),u=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:t,enabled:!0,fn:n,alt:u.alt||[]}),this.__cache__=null};Z.prototype.after=function(e,t,n,r){const o=this.__find__(e),u=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:t,enabled:!0,fn:n,alt:u.alt||[]}),this.__cache__=null};Z.prototype.push=function(e,t,n){const r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null};Z.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!0,n.push(r)},this),this.__cache__=null,n};Z.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};Z.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!1,n.push(r)},this),this.__cache__=null,n};Z.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function ue(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ue.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let r=0,o=n.length;r<o;r++)if(n[r][0]===t)return r;return-1};ue.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};ue.prototype.attrSet=function(t,n){const r=this.attrIndex(t),o=[t,n];r<0?this.attrPush(o):this.attrs[r]=o};ue.prototype.attrGet=function(t){const n=this.attrIndex(t);let r=null;return n>=0&&(r=this.attrs[n][1]),r};ue.prototype.attrJoin=function(t,n){const r=this.attrIndex(t);r<0?this.attrPush([t,n]):this.attrs[r][1]=this.attrs[r][1]+" "+n};function Ar(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Ar.prototype.Token=ue;const bi=/\r\n?|\n/g,Ei=/\0/g;function yi(e){let t;t=e.src.replace(bi,`
`),t=t.replace(Ei,"�"),e.src=t}function vi(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Ai(e){const t=e.tokens;for(let n=0,r=t.length;n<r;n++){const o=t[n];o.type==="inline"&&e.md.inline.parse(o.content,e.md,e.env,o.children)}}function Ti(e){return/^<a[>\s]/i.test(e)}function wi(e){return/^<\/a\s*>/i.test(e)}function Si(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;let o=t[n].children,u=0;for(let a=o.length-1;a>=0;a--){const i=o[a];if(i.type==="link_close"){for(a--;o[a].level!==i.level&&o[a].type!=="link_open";)a--;continue}if(i.type==="html_inline"&&(Ti(i.content)&&u>0&&u--,wi(i.content)&&u++),!(u>0)&&i.type==="text"&&e.md.linkify.test(i.content)){const s=i.content;let c=e.md.linkify.match(s);const f=[];let d=i.level,l=0;c.length>0&&c[0].index===0&&a>0&&o[a-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const g=c[p].url,b=e.md.normalizeLink(g);if(!e.md.validateLink(b))continue;let E=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(E)?E=e.md.normalizeLinkText("mailto:"+E).replace(/^mailto:/,""):E=e.md.normalizeLinkText(E):E=e.md.normalizeLinkText("http://"+E).replace(/^http:\/\//,"");const T=c[p].index;if(T>l){const k=new e.Token("text","",0);k.content=s.slice(l,T),k.level=d,f.push(k)}const A=new e.Token("link_open","a",1);A.attrs=[["href",b]],A.level=d++,A.markup="linkify",A.info="auto",f.push(A);const w=new e.Token("text","",0);w.content=E,w.level=d,f.push(w);const S=new e.Token("link_close","a",-1);S.level=--d,S.markup="linkify",S.info="auto",f.push(S),l=c[p].lastIndex}if(l<s.length){const p=new e.Token("text","",0);p.content=s.slice(l),p.level=d,f.push(p)}t[n].children=o=Er(o,a,f)}}}}const Tr=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,xi=/\((c|tm|r)\)/i,ki=/\((c|tm|r)\)/ig,Ci={c:"©",r:"®",tm:"™"};function Ri(e,t){return Ci[t.toLowerCase()]}function Oi(e){let t=0;for(let n=e.length-1;n>=0;n--){const r=e[n];r.type==="text"&&!t&&(r.content=r.content.replace(ki,Ri)),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function Ni(e){let t=0;for(let n=e.length-1;n>=0;n--){const r=e[n];r.type==="text"&&!t&&Tr.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function Li(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(xi.test(e.tokens[t].content)&&Oi(e.tokens[t].children),Tr.test(e.tokens[t].content)&&Ni(e.tokens[t].children))}const Ii=/['"]/,Mn=/['"]/g,Un="’";function qe(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function Di(e,t){let n="",r=0;t.sort((o,u)=>o.pos-u.pos);for(let o=0;o<t.length;o++){const u=t[o];n+=e.slice(r,u.pos)+u.ch,r=u.pos+1}return n+e.slice(r)}function Fi(e,t){let n;const r=[],o={};for(let u=0;u<e.length;u++){const a=e[u],i=e[u].level;for(n=r.length-1;n>=0&&!(r[n].level<=i);n--);if(r.length=n+1,a.type!=="text")continue;const s=a.content;let c=0;const f=s.length;e:for(;c<f;){Mn.lastIndex=c;const d=Mn.exec(s);if(!d)break;let l=!0,p=!0;c=d.index+1;const g=d[0]==="'";let b=32;if(d.index-1>=0)b=s.charCodeAt(d.index-1);else for(n=u-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){b=e[n].content.charCodeAt(e[n].content.length-1);break}let E=32;if(c<f)E=s.charCodeAt(c);else for(n=u+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){E=e[n].content.charCodeAt(0);break}const T=Be(b)||Ue(b),A=Be(E)||Ue(E),w=Me(b),S=Me(E);if(S?l=!1:A&&(w||T||(l=!1)),w?p=!1:T&&(S||A||(p=!1)),E===34&&d[0]==='"'&&b>=48&&b<=57&&(p=l=!1),l&&p&&(l=T,p=A),!l&&!p){g&&qe(o,u,d.index,Un);continue}if(p)for(n=r.length-1;n>=0;n--){let k=r[n];if(r[n].level<i)break;if(k.single===g&&r[n].level===i){k=r[n];let R,O;g?(R=t.md.options.quotes[2],O=t.md.options.quotes[3]):(R=t.md.options.quotes[0],O=t.md.options.quotes[1]),qe(o,u,d.index,O),qe(o,k.token,k.pos,R),r.length=n;continue e}}l?r.push({token:u,pos:d.index,single:g,level:i}):p&&g&&qe(o,u,d.index,Un)}}Object.keys(o).forEach(function(u){e[u].content=Di(e[u].content,o[u])})}function Pi(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!Ii.test(e.tokens[t].content)||Fi(e.tokens[t].children,e)}function Mi(e){let t,n;const r=e.tokens,o=r.length;for(let u=0;u<o;u++){if(r[u].type!=="inline")continue;const a=r[u].children,i=a.length;for(t=0;t<i;t++)a[t].type==="text_special"&&(a[t].type="text");for(t=n=0;t<i;t++)a[t].type==="text"&&t+1<i&&a[t+1].type==="text"?a[t+1].content=a[t].content+a[t+1].content:(t!==n&&(a[n]=a[t]),n++);t!==n&&(a.length=n)}}const Et=[["normalize",yi],["block",vi],["inline",Ai],["linkify",Si],["replacements",Li],["smartquotes",Pi],["text_join",Mi]];function Kt(){this.ruler=new Z;for(let e=0;e<Et.length;e++)this.ruler.push(Et[e][0],Et[e][1])}Kt.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,r=t.length;n<r;n++)t[n](e)};Kt.prototype.State=Ar;function de(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const o=this.src;for(let u=0,a=0,i=0,s=0,c=o.length,f=!1;a<c;a++){const d=o.charCodeAt(a);if(!f)if(D(d)){i++,d===9?s+=4-s%4:s++;continue}else f=!0;(d===10||a===c-1)&&(d!==10&&a++,this.bMarks.push(u),this.eMarks.push(a),this.tShift.push(i),this.sCount.push(s),this.bsCount.push(0),f=!1,i=0,s=0,u=a+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}de.prototype.push=function(e,t,n){const r=new ue(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r};de.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};de.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};de.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const r=this.src.charCodeAt(t);if(!D(r))break}return t};de.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!D(this.src.charCodeAt(--t)))return t+1;return t};de.prototype.skipChars=function(t,n){for(let r=this.src.length;t<r&&this.src.charCodeAt(t)===n;t++);return t};de.prototype.skipCharsBack=function(t,n,r){if(t<=r)return t;for(;t>r;)if(n!==this.src.charCodeAt(--t))return t+1;return t};de.prototype.getLines=function(t,n,r,o){if(t>=n)return"";const u=new Array(n-t);for(let a=0,i=t;i<n;i++,a++){let s=0;const c=this.bMarks[i];let f=c,d;for(i+1<n||o?d=this.eMarks[i]+1:d=this.eMarks[i];f<d&&s<r;){const l=this.src.charCodeAt(f);if(D(l))l===9?s+=4-(s+this.bsCount[i])%4:s++;else if(f-c<this.tShift[i])s++;else break;f++}s>r?u[a]=new Array(s-r+1).join(" ")+this.src.slice(f,d):u[a]=this.src.slice(f,d)}return u.join("")};de.prototype.Token=ue;const Ui=65536;function yt(e,t){const n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Bn(e){const t=[],n=e.length;let r=0,o=e.charCodeAt(r),u=!1,a=0,i="";for(;r<n;)o===124&&(u?(i+=e.substring(a,r-1),a=r):(t.push(i+e.substring(a,r)),i="",a=r+1)),u=o===92,r++,o=e.charCodeAt(r);return t.push(i+e.substring(a)),t}function Bi(e,t,n,r){if(t+2>n)return!1;let o=t+1;if(e.sCount[o]<e.blkIndent||e.sCount[o]-e.blkIndent>=4)return!1;let u=e.bMarks[o]+e.tShift[o];if(u>=e.eMarks[o])return!1;const a=e.src.charCodeAt(u++);if(a!==124&&a!==45&&a!==58||u>=e.eMarks[o])return!1;const i=e.src.charCodeAt(u++);if(i!==124&&i!==45&&i!==58&&!D(i)||a===45&&D(i))return!1;for(;u<e.eMarks[o];){const S=e.src.charCodeAt(u);if(S!==124&&S!==45&&S!==58&&!D(S))return!1;u++}let s=yt(e,t+1),c=s.split("|");const f=[];for(let S=0;S<c.length;S++){const k=c[S].trim();if(!k){if(S===0||S===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(k))return!1;k.charCodeAt(k.length-1)===58?f.push(k.charCodeAt(0)===58?"center":"right"):k.charCodeAt(0)===58?f.push("left"):f.push("")}if(s=yt(e,t).trim(),s.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=Bn(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const d=c.length;if(d===0||d!==f.length)return!1;if(r)return!0;const l=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),g=e.push("table_open","table",1),b=[t,0];g.map=b;const E=e.push("thead_open","thead",1);E.map=[t,t+1];const T=e.push("tr_open","tr",1);T.map=[t,t+1];for(let S=0;S<c.length;S++){const k=e.push("th_open","th",1);f[S]&&(k.attrs=[["style","text-align:"+f[S]]]);const R=e.push("inline","",0);R.content=c[S].trim(),R.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let A,w=0;for(o=t+2;o<n&&!(e.sCount[o]<e.blkIndent);o++){let S=!1;for(let R=0,O=p.length;R<O;R++)if(p[R](e,o,n,!0)){S=!0;break}if(S||(s=yt(e,o).trim(),!s)||e.sCount[o]-e.blkIndent>=4||(c=Bn(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),w+=d-c.length,w>Ui))break;if(o===t+2){const R=e.push("tbody_open","tbody",1);R.map=A=[t+2,0]}const k=e.push("tr_open","tr",1);k.map=[o,o+1];for(let R=0;R<d;R++){const O=e.push("td_open","td",1);f[R]&&(O.attrs=[["style","text-align:"+f[R]]]);const P=e.push("inline","",0);P.content=c[R]?c[R].trim():"",P.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return A&&(e.push("tbody_close","tbody",-1),A[1]=o),e.push("table_close","table",-1),b[1]=o,e.parentType=l,e.line=o,!0}function $i(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,o=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,o=r;continue}break}e.line=o;const u=e.push("code_block","code",0);return u.content=e.getLines(t,o,4+e.blkIndent,!1)+`
`,u.map=[t,e.line],!0}function Gi(e,t,n,r){let o=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||o+3>u)return!1;const a=e.src.charCodeAt(o);if(a!==126&&a!==96)return!1;let i=o;o=e.skipChars(o,a);let s=o-i;if(s<3)return!1;const c=e.src.slice(i,o),f=e.src.slice(o,u);if(a===96&&f.indexOf(String.fromCharCode(a))>=0)return!1;if(r)return!0;let d=t,l=!1;for(;d++,!(d>=n||(o=i=e.bMarks[d]+e.tShift[d],u=e.eMarks[d],o<u&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(o)===a&&!(e.sCount[d]-e.blkIndent>=4)&&(o=e.skipChars(o,a),!(o-i<s)&&(o=e.skipSpaces(o),!(o<u)))){l=!0;break}s=e.sCount[t],e.line=d+(l?1:0);const p=e.push("fence","code",0);return p.info=f,p.content=e.getLines(t+1,d,s,!0),p.markup=c,p.map=[t,e.line],!0}function Hi(e,t,n,r){let o=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];const a=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(o)!==62)return!1;if(r)return!0;const i=[],s=[],c=[],f=[],d=e.md.block.ruler.getRules("blockquote"),l=e.parentType;e.parentType="blockquote";let p=!1,g;for(g=t;g<n;g++){const w=e.sCount[g]<e.blkIndent;if(o=e.bMarks[g]+e.tShift[g],u=e.eMarks[g],o>=u)break;if(e.src.charCodeAt(o++)===62&&!w){let k=e.sCount[g]+1,R,O;e.src.charCodeAt(o)===32?(o++,k++,O=!1,R=!0):e.src.charCodeAt(o)===9?(R=!0,(e.bsCount[g]+k)%4===3?(o++,k++,O=!1):O=!0):R=!1;let P=k;for(i.push(e.bMarks[g]),e.bMarks[g]=o;o<u;){const U=e.src.charCodeAt(o);if(D(U))U===9?P+=4-(P+e.bsCount[g]+(O?1:0))%4:P++;else break;o++}p=o>=u,s.push(e.bsCount[g]),e.bsCount[g]=e.sCount[g]+1+(R?1:0),c.push(e.sCount[g]),e.sCount[g]=P-k,f.push(e.tShift[g]),e.tShift[g]=o-e.bMarks[g];continue}if(p)break;let S=!1;for(let k=0,R=d.length;k<R;k++)if(d[k](e,g,n,!0)){S=!0;break}if(S){e.lineMax=g,e.blkIndent!==0&&(i.push(e.bMarks[g]),s.push(e.bsCount[g]),f.push(e.tShift[g]),c.push(e.sCount[g]),e.sCount[g]-=e.blkIndent);break}i.push(e.bMarks[g]),s.push(e.bsCount[g]),f.push(e.tShift[g]),c.push(e.sCount[g]),e.sCount[g]=-1}const b=e.blkIndent;e.blkIndent=0;const E=e.push("blockquote_open","blockquote",1);E.markup=">";const T=[t,0];E.map=T,e.md.block.tokenize(e,t,g);const A=e.push("blockquote_close","blockquote",-1);A.markup=">",e.lineMax=a,e.parentType=l,T[1]=e.line;for(let w=0;w<f.length;w++)e.bMarks[w+t]=i[w],e.tShift[w+t]=f[w],e.sCount[w+t]=c[w],e.bsCount[w+t]=s[w];return e.blkIndent=b,!0}function Vi(e,t,n,r){const o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let u=e.bMarks[t]+e.tShift[t];const a=e.src.charCodeAt(u++);if(a!==42&&a!==45&&a!==95)return!1;let i=1;for(;u<o;){const c=e.src.charCodeAt(u++);if(c!==a&&!D(c))return!1;c===a&&i++}if(i<3)return!1;if(r)return!0;e.line=t+1;const s=e.push("hr","hr",0);return s.map=[t,e.line],s.markup=Array(i+1).join(String.fromCharCode(a)),!0}function $n(e,t){const n=e.eMarks[t];let r=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==43)return-1;if(r<n){const u=e.src.charCodeAt(r);if(!D(u))return-1}return r}function Gn(e,t){const n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];let o=n;if(o+1>=r)return-1;let u=e.src.charCodeAt(o++);if(u<48||u>57)return-1;for(;;){if(o>=r)return-1;if(u=e.src.charCodeAt(o++),u>=48&&u<=57){if(o-n>=10)return-1;continue}if(u===41||u===46)break;return-1}return o<r&&(u=e.src.charCodeAt(o),!D(u))?-1:o}function zi(e,t){const n=e.level+2;for(let r=t+2,o=e.tokens.length-2;r<o;r++)e.tokens[r].level===n&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function qi(e,t,n,r){let o,u,a,i,s=t,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let f=!1;r&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(f=!0);let d,l,p;if((p=Gn(e,s))>=0){if(d=!0,a=e.bMarks[s]+e.tShift[s],l=Number(e.src.slice(a,p-1)),f&&l!==1)return!1}else if((p=$n(e,s))>=0)d=!1;else return!1;if(f&&e.skipSpaces(p)>=e.eMarks[s])return!1;if(r)return!0;const g=e.src.charCodeAt(p-1),b=e.tokens.length;d?(i=e.push("ordered_list_open","ol",1),l!==1&&(i.attrs=[["start",l]])):i=e.push("bullet_list_open","ul",1);const E=[s,0];i.map=E,i.markup=String.fromCharCode(g);let T=!1;const A=e.md.block.ruler.getRules("list"),w=e.parentType;for(e.parentType="list";s<n;){u=p,o=e.eMarks[s];const S=e.sCount[s]+p-(e.bMarks[s]+e.tShift[s]);let k=S;for(;u<o;){const re=e.src.charCodeAt(u);if(re===9)k+=4-(k+e.bsCount[s])%4;else if(re===32)k++;else break;u++}const R=u;let O;R>=o?O=1:O=k-S,O>4&&(O=1);const P=S+O;i=e.push("list_item_open","li",1),i.markup=String.fromCharCode(g);const U=[s,0];i.map=U,d&&(i.info=e.src.slice(a,p-1));const Q=e.tight,ne=e.tShift[s],B=e.sCount[s],Y=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=P,e.tight=!0,e.tShift[s]=R-e.bMarks[s],e.sCount[s]=k,R>=o&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,s,n,!0),(!e.tight||T)&&(c=!1),T=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=Y,e.tShift[s]=ne,e.sCount[s]=B,e.tight=Q,i=e.push("list_item_close","li",-1),i.markup=String.fromCharCode(g),s=e.line,U[1]=s,s>=n||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let pe=!1;for(let re=0,ft=A.length;re<ft;re++)if(A[re](e,s,n,!0)){pe=!0;break}if(pe)break;if(d){if(p=Gn(e,s),p<0)break;a=e.bMarks[s]+e.tShift[s]}else if(p=$n(e,s),p<0)break;if(g!==e.src.charCodeAt(p-1))break}return d?i=e.push("ordered_list_close","ol",-1):i=e.push("bullet_list_close","ul",-1),i.markup=String.fromCharCode(g),E[1]=s,e.line=s,e.parentType=w,c&&zi(e,b),!0}function Yi(e,t,n,r){let o=e.bMarks[t]+e.tShift[t],u=e.eMarks[t],a=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(o)!==91)return!1;function i(A){const w=e.lineMax;if(A>=w||e.isEmpty(A))return null;let S=!1;if(e.sCount[A]-e.blkIndent>3&&(S=!0),e.sCount[A]<0&&(S=!0),!S){const O=e.md.block.ruler.getRules("reference"),P=e.parentType;e.parentType="reference";let U=!1;for(let Q=0,ne=O.length;Q<ne;Q++)if(O[Q](e,A,w,!0)){U=!0;break}if(e.parentType=P,U)return null}const k=e.bMarks[A]+e.tShift[A],R=e.eMarks[A];return e.src.slice(k,R+1)}let s=e.src.slice(o,u+1);u=s.length;let c=-1;for(o=1;o<u;o++){const A=s.charCodeAt(o);if(A===91)return!1;if(A===93){c=o;break}else if(A===10){const w=i(a);w!==null&&(s+=w,u=s.length,a++)}else if(A===92&&(o++,o<u&&s.charCodeAt(o)===10)){const w=i(a);w!==null&&(s+=w,u=s.length,a++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(o=c+2;o<u;o++){const A=s.charCodeAt(o);if(A===10){const w=i(a);w!==null&&(s+=w,u=s.length,a++)}else if(!D(A))break}const f=e.md.helpers.parseLinkDestination(s,o,u);if(!f.ok)return!1;const d=e.md.normalizeLink(f.str);if(!e.md.validateLink(d))return!1;o=f.pos;const l=o,p=a,g=o;for(;o<u;o++){const A=s.charCodeAt(o);if(A===10){const w=i(a);w!==null&&(s+=w,u=s.length,a++)}else if(!D(A))break}let b=e.md.helpers.parseLinkTitle(s,o,u);for(;b.can_continue;){const A=i(a);if(A===null)break;s+=A,o=u,u=s.length,a++,b=e.md.helpers.parseLinkTitle(s,o,u,b)}let E;for(o<u&&g!==o&&b.ok?(E=b.str,o=b.pos):(E="",o=l,a=p);o<u;){const A=s.charCodeAt(o);if(!D(A))break;o++}if(o<u&&s.charCodeAt(o)!==10&&E)for(E="",o=l,a=p;o<u;){const A=s.charCodeAt(o);if(!D(A))break;o++}if(o<u&&s.charCodeAt(o)!==10)return!1;const T=st(s.slice(1,c));return T?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[T]>"u"&&(e.env.references[T]={title:E,href:d}),e.line=a),!0):!1}const Ki=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ji="[a-zA-Z_:][a-zA-Z0-9:._-]*",Wi="[^\"'=<>`\\x00-\\x20]+",Ji="'[^']*'",Zi='"[^"]*"',Qi="(?:"+Wi+"|"+Ji+"|"+Zi+")",Xi="(?:\\s+"+ji+"(?:\\s*=\\s*"+Qi+")?)",wr="<[A-Za-z][A-Za-z0-9\\-]*"+Xi+"*\\s*\\/?>",Sr="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",es="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",ts="<[?][\\s\\S]*?[?]>",ns="<![A-Za-z][^>]*>",rs="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",os=new RegExp("^(?:"+wr+"|"+Sr+"|"+es+"|"+ts+"|"+ns+"|"+rs+")"),us=new RegExp("^(?:"+wr+"|"+Sr+")"),Ee=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Ki.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(us.source+"\\s*$"),/^$/,!1]];function as(e,t,n,r){let o=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(o)!==60)return!1;let a=e.src.slice(o,u),i=0;for(;i<Ee.length&&!Ee[i][0].test(a);i++);if(i===Ee.length)return!1;if(r)return Ee[i][2];let s=t+1;const c=Ee[i][1].test("");if(!Ee[i][1].test(a)){for(;s<n&&!(e.sCount[s]<e.blkIndent&&(c||!e.isEmpty(s)));s++)if(o=e.bMarks[s]+e.tShift[s],u=e.eMarks[s],a=e.src.slice(o,u),Ee[i][1].test(a)){a.length!==0&&s++;break}}e.line=s;const f=e.push("html_block","",0);return f.map=[t,s],f.content=e.getLines(t,s,e.blkIndent,!0),!0}function is(e,t,n,r){let o=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(o);if(a!==35||o>=u)return!1;let i=1;for(a=e.src.charCodeAt(++o);a===35&&o<u&&i<=6;)i++,a=e.src.charCodeAt(++o);if(i>6||o<u&&!D(a))return!1;if(r)return!0;u=e.skipSpacesBack(u,o);const s=e.skipCharsBack(u,35,o);s>o&&D(e.src.charCodeAt(s-1))&&(u=s),e.line=t+1;const c=e.push("heading_open","h"+String(i),1);c.markup="########".slice(0,i),c.map=[t,e.line];const f=e.push("inline","",0);f.content=ct(e.src.slice(o,u)),f.map=[t,e.line],f.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup="########".slice(0,i),!0}function ss(e,t,n){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const o=e.parentType;e.parentType="paragraph";let u=0,a,i=t+1;for(;i<n&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3)continue;if(e.sCount[i]>=e.blkIndent){let p=e.bMarks[i]+e.tShift[i];const g=e.eMarks[i];if(p<g&&(a=e.src.charCodeAt(p),(a===45||a===61)&&(p=e.skipChars(p,a),p=e.skipSpaces(p),p>=g))){u=a===61?1:2;break}}if(e.sCount[i]<0)continue;let l=!1;for(let p=0,g=r.length;p<g;p++)if(r[p](e,i,n,!0)){l=!0;break}if(l)break}if(!u)return e.parentType=o,!1;const s=ct(e.getLines(t,i,e.blkIndent,!1));e.line=i+1;const c=e.push("heading_open","h"+String(u),1);c.markup=String.fromCharCode(a),c.map=[t,e.line];const f=e.push("inline","",0);f.content=s,f.map=[t,e.line-1],f.children=[];const d=e.push("heading_close","h"+String(u),-1);return d.markup=String.fromCharCode(a),e.parentType=o,!0}function cs(e,t,n){const r=e.md.block.ruler.getRules("paragraph"),o=e.parentType;let u=t+1;for(e.parentType="paragraph";u<n&&!e.isEmpty(u);u++){if(e.sCount[u]-e.blkIndent>3||e.sCount[u]<0)continue;let c=!1;for(let f=0,d=r.length;f<d;f++)if(r[f](e,u,n,!0)){c=!0;break}if(c)break}const a=ct(e.getLines(t,u,e.blkIndent,!1));e.line=u;const i=e.push("paragraph_open","p",1);i.map=[t,e.line];const s=e.push("inline","",0);return s.content=a,s.map=[t,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=o,!0}const Ye=[["table",Bi,["paragraph","reference"]],["code",$i],["fence",Gi,["paragraph","reference","blockquote","list"]],["blockquote",Hi,["paragraph","reference","blockquote","list"]],["hr",Vi,["paragraph","reference","blockquote","list"]],["list",qi,["paragraph","reference","blockquote"]],["reference",Yi],["html_block",as,["paragraph","reference","blockquote"]],["heading",is,["paragraph","reference","blockquote"]],["lheading",ss],["paragraph",cs]];function lt(){this.ruler=new Z;for(let e=0;e<Ye.length;e++)this.ruler.push(Ye[e][0],Ye[e][1],{alt:(Ye[e][2]||[]).slice()})}lt.prototype.tokenize=function(e,t,n){const r=this.ruler.getRules(""),o=r.length,u=e.md.options.maxNesting;let a=t,i=!1;for(;a<n&&(e.line=a=e.skipEmptyLines(a),!(a>=n||e.sCount[a]<e.blkIndent));){if(e.level>=u){e.line=n;break}const s=e.line;let c=!1;for(let f=0;f<o;f++)if(c=r[f](e,a,n,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!i,e.isEmpty(e.line-1)&&(i=!0),a=e.line,a<n&&e.isEmpty(a)&&(i=!0,a++,e.line=a)}};lt.prototype.parse=function(e,t,n,r){if(!e)return;const o=new this.State(e,t,n,r);this.tokenize(o,o.line,o.lineMax)};lt.prototype.State=de;function He(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}He.prototype.pushPending=function(){const e=new ue("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};He.prototype.push=function(e,t,n){this.pending&&this.pushPending();const r=new ue(e,t,n);let o=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(o),r};He.prototype.scanDelims=function(e,t){const n=this.posMax,r=this.src.charCodeAt(e);let o;if(e===0)o=32;else if(e===1)o=this.src.charCodeAt(0),(o&63488)===55296&&(o=65533);else if(o=this.src.charCodeAt(e-1),(o&64512)===56320){const E=this.src.charCodeAt(e-2);o=(E&64512)===55296?65536+(E-55296<<10)+(o-56320):65533}else(o&64512)===55296&&(o=65533);let u=e;for(;u<n&&this.src.charCodeAt(u)===r;)u++;const a=u-e;let i=u<n?this.src.charCodeAt(u):32;if((i&64512)===55296){const E=this.src.charCodeAt(u+1);i=(E&64512)===56320?65536+(i-55296<<10)+(E-56320):65533}else(i&64512)===56320&&(i=65533);const s=Be(o)||Ue(o),c=Be(i)||Ue(i),f=Me(o),d=Me(i),l=!d&&(!c||f||s),p=!f&&(!s||d||c);return{can_open:l&&(t||!p||s),can_close:p&&(t||!l||c),length:a}};He.prototype.Token=ue;function ls(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ds(e,t){let n=e.pos;for(;n<e.posMax&&!ls(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}const fs=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function hs(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const o=e.pending.match(fs);if(!o)return!1;const u=o[1],a=e.md.linkify.matchAtStart(e.src.slice(n-u.length));if(!a)return!1;let i=a.url;if(i.length<=u.length)return!1;let s=i.length;for(;s>0&&i.charCodeAt(s-1)===42;)s--;s!==i.length&&(i=i.slice(0,s));const c=e.md.normalizeLink(i);if(!e.md.validateLink(c))return!1;if(!t){e.pending=e.pending.slice(0,-u.length);const f=e.push("link_open","a",1);f.attrs=[["href",c]],f.markup="linkify",f.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(i);const l=e.push("link_close","a",-1);l.markup="linkify",l.info="auto"}return e.pos+=i.length-u.length,!0}function ps(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const r=e.pending.length-1,o=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let u=r-1;for(;u>=1&&e.pending.charCodeAt(u-1)===32;)u--;e.pending=e.pending.slice(0,u),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<o&&D(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const jt=[];for(let e=0;e<256;e++)jt.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){jt[e.charCodeAt(0)]=1});function gs(e,t){let n=e.pos;const r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let o=e.src.charCodeAt(n);if(o===10){for(t||e.push("hardbreak","br",0),n++;n<r&&(o=e.src.charCodeAt(n),!!D(o));)n++;return e.pos=n,!0}let u=e.src[n];if(o>=55296&&o<=56319&&n+1<r){const i=e.src.charCodeAt(n+1);i>=56320&&i<=57343&&(u+=e.src[n+1],n++)}const a="\\"+u;if(!t){const i=e.push("text_special","",0);o<256&&jt[o]!==0?i.content=u:i.content=a,i.markup=a,i.info="escape"}return e.pos=n+1,!0}function ms(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const o=n;n++;const u=e.posMax;for(;n<u&&e.src.charCodeAt(n)===96;)n++;const a=e.src.slice(o,n),i=a.length;if(e.backticksScanned&&(e.backticks[i]||0)<=o)return t||(e.pending+=a),e.pos+=i,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<u&&e.src.charCodeAt(s)===96;)s++;const f=s-c;if(f===i){if(!t){const d=e.push("code_inline","code",0);d.markup=a,d.content=e.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[f]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=i,!0}function _s(e,t){const n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;const o=e.scanDelims(e.pos,!0);let u=o.length;const a=String.fromCharCode(r);if(u<2)return!1;let i;u%2&&(i=e.push("text","",0),i.content=a,u--);for(let s=0;s<u;s+=2)i=e.push("text","",0),i.content=a+a,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0}function Hn(e,t){let n;const r=[],o=t.length;for(let u=0;u<o;u++){const a=t[u];if(a.marker!==126||a.end===-1)continue;const i=t[a.end];n=e.tokens[a.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[i.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[i.token-1].type==="text"&&e.tokens[i.token-1].content==="~"&&r.push(i.token-1)}for(;r.length;){const u=r.pop();let a=u+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,u!==a&&(n=e.tokens[a],e.tokens[a]=e.tokens[u],e.tokens[u]=n)}}function bs(e){const t=e.tokens_meta,n=e.tokens_meta.length;Hn(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&Hn(e,t[r].delimiters)}const xr={tokenize:_s,postProcess:bs};function Es(e,t){const n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;const o=e.scanDelims(e.pos,r===42);for(let u=0;u<o.length;u++){const a=e.push("text","",0);a.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:o.length,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close})}return e.pos+=o.length,!0}function Vn(e,t){const n=t.length;for(let r=n-1;r>=0;r--){const o=t[r];if(o.marker!==95&&o.marker!==42||o.end===-1)continue;const u=t[o.end],a=r>0&&t[r-1].end===o.end+1&&t[r-1].marker===o.marker&&t[r-1].token===o.token-1&&t[o.end+1].token===u.token+1,i=String.fromCharCode(o.marker),s=e.tokens[o.token];s.type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?i+i:i,s.content="";const c=e.tokens[u.token];c.type=a?"strong_close":"em_close",c.tag=a?"strong":"em",c.nesting=-1,c.markup=a?i+i:i,c.content="",a&&(e.tokens[t[r-1].token].content="",e.tokens[t[o.end+1].token].content="",r--)}}function ys(e){const t=e.tokens_meta,n=e.tokens_meta.length;Vn(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&Vn(e,t[r].delimiters)}const kr={tokenize:Es,postProcess:ys};function vs(e,t){let n,r,o,u,a="",i="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const f=e.pos,d=e.posMax,l=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let g=p+1;if(g<d&&e.src.charCodeAt(g)===40){for(c=!1,g++;g<d&&(n=e.src.charCodeAt(g),!(!D(n)&&n!==10));g++);if(g>=d)return!1;if(s=g,o=e.md.helpers.parseLinkDestination(e.src,g,e.posMax),o.ok){for(a=e.md.normalizeLink(o.str),e.md.validateLink(a)?g=o.pos:a="",s=g;g<d&&(n=e.src.charCodeAt(g),!(!D(n)&&n!==10));g++);if(o=e.md.helpers.parseLinkTitle(e.src,g,e.posMax),g<d&&s!==g&&o.ok)for(i=o.str,g=o.pos;g<d&&(n=e.src.charCodeAt(g),!(!D(n)&&n!==10));g++);}(g>=d||e.src.charCodeAt(g)!==41)&&(c=!0),g++}if(c){if(typeof e.env.references>"u")return!1;if(g<d&&e.src.charCodeAt(g)===91?(s=g+1,g=e.md.helpers.parseLinkLabel(e,g),g>=0?r=e.src.slice(s,g++):g=p+1):g=p+1,r||(r=e.src.slice(l,p)),u=e.env.references[st(r)],!u)return e.pos=f,!1;a=u.href,i=u.title}if(!t){e.pos=l,e.posMax=p;const b=e.push("link_open","a",1),E=[["href",a]];b.attrs=E,i&&E.push(["title",i]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=g,e.posMax=d,!0}function As(e,t){let n,r,o,u,a,i,s,c,f="";const d=e.pos,l=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,g=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(g<0)return!1;if(u=g+1,u<l&&e.src.charCodeAt(u)===40){for(u++;u<l&&(n=e.src.charCodeAt(u),!(!D(n)&&n!==10));u++);if(u>=l)return!1;for(c=u,i=e.md.helpers.parseLinkDestination(e.src,u,e.posMax),i.ok&&(f=e.md.normalizeLink(i.str),e.md.validateLink(f)?u=i.pos:f=""),c=u;u<l&&(n=e.src.charCodeAt(u),!(!D(n)&&n!==10));u++);if(i=e.md.helpers.parseLinkTitle(e.src,u,e.posMax),u<l&&c!==u&&i.ok)for(s=i.str,u=i.pos;u<l&&(n=e.src.charCodeAt(u),!(!D(n)&&n!==10));u++);else s="";if(u>=l||e.src.charCodeAt(u)!==41)return e.pos=d,!1;u++}else{if(typeof e.env.references>"u")return!1;if(u<l&&e.src.charCodeAt(u)===91?(c=u+1,u=e.md.helpers.parseLinkLabel(e,u),u>=0?o=e.src.slice(c,u++):u=g+1):u=g+1,o||(o=e.src.slice(p,g)),a=e.env.references[st(o)],!a)return e.pos=d,!1;f=a.href,s=a.title}if(!t){r=e.src.slice(p,g);const b=[];e.md.inline.parse(r,e.md,e.env,b);const E=e.push("image","img",0),T=[["src",f],["alt",""]];E.attrs=T,E.children=b,E.content=r,s&&T.push(["title",s])}return e.pos=u,e.posMax=l,!0}const Ts=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,ws=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Ss(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const r=e.pos,o=e.posMax;for(;;){if(++n>=o)return!1;const a=e.src.charCodeAt(n);if(a===60)return!1;if(a===62)break}const u=e.src.slice(r+1,n);if(ws.test(u)){const a=e.md.normalizeLink(u);if(!e.md.validateLink(a))return!1;if(!t){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(u);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=u.length+2,!0}if(Ts.test(u)){const a=e.md.normalizeLink("mailto:"+u);if(!e.md.validateLink(a))return!1;if(!t){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(u);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=u.length+2,!0}return!1}function xs(e){return/^<a[>\s]/i.test(e)}function ks(e){return/^<\/a\s*>/i.test(e)}function Cs(e){const t=e|32;return t>=97&&t<=122}function Rs(e,t){if(!e.md.options.html)return!1;const n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;const o=e.src.charCodeAt(r+1);if(o!==33&&o!==63&&o!==47&&!Cs(o))return!1;const u=e.src.slice(r).match(os);if(!u)return!1;if(!t){const a=e.push("html_inline","",0);a.content=u[0],xs(a.content)&&e.linkLevel++,ks(a.content)&&e.linkLevel--}return e.pos+=u[0].length,!0}const Os=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Ns=/^&([a-z][a-z0-9]{1,31});/i;function Ls(e,t){const n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){const u=e.src.slice(n).match(Os);if(u){if(!t){const a=u[1][0].toLowerCase()==="x"?parseInt(u[1].slice(1),16):parseInt(u[1],10),i=e.push("text_special","",0);i.content=Yt(a)?Pe(a):Pe(65533),i.markup=u[0],i.info="entity"}return e.pos+=u[0].length,!0}}else{const u=e.src.slice(n).match(Ns);if(u){const a=Za(u[0]);if(a!==u[0]){if(!t){const i=e.push("text_special","",0);i.content=a,i.markup=u[0],i.info="entity"}return e.pos+=u[0].length,!0}}}return!1}function zn(e){const t={},n=e.length;if(!n)return;let r=0,o=-2;const u=[];for(let a=0;a<n;a++){const i=e[a];if(u.push(0),(e[r].marker!==i.marker||o!==i.token-1)&&(r=a),o=i.token,i.length=i.length||0,!i.close)continue;t.hasOwnProperty(i.marker)||(t[i.marker]=[-1,-1,-1,-1,-1,-1]);const s=t[i.marker][(i.open?3:0)+i.length%3];let c=r-u[r]-1,f=c;for(;c>s;c-=u[c]+1){const d=e[c];if(d.marker===i.marker&&d.open&&d.end<0){let l=!1;if((d.close||i.open)&&(d.length+i.length)%3===0&&(d.length%3!==0||i.length%3!==0)&&(l=!0),!l){const p=c>0&&!e[c-1].open?u[c-1]+1:0;u[a]=a-c+p,u[c]=p,i.open=!1,d.end=a,d.close=!1,f=-1,o=-2;break}}}f!==-1&&(t[i.marker][(i.open?3:0)+(i.length||0)%3]=f)}}function Is(e){const t=e.tokens_meta,n=e.tokens_meta.length;zn(e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&zn(t[r].delimiters)}function Ds(e){let t,n,r=0;const o=e.tokens,u=e.tokens.length;for(t=n=0;t<u;t++)o[t].nesting<0&&r--,o[t].level=r,o[t].nesting>0&&r++,o[t].type==="text"&&t+1<u&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==n&&(o[n]=o[t]),n++);t!==n&&(o.length=n)}const vt=[["text",ds],["linkify",hs],["newline",ps],["escape",gs],["backticks",ms],["strikethrough",xr.tokenize],["emphasis",kr.tokenize],["link",vs],["image",As],["autolink",Ss],["html_inline",Rs],["entity",Ls]],At=[["balance_pairs",Is],["strikethrough",xr.postProcess],["emphasis",kr.postProcess],["fragments_join",Ds]];function Ve(){this.ruler=new Z;for(let e=0;e<vt.length;e++)this.ruler.push(vt[e][0],vt[e][1]);this.ruler2=new Z;for(let e=0;e<At.length;e++)this.ruler2.push(At[e][0],At[e][1])}Ve.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),r=n.length,o=e.md.options.maxNesting,u=e.cache;if(typeof u[t]<"u"){e.pos=u[t];return}let a=!1;if(e.level<o){for(let i=0;i<r;i++)if(e.level++,a=n[i](e,!0),e.level--,a){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,u[t]=e.pos};Ve.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,r=e.posMax,o=e.md.options.maxNesting;for(;e.pos<r;){const u=e.pos;let a=!1;if(e.level<o){for(let i=0;i<n;i++)if(a=t[i](e,!1),a){if(u>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Ve.prototype.parse=function(e,t,n,r){const o=new this.State(e,t,n,r);this.tokenize(o);const u=this.ruler2.getRules(""),a=u.length;for(let i=0;i<a;i++)u[i](o)};Ve.prototype.State=He;function Fs(e){const t={};e=e||{},t.src_Any=hr.source,t.src_Cc=pr.source,t.src_Z=mr.source,t.src_P=zt.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function Ft(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(r){e[r]=n[r]})}),e}function dt(e){return Object.prototype.toString.call(e)}function Ps(e){return dt(e)==="[object String]"}function Ms(e){return dt(e)==="[object Object]"}function Us(e){return dt(e)==="[object RegExp]"}function qn(e){return dt(e)==="[object Function]"}function Bs(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Cr={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function $s(e){return Object.keys(e||{}).reduce(function(t,n){return t||Cr.hasOwnProperty(n)},!1)}const Gs={"http:":{validate:function(e,t,n){const r=e.slice(t);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const r=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const r=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},Hs="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Vs="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function zs(e){return function(t,n){const r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function Yn(){return function(e,t){t.normalize(e)}}function tt(e){const t=e.re=Fs(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Hs),n.push(t.src_xn),t.src_tlds=n.join("|");function r(i){return i.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),"i"),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),"ig"),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),"i"),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),"ig"),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),"i"),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),"ig"),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),"i");const o=[];e.__compiled__={};function u(i,s){throw new Error('(LinkifyIt) Invalid schema "'+i+'": '+s)}Object.keys(e.__schemas__).forEach(function(i){const s=e.__schemas__[i];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[i]=c,Ms(s)){Us(s.validate)?c.validate=zs(s.validate):qn(s.validate)?c.validate=s.validate:u(i,s),qn(s.normalize)?c.normalize=s.normalize:s.normalize?u(i,s):c.normalize=Yn();return}if(Ps(s)){o.push(i);return}u(i,s)}),o.forEach(function(i){e.__compiled__[e.__schemas__[i]]&&(e.__compiled__[i].validate=e.__compiled__[e.__schemas__[i]].validate,e.__compiled__[i].normalize=e.__compiled__[e.__schemas__[i]].normalize)}),e.__compiled__[""]={validate:null,normalize:Yn()};const a=Object.keys(e.__compiled__).filter(function(i){return i.length>0&&e.__compiled__[i]}).map(Bs).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i")}function Rr(e,t,n,r){const o=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=o,this.text=o,this.url=o}function X(e,t){if(!(this instanceof X))return new X(e,t);t||$s(e)&&(t=e,e={}),this.__opts__=Ft({},Cr,t),this.__schemas__=Ft({},Gs,e),this.__compiled__={},this.__tlds__=Vs,this.__tlds_replaced__=!1,this.re={},tt(this)}X.prototype.add=function(t,n){return this.__schemas__[t]=n,tt(this),this};X.prototype.set=function(t){return this.__opts__=Ft(this.__opts__,t),this};X.prototype.test=function(t){if(!t.length)return!1;let n,r;if(this.re.schema_test.test(t)){for(r=this.re.schema_search,r.lastIndex=0;(n=r.exec(t))!==null;)if(this.testSchemaAt(t,n[2],r.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&t.search(this.re.host_fuzzy_test)>=0&&t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&t.match(this.re.email_fuzzy)!==null)};X.prototype.pretest=function(t){return this.re.pretest.test(t)};X.prototype.testSchemaAt=function(t,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,r,this):0};X.prototype.match=function(t){const n=[],r=[],o=[],u=[];let a,i,s;function c(l,p){return l?p?l.index!==p.index?l.index<p.index?l:p:l.lastIndex>=p.lastIndex?l:p:l:p}if(!t.length)return null;if(this.re.schema_test.test(t))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(t))!==null;)i=this.testSchemaAt(t,a[2],s.lastIndex),i&&r.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+i});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(t))!==null;)o.push({schema:"",index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(t))!==null;)u.push({schema:"mailto:",index:a.index+a[1].length,lastIndex:a.index+a[0].length});const f=[0,0,0];let d=0;for(;;){const l=[r[f[0]],u[f[1]],o[f[2]]],p=c(c(l[0],l[1]),l[2]);if(!p)break;if(p===l[0]?f[0]++:p===l[1]?f[1]++:f[2]++,p.index<d)continue;const g=new Rr(t,p.schema,p.index,p.lastIndex);this.__compiled__[g.schema].normalize(g,this),n.push(g),d=p.lastIndex}return n.length?n:null};X.prototype.matchAtStart=function(t){if(!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const r=this.testSchemaAt(t,n[2],n[0].length);if(!r)return null;const o=new Rr(t,n[2],n.index+n[1].length,n.index+n[0].length+r);return this.__compiled__[o.schema].normalize(o,this),o};X.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(r,o,u){return r!==u[o-1]}).reverse(),tt(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,tt(this),this)};X.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};X.prototype.onCompile=function(){};const we=2147483647,se=36,Wt=1,$e=26,qs=38,Ys=700,Or=72,Nr=128,Lr="-",Ks=/^xn--/,js=/[^\0-\x7F]/,Ws=/[\x2E\u3002\uFF0E\uFF61]/g,Js={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Tt=se-Wt,ce=Math.floor,wt=String.fromCharCode;function ge(e){throw new RangeError(Js[e])}function Zs(e,t){const n=[];let r=e.length;for(;r--;)n[r]=t(e[r]);return n}function Ir(e,t){const n=e.split("@");let r="";n.length>1&&(r=n[0]+"@",e=n[1]),e=e.replace(Ws,".");const o=e.split("."),u=Zs(o,t).join(".");return r+u}function Dr(e){const t=[];let n=0;const r=e.length;for(;n<r;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const u=e.charCodeAt(n++);(u&64512)==56320?t.push(((o&1023)<<10)+(u&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}const Qs=e=>String.fromCodePoint(...e),Xs=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:se},Kn=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Fr=function(e,t,n){let r=0;for(e=n?ce(e/Ys):e>>1,e+=ce(e/t);e>Tt*$e>>1;r+=se)e=ce(e/Tt);return ce(r+(Tt+1)*e/(e+qs))},Pr=function(e){const t=[],n=e.length;let r=0,o=Nr,u=Or,a=e.lastIndexOf(Lr);a<0&&(a=0);for(let i=0;i<a;++i)e.charCodeAt(i)>=128&&ge("not-basic"),t.push(e.charCodeAt(i));for(let i=a>0?a+1:0;i<n;){const s=r;for(let f=1,d=se;;d+=se){i>=n&&ge("invalid-input");const l=Xs(e.charCodeAt(i++));l>=se&&ge("invalid-input"),l>ce((we-r)/f)&&ge("overflow"),r+=l*f;const p=d<=u?Wt:d>=u+$e?$e:d-u;if(l<p)break;const g=se-p;f>ce(we/g)&&ge("overflow"),f*=g}const c=t.length+1;u=Fr(r-s,c,s==0),ce(r/c)>we-o&&ge("overflow"),o+=ce(r/c),r%=c,t.splice(r++,0,o)}return String.fromCodePoint(...t)},Mr=function(e){const t=[];e=Dr(e);const n=e.length;let r=Nr,o=0,u=Or;for(const s of e)s<128&&t.push(wt(s));const a=t.length;let i=a;for(a&&t.push(Lr);i<n;){let s=we;for(const f of e)f>=r&&f<s&&(s=f);const c=i+1;s-r>ce((we-o)/c)&&ge("overflow"),o+=(s-r)*c,r=s;for(const f of e)if(f<r&&++o>we&&ge("overflow"),f===r){let d=o;for(let l=se;;l+=se){const p=l<=u?Wt:l>=u+$e?$e:l-u;if(d<p)break;const g=d-p,b=se-p;t.push(wt(Kn(p+g%b,0))),d=ce(g/b)}t.push(wt(Kn(d,0))),u=Fr(o,c,i===a),o=0,++i}++o,++r}return t.join("")},ec=function(e){return Ir(e,function(t){return Ks.test(t)?Pr(t.slice(4).toLowerCase()):t})},tc=function(e){return Ir(e,function(t){return js.test(t)?"xn--"+Mr(t):t})},Ur={version:"2.3.1",ucs2:{decode:Dr,encode:Qs},decode:Pr,encode:Mr,toASCII:tc,toUnicode:ec},nc={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},rc={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},oc={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},uc={default:nc,zero:rc,commonmark:oc},ac=/^(vbscript|javascript|file|data):/,ic=/^data:image\/(gif|png|jpeg|webp);/;function sc(e){const t=e.trim().toLowerCase();return ac.test(t)?ic.test(t):!0}const Br=["http:","https:","mailto:"];function cc(e){const t=Vt(e,!0);if(t.hostname&&(!t.protocol||Br.indexOf(t.protocol)>=0))try{t.hostname=Ur.toASCII(t.hostname)}catch{}return Ge(Ht(t))}function lc(e){const t=Vt(e,!0);if(t.hostname&&(!t.protocol||Br.indexOf(t.protocol)>=0))try{t.hostname=Ur.toUnicode(t.hostname)}catch{}return xe(Ht(t),xe.defaultChars+"%")}function oe(e,t){if(!(this instanceof oe))return new oe(e,t);t||qt(e)||(t=e||{},e="default"),this.inline=new Ve,this.block=new lt,this.core=new Kt,this.renderer=new Oe,this.linkify=new X,this.validateLink=sc,this.normalizeLink=cc,this.normalizeLinkText=lc,this.utils=hi,this.helpers=it({},_i),this.options={},this.configure(e),t&&this.set(t)}oe.prototype.set=function(e){return it(this.options,e),this};oe.prototype.configure=function(e){const t=this;if(qt(e)){const n=e;if(e=uc[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};oe.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(o){return n.indexOf(o)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};oe.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(o){return n.indexOf(o)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};oe.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};oe.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};oe.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};oe.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};oe.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};const dc=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),Ce=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",nt=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!nt(e[n],t[n]))return!1;return!0}if(Ce(e)&&Ce(t)){const n=Object.entries(e),r=new Set(Object.keys(t));if(n.length!==r.size)return!1;for(const[o,u]of n){if(!nt(u,t[o]))return!1;r.delete(o)}return r.size===0}return!1},Ke=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ce(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},fc=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",jn=e=>e>="0"&&e<="9"||e==="-",hc=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var h;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(h||(h={}));const Wn={"(":h.TOK_LPAREN,")":h.TOK_RPAREN,"*":h.TOK_STAR,",":h.TOK_COMMA,".":h.TOK_DOT,":":h.TOK_COLON,"@":h.TOK_CURRENT,$:h.TOK_ROOT,"]":h.TOK_RBRACKET,"{":h.TOK_LBRACE,"}":h.TOK_RBRACE},pc={"!":!0,"<":!0,"=":!0,">":!0},gc={"	":!0,"\n":!0,"\r":!0," ":!0};class mc{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let r,o,u;for(;this._current<t.length;)if(fc(t[this._current]))r=this._current,o=this.consumeUnquotedIdentifier(t),n.push({start:r,type:h.TOK_UNQUOTEDIDENTIFIER,value:o});else if(Wn[t[this._current]]!==void 0)n.push({start:this._current,type:Wn[t[this._current]],value:t[this._current]}),this._current+=1;else if(jn(t[this._current]))u=this.consumeNumber(t),n.push(u);else if(t[this._current]==="[")u=this.consumeLBracket(t),n.push(u);else if(t[this._current]==='"')r=this._current,o=this.consumeQuotedIdentifier(t),n.push({start:r,type:h.TOK_QUOTEDIDENTIFIER,value:o});else if(t[this._current]==="'")r=this._current,o=this.consumeRawStringLiteral(t),n.push({start:r,type:h.TOK_LITERAL,value:o});else if(t[this._current]==="`"){r=this._current;const a=this.consumeLiteral(t);n.push({start:r,type:h.TOK_LITERAL,value:a})}else if(pc[t[this._current]]!==void 0)u=this.consumeOperator(t),u&&n.push(u);else if(gc[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")r=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:r,type:h.TOK_AND,value:"&&"})):n.push({start:r,type:h.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")r=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:r,type:h.TOK_OR,value:"||"})):n.push({start:r,type:h.TOK_PIPE,value:"|"});else{const a=new Error(`Unknown character: ${t[this._current]}`);throw a.name="LexerError",a}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&hc(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const r=t.length;for(;t[this._current]!=='"'&&this._current<r;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==='"')?o+=2:o+=1,this._current=o}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const r=t.length;for(;t[this._current]!=="'"&&this._current<r;){let u=this._current;t[u]==="\\"&&(t[u+1]==="\\"||t[u+1]==="'")?u+=2:u+=1,this._current=u}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const r=t.length;for(;jn(t[this._current])&&this._current<r;)this._current+=1;const o=parseInt(t.slice(n,this._current),10);return{start:n,value:o,type:h.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:h.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:h.TOK_FLATTEN,value:"[]"}):{start:n,type:h.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,r=t[n];if(this._current+=1,r==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:h.TOK_NE,value:"!="}):{start:n,type:h.TOK_NOT,value:"!"};if(r==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:h.TOK_LTE,value:"<="}):{start:n,type:h.TOK_LT,value:"<"};if(r===">")return t[this._current]==="="?(this._current+=1,{start:n,type:h.TOK_GTE,value:">="}):{start:n,type:h.TOK_GT,value:">"};if(r==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:h.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,r=t.length;for(;t[this._current]!=="`"&&this._current<r;){let a=this._current;t[a]==="\\"&&(t[a+1]==="\\"||t[a+1]==="`")?a+=2:a+=1,this._current=a}let o=t.slice(n,this._current).trimLeft();o=o.replace("\\`","`");const u=this.looksLikeJSON(o)?JSON.parse(o):JSON.parse(`"${o}"`);return this._current+=1,u}looksLikeJSON(t){const r=["true","false","null"],o="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||r.includes(t))return!0;if(o.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const _c=new mc,q={[h.TOK_EOF]:0,[h.TOK_UNQUOTEDIDENTIFIER]:0,[h.TOK_QUOTEDIDENTIFIER]:0,[h.TOK_RBRACKET]:0,[h.TOK_RPAREN]:0,[h.TOK_COMMA]:0,[h.TOK_RBRACE]:0,[h.TOK_NUMBER]:0,[h.TOK_CURRENT]:0,[h.TOK_EXPREF]:0,[h.TOK_ROOT]:0,[h.TOK_PIPE]:1,[h.TOK_OR]:2,[h.TOK_AND]:3,[h.TOK_EQ]:5,[h.TOK_GT]:5,[h.TOK_LT]:5,[h.TOK_GTE]:5,[h.TOK_LTE]:5,[h.TOK_NE]:5,[h.TOK_FLATTEN]:9,[h.TOK_STAR]:20,[h.TOK_FILTER]:21,[h.TOK_DOT]:40,[h.TOK_NOT]:45,[h.TOK_LBRACE]:50,[h.TOK_LBRACKET]:55,[h.TOK_LPAREN]:60};class bc{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==h.TOK_EOF){const r=this.lookaheadToken(0);this.errorToken(r,`Unexpected token type: ${r.type}, value: ${r.value}`)}return n}loadTokens(t){this.tokens=[..._c.tokenize(t),{type:h.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let r=this.nud(n),o=this.lookahead(0);for(;t<q[o];)this.advance(),r=this.led(o,r),o=this.lookahead(0);return r}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,r,o;switch(t.type){case h.TOK_LITERAL:return{type:"Literal",value:t.value};case h.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case h.TOK_QUOTEDIDENTIFIER:const u={type:"Field",name:t.value};if(this.lookahead(0)===h.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return u;case h.TOK_NOT:return r=this.expression(q.Not),{type:"NotExpression",children:[r]};case h.TOK_STAR:return n={type:"Identity"},r=this.lookahead(0)===h.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(q.Star),{type:"ValueProjection",children:[n,r]};case h.TOK_FILTER:return this.led(t.type,{type:"Identity"});case h.TOK_LBRACE:return this.parseMultiselectHash();case h.TOK_FLATTEN:return n={type:h.TOK_FLATTEN,children:[{type:"Identity"}]},r=this.parseProjectionRHS(q.Flatten),{type:"Projection",children:[n,r]};case h.TOK_LBRACKET:return this.lookahead(0)===h.TOK_NUMBER||this.lookahead(0)===h.TOK_COLON?(r=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},r)):this.lookahead(0)===h.TOK_STAR&&this.lookahead(1)===h.TOK_RBRACKET?(this.advance(),this.advance(),r=this.parseProjectionRHS(q.Star),{children:[{type:"Identity"},r],type:"Projection"}):this.parseMultiselectList();case h.TOK_CURRENT:return{type:h.TOK_CURRENT};case h.TOK_ROOT:return{type:h.TOK_ROOT};case h.TOK_EXPREF:return o=this.expression(q.Expref),{type:"ExpressionReference",children:[o]};case h.TOK_LPAREN:const a=[];for(;this.lookahead(0)!==h.TOK_RPAREN;)this.lookahead(0)===h.TOK_CURRENT?(o={type:h.TOK_CURRENT},this.advance()):o=this.expression(0),a.push(o);return this.match(h.TOK_RPAREN),a[0];default:this.errorToken(t)}}led(t,n){let r;switch(t){case h.TOK_DOT:const o=q.Dot;return this.lookahead(0)!==h.TOK_STAR?(r=this.parseDotRHS(o),{type:"Subexpression",children:[n,r]}):(this.advance(),r=this.parseProjectionRHS(o),{type:"ValueProjection",children:[n,r]});case h.TOK_PIPE:return r=this.expression(q.Pipe),{type:h.TOK_PIPE,children:[n,r]};case h.TOK_OR:return r=this.expression(q.Or),{type:"OrExpression",children:[n,r]};case h.TOK_AND:return r=this.expression(q.And),{type:"AndExpression",children:[n,r]};case h.TOK_LPAREN:const u=n.name,a=[];let i;for(;this.lookahead(0)!==h.TOK_RPAREN;)this.lookahead(0)===h.TOK_CURRENT?(i={type:h.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===h.TOK_COMMA&&this.match(h.TOK_COMMA),a.push(i);return this.match(h.TOK_RPAREN),{name:u,type:"Function",children:a};case h.TOK_FILTER:const c=this.expression(0);return this.match(h.TOK_RBRACKET),r=this.lookahead(0)===h.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(q.Filter),{type:"FilterProjection",children:[n,r,c]};case h.TOK_FLATTEN:const f={type:h.TOK_FLATTEN,children:[n]},d=this.parseProjectionRHS(q.Flatten);return{type:"Projection",children:[f,d]};case h.TOK_EQ:case h.TOK_NE:case h.TOK_GT:case h.TOK_GTE:case h.TOK_LT:case h.TOK_LTE:return this.parseComparator(n,t);case h.TOK_LBRACKET:const l=this.lookaheadToken(0);return l.type===h.TOK_NUMBER||l.type===h.TOK_COLON?(r=this.parseIndexExpression(),this.projectIfSlice(n,r)):(this.match(h.TOK_STAR),this.match(h.TOK_RBRACKET),r=this.parseProjectionRHS(q.Star),{type:"Projection",children:[n,r]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const r=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw r.name="ParserError",r}parseIndexExpression(){if(this.lookahead(0)===h.TOK_COLON||this.lookahead(1)===h.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(h.TOK_RBRACKET),t}projectIfSlice(t,n){const r={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[r,this.parseProjectionRHS(q.Star)],type:"Projection"}:r}parseSliceExpression(){const t=[null,null,null];let n=0,r=this.lookahead(0);for(;r!==h.TOK_RBRACKET&&n<3;){if(r===h.TOK_COLON)n+=1,this.advance();else if(r===h.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const o=this.lookaheadToken(0);this.errorToken(o,`Syntax error, unexpected token: ${o.value}(${o.type})`)}r=this.lookahead(0)}return this.match(h.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const r=this.expression(q[n]);return{type:"Comparator",name:n,children:[t,r]}}parseDotRHS(t){const n=this.lookahead(0);if([h.TOK_UNQUOTEDIDENTIFIER,h.TOK_QUOTEDIDENTIFIER,h.TOK_STAR].includes(n))return this.expression(t);if(n===h.TOK_LBRACKET)return this.match(h.TOK_LBRACKET),this.parseMultiselectList();if(n===h.TOK_LBRACE)return this.match(h.TOK_LBRACE),this.parseMultiselectHash();const o=this.lookaheadToken(0);this.errorToken(o,`Syntax error, unexpected token: ${o.value}(${o.type})`)}parseProjectionRHS(t){if(q[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===h.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===h.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===h.TOK_DOT)return this.match(h.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==h.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===h.TOK_COMMA&&(this.match(h.TOK_COMMA),this.lookahead(0)===h.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(h.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[h.TOK_UNQUOTEDIDENTIFIER,h.TOK_QUOTEDIDENTIFIER];let r,o,u;for(;;){if(r=this.lookaheadToken(0),!n.includes(r.type))throw new Error(`Expecting an identifier token, got: ${r.type}`);if(o=r.value,this.advance(),this.match(h.TOK_COLON),u=this.expression(0),t.push({value:u,type:"KeyValuePair",name:o}),this.lookahead(0)===h.TOK_COMMA)this.match(h.TOK_COMMA);else if(this.lookahead(0)===h.TOK_RBRACE){this.match(h.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Ec=new bc;var y;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(y||(y={}));class yc{constructor(t){this.TYPE_NAME_TABLE={[y.TYPE_NUMBER]:"number",[y.TYPE_ANY]:"any",[y.TYPE_STRING]:"string",[y.TYPE_ARRAY]:"array",[y.TYPE_OBJECT]:"object",[y.TYPE_BOOLEAN]:"boolean",[y.TYPE_EXPREF]:"expression",[y.TYPE_NULL]:"null",[y.TYPE_ARRAY_NUMBER]:"Array<number>",[y.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let r=0;for(let o=0;o<n.length;o+=1)r+=n[o];return r/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[r,o]=n;return r.includes(o)},this.functionEndsWith=n=>{const[r,o]=n;return r.includes(o,r.length-o.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[r,o]=n;return o.join(r)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>Ce(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const r=[],o=this._interpreter,u=n[0],a=n[1];for(let i=0;i<a.length;i+=1)r.push(o.visit(u,a[i]));return r},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===y.TYPE_NUMBER)return Math.max(...n);const o=n;let u=o[0];for(let a=1;a<o.length;a+=1)u.localeCompare(o[a])<0&&(u=o[a]);return u},this.functionMaxBy=n=>{const r=n[1],o=n[0],u=this.createKeyFunction(r,[y.TYPE_NUMBER,y.TYPE_STRING]);let a=-1/0,i,s;for(let c=0;c<o.length;c+=1)s=u&&u(o[c]),s!==void 0&&s>a&&(a=s,i=o[c]);return i},this.functionMerge=n=>{let r={};for(let o=0;o<n.length;o+=1){const u=n[o];r=Object.assign(r,u)}return r},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===y.TYPE_NUMBER)return Math.min(...n);const o=n;let u=o[0];for(let a=1;a<o.length;a+=1)o[a].localeCompare(u)<0&&(u=o[a]);return u},this.functionMinBy=n=>{const r=n[1],o=n[0],u=this.createKeyFunction(r,[y.TYPE_NUMBER,y.TYPE_STRING]);let a=1/0,i,s;for(let c=0;c<o.length;c+=1)s=u&&u(o[c]),s!==void 0&&s<a&&(a=s,i=o[c]);return i},this.functionNotNull=n=>{for(let r=0;r<n.length;r+=1)if(this.getTypeName(n[r])!==y.TYPE_NULL)return n[r];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===y.TYPE_STRING){const u=n;let a="";for(let i=u.length-1;i>=0;i-=1)a+=u[i];return a}const o=n.slice(0);return o.reverse(),o},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const r=n[0].slice(0);if(r.length===0)return r;const o=this._interpreter,u=n[1],a=this.getTypeName(o.visit(u,r[0]));if(a!==void 0&&![y.TYPE_NUMBER,y.TYPE_STRING].includes(a))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[a]})`);const i=[];for(let s=0;s<r.length;s+=1)i.push([s,r[s]]);i.sort((s,c)=>{const f=o.visit(u,s[1]),d=o.visit(u,c[1]);if(this.getTypeName(f)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(f)]}`);if(this.getTypeName(d)!==a)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[a]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return f>d?1:f<d?-1:s[0]-c[0]});for(let s=0;s<i.length;s+=1)r[s]=i[s][1];return r},this.functionStartsWith=([n,r])=>n.startsWith(r),this.functionSum=([n])=>n.reduce((r,o)=>r+o,0),this.functionToArray=([n])=>this.getTypeName(n)===y.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const r=this.getTypeName(n);let o;return r===y.TYPE_NUMBER?n:r===y.TYPE_STRING&&(o=+n,!isNaN(o))?o:null},this.functionToString=([n])=>this.getTypeName(n)===y.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case y.TYPE_NUMBER:return"number";case y.TYPE_STRING:return"string";case y.TYPE_ARRAY:return"array";case y.TYPE_OBJECT:return"object";case y.TYPE_BOOLEAN:return"boolean";case y.TYPE_EXPREF:return"expref";case y.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[y.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[y.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[y.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[y.TYPE_STRING,y.TYPE_ARRAY]},{types:[y.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[y.TYPE_STRING]},{types:[y.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[y.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[y.TYPE_STRING]},{types:[y.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[y.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[y.TYPE_STRING,y.TYPE_ARRAY,y.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[y.TYPE_EXPREF]},{types:[y.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[y.TYPE_ARRAY_NUMBER,y.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[y.TYPE_ARRAY]},{types:[y.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[y.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[y.TYPE_ARRAY_NUMBER,y.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[y.TYPE_ARRAY]},{types:[y.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[y.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[y.TYPE_STRING,y.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[y.TYPE_ARRAY_STRING,y.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[y.TYPE_ARRAY]},{types:[y.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[y.TYPE_STRING]},{types:[y.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[y.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[y.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[y.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[y.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[y.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[y.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,r){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:r}}callFunction(t,n){const r=this.functionTable[t];if(r===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,r._signature),r._func.call(this,n)}validateInputSignatures(t,n){for(let r=0;r<n.length;r+=1)if("variadic"in n[r]&&r!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${r+1} must occur last`)}validateArgs(t,n,r){var o,u;let a;this.validateInputSignatures(t,r);const i=r.filter(b=>{var E;return(E=!b.optional)!==null&&E!==void 0?E:!1}).length,s=(u=(o=r[r.length-1])===null||o===void 0?void 0:o.variadic)!==null&&u!==void 0?u:!1,c=n.length<i,f=n.length>r.length,d=c&&(!s&&i>1||s)?"at least ":"";if(s&&c||!s&&(c||f))throw a=r.length>1,new Error(`ArgumentError: ${t}() takes ${d}${i} argument${a&&"s"||""} but received ${n.length}`);let l,p,g;for(let b=0;b<r.length;b+=1){g=!1,l=r[b].types,p=this.getTypeName(n[b]);let E;for(E=0;E<l.length;E+=1)if(p!==void 0&&this.typeMatches(p,l[E],n[b])){g=!0;break}if(!g&&p!==void 0){const T=l.map(A=>this.TYPE_NAME_TABLE[A]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${b+1} to be type (${T}) but received type ${this.TYPE_NAME_TABLE[p]} instead.`)}}}typeMatches(t,n,r){if(n===y.TYPE_ANY)return!0;if(n===y.TYPE_ARRAY_STRING||n===y.TYPE_ARRAY_NUMBER||n===y.TYPE_ARRAY){if(n===y.TYPE_ARRAY)return t===y.TYPE_ARRAY;if(t===y.TYPE_ARRAY){let o;n===y.TYPE_ARRAY_NUMBER?o=y.TYPE_NUMBER:n===y.TYPE_ARRAY_STRING&&(o=y.TYPE_STRING);for(let u=0;u<r.length;u+=1){const a=this.getTypeName(r[u]);if(a!==void 0&&o!==void 0&&!this.typeMatches(a,o,r[u]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return y.TYPE_STRING;case"[object Number]":return y.TYPE_NUMBER;case"[object Array]":return y.TYPE_ARRAY;case"[object Boolean]":return y.TYPE_BOOLEAN;case"[object Null]":return y.TYPE_NULL;case"[object Object]":return t.jmespathType===h.TOK_EXPREF?y.TYPE_EXPREF:y.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const r=this._interpreter;return u=>{const a=r.visit(t,u);if(!n.includes(this.getTypeName(a))){const i=`TypeError: expected one of (${n.map(s=>this.TYPE_NAME_TABLE[s]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(a)]}`;throw new Error(i)}return a}}}class vc{constructor(){this._rootValue=null,this.runtime=new yc(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let r,o,u,a,i,s,c,f,d,l,p;switch(t.type){case"Field":return n===null?null:Ce(n)?(s=n[t.name],s===void 0?null:s):null;case"Subexpression":for(u=this.visit(t.children[0],n),l=1;l<t.children.length;l+=1)if(u=this.visit(t.children[1],u),u===null)return null;return u;case"IndexExpression":return c=this.visit(t.children[0],n),f=this.visit(t.children[1],c),f;case"Index":if(!Array.isArray(n))return null;let g=t.value;return g<0&&(g=n.length+g),u=n[g],u===void 0&&(u=null),u;case"Slice":if(!Array.isArray(n))return null;const b=[...t.children],E=this.computeSliceParams(n.length,b),[T,A,w]=E;if(u=[],w>0)for(l=T;l<A;l+=w)u.push(n[l]);else for(l=T;l>A;l+=w)u.push(n[l]);return u;case"Projection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;for(d=[],l=0;l<p.length;l+=1)o=this.visit(t.children[1],p[l]),o!==null&&d.push(o);return d;case"ValueProjection":if(p=this.visit(t.children[0],n),!Ce(p))return null;d=[];const S=Object.values(p);for(l=0;l<S.length;l+=1)o=this.visit(t.children[1],S[l]),o!==null&&d.push(o);return d;case"FilterProjection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;const k=[],R=[];for(l=0;l<p.length;l+=1)r=this.visit(t.children[2],p[l]),Ke(r)||k.push(p[l]);for(let B=0;B<k.length;B+=1)o=this.visit(t.children[1],k[B]),o!==null&&R.push(o);return R;case"Comparator":switch(a=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case h.TOK_EQ:u=nt(a,i);break;case h.TOK_NE:u=!nt(a,i);break;case h.TOK_GT:u=a>i;break;case h.TOK_GTE:u=a>=i;break;case h.TOK_LT:u=a<i;break;case h.TOK_LTE:u=a<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return u;case h.TOK_FLATTEN:const O=this.visit(t.children[0],n);if(!Array.isArray(O))return null;let P=[];for(l=0;l<O.length;l+=1)o=O[l],Array.isArray(o)?P=[...P,...o]:P.push(o);return P;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(d=[],l=0;l<t.children.length;l+=1)d.push(this.visit(t.children[l],n));return d;case"MultiSelectHash":if(n===null)return null;d={};let U;for(l=0;l<t.children.length;l+=1)U=t.children[l],d[U.name]=this.visit(U.value,n);return d;case"OrExpression":return r=this.visit(t.children[0],n),Ke(r)&&(r=this.visit(t.children[1],n)),r;case"AndExpression":return a=this.visit(t.children[0],n),Ke(a)?a:this.visit(t.children[1],n);case"NotExpression":return a=this.visit(t.children[0],n),Ke(a);case"Literal":return t.value;case h.TOK_PIPE:return c=this.visit(t.children[0],n),this.visit(t.children[1],c);case h.TOK_CURRENT:return n;case h.TOK_ROOT:return this._rootValue;case"Function":const Q=[];for(let B=0;B<t.children.length;B+=1)Q.push(this.visit(t.children[B],n));return this.runtime.callFunction(t.name,Q);case"ExpressionReference":const ne=t.children[0];return ne.jmespathType=h.TOK_EXPREF,ne;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[r,o,u]=n;if(u===null)u=1;else if(u===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const a=u<0;return r=r===null?a?t-1:0:this.capSliceRange(t,r,u),o=o===null?a?-1:t:this.capSliceRange(t,o,u),[r,o,u]}capSliceRange(t,n,r){let o=n;return o<0?(o+=t,o<0&&(o=r<0?-1:0)):o>=t&&(o=r<0?t-1:t),o}}const Ac=new vc;y.TYPE_ANY;y.TYPE_ARRAY;y.TYPE_ARRAY_NUMBER;y.TYPE_ARRAY_STRING;y.TYPE_BOOLEAN;y.TYPE_EXPREF;y.TYPE_NULL;y.TYPE_NUMBER;y.TYPE_OBJECT;y.TYPE_STRING;function Tc(e,t){const n=Ec.parse(t);return Ac.search(n,e)}const wc=Object.freeze(Object.defineProperty({__proto__:null,search:Tc},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
