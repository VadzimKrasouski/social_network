import React from 'react';
import styles from './CreatePost.module.css'
import Avatar from "../../../Avatar/Avatar";
import TextArea from "./TextArea";
import SendButton from "./SendButton";

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
                        dispatch={props.dispatch}/>
                    <SendButton dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
