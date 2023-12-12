"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const o={},r="Streamlit Web UI Interface",l={unversionedId:"Streamlit/streamlit-interface",id:"Streamlit/streamlit-interface",title:"Streamlit Web UI Interface",description:"Features:",source:"@site/docs/2.Streamlit/1.streamlit-interface.md",sourceDirName:"2.Streamlit",slug:"/Streamlit/streamlit-interface",permalink:"/sygil-webui/docs/Streamlit/streamlit-interface",draft:!1,editUrl:"https://github.com/Sygil-Dev/sygil-webui/tree/main/docs/2.Streamlit/1.streamlit-interface.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Stable Diffusion WebUI Using Docker",permalink:"/sygil-webui/docs/Installation/docker-guide"},next:{title:"Gradio Web UI Interface",permalink:"/sygil-webui/docs/Gradio/gradio-interface"}},s={},u=[{value:"Features:",id:"features",level:2},{value:"Text To Image",id:"text-to-image",level:2},{value:"Image To Image",id:"image-to-image",level:2},{value:"Text To Video",id:"text-to-video",level:2},{value:"Options:",id:"options",level:4},{value:"SD Concepts Library",id:"sd-concepts-library",level:2},{value:"Textual Inversion",id:"textual-inversion",level:2},{value:"Model Manager",id:"model-manager",level:2},{value:"Tools",id:"tools",level:2},{value:"Settings",id:"settings",level:2}],m={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"streamlit-web-ui-interface"},"Streamlit Web UI Interface"),(0,i.kt)("h2",{id:"features"},"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clean and easy to use UI: A clean and simple UI with an easy to use design.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Support for widescreen displays.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic Image Preview: This allows you to see how your image is looking during the generation process in real time or near real time (no more waiting until the end to see your image).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop Button: A stop button to stop your generation mid-way if you do not like how your result is looking based on the image preview.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An integrated gallery to show the generations for a prompt or session (Coming soon!)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Better optimization VRAM usage optimization, less errors for bigger generations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ability to load and use almost any ",(0,i.kt)("inlineCode",{parentName:"p"},"ckpt")," models or model from HuggingFace.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Text2Video: Generate video clips from text prompts right from the Web UI thanks to Diffusion Walk.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Concepts Library: Easy to browse and use textual inversion library of custom embeddings others people (or yourself) have made via textual inversion.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Textual Inversion: Allow you to create your own embeddings from images and use them in the UI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Actively being developed with new features being added and planned - Stay Tuned!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Streamlit is now the new primary UI for the project moving forward.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Currently in active development but still missing some of the features present in the Gradio Interface (Post-Processing tab).")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"text-to-image"},"Text To Image"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5950).Z,width:"1823",height:"1474"})),(0,i.kt)("p",null,"Streamlit Text2Image allows for a modern, but well known, Stable Diffusion Textual Image generation experience. Here is a quick description of some of the features of Text2Image and what they do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Width and Height: Control the size of the generated image (Default is 512px)"),(0,i.kt)("li",{parentName:"ul"},"Classifier Free Guidance (CFG): How closely the final image should follow your prompt (Default is 7.5)"),(0,i.kt)("li",{parentName:"ul"},"Seed: The number (or word) used to generate an image with."),(0,i.kt)("li",{parentName:"ul"},"Images Per Batch: The number of images to generate consecutively (Does not affect VRAM usage)"),(0,i.kt)("li",{parentName:"ul"},"Number of Batches: How many images to generate at once (Very VRAM Intensive)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Steps: The quality of the final output, higher is better (Default is 30)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Method: Which sampler to use to generate the image (Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"k_euler"),")")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"image-to-image"},"Image To Image"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(111).Z,width:"1823",height:"1474"})),(0,i.kt)("p",null,"Streamlit Image2Image allows for you to take an image, be it generated by Stable Diffusion or otherwise, and use it as a base for another generation. This has the potential to really enhance images and fix issues with initial Text2Image generations. It also includes some built-in drawing and masking tools to help create custom generations. Some notable features of Gradio Image2Image are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Image Editor Mode: Choose whether you wish to mask, crop, or uncrop the image"),(0,i.kt)("li",{parentName:"ul"},"Mask Mode: Allows you to decide if a drawn mask should be generated or kept"),(0,i.kt)("li",{parentName:"ul"},"Denoising Strength: How much of the generated image should replace the original image. (default is 75%)"),(0,i.kt)("li",{parentName:"ul"},"Width and Height: Control the size of the generated image (Default is 512px)"),(0,i.kt)("li",{parentName:"ul"},"Classifier Free Guidance (CFG): How closely the final image should follow your prompt (Default is 7.5)"),(0,i.kt)("li",{parentName:"ul"},"Seed: The number (or word) used to generate an image with"),(0,i.kt)("li",{parentName:"ul"},"Images Per Batch: The number of images to generate consecutively (Does not affect VRAM)"),(0,i.kt)("li",{parentName:"ul"},"Number of Batches: How many images to generate at once (Very VRAM Intensive)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Steps: The quality of the final output, higher is better (Default is 30)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Method: Which sampler to use to generate the image (Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"k_euler"),")")),(0,i.kt)("h2",{id:"text-to-video"},"Text To Video"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2122).Z,width:"1919",height:"934"})),(0,i.kt)("p",null,"The Text2Video tab allow you to generate videos based on a text prompt, it does so by using diffusion walk which generates images using txt2img and then interpolate them in order to walk between prompts or parts of a prompt. As of right now you can only use a single prompt which is then duplicated based on the number of seeds you use."),(0,i.kt)("h4",{id:"options"},"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Width: The width in pixels for your output image.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Height: The height in pixels for your output image.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CFG: How close you want clip to guide the generation toward your prompt.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Seed: Seed to use during generation, can be an integer, a word or several integers and words separated by comma. When multiple seeds are used the resulting video might be more consistent than when using a single seed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Max Duration in Seconds: How long your video should be in seconds.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Custom Model: A list of models from the HuggingFace website to use, any model hosted on HuggingFace can be used for txt2vid. To add a new model to this list you need to edit the config file on ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/webui/userconfig_streamlit.yaml"),", find the ",(0,i.kt)("inlineCode",{parentName:"p"},"txt2vid")," section and add your model under ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_models_list"),", use other models there for reference on how the format should looks like.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sampling Steps: How many steps to perform on an image, this can be seen as the amount of denoising steps performed on the image, higher values mean you get an image with less noise, it also affects the amount of repetition on the image you will get. For higher resolutions with short prompts and long prompts with low resolution you need to increase the number of samplings steps to get a better result, otherwise the amount of repetition on the image will increase exponentially if you use a lower sampling steps value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inference Steps: Extra denoising steps performed between frames/images. This helps make the video more consistent and jump less around, higher values are always better but will make it so the video takes longer for generate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scheduler: Scheduler to use for inference.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Beta Schedule Type: Scheduler type to use."))),(0,i.kt)("h2",{id:"sd-concepts-library"},"SD Concepts Library"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9156).Z,width:"1842",height:"1986"})),(0,i.kt)("p",null,"The Concept Library allows for the easy usage of custom textual inversion models. These models may be loaded into ",(0,i.kt)("inlineCode",{parentName:"p"},"models/custom/sd-concepts-library")," and will appear in the Concepts Library in Streamlit. To use one of these custom models in a prompt, either copy it using the button on the model, or type ",(0,i.kt)("inlineCode",{parentName:"p"},"<model-name>")," in the prompt where you wish to use it."),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sygil-Dev/sygil-webui/blob/master/docs/7.concepts-library.md"},"Concepts Library")," section to learn more about how to use these tools."),(0,i.kt)("h2",{id:"textual-inversion"},"Textual Inversion"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Textual Inversion allows you to create your own embed files training the model in a few images to teach it a new concept based on what is already in the original model, this is fast and do not need too many resources to do so. You can train a new concept to use on the Concepts Library with Textual Inversion, once you finish training it you can then use it on the concepts library."),(0,i.kt)("h2",{id:"model-manager"},"Model Manager"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7278).Z,width:"1913",height:"904"})),(0,i.kt)("p",null,"The Model Manager page allows you to download models with the click of a button, instead of having to go and manually find the link to download a model and then finding where to put it on your disk for the app to detect it we made it so the Model Manager page does most of the heavy lifting for you."),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("p",null,"This section is a work in progress."),(0,i.kt)("p",null,"The idea behind it is to provide extra tools for advanced users to do things they need that are not possible with other normal pages. This is intended mainly for developers or technical people wanting to do more than just basic stuff with the UI and even integrating their own things into it."),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5894).Z,width:"1920",height:"939"})),(0,i.kt)("p",null,"The Settings page allows you to customize how you want Streamlit to run. These changes will be saved to a personalized user setting file in ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/webui/userconfig_streamlit.yaml"),", this file is independent from the defaults file located in ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/webui/webui_streamlit.yaml")," and will not be reset after updates unless a mayor change that would break some options is released, in which case this file will be reset to the defaults values and you would need to configure your settings on the Settings page again. After editing the settings on the Settings page you need to scroll down and hit the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button for it to take effect, you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset")," button to reset your settings manually to the defaults in case you made a mistake with any of your settings and you need to reset them, so, feel free to experiment with them and test which settings work best for you and which don't."))}p.isMDXComponent=!0},9156:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamlit-concepts-7e3ba6c8a4eb22f699385bf1ee436952.png"},111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamlit-i2i-7f852e4362c181d0d5bbe674d1d4b586.png"},7278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamlit-model-manager-e08b9b1e3e21f0679b6d689f74892585.png"},5894:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamlit-settings-045add0cc3e51396bc1bc777b5898ff7.png"},5950:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamlit-t2i-de3507101ca2060d1b7b5d4070686e34.png"},2122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamlit-t2v-becdae3d4dc02022e81eeb528f32f702.png"}}]);