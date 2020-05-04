import React from 'react';
import styles from './App.module.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <div className={styles.appWrapper}>
            <div className={styles.container}>
                <Header/>
                <Sidebar/>
                <Main state={props.state} dispatch={props.dispatch}/>
                <Footer/>
            </div>
        </div>
    );
};

export default App;

App.propTypes = {
    state: PropTypes.object
};