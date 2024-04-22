import React from 'react'
import styles from './hero.module.css'
import img3 from '../../assets/hero/abdo.jpg'

const hero = () => {
  return(
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Abdelrahman</h1>
      <p className={styles.description}>
        I'm a Frontend developer  using React and Vue. Reach out if you'd like to learn more!
      </p>
      <a href="Abdelrahmanmah058@email.com" className={styles.contactBtn}>
        Contact Me
      </a>
    </div>
    <img
      src={(img3)}
      alt="Hero image of me"
      className={styles.heroImg}
    />
    
  </section>
);
};
export default hero
