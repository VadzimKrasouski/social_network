import React from 'react';
import styles from './Avatar.module.css'
import avatar from './ava.jpeg'

const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={avatar} alt="avatar"/>
        </div>
    );
};

export default Avatar;
