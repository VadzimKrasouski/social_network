import React from 'react';
import styles from './Post.module.css'
import Avatar from "../../../Avatar/Avatar";
import Likes from "./Likes";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <Avatar/>
            </div>
            <div className={styles.message}>
                {props.message}
               <Likes likesCount = {props.likesCount}/>
            </div>
        </div>
    );
};

export default Post;
