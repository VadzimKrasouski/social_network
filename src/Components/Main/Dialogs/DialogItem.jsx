import React from 'react';
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import Avatar from "../../Avatar/Avatar";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={styles.dialogItem}>
            <div className={styles.avatar}>
                <Avatar img={null}/>
            </div>
            <div className={styles.dialog}>
                <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
            </div>
        </div>
    )
};

export default DialogItem;
