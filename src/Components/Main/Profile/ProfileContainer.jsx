import React from 'react';
import {connect} from "react-redux";
import {addPost, setUserProfile, updatePost} from "../../../Redux/profileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} profilePage={this.props.profilePage}/>
        );
    }
}

const mapStateToProps = (state) => ({profilePage: state.profilePage});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
const ConnectedProfileContainer = connect(mapStateToProps, {addPost, updatePost, setUserProfile})(WithUrlDataContainerComponent);
export default ConnectedProfileContainer;
