import React from "react";
import {connect} from "react-redux";
import styles from './UsersContainer.module.css'
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../../Redux/usersReducer";
import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../../../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false);
            })
    }
    follow = (userId) => {
        this.props.follow(userId)
    }
    unfollow = (userId) => {
        this.props.unFollow(userId)
    }

    render() {
        return <div className={styles.usersContainer}>
            {this.props.isFetching ? <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       follow={this.follow}
                       unfollow={this.unfollow}/>
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
        isFetching: state.usersPage.isFetching
    }
}

const ConnectedUsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)
export default ConnectedUsersContainer;

