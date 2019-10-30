(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),u=n.n(o),c=n(2),l=n.n(c),i=n(4),s=n(16),m=n(3),p=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make unimportant":"make important";return r.a.createElement("li",{className:"note"},t.content,r.a.createElement("button",{onClick:n},a))},f=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},d=function(){return r.a.createElement("div",{style:{color:"darksslategrey",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},v=n(5),g=n.n(v),b=null,E={getAll:function(){return g.a.get("/api/notes").then(function(e){return e.data})},create:function(){var e=Object(i.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,g.a.post("/api/notes",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat("/api/notes","/").concat(e),t).then(function(e){return e.data})},setToken:function(e){b="bearer ".concat(e)}},w={login:function(){var e=Object(i.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},h=function(e){var t=e.addNote,n=e.newNote,a=e.handleNoteChange;return r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{value:n,onChange:a}),r.a.createElement("button",{type:"submit"},"save"))},O=function(e){var t=e.handleLogin,n=e.username,a=e.setUsername,o=e.password,u=e.setPassword;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:n,name:"username",onChange:function(e){var t=e.target;return a(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:o,name:"Password",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))},j=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),c=Object(m.a)(u,2),v=c[0],g=c[1],b=Object(a.useState)(!0),j=Object(m.a)(b,2),k=j[0],S=j[1],y=Object(a.useState)(null),N=Object(m.a)(y,2),x=N[0],C=N[1],I=Object(a.useState)(""),T=Object(m.a)(I,2),U=T[0],D=T[1],J=Object(a.useState)(""),A=Object(m.a)(J,2),L=A[0],P=A[1],z=Object(a.useState)(null),B=Object(m.a)(z,2),H=B[0],M=B[1];Object(a.useEffect)(function(){E.getAll().then(function(e){o(e)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);M(t),E.setToken(t.token)}},[]);var q=k?n:n.filter(function(e){return e.important}),F=function(){var e=Object(i.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.login({username:U,password:L});case 4:n=e.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(n)),E.setToken(n.token),M(n),D(""),P(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),C("wrong credentials"),setTimeout(function(){C(null)},5e3);case 16:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(f,{message:x}),H?r.a.createElement("div",null,r.a.createElement("p",null,H.name," logged in"),r.a.createElement(h,{addNote:function(e){e.preventDefault();var t={content:v,date:(new Date).toISOString(),important:Math.random()>.5};E.create(t).then(function(e){o(n.concat(e)),g("")})},newNote:v,handleNoteChange:function(e){console.log(e.target.value),g(e.target.value)}})):r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(O,{handleLogin:F,username:U,setUsername:D,password:L,setPassword:P})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return S(!k)}},"show ",k?"important":"all")),r.a.createElement("ul",null,q.map(function(e){return r.a.createElement(p,{key:e.id,note:e,toggleImportance:function(){return function(e){var t=n.find(function(t){return t.id===e}),a=Object(s.a)({},t,{important:!t.important});E.update(e,a).then(function(t){o(n.map(function(n){return n.id!==e?n:t}))}).catch(function(a){C("Note ".concat(t.content," was already removed from server")),setTimeout(function(){C(null)},5e3),o(n.filter(function(t){return t.id!==e}))})}(e.id)}})})),r.a.createElement(d,null))};n(41);u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.968940cd.chunk.js.map