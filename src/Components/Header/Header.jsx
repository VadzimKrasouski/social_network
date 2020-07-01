import React from 'react';
import logo from '../../assets/img/logo192.png'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt="img"/>
            </div>
        </header>
    );
};

export default Header;
