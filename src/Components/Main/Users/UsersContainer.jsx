import React from "react";
import {connect} from "react-redux";
import styles from './UsersContainer.module.css'
import {
    follow,
    setCurrentPage,
    setTotalusersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../../Redux/usersReducer";
import * as axios from 'axios';
import Users from "./Users";
import preloader from './../../../assets/img/preloader.gif'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalusersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={styles.usersContainer}>
            {this.props.isFetching ? <img src={preloader} alt={'preloader'}/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}/>}

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

const ConnectedUsersContainer = connect(mapStateToProps, follow, unFollow, setUsers,
    setCurrentPage, setTotalusersCount, toggleIsFetching)(UsersContainer)
export default ConnectedUsersContainer;