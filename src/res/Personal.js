import React, {Fragment} from "react";

const bio = () => {
  return (
    <Fragment>
      I'm a Software Developer and a Computing Student at Imperial College London. My topics of primary
      interest in Computing are Machine Learning, Computer Vision, Optimization, and Computational Finance. In my idle
      time, I enjoy creating and designing games and webapps, as well as reading about business, economics and
      politics to broaden my perspectives.
    </Fragment>
  );
}

const hobbies = () => {
  return (
    <Fragment>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod
        animadvertendum esse ipsa natura iudicet? Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius
        quiddam et obscurius. Haec igitur Epicuri non probo, inquam. Sed residamus, inquit, si placet. Nunc ita
        separantur, ut disiuncta sint, quo nihil potest esse perversius. Virtutibus igitur rectissime mihi videris et ad
        consuetudinem nostrae orationis vitia posuisse contraria. </p>

      <p>Qua igitur re ab deo vincitur, si aeternitate non vincitur? Piso, familiaris noster, et alia multa et hoc loco
        Stoicos irridebat: Quid enim? Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Isto modo,
        ne si avia quidem eius nata non esset. <a href="http://loripsum.net/">Nobis aliter videtur,
          recte secusne, postea;</a> Et quidem iure fortasse, sed tamen non gravissimum est testimonium
        multitudinis. <i>Bonum patria: miserum exilium.</i> Ita enim vivunt quidam, ut eorum vita refellatur oratio. Sed
        quod proximum fuit non vidit. Odium autem et invidiam facile vitabis. </p>

      <p>Duo Reges: constructio interrete. <b>Iubet igitur nos Pythius Apollo noscere nosmet ipsos.</b> <a
        href="http://loripsum.net/">Ut pulsi recurrant?</a> <a href="http://loripsum.net/">De vacuitate doloris
        eadem sententia erit.</a> Solum praeterea formosum, solum liberum, solum civem, stultost; Esse enim quam vellet
        iniquus iustus poterat inpune. Summus dolor plures dies manere non potest? </p>

    </Fragment>
  );
}

const Personal = {
  bio: bio(),
  hobbies: hobbies()
}

export default Personal;