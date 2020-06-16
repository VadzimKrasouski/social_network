import React from "react";
import styles from './Users.module.css'
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../../Redux/usersReducer";
import Avatar from "../../Avatar/Avatar";

const Users = (props) => {
    return (
        <div className={styles.users}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styles.avatar}>
                        <Avatar/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button> }

                    </div>
                </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
            }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
const ConnectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users)
export default ConnectedUsers;