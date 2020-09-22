import axios from "axios";
import Response, { ResponseCodes } from "./response"

class Http {

    httpClient = null;
    path = "";
    payload = null;
    request = null;

    constructor(path, payload) {
        this.path = path;
        this.payload = payload;
        this.httpClient = axios.create({
            baseURL: (typeof window == "undefined" ? "" : window.location.origin + "/api/")
        });

        this.initiateRquest = this.initiateRquest.bind(this);
        this.onResponse = this.onResponse.bind(this);
        this.onError = this.onError.bind(this);
    }
    initiateRquest() {
        this.request = this.httpClient.post(this.path, this.payload);
    }
    async useSwr() {
        // console.log(this)
        // return await this.httpClient.post(this.path, this.payload);
    }
    onResponse(callback) {
        if (typeof callback == "function") {
            if (this.request == null) {
                this.initiateRquest();
            }
            this.request.then((response) => {
                console.log(response)
                if(response && response.data && ResponseCodes.OK == response.data.code){
                    callback(response);
                }
            });
        }
        return this;
    }
    onError(callback) {
        if (typeof callback == "function") {
            if (this.request == null) {
                this.initiateRquest();
            }
            this.request.catch((error) => {
                callback(error);
            });
        }
        return this;
    }
}


export default Http;
export { Response, ResponseCodes };