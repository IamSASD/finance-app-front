import axios from "axios";
import { BASE_URL } from "./config";

export const newActivity = async(body) => {
    let response;

    await axios.post( `${ BASE_URL }/actividades`, body, { withCredentials: true } )
        .then( res => {
            response = res.data.exito
        } )
        .catch( err => console.log(err) );

    return response;
}