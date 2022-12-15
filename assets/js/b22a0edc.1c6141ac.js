"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[7823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},i="Honey Badger Byzantine Fault Tolerant Consensus",s={unversionedId:"CommonTerms/HBBFTConsensus",id:"CommonTerms/HBBFTConsensus",title:"Honey Badger Byzantine Fault Tolerant Consensus",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/CommonTerms/HBBFTConsensus.md",sourceDirName:"CommonTerms",slug:"/CommonTerms/HBBFTConsensus",permalink:"/docs/CommonTerms/HBBFTConsensus",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/CommonTerms/HBBFTConsensus.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blind Signatures & eCash",permalink:"/docs/CommonTerms/Blind Signatures"},next:{title:"Shamir Secret Sharing",permalink:"/docs/CommonTerms/ShamirSecret"}},l={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"honey-badger-byzantine-fault-tolerant-consensus"},"Honey Badger Byzantine Fault Tolerant Consensus"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,a.kt)("p",null,"Because it takes such a central part in a federated mint we will begin with explaining the properties of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Byzantine_fault"},"Byzantine Fault Tolerant (BFT)")," consensus algorithms. "),(0,a.kt)("p",null,"A byzantine fault not only allows a party to go offline, but also to maliciously continue participating in the protocol. In the following we will use  ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," as the total number of participants in a protocol and ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," as the maximum amount of faulty ones among them."),(0,a.kt)("p",null,"We define a BFT consensus algorithm as an algorithm that allows all honest parties to agree on a common set of items as long as fewer than ",(0,a.kt)("inlineCode",{parentName:"p"},"f + 1")," of the participants are malicious. "),(0,a.kt)("p",null,"These items may be contributed by any participant and there should be no risk of targeted censorship of items. One such protocol is ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2016/199.pdf"},"Honey Badger")," BFT (HBBFT). We will mainly use it as a reference for BFT consensus properties but note that similar but more efficient ones exist (most notably ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2020/841.pdf"},"Dumbo")," and ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2103.09425"},"hybrids")," built on top of it)."),(0,a.kt)("p",null,"We generally assume the consensus runs in rounds, producing a common subset of the contributions made by the participants. At the start of each round each participant ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," is expected to propose a set of items ",(0,a.kt)("inlineCode",{parentName:"p"},"Ci")," to the consensus. "),(0,a.kt)("p",null,"After the BFT consensus algorithm has finished (note: this involves a lot of back-and-forth communication which we ignore for now) every honest participant learns the same subset ",(0,a.kt)("inlineCode",{parentName:"p"},"C \u2286 C1,\u2026,Cn")," "),(0,a.kt)("p",null,"The consensus set ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," contains at least ",(0,a.kt)("inlineCode",{parentName:"p"},"n \u2212 f")," contributions from different participants. "),(0,a.kt)("p",null,"Note how this implies that if more than ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," participants propose the same item said item is guaranteed to be included in the next consensus output."),(0,a.kt)("p",null,"The consensus protocols we are discussing, asynchronous ones, can only handle about ",(0,a.kt)("inlineCode",{parentName:"p"},"n/3")," faulty nodes, so this will also be our assumption when building our protocol on top if not stated otherwise."))}c.isMDXComponent=!0}}]);