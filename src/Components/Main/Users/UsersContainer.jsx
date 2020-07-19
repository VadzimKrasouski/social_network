import React from "react";
import {connect} from "react-redux";
import styles from './UsersContainer.module.css'
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    toggleIsFetching,
} from "../../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../../../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <div className={styles.usersContainer}>
            {this.props.isFetching ? <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}/>
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const ConnectedUsersContainer = connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage, toggleIsFetching,
        toggleFollowingProgress, getUsers
    })(UsersContainer)
export default ConnectedUsersContainer;

