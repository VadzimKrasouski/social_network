import React from 'react';
import styles from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends";
import {connect} from "react-redux";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.nav}>
                <NavLink to={'/profile/' + props.id} activeClassName={styles.active}>Profile</NavLink>
                <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
                <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
                <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
                <NavLink to='/users' activeClassName={styles.active}>Users</NavLink>
                <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
            </nav>
            <Friends/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    id: state.auth.id,
});

const ConnectedSideBar = connect(mapStateToProps)(Sidebar)
export default ConnectedSideBar;
