(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{8468:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return r(5586)}])},2284:function(e,t,r){"use strict";var n=r(5893),a=function(e){var t=e.children;return(0,n.jsx)("div",{className:"container mx-auto pt-10",children:t})};t.Z=a},1772:function(e,t,r){"use strict";var n=r(5893),a=r(8420),i=r(6159),s=function(e){var t=e.dateString,r=e.dateFormat,s=(0,a.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,i.Z)(s,r||"yyyy-MM-dd")})};t.Z=s},1545:function(e,t,r){"use strict";var n=r(5893),a=function(e){var t=e.children;return(0,n.jsx)("span",{className:"whitespace-nowrap rounded-full border bg-white px-2.5 py-0.5 text-sm text-gray-700",children:"#".concat(t)})};t.Z=a},8528:function(e,t,r){"use strict";var n=r(5893),a=function(e){var t=e.children;return(0,n.jsx)("div",{className:"mx-auto flex max-w-6xl justify-start align-middle",children:(0,n.jsx)("h1",{className:"mt-20 mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-4xl",children:t})})};t.Z=a},5586:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return j},default:function(){return p}});var n=r(5893),a=r(2284),i=function(e){var t=e.children;return(0,n.jsx)("div",{className:"leading-sm mr-2 mb-2 inline-flex rounded-full border bg-white px-3 py-2 text-xs font-bold uppercase text-gray-700 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-gray-100",children:t})},s=r(8528),c=r(1545),l=function(e){var t=e.children;return(0,n.jsx)("tbody",{children:t})},d=function(e){var t=e.children;return(0,n.jsx)("td",{className:"py-4 px-6",children:t})},u=function(e){var t=e.children;return(0,n.jsx)("thead",{className:"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400",children:t})},o=function(e){var t=e.children;return(0,n.jsx)("th",{scope:"col",className:"py-3 px-6",children:t})},x=function(e){var t=e.children;return(0,n.jsx)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:(0,n.jsx)("table",{className:"w-full table-auto text-left text-sm text-gray-500 dark:text-gray-400",children:t})})};x.Head=u,x.Header=o,x.Body=l,x.Data=d;var h=r(1772),f=r(1664),m=r.n(f),g=r(7294),j=!0,p=function(e){var t=e.posts,r=e.initialDisplayPosts,l=void 0===r?[]:r,d=e.tags,u=(0,g.useState)(""),o=u[0],f=u[1],j=t.filter(function(e){return e.tags.includes(o.toLowerCase())}),p=l.length>0&&!o?l:j;return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(s.Z,{children:"All Tags"}),(0,n.jsx)("div",{className:"mx-auto flex max-w-6xl flex-wrap",children:d.map(function(e,t){return(0,n.jsx)("button",{value:e.name,onClick:function(e){return f(e.currentTarget.value)},children:(0,n.jsx)(i,{children:"".concat(e.slug.length," ").concat(e.name)})},t)})}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"mx-auto max-w-6xl",children:(0,n.jsxs)(x,{children:[(0,n.jsxs)(x.Head,{children:[(0,n.jsx)(x.Header,{children:"Title"}),(0,n.jsx)(x.Header,{children:"Date"}),(0,n.jsx)(x.Header,{children:"Tags"})]}),(0,n.jsx)(x.Body,{children:p.map(function(e,t){return(0,n.jsxs)("tr",{className:"border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900",children:[(0,n.jsx)("th",{scope:"row",className:"whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white",children:(0,n.jsx)(m(),{href:"/posts/".concat(e.slug),children:(0,n.jsx)("a",{children:e.title})})}),(0,n.jsx)(x.Data,{children:(0,n.jsx)(h.Z,{dateString:e.date})}),(0,n.jsx)(x.Data,{children:(0,n.jsx)("ul",{className:"flex space-x-2",children:e.tags.map(function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:e,onClick:function(e){return f(e.currentTarget.value)},children:(0,n.jsx)(c.Z,{children:e})},t)},t)})})})]},t)})})]})}),(0,n.jsx)("br",{})]})}}},function(e){e.O(0,[358,774,888,179],function(){return e(e.s=8468)}),_N_E=e.O()}]);