import React from 'react';

const FriendList = (props) => {
    const friends = props.friendList
        .map(({ imgUrl, name }) => <div className="friend"><img alt="" src={imgUrl} />{name}</div>)
    return <div className="friendList">{friends}</div>;
}

export default FriendList;