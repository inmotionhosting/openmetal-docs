"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[9816],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4779:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i="OpenStack CLI for Common Operational Tasks",c={unversionedId:"users_manual/use_openstack_cli",id:"users_manual/use_openstack_cli",title:"OpenStack CLI for Common Operational Tasks",description:"Background",source:"@site/docs/users_manual/use_openstack_cli.md",sourceDirName:"users_manual",slug:"/users_manual/use_openstack_cli",permalink:"/openmetal-docs/docs/users_manual/use_openstack_cli",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/users_manual/use_openstack_cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get Started with OpenStackClient",permalink:"/openmetal-docs/docs/users_manual/openstackclient"},next:{title:"Working with Images",permalink:"/openmetal-docs/docs/users_manual/using_creating_images"}},p=[{value:"<strong>Background</strong>",id:"background",children:[],level:2},{value:"<strong>Get started</strong>",id:"get-started",children:[],level:2},{value:"<strong>Output formatting</strong>",id:"output-formatting",children:[],level:2},{value:"<strong>Common Tasks</strong>",id:"common-tasks",children:[],level:2},{value:"<strong>Manage OpenStack users</strong>",id:"manage-openstack-users",children:[],level:2},{value:"<strong>Instance Management</strong>",id:"instance-management",children:[{value:"<strong>Create an instance</strong>",id:"create-an-instance",children:[],level:3},{value:"<strong>Stop and start an instance</strong>",id:"stop-and-start-an-instance",children:[],level:3},{value:"<strong>Create an instance snapshot</strong>",id:"create-an-instance-snapshot",children:[],level:3}],level:2},{value:"<strong>Perform live migration of instances</strong>",id:"perform-live-migration-of-instances",children:[],level:2},{value:"<strong>Troubleshoot instance issues</strong>",id:"troubleshoot-instance-issues",children:[],level:2},{value:"<strong>Upload images</strong>",id:"upload-images",children:[],level:2},{value:"<strong>Create a private network</strong>",id:"create-a-private-network",children:[],level:2},{value:"<strong>Create security groups</strong>",id:"create-security-groups",children:[],level:2},{value:"<strong>Add SSH public key</strong>",id:"add-ssh-public-key",children:[],level:2},{value:"<strong>Collect details about OpenStack environment</strong>",id:"collect-details-about-openstack-environment",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openstack-cli-for-common-operational-tasks"},"OpenStack CLI for Common Operational Tasks"),(0,o.kt)("h2",{id:"background"},(0,o.kt)("strong",{parentName:"h2"},"Background")),(0,o.kt)("p",null,"OpenStackClient (OSC) is the name of a command line interface for\nOpenStack which can be used to administer an OpenStack cloud. The same\nfunctionality found in the Horizon interface can also be found using\nOpenStackClient."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"get-started"},(0,o.kt)("strong",{parentName:"h2"},"Get started")),(0,o.kt)("p",null,"OpenStackClient will need to be installed before it can be used. See\nthis ",(0,o.kt)("a",{parentName:"p",href:"create_an_instance#create-an-instance"},"guide")," for installation\ninstructions."),(0,o.kt)("p",null,"For a full list and explanation of the available options use ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack\nhelp")," or refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/python-openstackclient/latest/"},"OpenStack\ndocumentation"),"."),(0,o.kt)("p",null,"Additional command line applications exist for some services such as\nNova and Cinder but will eventually be deprecated. While these command\nline utilities can be used, it is recommended that the OpenStack cloud\nbe administered using soley the OSC. The goal of OpenStack client is to\nprovide all the needed commands to administer an OpenStack cloud under\none application."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"output-formatting"},(0,o.kt)("strong",{parentName:"h2"},"Output formatting")),(0,o.kt)("p",null,"Typically when OpenStackClient commands are issued, a table of formatted\ndata is returned. When doing batch operations you may want to extract\njust the ",(0,o.kt)("strong",{parentName:"p"},"UUID")," of an item. It is possible to have OpenStackClient\nreturn exactly the information you need which can be useful for scripts\nor running the same action on multiple items."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"output formatters:\n  output formatter options\n\n  -f {csv,json,table,value,yaml}, --format {csv,json,table,value,yaml}\n                        the output format, defaults to table\n  -c COLUMN, --column COLUMN\n                        specify the column(s) to include, can be repeated to\n                        show multiple columns\n  --sort-column SORT_COLUMN\n                        specify the column(s) to sort the data (columns\n                        specified first have a priority, non-existing columns\n                        are ignored), can be repeated\n")),(0,o.kt)("p",null,"Say you want just the ",(0,o.kt)("strong",{parentName:"p"},"UUID")," of all the servers on a host. You can run\nsomething like this to achieve that goal (where ",(0,o.kt)("inlineCode",{parentName:"p"},"example_host")," is the\nhost you are working with):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server list --host example_host -f value -c ID\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"common-tasks"},(0,o.kt)("strong",{parentName:"h2"},"Common Tasks")),(0,o.kt)("p",null,"Below is a list of common operational tasks that can be done with the\nOpenStack Client. This guide will include examples of how to perform the\nfollowing tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage OpenStack users, including listing, creating, updating and\nremoving users"),(0,o.kt)("li",{parentName:"ul"},"Manage instances by creating them, stopping and starting them,\ncreating a snapshot, plus much more."),(0,o.kt)("li",{parentName:"ul"},"Live migration of instances"),(0,o.kt)("li",{parentName:"ul"},"Troubleshoot instance issues"),(0,o.kt)("li",{parentName:"ul"},"Upload images"),(0,o.kt)("li",{parentName:"ul"},"Create a network"),(0,o.kt)("li",{parentName:"ul"},"Create security groups"),(0,o.kt)("li",{parentName:"ul"},"Manage SSH key pairs"),(0,o.kt)("li",{parentName:"ul"},"Collect details about OpenStack environment")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"manage-openstack-users"},(0,o.kt)("strong",{parentName:"h2"},"Manage OpenStack users")),(0,o.kt)("p",null,"In OpenStack there exists the admin user account which has the ability\nto create additional users. Typically the admin account is used only\nwhen that level of privilege is needed otherwise individual user\naccounts should be used when interacting with an OpenStack cloud."),(0,o.kt)("p",null,"The following commands can be used to list, create, update, and remove\nOpenStack users:"),(0,o.kt)("p",null,"List users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack user list\n")),(0,o.kt)("p",null,"Create a user where ",(0,o.kt)("strong",{parentName:"p"},"PROJECT","_","NAME")," is the name of the project,\n",(0,o.kt)("strong",{parentName:"p"},"PASSWORD")," is the password to set, and ",(0,o.kt)("strong",{parentName:"p"},"USERNAME")," is the username:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack user create --project PROJECT_NAME --password PASSWORD \\\nUSERNAME\n")),(0,o.kt)("p",null,"The base command to update a user is ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack user set USERNAME")," where\nUSERNAME is the username in question."),(0,o.kt)("p",null,"Using that base command, you can enable or disable a user account or\nchange details, such as the email address associated with the user."),(0,o.kt)("p",null,"Disable a user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack user set USERNAME --disable\n")),(0,o.kt)("p",null,"Enable a user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack user set USERNAME --enable\n")),(0,o.kt)("p",null,"Change the email address, where ",(0,o.kt)("strong",{parentName:"p"},"EMAIL","_","ADDRESS")," should be the email\nto set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack user set USERNAME --email EMAIL_ADDRESS\n")),(0,o.kt)("h2",{id:"instance-management"},(0,o.kt)("strong",{parentName:"h2"},"Instance Management")),(0,o.kt)("h3",{id:"create-an-instance"},(0,o.kt)("strong",{parentName:"h3"},"Create an instance")),(0,o.kt)("p",null,"See the Day 1 ",(0,o.kt)("a",{parentName:"p",href:"create_an_instance"},"guide")," for information on how to\ncreate an instance."),(0,o.kt)("h3",{id:"stop-and-start-an-instance"},(0,o.kt)("strong",{parentName:"h3"},"Stop and start an instance")),(0,o.kt)("p",null,"Stop an instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server stop\n")),(0,o.kt)("p",null,"Start an instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server start\n")),(0,o.kt)("h3",{id:"create-an-instance-snapshot"},(0,o.kt)("strong",{parentName:"h3"},"Create an instance snapshot")),(0,o.kt)("p",null,"Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server image create --name SNAPSHOT_NAME INSTANCE_NAME\n")),(0,o.kt)("p",null,"You can verify the snapshot has been created by using both ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack\nimage list")," to find the newly created snapshot, then ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack image\nshow SNAP_SHOT_UUID")," to get details on that snapshot."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"perform-live-migration-of-instances"},(0,o.kt)("strong",{parentName:"h2"},"Perform live migration of instances")),(0,o.kt)("p",null,"Sometimes it is necessary to migrate instances from one compute node to\nanother if for example a compute node needs maintenance. It is possible\nto live migrate instances before bringing down that node."),(0,o.kt)("p",null,"Before you begin, you'll need the server UUID, the host that server is\ncurrently running on and the host to migrate to."),(0,o.kt)("p",null,"List servers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server list\n+--------------------------------------+-----------------------------+---------+-------------------------+-----------------------------+------------+\n| ID                                   | Name                        | Status  | Networks                | Image                       | Flavor     |\n+--------------------------------------+-----------------------------+---------+-------------------------+-----------------------------+------------+\n| 8de97c6f-bd4e-4f23-b8ee-1d9841082760 | test_7                      | ACTIVE  | Internal=192.168.0.10   | test_6_snapshot_cli         | hc1.small  |\n| 120fc769-ec99-4025-b456-320d8a17a158 | test_6                      | ACTIVE  | Internal=192.168.0.173  | test_5_snap_cli             | hc1.small  |\n| e93b3344-6d78-4273-880f-220b7fbec417 | test_5                      | ACTIVE  | Internal=192.168.0.186  | CentOS 8 (ce8-x86_64)       | hc1.small  |\n+--------------------------------------+-----------------------------+---------+-------------------------+-----------------------------+------------+\n")),(0,o.kt)("p",null,"Get the host of the ",(0,o.kt)("inlineCode",{parentName:"p"},"test_5")," server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server show e93b3344-6d78-4273-880f-220b7fbec417\n+-------------------------------------+--------------------------------------------------------------------+\n| Field                               | Value                                                              |\n+-------------------------------------+--------------------------------------------------------------------+\n| OS-DCF:diskConfig                   | AUTO                                                               |\n| OS-EXT-AZ:availability_zone         | nova                                                               |\n| OS-EXT-SRV-ATTR:host                | hc1.example_host                                                   |\n")),(0,o.kt)("p",null,"The above output of ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack server show")," is truncated."),(0,o.kt)("p",null,"Find the compute node to migrate to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack compute service list\n+----+----------------+------------------------+----------+---------+-------+----------------------------+\n| ID | Binary         | Host                   | Zone     | Status  | State | Updated At                 |\n+----+----------------+------------------------+----------+---------+-------+----------------------------+\n| 18 | nova-scheduler | hc1.example_host       | internal | enabled | up    | 2020-09-14T21:44:09.000000 |\n| 57 | nova-scheduler | hc2.example_host       | internal | enabled | up    | 2020-09-14T21:44:13.000000 |\n| 66 | nova-scheduler | hc3.example_host       | internal | enabled | up    | 2020-09-14T21:44:12.000000 |\n|  3 | nova-conductor | hc1.example_host       | internal | enabled | up    | 2020-09-14T21:44:13.000000 |\n|  9 | nova-conductor | hc2.example_host       | internal | enabled | up    | 2020-09-14T21:44:12.000000 |\n| 15 | nova-conductor | hc3.example_host       | internal | enabled | up    | 2020-09-14T21:44:13.000000 |\n| 24 | nova-compute   | hc3.example_host       | nova     | enabled | up    | 2020-09-14T21:44:09.000000 |\n| 27 | nova-compute   | hc1.example_host       | nova     | enabled | up    | 2020-09-14T21:44:12.000000 |\n| 30 | nova-compute   | hc2.example_host       | nova     | enabled | up    | 2020-09-14T21:44:13.000000 |\n+----+----------------+------------------------+----------+---------+-------+----------------------------+\n")),(0,o.kt)("p",null,"You can either choose the host to migrate to or one could be\nautomatically selected. The destination host should have a functioning\n",(0,o.kt)("inlineCode",{parentName:"p"},"nova-compute")," service running."),(0,o.kt)("p",null,"Before migrating to a specific host, ensure the host has enough\nresources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack host show hc2.example_host\n+------------------------+------------+-----+-----------+---------+\n| Host                   | Project    | CPU | Memory MB | Disk GB |\n+------------------------+------------+-----+-----------+---------+\n| hc2.example_host       | (total)    |   8 |     64243 |    2682 |\n| hc2.example_host       | (used_now) |   0 |     10240 |       0 |\n| hc2.example_host       | (used_max) |   0 |         0 |       0 |\n+------------------------+------------+-----+-----------+---------+\n")),(0,o.kt)("p",null,"Perform the migration to a specific host:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack --os-compute-api-version 2.79 server migrate \\\n--live-migration --host hc2.example_host \\\ne93b3344-6d78-4273-880f-220b7fbec417\n")),(0,o.kt)("p",null,"Note that to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--host")," flag, the Nova API version must be\nspecified using ",(0,o.kt)("inlineCode",{parentName:"p"},"--os-compute-api-version"),". In this case, the maximum\nversion that can be used is ",(0,o.kt)("inlineCode",{parentName:"p"},"2.79"),". More on the Nova API version release\nhistory is\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/nova/latest/reference/api-microversion-history.html"},"here"),"."),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack server list")," should show the instance status as\n",(0,o.kt)("inlineCode",{parentName:"p"},"MIGRATING"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server list\n+--------------------------------------+-----------------------------+-----------+-------------------------+-----------------------------+------------+\n| ID                                   | Name                        | Status    | Networks                | Image                       | Flavor     |\n+--------------------------------------+-----------------------------+-----------+-------------------------+-----------------------------+------------+\n| 8de97c6f-bd4e-4f23-b8ee-1d9841082760 | test_7                      | ACTIVE    | Internal=192.168.0.10   | test_6_snapshot_cli         | hc1.small  |\n| 120fc769-ec99-4025-b456-320d8a17a158 | test_6                      | ACTIVE    | Internal=192.168.0.173  | test_5_snap_cli             | hc1.small  |\n| e93b3344-6d78-4273-880f-220b7fbec417 | test_5                      | MIGRATING | Internal=192.168.0.186  | CentOS 8 (ce8-x86_64)       | hc1.small  |\n+--------------------------------------+-----------------------------+-----------+-------------------------+-----------------------------+------------+\n")),(0,o.kt)("p",null,"Confirm the instance has been migrated to the destination host:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server show e93b3344-6d78-4273-880f-220b7fbec417\n+-------------------------------------+--------------------------------------------------------------+\n| Field                               | Value                                                        |\n+-------------------------------------+--------------------------------------------------------------+\n| OS-DCF:diskConfig                   | AUTO                                                         |\n| OS-EXT-AZ:availability_zone         | nova                                                         |\n| OS-EXT-SRV-ATTR:host                | hc2.example_host                                             |\n| OS-EXT-SRV-ATTR:hypervisor_hostname | hc2.example_host                                             |\n| OS-EXT-SRV-ATTR:instance_name       | instance-0000008d                                            |\n| OS-EXT-STS:power_state              | Running                                                      |\n| OS-EXT-STS:task_state               | None                                                         |\n| OS-EXT-STS:vm_state                 | active                                                       |\n| OS-SRV-USG:launched_at              | 2020-08-24T21:51:42.000000                                   |\n| OS-SRV-USG:terminated_at            | None                                                         |\n| accessIPv4                          |                                                              |\n| accessIPv6                          |                                                              |\n| addresses                           | Internal=192.168.0.186                                       |\n| config_drive                        |                                                              |\n| created                             | 2020-08-24T21:51:16Z                                         |\n| flavor                              | hc1.small (hc1.small)                                        |\n| hostId                              | a4a089ceb3b247eeb47dde6f58ed85444cf18bf763453e7fbf775675     |\n| id                                  | e93b3344-6d78-4273-880f-220b7fbec417                         |\n| image                               | CentOS 8 (ce8-x86_64)                                        |\n| key_name                            | nw_1                                                         |\n| name                                | test_5                                                       |\n| progress                            | 0                                                            |\n| project_id                          | 5ad1f9e795604f4390d274d7388c4b9f                             |\n| properties                          |                                                              |\n| security_groups                     | name='basic_webserver_group'                                 |\n| status                              | ACTIVE                                                       |\n| updated                             | 2020-09-15T21:53:49Z                                         |\n| user_id                             | 43317575cccc440fbcb38a1f23b45125                             |\n| volumes_attached                    |                                                              |\n+-------------------------------------+--------------------------------------------------------------+\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"troubleshoot-instance-issues"},(0,o.kt)("strong",{parentName:"h2"},"Troubleshoot instance issues")),(0,o.kt)("div",{class:"note"},(0,o.kt)("div",{class:"title"},(0,o.kt)("p",null,"Note")),(0,o.kt)("p",null,"This section will be filled out as common scenarios occur.")),(0,o.kt)("h2",{id:"upload-images"},(0,o.kt)("strong",{parentName:"h2"},"Upload images")),(0,o.kt)("p",null,"To create an image, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack image create\n")),(0,o.kt)("p",null,"For assistance with the CLI options, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack help image create\n")),(0,o.kt)("p",null,"OpenStack provides an operating system called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cirros-dev/cirros"},"CirrOS")," that has the minimum\nrequirements to be an operating system that is generally used to test\ninstance creation."),(0,o.kt)("p",null,"This example will explain how to upload the CirrOS image into glance."),(0,o.kt)("p",null,"To get this CirrOS image into the glance service, you'll need to first\ndownload it to where the OpenStackClient lives, then the base command\n",(0,o.kt)("inlineCode",{parentName:"p"},"openstack image create")," can be used to upload the image."),(0,o.kt)("p",null,"Download CirrOS and upload into glance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# grab the latest CirrOS image\n$ wget http://download.cirros-cloud.net/0.5.1/cirros-0.5.1-x86_64-disk.img\n\n# upload the image into glance\n$ openstack image create cirros --container-format bare --disk-format\nqcow2 --file PATH_TO_CIRROS_IMAGE\n")),(0,o.kt)("p",null,"List the newly uploaded image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack image list\n+--------------------------------------+--------------------------------+--------+\n| ID                                   | Name                           | Status |\n+--------------------------------------+--------------------------------+--------+\n| fa8eb9bd-9ccc-4d3f-b87b-6edb5450a57a | cirros                         | active |\n+--------------------------------------+--------------------------------+--------+\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"create-a-private-network"},(0,o.kt)("strong",{parentName:"h2"},"Create a private network")),(0,o.kt)("p",null,"Listed are the steps needed to create a private network and connect it\nto the provider network. Variables are presented in all capital and\nshould be replaced accordingly."),(0,o.kt)("p",null,"Create a network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack network create NETWORK_NAME\n")),(0,o.kt)("p",null,"Create a subnet on that network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack subnet create --subnet-range 10.0.0.0/24 --network NETWORK_NAME\nSUBNET_NAME\n")),(0,o.kt)("p",null,"Create a router that will connect to an external, public-facing network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack router create ROUTER_NAME\n")),(0,o.kt)("p",null,"Add the subnet to the router:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack router add subnet ROUTER_NAME SUBNET_NAME\n")),(0,o.kt)("p",null,"Add the external network gateway:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack router set --external-gateway EXTERNAL_NETWORK_UUID \\\nROUTER_NAME\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"create-security-groups"},(0,o.kt)("strong",{parentName:"h2"},"Create security groups")),(0,o.kt)("p",null,"Here's an example that opens inbound traffic for all IPs on ports 80 and\n443."),(0,o.kt)("p",null,"Create a security group where ",(0,o.kt)("strong",{parentName:"p"},"SECURITY","_","GROUP")," is the name of the\nsecurity group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group create SECURITY_GROUP\n")),(0,o.kt)("p",null,"List security groups:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group list\n+--------------------------------------+-----------------------+------------------------------------------------------------+----------------------------------+------+\n| ID                                   | Name                  | Description                                                | Project                          | Tags |\n+--------------------------------------+-----------------------+------------------------------------------------------------+----------------------------------+------+\n| 8639e3c5-47ce-4072-a1f5-1c1e931a8f75 | default               | Default security group                                     | 3c5591e744fa4fdcb38409781596182d | []   |\n| ebffcf78-52d9-436c-81db-5ea788a0c33d | devstack              |                                                            | 5ad1f9e795604f4390d274d7388c4b9f | []   |\n| ec8a02ba-4bc2-4b78-a555-902caead87fe | basic_webserver_group | This will open standard ports for web services             | 5ad1f9e795604f4390d274d7388c4b9f | []   |\n+--------------------------------------+-----------------------+------------------------------------------------------------+----------------------------------+------+\n")),(0,o.kt)("p",null,"List details of a security group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group show UUID\n")),(0,o.kt)("p",null,"Open ports 80 and 443 on all IP ranges for ingress TCP traffic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack security group rule create --remote-ip 0.0.0.0/0 \\\n--dst-port 80:80 --ingress --protocol tcp SECURITY_GROUP\n\n$ openstack security group rule create --remote-ip 0.0.0.0/0 \\\n--dst-port 443:443 --ingress --protocol tcp SECURITY_GROUP\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"add-ssh-public-key"},(0,o.kt)("strong",{parentName:"h2"},"Add SSH public key")),(0,o.kt)("p",null,"It is recommended an SSH public key be uploaded and this is possible\nthrough the OSC."),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack keypair create KEY_NAME"),", where KEY","_","NAME is the name\nof the SSH key pair, is sufficient for generating an SSH private and\npublic key. The output will return the private key, which should be kept\nsomewhere private and inaccessible to others."),(0,o.kt)("p",null,"You can also upload a public key from a key pair using ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack\nkeypair create --public-key PATH_TO_PUBLIC_KEY KEY_NAME"),", where\nPATH","_","TO","_","PUBLIC","_","KEY is the file path to the public key."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"collect-details-about-openstack-environment"},(0,o.kt)("strong",{parentName:"h2"},"Collect details about OpenStack environment")),(0,o.kt)("p",null,"Show the role of each hardware node in an OpenStack cloud:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack host list\n+------------------------+-----------+----------+\n| Host Name              | Service   | Zone     |\n+------------------------+-----------+----------+\n| hc1.edu.learnstack.org | scheduler | internal |\n| hc2.edu.learnstack.org | scheduler | internal |\n| hc3.edu.learnstack.org | scheduler | internal |\n| hc1.edu.learnstack.org | conductor | internal |\n| hc2.edu.learnstack.org | conductor | internal |\n| hc3.edu.learnstack.org | conductor | internal |\n| hc3.edu.learnstack.org | compute   | nova     |\n| hc1.edu.learnstack.org | compute   | nova     |\n| hc2.edu.learnstack.org | compute   | nova     |\n+------------------------+-----------+----------+\n")))}d.isMDXComponent=!0}}]);