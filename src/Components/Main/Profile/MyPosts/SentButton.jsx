import React from 'react';
import styles from './SentButton.module.css'
import {addPostActionCreator} from "../../../../Redux/state";

const SentButton = (props) => {

    let onAddPostClick = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={styles.button}>
            <button onClick={onAddPostClick}>Sent</button>
        </div>
    );
};

export default SentButton;
