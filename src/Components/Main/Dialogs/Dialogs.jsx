import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import SendButton from "../../SendButton/SendButton";
import TextArea from "../../TextArea/TextArea";
import {sendMessageAC, updateNewMessageTextAC} from "../../../Redux/dialogsReducer";
import {connect} from "react-redux";

const Dialogs = (props) => {
    let dialogItems = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} key={d.id}/>);

    let messageItems = props.dialogsPage.messages.map(m =>
        <MessageItem message={m.message} key={m.id}/>);

    let newMessageText = props.dialogsPage.newMessageText;



    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (text) => {
        props.updateNewMessageText(text);
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

let mapStateToProps = (state) => ({dialogsPage: state.dialogsPage})

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {dispatch(updateNewMessageTextAC(text))},
        sendMessage: () => {dispatch(sendMessageAC())}
    }
}



const ConnectedDialogs = connect (mapStateToProps, mapDispatchToProps)(Dialogs);
export default ConnectedDialogs;
