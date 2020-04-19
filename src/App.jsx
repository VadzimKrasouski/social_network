import React from 'react';
import styles from './App.module.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <div className={styles.container}>
                    <Header/>
                    <Sidebar/>
                    <Main posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
