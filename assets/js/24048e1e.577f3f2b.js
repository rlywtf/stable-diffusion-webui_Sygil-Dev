"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>p});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return n?i.createElement(m,o(o({ref:t},f),{},{components:n})):i.createElement(m,o({ref:t},f))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={},o="Custom Models",l={unversionedId:"custom-models",id:"custom-models",title:"Custom Models",description:"\x3c!--",source:"@site/docs/6.custom-models.md",sourceDirName:".",slug:"/custom-models",permalink:"/sygil-webui/docs/custom-models",draft:!1,editUrl:"https://github.com/Sygil-Dev/sygil-webui/tree/main/docs/6.custom-models.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SD Concepts Library",permalink:"/sygil-webui/docs/concepts-library"}},s={},u=[{value:"Stable Diffusion versions:",id:"stable-diffusion-versions",level:2},{value:"Waifu Diffusion versions:",id:"waifu-diffusion-versions",level:2},{value:"Trinart:",id:"trinart",level:2},{value:"Unofficial Model List:",id:"unofficial-model-list",level:2}],f={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-models"},"Custom Models"),(0,r.kt)("p",null,"You can use other ",(0,r.kt)("em",{parentName:"p"},"versions")," of Stable Diffusion, and ",(0,r.kt)("em",{parentName:"p"},"fine-tunes")," of Stable Diffusion."),(0,r.kt)("p",null,"Any model with the ",(0,r.kt)("inlineCode",{parentName:"p"},".ckpt")," extension can be placed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"models/custom")," folder and used in the UI. The filename of the model will be used to show the model on the drop-down menu on the UI from which you can select and use your custom model so, make sure it has a good filename so you can recognize it from the drop-down menu."),(0,r.kt)("h1",{id:"official-models-supported"},"Official models supported:"),(0,r.kt)("h2",{id:"stable-diffusion-versions"},"Stable Diffusion versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"stable-diffusion-v1-3"},(0,r.kt)("a",{parentName:"h3",href:"https://huggingface.co/CompVis/stable-diffusion-v1-3"},"Stable Diffusion v1-3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"stable-diffusion-v1-4"},(0,r.kt)("a",{parentName:"h3",href:"https://huggingface.co/CompVis/stable-diffusion-v1-4"},"Stable Diffusion v1-4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"stable-diffusion-v1-5"},(0,r.kt)("a",{parentName:"h3",href:"https://huggingface.co/runwayml/stable-diffusion-v1-5"},"Stable Diffusion v1-5")))),(0,r.kt)("h2",{id:"waifu-diffusion-versions"},"Waifu Diffusion versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"waifu-diffusion-v12"},"Waifu Diffusion v1.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"waifu-diffusion-v13"},(0,r.kt)("a",{parentName:"h3",href:"https://huggingface.co/hakurei/waifu-diffusion-v1-3"},"Waifu Diffusion v1.3")))),(0,r.kt)("h2",{id:"trinart"},"Trinart:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"trinart-characters"},(0,r.kt)("a",{parentName:"h3",href:"https://huggingface.co/naclbit/trinart_characters_19.2m_stable_diffusion_v1"},"Trinart Characters"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"trinart-v2"},(0,r.kt)("a",{parentName:"h3",href:"https://huggingface.co/naclbit/trinart_stable_diffusion_v2"},"Trinart v2"))),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h2",{id:"unofficial-model-list"},"Unofficial Model List:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"rentry-stable-diffusion-model-list"},(0,r.kt)("a",{parentName:"h3",href:"https://rentry.org/sdmodels"},"Rentry Stable Diffusion Model List.")))))}c.isMDXComponent=!0}}]);