import axios from "./axiosConfig";

export const login = async (email, password) => {
  try {
    const payload = { email, password };
    const response = await axios.post("/auth", payload);
    return response.data;
  } catch (err) {
    return { ...err.response?.data };
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get("/auth");
    return response;
  } catch (err) {
    return { ...err.response?.data };
  }
};

export const signup = async (formData) => {
  try {
    const response = await axios.post("/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    return { ...err.response?.data };
  }
};

export const signin = async (email, password) => {
  try {
    const response = await axios.post("/auth", { email, password });
    return response.data;
  } catch (err) {
    return { ...err.response?.data };
  }
};

export const getLastActions = (userId) => {};
