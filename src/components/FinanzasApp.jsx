import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activity } from "./Activity";
import { Hero } from "./Hero";
import { Login } from "./Login";
import { Products } from "./Products";

export const FinanzasApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Hero /> } />
                <Route path="/login" element={ <Login type={ 'login' } /> } />
                <Route path="/register" element={ <Login type={ 'register' } /> } />
                <Route path="/activity" element={ <Activity /> } />
                <Route path="/products" element={ <Products /> } />
            </Routes>
        </BrowserRouter>
    );

}