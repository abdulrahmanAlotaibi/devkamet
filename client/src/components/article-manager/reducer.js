export const UPDATE_INPUTS = "UPDATE_INPUT";
export const UPDATE_IS_LOADING = "UPDATE_IS_LOADING";
export const UPDATE_IS_PREVIEW = "UPDATE_IS_PREVIEW";
export const UPDATE_RESULT = "UPDATE_RESULT";
export const SAVE_CHANGES = "SAVE_CHANGES";

export const articleState = {
  title: "",
  content: "",
  isPreview: false,
  isLoading: false,
  isError: false,
  status: "",
};

export const articleReducer = (state, action) => {
  switch (action.type) {
    case SAVE_CHANGES:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_RESULT:
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        isError: action.payload.status === "failed",
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
    default:
      break;
  }
};
