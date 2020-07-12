import React, { Component, Fragment } from "react";
import Footer from "../components/Footer";
import "../assets/Resume.css";

const workexp = [
  {
    title: "Software Engineering Intern",
    institution: "Scribetech",
    period: "July 2020 - September 2020",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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

const languages = [
  {
    name: "Java",
    proficiency: 100,
  },
  {
    name: "Python",
    proficiency: 85,
  },
  {
    name: "C#",
    proficiency: 75,
  },
  {
    name: "Javascript",
    proficiency: 65,
  },
];

const frameworks = [
  {
    name: "Spring",
    proficiency: 80,
  },
  {
    name: "React",
    proficiency: 75,
  },
  {
    name: "Unity",
    proficiency: 74,
  },
  {
    name: "Tensorflow",
    proficiency: 70,
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
              interest in Computing are Data Mining and ML, Vision,
              Optimization, and Algorithmic Trading. I enjoy creating and
              designing games and webapps, aswell as reading about businesses,
              economics and politics, as hobbies.
            </p>
            <div className="work-experience group">
              <div className="heading">
                <h2 className="text-center">Experience</h2>
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
                    <h2>Languages</h2>
                    {languages.map((lang) => {
                      return (
                        <Fragment>
                          <h3>{lang.name}</h3>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              aria-valuenow={lang.proficiency}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: `${lang.proficiency}%` }}
                            >
                              <span className="sr-only">100%</span>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skills portfolio-info-card">
                    <h2>Technologies</h2>
                    {frameworks.map((lang) => {
                      return (
                        <Fragment>
                          <h3>{lang.name}</h3>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              aria-valuenow={lang.proficiency}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: `${lang.proficiency}%` }}
                            >
                              <span className="sr-only">100%</span>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
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
