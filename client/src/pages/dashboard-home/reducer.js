export const UPDATE_RESULT = "UPDATE_RESULT";
export const SEND_REQUEST = "SEND_REQUEST";
export const UPDATE_INPUTS = "UPDATE_INPUT";


export const dashboardHomeState = {
    courses: [],
    lastActions: [],
    isLoading: false,
    message: "",
    isError: false,
    errors: []
};

export const dashboardHomeReducer = (state, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: ""
            };
        case UPDATE_RESULT: {
            return {
                ...state,
                courses: action.payload.courses,
                isLoading: false,
                status: action.payload.status,
                isError: action.payload.status === "failed",
                errors: action.payload.errors || [],
                message: action.payload.message,
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
