(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),r=n(25),o=n.n(r),s=(n(31),n(23)),u=n(22),a=n(43),b=n(44),j=n(40),O=n(37),p=n(26),f=n(38),l=n(39),d=n(41),h=n(42),x=(n(32),n(5)),v=new u.a,g=v.pipe(Object(O.a)((function(t){return"start"===t}))),m=v.pipe(Object(O.a)((function(t){return"stop"===t}))),k=Object(a.a)(200).pipe(Object(p.a)((function(t){if(t>59)throw t;return t+1})),Object(f.a)((function(t){return t.pipe(Object(l.a)((function(t){return console.log("one minute!")})))}))),w=Object(a.a)(12e3).pipe(Object(l.a)((function(t){return console.log(t)})),Object(p.a)((function(t){if(t>59)throw t;return t+1})),Object(f.a)((function(t){return t.pipe(Object(l.a)((function(t){return console.log("one hour!")})))}))),S=Object(a.a)(72e4).pipe(Object(p.a)((function(t){if(t>59)throw t;return t+1})),Object(f.a)((function(t){return t.pipe(Object(l.a)((function(t){return console.log("24 hours!")})))}))),C=Object(b.a)(k,Object(j.a)(0)).pipe(Object(d.a)((function(){return g}))),T=(Object(b.a)(C.pipe(Object(h.a)(m)),Object(j.a)(0)),i.a.memo((function(){var t=i.a.useState(0),e=Object(s.a)(t,2),n=e[0],c=e[1],r=i.a.useState(0),o=Object(s.a)(r,2),u=o[0],a=o[1],b=i.a.useState(0),j=Object(s.a)(b,2),O=j[0],p=j[1];return i.a.useEffect((function(){k.subscribe(c),w.subscribe(a),S.subscribe(p)}),[]),Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsxs)("div",{className:"clock",children:[Object(x.jsxs)("div",{children:[" ",O," h "]}),Object(x.jsx)("div",{children:" : "}),Object(x.jsxs)("div",{children:[" ",u," m "]}),Object(x.jsx)("div",{children:" : "}),Object(x.jsxs)("div",{children:[" ",n," s "]})]}),Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)("button",{onClick:function(){return v.next("start")},children:" START"}),Object(x.jsx)("button",{onClick:function(){return v.next("stop")},children:"STOP"})]})]})}))),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),F()}},[[34,1,2]]]);
//# sourceMappingURL=main.757d4712.chunk.js.map