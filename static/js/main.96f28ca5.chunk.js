(this.webpackJsonpmosdil=this.webpackJsonpmosdil||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports={NavLink:"NavLinks_NavLink__13Fbh",Link:"NavLinks_Link__1qPnP"}},,function(e,a,t){e.exports={CovidData:"CovidData_CovidData__1Uy2t",Head:"CovidData_Head__13h_P",Cases:"CovidData_Cases__gYMts"}},,,,function(e,a,t){e.exports={Contact:"Contact_Contact__2TnJR",Logo:"Contact_Logo__3Lkrd"}},,,,function(e,a,t){e.exports={App:"App_App__WKbEw"}},,function(e,a,t){e.exports={Header:"Header_Header__c0GQ3"}},function(e,a,t){e.exports={Loader:"Spinner_Loader__1baaX",load7:"Spinner_load7__3MpjL"}},function(e,a,t){e.exports={CovidDatas:"CovidDatas_CovidDatas__1jwun"}},function(e,a,t){e.exports={Footer:"Footer_Footer__2_oma"}},function(e,a,t){e.exports={Keshilla:"Keshilla_Keshilla__3qGZx",col:"Keshilla_col__dHUxW"}},function(e,a,t){e.exports={News:"News_News__3YntL"}},,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),s=t.n(i),o=(t(37),t(8)),l=t(9),c=t(11),m=t(10),u=t(1),d=t(23),h=t.n(d),f=t(13),p=t.n(f),v=function(e){var a=Object(u.e)();return r.a.createElement("div",{className:p.a.NavLink},r.a.createElement("div",null,r.a.createElement("p",{className:p.a.Link,onClick:function(){a.push("/home")}},"Home")),r.a.createElement("div",null,r.a.createElement("p",{className:p.a.Link,onClick:function(){a.push("/keshilla")}},"Keshilla")),r.a.createElement("div",null,r.a.createElement("p",{className:p.a.Link,onClick:function(){a.push("/informata")}},"Informata")))},E=t(25),k=t.n(E),j=function(e){return r.a.createElement("div",{className:k.a.Header},r.a.createElement(v,null))},b=t(6),_=t(31),N=t(15),g=t.n(N),C=t(26),L=t.n(C),y=function(){return r.a.createElement("div",{className:L.a.Loader})},S=function(e){var a={backgroundColor:""};switch(e.title){case"GJITHSEJ RASTE":a={backgroundColor:"#5b9eeb"};break;case"TE SHERUAR":a={backgroundColor:"#b3dec1"};break;case"ME FATALITET":a={backgroundColor:"#808080"};break;case"AKTIVE":a={backgroundColor:"#f5ad42"};break;default:a={backgroundColor:"#925beb"}}return r.a.createElement("div",{className:g.a.CovidData},r.a.createElement("p",{className:g.a.Head,style:a},e.title),r.a.createElement("i",{className:e.icon}),e.loading?r.a.createElement(y,null):r.a.createElement("p",{className:g.a.Cases}," ",e.casesNumber," "))},x=t(27),A=t.n(x),O=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={covidDatas:[{icon:"fas fa-user-plus",cases:0,title:"GJITHSEJ RASTE"},{icon:"fas fa-heart",cases:0,title:"TE SHERUAR"},{icon:"fas fa-heart-broken",cases:0,title:"ME FATALITET"},{icon:"fas fa-ambulance",cases:0,title:"AKTIVE"}],isLoading:!0},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.apify.com/v2/key-value-stores/C10heVVVE8yBd1YvF/records/LATEST?disableRedirect=true").then((function(e){return e.json()})).then((function(a){var t=Object(_.a)(e.state.covidDatas),n=Object(b.a)(Object(b.a)({},t[0]),{},{cases:a.infected}),r=Object(b.a)(Object(b.a)({},t[1]),{},{cases:a.recovered}),i=Object(b.a)(Object(b.a)({},t[2]),{},{cases:a.deceased}),s=n.cases-r.cases,o=Object(b.a)(Object(b.a)({},t[3]),{},{cases:s});t[0]=n,t[1]=r,t[2]=i,t[3]=o,e.setState({covidDatas:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this,a=this.state.covidDatas.map((function(a){return r.a.createElement(S,{key:a.title,icon:a.icon,casesNumber:a.cases,title:a.title,loading:e.state.isLoading})}));return r.a.createElement("div",{className:A.a.CovidDatas},a)}}]),t}(r.a.Component),w=t(28),R=t.n(w),T=t(19),D=t.n(T),H=function(e){return r.a.createElement("div",{className:D.a.Contact},r.a.createElement("div",{className:D.a.Logo},r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("a",{href:"https://github.com/lirimimeri"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.facebook.com/lirimimeri1"},r.a.createElement("i",{className:"fab fa-facebook"}))))},K=function(){return r.a.createElement("div",{className:R.a.Footer},r.a.createElement(H,null),r.a.createElement("p",null,"\xa9 2020 Copyrights Reserved"))},M=t(29),z=t.n(M),F=function(){return r.a.createElement("div",{className:z.a.Keshilla},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-hands-wash fa-3x"}),r.a.createElement("h3",null,"1. Pastroni duart shpesh me uj\xeb dhe sapun ose perdorni ndonj\xeb dezinfektues me baz\xeb t\xeb lart\xeb t\xeb alkoolit.")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-head-side-mask fa-3x"}),r.a.createElement("h3",null,"2. Mos dilni pa mask\xeb dhe dor\xebza,shmangni prekjet e fytyr\xebs me dor\xeb.")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-house-user fa-3x"}),r.a.createElement("h3",null,"3. Shmangni daljet e panevojshme! T\xeb gjith\xeb po q\xebndrojm\xeb n\xeb sht\xebpi, edhe ti #rriNshpi !")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-people-arrows fa-3x"}),r.a.createElement("h3",null,"4. Mbani distanc\xebn e nevojshme nga nj\xebri-tjetri! ")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-handshake-slash fa-3x"}),r.a.createElement("h3",null,"5. Evitoni dor\xeb-shtr\xebngimet! Provoni p\xebrsh\xebndetjet tjera, \xebsht\xeb arg\xebtuese!")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-head-side-cough-slash fa-3x"}),r.a.createElement("h3",null,"6. Kujdes kur t\xebshtini ose kolliteni, mbulojeni gojen me m\xebng\xeb ose pallom\xeb.")))},I=t(30),q=t.n(I),J=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:q.a.News},r.a.createElement("div",null,r.a.createElement("h2",null,"Cka jan\xeb Coronaviruset"),r.a.createElement("p",null,"Koronaviruset jan\xeb familja e viruseve t\xeb cilat shkaktojn\xeb s\xebmundje nga nj\xeb rruf\xeb e leht\xeb deri n\xeb s\xebmundje m\xeb t\xeb r\xebnda si Sindroma Respiratore e Lindjes s\xeb Mesme (Middle East Respiratory Syndrome MERS) dhe Sindroma e R\xebnd\xeb Respiratore Akute (Severe Acute Respiratory Syndrome SARS).")),r.a.createElement("div",null,r.a.createElement("h2",null,"Cilat jan\xeb simptomat e nj\xeb personi t\xeb infektuar me koronavirus?"),r.a.createElement("p",null,"Simptomat varen nga virusi, por shenjat e zakonshme p\xebrfshijn\xeb simptomat e aparatit t\xeb frym\xebmarrjes: ethe, koll\xeb, gul\xe7im dhe v\xebshtir\xebsi n\xeb frym\xebmarrje. N\xeb raste m\xeb t\xeb r\xebnda, infeksioni mund t\xeb shkaktoj\xeb pneumoni, sindrom\xeb t\xeb r\xebnd\xeb respiratore akute, insuficienc\xeb t\xeb veshkave, madje edhe vdekje. Kur nj\xeb s\xebmundje \xebsht\xeb e re, nuk ka vaksin\xeb p\xebr t\xeb, dhe mund t\xeb duhen disa vite derisa t\xeb prodhohet nj\xeb vaksin\xeb e re.")),r.a.createElement("div",null,r.a.createElement("h2",null,"A mund t\xeb infektohen njer\xebzit me koronavirusin e ri ku si burim infektimi jan\xeb kafsh\xebt?"),r.a.createElement("p",null,"Hetimet e holl\xebsishme n\xeb Kin\xeb n\xeb vitin 2002 kan\xeb zbuluar se SARS-CoV u transmetua nga macet te njer\xebzit, kurse n\xeb Arabin\xeb Saudite n\xeb vitin 2012 u zbulua MERS-CoV nga devet\xeb te njer\xebzit. Njihen disa koronaviruse t\xeb cil\xebt po qarkullojn\xeb n\xeb kafsh\xeb, por q\xeb akoma nuk kan\xeb infektuar njer\xebzit. Nd\xebrkoh\xeb q\xeb survejanca n\xeb t\xeb gjith\xeb bot\xebn p\xebrmir\xebsohet, ka t\xeb ngjar\xeb q\xeb t\xeb identifikohen m\xeb shum\xeb koronaviruse.")))}}]),t}(n.Component),V=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.App},r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(u.a,{path:"/",exact:!0,component:F}),r.a.createElement(u.a,{path:"/home",exact:!0,component:F}),r.a.createElement(u.a,{path:"/keshilla",exact:!0,component:F}),r.a.createElement(u.a,{path:"/informata",exact:!0,component:J}),r.a.createElement(K,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=t(14);s.a.render(r.a.createElement(P.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.96f28ca5.chunk.js.map