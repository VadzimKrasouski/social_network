import React from 'react';
import styles from './Profile.module.css'
import Cover from "./Cover/Cover";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPostAC, updatePostAC} from "../../../Redux/profileReducer";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <Cover/>
            <ProfileInfo/>
            <MyPosts profilePost={props.profilePage}
                     addPost={props.addPost}
                     updatePost={props.updatePost}/>
        </div>
    );
};

const mapStateToProps = (state) => ({profilePage: state.profilePage});


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updatePost: (text) => {
            dispatch(updatePostAC(text))
        }
    }
};

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ConnectedProfile;
