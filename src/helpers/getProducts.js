import axios from "axios"
import { BASE_URL } from "./config"

export const getProducts = async() => {
    let products;
    await axios({
        method: 'GET',
        withCredentials: true,
        url: `${ BASE_URL }/productos`
    })
    .then( res => products = res.data )
    .catch( err => console.log( err ) );

    return products;
}