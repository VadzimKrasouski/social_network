import React from 'react';
import styles from './MyPosts.module.css'
import CreatePost from "./CreatePost";

const MyPosts = () => {
    return (
        <div className={styles.myPosts}>
            <CreatePost/>
            <div className={styles.post}>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    );
};

export default MyPosts;
