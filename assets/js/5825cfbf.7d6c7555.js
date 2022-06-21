"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[9546],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4958:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Working with Images",u={unversionedId:"users_manual/using_creating_images",id:"users_manual/using_creating_images",title:"Working with Images",description:"Images in OpenStack are what powers instances. In this guide, you will",source:"@site/docs/users_manual/using_creating_images.md",sourceDirName:"users_manual",slug:"/users_manual/using_creating_images",permalink:"/openmetal-docs/docs/users_manual/using_creating_images",editUrl:"https://github.com/inmotionhosting/openmetal-docs/blob/main/docs/users_manual/using_creating_images.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Networking in OpenStack",permalink:"/openmetal-docs/docs/users_manual/network_ip_traffic"},next:{title:"How to Create an Instance",permalink:"/openmetal-docs/docs/users_manual/create_an_instance"}},p=[{value:"List and Upload Images",id:"list-and-upload-images",children:[{value:"<strong>List images</strong>",id:"list-images",children:[],level:3},{value:"<strong>Upload images</strong>",id:"upload-images",children:[],level:3}],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],c={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-images"},"Working with Images"),(0,i.kt)("p",null,"Images in OpenStack are what powers instances. In this guide, you will\nlearn how to view images, upload your own, and make snapshots of images."),(0,i.kt)("p",null,"An image is a file that contains a bootable operating system. Many\ndifferent cloud image sources are available for download from major\noperating system providers like CentOS, Ubuntu, and Debian to name a\nfew. You can also make your own images from\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.openstack.org/image-guide/create-images-manually.html"},"scratch"),"\nor create them from volumes or running instances. Snapshots of instances\ncan be created which can serve both as a backup and also a template for\nother instances."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"list-and-upload-images"},"List and Upload Images"),(0,i.kt)("h3",{id:"list-images"},(0,i.kt)("strong",{parentName:"h3"},"List images")),(0,i.kt)("p",null,"To begin, you will need to know where to find images in OpenStack."),(0,i.kt)("p",null,"In Horizon, images are found on the left through ",(0,i.kt)("strong",{parentName:"p"},"Project -",">"," Compute\n-",">"," Images"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(4503).Z})),(0,i.kt)("h3",{id:"upload-images"},(0,i.kt)("strong",{parentName:"h3"},"Upload images")),(0,i.kt)("p",null,"To upload an image into OpenStack, the image needs to first exist on\nyour machine, and then you can use Horizon to upload it."),(0,i.kt)("p",null,"This section will walk you through uploading the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cirros-dev/cirros"},"CirrOS")," image."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1")," -- Download the CirrOS image"),(0,i.kt)("p",null,"To start, first download the CirrOS image to your machine."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://download.cirros-cloud.net/0.5.2/cirros-0.5.2-x86_64-disk.img"},"latest version of\nCirrOS"),"\nis available from their download page. Ensure the latest version of the\nCirrOS image is downloaded."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2")," -- Upload the image into OpenStack"),(0,i.kt)("p",null,"To upload an image navigate to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">"," Compute -",">"," Images"),". From\nthere, click the ",(0,i.kt)("strong",{parentName:"p"},"Create Image")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(81).Z})),(0,i.kt)("p",null,"Next, fill in the required details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(7768).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Image Name")," - This is what you want to call this image in\nOpenStack"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Image Description")," - This is an optional description for the\nimage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"File")," - Where is the file located on your machine?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Format")," - The format should be ",(0,i.kt)("strong",{parentName:"li"},"QCOW2 - QEMU Emulator"))),(0,i.kt)("p",null,"Optionally, you can specify requirements, like minimum disk space and\nRAM, for the image under the ",(0,i.kt)("strong",{parentName:"p"},"Image Requirements")," heading."),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"?")," icon for assistance with specifics."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"With this guide complete, move on to the next guide, which explains ",(0,i.kt)("a",{parentName:"p",href:"create_an_instance"},"how\nto create an Instance")," in Horizon."))}m.isMDXComponent=!0},81:function(e,t,n){t.Z=n.p+"assets/images/um_create_image-6aa330d64606aa817d49cd0d0328ab76.png"},7768:function(e,t,n){t.Z=n.p+"assets/images/um_create_image_form-9871680867b6ef631cedbe36ac8556b4.png"},4503:function(e,t,n){t.Z=n.p+"assets/images/um_images-30e3d8d7a6083a893b428d733cfc917e.png"}}]);