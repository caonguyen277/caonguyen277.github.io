(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(14),i=n.n(a),s=(n(22),n(5)),o=n.n(s),l=n(15),u=n(3),j=n(16),b=n.n(j),d=n(45),h=(n(42),n(0)),f=function(e){return e.ingredients.map((function(e){return Object(h.jsxs)("ul",{className:"ingredient-list",children:[Object(h.jsx)("li",{className:"ingredient-text",children:e.text}),Object(h.jsxs)("li",{className:"ingredient-weight",children:["Weight -",e.weight]})]},Object(d.a)())}))},p=function(e){var t=e.recipe,n=Object(c.useState)(!1),r=Object(u.a)(n,2),a=r[0],i=r[1],s=t.recipe,o=s.label,l=s.image,j=s.url,b=s.ingredients;return Object(h.jsxs)("div",{className:"recipe",children:[Object(h.jsx)("h2",{children:o}),Object(h.jsx)("img",{src:l,alt:o}),Object(h.jsx)("a",{href:j,target:"_bank",rel:"noopener noreferrer",children:"URL"}),Object(h.jsx)("button",{onClick:function(){return i(!a)},children:"Ingredients"}),a&&Object(h.jsx)(f,{ingredients:b})]})},O=function(e){var t=e.alert;return Object(h.jsx)("div",{className:"alert",children:Object(h.jsx)("h3",{children:t})})};var x=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(u.a)(a,2),s=i[0],j=i[1],f=Object(c.useState)(""),x=Object(u.a)(f,2),m=x[0],g=x[1],v="https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("7875ea50","&app_key=").concat("dd772e53efa1f8d0f7615e4f8e28472e","&from=0&to=10&calories=591-722&health=alcohol-free"),k=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n){e.next=12;break}return e.next=3,b.a.get(v);case 3:if((t=e.sent).data.more){e.next=6;break}return e.abrupt("return",g("No food with such name"));case 6:j(t.data.hits),console.log(t),g(""),r(""),e.next=13;break;case 12:g("Please fill the form");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=s.map((function(e){return Object(h.jsx)(p,{recipe:e},Object(d.a)())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{onClick:k,children:"Food Searching app"}),Object(h.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),k()},children:[""!==m&&Object(h.jsx)(O,{alert:m}),Object(h.jsx)("input",{type:"text",placeholder:"Search Food",autoComplete:"off",onChange:function(e){r(e.target.value)}}),Object(h.jsx)("input",{type:"submit",value:"search"})]}),Object(h.jsx)("div",{className:"recipes",children:N})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.bd46acf1.chunk.js.map