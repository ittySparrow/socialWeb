import React from 'react';
import * as axios from 'axios';
import avaDefault from "../../assets/images/avaDefault.jpg";
import styles from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(({ data }) => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });   
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(({ data }) => this.props.setUsers(data.items));   
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i += 1) {
            pages.push(i);
        }

        return (<div>
            <div>
                {pages.map((p) => <span onClick={() => this.onPageChanged(p)} className={p === this.props.currentPage && styles.selectedPage}>{p}</span>)}
            </div>
            {
                this.props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small ? u.photos.small : avaDefault } className={styles.photo}/>
                                </div>
                                <div>
                                    <button onClick={() => this.props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div><div>{u.status}</div>
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
}

export default Users;