import{B as l,a9 as m,bU as _,a as d,j as f,a1 as e,D as g,a2 as E,a6 as a,w as c}from"./vendor.bf608252.js";/* empty css                */import{_ as C,I as L,aI as h,b as B,P as I}from"./index.ee9d11fe.js";const T=l({name:"ErrorAction",components:{Icon:L,Tooltip:m,Badge:_},setup(){const{t:o}=B(),{push:n}=d(),t=h(),r=f(()=>t.getErrorLogListCount);function s(){n(I.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function b(o,n,t,r,s,k){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return g(),E(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var w=C(T,[["render",b]]);export{w as default};
