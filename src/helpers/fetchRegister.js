import axios from "axios"
import { BASE_URL } from "./config";

export const fetchRegister = async( body ) => {
    let response = '';
    await axios.post( `${ BASE_URL }/register`, body )
        .then( res => {
            response = res.data.code;
        } )
        .catch( err => response = err );
    return response;
}