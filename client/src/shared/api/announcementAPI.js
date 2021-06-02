import axios from "./axiosConfig";

export const createAnnouncement = async (title, content) => {
    try {
        const body = {
            title, content
        }
        const response = await axios.post("announcements", body)
        return response.data;

    } catch (error) {
        console.error(error.response);
        return { ...error.response?.data };
    }
}

export const getAllAnnouncements = async () => {
    try {
        const response = await axios.get("announcements", {
            params: {
                latest: true
            }
        })
        return response.data;

    } catch (error) {
        console.error(error.response);
        return { ...error.response?.data };
    }
}

export const getAnnouncement = async () => {
    try {
        const response = await axios.get("announcements/latest", {})
        return response.data;

    } catch (error) {
        console.error(error.response);
        return { ...error.response?.data };
    }
}