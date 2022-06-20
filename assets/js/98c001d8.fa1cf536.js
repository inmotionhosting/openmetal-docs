"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[8201],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9072:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="OpenStack User's Manual",u={unversionedId:"users_manual/index",id:"users_manual/index",title:"OpenStack User's Manual",description:"Private Cloud Core - OpenStack User Manual",source:"@site/docs/users_manual/index.md",sourceDirName:"users_manual",slug:"/users_manual/",permalink:"/openmetal-docs/docs/users_manual/",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/users_manual/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open Metal Manuals",permalink:"/openmetal-docs/docs/intro"},next:{title:"How to Make Backups in OpenStack",permalink:"/openmetal-docs/docs/users_manual/backups"}},s=[{value:"Private Cloud Core - OpenStack User Manual",id:"private-cloud-core---openstack-user-manual",children:[{value:"<strong>Table of Contents</strong>",id:"table-of-contents",children:[],level:3},{value:"Horizon Guides",id:"horizon-guides",children:[],level:3},{value:"Command Line Guides",id:"command-line-guides",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openstack-users-manual"},"OpenStack User's Manual"),(0,o.kt)("h2",{id:"private-cloud-core---openstack-user-manual"},"Private Cloud Core - OpenStack User Manual"),(0,o.kt)("p",null,"Welcome to the OpenStack User's Manual","!"," This documentation is intended\nfor users of an OpenStack cloud who do not have administrative access to\ntheir cloud. In this series of guides, you will learn the steps needed\nto create the building blocks needed for your cloud workload. Topics\ninclude understanding and creating a network within OpenStack, how to\ncreate instances, and how to create backups of data, to name a few.\nThere are two primary ways to work in an OpenStack cloud: Through\nHorizon or the command line. Because of this, the guides are grouped\ninto two categories."),(0,o.kt)("h3",{id:"table-of-contents"},(0,o.kt)("strong",{parentName:"h3"},"Table of Contents")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"horizon-guides"},"Horizon Guides"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"getting_started_with_openstack"},"How to Get Started with\nOpenStack")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"network_ip_traffic"},"Networking in OpenStack")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"using_creating_images"},"Working with Images")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"create_an_instance"},"How to Create an Instance")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"backups"},"Backups"))),(0,o.kt)("h3",{id:"command-line-guides"},"Command Line Guides"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"openstackclient"},"Introduction to OpenStackClient")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"network_ip_traffic_cli"},"Create a Network")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"using_creating_images_cli"},"Manage OpenStack\nImages")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"create_an_instance_cli"},"Create an Instance")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"backups_cli"},"Managing Backups in OpenStack"))))}d.isMDXComponent=!0}}]);