import React from "react";

import styles from "./Contact.module.css";
import email from '../../../assets/contact/emailIcon.png'
import github from '../../../assets/contact/githubIcon.png'
import linkedin from '../../../assets/contact/linkedinIcon.png'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li><a href="mailTo:sid1402mishra@gmail.com"><img src={email} alt="" /></a></li>
        <li><a href="https://www.linkedin.com/in/siddharth-mishra-07/"><img src={linkedin} alt="" /></a></li>
        <li><a href="https://github.com/iamsid-19"><img src={github} alt="" /></a></li>
      </ul>
    </footer>
  );
}
