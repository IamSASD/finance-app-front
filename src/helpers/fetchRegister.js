import axios from "axios"

export const fetchRegister = async( body ) => {
    let resCode = '';
    await axios.post( 'http://localhost:3000/register', body )
        .then( res => {
            resCode = res.data.code;
        } )
        .catch( err => console.log(err) );
    return resCode;
}