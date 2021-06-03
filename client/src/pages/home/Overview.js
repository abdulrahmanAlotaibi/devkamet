import React from "react";
import InfoCard from "../../components/InfoCard";
import { FiCpu } from "react-icons/fi";
import { SiGnubash, SiLinux } from "react-icons/si";
import Illustration from "../../components/Illustration";
import HeroBackground from "../../assets/images/overview.svg";
import golang from "../../assets/icons/goo.svg";

function Overview() {
  return (
    <section className="p-4 md:p-10 flex flex-col items-center justify-center">
      <Illustration src={HeroBackground} />
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 mt-14">
        Engineering is all about strong foundation, to build unlimitied future!
      </h1>
      <ul>
        <div className="flex flex-col items-center lg:flex-row justify-center">
          <li>
            <a href="/about-courses/#cs" className="mb-10 md:m-4 flex items-center justify-center">
              <InfoCard
                icon={<FiCpu className="text-2xl" />}
                title="Computer Science"
                description="
              An introduction to computer science as a tool to solve real-world analytical problems using Go. 
              "
              />
            </a>
          </li>

          <li>
            <a href="/about-courses/#shell" className="mb-10 md:m-4 flex items-center justify-center">
              <InfoCard
                icon={<SiGnubash className="text-2xl" />}
                title="Shell Scripting"
                description="
              It serves as a textbook, a manual for self-study, and as a reference and source of knowledge on shell scripting techniques.
                        "
              />
            </a>
          </li>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center">
          <li>
            <a href="/about-courses/#os" className="mb-10 md:m-4 flex items-center justify-center">
              <InfoCard
                icon={<SiLinux className="text-2xl" />}
                title="Operating Systems"
                description="
                            
              This guide gently introduces key terminal skills and equips newcomers to learn more about Linux.
                        "
              />
            </a>
          </li>
          <li>
            <a href="/about-courses/#go" to="" className="mb-10 md:m-4 flex items-center justify-center">
              <InfoCard
                icon={<img src={golang} className="font-bold w-8 h-8" />}
                title="Golang"
                description="
              Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
                        "
              />
            </a>
          </li>
        </div>
      </ul>
    </section>
  );
}

export default Overview;
