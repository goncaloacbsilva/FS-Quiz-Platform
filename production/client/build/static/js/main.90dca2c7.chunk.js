(this.webpackJsonpfst_quizz=this.webpackJsonpfst_quizz||[]).push([[0],{214:function(e,t,n){},330:function(e,t,n){},481:function(e,t,n){},537:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(66),a=n.n(c),r=(n(330),n(214),n(317)),s=n(20),o=n(557),l=n(554),j=n(585),d=n(555),u=n(314),b=n(99),h=n(315),O=n(550),x=n(579),p=n(556),g=n(553),f=n(1);function m(){return Object(f.jsxs)(O.a,{paddingLeft:"10",separator:" ",children:[Object(f.jsx)(O.b,{children:Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)(u.a,{colorScheme:"blue",children:"Home"})})}),Object(f.jsx)(O.b,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)(x.b,{as:u.a,rightIcon:Object(f.jsx)(g.a,{}),children:"Applications"}),Object(f.jsxs)(x.d,{children:[Object(f.jsx)(x.c,{children:Object(f.jsx)(s.b,{to:"/quizApp/",children:"FST Quiz App"})}),Object(f.jsx)(x.c,{disabled:!0,children:Object(f.jsx)(s.b,{to:"/logDBApp/",children:"Log DB"})})]})]})})]})}var w=function(){return Object(f.jsxs)(l.a,{direction:"row",p:"4",children:[Object(f.jsx)(d.a,{p:"2",size:"md",children:"FST Suite"}),Object(f.jsx)(m,{}),Object(f.jsx)(p.a,{})]})},v=n(288),S=n.n(v);n(336);var z=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(o.a,{maxW:"container.lg",p:0,children:Object(f.jsx)(l.a,{h:"80vh",children:Object(f.jsxs)(j.b,{w:"full",h:"full",p:15,children:[Object(f.jsx)(d.a,{size:"2xl",children:"FST Suite"}),Object(f.jsx)(d.a,{paddingBottom:10,fontWeight:"light",size:"xl",children:Object(f.jsx)(S.a,{startDelay:200,stdTypingDelay:50,avgTypingDelay:70,children:Object(f.jsx)("span",{children:"Made for performance"})})}),Object(f.jsx)(s.b,{to:"/quizApp/",children:Object(f.jsx)(j.b,{w:"lg",align:"stretch",children:Object(f.jsx)(u.a,{rightIcon:Object(f.jsx)(b.a,{as:h.a}),colorScheme:"blue",size:"lg",children:"FST Quiz App"})})}),Object(f.jsx)(s.b,{to:"/logDBApp/",children:Object(f.jsx)(j.b,{w:"lg",align:"stretch",children:Object(f.jsx)(u.a,{disabled:!0,size:"lg",children:"Log DB"})})})]})})})]})},q=n(23),y=n(5),A=n(561),C=n(581),R=n(75),k=n(563),I=n(560),E=n(564),F=n(565),T=n(566),B=n(582),W=n(24),D=n(112),K=n(567),L=["image/jpeg","image/png","image/jpg"];var Q={validateFile:function(e,t){return L.includes(e.type)?5e6<e.size?(t("error","File Upload Error","The type of the file that you tried to upload is too big! Try to select a smaller one"),!1):(console.log(e),!0):(t("error","File Upload Error","The type of the file that you tried to upload is not valid! Try to select another one"),!1)},validateName:function(e){var t;return e?e.length<3?t="The name provided is too short":e.length>50&&(t="The name provided is too big"):t="Name field is required",t},validateQuestion:function(e){var t;return e||(t="Question field is required"),t}},M=n(152),P=n(559),_=Object(i.forwardRef)((function(e,t){var n=Object(i.useState)(0),c=Object(y.a)(n,2),a=c[0],r=c[1],s=Object(i.useState)(""),o=Object(y.a)(s,2),l=o[0],d=o[1],u=Object(i.useState)(""),b=Object(y.a)(u,2),h=b[0],O=b[1],x=Object(i.useState)(""),p=Object(y.a)(x,2),g=p[0],m=p[1],w=Object(i.useState)(""),v=Object(y.a)(w,2),S=v[0],z=v[1];return Object(i.useImperativeHandle)(t,(function(){return{getCorrectAnswer:function(){var e=[];return e[0]=l,e[1]=h,e[2]=g,e[3]=S,{correctAnswer:e[a],answerA:l,answerB:h,answerC:g,answerD:S}}}})),Object(f.jsxs)(M.a,{onChange:function(e){r(e)},defaultValue:"0",children:[Object(f.jsxs)(j.a,{paddingBottom:"5",children:[Object(f.jsx)(P.a,{value:"0"}),Object(f.jsx)(I.a,{onChange:function(e){return d(e.target.value)},id:"A",placeholder:"Answer A",type:"text"}),Object(f.jsx)(P.a,{paddingLeft:"10",value:"1"}),Object(f.jsx)(I.a,{onChange:function(e){return O(e.target.value)},id:"B",placeholder:"Answer B",type:"text"})]}),Object(f.jsxs)(j.a,{paddingBottom:"5",children:[Object(f.jsx)(P.a,{value:"2"}),Object(f.jsx)(I.a,{onChange:function(e){return m(e.target.value)},id:"C",placeholder:"Answer C",type:"text"}),Object(f.jsx)(P.a,{paddingLeft:"10",value:"3"}),Object(f.jsx)(I.a,{onChange:function(e){return z(e.target.value)},id:"D",placeholder:"Answer D",type:"text"})]}),Object(f.jsxs)("p",{children:["Option ","ABCD"[a]," is the correct option"]})]})})),N=n(80),H=n.n(N);var U={getKnowledgeAreas:function(){return H.a.get("/api/getKnowledgeAreas")},getKnowledgeAreaById:function(e){return H.a.get("/api/getKnowledgeArea/"+e)}};var G={submitQuestion:function(e){return H.a.post("/api/submitQuestion",e)},getQuestions:function(){return H.a.get("/api/getQuestions")}};function V(){return Object(f.jsxs)(O.a,{paddingLeft:"10",separator:" ",children:[Object(f.jsx)(O.b,{children:Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)(u.a,{colorScheme:"blue",children:"Home"})})}),Object(f.jsx)(O.b,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)(x.b,{as:u.a,rightIcon:Object(f.jsx)(g.a,{}),children:"Questions"}),Object(f.jsxs)(x.d,{children:[Object(f.jsx)(x.c,{children:Object(f.jsx)(s.b,{to:"/quizApp/questions/submit",children:" Submit new question"})}),Object(f.jsx)(x.c,{children:Object(f.jsx)(s.b,{to:"/quizApp/questions/view",children:"View submited questions"})})]})]})}),Object(f.jsx)(O.b,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)(x.b,{disabled:!0,as:u.a,rightIcon:Object(f.jsx)(g.a,{}),children:"Quizes"}),Object(f.jsx)(x.d,{children:Object(f.jsx)(x.c,{children:Object(f.jsx)(s.b,{to:"/quizApp/quiz/create",children:"Create Quiz"})})})]})})]})}var Y=function(){return Object(f.jsxs)(l.a,{direction:"row",p:"4",children:[Object(f.jsx)(d.a,{p:"2",size:"md",children:"FST Suite"}),Object(f.jsx)(V,{}),Object(f.jsx)(p.a,{})]})};function J(e){var t=e.correctCallback;return Object(f.jsx)(A.a,{onChange:function(e){t({correctAnswer:e.target.value})},placeholder:"Open answer goes here...",isRequired:!0})}var X=function(){var e=this,t=Object(i.useState)(2),n=Object(y.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)("default"),s=Object(y.a)(r,2),b=s[0],h=s[1],O=Object(i.useState)(""),x=Object(y.a)(O,2),p=x[0],g=x[1],m=Object(i.useState)(""),w=Object(y.a)(m,2),v=w[0],S=w[1],z=Object(i.useState)(""),L=Object(y.a)(z,2),M=L[0],P=L[1],N=Object(i.useState)([]),H=Object(y.a)(N,2),V=H[0],X=H[1],Z=Object(i.useState)(0),$=Object(y.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)(!1),ie=Object(y.a)(ne,2),ce=ie[0],ae=ie[1],re=Object(i.useRef)(),se=Object(i.useRef)(null),oe=Object(i.useRef)(null),le=Object(C.a)();function je(e,t,n){console.log("ERROR_MSG: "+n),le({title:t,position:"top",description:n+(t.includes("API")?". Please try to reload the page or contact EL&SW team":""),status:e,duration:3e3,isClosable:!0})}function de(e){e.stopPropagation(),e.preventDefault(),Q.validateFile(e.target.files[0],je)?S(e.target.files[0]):S("")}function ue(e){e.stopPropagation(),e.preventDefault(),Q.validateFile(e.target.files[0],je)?P(e.target.files[0]):P("")}return Object(i.useEffect)((function(){X([]),U.getKnowledgeAreas().then((function(e){return e.data})).then((function(e){X(e)})).catch((function(e){X([]),console.log(e),je("error","KnowledgeArea API Error:",e.message)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Y,{}),Object(f.jsx)(o.a,{maxW:"container.lg",p:0,children:Object(f.jsx)(l.a,{h:"90vh",children:Object(f.jsxs)(j.b,{alignItems:"start",w:"full",h:"full",p:15,children:[Object(f.jsx)(d.a,{paddingBottom:"5",size:"xl",children:"Submit question:"}),Object(f.jsx)(D.c,{initialValues:{author:"",question:""},onSubmit:function(e,t){setTimeout((function(){var n=new FormData,i="multiple"===b?re.current.getCorrectAnswer():p;n.append("author",e.author),n.append("question",e.question),n.append("areaId",ee),n.append("difficulty",c),n.append("type",b),Object.keys(i).map((function(e,t){return n.append(e,i[e])})),n.append("questionImage",v),n.append("resolutionImage",M),console.log("SUBMIT REPORT: "),console.log(n),G.submitQuestion(n).then((function(e){console.log("Submitted!"),ae(!0)})).catch((function(e){console.log("Submission error: "),console.log(e),je("error","Submission API Error: ",e.message)})).finally((function(){t.setSubmitting(!1)}))}),500)},children:function(t){return Object(f.jsxs)(D.b,{style:{display:"contents"},children:[Object(f.jsx)(D.a,{name:"author",validate:Q.validateName,children:function(e){var t=e.field,n=e.form;return Object(f.jsxs)(R.a,{isInvalid:n.errors.author&&n.touched.author,isRequired:!0,children:[Object(f.jsx)(k.a,{children:"Author:"}),Object(f.jsx)(I.a,Object(q.a)(Object(q.a)({},t),{},{id:"author",placeholder:"First and last name",type:"text"})),Object(f.jsx)(E.a,{children:n.errors.author})]})}}),Object(f.jsx)(D.a,{name:"question",validate:Q.validateQuestion,children:function(e){var t=e.field,n=e.form;return Object(f.jsxs)(R.a,{isInvalid:n.errors.question&&n.touched.question,isRequired:!0,children:[Object(f.jsx)(k.a,{paddingTop:"5",children:"Question:"}),Object(f.jsx)(A.a,Object(q.a)(Object(q.a)({},t),{},{id:"question",placeholder:"Your question goes here..."})),Object(f.jsx)(E.a,{children:n.errors.question})]})}}),Object(f.jsxs)(R.a,{id:"area",isRequired:!0,children:[Object(f.jsx)(k.a,{paddingTop:"5",children:"Knowledge Area:"}),Object(f.jsx)(F.a,{onChange:function(e){te(e.target.value)},placeholder:"Select option",isDisabled:0===V.length,children:V.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.areaname},e.id)}))})]}),Object(f.jsxs)(R.a,{id:"dificulty",isRequired:!0,children:[Object(f.jsx)(k.a,{paddingTop:"5",children:"Question dificulty:"}),Object(f.jsxs)(T.a,{children:[Object(f.jsx)(T.b,{children:c}),Object(f.jsxs)(B.a,{onChange:a,defaultValue:2,min:0,max:5,step:1,children:[Object(f.jsx)(B.d,{children:Object(f.jsx)(B.b,{})}),Object(f.jsx)(B.c,{})]})]})]}),Object(f.jsxs)(R.a,{paddingBottom:"5",id:"response",isRequired:!0,children:[Object(f.jsx)(k.a,{paddingTop:"5",children:"Answer type:"}),Object(f.jsxs)(F.a,{onChange:function(e){h(e.target.value)},placeholder:"Select option",children:[Object(f.jsx)("option",{value:"multiple",children:"Multiple choice"}),Object(f.jsx)("option",{value:"open",children:"Open answer"})]})]}),"open"===b?Object(f.jsx)(J,{correctCallback:g}):null,"multiple"===b?Object(f.jsx)(_,{ref:re}):null,ce?Object(f.jsx)(W.a,{to:"/quizApp/questions/submit/submission_success",push:!0}):null,Object(f.jsx)(I.a,{onChange:de.bind(e),ref:se,id:"question-img",type:"file",style:{display:"none"}}),Object(f.jsx)(I.a,{onChange:ue.bind(e),ref:oe,id:"resolution-img",type:"file",style:{display:"none"}}),Object(f.jsxs)(j.a,{paddingTop:"5",paddingBottom:"5",children:[Object(f.jsxs)(u.a,{colorScheme:""!==v?"blue":"gray",onClick:function(){se.current.click()},leftIcon:v?null:Object(f.jsx)(K.a,{}),children:[v?"Change":"Upload"," question image"]}),Object(f.jsxs)(u.a,{colorScheme:""!==M?"blue":"gray",onClick:function(){oe.current.click()},leftIcon:M?null:Object(f.jsx)(K.a,{}),children:[M?"Change":"Upload"," resolution image"]})]}),Object(f.jsx)(j.b,{paddingBottom:"5",alignItems:"stretch",w:"full",children:Object(f.jsx)(u.a,{type:"submit",isLoading:t.isSubmitting,isDisabled:0===V.length,colorScheme:"blue",children:"Submit"})})]})}})]})})})]})},Z=n(568),$=n(295);var ee=function(){return Object(f.jsx)(l.a,{h:"90vh",children:Object(f.jsxs)(j.b,{alignItems:"center",w:"full",h:"full",p:15,children:[Object(f.jsx)(d.a,{size:"xl",children:"Thank you for your submission!"}),Object(f.jsx)(Z.a,{children:"Your question has been safely saved in our database"}),Object(f.jsx)(s.b,{to:"/quizApp/questions/submit",children:Object(f.jsx)(j.b,{alignItems:"stretch",w:"lg",children:Object(f.jsx)(u.a,{colorScheme:"blue",children:"Submit another one!"})})}),Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)(j.b,{alignItems:"stretch",w:"lg",children:Object(f.jsx)(u.a,{children:"Go home"})})}),Object(f.jsx)($.a,{class:"giphy-embed",frameBorder:"0",width:"500",height:"300",src:"https://giphy.com/embed/342Zsv5S4W8XC"})]})})},te=n(162),ne=n(572),ie=n(551),ce=n(569),ae=n(587),re=n(571),se=n(570),oe=n(575),le=n(576),je=n(580),de=n(573),ue=n(574),be=n(21);var he={StatusBadge:function(e){return 1===e.used?Object(f.jsx)(ce.a,{fontSize:e.size,colorScheme:"green",children:"Used"}):Object(f.jsx)(ce.a,{fontSize:e.size,colorScheme:"purple",children:"Submited"})},ReviewedBadge:function(e){return 1===e.reviewed?Object(f.jsx)(ce.a,{fontSize:e.size,colorScheme:"green",children:"Reviewed"}):Object(f.jsx)(ce.a,{fontSize:e.size,colorScheme:"red",children:"Not reviewed"})},ReviewedBadgeSimple:function(e){return 1===e.reviewed?Object(f.jsx)(ce.a,{fontSize:e.size,colorScheme:"green",children:"Yes"}):Object(f.jsx)(ce.a,{fontSize:e.size,colorScheme:"red",children:"No"})}};function Oe(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function xe(){var e=Object(i.useState)(Oe()),t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){function e(){c(Oe())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var pe=n(36),ge=n(55);var fe={getAuthors:function(){return H.a.get("/api/getAuthors")}};function me(e,t,n){var i=[];return n.forEach((function(n){n[e]===t&&(i=n)})),i}var we={TransferQuestion:function(){function e(){Object(pe.a)(this,e),this.question={}}return Object(ge.a)(e,[{key:"updateQuestion",value:function(e){this.question=e}}]),e}(),postProcessing:function(e){return new Promise((function(t,n){var i=e;U.getKnowledgeAreas().then((function(e){return e.data})).then((function(e){i=function(e,t){return e.forEach((function(e){var n=me("id",e.areaid,t);e.knowledgeArea=n!==[]?n.areaname:"Not found"})),e}(i,e)})).then((function(){fe.getAuthors().then((function(e){return e.data})).then((function(e){i=function(e,t){return e.forEach((function(e){var n=me("id",e.author_id,t);e.authorName=n!==[]?n.authorname:"Not found"})),e}(i,e),t(i)})).catch((function(e){console.log(e),n(e.message)}))})).catch((function(e){console.log(e),n(e.message)}))}))},checkMultipleChoice:function(e){return!(""===e.answera&&""===e.answerb&&""===e.answerc&&""===e.answerd)},filterArea:function(e,t){var n=[];return"all"!==e?(console.log("Search enabled, filtering for: "+e),t.forEach((function(t){t.knowledgeArea===e&&n.push(t)}))):n=t,n}},ve=n.p+"static/media/question.3359468e.png",Se=n(291),ze=n(586),qe=n(292);var ye=function(e){var t=Object(qe.a)(e),n=t.getInputProps,i=t.getCheckboxProps,c=n(),a=i();return Object(f.jsxs)(se.a,{as:"label",children:[Object(f.jsx)("input",Object(q.a)(Object(q.a)({},c),{},{disabled:!0})),Object(f.jsx)(se.a,Object(q.a)(Object(q.a)({},a),{},{cursor:"pointer",borderWidth:"1px",borderRadius:"md",boxShadow:"md",_checked:{bg:"teal.600",color:"white",borderColor:"teal.600"},px:5,py:3,children:e.children}))]})};function Ae(e){var t=[];return e.forEach((function(e){""!==e&&t.push(e)})),t}var Ce=function(e){var t=Object(Se.a)({name:"framework",defaultValue:e.question.correctanswer,onChange:console.log}),n=t.getRootProps,i=t.getRadioProps,c=n(),a=[e.question.answera,e.question.answerb,e.question.answerc,e.question.answerd];return Object(f.jsx)(ze.a,Object(q.a)(Object(q.a)({},c),{},{paddingTop:5,minChildWidth:"120px",spacing:"40px",children:Ae(a).map((function(e){var t=i({value:e});return Object(f.jsx)(ye,Object(q.a)(Object(q.a)({},t),{},{children:e}),e)}))}))};var Re=function(e){var t=xe().height;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(j.a,{children:[void 0!==e.question.image_path?Object(f.jsx)(ae.a,{borderRadius:"10",boxSize:"150px",src:"/api/requestFile/"+e.question.image_path.split("/")[1],fallbackSrc:ve,alt:"Question image"}):null,Object(f.jsxs)(j.b,{alignItems:"start",children:[Object(f.jsx)(se.a,{borderRadius:5,borderWidth:1,borderColor:"gray.600",overflowY:"scroll",maxHeight:.2*t,children:Object(f.jsx)(Z.a,{fontWeight:"medium",padding:2,children:e.question.content})}),Object(f.jsxs)(j.a,{paddingTop:1,children:[Object(f.jsx)(he.StatusBadge,{size:"0.9em",used:e.question.used}),Object(f.jsx)(he.ReviewedBadge,{size:"0.9em",reviewed:e.question.reviewed})]})]})]}),we.checkMultipleChoice(e.question)?Object(f.jsx)(Ce,{question:e.question}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Z.a,{paddingBottom:2,fontWeight:"semibold",fontSize:"xl",children:"Open answer: "}),Object(f.jsx)(A.a,{resize:"none",isReadOnly:!0,children:e.question.correctanswer})]}),Object(f.jsx)(re.a,{paddingTop:5,orientation:"horizontal"}),Object(f.jsx)(Z.a,{paddingTop:2,fontWeight:"semibold",fontSize:"x-large",children:"Explanation: "}),Object(f.jsxs)(j.a,{children:[void 0!==e.question.image_path?Object(f.jsx)(ae.a,{borderRadius:"10",boxSize:"150px",src:"/api/requestFile/"+e.question.resolution_path.split("/")[1],fallbackSrc:ve,alt:"Resolution image"}):null,Object(f.jsx)(j.b,{alignItems:"start",children:Object(f.jsx)(se.a,{borderRadius:5,borderWidth:1,borderColor:"gray.600",overflowY:"scroll",maxHeight:.2*t,children:Object(f.jsx)(Z.a,{padding:2,children:"No explanation provided"})})})]})]})},ke=(n(481),n(306)),Ie=function(){function e(t,n){var i=this;Object(pe.a)(this,e),console.log("Init engine"),this.engine=new ke.a(t),n.forEach((function(e){i.engine.addDocument(e)}))}return Object(ge.a)(e,[{key:"performSearch",value:function(e,t){var n=this;return e.forEach((function(e){n.engine.addIndex(e)})),this.engine.search(t)}}]),e}(),Ee="id",Fe=function(e){var t=e.rowData,n=(e.dataKey,e.expandedRowKeys),i=e.onChange,c=Object(te.a)(e,["rowData","dataKey","expandedRowKeys","onChange"]);return Object(f.jsx)(be.a,Object(q.a)(Object(q.a)({},c),{},{children:Object(f.jsx)(ne.a,{size:"xs",appearance:"subtle",onClick:function(){i(t)},icon:n.some((function(e){return e===t.id}))?Object(f.jsx)(de.a,{}):Object(f.jsx)(ue.a,{})})}))},Te=function(e){var t=e.rowData,n=(e.dataKey,Object(te.a)(e,["rowData","dataKey"]));return Object(f.jsx)(be.a,Object(q.a)(Object(q.a)({},n),{},{children:Object(f.jsx)(he.StatusBadge,{size:"0.8em",used:t.used})}))},Be=function(e){var t=e.rowData,n=(e.dataKey,Object(te.a)(e,["rowData","dataKey"]));return Object(f.jsx)(be.a,Object(q.a)(Object(q.a)({},n),{},{children:Object(f.jsx)(he.ReviewedBadgeSimple,{size:"0.8em",reviewed:t.reviewed})}))};var We=function(){var e=Object(i.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),r=Object(y.a)(a,2),s=r[0],l=r[1],b=Object(i.useState)([]),h=Object(y.a)(b,2),O=h[0],x=h[1],p=Object(i.useState)("all"),g=Object(y.a)(p,2),m=g[0],w=g[1],v=Object(i.useState)(""),S=Object(y.a)(v,2),z=S[0],q=S[1],A=Object(ie.a)(),R=A.isOpen,k=A.onOpen,E=A.onClose,T=xe(),B=T.height,W=T.width,D=Object(C.a)(),K=Object(i.useRef)(null),L=Object(i.useRef)(null);function Q(e,t,n){console.log("ERROR_MSG: "+n),D({title:t,position:"top",description:n+(t.includes("API")?". Please try to reload the page or contact EL&SW team":""),status:e,duration:3e3,isClosable:!0})}return Object(i.useEffect)((function(){K.current=new we.TransferQuestion,l([]),x([]),Q("info","Loading questions, please wait...",""),G.getQuestions().then((function(e){return e.data})).then((function(e){return we.postProcessing(e)})).then((function(e){l(e),L.current=new Ie("id",e)})).then(U.getKnowledgeAreas().then((function(e){return e.data})).then((function(e){x(e)}))).catch((function(e){l([]),console.log(e),Q("error","QuestionsAPI Error:",e.message)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(se.a,{padding:5,children:[Object(f.jsxs)(j.a,{children:[Object(f.jsxs)(oe.a,{paddingBottom:4,size:"md",children:[Object(f.jsx)(I.a,{pr:"4.5rem",type:"text",placeholder:"Search for question",value:z,onChange:function(e){return q(e.target.value)}}),Object(f.jsx)(le.a,{width:"4.5rem",children:0!==z.length?Object(f.jsx)(u.a,{h:"1.75rem",onClick:function(){q("")},size:"sm",children:"Clear"}):null})]}),Object(f.jsx)(oe.a,{paddingBottom:4,width:"sm",size:"md",children:Object(f.jsx)(F.a,{width:"sm",onChange:function(e){""===e.target.value?w("all"):w(e.target.value)},placeholder:"All Knowledge Areas",isDisabled:0===O.length,children:O.map((function(e){return Object(f.jsx)("option",{value:e.areaname,children:e.areaname},e.id)}))})})]}),Object(f.jsxs)(be.d,{height:.7*B,width:.9*W,rowKey:Ee,rowExpandedHeight:300,expandedRowKeys:n,data:we.filterArea(m,0!==z.length?L.current.performSearch(["content"],z):s),shouldUpdateScroll:!1,renderRowExpanded:function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(j.b,{spacing:"2",alignItems:"start",children:[Object(f.jsxs)(j.a,{children:[we.checkMultipleChoice(e)?Object(f.jsx)(ce.a,{ml:"1",fontSize:"0.9em",colorScheme:"green",children:"Multiple Choice"}):Object(f.jsx)(ce.a,{ml:"1",fontSize:"0.9em",colorScheme:"blue",children:"Open Answer"}),Object(f.jsx)(u.a,{onClick:function(){K.current.updateQuestion(e),k()},size:"xs",children:"Show full question"})]}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(ae.a,{borderRadius:"10",boxSize:"110px",src:"/api/requestFile/"+e.image_path.split("/")[1],fallbackSrc:ve,alt:"Segun Adebayo"}),Object(f.jsxs)(o.a,{maxWidth:"3xl",alignItems:"start",children:[Object(f.jsx)(d.a,{as:"h4",size:"md",children:"Question: "}),Object(f.jsx)(Z.a,{noOfLines:4,children:e.content})]})]}),Object(f.jsx)(re.a,{orientation:"horizontal"}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(ae.a,{borderRadius:"10",boxSize:"110px",src:"/api/requestFile/"+e.resolution_path.split("/")[1],fallbackSrc:ve,alt:"Segun Adebayo"}),Object(f.jsxs)(o.a,{maxWidth:"3xl",alignItems:"start",children:[Object(f.jsx)(d.a,{as:"h4",size:"md",children:"Solution: "}),Object(f.jsx)(Z.a,{noOfLines:[1,2,3,4],children:e.correctanswer})]})]})]})})},affixHeader:!0,virtualized:!0,children:[Object(f.jsxs)(be.b,{width:70,align:"center",children:[Object(f.jsx)(be.c,{children:"#"}),Object(f.jsx)(Fe,{dataKey:"id",expandedRowKeys:n,onChange:function(e,t){var i=!1,a=[];n.forEach((function(t){t===e.id?i=!0:a.push(t)})),i||a.push(e.id),c(a)}})]}),Object(f.jsxs)(be.b,{width:120,children:[Object(f.jsx)(be.c,{children:"State: "}),Object(f.jsx)(Te,{})]}),Object(f.jsxs)(be.b,{width:120,children:[Object(f.jsx)(be.c,{children:"Reviewed: "}),Object(f.jsx)(Be,{})]}),Object(f.jsxs)(be.b,{width:500,children:[Object(f.jsx)(be.c,{children:"Question"}),Object(f.jsx)(be.a,{dataKey:"content"})]}),Object(f.jsxs)(be.b,{width:280,children:[Object(f.jsx)(be.c,{children:"Knowledge Area"}),Object(f.jsx)(be.a,{dataKey:"knowledgeArea"})]}),Object(f.jsxs)(be.b,{width:300,children:[Object(f.jsx)(be.c,{children:"Author"}),Object(f.jsx)(be.a,{dataKey:"authorName"})]}),Object(f.jsxs)(be.b,{flexGrow:1,children:[Object(f.jsx)(be.c,{children:"Difficulty"}),Object(f.jsx)(be.a,{dataKey:"difficultyid"})]})]})]}),Object(f.jsxs)(je.a,{size:"full",isOpen:R,onClose:E,children:[Object(f.jsx)(je.g,{}),Object(f.jsxs)(je.d,{children:[Object(f.jsx)(je.f,{children:R?K.current.question.knowledgeArea:""}),Object(f.jsx)(je.c,{}),Object(f.jsx)(je.b,{children:R?Object(f.jsx)(Re,{question:K.current.question}):""}),Object(f.jsx)(je.e,{children:Object(f.jsx)(u.a,{colorScheme:"blue",mr:3,onClick:E,children:"Close"})})]})]})]})};var De=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Y,{}),Object(f.jsx)(o.a,{maxW:"-moz-max-content",p:0,children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(j.b,{alignItems:"start",w:"full",h:"full",p:15,children:[Object(f.jsx)(d.a,{paddingLeft:"5",size:"xl",children:"Submitted questions"}),Object(f.jsx)(We,{})]})})})]})},Ke=n(308),Le=n.n(Ke),Qe={lanes:[{id:"lane1",title:"My quiz #1",editLaneTitle:!0,label:"",cards:[]},{id:"lane2",title:"From questions database",label:"",cards:[{id:"88",title:"EL&SW",description:"Can AI make memes",label:"Multiple choice"},{id:"89",title:"EL&SW",description:"Can AI make memes",label:"Multiple choice"},{id:"90",title:"EL&SW",description:"Can AI make memes",label:"Multiple choice"},{id:"45",title:"EL&SW",description:"Can AI make memes",label:"Multiple choice"},{id:"16",title:"EL&SW",description:"Can AI make memes",label:"Multiple choice"},{id:"10",title:"EL&SW",description:"Can AI make memes",label:"Multiple choice"}]}]};var Me=function(){var e=xe(),t=e.height,n=e.width;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Y,{}),Object(f.jsx)(o.a,{maxW:"-moz-max-content",p:0,children:Object(f.jsx)(l.a,{paddingLeft:5,children:Object(f.jsxs)(j.b,{alignItems:"stretch",w:"full",h:"full",p:15,children:[Object(f.jsx)(d.a,{size:"xl",children:"Create quiz"}),Object(f.jsx)(Z.a,{children:"Just drag the questions from the right table to the left table"}),Object(f.jsx)(Le.a,{cardDragClass:"draggingCard",data:Qe,laneStyle:{maxHeight:.6*t,width:.94*n/2,backgroundColor:"#161b24",color:"#ffffffeb"},cardStyle:{maxWidth:"none",backgroundColor:"#ffffff14",borderRadius:"6px"},style:{height:.65*t,backgroundColor:"transparent",padding:0,alignSelf:"center"}}),Object(f.jsx)(u.a,{size:"lg",colorScheme:"blue",children:"Create quiz"})]})})})]})};var Pe=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Y,{}),Object(f.jsx)(o.a,{maxW:"container.lg",p:0,children:Object(f.jsx)(l.a,{h:"80vh",children:Object(f.jsxs)(j.b,{w:"full",h:"full",p:15,children:[Object(f.jsx)(d.a,{size:"2xl",children:"FST Quizz App"}),Object(f.jsx)(Z.a,{fontSize:"xl",children:"A tool that gets you ready for those hard af FSG quizzes"}),Object(f.jsx)(s.b,{to:"/quizApp/questions/submit",children:Object(f.jsx)(j.b,{w:"lg",align:"stretch",children:Object(f.jsx)(u.a,{size:"lg",colorScheme:"blue",children:"Submit question"})})})]})})})]})};var _e=function(){return Object(f.jsx)(o.a,{maxW:"container.lg",p:0,children:Object(f.jsx)(l.a,{h:"80vh",children:Object(f.jsxs)(j.b,{w:"full",h:"full",p:15,children:[Object(f.jsx)(d.a,{size:"2xl",children:"Oops, its a 404"}),Object(f.jsx)(Z.a,{fontSize:"xl",children:"We gave our best effort but we couldn't find what you are looking for"}),Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)(u.a,{size:"lg",colorScheme:"blue",children:"Take me home"})})]})})})};var Ne=function(){return Object(f.jsxs)(W.d,{children:[Object(f.jsx)(W.b,{exact:!0,path:"/",children:Object(f.jsx)(z,{})}),Object(f.jsx)(W.b,{exact:!0,path:"/quizApp/",children:Object(f.jsx)(Pe,{})}),Object(f.jsx)(W.b,{path:"/quizApp/questions/submit",children:Object(f.jsx)(X,{})}),Object(f.jsx)(W.b,{path:"/quizApp/questions/submit/submission_success",children:Object(f.jsx)(ee,{})}),Object(f.jsx)(W.b,{path:"/quizApp/questions/view",children:Object(f.jsx)(De,{})}),Object(f.jsx)(W.b,{path:"/quizApp/quiz/create",children:Object(f.jsx)(Me,{})}),Object(f.jsx)(W.b,{path:"*",children:Object(f.jsx)(_e,{})})]})};var He=function(){var e=Object(r.c)(),t=e.colorMode,n=e.toggleColorMode;return"light"===t&&n(),Object(f.jsx)(s.a,{children:Object(f.jsx)(Ne,{})})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,588)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))},Ge=n(583),Ve=n(577);function Ye(){return Object(f.jsx)(Ge.a,{children:Object(f.jsx)(He,{})})}a.a.render(Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Ve.a,{initialColorMode:"dark"}),Object(f.jsx)(Ye,{})]}),document.getElementById("root")),Ue()}},[[537,1,2]]]);
//# sourceMappingURL=main.90dca2c7.chunk.js.map