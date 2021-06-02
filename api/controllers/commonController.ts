import * as CommonService from "../services/commonService";
import { HttpStatusCode } from "../shared/http";

export const contactUs = async (req: any, res: any, next: any) => {
  const { name, email, content } = req.body;
  try {
    await CommonService.contactUs(name, email, content);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      message: "Your message has ben received",
    });
  } catch (error) {
    next(error);
  }
};

export const search = async (req: any, res: any, next: any) => {
  try {
    let { term } = req.query;

    const response = await CommonService.search(term, {});

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};
