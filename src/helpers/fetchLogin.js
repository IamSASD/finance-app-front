import axios from "axios";

export const fetchLogin = async(body) => {
    let isLogin;
    await axios.post( "http://localhost:3000/login", body, { withCredentials: true } )
        .then( res => {
            isLogin = res.data.code;
        } )
        .catch( err => console.log(err) );
    return isLogin;
}