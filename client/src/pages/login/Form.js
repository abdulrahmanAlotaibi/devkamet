import React, { useReducer, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import * as userAPI from "shared/api/userAPI";
import Input from "components/Input";
import {
  SIGNIN,
  UPDATE_RESULT,
  signinState,
  signinReducer,
  UPDATE_INPUTS,
} from "./reducer";
import Alert from "components/Alert";
import { UserContext } from "shared/context/User";

function Form() {
  const [state, dispatch] = useReducer(signinReducer, signinState);
  const {
    email,
    password,
    isLoading,
    isError,
    errors,
    message,
    status,
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

  const signin = async () => {
    dispatch({
      type: SIGNIN,
    });

    const response = await userAPI.signin(email, password);

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

  if (status === "success") {
    switch (userContext.state.user?.role) {
      case "student":
        return <Redirect to="/courses" />;
      case "admin":
        return <Redirect to="/admin/courses" />;
      default:
        break;
    }
  }

  return (
    <form className="w-full md:w-96">
      {message && <Alert message={message} isError={isError} />}

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

      <Button isDark fullWidth isLoading={isLoading} onClick={signin}>
        Login
      </Button>

      <div className="mt-4">
        <Link className="text-white font-medium  border-b-4 border-blue-500">
          Forget Your Password?
        </Link>

        <div className="mt-2">
          <span>New to Devkabet? &nbsp;</span>
          <Link
            className="text-white font-medium  border-b-4 border-blue-500"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Form;
