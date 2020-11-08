import React from 'react';
import styles from './Users.module.css'
import Avatar from '../../../common/Avatar/Avatar';
import {NavLink} from 'react-router-dom';

const Users = React.memo(({users, follow, unFollow, followingInProgress}) => {
    return (
        <>
            {users.map(u => <div key={u.id} className={styles.userBlock}>
                <span className={styles.avatar}>
                        <NavLink to={'/profile/' + u.id}>
                        <Avatar img={u.photos.small}/>
                        </NavLink>
                    <div>
                        {u.followed
                            ? <button className={styles.button}
                                      disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          unFollow(u.id)
                                      }}>Unfollow
                            </button>
                            : <button className={styles.button}
                                      disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          follow(u.id)
                                      }}>Follow
                            </button>
                        }
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
        </>
    )
})

export default Users;

