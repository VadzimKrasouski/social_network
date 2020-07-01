import React from 'react';
import styles from './SendButton.module.css'

const SendButton = (props) => {

    let onButtonClick = () => {
        props.addPost();
    };

    return (
        <div className={styles.button}>
            <button onClick={onButtonClick}>Send</button>
        </div>
    );
};

export default SendButton;
