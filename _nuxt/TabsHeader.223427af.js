import{d as m,r as l,aa as b,b as a,c as s,F as v,Z as g,e as u,f as x,a5 as y,n as k,t as I,p as T,i as S,B as C,k as $}from"./entry.bffbf74c.js";const B=t=>(T("data-v-2c7ec3fd"),t=t(),S(),t),w={class:"tabs-header"},H=["onClick"],N=B(()=>u("span",{class:"tab"},null,-1)),U=[N],q=m({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,n=l(),r=l(),c=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,i)=>{_("update:activeTabIndex",i),C(()=>c(e.target))};return b(n,e=>{e&&setTimeout(()=>{c(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,i)=>(a(),s("div",w,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:k([t.activeTabIndex===o?"active":"not-active"]),onClick:h=>f(h,o)},I(d),11,H))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},U,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const L=$(q,[["__scopeId","data-v-2c7ec3fd"]]);export{L as default};
