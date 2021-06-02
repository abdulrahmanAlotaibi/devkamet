import React, { useState, useEffect } from "react";
import EmailUs from "../../components/EmailUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "./Hero";
import Overview from "./Overview";
import * as announcementAPI from "shared/api/announcementAPI";
import { AiOutlineClose } from "react-icons/ai";
import { getLocalStorageItem, setLocalStorageItem } from "shared/util/common";

function Home() {
  const [isClose, setIsClose] = useState(true);
  const [announcement, setAnnouncement] = useState({});

  useEffect(() => {
    if (!getLocalStorageItem("isVisited")) {
      getAnnouncement()
      setLocalStorageItem("isVisited", true)
    }


  }, []);

  const getAnnouncement = async () => {
    const response = await announcementAPI.getAnnouncement();

    if (response.status === "success") {
      setAnnouncement(response.result);
      setIsClose(false);
    }
  };

  return (
    <>
      {!isClose && announcement?.title && (
        <section
          id="pop"
          className=" 
                      from-blue-700 w-full to-indigo-700 bg-gradient-to-l
                      flex justify-between items-center text-white
                      pl-10 pr-10 p-4  font-normal text-sm"
        >
          <h1 className="font-medium ">
            🚀 &nbsp; {announcement.title} : {announcement.content}
          </h1>
          <div className="cursor-pointer" onClick={() => setIsClose(true)}>
            <AiOutlineClose className="text-xl xl:text-2xl" />
          </div>
        </section>
      )}
      <Header />

      <Hero />
      <main>
        <Overview />
        <EmailUs />
        <Footer />
      </main>
    </>
  );
}

export default Home;
