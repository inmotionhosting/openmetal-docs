"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[6005],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return k}});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=o,b=d["".concat(i,".").concat(k)]||d[k]||u[k]||r;return a?t.createElement(b,c(c({ref:n},p),{},{components:a})):t.createElement(b,c({ref:n},p))}));function k(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=a[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3699:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var t=a(7462),o=a(3366),r=(a(7294),a(3905)),c=["components"],l={},i="Managing Backups in OpenStack",s={unversionedId:"users_manual/backups_cli",id:"users_manual/backups_cli",title:"Managing Backups in OpenStack",description:"Having a solid backup strategy is important in the event where data is",source:"@site/docs/users_manual/backups_cli.md",sourceDirName:"users_manual",slug:"/users_manual/backups_cli",permalink:"/openmetal-docs/docs/users_manual/backups_cli",editUrl:"https://github.com/inmotionhosting/openmetal-docs/docs/users_manual/backups_cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Make Backups in OpenStack",permalink:"/openmetal-docs/docs/users_manual/backups"},next:{title:"How to Create an Instance",permalink:"/openmetal-docs/docs/users_manual/create_an_instance"}},p=[{value:"Instance Backups",id:"instance-backups",children:[{value:"How to Create an Instance Backup",id:"how-to-create-an-instance-backup",children:[{value:"Volume-backed Instance",id:"volume-backed-instance",children:[],level:4},{value:"Image-backed Instance",id:"image-backed-instance",children:[],level:4}],level:3},{value:"How to Recover an Instance Backup",id:"how-to-recover-an-instance-backup",children:[{value:"Volume-backed Instance",id:"volume-backed-instance-1",children:[],level:4},{value:"Image-backed Instance",id:"image-backed-instance-1",children:[],level:4}],level:3}],level:2},{value:"Volume Backups",id:"volume-backups",children:[{value:"How to Create a Volume Backup",id:"how-to-create-a-volume-backup",children:[],level:3},{value:"How to Recover a Volume Backup",id:"how-to-recover-a-volume-backup",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,a=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-backups-in-openstack"},"Managing Backups in OpenStack"),(0,r.kt)("p",null,"Having a solid backup strategy is important in the event where data is\nlost and you need to recover it. In this guide, you will learn how to\nmake backups of instance data, volumes, and how to store backups outside\nof the OpenStack cloud."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Considerations for Testing Backups")),(0,r.kt)("p",null,"Backups should not only be created, but should be confirmed they contain\nall data as well as be restored and tested as part of a polished backup\nstrategy. Consider a disaster recovery scenario where you have known\nbackups, however they were never tested, and are not usable due to some\ncircumstance."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"instance-backups"},"Instance Backups"),(0,r.kt)("h3",{id:"how-to-create-an-instance-backup"},"How to Create an Instance Backup"),(0,r.kt)("p",null,"This section demonstrates how to create an instance backup using\nOpenStackClient."),(0,r.kt)("p",null,"To begin, ensure you have prepared your OpenStackClient environment\nbefore issuing commands."),(0,r.kt)("p",null,"Depending on how the instance was spawned will determine how to create a\nbackup. If the instance is volume-backed, you will have to back up the\nvolume. If the instance is image-backed, you can back up the instance\nitself, which creates an image backup. Each method is described below."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"volume-backed-instance"},"Volume-backed Instance"),(0,r.kt)("p",null,"To create a backup of a volume-backed instance using OpenStackClient,\nyou will need to create a backup of the volume, by first obtaining the\nvolume's UUID, then use ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume backup create VOLUME_UUID"),"."),(0,r.kt)("p",null,"In addition, if the volume is in use by an instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," flag\nis required to create the volume backup."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Create Backup"),(0,r.kt)("p",null,"Create a backup of a volume-backed instance by first listing volumes\nthen issuing the command to back up that volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume list\n+--------------------------------------+-------------------+-----------+------+--------------------------------------------+\n| ID                                   | Name              | Status    | Size | Attached to                                |\n+--------------------------------------+-------------------+-----------+------+--------------------------------------------+\n| 9887730c-e804-4353-af2d-a92b750ed6b5 |                   | in-use    |   17 | Attached to instance-2-volume on /dev/vda  |\n| 9a1dfde3-9113-400c-b06e-80d67c636ef9 |                   | in-use    |   25 | Attached to wordpress-1 on /dev/vda\n")),(0,r.kt)("p",null,"This example demonstrates creating a backup of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-2-volume")," by\nbacking up its associated volume, referenced by\n",(0,r.kt)("inlineCode",{parentName:"p"},"9887730c-e804-4353-af2d-a92b750ed6b5"),"."),(0,r.kt)("p",null,"Create backup of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-2-volume"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup create 9887730c-e804-4353-af2d-a92b750ed6b5 \\\n--force\n+-------+--------------------------------------+\n| Field | Value                                |\n+-------+--------------------------------------+\n| id    | bc8d29c4-be51-4675-b290-bd0bdc8c9be7 |\n| name  | None                                 |\n+-------+--------------------------------------+\n")),(0,r.kt)("p",null,"Take note of the ",(0,r.kt)("strong",{parentName:"p"},"id")," of the backup as this will be used next to\ndetermine the backup status."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Confirm Backup Completion"),(0,r.kt)("p",null,"The backup will take some time to complete. After a period of time,\ncheck the status by using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume backup show\nVOLUME_BACKUP_UUID"),", replacing ",(0,r.kt)("strong",{parentName:"p"},"VOLUME","_","BACKUP","_","UUID")," with the actual\nUUID of the volume backup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup show bc8d29c4-be51-4675-b290-bd0bdc8c9be7\n+-----------------------+--------------------------------------+\n| Field                 | Value                                |\n+-----------------------+--------------------------------------+\n| availability_zone     | None                                 |\n| container             | backups                              |\n| created_at            | 2021-05-24T16:04:49.000000           |\n| data_timestamp        | 2021-05-24T16:04:49.000000           |\n| description           | None                                 |\n| fail_reason           | None                                 |\n| has_dependent_backups | False                                |\n| id                    | bc8d29c4-be51-4675-b290-bd0bdc8c9be7 |\n| is_incremental        | False                                |\n| name                  | None                                 |\n| object_count          | 0                                    |\n| size                  | 17                                   |\n| snapshot_id           | None                                 |\n| status                | available                            |\n| updated_at            | 2021-05-24T16:05:35.000000           |\n| volume_id             | 9887730c-e804-4353-af2d-a92b750ed6b5 |\n+-----------------------+--------------------------------------+\n")),(0,r.kt)("h4",{id:"image-backed-instance"},"Image-backed Instance"),(0,r.kt)("p",null,"To create a backup of an image-backed instance, use ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack server\nbackup create INSTANCE_UUID"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Create Backup"),(0,r.kt)("p",null,"First list instances to obtain the UUID, or you can specify the instance\nname to the backup command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack server list\n+--------------------------------------+-------------------+--------+-----------------------------------------+------------------------------+----------+\n| ID                                   | Name              | Status | Networks                                | Image                        | Flavor   |\n+--------------------------------------+-------------------+--------+-----------------------------------------+------------------------------+----------+\n| 226ebf42-f58d-4149-8393-dd4f241c33aa | image-backed      | ACTIVE | network-1=192.168.0.199                 | CentOS 8 Stream (el8-x86_64) | c1.micro |\n")),(0,r.kt)("p",null,"Next, create a backup of the instance called ",(0,r.kt)("strong",{parentName:"p"},"image-backed")," using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack server backup create image-backed\n+------------------+------------------------------------------------------------------------+\n| Field            | Value                                                                  |\n+------------------+------------------------------------------------------------------------+\n| container_format | bare                                                                   |\n| created_at       | 2021-05-24T16:45:17Z                                                   |\n| disk_format      | qcow2                                                                  |\n| file             | /v2/images/um_f3f2bf61-c699-43ce-9db5-4bb3343cbfad/file                   |\n| id               | f3f2bf61-c699-43ce-9db5-4bb3343cbfad                                   |\n| min_disk         | 25                                                                     |\n| min_ram          | 0                                                                      |\n| name             | image-backed                                                           |\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("strong",{parentName:"p"},"id")," column from the output. This is the UUID of the backup\nand will be used to verify backup completion."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Confirm Backup Completion"),(0,r.kt)("p",null,"When a backup of an image-backed instance is created, it is created as\nan image."),(0,r.kt)("p",null,"To confirm the status of the backup, use ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack image show UUID"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack image show f3f2bf61-c699-43ce-9db5-4bb3343cbfad --fit-width\n+------------------+------------------------------------------------------------------------+\n| Field            | Value                                                                  |\n+------------------+------------------------------------------------------------------------+\n| container_format | bare                                                                   |\n| created_at       | 2021-05-24T16:45:17Z                                                   |\n| disk_format      | raw                                                                    |\n| file             | /v2/images/um_f3f2bf61-c699-43ce-9db5-4bb3343cbfad/file                   |\n| id               | f3f2bf61-c699-43ce-9db5-4bb3343cbfad                                   |\n| min_disk         | 25                                                                     |\n| min_ram          | 0                                                                      |\n| name             | image-backed                                                           |\n| owner            | b93259ca0a5b4541b30e4e16ae1d699d                                       |\n| properties       | [truncated]                                                            |\n| protected        | False                                                                  |\n| schema           | /v2/schemas/image                                                      |\n| size             | 26843545600                                                            |\n| status           | active                                                                 |\n| tags             |                                                                        |\n| updated_at       | 2021-05-24T16:45:50Z                                                   |\n| visibility       | private                                                                |\n+------------------+------------------------------------------------------------------------+\n")),(0,r.kt)("p",null,"Look for the ",(0,r.kt)("strong",{parentName:"p"},"status")," column to indicate the status of the backup. If\nthe backup is complete, the status will show as ",(0,r.kt)("inlineCode",{parentName:"p"},"active"),"."),(0,r.kt)("h3",{id:"how-to-recover-an-instance-backup"},"How to Recover an Instance Backup"),(0,r.kt)("p",null,"This section explains how to recover an instance backup using\nOpenStackClient."),(0,r.kt)("p",null,"To recover an instance backup, the process involves creating a new\ninstance based on the image or volume backup."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"volume-backed-instance-1"},"Volume-backed Instance"),(0,r.kt)("p",null,"This section demonstrates how to recover an instance using a volume\nbackup."),(0,r.kt)("p",null,"To restore an instance from a volume backup, the volume backup needs to\nfirst be restored into a new volume, then an instance can be booted\nusing that new volume."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Create new volume"),(0,r.kt)("p",null,"First create a volume of appropriate size to restore the volume backup\ninto, using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume create --size SIZE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume create wordpress-1-backup-1 --size 25\n+---------------------+--------------------------------------+\n| Field               | Value                                |\n+---------------------+--------------------------------------+\n| attachments         | []                                   |\n| availability_zone   | nova                                 |\n| bootable            | false                                |\n| consistencygroup_id | None                                 |\n| created_at          | 2021-05-24T17:57:29.000000           |\n| description         | None                                 |\n| encrypted           | False                                |\n| id                  | 1810a215-67e4-48b5-ba51-feef9d263660 |\n| multiattach         | False                                |\n| name                | wordpress-1-backup-1                 |\n")),(0,r.kt)("p",null,"Take note of the ",(0,r.kt)("strong",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1810a215-67e4-48b5-ba51-feef9d263660"),", as this\nwill be used in the next section to recover."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Restore volume backup"),(0,r.kt)("p",null,"The volume backup can be restored now, but first you will need the UUID\nof the backup created previously. This can be listed by using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack\nvolume backup list"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup list\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| ID                                   | Name                     | Description | Status    | Size |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| f8440441-92b8-4522-9dfe-18868e089d6e | None                     | None        | available |   25 |\n| bc8d29c4-be51-4675-b290-bd0bdc8c9be7 | None                     | None        | available |   17 |\n| 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 | wordpress-media-1-backup |             | available |    5 |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n")),(0,r.kt)("p",null,"This example will recover the volume backup under UUID\n",(0,r.kt)("inlineCode",{parentName:"p"},"f8440441-92b8-4522-9dfe-18868e089d6e"),"."),(0,r.kt)("p",null,"Restore the volume backup into the new volume using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume\nbackup restore BACKUP_UUID VOLUME_UUID"),", replacing ",(0,r.kt)("strong",{parentName:"p"},"BACKUP","_","UUID")," and\n",(0,r.kt)("strong",{parentName:"p"},"VOLUME","_","UUID")," with the UUIDs of the backup and the new volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup restore f8440441-92b8-4522-9dfe-18868e089d6e 1810a215-67e4-48b5-ba51-feef9d263660\n+-------------+--------------------------------------+\n| Field       | Value                                |\n+-------------+--------------------------------------+\n| backup_id   | f8440441-92b8-4522-9dfe-18868e089d6e |\n| volume_id   | 1810a215-67e4-48b5-ba51-feef9d263660 |\n| volume_name | wordpress-1-backup-1                 |\n+-------------+--------------------------------------+\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," -- Confirm volume"),(0,r.kt)("p",null,"Confirm the volume backup restored into the new volume by listing\nvolumes and note the ",(0,r.kt)("strong",{parentName:"p"},"Status")," column:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume list\n+--------------------------------------+----------------------+-----------+------+--------------------------------------------+\n| ID                                   | Name                 | Status    | Size | Attached to                                |\n+--------------------------------------+----------------------+-----------+------+--------------------------------------------+\n| 1810a215-67e4-48b5-ba51-feef9d263660 | wordpress-1-backup-1 | available |   25 |                                            |\n")),(0,r.kt)("p",null,"If the backup is ready to use, the ",(0,r.kt)("strong",{parentName:"p"},"Status")," column will show as\n",(0,r.kt)("inlineCode",{parentName:"p"},"available"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4")," -- Create new instance"),(0,r.kt)("p",null,"A new instance can now be created using this volume. For help with how\nto create an instance see the ",(0,r.kt)("a",{parentName:"p",href:"users_manual/create_an_instance_cli"},"Create an\nInstance")," guide."),(0,r.kt)("p",null,"The following builds an instance booted from the previously restored\nvolume backup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack server create --volume 1810a215-67e4-48b5-ba51-feef9d263660 \\\\\n    --flavor c1.micro \\\\\n    --network 29aa8aec-36ec-416d-9828-4a3b6bb10f4b \\\\\n    --key-name key-1 \\\\\n    --security-group 44668612-1a18-4289-b5fb-f24de8e20c09 \\\\\n    wordpress-2-volume-restored\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5")," -- Confirm instance restoration"),(0,r.kt)("p",null,"Show the details of the instance to confirm it is active:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack server show wordpress-2-volume-restored | grep status\n| status                      | ACTIVE                                                   |\n")),(0,r.kt)("h4",{id:"image-backed-instance-1"},"Image-backed Instance"),(0,r.kt)("p",null,"This section explains how to recover an instance using an image backup."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- List images"),(0,r.kt)("p",null,"First, acquire the UUID of the image you wish to restore using\n",(0,r.kt)("inlineCode",{parentName:"p"},"openstack image list"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack image list\n+--------------------------------------+------------------------------------------------------+--------+\n| ID                                   | Name                                                 | Status |\n+--------------------------------------+------------------------------------------------------+--------+\n| d5a101ff-0870-435f-bf76-c3309e542a53 | CentOS 8 Stream (el8-x86_64)                         | active |\n| 8c8e0a35-61dd-4540-b9fd-ca36ca0ef181 | Debian 10 (buster-amd64)                             | active |\n| be44af12-aa34-4b25-b4af-60a66599f442 | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | active |\n| c005b6f3-9d34-4f91-94b6-1ff50c174750 | Ubuntu 20.04 (focal-amd64)                           | active |\n| f3f2bf61-c699-43ce-9db5-4bb3343cbfad | image-backed                                         | active |\n| d589995e-7425-42fd-8a6a-3bf98783e0cc | wordpress-1-snap                                     | active |\n| ec4c8f61-6f44-4360-99b3-47b3022d177d | wordpress-2-snap                                     | active |\n+--------------------------------------+------------------------------------------------------+--------+\n")),(0,r.kt)("p",null,"This example will use the image called ",(0,r.kt)("strong",{parentName:"p"},"image-backed"),", which is\nassociated with UUID ",(0,r.kt)("inlineCode",{parentName:"p"},"f3f2bf61-c699-43ce-9db5-4bb3343cbfad"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Spawn instance"),(0,r.kt)("p",null,"With the image UUID, spawn a new instance called\n",(0,r.kt)("strong",{parentName:"p"},"instance-3-image-backed"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack server create \\\n--image f3f2bf61-c699-43ce-9db5-4bb3343cbfad \\\n--flavor c1.micro \\\n--network 29aa8aec-36ec-416d-9828-4a3b6bb10f4b \\\n--key-name key-1 \\\n--security-group 44668612-1a18-4289-b5fb-f24de8e20c09 \\\ninstance-3-image-backed\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," -- Confirm instance creation"),(0,r.kt)("p",null,"Confirm the instance created successfully by listing instances or\nshowing the specific details of the instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"List Instances")),(0,r.kt)("p",null,"List instances using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack server list"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack server list\n+--------------------------------------+-----------------------------+--------+-------------------------+------------------------------+----------+\n| ID                                   | Name                        | Status | Networks                | Image                        | Flavor   |\n+--------------------------------------+-----------------------------+--------+-------------------------+------------------------------+----------+\n| 98174d7f-53c1-4861-84a5-2517b90ba92e | instance-3-image-backed     | ACTIVE | network-1=192.168.0.176 | image-backed                 | c1.micro |\n| ff205cad-965c-4ae1-9e47-65fa4d1df82b | wordpress-2-volume-restored | ACTIVE | network-1=192.168.0.226 | N/A (booted from volume)     | c1.micro |\n| 226ebf42-f58d-4149-8393-dd4f241c33aa | image-backed                | ACTIVE | network-1=192.168.0.199 | CentOS 8 Stream (el8-x86_64) | c1.micro |\n| da6591d9-7cbd-47aa-9a46-ff3cb6d52c24 | instance-2-volume           | ACTIVE | network-1=192.168.0.178 | N/A (booted from volume)     | c1.micro |\n| 72e1e2db-0276-4ddd-85b4-452aa7c449c0 | instance-1                  | ACTIVE | network-1=192.168.0.50  | CentOS 8 Stream (el8-x86_64) | c1.micro |\n+--------------------------------------+-----------------------------+--------+-------------------------+------------------------------+----------+\n")),(0,r.kt)("p",null,"The first item in the above list is the instance previously created. The\n",(0,r.kt)("strong",{parentName:"p"},"Status")," column shows ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTIVE")," indicating the instance is ready to\nuse."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"volume-backups"},"Volume Backups"),(0,r.kt)("h3",{id:"how-to-create-a-volume-backup"},"How to Create a Volume Backup"),(0,r.kt)("p",null,"In addition to creating instance snapshots, you can also create backups\nof volumes using OpenStackClient. This is important when a persistent\nvolume is used and you want to create backup copies of it."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- List existing volumes"),(0,r.kt)("p",null,"To create a volume backup, you first need to know the name or UUID of\nthe volume being backed up."),(0,r.kt)("p",null,"Determine this by listing volumes, using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume list"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume list\n+--------------------------------------+----------------------+-----------+------+------------------------------------------------------+\n| ID                                   | Name                 | Status    | Size | Attached to                                          |\n+--------------------------------------+----------------------+-----------+------+------------------------------------------------------+\n| 1810a215-67e4-48b5-ba51-feef9d263660 | wordpress-1-backup-1 | available |   25 |                                                      |\n| 9887730c-e804-4353-af2d-a92b750ed6b5 |                      | in-use    |   17 | Attached to instance-2-volume on /dev/vda            |\n| 2a8eb736-9e7b-4ede-9a4e-9a50fc571da2 |                      | in-use    |   25 | Attached to wordpress-2-volume-restored on /dev/vda  |\n| 664e09b7-e1f9-46e1-9504-794ff75e7295 |                      | available |   25 |                                                      |\n| 0860845e-ba18-4f1f-84ed-22600ad7bbca | wordpress-media-1    | available |    5 |                                                      |\n+--------------------------------------+----------------------+-----------+------+------------------------------------------------------+\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Create volume backup"),(0,r.kt)("p",null,"This example will demonstrate backing up the volume from the above\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress-media-1"),"."),(0,r.kt)("p",null,"To create a volume backup of this volume, use ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume backup\ncreate wordpress-media-1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup create wordpress-media-1\n+-------+--------------------------------------+\n| Field | Value                                |\n+-------+--------------------------------------+\n| id    | 3db892b4-809e-400b-9d85-1f3340de49a5 |\n| name  | None                                 |\n+-------+--------------------------------------+\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," -- Confirm volume backup completion"),(0,r.kt)("p",null,"You can either list the volume backups and look at the ",(0,r.kt)("strong",{parentName:"p"},"Status")," column\nor show the details of the specific volume backup."),(0,r.kt)("p",null,"List volume backups using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume backup list"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup list\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| ID                                   | Name                     | Description | Status    | Size |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| 3db892b4-809e-400b-9d85-1f3340de49a5 | None                     | None        | available |    5 |\n| f8440441-92b8-4522-9dfe-18868e089d6e | None                     | None        | available |   25 |\n| bc8d29c4-be51-4675-b290-bd0bdc8c9be7 | None                     | None        | available |   17 |\n| 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 | wordpress-media-1-backup |             | available |    5 |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Status")," column indicates if the volume backup is ready to use or\nnot and should report ",(0,r.kt)("inlineCode",{parentName:"p"},"available")," when the backup is ready."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"how-to-recover-a-volume-backup"},"How to Recover a Volume Backup"),(0,r.kt)("p",null,"This section explains the steps needed to recover a volume backup using\nOpenStackClient. The flow for recovering a volume backup is to find the\nvolume backup UUID, create an empty volume, then recover the backup into\nthe new volume."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Find the volume backup"),(0,r.kt)("p",null,"First, list the available volume backups using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume backup\nlist"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup list\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| ID                                   | Name                     | Description | Status    | Size |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| 3db892b4-809e-400b-9d85-1f3340de49a5 | None                     | None        | available |    5 |\n| f8440441-92b8-4522-9dfe-18868e089d6e | None                     | None        | available |   25 |\n| bc8d29c4-be51-4675-b290-bd0bdc8c9be7 | None                     | None        | available |   17 |\n| 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 | wordpress-media-1-backup |             | available |    5 |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n")),(0,r.kt)("p",null,"This example will recover the volume backup called\n",(0,r.kt)("strong",{parentName:"p"},"wordpress-media-1-backup"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Create new volume"),(0,r.kt)("p",null,"Next, create a new volume at least the size of the volume backup using\n",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume create --size SIZE VOLUME_NAME"),", where ",(0,r.kt)("strong",{parentName:"p"},"SIZE")," is in\ngigabytes and the ",(0,r.kt)("strong",{parentName:"p"},"VOLUME","_","NAME")," is the name of the volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume create --size 5 wordpress-media-1-backup-2\n+---------------------+--------------------------------------+\n| Field               | Value                                |\n+---------------------+--------------------------------------+\n| attachments         | []                                   |\n| availability_zone   | nova                                 |\n| bootable            | false                                |\n| consistencygroup_id | None                                 |\n| created_at          | 2021-05-24T22:04:02.000000           |\n| description         | None                                 |\n| encrypted           | False                                |\n| id                  | 05b1310b-35d0-497f-a150-3ca436b6a969 |\n")),(0,r.kt)("p",null,"The UUID of this volume is ",(0,r.kt)("inlineCode",{parentName:"p"},"05b1310b-35d0-497f-a150-3ca436b6a969")," and\nwill be used in the next section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," -- Recover volume backup"),(0,r.kt)("p",null,"Restore the volume backup into the new volume using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack volume\nbackup restore BACKUP_UUID VOLUME_UUID"),", replacing ",(0,r.kt)("strong",{parentName:"p"},"BACKUP","_","UUID")," and\n",(0,r.kt)("strong",{parentName:"p"},"VOLUME","_","UUID")," with the UUIDs of the backup and the new volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume backup restore wordpress-media-1-backup 05b1310b-35d0-497f-a150-3ca436b6a969\n+-------------+--------------------------------------+\n| Field       | Value                                |\n+-------------+--------------------------------------+\n| backup_id   | 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 |\n| volume_id   | 05b1310b-35d0-497f-a150-3ca436b6a969 |\n| volume_name | wordpress-media-1-backup-2           |\n+-------------+--------------------------------------+\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4")," -- Confirm backup recovery"),(0,r.kt)("p",null,"Finally, confirm the backup restored by listing volumes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ openstack volume list\n+--------------------------------------+----------------------------+-----------+------+------------------------------------------------------+\n| ID                                   | Name                       | Status    | Size | Attached to                                          |\n+--------------------------------------+----------------------------+-----------+------+------------------------------------------------------+\n| 05b1310b-35d0-497f-a150-3ca436b6a969 | wordpress-media-1-backup-2 | available |    5 |                                                      |\n| 1810a215-67e4-48b5-ba51-feef9d263660 | wordpress-1-backup-1       | available |   25 |                                                      |\n| 9887730c-e804-4353-af2d-a92b750ed6b5 |                            | in-use    |   17 | Attached to instance-2-volume on /dev/vda            |\n| 2a8eb736-9e7b-4ede-9a4e-9a50fc571da2 |                            | in-use    |   25 | Attached to wordpress-2-volume-restored on /dev/vda  |\n| 664e09b7-e1f9-46e1-9504-794ff75e7295 |                            | available |   25 |                                                      |\n| 0860845e-ba18-4f1f-84ed-22600ad7bbca | wordpress-media-1          | available |    5 |                                                      |\n+--------------------------------------+----------------------------+-----------+------+------------------------------------------------------+\n")),(0,r.kt)("p",null,"The first item in the above list is the restored backup,\n",(0,r.kt)("strong",{parentName:"p"},"wordpress-media-1-backup-2"),". Note the ",(0,r.kt)("strong",{parentName:"p"},"Status")," column reports\n",(0,r.kt)("inlineCode",{parentName:"p"},"available")," indicating the backup restoration succeeded."))}d.isMDXComponent=!0}}]);