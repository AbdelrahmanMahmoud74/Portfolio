import React,{useState} from 'react';
import {getImageUrl} from '../../utils'
import Img1 from '../../assets/nav/menuIcon.png'
import Img2 from '../../assets/nav/closeIcon.png'


import styles from './Navbar.module.css'
  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
       <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen?(Img2):(Img1)}
            onClick={()=>setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};
export default Navbar