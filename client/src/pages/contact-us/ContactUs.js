import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";
import Textarea from "components/Textarea";
import React, { useReducer } from "react";
import { FiSend } from "react-icons/fi";
import {
  contactState,
  coontactReducer,
  UPDATE_INPUTS,
  SEND_REQUEST,
  UPDATE_RESULT,
} from "./reducer";
import * as commonAPI from "shared/api/commonAPI";
import Alert from "components/Alert";
import Footer from "components/Footer";
function ContactUs() {
  const [state, dispatch] = useReducer(coontactReducer, contactState);
  const { name, email, content, isError, isLoading, message } = state;

  const handleInputChange = (inputs) => {
    dispatch({
      type: UPDATE_INPUTS,
      payload: {
        inputs,
      },
    });
  };

  const sendMessage = async () => {
    dispatch({
      type: SEND_REQUEST,
    });

    const response = await commonAPI.sendContactUsMessage(name, email, message);

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        message: response.message,
      },
    });
  };

  return (
    <>
      <Header />
      {isError && <Alert isError={isError} message={message} />}
      <main className="p-4 ">
        <h1
          className="font-bold text-4xl
                    text-center mt-10
                "
        >
          Contact Us
        </h1>
        <div className="flex justify-center">
          <form className="w-lggg mt-10">
            <Input
              label="Your Name"
              fullWidth
              name="name"
              onChange={(e) =>
                handleInputChange([
                  { key: e.target.name, value: e.target.value },
                ])
              }
              value={name}
            />
            <Input
              label="Email"
              name="email"
              fullWidth
              onChange={(e) =>
                handleInputChange([
                  { key: e.target.name, value: e.target.value },
                ])
              }
              value={email}
            />
            <Textarea
              label="Description"
              fullWidth
              name="content"
              onChange={(e) =>
                handleInputChange([
                  { key: e.target.name, value: e.target.value },
                ])
              }
              value={content}
            />
            <Button to="#" fullWidth onClick={sendMessage} isLoading={isLoading}>
              {!isLoading && <FiSend className="mr-2" />}
              <span>Send</span>
            </Button>
          </form>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
