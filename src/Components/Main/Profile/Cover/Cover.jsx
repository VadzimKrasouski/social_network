import React from 'react';
import styles from './Cover.module.css'
import wallpaper from './8788.png'

const Cover = () => {
    return (
        <div className={styles.cover}>
            <img src={wallpaper} alt="wallpaper"/>
        </div>
    );
};

export default Cover;
