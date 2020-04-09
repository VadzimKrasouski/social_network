import React from 'react';
import styles from './Profile.module.css'
import Cover from "./Cover";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <Cover/>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
