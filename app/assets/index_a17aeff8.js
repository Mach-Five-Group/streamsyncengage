(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const Je="modulepreload",Qe=function(a){return"/"+a},ve={},I=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){let _=function(h){return Promise.all(h.map(E=>Promise.resolve(E).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=s?.nonce||s?.getAttribute("nonce");o=_(t.map(h=>{if(h=Qe(h),h in ve)return;ve[h]=!0;const E=h.endsWith(".css"),L=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${L}`))return;const w=document.createElement("link");if(w.rel=E?"stylesheet":Je,E||(w.as="script"),w.crossOrigin="",w.href=h,d&&w.setAttribute("nonce",d),document.head.appendChild(w),E)return new Promise((N,D)=>{w.addEventListener("load",N),w.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return o.then(s=>{for(const d of s||[])d.status==="rejected"&&r(d.reason);return e().catch(r)})};var Xe=/([:*])(\w+)/g,Ze="([^/]+)",et=/\*/g,tt="?(?:.*)",nt=/\/\?/g,at="/?([^/]+|)",ot="(?:/^|^)",rt="";function ke(a){return a===void 0&&(a="/"),ue()?location.pathname+location.search+location.hash:a}function A(a){return a.replace(/\/+$/,"").replace(/^\/+/,"")}function Q(a){return typeof a=="string"}function st(a){return typeof a=="function"}function X(a){return a&&a.indexOf("#")>=0&&a.split("#").pop()||""}function it(a,e){return e.length===0||!a?null:a.slice(1,a.length).reduce(function(t,n,o){return t===null&&(t={}),t[e[o]]=decodeURIComponent(n),t},null)}function Z(a){var e=A(a).split(/\?(.*)?$/);return[A(e[0]),e.slice(1).join("")]}function de(a){for(var e={},t=a.split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]!==""){var r=decodeURIComponent(o[0]);e[r]?(Array.isArray(e[r])||(e[r]=[e[r]]),e[r].push(decodeURIComponent(o[1]||""))):e[r]=decodeURIComponent(o[1]||"")}}return e}function Pe(a,e){var t=Z(A(a.currentLocationPath)),n=t[0],o=t[1],r=o===""?null:de(o),s=[],d;if(Q(e.path)){if(d=ot+A(e.path).replace(Xe,function(L,w,N){return s.push(N),Ze}).replace(et,tt).replace(nt,at)+"$",A(e.path)===""&&A(n)==="")return{url:n,queryString:o,hashString:X(a.to),route:e,data:null,params:r}}else d=e.path;var _=new RegExp(d,rt),h=n.match(_);if(h){var E=Q(e.path)?it(h,s):h.groups?h.groups:h.slice(1);return{url:A(n.replace(new RegExp("^"+a.instance.root),"")),queryString:o,hashString:X(a.to),route:e,data:E,params:r}}return!1}function Me(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function G(a,e){return typeof a[e]>"u"||a[e]===!0}function lt(a){if(!a)return{};var e=a.split(","),t={},n;return e.forEach(function(o){var r=o.split(":").map(function(s){return s.replace(/(^ +| +$)/g,"")});switch(r[0]){case"historyAPIMethod":t.historyAPIMethod=r[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=r[1];break;case"resolveOptionsHash":n||(n={}),n.hash=r[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":t[r[0]]=r[1]==="true";break}}),n&&(t.resolveOptions=n),t}function ue(){return typeof window<"u"}function ct(a,e){return a===void 0&&(a=[]),e===void 0&&(e={}),a.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(n){t[n]&&(e[n]||(e[n]=[]),e[n].push(t[n]))})}),e}function M(a,e,t){var n=e||{},o=0;(function r(){if(!a[o]){t&&t(n);return}Array.isArray(a[o])?(a.splice.apply(a,[o,1].concat(a[o][0](n)?a[o][1]:a[o][2])),r()):a[o](n,function(s){typeof s>"u"||s===!0?(o+=1,r()):t&&t(n)})})()}M.if=function(a,e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),[a,e,t]};function be(a,e){typeof a.currentLocationPath>"u"&&(a.currentLocationPath=a.to=ke(a.instance.root)),a.currentLocationPath=a.instance._checkForAHash(a.currentLocationPath),e()}function ae(a,e){for(var t=0;t<a.instance.routes.length;t++){var n=a.instance.routes[t],o=Pe(a,n);if(o&&(a.matches||(a.matches=[]),a.matches.push(o),a.resolveOptions.strategy==="ONE")){e();return}}e()}function dt(a,e){a.navigateOptions&&(typeof a.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof a.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function ut(a,e){a.navigateOptions.force===!0?(a.instance._setCurrent([a.instance._pathToMatchObject(a.to)]),e(!1)):e()}var Ee=ue(),gt=Me();function pt(a,e){if(G(a.navigateOptions,"updateBrowserURL")){var t=("/"+a.to).replace(/\/\//g,"/"),n=Ee&&a.resolveOptions&&a.resolveOptions.hash===!0;gt?(history[a.navigateOptions.historyAPIMethod||"pushState"](a.navigateOptions.stateObj||{},a.navigateOptions.title||"",n?"#"+t:t),location&&location.hash&&(a.instance.__freezeListening=!0,setTimeout(function(){if(!n){var o=location.hash;location.hash="",location.hash=o}a.instance.__freezeListening=!1},1))):Ee&&(window.location.href=a.to)}e()}function Ue(a,e){var t=a.instance;if(!t.lastResolved()){e();return}M(t.lastResolved().map(function(n){return function(o,r){if(!n.route.hooks||!n.route.hooks.leave){r();return}var s=!1,d=a.instance.matchLocation(n.route.path,a.currentLocationPath,!1);if(n.route.path!=="*")s=!d;else{var _=a.matches?a.matches.find(function(h){return n.route.path===h.route.path}):!1;s=!_}if(G(a.navigateOptions,"callHooks")&&s){M(n.route.hooks.leave.map(function(h){return function(E,L){return h(function(w){w===!1?a.instance.__markAsClean(a):L()},a.matches&&a.matches.length>0?a.matches.length===1?a.matches[0]:a.matches:void 0)}}).concat([function(){return r()}]));return}else r()}}),{},function(){return e()})}function _t(a,e){a.match.route.hooks&&a.match.route.hooks.before&&G(a.navigateOptions,"callHooks")?M(a.match.route.hooks.before.map(function(t){return function(o,r){return t(function(s){s===!1?a.instance.__markAsClean(a):r()},a.match)}}).concat([function(){return e()}])):e()}function mt(a,e){G(a.navigateOptions,"callHandler")&&a.match.route.handler(a.match),a.instance.updatePageLinks(),e()}function ht(a,e){a.match.route.hooks&&a.match.route.hooks.after&&G(a.navigateOptions,"callHooks")&&a.match.route.hooks.after.forEach(function(t){return t(a.match)}),e()}function ft(a,e){var t=a.instance.lastResolved();if(t&&t[0]&&t[0].route===a.match.route&&t[0].url===a.match.url&&t[0].queryString===a.match.queryString){t.forEach(function(n){n.route.hooks&&n.route.hooks.already&&G(a.navigateOptions,"callHooks")&&n.route.hooks.already.forEach(function(o){return o(a.match)})}),e(!1);return}e()}function vt(a,e){var t=a.instance._notFoundRoute;if(t){a.notFoundHandled=!0;var n=Z(a.currentLocationPath),o=n[0],r=n[1],s=X(a.to);t.path=A(o);var d={url:t.path,queryString:r,hashString:s,data:null,route:t,params:r!==""?de(r):null};a.matches=[d],a.match=d}e()}function bt(a,e){(!a.resolveOptions||a.resolveOptions.noMatchWarning===!1||typeof a.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+a.currentLocationPath+`" didn't match any of the registered routes.`),e()}function Et(a,e){a.instance._setCurrent(null),e()}function Fe(a,e){G(a.navigateOptions,"updateState")&&a.instance._setCurrent(a.matches),e()}var De=[ft,_t,mt,ht],ye=[Ue,vt,M.if(function(a){var e=a.notFoundHandled;return e},De.concat([Fe]),[bt,Et])];function le(){return le=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},le.apply(this,arguments)}function Se(a,e){var t=0;function n(){if(t===a.matches.length){Fe(a,e);return}M(De,le({},a,{match:a.matches[t]}),function(){t+=1,n()})}Ue(a,n)}function oe(a){a.instance.__markAsClean(a)}function ce(){return ce=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},ce.apply(this,arguments)}var Ae="[data-navigo]";function yt(a,e){var t=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ae},n=this,o="/",r=null,s=[],d=!1,_,h=Me(),E=ue();a?o=A(a):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function L(c){return c.indexOf("#")>=0&&(t.hash===!0?c=c.split("#")[1]||"/":c=c.split("#")[0]),c}function w(c){return A(o+"/"+A(c))}function N(c,g,v,S){return c=Q(c)?w(c):c,{name:S||A(String(c)),path:c,handler:g,hooks:ct(v)}}function D(c,g,v){var S=this;return typeof c=="object"&&!(c instanceof RegExp)?(Object.keys(c).forEach(function(b){if(typeof c[b]=="function")S.on(b,c[b]);else{var P=c[b],z=P.uses,We=P.as,Ke=P.hooks;s.push(N(b,z,[_,Ke],We))}}),this):(typeof c=="function"&&(v=g,g=c,c=o),s.push(N(c,g,[_,v])),this)}function u(c,g){if(n.__dirty){n.__waiting.push(function(){return n.resolve(c,g)});return}else n.__dirty=!0;c=c?A(o)+"/"+A(c):void 0;var v={instance:n,to:c,currentLocationPath:c,navigateOptions:{},resolveOptions:ce({},t,g)};return M([be,ae,M.if(function(S){var b=S.matches;return b&&b.length>0},Se,ye)],v,oe),v.matches?v.matches:!1}function m(c,g){if(n.__dirty){n.__waiting.push(function(){return n.navigate(c,g)});return}else n.__dirty=!0;c=A(o)+"/"+A(c);var v={instance:n,to:c,navigateOptions:g||{},resolveOptions:g&&g.resolveOptions?g.resolveOptions:t,currentLocationPath:L(c)};M([dt,ut,ae,M.if(function(S){var b=S.matches;return b&&b.length>0},Se,ye),pt,oe],v,oe)}function f(c,g,v){var S=me(c,g);return S!==null?(m(S.replace(new RegExp("^/?"+o),""),v),!0):!1}function T(c){return this.routes=s=s.filter(function(g){return Q(c)?A(g.path)!==A(c):st(c)?c!==g.handler:String(g.path)!==String(c)}),this}function C(){h&&(this.__popstateListener=function(){n.__freezeListening||u()},window.addEventListener("popstate",this.__popstateListener))}function O(){this.routes=s=[],h&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=d=!0}function U(c,g){return n._notFoundRoute=N("*",c,[_,g],"__NOT_FOUND__"),this}function k(){if(E)return H().forEach(function(c){if(c.getAttribute("data-navigo")==="false"||c.getAttribute("target")==="_blank"){c.hasListenerAttached&&c.removeEventListener("click",c.navigoHandler);return}c.hasListenerAttached||(c.hasListenerAttached=!0,c.navigoHandler=function(g){if((g.ctrlKey||g.metaKey)&&g.target.tagName.toLowerCase()==="a")return!1;var v=c.getAttribute("href");if(typeof v>"u"||v===null)return!1;if(v.match(/^(http|https)/)&&typeof URL<"u")try{var S=new URL(v);v=S.pathname+S.search}catch{}var b=lt(c.getAttribute("data-navigo-options"));d||(g.preventDefault(),g.stopPropagation(),n.navigate(A(v),b))},c.addEventListener("click",c.navigoHandler))}),n}function H(){return E?[].slice.call(document.querySelectorAll(t.linksSelector||Ae)):[]}function ne(c){return"/"+o+"/"+A(c)}function q(c){return _=c,this}function Ve(){return r}function me(c,g,v){var S=s.find(function(z){return z.name===c}),b=null;if(S){if(b=S.path,g)for(var P in g)b=b.replace(":"+P,g[P]);b=b.match(/^\//)?b:"/"+b}return b&&v&&!v.includeRoot&&(b=b.replace(new RegExp("^/"+o),"")),b}function $e(c){return c.getAttribute("href")}function he(c){var g=Z(A(c)),v=g[0],S=g[1],b=S===""?null:de(S),P=X(c),z=N(v,function(){},[_],v);return{url:v,queryString:S,hashString:P,route:z,data:null,params:b}}function qe(){return he(A(ke(o)).replace(new RegExp("^"+o),""))}function ze(c){var g={instance:n,currentLocationPath:c,to:c,resolveOptions:t};return ae(g,function(){}),g.matches?g.matches:!1}function je(c,g,v){typeof g<"u"&&(typeof v>"u"||v)&&(g=w(g));var S={instance:n,to:g,currentLocationPath:g};be(S,function(){}),typeof c=="string"&&(c=typeof v>"u"||v?w(c):c);var b=Pe(S,{name:String(c),path:c,handler:function(){},hooks:{}});return b||!1}function W(c,g,v){return typeof g=="string"&&(g=fe(g)),g?(g.hooks[c]||(g.hooks[c]=[]),g.hooks[c].push(v),function(){g.hooks[c]=g.hooks[c].filter(function(S){return S!==v})}):(console.warn("Route doesn't exists: "+g),function(){})}function fe(c){return typeof c=="string"?s.find(function(g){return g.name===w(c)}):s.find(function(g){return g.handler===c})}function Ye(c){c.instance.__dirty=!1,c.instance.__waiting.length>0&&c.instance.__waiting.shift()()}this.root=o,this.routes=s,this.destroyed=d,this.current=r,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Ye,this.on=D,this.off=T,this.resolve=u,this.navigate=m,this.navigateByName=f,this.destroy=O,this.notFound=U,this.updatePageLinks=k,this.link=ne,this.hooks=q,this.extractGETParameters=function(c){return Z(L(c))},this.lastResolved=Ve,this.generate=me,this.getLinkPath=$e,this.match=ze,this.matchLocation=je,this.getCurrentLocation=qe,this.addBeforeHook=W.bind(this,"before"),this.addAfterHook=W.bind(this,"after"),this.addAlreadyHook=W.bind(this,"already"),this.addLeaveHook=W.bind(this,"leave"),this.getRoute=fe,this._pathToMatchObject=he,this._clean=A,this._checkForAHash=L,this._setCurrent=function(c){return r=n.current=c},C.call(this),k.call(this)}var St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function At(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var j={exports:{}},wt=j.exports,we;function Tt(){return we||(we=1,(function(a,e){(function(t,n){var o={};t.PubSub?(o=t.PubSub,console.warn("PubSub already loaded, using existing version")):(t.PubSub=o,n(o)),a!==void 0&&a.exports&&(e=a.exports=o),e.PubSub=o,a.exports=e=o})(typeof window=="object"&&window||wt||St,function(t){var n={},o=-1,r="*";function s(u){var m;for(m in u)if(Object.prototype.hasOwnProperty.call(u,m))return!0;return!1}function d(u){return function(){throw u}}function _(u,m,f){try{u(m,f)}catch(T){setTimeout(d(T),0)}}function h(u,m,f){u(m,f)}function E(u,m,f,T){var C=n[m],O=T?h:_,U;if(Object.prototype.hasOwnProperty.call(n,m))for(U in C)Object.prototype.hasOwnProperty.call(C,U)&&O(C[U],u,f)}function L(u,m,f){return function(){var C=String(u),O=C.lastIndexOf(".");for(E(u,u,m,f);O!==-1;)C=C.substr(0,O),O=C.lastIndexOf("."),E(u,C,m,f);E(u,r,m,f)}}function w(u){var m=String(u),f=!!(Object.prototype.hasOwnProperty.call(n,m)&&s(n[m]));return f}function N(u){for(var m=String(u),f=w(m)||w(r),T=m.lastIndexOf(".");!f&&T!==-1;)m=m.substr(0,T),T=m.lastIndexOf("."),f=w(m);return f}function D(u,m,f,T){u=typeof u=="symbol"?u.toString():u;var C=L(u,m,T),O=N(u);return O?(f===!0?C():setTimeout(C,0),!0):!1}t.publish=function(u,m){return D(u,m,!1,t.immediateExceptions)},t.publishSync=function(u,m){return D(u,m,!0,t.immediateExceptions)},t.subscribe=function(u,m){if(typeof m!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(n,u)||(n[u]={});var f="uid_"+String(++o);return n[u][f]=m,f},t.subscribeAll=function(u){return t.subscribe(r,u)},t.subscribeOnce=function(u,m){var f=t.subscribe(u,function(){t.unsubscribe(f),m.apply(this,arguments)});return t},t.clearAllSubscriptions=function(){n={}},t.clearSubscriptions=function(m){var f;for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(m)===0&&delete n[f]},t.countSubscriptions=function(m){var f,T,C=0;for(f in n)if(Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(m)===0){for(T in n[f])C++;break}return C},t.getSubscriptions=function(m){var f,T=[];for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(m)===0&&T.push(f);return T},t.unsubscribe=function(u){var m=function(ne){var q;for(q in n)if(Object.prototype.hasOwnProperty.call(n,q)&&q.indexOf(ne)===0)return!0;return!1},f=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(n,u)||m(u)),T=!f&&typeof u=="string",C=typeof u=="function",O=!1,U,k,H;if(f){t.clearSubscriptions(u);return}for(U in n)if(Object.prototype.hasOwnProperty.call(n,U)){if(k=n[U],T&&k[u]){delete k[u],O=u;break}if(C)for(H in k)Object.prototype.hasOwnProperty.call(k,H)&&k[H]===u&&(delete k[H],O=!0)}return O}})})(j,j.exports)),j.exports}var Ct=Tt();const i=At(Ct),l=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",LLM:"LLM",LLM_DO_DOWNLOAD:"LLM.DO.DOWNLOAD",LLM_STATUS:"LLM.STATUS",LLM_COMPLETE:"LLM.COMPLETE",LLM_ERROR:"LLM.ERROR",LLM_PROMPT:"LLM.PROMPT",LLM_RESPONSE:"LLM.RESPONSE",LLM_CANCEL:"LLM.CANCEL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),re={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var se={};const y=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function xe(a,e=null){if(a in y)return y[a];if(typeof process<"u"&&se&&se[a]){const t=se[a];return t==="true"?!0:t==="false"?!1:isNaN(t)?t:Number(t)}if(typeof import.meta<"u"&&re&&re[a]){const t=re[a];return t==="true"?!0:t==="false"?!1:isNaN(t)?t:Number(t)}return e}function Lt(a){return xe(a,!1)===!0}function Ot(){return{...y}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:y,getFlag:xe,isEnabled:Lt,getAllFlags:Ot});function Rt(){console.log("[WebComponentBridge] Initializing global event bridge...");const a=e=>t=>{const n=t.detail?.pubsubTopic;n?(console.log(`[WebComponentBridge] ${e} -> ${n}:`,t.detail),i.publish(n,t.detail)):console.log(`[WebComponentBridge] ${e} (no topic):`,t.detail)};document.addEventListener("nav-select",a("nav-select")),document.addEventListener("logo-click",a("logo-click")),document.addEventListener("nav-hover",a("nav-hover")),document.addEventListener("nav-double-tap",a("nav-double-tap")),document.addEventListener("nav-long-tap",a("nav-long-tap")),document.addEventListener("message-sent",a("message-sent")),console.log("[WebComponentBridge] Global event bridge initialized")}function Nt(){console.log("[AppEvents] Initializing event listeners..."),i.subscribe(l.APP_READY,(t,n)=>{console.log("[AppEvents] APP_READY:",n)}),i.subscribe(l.APP_ERROR,(t,n)=>{console.error("[AppEvents] APP_ERROR:",n)}),i.subscribe(l.APP_SIGNOUT,(t,n)=>{console.log("[AppEvents] APP_SIGNOUT:",n)}),i.subscribe(l.ROUTE_NAV_BEFORE,(t,n)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",n),i.publish(l.UI_LOADING_START)}),i.subscribe(l.ROUTE_NAV_AFTER,(t,n)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",n),i.publish(l.UI_LOADING_END)}),i.subscribe(l.ROUTE_NAV_ERROR,(t,n)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",n),i.publish(l.APP_ERROR,{message:"Navigation error",details:n})}),i.subscribe(l.AUTH_SIGNIN_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",n)}),i.subscribe(l.AUTH_SIGNIN_FAIL,(t,n)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",n),i.publish(l.UI_TOAST,{message:n.message||"Sign in failed",type:"danger"})}),i.subscribe(l.AUTH_SIGNUP_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),i.publish(l.AUTH_VERIFY_LINK)}),i.subscribe(l.AUTH_VERIFY_LINK,(t,n)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),i.subscribe(l.AUTH_SIGNUP_FAIL,(t,n)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",n),i.publish(l.UI_TOAST,{message:n.message||"Sign up failed",type:"danger"})}),i.subscribe(l.AUTH_SIGNOUT_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Signed out successfully",type:"info"})}),i.subscribe(l.AUTH_SIGNUP,(t,n)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),i.subscribe(l.AUTH_FORGOT,(t,n)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),i.subscribe(l.AUTH_FORGOT_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),i.subscribe(l.AUTH_RESETHASH_NAV,(t,n)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),i.subscribe(l.AUTH_RESETHASH_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),i.subscribe(l.AUTH_TOKEN_EXPIRED,(t,n)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",n),i.publish(l.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),i.subscribe(l.I18N_SET_LANG,(t,n)=>{console.log("[AppEvents] I18N_SET_LANG:",n);const{langCode:o}=n;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),i.publish(l.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(r){console.error("[AppEvents] Error changing language:",r),i.publish(l.UI_TOAST,{message:`Failed to change language: ${r.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),i.subscribe("CONVERSATION.PROMPT",(t,n)=>{const o=t.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.PROMPT received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display prompt in canvas:",n.message),K(n.message,"user",n.timestamp),i.publish(l.CANVAS_DO_SCROLL);break;case"AGENT":console.log("[AppEvents] Send prompt to agent:",n.message),i.publish(l.LLM_PROMPT,{message:n.message});break;case"AGENT_CANVAS":if(n.message&&n.message.startsWith("::")){console.log("[AppEvents] CLI command detected:",n.message),K(n.message,"user",n.timestamp),i.publish(l.CANVAS_DO_SCROLL),(async()=>{const r=(await I(async()=>{const{default:_}=await Promise.resolve().then(()=>Ut);return{default:_}},void 0)).default,s=window.AuthController?.getEntity(),d=await r.process(n.message,s);i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:d.message,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}),i.publish(l.CANVAS_DO_SCROLL)})();break}console.log("[AppEvents] Send prompt to agent + canvas:",n.message),K(n.message,"user",n.timestamp),i.publish(l.CANVAS_DO_SCROLL),i.publish(l.LLM_PROMPT,{message:n.message});break;case"STAGE":console.log("[AppEvents] Stage prompt for editing:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${o}`);break}}),i.subscribe("CONVERSATION.RESPONSE",(t,n)=>{const o=t.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.RESPONSE received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display response in canvas:",n.message),K(n.message,"assistant",n.timestamp,n.streaming);break;case"WORKFLOW":console.log("[AppEvents] Send response to workflow engine:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${o}`);break}}),i.subscribe(l.UI_LOADING_START,(t,n)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),i.subscribe(l.UI_LOADING_END,(t,n)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),i.subscribe(l.UI_TOAST,(t,n)=>{console.log("[AppEvents] UI_TOAST:",n)}),i.subscribe(l.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const t="0.1",n=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${t} 6/11/2026, 7:30:13 AM|© ${n} Mach Five Tech`,"night")}),Rt(),i.subscribe("M5T_PRIMARY_NAV",(t,n)=>{const o=t.split(".")[1];switch(console.log(`[AppEvents] M5T_PRIMARY_NAV.${o}:`,n),o){case"TAP":a(n);break;case"LOGO_TAP":e();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function a(t){const{token:n,level:o,primaryToken:r}=t;switch(n){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),i.publish(l.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${n}`,{primaryToken:r});break}}function e(t){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 6/11/2026, 7:30:13 AM|© ${o} Mach Five Tech`,"night",5e3)}i.subscribe(l.LLM_DO_DOWNLOAD,(t,n)=>{console.log("[AppEvents] LLM_DO_DOWNLOAD:",n),window.LLMController?window.LLMController.loadModel():console.error("[AppEvents] LLMController not available")}),i.subscribe(l.LLM_STATUS,(t,n)=>{console.log("[AppEvents] LLM_STATUS:",n),n&&typeof neodigmToast<"u"&&(n.text||`${n.progressPercent}`)}),i.subscribe(l.LLM_COMPLETE,(t,n)=>{console.log("[AppEvents] LLM_COMPLETE:",n);const o=n?.cached?`Model ${n.modelId} loaded from cache!`:`Model ${n.modelId} downloaded and ready!`;typeof neodigmToast<"u"&&neodigmToast.q(o,"success",5e3),i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:`✓ AI Model Ready: ${n.modelId}`,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})})}),i.subscribe(l.LLM_ERROR,(t,n)=>{console.error("[AppEvents] LLM_ERROR:",n);const o=`AI Error: ${n.error||"Unknown error"}`;typeof neodigmToast<"u"&&neodigmToast.q(o,"danger",8e3),i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:`✗ ${o}`,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})})}),i.subscribe(l.LLM_PROMPT,(t,n)=>{console.log("[AppEvents] LLM_PROMPT:",n),window.LLMController&&n?.message?window.LLMController.chat(n.message):console.error("[AppEvents] LLMController not available or no message provided")}),i.subscribe(l.LLM_RESPONSE,(t,n)=>{console.log("[AppEvents] LLM_RESPONSE:",n),!n?.done&&n?.fullContent&&i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:n.fullContent,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),streaming:!0})}),i.subscribe(l.LLM_CANCEL,(t,n)=>{console.log("[AppEvents] LLM_CANCEL"),window.LLMController&&window.LLMController.cancelGeneration()}),i.subscribe(l.AUTH_SIGNOUT,(t,n)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(y.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}function K(a,e="user",t=null,n=!1){const o=document.getElementById("chat-messages");if(!o){console.warn("[AppEvents] chat-messages element not found - may not be on home route");return}if(t||(t=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})),n&&e==="assistant"){const s=o.firstElementChild;if(s&&s.tagName.toLowerCase()==="m5t-chat-response"){s.setAttribute("message",a),console.log(`[AppEvents] Updated streaming ${e} bubble (${a.length} chars)`);return}}let r;e==="user"||e==="prompt"?r=document.createElement("m5t-chat-prompt"):r=document.createElement("m5t-chat-response"),r.setAttribute("message",a),r.setAttribute("timestamp",t),o.prepend(r),console.log(`[AppEvents] Added ${e} bubble to canvas (${a.length} chars)`)}class F{static CONFIG={BASE_URL:window.location.hostname==="localhost"?"http://localhost:3333":"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#n=null;static#a=null;static#s=null;static async init({BASE_URL:e,navigateFunction:t,customConfig:n={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(t&&typeof t=="function")this.#s=t;else throw new Error("navigateFunction is required and must be a function");return e&&(this.CONFIG.BASE_URL=e),n&&Object.keys(n).length>0&&(this.CONFIG={...this.CONFIG,...n}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#c(),this.#l(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#d(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#l(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((e=null)=>{e&&(console.log("[AuthController] mvvLegit navigation to:",e),this.#o(e))}).setOnState((e=null)=>{if(e)switch(console.log("[AuthController] Auth state changed:",e),e){case"AUTH":case 4:this.#p();break;case"UNAUTH":case 1:this.#_();break;case"UNVERF":case 2:this.#m();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#o(e){if(!this.#s){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",e);const t=e.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",t),this.#s(t)}static#c(){try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#n=JSON.parse(e),console.log("[AuthController] Entity state loaded:",this.#n?.email))}catch(e){console.error("[AuthController] Error loading entity state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#a=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#r(e){try{this.#n=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log("[AuthController] Entity state saved")}catch(t){console.error("[AuthController] Error saving entity state:",t)}}static#i(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#n}static async doSignin(e,t){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:t})}),o=await n.json();return n.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#r(o.entity)),setTimeout(()=>{this.#o(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):n.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#r(o.entity),console.log("[AuthController] Explicitly navigating to home"),this.#o(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(n){return console.error("[AuthController] Signin error:",n),{ok:!1,error:n.message}}}static async doSignout(e=!1){console.log("[AuthController] doSignout called, serverInitiated:",e);try{const t=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!t),!e&&t){const n=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(t)}`;if(console.log("[AuthController] Sending signout beacon to:",n),navigator.sendBeacon){const o=navigator.sendBeacon(n);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else t||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#i(),console.log("[AuthController] Stopping auth ping..."),this.#u(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(t){console.error("[AuthController] Signout error:",t),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();return t.ok&&n.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#r(n.entity),{ok:!0,data:n}):{ok:!1,error:n.error||"Sign up failed",data:n}}catch(t){return console.error("[AuthController] Signup error:",t),{ok:!1,error:t.message}}}static async doResetHash(e,t){try{const n=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:t,modified_by:e})}),r=await o.json();return o.ok&&r.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:r}):{ok:!1,error:r.error||"Password reset failed",data:r}}catch(n){return console.error("[AuthController] Reset password error:",n),{ok:!1,error:n.message}}}static#d(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#g()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#u(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#g(){try{const e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log("[AuthController] Ping success"):(e.status===401||e.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(e){console.error("[AuthController] Ping error:",e)}}static setDeepLinkGuid(e){this.#a=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log("[AuthController] Deep-link GUID stored:",e)}static getDeepLinkGuid(){return this.#a}static clearDeepLink(){this.#a=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#p(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#d()}static#_(){console.log("[AuthController] User unauthenticated"),this.#u()}static#m(){console.log("[AuthController] User unverified")}static getAuthState(){try{const e=mvvLegit.getConf()?.LSKEY||"mvv",t=localStorage.getItem(e);if(!t)return"UNAUTH";if(typeof LZString>"u")return null;const n=LZString.decompressFromUTF16(t),r=JSON.parse(n)?.state;return r===1?"UNAUTH":r===2?"UNVERF":r===4?"AUTH":r===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(e){this.#o(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#g()}}class p{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:e,product:t,whitelabel:n,lang:o}){e&&(this.#t.buildMode=e),t&&(this.#t.product=t),n&&(this.#t.whitelabel=n),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(e,t={}){const n={...this.#t,...t},{buildMode:o,product:r,whitelabel:s,lang:d}=n;try{const _=this.#e[o]?.[r]?.[s]?.[d]?.[e];return _?Array.isArray(_)?_[Math.floor(Math.random()*_.length)]:_:(console.warn(`[MicrocopyManager] Token not found: ${e} (${o}/${r}/${s}/${d})`),null)}catch(_){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,_),null}}static getAll(e={}){const t={...this.#t,...e},{buildMode:n,product:o,whitelabel:r,lang:s}=t;try{return this.#e[n]?.[o]?.[r]?.[s]||null}catch(d){return console.error("[MicrocopyManager] Error retrieving all tokens",d),null}}static has(e,t={}){const n={...this.#t,...t},{buildMode:o,product:r,whitelabel:s,lang:d}=n;try{return!!this.#e[o]?.[r]?.[s]?.[d]?.[e]}catch{return!1}}static getAvailableLanguages(){const{buildMode:e,product:t,whitelabel:n}=this.#t;try{return Object.keys(this.#e[e]?.[t]?.[n]||{})}catch{return[]}}static update(e,t,n={}){const o={...this.#t,...n},{buildMode:r,product:s,whitelabel:d,lang:_}=o;try{return this.#e[r]||(this.#e[r]={}),this.#e[r][s]||(this.#e[r][s]={}),this.#e[r][s][d]||(this.#e[r][s][d]={}),this.#e[r][s][d][_]||(this.#e[r][s][d][_]={}),this.#e[r][s][d][_][e]=t,!0}catch(h){return console.error(`[MicrocopyManager] Error updating token: ${e}`,h),!1}}static delete(e,t={}){const n={...this.#t,...t},{buildMode:o,product:r,whitelabel:s,lang:d}=n;try{return delete this.#e[o]?.[r]?.[s]?.[d]?.[e],!0}catch(_){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,_),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(t){return console.error("[MicrocopyManager] Error importing data",t),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:p});class x{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const e=this.#s();p.setContext(e),console.log("[I18nController] Initialized with context:",e),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#l(),this.#c(),this.#e=!0,this.refresh()}static#a(e){const t={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},n=e.toLowerCase();return t[n]||"DEV"}static#s(){const t=this.#a("production"),n=localStorage.getItem(y.FF_SSE_LS_WHITELABEL)||y.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(y.FF_SSE_LS_USER_LANG)||y.FF_SSE_I18N_LANG;return{buildMode:t,product:y.FF_SSE_I18N_PRODUCT,whitelabel:n,lang:o}}static#l(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,t,n)=>{y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",n),this.#t=n,setTimeout(()=>{this.refresh()},y.FF_SSE_I18N_APPLY_DELAY_MS)},y.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#o())}static#o(){setInterval(()=>{const t=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");t&&t!==this.#t&&(this.#t=t,this.refresh())},500)}static#c(){this.#n||(this.#n=new MutationObserver(e=>{let t=!1;for(const n of e){for(const o of n.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){t=!0;break}if(t)break}t&&(y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#r(document.body),this.#i(document.body),y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#r(e){const t=e.querySelectorAll("[data-meta-copywrite-i118n]");y.FF_SSE_I18N_DEBUG&&t.length>0&&console.log(`[I18nController] Processing ${t.length} elements`),t.forEach(n=>{try{const o=n.getAttribute("data-meta-copywrite-i118n"),r=JSON.parse(o);if(!r.token){console.warn("[I18nController] Missing token in config:",r);return}const s=r.attribute||"textContent",d=p.get(r.token);if(d===null){console.warn(`[I18nController] Microcopy not found for token: ${r.token}`);return}s==="textContent"?n.textContent=d:s==="innerHTML"?n.innerHTML=d:n.setAttribute(s,d),y.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${d}" to ${s} for token: ${r.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,n)}})}static#i(e){e.querySelectorAll("*").forEach(n=>{n.shadowRoot&&(this.#r(n.shadowRoot),this.#i(n.shadowRoot))})}static setLanguage(e){const t=p.getAvailableLanguages();if(!t.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,t);return}localStorage.setItem(y.FF_SSE_LS_USER_LANG,e),p.setContext({lang:e}),console.log("[I18nController] Language changed to:",e);const n=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(n),this.refresh()}static setWhitelabel(e){localStorage.setItem(y.FF_SSE_LS_WHITELABEL,e),p.setContext({whitelabel:e}),y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",e),this.refresh()}static getLanguage(){return p.getContext().lang}static getAvailableLanguages(){return p.getAvailableLanguages()}static getContext(){return p.getContext()}static destroy(){this.#n&&(this.#n.disconnect(),this.#n=null),this.#e=!1,this.#t=null,y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{x.initialize()}):x.initialize());class Te{static engine=null;static webllm=null;static isInitialized=!1;static currentModel=null;static isGenerating=!1;static isModelCached=!1;static DEFAULT_MODEL="Llama-3.2-1B-Instruct-q4f32_1-MLC";static messages=[{role:"system",content:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful."}];static async initialize(){if(this.isInitialized)return console.log("[LLMController] Already initialized"),!0;console.log("[LLMController] Initializing WebLLM module...");try{if(!navigator.gpu)throw new Error("WebGPU is not available. Please use a supported browser (Chrome 113+, Edge 113+).");if(console.log("[LLMController] WebGPU detected"),this.webllm=await I(()=>import("https://esm.run/@mlc-ai/web-llm"),[]),console.log("[LLMController] WebLLM module loaded"),!this.webllm||!this.webllm.MLCEngine)throw new Error("MLCEngine not found in WebLLM module");return this.engine=new this.webllm.MLCEngine,console.log("[LLMController] MLCEngine created"),this.engine.setInitProgressCallback(e=>{this.handleInitProgress(e)}),this.isModelCached=await this.checkModelCache(),this.isInitialized=!0,console.log("[LLMController] Engine initialized, attempting auto-load..."),await this.autoLoadCachedModel(),console.log("[LLMController] Initialization complete"),!0}catch(e){return console.error("[LLMController] Initialization failed:",e),i.publish(l.LLM_ERROR,{error:e.message,phase:"initialization"}),!1}}static async checkModelCache(){console.log(`[LLMController] Checking cache for model: ${this.DEFAULT_MODEL}`);try{const t=(await caches.keys()).find(d=>d.includes("webllm/model"));if(!t)return console.log("[LLMController] No WebLLM model cache found"),!1;const r=(await(await caches.open(t)).keys()).filter(d=>d.url.includes(this.DEFAULT_MODEL)||d.url.includes("Llama-3.2-1B")),s=r.length>0;return console.log(`[LLMController] Model cached: ${s} (${r.length} files)`),s}catch(e){return console.warn("[LLMController] Cache check failed:",e.message),!1}}static async autoLoadCachedModel(){try{this.isModelCached?console.log(`[LLMController] Loading cached model: ${this.DEFAULT_MODEL}`):console.log(`[LLMController] No cached model found - starting download: ${this.DEFAULT_MODEL}`),await this.loadModel(),console.log("[LLMController] Model ready")}catch(e){console.error("[LLMController] Auto-load failed:",e)}}static async loadModel(){if(!this.isInitialized)return console.error("[LLMController] Cannot load model: not initialized"),i.publish(l.LLM_ERROR,{error:"LLMController not initialized",modelId:this.DEFAULT_MODEL}),!1;const e=this.isModelCached;console.log(`[LLMController] Loading model: ${this.DEFAULT_MODEL} (cached: ${e})`);try{const t={temperature:.7,top_p:.95};return await this.engine.reload(this.DEFAULT_MODEL,t),this.currentModel=this.DEFAULT_MODEL,this.isModelCached=!0,console.log(`[LLMController] Model loaded successfully: ${this.DEFAULT_MODEL}`),i.publish(l.LLM_COMPLETE,{modelId:this.DEFAULT_MODEL,cached:e}),!0}catch(t){return console.error("[LLMController] Failed to load model:",t),i.publish(l.LLM_ERROR,{error:t.message,modelId:this.DEFAULT_MODEL,phase:"download"}),!1}}static handleInitProgress(e){const t=(e.progress*100).toFixed(1);let n=e.text;(t>0||!e.text.includes("Loading model from cache"))&&(n=`${t}% - ${e.text}`),console.log(`[LLMController] Progress: ${n}`),i.publish(l.LLM_STATUS,{progress:e.progress,progressPercent:parseFloat(t),text:n,modelId:this.currentModel||this.DEFAULT_MODEL})}static async chat(e){if(!this.currentModel){console.error("[LLMController] No model loaded - still downloading or initialization failed"),i.publish(l.LLM_ERROR,{error:"AI model is still loading. Please wait a moment and try again.",phase:"chat"});return}if(this.isGenerating){console.warn("[LLMController] Already generating response");return}console.log(`[LLMController] Processing chat message: "${e}"`);const t={role:"user",content:e};this.messages.push(t),this.isGenerating=!0;let n="";try{const o=await this.engine.chat.completions.create({stream:!0,messages:this.messages,stream_options:{include_usage:!0}});for await(const r of o){const s=r.choices[0]?.delta?.content;s&&(n+=s,i.publish(l.LLM_RESPONSE,{content:s,fullContent:n,done:!1})),r.usage&&console.log("[LLMController] Usage stats:",r.usage)}this.messages.push({role:"assistant",content:n}),i.publish(l.LLM_RESPONSE,{content:"",fullContent:n,done:!0}),console.log(`[LLMController] Response complete (${n.length} chars)`)}catch(o){console.error("[LLMController] Chat error:",o),i.publish(l.LLM_ERROR,{error:o.message,phase:"chat"})}finally{this.isGenerating=!1}}static cancelGeneration(){if(!this.isGenerating||!this.engine){console.warn("[LLMController] Nothing to cancel");return}console.log("[LLMController] Cancelling generation...");try{this.engine.interruptGenerate(),this.isGenerating=!1,console.log("[LLMController] Generation cancelled")}catch(e){console.error("[LLMController] Cancel failed:",e)}}static getStatus(){return{modelId:this.DEFAULT_MODEL,isLoaded:!!this.currentModel,isCached:this.isModelCached,isGenerating:this.isGenerating,messageCount:this.messages.length}}static resetConversation(){this.messages=[{role:"system",content:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful."}],console.log("[LLMController] Conversation reset")}}window.m5t=Object.create(null);window.m5t.pubsub=i;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(a){console.log("mvvLegit (direct): ReferenceError -",a.message)}const It=Object.keys(window).filter(a=>a.toLowerCase().includes("mvv")||a.toLowerCase().includes("neodigm")||a.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",It);const R=new yt("/",{hash:!0});window.router=R;function ge(a){const e=a?`${a.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${a} -> ${e}`),mvvLegit.isRouteAllowed(e)?!0:(console.warn(`[Router] Access denied to route: ${e}`),i.publish(l.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function $(a){console.log("[Router] Navigating to:",a),R.navigate(`/${a}`)}R.on("/",()=>{console.log("[Router] Route: /"),i.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),I(()=>Promise.resolve().then(()=>Ge),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(a=>{console.error("[Router] Error loading splash route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:a})})});R.on("/splash",()=>{console.log("[Router] Route: /splash"),i.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),I(()=>Promise.resolve().then(()=>Ge),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(a=>{console.error("[Router] Error loading splash route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:a})})});R.on("/signin",()=>{console.log("[Router] Route: /signin"),i.publish(l.ROUTE_NAV_BEFORE,{route:"signin"}),I(()=>Promise.resolve().then(()=>$t),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"signin"})}).catch(a=>{console.error("[Router] Error loading signin route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"signin",error:a})})});R.on("/signup",()=>{console.log("[Router] Route: /signup"),i.publish(l.ROUTE_NAV_BEFORE,{route:"signup"}),I(()=>Promise.resolve().then(()=>Kt),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"signup"})}).catch(a=>{console.error("[Router] Error loading signup route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"signup",error:a})})});R.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),i.publish(l.ROUTE_NAV_BEFORE,{route:"verf-link"}),I(()=>Promise.resolve().then(()=>Xt),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(a=>{console.error("[Router] Error loading verf-link route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"verf-link",error:a})})});R.on("/forgot",()=>{console.log("[Router] Route: /forgot"),i.publish(l.ROUTE_NAV_BEFORE,{route:"forgot"}),I(()=>Promise.resolve().then(()=>sn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(a=>{console.error("[Router] Error loading forgot route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"forgot",error:a})})});R.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!ge("resethash")){$("signin");return}i.publish(l.ROUTE_NAV_BEFORE,{route:"resethash"}),I(()=>Promise.resolve().then(()=>dn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(a=>{console.error("[Router] Error loading resethash route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"resethash",error:a})})});R.on("/home",()=>{if(console.log("[Router] Route: /home"),!ge("home")){$("signin");return}i.publish(l.ROUTE_NAV_BEFORE,{route:"home"}),I(()=>Promise.resolve().then(()=>An),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"home"})}).catch(a=>{console.error("[Router] Error loading home route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"home",error:a})})});R.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!ge("signout")){$("signin");return}i.publish(l.ROUTE_NAV_BEFORE,{route:"signout"}),I(()=>Promise.resolve().then(()=>Cn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"signout"})}).catch(a=>{console.error("[Router] Error loading signout route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"signout",error:a})})});R.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),$("splash")});i.subscribe(l.ROUTE_NAV,(a,e)=>{console.log("[Router] ROUTE_NAV event received:",e),e?.route&&$(e.route)});function Ce(){console.log("[App] Waiting for Neodigm 55 library...");let a=0;const e=100,t=setInterval(()=>{a++,a%10===0&&console.log(`[App] Still waiting... attempt ${a}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${a*100}ms`),clearInterval(t),kt()):a>=e&&(clearInterval(t),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,i.publish(l.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ce):Ce();async function kt(){if(console.log("[App] Neodigm 55 loaded, initializing..."),Nt(),x.initialize(),console.log("[App] I18n Controller initialized"),Te.initialize().then(t=>{t?console.log("[App] LLM Controller initialized successfully"):console.warn("[App] LLM Controller initialization failed (non-critical)")}).catch(t=>{console.error("[App] LLM Controller initialization error:",t)}),!await F.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:t=>{console.log("[AuthController] Navigation requested:",t),$(t)}})){console.error("[App] AuthController initialization failed");return}const e=F.getEntity();e&&(console.log("[App] Session restored for:",e.email),i.publish(l.APP_USER_LOADED,{entity:e})),i.publish(l.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),R.resolve(),window.AuthController=F,window.I18nController=x,window.LLMController=Te,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, LLMController available globally)")}i.subscribe(l.ROUTE_NAV_AFTER,(a,e)=>{typeof x<"u"&&x.refresh&&setTimeout(()=>{x.refresh()},100)});const Pt=Object.freeze({admin_root_role:{value:100,desc:"Administrator superuser infrastructure architecture"},admin_business_role:{value:90,desc:"Administrator financial oversight"},admin_support_role:{value:80,desc:"Administrator maintenance and configuration"},admin_readonly_role:{value:70,desc:"Administrator information help desk"},client_tier_3_role:{value:30,desc:"Client paid tier 3"},client_tier_2_role:{value:20,desc:"Client paid tier 2"},client_tier_1_role:{value:10,desc:"Client paid tier 1"},client_standard_role:{value:0,desc:"Client free tier 0"}});function Le(a){return Pt[a]||null}class Mt{static MIN_ROLE_VALUE=50;static COMMANDS={help:"Show available commands",clear:"Clear chat canvas",debug:"Toggle debug mode (::debug on|off)",version:"Show application version",feature:"Feature flag operations (::feature list|get|set)",model:"LLM model operations (::model status|download|clear)",reload:"Reload the page",export:"Export chat history as JSON",theme:"Toggle theme (::theme dark|light)",auth:"Show authentication status"};static hasAccess(e){if(!e||!e.class)return!1;let t=0;if(typeof e.class=="string"){const n=Le(e.class);t=n?n.value:0}else typeof e.class=="object"&&e.class.value!==void 0&&(t=e.class.value);return console.log(`[CLIController] Role check: ${e.class} → value: ${t}`),t>=this.MIN_ROLE_VALUE}static async process(e,t){if(!this.hasAccess(t))return{error:!0,message:`⛔ **Access Denied**

CLI commands require admin privileges (role ≥ 50).`};const n=e.slice(2).trim(),[o,...r]=n.split(/\s+/);switch(console.log("[CLIController] Processing command:",o,"Args:",r),o.toLowerCase()){case"help":return this.cmdHelp();case"clear":return this.cmdClear();case"debug":return this.cmdDebug(r);case"version":return this.cmdVersion();case"feature":return this.cmdFeature(r);case"model":return this.cmdModel(r);case"reload":return this.cmdReload();case"export":return this.cmdExport();case"theme":return this.cmdTheme(r);case"auth":return this.cmdAuth(t);default:return{error:!0,message:`❌ **Unknown command:** \`${o}\`

Type \`::help\` for available commands.`}}}static cmdHelp(){let e=`📖 **CLI Commands**

`;e+="Available commands (prefix with `::`)\n\n";for(const[t,n]of Object.entries(this.COMMANDS))e+=`• \`::${t}\` - ${n}
`;return e+=`
**Examples:**
`,e+="• `::debug on` - Enable debug logging\n",e+="• `::feature list` - Show all feature flags\n",e+="• `::model status` - Check LLM model status\n",{message:e}}static cmdClear(){const e=document.getElementById("chat-messages");return e?(e.innerHTML="",{message:"✅ Chat canvas cleared"}):{error:!0,message:"❌ Failed to clear canvas"}}static cmdDebug(e){const t=e[0]?.toLowerCase();if(!t||!["on","off"].includes(t))return{message:`🐛 **Debug Mode**

Current state: \`${localStorage.getItem("debug_mode")==="true"?"ON":"OFF"}\`

Usage: \`::debug on|off\``};const n=t==="on";return localStorage.setItem("debug_mode",n),{message:`🐛 Debug mode ${n?"**enabled**":"**disabled**"}`}}static cmdVersion(){return{message:`ℹ️ **StreamSyncEngage SaaS Client**

Version: 1.0.0
Build: production
Node Env: production`}}static cmdFeature(e){const t=e[0]?.toLowerCase();if(!t)return{message:"🚩 **Feature Flags**\n\nUsage:\n• `::feature list` - List all flags\n• `::feature get <name>` - Get flag value\n• `::feature set <name> <value>` - Set flag value"};switch(t){case"list":{let n=`🚩 **Feature Flags**

`;const o=Object.entries(y).slice(0,20);for(const[r,s]of o)n+=`• \`${r}\`: \`${s}\`
`;return n+=`
*Showing 20 of ${Object.keys(y).length} flags*`,{message:n}}case"get":{const n=e[1];if(!n)return{error:!0,message:"❌ Flag name required: `::feature get <name>`"};const o=y[n];return o===void 0?{error:!0,message:`❌ Flag not found: \`${n}\``}:{message:`🚩 \`${n}\` = \`${o}\``}}case"set":return{message:`⚠️ **Feature flag modification**

Setting flags dynamically is not yet implemented.
Flags are loaded from \`featureFlags.js\`.`};default:return{error:!0,message:`❌ Unknown action: \`${t}\``}}}static cmdModel(e){const t=e[0]?.toLowerCase();if(!t)return{message:"🤖 **LLM Model Operations**\n\nUsage:\n• `::model status` - Show model status\n• `::model download` - Download model\n• `::model clear` - Clear model cache"};switch(t){case"status":{if(!window.LLMController)return{error:!0,message:"❌ LLMController not available"};const n=window.LLMController.getStatus();let o=`🤖 **LLM Model Status**

`;return o+=`• Model: \`${n.modelId}\`
`,o+=`• Loaded: \`${n.isLoaded?"YES":"NO"}\`
`,o+=`• Cached: \`${n.isCached?"YES":"NO"}\`
`,o+=`• Generating: \`${n.isGenerating?"YES":"NO"}\`
`,o+=`• Message Count: \`${n.messageCount}\`
`,{message:o}}case"download":return window.LLMController?(window.LLMController.loadModel(),{message:"⏳ Starting model download..."}):{error:!0,message:"❌ LLMController not available"};case"clear":return{message:`⚠️ **Clear Model Cache**

Clearing browser cache requires manual action:
1. Open DevTools (F12)
2. Application → Storage → Cache Storage
3. Delete \`webllm/model\``};default:return{error:!0,message:`❌ Unknown action: \`${t}\``}}}static cmdReload(){return setTimeout(()=>{window.location.reload()},500),{message:"🔄 Reloading page..."}}static cmdExport(){const e=document.getElementById("chat-messages");if(!e)return{error:!0,message:"❌ Chat canvas not found"};const n=Array.from(e.children).map(_=>({type:_.tagName.toLowerCase().includes("prompt")?"user":"assistant",message:_.getAttribute("message"),timestamp:_.getAttribute("timestamp")})),o=JSON.stringify(n,null,2),r=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(r),d=document.createElement("a");return d.href=s,d.download=`chat-export-${Date.now()}.json`,d.click(),URL.revokeObjectURL(s),{message:`✅ Exported ${n.length} messages`}}static cmdTheme(e){const t=e[0]?.toLowerCase();return!t||!["dark","light"].includes(t)?{message:"🎨 **Theme Toggle**\n\nUsage: `::theme dark|light`"}:(localStorage.setItem("theme",t),{message:`🎨 Theme set to **${t}**

⚠️ Theme switching not yet implemented in UI.`})}static cmdAuth(e){if(!e)return{error:!0,message:"❌ Not authenticated"};let t="Unknown",n=0;if(typeof e.class=="string"){const r=Le(e.class);r&&(t=r.desc,n=r.value)}else typeof e.class=="object"&&(t=e.class.desc||"Unknown",n=e.class.value||0);let o=`🔐 **Authentication Status**

`;return o+=`• Email: \`${e.email}\`
`,o+=`• Name: \`${e.first} ${e.last}\`
`,o+=`• Role: \`${e.class}\`
`,o+=`• Role Description: \`${t}\`
`,o+=`• Role Value: \`${n}\`
`,o+=`• Company: \`${e.company||"N/A"}\`
`,o+=`• Status: \`${e.status||"Unknown"}\`
`,{message:o}}}const Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"}));function Ft(){return`
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
  `}function Dt(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const a=localStorage.getItem(y.FF_SSE_LS_TOKEN),e=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!a,hasMvvTs:!!e});const t=document.getElementById("splash-loader"),n=document.getElementById("splash-actions");a?(console.log("[SplashRoute] Auth token found → HOME"),i.publish(l.ROUTE_NAV,{route:"home"})):e?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),i.publish(l.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),t&&(t.style.display="none"),n&&(n.style.display="flex"),document.querySelectorAll("[data-route]").forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${s}`),i.publish(l.ROUTE_NAV,{route:s})})}))},4e3)}const Ge=Object.freeze(Object.defineProperty({__proto__:null,init:Dt,render:Ft},Symbol.toStringTag,{value:"Module"}));function pe(a){return a=String(a),Math.abs(a.split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0))}function xt(){return`
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
  `}function Gt(){console.log("[SigninRoute] Initialized");const a=document.getElementById("loginForm"),e=document.getElementById("email"),t=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const r=t.type==="password"?"text":"password";t.type=r}),a?.addEventListener("submit",async r=>{r.preventDefault();const s=e.value.trim(),d=t.value;Ht(s,e)&&Bt(d,t)&&await Vt(s,d)}),document.getElementById("link--uc__underline")?.addEventListener("click",r=>{r.preventDefault(),i.publish(l.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",r=>{r.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),i.publish(l.ROUTE_NAV,{route:"signup"})})}function Ht(a,e){if(!a)return ee(e,p.get("validation_email_required")),!1;const t=(a.match(/@/g)||[]).length,n=(a.match(/\./g)||[]).length;return t!==1||n<1?(ee(e,p.get("validation_email_invalid")),!1):!0}function Bt(a,e){return a?a.length<10?(ee(e,p.get("validation_password_min_length")),!1):!0:(ee(e,p.get("validation_password_required")),!1)}function ee(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}async function Vt(a,e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent=p.get("loading_signing_in");try{const n=pe(e),o=await F.doSignin(a,n);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(p.get("success_welcome_back"),"success"),i.publish(l.AUTH_SIGNIN_SUCCESS,{entity:F.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(p.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||p.get("error_signin_failed"),"danger"),t.disabled=!1,t.textContent=p.get("sign_in").toUpperCase())}catch(n){console.error("[SigninRoute] Sign in error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||p.get("error_network"),"danger"),t.disabled=!1,t.textContent=p.get("sign_in").toUpperCase(),i.publish(l.AUTH_SIGNIN_FAIL,{message:n.message})}}const $t=Object.freeze(Object.defineProperty({__proto__:null,init:Gt,render:xt},Symbol.toStringTag,{value:"Module"}));function He(a){const e=[];return a.length<10&&e.push("at least 10 characters"),/[a-z]/.test(a)||e.push("1 lowercase"),/[A-Z]/.test(a)||e.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(a)||e.push("1 special character"),/[^\x00-\x7F]/.test(a)&&e.push("ASCII characters only"),e}function Be(a){return a.length===0?"":a.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":a.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function qt(){return`
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
  `}function zt(){console.log("[SignupRoute] Initialized");const a=document.getElementById("signupForm"),e=a.querySelector('button[type="submit"]');Oe("togglePassword","password","eyeIcon"),Oe("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",n=>{n.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),i.publish(l.ROUTE_NAV,{route:"signin"})}),a.addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("first").value.trim(),r=document.getElementById("last").value.trim(),s=document.getElementById("email").value.trim(),d=document.getElementById("company").value.trim(),_=document.getElementById("phone").value.trim(),h=document.getElementById("password").value,E=document.getElementById("confirmPassword").value,L=document.getElementById("first"),w=document.getElementById("last"),N=document.getElementById("email"),D=document.getElementById("password"),u=document.getElementById("confirmPassword");if(Re(o,L,p.get("validation_first_name_required"))&&Re(r,w,p.get("validation_last_name_required"))&&jt(s,N)&&Yt(h,D)){if(h!==E){V(u,p.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=p.get("loading_creating_account"),await Wt(o,r,s,d,_,h)}})}function Oe(a,e,t){const n=document.getElementById(a),o=document.getElementById(e),r=document.getElementById(t);!n||!o||!r||n.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Re(a,e,t){return a?!0:(V(e,t),!1)}function jt(a,e){if(!a)return V(e,p.get("validation_email_required")),!1;const t=(a.match(/@/g)||[]).length,n=(a.match(/\./g)||[]).length;return t!==1||n<1?(V(e,p.get("validation_email_invalid")),!1):!0}function Yt(a,e){if(!a)return V(e,p.get("validation_password_required")),!1;const t=He(a);return t.length>0?(V(e,Be(t)),!1):!0}function V(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}async function Wt(a,e,t,n,o,r){const s=document.querySelector('button[type="submit"]');try{const d=pe(r),_={email:t,hash:d,first:a,last:e};n&&(_.company=n),o&&(_.phone=o);const h=await F.doSignup(_);if(h.ok)i.publish(l.AUTH_SIGNUP_SUCCESS,{email:t}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const E=h.error||h.message||p.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(E,"danger"),s.disabled=!1,s.textContent=p.get("create_account").toUpperCase(),i.publish(l.AUTH_SIGNUP_FAIL,{message:E})}}catch(d){console.error("[SignupRoute] Sign up error:",d),typeof neodigmToast<"u"&&neodigmToast.q(d.message||p.get("error_network"),"danger"),s.disabled=!1,s.textContent=p.get("create_account").toUpperCase(),i.publish(l.AUTH_SIGNUP_FAIL,{message:d.message})}}const Kt=Object.freeze(Object.defineProperty({__proto__:null,init:zt,render:qt},Symbol.toStringTag,{value:"Module"}));function Jt(){return`
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
  `}function Qt(){console.log("[VerfLinkRoute] Initialized");const a=7200,e=Date.now(),t=document.getElementById("countdown-display");function n(){const r=Date.now()-e,s=Math.floor(r/1e3),d=Math.max(0,a-s),_=Math.floor(d/3600),h=Math.floor(d%3600/60),E=d%60,L=`${String(_).padStart(2,"0")}:${String(h).padStart(2,"0")}:${String(E).padStart(2,"0")}`;t&&(t.textContent=L,d<600&&(t.style.color="#ef4444",t.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),d===0&&(t.style.color="#7f1d1d",t.style.textShadow="none")),d===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}n();const o=setInterval(n,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const Xt=Object.freeze(Object.defineProperty({__proto__:null,init:Qt,render:Jt},Symbol.toStringTag,{value:"Module"})),Zt="https://streamsyncengage-saas.onrender.com";class en{constructor(){this.baseUrl=Zt}async request(e,t={}){const n=`${this.baseUrl}${e}`,o={"Content-Type":"application/json",...t.headers};try{const r=await fetch(n,{...t,headers:o});if(r.status===401||r.status===403){i.publish(l.AUTH_TOKEN_EXPIRED,{status:r.status,endpoint:e});const d=await r.json().catch(()=>({}));throw new Error(d.error||"Authentication failed")}const s=await r.json();return{ok:r.ok,status:r.status,data:s}}catch(r){throw console.error("API Request Error:",r),i.publish(l.APP_ERROR,{message:r.message,endpoint:e}),r}}async get(e){return this.request(e,{method:"GET"})}async post(e,t){return this.request(e,{method:"POST",body:JSON.stringify(t)})}async put(e,t){return this.request(e,{method:"PUT",body:JSON.stringify(t)})}async delete(e){return this.request(e,{method:"DELETE"})}async signin(e,t){return this.post("/api/acctEntity/signin",{email:e,hash:t})}async signup(e){return this.post("/api/acctEntity/signup",e)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(e){return this.post("/api/acctEntity/forgot",{email:e})}async resetHash(e,t){return this.post("/api/acctEntity/resethash",{email:e,hash:t})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,t){return this.put(`/api/acctEntity/${e}`,t)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get("/ping")}}const tn=new en;function nn(){return`
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

  `}function an(){console.log("[ForgotRoute] Initialized");const a=document.getElementById("forgot-form"),e=document.getElementById("email");a?.addEventListener("submit",async t=>{t.preventDefault();const n=e.value.trim();on(n,e)&&await rn(n)})}function on(a,e){if(!a)return Ne(e,p.get("validation_email_required")),!1;const t=(a.match(/@/g)||[]).length,n=(a.match(/\./g)||[]).length;return t!==1||n<1?(Ne(e,p.get("validation_email_invalid")),!1):!0}function Ne(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}async function rn(a){const e=document.querySelector(".btn");e.disabled=!0,e.textContent="SENDING...";try{const t=await tn.forgotPassword(a);t.ok&&t.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(p.get("success_reset_link_sent"),"success"),i.publish(l.AUTH_FORGOT_SUCCESS,{email:a}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(t.data.error||p.get("error_signin_failed"),"danger"),e.disabled=!1,e.textContent=p.get("send_reset_link").toUpperCase())}catch(t){console.error("[ForgotRoute] Forgot password error:",t),typeof neodigmToast<"u"&&neodigmToast.q(t.message||p.get("error_network"),"danger"),e.disabled=!1,e.textContent=p.get("send_reset_link").toUpperCase()}}const sn=Object.freeze(Object.defineProperty({__proto__:null,init:an,render:nn},Symbol.toStringTag,{value:"Module"}));function ln(){return`
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
  `}function cn(){console.log("[ResethashRoute] Initialized");const a=document.getElementById("resethash-form"),e=a.querySelector('button[type="submit"]');Ie("toggleNewPassword","new-password","eyeIconNew"),Ie("toggleConfirmPassword","confirm-password","eyeIconConfirm"),a?.addEventListener("submit",async t=>{t.preventDefault();const n=a.email.value.trim(),o=a.newPassword.value,r=a.confirmPassword.value,s=document.getElementById("new-password"),d=document.getElementById("confirm-password");if(!o){B(s,p.get("validation_new_password_required"));return}const _=He(o);if(_.length>0){B(s,Be(_));return}if(!r){B(d,p.get("validation_new_password_required"));return}if(o!==r){B(d,p.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=p.get("loading_resetting_password");try{const h=pe(o),E=await F.doResetHash(n,h);E.ok?(typeof neodigmToast<"u"&&neodigmToast.q(p.get("success_password_reset"),"success"),i.publish(l.AUTH_RESETHASH_SUCCESS,{email:n})):(B(s,E.error||p.get("error_signin_failed")),e.disabled=!1,e.textContent=p.get("update_password").toUpperCase())}catch(h){console.error("[ResethashRoute] Reset password error:",h),B(s,h.message||p.get("error_network")),e.disabled=!1,e.textContent=p.get("update_password").toUpperCase()}})}function Ie(a,e,t){const n=document.getElementById(a),o=document.getElementById(e),r=document.getElementById(t);!n||!o||!r||n.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function B(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}const dn=Object.freeze(Object.defineProperty({__proto__:null,init:cn,render:ln},Symbol.toStringTag,{value:"Module"}));class te{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"SILOS",caption:"Silos",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Data silo management",secondary:[{token:"CACHE",caption:"Cache",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Cache management and statistics",secondary:[]},{token:"LIFECYCLE",caption:"Lifecycle",enabled:!0,icon:"fas fa-recycle",admin_role:!1,tagline:"Data lifecycle and retention policies",secondary:[]}]},{token:"NOTIFICATIONS",caption:"Notifications",enabled:!0,icon:"fas fa-bell",admin_role:!1,tagline:"Notification management",secondary:[{token:"BELL_DRAWER",caption:"Bell Drawer",enabled:!0,icon:"fas fa-inbox",admin_role:!1,tagline:"Notification drawer configuration",secondary:[]},{token:"WEB_HOOKS",caption:"Web Hooks",enabled:!0,icon:"fas fa-webhook",admin_role:!1,tagline:"Webhook configuration and monitoring",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"fas fa-chart-line",admin_role:!1,tagline:"User engagement tools",secondary:[{token:"AB_TESTS",caption:"A/B Tests",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"FEEDBACK",caption:"Feedback",enabled:!0,icon:"fas fa-comments",admin_role:!1,tagline:"User feedback collection",secondary:[]},{token:"GUIDED_TOURS",caption:"Guided Tours",enabled:!0,icon:"fas fa-route",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"fas fa-clipboard-list",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]},{token:"SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"fas fa-images",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"SURVEYS",caption:"Surveys",enabled:!0,icon:"fas fa-poll",admin_role:!1,tagline:"Survey campaigns and analytics",secondary:[]},{token:"VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"fas fa-voicemail",admin_role:!1,tagline:"Voice message management",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#n(e){if(!e)return e;const t=e.token.toLowerCase(),n=`nav_${t}`,o=`nav_${t}_tagline`,r=p.get(n)||e.caption,s=p.get(o)||e.tagline;return{...e,caption:r,tagline:s,secondary:e.secondary?e.secondary.map(d=>this.#n(d)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(t=>this.#n(t)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const e=this.getPrimaryNav(),t=[];return e.forEach(n=>{t.push(n),n.secondary&&n.secondary.length>0&&t.push(...n.secondary)}),t}static getNavByToken(e){return this.getFlattenedNav().find(n=>n.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(t=>t.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(t=>t.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const t=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,n=await fetch(`${e}/coreMeta?meta_token=${t}`);if(!n.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${n.status}), using static config`),this.getPrimaryNav();const o=await n.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${t}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(t){return console.error("[NavMetaManager] Error fetching from coreMeta:",t),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:te});class un extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const e=te.getPrimaryNav();e&&e.length>0?(this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const e=this.getAttribute("data-buttons");if(e)try{this.buttons=JSON.parse(e);const t=this.buttons.find(n=>n.selected);this.selectedPrimaryToken=t?t.token:this.buttons[0]?.token||null}catch(t){console.error("[M5TPrimaryNav] Error parsing buttons:",t),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(t=>t.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,t){if(t==="primary"){const n=this.buttons.find(o=>o.token===e);return{caption:n?.caption||"",tagline:n?.tagline||""}}else for(const n of this.buttons)if(n.secondary){const o=n.secondary.find(r=>r.token===e);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const e=this.getSecondaryButtons(),t=e.length>0;this.shadowRoot.innerHTML=`
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
          grid-template-areas: "logo ${this.buttons.map((n,o)=>`btn${o}`).join(" ")}";
          grid-template-columns: 84px repeat(${this.buttons.length}, 1fr);
          height: 64px;
          background: white;
          overflow: hidden;
        }

        .secondary-nav {
          display: grid;
          grid-template-columns: repeat(${e.length||1}, 1fr);
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
            grid-template-columns: repeat(${e.length||1}, 1fr);
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
          ${this.buttons.map((n,o)=>this.renderButton(n,o,"primary")).join("")}
        </nav>
        <nav class="secondary-nav">
          ${t?e.map((n,o)=>this.renderButton(n,o,"secondary")).join(""):""}
        </nav>
      </div>
    `}renderButton(e,t,n="primary"){const o=n==="primary"?e.token===this.selectedPrimaryToken:!1,r=typeof e.count=="number"&&e.count!==null&&e.count!==void 0,s=e.icon&&e.icon.trim()!=="",d=e.tagline&&e.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${e.token}"
        data-level="${n}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?"":"disabled"}
        ${d?`title="${e.tagline}"`:""}
        style="grid-area: ${n==="primary"?`btn${t}`:"auto"}"
      >
        ${s?`<i class="${e.icon} nav-button-icon"></i>`:""}
        <span>${e.caption}</span>
        ${r?`<span class="count-badge">${e.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(n=>{const o=n.getAttribute("data-token"),r=n.getAttribute("data-level");n.addEventListener("click",s=>{o&&!s.currentTarget.disabled&&!this.longTapFired&&(r==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),n.addEventListener("dblclick",s=>{if(o&&!s.currentTarget.disabled){const d=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:r,caption:d.caption,tagline:d.tagline,timestamp:Date.now()}}))}}),n.addEventListener("mouseenter",s=>{if(o&&!s.currentTarget.disabled){const d=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button hover:",o),this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:d.caption,tagline:d.tagline,action:"enter",timestamp:Date.now()}}))}}),n.addEventListener("mouseleave",s=>{if(o&&!s.currentTarget.disabled){const d=this.getButtonData(o,r);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:d.caption,tagline:d.tagline,action:"leave",timestamp:Date.now()}}))}}),n.addEventListener("mousedown",s=>{o&&!s.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const d=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:r,caption:d.caption,tagline:d.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),n.addEventListener("mouseup",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),n.addEventListener("mouseleave",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const t=this.shadowRoot.querySelector(".logo");t&&t.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(e){const t=this.buttons.find(o=>o.token===e),n=this.getButtonData(e,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,level:"primary",caption:n.caption,tagline:n.tagline,hasSecondary:(t?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){const t=this.getButtonData(e,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:t.caption,tagline:t.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,t,n="primary"){let o;n==="primary"?o=this.buttons.find(r=>r.token===e):o=this.getSecondaryButtons().find(s=>s.token===e),o&&(o.count=t,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",un);class gn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp"]}attributeChangedCallback(e,t,n){t!==n&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const e=this.getAttribute("timestamp");return e||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}render(){const e=this.getMessage(),t=this.getTimestamp(),n=this.shouldShowTimestamp();this.shadowRoot.innerHTML=`
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

      <div class="bubble-content">${this.escapeHtml(e)}</div>
      ${n?`<div class="bubble-timestamp">${this.escapeHtml(t)}</div>`:""}
    `}}customElements.define("m5t-chat-prompt",gn);let J=null,ie=null;async function pn(){return J||(ie||(ie=I(()=>import("https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/+esm"),[]).then(a=>{const e=a.default;return J=e({html:!1,breaks:!0,linkify:!0,typographer:!0}),J})),ie)}class _n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp","avatar","show-avatar"]}attributeChangedCallback(e,t,n){t!==n&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const e=this.getAttribute("timestamp");return e||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}getAvatar(){return this.getAttribute("avatar")||""}shouldShowAvatar(){return this.getAttribute("show-avatar")==="true"&&this.getAvatar()}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}async renderMarkdown(e){return(await pn()).render(e)}async render(){const e=this.getMessage(),t=this.getTimestamp(),n=this.shouldShowTimestamp(),o=this.getAvatar(),r=this.shouldShowAvatar(),s=await this.renderMarkdown(e);this.shadowRoot.innerHTML=`
      <style>
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
      </style>

      <div class="bubble-wrapper">
        ${r?`<img src="${this.escapeHtml(o)}" alt="Avatar" class="avatar">`:""}
        <div>
          <div class="bubble-content">${s}</div>
          ${n?`<div class="bubble-timestamp">${this.escapeHtml(t)}</div>`:""}
        </div>
      </div>
    `}}customElements.define("m5t-chat-response",_n);class mn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.attachEventListeners()}getPlaceholder(){return this.getAttribute("placeholder")||"Type your message..."}getMaxRows(){return parseInt(this.getAttribute("max-rows"))||5}render(){const e=this.getPlaceholder(),t=this.getMaxRows();this.shadowRoot.innerHTML=`
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
          max-height: calc(1.5rem * ${t});
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
          placeholder="${e}"
          rows="1"
        ></textarea>

        <button class="send-btn" id="send-btn" title="Send (Enter)">
          <!-- Placeholder: Blue square -->
        </button>
      </div>
    `}attachEventListeners(){const e=this.shadowRoot.getElementById("prompt-textarea"),t=this.shadowRoot.getElementById("send-btn"),n=this.shadowRoot.getElementById("cancel-btn");!e||!t||!n||(e.addEventListener("input",()=>{this.autoExpandTextarea(e)}),e.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this.handleSend())}),t.addEventListener("click",()=>{this.handleSend()}),n.addEventListener("click",()=>{this.handleCancel()}))}autoExpandTextarea(e){e.style.height="auto",e.style.height=e.scrollHeight+"px"}handleSend(){const e=this.shadowRoot.getElementById("prompt-textarea");if(!e)return;const t=e.value.trim();if(!t){console.warn("[M5TChatPromptArea] Cannot send empty message");return}const n=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:t,timestamp:n,pubsubTopic:"CONVERSATION.PROMPT.AGENT_CANVAS"};console.log("[M5TChatPromptArea] Dispatching message-sent event:",o),e.value="",e.style.height="auto",this.dispatchEvent(new CustomEvent("message-sent",{bubbles:!0,composed:!0,detail:o}))}handleCancel(){const e=this.shadowRoot.getElementById("prompt-textarea");e&&(e.value="",e.style.height="auto",console.log("[M5TChatPromptArea] Input cancelled"),this.dispatchEvent(new CustomEvent("message-cancelled",{bubbles:!0,composed:!0})))}getMessage(){const e=this.shadowRoot.getElementById("prompt-textarea");return e?e.value:""}setMessage(e){const t=this.shadowRoot.getElementById("prompt-textarea");t&&(t.value=e,this.autoExpandTextarea(t))}clear(){this.handleCancel()}focus(){const e=this.shadowRoot.getElementById("prompt-textarea");e&&e.focus()}}customElements.define("m5t-chat-prompt-area",mn);te.setAppToken("client-saas");function hn(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-buttons='${te.getPrimaryNavJSON()}'
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
  `}function fn(){console.log("[HomeRoute] Initialized"),i.subscribe(l.CANVAS_DO_SCROLL,(a,e)=>{console.log("[HomeRoute] CANVAS.DO.SCROLL triggered"),vn()}),i.subscribe(l.LLM_STATUS,(a,e)=>{if(console.log("[HomeRoute] LLM_STATUS:",e),e&&e.text){const t=`🔄 ${e.text}`;i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:t,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),streaming:!0})}})}function vn(){setTimeout(()=>{const a=document.getElementById("chat-messages");a?(a.scrollTo({top:0,behavior:"smooth"}),console.log("[HomeRoute] Scrolled chat-messages to bottom (top: 0 with column-reverse)")):console.warn("[HomeRoute] chat-messages element not found")},80)}function _e(a,e="user",t="canvas"){const n=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:a,timestamp:n};if(e==="user"||e==="prompt")switch(t.toUpperCase()){case"CANVAS":i.publish(l.CONVERSATION_PROMPT_CANVAS,o);break;case"AGENT":i.publish(l.CONVERSATION_PROMPT_AGENT,o);break;case"AGENT_CANVAS":i.publish(l.CONVERSATION_PROMPT_AGENT_CANVAS,o);break;case"STAGE":i.publish(l.CONVERSATION_PROMPT_STAGE,o);break;default:i.publish(l.CONVERSATION_PROMPT_CANVAS,o)}else switch(t.toUpperCase()){case"CANVAS":i.publish(l.CONVERSATION_RESPONSE_CANVAS,o);break;case"WORKFLOW":i.publish(l.CONVERSATION_RESPONSE_WORKFLOW,o);break;default:i.publish(l.CONVERSATION_RESPONSE_CANVAS,o)}}function bn(a=10,e=500){const t=["Hey, how's it going?","Can you help me with something?","What's the weather like today?","I need assistance with my account","Tell me a joke!","How do I reset my password?","What are your hours?","Thanks for your help!","I have a question about billing","Can you explain this feature?","How do I upgrade my plan?","What's new in the latest update?","I'm having trouble logging in","Where can I find the settings?","How secure is my data?","Do you offer customer support?","What payment methods do you accept?","Can I cancel my subscription?","How do I export my data?","Is there a mobile app?"],n=["I'm doing great! How can I help you today?","Of course! I'd be happy to assist you.","Let me check that for you...","Here's what I found:","That's a great question!","I can help you with that.","Let me walk you through the steps.","You're very welcome!","I understand your concern. Let me explain...","That feature is located in the settings menu.","Your account is fully secured with encryption.","We're available 24/7 to help you!","We accept all major credit cards and PayPal.","You can upgrade anytime from your account settings.","The latest update includes several new features!","Try resetting your password using the forgot password link.","Your data is encrypted and stored securely.","Yes! Our mobile app is available for iOS and Android.","You can export your data from the account settings.","Absolutely! You can cancel anytime with no fees."];let o=0;const r=setInterval(()=>{if(o>=a){clearInterval(r),console.log(`[Test] Generated ${a} random bubbles`);return}const s=Math.random()>.5,d=s?"user":"assistant",_=s?t:n,h=_[Math.floor(Math.random()*_.length)];_e(h,d),o++,console.log(`[Test] Added bubble ${o}/${a} (${d})`)},e)}let Y=null;function En(a=1e3){if(Y){console.log("[Test] Bubble stream already running. Stop it first with stopBubbleStream()");return}console.log("[Test] Starting continuous bubble stream..."),Y=setInterval(()=>{const e=Math.random()>.5,t=e?["Quick message!","Another one!","Test bubble","Hello there!","Random user text"]:["Response here","Got it!","Processing...","Here's the answer","Understood!"],n=t[Math.floor(Math.random()*t.length)];_e(n,e?"user":"assistant")},a)}function yn(){Y?(clearInterval(Y),Y=null,console.log("[Test] Bubble stream stopped")):console.log("[Test] No bubble stream running")}function Sn(){const a=document.getElementById("chat-messages");a&&(a.innerHTML="",console.log("[Test] All bubbles cleared"))}window.addChatBubble=_e;window.generateRandomBubbles=bn;window.startBubbleStream=En;window.stopBubbleStream=yn;window.clearAllBubbles=Sn;console.log("[HomeRoute] Test functions available:");console.log("  - window.generateRandomBubbles(count, delay) - Generate N bubbles with delay");console.log("  - window.startBubbleStream(delayMs) - Continuous bubble generation");console.log("  - window.stopBubbleStream() - Stop continuous generation");console.log("  - window.clearAllBubbles() - Remove all bubbles");console.log("  - window.addChatBubble(message, type) - Add single bubble");const An=Object.freeze(Object.defineProperty({__proto__:null,init:fn,render:hn},Symbol.toStringTag,{value:"Module"}));function wn(){return`
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
  `}function Tn(){console.log("[SignoutRoute] Initialized");const a=document.getElementById("confirm-signout-btn");a?.addEventListener("click",async()=>{a.disabled=!0,a.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await F.doSignout()})}const Cn=Object.freeze(Object.defineProperty({__proto__:null,init:Tn,render:wn},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
