import React from 'react';
import {connect} from "react-redux";
import styles from './ProfileContainer.module.css'
import {addPost, setUserProfile, updatePost} from "../../../Redux/profileReducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
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
