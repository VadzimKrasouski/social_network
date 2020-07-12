import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthProfile, setAuthUserData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.id)
                        .then(response => {
                            this.props.setAuthProfile(response.data);
                        })
                }

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
