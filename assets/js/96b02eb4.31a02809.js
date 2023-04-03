"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[5029],{4808:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(6687);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5790:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(557),r=(o(6687),o(4808));const i={},a="How do I join a federation?",s={unversionedId:"FAQs/JoiningAFederation",id:"FAQs/JoiningAFederation",title:"How do I join a federation?",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/FAQs/JoiningAFederation.md",sourceDirName:"FAQs",slug:"/FAQs/JoiningAFederation",permalink:"/docs/FAQs/JoiningAFederation",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/FAQs/JoiningAFederation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Who invented Fedimint?",permalink:"/docs/FAQs/HistroyofFedimint"},next:{title:"What does the Federation do?",permalink:"/docs/FAQs/TheFederation"}},u={},l=[{value:"Is it possible for a user to connect to multiple federations at the same time?",id:"is-it-possible-for-a-user-to-connect-to-multiple-federations-at-the-same-time",level:2},{value:"Do I need to go through a KYC (Know Your Customer) process to join a federation?",id:"do-i-need-to-go-through-a-kyc-know-your-customer-process-to-join-a-federation",level:2}],c={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-do-i-join-a-federation"},"How do I join a federation?"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,r.kt)("p",null,"Right now there are no active federations, however, we expect to start seeing these go live in 2023.  If you would like to become involved in our ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/fedimint"},"development process and testing  please reach out via our community telegram at t.me/fedimint")),(0,r.kt)("h2",{id:"is-it-possible-for-a-user-to-connect-to-multiple-federations-at-the-same-time"},"Is it possible for a user to connect to multiple federations at the same time?"),(0,r.kt)("p",null,"Although not planned for the first version, there is no reason why a user can not be simultaneously connected to multiple federations.\xa0 The user would see the list of federations they are a member of and the summary balances of each.\xa0 The federations that they are a member of will have no way of knowing which other federations the user is a member of and how much is held by the user in each.\xa0\xa0"),(0,r.kt)("p",null,"This could act to give a user more options to decentralise their trust as well as potentially open up arbitrage opportunities with the use of \u201cFeDeFi\u201d (see \u201cIs it possible to perform \u201cDeFi\u201d on Fedimints?\u201d)."),(0,r.kt)("h2",{id:"do-i-need-to-go-through-a-kyc-know-your-customer-process-to-join-a-federation"},"Do I need to go through a KYC (Know Your Customer) process to join a federation?"),(0,r.kt)("p",null,"No.\xa0 But it is highly recommended that you only join federations where some or all of the guardians are people that you have a strong pre-existing relationship with or trust in.\xa0 Rather than KYC this fedimint promotes KYF (Know your Friend or Know your Family)."))}p.isMDXComponent=!0}}]);