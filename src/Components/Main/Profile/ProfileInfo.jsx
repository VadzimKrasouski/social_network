import React from 'react';
import styles from './ProfileInfo.module.css'
import Avatar from "../../Avatar/Avatar";
import avatar from '../../Avatar/ava.jpeg'


const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
                <Avatar avatar={avatar}/>
            <div className={styles.descriptions}>
                <h3>Vadzim Krasouski</h3>
                <span>Date of Birth: 5 august</span>
                <span>City: Vitebsk</span>
                <span>Education: PSU'11</span>
                <span>Web Site: <a href="https://github.com/VadzimKrasouski">
                    github.com/VadzimKrasouski</a></span>
            </div>
        </div>
    );
};

export default ProfileInfo;
