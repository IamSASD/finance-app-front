import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../helpers/useAuth"

export const ProtectedRoutes = () => {
    const [auth, setAuth] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const waitAuth = async() => {
        await useAuth().then( res => {
            setAuth(res)
        } )
        setIsLoading(false);
    }
    waitAuth();
    if(!isLoading) {return auth ? <Outlet /> : <Navigate to={ '/login' } />}
}