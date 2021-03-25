import React, { Component } from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import { FaChevronDown,FaChevronRight } from 'react-icons/fa';
import Banner from '../../components/Home/Banner/Banner';
import Section from '../../components/Home/Section/Section';
import Slider from '../../components/UI/Slider/Slider';
import * as texts from '../../data/Home/sectionTexts';
import aboutImg from '../../images/who.jpg';
import workImg from '../../images/delivery.jpg';

import PizzaTypesSliderElement from '../../components/Home/PizzaTypesSliderElement/PizzaTypesSliderElement';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderShow: false,
      slideElementIndex: 0
    }

    this.mostPopularPizzas = this.props.pizzaTypes.filter(pizza => pizza.mostPopular);
  }
  componentDidUpdate() {
    if(this.state.slideElementIndex < 0) {
      this.setState({
        slideElementIndex: this.mostPopularPizzas.length - 1
      })
    }
    if(this.state.slideElementIndex > this.mostPopularPizzas.length - 1) {
      this.setState({
        slideElementIndex: 0
      })
    }
  }
  showSliderHandler = (pizzaIndex) => {
    this.setState({
      sliderShow: true,
      slideElementIndex: pizzaIndex
    })
  }
  closeSliderHandler = () => {
    this.setState({sliderShow: false})
  }
  previousSlideElement = () => {
    this.setState(prevState => {
      return {
        slideElementIndex: prevState.slideElementIndex - 1
      }
    })
  }
  nextSlideElement = () => {
    this.setState(prevState => {
      return {
        slideElementIndex: prevState.slideElementIndex + 1
      }
    })
  }
  addPizzaToOrderStore = (pizza) => {
    this.props.onAddPizzaToOrderStore(pizza);
    this.props.history.replace("/order");
    this.setState({sliderShow: false})
  }
  render() {
    const displayedPizzas = this.mostPopularPizzas.map((pizza, index) => {
      return (
        <div
          key={pizza.id} 
          className={`grid__photo grid__photo--${index + 1}`}>
          <p 
            className="grid__photo-button"
            onClick={() => this.showSliderHandler(index)}>
            enlarge
          </p>
          <img src={pizza.imageUrl} alt={pizza.name} />
        </div>
      );
    })
    
    return (
      <React.Fragment>
        <Banner />
        <Slider
          sliderHeading="Most popular pizzas"
          prevSlide={this.previousSlideElement}
          nextSlide={this.nextSlideElement}
          sliderShow={this.state.sliderShow}
          sliderClosed={this.closeSliderHandler}>
          {this.mostPopularPizzas.map((pizza, pizzaIndex) => {
            let slidePosition = "nextSlide";

            if(pizzaIndex === this.state.slideElementIndex) {
              slidePosition = "activeSlide";
            }
            if(pizzaIndex === this.state.slideElementIndex - 1 || (this.state.slideElementIndex === 0 && pizzaIndex === this.mostPopularPizzas.length - 1)) {
              slidePosition = "lastSlide";
            }
            return <PizzaTypesSliderElement
              key={pizza.id}
              pizzaName={pizza.name}
              pizzaImg={pizza.imageUrl}
              slideElPosition={slidePosition}
              addPizzaToOrders={this.addPizzaToOrderStore.bind(this, pizza)} />
          })}
        </Slider>
        <Section
          sectionClassname="about"
          sectionTitle="who we are"
          sectionPhotos={<img src={aboutImg} alt="cook"/>}
          sectionText={texts.aboutText}>
            <div className="section__grid-link">
              <p className="section__grid-link__text">see more</p>
              <div className="section__grid-link__icon">
                <FaChevronDown />
              </div>
            </div>
            <ul className="section__grid-list">
              <li className="section__grid-list__item">
                <Link 
                  to="/about/history"
                  className="section__grid-list__link">
                  history
                </Link>
              </li>
              <li className="section__grid-list__item">
                <Link 
                  to="/about/management"
                  className="section__grid-list__link">
                  management
                </Link>
              </li>
              <li className="section__grid-list__item">
                <Link 
                  to="/about/employees"
                  className="section__grid-list__link">
                  employees
                </Link>
              </li>
            </ul>
        </Section>
        <Section
          sectionClassname="work"
          sectionTitle="what we do"
          sectionPhotos={<img src={workImg} alt="cook"/>}
          sectionText={texts.workText}>
          <Link className="section__grid-link" to="/about/employees">
            <p className="section__grid-link__text">
              see more
            </p>
            <p className="section__grid-link__icon">
              <FaChevronRight />
            </p>
          </Link>
        </Section>
        <Section
          sectionClassname="types"
          sectionTitle="choose your pizza"
          sectionText={texts.typesText}
          sectionPhotos={displayedPizzas}>
          <Link
            to="/pizza-types" 
            className="section__grid-link">
            <p className="section__grid-link__text">
              see more
            </p>
            <div className="section__grid-link__icon">
              <FaChevronRight />
            </div>
          </Link>
        </Section>
        <Section
          sectionClassname="order"
          sectionTitle="order pizza"
          sectionText={texts.orderTextOne}
          sectionPhotos={
          (
            <React.Fragment>
              <p className="section__grid-photos__text">
                {texts.orderTextTwo}
              </p>
              <Link 
                className="section__grid-link" 
                to="/pizza-maker">
                <p className="section__grid-link__text">
                  make your own pizza
                </p>
                <p className="section__grid-link__icon">
                  <FaChevronRight />
                </p>
              </Link>
            </React.Fragment>
          )
          }>
            <Link 
              className="section__grid-link" 
              to="/pizza-types">
              <p className="section__grid-link__text">
                order pizza
              </p>
              <p className="section__grid-link__icon">
                <FaChevronRight />
              </p>
            </Link>
        </Section>
        <Section
          sectionClassname="job"
          sectionTitle="need a job?"
          sectionText={texts.jobText}>
            <Link 
              className="section__grid-link" 
              to="/job">
              <p className="section__grid-link__text">
                learn more
              </p>
              <p className="section__grid-link__icon">
                <FaChevronRight />
              </p>
            </Link>
        </Section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzaTypes: state.pizzaTypes.pizzaTypes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPizzaToOrderStore: (pizza) => dispatch(actions.addPizzaToOrderStore(pizza))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
