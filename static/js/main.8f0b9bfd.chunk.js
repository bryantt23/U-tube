(this["webpackJsonpu-tube"]=this["webpackJsonpu-tube"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(4),c=n.n(s),r=n(21),a=n.n(r),o=(n(28),n(8)),d=n(9),l=n(11),u=n(10),j=n.p+"static/media/golden-retriever.96b6e11a.jpg",h=n.p+"static/media/doge.f332d192.jpg",b=n.p+"static/media/cat.4a84328a.jpg",m=n(13),g=(n(29),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.loggedInUser;return Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(m.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{style:{float:"right"},children:null===t?Object(i.jsxs)("p",{className:"header-text",children:[Object(i.jsx)("button",{onClick:function(){return e.props.signIn("John")},children:"Sign in as John"}),Object(i.jsx)("button",{onClick:function(){return e.props.signIn("Jane")},children:"Sign in as Jane"})]}):Object(i.jsxs)("p",{class:"header-text",children:["Logged in as: ",t," ",Object(i.jsx)("button",{onClick:function(){return e.props.signOut()},children:"Sign out"})]})})]})})}}]),n}(s.Component)),O=n(15),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={value:""},i.handleChange=i.handleChange.bind(Object(O.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(O.a)(i)),i}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e,t,n){e.preventDefault(),this.props.addComment(t,n,this.state.value),this.setState({value:""})}},{key:"render",value:function(){var e=this,t=this.props,n=t.loggedInUser,s=t.comments,c=t.videoId,r=s.map((function(e,t){return Object(i.jsxs)("p",{children:[Object(i.jsxs)("strong",{children:[e.user,":"]})," ",e.comment]},t)}));return Object(i.jsxs)("div",{style:{textAlign:"left"},children:[null===n?Object(i.jsx)("p",{children:"Sign in to add a comment "}):Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t,c,n)},children:[Object(i.jsxs)("label",{children:["Add a comment:",Object(i.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]}),Object(i.jsx)("input",{type:"submit",value:"Submit"})]})}),r]})}}]),n}(s.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.videoId.history.location.pathname.split("/"),t=e[e.length-1],n=this.props.state,s=n.videos,c=n.loggedInUser,r=s[t],a=r.imageSrc,o=r.title,d=r.comments;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{style:{borderWidth:2,borderStyle:"solid",cursor:"pointer",margin:10},children:[Object(i.jsx)("img",{style:{maxHeight:300},alt:"blah",src:a}),Object(i.jsx)("h3",{children:o})]},t),Object(i.jsx)(p,{loggedInUser:c,comments:d,videoId:t,addComment:this.props.addComment})]})}}]),n}(s.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.videos.map((function(e){return Object(i.jsx)(m.b,{to:"/video/".concat(e.videoId),children:Object(i.jsxs)("div",{style:{borderWidth:2,borderStyle:"solid",cursor:"pointer",margin:10},children:[Object(i.jsx)("img",{style:{maxHeight:300},alt:"blah",src:e.imageSrc}),Object(i.jsx)("h3",{children:e.title})]},e.videoId)})}));return Object(i.jsx)("div",{children:e})}}]),n}(s.Component),f=(n(37),n(2)),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).signIn=function(t){e.setState({loggedInUser:t})},e.signOut=function(){e.setState({loggedInUser:null})},e.addComment=function(t,n,i){var s=e.state.videos;s[t].comments.push({user:n,comment:i}),e.setState({videos:s})},e.state={loggedInUser:"John",users:["Jane","John"],videos:[{videoId:0,title:"Funny Golden Retriever Dogs",imageSrc:j,comments:[{user:"John",comment:"I LOVE Goldens"}]},{videoId:1,title:"Doge The Famous Dog Meme",imageSrc:h,comments:[{user:"Jane",comment:"Such cuteness"},{user:"John",comment:"Shiba for the win!"}]},{videoId:2,title:"Bizarre Cat videos",imageSrc:b,comments:[{user:"Jane",comment:"I love kittens"},{user:"John",comment:"Cats are the best"},{user:"Jane",comment:"Kittens are the best"}]}]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.loggedInUser,s=t.videos;return Object(i.jsxs)(m.a,{children:[" ",Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(g,{loggedInUser:n,signOut:this.signOut,signIn:this.signIn})," ",Object(i.jsxs)(f.c,{children:[Object(i.jsx)(f.a,{path:"/video",render:function(t){return Object(i.jsx)(v,{videoId:t,state:e.state,addComment:e.addComment})}}),Object(i.jsx)(f.a,{path:"/",children:Object(i.jsx)(x,{videos:s})})]})]})]})}}]),n}(s.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),c(e),r(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.8f0b9bfd.chunk.js.map