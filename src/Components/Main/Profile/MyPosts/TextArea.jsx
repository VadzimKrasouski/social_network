import React from 'react';
import styles from './TextArea.module.css'
import {updatePostActionCreator} from "../../../../Redux/profileReducer";

const TextArea = (props) => {

    let newPostElement = React.createRef();

    let onTextChange = () => {
        let postText = newPostElement.current.value;
        props.dispatch(updatePostActionCreator(postText));
    }

    return (
        <div className={styles.textArea}>
            <textarea ref={newPostElement}
                      onChange={onTextChange}
                      placeholder={'Write something here...'}
                      rows={'1'}
                      value={props.newPostText}/>
        </div>
    );
};

export default TextArea;
