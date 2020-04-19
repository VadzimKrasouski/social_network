import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./Dialog";
import Messages from "./Messages";






const Dialogs = (props) => {
    let dialogItems = props.dialogs.map(i => <DialogItem name={i.name} id={i.id}/>);

    let messageItems = props.messages.map(m => <Messages message={m.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogItems}
            </div>
            <div className={styles.messages}>
                {messageItems}
            </div>
        </div>
    )
};

export default Dialogs;
