import React from 'react';
import styles from './Profile.module.css'
import wallpaper from '../../img/8788.png'

const Profile = () => {
    return (
            <main className={styles.profile}>
                <div>
                    <img src={wallpaper} alt="wallpaper"/>
                </div>
                <div>
                    Profile
                </div>
            </main>
    );
};

export default Profile;
