import React from 'react';
import { Link } from 'react-router-dom';
import './person.scss';

const person = props => {
  let personClasses = ["management__person", `management__person-${props.personClassname}`];
  return (
    <article className={personClasses.join(" ")}>
      <figure className="management__person-photo">
        <img src={props.imageUrl} alt={`management-${props.alt}`} />
        <figcaption>
          {props.caption}
        </figcaption>
      </figure>
      <Link 
        to={{
        pathname: props.link 
      }} 
        className="management__person-link">
        see details
      </Link>
    </article>
  );
}

export default person;
