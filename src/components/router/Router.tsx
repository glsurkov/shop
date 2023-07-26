import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Profile from "../ProfileComponents/Profile/Profile";
import Store from "../StoreComponents/Store/Store";
import Cart from "../CartComponents/Cart/Cart";
import {useAuth} from "../../hooks/useAuth";

const Router = () => {

    const user = useAuth()

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/profile" element={user.isAuth ? <Profile token={user.token}/> : <Navigate to="/"/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    );
};

export default Router;