import React from 'react';
import {connect} from "react-redux";
import styles from './ProfileContainer.module.css'
import {addPost, getProfile, getUserStatus, updatePost, updateUserStatus} from "../../../Redux/profileReducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
// import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }
        this.props.getUserStatus(userId);
        this.props.getProfile(userId);
    }

    render() {
        return (
            <div className={styles.container}>
                <Profile {...this.props} updateUserStatus={this.props.updateUserStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    /*id: state.auth.id,
    authProfile: state.auth.authProfile*/
});

export default compose(
    connect(mapStateToProps, {addPost, updatePost, getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
