(this.webpackJsonpburgerproject=this.webpackJsonpburgerproject||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K"}},function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},,function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load1:"Spinner_load1__1BXDX"}},,function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},,function(e,t,n){e.exports=n(83)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),l=n.n(o),i=n(13),c=(n(60),n(2)),s=n(3),u=n(5),d=n(4),p=function(e){return e.children},m=n(39),h=n.n(m),g=n(40),v=n.n(g),f=function(e){return e.show?r.a.createElement("div",{className:v.a.Backdrop,onClick:e.clicked}):null},b=n(41),E=n.n(b),_=n(42),y=n.n(_),C=function(e){return r.a.createElement("div",{className:E.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:y.a,alt:"MyBurger"}))},k=n(21),O=n.n(k),j=n(43),S=n.n(j),B=n(23),w=n.n(B),N=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement(i.b,{to:e.link,exact:e.exact,activeClassName:w.a.active},e.children))},x=function(){return r.a.createElement("ul",{className:S.a.NavigationItems},r.a.createElement(N,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(N,{link:"/orders"},"Orders"))},D=n(45),I=n.n(D),T=function(e){return r.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},L=function(e){return r.a.createElement("header",{className:O.a.Toolbar},r.a.createElement(T,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:O.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:O.a.DesktopOnly},r.a.createElement(x,null)))},H=n(16),M=n.n(H),P=function(e){var t=[M.a.SideDrawer,M.a.Close];return e.open&&(t=[M.a.SideDrawer,M.a.Open]),r.a.createElement(p,null,r.a.createElement(f,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:M.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(x,null))))},R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(L,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),n}(a.Component),q=n(11),A=n(54),F=n(46),U=n.n(F),V=n(12),Y=n.n(V),K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Y.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Y.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:Y.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:Y.a.Salad});break;default:e=null}return e}}]),n}(a.Component),X=n(1),W=Object(X.f)((function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(A.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(K,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:U.a.Burger},r.a.createElement(K,{type:"bread-top"}),t,r.a.createElement(K,{type:"bread-bottom"}))})),J=n(26),z=n.n(J),Z=n(19),G=n.n(Z),Q=function(e){return r.a.createElement("div",{className:G.a.BuildControl},r.a.createElement("div",{className:G.a.Label},e.label),r.a.createElement("button",{className:G.a.Less,onClick:e.removed,disabled:e.disabled},"Remove"),r.a.createElement("button",{className:G.a.More,onClick:e.added},"Add"))},$=[{label:"Salad Rs.5",type:"salad"},{label:"Bacon Rs.10",type:"bacon"},{label:"Cheese Rs.10",type:"cheese"},{label:"Meat Rs.20",type:"meat"}],ee=function(e){return r.a.createElement("div",{className:z.a.BuildControls},r.a.createElement("p",null,"Current Price Rs. ",r.a.createElement("strong",null,e.price.toFixed(2))),$.map((function(t){return r.a.createElement(Q,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},te=n(47),ne=n.n(te),ae=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("[Modal] did update")}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(f,{show:this.props.show,clicked:this.props.modalClosed})," ",r.a.createElement("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(a.Component),re=n(27),oe=n.n(re),le=function(e){return r.a.createElement("button",{className:[oe.a.Button,oe.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){console.log("[Ordersummary] did update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",null,r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.props.ingredients[t])}));return r.a.createElement(p,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Delicious burger with following ingredients"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price:",this.props.price.toFixed(2))),r.a.createElement(le,{btnType:"Danger",clicked:this.props.purchaseCanceled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:this.props.purchaseContinued},"Continue"))}}]),n}(a.Component),ce=n(48),se=n.n(ce).a.create({baseURL:"https://react-my-burger-ff590.firebaseio.com/"}),ue=n(49),de=n.n(ue),pe=function(){return r.a.createElement("div",{className:de.a.Loader},"Loading...")},me=function(e,t){return function(n){Object(u.a)(o,n);var a=Object(d.a)(o);function o(){var e;Object(c.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(s.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(ae,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},he={salad:5,cheese:10,meat:20,bacon:10},ge=me(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:25,purchasable:!1,purchasing:!1,loading:!1,error:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,a=Object(q.a)({},e.state.ingredients);a[t]=n;var r=he[t],o=e.state.totalPrice+r;e.setState({totalPrice:o,ingredients:a}),e.updatePurchaseState(a)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var a=n-1,r=Object(q.a)({},e.state.ingredients);r[t]=a;var o=he[t],l=e.state.totalPrice-o;e.setState({totalPrice:l,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){console.log(e.props);var t=[];for(var n in e.state.ingredients)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e.state.ingredients[n]));t.push("price="+e.state.totalPrice);var a=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+a})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;se.get("https://react-my-burger-ff590.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(q.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Either Connect to Internet or There are no Ingredient to Show!"):r.a.createElement(pe,null);return this.state.ingredients&&(a=r.a.createElement(p,null,r.a.createElement(W,{ingredients:this.state.ingredients}),r.a.createElement(ee,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,ordered:this.purchaseHandler,purchasable:this.state.purchasable,price:this.state.totalPrice})),n=r.a.createElement(ie,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),this.state.loading&&(n=r.a.createElement(pe,null)),r.a.createElement(p,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),n}(a.Component),se),ve=n(50),fe=n(51),be=n.n(fe),Ee=function(e){return r.a.createElement(p,null,r.a.createElement("div",{className:be.a.CheckoutSummary},r.a.createElement("h1",null,"We hope you love Burger , as much we love you!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}}),r.a.createElement(W,{ingredients:e.ingredients}),r.a.createElement(le,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.checkoutContinued},"Continue")))},_e=n(52),ye=n.n(_e),Ce=n(15),ke=n.n(Ce),Oe=function(e){var t=null;switch(e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:ke.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:ke.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:ke.a.InputElement,value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:ke.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:ke.a.Input},r.a.createElement("label",{className:ke.a.Label},e.label),t)},je=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Good name"},value:"",validation:{required:!0},isValid:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Ta-da !street"},value:"",validation:{required:!0},isValid:!1},zipcode:{elementType:"input",elementConfig:{type:"text",placeholder:"Blah-Blah Zipcode"},value:"",validation:{required:!0},isValid:!1,minLength:4,maxLength:7},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Bingo - Country"},value:"",validation:{required:!0},isValid:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Reachable E-mail"},value:"",validation:{required:!0},isValid:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}],placeholder:"Select any one mode"},value:""}},loading:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ingredients,price:e.props.price,orderData:n};se.post("/orders.json",r).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})}))},e.inputChangedHandler=function(t,n){t.preventDefault();var a=Object(q.a)({},e.state.orderForm),r=Object(q.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),console.log(r),a[n]=r,e.setState({orderForm:a})},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=" "!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(Oe,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(le,{btnType:"Success"},"Order"));return this.state.loading&&(a=r.a.createElement(pe,null)),r.a.createElement("div",{className:ye.a.ContactData},r.a.createElement("h4",null,"Enter Your Contacting Details"),a)}}]),n}(a.Component),Se=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,price:0},e.CheckoutCancelledHandler=function(){e.props.history.goBack()},e.CheckoutContinuedHandler=function(){e.props.history.replace("./checkout/contact-data")},e}return Object(s.a)(n,[{key:"componentWillMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),n={},a=0,r=Object(ve.a)(t.entries());try{for(r.s();!(e=r.n()).done;){var o=e.value;"price"===o[0]?a=o[1]:n[o[0]]=+o[1]}}catch(l){r.e(l)}finally{r.f()}this.setState({ingredients:n,totalPrice:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ee,{ingredients:this.state.ingredients,checkoutCancelled:this.CheckoutCancelledHandler,checkoutContinued:this.CheckoutContinuedHandler}),r.a.createElement(X.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(je,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),n}(a.Component),Be=n(53),we=n.n(Be),Ne=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,quantity:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"7px"},key:e.name},e.name," (",e.quantity,")")}));return r.a.createElement("div",{className:we.a.Order},r.a.createElement("p",null,"Ingredients : ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"Rs.",e.price)))},xe=me(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;se.get("./orders.json").then((function(t){var n=[];for(var a in t.data)n.push(Object(q.a)(Object(q.a)({},t.data[a]),{},{id:a}));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(Ne,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),n}(a.Component),se),De=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null,r.a.createElement(X.c,null,r.a.createElement(X.a,{path:"/checkout",component:Se}),r.a.createElement(X.a,{path:"/orders",component:xe}),r.a.createElement(X.a,{path:"/",exact:!0,component:ge}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=r.a.createElement(i.a,null,r.a.createElement(De,null));l.a.render(Ie,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.9e8ed24a.chunk.js.map