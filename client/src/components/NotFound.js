import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Illustration from './Illustration'
import img from "assets/images/404.svg"
import { Link } from 'react-router-dom'

function NotFound({location}) {
    return (
        <>
            <Header />
            <main >
                <section className="
                flex flex-col items-center  xl:flex-row  xl:p-28 xl:pt-10
                justify-start xl:justify-between p-10 min-h-screen xl:items-start   from-blue-600 to-indigo-600 bg-gradient-to-l
                " >
                    <div className="w-full xl:w-auto pt-6 2xl:pt-12" >
                        <h2 className=" text-base mb-2  font-semibold ">Error 404 😿</h2>
                        <h1 className="text-4xl md:text-5xl  mb-2 font-bold  ">Sorry, that page isn’t here.</h1>
                        <h3 className="mt-4 text-lg ">We may have moved the page you're looking for somewhere else.</h3>
                        <ul className="mt-8">
                            <li className=" mb-6">
                                <div className="font-bold">Did you typed the URL?</div>
                                <div>You may have typed the address (URL) incorrectly.</div>
                            </li>
                            <li  className=" mb-6">
                                <div className="font-bold">Did you follow a link from the website?</div>
                                <div>If you reached this page from a devKamet page please <Link to="/contact" className=" border-b-4 border-blue-500">inform us here</Link></div>
                            </li>
                        </ul>
                        <div>
                            {/* <Button isDark>Back To Home</Button> */}
                            <a href="#footer" className=" border-b-4 border-blue-500">Check out the footer for the most important pages.</a>
                        </div>
                    </div>
                    <div>
                        <Illustration src={img} alt="Guy with a crashed plane " />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default NotFound
