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
                      placeholder={props.placeholder}
                      rows={props.rows}
                      value={props.newInputText}/>
        </div>
    );
};

export default TextArea;
