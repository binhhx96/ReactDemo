import http from "../Utils/http-request";
import {API_LOGIN} from "../constants/api";
import storage from "../Utils/storage";

const authenticate = {
    login(email, password, rememberMe) {
        return http.post(API_LOGIN, {email, password, rememberMe}).then((response) => {
            storage.set("_token", response.data.token);
            return response.data;
        });
    },
}
export default authenticate;