import React from 'react';
import styles from './CreatePost.module.css'
import Avatar from "../../../Avatar/Avatar";
import TextArea from "./TextArea";
import SentButton from "./SentButton";

const CreatePost = (props) => {

    return (
        <div className={styles.createPost}>
            <div className={styles.header}>
                <h3>Create Post</h3>
            </div>
            <div className={styles.body}>
                <div className={styles.avatar}>
                    <Avatar/>
                </div>
                <div className={styles.input}>
                    <TextArea
                        newPostText={props.newPostText}
                        updatePostText={props.updatePostText}/>
                    <SentButton addPost={props.addPost}/>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
