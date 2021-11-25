import axios from "axios";

const geocodingUrl = "https://geolocation.apigw.ntruss.com/geolocation/v2"

export const request = axios.create({
    baseURL: "27.96.134.100:8080",
    timeout: 100000,
});

export const postStoreInfo = async () => {

};
