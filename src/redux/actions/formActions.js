import { ADD_TO_FORM } from "../actionsTypes/actionTypes"

export const addToForm = (data) => {
    return {
        type: ADD_TO_FORM,
        payload: data
    }
}