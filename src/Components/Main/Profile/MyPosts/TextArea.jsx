import React from 'react';
import styles from './TextArea.module.css'

const TextArea = () => {
    return (
        <div className={styles.textArea}>
            <textarea placeholder={'Write something here...'} rows={'1'}/>
        </div>
    );
};

export default TextArea;
