import Announcement from "../models/Announcement";

export const createAnnouncement = async (title: string, content: string) => {
  return await Announcement.create({ title, content });
};

// todo: Filters
export const getAllAnnouncements = async (skip = 5, limit = 15) => {
  return await Announcement.find({});
};

// todo: Filters
export const getAnnouncement = async (sort = { created_at: "-1" }) => {
  return await Announcement.findOne({}, {}, { sort }).lean().exec();
};
