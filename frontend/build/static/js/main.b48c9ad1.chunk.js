(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports=a(270)},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n,c,o,r,i,u,l=a(0),s=a.n(l),d=a(26),m=a.n(d),E=a(18),p=a(20),v=a(28),h=a(27),g=a(29),f=a(6),N=a(41),b=a(122),T=a(3);!function(e){e.CHANGE_VIEW="CHANGE_VIEW",e.REDIRECT_TO_BUDGET="REDIRECT_TO_BUDGET",e.REDIRECT_TO_REPORTS="REDIRECT_TO_REPORTS",e.REDIRECT_TO_ACCOUNTS="REDIRECT_TO_ACCOUNTS",e.ERROR="ERROR",e.DO_NOTHING="DO_NOTHING"}(n||(n={})),function(e){e.CREATE_CATEGORY="CREATE_CATEGORY",e.CREATE_CATEGORY_GROUP="CREATE_CATEGORY_GROUP",e.SET_NEXT_MONTH_ACTIVE="SET_NEXT_MONTH_ACTIVE",e.SET_PREV_MONTH_ACTIVE="SET_PREV_MONTH_ACTIVE",e.APPEND_MONTH="APPEND_MONTH",e.SET_CATEGORY_BUDGETED="SET_CATEGORY_BUDGETED",e.ADD_TO_ACTIVITY="ADD_TO_ACTIVITY"}(c||(c={})),function(e){e.SET_ACTIVE_ACCOUNT="SET_ACTIVE_ACCOUNT",e.CREATE_ACCOUNT="CREATE_ACCOUNT",e.ADD_TO_BALANCE="ADD_TO_BALANCE"}(o||(o={})),function(e){e.ADD_TRANSACTION="ADD_TRANSACTION",e.TRIGGER_NEW_TRANSACTION="TRIGGER_NEW_TRANSACTION",e.CANCEL_NEW_TRANSACTION="CANCEL_NEW_TRANSACTION",e.EDIT_TRANSACTION="EDIT_TRANSACTION",e.SELECT_TRANSACTION="SELECT_TRANSACTION",e.UNSELECT_TRANSACTION="UNSELECT_TRANSACTION",e.CLEAR_SELECTED="CLEAR_SELECTED",e.DELETE_TRANSACTION="DELETE_TRANSACTION"}(r||(r={})),function(e){e.ADD_PAYEE="ADD_PAYEE"}(i||(i={})),function(e){e[e.Budget=0]="Budget",e[e.Reports=1]="Reports",e[e.Accounts=2]="Accounts"}(u||(u={}));var O,y={view:u.Accounts},C=a(11);!function(e){e.Current="Current"}(O||(O={}));var A=a(21),w=a.n(A);function _(e){return e?{monthName:w()(e.monthName,"MMMYYYY").add(1,"months").format("MMMYYYY"),categoryGroups:Object(C.a)(e.categoryGroups),ageOfMoney:0,toBeBudgeted:0,categories:e.categories.map(function(e){return Object(T.a)({},e,{budgeted:0,activity:0})})}:{monthName:w()().format("MMMYYYY"),categoryGroups:[],ageOfMoney:0,toBeBudgeted:0,categories:[]}}var j={accounts:[{accountName:"Test Account",type:O.Current,onBudget:!0,closed:!1,balance:220,deleted:!1},{accountName:"Test Account 2",type:O.Current,onBudget:!0,closed:!1,balance:300,deleted:!1}],activeAccount:-1},R={months:[{monthName:"Apr2019",toBeBudgeted:0,categoryGroups:[{groupName:"Recreation",hidden:!1},{groupName:"Savings",hidden:!1}],categories:[{categoryName:"Holiday",categoryGroup:"Savings",budgeted:0,activity:0,balance:0,hidden:!1},{categoryName:"House",categoryGroup:"Savings",budgeted:0,activity:0,balance:0,hidden:!1}],ageOfMoney:0,note:"test month"},{monthName:"May2019",toBeBudgeted:0,categoryGroups:[{groupName:"Recreation",hidden:!1},{groupName:"Savings",hidden:!1}],categories:[{categoryName:"Holiday",categoryGroup:"Savings",budgeted:0,activity:520,balance:520,hidden:!1},{categoryName:"House",categoryGroup:"Savings",budgeted:0,activity:0,balance:0,hidden:!1}],ageOfMoney:0,note:"test month"}],activeMonth:1},S={transactions:[{id:"12345",accountName:"Test Account",payeeName:"Jane",categoryName:"Holiday",date:"27/05/2019",inflow:20,outflow:0,approved:!0,deleted:!1},{id:"54321",accountName:"Test Account",payeeName:"Jane",categoryName:"Holiday",date:"27/05/2019",inflow:200,outflow:0,approved:!0,deleted:!1},{id:"13579",accountName:"Test Account 2",payeeName:"Bob",categoryName:"Holiday",date:"28/05/2019",inflow:300,outflow:0,approved:!0,deleted:!1}],selectedTransactions:[],newTransaction:!1},D={payees:[{payeeName:"Bob",deleted:!1},{payeeName:"Jane",deleted:!1},{payeeName:"Super Duper Inc.",deleted:!1},{payeeName:"Deleted & Sons",deleted:!0}]},k=Object(N.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.CHANGE_VIEW:return Object(T.a)({},e,{view:t.payload})}return e},accounts:function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,c=arguments.length>1?arguments[1]:void 0,r=c.payload;switch(c.type){case o.SET_ACTIVE_ACCOUNT:return Object(T.a)({},n,{activeAccount:r.accountIndex});case o.CREATE_ACCOUNT:return Object(T.a)({},n,{accounts:[].concat(Object(C.a)(n.accounts),[(e=r.accountName,t=r.accountType,a=r.startingBalance,{accountName:e,type:t,onBudget:!0,closed:!1,balance:a,deleted:!1})])});case o.ADD_TO_BALANCE:return Object(T.a)({},n,{accounts:Object(C.a)(n.accounts.map(function(e){return r.accountName===e.accountName?Object(T.a)({},e,{balance:e.balance+r.amount}):Object(T.a)({},e)}))})}return n},budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case c.CREATE_CATEGORY:return Object(T.a)({},e,{months:e.months.map(function(e){return Object(T.a)({},e,{categories:[].concat(Object(C.a)(e.categories),[{categoryName:a.categoryName,categoryGroup:a.groupName,budgeted:0,activity:0,balance:0,hidden:!1}])})})});case c.CREATE_CATEGORY_GROUP:return Object(T.a)({},e,{months:e.months.map(function(e){return Object(T.a)({},e,{categoryGroups:[].concat(Object(C.a)(e.categoryGroups),[{groupName:a.groupName,hidden:!1}])})})});case c.APPEND_MONTH:var n=e.months[e.months.length-1];return Object(T.a)({},e,{months:[].concat(Object(C.a)(e.months),[_(n)])});case c.SET_NEXT_MONTH_ACTIVE:return Object(T.a)({},e,{activeMonth:e.activeMonth+1});case c.SET_PREV_MONTH_ACTIVE:return Object(T.a)({},e,{activeMonth:e.activeMonth-1});case c.SET_CATEGORY_BUDGETED:var o=e.months[e.activeMonth].categories.findIndex(function(e){return e.categoryName===a.categoryName}),r=a.value-e.months[e.activeMonth].categories[o].budgeted;return Object(T.a)({},e,{months:[].concat(Object(C.a)(e.months.slice(0,e.activeMonth)),Object(C.a)(e.months.slice(e.activeMonth).map(function(e,t){return Object(T.a)({},e,{toBeBudgeted:0===t?e.toBeBudgeted-r:e.toBeBudgeted,categories:[].concat(Object(C.a)(e.categories.slice(0,o)),[Object(T.a)({},e.categories[o],{budgeted:0===t?a.value:e.categories[o].budgeted,balance:e.categories[o].balance+=r})],Object(C.a)(e.categories.slice(o+1)))})})))});case c.ADD_TO_ACTIVITY:var i=w()(a.date,"DD/MM/YYYY").format("MMMYYYY");return console.log(a),Object(T.a)({},e,{months:Object(C.a)(e.months.map(function(e){return e.monthName!==i?Object(T.a)({},e):Object(T.a)({},e,{toBeBudgeted:"To Be Budgeted"===a.categoryName?e.toBeBudgeted+a.value:e.toBeBudgeted,categories:Object(C.a)(e.categories.map(function(e){return e.categoryName!==a.categoryName?Object(T.a)({},e):(console.log("here"),Object(T.a)({},e,{activity:e.activity+a.value,balance:e.balance+a.value}))}))})}))})}return Object(T.a)({},e)},transactions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case r.ADD_TRANSACTION:return Object(T.a)({},e,{transactions:[].concat(Object(C.a)(e.transactions),[{id:Math.random().toString(),accountName:a.accountName,payeeName:a.payeeName,categoryName:a.categoryName,date:a.date,inflow:a.inflow,outflow:a.outflow,approved:!0,deleted:!1}]),newTransaction:!1});case r.EDIT_TRANSACTION:return Object(T.a)({},e,{transactions:Object(C.a)(e.transactions.map(function(e){return e.id!==a.id?Object(T.a)({},e):Object(T.a)({},e,{accountName:a.accountName,payeeName:a.payeeName,categoryName:a.categoryName,date:a.date,inflow:a.inflow,outflow:a.outflow})}))});case r.TRIGGER_NEW_TRANSACTION:return Object(T.a)({},e,{newTransaction:!0});case r.CANCEL_NEW_TRANSACTION:return Object(T.a)({},e,{newTransaction:!1});case r.SELECT_TRANSACTION:return Object(T.a)({},e,{selectedTransactions:[].concat(Object(C.a)(e.selectedTransactions),[a.transactionID])});case r.UNSELECT_TRANSACTION:return Object(T.a)({},e,{selectedTransactions:Object(C.a)(e.selectedTransactions.filter(function(e){return e!==a.transactionID}))});case r.CLEAR_SELECTED:return Object(T.a)({},e,{selectedTransactions:[]});case r.DELETE_TRANSACTION:return Object(T.a)({},e,{transactions:Object(C.a)(e.transactions.map(function(t){return e.selectedTransactions.includes(t.id)?Object(T.a)({},t,{deleted:!0}):Object(T.a)({},t)})),selectedTransactions:[]})}return e},payees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case i.ADD_PAYEE:return Object(T.a)({},e,{payees:[].concat(Object(C.a)(e.payees),[{payeeName:a.payeeName,deleted:!1}])})}return Object(T.a)({},e)}});function I(e,t,a){return{type:c.ADD_TO_ACTIVITY,payload:{categoryName:e,date:t,value:a}}}function B(e){return{type:n.CHANGE_VIEW,payload:e}}function M(e){return{type:n.ERROR,payload:e}}var G=function(e){return function(t){return function(a){var n=e.getState();switch(a.type){case c.SET_NEXT_MONTH_ACTIVE:return n.budget.activeMonth+1>n.budget.months.length-1&&e.dispatch({type:c.APPEND_MONTH}),t(a);case c.CREATE_CATEGORY:return n.budget.months[0].categories.findIndex(function(e){return e.categoryName.toLowerCase()===a.payload.categoryName.toLowerCase()})>-1?t(M()):t(a);case c.CREATE_CATEGORY_GROUP:return n.budget.months[0].categoryGroups.findIndex(function(e){return e.groupName.toLowerCase()===a.payload.groupName.toLowerCase()})>-1?t(M()):t(a);default:return t(a)}}}};function Y(e){return{type:o.SET_ACTIVE_ACCOUNT,payload:{accountIndex:e}}}function L(e,t){return{type:o.ADD_TO_BALANCE,payload:{accountName:e,amount:t}}}var P=function(e){return function(t){return function(a){var n=a.payload,c=e.getState();switch(a.type){case r.ADD_TRANSACTION:return e.dispatch(L(n.accountName,n.inflow-n.outflow)),e.dispatch(I(n.categoryName,n.date,n.inflow-n.outflow)),t(a);case r.DELETE_TRANSACTION:return c.transactions.selectedTransactions.forEach(function(t){var a=c.transactions.transactions.find(function(e){return e.id===t});a&&(e.dispatch(L(a.accountName,-(a.inflow-a.outflow))),e.dispatch(I(a.categoryName,a.date,-(a.inflow-a.outflow))))}),t(a);case o.SET_ACTIVE_ACCOUNT:return e.dispatch({type:r.CLEAR_SELECTED}),t(a);case r.EDIT_TRANSACTION:var i=c.transactions.transactions.find(function(e){return e.id===n.id});return i&&(i.date!==n.date?(e.dispatch(I(i.categoryName,i.date,-(i.inflow-i.outflow))),e.dispatch(I(n.categoryName,n.date,i.inflow-i.outflow))):(e.dispatch(L(n.accountName,n.inflow-i.inflow-(n.outflow-i.outflow))),e.dispatch(I(n.categoryName,n.date,n.inflow-i.inflow-(n.outflow-i.outflow))))),t(a)}return t(a)}}};function V(){var e=Object(b.composeWithDevTools)(Object(N.applyMiddleware)(G,P));return Object(N.createStore)(k,e)}a(151);var U=a(9),x=a(10),H=a.n(x),W=(a(152),function(e){var t=e.icon,a=e.label,n=e.active,c=Object(U.a)(e,["icon","label","active"]),o=H()({"view-control":!0,active:n});return s.a.createElement("div",{onClick:c.onClick,className:o},s.a.createElement("div",null,s.a.createElement("span",{className:"icon"},t),s.a.createElement("span",{className:"label"},a)))});a(153),a(154);var F,J=Object(f.b)(function(e){return{accounts:e.accounts.accounts,activeAccount:e.accounts.activeAccount,view:e.app.view}},function(e){return{setActiveAccount:function(t){return e(Y(t))},setAppView:function(t){return e(B(t))}}})(function(e){var t=e.accounts,a=e.activeAccount,n=e.view,c=Object(U.a)(e,["accounts","activeAccount","view"]);return s.a.createElement("div",{className:"account-picker"},s.a.createElement("div",{className:"account-picker-header"},"BUDGET"),s.a.createElement("div",{className:"account-picker-accounts"},t.filter(function(e){return e.onBudget}).map(function(e,t){return s.a.createElement("div",{onClick:function(){return e=t,c.setActiveAccount(e),void c.setAppView(u.Accounts);var e},key:e.accountName,className:H()({"account-picker-account":!0,active:a===t&&n===u.Accounts})},s.a.createElement("span",null,e.accountName),s.a.createElement("span",null,e.balance))})))}),X=(a(155),function(e){var t=H()({button:!0,filled:e.filled,small:e.small,round:e.round});return s.a.createElement("button",{className:t,onClick:e.onClick},e.children)}),z=a(15),$=(a(156),a(157),function(e){var t=Object(l.useState)({marginTop:"0px",marginLeft:"0px"}),a=Object(z.a)(t,2),n=a[0],c=a[1];return Object(l.useEffect)(function(){var e=document.getElementsByClassName("modal-container")[0],t=e.clientWidth,a=e.clientHeight;return c({marginTop:-a/2+"px",marginLeft:-t/2+"px"}),function(){e.classList.add("show")}}),s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"modal-backdrop"},s.a.createElement("div",{style:n,className:"modal-container"},s.a.cloneElement(e.children,{closeModal:e.onClose}))))}),q=function(e){var t=e.trigger,a=Object(U.a)(e,["trigger"]),n=Object(l.useState)(!1),c=Object(z.a)(n,2),o=c[0],r=c[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{onClick:function(){return r(!o)}},t),o?s.a.createElement($,{okAction:function(){r(!1),a.okAction&&a.okAction()},onClose:function(){r(!1),a.cancelAction&&a.cancelAction()}},a.children):null)},K=(a(158),a(159),function(e){var t=e.placeholder,a=e.value,n=e.name,c=e.hoverable,o=e.label,r=Object(U.a)(e,["placeholder","value","name","hoverable","label"]),i=Object(l.useState)(!1),u=Object(z.a)(i,2),d=u[0],m=u[1],E=Object(l.useState)(!1),p=Object(z.a)(E,2),v=p[0],h=p[1];return s.a.createElement("div",{className:"input-wrapper"},!c||v||d?s.a.createElement(s.a.Fragment,null,o?s.a.createElement("div",{className:"input-label"},o):null,s.a.createElement("input",{className:"input",placeholder:t,name:n,value:a,onChange:function(e){r.onChange(e)},onBlur:function(){h(!1),r.onBlur&&r.onBlur()},onFocus:function(){return h(!0)},onMouseLeave:function(){return m(!1)}})):s.a.createElement("div",{className:"input-off",onMouseEnter:function(){return m(!0)}},a))});a(160);!function(e){e.Literal="Literal",e.Operator="Operator",e.LeftParenth="LeftParenth",e.RightParenth="RightParenth",e.DecimalPoint="DecimalPoint"}(F||(F={}));var Q=function e(t,a){Object(E.a)(this,e),this.type=void 0,this.value=void 0,this.type=t,this.value=a},Z=function(){function e(){Object(E.a)(this,e),this.prec={"+":2,"-":2,"*":3,"/":3}}return Object(p.a)(e,[{key:"precedence",value:function(e){return this.prec[e]}},{key:"peek",value:function(e){return e[e.length-1]}},{key:"isDigit",value:function(e){return/\d/.test(e)}},{key:"isOperator",value:function(e){return/\+|-|\*|\/|\^/.test(e)}},{key:"isLeftParenth",value:function(e){return"("===e}},{key:"isRightParenth",value:function(e){return")"===e}},{key:"isDecimalPoint",value:function(e){return"."===e}},{key:"tokenise",value:function(e){var t=this;if(!e)return[];var a=[],n=[],c=function(){n.length&&(a.push(new Q(F.Literal,n.join(""))),n=[])};return e.split("").forEach(function(e,o){t.isDigit(e)?n.push(e):t.isDecimalPoint(e)?n.push(e):t.isOperator(e)?n.length||a.length&&t.peek(a).type===F.RightParenth?(c(),a.push(new Q(F.Operator,e))):n.push(e):t.isLeftParenth(e)?(c(),a.push(new Q(F.LeftParenth,e))):t.isRightParenth(e)&&(c(),a.push(new Q(F.RightParenth,e)))}),c(),a.map(function(e){return e.value})}},{key:"parse",value:function(e){var t=this,a=this.tokenise(e),n=[],c=[];return a.forEach(function(e){switch(e){case"-":case"/":case"*":case"+":for(;["+","-","*","/"].includes(t.peek(n))&&!(t.precedence(t.peek(n))<t.precedence(e));)c.push(n.pop());n.push(e);break;case"(":n.push(e);break;case")":for(;"("!==t.peek(n);)c.push(n.pop());n.pop();break;default:c.push(e)}}),c.concat(n.reverse())}},{key:"evaluate",value:function(e){var t=this.parse(e);if(!t||!t.length)return NaN;var a=[];try{t.forEach(function(e){var t=Number(e);if(t===t)return a.push(t);var n=a.pop(),c=a.pop();if(void 0===n||void 0===c)throw new Error("Expression Invalid");switch(e){case"+":a.push(c+n);break;case"-":a.push(c-n);break;case"/":a.push(c/n);break;case"*":a.push(c*n);break;default:throw new Error("Expression Invalid")}})}catch(Error){return NaN}return a.pop()}}]),e}(),ee=function(e){var t=e.placeholder,a=e.value,n=e.name,c=e.hoverable,o=e.label,r=Object(U.a)(e,["placeholder","value","name","hoverable","label"]);return s.a.createElement(K,{placeholder:t,label:o,name:n,value:a,onChange:r.onChange,onBlur:function(){var e=(new Z).evaluate(a);r.onBlur(e)},hoverable:c})},te=(a(161),function(e){var t=e.options,a=e.value,n=e.name,c=e.label,o=Object(U.a)(e,["options","value","name","label"]);return s.a.createElement(s.a.Fragment,null,c?s.a.createElement("div",{className:"drop-down-label"},c):null,s.a.createElement("select",{name:n,value:a,onChange:o.onChange,className:"drop-down"},t.map(function(e){return s.a.createElement("option",{value:e,key:e},e)})))});function ae(e){var t={accountName:"All Accounts",type:O.Current,onBudget:!0,closed:!1,balance:0,deleted:!1};return e.reduce(function(e,t){return{accountName:e.accountName,type:e.type,onBudget:e.onBudget,closed:e.closed,balance:e.balance+t.balance,deleted:e.deleted}},t)}function ne(){var e=[];for(var t in O)e.push(t);return e}var ce=Object(f.b)(null,function(e){return{addAccount:function(t,a,n){return e(function(e,t,a){return{type:o.CREATE_ACCOUNT,payload:{accountName:e,accountType:t,startingBalance:a}}}(t,a,n))}}})(function(e){var t=Object(l.useState)(""),a=Object(z.a)(t,2),n=a[0],c=a[1],o=Object(l.useState)("0.0"),r=Object(z.a)(o,2),i=r[0],u=r[1],d=Object(l.useState)(O.Current),m=Object(z.a)(d,2),E=m[0],p=m[1];return s.a.createElement("div",{className:"new-account-form"},s.a.createElement("div",{className:"new-account-form-item"},s.a.createElement(K,{name:"accountName",label:"Account Name",value:n,onChange:function(e){return c(e.target.value)}})),s.a.createElement("div",{className:"new-account-form-item"},s.a.createElement(te,{value:E,label:"Account Type",options:ne(),onChange:function(e){return p(e.target.value)}})),s.a.createElement("div",{className:"new-account-form-item"},s.a.createElement(ee,{name:"startBalance",label:"Starting Balance",value:i,onBlur:u,onChange:function(e){return u(e.target.value)}})),s.a.createElement(X,{filled:!0,onClick:function(){e.addAccount(n,E,Number(i)),e.closeModal&&e.closeModal()}},"Add Account"))});var oe=Object(f.b)(function(e){return{view:e.app.view}},function(e){return{changeView:function(t){return e(B(t))},setActiveAccount:function(t){return e(Y(t))}}})(function(e){var t=e.view,a=Object(U.a)(e,["view"]);return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"name"},"Liam"),s.a.createElement("div",{className:"view-controls"},s.a.createElement(W,{onClick:function(){return a.changeView(u.Budget)},active:t===u.Budget,icon:"B",label:"Budget"}),s.a.createElement(W,{onClick:function(){return a.changeView(u.Reports)},active:t===u.Reports,icon:"R",label:"Reports"}),s.a.createElement(W,{onClick:function(){a.changeView(u.Accounts),a.setActiveAccount(-1)},active:t===u.Accounts,icon:"A",label:"Accounts"})),s.a.createElement(J,null),s.a.createElement("div",{className:"add-account-button"},s.a.createElement(q,{trigger:s.a.createElement(X,{filled:!0,small:!0},"Add Account")},s.a.createElement(ce,null))))});a(162),a(163),a(164),a(165);var re=Object(f.b)(function(e){return{activeMonth:e.budget.months[e.budget.activeMonth],activeMonthIndex:e.budget.activeMonth}},function(e){return{nextMonth:function(){return e({type:c.SET_NEXT_MONTH_ACTIVE})},previousMonth:function(){return e({type:c.SET_PREV_MONTH_ACTIVE})}}})(function(e){var t,a=e.activeMonth,n=e.activeMonthIndex,c=Object(U.a)(e,["activeMonth","activeMonthIndex"]);return s.a.createElement("div",{className:"month-control"},s.a.createElement("button",{disabled:n<1,onClick:c.previousMonth},"<"),s.a.createElement("div",{className:"month-name"},8===(t=a.monthName).length?t:(t.slice(0,3)+" "+t.slice(3)).toUpperCase()),s.a.createElement("button",{onClick:c.nextMonth},">"))}),ie=(a(166),a(167),function(e){var t=e.value,a=e.label,n=e.large;Object(U.a)(e,["value","label","large"]);return s.a.createElement("div",{className:H()({"value-indicator":!0,positive:t>=0,negative:t<0,large:n})},s.a.createElement("div",{className:"value-indicator-value"},t.toFixed(2)),a?s.a.createElement("div",{className:"value-indicator-label"},a):null)});var ue=Object(f.b)(function(e){return{toBeBudgeted:e.budget.months[e.budget.activeMonth].toBeBudgeted}})(function(e){var t=e.toBeBudgeted;Object(U.a)(e,["toBeBudgeted"]);return s.a.createElement("div",{className:"month-summary"},s.a.createElement("div",{className:"to-be-budgeted"},s.a.createElement(ie,{large:!0,value:t,label:"To Be Budgeted"})),s.a.createElement("div",null," I'm a placeholder"))}),le=function(){return s.a.createElement("div",{className:"budget-header"},s.a.createElement(re,null),s.a.createElement(ue,null),s.a.createElement("div",{className:"age-of-money"},"40 years"))},se=(a(168),a(169),a(170),a(171),a(123)),de=a.n(se),me=function(e){var t=e.trigger,a=Object(U.a)(e,["trigger"]),n=Object(l.useState)(!1),c=Object(z.a)(n,2),o=c[0],r=c[1],i=Object(l.useState)(null),u=Object(z.a)(i,2),d=u[0],m=u[1],E=function(){r(!1)};return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{onClick:function(e){r(!o),m(e.currentTarget)}},t),o?s.a.createElement(de.a,{open:!0,anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:E},s.a.createElement("div",{className:"popup"},s.a.createElement("div",{className:"popup-content"},a.children),s.a.createElement("div",{className:"popup-buttons"},s.a.createElement(X,{onClick:E},"Cancel"),s.a.createElement(X,{filled:!0,onClick:function(){a.okAction(),r(!1)}},"Ok")))):null)},Ee=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={showAddButton:!1,newCategoryName:""},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"onNewNameChange",value:function(e){this.setState({newCategoryName:e.target.value})}},{key:"onAddCategoryClick",value:function(){this.props.addCategory(this.props.categoryGroup.groupName,this.state.newCategoryName)}},{key:"onMouseEnter",value:function(){this.setState({showAddButton:!0})}},{key:"onMouseLeave",value:function(){this.setState({showAddButton:!1})}},{key:"render",value:function(){return s.a.createElement("div",{className:"budget-category-group-row",onMouseEnter:this.onMouseEnter.bind(this),onMouseLeave:this.onMouseLeave.bind(this)},s.a.createElement("div",{className:"budget-category-group-row-name"},s.a.createElement("span",null,this.props.categoryGroup.groupName),this.state.showAddButton?s.a.createElement("span",{className:"add-button"},s.a.createElement(me,{okAction:this.onAddCategoryClick.bind(this),trigger:s.a.createElement(X,{round:!0,small:!0},"+")},s.a.createElement(K,{name:"new-category",value:this.state.newCategoryName,placeholder:"Add Category...",onChange:this.onNewNameChange.bind(this)}))):null),s.a.createElement("div",null,this.props.totalBudgeted.toFixed(2)),s.a.createElement("div",null,this.props.totalActivity.toFixed(2)),s.a.createElement("div",null,this.props.totalBalance.toFixed(2)))}}]),t}(l.PureComponent);var pe=Object(f.b)(null,function(e){return{addCategory:function(t,a){return e(function(e,t){return{type:c.CREATE_CATEGORY,payload:{categoryName:t,groupName:e}}}(t,a))}}})(Ee);a(257);var ve=Object(f.b)(null,function(e){return{setCategoryBudgeted:function(t,a){e(function(e,t){return{type:c.SET_CATEGORY_BUDGETED,payload:{categoryName:e,value:t}}}(t,a))}}})(function(e){var t=Object(l.useState)(e.category.budgeted.toFixed(2)),a=Object(z.a)(t,2),n=a[0],c=a[1];return Object(l.useEffect)(function(){return c(e.category.budgeted.toFixed(2))},[e]),s.a.createElement("div",{className:"budget-category-row"},s.a.createElement("div",{className:"budget-category-row-name"},e.category.categoryName),s.a.createElement(ee,{hoverable:!0,name:"budgeted",value:n,onChange:function(e){return c(e.target.value)},onBlur:function(t){t===t?(e.setCategoryBudgeted(e.category.categoryName,t),c(t.toFixed(2))):c((0).toFixed(2))}}),s.a.createElement("div",null,e.category.activity.toFixed(2)||(0).toFixed(2)),s.a.createElement("div",null,s.a.createElement(ie,{value:e.category.balance})))});var he=Object(f.b)(function(e){var t=e.budget.months[e.budget.activeMonth];return{categories:t.categories,groups:t.categoryGroups}})(function(e){var t=e.categories,a=e.groups;Object(U.a)(e,["categories","groups"]);return s.a.createElement("div",{className:"budget-categories"},s.a.createElement("div",{className:"budget-categories-header"},s.a.createElement("div",null,"CATEGORY"),s.a.createElement("div",null,"BUDGETED"),s.a.createElement("div",null,"ACTIVITY"),s.a.createElement("div",null,"AVAILABLE")),a.map(function(e,a){var n=t.filter(function(t){return e.groupName===t.categoryGroup}),c=n.reduce(function(e,t){return e+t.budgeted},0),o=n.reduce(function(e,t){return e+t.activity},0),r=n.reduce(function(e,t){return e+t.balance},0);return s.a.createElement("div",{key:a},s.a.createElement(pe,{categoryGroup:e,totalBudgeted:c,totalActivity:o,totalBalance:r}),n.map(function(e,t){return s.a.createElement(ve,{key:t,category:e})}))}))}),ge=(a(258),function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"budget-sidebar"})}}]),t}(l.PureComponent)),fe=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={newCategoryName:""},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState({newCategoryName:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"budget-content"},s.a.createElement("div",{className:"budget-category-toolbar"},s.a.createElement(me,{okAction:function(){return e.props.addCategoryGroup(e.state.newCategoryName)},trigger:s.a.createElement(X,{small:!0},"Add Category")},s.a.createElement(K,{name:"new-category",placeholder:"New Category Group",value:this.state.newCategoryName,onChange:this.handleChange.bind(this)}))),s.a.createElement("div",{className:"budget-category-controls"},s.a.createElement(he,null),s.a.createElement(ge,null)))}}]),t}(l.PureComponent);var Ne=Object(f.b)(null,function(e){return{addCategoryGroup:function(t){e(function(e){return{type:c.CREATE_CATEGORY_GROUP,payload:{groupName:e}}}(t))}}})(fe),be=function(){return s.a.createElement("div",{className:"budget"},s.a.createElement(le,null),s.a.createElement(Ne,null))};a(259),a(260);var Te=Object(f.b)(function(e){return{account:-1===e.accounts.activeAccount?ae(e.accounts.accounts):e.accounts.accounts[e.accounts.activeAccount]}})(function(e){return s.a.createElement("div",{className:"accounts-header"},s.a.createElement("div",{className:"accounts-header-name"},e.account.accountName),s.a.createElement("div",{className:"balance"},e.account.balance))}),Oe=(a(261),a(262),a(71)),ye=(a(263),a(124)),Ce=(a(268),function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).wrapperRef=null,a.state={editing:!!a.props.new,selected:a.props.new||!!a.props.selected,transaction:Object(T.a)({},a.props.transaction)},a.onDateChange=function(e){a.setState({transaction:Object(T.a)({},a.state.transaction,{date:w()(e).format("DD/MM/YYYY")})})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({transaction:Object(T.a)({},e.transaction),selected:!!e.selected})}},{key:"handleChange",value:function(e){this.setState({transaction:Object(T.a)({},this.state.transaction,Object(Oe.a)({},e.target.name,e.target.value))})}},{key:"renderStatic",value:function(){var e=this.state,t=e.transaction,a=e.selected,n=H()({"accounts-transaction":!0,selected:!!a});return s.a.createElement("div",{onClick:this.onClick.bind(this),onDoubleClick:this.onDoubleClick.bind(this),className:n},s.a.createElement("div",{className:"transaction-account"},t.accountName),s.a.createElement("div",{className:"transaction-date"},t.date),s.a.createElement("div",{className:"transaction-payee"},t.payeeName),s.a.createElement("div",{className:"transaction-category"},t.categoryName),s.a.createElement("div",{className:"transaction-inflow"},t.inflow),s.a.createElement("div",{className:"transaction-outflow"},t.outflow))}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"onDoubleClick",value:function(){this.state.editing||this.setState({editing:!0})}},{key:"onClick",value:function(){this.state.selected?this.props.unselectTransaction(this.state.transaction.id):this.props.selectTransaction(this.state.transaction.id),this.setState({selected:!this.state.selected})}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.onCancel()}},{key:"onCancel",value:function(){if(this.props.new)return this.props.cancelNewTransaction();this.setState({editing:!1,transaction:Object(T.a)({},this.props.transaction)})}},{key:"onSave",value:function(){this.props.new?this.props.addNewTransaction(this.state.transaction):this.props.saveEditedTransaction(this.state.transaction),this.onCancel()}},{key:"renderEditing",value:function(){var e=this,t=this.state.transaction;return s.a.createElement("div",{ref:function(t){return e.wrapperRef=t},className:"accounts-transaction"},s.a.createElement("div",{className:"transaction-account"},s.a.createElement(te,{name:"accountName",value:t.accountName,onChange:this.handleChange.bind(this),options:this.props.accounts.map(function(e){return e.accountName})})),s.a.createElement("div",{className:"transaction-date"},s.a.createElement(ye.a,{name:"date",dateFormat:"DD/MM/YYYY",selected:new Date(w()(this.state.transaction.date,"DD/MM/YYYY").format()),className:"input",value:t.date,onChange:this.onDateChange})),s.a.createElement("div",{className:"transaction-payee"},s.a.createElement(te,{name:"payeeName",value:t.payeeName,onChange:this.handleChange.bind(this),options:this.props.payees.filter(function(e){return!e.deleted}).map(function(e){return e.payeeName})})),s.a.createElement("div",{className:"transaction-category"},s.a.createElement(te,{name:"categoryName",value:t.categoryName,onChange:this.handleChange.bind(this),options:this.props.categories.map(function(e){return e.categoryName}).concat(["To Be Budgeted"])})),s.a.createElement("div",{className:"transaction-inflow"},s.a.createElement(K,{name:"inflow",value:t.inflow.toString(),onChange:this.handleChange.bind(this)})),s.a.createElement("div",{className:"transaction-outflow"},s.a.createElement(K,{name:"outflow",value:t.outflow.toString(),onChange:this.handleChange.bind(this)})),s.a.createElement(X,{onClick:this.onCancel.bind(this)},"Cancel"),s.a.createElement(X,{onClick:this.onSave.bind(this)},"Save"))}},{key:"render",value:function(){return this.state.editing?this.renderEditing():this.renderStatic()}}]),t}(l.PureComponent));var Ae=Object(f.b)(function(e){return{accounts:e.accounts.accounts,categories:e.budget.months[0].categories,payees:e.payees.payees}},function(e){return{addNewTransaction:function(t){return e(function(e){return{type:r.ADD_TRANSACTION,payload:Object(T.a)({},e)}}(t))},saveEditedTransaction:function(t){return e(function(e){return{type:r.EDIT_TRANSACTION,payload:Object(T.a)({},e)}}(t))},cancelNewTransaction:function(){return e({type:r.CANCEL_NEW_TRANSACTION})},selectTransaction:function(t){return e(function(e){return{type:r.SELECT_TRANSACTION,payload:{transactionID:e}}}(t))},unselectTransaction:function(t){return e(function(e){return{type:r.UNSELECT_TRANSACTION,payload:{transactionID:e}}}(t))}}})(Ce);var we=Object(f.b)(function(e){return{activeAccount:-1===e.accounts.activeAccount?ae(e.accounts.accounts):e.accounts.accounts[e.accounts.activeAccount],newTransaction:e.transactions.newTransaction,transactions:e.transactions.transactions,selectedTransactions:e.transactions.selectedTransactions}})(function(e){var t=e.activeAccount,a=e.transactions,n=e.newTransaction,c=e.selectedTransactions;return s.a.createElement("div",{className:"accounts-transactions"},s.a.createElement("div",{className:"accounts-transactions-header"},s.a.createElement("div",null,"ACCOUNT"),s.a.createElement("div",null,"DATE"),s.a.createElement("div",null,"PAYEE"),s.a.createElement("div",null,"CATEGORY"),s.a.createElement("div",null,"INFLOW"),s.a.createElement("div",null,"OUTFLOW")),n?s.a.createElement(Ae,{new:!0,transaction:{id:"123456",accountName:t.accountName,payeeName:"No one",categoryName:"To Be Budgeted",date:w()().format("DD/MM/YYYY"),inflow:0,outflow:0,approved:!1,deleted:!1}}):null,a.map(function(e){if(!e.deleted&&(e.accountName===t.accountName||"All Accounts"===t.accountName))return s.a.createElement(Ae,{selected:c.includes(e.id),key:e.id,transaction:e})}))});var _e=Object(f.b)(null,function(e){return{triggerNewTransaction:function(){return e({type:r.TRIGGER_NEW_TRANSACTION})},deleteTransaction:function(){return e({type:r.DELETE_TRANSACTION})}}})(function(e){return s.a.createElement("div",{className:"accounts-content"},s.a.createElement("div",{className:"accounts-toolbar"},s.a.createElement(X,{small:!0,onClick:e.triggerNewTransaction},"Add Transaction"),s.a.createElement(X,{small:!0,onClick:e.deleteTransaction},"Delete")),s.a.createElement(we,null))}),je=function(){return s.a.createElement("div",{className:"accounts"},s.a.createElement(Te,null),s.a.createElement(_e,null))};var Re=Object(f.b)(function(e){return{view:e.app.view}})(function(e){return s.a.createElement("div",{className:"main"},function(){switch(e.view){case u.Budget:return s.a.createElement(be,null);case u.Accounts:return s.a.createElement(je,null)}}())}),Se=function(){return s.a.createElement("div",{id:"index"},s.a.createElement(oe,null),s.a.createElement(Re,null))},De=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f.a,{store:V()},s.a.createElement(Se,null)))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(269);m.a.render(s.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,1,2]]]);
//# sourceMappingURL=main.b48c9ad1.chunk.js.map