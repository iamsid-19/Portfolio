import React from "react";

import styles from "./Hero.module.css";
import myDp from '/assets/hero/myDP.jpg'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Siddharth Mishra</h1>
        <p className={styles.description}>
        </p>I am a MCA student specializing in web development, with expertise in React, JavaScript, and problem-solving through algorithms.
        <a href="mailto:sid1402mishra@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
         src={myDp}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
