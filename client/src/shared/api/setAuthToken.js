import axios from "./axiosConfig";

export const setHeader = (header) => {
    if (header) {
        axios.defaults.headers.common[header.key] = header.value;
    }
};

export const deleteHeader = (headerName) => {
    delete axios.defaults.headers.common[headerName];
}
