(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(9361).Z,r=i(4941).Z,n=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,l=e.sizes,g=e.unoptimized,x=void 0!==g&&g,v=e.priority,z=void 0!==v&&v,A=e.loading,_=e.lazyRoot,E=e.lazyBoundary,I=e.className,L=e.quality,R=e.width,M=e.height,q=e.style,O=e.objectFit,C=e.objectPosition,B=e.onLoadingComplete,W=e.placeholder,H=void 0===W?"empty":W,P=e.blurDataURL,D=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=d.useContext(h.ImageConfigContext),G=d.useMemo(function(){var e=p||V||m.imageConfigDefault,t=n(e.deviceSizes).concat(n(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:i})},[V]),F=l?"responsive":"intrinsic";"layout"in D&&(D.layout&&(F=D.layout),delete D.layout);var U=k;if("loader"in D){if(D.loader){var Z=D.loader;U=function(e){e.config;var t=c(e,["config"]);return Z(t)}}delete D.loader}var T="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(s)){var J=w(s)?s.default:s;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(P=P||J.blurDataURL,T=J.src,(!F||"fill"!==F)&&(M=M||J.height,R=R||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}s="string"==typeof s?s:T;var Y=!z&&("lazy"===A||void 0===A);(s.startsWith("data:")||s.startsWith("blob:"))&&(x=!0,Y=!1),y.has(s)&&(Y=!1),G.unoptimized&&(x=!0);var X=r(d.useState(!1),2),Q=X[0],K=X[1],$=r(f.useIntersection({rootRef:void 0===_?null:_,rootMargin:E||"200px",disabled:!Y}),3),ee=$[0],et=$[1],ei=$[2],ea=!Y||et,er={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},en={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo=!1,es=N(R),el=N(M),ec=N(L),ed=Object.assign({},q,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:C}),eu="blur"!==H||Q?{}:{backgroundSize:O||"cover",backgroundPosition:C||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(P,'")')};if("fill"===F)er.display="block",er.position="absolute",er.top=0,er.left=0,er.bottom=0,er.right=0;else if(void 0!==es&&void 0!==el){var em=el/es,ef=isNaN(em)?"100%":"".concat(100*em,"%");"responsive"===F?(er.display="block",er.position="relative",eo=!0,en.paddingTop=ef):"intrinsic"===F?(er.display="inline-block",er.position="relative",er.maxWidth="100%",eo=!0,en.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(el,"%27/%3e")):"fixed"===F&&(er.display="inline-block",er.position="relative",er.width=es,er.height=el)}var eh={src:b,srcSet:void 0,sizes:void 0};ea&&(eh=j({config:G,src:s,unoptimized:x,layout:F,width:es,quality:ec,sizes:l,loader:U}));var eg=s,ex="imagesizes";ex="imageSizes";var ep=(a(i={},"imageSrcSet",eh.srcSet),a(i,ex,eh.sizes),a(i,"crossOrigin",D.crossOrigin),i),ey=d.default.useLayoutEffect,eb=d.useRef(B),ev=d.useRef(s);d.useEffect(function(){eb.current=B},[B]),ey(function(){ev.current!==s&&(ei(),ev.current=s)},[ei,s]);var ew=o({isLazy:Y,imgAttributes:eh,heightInt:el,widthInt:es,qualityInt:ec,layout:F,className:I,imgStyle:ed,blurStyle:eu,loading:A,config:G,unoptimized:x,placeholder:H,loader:U,srcString:eg,onLoadingCompleteRef:eb,setBlurComplete:K,setIntersection:ee,isVisible:ea,noscriptSizes:l},D);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:er},eo?d.default.createElement("span",{style:en},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(S,Object.assign({},ew))),z?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+eh.src+eh.srcSet+eh.sizes,rel:"preload",as:"image",href:eh.srcSet?void 0:eh.src},ep))):null)};var o=i(6495).Z,s=i(2648).Z,l=i(1598).Z,c=i(7273).Z,d=l(i(7294)),u=s(i(5443)),m=i(9309),f=i(7190),h=i(9977);i(3794);var g=i(2392);function x(e){return"/"===e[0]?e.slice(1):e}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},y=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(e){var t=e.config,i=e.src,a=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(a,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,a=e.width,r=e.quality,n=new URL("".concat(t.path).concat(x(i))),o=n.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||a.toString()),r&&o.set("q",r.toString()),n.href}],["cloudinary",function(e){var t,i=e.config,a=e.src,r=e.width,n=["f_auto","c_limit","w_"+r,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(n).concat(x(a))}],["akamai",function(e){var t=e.config,i=e.src,a=e.width;return"".concat(t.path).concat(x(i),"?imwidth=").concat(a)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function j(e){var t=e.config,i=e.src,a=e.unoptimized,r=e.layout,o=e.width,s=e.quality,l=e.sizes,c=e.loader;if(a)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,a){var r=e.deviceSizes,o=e.allSizes;if(a&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(a);c)l.push(parseInt(c[2]));if(l.length){var c,d,u=.01*(d=Math).min.apply(d,n(l));return{widths:o.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:n(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,r,l),u=d.widths,m=d.kind,f=u.length-1;return{sizes:l||"w"!==m?l:"100vw",srcSet:u.map(function(e,a){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===m?e:a+1).concat(m)}).join(", "),src:c({config:t,src:i,quality:s,width:u[f]})}}function N(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function k(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",a=v.get(i);if(a)return a(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(i))}function z(e,t,i,a,r,n){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===a&&n(!0),null==r?void 0:r.current)){var i=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:o})}}))}var S=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),a=e.qualityInt,r=e.layout,n=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,m=e.placeholder,f=e.loading,h=e.srcString,g=e.config,x=e.unoptimized,p=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,v=e.setIntersection,w=e.onLoad,N=e.onError,k=(e.isVisible,e.noscriptSizes),S=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return f=u?"lazy":f,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":r,className:n,style:o({},s,l),ref:d.useCallback(function(e){v(e),(null==e?void 0:e.complete)&&z(e,h,r,m,y,b)},[v,h,r,m,y,b,]),onLoad:function(e){z(e.currentTarget,h,r,m,y,b),w&&w(e)},onError:function(e){"blur"===m&&b(!0),N&&N(e)}})),(u||"blur"===m)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},S,j({config:g,src:h,unoptimized:x,layout:r,width:i,quality:a,sizes:k,loader:p}),{decoding:"async","data-nimg":r,style:s,className:n,loading:f}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5075:function(e,t,i){"use strict";i.r(t);var a=i(5893),r=i(9008),n=i.n(r),o=i(5675),s=i.n(o),l=function(){return(0,a.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center py-2",children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"sunhwang's blog"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{className:"flex w-full flex-1 flex-col items-center justify-center px-20 text-center",children:(0,a.jsxs)("div",{className:"container mx-auto py-20",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("h1",{className:"text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl",children:["recent posts"," "]}),(0,a.jsx)("button",{className:"focus:outline-none",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 transform text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),(0,a.jsx)("hr",{className:"my-8 border-gray-200 dark:border-gray-700"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(s(),{className:"h-64 w-full rounded-lg object-cover object-center lg:h-80",src:"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:"",width:400,height:400}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("span",{className:"uppercase text-blue-500",children:"category"}),(0,a.jsx)("h1",{className:"mt-4 text-xl font-semibold text-gray-800 dark:text-white",children:"What do you want to know about UI"}),(0,a.jsx)("p",{className:"mt-2 text-gray-500 dark:text-gray-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente"}),(0,a.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"#",className:"text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300",children:"John snow"}),(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"February 1, 2022"})]}),(0,a.jsx)("a",{href:"#",className:"inline-block text-blue-500 underline hover:text-blue-400",children:"Read more"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(s(),{className:"h-64 w-full rounded-lg object-cover object-center lg:h-80",src:"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:"",width:500,height:500}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("span",{className:"uppercase text-blue-500",children:"category"}),(0,a.jsx)("h1",{className:"mt-4 text-xl font-semibold text-gray-800 dark:text-white",children:"All the features you want to know"}),(0,a.jsx)("p",{className:"mt-2 text-gray-500 dark:text-gray-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente"}),(0,a.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"#",className:"text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300",children:"Arthur Melo"}),(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"February 6, 2022"})]}),(0,a.jsx)("a",{href:"#",className:"inline-block text-blue-500 underline hover:text-blue-400",children:"Read more"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(s(),{className:"h-64 w-full rounded-lg object-cover object-center lg:h-80",src:"https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",alt:"",width:400,height:400}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("span",{className:"uppercase text-blue-500",children:"category"}),(0,a.jsx)("h1",{className:"mt-4 text-xl font-semibold text-gray-800 dark:text-white",children:"Which services you get from Meraki UI"}),(0,a.jsx)("p",{className:"mt-2 text-gray-500 dark:text-gray-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente"}),(0,a.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"#",className:"text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300",children:"Tom Hank"}),(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"February 19, 2022"})]}),(0,a.jsx)("a",{href:"#",className:"inline-block text-blue-500 underline hover:text-blue-400",children:"Read more"})]})]})]})]})]})}),(0,a.jsx)("footer",{className:"flex h-24 w-full items-center justify-center border-t",children:(0,a.jsxs)("a",{className:"flex items-center justify-center gap-2",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,a.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})]})})]})};t.default=l},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);