import React from 'react';
import {NavLink} from 'react-router-dom';

export const AuthButton = props => {
    let {isLoggedIn, authName, authId} = props;
    if (isLoggedIn) {
        return <NavLink to={'/profile/' + authId}>Logout, {authName}</NavLink>;
    } else {
        return <NavLink to={'/login'}>Login</NavLink>;
    }
};