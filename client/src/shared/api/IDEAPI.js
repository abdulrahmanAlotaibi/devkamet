import axios from "./axiosConfig";


export const runCode = async (language, sourceCode, stdin) => {
    const body = {
        language, sourceCode, stdin
    };
    try {
        const response = await axios.post("ide/run", body);
        return response.data;
    } catch (error) {
        console.error(error.response);
        return { ...error.response?.data };
    }
}