import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = (props) => {
    let dialogItems = props.dialogs.map(i => <Dialog name={i.name} id={i.id}/>);

    let messageItems = props.messages.map(m => <Message message={m.message}/>);

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
