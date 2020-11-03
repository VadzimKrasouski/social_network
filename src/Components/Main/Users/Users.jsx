import React from 'react';
import styles from './Users.module.css'
import Avatar from '../../../common/Avatar/Avatar';
import {NavLink} from 'react-router-dom';
import {Pagination} from '../../../common/Pagination/Pagination';

const Users = (props) => {
    return (
        <div className={styles.users}>
            <Pagination totalCount={props.totalCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
                        portionSize={props.portionSize}
            />
            {props.users.map(u => <div key={u.id} className={styles.userBlock}>
                <span>
                    <div className={styles.avatar}>
                        <NavLink to={'/profile/' + u.id}>
                        <Avatar img={u.photos.small}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unFollow(u.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
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

