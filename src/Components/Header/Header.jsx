import React from 'react';
import logo from '../../assets/img/logo192.png'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}><img src={logo} alt="img"/></div>
                <div className={styles.loginBlock}>
                    {props.isAuth ?
                        <NavLink to={'/profile/' + props.id}>{props.fullName}</NavLink> :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
};

export default Header;
