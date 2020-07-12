import React from "react";
import styles from './Users.module.css'
import Avatar from "../../../common/Avatar/Avatar";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>
            <div className={styles.pagination}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p
                        ? styles.selectedPage : styles.unSelected}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p + " "}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={styles.userBlock}>
                <span>
                    <div className={styles.avatar}>
                        <NavLink to={'/profile/' + u.id}>
                        <Avatar img={u.photos.small}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                followAPI.unFollow(u.id)
                                    .then(props.unfollow(u.id))
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                followAPI.follow(u.id)
                                    .then(props.follow(u.id))
                            }}>Follow</button>}
                            </div>
                            </span>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>
                        <NavLink to={'/profile/' + u.id}>
                            <h3>{u.name}</h3>
                        </NavLink>
                        <div>{u.status}</div>
                    </div>
                    <div className={styles.userLocation}>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Users;