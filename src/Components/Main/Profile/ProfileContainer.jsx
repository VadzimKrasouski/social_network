import React from 'react';
import {connect} from "react-redux";
import styles from './ProfileContainer.module.css'
import {addPost, getProfile, updatePost} from "../../../Redux/profileReducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <div className={styles.container}>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    /*id: state.auth.id,
    authProfile: state.auth.authProfile*/
});

let AuthRedirectedComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectedComponent);
const ConnectedProfileContainer =
    connect(mapStateToProps, {addPost, updatePost, getProfile})(WithUrlDataContainerComponent);
export default ConnectedProfileContainer;
