import {ADD_DIGIT, CHOOSE_OPERATION, CLEAR_DIGITS, DELETE_DIGIT, GIVE_RESULT} from "./types";

export const addDigit = (digit: string) => ({
    type: ADD_DIGIT,
    payload: digit
})
export const clearDigits = () => ({
    type: CLEAR_DIGITS
})
export const chooseOperation = (operation: string) => ({
    type: CHOOSE_OPERATION,
    payload: operation
})
export const giveResult = () => ({
    type: GIVE_RESULT
})
export const deleteDigit = () => ({
    type: DELETE_DIGIT
})