import React from 'react';
import styles from './SendButton.module.css'

const SendButton = (props) => {

    let onButtonClick = () => {
        props.addPost();
    };

    return (
        <button className={styles.button} onClick={onButtonClick}>Send</button>
    );
};

export default SendButton;
