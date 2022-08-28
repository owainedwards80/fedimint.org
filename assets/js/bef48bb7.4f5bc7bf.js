"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[3975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={},o="LN Gateway Risk",s={unversionedId:"TradeOffs/TrustLNGateways",id:"TradeOffs/TrustLNGateways",title:"LN Gateway Risk",description:"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/TradeOffs/05-TrustLNGateways.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/TrustLNGateways",permalink:"/wiki_fedimint/docs/TradeOffs/TrustLNGateways",draft:!1,editUrl:"https://github.com/fedimint/fedimint.org/tree/main/docs/TradeOffs/05-TrustLNGateways.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Regulatory Risk",permalink:"/wiki_fedimint/docs/TradeOffs/RegulatoryRisk"},next:{title:"Continued Operation Risk",permalink:"/wiki_fedimint/docs/TradeOffs/Transaction-Contract-Fulfilment"}},c={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ln-gateway-risk"},"LN Gateway Risk"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,r.kt)("p",null,"Lightning Gateways provide a service to the federation users which allows them to connect with the wider bitcoin ecosystem. "),(0,r.kt)("p",null,"Without this service the ability to transact is heavily impaired impact the user experience of the Fedimint user."),(0,r.kt)("p",null,"This focus of this risk is on the situation in which an LN Gateway restricts service to Fedimint users through either (1) technical issue or (2) malice. "),(0,r.kt)("p",null,"Both situations carry a similar impact profile, in that the users of the Fedimint may not be able to transact outside the boundary of their mint. This is not a loss of funds, but an impairment of some functionality. "),(0,r.kt)("p",null,"The first line of mitigation in this instance is for the user to simply select a new LN gateway as a mint could have more than 1 gateway. As such if a mint was down due to malice or technical issue the users wallet would simply utilise an alternate LN gateway. "),(0,r.kt)("p",null,"Also it should be noted that the LN gateway represents an economic actor in the system. As such the incentive is for the LN gateway to continue processing payments in order to earn fees. "),(0,r.kt)("p",null,"As such the incentives are aligned for LN Gateways to continue routing payments, or in the presence of malice for an honest actor to step in and earn the fee revenue. "),(0,r.kt)("p",null,"In a fall back situation in which none of the mint gateways are routing LN payment any single user of the mint could setup a lightning node and provide this service for the rest of the mint."))}d.isMDXComponent=!0}}]);