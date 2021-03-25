import React, { Component } from 'react';
import './employees.scss';
import { connect } from 'react-redux';
import Slider from '../../../components/UI/Slider/Slider';
import EmployeeSliderElement from '../../../components/About/Employees/EmployeesSliderElement/EmployeesSliderElement';
import SingleEmployee from '../../../components/About/Employees/SingleEmployee/SingleEmployee';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderShow: false,
      slideElementIndex: 0,
      slideGroup: "pizza maker"
    }
    this.slideGroup = null;
  }
  componentDidUpdate() {
    if(this.state.slideElementIndex < 0) {
      this.setState({
        slideElementIndex: this.slideGroup.length - 1
      })
    }
    if(this.state.slideElementIndex > this.slideGroup.length - 1) {
      this.setState({
        slideElementIndex: 0
      })
    }
  }
  showSliderHandler = (employeeType, employeeIndex) => {
    this.setState({
      sliderShow: true,
      slideElementIndex: employeeIndex,
      slideGroup: employeeType
    })
  }
  closeSlideHandler = () => {
    this.setState({
      sliderShow: false,
      slideElementIndex: 0
    })
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
  render() {
    const renderEmployees = employeeType => {
      let employeeList = employeeType.map((employee, index) => {
        return <SingleEmployee
          key={employee.id}
          classname={employee.classname}
          imageUrl={employee.imageUrl}
          name={employee.name}
          job={employee.job}
          speciality={employee.speciality}
          showSlide={() => this.showSliderHandler(employee.job, index)} />
      })
      return employeeList;
    };

    if(this.state.slideGroup === "pizza maker") {
      this.slideGroup = this.props.employees.makers;
    } else if(this.state.slideGroup === "delivery guy") {
      this.slideGroup = this.props.employees.delivery;
    } else if(this.state.slideGroup === "pizza selling") {
      this.slideGroup = this.props.employees.sellers;
    } else if(this.state.slideGroup === "nutritionist") {
      this.slideGroup = this.props.employees.nutritionists;
    }

    return (
      <React.Fragment>
        <Slider
          sliderShow={this.state.sliderShow}
          sliderClosed={this.closeSlideHandler}
          prevSlide={this.previousSlideElement}
          nextSlide={this.nextSlideElement}
          >
          {this.slideGroup.map((person, personIndex) => {
            let sliderPosition = "nextSlide";

            if(personIndex === this.state.slideElementIndex) {
              sliderPosition = "activeSlide";
            }
            if(personIndex === this.state.slideElementIndex - 1 || (this.state.slideElementIndex === 0 && personIndex === this.slideGroup.length - 1)) {
              sliderPosition = "lastSlide";
            }
            return <EmployeeSliderElement
              key={person.id}
              employeeImg={person.imageUrl}
              employeeName={person.name}
              employeeSlideClassname={person.slideElementClassname}
              slideElPosition={sliderPosition}
              employeeBio={person.bio} />
          })}
        </Slider>
        <h1 className="employees__title">
          our employees
        </h1>
        <section className="employees__content">
          <p className="employees__content-info">
            These are our devoted employees. They are always there to make your life more enjoyable by making and delivering most delicious meals.
          </p>
          <article className="employees__people employees__people--makers">
            <h3 className="employees__people-title">
              our pizza makers
            </h3>
            <div className="employees__people-content">
              {renderEmployees(this.props.employees.makers)}
            </div>
          </article>
          <article className="employees__people employees__people--delivery">
            <h3 className="employees__people-title">
              our delivery team
            </h3>
            <div className="employees__people-content">
              {renderEmployees(this.props.employees.delivery)}
            </div>
          </article>
          <article className="employees__people employees__people--sellers">
            <h3 className="employees__people-title">
              our pizza sellers
            </h3>
            <div className="employees__people-content">
              {renderEmployees(this.props.employees.sellers)}
            </div>
          </article>
          <article className="employees__people employees__people--nutritionists">
            <h3 className="employees__people-title">
              our nutrition specialists
            </h3>
            <div className="employees__people-content">
              {renderEmployees(this.props.employees.nutritionists)}
            </div>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees.employees
  };
};

export default connect(mapStateToProps)(Employees);

