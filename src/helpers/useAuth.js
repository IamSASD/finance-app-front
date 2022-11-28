import axios from "axios"
import { BASE_URL } from "./config";

export const useAuth = async() => {
    let isAuth;
    await axios({
        url: `${ BASE_URL }/checkout`,
        withCredentials: true,
        method: 'POST'
    })
    .then( res => {
        isAuth = res.data.auth;
    }  )
    .catch( err => console.log( err ) );
    return isAuth;
}