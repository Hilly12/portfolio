const Modules = [
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
    description: "Sequences and Series including Limits and Tests, Power Series; and Linear Algebra including" +
      " Gaussian Elimination, Linear Independence, Vector Spaces, Eigenvalues and Diagonalization," +
      " Intersection of Subspaces, Orthogonality, Projections"
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
    description: "Haskell: Sequences, Cryptography, Text Processing, Fractal Drawing, Expression Evaluation" +
      " and Differentiation; Java: Trees, Chess Engine for Pawns, Picture Processing, Functional Programming," +
      " Discrete Event Simulation, Turtle Interpreter, Spreadsheet Processing, Social Network Model," +
      " Concurrent Matrix Multiplication, Red Black Trees; C: ARM Emulator, ARM Assembler," +
      " Lighting up LED on Raspberry Pi"
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
    description: "Intellectual Property and Software Copyright, Contracts, Data Protection, Regulation, GDPR," +
      " Google Right to be Forgotten Case Study, Statute, Common Law, "
  },
  {
    completed: true,
    code: "CO276",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/276/",
    name: "Introduction to Prolog",
    description: "Prolog Concepts and Constructs, Deterministic and Non-Deterministic Evaluation, Unification, Lists" +
      " Arithmetics, Negation, Control, Aggregation"
  },
  {
    completed: false,
    code: "CO332",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/332/",
    name: "Advanced Computer Architecture",
    description: ""
  },
  {
    completed: false,
    code: "CO337",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/337/",
    name: "Simulation and Modelling",
    description: ""
  },
  {
    completed: false,
    code: "CO343",
    link: "https://www.imperial.ac.uk/computing/current-students/courses/343/",
    name: "Operations Research",
    description: ""
  },
]

export default Modules;