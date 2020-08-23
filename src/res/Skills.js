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
    name: "Javascript",
    proficiency: 75,
  },
  {
    name: "C#",
    proficiency: 70,
  },
];

const frameworks = [
  {
    name: "React",
    proficiency: 80,
  },
  {
    name: ".NET",
    proficiency: 70,
  },
  {
    name: "Unity",
    proficiency: 60,
  },
  {
    name: "Tensorflow",
    proficiency: 55,
  },
];

const languageDetails = [
  {
    name: 'Java',
    small: '10+',
    large: '5'
  },
  {
    name: 'Python',
    small: '10+',
    large: '1'
  },
  {
    name: 'C#',
    small: '6',
    large: '2'
  },
  {
    name: 'Javascript',
    small: '4',
    large: '2'
  },
  {
    name: 'C',
    small: '5',
    large: '1'
  },
];

const languageExtra = ['Haskell', 'Go', 'SQL', 'VB.Net'];

const frameworkDetails = [
  {
    name: 'React',
    small: '3',
    large: '2'
  },
  {
    name: '.NET',
    small: '2',
    large: '2'
  },
  {
    name: 'Unity',
    small: '5',
    large: '0'
  },
  {
    name: 'Tensorflow',
    small: '4',
    large: '0'
  },
];

const frameworkExtra = ['Keras', 'Scikit', 'Django', 'ExpressJS', 'Postgres', 'MongoDB', 'Redux', 'Android Studio', 'Git', 'Unix'];

const Skills = {
  languages: languages,
  languageDetails: languageDetails,
  languageExtra: languageExtra,
  frameworks: frameworks,
  frameworkDetails: frameworkDetails,
  frameworkExtra: frameworkExtra,
}

export default Skills;