import React from 'react';
import {connect} from 'react-redux';
import styles from './UsersContainer.module.css'
import {
    follow,
    getUsers, moreGetUsers,
    setCurrentPage,
    setSearchName, setSowMoreCurrentPage,
    toggleFollowingProgress,
    toggleIsFetching,
    unFollow,
} from '../../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../../../common/Preloader';
import TextArea from '../../../common/TextArea/TextArea';
import Pagination from '../../../common/Pagination/Pagination';

class UsersContainer extends React.Component {
    state = {
        searchString: '',
        int: 0
    }

    componentDidMount() {
        console.log('mount')
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

    showMore = () => {
        this.props.setSowMoreCurrentPage();
        this.props.moreGetUsers(this.props.showMoreCurrentPage, this.props.pageSize, this.props.searchName);
        console.log(this.props.showMoreCurrentPage)
    }

    onSearchNameChange = (text) => {
        this.setState({searchString: text})
        clearTimeout(this.state.int)
        const interval = setTimeout(() => {
            this.props.setSearchName(this.state.searchString);
        }, 1500)
        this.setState({int: interval})
    }
    firstPreloader = () => {
        return this.props.isFetching && this.props.currentPage + 1 === this.props.showMoreCurrentPage
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
            <Pagination totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        portionSize={this.props.portionSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}/>
            {this.firstPreloader() ? <Preloader/> :
                <div className={styles.users}>
                    <Users users={this.props.users}
                           follow={this.props.follow}
                           unFollow={this.props.unFollow}
                           followingInProgress={this.props.followingInProgress}
                    />
                    {
                        this.props.isFetching ? <button className={styles.showMore} disabled={true}>Show more</button> :
                            <button className={styles.showMore} onClick={this.showMore}>Show more</button>
                    }
                </div>
            }
            {/*{this.props.isFetching ? <button className={styles.showMore} disabled={true}>Show more</button>: <button className={styles.showMore} onClick={this.showMore}>Show more</button>}*/}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        showMoreCurrentPage: state.usersPage.showMoreCurrentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        searchName: state.usersPage.searchName,
        portionSize: state.usersPage.portionSize
    }
}


export default connect(mapStateToProps,
    {
        setSearchName, follow, unFollow, setCurrentPage, setSowMoreCurrentPage,
        toggleIsFetching, toggleFollowingProgress, getUsers, moreGetUsers
    })(UsersContainer);
/*export default compose(
    connect(mapStateToProps,
        {
            setSearchName, follow, unFollow, setCurrentPage,
            toggleIsFetching, toggleFollowingProgress, getUsers
        }),
    withAuthRedirect
)(UsersContainer);*/

