import React from 'react';
import styles from './MyPosts.module.css'
import CreatePost from "./CreatePost";
import Post from "./Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../../Redux/profileReducer";

const MyPosts = (props) => {

    let post = props.profilePost.posts.map(p =>
        <Post post={p.post}
              likesCount={p.likesCount}/>);

    let onTextChange = (text) => {
        props.dispatch(updatePostActionCreator(text));
    }

    let onAddPost = () => {
        props.dispatch(addPostActionCreator());
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
