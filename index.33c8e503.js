function e(e){Object.defineProperty(e,"__esModule",{value:!0,configurable:!0})}function n(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},_=t.parcelRequire8290;null==_&&((_=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var _=new Error("Cannot find module '"+e+"'");throw _.code="MODULE_NOT_FOUND",_}).register=function(e,n){o[e]=n},t.parcelRequire8290=_);var i,l,u,c,a,f,s={},p=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e,n,t){var r,o,_,l={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:l[_]=n[_];if(arguments.length>2&&(l.children=arguments.length>3?i.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===l[_]&&(l[_]=e.defaultProps[_]);return m(e,l,r,o,null)}function m(e,n,t,r,o){var _={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null!=l.vnode&&l.vnode(_),_}function g(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function x(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return x(e)}}function w(e){(!e.__d&&(e.__d=!0)&&c.push(e)&&!O.__r++||f!==l.debounceRendering)&&((f=l.debounceRendering)||a)(O)}function O(){for(var e;O.__r=c.length;)e=c.sort((function(e,n){return e.__v.__b-n.__v.__b})),c=[],e.some((function(e){var n,t,r,o,_,i;e.__d&&(_=(o=(n=e).__v).__e,(i=n.__P)&&(t=[],(r=h({},o)).__v=o.__v+1,H(i,o,r,n.__n,void 0!==i.ownerSVGElement,null!=o.__h?[_]:null,t,null==_?k(o):_,o.__h),D(t,o),o.__e!=_&&x(o)))}))}function S(e,n,t,r,o,_,i,l,u,c){var a,f,d,h,v,y,b,x=r&&r.__k||p,w=x.length;for(t.__k=[],a=0;a<n.length;a++)if(null!=(h=t.__k[a]=null==(h=n[a])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?m(null,h,null,null,h):Array.isArray(h)?m(g,{children:h},null,null,null):h.__b>0?m(h.type,h.props,h.key,null,h.__v):h)){if(h.__=t,h.__b=t.__b+1,null===(d=x[a])||d&&h.key==d.key&&h.type===d.type)x[a]=void 0;else for(f=0;f<w;f++){if((d=x[f])&&h.key==d.key&&h.type===d.type){x[f]=void 0;break}d=null}H(e,h,d=d||s,o,_,i,l,u,c),v=h.__e,(f=h.ref)&&d.ref!=f&&(b||(b=[]),d.ref&&b.push(d.ref,null,h),b.push(f,h.__c||v,h)),null!=v?(null==y&&(y=v),"function"==typeof h.type&&null!=h.__k&&h.__k===d.__k?h.__d=u=A(h,u,e):u=E(e,h,d,x,v,u),c||"option"!==t.type?"function"==typeof t.type&&(t.__d=u):e.value=""):u&&d.__e==u&&u.parentNode!=e&&(u=k(d))}for(t.__e=y,a=w;a--;)null!=x[a]&&("function"==typeof t.type&&null!=x[a].__e&&x[a].__e==t.__d&&(t.__d=k(r,a+1)),N(x[a],x[a]));if(b)for(a=0;a<b.length;a++)T(b[a],b[++a],b[++a])}function A(e,n,t){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,n="function"==typeof o.type?A(o,n,t):E(t,o,o,e.__k,o.__e,n));return n}function E(e,n,t,r,o,_){var i,l,u;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==t||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),i=null;else{for(l=_,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==o)break e;e.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function P(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||d.test(n)?t:t+"px"}function j(e,n,t,r,o){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||P(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||P(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?r||e.addEventListener(n,_?M:C,_):e.removeEventListener(n,_?M:C,_);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function C(e){this.l[e.type+!1](l.event?l.event(e):e)}function M(e){this.l[e.type+!0](l.event?l.event(e):e)}function H(e,n,t,r,o,_,u,c,a){var f,p,d,y,m,x,w,O,A,E,P,C=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(a=t.__h,c=n.__e=t.__e,n.__h=null,_=[c]),(f=l.__b)&&f(n);try{e:if("function"==typeof C){if(O=n.props,A=(f=C.contextType)&&r[f.__c],E=f?A?A.props.value:f.__:r,t.__c?w=(p=n.__c=t.__c).__=p.__E:("prototype"in C&&C.prototype.render?n.__c=p=new C(O,E):(n.__c=p=new b(O,E),p.constructor=C,p.render=U),A&&A.sub(p),p.props=O,p.state||(p.state={}),p.context=E,p.__n=r,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=h({},p.__s)),h(p.__s,C.getDerivedStateFromProps(O,p.__s))),y=p.props,m=p.state,d)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&O!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(O,E),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(O,p.__s,E)||n.__v===t.__v){p.props=O,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(O,p.__s,E),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,m,x)}))}p.context=E,p.props=O,p.state=p.__s,(f=l.__r)&&f(n),p.__d=!1,p.__v=n,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=h(h({},r),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(x=p.getSnapshotBeforeUpdate(y,m)),P=null!=f&&f.type===g&&null==f.key?f.props.children:f,S(e,Array.isArray(P)?P:[P],n,t,r,o,_,u,c,a),p.base=n.__e,n.__h=null,p.__h.length&&u.push(p),w&&(p.__E=p.__=null),p.__e=!1}else null==_&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=function(e,n,t,r,o,_,l,u){var c,a,f,p=t.props,d=n.props,h=n.type,y=0;if("svg"===h&&(o=!0),null!=_)for(;y<_.length;y++)if((c=_[y])&&(c===e||(h?c.localName==h:3==c.nodeType))){e=c,_[y]=null;break}if(null==e){if(null===h)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),_=null,u=!1}if(null===h)p===d||u&&e.data===d||(e.data=d);else{if(_=_&&i.call(e.childNodes),a=(p=t.props||s).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!u){if(null!=_)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,r,o){var _;for(_ in t)"children"===_||"key"===_||_ in n||j(e,_,null,t[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||j(e,_,n[_],t[_],r)}(e,d,p,o,u),f)n.__k=[];else if(y=n.props.children,S(e,Array.isArray(y)?y:[y],n,t,r,o&&"foreignObject"!==h,_,l,_?_[0]:t.__k&&k(t,0),u),null!=_)for(y=_.length;y--;)null!=_[y]&&v(_[y]);u||("value"in d&&void 0!==(y=d.value)&&(y!==e.value||"progress"===h&&!y)&&j(e,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==e.checked&&j(e,"checked",y,p.checked,!1))}return e}(t.__e,n,t,r,o,_,u,a);(f=l.diffed)&&f(n)}catch(e){n.__v=null,(a||null!=_)&&(n.__e=c,n.__h=!!a,_[_.indexOf(c)]=null),l.__e(e,n,t)}}function D(e,n){l.__c&&l.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){l.__e(e,n.__v)}}))}function T(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){l.__e(e,t)}}function N(e,n,t){var r,o;if(l.unmount&&l.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||T(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){l.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&N(r[o],n,"function"!=typeof e.type);t||null==e.__e||v(e.__e),e.__e=e.__d=void 0}function U(e,n,t){return this.constructor(e,t)}function z(e,n,t){var r,o,_;l.__&&l.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,_=[],H(n,e=(!r&&t||n).__k=y(g,null,[e]),o||s,s,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?i.call(n.childNodes):null,_,!r&&t?t:o?o.__e:n.firstChild,r),D(_,e)}i=p.slice,l={__e:function(e,n){for(var t,r,o;n=n.__;)if((t=n.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(e)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),o=t.__d),o)return t.__E=t}catch(n){e=n}throw e}},u=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},t),this.props)),e&&h(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),w(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},b.prototype.render=g,c=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O.__r=0;var F,L,R,I=0,W=[],q=l.__b,$=l.__r,B=l.diffed,V=l.__c,G=l.unmount;function J(e,n){l.__h&&l.__h(L,e,I||n),I=0;var t=L.__H||(L.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Z(e){return I=1,function(e,n,t){var r=J(F++,2);return r.t=e,r.__c||(r.__=[t?t(n):ne(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=L),r.__}(ne,e)}function K(){W.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(X),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(n){e.__H.__h=[],l.__e(n,e.__v)}})),W=[]}l.__b=function(e){L=null,q&&q(e)},l.__r=function(e){$&&$(e),F=0;var n=(L=e.__c).__H;n&&(n.__h.forEach(X),n.__h.forEach(Y),n.__h=[])},l.diffed=function(e){B&&B(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==W.push(n)&&R===l.requestAnimationFrame||((R=l.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),Q&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Q&&(n=requestAnimationFrame(t))})(K)),L=void 0},l.__c=function(e,n){n.some((function(e){try{e.__h.forEach(X),e.__h=e.__h.filter((function(e){return!e.__||Y(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],l.__e(t,e.__v)}})),V&&V(e,n)},l.unmount=function(e){G&&G(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(X)}catch(e){l.__e(e,n.__v)}};var Q="function"==typeof requestAnimationFrame;function X(e){var n=L;"function"==typeof e.__c&&e.__c(),L=n}function Y(e){var n=L;e.__c=e.__(),L=n}function ee(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function ne(e,n){return"function"==typeof n?n(e):n}_.register("kaAPg",(function(t,r){e(t.exports),n(t.exports,"default",(function(){return i}));var o=function(e,n,t,r){var _;n[0]=0;for(var i=1;i<n.length;i++){var l=n[i++],u=n[i]?(n[0]|=l?1:2,t[n[i++]]):n[++i];3===l?r[0]=u:4===l?r[1]=Object.assign(r[1]||{},u):5===l?(r[1]=r[1]||{})[n[++i]]=u:6===l?r[1][n[++i]]+=u+"":l?(_=e.apply(u,o(e,u,t,["",null])),r.push(_),u[0]?n[0]|=2:(n[i-2]=0,n[i]=_)):r.push(u)}return r},_=new Map;function i(e){var n=_.get(this);return n||(n=new Map,_.set(this,n)),(n=o(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",_="",i=[0],l=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,t),r=6),e&&(i.push(r,e,0,t),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&l(),l(u));for(var c=0;c<e[u].length;c++)n=e[u][c],1===r?"<"===n?(l(),i=[i],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:_?n===_?_="":o+=n:'"'===n||"'"===n?_=n:">"===n?(l(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[u][c+1])?(l(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(l(),r=2):o+=n),3===r&&"!--"===o&&(r=4,i=i[0])}return l(),i}(e)),n),arguments,[])).length>1?n:n[0]}}));var te,re=oe(_("kaAPg"));function oe(e){return e&&e.__esModule?e:{default:e}}function _e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,_=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(_.push(r.value),!n||_.length!==n);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return _}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return ie(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ie(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(Object(t),!0).forEach((function(n){ce(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}_.register("e8OJn",(function(t,r){e(t.exports),n(t.exports,"keyframes",(function(){return a})),n(t.exports,"default",(function(){return c}));var o=0,_=document.head.appendChild(document.createElement("style")).sheet;function i(e,n){var t="p"+o++,r=n+t;return e.forEach((function(e){if(/^@/.test(e)){var n=e.indexOf("{")+1;e=e.slice(0,n)+r+e.slice(n)}else e=r+e;_.insertRule(e,_.cssRules.length)})),t}function l(e,n){return n+"{"+e+"}"}function u(e,n){var t=[""];for(var r in n=n||0,e){var o=e[r];r=r.replace(/[A-Z]/g,"-$&").toLowerCase(),o.sub||Array.isArray(o)?(o=Array.isArray(o)?o:[o]).forEach((function(e){return t[0]+=r+":"+e+";"})):(r=r.replace(/&/g,""),t.push(l(u(o,!/^@/.test(r)).join(""),r)))}return n||(t[0]=l(t[0],"")),t}function c(e,n){var t={};function r(n){return function(t){return function(r,_){_=(r=r||{}).children||_;var i="function"==typeof t?t(r):t;return r.class=[o(i),r.class].filter(Boolean).join(" "),e(n,r,_)}}}function o(e){var n=u(e),r=n.join("");return t[r]||(t[r]=i(n,"."))}return(n=n||{}).returnObject?{style:r,css:o}:r}function a(e){return i([l(u(e,1).join(""),"")],"@keyframes ")}}));var ae,fe,se=oe(_("e8OJn")).default(y,{returnObject:!0}),pe=se.style,de=se.css,he={display:"flex",alignItems:"center",justifyContent:"center"},ve=pe("div")(ue(ue({},he),{},{background:"#ccc",width:"100%",height:"100vh",flexDirection:"row",flexWrap:"wrap",overflow:"hidden"})),ye={borderRadius:"20px",transform:"scale(1)",":hover":{zIndex:"1000",cursor:"pointer",transform:"scale(1.5)"}},me=pe("div")((function(e){return ue(ue({},he),{},{backgroundColor:e.backgroundColor,margin:"10px",height:"".concat(e.size,"px"),width:"".concat(e.size,"px"),transition:""},e.isExpanded?(n=e.expandedScale,{width:"100%",height:"100vh",position:"absolute",zIndex:"1000",transform:"scale(".concat(n,")")}):ye);var n})),ge=pe("span")((function(e){return{position:"absolute",top:"0",right:"0",zIndex:"1000",transform:"rotate(45deg)",padding:"50px",fontSize:"4em",lineHeight:"0",cursor:"pointer",color:"".concat(e.color)}})),be=pe("div")((function(e){return{background:"rgba(0,0,0,0)",width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),border:"".concat(e.color," solid ").concat(e.borderSize,"px"),borderRadius:"50%",overflow:"hidden",position:"absolute"}})),ke=function(e,n,t,r,o,_,i,l){var u,c=e+100*t,a=r<.5?"left":"right",f=o<.5?"top":"bottom",s=e<80,p=s?.5:1,d=0;s||(d=Math.max(2*l,p),console.log(d));var h=s?p:d;return de((ce(u={background:"rgba(0,0,0,0)",width:"".concat(c,"px"),height:"".concat(c,"px"),border:"".concat(n," solid ").concat(h,"px"),position:"absolute",borderRadius:"50%",transition:""},a,"".concat(10*_,"px")),ce(u,f,"".concat(10*i,"px")),u))},xe=function(e,n){return de({background:"rgba(0,0,0,0)",width:"".concat(e,"px"),transform:"rotate(".concat(360*n,"deg)"),position:"absolute",height:"".concat(e,"px"),transition:""})},we=function(e,n,t,r){var o=e<50,_=0;o||(_=Math.floor(2*r)+.5);var i=o?1:_;return de({height:"".concat(e+t,"px"),borderBottom:"".concat(n," solid ").concat(i,"px")})},Oe=function(e,n){return de({height:"".concat(e+n,"px")})};function Se(e){return new Array(e).fill(null).map((function(){return new Array(7).fill(null).map((function(){return Math.random()}))}))}function Ae(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.max(Math.floor(Math.random()*e),n)}function Ee(){var e,n,t,r=((e=21)=>{let n="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n})(),o=200,_=_e(Z(Math.random()<.5),2),i=_[0],u=_[1],c=_e(Z(Ae(o,30)),2),a=c[0],f=c[1],s=_e(Z(Ae(12)),2),p=s[0],d=s[1],h=_e(Z(Ae(4)),2),v=h[0],m=h[1],g=_e(Z(Se(p+v)),2),b=g[0],k=g[1],x=_e(Z(!1),2),w=x[0],O=x[1],S=o/a*2,A=i?"#aaa":"#555",E=i?"#555":"#aaa";function P(e){var n,t,r;e.preventDefault(),"Space"===e.code?(n=Ae(12),t=Ae(4),r=Se(n+t),u((function(e){return!e})),d(n),m(t),f(Ae(o,30)),k(r)):"Escape"===e.code&&O(!1)}return e=function(){return window.addEventListener("keydown",P),function(){window.removeEventListener("keydown",P)}},n=[],t=J(F++,3),!l.__s&&ee(t.__H,n)&&(t.__=e,t.__H=n,L.__H.__h.push(t)),y(Fragment,null,y(me,{size:a+50,color:A,backgroundColor:E,id:r,onClick:function(){return O(!0)},isExpanded:w,expandedScale:S},y(be,{size:a,borderSize:Math.ceil(a/50),color:A},Array(p).fill("").map((function(e,n){return y("div",{className:ke(a,A,b[n][0],b[n][1],b[n][2],b[n][3],b[n][4],b[n][5])})})),Array(v).fill("").map((function(e,n){return y("div",{className:xe(a,b[p+n][5])},y("div",{className:we(a/2,A,b[p+n][6]*a,b[p+n][n])}),y("div",{className:Oe(a/2,b[p+n][6]*a)}))})))),w&&y(ge,{color:A,onClick:function(){return O(!1)}},"+"))}z(re.default.bind(y)(te||(ae=["<"," />"],fe||(fe=ae.slice(0)),te=Object.freeze(Object.defineProperties(ae,{raw:{value:Object.freeze(fe)}}))),(function(){return y(ve,null,Array(24).fill("").map(Ee))})),document.body);
//# sourceMappingURL=index.33c8e503.js.map
