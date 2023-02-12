import { ADD_TO_FORM } from "../actionsTypes/actionTypes"

const initialState = {
    formData: {}
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FORM:
            return {
                ...state,
                formData: action.payload
            }
        default:
            return state
    }
}

export default formReducer