/*! For license information please see main.b23d4934.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,l={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:l,_owner:o.current}}t.Fragment=l,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function x(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var b=y.prototype=new x;b.constructor=y,g(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,l={},a=null,o=null;if(null!=t)for(i in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!j.hasOwnProperty(i)&&(l[i]=t[i]);var s=arguments.length-2;if(1===s)l.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===l[i]&&(l[i]=s[i]);return{$$typeof:n,type:e,key:a,ref:o,props:l,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,l,a){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===l?"."+z(s,0):l,w(a)?(i="",null!=e&&(i=e.replace(_,"$&/")+"/"),P(a,t,i,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(s=0,l=""===l?".":l+":",w(e))for(var u=0;u<e.length;u++){var c=l+z(o=e[u],u);s+=P(o,t,i,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(o=e.next()).done;)s+=P(o=o.value,t,i,c=l+z(o,u++),a);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},M={transition:null},R={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:M,ReactCurrentOwner:S};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=y,t.StrictMode=l,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=O,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),l=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=S.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!j.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:n,type:e.type,key:l,ref:a,props:i,_owner:o}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,n){return L.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,n){return L.current.useReducer(e,t,n)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return L.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return L.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<l(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var o=2*(r+1)-1,s=e[o],u=o+1,c=e[u];if(0>l(s,n))u<i&&0>l(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[o]=n,r=o);else{if(!(u<i&&0>l(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function l(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,b(e),!g)if(null!==r(u))g=!0,M(k);else{var t=r(c);null!==t&&R(w,t.startTime-e)}}function k(e,n){g=!1,m&&(m=!1,x(E),E=-1),h=!0;var l=p;try{for(b(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!P());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var o=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof o?f.callback=o:f===r(u)&&i(u),b(n)}else i(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&R(w,d.startTime-n),s=!1}return s}finally{f=null,p=l,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,C=null,E=-1,_=5,z=-1;function P(){return!(t.unstable_now()-z<_)}function T(){if(null!==C){var e=t.unstable_now();z=e;var n=!0;try{n=C(!0,e)}finally{n?S():(j=!1,C=null)}}else j=!1}if("function"===typeof y)S=function(){y(T)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,L=N.port2;N.port1.onmessage=T,S=function(){L.postMessage(null)}}else S=function(){v(T,0)};function M(e){C=e,j||(j=!0,S())}function R(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,M(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,l){var a=t.unstable_now();switch("object"===typeof l&&null!==l?l="number"===typeof(l=l.delay)&&0<l?a+l:a:l=a,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:l,expirationTime:o=l+o,sortIndex:-1},l>a?(e.sortIndex=l,n(c,e),null===r(u)&&e===r(c)&&(m?(x(E),E=-1):m=!0,R(w,l-a))):(e.sortIndex=o,n(u,e),g||h||(g=!0,M(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),s=0;s<l.length;s++){var u=l[s];if(!o(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,o={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(o[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function g(e,t,n,r,i,l,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=m.hasOwnProperty(t)?m[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,x);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,x);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,x);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),_=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),L=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var M=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var $,D=Object.assign;function I(e){if(void 0===$)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$=t&&t[1]||""}return"\n"+$+e}var F=!1;function A(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),l=r.stack.split("\n"),a=i.length-1,o=l.length-1;1<=a&&0<=o&&i[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==l[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==l[o]){var s="\n"+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=o);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function H(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=A(e.type,!1);case 11:return e=A(e.type.render,!1);case 1:return e=A(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return V(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,l.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=U(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function X(e,t){Y(e,t);var n=U(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,U(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+U(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(l(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(l(92));if(te(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:U(n)}}function le(e,t){var n=U(t.value),r=U(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function oe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?oe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(l(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(l(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(l(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ce(e){if(e=yi(e)){if("function"!==typeof ke)throw Error(l(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?je?je.push(e):je=[e]:Se=e}function _e(){if(Se){var e=Se,t=je;if(je=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function ze(e,t){return e(t)}function Pe(){}var Te=!1;function Ne(e,t,n){if(Te)return e(t,n);Te=!0;try{return ze(e,t,n)}finally{Te=!1,(null!==Se||null!==je)&&(Pe(),_e())}}function Le(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(l(231,t,typeof n));return n}var Me=!1;if(c)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Me=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ce){Me=!1}function Oe(e,t,n,r,i,l,a,o,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var $e=!1,De=null,Ie=!1,Fe=null,Ae={onError:function(e){$e=!0,De=e}};function He(e,t,n,r,i,l,a,o,s){$e=!1,De=null,Oe.apply(Ae,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ue(e){if(Ve(e)!==e)throw Error(l(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ue(i),e;if(a===r)return Ue(i),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(3!==n.tag)throw Error(l(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=i.unstable_scheduleCallback,qe=i.unstable_cancelCallback,Ze=i.unstable_shouldYield,Ge=i.unstable_requestPaint,Ye=i.unstable_now,Xe=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,lt=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ot(e)/st|0)|0},ot=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=dt(o):0!==(l&=a)&&(r=dt(l))}else 0!==(a=n&~i)?r=dt(a):0!==l&&(r=dt(l));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(l=t&-t)||16===i&&0!==(4194240&l)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Ct,Et=!1,_t=[],zt=null,Pt=null,Tt=null,Nt=new Map,Lt=new Map,Mt=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lt.delete(t.pointerId)}}function $t(e,t,n,r,i,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Dt(e){var t=xi(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Ft(e,t,n){It(e)&&n.delete(t)}function At(){Et=!1,null!==zt&&It(zt)&&(zt=null),null!==Pt&&It(Pt)&&(Pt=null),null!==Tt&&It(Tt)&&(Tt=null),Nt.forEach(Ft),Lt.forEach(Ft)}function Ht(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,At)))}function Vt(e){function t(t){return Ht(t,e)}if(0<_t.length){Ht(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Ht(zt,e),null!==Pt&&Ht(Pt,e),null!==Tt&&Ht(Tt,e),Nt.forEach(t),Lt.forEach(t),n=0;n<Mt.length;n++)(r=Mt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&null===(n=Mt[0]).blockedOn;)Dt(n),null===n.blockedOn&&Mt.shift()}var Bt=b.ReactCurrentBatchConfig,Ut=!0;function Wt(e,t,n,r){var i=yt,l=Bt.transition;Bt.transition=null;try{yt=1,Qt(e,t,n,r)}finally{yt=i,Bt.transition=l}}function Kt(e,t,n,r){var i=yt,l=Bt.transition;Bt.transition=null;try{yt=4,Qt(e,t,n,r)}finally{yt=i,Bt.transition=l}}function Qt(e,t,n,r){if(Ut){var i=Zt(e,t,n,r);if(null===i)Ur(e,t,r,qt,n),Ot(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=$t(zt,e,t,n,r,i),!0;case"dragenter":return Pt=$t(Pt,e,t,n,r,i),!0;case"mouseover":return Tt=$t(Tt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Nt.set(l,$t(Nt.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Lt.set(l,$t(Lt.get(l)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Ot(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==i;){var l=yi(i);if(null!==l&&wt(l),null===(l=Zt(e,t,n,r))&&Ur(e,t,r,qt,n),l===i)break;i=l}null!==i&&r.stopPropagation()}else Ur(e,t,r,null,n)}}var qt=null;function Zt(e,t,n,r){if(qt=null,null!==(e=xi(e=we(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Yt=null,Xt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Xt,r=n.length,i="value"in Yt?Yt.value:Yt.textContent,l=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[l-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function ln(e){function t(t,n,r,i,l){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,on,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=ln(un),dn=D({},un,{view:0,detail:0}),fn=ln(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,on=e.screenY-sn.screenY):on=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:on}}),hn=ln(pn),gn=ln(D({},pn,{dataTransfer:0})),mn=ln(D({},dn,{relatedTarget:0})),vn=ln(D({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),xn=D({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=ln(xn),bn=ln(D({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return jn}var En=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=ln(En),zn=ln(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=ln(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=ln(D({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ln=ln(Nn),Mn=[9,13,27,32],Rn=c&&"CompositionEvent"in window,On=null;c&&"documentMode"in document&&(On=document.documentMode);var $n=c&&"TextEvent"in window&&!On,Dn=c&&(!Rn||On&&8<On&&11>=On),In=String.fromCharCode(32),Fn=!1;function An(e,t){switch(e){case"keyup":return-1!==Mn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Wn(e,t,n,r){Ee(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function qn(e){Ir(e,0)}function Zn(e){if(Q(bi(e)))return e}function Gn(e,t){if("change"===e)return t}var Yn=!1;if(c){var Xn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Xn=Jn}else Xn=!1;Yn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Zn(Qn)){var t=[];Wn(t,Qn,e,we(e)),Ne(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Zn(Qn)}function lr(e,t){if("click"===e)return Zn(t)}function ar(e,t){if("input"===e||"change"===e)return Zn(t)}var or="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(or(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!or(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=void 0===r.end?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=cr(n,l);var a=cr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=c&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,xr=null,yr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==q(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},xr&&sr(xr,r)||(xr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}c&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),_r=Cr("animationiteration"),zr=Cr("animationstart"),Pr=Cr("transitionend"),Tr=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){Tr.set(e,t),s(t,[e])}for(var Mr=0;Mr<Nr.length;Mr++){var Rr=Nr[Mr];Lr(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Lr(Er,"onAnimationEnd"),Lr(_r,"onAnimationIteration"),Lr(zr,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$r=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,o,s,u){if(He.apply(this,arguments),$e){if(!$e)throw Error(l(198));var c=De;$e=!1,De=null,Ie||(Ie=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],s=o.instance,u=o.currentTarget;if(o=o.listener,s!==l&&i.isPropagationStopped())break e;Dr(i,o,u),l=s}else for(a=0;a<r.length;a++){if(s=(o=r[a]).instance,u=o.currentTarget,o=o.listener,s!==l&&i.isPropagationStopped())break e;Dr(i,o,u),l=s}}}if(Ie)throw e=Fe,Ie=!1,Fe=null,e}function Fr(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function Ar(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Hr]){e[Hr]=!0,a.forEach((function(t){"selectionchange"!==t&&($r.has(t)||Ar(t,!1,e),Ar(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Hr]||(t[Hr]=!0,Ar("selectionchange",!1,t))}}function Br(e,t,n,r){switch(Gt(t)){case 1:var i=Wt;break;case 4:i=Kt;break;default:i=Qt}n=i.bind(null,t,n,e),i=void 0,!Me||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ur(e,t,n,r,i){var l=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=xi(o)))return;if(5===(s=a.tag)||6===s){r=l=a;continue e}o=o.parentNode}}r=r.return}Ne((function(){var r=l,i=we(n),a=[];e:{var o=Tr.get(e);if(void 0!==o){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=mn;break;case"focusout":u="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Er:case _r:case zr:s=vn;break;case Pr:s=Tn;break;case"scroll":s=fn;break;case"wheel":s=Ln;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==o?o+"Capture":null:o;c=[];for(var p,h=r;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==f&&(null!=(g=Le(h,f))&&c.push(Wr(h,g,p)))),d)break;h=h.return}0<c.length&&(o=new s(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!xi(u)&&!u[hi])&&(s||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?xi(u):null)&&(u!==(d=Ve(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?o:bi(s),p=null==u?o:bi(u),(o=new c(g,h+"leave",s,n,i)).target=d,o.relatedTarget=p,g=null,xi(i)===r&&((c=new c(f,h+"enter",u,n,i)).target=p,c.relatedTarget=d,g=c),d=g,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Qr(p))h++;for(p=0,g=f;g;g=Qr(g))p++;for(;0<h-p;)c=Qr(c),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&qr(a,o,s,c,!1),null!==u&&null!==d&&qr(a,d,u,c,!0)}if("select"===(s=(o=r?bi(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===s&&"file"===o.type)var m=Gn;else if(Un(o))if(Yn)m=ar;else{m=ir;var v=rr}else(s=o.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(m=lr);switch(m&&(m=m(e,r))?Wn(a,m,n,i):(v&&v(e,o,r),"focusout"===e&&(v=o._wrapperState)&&v.controlled&&"number"===o.type&&ee(o,"number",o.value)),v=r?bi(r):window,e){case"focusin":(Un(v)||"true"===v.contentEditable)&&(mr=v,vr=r,xr=null);break;case"focusout":xr=vr=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,br(a,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":br(a,n,i)}var x;if(Rn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Vn?An(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Dn&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Vn&&(x=en()):(Xt="value"in(Yt=i)?Yt.value:Yt.textContent,Vn=!0)),0<(v=Kr(r,y)).length&&(y=new bn(y,e,null,n,i),a.push({event:y,listeners:v}),x?y.data=x:null!==(x=Hn(n))&&(y.data=x))),(x=$n?function(e,t){switch(e){case"compositionend":return Hn(t);case"keypress":return 32!==t.which?null:(Fn=!0,In);case"textInput":return(e=t.data)===In&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!Rn&&An(e,t)?(e=en(),Jt=Xt=Yt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=x))}Ir(a,t)}))}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,l=i.stateNode;5===i.tag&&null!==l&&(i=l,null!=(l=Le(e,n))&&r.unshift(Wr(e,l,i)),null!=(l=Le(e,t))&&r.push(Wr(e,l,i))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,i){for(var l=t._reactName,a=[];null!==n&&n!==r;){var o=n,s=o.alternate,u=o.stateNode;if(null!==s&&s===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(s=Le(n,l))&&a.unshift(Wr(n,s,o)):i||null!=(s=Le(n,l))&&a.push(Wr(n,s,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Zr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Yr(e){return("string"===typeof e?e:""+e).replace(Zr,"\n").replace(Gr,"")}function Xr(e,t,n){if(t=Yr(t),Yr(e)!==t&&n)throw Error(l(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,li="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof li?function(e){return li.resolve(null).then(e).catch(oi)}:ri;function oi(e){setTimeout((function(){throw e}))}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Vt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Vt(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,pi="__reactProps$"+di,hi="__reactContainer$"+di,gi="__reactEvents$"+di,mi="__reactListeners$"+di,vi="__reactHandles$"+di;function xi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[fi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[fi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(l(33))}function wi(e){return e[pi]||null}var ki=[],Si=-1;function ji(e){return{current:e}}function Ci(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ei(e,t){Si++,ki[Si]=e.current,e.current=t}var _i={},zi=ji(_i),Pi=ji(!1),Ti=_i;function Ni(e,t){var n=e.type.contextTypes;if(!n)return _i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,l={};for(i in n)l[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Li(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Mi(){Ci(Pi),Ci(zi)}function Ri(e,t,n){if(zi.current!==_i)throw Error(l(168));Ei(zi,t),Ei(Pi,n)}function Oi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(l(108,B(e)||"Unknown",i));return D({},n,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_i,Ti=zi.current,Ei(zi,e),Ei(Pi,Pi.current),!0}function Di(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=Oi(e,t,Ti),r.__reactInternalMemoizedMergedChildContext=e,Ci(Pi),Ci(zi),Ei(zi,e)):Ci(Pi),Ei(Pi,n)}var Ii=null,Fi=!1,Ai=!1;function Hi(e){null===Ii?Ii=[e]:Ii.push(e)}function Vi(){if(!Ai&&null!==Ii){Ai=!0;var e=0,t=yt;try{var n=Ii;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ii=null,Fi=!1}catch(i){throw null!==Ii&&(Ii=Ii.slice(e+1)),Qe(Je,Vi),i}finally{yt=t,Ai=!1}}return null}var Bi=[],Ui=0,Wi=null,Ki=0,Qi=[],qi=0,Zi=null,Gi=1,Yi="";function Xi(e,t){Bi[Ui++]=Ki,Bi[Ui++]=Wi,Wi=e,Ki=t}function Ji(e,t,n){Qi[qi++]=Gi,Qi[qi++]=Yi,Qi[qi++]=Zi,Zi=e;var r=Gi;e=Yi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var l=32-at(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Gi=1<<32-at(t)+i|n<<i|r,Yi=l+e}else Gi=1<<l|n<<i|r,Yi=e}function el(e){null!==e.return&&(Xi(e,1),Ji(e,1,0))}function tl(e){for(;e===Wi;)Wi=Bi[--Ui],Bi[Ui]=null,Ki=Bi[--Ui],Bi[Ui]=null;for(;e===Zi;)Zi=Qi[--qi],Qi[qi]=null,Yi=Qi[--qi],Qi[qi]=null,Gi=Qi[--qi],Qi[qi]=null}var nl=null,rl=null,il=!1,ll=null;function al(e,t){var n=Nu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ol(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,nl=e,rl=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,nl=e,rl=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Zi?{id:Gi,overflow:Yi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,nl=e,rl=null,!0);default:return!1}}function sl(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ul(e){if(il){var t=rl;if(t){var n=t;if(!ol(e,t)){if(sl(e))throw Error(l(418));t=ui(n.nextSibling);var r=nl;t&&ol(e,t)?al(r,n):(e.flags=-4097&e.flags|2,il=!1,nl=e)}}else{if(sl(e))throw Error(l(418));e.flags=-4097&e.flags|2,il=!1,nl=e}}}function cl(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;nl=e}function dl(e){if(e!==nl)return!1;if(!il)return cl(e),il=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=rl)){if(sl(e))throw fl(),Error(l(418));for(;t;)al(e,t),t=ui(t.nextSibling)}if(cl(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){rl=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}rl=null}}else rl=nl?ui(e.stateNode.nextSibling):null;return!0}function fl(){for(var e=rl;e;)e=ui(e.nextSibling)}function pl(){rl=nl=null,il=!1}function hl(e){null===ll?ll=[e]:ll.push(e)}var gl=b.ReactCurrentBatchConfig;function ml(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function vl(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xl(e){return(0,e._init)(e._payload)}function yl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Mu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var l=n.type;return l===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===l||"object"===typeof l&&null!==l&&l.$$typeof===L&&xl(l)===t.type)?((r=i(t,n.props)).ref=ml(e,t,n),r.return=e,r):((r=Ru(n.type,n.key,n.props,null,e.mode,r)).ref=ml(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,l){return null===t||7!==t.tag?((t=Ou(n,e.mode,r,l)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ru(t.type,t.key,t.props,null,e.mode,n)).ref=ml(e,null,t),n.return=e,n;case k:return(t=Iu(t,e.mode,n)).return=e,t;case L:return f(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Ou(t,e.mode,n,null)).return=e,t;vl(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case k:return n.key===i?c(e,t,n,r):null;case L:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||O(n))return null!==i?null:d(e,t,n,r,null);vl(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case L:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||O(r))return d(t,e=e.get(n)||null,r,i,null);vl(t,r)}return null}function g(i,l,o,s){for(var u=null,c=null,d=l,g=l=0,m=null;null!==d&&g<o.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(i,d,o[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(i,d),l=a(v,l,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===o.length)return n(i,d),il&&Xi(i,g),u;if(null===d){for(;g<o.length;g++)null!==(d=f(i,o[g],s))&&(l=a(d,l,g),null===c?u=d:c.sibling=d,c=d);return il&&Xi(i,g),u}for(d=r(i,d);g<o.length;g++)null!==(m=h(d,i,g,o[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),l=a(m,l,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach((function(e){return t(i,e)})),il&&Xi(i,g),u}function m(i,o,s,u){var c=O(s);if("function"!==typeof c)throw Error(l(150));if(null==(s=c.call(s)))throw Error(l(151));for(var d=c=null,g=o,m=o=0,v=null,x=s.next();null!==g&&!x.done;m++,x=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var y=p(i,g,x.value,u);if(null===y){null===g&&(g=v);break}e&&g&&null===y.alternate&&t(i,g),o=a(y,o,m),null===d?c=y:d.sibling=y,d=y,g=v}if(x.done)return n(i,g),il&&Xi(i,m),c;if(null===g){for(;!x.done;m++,x=s.next())null!==(x=f(i,x.value,u))&&(o=a(x,o,m),null===d?c=x:d.sibling=x,d=x);return il&&Xi(i,m),c}for(g=r(i,g);!x.done;m++,x=s.next())null!==(x=h(g,i,m,x.value,u))&&(e&&null!==x.alternate&&g.delete(null===x.key?m:x.key),o=a(x,o,m),null===d?c=x:d.sibling=x,d=x);return e&&g.forEach((function(e){return t(i,e)})),il&&Xi(i,m),c}return function e(r,l,a,s){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=l;null!==c;){if(c.key===u){if((u=a.type)===S){if(7===c.tag){n(r,c.sibling),(l=i(c,a.props.children)).return=r,r=l;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===L&&xl(u)===c.type){n(r,c.sibling),(l=i(c,a.props)).ref=ml(r,c,a),l.return=r,r=l;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===S?((l=Ou(a.props.children,r.mode,s,a.key)).return=r,r=l):((s=Ru(a.type,a.key,a.props,null,r.mode,s)).ref=ml(r,l,a),s.return=r,r=s)}return o(r);case k:e:{for(c=a.key;null!==l;){if(l.key===c){if(4===l.tag&&l.stateNode.containerInfo===a.containerInfo&&l.stateNode.implementation===a.implementation){n(r,l.sibling),(l=i(l,a.children||[])).return=r,r=l;break e}n(r,l);break}t(r,l),l=l.sibling}(l=Iu(a,r.mode,s)).return=r,r=l}return o(r);case L:return e(r,l,(c=a._init)(a._payload),s)}if(te(a))return g(r,l,a,s);if(O(a))return m(r,l,a,s);vl(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==l&&6===l.tag?(n(r,l.sibling),(l=i(l,a)).return=r,r=l):(n(r,l),(l=Du(a,r.mode,s)).return=r,r=l),o(r)):n(r,l)}}var bl=yl(!0),wl=yl(!1),kl=ji(null),Sl=null,jl=null,Cl=null;function El(){Cl=jl=Sl=null}function _l(e){var t=kl.current;Ci(kl),e._currentValue=t}function zl(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pl(e,t){Sl=e,Cl=jl=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yo=!0),e.firstContext=null)}function Tl(e){var t=e._currentValue;if(Cl!==e)if(e={context:e,memoizedValue:t,next:null},null===jl){if(null===Sl)throw Error(l(308));jl=e,Sl.dependencies={lanes:0,firstContext:e}}else jl=jl.next=e;return t}var Nl=null;function Ll(e){null===Nl?Nl=[e]:Nl.push(e)}function Ml(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ll(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rl(e,r)}function Rl(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ol=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Il(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fl(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rl(e,n)}return null===(i=r.interleaved)?(t.next=t,Ll(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rl(e,n)}function Al(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}function Hl(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,l=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===l?i=l=a:l=l.next=a,n=n.next}while(null!==n);null===l?i=l=t:l=l.next=t}else i=l=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vl(e,t,n,r){var i=e.updateQueue;Ol=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var s=o,u=s.next;s.next=null,null===a?l=u:a.next=u,a=s;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=s))}if(null!==l){var d=i.baseState;for(a=0,c=u=s=null,o=l;;){var f=o.lane,p=o.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var h=e,g=o;switch(f=t,p=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:Ol=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(f=o).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===l&&(i.shared.lanes=0);$s|=a,e.lanes=a,e.memoizedState=d}}function Bl(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(l(191,i));i.call(r)}}}var Ul={},Wl=ji(Ul),Kl=ji(Ul),Ql=ji(Ul);function ql(e){if(e===Ul)throw Error(l(174));return e}function Zl(e,t){switch(Ei(Ql,t),Ei(Kl,e),Ei(Wl,Ul),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Wl),Ei(Wl,t)}function Gl(){Ci(Wl),Ci(Kl),Ci(Ql)}function Yl(e){ql(Ql.current);var t=ql(Wl.current),n=se(t,e.type);t!==n&&(Ei(Kl,e),Ei(Wl,n))}function Xl(e){Kl.current===e&&(Ci(Wl),Ci(Kl))}var Jl=ji(0);function ea(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ta=[];function na(){for(var e=0;e<ta.length;e++)ta[e]._workInProgressVersionPrimary=null;ta.length=0}var ra=b.ReactCurrentDispatcher,ia=b.ReactCurrentBatchConfig,la=0,aa=null,oa=null,sa=null,ua=!1,ca=!1,da=0,fa=0;function pa(){throw Error(l(321))}function ha(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!or(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(la=a,aa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=null===e||null===e.memoizedState?Xa:Ja,e=n(r,i),ca){a=0;do{if(ca=!1,da=0,25<=a)throw Error(l(301));a+=1,sa=oa=null,t.updateQueue=null,ra.current=eo,e=n(r,i)}while(ca)}if(ra.current=Ya,t=null!==oa&&null!==oa.next,la=0,sa=oa=aa=null,ua=!1,t)throw Error(l(300));return e}function ma(){var e=0!==da;return da=0,e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===sa?aa.memoizedState=sa=e:sa=sa.next=e,sa}function xa(){if(null===oa){var e=aa.alternate;e=null!==e?e.memoizedState:null}else e=oa.next;var t=null===sa?aa.memoizedState:sa.next;if(null!==t)sa=t,oa=e;else{if(null===e)throw Error(l(310));e={memoizedState:(oa=e).memoizedState,baseState:oa.baseState,baseQueue:oa.baseQueue,queue:oa.queue,next:null},null===sa?aa.memoizedState=sa=e:sa=sa.next=e}return sa}function ya(e,t){return"function"===typeof t?t(e):t}function ba(e){var t=xa(),n=t.queue;if(null===n)throw Error(l(311));n.lastRenderedReducer=e;var r=oa,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=o=null,u=null,c=a;do{var d=c.lane;if((la&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,o=r):u=u.next=f,aa.lanes|=d,$s|=d}c=c.next}while(null!==c&&c!==a);null===u?o=r:u.next=s,or(r,t.memoizedState)||(yo=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,aa.lanes|=a,$s|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{a=e(a,o.action),o=o.next}while(o!==i);or(a,t.memoizedState)||(yo=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function Sa(e,t){var n=aa,r=xa(),i=t(),a=!or(r.memoizedState,i);if(a&&(r.memoizedState=i,yo=!0),r=r.queue,Oa(Ea.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==sa&&1&sa.memoizedState.tag){if(n.flags|=2048,Ta(9,Ca.bind(null,n,r,i,t),void 0,null),null===Ps)throw Error(l(349));0!==(30&la)||ja(n,t,i)}return i}function ja(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=aa.updateQueue)?(t={lastEffect:null,stores:null},aa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,_a(t)&&za(e)}function Ea(e,t,n){return n((function(){_a(t)&&za(e)}))}function _a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!or(e,n)}catch(r){return!0}}function za(e){var t=Rl(e,1);null!==t&&nu(t,e,1,-1)}function Pa(e){var t=va();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},t.queue=e,e=e.dispatch=Qa.bind(null,aa,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=aa.updateQueue)?(t={lastEffect:null,stores:null},aa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Na(){return xa().memoizedState}function La(e,t,n,r){var i=va();aa.flags|=e,i.memoizedState=Ta(1|t,n,void 0,void 0===r?null:r)}function Ma(e,t,n,r){var i=xa();r=void 0===r?null:r;var l=void 0;if(null!==oa){var a=oa.memoizedState;if(l=a.destroy,null!==r&&ha(r,a.deps))return void(i.memoizedState=Ta(t,n,l,r))}aa.flags|=e,i.memoizedState=Ta(1|t,n,l,r)}function Ra(e,t){return La(8390656,8,e,t)}function Oa(e,t){return Ma(2048,8,e,t)}function $a(e,t){return Ma(4,2,e,t)}function Da(e,t){return Ma(4,4,e,t)}function Ia(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fa(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4,4,Ia.bind(null,t,e),n)}function Aa(){}function Ha(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Va(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ba(e,t,n){return 0===(21&la)?(e.baseState&&(e.baseState=!1,yo=!0),e.memoizedState=n):(or(n,t)||(n=gt(),aa.lanes|=n,$s|=n,e.baseState=!0),t)}function Ua(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{yt=n,ia.transition=r}}function Wa(){return xa().memoizedState}function Ka(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qa(e))Za(t,n);else if(null!==(n=Ml(e,t,n,r))){nu(n,e,r,eu()),Ga(n,t,r)}}function Qa(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qa(e))Za(t,i);else{var l=e.alternate;if(0===e.lanes&&(null===l||0===l.lanes)&&null!==(l=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=l(a,n);if(i.hasEagerState=!0,i.eagerState=o,or(o,a)){var s=t.interleaved;return null===s?(i.next=i,Ll(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Ml(e,t,i,r))&&(nu(n,e,r,i=eu()),Ga(n,t,r))}}function qa(e){var t=e.alternate;return e===aa||null!==t&&t===aa}function Za(e,t){ca=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ga(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}var Ya={readContext:Tl,useCallback:pa,useContext:pa,useEffect:pa,useImperativeHandle:pa,useInsertionEffect:pa,useLayoutEffect:pa,useMemo:pa,useReducer:pa,useRef:pa,useState:pa,useDebugValue:pa,useDeferredValue:pa,useTransition:pa,useMutableSource:pa,useSyncExternalStore:pa,useId:pa,unstable_isNewReconciler:!1},Xa={readContext:Tl,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:Tl,useEffect:Ra,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,La(4194308,4,Ia.bind(null,t,e),n)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){return La(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,aa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},va().memoizedState=e},useState:Pa,useDebugValue:Aa,useDeferredValue:function(e){return va().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=Ua.bind(null,e[1]),va().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=aa,i=va();if(il){if(void 0===n)throw Error(l(407));n=n()}else{if(n=t(),null===Ps)throw Error(l(349));0!==(30&la)||ja(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ra(Ea.bind(null,r,a,e),[e]),r.flags|=2048,Ta(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=va(),t=Ps.identifierPrefix;if(il){var n=Yi;t=":"+t+"R"+(n=(Gi&~(1<<32-at(Gi)-1)).toString(32)+n),0<(n=da++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ja={readContext:Tl,useCallback:Ha,useContext:Tl,useEffect:Oa,useImperativeHandle:Fa,useInsertionEffect:$a,useLayoutEffect:Da,useMemo:Va,useReducer:ba,useRef:Na,useState:function(){return ba(ya)},useDebugValue:Aa,useDeferredValue:function(e){return Ba(xa(),oa.memoizedState,e)},useTransition:function(){return[ba(ya)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Sa,useId:Wa,unstable_isNewReconciler:!1},eo={readContext:Tl,useCallback:Ha,useContext:Tl,useEffect:Oa,useImperativeHandle:Fa,useInsertionEffect:$a,useLayoutEffect:Da,useMemo:Va,useReducer:wa,useRef:Na,useState:function(){return wa(ya)},useDebugValue:Aa,useDeferredValue:function(e){var t=xa();return null===oa?t.memoizedState=e:Ba(t,oa.memoizedState,e)},useTransition:function(){return[wa(ya)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Sa,useId:Wa,unstable_isNewReconciler:!1};function to(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function no(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),l=Il(r,i);l.payload=t,void 0!==n&&null!==n&&(l.callback=n),null!==(t=Fl(e,l,i))&&(nu(t,e,i,r),Al(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),l=Il(r,i);l.tag=1,l.payload=t,void 0!==n&&null!==n&&(l.callback=n),null!==(t=Fl(e,l,i))&&(nu(t,e,i,r),Al(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Il(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fl(e,i,r))&&(nu(t,e,r,n),Al(t,e,r))}};function io(e,t,n,r,i,l,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,l))}function lo(e,t,n){var r=!1,i=_i,l=t.contextType;return"object"===typeof l&&null!==l?l=Tl(l):(i=Li(t)?Ti:zi.current,l=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ni(e,i):_i),t=new t(n,l),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ao(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function oo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$l(e);var l=t.contextType;"object"===typeof l&&null!==l?i.context=Tl(l):(l=Li(t)?Ti:zi.current,i.context=Ni(e,l)),i.state=e.memoizedState,"function"===typeof(l=t.getDerivedStateFromProps)&&(no(e,t,l,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ro.enqueueReplaceState(i,i.state,null),Vl(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function so(e,t){try{var n="",r=t;do{n+=H(r),r=r.return}while(r);var i=n}catch(l){i="\nError generating stack: "+l.message+"\n"+l.stack}return{value:e,source:t,stack:i,digest:null}}function uo(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function co(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fo="function"===typeof WeakMap?WeakMap:Map;function po(e,t,n){(n=Il(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Us||(Us=!0,Ws=r),co(0,t)},n}function ho(e,t,n){(n=Il(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){co(0,t)}}var l=e.stateNode;return null!==l&&"function"===typeof l.componentDidCatch&&(n.callback=function(){co(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function go(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fo;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function mo(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vo(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Il(-1,1)).tag=2,Fl(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xo=b.ReactCurrentOwner,yo=!1;function bo(e,t,n,r){t.child=null===e?wl(t,null,n,r):bl(t,e.child,n,r)}function wo(e,t,n,r,i){n=n.render;var l=t.ref;return Pl(t,i),r=ga(e,t,n,r,l,i),n=ma(),null===e||yo?(il&&n&&el(t),t.flags|=1,bo(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Uo(e,t,i))}function ko(e,t,n,r,i){if(null===e){var l=n.type;return"function"!==typeof l||Lu(l)||void 0!==l.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ru(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,So(e,t,l,r,i))}if(l=e.child,0===(e.lanes&i)){var a=l.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Uo(e,t,i)}return t.flags|=1,(e=Mu(l,r)).ref=t.ref,e.return=t,t.child=e}function So(e,t,n,r,i){if(null!==e){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref){if(yo=!1,t.pendingProps=r=l,0===(e.lanes&i))return t.lanes=e.lanes,Uo(e,t,i);0!==(131072&e.flags)&&(yo=!0)}}return Eo(e,t,n,r,i)}function jo(e,t,n){var r=t.pendingProps,i=r.children,l=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ei(Ms,Ls),Ls|=n;else{if(0===(1073741824&n))return e=null!==l?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ei(Ms,Ls),Ls|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==l?l.baseLanes:n,Ei(Ms,Ls),Ls|=r}else null!==l?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ei(Ms,Ls),Ls|=r;return bo(e,t,i,n),t.child}function Co(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eo(e,t,n,r,i){var l=Li(n)?Ti:zi.current;return l=Ni(t,l),Pl(t,i),n=ga(e,t,n,r,l,i),r=ma(),null===e||yo?(il&&r&&el(t),t.flags|=1,bo(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Uo(e,t,i))}function _o(e,t,n,r,i){if(Li(n)){var l=!0;$i(t)}else l=!1;if(Pl(t,i),null===t.stateNode)Bo(e,t),lo(t,n,r),oo(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var s=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Tl(u):u=Ni(t,u=Li(n)?Ti:zi.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==r||s!==u)&&ao(t,a,r,u),Ol=!1;var f=t.memoizedState;a.state=f,Vl(t,r,a,i),s=t.memoizedState,o!==r||f!==s||Pi.current||Ol?("function"===typeof c&&(no(t,n,c,r),s=t.memoizedState),(o=Ol||io(t,n,o,r,f,s,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=o):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Dl(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:to(t.type,o),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Tl(s):s=Ni(t,s=Li(n)?Ti:zi.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||f!==s)&&ao(t,a,r,s),Ol=!1,f=t.memoizedState,a.state=f,Vl(t,r,a,i);var h=t.memoizedState;o!==d||f!==h||Pi.current||Ol?("function"===typeof p&&(no(t,n,p,r),h=t.memoizedState),(u=Ol||io(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zo(e,t,n,r,l,i)}function zo(e,t,n,r,i,l){Co(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Di(t,n,!1),Uo(e,t,l);r=t.stateNode,xo.current=t;var o=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=bl(t,e.child,null,l),t.child=bl(t,null,o,l)):bo(e,t,o,l),t.memoizedState=r.state,i&&Di(t,n,!0),t.child}function Po(e){var t=e.stateNode;t.pendingContext?Ri(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ri(0,t.context,!1),Zl(e,t.containerInfo)}function To(e,t,n,r,i){return pl(),hl(i),t.flags|=256,bo(e,t,n,r),t.child}var No,Lo,Mo,Ro,Oo={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Do(e,t,n){var r,i=t.pendingProps,a=Jl.current,o=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ei(Jl,1&a),null===e)return ul(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=$u(s,i,0,null),e=Ou(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$o(n),t.memoizedState=Oo,e):Io(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,o){if(n)return 256&t.flags?(t.flags&=-257,Fo(e,t,o,r=uo(Error(l(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=$u({mode:"visible",children:r.children},i,0,null),(a=Ou(a,i,o,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&bl(t,e.child,null,o),t.child.memoizedState=$o(o),t.memoizedState=Oo,a);if(0===(1&t.mode))return Fo(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Fo(e,t,o,r=uo(a=Error(l(419)),r,void 0))}if(s=0!==(o&e.childLanes),yo||s){if(null!==(r=Ps)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|o))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Rl(e,i),nu(r,e,i,-1))}return gu(),Fo(e,t,o,r=uo(Error(l(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,rl=ui(i.nextSibling),nl=t,il=!0,ll=null,null!==e&&(Qi[qi++]=Gi,Qi[qi++]=Yi,Qi[qi++]=Zi,Gi=e.id,Yi=e.overflow,Zi=t),t=Io(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(o){o=i.fallback,s=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=Mu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?o=Mu(r,o):(o=Ou(o,s,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=null===(s=e.child.memoizedState)?$o(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Oo,i}return e=(o=e.child).sibling,i=Mu(o,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Io(e,t){return(t=$u({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fo(e,t,n,r){return null!==r&&hl(r),bl(t,e.child,null,n),(e=Io(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ao(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zl(e.return,t,n)}function Ho(e,t,n,r,i){var l=e.memoizedState;null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Vo(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(bo(e,t,r.children,n),0!==(2&(r=Jl.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ao(e,n,t);else if(19===e.tag)Ao(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ei(Jl,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ea(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ho(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ea(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ho(t,!0,n,null,l);break;case"together":Ho(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Uo(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),$s|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(l(153));if(null!==t.child){for(n=Mu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Mu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wo(e,t){if(!il)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ko(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qo(e,t,n){var r=t.pendingProps;switch(tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ko(t),null;case 1:case 17:return Li(t.type)&&Mi(),Ko(t),null;case 3:return r=t.stateNode,Gl(),Ci(Pi),Ci(zi),na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(dl(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ll&&(au(ll),ll=null))),Lo(e,t),Ko(t),null;case 5:Xl(t);var i=ql(Ql.current);if(n=t.type,null!==e&&null!=t.stateNode)Mo(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(l(166));return Ko(t),null}if(e=ql(Wl.current),dl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fi]=t,r[pi]=a,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Or.length;i++)Fr(Or[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":G(r,a),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Fr("invalid",r);break;case"textarea":ie(r,a),Fr("invalid",r)}for(var s in xe(n,a),i=null,a)if(a.hasOwnProperty(s)){var u=a[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,u,e),i=["children",""+u]):o.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":K(r),J(r,a,!0);break;case"textarea":K(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=oe(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fi]=t,e[pi]=r,No(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Or.length;i++)Fr(Or[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":G(e,r),i=Z(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(a in xe(n,i),u=i)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?me(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(o.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Fr("scroll",e):null!=c&&y(e,a,c,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+U(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ko(t),null;case 6:if(e&&null!=t.stateNode)Ro(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(l(166));if(n=ql(Ql.current),ql(Wl.current),dl(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(a=r.nodeValue!==n)&&null!==(e=nl))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Ko(t),null;case 13:if(Ci(Jl),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(il&&null!==rl&&0!==(1&t.mode)&&0===(128&t.flags))fl(),pl(),t.flags|=98560,a=!1;else if(a=dl(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(l(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(l(317));a[fi]=t}else pl(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ko(t),a=!1}else null!==ll&&(au(ll),ll=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Jl.current)?0===Rs&&(Rs=3):gu())),null!==t.updateQueue&&(t.flags|=4),Ko(t),null);case 4:return Gl(),Lo(e,t),null===e&&Vr(t.stateNode.containerInfo),Ko(t),null;case 10:return _l(t.type._context),Ko(t),null;case 19:if(Ci(Jl),null===(a=t.memoizedState))return Ko(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Wo(a,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ea(e))){for(t.flags|=128,Wo(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ei(Jl,1&Jl.current|2),t.child}e=e.sibling}null!==a.tail&&Ye()>Vs&&(t.flags|=128,r=!0,Wo(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ea(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wo(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!il)return Ko(t),null}else 2*Ye()-a.renderingStartTime>Vs&&1073741824!==n&&(t.flags|=128,r=!0,Wo(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ye(),t.sibling=null,n=Jl.current,Ei(Jl,r?1&n|2:1&n),t):(Ko(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ls)&&(Ko(t),6&t.subtreeFlags&&(t.flags|=8192)):Ko(t),null;case 24:case 25:return null}throw Error(l(156,t.tag))}function qo(e,t){switch(tl(t),t.tag){case 1:return Li(t.type)&&Mi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Gl(),Ci(Pi),Ci(zi),na(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xl(t),null;case 13:if(Ci(Jl),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(l(340));pl()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Jl),null;case 4:return Gl(),null;case 10:return _l(t.type._context),null;case 22:case 23:return du(),null;default:return null}}No=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Lo=function(){},Mo=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ql(Wl.current);var l,a=null;switch(n){case"input":i=Z(e,i),r=Z(e,r),a=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in xe(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(o.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(o.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ro=function(e,t,n,r){n!==r&&(t.flags|=4)};var Zo=!1,Go=!1,Yo="function"===typeof WeakSet?WeakSet:Set,Xo=null;function Jo(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){ju(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){ju(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,void 0!==l&&es(t,n,l)}i=i.next}while(i!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ls(e){var t=e.alternate;null!==t&&(e.alternate=null,ls(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[pi],delete t[gi],delete t[mi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function os(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(lt&&"function"===typeof lt.onCommitFiberUnmount)try{lt.onCommitFiberUnmount(it,n)}catch(o){}switch(n.tag){case 5:Go||Jo(n,t);case 6:var r=cs,i=ds;cs=null,fs(e,t,n),ds=i,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Vt(e)):si(cs,n.stateNode));break;case 4:r=cs,i=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=i;break;case 0:case 11:case 14:case 15:if(!Go&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,void 0!==a&&(0!==(2&l)||0!==(4&l))&&es(n,t,a),i=i.next}while(i!==r)}fs(e,t,n);break;case 1:if(!Go&&(Jo(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ju(n,t,o)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Go=(r=Go)||null!==n.memoizedState,fs(e,t,n),Go=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Yo),t.forEach((function(t){var r=zu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(l(160));ps(a,o,i),cs=null,ds=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){ju(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(m){ju(e,e.return,m)}try{ns(5,e,e.return)}catch(m){ju(e,e.return,m)}}break;case 1:gs(t,e),vs(e),512&r&&null!==n&&Jo(n,n.return);break;case 5:if(gs(t,e),vs(e),512&r&&null!==n&&Jo(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(m){ju(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,o=null!==n?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===a.type&&null!=a.name&&Y(i,a),ye(s,o);var c=ye(s,a);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];"style"===d?me(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):y(i,d,f,c)}switch(s){case"input":X(i,a);break;case"textarea":le(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[pi]=a}catch(m){ju(e,e.return,m)}}break;case 6:if(gs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(m){ju(e,e.return,m)}}break;case 3:if(gs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(m){ju(e,e.return,m)}break;case 4:default:gs(t,e),vs(e);break;case 13:gs(t,e),vs(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Hs=Ye())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Go=(c=Go)||d,gs(t,e),Go=c):gs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Xo=e,d=e.child;null!==d;){for(f=Xo=d;null!==Xo;){switch(h=(p=Xo).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jo(p,p.return);var g=p.stateNode;if("function"===typeof g.componentWillUnmount){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){ju(r,n,m)}}break;case 5:Jo(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xo=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=f.stateNode,o=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ge("display",o))}catch(m){ju(e,e.return,m)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){ju(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gs(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),us(e,os(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,os(e),a);break;default:throw Error(l(161))}}catch(o){ju(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xs(e,t,n){Xo=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Xo;){var i=Xo,l=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Zo;if(!a){var o=i.alternate,s=null!==o&&null!==o.memoizedState||Go;o=Zo;var u=Go;if(Zo=a,(Go=s)&&!u)for(Xo=i;null!==Xo;)s=(a=Xo).child,22===a.tag&&null!==a.memoizedState?ks(i):null!==s?(s.return=a,Xo=s):ks(i);for(;null!==l;)Xo=l,ys(l,t,n),l=l.sibling;Xo=i,Zo=o,Go=u}bs(e)}else 0!==(8772&i.subtreeFlags)&&null!==l?(l.return=i,Xo=l):bs(e)}}function bs(e){for(;null!==Xo;){var t=Xo;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Go||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Go)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:to(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Bl(t,a,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Bl(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Vt(f)}}}break;default:throw Error(l(163))}Go||512&t.flags&&is(t)}catch(p){ju(t,t.return,p)}}if(t===e){Xo=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xo=n;break}Xo=t.return}}function ws(e){for(;null!==Xo;){var t=Xo;if(t===e){Xo=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xo=n;break}Xo=t.return}}function ks(e){for(;null!==Xo;){var t=Xo;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){ju(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(s){ju(t,i,s)}}var l=t.return;try{is(t)}catch(s){ju(t,l,s)}break;case 5:var a=t.return;try{is(t)}catch(s){ju(t,a,s)}}}catch(s){ju(t,t.return,s)}if(t===e){Xo=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Xo=o;break}Xo=t.return}}var Ss,js=Math.ceil,Cs=b.ReactCurrentDispatcher,Es=b.ReactCurrentOwner,_s=b.ReactCurrentBatchConfig,zs=0,Ps=null,Ts=null,Ns=0,Ls=0,Ms=ji(0),Rs=0,Os=null,$s=0,Ds=0,Is=0,Fs=null,As=null,Hs=0,Vs=1/0,Bs=null,Us=!1,Ws=null,Ks=null,Qs=!1,qs=null,Zs=0,Gs=0,Ys=null,Xs=-1,Js=0;function eu(){return 0!==(6&zs)?Ye():-1!==Xs?Xs:Xs=Ye()}function tu(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Ns?Ns&-Ns:null!==gl.transition?(0===Js&&(Js=gt()),Js):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Ys=null,Error(l(185));vt(e,n,r),0!==(2&zs)&&e===Ps||(e===Ps&&(0===(2&zs)&&(Ds|=n),4===Rs&&ou(e,Ns)),ru(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Vs=Ye()+500,Fi&&Vi()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-at(l),o=1<<a,s=i[a];-1===s?0!==(o&n)&&0===(o&r)||(i[a]=pt(o,t)):s<=t&&(e.expiredLanes|=o),l&=~o}}(e,t);var r=ft(e,e===Ps?Ns:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Fi=!0,Hi(e)}(su.bind(null,e)):Hi(su.bind(null,e)),ai((function(){0===(6&zs)&&Vi()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Xs=-1,Js=0,0!==(6&zs))throw Error(l(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mu(e,r);else{t=r;var i=zs;zs|=2;var a=hu();for(Ps===e&&Ns===t||(Bs=null,Vs=Ye()+500,fu(e,t));;)try{xu();break}catch(s){pu(e,s)}El(),Cs.current=a,zs=i,null!==Ts?t=0:(Ps=null,Ns=0,t=Rs)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=lu(e,i))),1===t)throw n=Os,fu(e,0),ou(e,r),ru(e,Ye()),n;if(6===t)ou(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!or(l(),i))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=mu(e,r))&&(0!==(a=ht(e))&&(r=a,t=lu(e,a))),1===t))throw n=Os,fu(e,0),ou(e,r),ru(e,Ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:case 5:wu(e,As,Bs);break;case 3:if(ou(e,r),(130023424&r)===r&&10<(t=Hs+500-Ye())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,As,Bs),t);break}wu(e,As,Bs);break;case 4:if(ou(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-at(r);a=1<<o,(o=t[o])>i&&(i=o),r&=~a}if(r=i,10<(r=(120>(r=Ye()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,As,Bs),r);break}wu(e,As,Bs);break;default:throw Error(l(329))}}}return ru(e,Ye()),e.callbackNode===n?iu.bind(null,e):null}function lu(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=mu(e,t))&&(t=As,As=n,null!==t&&au(t)),e}function au(e){null===As?As=e:As.push.apply(As,e)}function ou(e,t){for(t&=~Is,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&zs))throw Error(l(327));ku();var t=ft(e,0);if(0===(1&t))return ru(e,Ye()),null;var n=mu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=lu(e,r))}if(1===n)throw n=Os,fu(e,0),ou(e,t),ru(e,Ye()),n;if(6===n)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,As,Bs),ru(e,Ye()),null}function uu(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Vs=Ye()+500,Fi&&Vi())}}function cu(e){null!==qs&&0===qs.tag&&0===(6&zs)&&ku();var t=zs;zs|=1;var n=_s.transition,r=yt;try{if(_s.transition=null,yt=1,e)return e()}finally{yt=r,_s.transition=n,0===(6&(zs=t))&&Vi()}}function du(){Ls=Ms.current,Ci(Ms)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(tl(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Mi();break;case 3:Gl(),Ci(Pi),Ci(zi),na();break;case 5:Xl(r);break;case 4:Gl();break;case 13:case 19:Ci(Jl);break;case 10:_l(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Ts=e=Mu(e.current,null),Ns=Ls=t,Rs=0,Os=null,Is=Ds=$s=0,As=Fs=null,null!==Nl){for(t=0;t<Nl.length;t++)if(null!==(r=(n=Nl[t]).interleaved)){n.interleaved=null;var i=r.next,l=n.pending;if(null!==l){var a=l.next;l.next=i,r.next=a}n.pending=r}Nl=null}return e}function pu(e,t){for(;;){var n=Ts;try{if(El(),ra.current=Ya,ua){for(var r=aa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(la=0,sa=oa=aa=null,ca=!1,da=0,Es.current=null,null===n||null===n.return){Rs=1,Os=t,Ts=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=Ns,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=mo(o);if(null!==h){h.flags&=-257,vo(h,o,s,0,t),1&h.mode&&go(a,c,t),u=c;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(u),t.updateQueue=m}else g.add(u);break e}if(0===(1&t)){go(a,c,t),gu();break e}u=Error(l(426))}else if(il&&1&s.mode){var v=mo(o);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vo(v,o,s,0,t),hl(so(u,s));break e}}a=u=so(u,s),4!==Rs&&(Rs=2),null===Fs?Fs=[a]:Fs.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Hl(a,po(0,u,t));break e;case 1:s=u;var x=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof x.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Ks||!Ks.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Hl(a,ho(a,s,t));break e}}a=a.return}while(null!==a)}bu(n)}catch(b){t=b,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function hu(){var e=Cs.current;return Cs.current=Ya,null===e?Ya:e}function gu(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===Ps||0===(268435455&$s)&&0===(268435455&Ds)||ou(Ps,Ns)}function mu(e,t){var n=zs;zs|=2;var r=hu();for(Ps===e&&Ns===t||(Bs=null,fu(e,t));;)try{vu();break}catch(i){pu(e,i)}if(El(),zs=n,Cs.current=r,null!==Ts)throw Error(l(261));return Ps=null,Ns=0,Rs}function vu(){for(;null!==Ts;)yu(Ts)}function xu(){for(;null!==Ts&&!Ze();)yu(Ts)}function yu(e){var t=Ss(e.alternate,e,Ls);e.memoizedProps=e.pendingProps,null===t?bu(e):Ts=t,Es.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Qo(n,t,Ls)))return void(Ts=n)}else{if(null!==(n=qo(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Rs=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Rs&&(Rs=5)}function wu(e,t,n){var r=yt,i=_s.transition;try{_s.transition=null,yt=1,function(e,t,n,r){do{ku()}while(null!==qs);if(0!==(6&zs))throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}(e,a),e===Ps&&(Ts=Ps=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Pu(tt,(function(){return ku(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=_s.transition,_s.transition=null;var o=yt;yt=1;var s=zs;zs|=4,Es.current=null,function(e,t){if(ei=Ut,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var o=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(s=o+i),f!==a||0!==r&&3!==f.nodeType||(u=o+r),3===f.nodeType&&(o+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===i&&(s=o),p===a&&++d===r&&(u=o),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ut=!1,Xo=t;null!==Xo;)if(e=(t=Xo).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xo=e;else for(;null!==Xo;){t=Xo;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,x=t.stateNode,y=x.getSnapshotBeforeUpdate(t.elementType===t.type?m:to(t.type,m),v);x.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(l(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xo=e;break}Xo=t.return}g=ts,ts=!1}(e,n),ms(n,e),hr(ti),Ut=!!ei,ti=ei=null,e.current=n,xs(n,e,i),Ge(),zs=s,yt=o,_s.transition=a}else e.current=n;if(Qs&&(Qs=!1,qs=e,Zs=i),a=e.pendingLanes,0===a&&(Ks=null),function(e){if(lt&&"function"===typeof lt.onCommitFiberRoot)try{lt.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ye()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Us)throw Us=!1,e=Ws,Ws=null,e;0!==(1&Zs)&&0!==e.tag&&ku(),a=e.pendingLanes,0!==(1&a)?e===Ys?Gs++:(Gs=0,Ys=e):Gs=0,Vi()}(e,t,n,r)}finally{_s.transition=i,yt=r}return null}function ku(){if(null!==qs){var e=bt(Zs),t=_s.transition,n=yt;try{if(_s.transition=null,yt=16>e?16:e,null===qs)var r=!1;else{if(e=qs,qs=null,Zs=0,0!==(6&zs))throw Error(l(331));var i=zs;for(zs|=4,Xo=e.current;null!==Xo;){var a=Xo,o=a.child;if(0!==(16&Xo.flags)){var s=a.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Xo=c;null!==Xo;){var d=Xo;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var f=d.child;if(null!==f)f.return=d,Xo=f;else for(;null!==Xo;){var p=(d=Xo).sibling,h=d.return;if(ls(d),d===c){Xo=null;break}if(null!==p){p.return=h,Xo=p;break}Xo=h}}}var g=a.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Xo=a}}if(0!==(2064&a.subtreeFlags)&&null!==o)o.return=a,Xo=o;else e:for(;null!==Xo;){if(0!==(2048&(a=Xo).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var x=a.sibling;if(null!==x){x.return=a.return,Xo=x;break e}Xo=a.return}}var y=e.current;for(Xo=y;null!==Xo;){var b=(o=Xo).child;if(0!==(2064&o.subtreeFlags)&&null!==b)b.return=o,Xo=b;else e:for(o=y;null!==Xo;){if(0!==(2048&(s=Xo).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){ju(s,s.return,k)}if(s===o){Xo=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xo=w;break e}Xo=s.return}}if(zs=i,Vi(),lt&&"function"===typeof lt.onPostCommitFiberRoot)try{lt.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{yt=n,_s.transition=t}}return!1}function Su(e,t,n){e=Fl(e,t=po(0,t=so(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function ju(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Fl(t,e=ho(t,e=so(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Ns&n)===n&&(4===Rs||3===Rs&&(130023424&Ns)===Ns&&500>Ye()-Hs?fu(e,0):Is|=n),ru(e,t)}function Eu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Rl(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function zu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}null!==r&&r.delete(t),Eu(e,n)}function Pu(e,t){return Qe(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nu(e,t,n,r){return new Tu(e,t,n,r)}function Lu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Mu(e,t){var n=e.alternate;return null===n?((n=Nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ru(e,t,n,r,i,a){var o=2;if(r=e,"function"===typeof e)Lu(e)&&(o=1);else if("string"===typeof e)o=5;else e:switch(e){case S:return Ou(n.children,i,a,t);case j:o=8,i|=8;break;case C:return(e=Nu(12,n,t,2|i)).elementType=C,e.lanes=a,e;case P:return(e=Nu(13,n,t,i)).elementType=P,e.lanes=a,e;case T:return(e=Nu(19,n,t,i)).elementType=T,e.lanes=a,e;case M:return $u(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:o=10;break e;case _:o=9;break e;case z:o=11;break e;case N:o=14;break e;case L:o=16,r=null;break e}throw Error(l(130,null==e?e:typeof e,""))}return(t=Nu(o,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Ou(e,t,n,r){return(e=Nu(7,e,r,t)).lanes=n,e}function $u(e,t,n,r){return(e=Nu(22,e,r,t)).elementType=M,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=Nu(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Nu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,i,l,a,o,s){return e=new Fu(e,t,n,o,s),1===t?(t=1,!0===l&&(t|=8)):t=0,l=Nu(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(l),e}function Hu(e){if(!e)return _i;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Li(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(l(171))}if(1===e.tag){var n=e.type;if(Li(n))return Oi(e,n,t)}return t}function Vu(e,t,n,r,i,l,a,o,s){return(e=Au(n,r,!0,e,0,l,0,o,s)).context=Hu(null),n=e.current,(l=Il(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,Fl(n,l,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function Bu(e,t,n,r){var i=t.current,l=eu(),a=tu(i);return n=Hu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Il(l,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fl(i,t,a))&&(nu(e,i,a,l),Al(e,i,a)),a}function Uu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)yo=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yo=!1,function(e,t,n){switch(t.tag){case 3:Po(t),pl();break;case 5:Yl(t);break;case 1:Li(t.type)&&$i(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ei(kl,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ei(Jl,1&Jl.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Do(e,t,n):(Ei(Jl,1&Jl.current),null!==(e=Uo(e,t,n))?e.sibling:null);Ei(Jl,1&Jl.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Vo(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ei(Jl,Jl.current),r)break;return null;case 22:case 23:return t.lanes=0,jo(e,t,n)}return Uo(e,t,n)}(e,t,n);yo=0!==(131072&e.flags)}else yo=!1,il&&0!==(1048576&t.flags)&&Ji(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var i=Ni(t,zi.current);Pl(t,n),i=ga(null,t,r,e,i,n);var a=ma();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Li(r)?(a=!0,$i(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,$l(t),i.updater=ro,t.stateNode=i,i._reactInternals=t,oo(t,r,e,n),t=zo(null,t,r,!0,a,n)):(t.tag=0,il&&a&&el(t),bo(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Lu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===N)return 14}return 2}(r),e=to(r,e),i){case 0:t=Eo(null,t,r,e,n);break e;case 1:t=_o(null,t,r,e,n);break e;case 11:t=wo(null,t,r,e,n);break e;case 14:t=ko(null,t,r,to(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Eo(e,t,r,i=t.elementType===r?i:to(r,i),n);case 1:return r=t.type,i=t.pendingProps,_o(e,t,r,i=t.elementType===r?i:to(r,i),n);case 3:e:{if(Po(t),null===e)throw Error(l(387));r=t.pendingProps,i=(a=t.memoizedState).element,Dl(e,t),Vl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=To(e,t,r,n,i=so(Error(l(423)),t));break e}if(r!==i){t=To(e,t,r,n,i=so(Error(l(424)),t));break e}for(rl=ui(t.stateNode.containerInfo.firstChild),nl=t,il=!0,ll=null,n=wl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pl(),r===i){t=Uo(e,t,n);break e}bo(e,t,r,n)}t=t.child}return t;case 5:return Yl(t),null===e&&ul(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,o=i.children,ni(r,i)?o=null:null!==a&&ni(r,a)&&(t.flags|=32),Co(e,t),bo(e,t,o,n),t.child;case 6:return null===e&&ul(t),null;case 13:return Do(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=bl(t,null,r,n):bo(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wo(e,t,r,i=t.elementType===r?i:to(r,i),n);case 7:return bo(e,t,t.pendingProps,n),t.child;case 8:case 12:return bo(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Ei(kl,r._currentValue),r._currentValue=o,null!==a)if(or(a.value,o)){if(a.children===i.children&&!Pi.current){t=Uo(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){o=a.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Il(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),zl(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===a.tag)o=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(o=a.return))throw Error(l(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),zl(o,n,t),o=a.sibling}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}bo(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pl(t,n),r=r(i=Tl(i)),t.flags|=1,bo(e,t,r,n),t.child;case 14:return i=to(r=t.type,t.pendingProps),ko(e,t,r,i=to(r.type,i),n);case 15:return So(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:to(r,i),Bo(e,t),t.tag=1,Li(r)?(e=!0,$i(t)):e=!1,Pl(t,n),lo(t,r,i),oo(t,r,i,n),zo(null,t,r,!0,e,n);case 19:return Vo(e,t,n);case 22:return jo(e,t,n)}throw Error(l(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}function Zu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Yu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xu(){}function Ju(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if("function"===typeof i){var o=i;i=function(){var e=Uu(a);o.call(e)}}Bu(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var l=r;r=function(){var e=Uu(a);l.call(e)}}var a=Vu(t,r,e,0,null,!1,0,"",Xu);return e._reactRootContainer=a,e[hi]=a.current,Vr(8===e.nodeType?e.parentNode:e),cu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var o=r;r=function(){var e=Uu(s);o.call(e)}}var s=Au(e,0,!1,null,0,!1,0,"",Xu);return e._reactRootContainer=s,e[hi]=s.current,Vr(8===e.nodeType?e.parentNode:e),cu((function(){Bu(t,s,n,r)})),s}(n,t,e,i,r);return Uu(a)}Zu.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(l(409));Bu(e,t,null,null)},Zu.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Bu(null,e,null,null)})),t[hi]=null}},Zu.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&0!==t&&t<Mt[n].priority;n++);Mt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(xt(t,1|n),ru(t,Ye()),0===(6&zs)&&(Vs=Ye()+500,Vi()))}break;case 13:cu((function(){var t=Rl(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},kt=function(e){if(13===e.tag){var t=Rl(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Rl(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},jt=function(){return yt},Ct=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(l(90));Q(r),X(r,i)}}}break;case"textarea":le(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[yi,bi,wi,Ee,_e,uu]},tc={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),lt=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(l(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(l(299));var n=!1,r="",i=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Au(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Vr(8===e.nodeType?e.parentNode:e),new qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(l(188));throw e=Object.keys(e).join(","),Error(l(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Yu(t))throw Error(l(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(l(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",o=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=Vu(t,null,e,1,null!=n?n:null,i,0,a,o),e[hi]=t.current,Vr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zu(t)},t.render=function(e,t,n){if(!Yu(t))throw Error(l(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Yu(e))throw Error(l(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yu(n))throw Error(l(200));if(null==e||void 0===e._reactInternals)throw Error(l(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.create;function i(e,t,n){if(n||2===arguments.length)for(var r,i=0,l=t.length;i<l;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var l=n(324),a=n.n(l),o="-ms-",s="-moz-",u="-webkit-",c="comm",d="rule",f="decl",p="@keyframes",h=Math.abs,g=String.fromCharCode,m=Object.assign;function v(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function k(e,t,n){return e.slice(t,n)}function S(e){return e.length}function j(e){return e.length}function C(e,t){return t.push(e),e}function E(e,t){return e.filter((function(e){return!x(e,t)}))}var _=1,z=1,P=0,T=0,N=0,L="";function M(e,t,n,r,i,l,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:_,column:z,length:a,return:"",siblings:o}}function R(e,t){return m(M("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function O(e){for(;e.root;)e=R(e.root,{children:[e]});C(e,e.siblings)}function $(){return N=T>0?w(L,--T):0,z--,10===N&&(z=1,_--),N}function D(){return N=T<P?w(L,T++):0,z++,10===N&&(z=1,_++),N}function I(){return w(L,T)}function F(){return T}function A(e,t){return k(L,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V(e){return _=z=1,P=S(L=e),T=0,[]}function B(e){return L="",e}function U(e){return v(A(T-1,Q(91===e?e+2:40===e?e+1:e)))}function W(e){for(;(N=I())&&N<33;)D();return H(e)>2||H(N)>3?"":" "}function K(e,t){for(;--t&&D()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return A(e,F()+(t<6&&32==I()&&32==D()))}function Q(e){for(;D();)switch(N){case e:return T;case 34:case 39:34!==e&&39!==e&&Q(N);break;case 40:41===e&&Q(e);break;case 92:D()}return T}function q(e,t){for(;D()&&e+N!==57&&(e+N!==84||47!==I()););return"/*"+A(t,T-1)+"*"+g(47===e?e:D())}function Z(e){for(;!H(I());)D();return A(e,T)}function G(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Y(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case c:return"";case p:return e.return=e.value+"{"+G(e.children,r)+"}";case d:if(!S(e.value=e.props.join(",")))return""}return S(n=G(e.children,r))?e.return=e.value+"{"+n+"}":""}function X(e,t,n){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+s+e+o+e+e;case 5936:switch(w(e,t+11)){case 114:return u+e+o+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+o+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+o+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+o+e+e;case 6165:return u+e+o+"flex-"+e+e;case 5187:return u+e+y(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+o+"flex-$1$2")+e;case 5443:return u+e+o+"flex-item-"+y(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":o+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return u+e+o+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+o+y(e,"shrink","negative")+e;case 5292:return u+e+o+y(e,"basis","preferred-size")+e;case 6060:return u+"box-"+y(e,"-grow","")+u+e+o+y(e,"grow","positive")+e;case 4554:return u+y(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+o+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!x(e,/flex-|baseline/))return o+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return o+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,x(e.props,/grid-\w+-end/)}))?~b(e+(n=n[t].value),"span",0)?e:o+y(e,"-start","")+e+o+"grid-row-span:"+(~b(n,"span",0)?x(n,/\d+/):+x(n,/\d+/)-+x(e,/\d+/))+";":o+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return x(e.props,/grid-\w+-start/)}))?e:o+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~b(e,"stretch",0)?X(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,l,a,s){return o+n+":"+r+s+(i?o+n+"-span:"+(l?a:+a-+r)+s:"")+e}));case 4949:if(121===w(e,t+6))return y(e,":",":"+u)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===w(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+o+"$2box$3")+e;case 100:return y(e,":",":"+o)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function J(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=X(e.value,e.length,n));case p:return G([R(e,{value:y(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":O(R(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),O(R(e,{props:[t]})),m(e,{props:E(n,r)});break;case"::placeholder":O(R(e,{props:[y(t,/:(plac\w+)/,":"+u+"input-$1")]})),O(R(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),O(R(e,{props:[y(t,/:(plac\w+)/,o+"input-$1")]})),O(R(e,{props:[t]})),m(e,{props:E(n,r)})}return""}))}}function ee(e){return B(te("",null,null,null,[""],e=V(e),0,[0],e))}function te(e,t,n,r,i,l,a,o,s){for(var u=0,c=0,d=a,f=0,p=0,m=0,v=1,x=1,k=1,j=0,E="",_=i,z=l,P=r,T=E;x;)switch(m=j,j=D()){case 40:if(108!=m&&58==w(T,d-1)){-1!=b(T+=y(U(j),"&","&\f"),"&\f",h(u?o[u-1]:0))&&(k=-1);break}case 34:case 39:case 91:T+=U(j);break;case 9:case 10:case 13:case 32:T+=W(m);break;case 92:T+=K(F()-1,7);continue;case 47:switch(I()){case 42:case 47:C(re(q(D(),F()),t,n,s),s);break;default:T+="/"}break;case 123*v:o[u++]=S(T)*k;case 125*v:case 59:case 0:switch(j){case 0:case 125:x=0;case 59+c:-1==k&&(T=y(T,/\f/g,"")),p>0&&S(T)-d&&C(p>32?ie(T+";",r,n,d-1,s):ie(y(T," ","")+";",r,n,d-2,s),s);break;case 59:T+=";";default:if(C(P=ne(T,t,n,u,c,i,o,E,_=[],z=[],d,l),l),123===j)if(0===c)te(T,t,P,P,_,l,d,o,z);else switch(99===f&&110===w(T,3)?100:f){case 100:case 108:case 109:case 115:te(e,P,P,r&&C(ne(e,P,P,0,0,i,o,E,i,_=[],d,z),z),i,z,d,o,r?_:z);break;default:te(T,P,P,P,[""],z,0,o,z)}}u=c=p=0,v=k=1,E=T="",d=a;break;case 58:d=1+S(T),p=m;default:if(v<1)if(123==j)--v;else if(125==j&&0==v++&&125==$())continue;switch(T+=g(j),j*v){case 38:k=c>0?1:(T+="\f",-1);break;case 44:o[u++]=(S(T)-1)*k,k=1;break;case 64:45===I()&&(T+=U(D())),f=I(),c=d=S(E=T+=Z(F())),j++;break;case 45:45===m&&2==S(T)&&(v=0)}}return l}function ne(e,t,n,r,i,l,a,o,s,u,c,f){for(var p=i-1,g=0===i?l:[""],m=j(g),x=0,b=0,w=0;x<r;++x)for(var S=0,C=k(e,p+1,p=h(b=a[x])),E=e;S<m;++S)(E=v(b>0?g[S]+" "+C:y(C,/&\f/g,g[S])))&&(s[w++]=E);return M(e,t,n,0===i?d:o,s,u,c,f)}function re(e,t,n,r){return M(e,t,n,c,g(N),k(e,2,-2),0,r)}function ie(e,t,n,r,i){return M(e,t,n,f,k(e,0,r),k(e,r+1,-1),r,i)}var le={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ae="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",oe="active",se="data-styled-version",ue="6.1.17",ce="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),pe=(new Set,Object.freeze([])),he=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=he),e.theme!==n.theme&&e.theme||t||n.theme}var me=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xe=/(^-|-$)/g;function ye(e){return e.replace(ve,"-").replace(xe,"")}var be=/(a)(d)/gi,we=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=we(t%52)+n;return(we(t%52)+n).replace(be,"$1-$2")}var Se,je=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return je(5381,e)};function Ee(e){return ke(Ce(e)>>>0)}function _e(e){return e.displayName||e.name||"Component"}function ze(e){return"string"==typeof e&&!0}var Pe="function"==typeof Symbol&&Symbol.for,Te=Pe?Symbol.for("react.memo"):60115,Ne=Pe?Symbol.for("react.forward_ref"):60112,Le={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Re={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe=((Se={})[Ne]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Se[Te]=Re,Se);function $e(e){return("type"in(t=e)&&t.type.$$typeof)===Te?Re:"$$typeof"in e?Oe[e.$$typeof]:Le;var t}var De=Object.defineProperty,Ie=Object.getOwnPropertyNames,Fe=Object.getOwnPropertySymbols,Ae=Object.getOwnPropertyDescriptor,He=Object.getPrototypeOf,Ve=Object.prototype;function Be(e,t,n){if("string"!=typeof t){if(Ve){var r=He(t);r&&r!==Ve&&Be(e,r,n)}var i=Ie(t);Fe&&(i=i.concat(Fe(t)));for(var l=$e(e),a=$e(t),o=0;o<i.length;++o){var s=i[o];if(!(s in Me||n&&n[s]||a&&s in a||l&&s in l)){var u=Ae(t,s);try{De(e,s,u)}catch(e){}}}}return e}function Ue(e){return"function"==typeof e}function We(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ze(e,t,n){if(void 0===n&&(n=!1),!n&&!qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ze(e[r],t[r]);else if(qe(t))for(var r in t)e[r]=Ze(e[r],t[r]);return e}function Ge(e,t){Object.defineProperty(e,"toString",{value:t})}function Ye(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Ye(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var l=r;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(e+1),o=(l=0,t.length);l<o;l++)this.tag.insertRule(a,t[l])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,l=r;l<i;l++)t+="".concat(this.tag.getRule(l)).concat(ce);return t},e}(),Je=new Map,et=new Map,tt=1,nt=function(e){if(Je.has(e))return Je.get(e);for(;et.has(tt);)tt++;var t=tt++;return Je.set(e,t),et.set(t,e),t},rt=function(e,t){tt=t+1,Je.set(e,t),et.set(t,e)},it="style[".concat(ae,"][").concat(se,'="').concat(ue,'"]'),lt=new RegExp("^".concat(ae,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),at=function(e,t,n){for(var r,i=n.split(","),l=0,a=i.length;l<a;l++)(r=i[l])&&e.registerName(t,r)},ot=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),i=[],l=0,a=r.length;l<a;l++){var o=r[l].trim();if(o){var s=o.match(lt);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(rt(c,u),at(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(o)}}},st=function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ae)!==oe&&(ot(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ut(){return n.nc}var ct=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ae,"]")));return t[t.length-1]}(n),l=void 0!==i?i.nextSibling:null;r.setAttribute(ae,oe),r.setAttribute(se,ue);var a=ut();return a&&r.setAttribute("nonce",a),n.insertBefore(r,l),r},dt=function(){function e(e){this.element=ct(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Ye(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=ct(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,gt={isServer:!de,useCSSOMInjection:!fe},mt=function(){function e(e,t,n){void 0===e&&(e=he),void 0===t&&(t={});var i=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,st(this)),Ge(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return et.get(e)}(n);if(void 0===i)return"continue";var l=e.names.get(i),a=t.getGroup(n);if(void 0===l||!l.size||0===a.length)return"continue";var o="".concat(ae,".g").concat(n,'[id="').concat(i,'"]'),s="";void 0!==l&&l.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(o,'{content:"').concat(s,'"}').concat(ce)},l=0;l<n;l++)i(l);return r}(i)}))}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&st(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new pt(n):t?new dt(n):new ft(n)}(this.options),new Xe(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(nt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vt=/&/g,xt=/^\s*\/\/.*$/gm;function yt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=yt(e.children,t)),e}))}function bt(e){var t,n,r,i=void 0===e?he:e,l=i.options,a=void 0===l?he:l,o=i.plugins,s=void 0===o?pe:o,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vt,n).replace(r,u))})),a.prefix&&c.push(J),c.push(Y);var f=function(e,i,l,o){void 0===i&&(i=""),void 0===l&&(l=""),void 0===o&&(o="&"),t=o,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(xt,""),u=ee(l||i?"".concat(l," ").concat(i," { ").concat(s," }"):s);a.namespace&&(u=yt(u,a.namespace));var d,f=[];return G(u,function(e){var t=j(e);return function(n,r,i,l){for(var a="",o=0;o<t;o++)a+=e[o](n,r,i,l)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce((function(e,t){return t.name||Ye(15),je(e,t.name)}),5381).toString():"",f}var wt=new mt,kt=bt(),St=e.createContext({shouldForwardProp:void 0,styleSheet:wt,stylis:kt}),jt=(St.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(St)}function Et(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],l=Ct().styleSheet,o=(0,e.useMemo)((function(){var e=l;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,l]),s=(0,e.useMemo)((function(){return bt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){a()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var u=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(St.Provider,{value:u},e.createElement(jt.Provider,{value:s},t.children))}var _t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=kt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ge(this,(function(){throw Ye(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),zt=function(e){return e>="A"&&e<="Z"};function Pt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Tt=function(e){return null==e||!1===e||""===e},Nt=function(e){var t,n,r=[];for(var l in e){var a=e[l];e.hasOwnProperty(l)&&!Tt(a)&&(Array.isArray(a)&&a.isCss||Ue(a)?r.push("".concat(Pt(l),":"),a,";"):qe(a)?r.push.apply(r,i(i(["".concat(l," {")],Nt(a),!1),["}"],!1)):r.push("".concat(Pt(l),": ").concat((t=l,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in le||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Lt(e,t,n,r){return Tt(e)?[]:We(e)?[".".concat(e.styledComponentId)]:Ue(e)?!Ue(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Lt(e(t),t,n,r):e instanceof _t?n?(e.inject(n,r),[e.getName(r)]):[e]:qe(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(pe,e.map((function(e){return Lt(e,t,n,r)}))):[e.toString()];var i}function Mt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ue(n)&&!We(n))return!1}return!0}var Rt=Ce(ue),Ot=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Mt(e),this.componentId=t,this.baseHash=je(Rt,t),this.baseStyle=n,mt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var i=Qe(Lt(this.rules,e,t,n)),l=ke(je(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,l)){var a=n(i,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,a)}r=Ke(r,l),this.staticRulesId=l}else{for(var o=je(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Qe(Lt(c,e,t,n));o=je(o,d+u),s+=d}}if(s){var f=ke(o>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Ke(r,f)}}return r},e}(),$t=e.createContext(void 0);$t.Consumer;var Dt={};new Set;function It(t,n,i){var l=We(t),a=t,o=!ze(t),s=n.attrs,u=void 0===s?pe:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ye(e);Dt[n]=(Dt[n]||0)+1;var r="".concat(n,"-").concat(Ee(ue+n+Dt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,p=void 0===f?function(e){return ze(e)?"styled.".concat(e):"Styled(".concat(_e(e),")")}(t):f,h=n.displayName&&n.componentId?"".concat(ye(n.displayName),"-").concat(n.componentId):n.componentId||d,g=l&&a.attrs?a.attrs.concat(u).filter(Boolean):u,m=n.shouldForwardProp;if(l&&a.shouldForwardProp){var v=a.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return v(e,t)&&x(e,t)}}else m=v}var y=new Ot(i,h,l?a.componentStyle:void 0);function b(t,n){return function(t,n,i){var l=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext($t),f=Ct(),p=t.shouldForwardProp||f.shouldForwardProp,h=ge(n,d,o)||he,g=function(e,t,n){for(var i,l=r(r({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Ue(i=e[a])?i(l):i;for(var s in o)l[s]="className"===s?Ke(l[s],o[s]):"style"===s?r(r({},l[s]),o[s]):o[s]}return t.className&&(l.className=Ke(l.className,t.className)),l}(l,n,h),m=g.as||c,v={};for(var x in g)void 0===g[x]||"$"===x[0]||"as"===x||"theme"===x&&g.theme===h||("forwardedAs"===x?v.as=g.forwardedAs:p&&!p(x,m)||(v[x]=g[x]));var y=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,g),b=Ke(s,u);return y&&(b+=" "+y),g.className&&(b+=" "+g.className),v[ze(m)&&!me.has(m)?"class":"className"]=b,i&&(v.ref=i),(0,e.createElement)(m,v)}(w,t,n)}b.displayName=p;var w=e.forwardRef(b);return w.attrs=g,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=m,w.foldedComponentIds=l?Ke(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=h,w.target=l?a.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=l?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Ze(e,i[r],!0);return e}({},a.defaultProps,e):e}}),Ge(w,(function(){return".".concat(w.styledComponentId)})),o&&Be(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ft(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var At=function(e){return Object.assign(e,{isCss:!0})};function Ht(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ue(e)||qe(e))return At(Lt(Ft(pe,i([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Lt(r):At(Lt(Ft(r,t)))}function Vt(e,t,n){if(void 0===n&&(n=he),!t)throw Ye(1,t);var l=function(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return e(t,n,Ht.apply(void 0,i([r],l,!1)))};return l.attrs=function(i){return Vt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},l.withConfig=function(i){return Vt(e,t,r(r({},n),i))},l}var Bt=function(e){return Vt(It,e)},Ut=Bt;me.forEach((function(e){Ut[e]=Bt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Mt(e),mt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(Qe(Lt(this.rules,t,n,r)),""),l=this.componentId+e;n.insertRules(l,l,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&mt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=Qe([n&&'nonce="'.concat(n,'"'),"".concat(ae,'="true"'),"".concat(se,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Ye(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Ye(2);var i=t.instance.toString();if(!i)return[];var l=((n={})[ae]="",n[se]=ue,n.dangerouslySetInnerHTML={__html:i},n),a=ut();return a&&(l.nonce=a),[e.createElement("style",r({},l,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new mt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Ye(2);return e.createElement(Et,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Ye(3)}})(),"__sc-".concat(ae,"__");var Wt=n(579);const Kt=Ut.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px 10px;
  color: white;
  font-weight: 600;
`;Ut.div`
  font-size: 16px;
`,Ut.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Ut.div`
  display: flex;
  align-items: flex-end;
  height: 12px;
  gap: 1px;
`,Ut.div`
  width: 3px;
  background-color: white;
  border-radius: 1px;
  
  &:nth-child(1) {
    height: 3px;
  }
  
  &:nth-child(2) {
    height: 6px;
  }
  
  &:nth-child(3) {
    height: 9px;
  }
  
  &:nth-child(4) {
    height: 12px;
  }
`,Ut.div`
  position: relative;
  width: 15px;
  height: 12px;
`,Ut.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1.5px solid white;
  border-bottom: none;
  border-radius: 50% 50% 0 0;
  
  &:nth-child(1) {
    height: 3px;
    width: 6px;
    left: 4.5px;
  }
  
  &:nth-child(2) {
    height: 6px;
    width: 10px;
    left: 2.5px;
  }
  
  &:nth-child(3) {
    height: 9px;
    width: 15px;
    left: 0;
  }
`,Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 14px;
  border: 1px solid white;
  border-radius: 3px;
  padding-right: 2px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    right: -3px;
    width: 2px;
    height: 6px;
    background-color: white;
    border-radius: 0 2px 2px 0;
  }
`,Ut.span`
  font-size: 10px;
`;function Qt(e){let{time:t,batteryLevel:n}=e;return(0,Wt.jsx)(Kt,{})}const qt="320px",Zt="576px",Gt="768px",Yt="992px",Xt=`@media (min-width: ${Gt})`,Jt=`@media (min-width: ${Yt})`,en=`@media (max-width: ${qt})`,tn=`@media (max-width: ${Zt})`,nn=Ut.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin-top: 15px;
  margin-bottom: 15px;

  ${tn} {
    padding: 6px 12px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  ${en} {
    padding: 4px 8px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`,rn=Ut.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tn} {
    width: 36px;
    height: 36px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    width: 32px;
    height: 32px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,ln=Ut.div`
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 7px 13px 5px 3px;
  gap: 8px;
  flex: 0 1 auto;
  width: auto;
  margin: 0 16px;

  ${tn} {
    margin: 0 12px;
    padding: 6px 10px 4px 2px;
    border-radius: 10px;
    gap: 6px;
  }

  ${en} {
    margin: 0 8px;
    padding: 5px 8px 3px 2px;
    border-radius: 8px;
    gap: 4px;
  }
`,an=Ut.div`
  display: flex;
  align-items: center;
  background-color: var(--dark-bg);
  border-radius: 12px;
  padding: 10px 14px;
  gap: 7px;
  flex: 0 1 auto;
  width: auto;
  margin: 0 2px;

  ${tn} {
    padding: 8px 12px;
    border-radius: 10px;
    gap: 6px;
  }

  ${en} {
    padding: 6px 10px;
    border-radius: 8px;
    gap: 5px;
  }
`,on=Ut.div`
  width: 20px;
  height: 20px;

  ${tn} {
    width: 18px;
    height: 18px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${en} {
    width: 16px;
    height: 16px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,sn=Ut.span`
  color: var(--text-color);
  font-size: 16px;
  flex: 1;
  white-space: nowrap;
  margin-right: 4px;

  ${tn} {
    font-size: 14px;
  }

  ${en} {
    font-size: 13px;
  }
`,un=Ut.div`
  width: 24px;
  height: 24px;

  ${tn} {
    width: 22px;
    height: 22px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    width: 20px;
    height: 20px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,cn=Ut.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${tn} {
    width: 32px;
    height: 32px;
  }

  ${en} {
    width: 28px;
    height: 28px;
  }
`,dn=Ut.div`
  color: white;
  font-size: 18px;
  font-weight: 500;

  ${tn} {
    font-size: 16px;
  }

  ${en} {
    font-size: 14px;
  }
`;function fn(e){let{onAvatarClick:t}=e;return(0,Wt.jsxs)(nn,{children:[(0,Wt.jsx)(rn,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M9 3L9 8.5L4 18H20L15 8.5V3H9Z",stroke:"#8ab4f8",strokeWidth:"2",fill:"none"}),(0,Wt.jsx)("path",{d:"M9 3H15",stroke:"#8ab4f8",strokeWidth:"2"})]})}),(0,Wt.jsxs)(ln,{children:[(0,Wt.jsxs)(an,{children:[(0,Wt.jsx)(on,{children:(0,Wt.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:[(0,Wt.jsx)("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),(0,Wt.jsx)("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),(0,Wt.jsx)("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),(0,Wt.jsx)("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})}),(0,Wt.jsx)(sn,{children:"Search"})]}),(0,Wt.jsx)(un,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",fill:"#4285F4"})})})]}),(0,Wt.jsx)(cn,{onClick:t,children:(0,Wt.jsx)(dn,{children:"A"})})]})}const pn=Ut.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
  margin-bottom: 20px;

  ${tn} {
    margin-top: 36px;
    margin-bottom: 16px;
  }

  ${en} {
    margin-top: 28px;
    margin-bottom: 14px;
  }
`,hn=Ut.div`
  display: flex;
  justify-content: center;

  ${tn} {
    svg {
      width: 140px;
    }
  }

  ${en} {
    svg {
      width: 120px;
    }
  }
`;function gn(){return(0,Wt.jsx)(pn,{children:(0,Wt.jsx)(hn,{children:(0,Wt.jsxs)("svg",{viewBox:"0 0 272 92",xmlns:"http://www.w3.org/2000/svg",width:"160",children:[(0,Wt.jsx)("path",{fill:"white",d:"M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"}),(0,Wt.jsx)("path",{fill:"white",d:"M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"}),(0,Wt.jsx)("path",{fill:"white",d:"M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"}),(0,Wt.jsx)("path",{fill:"white",d:"M225 3v65h-9.5V3h9.5z"}),(0,Wt.jsx)("path",{fill:"white",d:"M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"}),(0,Wt.jsx)("path",{fill:"white",d:"M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"})]})})})}const mn=Ut.div`
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 0 16px;
  height: 56px;
  margin: 0 auto;
  width: 100%;
  max-width: 584px;
  cursor: pointer;

  ${tn} {
    height: 48px;
    padding: 0 12px;
    border-radius: 20px;
  }

  ${en} {
    height: 42px;
    padding: 0 10px;
    border-radius: 18px;
  }
`,vn=Ut.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  ${tn} {
    margin-right: 8px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  ${en} {
    margin-right: 6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`,xn=Ut.input`
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 16px;
  outline: none;
  cursor: pointer;
  
  &::placeholder {
    color: var(--secondary-text);
  }

  ${tn} {
    font-size: 14px;
  }

  ${en} {
    font-size: 13px;
  }
`,yn=Ut.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  cursor: pointer;

  ${tn} {
    margin-left: 8px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  ${en} {
    margin-left: 6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;function bn(e){let{value:t,onChange:n,onSearchBarClick:r,onVoiceClick:i,onLensClick:l}=e;return(0,Wt.jsxs)(mn,{onClick:r,children:[(0,Wt.jsx)(vn,{children:(0,Wt.jsx)("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:(0,Wt.jsx)("path",{fill:"#9aa0a6",d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),(0,Wt.jsx)(xn,{type:"text",placeholder:"Search",value:t,onChange:e=>n(e.target.value),onClick:e=>{e.stopPropagation(),r()},readOnly:!0}),(0,Wt.jsx)(yn,{onClick:e=>{e.stopPropagation(),i()},children:(0,Wt.jsxs)("svg",{focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:[(0,Wt.jsx)("path",{fill:"white",d:"M12 15c1.66 0 3-1.31 3-2.97V5.97C15 4.31 13.66 3 12 3S9 4.31 9 5.97v6.06c0 1.66 1.34 2.97 3 2.97z"}),(0,Wt.jsx)("path",{fill:"white",d:"M11 18.08h2V22h-2z"}),(0,Wt.jsx)("path",{fill:"white",d:"M7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"}),(0,Wt.jsx)("path",{fill:"white",d:"M12 16.93a4.97 5.25 0 0 1-3.54-1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"})]})}),(0,Wt.jsx)(yn,{onClick:e=>{e.stopPropagation(),l()},children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z",fill:"white"}),(0,Wt.jsx)("path",{d:"M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z",fill:"white"})]})})]})}const wn=Ut.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding: 0 16px;

  ${tn} {
    margin-top: 20px;
    padding: 0 12px;
  }

  ${en} {
    margin-top: 16px;
    padding: 0 8px;
  }
`,kn=Ut.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  
  &.images {
    background-color: #65553E;
  }
  
  &.translate {
    background-color: #394A74;
  }
  
  &.education {
    background-color: #3D5F47;
  }
  
  &.music {
    background-color: #79403C;
  }

  ${tn} {
    width: 60px;
    height: 60px;
  }

  ${en} {
    width: 50px;
    height: 50px;
  }
`,Sn=Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${tn} {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;function jn(){return(0,Wt.jsxs)(wn,{children:[(0,Wt.jsx)(kn,{className:"images",children:(0,Wt.jsx)(Sn,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z",fill:"white"}),(0,Wt.jsx)("path",{d:"M14.5 11L11 15.5L8.5 12.5L5 17H19L14.5 11Z",fill:"white"})]})})}),(0,Wt.jsx)(kn,{className:"translate",children:(0,Wt.jsx)(Sn,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z",fill:"white"})})})}),(0,Wt.jsx)(kn,{className:"education",children:(0,Wt.jsx)(Sn,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z",fill:"white"})})})}),(0,Wt.jsx)(kn,{className:"music",children:(0,Wt.jsx)(Sn,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z",fill:"white"})})})})]})}const Cn=Ut.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding: 0 16px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  ${tn} {
    gap: 6px;
    padding: 0 12px;
    margin-top: 8px;
  }

  ${en} {
    gap: 4px;
    padding: 0 8px;
    margin-top: 6px;
  }
`,En=Ut.div`
  min-width: 150px;
  flex: 0 0 auto;
  background-color: #303134;
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
  scroll-snap-align: start;

  ${tn} {
    min-width: 130px;
    padding: 14px;
    border-radius: 14px;
  }

  ${en} {
    min-width: 110px;
    padding: 12px;
    border-radius: 12px;
  }
`,_n=Ut.div`
  font-size: 14px;
  color: var(--text-color);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  ${tn} {
    font-size: 13px;
    margin-bottom: 3px;
  }

  ${en} {
    font-size: 12px;
    margin-bottom: 2px;
  }
`,zn=Ut.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Pn=Ut.div`
  font-size: 32px;
  font-weight: 500;
  color: white;

  ${tn} {
    font-size: 28px;
  }

  ${en} {
    font-size: 24px;
  }
`,Tn=Ut.div`
  display: flex;
  align-items: center;
  margin-right: 4px;

  ${tn} {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,Nn=Ut(En)`
  min-width: 80px;
  flex: 0 0 80px;

  ${tn} {
    min-width: 70px;
    flex: 0 0 70px;
  }

  ${en} {
    min-width: 60px;
    flex: 0 0 60px;
  }
`,Ln=Ut(Tn)`
  margin-top: 4px;
`;function Mn(){return(0,Wt.jsxs)(Cn,{children:[(0,Wt.jsxs)(En,{children:[(0,Wt.jsx)(_n,{children:"Gurugram"}),(0,Wt.jsxs)(zn,{children:[(0,Wt.jsx)(Pn,{children:"30\xb0"}),(0,Wt.jsx)(Tn,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M12 3a9 9 0 100 18 9 9 0 000-18zm0 16a7 7 0 110-14 7 7 0 010 14z",fill:"white",opacity:"0.5"}),(0,Wt.jsx)("path",{d:"M12 6a6 6 0 000 12 6 6 0 000-12z",fill:"white",opacity:"0.5"}),(0,Wt.jsx)("path",{d:"M10 12a2 2 0 114 0 2 2 0 01-4 0z",fill:"white"})]})})]})]}),(0,Wt.jsxs)(En,{children:[(0,Wt.jsx)(_n,{children:"Air quality \xb7 170"}),(0,Wt.jsxs)(zn,{children:[(0,Wt.jsx)(Pn,{children:"Moderate"}),(0,Wt.jsx)(Tn,{children:(0,Wt.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("circle",{cx:"12",cy:"12",r:"10",fill:"#FFEB3B"}),(0,Wt.jsx)("path",{d:"M7.5 12C7.5 12.83 8.17 13.5 9 13.5C9.83 13.5 10.5 12.83 10.5 12C10.5 11.17 9.83 10.5 9 10.5C8.17 10.5 7.5 11.17 7.5 12Z",fill:"#000000"}),(0,Wt.jsx)("path",{d:"M13.5 12C13.5 12.83 14.17 13.5 15 13.5C15.83 13.5 16.5 12.83 16.5 12C16.5 11.17 15.83 10.5 15 10.5C14.17 10.5 13.5 11.17 13.5 12Z",fill:"#000000"}),(0,Wt.jsx)("path",{d:"M9 15H15C15 16.1 13.66 17 12 17C10.34 17 9 16.1 9 15Z",fill:"#000000"})]})})]})]}),(0,Wt.jsxs)(En,{children:[(0,Wt.jsx)(_n,{children:"Stocks"}),(0,Wt.jsxs)(zn,{children:[(0,Wt.jsx)(Pn,{children:"\u21912.4%"}),(0,Wt.jsx)(Tn,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",fill:"#34a853"})})})]})]}),(0,Wt.jsxs)(En,{children:[(0,Wt.jsx)(_n,{children:"News"}),(0,Wt.jsxs)(zn,{children:[(0,Wt.jsx)(Pn,{children:"12"}),(0,Wt.jsx)(Tn,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M22 3H2C0.9 3 0 3.9 0 5v14c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H2V5h20v14zM10 7h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h6v2h-6v-2zM4 7h4v10H4V7z",fill:"#4285f4"})})})]})]}),(0,Wt.jsx)(Nn,{children:(0,Wt.jsx)(Ln,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",fill:"white"})})})})]})}const Rn=Ut.div`
  background-color: var(--card-bg);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  margin-top: 16px;
`,On=Ut.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`,$n=Ut.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Dn=Ut.div`
  padding: 16px;
`,In=(Ut.div`
  margin-bottom: 16px;
`,Ut.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  color: var(--text-color);
`);function Fn(){return(0,Wt.jsxs)(Wt.Fragment,{children:[(0,Wt.jsxs)(Rn,{children:[(0,Wt.jsx)(On,{children:(0,Wt.jsx)($n,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVH5eh46E66Fapd3s_0GxGwXYla2qKRAnNg&s",alt:"News"})}),(0,Wt.jsx)(Dn,{children:(0,Wt.jsx)(In,{children:"This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs toge..."})})]}),(0,Wt.jsxs)(Rn,{children:[(0,Wt.jsx)(On,{children:(0,Wt.jsx)($n,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvhmtoqouR1pitdZ24W9R2pYzWsttd0JYZw&s",alt:"News"})}),(0,Wt.jsx)(Dn,{children:(0,Wt.jsx)(In,{children:"This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs toge..."})})]})]})}const An=Ut.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--dark-bg);
  padding: 12px 0;
  position: sticky;
  bottom: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Hn=Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  
  &.active {
    color: #8ab4f8;
  }
`,Vn=Ut.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  background-color: white;
  border-radius: 100px;
  margin: 8px auto;
`;function Bn(){return(0,Wt.jsxs)(An,{children:[(0,Wt.jsx)(Hn,{className:"active",children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z",fill:"#8ab4f8"})})}),(0,Wt.jsx)(Hn,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z",fill:"#9aa0a6"}),(0,Wt.jsx)("path",{d:"M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z",fill:"#9aa0a6"})]})}),(0,Wt.jsx)(Hn,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H16L12 16L8 12H11V8H13V12Z",fill:"#9aa0a6"})})}),(0,Wt.jsx)(Hn,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z",fill:"#9aa0a6"})})}),(0,Wt.jsx)(Vn,{})]})}const Un=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,t,n)=>n?n.toUpperCase():t.toLowerCase())))(e);return t.charAt(0).toUpperCase()+t.slice(1)},Wn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t)).join(" ").trim()};var Kn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Qn=(0,e.forwardRef)(((t,n)=>{let{color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:o="",children:s,iconNode:u,...c}=t;return(0,e.createElement)("svg",{ref:n,...Kn,width:i,height:i,stroke:r,strokeWidth:a?24*Number(l)/Number(i):l,className:Wn("lucide",o),...c},[...u.map((t=>{let[n,r]=t;return(0,e.createElement)(n,r)})),...Array.isArray(s)?s:[s]])})),qn=(t,n)=>{const r=(0,e.forwardRef)(((r,i)=>{let{className:l,...a}=r;return(0,e.createElement)(Qn,{ref:i,iconNode:n,className:Wn(`lucide-${o=Un(t),o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${t}`,l),...a});var o}));return r.displayName=Un(t),r},Zn=qn("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Gn=qn("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]),Yn=Ut.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Xn=Ut.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;

  ${tn} {
    padding: 6px 12px;
    gap: 10px;
  }

  ${en} {
    padding: 4px 8px;
    gap: 8px;
  }
`,Jn=Ut.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  ${tn} {
    padding: 6px;
  }

  ${en} {
    padding: 4px;
  }
`,er=Ut.div`
  flex: 1;
  position: relative;
`,tr=Ut.input`
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 16px;
  outline: none;
  padding: 8px 0;
  caret-color: white;
  animation: blink-caret 1s step-end infinite;

  @keyframes blink-caret {
    from, to { caret-color: white; }
    50% { caret-color: transparent; }
  }

  &::placeholder {
    color: var(--secondary-text);
  }

  ${tn} {
    font-size: 14px;
    padding: 6px 0;
  }

  ${en} {
    font-size: 13px;
    padding: 4px 0;
  }
`,nr=Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${tn} {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,rr=Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${tn} {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,ir=Ut.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,lr=Ut.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: var(--text-color);

  ${tn} {
    padding: 12px;
    font-size: 14px;
  }

  ${en} {
    padding: 8px;
    font-size: 13px;
  }
`,ar=Ut.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;

  ${tn} {
    font-size: 12px;
  }

  ${en} {
    font-size: 11px;
  }
`,or=Ut.div`
  display: flex;
  flex-direction: column;
`,sr=Ut.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;

  ${tn} {
    padding: 10px 12px;
    gap: 12px;
  }

  ${en} {
    padding: 8px;
    gap: 8px;
  }
`,ur=Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${tn} {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${en} {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,cr=Ut.span`
  color: var(--text-color);
  font-size: 16px;

  ${tn} {
    font-size: 14px;
  }

  ${en} {
    font-size: 13px;
  }
`,dr=Ut.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  margin-top: auto;
  color: var(--text-color);

  ${tn} {
    padding: 12px;
    gap: 10px;
    font-size: 14px;
  }

  ${en} {
    padding: 8px;
    gap: 8px;
    font-size: 13px;
  }
`,fr=Ut.div`
  position: relative;
  width: 40px;
  height: 24px;

  ${tn} {
    width: 36px;
    height: 22px;
  }

  ${en} {
    width: 32px;
    height: 20px;
  }
`,pr=Ut.input`
  opacity: 0;
  width: 0;
  height: 0;
`,hr=Ut.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #444;
  border-radius: 34px;
  cursor: pointer;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: .4s;
  }

  ${pr}:checked + & {
    background-color: white;
  }

  ${pr}:checked + &:before {
    transform: translateX(16px);
  }

  ${tn} {
    &:before {
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 4px;
    }

    ${pr}:checked + &:before {
      transform: translateX(14px);
    }
  }

  ${en} {
    &:before {
      height: 12px;
      width: 12px;
      left: 4px;
      bottom: 4px;
    }

    ${pr}:checked + &:before {
      transform: translateX(12px);
    }
  }
`;Ut.div`
  background-color: #202124;
  padding: 8px 4px;

  ${tn} {
    padding: 6px 3px;
  }

  ${en} {
    padding: 4px 2px;
  }
`,Ut.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  ${tn} {
    margin-bottom: 6px;
  }

  ${en} {
    margin-bottom: 4px;
  }
`,Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 40px;
  background-color: #444;
  border-radius: 4px;
  margin: 0 2px;
  color: white;
  font-size: 18px;

  &.shift, &.backspace {
    width: 40px;
  }

  &.numbers {
    width: 48px;
    font-size: 14px;
  }

  &.emoji {
    width: 40px;
  }

  &.space {
    width: 160px;
    font-size: 14px;
  }

  &.search-key {
    width: 80px;
    background-color: #444;
    color: white;
  }

  ${tn} {
    width: 28px;
    height: 36px;
    font-size: 16px;
    margin: 0 1px;
    
    &.shift, &.backspace {
      width: 36px;
    }
    
    &.numbers {
      width: 42px;
      font-size: 12px;
    }
    
    &.emoji {
      width: 36px;
    }
    
    &.space {
      width: 140px;
      font-size: 12px;
    }
    
    &.search-key {
      width: 70px;
    }
  }
  
  ${en} {
    width: 24px;
    height: 32px;
    font-size: 14px;
    margin: 0 1px;
    border-radius: 3px;
    
    &.shift, &.backspace {
      width: 32px;
    }
    
    &.numbers {
      width: 36px;
      font-size: 10px;
    }
    
    &.emoji {
      width: 32px;
    }
    
    &.space {
      width: 120px;
      font-size: 10px;
    }
    
    &.search-key {
      width: 60px;
    }
  }
`,Ut.div`
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  background-color: #202124;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${tn} {
    padding: 10px 0;
  }

  ${en} {
    padding: 8px 0;
  }
`,Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${tn} {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,Ut.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${tn} {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${en} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;function gr(t){let{onBack:n,onSearch:r,onVoice:i,onLens:l}=t;const[a,o]=(0,e.useState)(""),s=()=>{r&&r()};return(0,Wt.jsxs)(Yn,{children:[(0,Wt.jsx)(Qt,{time:"18:34",batteryLevel:38}),(0,Wt.jsxs)(Xn,{children:[(0,Wt.jsx)(Jn,{onClick:n,children:(0,Wt.jsx)(Zn,{size:24,color:"white"})}),(0,Wt.jsx)(er,{children:(0,Wt.jsx)(tr,{placeholder:"Search or type URL",value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"===e.key&&""!==a.trim()&&r&&r()},autoFocus:!0})}),(0,Wt.jsx)(nr,{onClick:i,children:(0,Wt.jsxs)("svg",{focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:[(0,Wt.jsx)("path",{fill:"white",d:"M12 15c1.66 0 3-1.31 3-2.97V5.97C15 4.31 13.66 3 12 3S9 4.31 9 5.97v6.06c0 1.66 1.34 2.97 3 2.97z"}),(0,Wt.jsx)("path",{fill:"white",d:"M11 18.08h2V22h-2z"}),(0,Wt.jsx)("path",{fill:"white",d:"M7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"}),(0,Wt.jsx)("path",{fill:"white",d:"M12 16.93a4.97 5.25 0 0 1-3.54-1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"})]})}),(0,Wt.jsx)(rr,{onClick:l,children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z",fill:"white"}),(0,Wt.jsx)("path",{d:"M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z",fill:"white"})]})})]}),(0,Wt.jsxs)(ir,{children:[(0,Wt.jsxs)(lr,{children:[(0,Wt.jsx)("span",{children:"Recent searches"}),(0,Wt.jsx)(ar,{children:"MANAGE HISTORY"})]}),(0,Wt.jsx)(or,{children:["weather today","twitter login","translate hello to spanish","best restaurants near me","how to make chocolate chip cookies"].map(((e,t)=>(0,Wt.jsxs)(sr,{onClick:s,children:[(0,Wt.jsx)(ur,{children:(0,Wt.jsx)(Gn,{size:20,color:"white"})}),(0,Wt.jsx)(cr,{children:e})]},t)))}),(0,Wt.jsxs)(dr,{children:[(0,Wt.jsxs)(fr,{children:[(0,Wt.jsx)(pr,{type:"checkbox",id:"incognito-toggle"}),(0,Wt.jsx)(hr,{htmlFor:"incognito-toggle"})]}),(0,Wt.jsx)("span",{children:"Incognito mode"})]})]})]})}const mr=qn("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),vr=qn("camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),xr=qn("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),yr=qn("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),br=qn("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),wr=qn("key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]),kr=qn("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Sr=qn("sliders-vertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]),jr=qn("circle-help",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Cr=Ut.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
  position: relative;
`,Er=Ut.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`,_r=Ut.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`,zr=Ut.div`
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: 24px;
  padding: 8px 16px;
  gap: 8px;
  flex: 1;
  max-width: 320px;
  margin: 0 16px;
`,Pr=Ut.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Tr=Ut.span`
  color: var(--text-color);
  font-size: 16px;
  flex: 1;
`,Nr=Ut.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Lr=Ut.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
`,Mr=Ut.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
`,Rr=Ut.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2a2b2e;
  border-radius: 28px 28px 0 0;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
`,Or=Ut.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`,$r=Ut.div`
  text-align: center;
  margin-bottom: 20px;
`,Dr=(Ut.div`
  display: inline-block;
`,Ut.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 24px;
`),Ir=Ut.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 16px;
`,Fr=Ut.div`
  color: white;
  font-size: 24px;
  font-weight: 500;
`,Ar=Ut.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #3c4043;
  display: flex;
  align-items: center;
  justify-content: center;
`,Hr=Ut.div`
  flex: 1;
`,Vr=Ut.div`
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
`,Br=Ut.div`
  color: var(--secondary-text);
  font-size: 14px;
`,Ur=Ut.button`
  background: none;
  border: none;
  padding: 8px;
`,Wr=Ut.button`
  display: block;
  width: calc(100% - 48px);
  margin: 0 24px 24px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 24px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
  text-align: center;
`,Kr=Ut.div`
  margin-bottom: 24px;
`,Qr=Ut.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
  color: var(--text-color);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &.sub-option {
    padding-left: 60px;
    color: white;
    background-color: #232427;
    border-top: none;
  }
`,qr=Ut.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Zr=Ut.span`
  margin-left: auto;
  color: var(--secondary-text);
  font-size: 14px;
`,Gr=Ut.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  color: var(--secondary-text);
  font-size: 14px;
  margin-top: auto;
`,Yr=Ut.span`
  font-weight: bold;
`;function Xr(e){let{onClose:t}=e;return(0,Wt.jsxs)(Cr,{children:[(0,Wt.jsx)(Qt,{time:"18:24",batteryLevel:41}),(0,Wt.jsxs)(Er,{children:[(0,Wt.jsx)(_r,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M9 3L9 8.5L4 18H20L15 8.5V3H9Z",stroke:"white",strokeWidth:"2",fill:"none"}),(0,Wt.jsx)("path",{d:"M9 3H15",stroke:"white",strokeWidth:"2"})]})}),(0,Wt.jsxs)(zr,{children:[(0,Wt.jsx)(Pr,{children:(0,Wt.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,Wt.jsx)("path",{fill:"#4285F4",d:"M3.064 7.51A9.996 9.996 0 0112 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 001.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 012 12c0-1.614.386-3.14 1.064-4.49z"}),(0,Wt.jsx)("path",{fill:"#EA4335",d:"M3.064 7.51A9.996 9.996 0 012 12c0 1.614.386 3.14 1.064 4.49l4.073-3.514A5.968 5.968 0 016.823 12c0-.66.114-1.3.314-1.9L3.064 7.51z"}),(0,Wt.jsx)("path",{fill:"#FBBC04",d:"M12 17.023c-2.605 0-4.81-1.76-5.595-4.123-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9L3.064 7.51A9.996 9.996 0 002 12c0 5.522 4.477 10 10 10 2.7 0 4.964-.895 6.618-2.41l-3.902-3.18c-.896.6-2.04.955-3.386.955-.002 0-.003 0-.005 0h.005z"}),(0,Wt.jsx)("path",{fill:"#34A853",d:"M12 5.977c2.481 0 4.145 1.15 5.095 2.137l2.867-2.868C17.859 2.99 15.595 2 12 2 6.512 2 2.055 6.412 2.055 11.9c0 .59 0 .618.003.627l4.074 3.515c.775-2.364 2.98-4.119 5.585-4.119h.018-.014z"})]})}),(0,Wt.jsx)(Tr,{children:"Search"}),(0,Wt.jsx)(Nr,{children:(0,Wt.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",fill:"white"})})})]}),(0,Wt.jsx)(Lr,{children:(0,Wt.jsx)(Mr,{children:"A"})})]}),(0,Wt.jsxs)(Rr,{children:[(0,Wt.jsx)(Or,{onClick:t,children:(0,Wt.jsx)(mr,{size:24,color:"white"})}),(0,Wt.jsx)($r,{children:(0,Wt.jsxs)("svg",{viewBox:"0 0 272 92",xmlns:"http://www.w3.org/2000/svg",width:"80",children:[(0,Wt.jsx)("path",{fill:"white",d:"M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"}),(0,Wt.jsx)("path",{fill:"white",d:"M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"}),(0,Wt.jsx)("path",{fill:"white",d:"M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"}),(0,Wt.jsx)("path",{fill:"white",d:"M225 3v65h-9.5V3h9.5z"}),(0,Wt.jsx)("path",{fill:"white",d:"M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"}),(0,Wt.jsx)("path",{fill:"white",d:"M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"})]})}),(0,Wt.jsxs)(Dr,{children:[(0,Wt.jsxs)(Ir,{children:[(0,Wt.jsx)(Fr,{children:"A"}),(0,Wt.jsx)(Ar,{children:(0,Wt.jsx)(vr,{size:16,color:"white"})})]}),(0,Wt.jsxs)(Hr,{children:[(0,Wt.jsx)(Vr,{children:"A Demo"}),(0,Wt.jsx)(Br,{children:"legend@gmail.com"})]}),(0,Wt.jsx)(Ur,{children:(0,Wt.jsx)(xr,{size:24,color:"white"})})]}),(0,Wt.jsx)(Wr,{children:"Manage your Google Account"}),(0,Wt.jsxs)(Kr,{children:[(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",fill:"white"}),(0,Wt.jsx)("path",{d:"M9 16h6c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1h-1V7c0-1.1-.9-2-2-2s-2 .9-2 2v2H9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm4-10c0-.55.45-1 1-1s1 .45 1 1v2h-2V6z",fill:"white"})]})}),(0,Wt.jsx)("span",{children:"Turn on Incognito"})]}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsx)(yr,{size:24,color:"white"})}),(0,Wt.jsx)("span",{children:"Search history"}),(0,Wt.jsx)(Zr,{children:"Saving"})]}),(0,Wt.jsx)(Qr,{className:"sub-option",color:"white",children:(0,Wt.jsx)("span",{children:"Delete last 15 mins"})}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsx)(br,{size:24,color:"white"})}),(0,Wt.jsx)("span",{children:"SafeSearch"})]}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M3,4h18v12H3V4z M21,2H3C1.9,2,1,2.9,1,4v12c0,1.1,0.9,2,2,2h7v2H8v2h8v-2h-2v-2h7c1.1,0,2-0.9,2-2V4C23,2.9,22.1,2,21,2z",fill:"white"}),(0,Wt.jsx)("path",{d:"M15,5H9v2h6V5z M15,9H9v2h6V9z M15,13H9v2h6V13z",fill:"white"})]})}),(0,Wt.jsx)("span",{children:"Interests"})]}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsx)(wr,{size:24,color:"white"})}),(0,Wt.jsx)("span",{children:"Passwords"})]}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsx)(kr,{size:24,color:"white"})}),(0,Wt.jsx)("span",{children:"Your profile"})]}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Wt.jsx)("path",{d:"M12 6L9 15H15L12 6ZM12 2L17 17H7L12 2Z",fill:"white"}),(0,Wt.jsx)("path",{d:"M20 18H18V20H20V18Z",fill:"white"}),(0,Wt.jsx)("path",{d:"M16 16H8V18H6V20H8V22H16V20H18V18H16V16ZM16 20H8V18H16V20Z",fill:"white"})]})}),(0,Wt.jsx)("span",{children:"Search personalisation"})]}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsx)(Sr,{size:24,color:"white"})}),(0,Wt.jsx)("span",{children:"Settings"})]}),(0,Wt.jsxs)(Qr,{children:[(0,Wt.jsx)(qr,{children:(0,Wt.jsx)(jr,{size:24,color:"white"})}),(0,Wt.jsx)("span",{children:"Help and feedback"})]})]}),(0,Wt.jsxs)(Gr,{children:[(0,Wt.jsx)("span",{children:"Privacy Policy"}),(0,Wt.jsx)(Yr,{children:"\u2022"}),(0,Wt.jsx)("span",{children:"Terms of Service"})]})]})]})}const Jr=qn("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),ei=qn("search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),ti="undefined"!==typeof window?window.SpeechRecognition||window.webkitSpeechRecognition:null,ni=Ut.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,ri=Ut.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`,ii=Ut.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,li=Ut.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ai=Ut.div`
  color: var(--secondary-text);
  font-size: 32px;
  margin-bottom: 80px;
`,oi=Ut.div`
  color: white;
  font-size: 24px;
  max-width: 80%;
  text-align: center;
  margin-bottom: 30px;
`,si=Ut.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
`,ui=Ut.div`
  width: 8px;
  border-radius: 4px;
  transition: height 0.15s ease;
  height: ${e=>e.height}px;
  
  ${e=>{switch(e.colorIndex){case 0:default:return"background-color: #4285F4;";case 1:return"background-color: #EA4335;";case 2:return"background-color: #FBBC05;";case 3:return"background-color: #34A853;"}}}
`,ci=Ut.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  margin-top: auto;
  gap: 16px;
`,di=Ut.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  color: var(--text-color);
  font-size: 16px;
`,fi=Ut.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: #4285F4;
  border: none;
  border-radius: 50%;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`,pi=Ut.div`
  width: 134px;
  height: 5px;
  background-color: white;
  border-radius: 100px;
  margin: 8px auto;
`,hi=Ut.div`
  color: #EA4335;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  max-width: 80%;
`;function gi(t){let{onBack:n,onSearch:r}=t;const[i,l]=(0,e.useState)([5,5,5,5]),[a,o]=(0,e.useState)(!1),[s,u]=(0,e.useState)(""),[c,d]=(0,e.useState)(!1),[f,p]=(0,e.useState)(null);(0,e.useEffect)((()=>{const e=setInterval((()=>{const e=Array.from({length:4},(()=>Math.floor(20*Math.random())+5));l(e)}),150);let t=null;try{ti?(t=new ti,t.continuous=!0,t.interimResults=!0,t.lang="en-US",t.onstart=()=>{o(!0),p(null)},t.onresult=e=>{const t=Array.from(e.results).map((e=>e[0].transcript)).join("");u(t),t.trim().length>0&&d(!0)},t.onend=()=>{},t.onerror=e=>{p(`Speech recognition error: ${e.error}`),o(!1)},t.start()):p("Speech recognition not supported in this browser")}catch(n){p("Error initializing speech recognition"),console.error(n)}return()=>{clearInterval(e),t&&t.abort()}}),[]);return(0,Wt.jsxs)(ni,{children:[(0,Wt.jsx)(Qt,{time:"18:24",batteryLevel:41}),(0,Wt.jsxs)(ri,{children:[(0,Wt.jsx)(ii,{onClick:n,children:(0,Wt.jsx)(Zn,{size:24,color:"white"})}),(0,Wt.jsx)(ii,{children:(0,Wt.jsx)(Jr,{size:24,color:"white"})})]}),(0,Wt.jsxs)(li,{children:[(0,Wt.jsx)(ai,{children:"Speak now"}),(0,Wt.jsx)(si,{children:i.map(((e,t)=>(0,Wt.jsx)(ui,{height:e,colorIndex:t},t)))}),s&&(0,Wt.jsx)(oi,{children:s}),f&&(0,Wt.jsx)(hi,{children:f}),c&&(0,Wt.jsx)(fi,{onClick:()=>{r&&r()},children:(0,Wt.jsx)(ei,{size:24})})]}),(0,Wt.jsx)(ci,{children:(0,Wt.jsxs)(di,{children:[(0,Wt.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Wt.jsx)("path",{d:"M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z",fill:"white"})}),(0,Wt.jsx)("span",{children:"Search a song"})]})}),(0,Wt.jsx)(pi,{})]})}const mi=qn("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),vi=qn("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),xi=qn("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]),yi=Ut.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`,bi=Ut.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 10;
  gap: 16px;
`,wi=Ut.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.active?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,ki=Ut.div`
  flex: 1;
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`,Si=Ut.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`,ji=Ut.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${e=>e.hidden?"none":"block"};
`,Ci=Ut.canvas`
  ${e=>e.isThumbnail?"\n    width: 40px;\n    height: 40px;\n    object-fit: cover;\n    border-radius: 8px;\n  ":"\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n  "}
`,Ei=Ut.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`,_i=Ut.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 84px;
  left: 0;
  right: 0;
  z-index: 10;
`,zi=Ut.div`
  width: 48px;
  height: 48px;
`,Pi=Ut.button`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  ${e=>e.isEmpty&&"\n    border: 1px dashed rgba(255, 255, 255, 0.3);\n  "}
`,Ti=Ut.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`,Ni=Ut.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`,Li=Ut.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: white;
`,Mi=Ut.div`
  width: 48px;
`,Ri=Ut.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background-color: rgba(32, 33, 36, 0.8);
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  z-index: 10;
`,Oi=Ut.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  opacity: ${e=>e.active?1:.5};
  color: white;
`,$i=Ut.span`
  font-size: 18px;
`,Di=Ut.span`
  font-size: 14px;
`,Ii=Ut.div`
  width: 134px;
  height: 5px;
  background-color: white;
  border-radius: 100px;
  margin: 8px auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
`;function Fi(t){let{onBack:n,onResultFound:r}=t;const i=(0,e.useRef)(null),l=(0,e.useRef)(null),a=(0,e.useRef)(null),[o,s]=(0,e.useState)(!1),[u,c]=(0,e.useState)(!1),[d,f]=(0,e.useState)(null),[p,h]=(0,e.useState)("search"),[g,m]=(0,e.useState)(null);(0,e.useEffect)((()=>{let e=!0;return(async()=>{try{if(!e)return;const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});if(!e)return void t.getTracks().forEach((e=>e.stop()));a.current=t,i.current&&(i.current.srcObject=t,f(!0))}catch(t){console.error("Error accessing camera:",t),f(!1)}})(),()=>{e=!1,a.current&&(a.current.getTracks().forEach((e=>e.stop())),a.current=null)}}),[]);const v=()=>{a.current&&(a.current.getTracks().forEach((e=>e.stop())),a.current=null),i.current&&(i.current.srcObject=null)};return(0,Wt.jsxs)(yi,{children:[(0,Wt.jsx)(Qt,{time:"18:57",batteryLevel:37}),(0,Wt.jsxs)(Si,{children:[!1===d&&(0,Wt.jsxs)(Ei,{children:[(0,Wt.jsx)("p",{children:"Camera access denied"}),(0,Wt.jsx)("p",{children:"Please enable camera permissions to use Google Lens"})]}),(0,Wt.jsx)(ji,{ref:i,autoPlay:!0,playsInline:!0,hidden:o}),(0,Wt.jsx)(Ci,{ref:l,hidden:!o})]}),(0,Wt.jsxs)(bi,{children:[(0,Wt.jsx)(wi,{onClick:()=>{v(),n()},children:(0,Wt.jsx)(Zn,{size:20,color:"white"})}),(0,Wt.jsx)(wi,{active:u,onClick:()=>{c(!u)},children:(0,Wt.jsx)(mi,{size:20,color:"white"})}),(0,Wt.jsx)(ki,{children:"Google Lens"}),(0,Wt.jsx)(wi,{children:(0,Wt.jsx)(Gn,{size:20,color:"white"})}),(0,Wt.jsx)(wi,{children:(0,Wt.jsx)(vi,{size:20,color:"white"})})]}),(0,Wt.jsxs)(_i,{children:[(0,Wt.jsxs)(zi,{children:[o&&(0,Wt.jsx)(Pi,{onClick:()=>{const e=l.current;if(!e)return;const t=e.getContext("2d");t&&(t.clearRect(0,0,e.width,e.height),s(!1))},children:(0,Wt.jsx)(Ci,{ref:l,isThumbnail:!0})}),!o&&(0,Wt.jsx)(Pi,{isEmpty:!0,children:(0,Wt.jsx)(Ti,{})})]}),(0,Wt.jsx)(Ni,{onClick:()=>{if(!i.current||!l.current)return;const e=document.createElement("canvas");e.width=i.current.videoWidth,e.height=i.current.videoHeight;const t=e.getContext("2d");t&&(t.drawImage(i.current,0,0),m(e.toDataURL("image/png")),s(!0),r&&(v(),r()))},children:(0,Wt.jsx)(Li,{})}),(0,Wt.jsx)(Mi,{})]}),(0,Wt.jsxs)(Ri,{children:[(0,Wt.jsxs)(Oi,{active:"translate"===p,onClick:()=>h("translate"),children:[(0,Wt.jsx)($i,{children:(0,Wt.jsx)(Jr,{size:18,color:"white"})}),(0,Wt.jsx)(Di,{children:"Translate"})]}),(0,Wt.jsxs)(Oi,{active:"search"===p,onClick:()=>h("search"),children:[(0,Wt.jsx)($i,{children:(0,Wt.jsx)(ei,{size:18,color:"white"})}),(0,Wt.jsx)(Di,{children:"Search"})]}),(0,Wt.jsxs)(Oi,{active:"homework"===p,onClick:()=>h("homework"),children:[(0,Wt.jsx)($i,{children:(0,Wt.jsx)(xi,{size:18,color:"white"})}),(0,Wt.jsx)(Di,{children:"Homework"})]})]}),(0,Wt.jsx)(Ii,{})]})}const Ai=qn("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Hi=qn("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),Vi=Ut.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Bi=Ut.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgba(32, 33, 36, 0.8);
  border-radius: 24px;
  margin: 10px 16px;
`,Ui=Ut.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Wi=Ut.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${Xt} {
    width: 40px;
    height: 40px;
  }
`,Ki=Ut.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,Qi=Ut.div`
  color: #9aa0a6;
  font-size: 16px;
  flex: 1;
`,qi=Ut.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Zi=Ut.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
`,Gi=Ut.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0 16px;
`,Yi=Ut.div`
  color: ${e=>e.active?"#fff":"rgba(255, 255, 255, 0.6)"};
  font-size: 14px;
  padding: 16px 0;
  margin-right: 24px;
  position: relative;
  
  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: 3px;\n      background-color:rgb(223, 228, 236);\n      border-radius: 3px;\n    }\n  "}
`,Xi=Ut.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  gap: 8px;
`,Ji=Ut.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`,el=Ut.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  gap: 8px;
`,tl=Ut.div`
  flex: ${e=>e.large?"1 0 100%":e.small?"1 0 calc(33% - 12px)":"1 0 calc(50% - 12px)"};
  min-width: ${e=>e.large?"100%":e.small?"calc(33% - 12px)":"calc(50% - 12px)"};
  background-color: #1f1f1f;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  
  ${Xt} {
    margin-bottom: 12px;
  }
  
  ${Jt} {
    margin-bottom: 16px;
  }
`,nl=Ut.img`
  width: 100%;
  height: ${e=>e.tall?"320px":"250px"};
  object-fit: cover;
  object-position: center center;
  
  ${Xt} {
    height: ${e=>e.tall?"380px":"280px"};
  }
  
  ${Jt} {
    height: ${e=>e.tall?"420px":"320px"};
  }
`,rl=Ut.div`
  padding: 12px;
`,il=Ut.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`,ll=Ut.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: black;
`,al=Ut.span`
  color: #fff;
  font-size: 14px;
`,ol=Ut.div`
  color: #fff;
  font-size: 14px;
  margin-bottom: 4px;
  line-height: 1.3;
`,sl=Ut.div`
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`,ul=Ut.div`
  display: flex;
  align-items: center;
  color: #8ab4f8;
  font-size: 14px;
  margin: 8px 0;
`,cl=Ut.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: #d9b5d6;
  margin-left: 4px;
`,dl=Ut.div`
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(32, 33, 36, 0.9);
  padding: 8px 12px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  max-width: 95%;
  z-index: 100;
`,fl=Ut.div`
  color: #fff;
  font-size: 14px;
`,pl=Ut.button`
  background: none;
  border: none;
  color: #8ab4f8;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 6px;
  white-space: nowrap;
`,hl=Ut.button`
  background: none;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`,gl=Ut.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`,ml=Ut.button`
  background: none;
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`,vl=Ut(ml)`
  position: relative;
`,xl=Ut.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: #000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid white;
  box-shadow: none;
`;function yl(e){let{onBack:t}=e;return(0,Wt.jsxs)(Vi,{children:[(0,Wt.jsx)(Qt,{time:"18:25",batteryLevel:40}),(0,Wt.jsxs)(Bi,{children:[(0,Wt.jsx)(Ui,{children:(0,Wt.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,Wt.jsx)("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),(0,Wt.jsx)("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),(0,Wt.jsx)("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),(0,Wt.jsx)("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})}),(0,Wt.jsx)(Wi,{children:(0,Wt.jsx)(Ki,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4KS-qZlJ83mq2YjqursipUoIshhQmUR0B-9KjVdfww&s",alt:"Product image"})}),(0,Wt.jsx)(Qi,{children:"Add to search"}),(0,Wt.jsx)(qi,{children:(0,Wt.jsx)(Zi,{children:"A"})})]}),(0,Wt.jsxs)(Gi,{children:[(0,Wt.jsx)(Yi,{active:!0,children:"All"}),(0,Wt.jsx)(Yi,{children:"Products"}),(0,Wt.jsx)(Yi,{children:"Visual matches"}),(0,Wt.jsx)(Yi,{children:"About this image"})]}),(0,Wt.jsxs)(Xi,{children:[(0,Wt.jsx)(Ji,{children:"i"}),"Results for people are limited"]}),(0,Wt.jsxs)(el,{children:[(0,Wt.jsxs)(tl,{large:!0,children:[(0,Wt.jsx)(nl,{tall:!0,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9g2DG5S83QmfBPJ1JgIccK0g9c8J37WkdhxeR6nMN-blUUtsJ_5BZqMU&s=10",alt:"Purple kurti"}),(0,Wt.jsxs)(rl,{children:[(0,Wt.jsxs)(il,{children:[(0,Wt.jsx)(ll,{children:"a"}),(0,Wt.jsx)(al,{children:"Amazon.com"})]}),(0,Wt.jsx)(ol,{children:"Amazon.com: GuliriFei Women's Two Piece Outfit"}),(0,Wt.jsxs)(ul,{children:["See exact matches ",(0,Wt.jsx)(cl,{})]})]})]}),(0,Wt.jsxs)(tl,{children:[(0,Wt.jsx)(nl,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXPTejPFtRRjoY4t1DDwHf2VXk4rEAD157uGPXYIZnOkpd2j-XNwIn_RW&s=10",alt:"Blue knit top"}),(0,Wt.jsxs)(rl,{children:[(0,Wt.jsxs)(il,{children:[(0,Wt.jsx)(ll,{children:"M"}),(0,Wt.jsx)(al,{children:"Myntra"})]}),(0,Wt.jsx)(ol,{children:"Buy Trendyol Striped Cotton Top - Tops for Women"}),(0,Wt.jsx)(sl,{children:"\u20b9659*"})]})]}),(0,Wt.jsxs)(tl,{children:[(0,Wt.jsx)(nl,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6ZqP0gBza1nanALcOBx1Umt4pA6DvYS9UjSWbJCbig&s",alt:"Purple cardigan"}),(0,Wt.jsxs)(rl,{children:[(0,Wt.jsxs)(il,{children:[(0,Wt.jsx)(ll,{children:"H"}),(0,Wt.jsx)(al,{children:"H&M"})]}),(0,Wt.jsx)(ol,{children:"Fine-knit Cardigan - Light purple"}),(0,Wt.jsx)(sl,{children:"\u20b91,299"})]})]}),(0,Wt.jsxs)(tl,{small:!0,children:[(0,Wt.jsx)(nl,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05XkMFgDKF-SMDJfuoFruUO0BhIl6dPqOc4pVJPaceA&s",alt:"Black top"}),(0,Wt.jsxs)(rl,{children:[(0,Wt.jsxs)(il,{children:[(0,Wt.jsx)(ll,{children:"Z"}),(0,Wt.jsx)(al,{children:"Zara"})]}),(0,Wt.jsx)(ol,{children:"TEXTURED KNIT TOP"}),(0,Wt.jsx)(sl,{children:"\u20b92,190"})]})]}),(0,Wt.jsxs)(tl,{small:!0,children:[(0,Wt.jsx)(nl,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67kSCuiTA46_e8WjuKP-dbppfepCvB1Q0M-yqqNPL4g&s",alt:"Lilac sweater"}),(0,Wt.jsxs)(rl,{children:[(0,Wt.jsxs)(il,{children:[(0,Wt.jsx)(ll,{children:"A"}),(0,Wt.jsx)(al,{children:"ASOS"})]}),(0,Wt.jsx)(ol,{children:"ASOS DESIGN fluffy crew neck sweater"}),(0,Wt.jsx)(sl,{children:"\u20b93,450"})]})]}),(0,Wt.jsxs)(tl,{small:!0,children:[(0,Wt.jsx)(nl,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwq3PAq6JSjRHd-nFBckDWeZn-ThI_YiuaucAP1_xxDWbSc9V0yjWjUfAr&s=10",alt:"Lavender dress"}),(0,Wt.jsxs)(rl,{children:[(0,Wt.jsxs)(il,{children:[(0,Wt.jsx)(ll,{children:"F"}),(0,Wt.jsx)(al,{children:"Forever 21"})]}),(0,Wt.jsx)(ol,{children:"Women's Lavender Knit Mini Dress"}),(0,Wt.jsx)(ul,{children:"See more options"})]})]})]}),(0,Wt.jsxs)(dl,{children:[(0,Wt.jsx)(fl,{children:"Are these results useful?"}),(0,Wt.jsx)(pl,{children:"Yes"}),(0,Wt.jsx)(pl,{children:"No"}),(0,Wt.jsx)(hl,{children:(0,Wt.jsx)(mr,{size:20})})]}),(0,Wt.jsxs)(gl,{children:[(0,Wt.jsx)(ml,{onClick:t,children:(0,Wt.jsx)(Zn,{size:24})}),(0,Wt.jsx)(ml,{children:(0,Wt.jsx)(Ai,{size:24})}),(0,Wt.jsx)(ml,{children:(0,Wt.jsx)(Hi,{size:24})}),(0,Wt.jsx)(vl,{children:(0,Wt.jsx)(xl,{children:"1"})})]})]})}const bl=function(){const[t,n]=(0,e.useState)(""),[r,i]=(0,e.useState)("home"),l=()=>{i("voice")},a=()=>{i("lens")},o=()=>{i("home")},s=()=>{i("searchResult")};return"search"===r?(0,Wt.jsx)(gr,{onBack:o,onSearch:s,onVoice:l,onLens:a}):"account"===r?(0,Wt.jsx)(Xr,{onClose:o}):"voice"===r?(0,Wt.jsx)(gi,{onBack:o,onSearch:s}):"lens"===r?(0,Wt.jsx)(Fi,{onBack:o,onResultFound:s}):"searchResult"===r?(0,Wt.jsx)(yl,{onBack:o}):(0,Wt.jsxs)("div",{className:"app",children:[(0,Wt.jsx)(Qt,{time:"18:23",batteryLevel:41}),(0,Wt.jsx)(fn,{onAvatarClick:()=>{i("account")}}),(0,Wt.jsxs)("main",{className:"main-content",children:[(0,Wt.jsx)(gn,{}),(0,Wt.jsx)(bn,{value:t,onChange:n,onSearchBarClick:()=>{i("search")},onVoiceClick:l,onLensClick:a}),(0,Wt.jsx)(jn,{}),(0,Wt.jsx)(Mn,{}),(0,Wt.jsx)(Fn,{})]}),(0,Wt.jsx)(Bn,{})]})};t.createRoot(document.getElementById("root")).render((0,Wt.jsx)(e.StrictMode,{children:(0,Wt.jsx)(bl,{})}))})()})();
//# sourceMappingURL=main.b23d4934.js.map