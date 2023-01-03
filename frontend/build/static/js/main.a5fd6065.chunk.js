(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{238:function(e,t,n){},244:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},547:function(e,t,n){},549:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){},552:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),i=n.n(c),o=(n(238),n(102)),s=n(187),l=n(188),u="USER_LOGIN_REQUEST",d="USER_LOGIN_SUCCESS",j="USER_LOGIN_FAIL",p="USER_LOGOUT",b="USER_REGISTER_REQUEST",h="USER_REGISTER_SUCCESS",m="USER_REGISTER_FAIL",O="USER_UPDATE_REQUEST",g="USER_UPDATE_SUCCESS",x="USER_UPDATE_FAIL",f="NOTES_LIST_REQUEST",y="NOTES_LIST_SUCCESS",v="NOTES_LIST_FAIL",S="NOTES_CREATE_REQUEST",w="NOTES_CREATE_SUCCESS",N="NOTES_CREATE_FAIL",E="NOTES_UPDATE_REQUEST",C="NOTES_UPDATE_SUCCESS",k="NOTES_UPDATE_FAIL",T="NOTES_DELETE_REQUEST",I="NOTES_DELETE_SUCCESS",_="NOTES_DELETE_FAIL",L=Object(o.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0};case d:return{loading:!1,userInfo:t.payload};case j:return{loading:!1,error:t.payload};case p:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{loading:!0};case h:return{loading:!1,userInfo:t.payload};case m:return{loading:!1,error:t.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0};case g:return{loading:!1,userInfo:t.payload,success:!0};case x:return{loading:!1,error:t.payload,success:!1};default:return e}},noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{note:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case y:return{loading:!1,notes:t.payload};case v:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case w:return{loading:!1,success:!0};case N:return{loading:!1,error:t.payload};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{loading:!0};case C:return{loading:!1,success:!0};case k:return{loading:!1,error:t.payload,success:!1};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case I:return{loading:!1,success:!0};case _:return{loading:!1,error:t.payload,success:!1};default:return e}}}),R={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},U=[s.a],D=Object(o.createStore)(L,R,Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,U))),P=n(22),W=n(12),A=(n(244),n(5)),F=n(24),H=n(32),z=n(621),q=n(30),B=n(625),G=n(627),M=n(554),Q=n(555),J=n(654),V=n(624),$=n(653),Y=n(202),K=n(192),X=n.n(K),Z=n(127),ee=n.n(Z),te=n(154),ne=n.n(te),ae=n(193),re=n.n(ae),ce=n(626),ie=n(23),oe=n.n(ie),se=n(29),le=n(40),ue=n.n(le),de=function(e,t){return function(){var n=Object(se.a)(oe.a.mark((function n(a){var r,c,i;return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:u}),r={headers:{"Content-type":"application/json"}},n.next=5,ue.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,i=c.data,console.log(i),a({type:d,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:j,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},je=function(e,t,n,a){return function(){var r=Object(se.a)(oe.a.mark((function r(c){var i,o,s;return oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:b}),i={headers:{"Content-type":"application/json"}},r.next=5,ue.a.post("/api/users",{name:e,pic:a,email:t,password:n},i);case 5:o=r.sent,s=o.data,c({type:h,payload:s}),c({type:d,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:m,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},pe=n(1),be=Object(z.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(A.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(A.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(A.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"60ch"}),sectionDesktop:Object(A.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(A.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),he=function(e){var t=e.setSearch,n=Object(F.f)(),c=be(),i=r.a.useState(null),o=Object(W.a)(i,2),s=o[0],l=o[1],u=r.a.useState(null),d=Object(W.a)(u,2),j=d[0],b=d[1],h=Boolean(s),m=Boolean(j),O=Object(P.b)(),g=Object(P.c)((function(e){return e.userLogin})).userInfo;Object(a.useEffect)((function(){}),[g]);var x=function(e){l(e.currentTarget)},f=function(){b(null)},y=function(){l(null),f()},v="primary-search-account-menu",S=Object(pe.jsxs)(Y.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:v,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:y,children:[Object(pe.jsx)(H.b,{to:"/profile",style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsx)($.a,{onClick:y,children:"Profile"})}),Object(pe.jsx)($.a,{onClick:function(){l(null),f(),O(function(){var e=Object(se.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:p});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.push("/"),window.location.reload()},children:"Log Out"})]}),w="primary-search-account-menu-mobile",N=Object(pe.jsxs)(Y.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:w,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:f,children:[Object(pe.jsx)($.a,{children:Object(pe.jsxs)(H.b,{to:"/mynotes",style:{textDecoration:"none",color:"inherit"},children:[Object(pe.jsx)(M.a,{children:Object(pe.jsx)(V.a,{color:"secondary",children:Object(pe.jsx)(ne.a,{})})}),"My Notes"]})}),Object(pe.jsxs)($.a,{onClick:x,children:[Object(pe.jsx)(M.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(pe.jsx)(ee.a,{})}),"My Account"]})]});return Object(pe.jsxs)("div",{className:c.grow,children:[Object(pe.jsx)(B.a,{position:"static",style:{background:"#114b7a"},color:"secondary",children:Object(pe.jsx)(ce.a,{children:Object(pe.jsxs)(G.a,{children:[Object(pe.jsx)(H.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsx)(Q.a,{className:c.title,variant:"h6",noWrap:!0,children:"SkyNotes"})}),Object(pe.jsxs)("div",{className:c.search,children:[Object(pe.jsx)("div",{className:c.searchIcon,children:Object(pe.jsx)(X.a,{})}),Object(pe.jsx)(J.a,{placeholder:"Search\u2026",classes:{root:c.inputRoot,input:c.inputInput},inputProps:{"aria-label":"search"},style:{margin:"m-auto"},onChange:function(e){return t(e.target.value)}})]}),Object(pe.jsx)("div",{className:c.grow}),g?Object(pe.jsxs)("div",{children:[Object(pe.jsxs)("div",{className:c.sectionDesktop,children:[Object(pe.jsx)(M.a,{color:"inherit",children:Object(pe.jsx)(H.b,{to:"/mynotes",style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsxs)(V.a,{color:"secondary",children:[Object(pe.jsx)(ne.a,{}),Object(pe.jsx)(Q.a,{children:"My Notes"})]})})}),Object(pe.jsxs)(M.a,{edge:"end","aria-label":"account of current user","aria-controls":v,"aria-haspopup":"true",onClick:x,color:"inherit",children:[Object(pe.jsx)(ee.a,{}),Object(pe.jsx)(Q.a,{children:null===g||void 0===g?void 0:g.name})]})]}),Object(pe.jsx)("div",{className:c.sectionMobile,children:Object(pe.jsx)(M.a,{"aria-label":"show more","aria-controls":w,"aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",children:Object(pe.jsx)(re.a,{})})})]}):Object(pe.jsx)(M.a,{color:"inherit",children:Object(pe.jsx)(H.b,{to:"/login",style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsxs)(M.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:[Object(pe.jsx)(ee.a,{}),Object(pe.jsx)(Q.a,{children:"Login"})]})})})]})})}),N,S]})},me=function(){return Object(pe.jsx)(pe.Fragment,{children:Object(pe.jsx)(B.a,{position:"static",style:{background:"#114b7a"},children:Object(pe.jsx)(ce.a,{maxWidth:"md",children:Object(pe.jsx)(G.a,{children:Object(pe.jsx)(Q.a,{variant:"body1",color:"inherit",children:"\xa9 2021 SkyNotes"})})})})})},Oe=n(628),ge=(n(275),function(){var e=Object(F.f)(),t=Object(P.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){t&&e.push("/mynotes")}),[e,t]),Object(pe.jsx)("div",{className:"main",children:Object(pe.jsx)(ce.a,{children:Object(pe.jsxs)("div",{className:"intro-text",children:[Object(pe.jsxs)("div",{children:[Object(pe.jsx)("h1",{className:"title",children:"Welcome to Sky Notes"}),Object(pe.jsx)("p",{className:"subtitle",children:"One Safe place for all your notes."})]}),Object(pe.jsxs)("div",{className:"buttonContainer",children:[Object(pe.jsx)(H.b,{to:"/login",style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsx)(Oe.a,{variant:"contained",disableElevation:!0,className:"landingbutton",color:"default",children:"Login"})}),Object(pe.jsx)(H.b,{to:"/register",style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsx)(Oe.a,{variant:"contained",disableElevation:!0,className:"landingbutton",color:"primary",children:"Signup"})})]})]})})})}),xe=n(655),fe=n(632),ye=n(646),ve=n(630),Se=n(205),we=n(647),Ne=n(631),Ee=n(118),Ce=n.n(Ee),ke=n(629),Te=Object(z.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Ie=function(){var e=Te();return Object(pe.jsx)("div",{className:e.root,children:Object(pe.jsx)(ke.a,{color:"primary"})})},_e=n(648),Le=Object(z.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Re=function(e){var t=e.data,n=Le();return Object(pe.jsx)("div",{className:n.root,children:Object(pe.jsx)(_e.a,{variant:"filled",severity:"error",children:t})})};function Ue(){return Object(pe.jsxs)(Q.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(pe.jsx)(ve.a,{color:"inherit",href:"/",children:"Sky Notes"})," ",(new Date).getFullYear(),"."]})}var De=Object(z.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:'url("https://source.unsplash.com/daily?{notebook},{pen}")',backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Pe=function(){var e=De(),t=Object(a.useState)(""),n=Object(W.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(W.a)(i,2),s=o[0],l=o[1],u=Object(P.b)(),d=Object(P.c)((function(e){return e.userLogin})),j=d.loading,p=d.error,b=d.userInfo,h=Object(F.f)();Object(a.useEffect)((function(){b&&h.push("/mynotes")}),[h,b]);var m=function(){var e=Object(se.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(de(r,s));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(pe.jsxs)(Ne.a,{container:!0,component:"main",className:e.root,children:[Object(pe.jsx)(fe.a,{}),Object(pe.jsx)(Ne.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(pe.jsx)(Ne.a,{item:!0,xs:12,sm:8,md:5,component:Se.a,elevation:6,square:!0,children:Object(pe.jsxs)("div",{className:e.paper,children:[Object(pe.jsx)(xe.a,{className:e.avatar,children:Object(pe.jsx)(Ce.a,{})}),Object(pe.jsx)(Q.a,{component:"h1",variant:"h5",children:"Login In"}),p&&Object(pe.jsx)(Re,{data:p}),j&&Object(pe.jsx)(Ie,{}),Object(pe.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:m,children:[Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0,value:r,onChange:function(e){return c(e.target.value)}}),Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:s,onChange:function(e){return l(e.target.value)}}),Object(pe.jsx)(Oe.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,type:"submit",disabled:!r.length||!s.length,children:"Login In"}),Object(pe.jsx)(Ne.a,{container:!0,children:Object(pe.jsx)(Ne.a,{item:!0,children:Object(pe.jsx)(ve.a,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})}),Object(pe.jsx)(we.a,{mt:5,children:Object(pe.jsx)(Ue,{})})]})]})})]})};function We(){return Object(pe.jsxs)(Q.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(pe.jsx)(ve.a,{color:"inherit",href:"/",children:"Sky Notes"})," ",(new Date).getFullYear(),"."]})}var Ae=Object(z.a)((function(e){return{root:{height:"115vh"},image:{backgroundImage:'url("https://source.unsplash.com/daily?sky")',backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Fe=function(){var e=Ae(),t=Object(a.useState)(""),n=Object(W.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(W.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),d=Object(W.a)(u,2),j=d[0],p=d[1],b=Object(a.useState)(""),h=Object(W.a)(b,2),m=h[0],O=h[1],g=Object(a.useState)(""),x=Object(W.a)(g,2),f=x[0],y=x[1],v=Object(a.useState)(null),S=Object(W.a)(v,2),w=S[0],N=S[1],E=Object(a.useState)(null),C=Object(W.a)(E,2),k=C[0],T=C[1],I=Object(P.b)(),_=Object(P.c)((function(e){return e.userRegister})),L=_.loading,R=_.error,U=_.userInfo,D=Object(F.f)();Object(a.useEffect)((function(){U&&D.push("/")}),[D,U]);var A=function(){var e=Object(se.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),m!==f?N("Password is not matching!"):I(je(r,s,m,j));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(pe.jsxs)(Ne.a,{container:!0,component:"main",className:e.root,children:[Object(pe.jsx)(fe.a,{}),Object(pe.jsx)(Ne.a,{item:!0,xs:12,sm:8,md:5,component:Se.a,elevation:6,square:!0,children:Object(pe.jsxs)("div",{className:e.paper,children:[Object(pe.jsx)(xe.a,{className:e.avatar,children:Object(pe.jsx)(Ce.a,{})}),Object(pe.jsx)(Q.a,{component:"h1",variant:"h5",children:"Sign Up"}),R&&Object(pe.jsx)(Re,{data:R}),w&&Object(pe.jsx)(Re,{data:w}),L&&Object(pe.jsx)(Ie,{}),Object(pe.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:A,children:[Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"User Name",name:"name",autoFocus:!0,value:r,onChange:function(e){return c(e.target.value)}}),Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0,value:s,onChange:function(e){return l(e.target.value)}}),Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"password",label:"Password",name:"Password",type:"password",autoFocus:!0,value:m,onChange:function(e){return O(e.target.value)}}),Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"confirmPassword",label:"Confirm Password",name:"Confirm Password",type:"password",autoFocus:!0,value:f,onChange:function(e){return y(e.target.value)}}),k&&Object(pe.jsx)(Re,{data:k}),Object(pe.jsx)("input",{accept:"image/*",className:e.input,style:{display:"none"},id:"raised-button-file",multiple:!0,type:"file",onChange:function(e){return function(e){if(T(null),!e)return T("Please Select an Image");if(T(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return T("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","skynotes"),t.append("cloud_name","sky004"),fetch("https://api.cloudinary.com/v1_1/sky004/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){console.log(e),p(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])}}),Object(pe.jsx)("label",{htmlFor:"raised-button-file",children:Object(pe.jsx)(Oe.a,{variant:"contained",component:"span",className:e.button,children:"Upload Profile Pic"})}),Object(pe.jsx)(Oe.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,type:"submit",disabled:0===(s.length&&r.length&&m.length&&f.length),children:"Sign Up"}),Object(pe.jsx)(Ne.a,{container:!0,children:Object(pe.jsx)(Ne.a,{item:!0,children:Object(pe.jsx)(ve.a,{href:"/login",variant:"body2",children:"Had an account? Login In"})})}),Object(pe.jsx)(we.a,{mt:5,children:Object(pe.jsx)(We,{})})]})]})}),Object(pe.jsx)(Ne.a,{item:!0,xs:!1,sm:4,md:7,className:e.image})]})},He=(n(276),function(e){var t=e.title,n=e.children;return Object(pe.jsx)("div",{className:"mainback",children:Object(pe.jsx)(ce.a,{children:Object(pe.jsxs)("div",{className:"page",children:[t&&Object(pe.jsxs)(pe.Fragment,{children:[Object(pe.jsx)("h1",{className:"heading",children:t}),Object(pe.jsx)("hr",{})]}),n]})})})}),ze=n(26),qe=n(66),Be=n(651),Ge=n(634),Me=n(633),Qe=n(194),Je=n.n(Qe),Ve=n(635),$e=n(636),Ye=(n(277),n(65)),Ke=n(649),Xe=function(e){return function(){var t=Object(se.a)(oe.a.mark((function t(n,a){var r,c,i,o,s,l;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:T}),r=a(),c=r.userLogin.userInfo,i={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,ue.a.delete("/api/notes/".concat(e),i);case 6:o=t.sent,s=o.data,n({type:I,payload:s}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:_,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},Ze=["node","inline","className","children"],et=Object(z.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},catergory:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})),tt=function(e){var t,n=e.data,a=n._id,c=n.title,i=n.content,o=n.category,s="".concat(n.createdAt).substring(0,10),l=et(),u=Object(P.b)(),d=r.a.useState(!1),j=Object(W.a)(d,2),p=j[0],b=j[1];return Object(pe.jsxs)(Ne.a,{container:!0,spacing:!0,style:{marginTop:16},children:[Object(pe.jsx)(Ne.a,{item:!0,md:9,xs:12,sm:7,children:Object(pe.jsxs)(Be.a,{expanded:p===a,onChange:(t=a,function(e,n){b(!!n&&t)}),children:[Object(pe.jsxs)(Me.a,{expandIcon:Object(pe.jsx)(Je.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",style:{textAlign:"center"},children:[Object(pe.jsx)(Q.a,{className:l.heading,children:c}),Object(pe.jsx)(Q.a,{className:l.secondaryHeading,children:s}),Object(pe.jsx)(Q.a,{className:l.heading,children:o})]}),Object(pe.jsx)(Ge.a,{children:Object(pe.jsx)(Ve.a,{style:{overflow:"auto",maxHeight:900,width:900},children:Object(pe.jsx)($e.a,{children:Object(pe.jsx)(Ye.a,{children:i,components:{code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,r=Object(qe.a)(e,Ze),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(pe.jsx)(Ke.a,Object(ze.a)({children:String(a).replace(/\n$/,""),language:c[1],PreTag:"div"},r)):Object(pe.jsx)("code",Object(ze.a)(Object(ze.a)({className:n},r),{},{children:a}))}}})})})})]})}),Object(pe.jsxs)(Ne.a,{item:!0,md:3,xs:12,sm:5,children:[Object(pe.jsx)(H.b,{to:"/note/".concat(a),style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsx)(Oe.a,{variant:"contained",color:"default",style:{marginLeft:"6px",marginRight:"6px"},children:"Edit"})}),Object(pe.jsx)(Oe.a,{variant:"contained",color:"primary",onClick:function(){return function(e){window.confirm("Are you Sure?")&&u(Xe(e))}(a)},children:"Delete"}),Object(pe.jsx)(H.b,{to:"/singleNote/".concat(a),style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsx)(Oe.a,{variant:"contained",color:"default",style:{marginLeft:"6px",marginRight:"6px"},children:"NewTab"})})]})]})},nt=function(e){var t=e.search,n=Object(F.f)(),r=Object(P.b)(),c=Object(P.c)((function(e){return e.noteList})),i=c.loading,o=c.error,s=c.notes,l=Object(P.c)((function(e){return e.userLogin})).userInfo,u=Object(P.c)((function(e){return e.noteDelete})).success,d=Object(P.c)((function(e){return e.noteUpdate})).success,j=Object(P.c)((function(e){return e.noteCreate})).success;return Object(a.useEffect)((function(){r(function(){var e=Object(se.a)(oe.a.mark((function e(t,n){var a,r,c,i,o,s;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:f}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,ue.a.get("/api/notes",c);case 6:i=e.sent,o=i.data,t({type:y,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),s=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:v,payload:s});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),l||n.push("/")}),[r,n,l,u,d,j]),Object(pe.jsxs)(He,{title:"Hi ".concat(l&&l.name,"! ,You are welcomed "),children:[Object(pe.jsx)("div",{children:Object(pe.jsx)(H.b,{to:"createnote",style:{textDecoration:"none",color:"inherit"},children:Object(pe.jsx)(Oe.a,{variant:"contained",children:"Create New Note"})})}),o&&Object(pe.jsx)(Re,{data:o}),i&&Object(pe.jsx)(Ie,{}),Object(pe.jsx)("div",{children:s&&s.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).reverse().map((function(e){return Object(pe.jsx)(tt,{data:e},e._id)}))})]})},at=n(656),rt=n(645),ct=n(643),it=n(657),ot=(n(547),["node","inline","className","children"]),st=function(){var e=Object(F.f)(),t=Object(P.b)(),n=Object(a.useState)(""),r=Object(W.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),s=Object(W.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)(""),j=Object(W.a)(d,2),p=j[0],b=j[1],h=Object(P.c)((function(e){return e.noteCreate})),m=h.loading,O=h.error,g=function(){i(""),u(""),b("")};return Object(a.useEffect)((function(){}),[]),Object(pe.jsx)(ce.a,{style:{marginTop:16,minHeight:99},children:Object(pe.jsxs)("form",{noValidate:!0,onSubmit:function(n){n.preventDefault(),t(function(e,t,n){return function(){var a=Object(se.a)(oe.a.mark((function a(r,c){var i,o,s,l,u,d;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:S}),i=c(),o=i.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,ue.a.post("api/notes/create",{title:e,content:t,category:n},s);case 6:l=a.sent,u=l.data,r({type:w,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),d=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:N,payload:d});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(c,p,l)),g(),e.push("/mynotes")},children:[O&&Object(pe.jsx)(Re,{data:O}),m&&Object(pe.jsx)(Ie,{}),Object(pe.jsxs)("div",{className:"createNote",children:[Object(pe.jsx)(Ne.a,{container:!0,spacing:!0,style:{marginTop:36},children:Object(pe.jsxs)(Ne.a,{item:!0,md:12,xs:12,sm:12,style:{marginLeft:16},children:[Object(pe.jsx)(at.a,{sx:{width:1100,maxWidth:"100%"},children:Object(pe.jsx)(rt.a,{required:!0,fullWidth:!0,label:"Title",id:"fullWidth",value:c,onChange:function(e){return i(e.target.value)}})}),Object(pe.jsx)(at.a,{sx:{width:1100,maxWidth:"100%"},style:{marginTop:"20px"},children:Object(pe.jsx)(rt.a,{required:!0,fullWidth:!0,label:"category",id:"fullWidth",value:l,onChange:function(e){return u(e.target.value)}})})]})}),Object(pe.jsxs)(Ne.a,{container:!0,spacing:!0,style:{marginTop:18},children:[Object(pe.jsx)(Ne.a,{item:!0,md:6,xs:12,sm:12,children:Object(pe.jsx)(Ve.a,{sx:{minHeight:700},style:{maxHeight:650,overflow:"auto"},children:Object(pe.jsx)(it.a,{children:Object(pe.jsx)(ct.a,{"aria-label":"empty textarea",placeholder:"Enter the content",minRows:40,maxRows:40,style:{width:550,maxWidth:560,minWidth:550,maxHeight:600,minHeight:600},value:p,onChange:function(e){return b(e.target.value)}})})})}),Object(pe.jsx)(Ne.a,{item:!0,md:6,xs:12,sm:12,children:Object(pe.jsx)(Ve.a,{sx:{minHeight:700},style:{minHeight:650,maxHeight:650,overflow:"auto"},children:Object(pe.jsxs)(it.a,{children:[Object(pe.jsx)(Q.a,{sx:{fontSize:14},color:"text.secondary",children:"Preview of Content"}),Object(pe.jsx)(Ye.a,{children:p,components:{code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,r=Object(qe.a)(e,ot),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(pe.jsx)(Ke.a,Object(ze.a)({children:String(a).replace(/\n$/,""),language:c[1],PreTag:"div"},r)):Object(pe.jsx)("code",Object(ze.a)(Object(ze.a)({className:n},r),{},{children:a}))}}})]})})})]}),Object(pe.jsxs)("div",{children:[Object(pe.jsx)(Oe.a,{type:"submit",style:{margin:10},color:"primary",variant:"contained",disabled:!(c.length&&l.length&&p.length),children:"Submit to create new"}),Object(pe.jsx)(Oe.a,{style:{margin:10},color:"default",variant:"contained",onClick:g,children:"Reset"}),m&&Object(pe.jsx)(Ie,{}),Object(pe.jsxs)(Q.a,{variant:"subtitle",align:"center",paragraph:!0,children:["Creating on - ",(new Date).toLocaleDateString()," "]})]})]})]})})},lt=["node","inline","className","children"],ut=function(e){var t=e.match,n=e.history,r=Object(a.useState)(""),c=Object(W.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)(""),l=Object(W.a)(s,2),u=l[0],d=l[1],j=Object(a.useState)(""),p=Object(W.a)(j,2),b=p[0],h=p[1],m=Object(a.useState)(""),O=Object(W.a)(m,2),g=O[0],x=O[1],f=Object(P.b)(),y=Object(P.c)((function(e){return e.noteUpdate})),v=y.loading,S=y.error,w=Object(P.c)((function(e){return e.noteDelete})),N=w.loading,T=w.error,I=function(){var e=Object(se.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(Xe(t)),n.push("/mynotes");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){(function(){var e=Object(se.a)(oe.a.mark((function e(){var n,a;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,console.log(t.params.id),o(a.title),d(a.category),h("".concat(a.updatedAt).substring(0,10)),x(a.content);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,b]);var _=function(){o(""),d(""),x("")};return Object(pe.jsx)(ce.a,{style:{marginTop:16,minHeight:99},children:Object(pe.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),f(function(e,t,n,a){return function(){var r=Object(se.a)(oe.a.mark((function r(c,i){var o,s,l,u,d,j;return oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:E}),o=i(),s=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.token)}},r.next=6,ue.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,d=u.data,c({type:C,payload:d}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),j=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:k,payload:j});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,i,g,u)),i&&g&&u&&(_(),n.push("/mynotes"))},children:[N&&Object(pe.jsx)(Ie,{}),S&&Object(pe.jsx)(Re,{data:S}),T&&Object(pe.jsx)(Re,{data:T}),Object(pe.jsxs)("div",{className:"createNote",children:[Object(pe.jsx)(Ne.a,{container:!0,spacing:!0,style:{marginTop:36},children:Object(pe.jsxs)(Ne.a,{item:!0,md:12,xs:12,sm:12,style:{marginLeft:16},children:[Object(pe.jsx)(at.a,{sx:{width:1100,maxWidth:"100%"},children:Object(pe.jsx)(rt.a,{required:!0,fullWidth:!0,label:"Title",id:"fullWidth",value:i,onChange:function(e){return o(e.target.value)}})}),Object(pe.jsx)(at.a,{sx:{width:1100,maxWidth:"100%"},style:{marginTop:"20px"},children:Object(pe.jsx)(rt.a,{required:!0,fullWidth:!0,label:"category",id:"fullWidth",value:u,onChange:function(e){return d(e.target.value)}})})]})}),Object(pe.jsxs)(Ne.a,{container:!0,spacing:!0,style:{marginTop:18},children:[Object(pe.jsx)(Ne.a,{item:!0,md:6,xs:12,sm:12,children:Object(pe.jsx)(Ve.a,{sx:{minHeight:700},style:{maxHeight:650,overflow:"auto"},children:Object(pe.jsx)(it.a,{children:Object(pe.jsx)(ct.a,{"aria-label":"empty textarea",placeholder:"Enter the content",minRows:40,maxRows:40,style:{width:550,maxWidth:560,minWidth:550,maxHeight:600,minHeight:600},value:g,onChange:function(e){return x(e.target.value)}})})})}),Object(pe.jsx)(Ne.a,{item:!0,md:6,xs:12,sm:12,children:Object(pe.jsx)(Ve.a,{sx:{minHeight:700},style:{minHeight:650,maxHeight:650,overflow:"auto"},children:Object(pe.jsxs)(it.a,{children:[Object(pe.jsx)(Q.a,{sx:{fontSize:14},color:"text.secondary",children:"Preview of Content"}),Object(pe.jsx)(Ye.a,{children:g,components:{code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,r=Object(qe.a)(e,lt),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(pe.jsx)(Ke.a,Object(ze.a)({children:String(a).replace(/\n$/,""),language:c[1],PreTag:"div"},r)):Object(pe.jsx)("code",Object(ze.a)(Object(ze.a)({className:n},r),{},{children:a}))}}})]})})})]}),v&&Object(pe.jsx)(Ie,{}),Object(pe.jsxs)("div",{children:[Object(pe.jsx)(Oe.a,{type:"submit",style:{margin:10},color:"primary",variant:"contained",disabled:!i.length||!u.length,children:"Update Note"}),Object(pe.jsx)(Oe.a,{style:{margin:10},color:"primary",variant:"contained",onClick:function(){return I(t.params.id)},children:"Delete Note"}),Object(pe.jsx)(Oe.a,{style:{margin:10},color:"default",variant:"contained",onClick:_,children:"Reset"}),Object(pe.jsxs)(Q.a,{variant:"subtitle",align:"center",paragraph:!0,children:["Updated on :",b]})]})]})]})})},dt=n(652),jt=(n(549),Object(z.a)((function(e){return{root:{height:"115vh"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))),pt=function(e){e.location;var t=e.history,n=jt(),r=Object(a.useState)(""),c=Object(W.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)(""),l=Object(W.a)(s,2),u=l[0],j=l[1],p=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),b=Object(W.a)(p,2),h=b[0],m=b[1],f=Object(a.useState)(""),y=Object(W.a)(f,2),v=y[0],S=y[1],w=Object(a.useState)(""),N=Object(W.a)(w,2),E=N[0],C=N[1],k=Object(a.useState)(null),T=Object(W.a)(k,2),I=T[0],_=T[1],L=Object(P.b)(),R=Object(P.c)((function(e){return e.userLogin})).userInfo,U=Object(P.c)((function(e){return e.userUpdate})),D=U.loading,A=U.error;Object(a.useEffect)((function(){R?(o(R.name),j(R.email),m(R.pic)):t.push("/")}),[t,R]);return Object(pe.jsx)("div",{children:Object(pe.jsx)(He,{title:"Want to Edit Profile ?",children:Object(pe.jsx)("form",{onSubmit:function(e){var n;e.preventDefault(),L((n={name:i,email:u,password:v,pic:h},function(){var e=Object(se.a)(oe.a.mark((function e(t,a){var r,c,i,o,s;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:O}),r=a(),c=r.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,ue.a.post("/api/users/profile",n,i);case 6:o=e.sent,s=o.data,t({type:g,payload:s}),t({type:d,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t({type:x,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}())),t.push("/")},children:Object(pe.jsxs)(dt.a,{container:!0,children:[D&&Object(pe.jsx)(Ie,{}),A&&Object(pe.jsx)(Re,{data:A}),Object(pe.jsxs)(dt.a,{items:!0,sm:8,xs:12,children:[Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"User Name",name:"name",autoFocus:!0,value:i,onChange:function(e){return o(e.target.value)}}),Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0,value:u,onChange:function(e){return j(e.target.value)}}),Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"password",label:"Password",name:"Password",type:"password",autoFocus:!0,value:v,onChange:function(e){return S(e.target.value)}}),Object(pe.jsx)(ye.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"confirmPassword",label:"Confirm Password",name:"Confirm Password",type:"password",autoFocus:!0,value:E,onChange:function(e){return C(e.target.value)}}),I&&Object(pe.jsx)(Re,{data:I}),Object(pe.jsx)("input",{accept:"image/*",className:n.input,style:{display:"none"},id:"raised-button-file",multiple:!0,type:"file",onChange:function(e){return function(e){if(_(null),!e)return _("Please Select an Image");if(_(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return _("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","skynotes"),t.append("cloud_name","sky004"),fetch("https://api.cloudinary.com/v1_1/sky004/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){console.log(e),m(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])}}),Object(pe.jsx)("label",{htmlFor:"raised-button-file",children:Object(pe.jsx)(Oe.a,{variant:"contained",component:"span",className:n.button,color:"primary",children:"Upload Profile Pic"})}),Object(pe.jsx)(Oe.a,{type:"submit",variant:"contained",color:"primary",disabled:E!==v||0===u.length||0===i.length,style:{marginLeft:"4px"},children:"Update"})]}),Object(pe.jsx)(dt.a,{items:!0,sm:4,xs:12,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(pe.jsx)("img",{src:h,alt:i,className:"profilePic"})})]})})})})},bt=n(200),ht=n(644),mt=(n(550),["node","inline","className","children"]),Ot=function(e){var t=e.match,n=Object(a.useState)(""),r=Object(W.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),s=Object(W.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)(""),j=Object(W.a)(d,2),p=j[0],b=j[1],h=Object(a.useState)(""),m=Object(W.a)(h,2),O=m[0],g=m[1],x=Object(F.f)();return Object(a.useEffect)((function(){(function(){var e=Object(se.a)(oe.a.mark((function e(){var n,a;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,(a=n.data)&&(i(a.title),u(a.category),b("".concat(a.updatedAt).substring(0,10)),g(a.content));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,x]),Object(pe.jsx)("div",{children:Object(pe.jsxs)(He,{title:c,children:[l?Object(pe.jsxs)(Se.a,{elevation:15,children:[Object(pe.jsxs)(Q.a,{mt:2,variant:"h5",children:["Category : ",l]}),Object(pe.jsxs)(Q.a,{variant:"body",style:{marginTop:20},children:["Created Date : ",p]})]}):Object(pe.jsx)(Ie,{}),Object(pe.jsx)(Ye.a,{children:O,components:{code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,r=Object(qe.a)(e,mt),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(pe.jsx)(Ke.a,Object(ze.a)({children:String(a).replace(/\n$/,""),language:c[1],PreTag:"div"},r)):Object(pe.jsx)("code",Object(ze.a)(Object(ze.a)({className:n},r),{},{children:a}))}}})]})})},gt=(n(551),n.p+"static/media/error.12c901ef.png"),xt=function(){return Object(pe.jsxs)("div",{className:"pageNotFound",children:[Object(pe.jsxs)("div",{className:"Warning",children:[Object(pe.jsx)("h1",{className:"TextStyle",children:"404 - Page Not Found"}),Object(pe.jsx)(H.b,{to:"/",children:Object(pe.jsx)(Q.a,{children:"Go Back"})})]}),Object(pe.jsx)("img",{src:gt,alt:"Page not found"})]})},ft=Object(bt.a)({palette:{primary:{main:"#114b7a"},secondary:{main:"#2E3B55"}}}),yt=function(){var e=Object(a.useState)(""),t=Object(W.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(pe.jsx)(ht.a,{theme:ft,children:Object(pe.jsxs)(H.a,{children:[Object(pe.jsx)(he,{setSearch:function(e){return r(e)}}),Object(pe.jsx)("main",{children:Object(pe.jsxs)(F.c,{children:[Object(pe.jsx)(F.a,{path:"/",component:ge,exact:!0}),Object(pe.jsx)(F.a,{path:"/login",component:Pe,exact:!0}),Object(pe.jsx)(F.a,{path:"/register",component:Fe,exact:!0}),Object(pe.jsx)(F.a,{path:"/createnote",component:st,exact:!0}),Object(pe.jsx)(F.a,{path:"/note/:id",component:ut,exact:!0}),Object(pe.jsx)(F.a,{path:"/singleNote/:id",component:Ot,exact:!0}),Object(pe.jsx)(F.a,{path:"/profile",component:pt,exact:!0}),Object(pe.jsx)(F.a,{path:"/mynotes",component:function(){return Object(pe.jsx)(nt,{search:n})},exact:!0}),Object(pe.jsx)(F.a,{component:xt})]})}),Object(pe.jsx)(me,{})]})})};i.a.render(Object(pe.jsx)(P.a,{store:D,children:Object(pe.jsx)(yt,{})}),document.getElementById("root"))}},[[552,1,2]]]);
//# sourceMappingURL=main.a5fd6065.chunk.js.map