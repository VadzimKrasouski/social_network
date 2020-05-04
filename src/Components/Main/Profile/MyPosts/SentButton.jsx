import React from 'react';
import styles from './SentButton.module.css'

const SentButton = (props) => {

    let onAddPostClick = () => {
        props.addPost();
    };

    return (
        <div className={styles.button}>
            <button onClick={onAddPostClick}>Sent</button>
        </div>
    );
};

export default SentButton;
