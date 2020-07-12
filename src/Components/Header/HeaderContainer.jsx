import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthProfile, setAuthUserData} from "../../Redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuthUserData()
            .then(data => {
                this.props.setAuthUserData(data);
                authAPI.getAuthProfile(this.props.id)
                    .then(data => {
                        this.props.setAuthProfile(data);
                    })
            })
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

const ConnectedHeaderContainer = connect(mapStateToProps, {setAuthUserData, setAuthProfile})(HeaderContainer)

export default ConnectedHeaderContainer;
