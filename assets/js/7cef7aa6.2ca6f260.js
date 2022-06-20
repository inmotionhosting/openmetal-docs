"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[6564],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||r;return a?o.createElement(k,u(u({ref:t},p),{},{components:a})):o.createElement(k,u({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,u=new Array(r);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var c=2;c<r;c++)u[c]=a[c];return o.createElement.apply(null,u)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3566:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),u=["components"],l={},i="Create and Restore Volume Backups",c={unversionedId:"operators-manual/day-3/create-volume-backups",id:"operators-manual/day-3/create-volume-backups",title:"Create and Restore Volume Backups",description:"Introduction",source:"@site/docs/operators-manual/day-3/create-volume-backups.md",sourceDirName:"operators-manual/day-3",slug:"/operators-manual/day-3/create-volume-backups",permalink:"/openmetal-docs/docs/operators-manual/day-3/create-volume-backups",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/operators-manual/day-3/create-volume-backups.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Copy and Restore OpenStack Service Databases and Configuration",permalink:"/openmetal-docs/docs/operators-manual/day-3/create-openstack-service-backups"},next:{title:"OpenStack Disaster Planning, Testing, and Recovery",permalink:"/openmetal-docs/docs/operators-manual/day-3/disaster-recovery"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Create a Volume Backup",id:"create-a-volume-backup",children:[{value:"Test Volume Backups",id:"test-volume-backups",children:[],level:3}],level:2},{value:"Restore a Volume Backup",id:"restore-a-volume-backup",children:[],level:2},{value:"Ceph, Volumes, and Data Durability",id:"ceph-volumes-and-data-durability",children:[],level:2},{value:"Store Data Outside of the Cloud",id:"store-data-outside-of-the-cloud",children:[],level:2}],s={toc:p};function m(e){var t=e.components,l=(0,n.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-and-restore-volume-backups"},"Create and Restore Volume Backups"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"With Private Clouds, you have the ability to create backups and\nsnapshots of your volume data. If a volume's data goes corrupt or is\nremoved by mistake, having a copy of that data could be invaluable. In\nthis guide, we explain how to create and recover volume backups using\nHorizon."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"create-volume-backups#create-a-volume-backup"},"Create a Volume\nBackup")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"create-volume-backups#test-volume-backups"},"Test Volume\nBackups")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"create-volume-backups#restore-a-volume-backup"},"Restore a Volume\nBackup"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"create-volume-backups#ceph-volumes-and-data-durability"},"Ceph, Volumes, and Data\nDurability"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"create-volume-backups#store-data-outside-of-the-cloud"},"Store Data Outside of the\nCloud")))),(0,r.kt)("h2",{id:"create-a-volume-backup"},"Create a Volume Backup"),(0,r.kt)("p",null,"Navigate in Horizon to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Volume -",">"," Volumes"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(4643).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 1:")," Volumes List"),(0,r.kt)("p",null,"Create a backup of your volume by selecting from the drop down ",(0,r.kt)("strong",{parentName:"p"},"Create\nBackup"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(8842).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 2:")," Create Volume Backup Form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup Name"),": Specify a name for the volume backup"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": Provide a description if necessary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Container Name"),": Leave this blank otherwise the volume backup\ncannot be created. Horizon tells you if this field is blank, the\nbackup is stored in a container called ",(0,r.kt)("inlineCode",{parentName:"li"},"volumebackups"),", but this is\nnot the case with our configuration. With Private Clouds, all volume\nbackups created this way are stored in the Ceph pool called\n",(0,r.kt)("inlineCode",{parentName:"li"},"backups"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup Snapshot"),": If applicable specify a snapshot to create a\nbackup from")),(0,r.kt)("p",null,"After submitting the form, you are navigated to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Volume -",">","\nVolume Backups")," where you can see the volume you just created a backup\nof."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6651).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 3:")," Volume Backup List"),(0,r.kt)("h3",{id:"test-volume-backups"},"Test Volume Backups"),(0,r.kt)("p",null,"Creating backup copies of your important data is only one part of having\na solid backup and recovery plan. Additionally, consider testing\nbacked-up data to ensure if something unexpected does happen that\nrestoring your backups will actually be useful. To test volume backups,\nyou can restore a volume backup within OpenStack alongside the original\nvolume and compare the contents."),(0,r.kt)("h2",{id:"restore-a-volume-backup"},"Restore a Volume Backup"),(0,r.kt)("p",null,"To restore a volume backup, being by navigating in Horizon to ",(0,r.kt)("strong",{parentName:"p"},"Project\n-",">"," Volume -",">"," Volume Backups"),"."),(0,r.kt)("p",null,"Next, find the volume backup you wish to restore and from its drop down\non the right, select ",(0,r.kt)("strong",{parentName:"p"},"Restore Backup"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(9100).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 4:")," Volume Backup List"),(0,r.kt)("p",null,"Choose the volume to restore to, or have the system restore the backup\nto a new volume."),(0,r.kt)("h2",{id:"ceph-volumes-and-data-durability"},"Ceph, Volumes, and Data Durability"),(0,r.kt)("p",null,"When volume backups are created, they are stored in your cloud's Ceph\ncluster in a pool called ",(0,r.kt)("inlineCode",{parentName:"p"},"backups"),". By default, the Ceph cluster is\nconfigured with host level replication across each of your cloud's three\ncontrol plane nodes. With this configuration, your cloud could suffer\nlosing all but one Ceph node and still retain all of the cluster's data.\nFor more about how your Ceph cluster was configure, see the heading\n",(0,r.kt)("strong",{parentName:"p"},"Default Configuration for the Ceph Cluster")," in the ",(0,r.kt)("a",{parentName:"p",href:"../day-2/introduction-to-ceph"},"Introduction to\nCeph")," guide."),(0,r.kt)("h2",{id:"store-data-outside-of-the-cloud"},"Store Data Outside of the Cloud"),(0,r.kt)("p",null,"Taking data backups a step further, consider storing critical data\noutside of the cloud. Storing data both in the cloud's Ceph cluster as\nwell as outside of it increases the failure domain."),(0,r.kt)("p",null,"With Ceph you can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ceph.com/en/latest/rbd/rbd-mirroring/"},"RBD\nmirroring"),", which\neffectively is a way to mirror your Ceph cluster's data to another Ceph\ncluster."))}m.isMDXComponent=!0},8842:function(e,t,a){t.Z=a.p+"assets/images/create-volume-backup-ebb6d39cb0d5280e4be556ed07f29c76.png"},4643:function(e,t,a){t.Z=a.p+"assets/images/jumpstation-volume-list-abcebe99898c6ea3bce614a217090c25.png"},9100:function(e,t,a){t.Z=a.p+"assets/images/restore-volume-backup-8c29247b32acf1948e852e83f1b27985.png"},6651:function(e,t,a){t.Z=a.p+"assets/images/volume-backup-list-ab1ba2c43a6cb5af77974059c0d08cab.png"}}]);