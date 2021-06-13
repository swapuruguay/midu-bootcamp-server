(this.webpackJsonpguide=this.webpackJsonpguide||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(15),r=t.n(a),o=(t(20),t(6)),i=t(3),u=t(0),s=function(e){var n=e.addPerson,t=e.handleNameChange,c=e.handlePhoneChange,a=e.newPhone,r=e.newName;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Add person"}),Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:r,onChange:t})]}),Object(u.jsxs)("div",{children:["phone: ",Object(u.jsx)("input",{value:a,onChange:c})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})]})},d=function(e){var n=e.name,t=e.number,c=e.remove;return Object(u.jsxs)("div",{children:[n," ",t," ",Object(u.jsx)("button",{onClick:c,children:"delete"})]})},h=function(e){var n=e.persons,t=e.remove;return n.map((function(e){return Object(u.jsx)(d,{name:e.name,number:e.number,remove:function(){return t(e.id,e.name)}},e.name)}))},j=function(e){var n=e.handleSearch,t=e.search;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:t,onChange:n})]})},l=function(e){var n=e.message,t=e.estilo;return null===n?null:Object(u.jsx)("div",{className:t,children:n})},f=t(4),b=t.n(f),m="http://localhost:3001/api/persons",v=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),d=Object(i.a)(r,2),f=d[0],v=d[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),x=p[0],g=p[1],w=Object(c.useState)(""),C=Object(i.a)(w,2),y=C[0],S=C[1],P=Object(c.useState)(null),N=Object(i.a)(P,2),k=N[0],L=N[1];Object(c.useEffect)((function(){b.a.get(m).then((function(e){return e.data})).then((function(e){a(e)}))}),[]);var T=0===y.length?t:t.filter((function(e){return e.name.toLowerCase().indexOf(y.toLowerCase())>-1}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(l,{notification:k}),Object(u.jsx)(j,{handleSearch:function(e){S(e.target.value)},search:y}),Object(u.jsx)(s,{handleNameChange:function(e){v(e.target.value)},addPerson:function(e){var n;if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===f.toLowerCase()}))){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new once"))){var c=t.find((function(e){return e.name===f})),r=Object(o.a)(Object(o.a)({},c),{},{number:x});(function(e){var n=e.person,t=e.id;return b.a.put("".concat(m,"/").concat(t),n).then((function(e){return e.data}))})({id:c.id,person:r}).then((function(e){a(t.map((function(n){return n.id!==c.id?n:e}))),v(""),g("");var n={message:"Updated ".concat(e.name),type:"info"};L(n),setTimeout((function(){L(null)}),5e3)})).catch((function(){var e={message:"Information of ".concat(c.name," has already been removed from server"),type:"error"};L(e),setTimeout((function(){L(null)}),5e3)}))}}else(n={name:f,number:x},b.a.post(m,n).then((function(e){return e.data}))).then((function(e){a(t.concat(e)),v(""),g("");var n={message:"Added ".concat(e.name),type:"success"};L(n),setTimeout((function(){L(null)}),5e3)}))},handlePhoneChange:function(e){g(e.target.value)},newName:f,newPhone:x}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(h,{persons:T,remove:function(e,n){window.confirm("Delete ".concat(n," ?"))&&function(e){return b.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))}(e).then((function(){a(t.filter((function(n){return n.id!==e})));var c={message:"Removed ".concat(n),type:"success"};L(c),setTimeout((function(){L(null)}),5e3)}))}})]})};r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cf18a97c.chunk.js.map