(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const gt="modulepreload",pt=function(t){return"/"+t},Ne={},G=function(e,n,a){let o=Promise.resolve();if(n&&n.length>0){let p=function(_){return Promise.all(_.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");o=p(n.map(_=>{if(_=pt(_),_ in Ne)return;Ne[_]=!0;const y=_.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${b}`))return;const m=document.createElement("link");if(m.rel=y?"stylesheet":gt,y||(m.as="script"),m.crossOrigin="",m.href=_,c&&m.setAttribute("nonce",c),document.head.appendChild(m),y)return new Promise((S,O)=>{m.addEventListener("load",S),m.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${_}`)))})}))}function r(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return o.then(s=>{for(const c of s||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};var _t=/([:*])(\w+)/g,mt="([^/]+)",ht=/\*/g,ft="?(?:.*)",vt=/\/\?/g,bt="/?([^/]+|)",Et="(?:/^|^)",yt="";function Xe(t){return t===void 0&&(t="/"),Ae()?location.pathname+location.search+location.hash:t}function N(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function ce(t){return typeof t=="string"}function St(t){return typeof t=="function"}function de(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function At(t,e){return e.length===0||!t?null:t.slice(1,t.length).reduce(function(n,a,o){return n===null&&(n={}),n[e[o]]=decodeURIComponent(a),n},null)}function ue(t){var e=N(t).split(/\?(.*)?$/);return[N(e[0]),e.slice(1).join("")]}function Se(t){for(var e={},n=t.split("&"),a=0;a<n.length;a++){var o=n[a].split("=");if(o[0]!==""){var r=decodeURIComponent(o[0]);e[r]?(Array.isArray(e[r])||(e[r]=[e[r]]),e[r].push(decodeURIComponent(o[1]||""))):e[r]=decodeURIComponent(o[1]||"")}}return e}function Ze(t,e){var n=ue(N(t.currentLocationPath)),a=n[0],o=n[1],r=o===""?null:Se(o),s=[],c;if(ce(e.path)){if(c=Et+N(e.path).replace(_t,function(b,m,S){return s.push(S),mt}).replace(ht,ft).replace(vt,bt)+"$",N(e.path)===""&&N(a)==="")return{url:a,queryString:o,hashString:de(t.to),route:e,data:null,params:r}}else c=e.path;var p=new RegExp(c,yt),_=a.match(p);if(_){var y=ce(e.path)?At(_,s):_.groups?_.groups:_.slice(1);return{url:N(a.replace(new RegExp("^"+t.instance.root),"")),queryString:o,hashString:de(t.to),route:e,data:y,params:r}}return!1}function et(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function W(t,e){return typeof t[e]>"u"||t[e]===!0}function wt(t){if(!t)return{};var e=t.split(","),n={},a;return e.forEach(function(o){var r=o.split(":").map(function(s){return s.replace(/(^ +| +$)/g,"")});switch(r[0]){case"historyAPIMethod":n.historyAPIMethod=r[1];break;case"resolveOptionsStrategy":a||(a={}),a.strategy=r[1];break;case"resolveOptionsHash":a||(a={}),a.hash=r[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[r[0]]=r[1]==="true";break}}),a&&(n.resolveOptions=a),n}function Ae(){return typeof window<"u"}function Tt(t,e){return t===void 0&&(t=[]),e===void 0&&(e={}),t.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(a){n[a]&&(e[a]||(e[a]=[]),e[a].push(n[a]))})}),e}function H(t,e,n){var a=e||{},o=0;(function r(){if(!t[o]){n&&n(a);return}Array.isArray(t[o])?(t.splice.apply(t,[o,1].concat(t[o][0](a)?t[o][1]:t[o][2])),r()):t[o](a,function(s){typeof s>"u"||s===!0?(o+=1,r()):n&&n(a)})})()}H.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};function Le(t,e){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=Xe(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function _e(t,e){for(var n=0;n<t.instance.routes.length;n++){var a=t.instance.routes[n],o=Ze(t,a);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),t.resolveOptions.strategy==="ONE")){e();return}}e()}function Ct(t,e){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function Rt(t,e){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}var Ie=Ae(),Ot=et();function Nt(t,e){if(W(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),a=Ie&&t.resolveOptions&&t.resolveOptions.hash===!0;Ot?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",a?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!a){var o=location.hash;location.hash="",location.hash=o}t.instance.__freezeListening=!1},1))):Ie&&(window.location.href=t.to)}e()}function tt(t,e){var n=t.instance;if(!n.lastResolved()){e();return}H(n.lastResolved().map(function(a){return function(o,r){if(!a.route.hooks||!a.route.hooks.leave){r();return}var s=!1,c=t.instance.matchLocation(a.route.path,t.currentLocationPath,!1);if(a.route.path!=="*")s=!c;else{var p=t.matches?t.matches.find(function(_){return a.route.path===_.route.path}):!1;s=!p}if(W(t.navigateOptions,"callHooks")&&s){H(a.route.hooks.leave.map(function(_){return function(y,b){return _(function(m){m===!1?t.instance.__markAsClean(t):b()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return r()}]));return}else r()}}),{},function(){return e()})}function Lt(t,e){t.match.route.hooks&&t.match.route.hooks.before&&W(t.navigateOptions,"callHooks")?H(t.match.route.hooks.before.map(function(n){return function(o,r){return n(function(s){s===!1?t.instance.__markAsClean(t):r()},t.match)}}).concat([function(){return e()}])):e()}function It(t,e){W(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()}function kt(t,e){t.match.route.hooks&&t.match.route.hooks.after&&W(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(n){return n(t.match)}),e()}function Mt(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString){n.forEach(function(a){a.route.hooks&&a.route.hooks.already&&W(t.navigateOptions,"callHooks")&&a.route.hooks.already.forEach(function(o){return o(t.match)})}),e(!1);return}e()}function Pt(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var a=ue(t.currentLocationPath),o=a[0],r=a[1],s=de(t.to);n.path=N(o);var c={url:n.path,queryString:r,hashString:s,data:null,route:n,params:r!==""?Se(r):null};t.matches=[c],t.match=c}e()}function Ut(t,e){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),e()}function Ft(t,e){t.instance._setCurrent(null),e()}function nt(t,e){W(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var at=[Mt,Lt,It,kt],ke=[tt,Pt,H.if(function(t){var e=t.notFoundHandled;return e},at.concat([nt]),[Ut,Ft])];function be(){return be=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},be.apply(this,arguments)}function Me(t,e){var n=0;function a(){if(n===t.matches.length){nt(t,e);return}H(at,be({},t,{match:t.matches[n]}),function(){n+=1,a()})}tt(t,a)}function me(t){t.instance.__markAsClean(t)}function Ee(){return Ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ee.apply(this,arguments)}var Pe="[data-navigo]";function xt(t,e){var n=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Pe},a=this,o="/",r=null,s=[],c=!1,p,_=et(),y=Ae();t?o=N(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function b(d){return d.indexOf("#")>=0&&(n.hash===!0?d=d.split("#")[1]||"/":d=d.split("#")[0]),d}function m(d){return N(o+"/"+N(d))}function S(d,g,E,C){return d=ce(d)?m(d):d,{name:C||N(String(d)),path:d,handler:g,hooks:Tt(E)}}function O(d,g,E){var C=this;return typeof d=="object"&&!(d instanceof RegExp)?(Object.keys(d).forEach(function(A){if(typeof d[A]=="function")C.on(A,d[A]);else{var V=d[A],ne=V.uses,dt=V.as,ut=V.hooks;s.push(S(A,ne,[p,ut],dt))}}),this):(typeof d=="function"&&(E=g,g=d,d=o),s.push(S(d,g,[p,E])),this)}function u(d,g){if(a.__dirty){a.__waiting.push(function(){return a.resolve(d,g)});return}else a.__dirty=!0;d=d?N(o)+"/"+N(d):void 0;var E={instance:a,to:d,currentLocationPath:d,navigateOptions:{},resolveOptions:Ee({},n,g)};return H([Le,_e,H.if(function(C){var A=C.matches;return A&&A.length>0},Me,ke)],E,me),E.matches?E.matches:!1}function h(d,g){if(a.__dirty){a.__waiting.push(function(){return a.navigate(d,g)});return}else a.__dirty=!0;d=N(o)+"/"+N(d);var E={instance:a,to:d,navigateOptions:g||{},resolveOptions:g&&g.resolveOptions?g.resolveOptions:n,currentLocationPath:b(d)};H([Ct,Rt,_e,H.if(function(C){var A=C.matches;return A&&A.length>0},Me,ke),Nt,me],E,me)}function v(d,g,E){var C=Z(d,g);return C!==null?(h(C.replace(new RegExp("^/?"+o),""),E),!0):!1}function w(d){return this.routes=s=s.filter(function(g){return ce(d)?N(g.path)!==N(d):St(d)?d!==g.handler:String(g.path)!==String(d)}),this}function R(){_&&(this.__popstateListener=function(){a.__freezeListening||u()},window.addEventListener("popstate",this.__popstateListener))}function L(){this.routes=s=[],_&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=c=!0}function F(d,g){return a._notFoundRoute=S("*",d,[p,g],"__NOT_FOUND__"),this}function x(){if(y)return B().forEach(function(d){if(d.getAttribute("data-navigo")==="false"||d.getAttribute("target")==="_blank"){d.hasListenerAttached&&d.removeEventListener("click",d.navigoHandler);return}d.hasListenerAttached||(d.hasListenerAttached=!0,d.navigoHandler=function(g){if((g.ctrlKey||g.metaKey)&&g.target.tagName.toLowerCase()==="a")return!1;var E=d.getAttribute("href");if(typeof E>"u"||E===null)return!1;if(E.match(/^(http|https)/)&&typeof URL<"u")try{var C=new URL(E);E=C.pathname+C.search}catch{}var A=wt(d.getAttribute("data-navigo-options"));c||(g.preventDefault(),g.stopPropagation(),a.navigate(N(E),A))},d.addEventListener("click",d.navigoHandler))}),a}function B(){return y?[].slice.call(document.querySelectorAll(n.linksSelector||Pe)):[]}function K(d){return"/"+o+"/"+N(d)}function $(d){return p=d,this}function re(){return r}function Z(d,g,E){var C=s.find(function(ne){return ne.name===d}),A=null;if(C){if(A=C.path,g)for(var V in g)A=A.replace(":"+V,g[V]);A=A.match(/^\//)?A:"/"+A}return A&&E&&!E.includeRoot&&(A=A.replace(new RegExp("^/"+o),"")),A}function D(d){return d.getAttribute("href")}function M(d){var g=ue(N(d)),E=g[0],C=g[1],A=C===""?null:Se(C),V=de(d),ne=S(E,function(){},[p],E);return{url:E,queryString:C,hashString:V,route:ne,data:null,params:A}}function ee(){return M(N(Xe(o)).replace(new RegExp("^"+o),""))}function te(d){var g={instance:a,currentLocationPath:d,to:d,resolveOptions:n};return _e(g,function(){}),g.matches?g.matches:!1}function lt(d,g,E){typeof g<"u"&&(typeof E>"u"||E)&&(g=m(g));var C={instance:a,to:g,currentLocationPath:g};Le(C,function(){}),typeof d=="string"&&(d=typeof E>"u"||E?m(d):d);var A=Ze(C,{name:String(d),path:d,handler:function(){},hooks:{}});return A||!1}function se(d,g,E){return typeof g=="string"&&(g=Oe(g)),g?(g.hooks[d]||(g.hooks[d]=[]),g.hooks[d].push(E),function(){g.hooks[d]=g.hooks[d].filter(function(C){return C!==E})}):(console.warn("Route doesn't exists: "+g),function(){})}function Oe(d){return typeof d=="string"?s.find(function(g){return g.name===m(d)}):s.find(function(g){return g.handler===d})}function ct(d){d.instance.__dirty=!1,d.instance.__waiting.length>0&&d.instance.__waiting.shift()()}this.root=o,this.routes=s,this.destroyed=c,this.current=r,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=ct,this.on=O,this.off=w,this.resolve=u,this.navigate=h,this.navigateByName=v,this.destroy=L,this.notFound=F,this.updatePageLinks=x,this.link=K,this.hooks=$,this.extractGETParameters=function(d){return ue(b(d))},this.lastResolved=re,this.generate=Z,this.getLinkPath=D,this.match=te,this.matchLocation=lt,this.getCurrentLocation=ee,this.addBeforeHook=se.bind(this,"before"),this.addAfterHook=se.bind(this,"after"),this.addAlreadyHook=se.bind(this,"already"),this.addLeaveHook=se.bind(this,"leave"),this.getRoute=Oe,this._pathToMatchObject=M,this._clean=N,this._checkForAHash=b,this._setCurrent=function(d){return r=a.current=d},R.call(this),x.call(this)}var Dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ae={exports:{}},Vt=ae.exports,Ue;function Ht(){return Ue||(Ue=1,(function(t,e){(function(n,a){var o={};n.PubSub?(o=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=o,a(o)),t!==void 0&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o})(typeof window=="object"&&window||Vt||Dt,function(n){var a={},o=-1,r="*";function s(u){var h;for(h in u)if(Object.prototype.hasOwnProperty.call(u,h))return!0;return!1}function c(u){return function(){throw u}}function p(u,h,v){try{u(h,v)}catch(w){setTimeout(c(w),0)}}function _(u,h,v){u(h,v)}function y(u,h,v,w){var R=a[h],L=w?_:p,F;if(Object.prototype.hasOwnProperty.call(a,h))for(F in R)Object.prototype.hasOwnProperty.call(R,F)&&L(R[F],u,v)}function b(u,h,v){return function(){var R=String(u),L=R.lastIndexOf(".");for(y(u,u,h,v);L!==-1;)R=R.substr(0,L),L=R.lastIndexOf("."),y(u,R,h,v);y(u,r,h,v)}}function m(u){var h=String(u),v=!!(Object.prototype.hasOwnProperty.call(a,h)&&s(a[h]));return v}function S(u){for(var h=String(u),v=m(h)||m(r),w=h.lastIndexOf(".");!v&&w!==-1;)h=h.substr(0,w),w=h.lastIndexOf("."),v=m(h);return v}function O(u,h,v,w){u=typeof u=="symbol"?u.toString():u;var R=b(u,h,w),L=S(u);return L?(v===!0?R():setTimeout(R,0),!0):!1}n.publish=function(u,h){return O(u,h,!1,n.immediateExceptions)},n.publishSync=function(u,h){return O(u,h,!0,n.immediateExceptions)},n.subscribe=function(u,h){if(typeof h!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(a,u)||(a[u]={});var v="uid_"+String(++o);return a[u][v]=h,v},n.subscribeAll=function(u){return n.subscribe(r,u)},n.subscribeOnce=function(u,h){var v=n.subscribe(u,function(){n.unsubscribe(v),h.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(h){var v;for(v in a)Object.prototype.hasOwnProperty.call(a,v)&&v.indexOf(h)===0&&delete a[v]},n.countSubscriptions=function(h){var v,w,R=0;for(v in a)if(Object.prototype.hasOwnProperty.call(a,v)&&v.indexOf(h)===0){for(w in a[v])R++;break}return R},n.getSubscriptions=function(h){var v,w=[];for(v in a)Object.prototype.hasOwnProperty.call(a,v)&&v.indexOf(h)===0&&w.push(v);return w},n.unsubscribe=function(u){var h=function(K){var $;for($ in a)if(Object.prototype.hasOwnProperty.call(a,$)&&$.indexOf(K)===0)return!0;return!1},v=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(a,u)||h(u)),w=!v&&typeof u=="string",R=typeof u=="function",L=!1,F,x,B;if(v){n.clearSubscriptions(u);return}for(F in a)if(Object.prototype.hasOwnProperty.call(a,F)){if(x=a[F],w&&x[u]){delete x[u],L=u;break}if(R)for(B in x)Object.prototype.hasOwnProperty.call(x,B)&&x[B]===u&&(delete x[B],L=!0)}return L}})})(ae,ae.exports)),ae.exports}var Bt=Ht();const l=Gt(Bt),i=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV.GO",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN.GO",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP.GO",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT.GO",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT.GO",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH.GO",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",LLM:"LLM",LLM_DO_DOWNLOAD:"LLM.DO.DOWNLOAD",LLM_STATUS:"LLM.STATUS",LLM_COMPLETE:"LLM.COMPLETE",LLM_ERROR:"LLM.ERROR",LLM_PROMPT:"LLM.PROMPT",LLM_RESPONSE:"LLM.RESPONSE",LLM_CANCEL:"LLM.CANCEL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),$t=5e3,zt=2e3,qt=/^(AUTH|ROUTE|LLM)\./;function jt(t,e){return e.some(n=>t===n||t.startsWith(`${n}.`))}function Yt(t=new Date){const e=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}T${e(t.getHours())}-${e(t.getMinutes())}-${e(t.getSeconds())}`}function Wt(t,e){const n=URL.createObjectURL(new Blob([t],{type:"application/json"})),a=document.createElement("a");return a.href=n,a.download=e,a.style.display="none",document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e4),e}function Kt(){return new Promise((t,e)=>{const n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.style.display="none",n.addEventListener("change",()=>{const a=n.files&&n.files[0];if(n.remove(),!a){e(new Error("[VCR] no file selected"));return}a.text().then(t,e)}),n.addEventListener("cancel",()=>{n.remove(),e(new Error("[VCR] file selection cancelled"))}),document.body.appendChild(n),n.click()})}function Fe(t){return typeof t.elapsed=="number"?t.elapsed:t.timestamp??0}function Jt(t,e){return t<=0?Promise.resolve():new Promise(n=>{e.wake=n,e.timer=setTimeout(()=>{e.timer=null,n()},t)})}function Qt(t){if(t===null||typeof t!="object")return t;try{return structuredClone(t)}catch{return Xt(t)}}function Xt(t){const e={_vcrPartial:!0};for(const n of Object.keys(t))try{const a=t[n];e[n]=a===null||typeof a!="object"?a:`[${Object.prototype.toString.call(a).slice(8,-1)}]`}catch(a){e[n]=`[unreadable: ${a.message}]`}return e}function xe(t){const e=new WeakSet;return JSON.stringify(t,(n,a)=>{if(typeof a=="bigint")return`${a}n`;if(typeof a=="function")return"[Function]";if(typeof a=="object"&&a!==null){if(e.has(a))return"[Circular]";e.add(a)}return a},2)}function Zt(t,e={}){if(!t||typeof t.publish!="function")return console.warn("[VCR] PubSub.publish not found - recorder not installed"),null;if(t.publish.__vcr)return t.publish.__vcr;const n=e.maxEntries??$t,a=e.app??"",o=[],r={};let s=0,c=0,p=0,_=null;window._vcrTimeline=o,window._isVCRRecording=!1;function y(m,S,O){o.length>=n&&(o.shift(),p++);const u=Date.now(),h={seq:s++,message:m,data:Qt(S),timestamp:u,elapsed:u-c};O&&(h.sync=!0),a&&(h.app=a),o.push(h)}const b={start(){return o.length=0,s=0,p=0,c=Date.now(),window._isVCRRecording=!0,console.info(`[VCR] recording (cap ${n} events) - reproduce the issue, then run stopVCR()`),!0},stop(m={}){const{save:S=!0,filename:O}=m;window._isVCRRecording=!1,p&&console.warn(`[VCR] tape capped at ${n} - ${p} earlier event(s) dropped`),console.info(`[VCR] stopped - ${o.length} event(s) recorded`);const u=xe(o);return S&&o.length&&b.save(O,u),u},save(m,S){const O=m||`vcr-${a||"pubsub"}-${Yt()}.json`;try{return Wt(S??xe(o),O),console.info(`[VCR] saved ${o.length} event(s) to ${O}`),O}catch(u){return console.error("[VCR] could not save file - copy _vcrTimeline instead",u),null}},peek(){return o},load(m){if(m===void 0)return Kt().then(u=>b.load(u));const S=typeof m=="string"?JSON.parse(m):m;if(!Array.isArray(S))throw new TypeError("[VCR] load() expects the JSON string from stopVCR(), or an array");window._isVCRRecording=!1,o.length=0,o.push(...S),s=o.length,p=0;const O=S[0]?.app;return console.info(`[VCR] loaded ${o.length} event(s)${O?` from ${O}`:""} - playVCR() to replay`),o.length},async play(m={}){const{speed:S=1,maxGap:O=zt,dryRun:u=!1,skip:h=[],quiet:v=!1}=m;if(_)return console.warn("[VCR] a replay is already running - stopPlayback() first"),{played:0,skipped:0,cancelled:!0,durationMs:0};if(!o.length)return console.warn("[VCR] tape is empty - record with startVCR(), or loadVCR(json)"),{played:0,skipped:0,cancelled:!1,durationMs:0};window._isVCRRecording&&(window._isVCRRecording=!1,console.warn("[VCR] recording stopped - cannot record and replay at once"));const w=o.slice(),R={cancelled:!1,timer:null,wake:null};_=R;const L=w.filter(D=>D.data&&D.data._vcrPartial).length;L&&console.warn(`[VCR] ${L} event(s) carry degraded payloads (were not cloneable when recorded)`);const F=w.filter(D=>qt.test(D.message)).length;F&&!u&&console.warn(`[VCR] tape contains ${F} AUTH/ROUTE/LLM event(s) - replay will really navigate, sign out, or call the model. Try { dryRun: true } or { skip: ['AUTH', 'LLM'] }.`),console.info(`[VCR] ${u?"dry run":"replaying"} ${w.length} event(s) at ${S}x`);const x=Date.now();let B=0,K=0,$=null;for(let D=0;D<w.length;D++){const M=w[D];if($){const ee=Fe(M)-Fe($),te=Math.min(Math.max(ee,0),O);if(await Jt(S>0?te/S:0,R),R.cancelled)break}if($=M,h.length&&jt(M.message,h)){K++,v||console.debug(`[VCR] ${D+1}/${w.length} skip ${M.message}`);continue}if(v||console.info(`[VCR] ${u?"·":"▶"} ${D+1}/${w.length} ${M.message}`,M.data??""),!u){const ee=M.sync&&r.publishSync||r.publish;try{ee.call(t,M.message,M.data)}catch(te){console.error(`[VCR] subscriber threw while replaying ${M.message}`,te)}}B++}const re=R.cancelled;_=null;const Z={played:B,skipped:K,cancelled:re,durationMs:Date.now()-x};return console.info(`[VCR] ${re?"cancelled":"replay complete"}`,Z),Z},stopPlayback(){return _?(_.cancelled=!0,_.timer&&clearTimeout(_.timer),_.wake&&_.wake(),!0):(console.info("[VCR] no replay running"),!1)},uninstall(){window._isVCRRecording=!1;for(const m of["publish","publishSync"])t[m]&&t[m].__vcrOriginal&&(t[m]=t[m].__vcrOriginal)}};for(const m of["publish","publishSync"]){const S=t[m];if(typeof S!="function")continue;const O=m==="publishSync";r[m]=S;const u=function(h,v){if(window._isVCRRecording)try{y(h,v,O)}catch(w){console.warn("[VCR] failed to record",h,w)}return S.apply(this,arguments)};u.__vcr=b,u.__vcrOriginal=S,t[m]=u}return window.startVCR=()=>b.start(),window.stopVCR=m=>b.stop(m),window.saveVCR=m=>b.save(m),window.loadVCR=m=>b.load(m),window.playVCR=m=>b.play(m),window.stopPlayback=()=>b.stopPlayback(),console.info(`[VCR] armed${a?` (${a})`:""} - startVCR() / stopVCR() to record, loadVCR() / playVCR() to replay`),b}const he={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://streamsyncengage-saas.onrender.com"};var fe={};const T=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function ot(t,e=null){if(t in T)return T[t];if(typeof process<"u"&&fe&&fe[t]){const n=fe[t];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&he&&he[t]){const n=he[t];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return e}function en(t){return ot(t,!1)===!0}function tn(){return{...T}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:T,getFlag:ot,isEnabled:en,getAllFlags:tn});const k=Object.freeze({USER:"user",ASSISTANT:"assistant"}),q=Object.freeze({USER:"user",SYSTEM:"system",AUTOMATION:"automation"}),P=Object.freeze({START:"start",DELTA:"delta",END:"end",ERROR:"error"}),I=Object.freeze({CANVAS:"canvas",AGENT:"agent",WORKFLOW:"workflow",STAGE:"stage"}),De=Object.freeze({CANVAS:[I.CANVAS],AGENT:[I.AGENT],AGENT_CANVAS:[I.CANVAS,I.AGENT],STAGE:[I.STAGE],WORKFLOW:[I.WORKFLOW]});Object.freeze({PROMPT:i.CONVERSATION_PROMPT,PROMPT_CANVAS:i.CONVERSATION_PROMPT_CANVAS,PROMPT_AGENT:i.CONVERSATION_PROMPT_AGENT,PROMPT_AGENT_CANVAS:i.CONVERSATION_PROMPT_AGENT_CANVAS,PROMPT_STAGE:i.CONVERSATION_PROMPT_STAGE,RESPONSE:i.CONVERSATION_RESPONSE,RESPONSE_CANVAS:i.CONVERSATION_RESPONSE_CANVAS,RESPONSE_WORKFLOW:i.CONVERSATION_RESPONSE_WORKFLOW});const nn="::";function an(t){return typeof t=="string"&&t.trim().startsWith(nn)}let Ge=0;function ye(t="msg"){return globalThis.crypto&&typeof globalThis.crypto.randomUUID=="function"?`${t}_${globalThis.crypto.randomUUID()}`:(Ge+=1,`${t}_${Date.now().toString(36)}_${Ge}`)}function on(t=new Date){return t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Ve(t){if(typeof t!="string")return"";const e=t.split(".");return e.length>2?e.slice(2).join("."):""}function j(t={}){const e=new Date,n=t.text??t.message??"";return{id:t.id??ye(t.role===k.ASSISTANT?"res":"req"),turnId:t.turnId??ye("turn"),role:t.role??k.USER,source:t.source??q.USER,text:n,message:n,timestamp:t.timestamp??on(e),ts:t.ts??e.getTime(),phase:t.phase??P.END,sinks:t.sinks??[I.CANVAS],meta:t.meta??{}}}function He(t,e={}){const n=typeof t=="string"?{text:t}:t??{},a=n.role??e.role??k.USER;let o=n.phase;o||(o=n.streaming?P.DELTA:P.END);const r=Array.isArray(n.sinks)&&n.sinks.length?n.sinks:rn(e.subTopic,a);return j({...n,role:a,phase:o,sinks:r,source:n.source??e.source??q.USER})}function rn(t,e=k.USER){return t&&De[t]?De[t]:e===k.ASSISTANT?[I.CANVAS]:[I.CANVAS]}const Be={base:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful.",contributors:new Map,register(t,e){if(typeof e!="function")throw new TypeError("[Conversation] contributor must be a function");return this.contributors.set(t,e),this},unregister(t){return this.contributors.delete(t),this},setBase(t){return this.base=t,this},compose(t={}){const e=[this.base];for(const[n,a]of this.contributors)try{const o=a(t);o&&e.push(String(o))}catch(o){console.warn(`[Conversation] system prompt contributor "${n}" failed`,o)}return e.filter(Boolean).join(`

`)},hash(t){let e=5381;for(let n=0;n<t.length;n++)e=(e<<5)+e+t.charCodeAt(n)|0;return(e>>>0).toString(36)}};function sn(){const t=e=>n=>{const a=n.detail?.pubsubTopic;a&&l.publish(a,n.detail)};document.addEventListener("nav-select",t()),document.addEventListener("logo-click",t()),document.addEventListener("nav-hover",t()),document.addEventListener("nav-double-tap",t()),document.addEventListener("nav-long-tap",t()),document.addEventListener("message-sent",t())}function ln(){console.log("[AppEvents] Initializing event listeners..."),l.subscribe(i.APP_READY,(n,a)=>{console.log("[AppEvents] APP_READY:",a)}),l.subscribe(i.APP_ERROR,(n,a)=>{console.error("[AppEvents] APP_ERROR:",a)}),l.subscribe(i.APP_SIGNOUT,(n,a)=>{console.log("[AppEvents] APP_SIGNOUT:",a)}),l.subscribe(i.ROUTE_NAV_BEFORE,(n,a)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",a),l.publish(i.UI_LOADING_START)}),l.subscribe(i.ROUTE_NAV_AFTER,(n,a)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",a),l.publish(i.UI_LOADING_END)}),l.subscribe(i.ROUTE_NAV_ERROR,(n,a)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",a),l.publish(i.APP_ERROR,{message:"Navigation error",details:a})}),l.subscribe(i.AUTH_SIGNIN_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",a)}),l.subscribe(i.AUTH_SIGNIN_FAIL,(n,a)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",a),l.publish(i.UI_TOAST,{message:a.message||"Sign in failed",type:"danger"})}),l.subscribe(i.AUTH_SIGNUP_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",a),l.publish(i.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"})}),l.subscribe(i.AUTH_VERIFY_LINK,(n,a)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),l.subscribe(i.AUTH_SIGNUP_FAIL,(n,a)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",a),l.publish(i.UI_TOAST,{message:a.message||"Sign up failed",type:"danger"})}),l.subscribe(i.AUTH_SIGNOUT_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",a),l.publish(i.UI_TOAST,{message:"Signed out successfully",type:"info"})}),l.subscribe(i.AUTH_SIGNUP,(n,a)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),l.subscribe(i.AUTH_FORGOT,(n,a)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),l.subscribe(i.AUTH_FORGOT_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",a),l.publish(i.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),l.subscribe(i.AUTH_RESETHASH_NAV,(n,a)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),l.subscribe(i.AUTH_RESETHASH_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",a),l.publish(i.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),l.subscribe(i.AUTH_TOKEN_EXPIRED,(n,a)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",a),l.publish(i.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),l.subscribe(i.I18N_SET_LANG,(n,a)=>{console.log("[AppEvents] I18N_SET_LANG:",a);const{langCode:o}=a;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),l.publish(i.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(r){console.error("[AppEvents] Error changing language:",r),l.publish(i.UI_TOAST,{message:`Failed to change language: ${r.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),l.subscribe("CONVERSATION.PROMPT",(n,a)=>{const o=He(a,{role:k.USER,subTopic:Ve(n)});if(!o.text){console.warn("[AppEvents] CONVERSATION.PROMPT received without text",a);return}if(console.log(`[AppEvents] PROMPT ${o.sinks.join("+")} [${o.source}]:`,o.text),o.sinks.includes(I.STAGE)){const r=document.querySelector("m5t-chat-prompt-area");r?.setMessage?r.setMessage(o.text):console.warn("[AppEvents] STAGE sink: no m5t-chat-prompt-area on this route")}o.sinks.includes(I.CANVAS)&&($e(o),l.publish(i.CANVAS_DO_SCROLL)),o.sinks.includes(I.AGENT)&&(an(o.text)?cn(o):l.publish(i.LLM_PROMPT,{message:o.text,turnId:o.turnId}))}),l.subscribe("CONVERSATION.RESPONSE",(n,a)=>{const o=He(a,{role:k.ASSISTANT,subTopic:Ve(n)});if(!o.text&&o.phase!==P.END){console.warn("[AppEvents] CONVERSATION.RESPONSE received without text",a);return}o.sinks.includes(I.CANVAS)&&$e(o),o.sinks.includes(I.WORKFLOW)&&console.log("[AppEvents] WORKFLOW sink not implemented yet:",o.text)}),l.subscribe(i.UI_LOADING_START,(n,a)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),l.subscribe(i.UI_LOADING_END,(n,a)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),l.subscribe(i.UI_TOAST,(n,a)=>{console.log("[AppEvents] UI_TOAST:",a)}),l.subscribe(i.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const n="0.1",a=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${n} 8/1/2026, 10:45:15 AM|© ${a} Mach Five Tech`,"night")}),sn(),l.subscribe("M5T_PRIMARY_NAV",(n,a)=>{const o=n.split(".")[1];switch(o){case"TAP":t(a);break;case"LOGO_TAP":e();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function t(n){const{token:a,level:o,primaryToken:r}=n;switch(a){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),l.publish(i.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${a}`,{primaryToken:r});break}}function e(n){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 8/1/2026, 10:45:15 AM|© ${o} Mach Five Tech`,"night",5e3)}l.subscribe(i.LLM_DO_DOWNLOAD,(n,a)=>{console.log("[AppEvents] LLM_DO_DOWNLOAD:",a),window.LLMController?window.LLMController.loadModel():console.error("[AppEvents] LLMController not available")}),l.subscribe(i.LLM_STATUS,(n,a)=>{console.log("[AppEvents] LLM_STATUS:",a),a&&typeof neodigmToast<"u"&&(a.text||`${a.progressPercent}`)}),l.subscribe(i.LLM_COMPLETE,(n,a)=>{console.log("[AppEvents] LLM_COMPLETE:",a),l.publish(i.CONVERSATION_RESPONSE_CANVAS,j({role:k.ASSISTANT,source:q.SYSTEM,text:`✓ AI Model Ready: ${a.modelId}`,phase:P.END,meta:{modelId:a.modelId}}))}),l.subscribe(i.LLM_ERROR,(n,a)=>{console.error("[AppEvents] LLM_ERROR:",a);const o=`AI Error: ${a.error||"Unknown error"}`;typeof neodigmToast<"u"&&neodigmToast.q(o,"danger",8e3),l.publish(i.CONVERSATION_RESPONSE_CANVAS,j({id:a?.responseId,turnId:a?.turnId,role:k.ASSISTANT,source:q.SYSTEM,text:`✗ ${o}`,phase:P.ERROR}))}),l.subscribe(i.LLM_PROMPT,(n,a)=>{console.log("[AppEvents] LLM_PROMPT:",a),window.LLMController&&a?.message?window.LLMController.chat(a.message,{turnId:a.turnId}):console.error("[AppEvents] LLMController not available or no message provided")}),l.subscribe(i.LLM_RESPONSE,(n,a)=>{a&&(!a.done&&!a.fullContent||l.publish(i.CONVERSATION_RESPONSE_CANVAS,j({id:a.responseId,turnId:a.turnId,role:k.ASSISTANT,source:q.SYSTEM,text:a.fullContent??"",phase:a.done?P.END:P.DELTA,meta:a.meta??{}})))}),l.subscribe(i.LLM_CANCEL,(n,a)=>{console.log("[AppEvents] LLM_CANCEL"),window.LLMController&&window.LLMController.cancelGeneration()}),l.subscribe(i.AUTH_SIGNOUT,(n,a)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(T.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}const ie=new Map;function $e(t){const e=document.getElementById("chat-messages");if(!e)return console.warn("[AppEvents] chat-messages element not found - may not be on home route"),null;let n=ie.get(t.id);return n&&!n.isConnected&&(ie.delete(t.id),n=null),n||(n=document.createElement(t.role===k.ASSISTANT?"m5t-chat-response":"m5t-chat-prompt"),n.setAttribute("data-turn-id",t.turnId),n.setAttribute("data-message-id",t.id),n.setAttribute("timestamp",t.timestamp),ie.set(t.id,n),e.prepend(n)),n.setAttribute("message",t.text),(t.phase===P.END||t.phase===P.ERROR)&&(n.setAttribute("phase",t.phase),ie.delete(t.id)),n}async function cn(t){console.log("[AppEvents] CLI command:",t.text);try{const e=(await G(async()=>{const{default:o}=await Promise.resolve().then(()=>_n);return{default:o}},void 0)).default,n=window.AuthController?.getEntity(),a=await e.process(t.text,n);l.publish(i.CONVERSATION_RESPONSE_CANVAS,j({turnId:t.turnId,role:k.ASSISTANT,source:q.SYSTEM,text:a.message,phase:P.END,meta:{command:!0}}))}catch(e){console.error("[AppEvents] CLI command failed",e),l.publish(i.CONVERSATION_RESPONSE_CANVAS,j({turnId:t.turnId,role:k.ASSISTANT,source:q.SYSTEM,text:`Command failed: ${e.message}`,phase:P.ERROR}))}l.publish(i.CANVAS_DO_SCROLL)}class z{static CONFIG={BASE_URL:"https://streamsyncengage-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#n=null;static#a=null;static#s=null;static async init({BASE_URL:e,navigateFunction:n,customConfig:a={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#s=n;else throw new Error("navigateFunction is required and must be a function");return e&&(this.CONFIG.BASE_URL=e),a&&Object.keys(a).length>0&&(this.CONFIG={...this.CONFIG,...a}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#c(),this.#l(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#d(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#l(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((e=null)=>{e&&(console.log("[AuthController] mvvLegit navigation to:",e),this.#o(e))}).setOnState((e=null)=>{if(e)switch(console.log("[AuthController] Auth state changed:",e),e){case"AUTH":case 4:this.#p();break;case"UNAUTH":case 1:this.#_();break;case"UNVERF":case 2:this.#m();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#o(e){if(!this.#s){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",e);const n=e.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#s(n)}static#c(){try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#n=JSON.parse(e),console.log("[AuthController] Entity state loaded:",this.#n?.email))}catch(e){console.error("[AuthController] Error loading entity state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#a=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null}static#r(e){try{this.#n=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#i(){this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY)}static getEntity(){return this.#n}static async doSignin(e,n){try{const a=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:n})}),o=await a.json();return a.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#r(o.entity)),setTimeout(()=>{this.#o(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):a.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#r(o.entity),console.log("[AuthController] Explicitly navigating to home"),this.#o(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(a){return console.error("[AuthController] Signin error:",a),{ok:!1,error:a.message}}}static async doSignout(e=!1){console.log("[AuthController] doSignout called, serverInitiated:",e);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!e&&n){const a=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",a),navigator.sendBeacon){const o=navigator.sendBeacon(a);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#i(),console.log("[AuthController] Stopping auth ping..."),this.#u(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await n.json();return n.ok&&a.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#r(a.entity),{ok:!0,data:a}):{ok:!1,error:a.error||"Sign up failed",data:a}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(e,n){try{const a=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:n,modified_by:e})}),r=await o.json();return o.ok&&r.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:r}):{ok:!1,error:r.error||"Password reset failed",data:r}}catch(a){return console.error("[AuthController] Reset password error:",a),{ok:!1,error:a.message}}}static#d(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#g()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#u(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#g(){try{const e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log("[AuthController] Ping success"):(e.status===401||e.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(e){console.error("[AuthController] Ping error:",e)}}static setDeepLinkGuid(e){this.#a=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log("[AuthController] Deep-link GUID stored:",e)}static getDeepLinkGuid(){return this.#a}static clearDeepLink(){this.#a=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#p(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#d()}static#_(){console.log("[AuthController] User unauthenticated"),this.#u()}static#m(){console.log("[AuthController] User unverified")}static getAuthState(){try{const e=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(e);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const a=LZString.decompressFromUTF16(n),r=JSON.parse(a)?.state;return r===1?"UNAUTH":r===2?"UNVERF":r===4?"AUTH":r===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(e){this.#o(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#g()}}class f{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:e,product:n,whitelabel:a,lang:o}){e&&(this.#t.buildMode=e),n&&(this.#t.product=n),a&&(this.#t.whitelabel=a),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(e,n={}){const a={...this.#t,...n},{buildMode:o,product:r,whitelabel:s,lang:c}=a;try{const p=this.#e[o]?.[r]?.[s]?.[c]?.[e];return p?Array.isArray(p)?p[Math.floor(Math.random()*p.length)]:p:(console.warn(`[MicrocopyManager] Token not found: ${e} (${o}/${r}/${s}/${c})`),null)}catch(p){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,p),null}}static getAll(e={}){const n={...this.#t,...e},{buildMode:a,product:o,whitelabel:r,lang:s}=n;try{return this.#e[a]?.[o]?.[r]?.[s]||null}catch(c){return console.error("[MicrocopyManager] Error retrieving all tokens",c),null}}static has(e,n={}){const a={...this.#t,...n},{buildMode:o,product:r,whitelabel:s,lang:c}=a;try{return!!this.#e[o]?.[r]?.[s]?.[c]?.[e]}catch{return!1}}static getAvailableLanguages(){const{buildMode:e,product:n,whitelabel:a}=this.#t;try{return Object.keys(this.#e[e]?.[n]?.[a]||{})}catch{return[]}}static update(e,n,a={}){const o={...this.#t,...a},{buildMode:r,product:s,whitelabel:c,lang:p}=o;try{return this.#e[r]||(this.#e[r]={}),this.#e[r][s]||(this.#e[r][s]={}),this.#e[r][s][c]||(this.#e[r][s][c]={}),this.#e[r][s][c][p]||(this.#e[r][s][c][p]={}),this.#e[r][s][c][p][e]=n,!0}catch(_){return console.error(`[MicrocopyManager] Error updating token: ${e}`,_),!1}}static delete(e,n={}){const a={...this.#t,...n},{buildMode:o,product:r,whitelabel:s,lang:c}=a;try{return delete this.#e[o]?.[r]?.[s]?.[c]?.[e],!0}catch(p){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,p),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(n){return console.error("[MicrocopyManager] Error importing data",n),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:f});class Y{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const e=this.#s();f.setContext(e),console.log("[I18nController] Initialized with context:",e),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),T.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#l(),this.#c(),this.#e=!0,this.refresh()}static#a(e){const n={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},a=e.toLowerCase();return n[a]||"DEV"}static#s(){const n=this.#a("production"),a=localStorage.getItem(T.FF_SSE_LS_WHITELABEL)||T.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(T.FF_SSE_LS_USER_LANG)||T.FF_SSE_I18N_LANG;return{buildMode:n,product:T.FF_SSE_I18N_PRODUCT,whitelabel:a,lang:o}}static#l(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,n,a)=>{T.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",a),this.#t=a,setTimeout(()=>{this.refresh()},T.FF_SSE_I18N_APPLY_DELAY_MS)},T.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#o())}static#o(){setInterval(()=>{const n=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");n&&n!==this.#t&&(this.#t=n,this.refresh())},500)}static#c(){this.#n||(this.#n=new MutationObserver(e=>{let n=!1;for(const a of e){for(const o of a.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){n=!0;break}if(n)break}n&&(T.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#r(document.body),this.#i(document.body),T.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#r(e){const n=e.querySelectorAll("[data-meta-copywrite-i118n]");T.FF_SSE_I18N_DEBUG&&n.length>0&&console.log(`[I18nController] Processing ${n.length} elements`),n.forEach(a=>{try{const o=a.getAttribute("data-meta-copywrite-i118n"),r=JSON.parse(o);if(!r.token){console.warn("[I18nController] Missing token in config:",r);return}const s=r.attribute||"textContent",c=f.get(r.token);if(c===null){console.warn(`[I18nController] Microcopy not found for token: ${r.token}`);return}s==="textContent"?a.textContent=c:s==="innerHTML"?a.innerHTML=c:a.setAttribute(s,c),T.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${c}" to ${s} for token: ${r.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,a)}})}static#i(e){e.querySelectorAll("*").forEach(a=>{a.shadowRoot&&(this.#r(a.shadowRoot),this.#i(a.shadowRoot))})}static setLanguage(e){const n=f.getAvailableLanguages();if(!n.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,n);return}localStorage.setItem(T.FF_SSE_LS_USER_LANG,e),f.setContext({lang:e}),console.log("[I18nController] Language changed to:",e);const a=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(a),this.refresh()}static setWhitelabel(e){localStorage.setItem(T.FF_SSE_LS_WHITELABEL,e),f.setContext({whitelabel:e}),T.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",e),this.refresh()}static getLanguage(){return f.getContext().lang}static getAvailableLanguages(){return f.getAvailableLanguages()}static getContext(){return f.getContext()}static destroy(){this.#n&&(this.#n.disconnect(),this.#n=null),this.#e=!1,this.#t=null,T.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{Y.initialize()}):Y.initialize());class ze{static engine=null;static webllm=null;static isInitialized=!1;static currentModel=null;static isGenerating=!1;static isModelCached=!1;static DEFAULT_MODEL="Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC";static history=[];static systemContext(){return{entity:globalThis.window?.AuthController?.getEntity?.()??null,route:globalThis.location?.hash??"",modelId:this.DEFAULT_MODEL}}static async initialize(){if(this.isInitialized)return console.log("[LLMController] Already initialized"),!0;console.log("[LLMController] Initializing WebLLM module...");try{if(!navigator.gpu)throw new Error("WebGPU is not available. Please use a supported browser (Chrome 113+, Edge 113+).");if(console.log("[LLMController] WebGPU detected"),this.webllm=await G(()=>import("https://esm.run/@mlc-ai/web-llm"),[]),console.log("[LLMController] WebLLM module loaded"),!this.webllm||!this.webllm.MLCEngine)throw new Error("MLCEngine not found in WebLLM module");return this.engine=new this.webllm.MLCEngine,console.log("[LLMController] MLCEngine created"),this.engine.setInitProgressCallback(e=>{this.handleInitProgress(e)}),this.isModelCached=await this.checkModelCache(),this.isInitialized=!0,console.log("[LLMController] Engine initialized, attempting auto-load..."),await this.autoLoadCachedModel(),console.log("[LLMController] Initialization complete"),!0}catch(e){return console.error("[LLMController] Initialization failed:",e),l.publish(i.LLM_ERROR,{error:e.message,phase:"initialization"}),!1}}static async checkModelCache(){console.log(`[LLMController] Checking cache for model: ${this.DEFAULT_MODEL}`);try{const n=(await caches.keys()).find(c=>c.includes("webllm/model"));if(!n)return console.log("[LLMController] No WebLLM model cache found"),!1;const r=(await(await caches.open(n)).keys()).filter(c=>c.url.includes(this.DEFAULT_MODEL)||c.url.includes("Hermes-2-Pro-Llama-3-8B")),s=r.length>0;return console.log(`[LLMController] Model cached: ${s} (${r.length} files)`),s}catch(e){return console.warn("[LLMController] Cache check failed:",e.message),!1}}static async autoLoadCachedModel(){try{this.isModelCached?console.log(`[LLMController] Loading cached model: ${this.DEFAULT_MODEL}`):console.log(`[LLMController] No cached model found - starting download: ${this.DEFAULT_MODEL}`),await this.loadModel(),console.log("[LLMController] Model ready")}catch(e){console.error("[LLMController] Auto-load failed:",e)}}static async loadModel(){if(!this.isInitialized)return console.error("[LLMController] Cannot load model: not initialized"),l.publish(i.LLM_ERROR,{error:"LLMController not initialized",modelId:this.DEFAULT_MODEL}),!1;const e=this.isModelCached;console.log(`[LLMController] Loading model: ${this.DEFAULT_MODEL} (cached: ${e})`);try{const n={temperature:.7,top_p:.95};return await this.engine.reload(this.DEFAULT_MODEL,n),this.currentModel=this.DEFAULT_MODEL,this.isModelCached=!0,console.log(`[LLMController] Model loaded successfully: ${this.DEFAULT_MODEL}`),l.publish(i.LLM_COMPLETE,{modelId:this.DEFAULT_MODEL,cached:e}),!0}catch(n){return console.error("[LLMController] Failed to load model:",n),l.publish(i.LLM_ERROR,{error:n.message,modelId:this.DEFAULT_MODEL,phase:"download"}),!1}}static handleInitProgress(e){const n=(e.progress*100).toFixed(1);let a=e.text;(n>0||!e.text.includes("Loading model from cache"))&&(a=`${n}% - ${e.text}`),console.log(`[LLMController] Progress: ${a}`),l.publish(i.LLM_STATUS,{progress:e.progress,progressPercent:parseFloat(n),text:a,modelId:this.currentModel||this.DEFAULT_MODEL})}static async chat(e,n={}){const{turnId:a}=n,o=ye("res");if(!this.currentModel){console.error("[LLMController] No model loaded - still downloading or initialization failed"),l.publish(i.LLM_ERROR,{error:"AI model is still loading. Please wait a moment and try again.",phase:"chat",turnId:a,responseId:o});return}if(this.isGenerating){console.warn("[LLMController] Already generating response");return}console.log(`[LLMController] Processing chat message: "${e}"`);const r=Be.compose(this.systemContext()),s=Be.hash(r);this.history.push({role:"user",content:e});const c=[{role:"system",content:r},...this.history];this.isGenerating=!0;let p="",_=null;try{const y=await this.engine.chat.completions.create({stream:!0,messages:c,stream_options:{include_usage:!0}});for await(const b of y){const m=b.choices[0]?.delta?.content;m&&(p+=m,l.publish(i.LLM_RESPONSE,{content:m,fullContent:p,done:!1,turnId:a,responseId:o,meta:{model:this.DEFAULT_MODEL,systemHash:s}})),b.usage&&(_=b.usage,console.log("[LLMController] Usage stats:",b.usage))}this.history.push({role:"assistant",content:p}),l.publish(i.LLM_RESPONSE,{content:"",fullContent:p,done:!0,turnId:a,responseId:o,meta:{model:this.DEFAULT_MODEL,systemHash:s,usage:_}}),console.log(`[LLMController] Response complete (${p.length} chars)`)}catch(y){console.error("[LLMController] Chat error:",y),l.publish(i.LLM_ERROR,{error:y.message,phase:"chat",turnId:a,responseId:o})}finally{this.isGenerating=!1}}static cancelGeneration(){if(!this.isGenerating||!this.engine){console.warn("[LLMController] Nothing to cancel");return}console.log("[LLMController] Cancelling generation...");try{this.engine.interruptGenerate(),this.isGenerating=!1,console.log("[LLMController] Generation cancelled")}catch(e){console.error("[LLMController] Cancel failed:",e)}}static getStatus(){return{modelId:this.DEFAULT_MODEL,isLoaded:!!this.currentModel,isCached:this.isModelCached,isGenerating:this.isGenerating,messageCount:this.history.length}}static resetConversation(){this.history=[],console.log("[LLMController] Conversation reset")}}class we{static _initialized=!1;static _debug=!1;static init(e={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=e.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const n=a=>{this._handleSSEMessage(a)};return window.mvvSSEther.onmessage(n),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(e){try{this._debug&&console.log("[MachVive] SSE message received:",e);const n=e?.data;if(!n){this._debug&&console.log("[MachVive] No data in message, skipping");return}const a=n.data||n.package||n;if(!a){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=a.cfg;const r=a.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",r)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(c){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:c.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const s=o?.topic;if(!s){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",s),!this._isValidTopic(s)){console.warn(`[MachVive] Topic '${s}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(s,r,e,n)}catch(n){console.error("[MachVive] Error handling SSE message:",n)}}static _isValidTopic(e){return!i||!i.hasOwnProperty(e)?(console.warn(`[MachVive] Topic '${e}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(e,n,a,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const r=window.PubSub||PubSub,s={message:n,metadata:{source:"sse",sseEventId:a.id,timestamp:a.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${e}':`,s);const c=i[e];console.log(`[MachVive] AppBroadcast.${e} = '${c}'`),r.publish(c,s),console.log(`[MachVive] ✓ Published SSE message to topic: ${e}`)}catch(r){console.error(`[MachVive] Error publishing to topic '${e}':`,r)}}static debug(e){return this._debug=e,console.log(`[MachVive] Debug mode ${e?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=we);typeof window<"u"&&(window.MachVive=we);Zt(l,{app:"client-saas"});window.m5t=Object.create(null);window.m5t.pubsub=l;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(t){console.log("mvvLegit (direct): ReferenceError -",t.message)}const dn=Object.keys(window).filter(t=>t.toLowerCase().includes("mvv")||t.toLowerCase().includes("neodigm")||t.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",dn);const U=new xt("/",{hash:!0});window.router=U;function Te(t){const e=t?`${t.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${t} -> ${e}`),mvvLegit.isRouteAllowed(e)?!0:(console.warn(`[Router] Access denied to route: ${e}`),l.publish(i.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function X(t){console.log("[Router] Navigating to:",t),U.navigate(`/${t}`)}U.on("/",()=>{console.log("[Router] Route: /"),l.publish(i.ROUTE_NAV_BEFORE,{route:"splash"}),G(()=>Promise.resolve().then(()=>rt),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"splash"})}).catch(t=>{console.error("[Router] Error loading splash route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"splash",error:t})})});U.on("/splash",()=>{console.log("[Router] Route: /splash"),l.publish(i.ROUTE_NAV_BEFORE,{route:"splash"}),G(()=>Promise.resolve().then(()=>rt),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"splash"})}).catch(t=>{console.error("[Router] Error loading splash route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"splash",error:t})})});U.on("/signin",()=>{console.log("[Router] Route: /signin"),l.publish(i.ROUTE_NAV_BEFORE,{route:"signin"}),G(()=>Promise.resolve().then(()=>Sn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"signin"})}).catch(t=>{console.error("[Router] Error loading signin route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"signin",error:t})})});U.on("/signup",()=>{console.log("[Router] Route: /signup"),l.publish(i.ROUTE_NAV_BEFORE,{route:"signup"}),G(()=>Promise.resolve().then(()=>On),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"signup"})}).catch(t=>{console.error("[Router] Error loading signup route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"signup",error:t})})});U.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),l.publish(i.ROUTE_NAV_BEFORE,{route:"verf-link"}),G(()=>Promise.resolve().then(()=>In),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(t=>{console.error("[Router] Error loading verf-link route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"verf-link",error:t})})});U.on("/forgot",()=>{console.log("[Router] Route: /forgot"),l.publish(i.ROUTE_NAV_BEFORE,{route:"forgot"}),G(()=>Promise.resolve().then(()=>Gn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(t=>{console.error("[Router] Error loading forgot route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"forgot",error:t})})});U.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!Te("resethash")){X("signin");return}l.publish(i.ROUTE_NAV_BEFORE,{route:"resethash"}),G(()=>Promise.resolve().then(()=>Bn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(t=>{console.error("[Router] Error loading resethash route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"resethash",error:t})})});U.on("/home",()=>{if(console.log("[Router] Route: /home"),!Te("home")){X("signin");return}l.publish(i.ROUTE_NAV_BEFORE,{route:"home"}),G(()=>Promise.resolve().then(()=>ta),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"home"})}).catch(t=>{console.error("[Router] Error loading home route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"home",error:t})})});U.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!Te("signout")){X("signin");return}l.publish(i.ROUTE_NAV_BEFORE,{route:"signout"}),G(()=>Promise.resolve().then(()=>oa),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(i.ROUTE_NAV_AFTER,{route:"signout"})}).catch(t=>{console.error("[Router] Error loading signout route:",t),l.publish(i.ROUTE_NAV_ERROR,{route:"signout",error:t})})});U.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),X("splash")});l.subscribe(i.ROUTE_NAV,(t,e)=>{console.log("[Router] ROUTE_NAV event received:",e),e?.route&&X(e.route)});function qe(){console.log("[App] Waiting for Neodigm 55 library...");let t=0;const e=100,n=setInterval(()=>{t++,t%10===0&&console.log(`[App] Still waiting... attempt ${t}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${t*100}ms`),clearInterval(n),un()):t>=e&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,l.publish(i.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qe):qe();async function un(){if(console.log("[App] Neodigm 55 loaded, initializing..."),ln(),Y.initialize(),console.log("[App] I18n Controller initialized"),ze.initialize().then(n=>{n?console.log("[App] LLM Controller initialized successfully"):console.warn("[App] LLM Controller initialization failed (non-critical)")}).catch(n=>{console.error("[App] LLM Controller initialization error:",n)}),!await z.init({BASE_URL:"https://streamsyncengage-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),X(n)}})){console.error("[App] AuthController initialization failed");return}const e=z.getEntity();e&&(console.log("[App] Session restored for:",e.email),l.publish(i.APP_USER_LOADED,{entity:e})),l.publish(i.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),U.resolve(),window.AuthController=z,window.I18nController=Y,window.LLMController=ze,window.MachVive=we,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, LLMController, MachVive available globally)")}l.subscribe(i.ROUTE_NAV_AFTER,(t,e)=>{typeof Y<"u"&&Y.refresh&&setTimeout(()=>{Y.refresh()},100)});const gn=Object.freeze({admin_root_role:{value:100,desc:"Administrator superuser infrastructure architecture"},admin_business_role:{value:90,desc:"Administrator financial oversight"},admin_support_role:{value:80,desc:"Administrator maintenance and configuration"},admin_readonly_role:{value:70,desc:"Administrator information help desk"},client_tier_3_role:{value:30,desc:"Client paid tier 3"},client_tier_2_role:{value:20,desc:"Client paid tier 2"},client_tier_1_role:{value:10,desc:"Client paid tier 1"},client_standard_role:{value:0,desc:"Client free tier 0"}});function je(t){return gn[t]||null}class pn{static MIN_ROLE_VALUE=50;static COMMANDS={help:"Show available commands",clear:"Clear chat canvas",debug:"Toggle debug mode (::debug on|off)",version:"Show application version",feature:"Feature flag operations (::feature list|get|set)",model:"LLM model operations (::model status|download|clear)",reload:"Reload the page",export:"Export chat history as JSON",theme:"Toggle theme (::theme dark|light)",auth:"Show authentication status"};static hasAccess(e){if(!e||!e.class)return!1;let n=0;if(typeof e.class=="string"){const a=je(e.class);n=a?a.value:0}else typeof e.class=="object"&&e.class.value!==void 0&&(n=e.class.value);return console.log(`[CLIController] Role check: ${e.class} → value: ${n}`),n>=this.MIN_ROLE_VALUE}static async process(e,n){if(!this.hasAccess(n))return{error:!0,message:`⛔ **Access Denied**

CLI commands require admin privileges (role ≥ 50).`};const a=e.slice(2).trim(),[o,...r]=a.split(/\s+/);switch(console.log("[CLIController] Processing command:",o,"Args:",r),o.toLowerCase()){case"help":return this.cmdHelp();case"clear":return this.cmdClear();case"debug":return this.cmdDebug(r);case"version":return this.cmdVersion();case"feature":return this.cmdFeature(r);case"model":return this.cmdModel(r);case"reload":return this.cmdReload();case"export":return this.cmdExport();case"theme":return this.cmdTheme(r);case"auth":return this.cmdAuth(n);default:return{error:!0,message:`❌ **Unknown command:** \`${o}\`

Type \`::help\` for available commands.`}}}static cmdHelp(){let e=`📖 **CLI Commands**

`;e+="Available commands (prefix with `::`)\n\n";for(const[n,a]of Object.entries(this.COMMANDS))e+=`• \`::${n}\` - ${a}
`;return e+=`
**Examples:**
`,e+="• `::debug on` - Enable debug logging\n",e+="• `::feature list` - Show all feature flags\n",e+="• `::model status` - Check LLM model status\n",{message:e}}static cmdClear(){const e=document.getElementById("chat-messages");return e?(e.innerHTML="",{message:"✅ Chat canvas cleared"}):{error:!0,message:"❌ Failed to clear canvas"}}static cmdDebug(e){const n=e[0]?.toLowerCase();if(!n||!["on","off"].includes(n))return{message:`🐛 **Debug Mode**

Current state: \`${localStorage.getItem("debug_mode")==="true"?"ON":"OFF"}\`

Usage: \`::debug on|off\``};const a=n==="on";return localStorage.setItem("debug_mode",a),{message:`🐛 Debug mode ${a?"**enabled**":"**disabled**"}`}}static cmdVersion(){return{message:`ℹ️ **StreamSyncEngage SaaS Client**

Version: 1.0.0
Build: production
Node Env: production`}}static cmdFeature(e){const n=e[0]?.toLowerCase();if(!n)return{message:"🚩 **Feature Flags**\n\nUsage:\n• `::feature list` - List all flags\n• `::feature get <name>` - Get flag value\n• `::feature set <name> <value>` - Set flag value"};switch(n){case"list":{let a=`🚩 **Feature Flags**

`;const o=Object.entries(T).slice(0,20);for(const[r,s]of o)a+=`• \`${r}\`: \`${s}\`
`;return a+=`
*Showing 20 of ${Object.keys(T).length} flags*`,{message:a}}case"get":{const a=e[1];if(!a)return{error:!0,message:"❌ Flag name required: `::feature get <name>`"};const o=T[a];return o===void 0?{error:!0,message:`❌ Flag not found: \`${a}\``}:{message:`🚩 \`${a}\` = \`${o}\``}}case"set":return{message:`⚠️ **Feature flag modification**

Setting flags dynamically is not yet implemented.
Flags are loaded from \`featureFlags.js\`.`};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdModel(e){const n=e[0]?.toLowerCase();if(!n)return{message:"🤖 **LLM Model Operations**\n\nUsage:\n• `::model status` - Show model status\n• `::model download` - Download model\n• `::model clear` - Clear model cache"};switch(n){case"status":{if(!window.LLMController)return{error:!0,message:"❌ LLMController not available"};const a=window.LLMController.getStatus();let o=`🤖 **LLM Model Status**

`;return o+=`• Model: \`${a.modelId}\`
`,o+=`• Loaded: \`${a.isLoaded?"YES":"NO"}\`
`,o+=`• Cached: \`${a.isCached?"YES":"NO"}\`
`,o+=`• Generating: \`${a.isGenerating?"YES":"NO"}\`
`,o+=`• Message Count: \`${a.messageCount}\`
`,{message:o}}case"download":return window.LLMController?(window.LLMController.loadModel(),{message:"⏳ Starting model download..."}):{error:!0,message:"❌ LLMController not available"};case"clear":return{message:`⚠️ **Clear Model Cache**

Clearing browser cache requires manual action:
1. Open DevTools (F12)
2. Application → Storage → Cache Storage
3. Delete \`webllm/model\``};default:return{error:!0,message:`❌ Unknown action: \`${n}\``}}}static cmdReload(){return setTimeout(()=>{window.location.reload()},500),{message:"🔄 Reloading page..."}}static cmdExport(){const e=document.getElementById("chat-messages");if(!e)return{error:!0,message:"❌ Chat canvas not found"};const a=Array.from(e.children).map(p=>({type:p.tagName.toLowerCase().includes("prompt")?"user":"assistant",message:p.getAttribute("message"),timestamp:p.getAttribute("timestamp")})),o=JSON.stringify(a,null,2),r=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(r),c=document.createElement("a");return c.href=s,c.download=`chat-export-${Date.now()}.json`,c.click(),URL.revokeObjectURL(s),{message:`✅ Exported ${a.length} messages`}}static cmdTheme(e){const n=e[0]?.toLowerCase();return!n||!["dark","light"].includes(n)?{message:"🎨 **Theme Toggle**\n\nUsage: `::theme dark|light`"}:(localStorage.setItem("theme",n),{message:`🎨 Theme set to **${n}**

⚠️ Theme switching not yet implemented in UI.`})}static cmdAuth(e){if(!e)return{error:!0,message:"❌ Not authenticated"};let n="Unknown",a=0;if(typeof e.class=="string"){const r=je(e.class);r&&(n=r.desc,a=r.value)}else typeof e.class=="object"&&(n=e.class.desc||"Unknown",a=e.class.value||0);let o=`🔐 **Authentication Status**

`;return o+=`• Email: \`${e.email}\`
`,o+=`• Name: \`${e.first} ${e.last}\`
`,o+=`• Role: \`${e.class}\`
`,o+=`• Role Description: \`${n}\`
`,o+=`• Role Value: \`${a}\`
`,o+=`• Company: \`${e.company||"N/A"}\`
`,o+=`• Status: \`${e.status||"Unknown"}\`
`,{message:o}}}const _n=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"}));function mn(){return`
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
  `}function hn(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const t=localStorage.getItem(T.FF_SSE_LS_TOKEN),e=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!t,hasMvvTs:!!e});const n=document.getElementById("splash-loader"),a=document.getElementById("splash-actions");t?(console.log("[SplashRoute] Auth token found → HOME"),l.publish(i.ROUTE_NAV,{route:"home"})):e?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),l.publish(i.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),n&&(n.style.display="none"),a&&(a.style.display="flex"),document.querySelectorAll("[data-route]").forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${s}`),l.publish(i.ROUTE_NAV,{route:s})})}))},4e3)}const rt=Object.freeze(Object.defineProperty({__proto__:null,init:hn,render:mn},Symbol.toStringTag,{value:"Module"}));function Ce(t){return t=String(t),Math.abs(t.split("").reduce((e,n)=>(e<<5)-e+n.charCodeAt(0)|0,0))}function fn(){return`
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
  `}function vn(){console.log("[SigninRoute] Initialized");const t=document.getElementById("loginForm"),e=document.getElementById("email"),n=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const r=n.type==="password"?"text":"password";n.type=r}),t?.addEventListener("submit",async r=>{r.preventDefault();const s=e.value.trim(),c=n.value;bn(s,e)&&En(c,n)&&await yn(s,c)}),document.getElementById("link--uc__underline")?.addEventListener("click",r=>{r.preventDefault(),l.publish(i.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",r=>{r.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),l.publish(i.ROUTE_NAV,{route:"signup"})})}function bn(t,e){if(!t)return ge(e,f.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,a=(t.match(/\./g)||[]).length;return n!==1||a<1?(ge(e,f.get("validation_email_invalid")),!1):!0}function En(t,e){return t?t.length<10?(ge(e,f.get("validation_password_min_length")),!1):!0:(ge(e,f.get("validation_password_required")),!1)}function ge(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function yn(t,e){const n=document.querySelector(".btn");n.disabled=!0,n.textContent=f.get("loading_signing_in");try{const a=Ce(e),o=await z.doSignin(t,a);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(f.get("success_welcome_back"),"success"),l.publish(i.AUTH_SIGNIN_SUCCESS,{entity:z.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(f.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||f.get("error_signin_failed"),"danger"),n.disabled=!1,n.textContent=f.get("sign_in").toUpperCase())}catch(a){console.error("[SigninRoute] Sign in error:",a),typeof neodigmToast<"u"&&neodigmToast.q(a.message||f.get("error_network"),"danger"),n.disabled=!1,n.textContent=f.get("sign_in").toUpperCase(),l.publish(i.AUTH_SIGNIN_FAIL,{message:a.message})}}const Sn=Object.freeze(Object.defineProperty({__proto__:null,init:vn,render:fn},Symbol.toStringTag,{value:"Module"}));function st(t){const e=[];return t.length<10&&e.push("at least 10 characters"),/[a-z]/.test(t)||e.push("1 lowercase"),/[A-Z]/.test(t)||e.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t)||e.push("1 special character"),/[^\x00-\x7F]/.test(t)&&e.push("ASCII characters only"),e}function it(t){return t.length===0?"":t.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":t.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function An(){return`
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
  `}function wn(){console.log("[SignupRoute] Initialized");const t=document.getElementById("signupForm"),e=t.querySelector('button[type="submit"]');Ye("togglePassword","password","eyeIcon"),Ye("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",a=>{a.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),l.publish(i.ROUTE_NAV,{route:"signin"})}),t.addEventListener("submit",async a=>{a.preventDefault();const o=document.getElementById("first").value.trim(),r=document.getElementById("last").value.trim(),s=document.getElementById("email").value.trim(),c=document.getElementById("company").value.trim(),p=document.getElementById("phone").value.trim(),_=document.getElementById("password").value,y=document.getElementById("confirmPassword").value,b=document.getElementById("first"),m=document.getElementById("last"),S=document.getElementById("email"),O=document.getElementById("password"),u=document.getElementById("confirmPassword");if(We(o,b,f.get("validation_first_name_required"))&&We(r,m,f.get("validation_last_name_required"))&&Tn(s,S)&&Cn(_,O)){if(_!==y){Q(u,f.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=f.get("loading_creating_account"),await Rn(o,r,s,c,p,_)}})}function Ye(t,e,n){const a=document.getElementById(t),o=document.getElementById(e),r=document.getElementById(n);!a||!o||!r||a.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function We(t,e,n){return t?!0:(Q(e,n),!1)}function Tn(t,e){if(!t)return Q(e,f.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,a=(t.match(/\./g)||[]).length;return n!==1||a<1?(Q(e,f.get("validation_email_invalid")),!1):!0}function Cn(t,e){if(!t)return Q(e,f.get("validation_password_required")),!1;const n=st(t);return n.length>0?(Q(e,it(n)),!1):!0}function Q(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Rn(t,e,n,a,o,r){const s=document.querySelector('button[type="submit"]');try{const c=Ce(r),p={email:n,hash:c,first:t,last:e};a&&(p.company=a),o&&(p.phone=o);const _=await z.doSignup(p);if(_.ok)l.publish(i.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const y=_.error||_.message||f.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(y,"danger"),s.disabled=!1,s.textContent=f.get("create_account").toUpperCase(),l.publish(i.AUTH_SIGNUP_FAIL,{message:y})}}catch(c){console.error("[SignupRoute] Sign up error:",c),typeof neodigmToast<"u"&&neodigmToast.q(c.message||f.get("error_network"),"danger"),s.disabled=!1,s.textContent=f.get("create_account").toUpperCase(),l.publish(i.AUTH_SIGNUP_FAIL,{message:c.message})}}const On=Object.freeze(Object.defineProperty({__proto__:null,init:wn,render:An},Symbol.toStringTag,{value:"Module"}));function Nn(){return`
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
  `}function Ln(){console.log("[VerfLinkRoute] Initialized");const t=7200,e=Date.now(),n=document.getElementById("countdown-display");function a(){const r=Date.now()-e,s=Math.floor(r/1e3),c=Math.max(0,t-s),p=Math.floor(c/3600),_=Math.floor(c%3600/60),y=c%60,b=`${String(p).padStart(2,"0")}:${String(_).padStart(2,"0")}:${String(y).padStart(2,"0")}`;n&&(n.textContent=b,c<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),c===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),c===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}a();const o=setInterval(a,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const In=Object.freeze(Object.defineProperty({__proto__:null,init:Ln,render:Nn},Symbol.toStringTag,{value:"Module"})),kn="https://streamsyncengage-saas.onrender.com";class Mn{constructor(){this.baseUrl=kn}async request(e,n={}){const a=`${this.baseUrl}${e}`,o={"Content-Type":"application/json",...n.headers};try{const r=await fetch(a,{...n,headers:o});if(r.status===401||r.status===403){l.publish(i.AUTH_TOKEN_EXPIRED,{status:r.status,endpoint:e});const c=await r.json().catch(()=>({}));throw new Error(c.error||"Authentication failed")}const s=await r.json();return{ok:r.ok,status:r.status,data:s}}catch(r){throw console.error("API Request Error:",r),l.publish(i.APP_ERROR,{message:r.message,endpoint:e}),r}}async get(e){return this.request(e,{method:"GET"})}async post(e,n){return this.request(e,{method:"POST",body:JSON.stringify(n)})}async put(e,n){return this.request(e,{method:"PUT",body:JSON.stringify(n)})}async delete(e){return this.request(e,{method:"DELETE"})}async signin(e,n){return this.post("/api/acctEntity/signin",{email:e,hash:n})}async signup(e){return this.post("/api/acctEntity/signup",e)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(e){return this.post("/api/acctEntity/forgot",{email:e})}async resetHash(e,n){return this.post("/api/acctEntity/resethash",{email:e,hash:n})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,n){return this.put(`/api/acctEntity/${e}`,n)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get("/ping")}}const Pn=new Mn;function Un(){return`
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

  `}function Fn(){console.log("[ForgotRoute] Initialized");const t=document.getElementById("forgot-form"),e=document.getElementById("email");t?.addEventListener("submit",async n=>{n.preventDefault();const a=e.value.trim();xn(a,e)&&await Dn(a)})}function xn(t,e){if(!t)return Ke(e,f.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,a=(t.match(/\./g)||[]).length;return n!==1||a<1?(Ke(e,f.get("validation_email_invalid")),!1):!0}function Ke(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Dn(t){const e=document.querySelector(".btn");e.disabled=!0,e.textContent="SENDING...";try{const n=await Pn.forgotPassword(t);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(f.get("success_reset_link_sent"),"success"),l.publish(i.AUTH_FORGOT_SUCCESS,{email:t}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||f.get("error_signin_failed"),"danger"),e.disabled=!1,e.textContent=f.get("send_reset_link").toUpperCase())}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||f.get("error_network"),"danger"),e.disabled=!1,e.textContent=f.get("send_reset_link").toUpperCase()}}const Gn=Object.freeze(Object.defineProperty({__proto__:null,init:Fn,render:Un},Symbol.toStringTag,{value:"Module"}));function Vn(){return`
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
                value="${z.getEntity()?.email||""}"
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
  `}function Hn(){console.log("[ResethashRoute] Initialized");const t=document.getElementById("resethash-form"),e=t.querySelector('button[type="submit"]');Je("toggleNewPassword","new-password","eyeIconNew"),Je("toggleConfirmPassword","confirm-password","eyeIconConfirm"),t?.addEventListener("submit",async n=>{n.preventDefault();const a=t.email.value.trim(),o=t.newPassword.value,r=t.confirmPassword.value,s=document.getElementById("new-password"),c=document.getElementById("confirm-password");if(!o){J(s,f.get("validation_new_password_required"));return}const p=st(o);if(p.length>0){J(s,it(p));return}if(!r){J(c,f.get("validation_new_password_required"));return}if(o!==r){J(c,f.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=f.get("loading_resetting_password");try{const _=Ce(o),y=await z.doResetHash(a,_);y.ok?(typeof neodigmToast<"u"&&neodigmToast.q(f.get("success_password_reset"),"success"),l.publish(i.AUTH_RESETHASH_SUCCESS,{email:a})):(J(s,y.error||f.get("error_signin_failed")),e.disabled=!1,e.textContent=f.get("update_password").toUpperCase())}catch(_){console.error("[ResethashRoute] Reset password error:",_),J(s,_.message||f.get("error_network")),e.disabled=!1,e.textContent=f.get("update_password").toUpperCase()}})}function Je(t,e,n){const a=document.getElementById(t),o=document.getElementById(e),r=document.getElementById(n);!a||!o||!r||a.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function J(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}const Bn=Object.freeze(Object.defineProperty({__proto__:null,init:Hn,render:Vn},Symbol.toStringTag,{value:"Module"}));class pe{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"SILOS",caption:"Silos",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Data silo management",secondary:[{token:"CACHE",caption:"Cache",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Cache management and statistics",secondary:[]},{token:"LIFECYCLE",caption:"Lifecycle",enabled:!0,icon:"fas fa-recycle",admin_role:!1,tagline:"Data lifecycle and retention policies",secondary:[]}]},{token:"NOTIFICATIONS",caption:"Notifications",enabled:!0,icon:"fas fa-bell",admin_role:!1,tagline:"Notification management",secondary:[{token:"BELL_DRAWER",caption:"Bell Drawer",enabled:!0,icon:"fas fa-inbox",admin_role:!1,tagline:"Notification drawer configuration",secondary:[]},{token:"WEB_HOOKS",caption:"Web Hooks",enabled:!0,icon:"fas fa-webhook",admin_role:!1,tagline:"Webhook configuration and monitoring",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"fas fa-chart-line",admin_role:!1,tagline:"User engagement tools",secondary:[{token:"AB_TESTS",caption:"A/B Tests",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"FEEDBACK",caption:"Feedback",enabled:!0,icon:"fas fa-comments",admin_role:!1,tagline:"User feedback collection",secondary:[]},{token:"GUIDED_TOURS",caption:"Guided Tours",enabled:!0,icon:"fas fa-route",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"fas fa-clipboard-list",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]},{token:"SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"fas fa-images",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"SURVEYS",caption:"Surveys",enabled:!0,icon:"fas fa-poll",admin_role:!1,tagline:"Survey campaigns and analytics",secondary:[]},{token:"VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"fas fa-voicemail",admin_role:!1,tagline:"Voice message management",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#n(e){if(!e)return e;const n=e.token.toLowerCase(),a=`nav_${n}`,o=`nav_${n}_tagline`,r=f.get(a)||e.caption,s=f.get(o)||e.tagline;return{...e,caption:r,tagline:s,secondary:e.secondary?e.secondary.map(c=>this.#n(c)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(n=>this.#n(n)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const e=this.getPrimaryNav(),n=[];return e.forEach(a=>{n.push(a),a.secondary&&a.secondary.length>0&&n.push(...a.secondary)}),n}static getNavByToken(e){return this.getFlattenedNav().find(a=>a.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const n=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,a=await fetch(`${e}/coreMeta?meta_token=${n}`);if(!a.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${a.status}), using static config`),this.getPrimaryNav();const o=await a.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${n}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(n){return console.error("[NavMetaManager] Error fetching from coreMeta:",n),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:pe});class $n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const e=pe.getPrimaryNav();e&&e.length>0?(this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const e=this.getAttribute("data-buttons");if(e)try{this.buttons=JSON.parse(e);const n=this.buttons.find(a=>a.selected);this.selectedPrimaryToken=n?n.token:this.buttons[0]?.token||null}catch(n){console.error("[M5TPrimaryNav] Error parsing buttons:",n),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(n=>n.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,n){if(n==="primary"){const a=this.buttons.find(o=>o.token===e);return{caption:a?.caption||"",tagline:a?.tagline||""}}else for(const a of this.buttons)if(a.secondary){const o=a.secondary.find(r=>r.token===e);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const e=this.getSecondaryButtons(),n=e.length>0;this.shadowRoot.innerHTML=`
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
          grid-template-areas: "logo ${this.buttons.map((a,o)=>`btn${o}`).join(" ")}";
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
          ${this.buttons.map((a,o)=>this.renderButton(a,o,"primary")).join("")}
        </nav>
        <nav class="secondary-nav">
          ${n?e.map((a,o)=>this.renderButton(a,o,"secondary")).join(""):""}
        </nav>
      </div>
    `}renderButton(e,n,a="primary"){const o=a==="primary"?e.token===this.selectedPrimaryToken:!1,r=typeof e.count=="number"&&e.count!==null&&e.count!==void 0,s=e.icon&&e.icon.trim()!=="",c=e.tagline&&e.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${e.token}"
        data-level="${a}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?"":"disabled"}
        ${c?`title="${e.tagline}"`:""}
        style="grid-area: ${a==="primary"?`btn${n}`:"auto"}"
      >
        ${s?`<i class="${e.icon} nav-button-icon"></i>`:""}
        <span>${e.caption}</span>
        ${r?`<span class="count-badge">${e.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(a=>{const o=a.getAttribute("data-token"),r=a.getAttribute("data-level");a.addEventListener("click",s=>{o&&!s.currentTarget.disabled&&!this.longTapFired&&(r==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),a.addEventListener("dblclick",s=>{if(o&&!s.currentTarget.disabled){const c=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:r,caption:c.caption,tagline:c.tagline,timestamp:Date.now()}}))}}),a.addEventListener("mouseenter",s=>{if(o&&!s.currentTarget.disabled){const c=this.getButtonData(o,r);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:c.caption,tagline:c.tagline,action:"enter",timestamp:Date.now()}}))}}),a.addEventListener("mouseleave",s=>{if(o&&!s.currentTarget.disabled){const c=this.getButtonData(o,r);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:c.caption,tagline:c.tagline,action:"leave",timestamp:Date.now()}}))}}),a.addEventListener("mousedown",s=>{o&&!s.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const c=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:r,caption:c.caption,tagline:c.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),a.addEventListener("mouseup",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),a.addEventListener("mouseleave",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const n=this.shadowRoot.querySelector(".logo");n&&n.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(e){const n=this.buttons.find(o=>o.token===e),a=this.getButtonData(e,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,level:"primary",caption:a.caption,tagline:a.tagline,hasSecondary:(n?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){const n=this.getButtonData(e,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:n.caption,tagline:n.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,n,a="primary"){let o;a==="primary"?o=this.buttons.find(r=>r.token===e):o=this.getSecondaryButtons().find(s=>s.token===e),o&&(o.count=n,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",$n);class zn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp"]}attributeChangedCallback(e,n,a){n!==a&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const e=this.getAttribute("timestamp");return e||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}escapeHtml(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}render(){const e=this.getMessage(),n=this.getTimestamp(),a=this.shouldShowTimestamp();this.shadowRoot.innerHTML=`
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
      ${a?`<div class="bubble-timestamp">${this.escapeHtml(n)}</div>`:""}
    `}}customElements.define("m5t-chat-prompt",zn);let le=null,ve=null;async function qn(){return le||(ve||(ve=G(()=>import("https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/+esm"),[]).then(t=>{const e=t.default;return le=e({html:!1,breaks:!0,linkify:!0,typographer:!0}),le})),ve)}class jn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp","avatar","show-avatar"]}attributeChangedCallback(e,n,a){n!==a&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const e=this.getAttribute("timestamp");return e||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}getAvatar(){return this.getAttribute("avatar")||""}shouldShowAvatar(){return this.getAttribute("show-avatar")==="true"&&this.getAvatar()}escapeHtml(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}async renderMarkdown(e){return(await qn()).render(e)}async render(){const e=this.getMessage(),n=this.getTimestamp(),a=this.shouldShowTimestamp(),o=this.getAvatar(),r=this.shouldShowAvatar(),s=await this.renderMarkdown(e);this.shadowRoot.innerHTML=`
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
          ${a?`<div class="bubble-timestamp">${this.escapeHtml(n)}</div>`:""}
        </div>
      </div>
    `}}customElements.define("m5t-chat-response",jn);class Yn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.attachEventListeners()}getPlaceholder(){return this.getAttribute("placeholder")||"Type your message..."}getMaxRows(){return parseInt(this.getAttribute("max-rows"))||5}render(){const e=this.getPlaceholder(),n=this.getMaxRows();this.shadowRoot.innerHTML=`
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
          placeholder="${e}"
          rows="1"
        ></textarea>

        <button class="send-btn" id="send-btn" title="Send (Enter)">
          <!-- Placeholder: Blue square -->
        </button>
      </div>
    `}attachEventListeners(){const e=this.shadowRoot.getElementById("prompt-textarea"),n=this.shadowRoot.getElementById("send-btn"),a=this.shadowRoot.getElementById("cancel-btn");!e||!n||!a||(e.addEventListener("input",()=>{this.autoExpandTextarea(e)}),e.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this.handleSend())}),n.addEventListener("click",()=>{this.handleSend()}),a.addEventListener("click",()=>{this.handleCancel()}))}autoExpandTextarea(e){e.style.height="auto",e.style.height=e.scrollHeight+"px"}handleSend(){const e=this.shadowRoot.getElementById("prompt-textarea");if(!e)return;const n=e.value.trim();if(!n){console.warn("[M5TChatPromptArea] Cannot send empty message");return}const a=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:n,timestamp:a,pubsubTopic:"CONVERSATION.PROMPT.AGENT_CANVAS"};console.log("[M5TChatPromptArea] Dispatching message-sent event:",o),e.value="",e.style.height="auto",this.dispatchEvent(new CustomEvent("message-sent",{bubbles:!0,composed:!0,detail:o}))}handleCancel(){const e=this.shadowRoot.getElementById("prompt-textarea");e&&(e.value="",e.style.height="auto",console.log("[M5TChatPromptArea] Input cancelled"),this.dispatchEvent(new CustomEvent("message-cancelled",{bubbles:!0,composed:!0})))}getMessage(){const e=this.shadowRoot.getElementById("prompt-textarea");return e?e.value:""}setMessage(e){const n=this.shadowRoot.getElementById("prompt-textarea");n&&(n.value=e,this.autoExpandTextarea(n))}clear(){this.handleCancel()}focus(){const e=this.shadowRoot.getElementById("prompt-textarea");e&&e.focus()}}customElements.define("m5t-chat-prompt-area",Yn);const Qe="llm-status";pe.setAppToken("client-saas");function Wn(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-buttons='${pe.getPrimaryNavJSON()}'
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
  `}function Kn(){console.log("[HomeRoute] Initialized"),l.subscribe(i.CANVAS_DO_SCROLL,(t,e)=>{console.log("[HomeRoute] CANVAS.DO.SCROLL triggered"),Jn()}),l.subscribe(i.LLM_STATUS,(t,e)=>{console.log("[HomeRoute] LLM_STATUS:",e),e&&e.text&&l.publish(i.CONVERSATION_RESPONSE_CANVAS,j({id:Qe,turnId:Qe,role:k.ASSISTANT,source:q.SYSTEM,text:`🔄 ${e.text}`,phase:P.DELTA,meta:{progress:e.progressPercent}}))})}function Jn(){setTimeout(()=>{const t=document.getElementById("chat-messages");t?(t.scrollTo({top:0,behavior:"smooth"}),console.log("[HomeRoute] Scrolled chat-messages to bottom (top: 0 with column-reverse)")):console.warn("[HomeRoute] chat-messages element not found")},80)}function Re(t,e="user",n="canvas"){const a=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:t,timestamp:a};if(e==="user"||e==="prompt")switch(n.toUpperCase()){case"CANVAS":l.publish(i.CONVERSATION_PROMPT_CANVAS,o);break;case"AGENT":l.publish(i.CONVERSATION_PROMPT_AGENT,o);break;case"AGENT_CANVAS":l.publish(i.CONVERSATION_PROMPT_AGENT_CANVAS,o);break;case"STAGE":l.publish(i.CONVERSATION_PROMPT_STAGE,o);break;default:l.publish(i.CONVERSATION_PROMPT_CANVAS,o)}else switch(n.toUpperCase()){case"CANVAS":l.publish(i.CONVERSATION_RESPONSE_CANVAS,o);break;case"WORKFLOW":l.publish(i.CONVERSATION_RESPONSE_WORKFLOW,o);break;default:l.publish(i.CONVERSATION_RESPONSE_CANVAS,o)}}function Qn(t=10,e=500){const n=["Hey, how's it going?","Can you help me with something?","What's the weather like today?","I need assistance with my account","Tell me a joke!","How do I reset my password?","What are your hours?","Thanks for your help!","I have a question about billing","Can you explain this feature?","How do I upgrade my plan?","What's new in the latest update?","I'm having trouble logging in","Where can I find the settings?","How secure is my data?","Do you offer customer support?","What payment methods do you accept?","Can I cancel my subscription?","How do I export my data?","Is there a mobile app?"],a=["I'm doing great! How can I help you today?","Of course! I'd be happy to assist you.","Let me check that for you...","Here's what I found:","That's a great question!","I can help you with that.","Let me walk you through the steps.","You're very welcome!","I understand your concern. Let me explain...","That feature is located in the settings menu.","Your account is fully secured with encryption.","We're available 24/7 to help you!","We accept all major credit cards and PayPal.","You can upgrade anytime from your account settings.","The latest update includes several new features!","Try resetting your password using the forgot password link.","Your data is encrypted and stored securely.","Yes! Our mobile app is available for iOS and Android.","You can export your data from the account settings.","Absolutely! You can cancel anytime with no fees."];let o=0;const r=setInterval(()=>{if(o>=t){clearInterval(r),console.log(`[Test] Generated ${t} random bubbles`);return}const s=Math.random()>.5,c=s?"user":"assistant",p=s?n:a,_=p[Math.floor(Math.random()*p.length)];Re(_,c),o++,console.log(`[Test] Added bubble ${o}/${t} (${c})`)},e)}let oe=null;function Xn(t=1e3){if(oe){console.log("[Test] Bubble stream already running. Stop it first with stopBubbleStream()");return}console.log("[Test] Starting continuous bubble stream..."),oe=setInterval(()=>{const e=Math.random()>.5,n=e?["Quick message!","Another one!","Test bubble","Hello there!","Random user text"]:["Response here","Got it!","Processing...","Here's the answer","Understood!"],a=n[Math.floor(Math.random()*n.length)];Re(a,e?"user":"assistant")},t)}function Zn(){oe?(clearInterval(oe),oe=null,console.log("[Test] Bubble stream stopped")):console.log("[Test] No bubble stream running")}function ea(){const t=document.getElementById("chat-messages");t&&(t.innerHTML="",console.log("[Test] All bubbles cleared"))}window.addChatBubble=Re;window.generateRandomBubbles=Qn;window.startBubbleStream=Xn;window.stopBubbleStream=Zn;window.clearAllBubbles=ea;console.log("[HomeRoute] Test functions available:");console.log("  - window.generateRandomBubbles(count, delay) - Generate N bubbles with delay");console.log("  - window.startBubbleStream(delayMs) - Continuous bubble generation");console.log("  - window.stopBubbleStream() - Stop continuous generation");console.log("  - window.clearAllBubbles() - Remove all bubbles");console.log("  - window.addChatBubble(message, type) - Add single bubble");const ta=Object.freeze(Object.defineProperty({__proto__:null,init:Kn,render:Wn},Symbol.toStringTag,{value:"Module"}));function na(){return`
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
  `}function aa(){console.log("[SignoutRoute] Initialized");const t=document.getElementById("confirm-signout-btn");t?.addEventListener("click",async()=>{t.disabled=!0,t.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await z.doSignout()})}const oa=Object.freeze(Object.defineProperty({__proto__:null,init:aa,render:na},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
