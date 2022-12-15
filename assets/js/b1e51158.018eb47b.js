"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[5013],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return o?i.createElement(m,a(a({ref:t},c),{},{components:o})):i.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3902:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=o(7462),n=(o(7294),o(3905));const r={sidebar_position:2},a="Custodial Risk",s={unversionedId:"TradeOffs/NotYourKeys",id:"TradeOffs/NotYourKeys",title:"Custodial Risk",description:"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/TradeOffs/02-NotYourKeys.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/NotYourKeys",permalink:"/docs/TradeOffs/NotYourKeys",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/TradeOffs/02-NotYourKeys.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Trust Model Trade Offs",permalink:"/docs/TradeOffs/Trust-Trade-Offs"},next:{title:"Debasement Risk",permalink:"/docs/TradeOffs/DebasementRisk"}},l={},u=[{value:"The Risk",id:"the-risk",level:2},{value:"The Mitigation",id:"the-mitigation",level:2},{value:"Know your Federation",id:"know-your-federation",level:3},{value:"Limit Exposure",id:"limit-exposure",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custodial-risk"},"Custodial Risk"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,n.kt)("p",null,"A common and reasonable critique of the Fedimint protocol is the level of trust which is invested in the Federation guardians, as this is seen as a violation of a core norm of the bitcoin community."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Not your keys not your coins",src:o(76).Z,width:"640",height:"216"}))),(0,n.kt)("p",null,"The context here is that whilst you control your own eCash notes, you are very much giving up custody of your bitcoin to the federation guardians."),(0,n.kt)("p",null,"In this eCash notes are IOUs redeemable to the Fedimint for bitcoin."),(0,n.kt)("p",null,"This is a reasonable concern for bitcoiners coming from a full self sovereign custody arrangement, in which they hold and backup their own private keys."),(0,n.kt)("h2",{id:"the-risk"},"The Risk"),(0,n.kt)("p",null,"The risk with letting other people hold your bitcoin keys has always been the risk of catastrophic failure through one of several concerns, for example:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The custodian simply refuses to give your bitcoin back or steals it."),(0,n.kt)("li",{parentName:"ol"},"The custodian loses access to your bitcoin and can't return them when required."),(0,n.kt)("li",{parentName:"ol"},'The custodian is big enough to be a "honeypot" that is hacked and looses access to your bitcoin.'),(0,n.kt)("li",{parentName:"ol"},"The custodian is impaired by government regulation and has to give up access to your bitcoin (",(0,n.kt)("a",{parentName:"li",href:"RegulatoryRisk"},"covered separately in trade off 3"),").")),(0,n.kt)("p",null,"Whilst the likelihood of each of these scenarios differs depending on the implementation of the mint, the end result is always the same, you lose access to your bitcoin, which can represent a significant part of your savings."),(0,n.kt)("h2",{id:"the-mitigation"},"The Mitigation"),(0,n.kt)("p",null,'As outlined in "',(0,n.kt)("a",{parentName:"p",href:"../GettingStarted/Why-Fedimint"},"Why Fedimint"),'" the purpose of the protocol is not necessarily to convince existing bitcoiners to give up on their self custody, but instead to move more custodial bitcoin out of centralized services and into Community Custody.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spectrum of custody",src:o(1666).Z,width:"1208",height:"545"})),(0,n.kt)("p",null,"Where users are comfortable and capable with self custody this would be a better solution for eliminating this risk."),(0,n.kt)("p",null,"There are however, some options to mitigate this risk."),(0,n.kt)("p",null,"First some setting."),(0,n.kt)("p",null,"In Fedimint you make some trade offs to your custody arrangements in return for benefits that include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Privacy preserving payments;"),(0,n.kt)("li",{parentName:"ul"},"Privacy preserving community custody;"),(0,n.kt)("li",{parentName:"ul"},"Simplified back up and recovery operations;"),(0,n.kt)("li",{parentName:"ul"},"Simple user experience and convenience.")),(0,n.kt)("p",null,"This may or may not be an adequate trade off on the face of it, but we can also take the following mitigating actions."),(0,n.kt)("h3",{id:"know-your-federation"},"Know your Federation"),(0,n.kt)("p",null,"It is important that the user has direct knowledge of the guardians running their federation and it is highly recommended that you only join federations where some or all of the guardians are people that you have a strong pre-existing relationship with or trust in."),(0,n.kt)("p",null,"Rather than KYC (Know Your Customer) Fedimint promotes KYF (Know your Friend / Know your Family / Know Your Federation)."),(0,n.kt)("p",null,"For example, if I ran a Federation for my family and friends I am highly unlikely to run off with the money due to the high level of social costs which are attached to the action."),(0,n.kt)("p",null,"The likelihood of this risk is increased where you have a more distant relationship with the federation guardians."),(0,n.kt)("h3",{id:"limit-exposure"},"Limit Exposure"),(0,n.kt)("p",null,"A second mitigation would be to limit the exposure of funds to the federation guardians in terms of both size and time."),(0,n.kt)("p",null,"For instance keeping only smaller amounts of satoshis in larger federations; or where larger denominations are needed only moving the coins in for a small period of time that covers the spending."))}d.isMDXComponent=!0},76:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/fm-notyourkeys.excalidraw-39ce618e48a809fbceff405c33847b47.png"},1666:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/fm-spectrum-custody.excalidraw-4db14732495b99429517511026155dfa.png"}}]);