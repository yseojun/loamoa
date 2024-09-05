import{d as C,a as nt,r as P,j as v}from"./index-BvWLsnEw.js";function Be(e,t){return function(){return e.apply(t,arguments)}}const{toString:rt}=Object.prototype,{getPrototypeOf:fe}=Object,X=(e=>t=>{const n=rt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>X(t)===e),Z=e=>t=>typeof t===e,{isArray:j}=Array,M=Z("undefined");function st(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=N("ArrayBuffer");function ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const it=Z("string"),x=Z("function"),ke=Z("number"),G=e=>e!==null&&typeof e=="object",at=e=>e===!0||e===!1,W=e=>{if(X(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ct=N("Date"),lt=N("File"),ut=N("Blob"),ft=N("FileList"),dt=e=>G(e)&&x(e.pipe),pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=X(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},ht=N("URLSearchParams"),[mt,yt,bt,wt]=["ReadableStream","Request","Response","Headers"].map(N),gt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function De(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const k=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ue=e=>!M(e)&&e!==k;function se(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const o=e&&De(t,s)||s;W(t[o])&&W(r)?t[o]=se(t[o],r):W(r)?t[o]=se({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const Et=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&x(s)?e[o]=Be(s,n):e[o]=s},{allOwnKeys:r}),e),St=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Tt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},At=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!ke(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),Ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Pt=N("HTMLFormElement"),Ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=N("RegExp"),je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{je(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},kt=()=>{},Dt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ee="abcdefghijklmnopqrstuvwxyz",we="0123456789",Ie={DIGIT:we,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+we},Ut=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function jt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const It=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return H(r,(i,c)=>{const f=n(i,s+1);!M(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},qt=N("AsyncFunction"),Mt=e=>e&&(G(e)||x(e))&&x(e.then)&&x(e.catch),qe=((e,t)=>e?setImmediate:t?((n,r)=>(k.addEventListener("message",({source:s,data:o})=>{s===k&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),k.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(k.postMessage)),Ht=typeof queueMicrotask<"u"?queueMicrotask.bind(k):typeof process<"u"&&process.nextTick||qe,a={isArray:j,isArrayBuffer:_e,isBuffer:st,isFormData:pt,isArrayBufferView:ot,isString:it,isNumber:ke,isBoolean:at,isObject:G,isPlainObject:W,isReadableStream:mt,isRequest:yt,isResponse:bt,isHeaders:wt,isUndefined:M,isDate:ct,isFile:lt,isBlob:ut,isRegExp:Lt,isFunction:x,isStream:dt,isURLSearchParams:ht,isTypedArray:xt,isFileList:ft,forEach:H,merge:se,extend:Et,trim:gt,stripBOM:St,inherits:Rt,toFlatObject:Tt,kindOf:X,kindOfTest:N,endsWith:Ot,toArray:At,forEachEntry:Ct,matchAll:Nt,isHTMLForm:Pt,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:je,freezeMethods:Bt,toObjectSet:_t,toCamelCase:Ft,noop:kt,toFiniteNumber:Dt,findKey:De,global:k,isContextDefined:Ue,ALPHABET:Ie,generateString:Ut,isSpecCompliantForm:jt,toJSONObject:It,isAsyncFn:qt,isThenable:Mt,setImmediate:qe,asap:Ht};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Me=m.prototype,He={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{He[e]={value:e}});Object.defineProperties(m,He);Object.defineProperty(Me,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Me);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const zt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,n){return e?e.concat(t).map(function(s,o){return s=ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Jt(e){return a.isArray(e)&&!e.some(oe)}const vt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Y(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let w=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Jt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(w=a.toArray(p)))return y=ze(y),w.forEach(function(R,F){!(a.isUndefined(R)||R===null)&&t.append(i===!0?ge([y],F,o):i===null?y:y+"[]",l(R))}),!1}return oe(p)?!0:(t.append(ge(h,y,o),l(p)),!1)}const d=[],b=Object.assign(vt,{defaultVisitor:u,convertValue:l,isVisitable:oe});function E(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(w,S){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(S)?S.trim():S,y,b))===!0&&E(w,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Y(e,this,t)}const Je=de.prototype;Je.append=function(t,n){this._pairs.push([t,n])};Je.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Wt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ve(e,t,n){if(!t)return e;const r=n&&n.encode||Wt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Se{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:de,Kt=typeof FormData<"u"?FormData:null,$t=typeof Blob<"u"?Blob:null,Xt={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Kt,Blob:$t},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",ie=typeof navigator=="object"&&navigator||void 0,Zt=pe&&(!ie||["ReactNative","NativeScript","NS"].indexOf(ie.product)<0),Gt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yt=pe&&window.location.href||"http://localhost",Qt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:Zt,hasStandardBrowserWebWorkerEnv:Gt,navigator:ie,origin:Yt},Symbol.toStringTag,{value:"Module"})),O={...Qt,...Xt};function en(e,t){return Y(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function tn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function nn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ve(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=nn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(tn(r),s,n,0)}),n}return null}function rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return en(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Y(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),rn(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{z.headers[e]={}});const sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),on=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Re=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function an(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const cn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ln(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function un(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=q(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=V(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!cn(t))i(on(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return an(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=V(s),delete n[o];return}const c=t?ln(o):String(o).trim();c!==o&&delete n[o],n[c]=V(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(un(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function ne(e,t){const n=this||z,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(I,m,{__CANCEL__:!0});function $e(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function fn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,b=0;for(;d!==s;)b+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(b*1e3/E):void 0}}function pn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const K=(e,t,n=3)=>{let r=0;const s=dn(50,250);return pn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Te=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Oe=e=>(...t)=>a.asap(()=>e(...t)),hn=O.hasStandardBrowserEnv?function(){const t=O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),mn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Xe(e,t){return e&&!yn(t)?bn(e,t):t}const Ae=e=>e instanceof A?{...e}:e;function U(e,t){t=t||{};const n={};function r(l,u,d){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:d},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(Ae(l),Ae(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,b=d(e[u],t[u],u);a.isUndefined(b)&&d!==c||(n[u]=b)}),n}const Ze=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=ve(Xe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&hn(t.url))){const l=s&&o&&mn.read(o);l&&i.set(s,l)}return t},wn=typeof XMLHttpRequest<"u",gn=wn&&function(e){return new Promise(function(n,r){const s=Ze(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,b,E,p;function y(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function w(){if(!h)return;const R=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:R,config:e,request:h};$e(function(_){n(_),y()},function(_){r(_),y()},T),h=null}"onloadend"in h?h.onloadend=w:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(w)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let F=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||We;s.timeoutErrorMessage&&(F=s.timeoutErrorMessage),r(new m(F,T.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(F,T){h.setRequestHeader(T,F)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=K(l,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,E]=K(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=R=>{h&&(r(!R||R.type?new I(null,e,h):R),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=fn(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},En=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof m?u:new I(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},Sn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Rn=async function*(e,t){for await(const n of Tn(e))yield*Sn(n,t)},Tn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},xe=(e,t,n,r)=>{const s=Rn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let b=o+=d;n(b)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Q=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ge=Q&&typeof ReadableStream=="function",On=Q&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ye=(e,...t)=>{try{return!!e(...t)}catch{return!1}},An=Ge&&Ye(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ce=64*1024,ae=Ge&&Ye(()=>a.isReadableStream(new Response("").body)),$={stream:ae&&(e=>e.body)};Q&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$[t]&&($[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const xn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await On(e)).byteLength},Cn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??xn(t)},Nn=Q&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:b}=Ze(e);l=l?(l+"").toLowerCase():"text";let E=En([s,o&&o.toAbortSignal()],i),p;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let h;try{if(f&&An&&n!=="get"&&n!=="head"&&(h=await Cn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),L;if(a.isFormData(r)&&(L=T.headers.get("content-type"))&&u.setContentType(L),T.body){const[_,J]=Te(h,K(Oe(f)));r=xe(T.body,Ce,_,J)}}a.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;p=new Request(t,{...b,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?d:void 0});let S=await fetch(p);const R=ae&&(l==="stream"||l==="response");if(ae&&(c||R&&y)){const T={};["status","statusText","headers"].forEach(ye=>{T[ye]=S[ye]});const L=a.toFiniteNumber(S.headers.get("content-length")),[_,J]=c&&Te(L,K(Oe(c),!0))||[];S=new Response(xe(S.body,Ce,_,()=>{J&&J(),y&&y()}),T)}l=l||"text";let F=await $[a.findKey($,l)||"text"](S,e);return!R&&y&&y(),await new Promise((T,L)=>{$e(T,L,{data:F,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}}),ce={http:zt,xhr:gn,fetch:Nn};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ne=e=>`- ${e}`,Pn=e=>a.isFunction(e)||e===null||e===!1,Qe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Pn(n)&&(r=ce[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ne).join(`
`):" "+Ne(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ce};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function Pe(e){return re(e),e.headers=A.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qe.getAdapter(e.adapter||z.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ke(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const et="1.7.7",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Fe={};he.transitional=function(t,n,r){function s(o,i){return"[Axios v"+et+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Fe[i]&&(Fe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Fn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const le={assertOptions:Fn,validators:he},B=le.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:B.function,serialize:B.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,b;if(!f){const p=[Pe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(n);d<b;)u=u.then(p[d++],p[d++]);return u}b=c.length;let E=n;for(d=0;d<b;){const p=c[d++],y=c[d++];try{E=p(E)}catch(h){y.call(this,h);break}}try{u=Pe.call(this,E)}catch(p){return Promise.reject(p)}for(d=0,b=l.length;d<b;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=U(this.defaults,t);const n=Xe(t.baseURL,t.url);return ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new I(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}function Ln(e){return function(n){return e.apply(null,n)}}function Bn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function tt(e){const t=new D(e),n=Be(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return tt(U(e,s))},n}const g=tt(z);g.Axios=D;g.CanceledError=I;g.CancelToken=me;g.isCancel=Ke;g.VERSION=et;g.toFormData=Y;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Ln;g.isAxiosError=Bn;g.mergeConfig=U;g.AxiosHeaders=A;g.formToJSON=e=>Ve(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Qe.getAdapter;g.HttpStatusCode=ue;g.default=g;const _n=C.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;C.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;C.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;C.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-right: 2rem;
`;C.div`
  font-size: 1.2rem;
`;C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;C.div`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
`;C.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;C.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;const kn=C.div`
  font-size: 1.2rem;
  color: #666;
`,Le=C.div`
  font-size: 1.2rem;
  color: #ff0000;
`;C.pre`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-top: 2rem;
`;const Un=()=>{const{characterName:e}=nt(),[t,n]=P.useState(null);P.useState([]),P.useState(null),P.useState(null),P.useState(null),P.useState(null),P.useState(null);const[r,s]=P.useState(!0),[o,i]=P.useState(null);return P.useEffect(()=>{e&&(async()=>{s(!0),i(null);try{const f="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1MzYwODAifQ.fPgoF2C9GrbQQecIXC6pCfxZmo0mlPS1rBbbefkUyhwl2tOsQdvThmdbKpfYmmFsOJN4xA8aTeRTpF9WFVVoLL98GLAU5aVpVC7ur07rJyPkWYtLb_UQj3-YBeHRjajtlG2fJn2j73qWWkqEtfFYXDCwkwwWzyPXtFmz-Nru6B3df9Hy7ykgq8QhiXc6IPFr25fJWYvYbW1A-KW3NO12-kgtI2X0SG5Z1Rr0L_25SUZSEJyTkCIWL0PwabWLwRwO0VXyT0-4F9hKkoD4CON93D5j-EAvseFO5no4hD6rsKi-eVBpVSPpMgahwlTPH0e1qX31BZk6BEdMwRGf_fy9iA",l=`https://developer-lostark.game.onstove.com/armories/characters/${e}?filters=profiles%2Bequipment%2Bavatars%2Bcombat-skills%2Bengravings%2Bcards%2Bgems%2Barkpassive`,u=await g.get(l,{headers:{Authorization:`bearer ${f}`}})}catch(f){i("Failed to fetch character information. Please try again later."),console.error("Error fetching character info:",f)}finally{s(!1)}})()},[e]),r?v.jsx(kn,{children:"Loading character information..."}):o?v.jsx(Le,{children:o}):t?v.jsx(_n,{}):v.jsx(Le,{children:"캐릭터 검색 구현 중..."})};export{Un as default};
