import React from "react";
import styles from './Users.module.css'
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../../Redux/usersReducer";
import Avatar from "../../Avatar/Avatar";
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={styles.users}>
                <div className={styles.container}>
                    {this.props.users.map(u => <div key={u.id} className={styles.userBlock}>
                <span>
                    <div className={styles.avatar}>
                        <Avatar img={u.photos.small}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                        <div className={styles.userInfo}>
                            <div className={styles.userName}>
                                <h3>{u.name}</h3>
                                <div>{u.status}</div>
                            </div>
                            <div className={styles.userLocation}>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        );
    }
}

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