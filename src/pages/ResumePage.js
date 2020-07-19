import React, {Component, Fragment} from "react";
import Footer from "../components/Footer";
import "../assets/Resume.css";
import {Table} from "reactstrap";
import CustomTooltip from "../components/CustomTooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCheckCircle as completedIcon,
  faClock as pendingIcon
} from "@fortawesome/free-solid-svg-icons";

const bio = () => {
  return (
    <Fragment>
      I'm an aspiring Software Engineer and Entrepreneur, and currently
      a student at Imperial College London. My topics of primary
      interest in Computing are Data Mining and ML, Vision,
      Optimization, and Algorithmic Trading. I enjoy creating and
      designing games and webapps, as well as reading about businesses,
      economics and politics, as hobbies.
    </Fragment>
  );
}

const workexp = [
  {
    title: "Software Engineering Intern",
    institution: "Scribetech",
    period: "July 2020 - September 2020",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: ["hello", "world"],
  },
  {
    title: "Teaching Assistant for CO120.x",
    institution: "Imperial College London",
    period: "October 2019 - June 2020",
    description: [
      "Guided students through programming assignments in Haskell, Java and a group project in C",
      "Taught a variety of hands on concepts including Monads in Haskell, concurrency in Java, memory management in C"
    ],
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

const education = [
  {
    title: " Computing MEng",
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
      "A Levels: A*AAAA in Maths, Further Maths, Computing, Physics, Chemistry",
      "Vice Chair of International Committee - lead and participated in multiple social, cultural and charitable events",
      "Grade 8 Public Speaking with Distinction",
    ],
  },
];

const awards = [
  {
    text: "ICHack 2020 Winner for Best Smart Home / Internet of Things Hack",
    tip: "Porcupine Smart Mirror"
  },
  {
    text: "ICHack 2019 Runner Up for Best Web App",
    tip: "Singalong"
  },
  {
    text: "Blundell’s Ondaatje Hall Medal",
    tip: "Development of School Diversity and Culture"
  },
  {
    text: "Blundell’s Heads Honors",
    tip: "Outstanding work in Mathematics"
  },
  {
    text: "Blundell's Computer Science Prize",
    tip: "Subject Prize"
  },
  {
    text: "British Maths Olympiad Qualifier",
    tip: "1000 highest performers in the country selected."
  },
  {
    text: "2 Golds in UKMT Senior Maths Challenge",
    tip: "Additionally Merit in Senior Kangaroo"
  },
  {
    text: "Team Maths Challenge National Final Qualifier",
    tip: "Top 150 teams in UK selected from regional finals"
  },
  {
    text: "Gold in Chemistry Olympiad",
    tip: "Additionally Gold in Cambridge Chemistry Challenge"
  },
]

const modules = [
  {
    completed: true,
    code: "CO112",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/112/",
    name: "Hardware",
    description: "Boolean Algebra, Circuits, Circuit Design, Synchronous Digital Systems, Processors"
  },
  {
    completed: true,
    code: "CO113",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/113/",
    name: "Architecture",
    description: "Hardware, Representation in CPU and Memory, Intel 64 Architecture - Instructions, Floating Point, IO"
  },
  {
    completed: true,
    code: "CO120.1",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/120_1/",
    name: "Programming I",
    description: "Programming in Haskell - Expressions, Functions, Recursion, Higher Order Functions," +
      " User defined Types, Type Classes, Monads and IO"
  },
  {
    completed: true,
    code: "CO120.2",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/120_2/",
    name: "Programming II",
    description: "Programming in Java - Object Oriented Programming, Encapsulation, Inheritance," +
      " Functional Interfaces and Iterators, Exception Handling, Generics, Concurrency, Abstract Data Structures"
  },
  {
    completed: true,
    code: "CO120.3",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/120_3/",
    name: "Programming III",
    description: "Programming in C - Type Conversion, Bit Operations, Pointers, Memory Management, Makefiles," +
      " Linking, Dynamic Data Structures, Optimisation, Debugging, C Libraries"
  },
  {
    completed: true,
    code: "CO120.3C",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/120_3C",
    name: "Programming III - Extension",
    description: "Created a Bare Metal Model View Controller and Graphics Library for Raspberry Pi in C, ARM" +
      " and a Roguelike Game using it"
  },
  {
    completed: true,
    code: "CO130",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/130/",
    name: "Databases I",
    description: "Relational Models and Algebra, Functional Dependencies, Normalization, SQL, File Structure, Indexing"
  },
  {
    completed: true,
    code: "CO140",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/140",
    name: "Logic",
    description: "Propositional Logic, Predicate Logic, Argument, Equivalences, Natural Deduction"
  },
  {
    completed: true,
    code: "CO141",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/141/",
    name: "Reasoning about Programs",
    description: "Reasoning about Haskell Programs using Induction, Strong Induction, over Recursively defined" +
      " Data Structures, Reasoning about Java Programs using Conditions and Invariants"
  },
  {
    completed: true,
    code: "CO142",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/142/",
    name: "Discrete Structures",
    description: "Sets, Relations, Functions, Infinity, Orderings, Peano Arithmetic"
  },
  {
    completed: true,
    code: "CO145",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/145/",
    name: "Mathematical Methods",
    description: "Sequences and Series Convergence Tests, Power Series, Linear Algebra"
  },
  {
    completed: true,
    code: "CO150",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/150/",
    name: "Graphs and Algorithms",
    description: "Graphs, Algorithms on Graphs, Algorithm Analysis, Complexity"
  },
  {
    completed: true,
    code: "CO161",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/161/",
    name: "Laboratory 1",
    description: "Haskell: Cryptography, Text Processing, Fractal Drawing, Expression evaluation and calculus;" +
      " Java: Trees, Chess Engine for just Pawns, Picture Processing, Functional Programming," +
      " Discrete Event Simulation, Turtle Interpreter, Spreadsheet, Advanced Concurrency, Matrix Multiplication," +
      " Red Black Trees; C: ARM Emulator, ARM Assembler, Lighting up LED on Raspberry Pi"
  },
  {
    completed: true,
    code: "CO163",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/163/",
    name: "Computing Topics",
    description: "Case Studies on Computing Topics. Summarized paper on Alphazero and carried out research on" +
      " Adversarial Neural Networks"
  },
  {
    completed: true,
    code: "CO164",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/164/",
    name: "Ethics in Computing 1",
    description: "Case Studies on Computing Ethics." +
      " Presented a case study on the 1983 Soviet nuclear false alarm incident"
  },
  {
    completed: true,
    code: "CO165",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/165/",
    name: "Presentation Skills",
    description: "How to give a presentation. Presented C Project Extension on Bare Metal MVC, GL, Game, " +
      "presented case study on the 1983 Soviet nuclear false alarm incident"
  },
  {
    completed: true,
    code: "CO202",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/202/",
    name: "Algorithms II",
    description: "Quantitative Analysis of Algorithms and Growth Order, Divide and Conquer, Dynamic Programming" +
      " Greedy Algorithms, Randomised Algorithms, Advanced Graph Algorithms, String Processing Algorithms"
  },
  {
    completed: true,
    code: "CO211",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/211/",
    name: "Operating Systems",
    description: "Processes, Threads, Scheduling, Synchronisation, Deadlocks, Memory Management, Device Management," +
      " Disk Management, File Systems, Security"
  },
  {
    completed: true,
    code: "CO212",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/212/",
    name: "Networks and Communications",
    description: "The Internet, Application Layer, Transport Layer, Network Security, Network Layer," +
      " Data Link Layer, Physical Layer, Practical Applications"
  },
  {
    completed: true,
    code: "CO220",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/220/",
    name: "Software Engineering Design",
    description: "TDD, Mock Objects, Code Metrics, Dependencies, Distribution and Web Services, Continuous Delivery, " +
      " Design Patterns - Null Object, Template Method, Strategy, Observer, Command, Factory, Builder, Singleton," +
      " Adapter, Decorator, Facade, Proxy, MVC, Publish-Subscribe, Map-Reduce"
  },
  {
    completed: true,
    code: "CO221",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/221/",
    name: "Compilers",
    description: "Lexical Analysis, Parsing, Semantic Checking, Runtime Memory Organization, Code Generation," +
      " Optimization"
  },
  {
    completed: true,
    code: "CO233",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/233/",
    name: "Computational Techniques",
    description: "Linear Maps, Norms, Eigenvalues and Generalized Eigenvectors, Spectral Decomposition, SVD," +
      " Cholesky Decomposition, Least Square Method, QR Decomposition, Condition Number and Eigenvector Computation," +
      " Laplace and Fourier Transforms, Functions on Multiple Variables, Method of Steepest Descent"
  },
  {
    completed: true,
    code: "CO240",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/240/",
    name: "Models of Computation",
    description: "Operational Semantics of WHILE, Confluence, Totality, Inductive Proofs on Properties of WHILE," +
      " Register Machines and Universal Register Machine, Computable Functions as Register Machines, Turing Machines," +
      " Lambda Calculus, Church-Turing Thesis"
  },
  {
    completed: true,
    code: "CO245",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/245/",
    name: "Probability and Statistics",
    description: "Probability, Discrete Random Variables, Continuous Random Variables, Central Limit Theorem," +
      " Probability Generating Functions, Joint Random Variables, Estimation, Hypothesis Testing, Bayesian Inference"
  },
  {
    completed: true,
    code: "CO261",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/261/",
    name: "Laboratory 2",
    description: "Pintos: Implemented functionality of a monolithic kernel including a Priority and BSD Scheduler," +
      " User Programs including 14 system calls; DevOps: Deployed a simple project to web using a CI/CD pipeline;" +
      " WACC Compiler: Created a Compiler for a procedural language to ARM11 using ANTLR and Java"
  },
  {
    completed: true,
    code: "CO261C",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/261C/",
    name: "Advanced Laboratory 2",
    description: "Pintos: Implemented Virtual Memory with Paging, Swap, Shared Memory; True Concurrency: Implemented" +
      " an interactive and concurrent picture processing library; WACC Extensions: Added several language features to" +
      " WACC and implemented advanced optimizations such as Constant Propagation, Dead Code Elimination, in SSA"
  },
  {
    completed: true,
    code: "CO271",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/271/",
    name: "2nd Year Computing Group Project",
    description: "Human Centred Design, Agile Development, Designing Multi-User Applications, Created a web" +
      " application for musicians to find jobs mentoring other aspiring musicians or find mentors for something" +
      " their passionate about"
  },
  {
    completed: true,
    code: "CO273",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/273/",
    name: "An Introduction to Law for Computer Scientists",
    description: "Software Copyright, Contracts, Data Protection, Sources of Law"
  },
  {
    completed: true,
    code: "CO276",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/276/",
    name: "Introduction to Prolog",
    description: "Prolog Concepts, Constructs, Deterministic and Non-Deterministic Evaluation, Unification, Lists" +
      " Arithmetics, Negation, Control, Aggregation"
  },
  {
    completed: false,
    code: "CO343",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/343/",
    name: "Operations Research",
    description: ""
  },
]

const hobbies = () => {
  return (
    <Fragment>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
      risus ligula, iaculis ut metus sit amet, luctus pharetra mauris.
      Aliquam purus felis, pretium vel pretium vitae, dapibus sodales
      ante. Suspendisse potenti. Duis nunc eros.
    </Fragment>
  );
}

class ResumePage extends Component {
  render() {
    return (
      <Fragment>
        <section className="portfolio-block.cv">
          <div className="container">
            {/* Bio */}
            <img src={require("../assets/images/yolo.jpg")} alt="" style={{
              marginTop: "30px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "solid 2px grey",
            }}/>
            <p style={{
              width: "75%",
              margin: "auto",
              marginBottom: "-20px",
              paddingTop: "1em",
            }}>{bio()}</p>
            <br/>
            <br/>

            {/* Experience */}
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

            {/* Skills */}
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

            {/* Education */}
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

            {/* Awards */}
            <div className="awards group">
              <div className="heading">
                <h2 className="text-center">Awards and Achievements</h2>
              </div>
              {awards.map((award) => {
                return (
                  <CustomTooltip tooltip={award.tip}>
                    {award.text}
                  </CustomTooltip>
                );
              })}
            </div>

            {/* Hobbies */}
            <div className="hobbies group">
              <div className="heading">
                <h2 className="text-center">Hobbies</h2>
              </div>
              <p className="text-center text-muted">
                {hobbies()}
              </p>
            </div>

            {/* Classes */}
            <div className="classes group">
              <div className="heading">
                <h2 className="text-center">Classes</h2>
              </div>
              <Table style={{ textAlign: "left" }}>
                <thead>
                <tr>
                  <th/>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {modules.map((module) => {
                  return (
                    <tr>
                      <td scope="row">
                        {module.completed ?
                          <FontAwesomeIcon className="text-success" icon={completedIcon}/> :
                          <FontAwesomeIcon className="text-secondary" icon={pendingIcon}/>}
                      </td>
                      <th><a href={module.link}>{module.code}</a></th>
                      <td>{module.name}</td>
                      <td>{module.description}</td>
                    </tr>
                  );
                })}
                </tbody>
              </Table>
            </div>
          </div>
        </section>
        <Footer/>
      </Fragment>
    );
  }
}

export default ResumePage;