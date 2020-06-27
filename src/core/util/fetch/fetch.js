import axios from "axios";

export const BASE_URL = "http://localhost";

export const doGet = (url) => axios.get(BASE_URL + url, {withCredentials: false}).then((response) => response);

export const doPut = (url, data) => axios.put(BASE_URL + url, data, {withCredentials: false}).then((response) => response);

export const doPost = (url, data) => axios.post(BASE_URL + url, data, {withCredentials: false}).then((response) => response);

export const doDelete = (url) => axios.delete(BASE_URL + url, {withCredentials: false}).then((response) => response);
