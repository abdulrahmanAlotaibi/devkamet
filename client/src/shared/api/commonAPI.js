import axios from "./axiosConfig";

export const sendContactUsMessage = async (name, email, message) => {
  try {
    const response = await axios.post("common/contact-us", {
      name,
      email,
      message,
    });
    return response.data;
  } catch (error) {
    return { ...error.response?.data };
  }
};

export const search = async (term, filters) => {
  try {
    const response = await axios.get("common/search", {
      params: {
        term,
        filters,
      },
    });
    return response.data;
  } catch (error) {
    return { ...error.response?.data };
  }
};
