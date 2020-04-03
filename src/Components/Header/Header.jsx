import React from 'react';
import logo192 from '../../img/logo192.png'
import styles from './Header.module.css'

const Header = () => {
    return (
            <header className={styles.header}>
                <img src={logo192} alt="img"/>
            </header>
        );
};

export default Header;
