import React from 'react';
import logo from '../../assets/img/logo192.png'
import styles from './Header.module.css'
import {AuthButton} from '../../common/AuthButton';

const Header = ((props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}><img src={logo} alt="img"/></div>
                <div className={styles.loginBlock}>
                    <AuthButton isLoggedIn={props.isAuth}
                                authName={props.fullName}
                                authId={props.id}/>
                </div>
            </div>
        </header>
    );
});

export default Header;

