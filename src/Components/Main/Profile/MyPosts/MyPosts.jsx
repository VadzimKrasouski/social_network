import React from 'react';
import styles from './MyPosts.module.css'
import CreatePost from "./CreatePost";
import Post from "./Post";

const MyPosts = (props) => {

    let post = props.posts.map( m => <Post post = {m.post} likesCount = {m.likesCount} />);

    return (
        <div className={styles.myPosts}>
            <CreatePost/>
            {post}
        </div>
    );
};

export default MyPosts;
