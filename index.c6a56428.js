var e,t,n,r,o,i,l={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function _(t,n,r){var o,i,l,s={};for(l in n)"key"==l?o=n[l]:"ref"==l?i=n[l]:s[l]=n[l];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===s[l]&&(s[l]=t.defaultProps[l]);return f(t,s,o,i,null)}function f(e,r,o,i,l){var s={type:e,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null==l&&null!=t.vnode&&t.vnode(s),s}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!v.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||o)(v)}function v(){for(var e;v.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,r,o,i,l;e.__d&&(i=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=c({},o)).__v=o.__v+1,j(l,o,r,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?h(o):i,o.__h),E(n,o),o.__e!=i&&m(o)))}))}function y(e,t,n,r,o,i,a,c,u,_){var d,m,g,v,y,k,x,w=r&&r.__k||s,S=w.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(v=n.__k[d]=null==(v=t[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?f(null,v,null,null,v):Array.isArray(v)?f(p,{children:v},null,null,null):v.__b>0?f(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(g=w[d])||g&&v.key==g.key&&v.type===g.type)w[d]=void 0;else for(m=0;m<S;m++){if((g=w[m])&&v.key==g.key&&v.type===g.type){w[m]=void 0;break}g=null}j(e,v,g=g||l,o,i,a,c,u,_),y=v.__e,(m=v.ref)&&g.ref!=m&&(x||(x=[]),g.ref&&x.push(g.ref,null,v),x.push(m,v.__c||y,v)),null!=y?(null==k&&(k=y),"function"==typeof v.type&&v.__k===g.__k?v.__d=u=b(v,u,e):u=$(e,v,g,w,y,u),"function"==typeof n.type&&(n.__d=u)):u&&g.__e==u&&u.parentNode!=e&&(u=h(g))}for(n.__e=k,d=S;d--;)null!=w[d]&&("function"==typeof n.type&&null!=w[d].__e&&w[d].__e==n.__d&&(n.__d=h(r,d+1)),F(w[d],w[d]));if(x)for(d=0;d<x.length;d++)A(x[d],x[++d],x[++d])}function b(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?b(r,t,n):$(n,r,r,o,r.__e,t));return t}function $(e,t,n,r,o,i){var l,s,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(s=i,a=0;(s=s.nextSibling)&&a<r.length;a+=2)if(s==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function k(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function x(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||k(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||k(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?S:w,i):e.removeEventListener(t,i?S:w,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function w(e){this.l[e.type+!1](t.event?t.event(e):e)}function S(e){this.l[e.type+!0](t.event?t.event(e):e)}function j(e,n,r,o,i,l,s,a,u){var _,f,h,m,g,v,b,$,k,x,w,S=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(u=r.__h,a=n.__e=r.__e,n.__h=null,l=[a]),(_=t.__b)&&_(n);try{e:if("function"==typeof S){if($=n.props,k=(_=S.contextType)&&o[_.__c],x=_?k?k.props.value:_.__:o,r.__c?b=(f=n.__c=r.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S($,x):(n.__c=f=new d($,x),f.constructor=S,f.render=O),k&&k.sub(f),f.props=$,f.state||(f.state={}),f.context=x,f.__n=o,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,S.getDerivedStateFromProps($,f.__s))),m=f.props,g=f.state,h)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&$!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps($,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate($,f.__s,x)||n.__v===r.__v){f.props=$,f.state=f.__s,n.__v!==r.__v&&(f.__d=!1),f.__v=n,n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate($,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,g,v)}))}f.context=x,f.props=$,f.state=f.__s,(_=t.__r)&&_(n),f.__d=!1,f.__v=n,f.__P=e,_=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=c(c({},o),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(v=f.getSnapshotBeforeUpdate(m,g)),w=null!=_&&_.type===p&&null==_.key?_.props.children:_,y(e,Array.isArray(w)?w:[w],n,r,o,i,l,s,a,u),f.base=n.__e,n.__h=null,f.__h.length&&s.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==l&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=C(r.__e,n,r,o,i,l,s,u);(_=t.diffed)&&_(n)}catch(e){n.__v=null,(u||null!=l)&&(n.__e=a,n.__h=!!u,l[l.indexOf(a)]=null),t.__e(e,n,r)}}function E(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function C(t,n,r,o,i,s,a,c){var _,f,p,d=r.props,m=n.props,g=n.type,v=0;if("svg"===g&&(i=!0),null!=s)for(;v<s.length;v++)if((_=s[v])&&"setAttribute"in _==!!g&&(g?_.localName===g:3===_.nodeType)){t=_,s[v]=null;break}if(null==t){if(null===g)return document.createTextNode(m);t=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),s=null,c=!1}if(null===g)d===m||c&&t.data===m||(t.data=m);else{if(s=s&&e.call(t.childNodes),f=(d=r.props||l).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(null!=s)for(d={},v=0;v<t.attributes.length;v++)d[t.attributes[v].name]=t.attributes[v].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||x(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||x(e,i,t[i],n[i],r)}(t,m,d,i,c),p)n.__k=[];else if(v=n.props.children,y(t,Array.isArray(v)?v:[v],n,r,o,i&&"foreignObject"!==g,s,a,s?s[0]:r.__k&&h(r,0),c),null!=s)for(v=s.length;v--;)null!=s[v]&&u(s[v]);c||("value"in m&&void 0!==(v=m.value)&&(v!==t.value||"progress"===g&&!v||"option"===g&&v!==d.value)&&x(t,"value",v,d.value,!1),"checked"in m&&void 0!==(v=m.checked)&&v!==t.checked&&x(t,"checked",v,d.checked,!1))}return t}function A(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function F(e,n,r){var o,i;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||A(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&F(o[i],n,"function"!=typeof e.type);r||null==e.__e||u(e.__e),e.__e=e.__d=void 0}function O(e,t,n){return this.constructor(e,n)}e=s.slice,t={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},n=0,d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},d.prototype.render=p,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;var N=function(e,t,n,r){var o;t[0]=0;for(var i=1;i<t.length;i++){var l=t[i++],s=t[i]?(t[0]|=l?1:2,n[t[i++]]):t[++i];3===l?r[0]=s:4===l?r[1]=Object.assign(r[1]||{},s):5===l?(r[1]=r[1]||{})[t[++i]]=s:6===l?r[1][t[++i]]+=s+"":l?(o=e.apply(s,N(e,s,n,["",null])),r.push(o),s[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):r.push(s)}return r},I=new Map;var H,M,U,R=function(e){var t=I.get(this);return t||(t=new Map,I.set(this,t)),(t=N(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",i="",l=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,o):3===r&&(e||o)?(l.push(3,e,o),r=2):2===r&&"..."===o&&e?l.push(4,e,0):2===r&&o&&!e?l.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(l.push(r,0,o,n),r=6),e&&(l.push(r,e,0,n),r=6)),o=""},a=0;a<e.length;a++){a&&(1===r&&s(),s(a));for(var c=0;c<e[a].length;c++)t=e[a][c],1===r?"<"===t?(s(),l=[l],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:i?t===i?i="":o+=t:'"'===t||"'"===t?i=t:">"===t?(s(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[a][c+1])?(s(),3===r&&(l=l[0]),r=l,(l=l[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),r=2):o+=t),3===r&&"!--"===o&&(r=4,l=l[0])}return s(),l}(e)),t),arguments,[])).length>1?t:t[0]}.bind(_),L=0,z=[],T=t.__b,P=t.__r,D=t.diffed,W=t.__c,q=t.unmount;function B(e,n){t.__h&&t.__h(M,e,L||n),L=0;var r=M.__H||(M.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function V(e){return L=1,function(e,t,n){var r=B(H++,2);return r.t=e,r.__c||(r.__=[n?n(t):ee(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=M),r.__}(ee,e)}function G(e,n){var r=B(H++,3);!t.__s&&Y(r.__H,n)&&(r.__=e,r.__H=n,M.__H.__h.push(r))}function J(e,t){var n=B(H++,7);return Y(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Z(){for(var e;e=z.shift();)if(e.__P)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(X),e.__H.__h=[]}catch(M){e.__H.__h=[],t.__e(M,e.__v)}}t.__b=function(e){M=null,T&&T(e)},t.__r=function(e){P&&P(e),H=0;var t=(M=e.__c).__H;t&&(t.__h.forEach(Q),t.__h.forEach(X),t.__h=[])},t.diffed=function(e){D&&D(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==z.push(n)&&U===t.requestAnimationFrame||((U=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),K&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);K&&(t=requestAnimationFrame(n))})(Z)),M=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Q),e.__h=e.__h.filter((function(e){return!e.__||X(e)}))}catch(U){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(U,e.__v)}})),W&&W(e,n)},t.unmount=function(e){q&&q(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{Q(e)}catch(e){n=e}})),n&&t.__e(n,r.__v))};var K="function"==typeof requestAnimationFrame;function Q(e){var t=M,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),M=t}function X(e){var t=M;e.__c=e.__(),M=t}function Y(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function ee(e,t){return"function"==typeof t?t(e):t}var te={exports:({},e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)))};const ne=te.exports,re=Object.freeze({__proto__:null,default:ne});var oe={exports:{}},ie=new RegExp("%[a-f0-9]{2}","gi"),le=new RegExp("(%[a-f0-9]{2})+","gi");function se(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],se(n),se(r))}function ae(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(ie),n=1;n<t.length;n++)t=(e=se(t,n).join("")).match(ie);return e}}oe.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},r=le.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=ae(r[0]);o!==r[0]&&(n[r[0]]=o)}r=le.exec(e)}n["%C2"]="�";for(var i=Object.keys(n),l=0;l<i.length;l++){var s=i[l];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}};const ce=oe.exports,ue=Object.freeze({__proto__:null,default:ce});var _e={exports:({},(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]})};const fe=_e.exports,pe=Object.freeze({__proto__:null,default:fe});var de={exports:({},function(e,t){for(var n={},r=Object.keys(e),o=Array.isArray(t),i=0;i<r.length;i++){var l=r[i],s=e[l];(o?-1!==t.indexOf(l):t(l,s,e))&&(n[l]=s)}return n})};const he=de.exports,me=Object.freeze({__proto__:null,default:he});function ge(e,t){for(t in e)if("default"!=t)return e;return e.default||e}var ve={},ye=ve;const be=ge(re),$e=ge(ue),ke=ge(pe),xe=ge(me),we=Symbol("encodeFragmentIdentifier");function Se(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function je(e,t){return t.encode?t.strict?be(e):encodeURIComponent(e):e}function Ee(e,t){return t.decode?$e(e):e}function Ce(e){return Array.isArray(e)?e.sort():"object"==typeof e?Ce(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function Ae(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function Fe(e){const t=(e=Ae(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function Oe(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function Ne(e,t){Se((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"colon-list-separator":return(e,n,r)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const o="string"==typeof n&&n.includes(e.arrayFormatSeparator),i="string"==typeof n&&!o&&Ee(n,e).includes(e.arrayFormatSeparator);n=i?Ee(n,e):n;const l=o||i?n.split(e.arrayFormatSeparator).map((t=>Ee(t,e))):null===n?n:Ee(n,e);r[t]=l};case"bracket-separator":return(t,n,r)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(r[t]=n?Ee(n,e):n);const i=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>Ee(t,e)));void 0!==r[t]?r[t]=[].concat(r[t],i):r[t]=i};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){if(""===o)continue;let[e,i]=ke(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:Ee(i,t),n(Ee(e,t),i,r)}for(const o of Object.keys(r)){const e=r[o];if("object"==typeof e&&null!==e)for(const n of Object.keys(e))e[n]=Oe(e[n],t);else r[o]=Oe(e,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=Ce(n):e[t]=n,e}),Object.create(null))}ye.extract=Fe,ye.parse=Ne,ye.stringify=(e,t)=>{if(!e)return"";Se((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[je(t,e),"[",o,"]"].join("")]:[...n,[je(t,e),"[",je(o,e),"]=",je(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[je(t,e),"[]"].join("")]:[...n,[je(t,e),"[]=",je(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[je(t,e),":list="].join("")]:[...n,[je(t,e),":list=",je(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:(o=null===o?"":o,0===r.length?[[je(n,e),t,je(o,e)].join("")]:[[r,je(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,je(t,e)]:[...n,[je(t,e),"=",je(r,e)].join("")]}}(t),o={};for(const l of Object.keys(e))n(l)||(o[l]=e[l]);const i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map((n=>{const o=e[n];return void 0===o?"":null===o?je(n,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?je(n,t)+"[]":o.reduce(r(n),[]).join("&"):je(n,t)+"="+je(o,t)})).filter((e=>e.length>0)).join("&")},ye.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=ke(e,"#");return Object.assign({url:n.split("?")[0]||"",query:Ne(Fe(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:Ee(r,t)}:{})},ye.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[we]:!0},t);const n=Ae(e.url).split("?")[0]||"",r=ye.extract(e.url),o=ye.parse(r,{sort:!1}),i=Object.assign(o,e.query);let l=ye.stringify(i,t);l&&(l=`?${l}`);let s=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(s=`#${t[we]?je(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${n}${l}${s}`},ye.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[we]:!1},n);const{url:r,query:o,fragmentIdentifier:i}=ye.parseUrl(e,n);return ye.stringifyUrl({url:r,query:xe(o,t),fragmentIdentifier:i},n)},ye.exclude=(e,t,n)=>{const r=Array.isArray(t)?e=>!t.includes(e):(e,n)=>!t(e,n);return ye.pick(e,r,n)};const Ie=ve;function He(e){return new Array(e).fill(null).map((()=>new Array(7).fill(null).map((()=>Number(Math.random().toFixed(2))))))}function Me(e,t=0){return Math.max(Math.floor(Math.random()*e),t)}function Ue(e){return e<.5}function Re(e){const{location:{protocol:t,host:n,pathname:r}}=window,o=`${t}//${n}${r}${e}`;window.history.pushState({path:o},"",o)}var Le=0,ze=document.head.appendChild(document.createElement("style")).sheet;function Te(e,t){return t+"{"+e+"}"}function Pe(e,t){var n=[""];for(var r in t=t||0,e){var o=e[r];r=r.replace(/[A-Z]/g,"-$&").toLowerCase(),o.sub||Array.isArray(o)?(o=Array.isArray(o)?o:[o]).forEach((function(e){return n[0]+=r+":"+e+";"})):(r=r.replace(/&/g,""),n.push(Te(Pe(o,!/^@/.test(r)).join(""),r)))}return t||(n[0]=Te(n[0],"")),n}const{style:De,css:We}=function(e,t){var n={};return(t=t||{}).returnObject?{style:r,css:o}:r;function r(t){return function(n){return function(r,i){i=(r=r||{}).children||i;var l="function"==typeof n?n(r):n;return r.class=[o(l),r.class].filter(Boolean).join(" "),e(t,r,i)}}}function o(e){var t=Pe(e),r=t.join("");return n[r]||(n[r]=function(e,t){var n="p"+Le++,r=t+n;return e.forEach((function(e){if(/^@/.test(e)){var t=e.indexOf("{")+1;e=e.slice(0,t)+r+e.slice(t)}else e=r+e;ze.insertRule(e,ze.cssRules.length)})),n}(t,"."))}}(_,{returnObject:!0}),qe={light:"#bbb",lighter:"#999",dark:"#555"},Be="cubic-bezier(0.34, 1.56, 0.64, 1)",Ve="cubic-bezier(0.22, 1, 0.36, 1)",Ge={display:"flex",alignItems:"center",justifyContent:"center"},Je=De("div")({...Ge,background:qe.lighter,width:"100%",height:"100vh",flexDirection:"row",flexWrap:"wrap",overflow:"hidden"}),Ze=De("h1")({fontFamily:"Helvetica",fontWeight:"100",cursor:"default",color:qe.dark}),Ke=De("div")((({hide:e,rows:t,columns:n})=>({...Ge,height:(e?0:100/t)+"vh",width:(e?0:100/n)+"%"}))),Qe=De("div")((({color:e,scale:t})=>({...Ge,background:e,position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px",zIndex:"10",transform:`scale(${t})`}))),Xe=e=>({borderRadius:"10px",transform:"scale(1)",":hover":{zIndex:"1",cursor:"pointer",transform:`scale(${e})`}}),Ye=De("div")((({backgroundColor:e,size:t,isExpanded:n,expandedScale:r,hoverScale:o})=>{return{...Ge,backgroundColor:e,height:`${t}px`,width:`${t}px`,transition:`background-color 300ms, width 300ms ${Be}, height 300ms ${Be}, transform 300ms ${Be}`,...n?(i=r,{width:"100%",height:"100vh",position:"fixed",zIndex:"1",transform:`scale(${i})`}):Xe(o)};var i})),et={position:"absolute",zIndex:"10"},tt=De("span")((({color:e})=>({...et,top:"0",right:"0",padding:"50px",transform:"rotate(45deg)",fontSize:"4em",lineHeight:"0",cursor:"pointer",color:e}))),nt=De("div")((({size:e,color:t,borderSize:n})=>({background:"rgba(0,0,0,0)",width:`${e}px`,height:`${e}px`,border:`${t} solid ${n}px`,borderRadius:"50%",overflow:"hidden",position:"absolute",transition:`height 1000ms ${Ve}, width 1000ms ${Ve}`})));function rt(){const e=function(e){return L=5,J((function(){return{current:e}}),[])}(!1);return G((()=>{e.current=!0}),[]),e.current}function ot(e,t){const[n,r]=V(function(e){return Ie.parse(window.location.search)[e]}(e)||t);return[n,function(e,t){return L=8,J((function(){return e}),t)}((t=>{r(t),function(e,t){const n=Ie.parse(window.location.search);t?Re(`?${Ie.stringify({...n,[e]:t})}`):Object.keys(n).length>2?(delete n[e],Re(`?${Ie.stringify(n)}`)):Re("")}(e,t)}),[e])]}function it(e){const t=((e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t})(),[n,r]=ot("t"),[o,i]=V(void 0!==e.inverse?e.inverse:Ue(Math.random())),[l,s]=V(e.diameter||Me(200,30)),[a,c]=V(void 0!==e.numCircles?e.numCircles:Me(12)),[u,_]=V(void 0!==e.numLines?e.numLines:Me(4)),[f,p]=V(e.rArrs||He(a+u+1)),[d,h]=V(e.expanded||!1),m=rt(),g=200/l,v=1+Math.log(g),y=2*g,b=qe[o?"light":"dark"],$=qe[o?"dark":"light"];function k(){const e=Me(12),t=Me(4),n=He(e+t),r=Me(200,30),l=!o;i(l),c(e),_(t),s(r),p(n),d&&x({color:qe[l?"light":"dark"],bgColor:qe[l?"dark":"light"],inverse:l,diameter:r,numCircles:e,numLines:t,rArrs:n})}function x(e){const t=(n=e,btoa(JSON.stringify(n)));var n;r(t)}function w(){h(!1),e.reset&&e.reset()}function S(e){e.preventDefault(),"Space"===e.code?k():"Escape"===e.code&&w()}function j(){const e=Math.ceil(l/50);return R`<${nt} size=${l} borderSize=${e} color=${b}>${Array(a).fill("").map(((e,t)=>R`<div className=${((e,t,n,r,o,i,l,s)=>{const a=e+100*n,c=Ue(r)?"left":"right",u=Ue(o)?"top":"bottom",_=e<80,f=_?.5:1;let p=0;return _||(p=Math.max(2*s,f)),We({background:"rgba(0,0,0,0)",width:`${a}px`,height:`${a}px`,border:`${t} solid ${_?f:p}px`,position:"absolute",borderRadius:"50%",transition:`height 1000ms ${Ve}, width 1000ms ${Ve}, left 1000ms ${Ve}, top 1000ms ${Ve}, right 1000ms ${Ve}, bottom 1000ms ${Ve}`,[c]:10*i+"px",[u]:10*l+"px"})})(l,b,f[t][0],f[t][1],f[t][2],f[t][3],f[t][4],f[t][5])}/>`))}${Array(u).fill("").map(((e,t)=>function(e){const t=f[a+e][6]*l,n=Ue(f[a+e][2]),r=Math.floor(4*f[a+e][0])+1,o=f[a+e][6]*l,i=Ue(f[a+e][1]),s=Ue(f[a+e][2]),c=f[a+e][4]*l,{lineTopStyle:u,lineWidth:_}=((e,t,n,r)=>{const o=e<50;let i=0;o||(i=Math.floor(2*r)+.5);const l=o?1:i;return{lineWidth:l,lineTopStyle:We({height:`${e+n}px`,borderBottom:`${t} solid ${l}px`,transition:`height 1000ms ${Ve}, position 1000ms ${Ve}`})}})(l/2,b,t,f[a+e][e]);return R`<div className=${((e,t)=>We({background:"rgba(0,0,0,0)",width:`${e}px`,transform:`rotate(${360*t}deg)`,position:"absolute",height:`${e}px`,transition:`height 1000ms ${Ve}, width 1000ms ${Ve}, transform 1000ms ${Ve}, position 1000ms ${Ve}`}))(l,f[a+e][5])}><div className=${u}/>${n?R`<div className=${((e,t,n,r,o,i,l)=>We({position:"relative",bottom:(e+(i?2*r:0))/2+r/2+"px",left:`${o}px`,background:i?n:t,border:i?`${t} solid ${r}px`:"",width:`${e}px`,height:`${e}px`,borderRadius:"50%",transition:`height 1000ms ${Ve}, width 1000ms ${Ve}, transform 1000ms ${Ve}, position 1000ms ${Ve}`,"::after":l&&e>2?{width:"2px",height:"2px",top:e/2-1+"px",left:e/2-1+"px",position:"absolute",content:"no-open-quote",borderRadius:"50%",background:t}:{}}))(r,b,$,_,o,i,s)}/>`:null}<div className=${((e,t)=>We({height:`${e+t}px`}))(l/2,c)}/></div>`}(t)))}<//>`}return G((()=>{m&&k()}),[e.trigger]),G((()=>(window.addEventListener("keydown",S),()=>{window.removeEventListener("keydown",S)})),[]),R`<${Ke} rows=${e.rows} columns=${e.columns}><${Ye} size=${l+50} color=${b} backgroundColor=${$} id=${t} onClick=${function(){x({color:b,bgColor:$,inverse:o,diameter:l,numCircles:a,numLines:u,rArrs:f}),h(!0)}} expanded=${d} expandedScale=${y} hoverScale=${v} onmouseenter=${()=>e.setIsHovering(!0)} onmouseleave=${()=>e.setIsHovering(!1)}>${j()}<//>${d&&R`<${Qe} scale=${y} color=${$}>${j()}<//>`}${d&&R`<${tt} color=${b} onClick=${w}> + <//>`}<//>`}function lt({reset:e}){const[t,n]=ot("t");function r(){n(""),e()}try{const e=(o=String(t),JSON.parse(atob(o)));return R`<${Qe} color=${e.color}><${it} expanded ...${e} reset=${r}/><//>`}catch(D){return R`<${Je}><${Ze}>Error parsing pattern.<//><${tt} color=${qe.dark} onClick=${r}> + <//><//>`}var o}function st(){const[e,t]=V([0,0]),[n,r]=ot("t"),[o,i]=V([]),[l,s]=V(),[a,c]=V(!1),[u,_]=V(!1);function f(e){const n=e.target,r=Math.floor(n.innerHeight/250),o=Math.floor(n.innerWidth/250);t([r,o])}function p(){i((e=>{const t=[...e],n=[...t].sort();let r;do{r=Me(t.length)}while(t[r]>n[0]);return t[r]=t[r]+1,t}))}function d(){const e=setInterval(p,250);s(Number(e))}return G((()=>{const t=new Array(e[0]*e[1]).fill(0);i(t),l||d()}),[e]),G((()=>{l&&(a?clearInterval(l):d())}),[a]),G((()=>{const{clientHeight:e,clientWidth:n}=document.body,r=Math.floor(e/250),o=Math.floor(n/250);return t([r,o]),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}}),[]),n&&!u?R`<${Je}><${lt} reset=${()=>_(!0)}/><//>`:R`<${Je}>${Array(e[0]*e[1]).fill("").map(((t,n)=>R`<${it} rows=${e[0]} columns=${e[1]} index=${n} trigger=${o[n]} setIsHovering=${c}/>`))}<//>`}!function(n,r,o){var i,s,a;t.__&&t.__(n,r),s=(i="function"==typeof o)?null:o&&o.__k||r.__k,a=[],j(r,n=(!i&&o||r).__k=_(p,null,[n]),s||l,l,void 0!==r.ownerSVGElement,!i&&o?[o]:s?null:r.firstChild?e.call(r.childNodes):null,a,!i&&o?o:s?s.__e:r.firstChild,i),E(a,n)}(R`<${st}/>`,document.body);export{st as App,it as Pattern};