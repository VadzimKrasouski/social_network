import React from 'react';
import {connect} from "react-redux";
import styles from './ProfileContainer.module.css'
import {addPost, setUserProfile, updatePost} from "../../../Redux/profileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div className={styles.container}>
                <Profile {...this.props} profilePage={this.props.profilePage}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    authProfile: state.auth.authProfile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
const ConnectedProfileContainer =
    connect(mapStateToProps, {addPost, updatePost, setUserProfile})(WithUrlDataContainerComponent);
export default ConnectedProfileContainer;
