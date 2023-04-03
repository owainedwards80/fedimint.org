"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[4070],{4808:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(d,".").concat(m)]||c[m]||h[m]||o;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(557),a=(n(6687),n(4808));const o={},r="What does the Federation do?",s={unversionedId:"FAQs/TheFederation",id:"FAQs/TheFederation",title:"What does the Federation do?",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/FAQs/TheFederation.md",sourceDirName:"FAQs",slug:"/FAQs/TheFederation",permalink:"/docs/FAQs/TheFederation",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/FAQs/TheFederation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How do I join a federation?",permalink:"/docs/FAQs/JoiningAFederation"},next:{title:"Why consider community custody?",permalink:"/docs/FAQs/WhyCommunityCustody"}},d={},l=[{value:"How does the federation custody the bitcoin?",id:"how-does-the-federation-custody-the-bitcoin",level:2},{value:"Is there some ability to set limitations on withdrawals if a user requests it (max withdrawal per day, one off, etc.)?",id:"is-there-some-ability-to-set-limitations-on-withdrawals-if-a-user-requests-it-max-withdrawal-per-day-one-off-etc",level:2},{value:"Can the federation guardians collude and steal from me?",id:"can-the-federation-guardians-collude-and-steal-from-me",level:2},{value:"Can a single bad guardian rewrite my transaction to steal coins?",id:"can-a-single-bad-guardian-rewrite-my-transaction-to-steal-coins",level:2},{value:"Can guardians prevent me from pegging out?",id:"can-guardians-prevent-me-from-pegging-out",level:2},{value:"If it uses multisig custodians, what is the fundamental difference to a DPoS blockchain?\xa0",id:"if-it-uses-multisig-custodians-what-is-the-fundamental-difference-to-a-dpos-blockchain",level:2},{value:"How are upgrades and changes made to a federation (who decides if the rules change)?",id:"how-are-upgrades-and-changes-made-to-a-federation-who-decides-if-the-rules-change",level:2},{value:"What are the differences between using Liquid vs Fedimint?",id:"what-are-the-differences-between-using-liquid-vs-fedimint",level:2}],u={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-does-the-federation-do"},"What does the Federation do?"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,a.kt)("p",null,"The federation is the collective term for the guardians who actively run the Fedimint software on behalf of the users. They will run the software to custody, redeem and enforce contracts in the federation. "),(0,a.kt)("h2",{id:"how-does-the-federation-custody-the-bitcoin"},"How does the federation custody the bitcoin?"),(0,a.kt)("p",null,"The federation guardians utilize bitcoin multi signature wallet to manage the on chain funds. "),(0,a.kt)("p",null,"These are used to redeem federation eCash notes for bitcoin on chain. "),(0,a.kt)("h2",{id:"is-there-some-ability-to-set-limitations-on-withdrawals-if-a-user-requests-it-max-withdrawal-per-day-one-off-etc"},"Is there some ability to set limitations on withdrawals if a user requests it (max withdrawal per day, one off, etc.)?"),(0,a.kt)("p",null,"This is possible in theory but the most practical implementations would require the introduction of some form of account based system, which would not be compatible with the Chaumian mint protocol.\xa0 One potential option would be to have the potential to keep a proportion of funds in an account based system where withdrawal thresholds can be enforced while a user\u2019s remaining balance is held in chaumian e-cash notes."),(0,a.kt)("h2",{id:"can-the-federation-guardians-collude-and-steal-from-me"},"Can the federation guardians collude and steal from me?"),(0,a.kt)("p",null,"Guardian collusion is prevented by the configuration of the federation and the selection of its guardians. The federation uses an asynchronous BFT consensus, e.g. 3/5 or 7/13 that would require a majority to collude to steal your coins."),(0,a.kt)("p",null,"Within fedimint you are explicitly trusting that the federation will not collude, their incentive not to is 2nd degree social connections so a fedimint user should know in person who at least 1 of their federation guardians are and be capable of directly interacting with them."),(0,a.kt)("h2",{id:"can-a-single-bad-guardian-rewrite-my-transaction-to-steal-coins"},"Can a single bad guardian rewrite my transaction to steal coins?"),(0,a.kt)("p",null,"On receipt of a payment, you will want to swap out the eCash notes you received for new eCash notes. "),(0,a.kt)("p",null,"When you submit this transaction, you will specify the input coins provided and the new blind signature requests that you are trading them for."),(0,a.kt)("p",null,"This is constructed as a transaction which includes the inputs, outputs and an associated public key known to the user. The user then signs the transaction on submission."),(0,a.kt)("p",null,"This signature is part of the validation check on the consensus algorithm, as such no inputs or outputs can be changed by a rogue guardian (for example to steal the outputs) without failing the consensus round. "),(0,a.kt)("h2",{id:"can-guardians-prevent-me-from-pegging-out"},"Can guardians prevent me from pegging out?"),(0,a.kt)("p",null,"Yes. If enough guardians collude they can prevent you from pegging out of the federation and receiving bitcoin. Of course if the same amount of guardians collude they can simply steal the coins. "),(0,a.kt)("p",null,'This is why "knowing your federation is so important".'),(0,a.kt)("h2",{id:"if-it-uses-multisig-custodians-what-is-the-fundamental-difference-to-a-dpos-blockchain"},"If it uses multisig custodians, what is the fundamental difference to a DPoS blockchain?\xa0"),(0,a.kt)("p",null,"(",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ricardoplopes/status/1531659058607964167?t=PUTMcNfA6fYbJ7wZsVPzPw&s=19"},"Originally asked on Twitter"),")"),(0,a.kt)("p",null,"A - It's not a blockchain - so it doesn't have the severe limitations a blockchain imposes (and which are only needed in very few cases).\nB - It's not proof of stake (delegated or otherwise) - so having more wealth doesn't confer additional rights to the owner."),(0,a.kt)("p",null,"In DPOS, blocks are produced by whoever stakes the most coins. In Fedimint the transactions are validated by an explicit and unchanging group of federation members. Users opt in to having these people validate their transactions. They would choose to do this because of an existing trust / reputation relationship they have with the federation members."),(0,a.kt)("h2",{id:"how-are-upgrades-and-changes-made-to-a-federation-who-decides-if-the-rules-change"},"How are upgrades and changes made to a federation (who decides if the rules change)?"),(0,a.kt)("p",null,'An interesting thing to think about\xa0 is "who decides if the rules change?"'),(0,a.kt)("p",null,"Will it usually happen that all federation members agree to an upgrade? Or might it be that only a majority agree and they replace the dissenting members? This is likely to be federation dependent and many governance models could be experimented with and implemented.\xa0 In any event, for a change to be enacted, it is likely that all guardians must approve it and upgrade their individual servers."),(0,a.kt)("h2",{id:"what-are-the-differences-between-using-liquid-vs-fedimint"},"What are the differences between using Liquid vs Fedimint?"),(0,a.kt)("p",null,"There are a few differences:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Liquid network is a blockchain,"),(0,a.kt)("li",{parentName:"ul"},"Fedimint is a Federated server system,"),(0,a.kt)("li",{parentName:"ul"},"Liquid uses Confidential Transactions to blind payment amounts but not transaction flows"),(0,a.kt)("li",{parentName:"ul"},"Fedimint uses the Chaumian Mint protocol to create anonymous e-cash to make almost all transaction information private"),(0,a.kt)("li",{parentName:"ul"},"Liquid is designed to enable a few financial institutions to form one federation"),(0,a.kt)("li",{parentName:"ul"},"Fedimint is designed to enable arbitrary diverse communities \u2014 ranging from friends to companies \u2014 to form thousands of independent federations"),(0,a.kt)("li",{parentName:"ul"},"Liquid doesn't currently support Lightning"),(0,a.kt)("li",{parentName:"ul"},"Fedimint supports Lightning")),(0,a.kt)("p",null,"In summary, compared to Liquid, Fedimint doesn't require a side chain, has better privacy, faster transactions, will be more decentralized, and is interoperable with Lightning."),(0,a.kt)("p",null,"However, the increased privacy means that Fedimint has a greater risk of inflation on bitcoin denominated eCash notes within the system (but not on the Bitcoin main chain). This is mitigated (but not eliminated) by the requirement for second party trust in choice of Fedimint guardians, and in future, the ability to perform attestations."))}h.isMDXComponent=!0}}]);