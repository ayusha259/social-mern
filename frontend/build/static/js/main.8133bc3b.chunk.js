(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){e.exports={tweetbox:"Posts_tweetbox__Grz1x",tweetbox_user:"Posts_tweetbox_user__2tw3c",mui_icon:"Posts_mui_icon__2uRkG",tweetbox_user_inf:"Posts_tweetbox_user_inf__GfRZ7",mainBody:"Posts_mainBody__ky_Nz",bodyImage:"Posts_bodyImage__2BtWN",fullImage:"Posts_fullImage__1HhHR",tweetbox_likes:"Posts_tweetbox_likes__1DLA7",comment_icon:"Posts_comment_icon__ax16I",retweet_icon:"Posts_retweet_icon__1CGVL",like_icon:"Posts_like_icon__2ehFZ",push_like:"Posts_push_like__2KXHU",push:"Posts_push__3n8rE",cmt_box:"Posts_cmt_box__2t3Ni",cmt_input:"Posts_cmt_input__IEVOQ",cmt_btn:"Posts_cmt_btn__1smI_",cmt_btn_active:"Posts_cmt_btn_active__F2zqP",all_cmt:"Posts_all_cmt__N2vwK",cmt:"Posts_cmt__1adMb",cmtPreview:"Posts_cmtPreview__21yVg"}},140:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n.n(c),s=n(30),o=n(15),i=n(10),l=n(60),u=n(86),d=n(87),j={user:null,auth:{token:null,isAuth:!1},posts:[]},b={error:null,loading:!1},p={allUsers:[]},m={followingPosts:[]},_=n(9),f=n.n(_),O=n(21),x=n(23),h=n.n(x),g=function(e){return{headers:{Authorization:"Bearer ".concat(e)}}},v=function(e,t){401===e.response.status?(t({type:"USER_LOGOUT"}),localStorage.removeItem("token")):t({type:"ERROR",payload:e.response&&e.response.data.message?e.response.data.message:e.message})},y=function(){var e=Object(O.a)(f.a.mark((function e(t,n){var a,c,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.token,localStorage.setItem("token",JSON.stringify(a)),c=g(a),e.next=6,h.a.get("/api/users/auth/userData",c);case 6:r=e.sent,s=r.data,t({type:"USER_LOGIN",payload:{user:s,token:a}}),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(O.a)(f.a.mark((function e(t,n){var a,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=g(n),e.next=4,h.a.get("/api/users/auth/userData",a);case 4:c=e.sent,r=c.data,t({type:"USER_INFO",payload:r}),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){var a,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"REQUEST"}),a=g(e),t.next=5,h.a.get("/api/posts/userposts",a);case 5:c=t.sent,r=c.data,n({type:"USER_POSTS",payload:r}),n({type:"SUCCESS"}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),v(t.t0,n);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){var a,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=g(e),t.next=4,h.a.get("/api/posts/followingposts",a);case 4:c=t.sent,r=c.data,n({type:"GET_FOLLOWING_POSTS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),v(t.t0,n);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},S=Object(l.combineReducers)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return Object(i.a)(Object(i.a)({},e),{},{user:t.payload.user,auth:{token:t.payload.token,isAuth:!0}});case"USER_INFO":return Object(i.a)(Object(i.a)({},e),{},{user:t.payload});case"USER_POSTS":return Object(i.a)(Object(i.a)({},e),{},{posts:t.payload});case"POSTS_CLEANUP":return Object(i.a)(Object(i.a)({},e),{},{posts:[]});case"USER_LOGOUT":case"CLEAN_UP":return j;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST":return{error:null,loading:!0};case"SUCCESS":return{error:null,loading:!1};case"ERROR":return{error:t.payload,loading:!1};case"CLEAN_ERROR":return Object(i.a)(Object(i.a)({},e),{},{error:null});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_USERS":return Object(i.a)(Object(i.a)({},e),{},{allUsers:t.payload});case"ALL_USERS_CLEAN":return Object(i.a)(Object(i.a)({},e),{},{allUsers:[]});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FOLLOWING_POSTS":return Object(i.a)(Object(i.a)({},e),{},{followingPosts:t.payload});case"CLEAN_FOLLOWING_POSTS":return Object(i.a)(Object(i.a)({},e),{},{followingPosts:[]});default:return e}}}),P={userInfo:{user:null,auth:{token:null,isAuth:!1},posts:[]},error:{loading:!1,error:null},users:{allUsers:[]},posts:{followingPosts:[]}},I=localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null;I&&(P=Object(i.a)(Object(i.a)({},P),{},{userInfo:Object(i.a)(Object(i.a)({},P.userInfo),{},{auth:{token:I,isAuth:!0}})}));var L,C=Object(l.createStore)(S,P,Object(d.composeWithDevTools)(Object(l.applyMiddleware)(u.a)));localStorage.getItem("token")&&C.dispatch((L=JSON.parse(localStorage.getItem("token")),function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST"}),e.next=4,k(t,L);case 4:t({type:"SUCCESS"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0,t);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));var E=C,U=(n(140),n(17)),R=n(100),A=n(2),F=["component"],B=function(e){var t=e.component,n=Object(R.a)(e,F),a=Object(o.c)((function(e){return e.userInfo})).auth;return Object(A.jsx)(U.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return a.isAuth?Object(A.jsx)(t,Object(i.a)({},e)):Object(A.jsx)(U.a,{to:"/login"})}}))},T=n(12),H=n(18),D=n.n(H),G=function(){var e=Object(a.useState)(!1),t=Object(T.a)(e,2),n=t[0],c=t[1],r=Object(o.c)((function(e){return e.userInfo})).user,i=Object(o.b)();Object(a.useEffect)((function(){c(!!r)}),[n,r]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:D.a.fakeNav}),Object(A.jsx)("nav",{className:D.a.navbar,children:Object(A.jsxs)("div",{className:D.a.navContainer,children:[Object(A.jsx)("h2",{className:D.a.brand,children:Object(A.jsx)(s.b,{to:"/",style:{textDecoration:"none",color:"#ebe8e8"},children:"FACEPAGE"})}),Object(A.jsxs)("ul",{className:D.a.links,children:[Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:D.a.link,children:n?Object(A.jsx)(s.c,{to:"/profile",style:{textDecoration:"none"},className:D.a.disableLink,activeClassName:D.a.activeLink,children:Object(A.jsxs)("div",{className:"".concat(D.a.iconAndLabel),children:[Object(A.jsx)("i",{className:"fas fa-user-circle ".concat(D.a.navIcon)}),Object(A.jsx)("span",{children:Object(A.jsx)("span",{className:D.a.hideLinkText,children:r.name})})]})}):Object(A.jsx)(s.c,{to:"/login",className:D.a.disableLink,activeClassName:D.a.activeLink,children:Object(A.jsxs)("div",{className:D.a.iconAndLabel,children:[Object(A.jsx)("i",{className:"fas fa-user ".concat(D.a.navIcon)}),Object(A.jsx)("span",{className:D.a.hideLinkText,children:"Sign In"})]})})})}),n?Object(A.jsx)("li",{onClick:function(){i((function(e){e({type:"USER_LOGOUT"}),localStorage.removeItem("token")})),c(!1)},children:Object(A.jsx)("span",{className:D.a.link,children:Object(A.jsxs)("div",{className:D.a.iconAndLabel,children:[Object(A.jsx)("i",{className:"fas fa-sign-out-alt ".concat(D.a.navIcon)}),Object(A.jsx)("span",{children:Object(A.jsx)("span",{className:D.a.hideLinkText,children:"Logout"})})]})})}):""]})]})})]})},q=n(189),z=n(68),Q=n.n(z),M=function(e){var t=e.handleClick,n=e.type,c=e.targetId,r=e.token,s=e.followed,o=Object(a.useState)(s),i=Object(T.a)(o,2),l=i[0],u=i[1];return Object(A.jsx)("div",{className:"".concat(Q.a.btn," ").concat(l?Q.a.unfollow:Q.a.follow),onClick:function(){return function(e,n,a){t(e,n,a),u(!l)}(n,r,c)},children:l?"Unfollow":"Follow"})},J=n(177),V=n(72),W=n.n(V),Z=function(){return Object(A.jsx)("div",{className:W.a.loader,children:Object(A.jsx)(J.a,{className:W.a.mainLoader})})},K=n(99),X=n(188),Y=n(93),$=n.n(Y),ee=n(96),te=n.n(ee),ne=n(95),ae=n.n(ne),ce=n(94),re=n.n(ce),se=n(14),oe=n.n(se),ie=function(e){var t=e.name,n=e.profile,c=e.content,r=e.image,s=e.likes,i=e.comments,l=e.width,u=e.liked,d=e._id,j=e.postComment,b=e.created,p=Object(a.useState)(!1),m=Object(T.a)(p,2),_=m[0],x=m[1],g=Object(a.useState)(!1),v=Object(T.a)(g,2),y=v[0],k=v[1],w=Object(a.useState)(u),N=Object(T.a)(w,2),S=N[0],P=N[1],I=Object(a.useState)(""),L=Object(T.a)(I,2),C=L[0],E=L[1],U=Object(a.useState)(s),R=Object(T.a)(U,2),F=R[0],B=R[1],H=Object(a.useState)(i),D=Object(T.a)(H,2),G=D[0],z=D[1],Q=Object(a.useState)(i.length),M=Object(T.a)(Q,2),J=M[0],V=M[1],W=Object(o.c)((function(e){return e.userInfo})),Z=W.user,Y=W.auth;document.body.style.overflow=y?"hidden":"auto";var ee=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("/api/posts/like/".concat(d),{},{headers:{Authorization:"Bearer ".concat(Y.token)}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(G.slice(-2));var ne=function(e,t,n,a){j(e,t,n,a),E(""),V(J+1),z((function(e){return[].concat(Object(K.a)(e),[{name:n,profilePicture:a,comment:t,_id:Math.random()}])}))},ce=function(e){ee(),P(!S),B("like"===e?F+1:F-1),document.querySelector("#like_icon").classList.toggle("".concat(oe.a.push_like))};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(X.a,{onClose:function(){x(!1)},open:_,children:Object(A.jsxs)("div",{className:oe.a.all_cmt,children:[Object(A.jsx)("div",{children:G.map((function(e){return Object(A.jsxs)("div",{className:oe.a.cmt,children:[Object(A.jsx)("span",{children:"".concat(e.name," - ")}),Object(A.jsx)("span",{children:e.comment})]},e._id)}))}),Object(A.jsx)("div",{children:Object(A.jsxs)("form",{className:"".concat(oe.a.cmt_box),onSubmit:function(e){e.preventDefault(),ne(d,C,Z.name,Z.profilePicture)},children:[Object(A.jsx)("input",{placeholder:"Comment",className:oe.a.cmt_input,type:"text",value:C,onChange:function(e){return E(e.target.value)}}),Object(A.jsx)("button",{type:"submit",disabled:""===C,className:"".concat(oe.a.cmt_btn," ").concat(C?oe.a.cmt_btn_active:""),children:"POST"})]})})]})}),Object(A.jsxs)("div",{style:{width:l},className:oe.a.tweetbox,children:[Object(A.jsxs)("div",{className:oe.a.tweetbox_user,children:[Object(A.jsxs)("div",{className:oe.a.tweetbox_user_inf,children:[Object(A.jsx)(q.a,{style:{width:"45px",height:"45px",margin:"auto"},src:n}),Object(A.jsx)("span",{children:t})]}),Object(A.jsx)($.a,{className:oe.a.mui_icon})]}),Object(A.jsxs)("div",{className:oe.a.mainBody,children:[r?Object(A.jsx)("div",{onClick:function(){return k(!0)},className:oe.a.bodyImage,children:Object(A.jsx)("img",{src:r,alt:""})}):"",y?Object(A.jsx)("div",{onClick:function(){return k(!1)},className:oe.a.fullImage,children:Object(A.jsx)("img",{src:r,alt:""})}):"",Object(A.jsx)("div",{className:oe.a.content,children:Object(A.jsx)("p",{children:c})}),Object(A.jsx)("span",{style:{fontSize:"0.65rem",color:"#414a4c",marginTop:"10px"},children:function(e){var t=Math.floor((new Date-e)/1e3),n=t/2592e3;return n>1?Math.floor(n)+" months ago":(n=t/86400)>1?Math.floor(n)+" days ago":(n=t/3600)>1?Math.floor(n)+" hours ago":(n=t/60)>1?Math.floor(n)+" minutes ago":Math.floor(t)+" seconds ago"}(b)})]}),Object(A.jsxs)("div",{className:oe.a.tweetbox_likes,children:[Object(A.jsxs)("span",{className:oe.a.like_icon,children:[S?Object(A.jsx)(re.a,{id:"like_icon",onClick:function(){return ce("dislike")},style:{color:"#ea442b"},className:oe.a.mui_icon}):Object(A.jsx)(ae.a,{id:"like_icon",onClick:function(){return ce("like")},className:oe.a.mui_icon}),F]}),Object(A.jsxs)("span",{className:oe.a.comment_icon,children:[Object(A.jsx)(te.a,{onClick:function(){return x(!0)},className:oe.a.mui_icon})," ",J]})]}),Object(A.jsx)("div",{children:G.slice(-2).map((function(e){return Object(A.jsxs)("div",{className:oe.a.cmtPreview,children:[Object(A.jsx)("span",{style:{fontSize:"0.8rem"},children:"".concat(e.name," -  ")}),Object(A.jsx)("span",{style:{fontSize:"0.8rem"},children:e.comment})]},e._id)}))}),Object(A.jsx)("div",{children:Object(A.jsxs)("form",{className:oe.a.cmt_box,onSubmit:function(e){e.preventDefault(),ne(d,C,Z.name,Z.profilePicture)},children:[Object(A.jsx)("input",{placeholder:"Comment",className:oe.a.cmt_input,type:"text",value:_?"":C,onChange:function(e){return E(e.target.value)}}),Object(A.jsx)("button",{type:"submit",disabled:""===C,className:"".concat(oe.a.cmt_btn," ").concat(C?oe.a.cmt_btn_active:""),children:"POST"})]})})]})]})},le=n(186),ue=n(184),de=n(190),je=n(98),be=n.n(je),pe=n(185),me=n(33),_e=n.n(me),fe=function(){var e=Object(o.c)((function(e){return e.userInfo})),t=e.user,n=e.auth,c=Object(o.c)((function(e){return e.users})).allUsers,r=Object(o.c)((function(e){return e.error})).loading,s=Object(o.c)((function(e){return e.posts})).followingPosts,l=Object(o.b)(),u=Object(a.useState)(!1),d=Object(T.a)(u,2),j=d[0],b=d[1],p=Object(a.useState)(),m=Object(T.a)(p,2),_=m[0],x=m[1],y=Object(a.useState)(""),w=Object(T.a)(y,2),S=w[0],P=w[1],I=Object(a.useState)(""),L=Object(T.a)(I,2),C=L[0],E=L[1];Object(a.useEffect)((function(){return l(function(){var e=Object(O.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST"}),e.next=4,h.a.get("/api/users/allusers");case 4:n=e.sent,a=n.data,t({type:"GET_ALL_USERS",payload:a}),t({type:"SUCCESS"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v(e.t0,t);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),l(N(n.token)),function(){l({type:"ALL_USERS_CLEAN"}),l({type:"CLEAN_FOLLOWING_POSTS"})}}),[l,n.token]);var U=function(e,t,n){l(function(e,t,n){return function(){var a=Object(O.a)(f.a.mark((function a(c){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r=g(t),a.next=4,h.a.put("/api/users/".concat(e),{targetId:n},r);case 4:return a.next=6,k(c,t);case 6:a.next=10;break;case 8:a.prev=8,a.t0=a.catch(0);case 10:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(e,t,n))},R=function(){var e=Object(O.a)(f.a.mark((function e(t,a,c,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("/api/posts/comment/".concat(t),{comment:a,name:c,profilePicture:r},{headers:{Authorization:"Bearer ".concat(n.token)}});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),F=function(e,t,n,a){R(e,t,n,a)},B=function(){b(!1),E("")},H=t?c.filter((function(e){return e._id!==t._id})):c;return Object(A.jsx)(A.Fragment,{children:r?Object(A.jsx)(Z,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(X.a,{onClose:B,open:j,children:Object(A.jsxs)("div",{className:_e.a.uploadImage,children:[Object(A.jsx)("h1",{children:"Upload Post"}),Object(A.jsx)("div",{className:_e.a.dialogImage,children:Object(A.jsx)("img",{src:S,alt:""})}),Object(A.jsxs)("div",{style:{padding:"10px 0"},children:[Object(A.jsx)(le.a,{label:"Content",style:{width:"350px",marginBottom:"10px"},variant:"standard",onChange:function(e){return E(e.target.value)},type:"text",multiline:!0,maxRows:1,value:C}),Object(A.jsx)("input",{style:{width:"350px"},onChange:function(e){x(e.target.files[0]),P(URL.createObjectURL(e.target.files[0]))},type:"file"})]}),Object(A.jsx)("div",{children:Object(A.jsx)(ue.a,{onClick:function(){var e=new FormData;e.append("content",C),e.append("image",_),B(),l(function(e,t){return function(){var n=Object(O.a)(f.a.mark((function n(a){var c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:"REQUEST"}),c={headers:{Authorization:"Bearer ".concat(e),enctype:"multipart/form-data"}},n.next=5,h.a.post("/api/posts/upload",t,c);case 5:a({type:"SUCCESS"}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v(n.t0,a);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n.token,e)),l(N(n.token))},style:{width:"100px"},variant:"contained",color:"primary",children:"Upload"})})]})}),Object(A.jsx)("div",{className:_e.a.container,children:Object(A.jsxs)("div",{className:_e.a.feedContainer,children:[Object(A.jsx)("div",{className:_e.a.feed,children:s.map((function(e){return Object(A.jsx)(ie,Object(i.a)(Object(i.a)({_id:e._id},function(e){var t=c.find((function(t){return t._id===e}));return{name:t.name,profile:t.profilePicture}}(e.user)),{},{content:e.content,image:e.photo,likes:e.likes.length,comments:e.comments,width:"80%",liked:e.likes.includes(t._id),postComment:F,created:new Date(e.createdAt)}),e._id)}))}),Object(A.jsxs)("div",{className:_e.a.users,children:[Object(A.jsx)("h1",{children:"USERS"}),H.map((function(e){return Object(A.jsxs)("div",{className:_e.a.user,children:[Object(A.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[Object(A.jsx)(q.a,{src:e.profilePicture}),Object(A.jsx)("span",{style:{marginLeft:"7px"},className:_e.a.name,children:e.name})]}),Object(A.jsx)(M,{handleClick:U,followed:t.following.includes(e._id),targetId:e._id,token:n.token,type:t.following.includes(e._id)?"unfollow":"follow"})]},e._id)}))]}),Object(A.jsx)(de.a,{title:"Upload",onClick:function(){return b(!0)},disableHoverListener:!0,className:_e.a.postAddBtn,style:{position:"fixed",bottom:"40px",right:"40px",transition:"0.5s"},children:Object(A.jsx)(pe.a,{color:"primary",className:_e.a.absolute,children:Object(A.jsx)(be.a,{})})})]})})]})})},Oe=n(37),xe=n.n(Oe),he=function(){var e=Object(a.useState)(""),t=Object(T.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(T.a)(r,2),l=i[0],u=i[1],d=Object(o.c)((function(e){return e.userInfo})).user,j=Object(o.c)((function(e){return e.error})),b=j.error,p=j.loading,m=Object(o.b)(),_=Object(U.g)();return Object(a.useEffect)((function(){return d&&_.push("/"),function(){return m({type:"CLEAN_ERROR"})}}),[d,_,m]),Object(A.jsx)(A.Fragment,{children:p?Object(A.jsx)(Z,{}):Object(A.jsxs)("div",{className:xe.a.main,children:[Object(A.jsx)("h1",{className:xe.a.heading,children:"Log In"}),Object(A.jsxs)("div",{className:xe.a.container,children:[b?Object(A.jsx)("span",{className:xe.a.error,children:b}):"",Object(A.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(function(e,t){return function(){var n=Object(O.a)(f.a.mark((function n(a){var c,r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:"REQUEST"}),n.next=4,h.a.post("/api/users/login",{email:e,password:t});case 4:return c=n.sent,r=c.data,n.next=8,y(a,r);case 8:a({type:"SUCCESS"}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("outer error"),v(n.t0,a);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(n,l))},className:xe.a.formContainer,children:[Object(A.jsx)(le.a,{className:xe.a.textField,label:"Email or username",type:"text",variant:"outlined",onChange:function(e){return c(e.target.value)},value:n,required:!0}),Object(A.jsx)(le.a,{style:{margin:"20px 0"},className:xe.a.textField,label:"Password",type:"password",variant:"outlined",onChange:function(e){return u(e.target.value)},value:l,required:!0}),Object(A.jsx)("button",{className:xe.a.standardBtn,type:"submit",children:"Log In"}),Object(A.jsx)(s.b,{style:{textDecoration:"none"},to:"/register",className:xe.a.standardBtn,children:"Not registered? Sign In"})]})]})]})})},ge=(n(144),n(29)),ve=n.n(ge),ye=function(){var e=Object(a.useState)(""),t=Object(T.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),l=Object(T.a)(r,2),u=l[0],d=l[1],j=Object(a.useState)(""),b=Object(T.a)(j,2),p=b[0],m=b[1],_=Object(a.useState)(""),x=Object(T.a)(_,2),g=x[0],k=x[1],w=Object(a.useState)(""),N=Object(T.a)(w,2),S=N[0],P=N[1],I=Object(o.c)((function(e){return e.userInfo})).user,L=Object(o.c)((function(e){return e.error})),C=L.error,E=L.loading,R=Object(o.b)(),F=Object(U.g)();return Object(a.useEffect)((function(){return I&&F.push("/"),function(){return R({type:"CLEAN_ERROR"})}}),[I,F,R]),Object(A.jsx)(A.Fragment,{children:E?Object(A.jsx)("h1",{children:"LOADING...."}):Object(A.jsxs)("div",{className:ve.a.main,children:[Object(A.jsx)("h1",{className:ve.a.heading,children:"Sign In"}),Object(A.jsxs)("div",{className:ve.a.container,children:[C?Object(A.jsx)("span",{className:ve.a.error,children:C}):"",Object(A.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),R((t={name:u,username:p,email:n,password:S},function(){var e=Object(O.a)(f.a.mark((function e(n){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"REQUEST"}),e.next=4,h.a.post("/api/users/register",Object(i.a)({},t));case 4:return a=e.sent,c=a.data,e.next=8,y(n,c);case 8:n({type:"SUCCESS"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),v(e.t0,n);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()))},className:ve.a.formContainer,children:[Object(A.jsx)(le.a,{style:{marginBottom:"20px"},className:ve.a.textField,label:"Full Name",type:"text",variant:"outlined",onChange:function(e){return d(e.target.value)},value:u,required:!0}),Object(A.jsx)(le.a,{style:{marginBottom:"20px"},className:ve.a.textField,label:"Username",type:"text",variant:"outlined",onChange:function(e){return m(e.target.value)},value:p,required:!0}),Object(A.jsx)(le.a,{style:{marginBottom:"20px"},className:ve.a.textField,label:"Email",type:"text",variant:"outlined",onChange:function(e){return c(e.target.value)},value:n,required:!0}),Object(A.jsx)(le.a,{style:{marginBottom:"20px"},className:ve.a.textField,label:"Password",type:"password",variant:"outlined",onChange:function(e){return k(e.target.value)},value:g,required:!0}),Object(A.jsx)(le.a,{style:{marginBottom:"20px"},error:S!==g,className:ve.a.textField,label:"Confirm Password",type:"password",variant:"outlined",onChange:function(e){return P(e.target.value)},value:S,required:!0}),Object(A.jsx)("button",{className:ve.a.standardBtn,type:"submit",children:"Sign In"}),Object(A.jsx)(s.b,{to:"/login",style:{textDecoration:"none"},className:ve.a.standardBtn,children:"Already registered? Log In"})]})]})]})})},ke=n(32),we=n.n(ke),Ne=function(){var e=Object(a.useState)(!1),t=Object(T.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(T.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(""),d=Object(T.a)(u,2),j=d[0],b=d[1],p=Object(o.c)((function(e){return e.userInfo})),m=p.user,_=p.auth,x=p.posts,g=Object(o.b)(),y=function(){var e=Object(O.a)(f.a.mark((function e(t,n,a,c){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("/api/posts/comment/".concat(t),{comment:n,name:a,profilePicture:c},{headers:{Authorization:"Bearer ".concat(_.token)}});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),N=function(e,t,n,a){y(e,t,n,a),g(w(_.token))};return Object(a.useEffect)((function(){return g(w(_.token)),function(){g({type:"POSTS_CLEANUP"})}}),[g,_.token]),Object(A.jsx)(A.Fragment,{children:m?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(X.a,{onClose:function(){c(!1),b("")},open:n,children:Object(A.jsx)("form",{children:Object(A.jsxs)("div",{className:we.a.uploadImage,children:[Object(A.jsx)("h1",{children:"Upload Image"}),Object(A.jsx)("div",{className:we.a.dialogImage,children:Object(A.jsx)("img",{src:j,alt:""})}),Object(A.jsxs)("div",{style:{padding:"10px 0"},children:[Object(A.jsx)("input",{name:"image",onChange:function(e){l(e.target.files[0]),b(URL.createObjectURL(e.target.files[0]))},accept:"image/*",className:we.a.input,id:"contained-button-file",type:"file"}),Object(A.jsx)("label",{htmlFor:"contained-button-file",children:Object(A.jsx)(ue.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})})]}),Object(A.jsx)("div",{children:Object(A.jsx)(ue.a,{style:{width:"100px"},variant:"contained",s:!0,color:"primary",onClick:function(){g(function(e,t,n){return function(){var a=Object(O.a)(f.a.mark((function a(c){var r,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(r=new FormData).append("image",t),r.append("del",n),c({type:"REQUEST"}),s={headers:{Authorization:"Bearer ".concat(e),enctype:"multipart/form-data"}},a.next=8,h.a.put("/api/users/uploadImage",r,s);case 8:return a.next=10,k(c,e);case 10:c({type:"SUCCESS"}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),v(a.t0,c);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}(_.token,i,!1)),c(!1)},children:"Submit"})})]})})}),Object(A.jsxs)("div",{className:we.a.main,children:[Object(A.jsxs)("div",{className:we.a.headInfo,children:[Object(A.jsxs)("div",{className:we.a.profilePic,children:[Object(A.jsx)("img",{src:m.profilePicture,alt:""}),Object(A.jsx)("i",{onClick:function(){return c(!0)},className:"fas fa-camera ".concat(we.a.uploadImageIcon)})]}),Object(A.jsxs)("div",{className:we.a.nameFollow,children:[Object(A.jsx)("span",{className:we.a.name,children:m.name}),Object(A.jsxs)("div",{className:we.a.followings,children:[Object(A.jsxs)("span",{children:[m.followers.length," Followers"]}),Object(A.jsxs)("span",{children:[m.following.length," Following"]})]})]})]}),x.length>0?Object(A.jsx)("div",{className:we.a.posts,children:x.map((function(e){return Object(A.jsx)(ie,{_id:e._id,liked:e.likes.includes(m._id),name:m.name,profile:m.profilePicture,content:e.content,image:e.photo,likes:e.likes.length,comments:e.comments,width:"45%",postComment:N,created:new Date(e.createdAt)},e._id)}))}):""]})]}):Object(A.jsx)(Z,{})})};var Se=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(G,{}),Object(A.jsxs)(U.d,{children:[Object(A.jsx)(B,{exact:!0,path:"/",component:fe}),Object(A.jsx)(U.b,{exact:!0,path:"/login",component:he}),Object(A.jsx)(U.b,{exact:!0,path:"/register",component:ye}),Object(A.jsx)(B,{exact:!0,path:"/profile",component:Ne})]})]})};r.a.render(Object(A.jsx)(o.a,{store:E,children:Object(A.jsx)(s.a,{children:Object(A.jsx)(Se,{})})}),document.getElementById("root"))},18:function(e,t,n){e.exports={fakeNav:"Header_fakeNav__Jc_AH",navbar:"Header_navbar__Jcq5E",navContainer:"Header_navContainer__3Pu9d",brand:"Header_brand__Mxxak",links:"Header_links__1b_ib",disableLink:"Header_disableLink__3R828",activeLink:"Header_activeLink__2y0u9",activeUserLink:"Header_activeUserLink__3_ClV",iconAndLabel:"Header_iconAndLabel__3H2kA",navIcon:"Header_navIcon__36OI8",loggedInUser:"Header_loggedInUser__l1SVR",hideLinkText:"Header_hideLinkText__2egqn"}},29:function(e,t,n){e.exports={main:"RegisterPage_main__RAcLr",heading:"RegisterPage_heading__31BmK",container:"RegisterPage_container__3drQO",formContainer:"RegisterPage_formContainer__Dt_qU",textField:"RegisterPage_textField__2UbQ6",standardBtn:"RegisterPage_standardBtn__1vtbn",error:"RegisterPage_error__3Rqyv"}},32:function(e,t,n){e.exports={main:"ProfilePage_main__2pQMx",profilePic:"ProfilePage_profilePic__1nCSv",nameFollow:"ProfilePage_nameFollow__3wntM",name:"ProfilePage_name__2j22J",followings:"ProfilePage_followings__1Z_ZR",uploadImage:"ProfilePage_uploadImage__3Puyq",dialogImage:"ProfilePage_dialogImage__1-Ucq",uploadImageIcon:"ProfilePage_uploadImageIcon__X5IKW",posts:"ProfilePage_posts__2GR00",input:"ProfilePage_input__3T-Vx"}},33:function(e,t,n){e.exports={container:"HomePage_container__ppqSv",feedContainer:"HomePage_feedContainer__BLDBg",feed:"HomePage_feed__3_gal",users:"HomePage_users__2HhB4",name:"HomePage_name__3yVb_",user:"HomePage_user___Idqa",followUnfollow:"HomePage_followUnfollow__BrbLm",postAddBtn:"HomePage_postAddBtn__3P-tU",uploadImage:"HomePage_uploadImage__m6fHb",dialogImage:"HomePage_dialogImage__1R2DL",uploadImageIcon:"HomePage_uploadImageIcon__3kIAk"}},37:function(e,t,n){e.exports={main:"LoginPage_main__3DiYF",heading:"LoginPage_heading__1cWe8",container:"LoginPage_container__237nT",formContainer:"LoginPage_formContainer__12_LQ",textField:"LoginPage_textField__x9BkC",standardBtn:"LoginPage_standardBtn__ircIu",error:"LoginPage_error__sFqzF"}},68:function(e,t,n){e.exports={btn:"FollowUnfollow_btn__1qim9",unfollow:"FollowUnfollow_unfollow__3izkg",follow:"FollowUnfollow_follow__3YZVp"}},72:function(e,t,n){e.exports={loader:"Loader_loader__1QjzX",mainLoader:"Loader_mainLoader__7RdOz"}}},[[145,1,2]]]);
//# sourceMappingURL=main.8133bc3b.chunk.js.map