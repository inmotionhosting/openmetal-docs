"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[5572],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(y,i(i({ref:n},s),{},{components:t})):o.createElement(y,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8837:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={},c="How to Prepare and Use Ceph Ansible",p={unversionedId:"operators-manual/day-4/ceph-ansible/ceph-ansible",id:"operators-manual/day-4/ceph-ansible/ceph-ansible",title:"How to Prepare and Use Ceph Ansible",description:"Introduction",source:"@site/docs/operators-manual/day-4/ceph-ansible/ceph-ansible.md",sourceDirName:"operators-manual/day-4/ceph-ansible",slug:"/operators-manual/day-4/ceph-ansible/",permalink:"/openmetal-docs/docs/operators-manual/day-4/ceph-ansible/",editUrl:"https://github.com/inmotionhosting/openmetal-docs/blob/main/docs/operators-manual/day-4/ceph-ansible/ceph-ansible.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Launch an OpenStack Instance Automatically with HashiCorp Terraform",permalink:"/openmetal-docs/docs/operators-manual/day-4/automation/terraform"},next:{title:"How to Prepare and Use Kolla Ansible",permalink:"/openmetal-docs/docs/operators-manual/day-4/kolla-ansible/"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Before Proceeding",id:"before-proceeding",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[{value:"Root Access to OpenStack Control Plane",id:"root-access-to-openstack-control-plane",children:[],level:3}],level:2},{value:"Preparation",id:"preparation",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-prepare-and-use-ceph-ansible"},"How to Prepare and Use Ceph Ansible"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Should you want to reconfigure your Private Cloud's Ceph cluster, you\ncan do so using Ceph Ansible. In this guide, we explain how to prepare\nan environment from which Ceph Ansible can be used. Making specific\nconfiguration changes to your Ceph cluster is outside the scope of this\nguide."),(0,a.kt)("h2",{id:"before-proceeding"},"Before Proceeding"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WARNING","!")," -- Our current deployment system deploys a Private Cloud\nwith a known working state. Should you deviate from this state by\nadjusting your cloud's Ceph configuration you can no longer safely use\nthe functions in OpenMetal Central to add nodes to your cloud or add IP\nblocks. Should you use these functions, any custom configurations to\nCeph will be reverted. We are working on rolling out a new deployment\nsystem allowing custom cloud configurations. We can still add new nodes\nand IP blocks to your cloud but must do so manually. Please reach out to\nyour Account Manager should this apply to you."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"root-access-to-openstack-control-plane"},"Root Access to OpenStack Control Plane"),(0,a.kt)("p",null,"Root access to your cloud's control plane nodes is required."),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"To prepare Ceph Ansible:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker cp fm-deploy:/opt/ceph-ansible /opt/ceph-ansible\nchmod 700 /opt/ceph-ansible\ncd /opt/ceph-ansible\nvirtualenv .venv\nsource .venv/bin/activate\npip install -r requirements.txt\npip install six\n")),(0,a.kt)("p",null,"Deploy a Ceph Cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ansible-playbook \\\n    -i /etc/fm-deploy/ceph-inventory.yml \\\n    --private-key /root/.ssh/fm-deploy \\\n    /opt/ceph-ansible/site.yml\n")),(0,a.kt)("p",null,"Attempt to repair a broken Ceph cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ansible-playbook \\\n    -i /etc/fm-deploy/ceph-inventory.yml \\\n    --private-key /root/.ssh/fm-deploy \\\n    /opt/ceph-ansible/site.yml\n")))}d.isMDXComponent=!0}}]);