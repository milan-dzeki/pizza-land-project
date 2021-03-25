import React from 'react';
import './banner.scss';
import bannerBcg from '../../../images/banner.jpg';
import { Link } from 'react-router-dom';

const banner = () => {
  return (
    <section 
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgb(253, 250, 244), rgba(250, 243, 229, 0.555)), url(${bannerBcg})`
      }}>
      <div className="banner__content">
        <h1 className="banner__title">
          pizza land
        </h1>
        <h3 className="banner__subtitle banner__subtitle--one">
          welcome to
        </h3>
        <h3 className="banner__subtitle banner__subtitle--two">
          ultimate enjoyment
        </h3>
        <Link to="/pizza-types" className="banner__link">
          explore tastes
        </Link>
      </div>
      <div className="banner__border"></div>
    </section>
  )
}

export default banner;
