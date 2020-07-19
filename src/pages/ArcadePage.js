import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import snek from "../assets/images/snek.png";
import rog from "../assets/images/rog.jpg";

const { Meta } = Card;

const cards = [
  {
    title: "Snake",
    description: "The classic",
    img: snek,
    linkto: "sandbox/snake",
  },
  {
    title: "Roguelike",
    description: "A roguelike dungeon crawler",
    img: rog,
    linkto: "sandbox/roguelike",
  },
];

export default class ArcadePage extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="container"
          style={{ marginTop: "50px", minHeight: "100vh" }}
        >
          <Grid container align="center" spacing={3}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  className="game-card"
                  actions={[
                    <Link to={card.linkto}>
                      <Button>PLAY</Button>
                    </Link>,
                  ]}
                  hoverable
                  link
                  cover={
                    <img
                      style={{
                        minHeight: "100px",
                        minWidth: "200px",
                        borderLeft: "1px solid lightgrey",
                        borderRight: "1px solid lightgrey",
                        borderBottom: "1px solid lightgrey",
                      }}
                      alt=""
                      src={card.img}
                    />
                  }
                  S
                >
                  <Meta title={card.title} description={card.description} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
