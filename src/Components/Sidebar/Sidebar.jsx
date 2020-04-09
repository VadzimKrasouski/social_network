import React from 'react';
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div><a href="">Profile</a></div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div><a href="">Messages</a></div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div><a href="">News</a></div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div><a href="">Music</a></div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div><a href="">Settings</a></div>
            </nav>
        </div>
    );
};

export default Sidebar;
