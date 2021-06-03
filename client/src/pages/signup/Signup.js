import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "./Form";
import Illustration from "../../components/Illustration";
import loginBackground from "../../assets/images/login.svg";

function Signup() {
  return (
    <div>
      <Header />
      <div
        className="flex flex-col items-center  xl:flex-row  xl:pl-44 pt-4 xl:pr-36
              justify-start xl:justify-between p-6
             min-h-screen xl:items-start  from-blue-600 to-indigo-600 bg-gradient-to-l
                
            "
      >
        <div className="w-full md:w-auto">
          <h2 className="text-base mb-2">Hello 👋</h2>
          <h1 className="text-3xl  mb-6 font-semibold  ">Create an account</h1>
          <Form />
        </div>
        <div className=" mt-20 text-center flex justify-center">
          <Illustration src={loginBackground} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
