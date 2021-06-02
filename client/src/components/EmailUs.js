import React from "react";
import Input from "./Input";
import { AiOutlineMail } from "react-icons/ai";
import Illustration from "../components/Illustration";
import emailBackground from "../assets/images/emailUs.svg";
import Button from "./Button";

function EmailUs() {
  return (
    <section
      className="from-blue-600 to-indigo-600 bg-gradient-to-l p-6 h 
          min-h-lggg lg:p-16 flex flex-col-reverse items-center lg:flex-row justify-center lg:justify-between  "
    >
      <div className="text-left lg:text-left">
        <h1 className="text-2xl xl:text-5xl font-bold ">
          Subscribe to Our Newslatter
        </h1>
        <p className="mb-6 mt-3 font-medium text-base">
          News and realy useful articles about the topics being covered in the
          platform.
        </p>
        <Input
          placeholder="YourEmail@gmail.com"
          type="text"
          icon={<AiOutlineMail />}
          isDark={false}
          fullWidth
        />
        <div className="mt-2">
          <div className="hidden md:block">
            <Button isDark={true} to="/signup">
              Subscribe
            </Button>
          </div>
          <div className="block w-full md:hidden mt-2">
            <Button isDark={true} to="/signup" fullWidth={true}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Illustration src={emailBackground} />
      </div>
    </section>
  );
}

export default EmailUs;
