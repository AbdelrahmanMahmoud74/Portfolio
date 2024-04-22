import React from 'react'
import styles from './About.module.css'
import img4 from '../../assets/about/aboutImage.png'
import img5 from '../../assets/about/cursorIcon.png'
import img6 from '../../assets/about/serverIcon.png'

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={(img4)}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={(img5)} alt="Cursor icon" className={styles.bashamasr} />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
                I'm Interesting In Competitive Progtamming That I Will Learn Any Technology In A Few Time
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={(img6)} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a frontend developer with experience in building responsive and optimized sites


              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default About
