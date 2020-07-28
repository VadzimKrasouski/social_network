import React from 'react';
import styles from './MyPosts.module.css'
import CreatePost from './CreatePost';
import Post from './Post';

const MyPosts = (props) => {
    let post = props.profilePage.posts.map(p =>
        <Post key={p.id} post={p.post}
              likesCount={p.likesCount}/>);

    return (
        <div className={styles.myPosts}>
            <CreatePost addPost={props.addPost}
                        newInputText={props.profilePage.newPostText}/>
            {post}
        </div>
    );
};

export default MyPosts;
