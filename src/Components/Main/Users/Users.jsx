import React from "react";
import styles from './Users.module.css'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalusersCountAC, setUsersAC, unFollowAC} from "../../../Redux/usersReducer";
import Avatar from "../../Avatar/Avatar";
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalusersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++ ) {
            pages.push(i);
        }
        return (
            <div className={styles.users}>
                <div className={styles.container}>
                    <div>
                        {pages.map(p => {
                           return  <span className={this.props.currentPage === p && styles.selectedPage}
                           onClick={(e) => {this.onPageChanged(p)}}>{p + " "}</span>
                        })}
                    </div>
                    {this.props.users.map(u => <div key={u.id} className={styles.userBlock}>
                <span>
                    <div className={styles.avatar}>
                        <Avatar img={u.photos.small}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unFollow(u.id)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalusersCount: (totalCount) => {
            dispatch(setTotalusersCountAC(totalCount))
        },
    }
}
const ConnectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users)
export default ConnectedUsers;