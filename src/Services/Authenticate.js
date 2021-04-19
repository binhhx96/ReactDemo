import http from "../Utils/http-request";
import {API_LOGIN} from "../constants/api";

export default {
    login(email, password) {
        return http.post(API_LOGIN, {email, password});
    },
}