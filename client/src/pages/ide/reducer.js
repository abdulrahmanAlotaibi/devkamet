import { uuid } from "uuidv4";

export const UPDATE_INPUTS = "UPDATE_INPUTS"
export const SEND_REQUEST = "SEND_REQUEST";
export const UPDATE_RESULT = "UPDATE_RESULT"
export const SAVE_CHANGES = "SAVE_CHANGES"
export const SWITCH_VIEW = "SWITCH_VIEW"
export const TOGGLE = "TOGGLE"
export const UPDATE_LESSONS = "UPDATE_LESSONS"
export const UPDATE_ITEM = "UPDATE_ITEM"
export const CREATE_HINT = "CREATE_HINT"
export const EDIT_HINT = "EDIT_HINT"
export const REMOVE_HINT = "REMOVE_HINT"
export const RUN_CODE = "RUN_CODE"
export const CREATE_TEST_CASE = "CREATE_TEST_CASE"
export const REMOVE_TEST_CASE = "REMOVE_TEST_CASE"
export const EDIT_TEST_CASE = "EDIT_TEST_CASE"
export const INIT = "INIT"
export const TOGGLE_IS_EXERCISE = "TOGGLE_IS_EXERCISE"
export const ALERT = "ALERT"

export const IDEState = {
    problem: {
        title: "",
        content: "",
        hints: [],
        ourSolution: "",
    },
    course: "",
    isTest: false,
    type: "",
    message: "",
    solution: {
        yourSolution: "",
        starterCode: "",
    },
    test: {
        raw: "",
        testCases: []
    },
    output: {
        raw: [],
        costume: []
    },
    isEdit: false,
    isSubmit: false,
    isRemove: false,
    isCreated: false,
    isError: false,
    status: "",
    isLoading: false,
    currentViews: {
        problem: "problem",
        solution: "yourSolution",
        test: "costume",
        output: "costume"
    },
    language: "go",
    settings: {
        fontSize: {
            label: "Font Size",
            itemType: "fontSize",
            currentItemLabel: "",
            currentItemValue: "",
            items: [{
                label: "16 px",
                value: "16px"
            },
            {
                label: "20 px",
                value: "20px"
            }
            ]
        }
    }
}

export const IDEReducer = (state, action) => {
    switch (action.type) {
        case SAVE_CHANGES:
            return {
                ...state,
                isLoading: true,
                message: "",
                isError: false,
                status: ""
            }
        case RUN_CODE: {
            return {
                ...state,
                output: {
                    raw: [...state.output.raw, action.payload.raw],
                    costume: action.payload.costume
                },
                status: action.payload.status,
                isLoading: false
            }
        }
        case INIT: {
            if (!action.payload.isCreated)
                return {
                    ...state,
                    type: action.payload.type,
                    isTest: action.payload.type === "Test",
                    isCreated: false
                }

            return {
                ...state,
                problem: {
                    title: action.payload.title,
                    content: action.payload.content,
                    hints: action.payload.hints || [],
                    ourSolution: action.payload.ourSolution || "",
                },
                solution: {
                    starterCode: action.payload.starterCode || "",
                    yourSolution: action.payload.yourSolution || action.payload.starterCode //TestReport
                },
                test: {
                    raw: action.payload.rawTest || "",
                    testCases: action.payload.testCases || [],
                },
                course: action.payload.course || "",
                isTest: action.payload.type === "Test",
                type: action.payload.type,
                isCreated: action.payload.isCreated

            }
        }
        case CREATE_HINT:
            return {
                ...state,
                problem: {
                    ...state.problem,
                    hints: [...state.problem.hints, {
                        id: uuid(),
                        title: action.payload.hintTitle,
                        details: action.payload.hintDetail
                    }]
                }
            }
        case REMOVE_HINT: {
            const updatedHints = state.problem.hints?.filter(hint => hint.id !== action.payload.id)
            return {
                ...state,
                problem: {
                    ...state.problem,
                    hints: updatedHints
                }
            }
        }
        case EDIT_HINT: {
            const updatedHints = state.problem.hints?.map(hint => {
                if (hint.id === action.payload.id) {
                    return {
                        ...hint,
                        title: action.payload.title,
                        details: action.payload.details
                    }
                }
                return hint;
            })
            return {
                ...state,
                problem: {
                    ...state.problem,
                    hints: updatedHints
                }
            }
        }
        case CREATE_TEST_CASE:
            return {
                ...state,
                test: {
                    ...state.test,
                    testCases: [...state.test.testCases, {
                        id: uuid(),
                        content: action.payload.content
                    }]
                }
            }
        case REMOVE_TEST_CASE: {
            const updatedTestCases = state.test.testCases?.filter(testCase => testCase.id !== action.payload.id)
            return {
                ...state,
                test: {
                    ...state.test,
                    testCases: updatedTestCases
                }
            }
        }
        case EDIT_TEST_CASE: {
            const updatedTestCases = state.test.testCases?.map(testCase => {
                if (testCase.id === action.payload.id) {
                    return {
                        ...testCase,
                        content: action.payload.content
                    }
                }
                return testCase;
            })
            return {
                ...state,
                test: {
                    ...state.test,
                    hints: updatedTestCases
                }
            }
        }
        case UPDATE_LESSONS:
            return {
                ...state,
                lessons: action.payload.lessons,
                status: action.payload.status,
                isLoading: false,
                isError: action.payload.status === "failed",
                isCreated: action.payload.status === "success"
            }
        case UPDATE_RESULT:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                isLoading: false,
                isError: action.payload.status === "failed",
            }
        case SEND_REQUEST: {
            return {
                ...state,
                isLoading: true,
                message: ""
            }
        }
        case UPDATE_ITEM: {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    [action.payload.itemType]: {
                        ...[action.payload.itemType],
                        currentItemLabel: action.payload.currentItemLabel,
                        currentItemValue: action.payload.currentItemValue
                    }
                }
            }
        }
        case SWITCH_VIEW:
            return {
                ...state,
                currentViews: {
                    ...state.currentViews,
                    [action.payload.viewType]: action.payload.newView,
                }
            }
        case TOGGLE:
            return {
                ...state,
                [action.payload.toggledState]: !state[action.payload.toggledState],
                type: state.isTest ? "Test" : "Exercise"
            }
        case TOGGLE_IS_EXERCISE:
            return {
                ...state,
                isTest: !state.isTest,
                type: !state.isTest ? "Test" : "Exercise"
            }
        case UPDATE_INPUTS: {

            let updatedInputs = {};

            for (const input of action.payload.inputs) {
                updatedInputs[input.key] = input.value
            }
            return {
                ...state,
                [action.payload.type]: { ...state[action.payload.type], ...updatedInputs }
            }
        }
        case ALERT: {
            return {
                ...state,
                message: action.payload.message,
                isError: action.payload.status === "failed",
                status: action.payload.status
            }
        }
        default:
            break;
    }
}