(this["webpackJsonpquick-exchange"]=this["webpackJsonpquick-exchange"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=a(1),o=a.n(s),u=a(2),i=a(3),m=a(5),f=a(4),h=a(6),d=(a(15),function(){return r.a.createElement("h1",{className:"exchange__header"},"quick exchange rates")}),S=function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,[{key:"getResult",value:function(e){var t,a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",headers:{"x-rapidapi-host":"currency-exchange.p.rapidapi.com","x-rapidapi-key":"72242015e9msh2c7f82ee85af508p1ae55fjsn096772dfe79a"}},n.next=3,o.a.awrap(fetch(e,t));case 3:if((a=n.sent).ok){n.next=6;break}throw new Error;case 6:return n.next=8,o.a.awrap(a.json());case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}))}},{key:"getList",value:function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(this.getResult("https://currency-exchange.p.rapidapi.com/listquotes"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),null,this)}},{key:"getValue",value:function(e,t,a){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap(this.getResult("https://currency-exchange.p.rapidapi.com/exchange?q=".concat(e,"&from=").concat(t,"&to=").concat(a)));case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),null,this)}}]),e}(),b=(a(16),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"loadingio-spinner-spinner-yfgft1macmr"},r.a.createElement("div",{className:"ldio-njgkmrm404m"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))))}),p=(a(17),function(e){var t=e.isButtonDisabled,a=e.onButtonClick,n=["btn","btn-primary","exchange__button","align-self-end","col-md-3"];t&&n.push("disabled");var c=n.join(" ");return r.a.createElement("button",{onClick:a,className:c},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")}),v=(a(18),function(e){var t=e.value;return r.a.createElement("option",{value:t},t)}),k=(a(19),function(){var e=(void 0).props.label;return r.a.createElement("div",null,r.a.createElement("span",{className:"exchange__error"},e))}),E=(a(20),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={array:null,loading:!0,error:!1},a.api=new S,a.onError=function(){a.setState({error:!0})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getOptionsList()}},{key:"getOptionsList",value:function(){var e=this;this.api.getList().then((function(t){return e.setState({array:t,loading:!1})})).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.loading,n=e.array,c=this.props,l=c.onAmountChange,s=c.onFirstSelectChange,o=c.onSecondSelectChange,u=c.onButtonClick,i=c.isButtonDisabled;if(t)return r.a.createElement(k,{label:"API ERROR"});if(a)return r.a.createElement(b,null);var m=n.map((function(e){return r.a.createElement(v,{key:e,value:e})}));return r.a.createElement("form",null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("label",{htmlFor:"amount"},"Amount"),r.a.createElement("input",{required:!0,type:"number",className:"form-control",id:"amount",onChange:l}))),r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("label",{className:"my-1 mr-2",htmlFor:"select1"},"From"),r.a.createElement("select",{className:"custom-select mr-sm-2",id:"select1",onChange:s},m))),r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("label",{className:"my-1 mr-2",htmlFor:"select2"},"To"),r.a.createElement("select",{className:"custom-select mr-sm-2",id:"select2",onChange:o},m))),r.a.createElement(p,{onButtonClick:u,isButtonDisabled:i})))}}]),t}(n.Component)),g=(a(21),function(e){var t=e.value,a=e.toValue;return e.onShowResult?r.a.createElement("div",{className:"exchange__result"},r.a.createElement("p",null,"".concat(t," ").concat(a))):r.a.createElement("div",{className:"exchange__result"})}),D=(a(22),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).api=new S,a.state={amount:0,fromValue:"SGD",toValue:"SGD",result:null,isShowResult:!1,isButtonDisabled:!0},a.onFirstSelectChange=function(e){switch(e.target.value){case"USD":a.setState({fromValue:"USD"});break;case"EUR":a.setState({fromValue:"EUR"});break;case"RUB":a.setState({fromValue:"RUB"});break;case"SGD":a.setState({fromValue:"SGD"});break;case"MYR":a.setState({fromValue:"MYR"});break;case"AUD":a.setState({fromValue:"AUD"});break;case"JPY":a.setState({fromValue:"JPY"});break;case"HKD":a.setState({fromValue:"HKD"});break;case"CNH":a.setState({fromValue:"CNH"});break;case"CAD":a.setState({fromValue:"CAD"});break;case"INR":a.setState({fromValue:"INR"});break;case"DKK":a.setState({fromValue:"DKK"});break;case"GBP":a.setState({fromValue:"GBP"});break;case"NZD":a.setState({fromValue:"NZD"});break;case"MXN":a.setState({fromValue:"MXN"});break;case"IDR":a.setState({fromValue:"IDR"});break;case"TWD":a.setState({fromValue:"TWD"});break;case"THB":a.setState({fromValue:"THB"});break;case"VND":a.setState({fromValue:"VND"});break;default:a.setState({value:""})}a.setState({isShowResult:!1})},a.onSecondSelectChange=function(e){switch(e.target.value){case"USD":a.setState({toValue:"USD"});break;case"EUR":a.setState({toValue:"EUR"});break;case"RUB":a.setState({toValue:"RUB"});break;case"SGD":a.setState({toValue:"SGD"});break;case"MYR":a.setState({toValue:"MYR"});break;case"AUD":a.setState({toValue:"AUD"});break;case"JPY":a.setState({toValue:"JPY"});break;case"HKD":a.setState({toValue:"HKD"});break;case"CNH":a.setState({toValue:"CNH"});break;case"CAD":a.setState({toValue:"CAD"});break;case"INR":a.setState({toValue:"INR"});break;case"DKK":a.setState({toValue:"DKK"});break;case"GBP":a.setState({toValue:"GBP"});break;case"NZD":a.setState({toValue:"NZD"});break;case"MXN":a.setState({toValue:"MXN"});break;case"IDR":a.setState({toValue:"IDR"});break;case"TWD":a.setState({toValue:"TWD"});break;case"THB":a.setState({toValue:"THB"});break;case"VND":a.setState({toValue:"VND"});break;default:a.setState({value:""})}a.setState({isShowResult:!1})},a.onAmountChange=function(e){a.setState({amount:e.target.value,isButtonDisabled:!1})},a.onButtonClick=function(e){var t,n,r,c,l,s;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=a.state,n=t.amount,r=t.fromValue,c=t.toValue,e.preventDefault(),u.next=4,o.a.awrap(a.api.getValue(n,r,c));case 4:return l=u.sent,u.next=7,o.a.awrap(l);case 7:u.t0=u.sent,u.t1=n,s=u.t0*u.t1,a.setState({result:s.toFixed(3),isShowResult:!0});case 11:case"end":return u.stop()}}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.result,a=e.isShowResult,n=e.toValue,c=e.isButtonDisabled;return r.a.createElement("div",null,r.a.createElement("div",{className:"container exchange"},r.a.createElement(d,null),r.a.createElement(E,{onButtonClick:this.onButtonClick,onFirstSelectChange:this.onFirstSelectChange,onSecondSelectChange:this.onSecondSelectChange,onAmountChange:this.onAmountChange,isButtonDisabled:c}),r.a.createElement(g,{value:t,toValue:n,onShowResult:a})))}}]),t}(n.Component));l.a.render(r.a.createElement(D,null),document.querySelector("#root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.20abedd1.chunk.js.map