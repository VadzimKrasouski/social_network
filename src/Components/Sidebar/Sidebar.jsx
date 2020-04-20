import React from 'react';
import styles from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.nav}>
                <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
                <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
                <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
                <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
                <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
            </nav>
            <Friends/>
        </div>
    );
};

export default Sidebar;
