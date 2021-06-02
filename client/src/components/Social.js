import React from 'react'
import { FaDiscord } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"
import { RiArticleLine } from "react-icons/ri"

function Social() {
    return (
        <article>
            <h1 className="text-xl xl:text-2xl font-bold mb-6 mt-10 text-white ">
                Stay Updated
          </h1>
            <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2 justify-items-stretch content-center">
                <li >
                    <a href="https://discord.gg/zzZHQeupdN"
                        className="p-6  bg-black rounded-md flex items-center cursor-pointer  h-40 border-2 border-gray-800"
                    >
                        <div className=" bg-indigo-500
                            md:w-20 md:h-20 p-4 rounded-md flex justify-center items-center">
                            <FaDiscord className="h-10 w-10" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold ">Discord Community</h3>
                            <p className="font-light hidden xl:block">Getting in touch with other engineers,
                            sharing helpful resources, and answering questions</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/devKamet"
                        className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                        <div className=" bg-blue-500 p-4 rounded-md flex justify-center items-center">
                            <AiOutlineTwitter className="h-10 w-10" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold ">Twitter</h3>
                            <p className="font-light  hidden xl:block">Cool Snippets and news related to subjects covered in this platform</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/DevKamet"
                        className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                        <div className=" bg-gray-800  p-4  rounded-md flex justify-center items-center">
                            <AiOutlineGithub className="h-10 w-10" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold ">Github Repository</h3>
                            <p className="font-light  hidden xl:block">All of the exercises solutions and cool
                         projects related to Golang and other subjects</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/DevKamet" className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                        <div className=" bg-blue-600  p-4 rounded-md flex justify-center items-center">
                            <RiArticleLine className="h-10 w-10" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold ">DevKamet Blog</h3>
                            <p className="font-light  hidden xl:block">Getting in touch with other engineers,
                            sharing helpful extra resources, and answering questions</p>
                        </div>
                    </a>
                </li>
            </ul>
        </article>
    )
}

export default Social
