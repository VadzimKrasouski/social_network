import React from 'react';
import styles from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className={styles.appWrapper}>
            <div className={styles.container}>
                <Header/>
                <Navbar/>
                <Profile/>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
