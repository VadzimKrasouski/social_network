import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../Redux/dialogsReducer";
import SendButton from "../Profile/MyPosts/SendButton";

const Dialogs = (props) => {
    let dialogItems = props.state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>);

    let messageItems = props.state.messages.map(m =>
        <MessageItem message={m.message}/>);

    let newMessageText = props.state.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let messageText = e.target.value
        props.dispatch(updateNewMessageTextCreator(messageText))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogItems}
            </div>
            <div className={styles.messageItems}>
                <div>{messageItems}</div>
                <div>
                    <textarea value={newMessageText} onChange={onNewMessageChange} placeholder={'New message text...'}/>
                    {/*<button onClick={onSendMessageClick}>Send</button>*/}
                    <SendButton addPost={onSendMessageClick}/>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;
