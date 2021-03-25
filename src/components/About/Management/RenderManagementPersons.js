import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PersonPage from './PersonPage/SinglePerson';
import { connect } from 'react-redux';

class RenderManagementPersons extends Component {
  goBackToManagementPage = () => {
    this.props.history.goBack();
  }
  render() {
    let managementRoutes = this.props.managementData.map(person => (
        <Route
          exact={this.props.exact}
          key={person.id}
          path={person.link}
          render={() => {
            return <PersonPage
              key={person.id + 1}
              goBack={this.goBackToManagementPage}
              managementImg={person.imageUrl}
              imageAlt={person.id}
              managementBio={person.biography}
              managementHigh={person.highSchool}
              managementCollege={person.college}
              managementAdditional={
                person.additionalEducation.map(add => {
                  return <li key={add.id}>{add.name}</li>
                })
              }
              managementAddress={person.address}
              managementPhone={person.phone}
              managementEmail={person.email}
              link={person.link} />

          }} />
      ))
    return managementRoutes;
  }
}

const mapStateToProps = state => {
  return {
    managementData: state.managementPeople.managementPeople
  };
};

export default withRouter(connect(mapStateToProps)(RenderManagementPersons));
