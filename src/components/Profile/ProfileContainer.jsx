import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.setProfile(userId);
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
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { setProfile })(withRouter(ProfileContainer));
