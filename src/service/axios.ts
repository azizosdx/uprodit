import axios from "axios"
import {endpoints} from  "./endpoints"
import generateSignature from "./genrates"

const Client = axios.create ({
  baseURL: endpoints.baseURL,
  headers:{
    "Content-Type": "application/json",
  }
});

 Client.interceptors.request.use(
  async (config) =>{
    if(config.url) {
        const token = generateSignature(config.url);
        config.headers = { ...config.headers, Authorization: token };
    }
    return config
},
(error) => {
    return Promise.reject(error);
}
)

export {Client}
