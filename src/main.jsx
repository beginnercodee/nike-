import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignIn from "./sections/SignIn.jsx";
import SignUp from './sections/SignUp.jsx';
import './index.css'
import Home from "./sections/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import PurchaseProducts from './sections/PurchaseProducts.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <React.StrictMode>
        <Routes>
            <Route path="/" element={<App />}> 
                <Route index element={<Home />} /> 
                <Route path="/sign-in" element={<SignIn />} /> 
                <Route path="/sign-up" element={<SignUp/>} /> 
                <Route path="/shop-now" element={<PurchaseProducts/>} /> 
            </Route>
        </Routes>
    </React.StrictMode>
</BrowserRouter>

)
