export const UPDATE_INPUTS = "UPDATE_INPUT";
export const UPDATE_IS_LOADING = "UPDATE_IS_LOADING";
export const UPDATE_IS_PREVIEW = "UPDATE_IS_PREVIEW";
export const UPDATE_RESULT = "UPDATE_RESULT";
export const SAVE_CHANGES = "SAVE_CHANGES";
export const INIT = "INIT"
export const TOGGLE = "TOGGLE"
export const SEND_REQUEST = "SEND_REQUEST";

export const articleState = {
  title: "",
  content: "",
  isEdit: true,
  isRemove: false,
  isLoading: false,
  isError: false,
  status: "",
};

export const articleReducer = (state, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_RESULT:
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        isCreated: action.payload.status == "success",
        isError: action.payload.status === "failed",
        message: action.payload.message
      };
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
    case UPDATE_IS_PREVIEW:
      return {
        ...state,
        isPreview: !state.isPreview,
      };
    case INIT:
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content,
        isEdit: action.payload.isEdit,
      }
    case TOGGLE:
      return {
        ...state,
        [action.payload.toggledState]: !state[action.payload.toggledState],
        type: state.isTest ? "test" : "exercise"
      }
    default:
      break;
  }
};
