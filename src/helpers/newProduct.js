import axios from "axios"
import { BASE_URL } from "./config"

export const newProduct = async( body ) => {
    let exito;
    await axios.post( `${ BASE_URL }/productos`, body, { withCredentials: true } )
    .then( res => {
        exito = res.data.exito;
    } )
    .catch( err => console.log(err) );
    return exito;
}