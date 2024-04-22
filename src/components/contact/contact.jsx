import React from 'react'
import styles from './contact.module.css'
import img30 from '../../assets/contact/emailIcon.png'
import img31 from '../../assets/contact/linkedinIcon.png'
import img32 from '../../assets/contact/githubIcon.png'

const contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={(img30)} alt="Email icon" className={styles.package}/>
        <a href="mailto:abdelrahmanmah058@gmail.com">abdelrahmanmah058@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={(img31)}
          alt="LinkedIn icon" className={styles.package}
        />
        <a href="https://www.linkedin.com/Abdelrahman Mahmoud">linkedin.com/Abdelrahman Mahmoud</a>
      </li>
      <li className={styles.link}>
        <img src={(img32)} alt="Github icon"  className={styles.package} />
        <a href="https://www.github.com/AbdelrahmanMahmoud74">github.com/AbdelrahmanMahmoud74</a>
      </li>
    </ul>
  </footer>
);
};
export default contact
