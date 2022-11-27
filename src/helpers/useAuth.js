import axios from "axios"

export const useAuth = async() => {
    let isAuth;
    await axios({
        url: 'http://localhost:3000/checkout',
        withCredentials: true,
        method: 'POST'
    })
    .then( res => {
        isAuth = res.data.auth;
    }  )
    .catch( err => console.log( err ) );
    return isAuth;
}