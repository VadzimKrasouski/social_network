import React from 'react';
import styles from './TextArea.module.css'

const TextArea = (props) => {

    let onTextChange = (e) => {
        let text = e.target.value;
        props.updateInputText(text)
     }

    return (
        <div className={styles.textArea}>
            <textarea onChange={onTextChange}
                      placeholder={'Write something here...'}
                      rows={'1'}
                      value={props.newInputText}/>
        </div>
    );
};

export default TextArea;
