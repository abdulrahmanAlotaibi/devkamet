export const UPDATE_RESULT = "UPDATE_RESULT";
export const SEARCH = "SEARCH";
export const SET_IS_CREATE_ANNOUNCEMENT__OPEN = "SET_IS_CREATE_ANNOUNCEMENT__OPEN";
export const UPDATE_INPUTS = "UPDATE_INPUT";
export const CREATE = "CREATE";

export const announcementsState = {
    announcements: [],
    isLoading: false,
    isError: false,
    isCreateAnnouncementOpen: false,
    title: "",
    content: "",
    status: "",

};



export const announcementsReducer = (state, action) => {
    switch (action.type) {
        case SEARCH:
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
                announcements: action.payload.announcements,

            };
        }
        case SET_IS_CREATE_ANNOUNCEMENT__OPEN:
            return {
                ...state,
                isCreateAnnouncementOpen: !state.isCreateAnnouncementOpen,
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
        case CREATE:
            return {
                ...state,
                isLoading: true,
                isCreateAnnouncementOpen: false
            };
        default:
            break;
    }
};
