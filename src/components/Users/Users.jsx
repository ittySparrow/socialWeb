import React from 'react';
import avaDefault from "../../assets/images/avaDefault.jpg";
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= 10; i += 1) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map((p) => <span onClick={() => props.onPageChanged(p)} className={p === props.currentPage && styles.selectedPage}>{p}</span>)}
        </div>
        {
            props.users.map((u) => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small ? u.photos.small : avaDefault } className={styles.photo}/>
                            </div>
                            <div>
                                <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <NavLink to={`/profile/${u.id}`}>
                                    <div>{u.name}</div>
                                </NavLink>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div><div>{"u.location.country"}</div>
                            </span>
                        </span>
                    </div>
                )
            })
        }
    </div>)
}

export default Users;