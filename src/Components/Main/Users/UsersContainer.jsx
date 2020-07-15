import React from "react";
import {connect} from "react-redux";
import styles from './UsersContainer.module.css'
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unFollow
} from "../../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../../../common/Preloader";
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false);
            })
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
                       unfollow={this.props.unFollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}/>
            }

        </div>
    }
}

let mapStateToProps = (state) => {
    debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const ConnectedUsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer)
export default ConnectedUsersContainer;

