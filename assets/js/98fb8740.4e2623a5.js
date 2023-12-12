"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=i,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={},r="Gradio Web UI Interface",l={unversionedId:"Gradio/gradio-interface",id:"Gradio/gradio-interface",title:"Gradio Web UI Interface",description:"The Gradio WebUI is considered legacy or deprecated, it is no longer being maintained and it lacks several features compared to new versions. Always try to use the most recent version of our UI when possible.",source:"@site/docs/3.Gradio/2.gradio-interface.md",sourceDirName:"3.Gradio",slug:"/Gradio/gradio-interface",permalink:"/sygil-webui/docs/Gradio/gradio-interface",draft:!1,editUrl:"https://github.com/Sygil-Dev/sygil-webui/tree/main/docs/3.Gradio/2.gradio-interface.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streamlit Web UI Interface",permalink:"/sygil-webui/docs/Streamlit/streamlit-interface"},next:{title:"Post Processing",permalink:"/sygil-webui/docs/post-processing"}},s={},d=[{value:"Gradio Web UI Features:",id:"gradio-web-ui-features",level:3},{value:"Launching The Gradio Web UI",id:"launching-the-gradio-web-ui",level:3},{value:"Text2Image",id:"text2image",level:2},{value:"Image2Image",id:"image2image",level:2},{value:"Image Lab",id:"image-lab",level:2},{value:"Scene2Image",id:"scene2image",level:2},{value:"Gradio Optional Customizations",id:"gradio-optional-customizations",level:2},{value:"List of command line options",id:"list-of-command-line-options",level:2}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gradio-web-ui-interface"},"Gradio Web UI Interface"),(0,i.kt)("admonition",{title:"Warning",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The Gradio WebUI is considered legacy or deprecated, it is no longer being maintained and it lacks several features compared to new versions. Always try to use the most recent version of our UI when possible.")),(0,i.kt)("h3",{id:"gradio-web-ui-features"},"Gradio Web UI Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Older UI design that is fully functional and feature complete."),(0,i.kt)("li",{parentName:"ul"},"Has access to all upscaling models, including LSDR."),(0,i.kt)("li",{parentName:"ul"},"Dynamic prompt entry automatically changes your generation settings based on ",(0,i.kt)("inlineCode",{parentName:"li"},"--params")," in a prompt."),(0,i.kt)("li",{parentName:"ul"},"Includes quick and easy ways to send generations to Image2Image or the Image Lab for upscaling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Note, the Gradio interface is no longer being actively developed and is only receiving bug fixes."))),(0,i.kt)("h3",{id:"launching-the-gradio-web-ui"},"Launching The Gradio Web UI"),(0,i.kt)("p",null,"To launch the Gradio Web UI, you will need to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open your command line in the repo folder and run the ",(0,i.kt)("inlineCode",{parentName:"li"},"webui.cmd")," file."))),(0,i.kt)("li",{parentName:"ul"},"Linux:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open your terminal to the repo folder and run ",(0,i.kt)("inlineCode",{parentName:"li"},"webui.sh"),", then press ",(0,i.kt)("inlineCode",{parentName:"li"},"2")," when prompted."))),(0,i.kt)("li",{parentName:"ul"},"Manually:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open your terminal to the repo folder."),(0,i.kt)("li",{parentName:"ul"},"Activate the conda environment using ",(0,i.kt)("inlineCode",{parentName:"li"},"conda activate ldm")),(0,i.kt)("li",{parentName:"ul"},"Run the command ",(0,i.kt)("inlineCode",{parentName:"li"},"python scripts/relauncher.py"))))),(0,i.kt)("p",null,"Once the Gradio Web UI launches, a link will appear in your command line or terminal, click or copy and paste that link into your browser to access the interface."),(0,i.kt)("h2",{id:"text2image"},"Text2Image"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5517).Z,width:"1922",height:"1368"})),(0,i.kt)("p",null,"Gradio Text2Image allows for the classic and well known Stable Diffusion Textual Image generation. Here is a quick description of some of the features of Text2Image and what they do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Width and Height: Control the size of the generated image (Default is 512px)"),(0,i.kt)("li",{parentName:"ul"},"Classifer Free Guidance (CFG): How closely the final image should follow your prompt (Default is 7.5)"),(0,i.kt)("li",{parentName:"ul"},"Seed: The number (or word) used to generate an image with"),(0,i.kt)("li",{parentName:"ul"},"Images Per Batch: The number of images to generate consecutively (Does not affect VRAM)"),(0,i.kt)("li",{parentName:"ul"},"Number of Batches: How many images to generate at once (Very VRAM Intensive)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Steps: The quality of the final output, higher is better with dimiishing returns (Default is 50)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Method: Which sampler to use to generate the image (Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"k_lms"),")"),(0,i.kt)("li",{parentName:"ul"},"Push to Img2Img: Send the image to the Image2Image tool to continue working with it via Stable Diffusion"),(0,i.kt)("li",{parentName:"ul"},"Send to Image Lab: Send the image to the Image Lab for Enhancement and Upscaling.")),(0,i.kt)("h2",{id:"image2image"},"Image2Image"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8902).Z,width:"1709",height:"1989"})),(0,i.kt)("p",null,"Gradio Image2Image allows for you to take an image, be it generated by Stable Diffusion or otherwise, and use it as a base for another generation. This has the potential to really enhance images and fix issues with initial Text2Image generations. It also includes some built-in drawing and masking tools to help create custom generations. Some notable features of Gradio Image2Image are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Image Editor Mode: Choose whether you wish to mask, crop, or uncrop the image"),(0,i.kt)("li",{parentName:"ul"},"Mask Mode: Allows you to decide if a drawn mask should be generated or kept"),(0,i.kt)("li",{parentName:"ul"},"Denoising Strength: How much of the generated image should replace the original image. (default is 70%)"),(0,i.kt)("li",{parentName:"ul"},"Width and Height: Control the size of the generated image (Default is 512px)"),(0,i.kt)("li",{parentName:"ul"},"Classifier Free Guidance (CFG): How closely the final image should follow your prompt (Default is 7.5)"),(0,i.kt)("li",{parentName:"ul"},"Seed: The number (or word) used to generate an image with"),(0,i.kt)("li",{parentName:"ul"},"Images Per Batch: The number of images to generate consecutively (Does not affect VRAM)"),(0,i.kt)("li",{parentName:"ul"},"Number of Batches: How many images to generate at once (Very VRAM Intensive)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Steps: The quality of the final output, higher is better (Default is 50)"),(0,i.kt)("li",{parentName:"ul"},"Sampling Method: Which sampler to use to generate the image (Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"k_lms"),")")),(0,i.kt)("h2",{id:"image-lab"},"Image Lab"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1750).Z,width:"1910",height:"1774"})),(0,i.kt)("p",null,"The Gradio Image Lab is a central location to access image enhancers and upscalers. Though some options are available in all tabs (GFPGAN and realESRGAN), the Image Lab is where all of these tools may be easily accessed. These upscalers can be used for generated images sent to the lab, or on other images uploaded to it. The tools included here are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GFPGAN: Fixes and enhances faces"),(0,i.kt)("li",{parentName:"ul"},"realESRGAN: A 4x upscaler that uses a GAN to achieve its results"),(0,i.kt)("li",{parentName:"ul"},"GoBig: A 2x upscaler that uses realESRGAN, but preserves more detail"),(0,i.kt)("li",{parentName:"ul"},"LSDR: A 4x upscaler that uses Latent Diffusion, preserving a lot more detail at the cost of speed and VRAM"),(0,i.kt)("li",{parentName:"ul"},"GoLatent: Uses LSDR to do a 4x upscale, then GoBig to make a final 8x upscale with great detail preservation.")),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/sygil-webui/docs/post-processing"},"Image Enhancers")," section to learn more about how to use these tools."),(0,i.kt)("h2",{id:"scene2image"},"Scene2Image"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5437).Z,width:"2537",height:"2097"})),(0,i.kt)("p",null,"Gradio Scene2Image allows you to define layers of images in a markdown-like syntax."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Would it be possible to have a layers system where we could do have\nforeground, mid, and background objects which relate to one another and\nshare the style? So we could say generate a landscape, one another layer\ngenerate a castle, and on another layer generate a crowd of people.")),(0,i.kt)("p",null,"You write a a multi-line prompt that looks like markdown, where each section declares one layer.\nIt is hierarchical, so each layer can have their own child layers.\nIn the frontend you can find a brief documentation for the syntax, examples and reference for the various arguments.\nHere a summary:"),(0,i.kt)("p",null,"Markdown headings, e.g. '# layer0', define layers.\nThe content of sections define the arguments for image generation.\nArguments are defined by lines of the form 'arg:value' or 'arg=value'."),(0,i.kt)("p",null,"Layers are hierarchical, i.e. each layer can contain more layers.\nThe number of '#' increases in the headings of a child layers.\nChild layers are blended together by their image masks, like layers in image editors.\nBy default alpha composition is used for blending.\nOther blend modes from ",(0,i.kt)("a",{parentName:"p",href:"https://pillow.readthedocs.io/en/stable/reference/ImageChops.html"},"ImageChops")," can also be used."),(0,i.kt)("p",null,'Sections with "prompt" and child layers invoke Image2Image, without child layers they invoke Text2Image.\nThe result of blending child layers will be the input for Image2Image.'),(0,i.kt)("p",null,'Without "prompt" they are just images, useful for mask selection, image composition, etc.\nImages can be initialized with "color", resized with "resize" and their position specified with "pos".\nRotation and rotation center are "rotation" and "center".'),(0,i.kt)("p",null,"Mask can automatically be selected by color, color at pixels of the image, or by estimated depth."),(0,i.kt)("p",null,"You can chose between two different depth estimation models, see frontend reference for name of arguments.\n",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces/atsantiago/Monocular_Depth_Filter"},"Monocular depth estimation")," can be selected as depth model ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".\n",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces/pytorch/MiDaS"},"MiDaS depth estimation"),", used by default, can be selected as depth model ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,"Depth estimation can be used for traditional 3d reconstruction.\nUsing ",(0,i.kt)("inlineCode",{parentName:"p"},"transform3d=True")," the pixels of an image can be rendered from another perspective or with a different field of view.\nFor this you specify pose and field of view that corresponds to the input image and a desired output pose and field of view.\nThe poses describe the camera position and orientation as x,y,z,rotate_x,rotate_y,rotate_z tuple with angles describing rotations around axes in degrees.\nThe camera coordinate system is the pinhole camera as described and pictured in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html"},'OpenCV "Camera Calibration and 3D Reconstruction" documentation'),"."),(0,i.kt)("p",null,"When the camera pose ",(0,i.kt)("inlineCode",{parentName:"p"},"transform3d_from_pose")," where the input image was taken is not specified, the camera pose ",(0,i.kt)("inlineCode",{parentName:"p"},"transform3d_to_pose")," to which the image is to be transformed is in terms of the input camera coordinate system:\nWalking forwards one depth unit in the input image corresponds to a position ",(0,i.kt)("inlineCode",{parentName:"p"},"0,0,1"),".\nWalking to the right is something like ",(0,i.kt)("inlineCode",{parentName:"p"},"1,0,0"),".\nGoing downwards is then ",(0,i.kt)("inlineCode",{parentName:"p"},"0,1,0"),"."),(0,i.kt)("h2",{id:"gradio-optional-customizations"},"Gradio Optional Customizations"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Gradio allows for a number of possible customizations via command line arguments/terminal parameters. If you are running these manually, they would need to be run like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"python scripts/webui.py --param"),". Otherwise, you may add your own parameter customizations to ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/relauncher.py"),", the program that automatically relaunches the Gradio interface should a crash happen."),(0,i.kt)("p",null,"Inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"relauncher.py")," are a few preset defaults most people would likely access:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Run upscaling models on the CPU\nextra_models_cpu = False\n\n# Automatically open a new browser window or tab on first launch\nopen_in_browser = False\n\n# Run Stable Diffusion in Optimized Mode - Only requires 4Gb of VRAM, but is significantly slower\noptimized = False\n\n# Run in Optimized Turbo Mode - Needs more VRAM than regular optimized mode, but is faster\noptimized_turbo = False\n\n# Creates a public xxxxx.gradio.app share link to allow others to use your interface (requires properly forwarded ports to work correctly)\nshare = False\n\n# Generate tiling images\ntiling = False\n")),(0,i.kt)("p",null,"Setting any of these to ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," will enable those parameters on every launch. Alternatively, if you wish to enable a ",(0,i.kt)("inlineCode",{parentName:"p"},"--parameter")," not listed here, you can enter your own custom ones in this field inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/relauncher.py"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Enter other `--arguments` you wish to use - Must be entered as a `--argument ` syntax\nadditional_arguments = ""\n')),(0,i.kt)("h2",{id:"list-of-command-line-options"},"List of command line options"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This is a list of the full set of optional parameters you can launch the Gradio Interface with."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: webui.py [-h] [--ckpt CKPT] [--cli CLI] [--config CONFIG] [--defaults DEFAULTS] [--esrgan-cpu] [--esrgan-gpu ESRGAN_GPU] [--extra-models-cpu] [--extra-models-gpu] [--gfpgan-cpu] [--gfpgan-dir GFPGAN_DIR] [--gfpgan-gpu GFPGAN_GPU] [--gpu GPU]\n                [--grid-format GRID_FORMAT] [--inbrowser] [--ldsr-dir LDSR_DIR] [--n_rows N_ROWS] [--no-half] [--no-progressbar-hiding] [--no-verify-input] [--optimized-turbo] [--optimized] [--outdir_img2img [OUTDIR_IMG2IMG]] [--outdir_imglab [OUTDIR_IMGLAB]]\n                [--outdir_txt2img [OUTDIR_TXT2IMG]] [--outdir [OUTDIR]] [--filename_format [FILENAME_FORMAT]] [--port PORT] [--precision {full,autocast}] [--realesrgan-dir REALESRGAN_DIR] [--realesrgan-model REALESRGAN_MODEL] [--save-metadata]\n                [--share-password SHARE_PASSWORD] [--share] [--skip-grid] [--skip-save] [--no-job-manager] [--max-jobs MAX_JOBS] [--tiling]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --ckpt CKPT           path to checkpoint of model (default: models/ldm/stable-diffusion-v1/model.ckpt)\n  --cli CLI             don't launch web server, take Python function kwargs from this file. (default: None)\n  --config CONFIG       path to config which constructs model (default: configs/stable-diffusion/v1-inference.yaml)\n  --defaults DEFAULTS   path to configuration file providing UI defaults, uses same format as cli parameter (default: configs/webui/webui.yaml)\n  --esrgan-cpu          run ESRGAN on cpu (default: False)\n  --esrgan-gpu ESRGAN_GPU\n                        run ESRGAN on specific gpu (overrides --gpu) (default: 0)\n  --extra-models-cpu    run extra models (GFGPAN/ESRGAN) on cpu (default: False)\n  --extra-models-gpu    run extra models (GFGPAN/ESRGAN) on gpu (default: False)\n  --gfpgan-cpu          run GFPGAN on cpu (default: False)\n  --gfpgan-dir GFPGAN_DIR\n                        GFPGAN directory (default: ./GFPGAN)\n  --gfpgan-gpu GFPGAN_GPU\n                        run GFPGAN on specific gpu (overrides --gpu) (default: 0)\n  --gpu GPU             choose which GPU to use if you have multiple (default: 0)\n  --grid-format GRID_FORMAT\n                        png for lossless png files; jpg:quality for lossy jpeg; webp:quality for lossy webp, or webp:-compression for lossless webp (default: jpg:95)\n  --inbrowser           automatically launch the interface in a new tab on the default browser (default: False)\n  --ldsr-dir LDSR_DIR   LDSR directory (default: ./LDSR)\n  --n_rows N_ROWS       rows in the grid; use -1 for autodetect and 0 for n_rows to be same as batch_size (default: -1) (default: -1)\n  --no-half             do not switch the model to 16-bit floats (default: False)\n  --no-progressbar-hiding\n                        do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware accleration in browser) (default: False)\n  --no-verify-input     do not verify input to check if it's too long (default: False)\n  --optimized-turbo     alternative optimization mode that does not save as much VRAM but runs siginificantly faster (default: False)\n  --optimized           load the model onto the device piecemeal instead of all at once to reduce VRAM usage at the cost of performance (default: False)\n  --outdir_img2img [OUTDIR_IMG2IMG]\n                        dir to write img2img results to (overrides --outdir) (default: None)\n  --outdir_imglab [OUTDIR_IMGLAB]\n                        dir to write imglab results to (overrides --outdir) (default: None)\n  --outdir_txt2img [OUTDIR_TXT2IMG]\n                        dir to write txt2img results to (overrides --outdir) (default: None)\n  --outdir [OUTDIR]     dir to write results to (default: None)\n  --filename_format [FILENAME_FORMAT]\n                        filenames format (default: None)\n  --port PORT           choose the port for the gradio webserver to use (default: 7860)\n  --precision {full,autocast}\n                        evaluate at this precision (default: autocast)\n  --realesrgan-dir REALESRGAN_DIR\n                        RealESRGAN directory (default: ./RealESRGAN)\n  --realesrgan-model REALESRGAN_MODEL\n                        Upscaling model for RealESRGAN (default: RealESRGAN_x4plus)\n  --save-metadata       Store generation parameters in the output png. Drop saved png into Image Lab to read parameters (default: False)\n  --share-password SHARE_PASSWORD\n                        Sharing is open by default, use this to set a password. Username: webui (default: None)\n  --share               Should share your server on gradio.app, this allows you to use the UI from your mobile app (default: False)\n  --skip-grid           do not save a grid, only individual samples. Helpful when evaluating lots of samples (default: False)\n  --skip-save           do not save indiviual samples. For speed measurements. (default: False)\n  --no-job-manager      Don't use the experimental job manager on top of gradio (default: False)\n  --max-jobs MAX_JOBS   Maximum number of concurrent 'generate' commands (default: 1)\n  --tiling              Generate tiling images (default: False)\n")))}p.isMDXComponent=!0},8902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gradio-i2i-558dd1952e902a71a857a761b0f7b03f.png"},5437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gradio-s2i-f66f1efe114ea29fac6a6144a035a5d0.png"},5517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gradio-t2i-b9386d6220c91cee327010fbaf564202.png"},1750:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gradio-upscale-847acc8946be9bb81d57b039f64eb8c5.png"}}]);