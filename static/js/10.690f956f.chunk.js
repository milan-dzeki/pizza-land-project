(this["webpackJsonppizza-react-redux"]=this["webpackJsonppizza-react-redux"]||[]).push([[10],{110:function(e,r,s){},111:function(e,r,s){},123:function(e,r,s){"use strict";s.r(r);var i=s(15),t=s(16),a=s(19),c=s(18),n=s(1),d=s.n(n),p=(s(110),s(17)),o=s(14),z=s(6),l=(s(111),s(0)),h=function(){return Object(l.jsx)("div",{className:"loader",children:"Loading..."})},j=function(e){Object(a.a)(s,e);var r=Object(c.a)(s);function s(){return Object(i.a)(this,s),r.apply(this,arguments)}return Object(t.a)(s,[{key:"componentDidMount",value:function(){this.props.onFetchPizzaTypesOrders(),this.props.onFetchPizzaMakerOrders()}},{key:"render",value:function(){var e=this,r=[],s=function(s){r.push({id:s,address:e.props.fetchedTypesOrders[s].customerInfo.street,totalPrice:e.props.fetchedTypesOrders[s].totalPrice,pizzas:Object.keys(e.props.fetchedTypesOrders[s].pizzas).map((function(r){return{name:e.props.fetchedTypesOrders[s].pizzas[r].name,size:e.props.fetchedTypesOrders[s].pizzas[r].size,price:e.props.fetchedTypesOrders[s].pizzas[r].price}}))})};for(var i in this.props.fetchedTypesOrders)s(i);var t=[];for(var a in this.props.fetchedMakerOrders)t.push({id:a,cheese:this.props.fetchedMakerOrders[a].cheese,additions:this.props.fetchedMakerOrders[a].additions,ingredients:Object.keys(this.props.fetchedMakerOrders[a].ingredients).map((function(e){return e})),address:this.props.fetchedMakerOrders[a].customerInfo.street,price:this.props.fetchedMakerOrders[a].totalPrice});var c=Object(l.jsx)("ul",{className:"orders__orders-pizza-types__list",children:r.map((function(e){return Object(l.jsxs)("li",{className:"orders__orders-pizza-types__order",children:[Object(l.jsx)("p",{className:"orders__orders-pizza-types__text",children:"Your pizzas"}),Object(l.jsx)("ul",{className:"orders__orders-pizza-types__pizzas",children:e.pizzas.map((function(r){return Object(l.jsxs)("li",{className:"single-order-pizza",children:[Object(l.jsx)("p",{className:"single-order-pizza__name",children:r.name}),Object(l.jsxs)("p",{className:"single-order-pizza__size",children:["size: ",r.size,"cm"]}),Object(l.jsxs)("p",{className:"single-order-pizza__price",children:["price: $",r.price.toFixed(2)]})]},e.id+r.name)}))}),Object(l.jsxs)("p",{className:"orders__orders-pizza-types__address",children:["delivery street: ",e.address]}),Object(l.jsxs)("p",{className:"orders__orders-pizza-types__price",children:["total price: $",e.totalPrice.toFixed(2)]})]},e.id)}))});0!==r.length||this.props.pizzaTypesLoading||this.props.fetchPizzaTypesError||(c=Object(l.jsx)("p",{style:{textAlign:"center",fontSize:"2rem",padding:"2rem 1rem"},children:'You haven\'t ordered anything via "pizza types orders" yet'})),this.props.pizzaTypesLoading&&!this.props.fetchPizzaTypesError&&(c=Object(l.jsx)(h,{})),this.props.fetchPizzaTypesError&&(c=Object(l.jsx)("p",{style:{textAlign:"center",fontSize:"2rem",padding:"2rem 1rem",backgroundColor:"salmon"},children:"Can't display orders. Try again later."}));var n=Object(l.jsx)("ul",{className:"orders__orders-pizza-maker__list",children:t.map((function(e){return Object(l.jsxs)("li",{className:"orders__orders-pizza-maker__order",children:[Object(l.jsx)("p",{className:"pizza-maker__order-name",children:"Your custom pizza with following ingredients:"}),Object(l.jsxs)("ul",{className:"pizza-maker__order-ings",children:[Object(l.jsx)("li",{className:"pizza-maker__order-ing",children:e.cheese}),e.ingredients.map((function(e){return Object(l.jsx)("li",{className:"pizza-maker__order-ing",children:e},e)}))]}),Object(l.jsxs)("p",{className:"pizza-maker__order-address",children:["delivery street: ",e.address]}),Object(l.jsxs)("p",{className:"pizza-maker__order-price",children:["price: $",e.price.toFixed(2)]})]},e.id)}))});0!==t.length||this.props.pizzaMakerLoading||this.props.fetchPizzaMakerError||(n=Object(l.jsx)("p",{style:{textAlign:"center",fontSize:"2rem",padding:"2rem 1rem"},children:'You haven\'t ordered anything via "pizza maker orders yet"'})),this.props.pizzaMakerLoading&&!this.props.fetchPizzaMakerError&&(n=Object(l.jsx)(h,{})),this.props.fetchPizzaMakerError&&(n=Object(l.jsx)("p",{style:{textAlign:"center",fontSize:"2rem",padding:"2rem 1rem",backgroundColor:"salmon"},children:"Can't display orders. Try again later."}));var p=Object(l.jsxs)(d.a.Fragment,{children:[Object(l.jsx)("h1",{className:"orders__title",children:"your orders"}),Object(l.jsxs)("section",{className:"orders__content",children:[Object(l.jsx)("p",{className:"orders__content-info",children:"You can find all of your previous orders here."}),Object(l.jsxs)("article",{className:"orders__orders",children:[Object(l.jsxs)("div",{className:"orders__orders-pizza-types",children:[Object(l.jsx)("h4",{children:"Regular orders"}),c]}),Object(l.jsxs)("div",{className:"orders__orders-pizza-maker",children:[Object(l.jsx)("h4",{children:"Custom pizza orders"}),n]})]})]})]});return this.props.isAuthenticated||(p=Object(l.jsxs)(d.a.Fragment,{children:[Object(l.jsx)("p",{style:{fontSize:"3rem",textAlign:"center",padding:"5rem"},children:"LOG IN TO SEE ALL ORDERS FROM THIS ADDRESS"}),Object(l.jsx)(z.b,{to:"sign-up",style:{fontSize:"2rem",width:"10rem",margin:"0 auto 2rem auto",backgroundColor:"#eee",textAlign:"center",padding:"0.5rem 1rem"},children:"log in"})]})),p}}]),s}(n.Component);r.default=Object(p.b)((function(e){return{fetchedTypesOrders:e.pizzaTypes.fetchedOrders,fetchedMakerOrders:e.pizzaMaker.fetchedOrders,isAuthenticated:null!==e.authenticate.token,pizzaTypesLoading:e.pizzaTypes.pizzaTypesOrdersLoading,pizzaMakerLoading:e.pizzaMaker.pizzaMakerOrdersLoading,fetchPizzaMakerError:e.pizzaMaker.fetchPizzaMakerError,fetchPizzaTypesError:e.pizzaTypes.fetchPizzaTypesError}}),(function(e){return{onFetchPizzaTypesOrders:function(){return e(o.i())},onFetchPizzaMakerOrders:function(){return e(o.h())}}}))(j)}}]);
//# sourceMappingURL=10.690f956f.chunk.js.map