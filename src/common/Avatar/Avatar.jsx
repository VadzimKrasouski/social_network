import React from 'react';
import styles from './Avatar.module.css'
import userDefault from '../../assets/img/user_default.png';

const Avatar = (props) => {
    return (
        <img className={styles.avatar} src={props.img !== null ? props.img : userDefault} alt="avatar"/>
    );
};

export default Avatar;
