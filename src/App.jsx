import React from 'react';
import styles from './App.module.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
        <div className={styles.appWrapper}>
            <div className={styles.container}>
                <HeaderContainer/>
                <Sidebar/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
};

export default App;

