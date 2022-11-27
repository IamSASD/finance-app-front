import axios from "axios";
import { BASE_URL } from "./config";

export const getActivities = async() => {
    let response;

    await axios({
        method: 'GET',
        url: `${ BASE_URL }/actividades`,
        withCredentials: true
    })
    .then( res => {
        response = res.data
    } )

    return response;
}