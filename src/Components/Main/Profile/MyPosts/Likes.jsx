import React from 'react';
import styles from './Likes.module.css'

const Likes = (props) => {
    return (
        <div className={styles.likes}>
            <span>Likes {props.likesCount}</span>
        </div>
    );
};

export default Likes;
