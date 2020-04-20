import React from 'react';
import styles from './Friends.module.css'
import {NavLink} from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const Friends = () => {
    return (
        <div className={styles.friends}>
            <nav className={styles.nav}>
                <NavLink to='/friends' activeClassName={styles.active}>Friends</NavLink>
            </nav>
            <div className={styles.friend}>
                <div className={styles.avatar}>
                    <Avatar/>
                </div>
                <div className={styles.name}>Andrey</div>
            </div>
        </div>
    );
};

export default Friends;
