import React, { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';

type MapStatePropsType = {
isAuth: boolean
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
});

// /////////////////////////////////////////////////
export default (Component: any) => {
    class RedirectComponent extends React.Component<MapStatePropsType> {

        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'} />;
            }
            return <Component {...this.props} />;
        }
    }
    return connect <MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(RedirectComponent);
}