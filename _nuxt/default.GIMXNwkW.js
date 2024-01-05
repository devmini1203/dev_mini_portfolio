import{a4 as E,d as b,a5 as W,r as f,c as z,v as r,x as i,y as S,F as d,a6 as T,a7 as R,L as C,M as N,E as m,G as I,a8 as F,t as o,A as y,q as H,a9 as G,S as L,aa as j,B as J,ab as U,N as P,z as k,ac as K}from"./entry.DLr9_SS6.js";import{c as V,u as B,I as x}from"./el-popper.C0qYMoOp.js";import{_ as O}from"./_plugin-vue_export-helper.x3n3nnut.js";var A=V("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),Q=V("menu-2","IconMenu2",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l16 0",key:"svg-2"}]]),D=V("square-letter-v","IconSquareLetterV",[["path",{d:"M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M10 8l2 8l2 -8",key:"svg-1"}]]),X=V("square-rounded-arrow-up-filled","IconSquareRoundedArrowUpFilled",[["path",{d:"M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm-.148 5.011l.058 -.007l.09 -.004l.075 .003l.126 .017l.111 .03l.111 .044l.098 .052l.104 .074l.082 .073l4 4a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292v5.585a1 1 0 0 1 -1.993 .117l-.007 -.117v-5.585l-2.293 2.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l4 -4a.927 .927 0 0 1 .112 -.097l.11 -.071l.114 -.054l.105 -.035l.118 -.025z",fill:"currentColor","stroke-width":"0",key:"svg-0"}]]);const q=E("layout",{state:()=>({isNaviDrawer:!1})}),Y={class:"header-content"},Z={class:"my-name-box"},ee={class:"portfolio-menu-parent-box"},oe=["onClick"],te={class:"hamburger-menu-icon-box"},ae=b({__name:"Header",props:{appScrollHeight:{},appWidth:{}},setup(v){const a=v,u=q(),{isNaviDrawer:c}=W(u),g=f("Jong Min"),p=f([{menuName:"About me",id:1},{menuName:"Skills",id:2},{menuName:"Projects",id:3},{menuName:"Career",id:4},{menuName:"Etc",id:5}]),l=B(),w=e=>{var n,s,t,h,_;e===1&&((n=l.aboutMeRef)==null||n.scrollIntoView({behavior:"smooth"})),e===2&&((s=l.skillsRef)==null||s.scrollIntoView({behavior:"smooth"})),e===3&&((t=l.projectsRef)==null||t.scrollIntoView({behavior:"smooth"})),e===4&&((h=l.carerrRef)==null||h.scrollIntoView({behavior:"smooth"})),e===5&&((_=l.etcRef)==null||_.scrollIntoView({behavior:"smooth"}))},M=z(()=>{const e=l.aboutMeRef,n=Number(e==null?void 0:e.offsetTop);return a.appScrollHeight>=n-100&&a.appWidth>=730?"default-header-scroll":"default-header"});return(e,n)=>(o(),r("div",{class:F([d(M)])},[i("div",Y,[i("div",Z,S(d(g)),1),T(i("div",ee,[(o(!0),r(C,null,N(d(p),s=>(o(),r("div",{key:s.menuName,class:"child-box",onClick:t=>w(s.id)},S(s.menuName),9,oe))),128))],512),[[R,e.appWidth>=730]]),T(i("div",te,[(o(),m(I(d(Q)),{class:"icon",onClick:n[0]||(n[0]=()=>c.value=!0)}))],512),[[R,e.appWidth<=730]])])],2))}}),le={class:"default-footer common-gradient-background"},ne={class:"footer-icon-box"},se={class:"footer-icon-wrapper"},re=i("div",{class:"footer-copyright-box"},"© 2023. Baek Jong Min. All rights reserved.",-1),ie=b({__name:"Footer",setup(v){const a=f([{icon:A,tooltipContent:"Github",path:"https://github.com/devmini1203"},{icon:x,tooltipContent:"Mail",path:"mailto:devmini1203@gmail.com"},{icon:D,tooltipContent:"Velog",path:"https://velog.io/@devmini1203"}]),u=c=>{H(c,{open:{target:"_blank"}})};return(c,g)=>{const p=G;return o(),r("div",le,[i("div",ne,[(o(!0),r(C,null,N(d(a),l=>(o(),m(p,{effect:"light",content:l.tooltipContent,placement:"top",key:l.path},{default:y(()=>[i("div",se,[(o(),m(I(l.icon),{class:"footer-icon",onClick:w=>u(l.path)},null,8,["onClick"]))])]),_:2},1032,["content"]))),128))]),re])}}}),ce=i("div",{class:"title"},"Jong Min",-1),pe=["onClick"],de={class:"navigation-drawer-bottom-content-wrapper"},ue=["onClick"],he={class:"icon-wrapper"},me=b({__name:"NavigationDrawer",props:{appWidth:{}},setup(v){const a=v,u=q(),{isNaviDrawer:c}=W(u),g=f([{menuName:"Banner 🖼️",id:0},{menuName:"About me 📣",id:1},{menuName:"Skills 🛠️",id:2},{menuName:"Projects 🧑‍💻",id:3},{menuName:"Career 💼",id:4},{menuName:"Etc ➕",id:5}]),p=B(),l=e=>{var n,s,t,h,_,$;e===0&&((n=p.bannerRef)==null||n.scrollIntoView({behavior:"smooth"})),e===1&&((s=p.aboutMeRef)==null||s.scrollIntoView({behavior:"smooth"})),e===2&&((t=p.skillsRef)==null||t.scrollIntoView({behavior:"smooth"})),e===3&&((h=p.projectsRef)==null||h.scrollIntoView({behavior:"smooth"})),e===4&&((_=p.carerrRef)==null||_.scrollIntoView({behavior:"smooth"})),e===5&&(($=p.etcRef)==null||$.scrollIntoView({behavior:"smooth"})),c.value=!1};L(()=>a.appWidth,()=>{a.appWidth>=730&&(c.value=!1)});const w=f([{icon:A,label:"Github",path:"https://github.com/devmini1203"},{icon:x,label:"Mail",path:"mailto:devmini1203@gmail.com"},{icon:D,label:"Velog",path:"https://velog.io/@devmini1203"}]),M=e=>{H(e,{open:{target:"_blank"}})};return(e,n)=>{const s=j;return o(),m(s,{class:"default-navigation-drawer","model-value":d(c),"onUpdate:modelValue":n[0]||(n[0]=t=>c.value=t),"with-header":!0,direction:"rtl",modal:!0,size:"250"},{header:y(()=>[ce]),default:y(()=>[(o(!0),r(C,null,N(d(g),t=>(o(),r("div",{class:"navigation-drawer-menu-wrapper",key:t.id},[i("div",{class:"menu-box",onClick:h=>l(t.id)},S(t.menuName),9,pe)]))),128)),i("div",de,[(o(!0),r(C,null,N(d(w),t=>(o(),r("div",{class:"content",key:t.label,onClick:h=>M(t.path)},[i("div",he,[(o(),m(I(t.icon),{class:"icon"}))]),J(" "+S(t.label),1)],8,ue))),128))])]),_:1},8,["model-value"])}}}),ve={key:0,class:"move-to-top-button-wrapper"},_e=b({__name:"MoveToTopButton",props:{appScrollHeight:{}},setup(v){const a=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return(u,c)=>(o(),m(U,{name:"fade-in-out-move-to-top-button"},{default:y(()=>[u.appScrollHeight>=80?(o(),r("div",ve,[(o(),m(I(d(X)),{class:"icon",onClick:a}))])):P("",!0)]),_:1}))}}),fe={class:"default-layout"},be=b({__name:"default",props:{appScrollHeight:{},appWidth:{}},setup(v){return(a,u)=>(o(),r("div",fe,[k(ae,{appScrollHeight:a.appScrollHeight,appWidth:a.appWidth},null,8,["appScrollHeight","appWidth"]),K(a.$slots,"default",{},void 0,!0),k(ie),k(me,{appWidth:a.appWidth},null,8,["appWidth"]),k(_e,{appScrollHeight:a.appScrollHeight},null,8,["appScrollHeight"])]))}}),Se=O(be,[["__scopeId","data-v-c9880b42"]]);export{Se as default};
