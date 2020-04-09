import React from 'react';
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
        </div>
    );
};

export default Sidebar;
