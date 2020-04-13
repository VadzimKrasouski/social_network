import React from 'react';
import styles from './MyPosts.module.css'
import CreatePost from "./CreatePost";
import Post from "./Post";

const MyPosts = () => {
    let messages = [
        { message : 'This is my first post.', likesCount : '11' },
        { message : 'You will know React and Redux perfectly.', likesCount : '10' },
        { message : 'But It is not for sure.', likesCount : '1' },
        { message : "So, let's work hard.", likesCount : '4' },
        { message : "BLA, bla, bLa.", likesCount : '0' },
    ];

    let post = messages.map( m => <Post message = {m.message} likesCount = {m.likesCount} />);

    return (
        <div className={styles.myPosts}>
            <CreatePost/>
            {post}
        </div>
    );
};

export default MyPosts;
