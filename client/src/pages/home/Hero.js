import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeroBackground from "../../assets/images/hero.svg";
import Button from "../../components/Button";
import Illustration from "../../components/Illustration";
import { UserContext } from "shared/context/User";
import { AiOutlineHome } from "react-icons/ai";

function Hero() {
  const userContext = useContext(UserContext);
  const { user } = userContext.state;
  return (
    <section
      className="from-blue-600 w-full to-indigo-600 bg-gradient-to-l
          min-h-lggg  p-6 pt-10 pb-36 lg:pt-14 xl:pt-20  xl:p-44 flex 2xl:items-start 2xl:flex-row 2xl:justify-between
            flex-col items-start justify-start
            min-h-screen
        "
    >
      <div className=" text-white flex 2xl:h-full w-full flex-col  items-start justify-start  md:mb-10">
        <h1 className="text-3xl font-bold xl:font-bold md:text-4xl  lg:text-4xl xl:text-6xl 2xl:text-7xl">
          Learn the Skills of Great Software Engineers
        </h1>
        <h2 className="mb-4 mt-4 xl:mb-6 text-lg p xl:text-xl w-2/3 font-light xl:font-normal xl:mt-6">
          Build a talent by learning the essentials of Computer Science, Data Structures, Algorithms, and Operating Systems using Golang
        </h2>
        <div className="hidden md:block">
          {user ? (
            <Button
              isDark={true}
              to={user.role === "student" ? "/courses" : "/admin/courses"}
            >
              <AiOutlineHome />
              <span className="ml-2">Go to Dashboard</span>
            </Button>
          ) : (
            <Button isDark={true} to="/signup">
              Join Now
            </Button>
          )}
        </div>
        <div className="block w-full md:hidden mt-4">
          {user ? (
            <Button
              isDark={true}
              fullWidth={true}
              to={user.role === "student" ? "/courses" : "/admin/courses"}
            >
              <AiOutlineHome />
              <span className="ml-2">Go to Dashboard</span>
            </Button>
          ) : (
            <Button isDark={true} to="/signup" fullWidth={true}>
              Join Now
            </Button>
          )}

          {!user && (
            <div className="w-full  mt-10 text-center ">
              <Link
                to="/login"
                className="inline-block font-semibold border-b-4 
                border-blue-500"
              >
                Or Login Here
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className=" text-center md:text-right   mt-28 xl:mt-0 2xl:w-auto w-full">
        <Illustration src={HeroBackground} />
      </div>
    </section>
  );
}

export default Hero;
