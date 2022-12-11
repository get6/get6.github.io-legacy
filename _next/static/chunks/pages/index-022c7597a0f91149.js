(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2777)}])},1772:function(e,t,s){"use strict";var r=s(5893),a=s(8420),l=s(6159),n=function(e){var t=e.dateString,s=e.dateFormat,n=(0,a.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,l.Z)(n,s||"yyyy-MM-dd")})};t.Z=n},1545:function(e,t,s){"use strict";var r=s(5893),a=function(e){var t=e.children;return(0,r.jsxs)("span",{className:"whitespace-nowrap rounded-full border bg-white px-2.5 py-0.5 text-sm text-gray-700",children:["#",t]})};t.Z=a},5352:function(e,t,s){"use strict";var r=s(5893),a=s(5675),l=s.n(a),n=function(e){var t=e.src,s=e.alt,a=e.className;return(0,r.jsx)("div",{className:"relative h-full w-full",children:(0,r.jsx)(l(),{src:t,alt:s,className:a,layout:"fill"})})};t.Z=n},2777:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return j},default:function(){return y}});var r=s(1799),a=s(5893),l=s(9008),n=s.n(l),c=s(5675),i=s.n(c),o=s(7294),d=s(5352),x=function(){return(0,a.jsxs)("div",{className:"flex h-screen flex-col items-center space-y-4",children:[(0,a.jsx)("div",{className:"h-2/5 w-2/5",children:(0,a.jsx)(d.Z,{src:"/assets/no_post.jpg",alt:"No Posts Found.",className:"rounded-3xl object-center"})}),(0,a.jsx)("p",{className:"text-5xl font-semibold capitalize text-gray-800 dark:text-white lg:text-6xl",children:"No Posts Found"})]})},u=s(1772),h=s(1664),f=s.n(h),m=s(1545),g=function(e){var t=e.title,s=(e.coverImage,e.date),r=e.excerpt,l=e.slug,n=e.tags;return(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)(f(),{as:"/posts/".concat(l),href:"/posts/[...slug]",children:(0,a.jsx)(i(),{className:"h-64 w-full rounded-lg object-cover object-center hover:cursor-pointer lg:h-80",src:"/assets/coding.jpg",alt:"",width:400,height:400})}),(0,a.jsxs)("div",{className:"mt-6 flex flex-col hover:cursor-pointer",children:[(0,a.jsx)(f(),{as:"/posts/".concat(l),href:"/posts/[...slug]",children:(0,a.jsx)("h1",{className:"text-center text-xl font-semibold text-gray-800 dark:text-white",children:t})}),(0,a.jsx)(f(),{as:"/posts/".concat(l),href:"/posts/[...slug]",children:(0,a.jsx)("p",{className:"mt-4 text-gray-500 line-clamp-2 dark:text-gray-400",children:r})})]}),(0,a.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:(0,a.jsx)(u.Z,{dateString:s})}),(0,a.jsx)("ul",{className:"flex justify-end space-x-1",children:n.slice(0,3).map(function(e,t){return(0,a.jsx)("li",{className:"hover:cursor-pointer",children:(0,a.jsx)(m.Z,{children:e})},t)})})]})]})},p=function(){return(0,a.jsx)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})},j=!0,y=function(e){var t=e.posts,s=e.initialDisplayPosts,l=void 0===s?[]:s,c=(0,o.useState)(""),d=c[0],u=c[1],h=t.filter(function(e){return(e.title+e.excerpt+e.tags.join(" ")).toLowerCase().includes(d.toLowerCase())}),f=l.length>0&&!d?l:h;return(0,a.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center py-2",children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Sunhwang's blog"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:"flex w-full flex-1 flex-col items-center justify-center px-20",children:(0,a.jsxs)("div",{className:"container mx-auto py-20",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("h1",{className:"text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl",children:["All posts"," "]}),(0,a.jsxs)("div",{className:"relative ml-6 max-w-lg shrink grow",children:[(0,a.jsx)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return u(e.target.value)},placeholder:"Search articles",className:"focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,a.jsx)(p,{})]})]}),(0,a.jsx)("hr",{className:"my-8 border-gray-200 dark:border-gray-700"}),!h.length&&(0,a.jsx)(x,{}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3",children:f.map(function(e,t){return(0,a.jsx)(g,(0,r.Z)({},e),t)})})]})}),(0,a.jsx)("footer",{className:"flex h-24 w-full items-center justify-center border-t",children:(0,a.jsxs)("a",{className:"flex items-center justify-center gap-2",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,a.jsx)(i(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})]})})]})}},9008:function(e,t,s){e.exports=s(5443)}},function(e){e.O(0,[358,675,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);