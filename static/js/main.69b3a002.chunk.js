(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{143:function(t,e,A){t.exports={container:"Charts_container__1NjgV"}},291:function(t,e,A){"use strict";A.r(e);var a=A(0),c=A.n(a),n=A(133),r=A.n(n),s=A(4),i=A(5),o=A(9),h=A(8),g=A(51),j=A(15),u=A(331),l=A(333),B=A(329),d=A(137),w=A.n(d),b=A(140),O=A.n(b),D=A(332),m=A(139),Q=A.n(m),Y=A(2),C=function(t){Object(o.a)(A,t);var e=Object(h.a)(A);function A(){var t;Object(s.a)(this,A);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={value:-1,pathMap:["../Cards","../Charts","../Compare"]},t}return Object(i.a)(A,[{key:"componentWillReceiveProps",value:function(t){var e=t.location.pathname,A=this.state.pathMap.indexOf(e);A>-1&&this.setState({value:A})}},{key:"render",value:function(){var t=this,e=this.state.pathMap;return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)(u.a,{sx:{width:["100%"]},children:[Object(Y.jsx)(D.a,{}),Object(Y.jsxs)(l.a,{showLabels:!0,value:this.state.value,onChange:function(e,A){return t.setState({value:A})},children:[Object(Y.jsx)(B.a,{label:"Daily",icon:Object(Y.jsx)(w.a,{}),component:g.b,to:e[0]}),Object(Y.jsx)(B.a,{label:"Charts",icon:Object(Y.jsx)(Q.a,{}),component:g.b,to:e[1]}),Object(Y.jsx)(B.a,{label:"Regions",icon:Object(Y.jsx)(O.a,{}),component:g.b,to:e[2]})]})]})})}}]),A}(a.Component),v=Object(j.e)(C),I=function(t){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h1",{children:"This is a temp Homepage"}),Object(Y.jsx)("p",{children:" will beautify soon ;("})]})},p=A(29),x=A.n(p),F=A(43),f=A(101),R=A.n(f),E="https://api.opencovid.ca/",L=function(){var t=Object(F.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.get(E);case 3:return e=t.sent,t.abrupt("return",e.data.summary[0]);case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),H=L,U=function(){var t=Object(F.a)(x.a.mark((function t(){var e,A;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.get("".concat(E,"/timeseries?loc=canada"));case 3:return e=t.sent,A=e.data,console.log(A),t.abrupt("return",A.active.map((function(t){return{cases:t.active_cases,date:t.date_active}})));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),K=A(148),M=A(143),Z=A.n(M),y=function(t){Object(o.a)(A,t);var e=Object(h.a)(A);function A(){var t;Object(s.a)(this,A);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={data:{}},t}return Object(i.a)(A,[{key:"componentDidMount",value:function(){var t=Object(F.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:e=t.sent,this.setState({data:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.data,e=t[0]?Object(Y.jsx)(K.a,{data:{labels:t.map((function(t){return t.date})),datasets:[{data:t.map((function(t){return t.cases})),label:"active cases",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return Object(Y.jsx)("div",{className:Z.a.container,children:e})}}]),A}(c.a.Component),k=y,P=A(326),N=A(335),V=A(328),z=A(336),G=A(38),J=A.n(G),S=A(77),W=A.n(S),q=A(78),T=A.n(q),X=A(334),_=function(t){Object(o.a)(A,t);var e=Object(h.a)(A);function A(){var t;Object(s.a)(this,A);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={data:{active_cases:-1,active_cases_change:-1,avaccine:-1,cases:-1,cumulative_avaccine:-1,cumulative_cases:-1,cumulative_cvaccine:-1,cumulative_deaths:-1,cumulative_dvaccine:-1,cumulative_recovered:-1,cumulative_testing:-1,cvaccine:-1,date:"15-10-2021",deaths:-1,dvaccine:-0,province:"Canada",recovered:-1,testing:-1,testing_info:"NULL"}},t}return Object(i.a)(A,[{key:"componentDidMount",value:function(){var t=Object(F.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:e=t.sent,console.log(this.state),this.setState({data:e}),console.log(this.state);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.data;return console.log(t),Object(Y.jsx)("div",{className:J.a.container,children:Object(Y.jsxs)(P.a,{container:!0,spacing:3,justify:"center",children:[Object(Y.jsxs)(P.a,{item:!0,component:N.a,xs:12,md:3,className:T()(J.a.card,J.a.infect),children:[Object(Y.jsx)(X.a,{style:{height:100,width:"auto"},component:"img",height:"100",image:"data:image/png;base64,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"}),Object(Y.jsxs)(V.a,{children:[Object(Y.jsx)(z.a,{color:"textSecondary",gutterBottom:!0,children:"Infetion"}),Object(Y.jsx)(z.a,{variant:"h5",children:Object(Y.jsx)(W.a,{start:0,end:t.active_cases,duration:1})}),Object(Y.jsx)(z.a,{variant:"body2",children:"Number of active cases"})]})]}),Object(Y.jsxs)(P.a,{item:!0,component:N.a,xs:12,md:3,className:T()(J.a.card,J.a.death),children:[Object(Y.jsx)(X.a,{style:{height:100,width:"auto"},component:"img",height:"100",image:"data:image/png;base64,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"}),Object(Y.jsxs)(V.a,{children:[Object(Y.jsx)(z.a,{color:"textSecondary",gutterBottom:!0,children:"Death"}),Object(Y.jsx)(z.a,{variant:"h5",children:Object(Y.jsx)(W.a,{start:0,end:t.deaths,duration:1})}),Object(Y.jsx)(z.a,{variant:"body2",children:"Number of death"})]})]}),Object(Y.jsxs)(P.a,{item:!0,component:N.a,xs:12,md:3,className:T()(J.a.card,J.a.recover),children:[" ",Object(Y.jsx)(X.a,{style:{height:100,width:"auto"},component:"img",height:"100",image:"data:image/png;base64,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"}),Object(Y.jsxs)(V.a,{children:[Object(Y.jsx)(z.a,{color:"textSecondary",gutterBottom:!0,children:"Recovery"}),Object(Y.jsx)(z.a,{variant:"h5",children:Object(Y.jsx)(W.a,{start:0,end:this.state.data.recovered,duration:1})}),Object(Y.jsx)(z.a,{variant:"body2",children:"Number of recoveries"})]})]})]})})}}]),A}(c.a.Component),$=_,tt=function(t){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h1",{children:"next to implement"}),Object(Y.jsx)("p",{children:" This page will compare stat between different province"}),Object(Y.jsx)("p",{children:" in canada Good luck Alberta "}),Object(Y.jsx)(z.a,{onPress:function(){return t.navigate("Home")},children:"Region"})]})},et=function(t){Object(o.a)(A,t);var e=Object(h.a)(A);function A(){return Object(s.a)(this,A),e.apply(this,arguments)}return Object(i.a)(A,[{key:"render",value:function(){return Object(Y.jsx)(g.a,{children:Object(Y.jsxs)("div",{className:"app",children:[Object(Y.jsx)(j.a,{exact:!0,path:"/covidstat",component:I}),Object(Y.jsx)(j.a,{path:"/Cards",component:$}),Object(Y.jsx)(j.a,{path:"/Charts",component:k}),Object(Y.jsx)(j.a,{path:"/Compare",component:tt}),Object(Y.jsx)(v,{})]})})}}]),A}(a.Component),At=et;r.a.render(Object(Y.jsx)(At,{}),document.getElementById("root"))},38:function(t,e,A){t.exports={container:"Cards_container__2bRf2",card:"Cards_card__3TjMy",infect:"Cards_infect__2EMO_",death:"Cards_death__3N0ko",recover:"Cards_recover__Uuh4Q"}}},[[291,1,2]]]);
//# sourceMappingURL=main.69b3a002.chunk.js.map