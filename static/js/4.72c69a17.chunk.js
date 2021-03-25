(this["webpackJsonppizza-react-redux"]=this["webpackJsonppizza-react-redux"]||[]).push([[4],{109:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var l=t(23),i=t(2),n=t(15),o=t(16),d=t(19),u=t(18),r=t(1),s=t.n(r),c=(t(109),t(90)),p=t(92),v=t(14),m=t(17),h=t(0),b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(n.a)(this,t);for(var o=arguments.length,d=new Array(o),u=0;u<o;u++)d[u]=arguments[u];return(e=a.call.apply(a,[this].concat(d))).state={jobForm:{jobType:{elementType:"select",label:"Select job",elementConfig:{options:[{value:"pizza maker",displayedValue:"Pizza Maker"},{value:"delivery guy",displayedValue:"Delivery Guy"},{value:"seller",displayedValue:"Seller"}]},value:"pizza maker",validation:{},valid:!0},firstName:{elementType:"input",elementConfig:{type:"text",placeholder:"First Name"},value:"",validation:{required:!0},touched:!1,valid:!1},lastName:{elementType:"input",elementConfig:{type:"text",placeholder:"Last Name"},value:"",validation:{required:!0},touched:!1,valid:!1},gender:{elementType:"select",label:"Gender",elementConfig:{options:[{value:"male",displayedValue:"Male"},{value:"female",displayedValue:"Female"}]},value:"male",validation:{},valid:!0},birthDate:{label:"Birthday",elementType:"input",elementConfig:{type:"date",placeholder:"First Name"},value:"",validation:{required:!0},touched:!1,valid:!1},city:{elementType:"input",elementConfig:{type:"text",placeholder:"City"},value:"",validation:{required:!0},touched:!1,valid:!1},address:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Address"},value:"",validation:{required:!0},touched:!1,valid:!1},phone:{elementType:"input",elementConfig:{type:"number",placeholder:"Your Phone"},value:"",validation:{required:!0},touched:!1,valid:!1},highSchool:{elementType:"input",elementConfig:{type:"text",placeholder:"High School"},value:"",validation:{required:!0},touched:!1,valid:!1},university:{elementType:"input",elementConfig:{type:"text",placeholder:"University"},value:"",validation:{required:!0},touched:!1,valid:!1},driverLicence:{label:"Driving Licence",elementType:"select",elementConfig:{options:[{value:"none",displayedValue:"None"},{value:"A",displayedValue:"A category"},{value:"B",displayedValue:"B category"},{value:"C",displayedValue:"C category"},{value:"D",displayedValue:"D category"},{value:"A and B",displayedValue:"A and B"},{value:"A and C",displayedValue:"A and C"},{value:"A and D",displayedValue:"A and D"},{value:"B and C",displayedValue:"B and C"},{value:"B and D",displayedValue:"B and D"},{value:"C and D",displayedValue:"C and D"}]},validation:{},valid:!0},additionalInfo:{elementType:"textarea",elementConfig:{placeholder:"Additional info about you"},value:"",validation:{},valid:!0}},formIsValid:!1},e.checkInputValidity=function(e,a){var t=!0;if(e.required&&(t=""!==a.trim()&&t),e.minLength&&(t=a.length>=e.minLength&&t),e.isEmail){t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)&&t}return t},e.inputChangedHandler=function(a,t){var n=Object(i.a)(Object(i.a)({},e.state.jobForm),{},Object(l.a)({},t,Object(i.a)(Object(i.a)({},e.state.jobForm[t]),{},{value:a.target.value,valid:e.checkInputValidity(e.state.jobForm[t].validation,a.target.value),touched:!0}))),o=!0;for(var d in n)o=n[d].valid&&o;e.setState({jobForm:n,formIsValid:o})},e.formSubmitHandler=function(a){a.preventDefault();var t={};for(var l in e.state.jobForm)t[l]=e.state.jobForm[l].value;e.props.onJobApply(t)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=[];for(var t in this.state.jobForm)a.push({id:t,details:this.state.jobForm[t]});var l=a.map((function(a){return Object(h.jsx)(p.a,{label:a.details.label,elementType:a.details.elementType,elementConfig:a.details.elementConfig,value:a.details.value,touched:a.details.touched,validationRequired:a.details.validation,valid:a.details.valid,inputChanged:function(t){return e.inputChangedHandler(t,a.id)}},a.id)}));return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("h1",{className:"job__title",children:"apply for a job"}),Object(h.jsxs)("section",{className:"job__content",children:[Object(h.jsx)("p",{className:"job__content-info",children:"We currently need pizza makers, delivery guys and pizza sellers. Fill the fields and send us your application. We will go through it and give you a call to notify you whether the resime satisfy our criteria. Wish you luck!"}),Object(h.jsx)(c.a,{formCustomClassname:"job",submitBtnDisabled:this.state.formIsValid,formButtonText:"send",submitForm:this.formSubmitHandler,children:l})]})]})}}]),t}(r.Component);a.default=Object(m.b)(null,(function(e){return{onJobApply:function(a){return e(v.j(a))}}}))(b)},90:function(e,a,t){"use strict";t(1),t(91);var l=t(0);a.a=function(e){return Object(l.jsxs)("form",{className:"form form__".concat(e.formCustomClassname),onSubmit:e.submitForm,children:[e.children,Object(l.jsx)("button",{className:"form__button",disabled:!e.submitBtnDisabled,children:e.formButtonText})]})}},91:function(e,a,t){},92:function(e,a,t){"use strict";var l=t(2),i=(t(1),t(93),t(0));a.a=function(e){var a=null,t=["form-input"];switch(e.validationRequired&&e.touched&&!e.valid&&t.push("input-invalid"),e.valid&&t.push("input-valid"),e.elementType){case"input":a=Object(i.jsx)("input",Object(l.a)(Object(l.a)({className:t.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.inputChanged}));break;case"select":a=Object(i.jsx)("select",{value:e.value,className:t.join(" "),name:e.elementConfig.name,onChange:e.inputChanged,children:e.elementConfig.options.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.displayedValue},e.value)}))});break;case"textarea":a=Object(i.jsx)("textarea",Object(l.a)(Object(l.a)({className:t.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.inputChanged}));break;default:a=Object(i.jsx)("input",{})}return Object(i.jsxs)("div",{className:"input-container",children:[e.label?Object(i.jsx)("label",{className:"input-label",children:e.label}):null,a]})}},93:function(e,a,t){}}]);
//# sourceMappingURL=4.72c69a17.chunk.js.map