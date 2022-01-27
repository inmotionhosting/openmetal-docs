"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[787],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,h=k["".concat(i,".").concat(d)]||k[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2722:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i="Create an Instance",p={unversionedId:"users-manual/create_an_instance_cli",id:"users-manual/create_an_instance_cli",title:"Create an Instance",description:"Instances in OpenStack comprise the cloud's computing power. This guide",source:"@site/docs/users-manual/create_an_instance_cli.md",sourceDirName:"users-manual",slug:"/users-manual/create_an_instance_cli",permalink:"/docs/users-manual/create_an_instance_cli",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/users-manual/create_an_instance_cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Create an Instance",permalink:"/docs/users-manual/create_an_instance"},next:{title:"How to Get Started with OpenStack",permalink:"/docs/users-manual/getting_started_with_openstack"}},c=[{value:"<strong>Before Creating an Instance</strong>",id:"before-creating-an-instance",children:[],level:2},{value:"<strong>SSH Key Pairs</strong>",id:"ssh-key-pairs",children:[{value:"<strong>Create an SSH key pair</strong>",id:"create-an-ssh-key-pair",children:[],level:3},{value:"Upload SSH Key",id:"upload-ssh-key",children:[],level:3}],level:2},{value:"<strong>Security Groups</strong>",id:"security-groups",children:[],level:2},{value:"<strong>Add a Volume</strong>",id:"add-a-volume",children:[{value:"<strong>Create and Attach a Volume</strong>",id:"create-and-attach-a-volume",children:[],level:3}],level:2},{value:"<strong>How to Create an Instance</strong>",id:"how-to-create-an-instance",children:[{value:"<strong>Steps for Creating an Instance</strong>",id:"steps-for-creating-an-instance",children:[],level:3}],level:2},{value:"<strong>Troubleshooting Instance Error Status</strong>",id:"troubleshooting-instance-error-status",children:[],level:2},{value:"<strong>Next Steps</strong>",id:"next-steps",children:[],level:2}],u={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-an-instance"},"Create an Instance"),(0,o.kt)("p",null,"Instances in OpenStack comprise the cloud's computing power. This guide\ndemonstrates how to make an instance using OpenStackClient."),(0,o.kt)("p",null,"You will also learn how to upload or create an SSH key pair, assign\nstorage using a volume, and create a security group. Each of these\ncomponents will be added to the instance."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"before-creating-an-instance"},(0,o.kt)("strong",{parentName:"h2"},"Before Creating an Instance")),(0,o.kt)("p",null,"Before creating an instance, several pieces need to be in place."),(0,o.kt)("p",null,"Generally speaking, these items should exist before creating an\ninstance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An SSH public key ","-","- The public portion of an SSH key pair"),(0,o.kt)("li",{parentName:"ul"},"A security group ","-","- Defines network traffic rules"),(0,o.kt)("li",{parentName:"ul"},"A flavor ","-","- Defines resources, like vCPUs, RAM, and disk storage"),(0,o.kt)("li",{parentName:"ul"},"An image ","-","- This is a bootable operating system"),(0,o.kt)("li",{parentName:"ul"},"A network ","-","- This is typically a private network")),(0,o.kt)("p",null,"Each item will be explained throughout this guide."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ssh-key-pairs"},(0,o.kt)("strong",{parentName:"h2"},"SSH Key Pairs")),(0,o.kt)("p",null,"An SSH key pair is required to access any instances over SSH. Password\nauthentication is by default disabled in the operating system images."),(0,o.kt)("p",null,"You can either create an SSH key pair within OpenStack or upload your\npublic key."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-an-ssh-key-pair"},(0,o.kt)("strong",{parentName:"h3"},"Create an SSH key pair")),(0,o.kt)("p",null,"SSH keys can be managed, created, and uploaded through the command line\nusing OpenStackClient."),(0,o.kt)("p",null,"This section will explain the steps needed to create an SSH key pair\nwithin OpenStack."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To make a key pair, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack keypair create KEY_NAME\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KEY","_","NAME")," is the name of the SSH key pair."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create key pair called ",(0,o.kt)("strong",{parentName:"p"},"ssh-1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack keypair create ssh-1\n")),(0,o.kt)("p",null,"This generates a key pair and returns the private key. The private key\nshould be kept somewhere safe and be inaccessible to others."),(0,o.kt)("h3",{id:"upload-ssh-key"},"Upload SSH Key"),(0,o.kt)("p",null,"If you have an existing SSH key pair to use, you can upload it to the\ncloud instead of making a new one. This section demonstrates how to do\nthis."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To upload your public key, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack keypair create --public-key PATH_TO_PUBLIC_KEY KEY_NAME\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KEY","_","NAME")," is the name of the SSH key pair and\n",(0,o.kt)("strong",{parentName:"p"},"PATH","_","TO","_","PUBLIC","_","KEY")," is the path on the filesystem to the public\nkey."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here's an example uploading an SSH public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack keypair create --public-key ~/.ssh/ssh_key.pub ssh_key_2\n+-------------+-------------------------------------------------+\n| Field       | Value                                           |\n+-------------+-------------------------------------------------+\n| fingerprint | ff:a4:81:c7:59:07:aa:54:43:39:52:cd:b2:12:aa:fb |\n| name        | ssh_key_2                                       |\n| user_id     | 43317575cccc440fbcb38a1f23b45125                |\n+-------------+-------------------------------------------------+\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"security-groups"},(0,o.kt)("strong",{parentName:"h2"},"Security Groups")),(0,o.kt)("p",null,"A security group in OpenStack controls inbound and outbound network\naccess. OpenStack, by default, assigns a security group to each instance\nthat restricts all incoming traffic. It is up to you to determine what\ntraffic should or should not be allowed to or from an instance. This can\nbe accomplished by creating the required security groups for your\ninstance traffic."),(0,o.kt)("p",null,"This section demonstrates creating a security group allowing inbound SSH\ntraffic for a specific IP address."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," ","-","- Create a security group"),(0,o.kt)("p",null,"There are several steps needed to create a security group using\nOpenStackClient. The group first needs to be created, then additional\ncommands are used to add rules to it. Finally, you can list the security\ngroup's details to ensure it has been configured appropriately."),(0,o.kt)("p",null,"The command to create a security group is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group create SECURITY_GROUP\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SECURITY","_","GROUP")," is the name of the security group."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create an SSH security group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group create ssh\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," ","-","- Add rules"),(0,o.kt)("p",null,"Next, rules need to be added to allow SSH access."),(0,o.kt)("p",null,"The base command to do this is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group rule create SECURITY_GROUP --remote-ip\nREMOTE_IP --dst-port 22:22 --ingress --protocol tcp\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SECURITY","_","GROUP")," is the name of the group, which in this case is\ncalled ",(0,o.kt)("strong",{parentName:"p"},"ssh"),". ",(0,o.kt)("strong",{parentName:"p"},"REMOTE","_","IP")," is the IP address for which traffic\nshould be allowed. The remaining flags specify the rule is for ingress\nTCP traffic over port 22."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create rule allowing SSH from 192.168.1.20 (arbitrary IP):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group rule create ssh --remote-ip 192.168.1.20\n--dst-port 22:22 --ingress --protocol tcp\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," ","-","- Confirm security group details"),(0,o.kt)("p",null,"Finally, confirm the previous steps were successful by listing the\ndetails of the ",(0,o.kt)("strong",{parentName:"p"},"ssh")," security group."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List security groups")),(0,o.kt)("p",null,"List security groups using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group list\n+--------------------------------------+---------+------------------------+----------------------------------+------+\n| ID                                   | Name    | Description            | Project                          | Tags |\n+--------------------------------------+---------+------------------------+----------------------------------+------+\n| 42989271-94b4-4209-8a81-5b7f370cbb22 | default | Default security group | fece7ddb8663497bb99ee0988719143c | []   |\n| cdf392cd-0f8a-409c-837b-b8409981da93 | ssh     | ssh                    | fece7ddb8663497bb99ee0988719143c | []   |\n+--------------------------------------+---------+------------------------+----------------------------------+------+\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Show details")),(0,o.kt)("p",null,"Show the details of the group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group show cdf392cd-0f8a-409c-837b-b8409981da93\n+-----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Field           | Value                                                                                                                                                                                                                                                  |\n+-----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| created_at      | 2021-05-19T21:38:19Z                                                                                                                                                                                                                                   |\n| description     | ssh                                                                                                                                                                                                                                                    |\n| id              | cdf392cd-0f8a-409c-837b-b8409981da93                                                                                                                                                                                                                   |\n| name            | ssh                                                                                                                                                                                                                                                    |\n| project_id      | fece7ddb8663497bb99ee0988719143c                                                                                                                                                                                                                       |\n| revision_number | 4                                                                                                                                                                                                                                                      |\n| rules           | created_at='2021-05-19T21:38:19Z', direction='egress', ethertype='IPv4', id='4a0d26d8-7e9d-4eac-9e19-94cb66cda54f', updated_at='2021-05-19T21:38:19Z'                                                                                                  |\n|                 | created_at='2021-05-19T21:38:19Z', direction='egress', ethertype='IPv6', id='80fcfd69-bc4e-44ad-bbdc-c5049b1a7472', updated_at='2021-05-19T21:38:19Z'                                                                                                  |\n|                 | created_at='2021-05-19T21:47:46Z', direction='ingress', ethertype='IPv4', id='ba39298c-7713-4975-a882-2335bdded8c1', port_range_max='22', port_range_min='22', protocol='tcp', remote_ip_prefix='192.168.1.20/32', updated_at='2021-05-19T21:47:46Z' |\n| stateful        | True                                                                                                                                                                                                                                                   |\n| tags            | []                                                                                                                                                                                                                                                     |\n| updated_at      | 2021-05-19T21:47:46Z                                                                                                                                                                                                                                   |\n+-----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n")),(0,o.kt)("p",null,"In the above output, the rule allowing SSH traffic from ",(0,o.kt)("strong",{parentName:"p"},"192.168.1.20"),"\nis visible."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"add-a-volume"},(0,o.kt)("strong",{parentName:"h2"},"Add a Volume")),(0,o.kt)("p",null,"Additional disk space can be added to instances through volumes. A\nvolume in OpenStack is like a removable USB drive that can be attached\nto instances as seen fit. Cinder is the OpenStack block storage service\nthat allows volumes to be created. A volume can also be used to boot an\ninstance."),(0,o.kt)("p",null,"This section explains how to create a volume using OpenStackClient by\ncreating a 5GB example volume. This is an optional step should your\ninstance not require additional storage through a volume."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-and-attach-a-volume"},(0,o.kt)("strong",{parentName:"h3"},"Create and Attach a Volume")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," ","-","- Create volume"),(0,o.kt)("p",null,"Use the following to create volumes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack volume create VOLUME_NAME --save SIZE\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"VOLUME","_","NAME")," is the name of the volume and ",(0,o.kt)("strong",{parentName:"p"},"SIZE")," is the numeric\nsize in gigabytes."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create a volume with size 5GB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack volume create volume-1 --size 5\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," ","-","- List volume"),(0,o.kt)("p",null,"List the newly created volume using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack volume list\n+--------------------------------------+----------+-----------+------+-------------+\n| ID                                   | Name     | Status    | Size | Attached to |\n+--------------------------------------+----------+-----------+------+-------------+\n| e6d6242e-3fa5-47fa-8eaa-2f85e8165144 | volume-1 | available |    5 |             |\n+--------------------------------------+----------+-----------+------+-------------+\n")),(0,o.kt)("p",null,"This volume will later be attached to the instance."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-create-an-instance"},(0,o.kt)("strong",{parentName:"h2"},"How to Create an Instance")),(0,o.kt)("p",null,"An instance is another name for a virtual machine in OpenStack.\nInstances are created by the Nova service and contribute to the\nprocessing power of the cloud."),(0,o.kt)("p",null,"With the previous steps followed, you have all the parts needed to make\nan instance."),(0,o.kt)("p",null,"This section will explain how to create a ",(0,o.kt)("strong",{parentName:"p"},"volume-backed")," instance."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"steps-for-creating-an-instance"},(0,o.kt)("strong",{parentName:"h3"},"Steps for Creating an Instance")),(0,o.kt)("p",null,"When creating an instance in OpenStack using the command line, there are\nseveral pieces needed first. This section walks you through obtaining\neach part and then brings them all together to explain how to create an\ninstance."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To begin you will need to obtain ",(0,o.kt)("strong",{parentName:"p"},"UUIDs")," for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Boot source (image, volume)"),(0,o.kt)("li",{parentName:"ul"},"Flavor"),(0,o.kt)("li",{parentName:"ul"},"Network"),(0,o.kt)("li",{parentName:"ul"},"Security Group"),(0,o.kt)("li",{parentName:"ul"},"SSH Key Pair")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," ","-","- Obtain boot source UUID"),(0,o.kt)("p",null,"To obtain the image UUIDs, you will need to list images using\nOpenStackClient by using ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack image list"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------------------------------------+------------------------------------------------------+--------+\n| ID                                   | Name                                                 | Status |\n+--------------------------------------+------------------------------------------------------+--------+\n| 02609270-b2d7-4ee2-9e7b-450163362b57 | Amphora (x64-haproxy-ubuntu-focal)                   | active |\n| 1d6ab32b-a305-403b-9d44-5981890beccf | CentOS 7 (el7-x86_64)                                | active |\n| f2d17cda-b84d-4600-8473-111e180a5452 | CentOS 8 (el8-x86_64)                                | active |\n| d5a101ff-0870-435f-bf76-c3309e542a53 | CentOS 8 Stream (el8-x86_64)                         | active |\n")),(0,o.kt)("p",null,"For this example, the ",(0,o.kt)("strong",{parentName:"p"},"CentOS 8 Stream")," image will be used which is\nassociated with UUID ",(0,o.kt)("inlineCode",{parentName:"p"},"d5a101ff-0870-435f-bf76-c3309e542a53"),". This UUID\nis later used to build this instance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," ","-","- Get flavors"),(0,o.kt)("p",null,"Next, list available flavors using ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack flavor list"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-------------+-------------+-------+------+-----------+-------+-----------+\n| ID          | Name        |   RAM | Disk | Ephemeral | VCPUs | Is Public |\n+-------------+-------------+-------+------+-----------+-------+-----------+\n| c1.large    | c1.large    |  4096 |   50 |         0 |     8 | True      |\n| c1.medium   | c1.medium   |  4096 |   50 |         0 |     4 | True      |\n| c1.micro    | c1.micro    |  2048 |   25 |         0 |     2 | True      |\n")),(0,o.kt)("p",null,"Choose the appropriate flavor the instance will require. This example\nwill use the ",(0,o.kt)("inlineCode",{parentName:"p"},"c1.micro")," flavor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," ","-","- Choose network"),(0,o.kt)("p",null,"List networks in OpenStack using ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack network list"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------------------------------------+-----------+--------------------------------------+\n| ID                                   | Name      | Subnets                              |\n+--------------------------------------+-----------+--------------------------------------+\n| 29aa8aec-36ec-416d-9828-4a3b6bb10f4b | network-1 | 163e197c-6fcd-4219-bc55-962299691206 |\n| 5cc755c9-41fc-44c2-87e7-642dfdfb0208 | External  | a52754dd-13d9-4a36-bab6-10058f4887f5 |\n| 76a19c4e-f9c7-4c03-8e4d-6862da139cbb | network1  | b5ee016d-70e6-4930-bac0-4af71c23efde |\n+--------------------------------------+-----------+--------------------------------------+\n")),(0,o.kt)("p",null,"This example will use ",(0,o.kt)("strong",{parentName:"p"},"network-1")," as the network, which is associated\nwith UUID ",(0,o.kt)("inlineCode",{parentName:"p"},"29aa8aec-36ec-416d-9828-4a3b6bb10f4b"),". This UUID will later\nbe used to create this instance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4")," ","-","- Security groups"),(0,o.kt)("p",null,"List security groups using ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack security group list"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------------------------------------+---------+------------------------+----------------------------------+------+\n| ID                                   | Name    | Description            | Project                          | Tags |\n+--------------------------------------+---------+------------------------+----------------------------------+------+\n| 44668612-1a18-4289-b5fb-f24de8e20c09 | ssh     |                        | b93259ca0a5b4541b30e4e16ae1d699d | []   |\n| c132bb35-bdc6-4161-b64c-440ab6b631bf | default | Default security group | b93259ca0a5b4541b30e4e16ae1d699d | []   |\n+--------------------------------------+---------+------------------------+----------------------------------+------+\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ssh")," security group will be associated with this instance via\nUUID ",(0,o.kt)("inlineCode",{parentName:"p"},"44668612-1a18-4289-b5fb-f24de8e20c09"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5")," ","-","- SSH key pair"),(0,o.kt)("p",null,"Lastly, obtain the name of the SSH key pair using\n",(0,o.kt)("inlineCode",{parentName:"p"},"openstack keypair list"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-------+-------------------------------------------------+------+\n| Name  | Fingerprint                                     | Type |\n+-------+-------------------------------------------------+------+\n| key-1 | a7:ab:bd:9c:78:85:e1:a1:c4:07:0f:6d:e9:36:0b:68 | ssh  |\n| ssh-1 | 53:0e:0f:19:9f:21:5f:7e:36:96:28:31:25:1b:52:af | ssh  |\n+-------+-------------------------------------------------+------+\n")),(0,o.kt)("p",null,"This instance will use the SSH key pair called ",(0,o.kt)("inlineCode",{parentName:"p"},"key-1"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6")," ","-","- Create instance"),(0,o.kt)("p",null,"With the collected information, the instance can be created."),(0,o.kt)("p",null,"This is the base command needed to make an instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server create\n")),(0,o.kt)("p",null,"For the full list of options to make an instance, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack help server create\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The full command to make this instance, including variable placeholders,\nis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server create --image IMAGE_UUID \\\n--flavor FLAVOR --boot-from-volume VOLUME_SIZE\n--network NETWORK_UUID --key-name SSH_KEY_NAME \\\n--security-group SECURITY_GROUP_UUID \\\nINSTANCE_NAME\n")),(0,o.kt)("p",null,"The following explains what each variable in the above command is for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IMAGE","_","UUID")," ","-","- UUID of the image you want to use"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FLAVOR")," ","-","- The name of the flavor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"VOLUME","_","SIZE")," ","-","- Size in GB of boot volume"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NETWORK","_","UUID")," ","-","- UUID of the network to be associated with the\ninstance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SSH","_","KEY","_","NAME")," ","-","- Name of the SSH key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SECURITY","_","GROUP","_","UUID")," ","-","- UUID of the security group to use"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"INSTANCE","_","NAME")," ","-","- Name of the instance")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," ","-","- By default, the instance creation will occur in the\nbackground. You can add ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," to the flags to have the command wait\nuntil the instance creation is done which will show you the status of\ninstance creation."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create the Instance")),(0,o.kt)("p",null,"Here are the collected details to make an instance from the previous\nsection:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Image UUID"),": d5a101ff-0870-435f-bf76-c3309e542a53"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flavor"),": c1.micro"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network UUID"),": 29aa8aec-36ec-416d-9828-4a3b6bb10f4b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security Group UUID"),": 44668612-1a18-4289-b5fb-f24de8e20c09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SSH Key"),": key-1")),(0,o.kt)("p",null,"Create an instance called ",(0,o.kt)("strong",{parentName:"p"},"instance-1")," booted from a 20GB volume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server create --image d5a101ff-0870-435f-bf76-c3309e542a53 \\\n--flavor c1.micro --boot-from-volume 20 \\\n--network 29aa8aec-36ec-416d-9828-4a3b6bb10f4b \\\n--key-name key-1 --security-group 44668612-1a18-4289-b5fb-f24de8e20c09 \\\ninstance-1\n")),(0,o.kt)("p",null,"This starts the process of creating the instance and takes a small\namount of time to complete."),(0,o.kt)("p",null,"After creating the instance, verify the build process by running\n",(0,o.kt)("inlineCode",{parentName:"p"},"$ openstack server show INSTANCE_NAME"),", replacing ",(0,o.kt)("strong",{parentName:"p"},"INSTANCE","_","NAME"),"\nwith the actual name of the instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server show instance-1 | grep status\n| status                      | ACTIVE                                                              |\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," column indicates the instance status. Seeing ",(0,o.kt)("strong",{parentName:"p"},"ACTIVE")," in\nthe status column indicates the instance successfully spawned."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/api-guide/compute/server_concepts.html"},"Nova compute API\ndocumentation"),"\nfor a list of instance status meanings and additional commands that can\nbe used to troubleshoot any issues."),(0,o.kt)("h2",{id:"troubleshooting-instance-error-status"},(0,o.kt)("strong",{parentName:"h2"},"Troubleshooting Instance Error Status")),(0,o.kt)("p",null,"Sometimes, instance creation will not succeed which can be for a variety\nof reasons. Running ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack server list")," will show the ",(0,o.kt)("strong",{parentName:"p"},"Status")," of\nan instance."),(0,o.kt)("p",null,"Here's an example of an instance with Status, ERROR:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server list\n+--------------------------------------+-----------------------------+---------+-------------------------+----------------------------+------------+\n| ID                                   | Name                        | Status  | Networks                | Image                      | Flavor     |\n+--------------------------------------+-----------------------------+---------+-------------------------+----------------------------+------------+\n| 35d624fe-785d-4915-aa7e-4bb580b29325 | centos_instance_2           | ERROR   |                         | CentOS 8 (ce8-x86_64)      | hc1.micro  |\n--------------------------------------+-----------------------------+---------+-------------------------+----------------------------+------------+\n")),(0,o.kt)("p",null,"Get more information on the error status by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server show $INSTANCE_UUID --fit-width\n")),(0,o.kt)("p",null,"Look for the ",(0,o.kt)("strong",{parentName:"p"},"fault")," row for the reason as to why the instance failed\nto create."),(0,o.kt)("p",null,"For assistance with instance errors, consider consulting with your\nOpenStack administrator."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},(0,o.kt)("strong",{parentName:"h2"},"Next Steps")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"users_manual/backups_cli.rst"},"next guide")," in this series is\nregarding backing up and restoring your instance data."))}k.isMDXComponent=!0}}]);