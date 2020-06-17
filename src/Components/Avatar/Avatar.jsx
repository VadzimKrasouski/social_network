import React from 'react';
import styles from './Avatar.module.css'
import userDefault from '../../assets/img/user_default.png';

const Avatar = (props) => {
    return (
        <div className={styles.avatar}>
            <img src={props.img !== null ? props.img : userDefault} alt="avatar"/>
        </div>
    );
};

export default Avatar;
