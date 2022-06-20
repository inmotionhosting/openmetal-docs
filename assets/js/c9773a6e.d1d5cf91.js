"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[2378],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9306:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),i=["components"],s={},l="How to View your Private Cloud's Resource Usage",u={unversionedId:"operators-manual/day-2/resource-usage/cloud-resource-usage",id:"operators-manual/day-2/resource-usage/cloud-resource-usage",title:"How to View your Private Cloud's Resource Usage",description:"Introduction",source:"@site/docs/operators-manual/day-2/resource-usage/cloud-resource-usage.md",sourceDirName:"operators-manual/day-2/resource-usage",slug:"/operators-manual/day-2/resource-usage/cloud-resource-usage",permalink:"/openmetal-docs/docs/operators-manual/day-2/resource-usage/cloud-resource-usage",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/operators-manual/day-2/resource-usage/cloud-resource-usage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to OpenMetal Central and Your Private Cloud Core",permalink:"/openmetal-docs/docs/operators-manual/day-1/intro-to-openmetal-private-cloud"},next:{title:"How to Check Ceph's Status and Disk Usage",permalink:"/openmetal-docs/docs/operators-manual/day-2/check-ceph-status-disk-usage"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Datadog",id:"datadog",children:[],level:2},{value:"Resources of a Private Cloud",id:"resources-of-a-private-cloud",children:[{value:"View Memory and Compute Usage in Horizon",id:"view-memory-and-compute-usage-in-horizon",children:[],level:3},{value:"View Instance State Across Cluster",id:"view-instance-state-across-cluster",children:[],level:3},{value:"How to Access Resource Information from Ceph",id:"how-to-access-resource-information-from-ceph",children:[],level:3}],level:2},{value:"Adding nodes to your Ceph Cluster",id:"adding-nodes-to-your-ceph-cluster",children:[],level:2},{value:"Removing nodes from your Ceph Cluster",id:"removing-nodes-from-your-ceph-cluster",children:[],level:2}],d={toc:c};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-view-your-private-clouds-resource-usage"},"How to View your Private Cloud's Resource Usage"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This guide details how to find the resource usage of your private cloud.\nOutlined within this article, we explore how to utilize the Horizon\nDashboard to determine the total memory and compute usage for a project\nas well as how to view instances stored on each node. Next, we look at\ndisk usage by explaining how to briefly interact with your cloud's Ceph\ncluster using the command line. Finally, we go over adding and removing\nnodes from your Ceph cluster."),(0,n.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"cloud-resource-usage#datadog"},"Datadog"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"cloud-resource-usage#resources-of-a-private-cloud"},"Resources of a Private\nCloud")),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"cloud-resource-usage#view-memory-and-compute-usage-in-horizon"},"View Memory and Compute Usage in\nHorizon")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"cloud-resource-usage#view-instance-state-across-cluster"},"View Instance State Across\nCluster")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"cloud-resource-usage#how-to-access-resource-information-from-ceph"},"How to Access Resource Information from\nCeph")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"cloud-resource-usage#adding-nodes-to-your-ceph-cluster"},"Adding nodes to your Ceph\nCluster"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"cloud-resource-usage#removing-nodes-from-your-ceph-cluster"},"Removing nodes from your Ceph\nCluster")))),(0,n.kt)("h2",{id:"datadog"},"Datadog"),(0,n.kt)("p",null,"The primary option for accessing resource data for your private cloud is\nthrough the use of Datadog. Datadog allows for the collection of logs\nfrom a wide variety of services. Datadog then has the ability to\nvisualize and alert based on this log data. Through Datadog you have the\nability to customize logging for your containers as well as any new\nservices you may add. If you are interested in installing and enabling\nDatadog visit ",(0,n.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/blog/openstack-monitoring-datadog/"},"Monitor OpenStack with\nDatadog"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 1:")," Sample Datadog dashboard"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(4570).Z})),(0,n.kt)("h2",{id:"resources-of-a-private-cloud"},"Resources of a Private Cloud"),(0,n.kt)("p",null,"There are currently three variations to private cloud deployments:\nSmall, Standard, and Large. All private cloud deployments have a cluster\nof three hyper-converged servers but will have different allocations of\nmemory, storage, and CPU processing power depending on the configuration\nand hardware. In addition, you have the option of adding additional\nhardware nodes to your cluster."),(0,n.kt)("h3",{id:"view-memory-and-compute-usage-in-horizon"},"View Memory and Compute Usage in Horizon"),(0,n.kt)("p",null,"To view the resources used by your cloud, you have to be the admin user\nand assigned to the admin project. Once you are in the admin project,\nnavigate to ",(0,n.kt)("strong",{parentName:"p"},"Admin -",">"," Compute -",">"," Hypervisors"),". This section, lists\nthe following items:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VCPU Usage"),(0,n.kt)("li",{parentName:"ul"},"Memory Usage"),(0,n.kt)("li",{parentName:"ul"},"Local disk usage")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 2:")," Hypervisor Summary showing disk and resource usage"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(9823).Z})),(0,n.kt)("h3",{id:"view-instance-state-across-cluster"},"View Instance State Across Cluster"),(0,n.kt)("p",null,"There is also an option to see the location of your instances within\nyour cluster. To view this information, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Admin -",">"," Compute\n-",">"," Instances"),". You have the option to see the project, the host, as\nwell as the IP address, and state."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 3:")," Summary of Instances"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(2079).Z})),(0,n.kt)("h3",{id:"how-to-access-resource-information-from-ceph"},"How to Access Resource Information from Ceph"),(0,n.kt)("p",null,"To access information regarding your Ceph cluster's resource pools, you\nwill need to use Ceph's CLI. These are a summary of some useful resource\nmonitoring and health commands. For further information, visit Ceph's\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.ceph.com/en/latest/man/8/ceph/"},"Ceph Administration Tool"),"\npage."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ceph -s")," to check the status of Ceph"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ceph df")," to list the disk usage overview"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ceph health detail")," provides details about existing health issues"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ceph osd pool ls")," to list pools add ",(0,n.kt)("inlineCode",{parentName:"li"},"detail")," for additional details\nregarding replication and health metrics")),(0,n.kt)("h2",{id:"adding-nodes-to-your-ceph-cluster"},"Adding nodes to your Ceph Cluster"),(0,n.kt)("p",null,"In order to add additional hardware for your cluster, first review\n",(0,n.kt)("a",{parentName:"p",href:"../../day-3/add-remove-hardware-nodes#cloud-hardware-selection-best-practices"},"Cloud Hardware Best\nPractices"),".\nThis is to ensure that you have selected the appropriate node for your\ncloud. Once you have selected the appropriate node, navigate to\n",(0,n.kt)("a",{parentName:"p",href:"https://central.openmetal.io"},"OpenMetal Central")," and click on your\n",(0,n.kt)("strong",{parentName:"p"},"Assets")," page. The option to add hardware is located in the top right\ncorner as ",(0,n.kt)("strong",{parentName:"p"},"Add Hardware"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 4:")," Picture of Assets Page where hardware is added to Private\nClouds"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(3072).Z})),(0,n.kt)("h2",{id:"removing-nodes-from-your-ceph-cluster"},"Removing nodes from your Ceph Cluster"),(0,n.kt)("p",null,"To remove nodes from your Ceph Cluster, you must file a support ticket\nwithin ",(0,n.kt)("a",{parentName:"p",href:"https://central.openmetal.io"},"OpenMetal Central"),". A member of\nour support staff will be able to further assist you with removing\nhardware from your private cloud. For assistance in submitting support\ntickets, visit ",(0,n.kt)("a",{parentName:"p",href:"https://central.openmetal.io"},"How to Reach Support")," in\nthe heading of our ",(0,n.kt)("a",{parentName:"p",href:"https://central.openmetal.io"},"Introduction to OpenMetal Central\nGuide"),"."))}p.isMDXComponent=!0},4570:function(e,t,o){t.Z=o.p+"assets/images/figure1-613f9f7a3b0c5648e9d3c1e9a1ff8db4.png"},9823:function(e,t,o){t.Z=o.p+"assets/images/figure2-39478919b09fe7d9279537816ea85fae.png"},2079:function(e,t,o){t.Z=o.p+"assets/images/figure3-337c4125b964a59f63b4e94e5d15985a.png"},3072:function(e,t,o){t.Z=o.p+"assets/images/figure4a-5b7f10344dc737bbd1cc4790d22e9c9a.png"}}]);