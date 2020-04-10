import React from 'react';
import styles from './CreatePost.module.css'
import Avatar from "../Avatar";

const CreatePost = () => {
    return (
        <div className={styles.createPosts}>
            <div className={styles.header}>
                <h3>Create Post</h3>
            </div>

            <div className={styles.body}>
                <Avatar/>
                <div className={styles.newPost}>
                    <textarea placeholder={'Write something here...'} rows={'1'}></textarea>
                    <button>Sent</button>
                </div>
            </div>

            <div>post1</div>
            <div>post2</div>
        </div>
    );
};

export default CreatePost;
