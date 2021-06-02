import { AiOutlineCoffee, AiOutlineBug } from "react-icons/ai";
import { RiTerminalWindowLine } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";

/**
 * @desc : actions represents the actual items in the navigation,
 * This help us re-use the Sidebar component for different users and views
 */

const actions = [
  {
    title: "Dashboard",
    icon: <AiOutlineCoffee />,
    to: "/admin/",
  },
  {
    title: "Courses",
    icon: <RiTerminalWindowLine />,
    to: "/admin/courses",
  },
  {
    title: "Announcements",
    icon: <HiOutlineSpeakerphone />,
    to: "/admin/announcements",
  },
  {
    title: "Bugs Report",
    icon: <AiOutlineBug />,
    to: "/admin/bugs",
  },
];

export default actions;
