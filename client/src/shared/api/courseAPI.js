import axios from "./axiosConfig";

export const createCourse = async (title, description) => {
  const body = {
    title,
    description,
  };
  try {
    const response = await axios.post("courses", body);
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};

export const getCourse = async (courseId) => {
  try {
    const response = await axios.get(`courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};
export const getAllCourses = async () => {
  try {
    const response = await axios.get("courses");

    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};
export const updateCourse = async (courseId, properties) => {
  try {
    const response = await axios.patch("courses", { courseId, properties });
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};

export const createLesson = async (slug, title, content, type) => {
  try {
    const response = await axios.post(`courses/${slug}/lessons`, {
      title,
      content,
      type,
    });
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};

export const getAllLessons = async (courseId) => {
  try {
    const response = await axios.get(`courses/${courseId}/lessons`);
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};
