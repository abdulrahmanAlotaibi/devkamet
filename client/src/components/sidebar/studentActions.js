import { AiOutlineHome } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";
import { SiGnubash, SiLinux } from "react-icons/si";
import golang from "../../assets/icons/goo.svg";

import { BiNetworkChart } from "react-icons/bi";

const actions = [
  {
    title: "Dashboard",
    icon: <AiOutlineHome />,
    to: "/courses",
  },
  {
    title: "Computer Science",
    icon: <FiCpu />,
    to: "/courses/Computer-Science",
  },
  {
    title: "Data Structures",
    icon: <BiNetworkChart />,
    to: "/courses/Data-Strctures",
  },
  {
    title: "Golang",
    icon: (
      <img src={golang} className="w-6 h-6 text-center object-contain -ml-1" alt="Golang icon" />
    ),
    to: "/courses/Golang",
  },
  {
    title: "Linux",
    icon: <SiLinux />,
    to: "/courses/Linux",
  },
  {
    title: "Shell Scripting",
    icon: <SiGnubash />,
    to: "/courses/Shell-Scripting",
  },
];

export default actions;
