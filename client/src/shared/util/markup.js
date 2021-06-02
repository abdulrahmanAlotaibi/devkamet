//
import { FiCpu } from "react-icons/fi";
import { BiNews, BiNetworkChart } from "react-icons/bi";
import { SiGnubash, SiLinux } from "react-icons/si";
import { AiOutlineExperiment } from "react-icons/ai";
import golang from "../../assets/icons/goo.svg";
import { BsTerminal } from "react-icons/bs";

/**
 * @desc Shared utilities for the UI components
 */

export const chooseCourseIcon = (courseName) => {
  switch (courseName) {
    case "Linux Basics":
      return <SiLinux />;
    case "Bash Scripting":
      return <SiGnubash />;
    case "Data Strcture and Algorithims":
      return <BiNetworkChart />;
    case "Intro to Computer Science":
      return <FiCpu />;
    case "Efficient Software with Go":
      return <img src={golang} alt="Go Icon" className="w-6 h-6" />;
    default:
      return "";
  }
};

export const chooseLessonIcon = (lessonType) => {
  const styles = "w-8 h-8";

  switch (lessonType) {
    case "Article":
      return <BiNews className={styles} />;
    case "Exercise":
      return <BsTerminal className={styles} />;
    case "Test":
      return <AiOutlineExperiment className={styles} />;
    default:
      return <BiNews className={styles} />;
  }
};
