import React from 'react';
import './single-person.scss';
import { FaChevronLeft } from 'react-icons/fa';

const singlePerson = props => {
  return (
    <div className="management__single-person">
      <section className="management__single-person__close">
        <div className="management__single-person__close-icon">
          <FaChevronLeft />
        </div>
        <div
          className="management__single-person__close-text"
          onClick={props.goBack}>go back</div>
      </section>
      <section className="management__single-person__content">
        <article className="management__single-person__bio">
          <div className="management__single-person__img">
            <img src={props.managementImg} alt={props.imageAlt} />
          </div>
          <div className="management__single-person__text">
            <h3 className="management__single-person__title">
              Short biography
            </h3>
            <p>
              {props.managementBio}
            </p>
          </div>
        </article>
        <article className="management__single-person__info">
          <div className="management__single-person__info-education">
            <h3 className="management__single-person__title">
              education
            </h3>
            <p className="management__single-person__info-high">
              <span>
                high school: 
              </span> 
              {props.managementHigh}
            </p>
            <p className="management__single-person__info-college">
              <span>
                college: 
              </span>  
              {props.managementCollege}
            </p>
            <div className="management__single-person__info-additional">
              <p>additional education:</p> 
              <ul>
                {props.managementAdditional}
              </ul>
            </div>
          </div>
          <div className="management__single-person__info-contact">
            <h3 className="management__single-person__title">
              contact
            </h3>
            <p className="management__single-person__info-address">
              <span>
                address:
              </span>
              {props.managementAddress}
            </p>
            <p className="management__single-person__info-phone">
              <span>
                phone:
              </span>
              {props.managementPhone}
            </p>
            <p className="management__single-person__info-email">
              <span>
                email:
              </span> 
              {props.managementEmail}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default singlePerson;
