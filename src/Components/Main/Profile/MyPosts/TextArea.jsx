import React from 'react';
import styles from './TextArea.module.css'

const TextArea = (props) => {

    let newPostElement = React.createRef();

    let onTextChange = () => {
        let postText = newPostElement.current.value;
        props.updatePostText(postText);
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
