import React from 'react';
import styles from './Profile.module.css'
import Cover from "./Cover/Cover";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <Cover/>
            <ProfileInfo/>
            <MyPosts profilePost={props.profilePage}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}/>
        </div>
    );
};

export default Profile;
