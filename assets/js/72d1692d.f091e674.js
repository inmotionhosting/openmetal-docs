"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[3250],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,g=k["".concat(l,".").concat(m)]||k[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4995:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="How to Create an Instance in OpenStack Horizon",p={unversionedId:"operators-manual/day-1/horizon/create-first-instance",id:"operators-manual/day-1/horizon/create-first-instance",title:"How to Create an Instance in OpenStack Horizon",description:"Introduction",source:"@site/docs/operators-manual/day-1/horizon/create-first-instance.md",sourceDirName:"operators-manual/day-1/horizon",slug:"/operators-manual/day-1/horizon/create-first-instance",permalink:"/openmetal-docs/docs/operators-manual/day-1/horizon/create-first-instance",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/operators-manual/day-1/horizon/create-first-instance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Install and Use OpenStack's CLI",permalink:"/openmetal-docs/docs/operators-manual/day-1/command-line/openstackclient"},next:{title:"Create a User and Project in OpenStack Horizon",permalink:"/openmetal-docs/docs/operators-manual/day-1/horizon/create-user-project"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Networking",id:"networking",children:[{value:"Create a Private Network",id:"create-a-private-network",children:[],level:3},{value:"Create a Router",id:"create-a-router",children:[{value:"Connect Router to Private Network",id:"connect-router-to-private-network",children:[],level:4},{value:"View Network Topology",id:"view-network-topology",children:[],level:4}],level:3},{value:"Security Groups",id:"security-groups",children:[{value:"Create an SSH Security Group",id:"create-an-ssh-security-group",children:[],level:4},{value:"Add Rule to SSH Security Group",id:"add-rule-to-ssh-security-group",children:[],level:4}],level:3}],level:2},{value:"How to Create your First Instance",id:"how-to-create-your-first-instance",children:[{value:"Prerequisites",id:"prerequisites",children:[{value:"SSH Public Key",id:"ssh-public-key",children:[],level:4},{value:"Operating System Image",id:"operating-system-image",children:[],level:4}],level:3},{value:"Create your First Instance",id:"create-your-first-instance",children:[],level:3},{value:"Assign and Attach Floating IP",id:"assign-and-attach-floating-ip",children:[],level:3}],level:2}],u={toc:c};function k(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-create-an-instance-in-openstack-horizon"},"How to Create an Instance in OpenStack Horizon"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"With OpenStack, instances, or virtual machines, play a large role in a\ncloud's workload. OpenStack provides a way to create and manage\ninstances with its compute service, called\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.openstack.org/nova/latest/"},"Nova"),". In this guide, we cover\nthe preparatory steps required to create an instance, including setting\nup a private network and router, creating a security group, and how to\nadd an SSH key pair. Then, we explain how to create an instance using\nHorizon."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"create-first-instance#networking"},"Networking")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"create-first-instance#create-a-private-network"},"Create a Private\nNetwork"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"create-first-instance#create-a-router"},"Create a\nRouter")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-first-instance#connect-router-to-private-network"},"Connect Router to Private\nNetwork")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-first-instance#view-network-topology"},"View Network\nTopology")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"create-first-instance#security-groups"},"Security\nGroups")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-first-instance#create-an-ssh-security-group"},"Create an SSH Security\nGroup")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-first-instance#add-rule-to-ssh-security-group"},"Add Rule to SSH Security\nGroup")))))))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"create-first-instance#how-to-create-your-first-instance"},"How to Create your First\nInstance")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"create-first-instance#prerequisites"},"Prerequisites"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"create-first-instance#create-your-first-instance"},"Create your First\nInstance")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-first-instance#ssh-public-key"},"SSH Public\nKey")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-first-instance#operating-system-image"},"Operating System\nImage"))))))))))),(0,i.kt)("h2",{id:"networking"},"Networking"),(0,i.kt)("p",null,"In this section, we explain how to create a private network and router.\nThe instance created later in this guide is created on this private\nnetwork. The router is created so the private network can be connected\nto your cloud's public network, allowing you to assign a floating IP\naddress to it, making the instance accessible over the Internet. Next,\nwe cover where security groups can be found and managed. In these next\nfew sections, we explain how to create the components with a screenshot\nthen follow up with an explanation of the details to fill out."),(0,i.kt)("h3",{id:"create-a-private-network"},"Create a Private Network"),(0,i.kt)("p",null,"To create a private network, begin by navigating to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">","\nNetwork -",">"," Networks"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(2300).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1:")," Networks in Horizon"),(0,i.kt)("p",null,"Load the form to create a network, by navigating to ",(0,i.kt)("strong",{parentName:"p"},"Create Network"),"\nnear the top right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(128).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2:")," Network Tab"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network Name"),": Set a name for the network. This example is called\n",(0,i.kt)("strong",{parentName:"li"},"Private"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable Admin State"),": Leave this checked to enable the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Create Subnet"),": Leave this checked to create a subnet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Availability Zone Hints"),": Leave this option as default.")),(0,i.kt)("p",null,"Next, move on to the ",(0,i.kt)("strong",{parentName:"p"},"Subnet")," tab of this form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(4510).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 3:")," Subnet Tab"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Subnet Name"),": Set a name for the subnet. This example subnet is\ncalled ",(0,i.kt)("strong",{parentName:"li"},"private-subnet"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network Address"),": Select a private network range. For example:\n",(0,i.kt)("inlineCode",{parentName:"li"},"192.168.0.1/24")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IP Version"),": Leave this as IPv4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gateway IP"),": This is optional. If unset, a gateway IP is selected\nautomatically."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disable Gateway"),": Leave this unchecked.")),(0,i.kt)("p",null,"Next, move on to the ",(0,i.kt)("strong",{parentName:"p"},"Subnet Details")," tab of this form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(8343).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 4:")," Subnet Details Tab"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable DHCP"),": Leave this option checked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Allocation Pools"),": Optional, can specify the range from which IPs\nare selected."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DNS Name Servers"),": Optional. Specify any DNS name servers here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host Routes"),": Optional. Specify any host routes here.")),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Create")," to create the network. Once created, it appears in the\nlist of networks."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9652).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 5:")," Network Listing"),(0,i.kt)("h3",{id:"create-a-router"},"Create a Router"),(0,i.kt)("p",null,"You next need to create a router to bridge the connection between the\nprivate network and the public network. The public network is called\n",(0,i.kt)("strong",{parentName:"p"},"External"),"."),(0,i.kt)("p",null,"To create a router, begin by navigating to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">"," Network -",">","\nRouters"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(1047).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 6:")," Router Listing"),(0,i.kt)("p",null,"Load the form to create a router by navigating to ",(0,i.kt)("strong",{parentName:"p"},"Create Router")," near\nthe top right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(468).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 7:")," Create a Router"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Router Name"),": Set a name for the router here. This example router\nis called ",(0,i.kt)("strong",{parentName:"li"},"Router"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable Admin State"),": Leave this checked to enable the router."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"External Network"),": Choose the network ",(0,i.kt)("strong",{parentName:"li"},"External"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Availability Zone Hints"),": Leave this as the default.")),(0,i.kt)("p",null,"Once complete, create the router by pressing ",(0,i.kt)("strong",{parentName:"p"},"Create Router"),"."),(0,i.kt)("h4",{id:"connect-router-to-private-network"},"Connect Router to Private Network"),(0,i.kt)("p",null,"Next, connect the router to the private network, by attaching an\ninterface. Performing this step allows network communication between the\n",(0,i.kt)("strong",{parentName:"p"},"Private")," and ",(0,i.kt)("strong",{parentName:"p"},"External")," networks."),(0,i.kt)("p",null,"To attach an interface to the router, first navigate to the list of\nrouters and locate the one previously created."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(44).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 8:")," Router List"),(0,i.kt)("p",null,"Click the name of the router to access its details page. This is where\nthe interface is attached. There are three tabs: ",(0,i.kt)("strong",{parentName:"p"},"Overview"),",\n",(0,i.kt)("strong",{parentName:"p"},"Interfaces"),", and ",(0,i.kt)("strong",{parentName:"p"},"Static Routes"),". To attach an interface, navigate\nto the ",(0,i.kt)("strong",{parentName:"p"},"Interfaces")," tab then load the form to attach an interface by\nclicking ",(0,i.kt)("strong",{parentName:"p"},"Add Interface")," near the top right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(5327).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 9:")," Router Details"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6213).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 10:")," Attach Interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Subnet"),": Select the appropriate subnet. In this example, we\nchoose the ",(0,i.kt)("strong",{parentName:"li"},"private-subnet"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IP Address"),": Optional. Specify an IP if required, otherwise one\nis selected automatically.")),(0,i.kt)("p",null,"Press ",(0,i.kt)("strong",{parentName:"p"},"Submit")," to attach the ",(0,i.kt)("strong",{parentName:"p"},"Private")," network to this router. The\ninterface is then attached and now listed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(1355).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 11:")," Interface Listing"),(0,i.kt)("h4",{id:"view-network-topology"},"View Network Topology"),(0,i.kt)("p",null,"Should you want to visually see the network topology for your cloud,\nnavigate to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">"," Network -",">"," Network Topology"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6402).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 12:")," Network Topology"),(0,i.kt)("p",null,"This figure indicates the ",(0,i.kt)("strong",{parentName:"p"},"External")," network is connected to the\n",(0,i.kt)("strong",{parentName:"p"},"Private")," network through the router called ",(0,i.kt)("strong",{parentName:"p"},"Router"),"."),(0,i.kt)("h3",{id:"security-groups"},"Security Groups"),(0,i.kt)("p",null,"Security groups allow control of network traffic to and from instances.\nFor example, port 22 can be opened for SSH for a single IP or a range of\nIPs. In this demonstration, we create a security group for SSH access.\nThis security group is then applied to the instance we later create."),(0,i.kt)("p",null,"To view and manage security groups, navigate to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">"," Network\n-",">"," Security Groups"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9077).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 13:")," Security Groups"),(0,i.kt)("p",null,"In this cloud, there exists a single security group called ",(0,i.kt)("strong",{parentName:"p"},"default"),".\nThis security group restricts all incoming (ingress) network traffic and\nallows all outgoing (egress) network traffic. When an instance is\ncreated, this security group is applied by default. To allow the network\ntraffic your instance requires, only open ports as required to just the\nneeded IP ranges."),(0,i.kt)("h4",{id:"create-an-ssh-security-group"},"Create an SSH Security Group"),(0,i.kt)("p",null,"To create a security group for SSH, load the form by navigating to\n",(0,i.kt)("strong",{parentName:"p"},"Create Security Group")," near the top right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(1270).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 14:")," Create Security Group Form"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": Specify a name for the security group. This example\nsecurity group is called ",(0,i.kt)("strong",{parentName:"li"},"SSH"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Optional. Describe the security group if\napplicable.")),(0,i.kt)("h4",{id:"add-rule-to-ssh-security-group"},"Add Rule to SSH Security Group"),(0,i.kt)("p",null,"After creating the SSH security group, we need to add a rule allowing\nSSH traffic. This example demonstrates allowing SSH traffic from the\nfirst hardware node in this cloud to this instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(5113).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 15:")," Manage Security Group Rules"),(0,i.kt)("p",null,"To add a rule, load the form by navigating to ",(0,i.kt)("strong",{parentName:"p"},"Add Rule")," near the top\nright."),(0,i.kt)("p",null,"To follow this example, obtain the IP address of the first hardware node\nof your cloud. You can find this using ",(0,i.kt)("a",{parentName:"p",href:"https://central.openmetal.io/"},"OpenMetal\nCentral")," under your cloud's ",(0,i.kt)("a",{parentName:"p",href:"../intro-to-openmetal-private-cloud#how-to-view-your-hardware-assets"},"Assets\nPage"),".\nTo be consistent, this guide assumes you are working with the first\nhardware node's IP address and the remaining instruction is created with\nthat understanding."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(2857).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 16:")," Add SSH Rule"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule"),": Select ",(0,i.kt)("strong",{parentName:"li"},"SSH"),". When adding rules you can choose from\npredefined options. In this case, we choose the ",(0,i.kt)("strong",{parentName:"li"},"SSH")," rule from\nthe first drop down."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Optional. Provide a description of the rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Remote"),": Select ",(0,i.kt)("strong",{parentName:"li"},"CIDR"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CIDR"),": Specify the IP address of your first hardware node.")),(0,i.kt)("p",null,"Press ",(0,i.kt)("strong",{parentName:"p"},"Add")," to add this rule to the security group. This concludes\ncreating the security group."),(0,i.kt)("h2",{id:"how-to-create-your-first-instance"},"How to Create your First Instance"),(0,i.kt)("p",null,"With the previous steps complete, almost everything is in place to\ncreate your first instance."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h4",{id:"ssh-public-key"},"SSH Public Key"),(0,i.kt)("p",null,"An SSH public key is required to access an instance over SSH. This key\nis injected into the instance when created. An SSH key cannot be added\nto an already running instance."),(0,i.kt)("p",null,"For this guide, we are arranging it so this instance can be accessed\nover SSH from one of the cloud's hardware nodes. Due to this, you must\ncreate an SSH key pair in one of the hardware nodes. The public portion\nof that key pair is associated with the instance created later in this\nguide. To learn how to create this key pair, see the supplementary\nguide: ",(0,i.kt)("a",{parentName:"p",href:"../command-line/create-ssh-key"},"Create SSH Key Pair for an OpenStack Control Plane\nNode"),"."),(0,i.kt)("h4",{id:"operating-system-image"},"Operating System Image"),(0,i.kt)("p",null,"Several operating system images are available with which to create\ninstances. To view available options, navigate to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">"," Compute\n-",">"," Images"),". To upload your own images, see ",(0,i.kt)("a",{parentName:"p",href:"images"},"How to Upload Operating\nSystem Images using Horizon"),"."),(0,i.kt)("h3",{id:"create-your-first-instance"},"Create your First Instance"),(0,i.kt)("p",null,"To create the first instance, begin by navigating to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">","\nCompute -",">"," Instances"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(943).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 17:")," Instances"),(0,i.kt)("p",null,"Pull up the form to create an instance by navigating to ",(0,i.kt)("strong",{parentName:"p"},"Launch\nInstance")," near the top right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6675).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 18:")," Instance Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instance Name"),": Set a name for the instance. This example\ninstance is called ",(0,i.kt)("strong",{parentName:"li"},"Jumpstation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Optional. Set a description if this applies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Availability Zone"),": Leave as the default, which is ",(0,i.kt)("strong",{parentName:"li"},"nova"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Count"),": Controls the number of instances spawned. This example\ncreates a single instance.")),(0,i.kt)("p",null,"Next, move to the ",(0,i.kt)("strong",{parentName:"p"},"Source")," tab allowing you to specify an operating\nsystem image."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(5584).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 19:")," Instance Source"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Select Boot Source"),": In this example, we use ",(0,i.kt)("strong",{parentName:"li"},"Image")," as the\nboot source."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Create New Volume"),": Leave this checked as ",(0,i.kt)("strong",{parentName:"li"},"Yes"),". This creates a\nnew Cinder volume where the specified operating system image is\ncopied into it. The volume ultimately exists with the Ceph cluster,\nin the ",(0,i.kt)("inlineCode",{parentName:"li"},"vms")," pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Volume Size"),": Allow the system to determine this for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete Volume on Instance Delete"),": Leave this option set as\n",(0,i.kt)("strong",{parentName:"li"},"No"),". If checked, when the instance is deleted, the volume is as\nwell.")),(0,i.kt)("p",null,"Under the ",(0,i.kt)("strong",{parentName:"p"},"Available")," section, select the appropriate operating\nsystem. This example uses ",(0,i.kt)("inlineCode",{parentName:"p"},"CentOS 8 Stream (el8-x86_64)"),"."),(0,i.kt)("p",null,"This concludes configuring the instance's source. Next, move to the\n",(0,i.kt)("strong",{parentName:"p"},"Flavor")," tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(5485).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 20:")," Instance Flavor"),(0,i.kt)("p",null,"Flavors are a way to define the VCPUs, RAM, and Disk space used by an\ninstance. Pre-built flavors are available for you. For this step, select\nan appropriate flavor from the options under the ",(0,i.kt)("strong",{parentName:"p"},"Available")," heading.\nThis example uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"m1.small")," flavor."),(0,i.kt)("p",null,"Next, move to the ",(0,i.kt)("strong",{parentName:"p"},"Networks")," tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(4141).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 21:")," Instance Networks"),(0,i.kt)("p",null,"In this section, you specify the network with which the instance is\nassociated. For this example, select the ",(0,i.kt)("strong",{parentName:"p"},"Private")," network created\npreviously. You can choose the ",(0,i.kt)("strong",{parentName:"p"},"External")," network as well, but this is\ngenerally recommended against in favor of using a floating IP should\nyour instance require Internet connectivity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note","!")," Only expose portions of your network as necessary. This\nreduces the attack surface and improves application security. If a\nprivate network is not created and an instance is created in a default\ncloud, it is associated with the ",(0,i.kt)("strong",{parentName:"p"},"External")," network. This means the\ninstance consumes a public IP and it could be reached over the Internet."),(0,i.kt)("p",null,"Next, skip over the ",(0,i.kt)("strong",{parentName:"p"},"Network Ports")," tab and move to the ",(0,i.kt)("strong",{parentName:"p"},"Security\nGroups"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6467).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 22:")," Instance Security Groups"),(0,i.kt)("p",null,"This is where you select security groups for the instance. This example\nuses the ",(0,i.kt)("strong",{parentName:"p"},"SSH")," security group in the ",(0,i.kt)("strong",{parentName:"p"},"Availalble")," section."),(0,i.kt)("p",null,"As the final step, move to the ",(0,i.kt)("strong",{parentName:"p"},"Key Pair")," tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(2313).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 23:")," Instance Key Pair"),(0,i.kt)("p",null,"In this section, you specify an SSH public key to inject into the\ninstance. You can upload your key at this stage using this form using\nthe ",(0,i.kt)("strong",{parentName:"p"},"Import Key Pair")," button. For this demonstration, we use ",(0,i.kt)("strong",{parentName:"p"},"Import\nKey Pair")," to import the existing SSH public key ",(0,i.kt)("a",{parentName:"p",href:"../command-line/create-ssh-key"},"created\npreviously")," for\none of the control plane nodes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(4915).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 24:")," Import Key Pair Form"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Pair Name"),": Set a name for the SSH public key. This example\npublic key is called ",(0,i.kt)("inlineCode",{parentName:"li"},"relaxed-flamingo-key"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Type"),": This example uses an ",(0,i.kt)("strong",{parentName:"li"},"SSH Key")," key type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Load Public Key from a file"),": Specify the location of the public\nkey on your machine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public Key"),": Here you can paste in the public key.")),(0,i.kt)("p",null,"Once the public key is imported, create the instance by pressing\n",(0,i.kt)("strong",{parentName:"p"},"Launch Instance"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note","!")," -- We skip some sections of the instance creation form as\nthey are not required for this demonstration."),(0,i.kt)("p",null,"The instance goes through a build process. Allow a few minutes for this\nto occur. When complete, the instance appears in the ",(0,i.kt)("strong",{parentName:"p"},"Instances\nListing")," page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(613).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 25:")," Instance Listing"),(0,i.kt)("h3",{id:"assign-and-attach-floating-ip"},"Assign and Attach Floating IP"),(0,i.kt)("p",null,"The instance created previously is associated with a private network.\nPresently, the only way to access this instance is to connect to it from\nwith the cloud's hardware nodes. Another option for connecting is to use\na floating IP. In this section, we demonstrate how to allocate a\nfloating IP and attach it to this instance."),(0,i.kt)("p",null,"To allocate a floating IP, first navigate to ",(0,i.kt)("strong",{parentName:"p"},"Project -",">"," Network -",">","\nFloating IPs"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(4184).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 26:")," Floating IPs Listing"),(0,i.kt)("p",null,"Next, load the form to allocate a floating IP by pressing ",(0,i.kt)("strong",{parentName:"p"},"Allocate IP\nto Project"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(2195).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pool"),": Select ",(0,i.kt)("strong",{parentName:"li"},"External")," for the allocation pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Optional. Set a description for the floating IP.")),(0,i.kt)("p",null,"Press ",(0,i.kt)("strong",{parentName:"p"},"Allocate IP")," to add this floating IP address for use."),(0,i.kt)("p",null,"Next, in the same section, allocate the IP to the Jumpstation instance\nby clicking the ",(0,i.kt)("strong",{parentName:"p"},"Associate")," button at the far right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9388).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 27:")," Associate Floating IP"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(5980).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 28:")," Manage Floating IP Associations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IP Address"),": This field comes pre-selected with the floating IP\nso there's no need to change anything here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port to be associated"),": Select the instance created previously.\nIn this case, we use the Jumpstation instance.")),(0,i.kt)("p",null,"This concludes allocating the floating IP to the instance. This instance\nis now accessible over SSH from the first hardware node of your cloud."))}k.isMDXComponent=!0},5113:function(e,t,n){t.Z=n.p+"assets/images/add-security-group-rule-e4b15d3d32b3fe42dc73a390b5a5e422.png"},2857:function(e,t,n){t.Z=n.p+"assets/images/add-ssh-rule-fa4aac4e7d1b17194061b26ecd6d8721.png"},2195:function(e,t,n){t.Z=n.p+"assets/images/allocate-floating-ip-a752155aa5bf66b873fd4ca498ff2298.png"},9388:function(e,t,n){t.Z=n.p+"assets/images/associate-floating-ip-30be4e2c43c1daabaea0850c49b181dc.png"},6213:function(e,t,n){t.Z=n.p+"assets/images/attach-interface-9ef9b77ba3681ff2d9dcc0ca7cec1fd4.png"},4184:function(e,t,n){t.Z=n.p+"assets/images/floating-ips-6ae2afe6f3810016f23e7da0b406f3da.png"},6675:function(e,t,n){t.Z=n.p+"assets/images/instance-details-0f76efb1fbc3d2d421d514c54a97040d.png"},5485:function(e,t,n){t.Z=n.p+"assets/images/instance-flavor-a45a4b05487bc4033d7f31a88a4998c0.png"},4915:function(e,t,n){t.Z=n.p+"assets/images/instance-import-key-pair-380570910284dd34e3ed7055d3bede7c.png"},2313:function(e,t,n){t.Z=n.p+"assets/images/instance-key-pair-d56fce6b8859a260d2a0a67246c89d6c.png"},613:function(e,t,n){t.Z=n.p+"assets/images/instance-list-735fe47bc446d519570c281170aa6cf1.png"},4141:function(e,t,n){t.Z=n.p+"assets/images/instance-networks-11c60aca640c9432c41a616b91888aa0.png"},6467:function(e,t,n){t.Z=n.p+"assets/images/instance-security-groups-44257209751cfb3fbc9f7cd4a5d10b4e.png"},5584:function(e,t,n){t.Z=n.p+"assets/images/instance-source-8c9ee13036059ca30c502a55427817a2.png"},943:function(e,t,n){t.Z=n.p+"assets/images/instances-be8f61308554034db9c53d662d6e4214.png"},5980:function(e,t,n){t.Z=n.p+"assets/images/manage-floating-ip-associations-7ff24926a038434731edba4e5a9f2ece.png"},8343:function(e,t,n){t.Z=n.p+"assets/images/network-form-subnet-details-9d2b9e63cda2819333019a6b37e54aed.png"},4510:function(e,t,n){t.Z=n.p+"assets/images/network-form-subnet-e3c25600ef39acabe452f8cfe1d8c0ab.png"},128:function(e,t,n){t.Z=n.p+"assets/images/network-form-6286d9b525c127740fdae8e1da6041be.png"},9652:function(e,t,n){t.Z=n.p+"assets/images/network-list-3214eb9c80317cdcb2912de103fd8d19.png"},6402:function(e,t,n){t.Z=n.p+"assets/images/network-topology-26425fb42d668c75d3dd8dbca96e6e0b.png"},2300:function(e,t,n){t.Z=n.p+"assets/images/networks-5a424f8b86bf03890fe2032ae96fb135.png"},1355:function(e,t,n){t.Z=n.p+"assets/images/private-subnet-interface-e97deeba523a1071f16fcf80e810f9a3.png"},5327:function(e,t,n){t.Z=n.p+"assets/images/router-details-23285e8e20fdc89dd85d1120fdb1222c.png"},468:function(e,t,n){t.Z=n.p+"assets/images/router-form-9e5a0fcbc280c2d28b8464fa9e1c5ef3.png"},44:function(e,t,n){t.Z=n.p+"assets/images/router-list-b3c68d732559c135b0f37080d060ba2b.png"},1047:function(e,t,n){t.Z=n.p+"assets/images/routers-4e7df8f705330537c24510632c5de453.png"},1270:function(e,t,n){t.Z=n.p+"assets/images/security-group-form-91a7a29ef527c2dc4af278a56bd5b0c4.png"},9077:function(e,t,n){t.Z=n.p+"assets/images/security-groups-ae990d6e9302b6d90ae969af58e4370e.png"}}]);