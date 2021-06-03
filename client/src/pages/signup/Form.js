import React, { useReducer, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import * as userAPI from "shared/api/userAPI";
import Input from "components/Input";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  SIGNUP,
  UPDATE_RESULT,
  signupState,
  signupReducer,
  UPDATE_INPUTS,
} from "./reducer";
import Alert from "components/Alert";

import { UserContext } from "shared/context/User";

function Form() {
  const [state, dispatch] = useReducer(signupReducer, signupState);
  const {
    name,
    email,
    password,
    confirmPassword,
    isLoading,
    isError,
    errors,
    message,
    avatar,
  } = state;

  const userContext = useContext(UserContext);

  const handleInputChange = (inputs) => {
    dispatch({
      type: UPDATE_INPUTS,
      payload: {
        inputs,
      },
    });
  };

  const signup = async () => {
    dispatch({
      type: SIGNUP,
    });

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("avatar", avatar); // Blob

    const response = await userAPI.signup(formData);
    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        errors: response.errors,
        message: response.message,
      },
    });

    if (response.status === "success") {
      const { user, accessToken, refreshToken } = response.result
      userContext.handlers.updateUser(user, accessToken, refreshToken);
    }

  };

  switch (userContext.state?.user?.role) {
    case "student":
      return <Redirect to="/dashboard" />;
    case "admin":
      return <Redirect to="/admin/dashboard" />;
    default:
      break;
  }

  return (
    <form className="w-full md:w-96" enctype="multipart/form-data">
      {/* Display feedback message to the user */}
      {message && <Alert message={message} isError={isError} />}

      <div className="flex justify-center items-center mb-4">
        {avatar ? (
          <div className="relative">
            <div className="relative  z-20 overflow-hidden inline-block w-28 h-28 rounded-full  
              cursor-pointer bg-black opacity-0 hover:opacity-70 transition-all duration-200">
              <button className="p-2 text-sm font-semibold   outline-none flex flex-col items-center justify-center w-full h-full ">
                <AiOutlineCloudUpload className="text-4xl text-blue-600" />
              </button>
              <input
                className="inline-block w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
                type="file"
                id="img"
                name="avatar"
                accept="image/*"
                isDark={false}
                onChange={(e) =>
                  handleInputChange([
                    { key: e.target?.name, value: e.target.files[0] },
                  ])
                }
              />
            </div>

            <img
              src={URL.createObjectURL(avatar)}
              alt="Avatar"
              className="absolute top-0 left-0 w-28 h-28 rounded-full object-cover shadow-lg"
            />
          </div>
        ) : (
          <div className="relative overflow-hidden inline-block w-28 h-28 rounded-full  cursor-pointer">
            <button className="p-2 text-sm font-semibold  bg-gray-900 outline-none flex flex-col items-center justify-center w-full h-full ">
              <AiOutlineCloudUpload className="text-xl mb-2" />
              <span>Upload Avatar</span>
            </button>
            <input
              className="inline-block w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
              type="file"
              id="img"
              name="avatar"
              accept="image/*"
              onChange={(e) =>
                handleInputChange([
                  { key: e.target?.name, value: e.target.files[0] },
                ])
              }
            />
          </div>
        )}
      </div>

      <Input
        label="Full Name"
        name="name"
        isDark={false}
        fullWidth
        onChange={(e) =>
          handleInputChange([{ key: e.target?.name, value: e.target?.value }])
        }
      />
      {errors.name && (
        <div className="text-red-400 mb-4">{errors["name"]?.msg}</div>
      )}
      <Input
        type="email"
        label="Email"
        name="email"
        isDark={false}
        fullWidth
        onChange={(e) =>
          handleInputChange([{ key: e.target.name, value: e.target.value }])
        }
        value={email}
      />

      {errors.email && (
        <div className="text-red-400 mb-4">{errors["email"]?.msg}</div>
      )}
      <Input
        label="Password"
        type="password"
        name="password"
        isDark={false}
        fullWidth
        onChange={(e) =>
          handleInputChange([{ key: e.target.name, value: e.target.value }])
        }
        value={password}
      />

      {errors.password && (
        <div className="text-red-400 mb-4">{errors["password"].msg}</div>
      )}

      <ul className="list-disc pl-4 mb-4  ">
        <li>At least one number</li>
        <li>At least one sepcial character</li>
        <li>between 8-15</li>
      </ul>
      <Input
        label="Confirm Password"
        type="password"
        fullWidth
        name="confirmPassword"
        styles="bg-white"
        isDark={false}
        onChange={(e) =>
          handleInputChange([{ key: e.target.name, value: e.target.value }])
        }
        value={confirmPassword}
      />
      {errors.confirmPassword && (
        <div className="text-red-500 mb-4">{errors["confirmPassword"].msg}</div>
      )}
      <div className="">
        <Button fullWidth isDark onClick={signup} isLoading={isLoading}>
          Create an account
        </Button>
      </div>
      <div className="mt-4">
        <Link>
          <span>Already have an account ? &nbsp;</span>
          <Link
            to="/login"
            className="text-white font-medium  border-b-4 border-blue-500"
          >
            Login
          </Link>
        </Link>
      </div>
    </form>
  );
}

export default Form;
