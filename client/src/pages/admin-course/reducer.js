export const UPDATE_INPUT = "UPDATE_INPUT"
export const SEND_REQUEST = "SEND_REQUEST";
export const UPDATE_RESULT = "UPDATE_RESULT"
export const SAVE_CHANGES = "SAVE_CHANGES"
export const SWITCH_VIEW = "SWITCH_VIEW"
export const TOGGLE_CREATE_LESSON_MODAL = "TOGGLE_CREATE_LESSON_MODAL"
export const UPDATE_LESSONS = "UPDATE_LESSONS"
export const generalCourseState = {
    title: "",
    description: "",
    isLoading: false,
    isError: false,
    status: "",
    isCreateLessonsOpen: false,
    currentView: "general",
    lessons: undefined
}

export const generalCourseReducer = (state, action) => {
    switch (action.type) {
        case SAVE_CHANGES:
            return {
                ...state,
                isLoading: true,
            }
        case UPDATE_LESSONS:
            return {
                ...state,
                lessons: action.payload.lessons,
                status: action.payload.status,
                isLoading: false,
                isError: action.payload.status === "failed",
            }
        case UPDATE_RESULT:
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                status: action.payload.status,
                isLoading: false,
                isError: action.payload.status === "failed",
            }
        case SEND_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case SWITCH_VIEW:
            return {
                ...state,
                currentView: action.payload.newView,
            }
        case TOGGLE_CREATE_LESSON_MODAL:
            return {
                ...state,
                isCreateLessonsOpen: !state.isCreateLessonsOpen,
            }
        case UPDATE_INPUT: {

            let updatedInputs = {};

            for (const input of action.payload.inputs) {
                updatedInputs[input.key] = input.value
            }
            return {
                ...state,
                ...updatedInputs
            }
        }
        default:
            break;
    }
}