(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),s=(a(22),a(1)),d=a(2);function l(){var e=Object(s.a)(["\n    padding: 10px;\n    border: 0.1px solid gray;\n    width: auto;\n"]);return l=function(){return e},e}d.a.td(l());var c=function(e){var t=e.data;e.type;return r.a.createElement(r.a.Fragment,null,Object.keys(t).map((function(e,t){})))},h=a(9),u=function(e){var t=e.hasChild,a=e.clickHandler,n=e.defaultExpansionState;return t?r.a.createElement(P,{align:"center",onClick:a},r.a.createElement(b,null,n?r.a.createElement(r.a.Fragment,null,"\u2206"):r.a.createElement(r.a.Fragment,null,"\u2207"))):r.a.createElement(P,null)},f=function(e){var t=e.clickHandler;return r.a.createElement(P,{align:"center",onClick:t},r.a.createElement(b,null,"\u2297"))},I=a(4);function v(){var e=Object(s.a)(["\n    cursor: pointer;\n"]);return v=function(){return e},e}function k(){var e=Object(s.a)(["\n    &:hover{\n        background-color:#fff; \n    }\n"]);return k=function(){return e},e}function D(){var e=Object(s.a)(["\n    border: 0.1px solid gray;\n    &:hover{\n        background-color:#e8f6db; \n    }\n"]);return D=function(){return e},e}function m(){var e=Object(s.a)(["\n    text-align:",";\n    border: 0.1px solid gray;\n    width: auto;\n    padding: 10px;\n"]);return m=function(){return e},e}var P=d.a.td(m(),(function(e){return e.align})),E=d.a.tr(D()),b=(Object(d.a)(E)(k()),d.a.div(v())),p=function(e){var t=e.data,a=Object(I.b)(),i=Object(n.useState)(!1),o=Object(h.a)(i,2),s=o[0],d=o[1],l=Object(n.useState)(0),v=Object(h.a)(l,2),k=v[0],D=v[1];return r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e.data.temp_ref},r.a.createElement(E,null,r.a.createElement(u,{defaultExpansionState:!(!s||k!==e.data.temp_ref),clickHandler:function(){return t=e.data.temp_ref,d(t!==k||!s),void D(t);var t},hasChild:Object.keys(e.kids).length>0}),r.a.createElement(c,{data:e.data}),r.a.createElement(f,{clickHandler:function(){return t=e.data.temp_ref,void a({type:"remove",id:t});var t}})),function(e,t){return Object.keys(e).length>0&&Object.keys(e).map((function(e){}))}(e.kids,e.data.temp_ref))})))};function g(){var e=Object(s.a)(["\n    padding-left: 10px;\n    margin-bottom: 0px;\n"]);return g=function(){return e},e}function y(){var e=Object(s.a)(["\n    border: 0.1px solid gray;\n    width: auto;\n    padding: 10px;\n    background: gainsboro;\n"]);return y=function(){return e},e}function _(){var e=Object(s.a)(["\n    border: 0.1px solid gray;\n    width: auto;\n    padding: 10px;\n"]);return _=function(){return e},e}function w(){var e=Object(s.a)(["\n    width: 100%;\n    padding: 10px;\n"]);return w=function(){return e},e}var T=d.a.table.attrs((function(){return{cellSpacing:"0"}}))(w()),O=d.a.tr(_()),R=d.a.th(y()),S=d.a.h3(g()),F=function(e){var t=e.data;if(0===t.length)return null;var a=t[0];return r.a.createElement("thead",null,r.a.createElement(O,null,r.a.createElement(R,null),r.a.createElement(c,{type:"header",data:a.data}),r.a.createElement(R,null)))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"No Data :("),r.a.createElement("h5",null,"You must have deleted everything, refresh the page!"))},C=function(e){var t=e.queryData,a=e.title;return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement(j,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,a||"Main Table"),r.a.createElement(T,null,r.a.createElement(F,{data:t}),r.a.createElement(p,{data:t}))))},q=function(){var e=Object(I.c)((function(e){return e}));return r.a.createElement("section",{id:"main-table"},r.a.createElement(C,{title:"Main Table",queryData:e.data}))},J=a(7),A=a(10),N=[{data:{"Identification number":"34",Name:"Joqmo",Gender:"female",Risk:"BITES","Hair length":"6.2000000000",IQ:"98","Admission date":"Mon Dec 13 00:00:00 CET 1993","Last breakdown":"Wed Dec 24 07:14:50 CET 2014","Yearly fee":"67035","Knows the Joker?":"true"},kids:{has_relatives:{records:[{data:{"Relative ID":"1007","Patient ID":"34","Is alive?":"true","Frequency of visits":"29"},kids:{has_phone:{records:[{data:{"Phone ID":"2008","ID of the relative":"1007",Phone:"+(179)-982-0570"},kids:{}}]}}}]}}},{data:{"Identification number":"35",Name:"Jason",Gender:"m",Risk:"BITES","Hair length":"1.6000000000",IQ:"91","Admission date":"Mon Feb 17 00:00:00 CET 1997","Last breakdown":"Wed Dec 03 03:09:55 CET 2014","Yearly fee":"67932","Knows the Joker?":"false"},kids:{}},{data:{"Identification number":"38",Name:"Julliane",Gender:"m",Risk:"EVIL_EYE","Hair length":"1.0000000000",IQ:"100","Admission date":"Wed Aug 05 00:00:00 CEST 1992","Last breakdown":"Wed Oct 29 12:59:39 CET 2014","Yearly fee":"57167","Knows the Joker?":"true"},kids:{has_relatives:{records:[{data:{"Relative ID":"1043","Patient ID":"38","Is alive?":"false","Frequency of visits":"24"},kids:{has_phone:{records:[{data:{"Phone ID":"479","ID of the relative":"1043",Phone:"+(123)-408--5901"},kids:{has_relatives:{records:[{data:{"Relative ID":"1043","Patient ID":"38","Is alive?":"false","Frequency of visits":"24"},kids:{has_phone:{records:[{data:{"Phone ID":"479","ID of the relative":"1043",Phone:"+(123)-408--5901"},kids:{}},{data:{"Phone ID":"2470","ID of the relative":"1043",Phone:"546 765-7237"},kids:{}}]}}},{data:{"Relative ID":"1475","Patient ID":"38","Is alive?":"true","Frequency of visits":"38"},kids:{has_phone:{records:[{data:{"Phone ID":"2751","ID of the relative":"1475",Phone:"(416) 307-5637"},kids:{}},{data:{"Phone ID":"3148","ID of the relative":"1475",Phone:"943 1104931"},kids:{}}]}}},{data:{"Relative ID":"1594","Patient ID":"38","Is alive?":"true","Frequency of visits":"25"},kids:{has_phone:{records:[{data:{"Phone ID":"2364","ID of the relative":"1594",Phone:"+(832) 472-8423"},kids:{}},{data:{"Phone ID":"2759","ID of the relative":"1594",Phone:"+(832) 5336603"},kids:{}}]}}}]}}},{data:{"Phone ID":"2470","ID of the relative":"1043",Phone:"546 765-7237"},kids:{}}]}}},{data:{"Relative ID":"1475","Patient ID":"38","Is alive?":"true","Frequency of visits":"38"},kids:{has_phone:{records:[{data:{"Phone ID":"2751","ID of the relative":"1475",Phone:"(416) 307-5637"},kids:{}},{data:{"Phone ID":"3148","ID of the relative":"1475",Phone:"943 1104931"},kids:{}}]}}},{data:{"Relative ID":"1594","Patient ID":"38","Is alive?":"true","Frequency of visits":"25"},kids:{has_phone:{records:[{data:{"Phone ID":"2364","ID of the relative":"1594",Phone:"+(832) 472-8423"},kids:{}},{data:{"Phone ID":"2759","ID of the relative":"1594",Phone:"+(832) 5336603"},kids:{}}]}}}]}}},{data:{"Identification number":"52",Name:"Alice",Gender:"F",Risk:"ATTACKS_NURSES","Hair length":"0.8000000000",IQ:"107","Admission date":"Thu May 31 00:00:00 CEST 2001","Last breakdown":"Sun Dec 21 11:57:06 CET 2014","Yearly fee":"62534","Knows the Joker?":"true"},kids:{has_relatives:{records:[{data:{"Relative ID":"1683","Patient ID":"52","Is alive?":"true","Frequency of visits":"28"},kids:{has_phone:{records:[{data:{"Phone ID":"1404","ID of the relative":"1683",Phone:"+546-382--6016"},kids:{}},{data:{"Phone ID":"1415","ID of the relative":"1683",Phone:"627-097--6349"},kids:{}},{data:{"Phone ID":"2505","ID of the relative":"1683",Phone:"789-902-8231"},kids:{}},{data:{"Phone ID":"3479","ID of the relative":"1683",Phone:"+943-234-5871"},kids:{}}]}}}]}}},{data:{"Identification number":"86",Name:"Jason",Gender:"M",Risk:"BITES","Hair length":"3.0000000000",IQ:"104","Admission date":"Mon Jan 08 00:00:00 CET 2001","Last breakdown":"Wed Oct 15 12:21:59 CEST 2014","Yearly fee":"63052","Knows the Joker?":"true"},kids:{has_relatives:{records:[{data:{"Relative ID":"116","Patient ID":"86","Is alive?":"true","Frequency of visits":"35"},kids:{has_phone:{records:[{data:{"Phone ID":"928","ID of the relative":"116",Phone:"+943 932-8626"},kids:{}},{data:{"Phone ID":"2191","ID of the relative":"116",Phone:"+(416)-960--6030"},kids:{}},{data:{"Phone ID":"2820","ID of the relative":"116",Phone:"(416) 747-7856"},kids:{}}]}}}]}}},{data:{"Identification number":"94",Name:"August",Gender:"male",Risk:"qwutdf","Hair length":"0.3000000000",IQ:"96","Admission date":"Fri Jan 03 00:00:00 CET 1997","Last breakdown":"Fri Sep 19 01:26:31 CEST 2014","Yearly fee":"46901","Knows the Joker?":"true"},kids:{has_relatives:{records:[{data:{"Relative ID":"758","Patient ID":"94","Is alive?":"true","Frequency of visits":"34"},kids:{has_phone:{records:[{data:{"Phone ID":"2322","ID of the relative":"758",Phone:"(416)-866-3803"},kids:{}}]}}},{data:{"Relative ID":"1405","Patient ID":"94","Is alive?":"true","Frequency of visits":"34"},kids:{has_phone:{records:[{data:{"Phone ID":"3270","ID of the relative":"1405",Phone:"546-4646769"},kids:{}}]}}}]}}},{data:{"Identification number":"99",Name:"Carl",Gender:"M",Risk:"EVIL_EYE","Hair length":"1.5000000000",IQ:"96","Admission date":"Sat Sep 02 00:00:00 CEST 1989","Last breakdown":"Wed Nov 12 02:33:57 CET 2014","Yearly fee":"57992","Knows the Joker?":"false"},kids:{has_relatives:{records:[{data:{"Relative ID":"324","Patient ID":"99","Is alive?":"true","Frequency of visits":""},kids:{has_phone:{records:[{data:{"Phone ID":"1821","ID of the relative":"324",Phone:"+(832) 263-3093"},kids:{}}]}}}]}}},{data:{"Identification number":"108",Name:"Helmut",Gender:"m",Risk:"EVIL_EYE","Hair length":"3.0000000000",IQ:"106","Admission date":"Sun Jan 29 00:00:00 CET 1995","Last breakdown":"Thu Nov 27 12:46:16 CET 2014","Yearly fee":"55898","Knows the Joker?":"true"},kids:{has_relatives:{records:[{data:{"Relative ID":"454","Patient ID":"108","Is alive?":"true","Frequency of visits":"27"},kids:{has_phone:{records:[{data:{"Phone ID":"946","ID of the relative":"454",Phone:"546-771-7091"},kids:{}},{data:{"Phone ID":"2945","ID of the relative":"454",Phone:"(416) 639-2176"},kids:{}}]}}},{data:{"Relative ID":"1410","Patient ID":"108","Is alive?":"false","Frequency of visits":"30"},kids:{has_phone:{records:[{data:{"Phone ID":"676","ID of the relative":"1410",Phone:"627-144-0383"},kids:{}},{data:{"Phone ID":"2177","ID of the relative":"1410",Phone:"+627-568-9247"},kids:{}}]}}}]}}},{data:{"Identification number":"109",Name:"Jones",Gender:"",Risk:"NULL","Hair length":"2.5000000000",IQ:"101","Admission date":"Sun Apr 02 00:00:00 CEST 1989","Last breakdown":"Sun Nov 23 09:50:35 CET 2014","Yearly fee":"56742","Knows the Joker?":""},kids:{has_relatives:{records:[{data:{"Relative ID":"24","Patient ID":"109","Is alive?":"true","Frequency of visits":"36"},kids:{has_phone:{records:[{data:{"Phone ID":"213","ID of the relative":"24",Phone:"+627-590-0044"},kids:{}},{data:{"Phone ID":"942","ID of the relative":"24",Phone:"(832)-274--5472"},kids:{}},{data:{"Phone ID":"1338","ID of the relative":"24",Phone:"(416) 836-7224"},kids:{}}]}}},{data:{"Relative ID":"1535","Patient ID":"109","Is alive?":"true","Frequency of visits":"25"},kids:{has_phone:{records:[{data:{"Phone ID":"3045","ID of the relative":"1535",Phone:"+627-709-7332"},kids:{}},{data:{"Phone ID":"3103","ID of the relative":"1535",Phone:"+627-234-9905"},kids:{}}]}}}]}}},{data:{"Identification number":"120",Name:"Jakqe",Gender:"M",Risk:"BITES","Hair length":"1.3000000000",IQ:"104","Admission date":"Mon Oct 09 00:00:00 CEST 2000","Last breakdown":"Wed Oct 22 11:52:08 CEST 2014","Yearly fee":"59076","Knows the Joker?":"false"},kids:{has_relatives:{records:[{data:{"Relative ID":"1128","Patient ID":"120","Is alive?":"true","Frequency of visits":"39"},kids:{}},{data:{"Relative ID":"1320","Patient ID":"120","Is alive?":"true","Frequency of visits":"38"},kids:{has_phone:{records:[{data:{"Phone ID":"1019","ID of the relative":"1320",Phone:"+(832)-374-2058"},kids:{}},{data:{"Phone ID":"3844","ID of the relative":"1320",Phone:"(179)-827--4556"},kids:{}}]}}}]}}},{data:{"Identification number":"124",Name:"June",Gender:"M",Risk:"ATTACKS_NURSES","Hair length":"2.2000000000",IQ:"100","Admission date":"Mon Apr 03 00:00:00 CEST 1989","Last breakdown":"Thu Dec 25 04:43:17 CET 2014","Yearly fee":"57032","Knows the Joker?":"true"},kids:{has_relatives:{records:[{data:{"Relative ID":"1499","Patient ID":"124","Is alive?":"","Frequency of visits":"33"},kids:{has_phone:{records:[{data:{"Phone ID":"210","ID of the relative":"1499",Phone:"+(179) 0415701"},kids:{}},{data:{"Phone ID":"909","ID of the relative":"1499",Phone:"+789-830--2279"},kids:{}},{data:{"Phone ID":"2610","ID of the relative":"1499",Phone:"+(123) 602--0766"},kids:{}}]}}}]}}}],x=function(e,t){return function e(t,a){var n=-1;t.forEach((function(t,r){a===t.data.temp_ref&&(t.kids={},n=r),Object.keys(t.kids).length>0&&Object.keys(t.kids).forEach((function(n){e(t.kids[n].records,a)}))})),-1!==n&&t.splice(n,1)}(e,t),function(e){(function e(t){t.forEach((function(t){Object.keys(t.kids).length>0&&Object.keys(t.kids).forEach((function(a){0===t.kids[a].records.length?t.kids={}:e(t.kids[a].records)}))}))})(e)}(e),e},H={data:function(e){var t=1;return function e(a){a.forEach((function(a){a.data.temp_ref=t++,Object.keys(a.kids).length>0&&Object.keys(a.kids).forEach((function(t){e(a.kids[t].records)}))}))}(e),console.log(e),e}(N)};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"remove":return Object(A.a)(Object(A.a)({},e),{},{data:x(N,t.id)});default:return e}},Y=(a(30),Object(J.b)(L)),K=function(){return r.a.createElement(I.a,{store:Y},r.a.createElement("div",{className:"App"},r.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5b5690b5.chunk.js.map