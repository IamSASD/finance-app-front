import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Activity, Hero, Login, Products, User } from "./pages";
import { Register } from "./pages/Register";


export const FinanzasApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Hero /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } /> 
                <Route element={ <ProtectedRoutes/> }>
                    <Route path="/activity" element={ <Activity /> } />
                    <Route path="/products" element={ <Products /> } />
                    <Route path="/user" element={ <User /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );

}