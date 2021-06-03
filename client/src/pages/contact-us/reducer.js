export const UPDATE_RESULT = "UPDATE_RESULT";
export const SEND_REQUEST = "SEND_REQUEST";
export const SET_IS_CREATE_ANNOUNCEMENT__OPEN = "SET_IS_CREATE_ANNOUNCEMENT__OPEN";
export const UPDATE_INPUTS = "UPDATE_INPUT";
export const CREATE = "CREATE";

export const contactState = {
    name: "",
    email: "",
    content: "",
    isLoading: false,
    isError: false,
    status: "",
};



export const coontactReducer = (state, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_RESULT: {

            return {
                ...state,
                isLoading: false,
                status: action.payload.status,
                isError: action.payload.status === "failed",
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
