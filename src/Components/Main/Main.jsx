import React from 'react';
import styles from './Main.module.css'
import Dialogs from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Main = () => {
    return (
        <div className={styles.main}>
            <Route path='/profile' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <Dialogs/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
        </div>
    );
};

export default Main;

