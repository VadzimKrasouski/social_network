import React from 'react';
import styles from './Profile.module.css'
import Cover from "./Cover/Cover";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    debugger
    return (
        <div className={styles.profile}>
            <Cover/>
            <ProfileInfo profile={props.profilePage.profile}/>
            <MyPosts profilePost={props.profilePage}
                     addPost={props.addPost}
                     updatePost={props.updatePost}/>
        </div>
    );
};


export default Profile;
