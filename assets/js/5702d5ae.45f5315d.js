"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[703],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="How to Create an Instance",c={unversionedId:"users-manual/create_an_instance",id:"users-manual/create_an_instance",title:"How to Create an Instance",description:"Instances in OpenStack comprise the cloud's computing power. This guide",source:"@site/docs/users-manual/create_an_instance.md",sourceDirName:"users-manual",slug:"/users-manual/create_an_instance",permalink:"/docs/users-manual/create_an_instance",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/users-manual/create_an_instance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Managing Backups in OpenStack",permalink:"/docs/users-manual/backups_cli"},next:{title:"Create an Instance",permalink:"/docs/users-manual/create_an_instance_cli"}},u=[{value:"<strong>Table of Contents</strong>",id:"table-of-contents",children:[],level:2},{value:"<strong>Before Creating an Instance</strong>",id:"before-creating-an-instance",children:[],level:2},{value:"<strong>SSH Key Pairs</strong>",id:"ssh-key-pairs",children:[{value:"<strong>Create an SSH key pair</strong>",id:"create-an-ssh-key-pair",children:[],level:3},{value:"<strong>Upload an SSH key pair</strong>",id:"upload-an-ssh-key-pair",children:[],level:3},{value:"Confirm SSH key pair upload",id:"confirm-ssh-key-pair-upload",children:[],level:3}],level:2},{value:"<strong>Security Groups</strong>",id:"security-groups",children:[],level:2},{value:"<strong>Add a Volume</strong>",id:"add-a-volume",children:[{value:"<strong>Create and attach a volume</strong>",id:"create-and-attach-a-volume",children:[],level:3}],level:2},{value:"<strong>Create an Instance</strong>",id:"create-an-instance",children:[{value:"<strong>How to Create an Instance</strong>",id:"how-to-create-an-instance-1",children:[],level:3},{value:"How to Access the Instance over SSH",id:"how-to-access-the-instance-over-ssh",children:[],level:3}],level:2},{value:"<strong>Next Steps</strong>",id:"next-steps",children:[],level:2}],p={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-an-instance"},"How to Create an Instance"),(0,o.kt)("p",null,"Instances in OpenStack comprise the cloud's computing power. This guide\ndemonstrates how to make an instance using Horizon."),(0,o.kt)("p",null,"You will also learn how to upload or create an SSH key pair, assign\nstorage using a volume, and create a security group. Each of these\ncomponents will be added to the instance."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"table-of-contents"},(0,o.kt)("strong",{parentName:"h2"},"Table of Contents")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"users_manual/create_an_instance.rst#before-creating-an-instance"},"Before Creating an\nInstance")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"users_manual/create_an_instance.rst#ssh-key-pairs"},"SSH Key Pairs")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"users_manual/create_an_instance.rst#security-groups"},"Security\nGroups")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"users_manual/create_an_instance.rst#add-a-volume"},"Add a Volume")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"users_manual/create_an_instance.rst#create-an-instance"},"Create an\nInstance"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"before-creating-an-instance"},(0,o.kt)("strong",{parentName:"h2"},"Before Creating an Instance")),(0,o.kt)("p",null,"Before creating an instance, several pieces need to be in place."),(0,o.kt)("p",null,"Generally speaking, these items should exist before creating an\ninstance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An SSH public key ","-","- The public portion of an SSH key pair"),(0,o.kt)("li",{parentName:"ul"},"A security group ","-","- Defines network traffic rules"),(0,o.kt)("li",{parentName:"ul"},"A flavor ","-","- Defines resources, like vCPUs, RAM, and disk storage"),(0,o.kt)("li",{parentName:"ul"},"An image ","-","- This is a bootable operating system"),(0,o.kt)("li",{parentName:"ul"},"A network ","-","- This is typically a private network")),(0,o.kt)("p",null,"Each item will be explained throughout this guide."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ssh-key-pairs"},(0,o.kt)("strong",{parentName:"h2"},"SSH Key Pairs")),(0,o.kt)("p",null,"An SSH key pair is required to access any instances over SSH. Password\nauthentication is by default disabled in the operating system images."),(0,o.kt)("p",null,"You can either have an SSH key created or you can upload the public key\nof your SSH key pair."),(0,o.kt)("p",null,"This section explains how to create an SSH key pair within OpenStack and\nalso how to upload your own SSH public key."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-an-ssh-key-pair"},(0,o.kt)("strong",{parentName:"h3"},"Create an SSH key pair")),(0,o.kt)("p",null,"To create an SSH key pair, locate ",(0,o.kt)("strong",{parentName:"p"},"Project -",">"," Compute -",">"," Key Pairs"),"\nin Horizon."),(0,o.kt)("p",null,"Next, click ",(0,o.kt)("strong",{parentName:"p"},"Create Key Pair")," near the top and to the right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(2748).Z})),(0,o.kt)("p",null,"In the following form, input the key pair name and the type of key it\nwill be. Once done, you will be prompted to download the private key\nwhich needs to be stored in a safe place. Only you should have access to\nyour private SSH key pair! The public key portion of the key pair now\nexists in Horizon."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8308).Z})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"upload-an-ssh-key-pair"},(0,o.kt)("strong",{parentName:"h3"},"Upload an SSH key pair")),(0,o.kt)("p",null,"Should you already have an SSH key pair you want to use, you can instead\nupload your public key. This can be done in the same ",(0,o.kt)("strong",{parentName:"p"},"Key Pairs"),"\nsection."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Locate the ",(0,o.kt)("strong",{parentName:"p"},"Import Key Pair")," button near the top right of the screen.\nFill out the name of the key pair, specify the type of key it is, and\nfinally choose the public key from your computer or paste the public key\nin."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(613).Z})),(0,o.kt)("h3",{id:"confirm-ssh-key-pair-upload"},"Confirm SSH key pair upload"),(0,o.kt)("p",null,"To confirm success, navigate back to the SSH key pair listing and\nconfirm the key pair was uploaded."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6512).Z})),(0,o.kt)("h2",{id:"security-groups"},(0,o.kt)("strong",{parentName:"h2"},"Security Groups")),(0,o.kt)("p",null,"A security group in OpenStack controls inbound and outbound network\naccess. OpenStack, by default, assigns a security group to each instance\nthat restricts all incoming traffic. It is up to you to determine what\ntraffic should or should not be allowed to or from an instance. This can\nbe accomplished by creating the required security groups for your\ninstance traffic."),(0,o.kt)("p",null,"This section demonstrates creating a security group allowing inbound SSH\ntraffic for a specific IP address."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," ","-","- List security groups"),(0,o.kt)("p",null,"To list security groups, find ",(0,o.kt)("strong",{parentName:"p"},"Project -",">"," Network -",">"," Security\nGroups")," in Horizon on the left."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(2540).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," ","-","- Create SSH security group"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(61).Z})),(0,o.kt)("p",null,"Fill out the name and description of the group. Once done, you will be\ntaken to a page where you can define egress (outbound) and ingress\n(inbound) rules for the group."),(0,o.kt)("p",null,"When the rule is created, two egress rules allowing all outbound traffic\nare added to it by OpenStack. You can see these as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(2678).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," ","-","- Add ingress SSH rule"),(0,o.kt)("p",null,"To add the rule for SSH, click the ",(0,o.kt)("strong",{parentName:"p"},"Add Rule")," button near the top\nright, which loads this form:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(3933).Z})),(0,o.kt)("p",null,"From this page you can define a custom rule or choose from options\ncreated for you, such as SSH or HTTPS."),(0,o.kt)("p",null,"For this example, choose the SSH option from the first drop down."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note!")," ","-","- You may notice that all traffic is allowed through when\nchoosing the SSH option. This is same thing as having port 22 open for\nall SSH traffic to come through and may not be desired."),(0,o.kt)("p",null,"To allow traffic for a single host, in the ",(0,o.kt)("strong",{parentName:"p"},"CIDR")," field add the IP\nallowed to connect over SSH. Similarly if a range of IPs needs to be\nallowed, allow the range using CIDR notation."),(0,o.kt)("p",null,"With the new rule added you will see it listed like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(5679).Z})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"add-a-volume"},(0,o.kt)("strong",{parentName:"h2"},"Add a Volume")),(0,o.kt)("p",null,"Additional disk space can be added to instances through volumes. A\nvolume in OpenStack is like a removable USB drive that can be attached\nto instances as seen fit. Cinder is the OpenStack block storage service\nthat allows volumes to be created. A volume can also be used to boot an\ninstance."),(0,o.kt)("p",null,"This section explains how to create a volume in Horizon by creating a\n5GB example volume. This is an optional step should your instance not\nrequire additional storage through a volume."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-and-attach-a-volume"},(0,o.kt)("strong",{parentName:"h3"},"Create and attach a volume")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," ","-","- List volumes"),(0,o.kt)("p",null,"In Horizon, look to the left for ",(0,o.kt)("strong",{parentName:"p"},"Project -",">"," Volumes -",">"," Volumes")," to\npull up the page to manage and create volumes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(877).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," ","-","- Create a volume"),(0,o.kt)("p",null,"To create a volume, click ",(0,o.kt)("strong",{parentName:"p"},"Create Volume"),", then fill out the form\ndetails."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6576).Z})),(0,o.kt)("p",null,"Specify a name and size for the volume. The remaining options are not\nrequired to create the volume."),(0,o.kt)("p",null,"After creating the volume you will be taken back to the volume listing\npage. The ",(0,o.kt)("strong",{parentName:"p"},"Status")," column will read Available if the volume is\nready to be used."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(9718).Z})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"create-an-instance"},(0,o.kt)("strong",{parentName:"h2"},"Create an Instance")),(0,o.kt)("p",null,"An instance is another name for a virtual machine in OpenStack.\nInstances are created by the Nova service and contribute to the\nprocessing power of the cloud."),(0,o.kt)("p",null,"With the previous steps followed, you have everything needed to make an\ninstance."),(0,o.kt)("p",null,"This section will explain how to create a ",(0,o.kt)("strong",{parentName:"p"},"volume-backed")," instance."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-create-an-instance-1"},(0,o.kt)("strong",{parentName:"h3"},"How to Create an Instance")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," ","-","- List Instances"),(0,o.kt)("p",null,"To get started, in Horizon find ",(0,o.kt)("strong",{parentName:"p"},"Project -",">"," Compute -",">"," Instances"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6592).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," ","-","- Launch Instance -",">"," Details"),(0,o.kt)("p",null,"Next, use ",(0,o.kt)("strong",{parentName:"p"},"Launch Instance")," near the top right, which loads this form:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(1690).Z})),(0,o.kt)("p",null,"Fill out a name for the instance and optionally a description. Specify\nthe number of instances to spawn using the ",(0,o.kt)("strong",{parentName:"p"},"Count")," drop down. Take\nnote of the available instances to your project in this screen as well."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," ","-","- Launch Instance -",">"," Source"),(0,o.kt)("p",null,"After the ",(0,o.kt)("strong",{parentName:"p"},"Details")," section is filled out, move on to the ",(0,o.kt)("strong",{parentName:"p"},"Source"),"\ntab on the left. Here you will specify a source to boot from, which is\ntypically going to be an image."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(7436).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Select Boot Source"),": Select ",(0,o.kt)("strong",{parentName:"li"},"Image")," from the drop down."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create New Volume"),": Select ",(0,o.kt)("strong",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Volume Size"),": Set an appropriate amount of disk space"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete Volume on Instance Delete"),": Leave the default of ",(0,o.kt)("strong",{parentName:"li"},"No"),"\nselected")),(0,o.kt)("p",null,"You should see a variety of operating systems images to choose from.\nThis example will use the CentOS 8 Stream image. Select the appropriate\nimage using the up arrow on the right. After doing so, you will see the\nimage listed in the ",(0,o.kt)("strong",{parentName:"p"},"Allocated")," section."),(0,o.kt)("p",null,"This example demonstrates one way to create an instance, which is a\nvolume-backed instance, and is useful for persistent storage."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4")," ","-","- Launch Instance -",">"," Flavor"),(0,o.kt)("p",null,"With the Source section done, it is time to set a flavor. A flavor is a\nway to define resource allocation to an instance. The number of vCPUs,\nRAM, and disk space are defined using flavors."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(1052).Z})),(0,o.kt)("p",null,"Flavors are listed in the same way images are. Select the flavor\nrequired for the instance workload using the up arrow on the right. Once\nset, you will see the flavor listed in the ",(0,o.kt)("strong",{parentName:"p"},"Allocated")," portion."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5")," ","-","- Launch Instance -",">"," Networks"),(0,o.kt)("p",null,"With a flavor set, move on to the ",(0,o.kt)("strong",{parentName:"p"},"Networks")," section to specify a\nnetwork the instance will be associated with."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(4597).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note!")," ","-","- Place all cloud infrastructure on private networks and\nonly expose what is needed to the Internet, such as a load balancer, or\nfront-end web servers."),(0,o.kt)("p",null,"This example uses the private network created from the ",(0,o.kt)("a",{parentName:"p",href:"users_manual/network_ip_traffic.rst"},"networking\nguide"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6")," ","-","- Launch Instance -",">"," Security Groups"),(0,o.kt)("p",null,"Next, a security group should be set. Note that security groups can\nlater be added to an existing instance. OpenStack by default disables\nall incoming network traffic to instances so the traffic you want to\nallow needs to specified using security groups."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(1323).Z})),(0,o.kt)("p",null,"Choose from the list the security group to apply to this instance. This\nexample applies the ",(0,o.kt)("strong",{parentName:"p"},"ssh")," security group, allowing SSH access."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 7")," ","-","- Launch Instance -",">"," Key Pair"),(0,o.kt)("p",null,"The last step is to add your SSH key pair."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(4022).Z})),(0,o.kt)("p",null,"Choose from the key pair listing the SSH key to add. You can also create\na key pair or upload a public key using this form."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 8")," ","-","- Launch Instance"),(0,o.kt)("p",null,"This concludes all steps required to create an instance. Use ",(0,o.kt)("strong",{parentName:"p"},"Launch\nInstance")," to spin up the instance."),(0,o.kt)("p",null,"As the instance is spawning you will see it appear like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8534).Z})),(0,o.kt)("p",null,"Once the instance creation is complete, it will show like so and the\n",(0,o.kt)("strong",{parentName:"p"},"Status")," column will display ",(0,o.kt)("strong",{parentName:"p"},"Active")," and ",(0,o.kt)("strong",{parentName:"p"},"Power State")," will be\n",(0,o.kt)("strong",{parentName:"p"},"Running"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(4349).Z})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-access-the-instance-over-ssh"},"How to Access the Instance over SSH"),(0,o.kt)("p",null,"Since this instance is on a private network, it is only possible to\naccess it over SSH from the OpenStack hardware nodes, which is not a\nfeasible way to access it."),(0,o.kt)("p",null,"To access this instance over SSH, assign a floating IP to it. This can\nbe done from the instance listing page using the drop down on the right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8326).Z})),(0,o.kt)("p",null,"This floating IP can now be used to access the instance over the\nInternet. The default username of the instance is typically the same as\nthe name of the operating system."),(0,o.kt)("p",null,"In this example the CentOS 8 Stream image was used so the default user\nis ",(0,o.kt)("strong",{parentName:"p"},"centos"),". The Ubuntu's image default user is ",(0,o.kt)("strong",{parentName:"p"},"ubuntu"),". Debian's\nis ",(0,o.kt)("strong",{parentName:"p"},"debian"),"."),(0,o.kt)("h2",{id:"next-steps"},(0,o.kt)("strong",{parentName:"h2"},"Next Steps")),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"users_manual/backups.rst"},"next guide")," in this series to\nlearn how to back up and restore instance data."))}m.isMDXComponent=!0},6576:function(e,t,n){t.Z=n.p+"assets/images/um_create_a_volume-39e7f685539345c041a62763072a584f.png"},61:function(e,t,n){t.Z=n.p+"assets/images/um_create_security_group_form-beebc206dd28698284468876b36dbc6c.png"},8308:function(e,t,n){t.Z=n.p+"assets/images/um_create_ssh_keypair_form-61beb880f5ad323cbb996c19bec77e91.png"},613:function(e,t,n){t.Z=n.p+"assets/images/um_import_ssh_key_form-e9a710dbacef5c3916a3ac3b7efdc5a8.png"},1690:function(e,t,n){t.Z=n.p+"assets/images/um_instance_form_1-7da3a68b646b3a835697889cad7255c6.png"},7436:function(e,t,n){t.Z=n.p+"assets/images/um_instance_form_2-03199ced169540e24e9111f72c60c817.png"},1052:function(e,t,n){t.Z=n.p+"assets/images/um_instance_form_3-283385dac918355d8e9faf08d0f83045.png"},4597:function(e,t,n){t.Z=n.p+"assets/images/um_instance_form_4-8001a5f5fea2a943d9af7dcdcc57505e.png"},1323:function(e,t,n){t.Z=n.p+"assets/images/um_instance_form_5-d989e5813e1d1fb35629abb58a0adfab.png"},4022:function(e,t,n){t.Z=n.p+"assets/images/um_instance_form_6-277d13b328781f1829949cf4a51f58ff.png"},8534:function(e,t,n){t.Z=n.p+"assets/images/um_instance_listing-1966c4dbca459c21d58edc5737baad24.png"},4349:function(e,t,n){t.Z=n.p+"assets/images/um_instance_listing_2-aa9467f60cf2c0f9c2ab1286f514367d.png"},8326:function(e,t,n){t.Z=n.p+"assets/images/um_instance_listing_floating_ip-ab4664269c42b57f6f55a7c39567778a.png"},6592:function(e,t,n){t.Z=n.p+"assets/images/um_list_instance-afc7b330ebc430194c3508b724a3009c.png"},2540:function(e,t,n){t.Z=n.p+"assets/images/um_list_security_groups-5bd9fd110c545b35bf71289d77991850.png"},877:function(e,t,n){t.Z=n.p+"assets/images/um_list_volumes-4dffaa89affea3a0179abb25b484d1f0.png"},2678:function(e,t,n){t.Z=n.p+"assets/images/um_modify_security_group_form-06b6fc623d6ace0fd0dda36bc412d564.png"},5679:function(e,t,n){t.Z=n.p+"assets/images/um_modify_security_group_form_new_rule-db9d195396b6147bb091e820b4d41884.png"},3933:function(e,t,n){t.Z=n.p+"assets/images/um_sec_group_add_rule_form-97899f95c24c80dc1836b1be56c67045.png"},2748:function(e,t,n){t.Z=n.p+"assets/images/um_ssh_key_pairs_horizon-4f45a7b4e35af2e14fed9d3e7cc23fa4.png"},6512:function(e,t,n){t.Z=n.p+"assets/images/um_ssh_key_pairs_list-1360fa15250fa81780c711e21e462b4c.png"},9718:function(e,t,n){t.Z=n.p+"assets/images/um_volume_listing-a25d544a26fea2c208b6dc980e0f28dc.png"}}]);