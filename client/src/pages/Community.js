import React from "react";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import Header from "components/Header";
import Illustration from "components/Illustration";
import social from "../assets/images/social.svg";
import Footer from "components/Footer";

function Community() {
  return (
    <>
      <Header />
      <main>
        <section
          className="flex flex-col justify-center items-center xl:flex-row p-6 md:p-14 xl:p-20 
                from-blue-600 w-full to-indigo-600 bg-gradient-to-l
                "
        >
          <div className="w-full  xl:w-2/3 ">
            <h1 className="text-3xl font-bold mb-10">
              Grow your skills with others. Come and say Hello!
            </h1>
            <ul className="flex flex-col w-full ">
              <a
                href="https://twitter.com/devKamet"
                className="p-6  w-full  from-blue-900  to-indigo-700 bg-gradient-to-l shadow-xl rounded-md flex items-center cursor-pointer mb-6 "
              >
                <div
                  className=" bg-indigo-500
                      xl:w-20 xl:h-20 p-3 xl:p-4 rounded-md flex justify-center items-center"
                >
                  <FaDiscord className="h-6 w-6 xl:h-10 xl:w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold ">Discord Community</h3>
                  <p className="font-normal text-sm xl:text-lg">
                    Getting in touch with other engineers, sharing helpful
                    resources, and answering questions
                  </p>
                </div>
              </a>
              <li className="p-6   w-full from-blue-900  to-indigo-700 bg-gradient-to-l shadow-xl rounded-md flex items-center cursor-pointer mb-6">
                <div className=" bg-blue-500 p-3 xl:p-4 rounded-md flex justify-center items-center">
                  <AiOutlineTwitter className="h-6 w-6 xl:h-10 xl:w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold ">Twitter</h3>
                  <p className="font-normal text-sm xl:text-lg">
                    Useful Snippets and news related to subjects covered in this
                    platform
                  </p>
                </div>
              </li>
              <li className="p-6  from-blue-900  to-indigo-700 bg-gradient-to-l shadow-xl rounded-md flex items-center cursor-pointer mb-6">
                <div className=" bg-gray-800  p-3 xl:p-4  rounded-md flex justify-center items-center">
                  <AiFillGithub className="h-6 w-6 xl:h-10 xl:w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold ">Github Repository</h3>
                  <p className="font-normal text-sm xl:text-lg ">
                    Getting in touch with other engineers, sharing helpful extra
                    resources, and answering questions
                  </p>
                </div>
              </li>
              <li className="p-6  from-blue-900  to-indigo-700 bg-gradient-to-l shadow-xl rounded-md flex items-center cursor-pointer mb-6">
                <div className=" bg-blue-600  p-3 xl:p-4 rounded-md flex justify-center items-center">
                  <RiArticleLine className="h-6 w-6 xl:h-10 xl:w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold  ">DevKamet Blog</h3>
                  <p className="font-normal text-sm xl:text-lg">
                    Announcmenets and technical articles
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Illustration src={social} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Community;
