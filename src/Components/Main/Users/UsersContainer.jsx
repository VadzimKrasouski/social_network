import React from 'react';
import {connect} from 'react-redux';
import styles from './UsersContainer.module.css'
import {
    follow,
    getUsers,
    setCurrentPage,
    setSearchName,
    toggleFollowingProgress,
    toggleIsFetching,
    unFollow,
} from '../../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../../../common/Preloader';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';
import TextArea from '../../../common/TextArea/TextArea';

class UsersContainer extends React.Component {
    state = {
        searchString: '',
        int: 0
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.searchName);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searchName !== this.props.searchName) {
            this.props.setCurrentPage(1)
            this.props.getUsers(1, this.props.pageSize, this.props.searchName)
        }
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
        this.props.setSearchName('');
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.searchName);
    }

    onSearchNameChange = (text) => {
        this.setState({searchString: text})
        clearTimeout(this.state.int)
        const interval = setTimeout(() => {
            this.props.setSearchName(this.state.searchString);
        }, 1500)
        this.setState({int: interval})
    }

    render() {
        return <div className={styles.usersContainer}>
            <div className={styles.searchArea}>
                <hr/>
                <TextArea newInputText={this.state.searchString}
                          updateInputText={this.onSearchNameChange}
                          placeholder={'Search users'}
                          rows={1}/>
                <hr/>
            </div>
            <div className={styles.users}>{this.props.isFetching ? <Preloader/> :
                <Users totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       followingInProgress={this.props.followingInProgress}
                />
            }</div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        searchName: state.usersPage.searchName
    }
}


export default compose(
    connect(mapStateToProps,
        {
            setSearchName, follow, unFollow, setCurrentPage,
            toggleIsFetching, toggleFollowingProgress, getUsers
        }),
    withAuthRedirect
)(UsersContainer);

