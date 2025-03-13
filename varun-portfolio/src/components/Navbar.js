import React from 'react';
import styles from './Navbar.module.css'
import {FaInstagram,FaFacebook,FaYoutube} from 'react-icons/fa'

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Varun</h1>

            <ul className={styles.navLinks}>
                <li><a href='#about'>About</a></li>
                <li><a href='#music'>Music</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className={styles.socialIcons}>
                <a href='#'><FaInstagram/></a>
                <a href='#'><FaFacebook/></a>
                <a href='#'><FaYoutube/></a>
            </div>
        </nav>

    );
};
export default Navbar;