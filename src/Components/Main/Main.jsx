import React from 'react';
import styles from './Main.module.css'
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Main = (props) => {
    return (
        <div className={styles.main}>
            <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />}/>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    );
};

export default Main;

Main.propTypes = {

}