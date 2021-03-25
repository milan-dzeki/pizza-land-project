import React from 'react';
import './history.scss';
import { Link } from 'react-router-dom';
import pizzaAncientImg from '../../../images/about/history/ancient.jpg';


const history = () => {
  return (
    <React.Fragment>
      <h1 className="history__title">How we came to be</h1>
      <section className="history__content">
        <article className="history__content-center">
          <div className="history__photo">
            <img src={pizzaAncientImg} alt="ancient-pizza" />
          </div>
          <div className="history__text">
            <p className="history__text-text">
              Our story begins in 19th century, when our CEO's ancestor came to idea do open a pizza shop. He was a talented man, and good businessman. In Random country, he gathered skilled cooks and started his shop.
              <br/>
              <br />
              The businnes was going pretty well, but he found other meanings to life than making pizzas, so he gave up everything, went to the mountines according to his inner call, and got enlightened.
              <br />
              <br />
              After a while, he came down from the mountines to find his business sold. Since he had 2 kids, and due to his post-enlightenment realizations, he ca,me to regret leaving his family with nothing.
              So, he used his people-reading skills and brought his business back, educated his sons and left again, this time for good.
              <br />
              <br />
              His sons became well versed in all kind of businesses and they found other capable people to work for them.
              Their shop they called "Pizzas everywhere". After they got their own kids, they educated them in business like their father did and so we have a line of inheritance that leads to today.
              <br />
              <br />
              Our CEO, the grand-grand-son of this long forgotten enlightened man who started it all, continued till this day to deliver the best pizzas ever to the world. As soon as he got into it, he renamed the company to what we know today as famous "Pizza Land".
            </p>
            <div className="history__text-links">
              <Link 
                to="/about/management" 
                className="history__link history__link--management">
                management
              </Link>
              <Link 
                to="/about/employees"
                className="history__link history__link--employees">
                employees
              </Link>
            </div>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}

export default history;
