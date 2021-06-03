import axios from "./axiosConfig";

export const getLesson = async (lessonId) => {
  try {
    const response = await axios.get(`lessons/${lessonId}`);
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};

export const updateLesson = async (lessonId, updatedLesson) => {
  try {
    const response = await axios.put(`/lessons/${lessonId}`, {
      updatedLesson,
    });
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};

export const removeLesson = async (courseId, lessonId) => {
  try {
    const response = await axios.delete(
      `/courses/${courseId}/lessons/${lessonId}`
    );
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};
