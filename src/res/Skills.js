const languages = [
  {
    name: "Java",
    proficiency: 100,
  },
  {
    name: "Python",
    proficiency: 100,
  },
  {
    name: "C",
    proficiency: 90,
  },
  {
    name: "C#",
    proficiency: 70,
  }
];

const frameworks = [
  {
    name: "Tensorflow",
    proficiency: 90,
  },
  {
    name: "Django",
    proficiency: 90,
  },
  {
    name: "React",
    proficiency: 85,
  },
  {
    name: ".NET",
    proficiency: 70,
  },
];

const languageDetails = [
  {
    name: 'Java',
    small: '10+',
    large: '3'
  },
  {
    name: 'Python',
    small: '10+',
    large: '3'
  },
  {
    name: 'C',
    small: '5',
    large: '2'
  },
  {
    name: 'C#',
    small: '6',
    large: '1'
  },
  {
    name: 'Javascript',
    small: '6',
    large: '2'
  }
];

const languageExtra = ['Haskell', 'Kotlin', 'Go', 'SQL', 'Bash', '...'];

const frameworkDetails = [
  {
    name: 'Tensorflow',
    small: '10+',
    large: '2'
  },
  {
    name: 'Django',
    small: '4',
    large: '2'
  },
  {
    name: 'React',
    small: '6',
    large: '2'
  },
  {
    name: '.NET',
    small: '2',
    large: '1'
  },
];

const frameworkExtra = ['PyTorch', 'Keras', 'MongoDB', 'Unity', 'ExpressJS', 'Bootstrap', 'Postgres', 'MongoDB', 'Android Studio'];

const Skills = {
  languages: languages,
  languageDetails: languageDetails,
  languageExtra: languageExtra,
  frameworks: frameworks,
  frameworkDetails: frameworkDetails,
  frameworkExtra: frameworkExtra,
}

export default Skills;