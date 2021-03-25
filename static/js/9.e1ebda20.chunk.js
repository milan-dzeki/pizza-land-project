(this["webpackJsonppizza-react-redux"]=this["webpackJsonppizza-react-redux"]||[]).push([[9],{100:function(e,t,i){},101:function(e,t,i){},117:function(e,t,i){"use strict";i.r(t);var n=i(15),s=i(16),a=i(19),r=i(18),o=i(1),c=i.n(o),p=(i(100),i(17)),z=i(14),l=i(0),h=(i(101),i(22)),f=function(e){return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(h.a,{show:e.show,clicked:e.hideInfo}),Object(l.jsxs)("div",{className:e.show?"pizza-info show-pizza-info":"pizza-info",children:[Object(l.jsx)("div",{className:"pizza-info__img",children:Object(l.jsx)("img",{src:e.pizzaImg,alt:e.pizzaName})}),Object(l.jsxs)("div",{className:"pizza-info__info",children:[Object(l.jsx)("p",{className:"pizza-info__name",children:e.pizzaName}),Object(l.jsx)("p",{className:"pizza-info__ing-title",children:"ingredients:"}),Object(l.jsx)("ul",{className:"pizza-info__ingredients",children:e.pizzaIngredients.map((function(e){return Object(l.jsx)("li",{children:e},e)}))}),Object(l.jsx)("button",{className:"pizza-info__btn",onClick:e.addPizzaToOrder,children:"order now"})]})]})]})},u=function(e){Object(a.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(n.a)(this,i);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={showInfo:!1,pizza:e.props.pizzaTypes[0]},e.showPizzaInfo=function(t){e.setState({showInfo:!0,pizza:t})},e.hidePizzaInfo=function(){e.setState({showInfo:!1})},e.addPizzaToOrderStore=function(t){e.props.onAddPizzaToOrderStore(t),e.props.history.replace("/order"),e.setState({showInfo:!1})},e}return Object(s.a)(i,[{key:"componentDidMount",value:function(){this.props.onSetPizzaTypeToAll()}},{key:"componentWillUnmount",value:function(){this.setState({showInfo:!1})}},{key:"render",value:function(){var e=this,t=function(e,t,i){var n=e.filter((function(e){return e[t]}));return 0===n.length&&(n=e),n.map((function(e){return Object(l.jsxs)("li",{className:"single-pizza",children:[Object(l.jsx)("div",{className:"single-pizza__img",children:Object(l.jsx)("img",{src:e.imageUrl,alt:e.id})}),Object(l.jsxs)("div",{className:"single-pizza__info",children:[Object(l.jsx)("p",{className:"single-pizza__name",children:e.name}),Object(l.jsx)("button",{className:"single-pizza__btn",onClick:function(){return i(e)},children:"expand"})]})]},e.id)}))}(this.props.pizzaTypes,this.props.filterType,this.showPizzaInfo);return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(f,{show:this.state.showInfo,pizzaImg:this.state.pizza.imageUrl,pizzaName:this.state.pizza.name,pizzaIngredients:this.state.pizza.ingredients,hideInfo:this.hidePizzaInfo,addPizzaToOrder:function(){return e.addPizzaToOrderStore(e.state.pizza)}}),Object(l.jsx)("h1",{className:"pizza-types__title",children:"pizza types"}),Object(l.jsxs)("section",{className:"pizza-types__content",children:[Object(l.jsx)("p",{className:"pizza-types__content-info",children:"These are all pizza types that we have. We hope you will find what you are looking for. As you can see, we have variety of choices. You can filter pizza types according to your preferences and order what you like."}),Object(l.jsxs)("article",{className:"pizza-types__filters",children:[Object(l.jsx)("p",{className:"pizza-types__filters-title",children:"Choose pizza types"}),Object(l.jsxs)("div",{className:"pizza-types__filters-buttons",children:[Object(l.jsx)("button",{className:"all"===this.props.filterType?"pizza-types__filters-all btn-active":"pizza-types__filters-all",onClick:function(){return e.props.onChangePizzaType("all")},children:"all"}),Object(l.jsx)("button",{className:"vegan"===this.props.filterType?"pizza-types__filters-vegan btn-active":"pizza-types__filters-vegan",onClick:function(){return e.props.onChangePizzaType("vegan")},children:"vegan"}),Object(l.jsx)("button",{className:"vegeterian"===this.props.filterType?"pizza-types__filters-vegeterian btn-active":"pizza-types__filters-vegeterian",onClick:function(){return e.props.onChangePizzaType("vegeterian")},children:"vegeterian"}),Object(l.jsx)("button",{className:"mushrooms"===this.props.filterType?"pizza-types__filters-mushrooms btn-active":"pizza-types__filters-mushrooms",onClick:function(){return e.props.onChangePizzaType("mushrooms")},children:"mushrooms"}),Object(l.jsx)("button",{className:"meat"===this.props.filterType?"pizza-types__filters-meat btn-active":"pizza-types__filters-meat",onClick:function(){return e.props.onChangePizzaType("meat")},children:"meats"})]})]}),Object(l.jsx)("article",{className:"pizza-types__pizzas",children:Object(l.jsx)("ul",{children:t})})]})]})}}]),i}(o.Component);t.default=Object(p.b)((function(e){return{pizzaTypes:e.pizzaTypes.pizzaTypes,filterType:e.pizzaTypes.filterType}}),(function(e){return{onChangePizzaType:function(t){return e(z.f(t))},onSetPizzaTypeToAll:function(){return e(z.r())},onAddPizzaToOrderStore:function(t){return e(z.b(t))}}}))(u)}}]);
//# sourceMappingURL=9.e1ebda20.chunk.js.map