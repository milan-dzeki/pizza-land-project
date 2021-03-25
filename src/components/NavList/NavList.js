import React from 'react';
import './navlist.scss';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import logo from '../../images/logo-3.jpg';
import { FaChevronDown } from 'react-icons/fa';

const navListSm = props => {
  
  const listData = props.listData.map(item => {
    let dropdownClasses = ["navlist__item-dropdown"];
    let iconClasses = ["navlist__item-content__icon"];
    if(item.clicked) {
      dropdownClasses.push("show-dropdown");
      iconClasses.push("rotate-icon");
    }
    return (
      <li 
        key={item.id}
        className="navlist__item">
        <div 
          className="navlist__item-content"
          onClick={() => props.listItemClicked(item.id)}>
          <p>{item.name}</p>
          <div className={iconClasses.join(" ")}>
            <FaChevronDown />
          </div>
        </div>
        <ul className={dropdownClasses.join(" ")}>
          {item.dropdown.map(dropItem => {
            return (
              <li
                key={dropItem.id}
                className="navlist__item-dropdown__item">
                <Link 
                  to={dropItem.link}
                  onClick={props.hideNavList}>
                  {dropItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  })

  let navListClasses = ["navlist"];
  if(props.navListShow) {
    navListClasses.push("show-navlist");
  }
  return (
    <div className={navListClasses.join(" ")}>
      <section className="navlist__header">
        <Link 
          to="/" 
          className="navlist__logo"
          onClick={props.hideNavList}>
          <img src={logo} alt="logo" />
        </Link>
        <div 
          className="navlist__close-btn"
          onClick={props.hideNavList}>
          <FaTimes />
        </div>
      </section>
      <section className="navlist__items">
        <ul className="navlist__items-list">
          {listData}
          {props.isAuthenticated ? (
            <li 
              className="navlist__item"
              onClick={props.showModal}>
              <div className="navlist__item-content">
                <p>Logout</p>
              </div>
            </li>
          ) : null}
          <li className="navlist__item">
            <Link 
              to="/orders" 
              className="navlist__item-content"
              onClick={props.hideNavList}>
              <p>Your orders</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default navListSm;
