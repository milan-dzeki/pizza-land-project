import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import NavList from '../../components/NavList/NavList';
import Footer from '../../components/Footer/Footer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';

class Layout extends Component {
  state = {
    modalOpen: false
  }
  showLogoutModal = () => {
    this.setState({modalOpen: true})
  }
  closeLogoutModal = () => {
    this.setState({modalOpen: false})
  }
  logoutHandler = () => {
    this.props.onLogout();
    this.closeLogoutModal();
    this.props.onNavListHide();
  }
  render() {
    return (
      <React.Fragment>
        <Modal
          modalOpen={this.state.modalOpen}
          cancelled={this.closeLogoutModal}
          continued={this.logoutHandler}>
          Are you sure you want to logout?
        </Modal>
        <Header showNavList={this.props.onNavListShow}>
          <Backdrop 
            show={this.props.navListShow}
            clicked={this.props.onNavListHide} />
          <NavList 
            listData={this.props.navListData}
            listItemClicked={this.props.onNavListItemClicked}
            navListShow={this.props.navListShow}
            hideNavList={this.props.onNavListHide}
            isAuthenticated={this.props.isAuthenticated}
            showModal={this.showLogoutModal} />
        </Header>
        <main style={{
          position: "relative",
          top: "6rem"
        }}>
          {this.props.children}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    navListData: state.navList.listData,
    navListShow: state.navList.navListShow,
    isAuthenticated: state.authenticate.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNavListItemClicked: (itemId) => dispatch(actions.navlistItemClicked(itemId)),
    onNavListShow: () => dispatch(actions.showNavlist()),
    onNavListHide: () => dispatch(actions.hideNavlist()),
    onLogout: () => dispatch(actions.authLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
