var f=(t,c,n)=>new Promise((i,r)=>{var l=e=>{try{o(n.next(e))}catch(s){r(s)}},a=e=>{try{o(n.throw(e))}catch(s){r(s)}},o=e=>e.done?i(e.value):Promise.resolve(e.value).then(l,a);o((n=n.apply(t,c)).next())});import{B as h,u as b}from"./useTable.45773cb7.js";import{T as _}from"./useForm.2d1f5a6f.js";import{u as g}from"./index.8e5ef133.js";import{M as C,c as T,s as w}from"./MenuDrawer.44276be2.js";import{g as B,d as k}from"./ispeak.07629a95.js";import{_ as D,i as F}from"./index.ee9d11fe.js";import{B as S,a1 as m,D as y,F as E,w as u,a6 as p,ae as R}from"./vendor.bf608252.js";import"./index.0c88b115.js";import"./index.67db1b58.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.c8cb4db8.js";/* empty css               *//* empty css               *//* empty css               */import"./index.fda0e59c.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.39e7b94a.js";import"./download.04447e1f.js";/* empty css               */import"./index.cfd8b57c.js";const I=S({name:"FriendList",components:{BasicTable:h,MenuDrawer:C,TableAction:_},setup(){const[t]=g(),[c,{reload:n}]=b({title:"\u53CB\u94FE\u5217\u8868",api:B,columns:T,formConfig:{labelWidth:120,schemas:w},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),i=F();function r(){i("/ispeak/edit")}function l(e){i("/ispeak/edit/"+e._id)}function a(e){return f(this,null,function*(){yield k(e._id),o()})}function o(){n()}return{registerTable:c,handleCreate:r,handleEdit:l,handleDelete:a,handleSuccess:o,registerDrawer:t}}}),v=R(" \u65B0\u589Espeak ");function A(t,c,n,i,r,l){const a=m("a-button"),o=m("TableAction"),e=m("BasicTable"),s=m("MenuDrawer");return y(),E("div",null,[u(e,{onRegister:t.registerTable},{toolbar:p(()=>[u(a,{type:"primary",onClick:t.handleCreate},{default:p(()=>[v]),_:1},8,["onClick"])]),action:p(({record:d})=>[u(o,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(s,{onRegister:t.registerDrawer,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}var ae=D(I,[["render",A]]);export{ae as default};
