import React from 'react';
import styles from './Main.module.css'
import Profile from "./Profile/Profile";

const Main = () => {
    return (
        <div className={styles.main}>
            <Profile/>
        </div>
    );
};

export default Main;
