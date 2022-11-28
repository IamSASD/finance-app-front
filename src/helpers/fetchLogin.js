import axios from "axios";
import { BASE_URL } from "./config";

export const fetchLogin = async(body) => {
    let isLogin;
    await axios.post( `${ BASE_URL }/login`, body, { withCredentials: true } )
        .then( res => {
            isLogin = res.data.code;
        } )
        .catch( err => isLogin = err.response.status );
    return isLogin;
}