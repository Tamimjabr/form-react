(this.webpackJsonpform2=this.webpackJsonpform2||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=(t(14),t(2)),o=t(5),h=t(6),m=t(1),u=t(8),s=t(7);var d=function(e){return l.a.createElement("main",null,l.a.createElement("form",null,l.a.createElement("input",{name:"firstName",value:e.data.firstName,type:"text",placeholder:" First Name",onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{name:"lastName",value:e.data.lastName,type:"text",placeholder:"Last Name",onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{name:"age",value:e.data.age,type:"number",placeholder:"Your Age",onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{name:"gender",value:"male",type:"radio",checked:"male"===e.data.gender,onChange:e.handleChange}),"Male"),l.a.createElement("label",null,l.a.createElement("input",{name:"gender",value:"female",type:"radio",checked:"female"===e.data.gender,onChange:e.handleChange}),"Female"),l.a.createElement("select",{name:"destination",value:e.data.destination,onChange:e.handleChange},l.a.createElement("option",{value:"syria"},"Syria"),l.a.createElement("option",{value:"sweden"},"Sweden"),l.a.createElement("option",{value:"spain"},"Spain"),l.a.createElement("option",{value:"italy"},"Italy")),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{name:"isVegan",type:"checkbox",onChange:e.handleChange,checked:e.data.isVegan}),"Vegan?"),l.a.createElement("label",null,l.a.createElement("input",{name:"isKosher",type:"checkbox",onChange:e.handleChange,checked:e.data.isKosher})," isKosher?"),l.a.createElement("label",null,l.a.createElement("input",{name:"isLactoseFree",type:"checkbox",onChange:e.handleChange,checked:e.data.isLactoseFree}),"isLactoseFree?"),l.a.createElement("button",null,"Submit")),l.a.createElement("hr",null),l.a.createElement("h1",null,"Entered Information"),l.a.createElement("h3",null,"Your name: ",e.data.firstName," ",e.data.lastName),l.a.createElement("h3",null,"Your age: ",e.data.age),l.a.createElement("h3",null,"Your gender: ",e.data.gender),l.a.createElement("h3",null,"Your destination: ",e.data.destination),l.a.createElement("h3",null,"Your  dietary Restrictions: ",e.data.isKosher?"kosher":null," ",e.data.isLactoseFree?"LactoseFree":null,"  ",e.data.isVegan?"vegan":null))},g=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={firstName:"",lastName:"",age:"",gender:"",destination:"",isVegan:!1,isKosher:!1,isLactoseFree:!1},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(h.a)(t,[{key:"handleChange",value:function(e){"checkbox"===e.target.type?this.setState(Object(i.a)({},e.target.name,e.target.checked)):this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement(d,{handleChange:this.handleChange,data:this.state})}}]),t}(l.a.Component);var E=function(){return l.a.createElement(g,null)};c.a.render(l.a.createElement(E,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ddf27bad.chunk.js.map