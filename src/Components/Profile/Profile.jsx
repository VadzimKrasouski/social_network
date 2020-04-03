import React from 'react';
import styles from './Profile.module.css'
import wallpaper from './../../img/8788.png'
import avatar from './../../img/ava.jpeg'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.wallpaper}>
                <img src={wallpaper} alt="wallpaper"/>
            </div>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={styles.descriptions}>
                    Description
                </div>
            <div className={styles.posts}>
                <div>My posts</div>
                <div>New post</div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    );
};

export default Profile;
