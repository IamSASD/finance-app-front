import axios from "axios";
import { BASE_URL } from "./config";

export const updateProduct = async(body, id) => {
    let response;

    await axios.put( `${ BASE_URL }/productos/${ id }`, body, { withCredentials: true } )
        .then( res => response = res.data.exito )
        .catch( err => console.log(err) );

    return response;
}