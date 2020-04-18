import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let dialogItems = [
    {id:1, name: 'Andrey'},
    {id:2, name: 'Sasha'},
    {id:3, name: 'Miron'},
    {id:4, name: 'Igor'},
    {id:5, name: 'Ira'},
];

let messages = [
    {id:1, message: 'How are you getting on?'},
    {id:2, message: "Let's go!"},
    {id:3, message: "What's up, man!"},
    {id:4, message: 'Call me.'},
    {id:5, message: 'Do you remember the task?'}
]

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Messages = (props) => {

    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
};

let dialog = dialogItems.map(i => <DialogItem name={i.name} id={i.id}/>);

let message = messages.map(m => <Messages message={m.message}/>);

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialog}
            </div>
            <div className={styles.messages}>
                {message}
            </div>
        </div>
    )
};

export default Dialogs;
