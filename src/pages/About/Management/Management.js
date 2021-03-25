import React, { Component } from 'react';
import './management.scss';
import Person from '../../../components/About/Management/PersonComponent/Person';
import { connect } from 'react-redux';

class Management extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="management__title">
          our management
        </h1>
        <section className="management__content">
          <p className="management__content-info">
            These are the people that hold our company together. They've all been here from the start, leading this business with utmost efficiency.
          </p>
          <div className="management__content-persons">
            {this.props.managementData.map(person => (
              <Person
                key={person.id}
                personClassname={person.id}
                imageUrl={person.imageUrl}
                alt={person.id}
                caption={person.caption}
                link={person.link} />
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    managementData: state.managementPeople.managementPeople
  };
};

export default connect(mapStateToProps)(Management);
