import React from 'react';
import './section.scss';

const section = props => {
  return (
    <section className={`section ${props.sectionClassname}`}>
      <h1 className="section__title">
        {props.sectionTitle}
      </h1>
      <article className="section__grid">
        <div className="section__grid-photos">
          {props.sectionPhotos}
        </div>
        <div className="section__grid-text">
          <p className="section__grid-text__text">
            {props.sectionText}
          </p>
          <div className="section__grid-navigation">
            {props.children}
          </div>
        </div>
      </article>
    </section>
  );
}

export default section;
