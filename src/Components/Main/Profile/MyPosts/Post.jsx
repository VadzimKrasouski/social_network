import React from 'react';
import styles from './Post.module.css'
import Avatar from "../../../../common/Avatar/Avatar";
import Likes from "./Likes";
import ava from '../../../../assets/img/ava.jpeg';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <Avatar img={ava}/>
            </div>
            <div className={styles.postText}>
                {props.post}
               <Likes likesCount = {props.likesCount}/>
            </div>
        </div>
    );
};

export default Post;
