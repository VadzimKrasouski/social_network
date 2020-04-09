import React from 'react';
import styles from './Profile.module.css'
import Cover from "./Cover";
import ProfileInfo from "./ProfileInfo";
import CreatePost from "./CreatePost";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <Cover/>
            <ProfileInfo/>
            <CreatePost/>
        </div>
    );
};

export default Profile;
