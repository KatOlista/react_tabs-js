(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),r=n.n(s),b=n(0),o=function(t,e){return t.find((function(t){var n=t.id;return e===n}))},l=function(t){var e=t.tabs,n=t.onTabSelected,c=t.selectedTabId,a=e.some((function(t){return t.id===c}))?c:e[0].id;return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id===a;return Object(b.jsx)("li",{className:r()({"is-active":e}),"data-cy":"Tab",onClick:function(){a!==t.id&&n(t)},children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:o(e,a).content})]})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(d.useState)(u[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1],a=function(){return u.find((function(t){var e=t.id;return n===e}))};return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a().title)}),Object(b.jsx)(l,{"data-cy":"tab-content",tabs:u,onTabSelected:function(t){t&&t.id!==n&&(c(t.id),a())},selectedTabId:n||u[0].id})]})};a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f1925c6f.chunk.js.map