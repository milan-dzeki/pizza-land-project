import React from 'react';
import './footer.scss';

const footer = () => {
  return (
    <footer>
      <article className="container">
        <section className="open">
          <h3 className="open__title title">
            working hours
          </h3>
          <ul className="open__days">
            <li>Monday............8:00 - 00:00</li>
            <li>Tuesday............8:00 - 00:00</li>
            <li>Wednesday......8:00 - 00:00</li>
            <li>Thursday..........8:00 - 00:00</li>
            <li>Friday................8:00 - 00:00</li>
            <li>Saturday.........10:00 - 20:00</li>
            <li>Sunday............delivery only</li>
          </ul>
        </section>
        <section className="locations">
          <h3 className="locations__title title">Locations</h3>
          <ul className="loactions__streets">
            <li>
              <p>address: 2232 Random St</p>
              <p>phone: 333-555</p>
            </li>
            <li>
              <p>address: 3343 Nonexistent St</p>
              <p>phone: 333-444</p>
            </li>
          </ul>
        </section>
        <section className="contact">
          <h3 className="contact__title title">
            contact
          </h3>
          <ul>
            <li>Email: pizza.land@email.com</li>
            <li>Phone: 555-888</li>
          </ul>
        </section>
      </article>
      <article className="copyright">
        <p className="copyright__title">
          pizza land
        </p>
        <p className="copyright__copyright">
          &copy; 2020 all rights reserved
        </p>
      </article>
    </footer>
  );
}

export default footer;
