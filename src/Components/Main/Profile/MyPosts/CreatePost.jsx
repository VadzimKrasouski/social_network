import React from 'react';
import styles from './CreatePost.module.css'
import Avatar from "../../../Avatar/Avatar";
import TextArea from "../../../TextArea/TextArea";
import SendButton from "../../../SendButton/SendButton";
import ava from '../../../../assets/img/ava.jpeg';

const CreatePost = (props) => {

    return (
        <div className={styles.createPost}>
            <h3 className={styles.header}>Create Post</h3>
            <div className={styles.body}>
                <div className={styles.avatar}>
                    <Avatar img={ava}/>
                </div>
                <div className={styles.input}>
                    <TextArea
                        newInputText={props.newInputText}
                        updateInputText={props.updateInputText}
                        placeholder={'Write something here...'}
                        rows={'1'}/>
                    <SendButton addPost={props.addPost}/>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
