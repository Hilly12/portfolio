import React, { Component, Fragment } from "react";
import Footer from "../components/Footer";
import "../assets/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faPhoneAlt,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const workexp = [
  {
    title: "Some Job",
    institution: "Someplace",
    period: "Some point in time",
    description: ["hello", "world"],
  },
  {
    title: "Data Science Work Experience",
    institution: "MET Office",
    period: "May 2017 - July 2017",
    link:
      "https://royalsociety.org/science-events-and-lectures/2017/summer-science-exhibition/exhibits/a-model-earth/",
    description: [
      "Collaboration with the Crescendo project team to analyze global temperature and rainfall data",
      "Created an informative animated plot in Python using Iris, Matplotlib libraries",
      "Demonstrated it to the public at the Royal Society Summer Science Exhibition ",
    ],
  },
];

const education = [
  {
    title: "Computing MEng",
    institution: "Imperial College London",
    period: "October 2018 - Present",
    description: [
      "Second Year: Upper Second-Class Honors – x%",
      "First Year: 86% in Programming, 68% Overall",
    ],
  },
  {
    title: "Secondary School",
    institution: "Blundell's School",
    period: "September 2015 - July 2018",
    description: [
      "A Levels: A*AAAA in Maths, Further Maths, Computing, Physics, Chemistry, A in EPQ",
      "UKMT Maths: BMO1 Qualifier, Best in Year, Team Maths Challenge National Final Qualifier",
    ],
  },
];

class ResumePage extends Component {
  render() {
    return (
      <Fragment>
        <section className="portfolio-block.cv">
          <div className="container">
            <img
              src={require("../assets/images/yolo.jpg")}
              alt=""
              style={{
                marginTop: "30px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "solid 2px grey",
              }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                marginBottom: "-20px",
                paddingTop: "1em",
              }}
            >
              I'm an aspiring Software Engineer and Entreprenuer, and currently
              a student at Imperial College London. My topics of primary
              interest in Computing are Data Mining and ML, Computer Vision,
              Operations, FinTech, and Systems. On the side, I enjoy creating
              and designing games and webapps, aswell as reading about
              businesses and politics, as hobbies.
            </p>
            <div className="work-experience group">
              <div className="heading">
                <h2 className="text-center">Work Experience</h2>
              </div>
              {workexp.map((work) => {
                return (
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <h3>{work.title}</h3>
                        <h4 className="organization">{work.institution}</h4>
                        {work.link ? (
                          <a style={{ marginLeft: "20px" }} href={work.link}>
                            Check it out
                          </a>
                        ) : null}
                      </div>
                      <div className="col-md-6 period-holder">
                        <span className="period">{work.period}</span>
                      </div>
                    </div>
                    <p className="text-muted">
                      <ul className="bullets">
                        {work.description.map((text) => {
                          return <li>{text}</li>;
                        })}
                      </ul>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="education group">
              <div className="heading">
                <h2 className="text-center">Education</h2>
              </div>
              {education.map((edu) => {
                return (
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <h3>{edu.title}</h3>
                        <h4 className="organization">{edu.institution}</h4>
                      </div>
                      <div className="col-md-6 period-holder">
                        <span className="period">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-muted">
                      <ul className="bullets">
                        {edu.description.map((text) => {
                          return <li>{text}</li>;
                        })}
                      </ul>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="group">
              <div className="row">
                <div className="col-md-6">
                  <div className="skills portfolio-info-card">
                    <h2>Skills</h2>
                    <h3>Java</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        <span className="sr-only">100%</span>
                      </div>
                    </div>
                    <h3>Python</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      >
                        <span className="sr-only">90%</span>
                      </div>
                    </div>
                    <h3>C</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-info portfolio-info-card">
                    <h2>Contact Info</h2>
                    <div className="row p-1">
                      <div className="col-1">
                        <FontAwesomeIcon className="icon" icon={faCalendar} />
                      </div>
                      <div className="col-9">
                        <span>12/10/1999</span>
                      </div>
                    </div>
                    <div className="row p-1">
                      <div className="col-1">
                        <FontAwesomeIcon className="icon" icon={faUser} />
                      </div>
                      <div className="col-9">
                        <span>Aahil Mehta</span>
                      </div>
                    </div>
                    <div className="row p-1">
                      <div className="col-1">
                        <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                      </div>
                      <div className="col-9">
                        <span>+44 7490195577</span>
                      </div>
                    </div>
                    <div className="row p-1">
                      <div className="col-1">
                        <FontAwesomeIcon className="icon" icon={faAt} />
                      </div>
                      <div className="col-9">
                        <span>aahilmehta12@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hobbies group">
              <div className="heading">
                <h2 className="text-center">Hobbies</h2>
              </div>
              <p className="text-center text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                risus ligula, iaculis ut metus sit amet, luctus pharetra mauris.
                Aliquam purus felis, pretium vel pretium vitae, dapibus sodales
                ante. Suspendisse potenti. Duis nunc eros.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default ResumePage;
