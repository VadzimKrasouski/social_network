import React from 'react';
import styles from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={styles.myPosts}>
            <span>My posts</span>
            <div>New post</div>
            <div>post1</div>
            <div>post2</div>
        </div>
    );
};

export default MyPosts;
