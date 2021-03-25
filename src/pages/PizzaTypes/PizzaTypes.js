import React, { Component } from 'react';
import './pizza-types.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { filterPizzaTypes } from '../../components/PizzaTypes/FilterPizzaTypes';
import SinglePizzaInfo from '../../components/PizzaTypes/SinglePizzaInfo/SinglePizzaInfo';

class PizzaTypes extends Component {
  state = {
    showInfo: false,
    pizza: this.props.pizzaTypes[0]
  }
  componentDidMount() {
    this.props.onSetPizzaTypeToAll();
  }
  componentWillUnmount() {
    this.setState({
      showInfo: false
    });
  }
  showPizzaInfo = (pizza) => {
    this.setState({
      showInfo: true,
      pizza
    });
  }
  hidePizzaInfo = () => {
    this.setState({
      showInfo: false
    })
  }
  addPizzaToOrderStore = (pizza) => {
    this.props.onAddPizzaToOrderStore(pizza);
    this.props.history.replace("/order");
    this.setState({showInfo: false})
  }
  render() {
    const pizzas = filterPizzaTypes(this.props.pizzaTypes, this.props.filterType, this.showPizzaInfo);

    return (
      <React.Fragment>
        <SinglePizzaInfo
          show={this.state.showInfo}
          pizzaImg={this.state.pizza.imageUrl}
          pizzaName={this.state.pizza.name}
          pizzaIngredients={this.state.pizza.ingredients}
          hideInfo={this.hidePizzaInfo}
          addPizzaToOrder={() => this.addPizzaToOrderStore(this.state.pizza)} />
        <h1 className="pizza-types__title">
          pizza types
        </h1>
        <section className="pizza-types__content">
          <p className="pizza-types__content-info">
            These are all pizza types that we have. We hope you will find what you are looking for. As you can see, we have variety of choices. You can filter pizza types according to your preferences and order what you like.
          </p>
          <article className="pizza-types__filters">
            <p className="pizza-types__filters-title">
              Choose pizza types
            </p>
            <div className="pizza-types__filters-buttons">
              <button 
                className={this.props.filterType === "all" ? "pizza-types__filters-all btn-active" : "pizza-types__filters-all"}
                onClick={() => this.props.onChangePizzaType("all")}>
                all
              </button>
              <button       
                className={this.props.filterType === "vegan" ? "pizza-types__filters-vegan btn-active" : "pizza-types__filters-vegan"}
                onClick={() => this.props.onChangePizzaType("vegan")}>
                vegan
              </button>
              <button 
                className={this.props.filterType === "vegeterian" ? "pizza-types__filters-vegeterian btn-active" : "pizza-types__filters-vegeterian"}
                onClick={() => this.props.onChangePizzaType("vegeterian")}>
                vegeterian
              </button>
              <button 
                className={this.props.filterType === "mushrooms" ? "pizza-types__filters-mushrooms btn-active" : "pizza-types__filters-mushrooms"}
                onClick={() => this.props.onChangePizzaType("mushrooms")}>
                mushrooms
              </button>
              <button 
                className={this.props.filterType === "meat" ? "pizza-types__filters-meat btn-active" : "pizza-types__filters-meat"}
                onClick={() => this.props.onChangePizzaType("meat")}>
                meats
              </button>
            </div>
          </article>
          <article className="pizza-types__pizzas">
            <ul>
              {pizzas}
            </ul>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzaTypes: state.pizzaTypes.pizzaTypes,
    filterType: state.pizzaTypes.filterType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePizzaType: (filterType) => dispatch(actions.changePizzaType(filterType)),
    onSetPizzaTypeToAll: () => dispatch(actions.setPizzaTypeToAll()),
    onAddPizzaToOrderStore: (pizza) => dispatch(actions.addPizzaToOrderStore(pizza))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaTypes);
