import React from 'react';
import styles from './CreatePost.module.css'
import Avatar from '../../../../common/Avatar/Avatar';
import ava from '../../../../assets/img/ava.jpeg';
import {Field, reduxForm} from 'redux-form';

const CreatePost = (props) => {
    let onSendPostClick = (value) => {
        props.addPost(value.newPostText);
        console.log(value.newPostText)
    }

    return (
        <div className={styles.createPost}>
            <h3 className={styles.header}>Create Post</h3>
            <div className={styles.body}>
                <div className={styles.avatar}>
                    <Avatar img={ava}/>
                </div>
                <div className={styles.input}>
                    <CreatePostForm onSubmit={onSendPostClick}/>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;

let CreatePostForm = (props) => {
    const {handleSubmit} = props
    return (
        <form className={styles.textArea} onSubmit={handleSubmit}>
            <Field placeholder='Write something here...' name='newPostText' component='input'/>
            <button className={styles.button}>Send</button>
        </form>
    );
};

CreatePostForm = reduxForm({form: 'newPost'})(CreatePostForm)