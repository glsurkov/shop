import React, {useEffect} from 'react';
import './styles/globalStyles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Store from "./components/StoreComponents/Store/Store";
import Main from "./components/Main/Main";
import Cart from "./components/CartComponents/Cart/Cart";
import {Provider} from "react-redux";
import store from "./store/store";
import Profile from "./components/ProfileComponents/Profile/Profile";
import {useAuth} from "./hooks/useAuth";
import Router from "./components/router/Router";


const App: React.FC = () => {

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                        <Router/>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;