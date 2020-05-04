import React from 'react';
import styles from './SentButton.module.css'

const SentButton = (props) => {

    let onAddPostClick = () => {
        props.dispatch({type: 'ADD-NEW-POST'});
    };

    return (
        <div className={styles.button}>
            <button onClick={onAddPostClick}>Sent</button>
        </div>
    );
};

export default SentButton;
