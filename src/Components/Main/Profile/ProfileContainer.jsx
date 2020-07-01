import React from 'react';
import {connect} from "react-redux";
import {addPost, setUserProfile, updatePost} from "../../../Redux/profileReducer";
import Profile from "./Profile";
import * as axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        debugger
        return (
            <Profile {...this.props} profilePage={this.props.profilePage}/>
        );
    }
}

const mapStateToProps = (state) => ({profilePage: state.profilePage});
const ConnectedProfileContainer = connect(mapStateToProps, {addPost, updatePost, setUserProfile})(ProfileContainer);
export default ConnectedProfileContainer;
