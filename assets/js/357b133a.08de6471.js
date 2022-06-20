"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[9485],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},u="How to Get Started with OpenStack",l={unversionedId:"users_manual/getting_started_with_openstack",id:"users_manual/getting_started_with_openstack",title:"How to Get Started with OpenStack",description:"To get started using OpenStack, you will need to log in to Horizon,",source:"@site/docs/users_manual/getting_started_with_openstack.md",sourceDirName:"users_manual",slug:"/users_manual/getting_started_with_openstack",permalink:"/openmetal-docs/docs/users_manual/getting_started_with_openstack",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/users_manual/getting_started_with_openstack.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"OpenStack User's Manual",permalink:"/openmetal-docs/docs/users_manual/"},next:{title:"Networking in OpenStack",permalink:"/openmetal-docs/docs/users_manual/network_ip_traffic"}},c=[{value:"<strong>Next Steps</strong>",id:"next-steps",children:[],level:2}],p={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-get-started-with-openstack"},"How to Get Started with OpenStack"),(0,a.kt)("p",null,"To get started using OpenStack, you will need to log in to Horizon,\nOpenStack's browser-based dashboard. Your administrator should provide\nyou with the details you need to log in. If you do not have these\ndetails, reach out to your OpenStack administrator."),(0,a.kt)("p",null,"Once logged in, you are presented with the main dashboard of your\nOpenStack project. From here you can see a number of links on the left\nunder the ",(0,a.kt)("strong",{parentName:"p"},"Project")," and ",(0,a.kt)("strong",{parentName:"p"},"Identity")," tabs as well as a summary of the\ncloud usage in the center. You will do most of your work out of the\n",(0,a.kt)("strong",{parentName:"p"},"Project")," tab, where you can spin up instances, create networks and\nsuch. The ",(0,a.kt)("strong",{parentName:"p"},"Identity")," tab is where you will find user-based\ninformation, such as what project your user is associated with or\ndetails about your user."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log in to Horizon")," --------------------"),(0,a.kt)("p",null,"This section demonstrates how to log in to Horizon."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1")," -- Navigate to Horizon"),(0,a.kt)("p",null,"Pull up the domain name provided for Horizon from your administrator in\na browser to load the Horizon login page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Horizon Login Page:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(4342).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2")," -- Log in to Horizon"),(0,a.kt)("p",null,"From here, enter in the provided credentials to log in."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Initial Horizon Dashboard:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(9196).Z})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"next-steps"},(0,a.kt)("strong",{parentName:"h2"},"Next Steps")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"network_ip_traffic"},"next guide")," in this series\nexplains how to create a private network, a basic building block of an\nOpenStack cloud."))}d.isMDXComponent=!0},4342:function(e,t,n){t.Z=n.p+"assets/images/um_horizon_login-cc75bcea24e91a7cae467f04ea881e34.png"},9196:function(e,t,n){t.Z=n.p+"assets/images/um_initial_horizon_login-fb2d96f0d0c012befd8c05cd3ced6223.png"}}]);