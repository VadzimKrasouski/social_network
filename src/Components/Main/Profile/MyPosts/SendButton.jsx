import React from 'react';
import styles from './SendButton.module.css'
import {addPostActionCreator} from "../../../../Redux/profileReducer";

const SendButton = (props) => {

    let onAddPostClick = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={styles.button}>
            <button onClick={onAddPostClick}>Send</button>
        </div>
    );
};

export default SendButton;
