export const UPDATE_RESULT = "UPDATE_RESULT";
export const SEARCH = "SEARCH";
export const SET_IS_CREATE_COURSE_OPEN = "SET_IS_CREATE_COURSE_OPEN";
export const UPDATE_CHECKED_ITEMS = "UPDATE_CHECKED_ITEMS";

export const coursesListState = {
  courses: [],
  isLoading: false,
  isError: false,
  isCreateCourseOpen: false,
  checkedItems: {},
};

export const coursesListStateReducer = (state, action) => {
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
        courses: action.payload.courses,
      };
    }
    case SET_IS_CREATE_COURSE_OPEN:
      return {
        ...state,
        isCreateCourseOpen: !state.isCreateCourseOpen,
      };
    case UPDATE_CHECKED_ITEMS: {
      let newCheckedItems = state.checkedItems;
      if (newCheckedItems[action.payload.checkedItem])
        delete newCheckedItems[action.payload.checkedItem];
      else
        newCheckedItems = { ...newCheckedItems, }
      return {
        ...state,
        checkedItems: { newCheckedItems },
      };
    }

    default:
      break;
  }
};
