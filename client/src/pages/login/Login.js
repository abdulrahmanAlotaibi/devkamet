import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "./Form";
import Illustration from "../../components/Illustration";
import loginBackground from "../../assets/images/login.svg";

function Login() {
  return (
    <div>
      <Header />
      <div
        className="flex flex-col xl:flex-row 
            xl:pl-44  p-10 pt-16 xl:pr-36  justify-start xl:justify-between min-h-screen  
             items-center xl:items-start  from-blue-600 to-indigo-600 bg-gradient-to-l
                
            "
      >
        <div className="flex flex-col lg:block  justify-center items-center w-full lg:w-auto">
          <h2 className="text-base mb-2">Welcome Back 👋</h2>
          <h1 className="text-6xl font-semibold mb-10 ">Login</h1>
          <Form />
        </div>
        <div className=" mt-20 xl:mt-0 text-center flex justify-center ">
          <Illustration src={loginBackground} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
