(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5115)}])},1210:function(e,t){"use strict";function n(e,t,n,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,u=r(n(7294)),l=n(6273),c=n(2725),f=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch(function(e){});var r=o&&void 0!==o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var b=u.default.forwardRef(function(e,t){var n,r,b=e.href,y=e.as,m=e.children,g=e.prefetch,x=e.passHref,j=e.replace,_=e.shallow,C=e.scroll,O=e.locale,M=e.onClick,w=e.onMouseEnter,E=e.onTouchStart,L=e.legacyBehavior,P=void 0===L?!0!==Boolean(!1):L,R=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,P&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));var k=!1!==g,N=u.default.useContext(f.RouterContext),T=u.default.useContext(i.AppRouterContext);T&&(N=T);var S=u.default.useMemo(function(){var e=o(l.resolveHref(N,b,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(N,y):n||t}},[N,b,y]),I=S.href,D=S.as,B=u.default.useRef(I),U=u.default.useRef(D);P&&(r=u.default.Children.only(n));var A=P?r&&"object"==typeof r&&r.ref:t,Z=o(s.useIntersection({rootMargin:"200px"}),3),H=Z[0],K=Z[1],F=Z[2],G=u.default.useCallback(function(e){(U.current!==D||B.current!==I)&&(F(),U.current=D,B.current=I),H(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[D,A,I,F,H]);u.default.useEffect(function(){var e=K&&k&&l.isLocalURL(I),t=void 0!==O?O:N&&N.locale,n=v[I+"%"+D+(t?"%"+t:"")];e&&!n&&h(N,I,D,{locale:t})},[D,I,K,O,k,N]);var X={ref:G,onClick:function(e){P||"function"!=typeof M||M(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:f,scroll:c}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};i?u.default.startTransition(v):v()}}(e,N,I,D,j,_,C,O,Boolean(T),k)},onMouseEnter:function(e){P||"function"!=typeof w||w(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!k&&T)&&l.isLocalURL(I)&&h(N,I,D,{priority:!0})},onTouchStart:function(e){P||"function"!=typeof E||E(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!k&&T)&&l.isLocalURL(I)&&h(N,I,D,{priority:!0})}};if(!P||x||"a"===r.type&&!("href"in r.props)){var q=void 0!==O?O:N&&N.locale,z=N&&N.isLocaleDomain&&d.getDomainLocale(D,q,N.locales,N.domainLocales);X.href=z||p.addBasePath(c.addLocale(D,q,N&&N.defaultLocale))}return P?u.default.cloneElement(r,X):u.default.createElement("a",Object.assign({},R,X),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,i=o(r.useState(!1),2),s=i[0],d=i[1],p=o(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(u){if(!f&&!s&&v&&v.tagName){var e,o,r,i,p,h,b;return o=function(e){return e&&d(e)},p=(i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(o&&(t=l.get(o)))return t;var r=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},c.push(n),l.set(n,t),t}(r={root:null==t?void 0:t.current,rootMargin:n})).id,h=i.observer,(b=i.elements).set(v,o),h.observe(v),function(){if(b.delete(v),h.unobserve(v),0===b.size){h.disconnect(),l.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var y=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(y)}}},[v,f,n,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=n(7294),a=n(9311),u="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var u=o.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=o.default.createContext(null);t.TemplateContext=l},5115:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return f}});var r=n(5893);n(906);var a=n(1664),u=n.n(a),l=function(){return(0,r.jsxs)("nav",{className:"absolute flex w-full justify-between py-4",children:[(0,r.jsx)("div",{className:"ml-20 mr-40 flex-none",children:(0,r.jsx)(u(),{href:"/",children:(0,r.jsx)("a",{className:"font-bold",children:"\uD83C\uDF0E sunhwang's blog"})})}),(0,r.jsx)("ul",{className:"flex flex-auto flex-row justify-evenly",children:[{name:"Categories",href:"/categories"},{name:"Tags",href:"/tags"},{name:"Books",href:"/books"},{name:"About me",href:"/about"},].map(function(e,t){return(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:e.href,children:(0,r.jsx)("a",{className:"hover:underline hover:underline-offset-8",children:e.name})})},t)})})]})},c=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsx)("main",{children:t})]})},f=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(c,{children:(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},n))})}},906:function(){},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);