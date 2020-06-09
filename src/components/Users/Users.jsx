import React from 'react';
import * as axios from 'axios';
import avaDefault from "../../assets/images/avaDefault.jpg";
import styles from './Users.module.css';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(({ data }) => this.props.setUsers(data.items));
    }

    render() {
        return (
            this.props.users.map((u) => 
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
        )
    }
}

export default Users;