(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var i=n(5),c=n.n(i),a=n(64),o=n.n(a),s=n(67),d=n(23),r=n(65),l=n.n(r),j=n(0);var b=function(e){var t=e.notes,n=e.activeNote,i=e.setActiveNote,c=e.onAddNote,a=e.onDeleteNote,o=e.setShowEdit,s=t.sort((function(e,t){return t.lastModified-e.lastModified}));return Object(j.jsxs)("div",{className:"app-sidebar",children:[Object(j.jsxs)("div",{className:"app-sidebar-header",children:[Object(j.jsx)("h1",{children:"Notes:"}),Object(j.jsx)("button",{onClick:function(){c(),o(!0)},children:"+"})]}),Object(j.jsx)("div",{className:"app-sidebar-notes",children:s.map((function(e){return Object(j.jsxs)("div",{className:"app-sidebar-note ".concat(e.id===n&&"active"),onClick:function(){i(e.id),o(!1)},children:[Object(j.jsxs)("div",{className:"sidebar-note-title",children:[Object(j.jsx)("strong",{children:e.title}),Object(j.jsx)("button",{onClick:function(){return a(e.id)},children:"Delete"})]}),Object(j.jsx)("p",{children:e.body&&e.body.substring(0,40)+"..."}),Object(j.jsxs)("small",{className:"note-meta",children:["Last modified:"," ",new Date(e.lastModified).toLocaleDateString("en-PH",{hour:"2-digit",minute:"2-digit"})]})]})}))})]})},u=n(15),O=n(32),h=n(66),v=n.n(h);var p=function(e){var t=e.activeNote,n=e.showEdit,i=e.setShowEdit,c=e.onUpdateNote,a=function(e,n){var i;c(Object(O.a)(Object(O.a)({},t),{},(i={},Object(u.a)(i,e,n),Object(u.a)(i,"lastModified",Date.now()),i)))},o=function(){i(!n)};return t?n?Object(j.jsxs)("div",{className:"app-main-note-edit",children:[Object(j.jsx)("input",{type:"text",id:"title",value:t.title,onChange:function(e){return a("title",e.target.value)},autoFocus:!0}),Object(j.jsx)("textarea",{id:"body",value:t.body,onChange:function(e){return a("body",e.target.value)},placeholder:"Write your note here..."}),Object(j.jsx)("button",{onClick:o,children:"Save"})]}):Object(j.jsxs)("div",{className:"app-main-note-preview",children:[Object(j.jsxs)("div",{className:"title-bar",children:[Object(j.jsx)("h1",{children:t.title}),Object(j.jsx)("button",{onClick:o,children:"Edit"})]}),Object(j.jsx)(v.a,{className:"markdown-preview",children:t.body})]}):Object(j.jsx)("div",{className:"no-active-note",children:"No note selected."})};n(180);var f=function(){var e=Object(i.useState)(localStorage.notes?JSON.parse(localStorage.notes):[]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),o=Object(d.a)(a,2),r=o[0],u=o[1],O=Object(i.useState)(!1),h=Object(d.a)(O,2),v=h[0],f=h[1];return Object(i.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{notes:n,activeNote:r,setActiveNote:u,onAddNote:function(){var e={id:l()(),title:"Untitled Note",body:"",lastModified:Date.now()};c([e].concat(Object(s.a)(n))),u(e.id)},onDeleteNote:function(e){c(n.filter((function(t){return t.id!==e})))},setShowEdit:f}),Object(j.jsx)(p,{activeNote:n.find((function(e){return e.id===r})),showEdit:v,setShowEdit:f,onUpdateNote:function(e){var t=n.map((function(t){return t.id===r?e:t}));c(t)}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.7bbe7944.chunk.js.map