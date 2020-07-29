import React from "react";
import avaDefault from "../../assets/images/avaDefault.jpg";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small ? u.photos.small : avaDefault}
                  className={styles.photo}
                />
              </div>
              <div>
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() =>
                    u.followed
                      ? props.unfollowUser(u.id)
                      : props.followUser(u.id)
                  }
                >
                  {u.followed ? "Unfollow" : "Follow"}
                </button>
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
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
