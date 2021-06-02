export const UPDATE_RESULT = "UPDATE_RESULT";
export const SIGNUP = "SIGNUP";
export const UPDATE_INPUTS = "UPDATE_INPUT";


export const signupState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
    isLoading: false,
    message: "",
    isError: false,
    errors: []
};

export const signupReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                isLoading: true,
                message: ""
            };
        case UPDATE_RESULT: {
            return {
                ...state,
                isLoading: false,
                status: action.payload.status,
                isError: action.payload.status === "failed",
                errors: action.payload.errors || [],
                message: action.payload.message,
                redirect: action.payload.status === "success"

            };
        }
        case UPDATE_INPUTS: {
            let updatedInputs = {};

            for (const input of action.payload.inputs) {
                updatedInputs[input.key] = input.value;
            }
            return {
                ...state,
                ...updatedInputs,
            };
        }
        default:
            break;
    }
};
