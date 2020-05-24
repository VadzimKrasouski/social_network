import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../Redux/dialogsReducer";
import SendButton from "../Profile/MyPosts/SendButton";
import TextArea from "../Profile/MyPosts/TextArea";

const Dialogs = (props) => {
    let dialogItems = props.state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>);

    let messageItems = props.state.messages.map(m =>
        <MessageItem message={m.message}/>);

    let newMessageText = props.state.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (text) => {
        props.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogItems}
            </div>
            <div className={styles.messageItems}>
                {messageItems}
                <div className={styles.input}>
                    <TextArea newInputText={newMessageText}
                              updateInputText={onNewMessageChange}
                              placeholder={'New message text...'}/>
                    <SendButton addPost={onSendMessageClick}/>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
