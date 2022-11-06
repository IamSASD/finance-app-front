import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./Hero";
import { Login } from "./Login";

export const FinanzasApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Hero /> } />
                <Route path="/login" element={ <Login type={ 'login' } /> } />
                <Route path="/register" element={ <Login type={ 'register' } /> } />
            </Routes>
        </BrowserRouter>
    );

}