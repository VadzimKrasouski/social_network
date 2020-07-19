import React from 'react';
import styles from './Profile.module.css'
import Cover from "./Cover/Cover";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../../../common/Preloader";

const Profile = (props) => {
    if (!props.profilePage.profile) {
        return <div className={styles.preloader}>
            <Preloader/>
        </div>
    }
    return (
        <div className={styles.profile}>
            <Cover/>
            <ProfileInfo profile={props.profilePage.profile}/>
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     updatePost={props.updatePost}/>
        </div>
    );
};

export default Profile;
