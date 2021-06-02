import * as announcementService from "../services/announcementsService";
import { HttpStatusCode } from "../shared/http";

export const createAnnouncement = async (req: any, res: any, next: any) => {
  try {
    const { title, content } = req.body;

    const response = await announcementService.createAnnouncement(
      title,
      content
    );

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAnnouncements = async (req: any, res: any, next: any) => {
  try {
    const response = await announcementService.getAllAnnouncements();

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getAnnouncement = async (req: any, res: any, next: any) => {
  try {
    const response = await announcementService.getAnnouncement();

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

