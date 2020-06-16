import React from 'react';
import styles from './MyPosts.module.css'
import CreatePost from "./CreatePost";
import Post from "./Post";

const MyPosts = (props) => {
    let post = props.profilePost.posts.map(p =>
        <Post key={p.id} post={p.post}
              likesCount={p.likesCount}/>);

    let onTextChange = (text) => {
        props.updatePost(text);
    }

    let onAddPost = () => {
        props.addPost();
    };

    return (
        <div className={styles.myPosts}>
            <CreatePost updateInputText={onTextChange}
                        addPost={onAddPost}
                        newInputText={props.profilePost.newPostText}/>
            {post}
        </div>
    );
};

export default MyPosts;
