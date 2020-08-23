import Experience from "./Experience";
import Skills from "./Skills"
import Modules from "./Modules";
import Personal from "./Personal";
import Awards from "./Awards";

const MyData = {
  bio: Personal.bio,
  workexp: Experience.workexp,
  languages: Skills.languages,
  languageDetails: Skills.languageDetails,
  languageExtra: Skills.languageExtra,
  frameworks: Skills.frameworks,
  frameworkDetails: Skills.frameworkDetails,
  frameworkExtra: Skills.frameworkExtra,
  education: Experience.education,
  awards: Awards,
  modules: Modules,
  hobbies: Personal.hobbies
}

export default MyData;