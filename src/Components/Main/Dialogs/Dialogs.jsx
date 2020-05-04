import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";

const Dialogs = (props) => {
    let dialogItems = props.state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>);

    let messageItems = props.state.messages.map(m =>
        <MessageItem message={m.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogItems}
            </div>
            <div className={styles.messageItems}>
                {messageItems}
            </div>
        </div>
    )
};

export default Dialogs;
