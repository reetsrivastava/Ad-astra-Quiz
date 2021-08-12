(this["webpackJsonpquiz-app-dev"]=this["webpackJsonpquiz-app-dev"]||[]).push([[0],{64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(10),i=n.n(a),r=(n(64),n(28)),l=n.n(r),o=n(36),u=n(11),j=(n(66),n(67),n(111)),d=n(122),b=n(124),m=n(118),h=n(125),O=n(2),f=function(e){var t=e.questions,n=e.category,s=e.setSendRequest,c=e.setCategory,a=e.setQuestions,i=e.level,r=e.setLevel,l=e.name,o=e.setName;return Object(O.jsxs)("div",{className:"input-container",children:[Object(O.jsx)("h1",{children:"Quiz Settings"}),Object(O.jsxs)("form",{className:"question-form",action:"",onSubmit:function(e){e.preventDefault(),s(!0)},children:[Object(O.jsx)(j.a,{className:"form-control",variant:"outlined",fullWidth:!0,children:Object(O.jsx)(d.a,{className:"form-text-field",required:!0,id:"outlined-basic",label:"Your Name",variant:"outlined",value:l,onChange:function(e){return o(e.target.value)}})}),Object(O.jsx)("div",{className:"questions-dropdown",children:Object(O.jsxs)(j.a,{className:"form-control",variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(b.a,{"aria-label":"category-label",className:"form-label",id:"demo-simple-select-outlined-label-category",children:"Category"}),Object(O.jsxs)(m.a,{labelId:"demo-simple-select-outlined-label-category",id:"demo-simple-select-outlined-category",value:n,defaultValue:n,onChange:function(e){return c(Number(e.target.value))},required:!0,label:"Category",children:[Object(O.jsx)(h.a,{className:"form-menu-item",value:9,children:"General Knowledge"}),Object(O.jsx)(h.a,{className:"form-menu-item",value:11,children:"Movies"}),Object(O.jsx)(h.a,{className:"form-menu-item",value:17,children:"Science"}),Object(O.jsx)(h.a,{className:"form-menu-item",value:18,children:"Computers"}),Object(O.jsx)(h.a,{className:"form-menu-item",value:19,children:"Mathematics"}),Object(O.jsx)(h.a,{className:"form-menu-item",value:21,children:"Sports"})]})]})}),Object(O.jsx)("div",{className:"questions-dropdown",children:Object(O.jsxs)(j.a,{className:"form-control",variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(b.a,{className:"form-label",id:"demo-simple-select-outlined-label-questions",children:"Questions"}),Object(O.jsxs)(m.a,{labelId:"demo-simple-select-outlined-label-questions",id:"demo-simple-select-outlined-questions",value:t,onChange:function(e){return a(Number(e.target.value))},required:!0,label:"Questions",children:[Object(O.jsx)(h.a,{value:5,children:"Five"}),Object(O.jsx)(h.a,{value:10,children:"Ten"}),Object(O.jsx)(h.a,{value:15,children:"Fifteen"})]})]})}),Object(O.jsx)("div",{className:"questions-dropdown",children:Object(O.jsxs)(j.a,{className:"form-control",variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(b.a,{className:"form-label",id:"demo-simple-select-outlined-label-difficulty",children:"Difficulty"}),Object(O.jsxs)(m.a,{labelId:"demo-simple-select-outlined-label-difficulty",id:"demo-simple-select-outlined-difficulty",value:i,onChange:function(e){return r(e.target.value)},required:!0,label:"Questions",children:[Object(O.jsx)(h.a,{value:"easy",children:"Easy"}),Object(O.jsx)(h.a,{value:"medium",children:"Medium"}),Object(O.jsx)(h.a,{value:"hard",children:"Hard"})]})]})}),Object(O.jsx)("input",{className:"submit-btn",value:"Start Quiz",type:"submit"})]})]})},x=n(121),v=n(126),p=n(119),g=(n(74),function(e){var t=e.question,n=e.options,c=e.callback,a=e.totalQuestions,i=e.currentQuestion,r=Object(s.useState)(""),l=Object(u.a)(r,2),o=l[0],d=l[1];return Object(O.jsxs)("div",{className:"questions-container",children:[Object(O.jsxs)("h1",{children:["Questions: ",++i," / ",a]}),Object(O.jsx)("h3",{children:t}),Object(O.jsxs)("form",{className:"question-form",action:"",onSubmit:function(e){return c(e,o)},children:[Object(O.jsx)(j.a,{component:"fieldset",children:Object(O.jsx)(x.a,{"aria-label":"option",name:"option",value:o,onChange:function(e){d(e.target.value)},className:"form-radio-group",children:n.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)(v.a,{value:e,className:"form-label",control:Object(O.jsx)(p.a,{required:!0}),label:e})},t)}))})}),Object(O.jsx)("input",{className:"submit-btn",type:"submit",value:"Submit and Proceed"})]})]})}),N=(n(75),function(e){var t=e.score,n=e.name,s=e.total,c=e.category,a=e.level,i=e.setScore,r=e.setStep,l=e.setLevel,o=e.setCategory,u=e.setName,j=e.setQuestions,d=e.setShowResult,b=e.setQuiz,m=e.setSendRequest,h="";return 9===c?h="General Knowledge":17===c?h="Science":18===c?h="Computers":19===c?h="Mathematics":21===c&&(h="Sports"),Object(O.jsxs)("div",{className:"result-container",children:[Object(O.jsxs)("div",{className:"heading",children:[" ",Object(O.jsx)("h1",{children:"Your Result"})]}),Object(O.jsxs)("div",{className:"results",children:[Object(O.jsxs)("h3",{children:[" ","Name ",Object(O.jsxs)("span",{children:[n," "]})]}),Object(O.jsxs)("h3",{children:[" ","Total Questions ",Object(O.jsx)("span",{children:s})]}),Object(O.jsxs)("h3",{children:[" ","Score ",Object(O.jsx)("span",{children:t})]}),Object(O.jsxs)("h3",{children:[" ","Percentage ",Object(O.jsxs)("span",{children:[t/s*100,"%"]})]}),Object(O.jsxs)("h3",{children:[" ","Difficulty Level ",Object(O.jsx)("span",{children:a})]}),Object(O.jsxs)("h3",{children:[" ","Category ",Object(O.jsx)("span",{children:h})]})]}),Object(O.jsx)("div",{className:"button",children:Object(O.jsx)("input",{type:"button",onClick:function(){d(!1),m(!1),b([]),i(0),r(0),l("easy"),o(9),u(""),j(5)},className:"submit-btn",value:"Try Again"})})]})}),S=n(117),y=(n(76),function(){return Object(O.jsx)("div",{className:"loader-container",children:Object(O.jsx)(S.a,{color:"inherit"})})}),q=n(15),w=function(){var e=Object(o.a)(l.a.mark((function e(t,n,s){var c,a,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=".concat(t,"&category=").concat(n,"&difficulty=").concat(s,"&type=multiple"));case 2:return c=e.sent,e.next=5,c.json();case 5:return a=e.sent,i=a.results,r=i.map((function(e){return{question:e.question,answer:e.correct_answer,options:(t=e.incorrect_answers.concat(e.correct_answer),Object(q.a)(t).sort((function(){return Math.random()-.5})))};var t})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(0),i=Object(u.a)(a,2),r=i[0],j=i[1],d=Object(s.useState)(0),b=Object(u.a)(d,2),m=b[0],h=b[1],x=Object(s.useState)(5),v=Object(u.a)(x,2),p=v[0],S=v[1],q=Object(s.useState)("easy"),C=Object(u.a)(q,2),Q=C[0],k=C[1],R=Object(s.useState)(9),z=Object(u.a)(R,2),L=z[0],D=z[1],F=Object(s.useState)(!1),M=Object(u.a)(F,2),T=M[0],A=M[1],I=Object(s.useState)(""),P=Object(u.a)(I,2),W=P[0],_=P[1],E=Object(s.useState)(!1),B=Object(u.a)(E,2),G=B[0],J=B[1],K=Object(s.useState)(!1),Y=Object(u.a)(K,2),H=Y[0],V=Y[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H){e.next=7;break}return J(!0),e.next=4,w(p,L,Q);case 4:t=e.sent,J(!1),c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[H,p,L,Q]);return G?Object(O.jsx)("div",{className:"content-container",children:Object(O.jsx)(y,{})}):Object(O.jsx)("div",{className:"content-container",children:n.length?T?Object(O.jsx)(N,{name:W,score:m,total:n.length,level:Q,category:L,setName:_,setScore:h,setQuestions:S,setCategory:D,setLevel:k,setStep:j,setQuiz:c,setSendRequest:V,setShowResult:A}):Object(O.jsx)(g,{options:n[r].options,question:n[r].question,callback:function(e,t){e.preventDefault(),t===n[r].answer&&h(++m),r!==n.length-1?j(++r):A(!0)},totalQuestions:n.length,currentQuestion:r}):Object(O.jsx)(f,{setName:_,setSendRequest:V,name:W,questions:p,setQuestions:S,level:Q,category:L,setCategory:D,setLevel:k})})},Q=(n(77),function(){return Object(O.jsx)("div",{className:"footer-container",children:Object(O.jsxs)("h1",{children:["</>"," ",Object(O.jsx)("a",{href:"https://github.com/reetsrivastava",rel:"noopener noreferrer",target:"_blank",children:"Reet Srivastava"})]})})}),k=(n(78),function(){return Object(O.jsx)("div",{className:"header-container",children:Object(O.jsx)("h1",{children:"AD ASTRA Quiz App"})})}),R=(n(79),function(){return Object(O.jsxs)("div",{className:"main-container",children:[Object(O.jsx)(k,{}),Object(O.jsx)(C,{}),Object(O.jsx)(Q,{})]})}),z=function(){return Object(O.jsx)(R,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root")),L()}},[[80,1,2]]]);
//# sourceMappingURL=main.58736952.chunk.js.map