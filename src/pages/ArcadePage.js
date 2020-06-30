import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import snek from "../assets/images/snek.png";

const { Meta } = Card;

const cards = [
  {
    title: "Snake",
    description: "The classic",
    img: snek,
    linkto: "arcade/snake",
  },
];

export default class ArcadePage extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="container"
          style={{ marginTop: "50px", minHeight: "80vh" }}
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  style={{
                    height: "auto",
                    width: "300px",
                    backgroundColor: "transparent",
                  }}
                  actions={[
                    <Link to={card.linkto}>
                      <Button>PLAY</Button>
                    </Link>,
                  ]}
                  raised
                  hoverable
                  link
                  cover={
                    <img
                      style={{ border: "1px solid #eeeeee" }}
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
