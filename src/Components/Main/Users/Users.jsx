import React from "react";
import styles from './Users.module.css'
import Avatar from "../../Avatar/Avatar";

const Users = (props) => {
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>
            <div className={styles.pagination}>
                {pages.map(p => {
                    debugger
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p + " "}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={styles.userBlock}>
                <span>
                    <div className={styles.avatar}>
                        <Avatar img={u.photos.small}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
    )
}

export default Users;