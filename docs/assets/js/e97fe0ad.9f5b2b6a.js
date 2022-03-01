"use strict";(self.webpackChunkthinkrchive_multiplatform=self.webpackChunkthinkrchive_multiplatform||[]).push([[602],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:4},l="Module Structure",d={unversionedId:"overview/folder-structure",id:"overview/folder-structure",title:"Module Structure",description:"This project has mutliple modules with their own functionality, features, dependencies and uses.",source:"@site/docs/overview/folder-structure.md",sourceDirName:"overview",slug:"/overview/folder-structure",permalink:"/Thinkrchive-Multiplatform/overview/folder-structure",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview/folder-structure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dependencies and Plugins",permalink:"/Thinkrchive-Multiplatform/overview/dependencies"},next:{title:"Extras",permalink:"/Thinkrchive-Multiplatform/overview/extras"}},c={},p=[{value:"Modules",id:"modules",level:2},{value:":androidApp",id:"androidapp",level:3},{value:":desktopApp",id:"desktopapp",level:3},{value:":buildSrc",id:"buildsrc",level:3},{value:":common",id:"common",level:3},{value:":common:model",id:"commonmodel",level:3},{value:":common:integration",id:"commonintegration",level:3},{value:":common:persistence",id:"commonpersistence",level:3},{value:":common:persistence:database",id:"commonpersistencedatabase",level:4},{value:":common:persistence:settings",id:"commonpersistencesettings",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"module-structure"},"Module Structure"),(0,i.kt)("p",null,"This project has mutliple modules with their own functionality, features, dependencies and uses."),(0,i.kt)("p",null,"Structuring your Mutliplatform project is necessary so that you can organized your code and reduce module dependency which may slow down your build time. It is also important to separate your target platform into their own modules for easy dependency managing."),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("h3",{id:"androidapp"},":androidApp"),(0,i.kt)("p",null,"This module contains all the Android App code that is not shared anywhere else. It is the root point of the Android app and contains all the Android UI for now. It does not carry any business logic other than Google Play Billing code that will soon be migrated to common code."),(0,i.kt)("h3",{id:"desktopapp"},":desktopApp"),(0,i.kt)("p",null,"This module contains all the desktop App code that is not shared anywhere else. It will be home for all Compose Desktop UI code. It will not carry any business logic as all of it will be shared across all platforms."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"UI not completed")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is currently no UI for the Desktop App as I am still migrating most of the business logic outside of the Android app."))),(0,i.kt)("h3",{id:"buildsrc"},":buildSrc"),(0,i.kt)("p",null,"This module is for dependency configuration so we have a centralized place to access all our dependency definitions and versions. This makes managing dependencies in multiple modules very easy. Updating dependecies also becomes a very easy task."),(0,i.kt)("h3",{id:"common"},":common"),(0,i.kt)("p",null,"The common module will house all the multiplaform modules that have shared code in them."),(0,i.kt)("h3",{id:"commonmodel"},":common:model"),(0,i.kt)("p",null,"This module contains all model classes used inside the app. It contains the data model for database & networking, domain models, states and their mappers. It is used in every module in this project."),(0,i.kt)("h3",{id:"commonintegration"},":common:integration"),(0,i.kt)("p",null,"This module contains all the shared code that will be integrated to platform. It combines shared code from all other common modules and produces ",(0,i.kt)("inlineCode",{parentName:"p"},"states")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"side-effects")," that will be consumed by the platforms. It is here to make sure that none of business logic from other modules like network, database and settings is directly shared to the platforms."),(0,i.kt)("p",null,"It is the home of our MVI integration and business logic. It receives intents from the outiside, processes them and returns the required ",(0,i.kt)("inlineCode",{parentName:"p"},"states")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"side-effects"),". It also consumes all the data provided by the other common modules into meaningful responses. Only the domain models get out of here."),(0,i.kt)("h3",{id:"commonpersistence"},":common:persistence"),(0,i.kt)("p",null,"This is the local persistence module that contains modules for database and settings. This is where local data storage happens"),(0,i.kt)("h4",{id:"commonpersistencedatabase"},":common:persistence:database"),(0,i.kt)("p",null,"This module contains all the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cashapp/sqldelight"},"SQLDelight")," code for SQLite databases on Android and Desktop-JVM. This is were all the SQL queries are written. It provides platfrom specific SQL drivers through dependency injection and all the data is then processed in the ",(0,i.kt)("inlineCode",{parentName:"p"},":common:integration")," module repository."),(0,i.kt)("h4",{id:"commonpersistencesettings"},":common:persistence:settings"),(0,i.kt)("p",null,"This module contains ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/russhwolf/multiplatform-settings"},"Multiplatform Settings")," code that gets and saves settings through it's repository. It is a multiplatform implementation that doesn't need any platform specific implementation unless you wan't the platform specific features like DataStore, Observable settings, Windows Registry, etc."))}m.isMDXComponent=!0}}]);