import React, { ComponentType, FC } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';

export type RedirectPropsType = {
isAuth: boolean
}

const mapStateToProps = (state: AppStateType): RedirectPropsType => ({
    isAuth: state.auth.isAuth,
});

export default function <WCP>(WrappedComponent: ComponentType<WCP>) {
    const RedirectComponent: FC<RedirectPropsType> = (props) => {
        const { isAuth, ...restProps } = props;
            if (!isAuth) {
                return <Redirect to={'/login'} />;
            }
        return <WrappedComponent {...restProps as WCP}/>;
        }
    return connect<RedirectPropsType, {}, WCP, AppStateType>(mapStateToProps)
        (RedirectComponent);
}