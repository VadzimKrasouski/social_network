import React from 'react';
import styles from './MyPosts.module.css'
import CreatePost from "./CreatePost";
import Post from "./Post";

const MyPosts = (props) => {

    let post = props.profilePost.posts.map(p => <Post post={p.post} likesCount={p.likesCount}/>);

    return (
        <div className={styles.myPosts}>
            <CreatePost dispatch={props.dispatch}
                        newPostText={props.profilePost.newPostText}/>
            {post}
        </div>
    );
};

export default MyPosts;
