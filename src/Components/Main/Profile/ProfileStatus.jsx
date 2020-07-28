import React from 'react';
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deActivateEditMode = (e) => {
        this.props.updateUserStatus(e.currentTarget.value)
        this.setState({editMode: false});
    }

    render() {
        return (
            <div className={styles.notActive}>
                {!this.state.editMode &&
                <span onClick={this.activateEditMode}>{this.props.status || 'Change status'}</span>}
                {this.state.editMode &&
                <input onBlur={this.deActivateEditMode} autoFocus={true} defaultValue={this.props.status}/>}
            </div>
        );
    }
}

export default ProfileStatus;