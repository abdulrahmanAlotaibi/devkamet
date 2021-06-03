import { AiOutlineCoffee, AiOutlineHome } from "react-icons/ai"
import { FiCpu } from "react-icons/fi"
import { SiGnubash, SiLinux } from "react-icons/si"
import golang from "../../assets/icons/golang.svg"
import { DiGo } from "react-icons/di";


export default [
    {
        title: "Dashboard",
        icon: <AiOutlineHome />,
        to: "/dashboard"
    },
    {
        title: "Computer Science",
        icon: <FiCpu />,
        to: "/courses/cs"
    },
    {
        title: "Golang",
        icon: <DiGo className="text-2xl"/>,
        to: "/courses/golang"
    },
    {
        title: "Linux",
        icon: <SiLinux />,
        to: "/courses/linux"
    },
    {
        title: "Bash Scripting",
        icon: <SiGnubash />,
        to: "/courses/bash"
    },
]