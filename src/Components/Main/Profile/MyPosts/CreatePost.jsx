import React from 'react';
import styles from './CreatePost.module.css'
import Avatar from "../../../Avatar/Avatar";
import TextArea from "./TextArea";

const CreatePost = () => {
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
                    <TextArea/>
                    <div className={styles.button}>
                        <button>Sent</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
