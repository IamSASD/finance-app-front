import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activity, Hero, Login, Products, User } from "./pages";


export const FinanzasApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Hero /> } />
                <Route path="/login" element={ <Login type={ 'login' } /> } />
                <Route path="/register" element={ <Login type={ 'register' } /> } />
                <Route path="/activity" element={ <Activity /> } />
                <Route path="/products" element={ <Products /> } />
                <Route path="/user" element={ <User /> } />
            </Routes>
        </BrowserRouter>
    );

}