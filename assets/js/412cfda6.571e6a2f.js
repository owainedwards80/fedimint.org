"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[1434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},r="Running a Fedimint",s={unversionedId:"GettingStarted/Running-a-Fedimint",id:"GettingStarted/Running-a-Fedimint",title:"Running a Fedimint",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/GettingStarted/06-Running-a-Fedimint.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Running-a-Fedimint",permalink:"/docs/GettingStarted/Running-a-Fedimint",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/GettingStarted/06-Running-a-Fedimint.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How do Fedimint transactions work?",permalink:"/docs/GettingStarted/How-FM-Transactions-Work"},next:{title:"Trade Offs",permalink:"/docs/category/trade-offs"}},l={},d=[{value:"Deployment Concepts",id:"deployment-concepts",level:2},{value:"Deployment UI",id:"deployment-ui",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-fedimint"},"Running a Fedimint"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,o.kt)("p",null,"A fedimint requires a set of trusted guardians to establish the federation, hold the keys to the bitcoin multisig and to custody the hardware that runs the fedimint nodes."),(0,o.kt)("p",null,'These guardians will play a pivotal role in securing funds and running the fedimint infrastructure on behalf of the community. Therefore it is envisaged that these guardians will be part of a "second party trust" network with the user.'),(0,o.kt)("p",null,"Second party trust refers to a situation where there is a direct existing trust relationship between the individual committing funds to the fedimint and the guardians of the fedimint."),(0,o.kt)("p",null,"Some examples of this second party trust relationship could be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The guardian is a technically literate member of your family."),(0,o.kt)("li",{parentName:"ul"},"The guardians are members of your broad friendship network."),(0,o.kt)("li",{parentName:"ul"},"The guardians are respected members of a local community with high degree of social capital that they stand to lose through misdeeds."),(0,o.kt)("li",{parentName:"ul"},"The guardians are known institutions with a history of honest service.")),(0,o.kt)("p",null,"This is a broad membership base of society and as such there is likely to be a very wide range of practical use cases and varied implementation patterns for fedimints."),(0,o.kt)("p",null,"As such, it is not the scope of the protocol to define how or why fedimints are deployed in practice, and no such specific templates are given, due to the variation in need and requirements of the community."),(0,o.kt)("p",null,"Instead we expect to see a world where there a wide range (millions of individual fedimints) ",(0,o.kt)("a",{parentName:"p",href:"https://fedimint.org/docs/GettingStarted/Who-are-the-fms"},"deployed across the full spectrum of custody"),"."),(0,o.kt)("p",null,"To support this approach Fedimint provides the protocol with minimal tools to run, monitor and manage operations."),(0,o.kt)("p",null,"A set of APIs is then used to support 3rd party applications and services to extend these services and meet specific user needs, allowing for innovation in a competitive ecosystem outside of the core protocol."),(0,o.kt)("h2",{id:"deployment-concepts"},"Deployment Concepts"),(0,o.kt)("p",null,"Whilst the specific deployment, configuration and tools used to manage a fedimint may differ there are some commonalities that are likely to be familiar across fedimint deployments."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Fedimints will utilize a number of fedimint nodes, operated by "guardians".'),(0,o.kt)("li",{parentName:"ol"},"Fedimint nodes will be connected via public networks and may utilize different anonymous networking protocols or overlay networks for speed, simplicity or security."),(0,o.kt)("li",{parentName:"ol"},"All fedimint nodes are modular in design."),(0,o.kt)("li",{parentName:"ol"},"Any particular node may run both core modules (eCash, multisig) as well as 3rd party modules."),(0,o.kt)("li",{parentName:"ol"},"The specific configuration ad module install base of a fedimint node will be driven by the needs of the fedimint community."),(0,o.kt)("li",{parentName:"ol"},"Fedimint nodes will come to consensus on installed modules.")),(0,o.kt)("p",null,"Fedimint guardians as the custodians of the fedimint nodes will have responsibility for backing up an private keys and custodying the hardware on behalf of the community."),(0,o.kt)("p",null,"Each fedimint node would be lightweight in practice, akin to a pruned bitcoin node. There will however be growth in the storage requirement which whilst small at first will grow as more eCash is spent and redeemed."),(0,o.kt)("p",null,"The form factor of fedimint nodes could be any number of options from laptops, towers, smartphones, single board systems or remotely operated computers in the cloud - as long as the system can run the bitcoind and fedimintd daemons and connect to the internet."),(0,o.kt)("h3",{id:"deployment-ui"},"Deployment UI"),(0,o.kt)("p",null,'The deployment of fedimint, currently utilizes a simple UI which allows a user to view thier private key and build a federation by adding additional "peer" private keys from the other federation guardians.'),(0,o.kt)("p",null,"This allows the fedimint scripts to collect the appropriate information before automating the remainder of the deployment."),(0,o.kt)("p",null,"This in turn is then to be made accessible via an API to allow additional 3rd party services to innovate on the federation setup and management process."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To be updated with screenshots as the UI is pushed to the project.")))}p.isMDXComponent=!0}}]);