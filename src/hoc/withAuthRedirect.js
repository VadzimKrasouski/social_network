import React from 'react';

import {connect} from 'react-redux';
import {Redirect} from "react-router-dom"
let mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export const withAuthRedirect = (Componet) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>

            return <Componet {...this.props}/>
        }
    }
    return connect(mapStateToProps)(RedirectComponent);
}
