const languages = [
  {
    name: "Java",
    proficiency: 95,
  },
  {
    name: "Python",
    proficiency: 85,
  },
  {
    name: "C",
    proficiency: 75,
  },
  {
    name: "C#",
    proficiency: 65,
  }
];

const frameworks = [
  {
    name: "React",
    proficiency: 80,
  },
  {
    name: "Django",
    proficiency: 75,
  },
  {
    name: ".NET",
    proficiency: 70,
  },
  {
    name: "Tensorflow",
    proficiency: 60,
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
    name: 'React',
    small: '6',
    large: '2'
  },
  {
    name: 'Django',
    small: '3',
    large: '1'
  },
  {
    name: '.NET',
    small: '2',
    large: '1'
  },
  {
    name: 'Tensorflow',
    small: '4',
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