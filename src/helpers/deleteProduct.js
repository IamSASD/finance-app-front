import axios from "axios"
import { BASE_URL } from "./config"

export const deleteProduct = async(id) => {
    let response
    await axios( {
        method: 'DELETE',
        url: `${ BASE_URL }/productos/${ id }`,
        withCredentials: true
    } )
    .then( res => {
        response = res.data.exito
    } )
    .catch( err => console.log(err) );
  return  response
}