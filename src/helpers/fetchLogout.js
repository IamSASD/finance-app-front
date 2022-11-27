import axios from "axios"
import { BASE_URL } from "./config"

export const fetchLogout = async() => {
    let logOut;
    await axios({
        method: 'POST',
        withCredentials: true,
        url: `${BASE_URL}/logout`
    })
    .then( res => {
        logOut = res.data.loggedOut;
    } )
    .catch( err => console.log(err) )
    return logOut;
}