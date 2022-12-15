"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[4001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,p=d["".concat(u,".").concat(m)]||d[m]||f[m]||i;return n?r.createElement(p,a(a({ref:t},l),{},{components:n})):r.createElement(p,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Continued Operation Risk",s={unversionedId:"TradeOffs/Transaction-Contract-Fulfilment",id:"TradeOffs/Transaction-Contract-Fulfilment",title:"Continued Operation Risk",description:"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/TradeOffs/06-Transaction-Contract-Fulfilment.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/Transaction-Contract-Fulfilment",permalink:"/docs/TradeOffs/Transaction-Contract-Fulfilment",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/TradeOffs/06-Transaction-Contract-Fulfilment.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LN Gateway Risk",permalink:"/docs/TradeOffs/TrustLNGateways"},next:{title:"Definitions & Terms",permalink:"/docs/category/definitions--terms"}},u={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"continued-operation-risk"},"Continued Operation Risk"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,o.kt)("p",null,"The user must trust a majority quorum of federation members to custody funds, redeem funds and enforce contracts within the mint.  "),(0,o.kt)("p",null,"This is in effect an operational risk.  The idea that once I have committed my funds to the Federation, there is a risk that I will be unable to redeem or spend my coins at my discretion. "),(0,o.kt)("p",null,"This would be a failure of the mint to operate either through (1) operational failure or (2)\nmalice."),(0,o.kt)("p",null,"With regards to (1) this is mitigated through the deployment of a federation as only a sub group of guardians have to be online at any point in time in order to transact. This allows for some hardware failure, downtime or reboots to occur. "),(0,o.kt)("p",null,'Considering (2) this needs to be mitigated through a process of "knowing your federation". Please only commit funds to guardians you believe you can trust.'))}d.isMDXComponent=!0}}]);