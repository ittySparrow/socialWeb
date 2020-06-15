import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/API';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId;
        profileAPI.getUserProfile(userId)
            .then((data) => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <div>
                <Profile { ...this.props }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
