import React from 'react';
import styles from './ProfileInfo.module.css'
import avatar from './../../../img/ava.jpeg'

const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={styles.descriptions}>
                <h3>Vadzim Krasouski</h3>
                <span>Date of Birth: 5 august</span>
                <span>City: 5 august</span>
                <span>Education: PSU'11</span>
                <span>Web Site: <a href="https://github.com/VadzimKrasouski">GitHub</a></span>
            </div>
        </div>
    );
};

export default ProfileInfo;
