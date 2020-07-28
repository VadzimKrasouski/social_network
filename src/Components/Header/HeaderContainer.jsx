import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../Redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    fullName: state.auth.authProfile.fullName,
    isAuth: state.auth.isAuth
});

const ConnectedHeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderContainer)

export default ConnectedHeaderContainer;
