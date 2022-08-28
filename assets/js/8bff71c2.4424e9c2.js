"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[9014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,m=c["".concat(l,".").concat(p)]||c[p]||f[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Trust Model",s={unversionedId:"TradeOffs/Trust-Trade-Offs",id:"TradeOffs/Trust-Trade-Offs",title:"Trust Model",description:"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/TradeOffs/01-Trust-Trade-Offs.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/Trust-Trade-Offs",permalink:"/wiki_fedimint/docs/TradeOffs/Trust-Trade-Offs",draft:!1,editUrl:"https://github.com/fedimint/fedimint.org/tree/main/docs/TradeOffs/01-Trust-Trade-Offs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Trade Offs",permalink:"/wiki_fedimint/docs/category/trade-offs"},next:{title:"Custodial Risk",permalink:"/wiki_fedimint/docs/TradeOffs/NotYourKeys"}},l={},d=[{value:"The Trade Offs",id:"the-trade-offs",level:2}],u={toc:d};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trust-model"},"Trust Model"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,a.kt)("p",null,"The Fedimint protocol is an optional opensource protocol which can be utilized alongside bitcoin and the lightning network. "),(0,a.kt)("p",null,"The protocol makes a number of trade offs in order to provide benefits including Financial Privacy, Community Custody and Transnational Scaling."),(0,a.kt)("p",null,"These trade offs are largely based on the trust assumptions in the system which is explored below and detailed over the coming pages. "),(0,a.kt)("p",null,"These trust assumptions are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Custody:")," The user must trust the Federation Guardians with custody of their funds which introduces custodial risk. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LN Pay:"),' The user must trust "1 of n" Lightning Gateways to pay lightning invoices outside of the mint. '),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LN Receive:"),' The user must trust "1 of n" Lightning Gateways to receive lightning payments into the mint. '),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Tx Execution:")," The user must trust a quorum of Federation a Guardians to process transactions (deposit, redeem, swap, contract enforcement). ")),(0,a.kt)("p",null,"On the flip side the user benefits from the following positive attributes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Blind Balance:")," The guardians cannot see a users balance. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Blind Transactions:")," The guardians cannot tell which parties are part of a transaction.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Fedimint is a voluntary system which individuals can and individuals in part or fully for their bitcoin custody. We hope that by being honest with these trade offs, individuals can make better decisions for their risk profiles. ")),(0,a.kt)("h2",{id:"the-trade-offs"},"The Trade Offs"),(0,a.kt)("p",null,"The trade offs in the trust model have been captured as five key risks as outlined below",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," and explored in more detail on the following pages. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trust model",src:n(6553).Z,width:"1295",height:"1211"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"NotYourKeys"},"Custodial Risk"),":")," Can the federation steal or lose your funds. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"DebasementRisk"},"Debasement Risk"),":")," Can the federation issue more claims to bitcoin than they own. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"RegulatoryRisk"},"Regulatory Risk"),":")," Can the federation be unilaterally shut down or forced to cease operations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"TrustLNGateways"},"LN Gateway Censorship Risk"),":")," What are the risks in LN gateways refusing service to mint users."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"Transaction-Contract-Fulfilment"},"Transaction Censorship Risk"),":")," In what instance could a federation refuse service. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"BackupDeanonymization"},"Deanonymisation of backups:"))," Can the federation leak identity information from your backup.")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"This is under constant revision, please raise further trade offs for consideration.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},6553:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fm-trust-model.excalidraw-d0711d425e17e21d2de91bc8ef726592.png"}}]);