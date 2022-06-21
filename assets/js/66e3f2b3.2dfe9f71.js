"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[1147],{3905:function(e,t,n){n.d(t,{Zo:function(){return b},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,p=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(p,i(i({ref:t},b),{},{components:n})):r.createElement(p,i({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return b},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Troubleshooting RabbitMQ",u={unversionedId:"operators-manual/day-4/troubleshooting/rabbitmq",id:"operators-manual/day-4/troubleshooting/rabbitmq",title:"Troubleshooting RabbitMQ",description:"Introduction",source:"@site/docs/operators-manual/day-4/troubleshooting/rabbitmq.md",sourceDirName:"operators-manual/day-4/troubleshooting",slug:"/operators-manual/day-4/troubleshooting/rabbitmq",permalink:"/openmetal-docs/docs/operators-manual/day-4/troubleshooting/rabbitmq",editUrl:"https://github.com/inmotionhosting/openmetal-docs/blob/main/docs/operators-manual/day-4/troubleshooting/rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guidelines for Searching through OpenStack Logs",permalink:"/openmetal-docs/docs/operators-manual/day-4/troubleshooting/log-filtering"},next:{title:"OpenStack Watcher Demonstration",permalink:"/openmetal-docs/docs/operators-manual/day-4/watcher/watcher-demo"}},b=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Symptoms of a RabbitMQ Problem",id:"symptoms-of-a-rabbitmq-problem",children:[],level:2},{value:"How Check your RabbitMQ Cluster&#39;s Status",id:"how-check-your-rabbitmq-clusters-status",children:[],level:2},{value:"List RabbitMQ Queues",id:"list-rabbitmq-queues",children:[],level:2},{value:"RabbitMQ and Network Partitions",id:"rabbitmq-and-network-partitions",children:[],level:2},{value:"Redeploy RabbitMQ Cluster",id:"redeploy-rabbitmq-cluster",children:[],level:2}],c={toc:b};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting-rabbitmq"},"Troubleshooting RabbitMQ"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"RabbitMQ is the central messaging system used by your Private Cloud,\nallowing all OpenStack services to communicate with one another. Should\nthere be an issue with this communication chain, your cloud may not\nfunction as expected. If requests in Horizon are not completing as\nbefore, or seem to get stuck, you may have an issue with RabbitMQ. In\nthis guide, we explain symptoms of a RabbitMQ issue and generally how to\naddress them."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"rabbitmq#prerequisites"},"Prerequisites")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"rabbitmq#symptoms-of-a-rabbitmq-problem"},"Symptoms of a RabbitMQ\nProblem")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"rabbitmq#how-check-your-rabbitmq-cluster-s-status"},"How Check your RabbitMQ Cluster's\nStatus")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"rabbitmq#list-rabbitmq-queues"},"List RabbitMQ\nQueues")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"rabbitmq#addressing-network-partitions"},"Addressing Network\nPartitions")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"../kolla-ansible/redeploy-rabbitmq#redeploy-rabbitmq-cluster"},"Redeploy RabbitMQ\nCluster"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This guide requires root access over SSH to your Private Cloud's control\nplane nodes. You should be comfortable using the command line when\ntroubleshooting RabbitMQ."),(0,a.kt)("h2",{id:"symptoms-of-a-rabbitmq-problem"},"Symptoms of a RabbitMQ Problem"),(0,a.kt)("p",null,"Actions hang in Horizon or when using OpenStackClient. For example when\nan instance is created but never completes, you may have an issue with\nRabbitMQ. Additionally, say you try to delete something in Horizon, but\nthe item hangs indefinitely and is never actually deleted. This\nindicates a probable issue with RabbitMQ."),(0,a.kt)("h2",{id:"how-check-your-rabbitmq-clusters-status"},"How Check your RabbitMQ Cluster's Status"),(0,a.kt)("p",null,"The command ",(0,a.kt)("inlineCode",{parentName:"p"},"rabbitmqctl cluster_status")," is used to report the status of\nyour cloud's RabbitMQ cluster. This is a quick way to determine the\nhealth of the RabbitMQ cluster."),(0,a.kt)("p",null,"RabbitMQ is deployed into Docker containers which changes the way you\ninteract with the cluster. To check the status of your cloud's RabbitMQ\ncluster, from a control plane node as root, execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec -it rabbitmq rabbitmqctl cluster_status\n")),(0,a.kt)("h2",{id:"list-rabbitmq-queues"},"List RabbitMQ Queues"),(0,a.kt)("p",null,"List queue name, current count of queued messages, and count of messages\nconsumed for a private cloud's RabbitMQ cluster and put the output into\na table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec -it rabbitmq rabbitmqctl list_queues -p / name messages consumers --formatter pretty_table\n")),(0,a.kt)("p",null,"For example, listing the first few queues:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# docker exec -it rabbitmq rabbitmqctl list_queues -p / name messages consumers | head -20\nTimeout: 60.0 seconds ...\nListing queues for vhost / ...\nname    messages        consumers\nheat-engine-listener_fanout_7025924940fc4f11b89ed31afe5a642c    0       1\nscheduler_fanout_257bb53015e3478db4c7c36236923300       0       1\nreply_7c1ef96102e643a8bd8827f7191cf4cc  0       1\nreply_742233f6bbbb47e196d53e834dffd912  0       0\nheat-engine-listener.7b6e3335-0745-4c38-a78c-93eca7f9b336       0       0\nwatcher.applier.control_fanout_97961841bc9e4304b1dbfe6da039ee0c 0       1\nreply_733a0bc0a2e248aea9c307d2dbb6b88b  0       1\nneutron-vo-SecurityGroupRule-1.0_fanout_a6dad4171bb94d0aa97ae30b218b779a        0       1\nengine_fanout_917e9c14d41d4d69be11122b1bd28485  0       1\nreply_b9fa7b24616f40eb9be6e4cb70ebd9d2  0       0\nq-l3-plugin_fanout_190b34d25d7444ecb3d901abb971f93f     0       1\nreply_849a66b5d7e74d099d89ed842832a7ae  0       1\nmagnum-conductor.reobzilz72y4   0       0\nmagnum-conductor_fanout_97e11c7c5ebc46fabfe57adf45a05b11        0       1\nreply_faad7408773c4e7ebbaa9abfb9c0534a  0       1\ncinder-volume.lovely-ladybug.local@rbd-1_fanout_1d3ef02f49f148618fcb36163687b9cd        0       1\nengine_fanout_28b15b87d3ec4541b0d7731b928f6852  0       1\n")),(0,a.kt)("h2",{id:"rabbitmq-and-network-partitions"},"RabbitMQ and Network Partitions"),(0,a.kt)("p",null,"Although uncommon with a stable cloud platform, with RabbitMQ, it is\npossible for the cluster to go into a ",(0,a.kt)("strong",{parentName:"p"},"Network Partition"),". To better\nunderstand and resolve these types of issues, see RabbitMQ's ",(0,a.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/partitions.html"},"Clustering\nand Network Paritions")," guide."),(0,a.kt)("h2",{id:"redeploy-rabbitmq-cluster"},"Redeploy RabbitMQ Cluster"),(0,a.kt)("p",null,"In worst case scenarios it is possible to redeploy your cloud's RabbitMQ\ncluster. This tends to be a last resort effort to get RabbitMQ\nfunctioning again. Kolla Ansible is used to redeploy a cloud's RabbitMQ\ncluster. For more, see ",(0,a.kt)("a",{parentName:"p",href:"../kolla-ansible/redeploy-rabbitmq"},"How to Redeploy RabbitMQ Cluster using Kolla\nAnsible"),"."))}d.isMDXComponent=!0}}]);