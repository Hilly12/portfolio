import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../assets/Arcade.css"
import snek from "../assets/images/snek.png";
import rog from "../assets/images/rog.jpg";
import LazyLoad from "react-lazyload"
import Placeholder from "../components/Placeholder";

const cards = [
  {
    title: "Snake",
    description: "The classic",
    img: snek,
    link: "sandbox/snake",
  },
  {
    title: "Roguelike",
    description: "A roguelike dungeon crawler",
    img: rog,
    link: "sandbox/roguelike",
  }
];

class ArcadePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="heading">
            <h2>Arcade</h2>
          </div>
          <div className="row">
            {cards.map((card, key) => {
              return (
                <div key={key} className="col-md-6 col-lg-4 mb-5">
                  <Link to={card.link}>
                    <div className="card border-0 card-img-custom" style={{ backgroundColor: "transparent" }}>
                      <LazyLoad placeholder={<Placeholder/>}>
                        <img className="card-img-top border-bottom" src={card.img} alt=""/>
                      </LazyLoad>
                      <div className="card-body text-center text-muted">
                        <h6 className="text-center" style={{ color: '#007bff', fontWeight: '600' }}>
                          {card.title}
                        </h6>
                        <p className="text-center card-text">{card.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default ArcadePage;