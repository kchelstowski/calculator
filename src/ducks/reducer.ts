import {ADD_DIGIT, CalculatorDispatchTypes, CHOOSE_OPERATION, CLEAR_DIGITS, DELETE_DIGIT, GIVE_RESULT} from "./types";

interface CalculatorState {
    currentOperand: string,
    prevOperand: string,
    operation: string,
    refresh: boolean
}

const initState: CalculatorState = {
    currentOperand: '',
    prevOperand: '',
    operation: '',
    refresh: false
}

const calculate = (prev: string, curr: string, operation: string) => {
    const prevValue = parseFloat(prev)
    const currValue = parseFloat(curr)
    const determineResult = (prev: number, curr: number, operation: string) => {
        switch (operation) {
            case "+":
                return prev + curr
            case "-":
                return prev - curr
            case "*":
                return prev * curr
            case "/":
                return prev / curr
            default:
                return ""
        }
    }
    return determineResult(prevValue, currValue, operation).toString()
}

export const CalculatorReducer = (state = initState , action: CalculatorDispatchTypes) => {
    switch (action.type) {
        case ADD_DIGIT:
            if (state.refresh) {
                return {
                    ...state,
                    currentOperand: action.payload,
                    refresh: false
                }
            }
            if (action.payload === '0' && state.currentOperand === '0') return state
            if (action.payload === '.' && state.currentOperand.includes('.')) return state
            if (action.payload === '.' && !state.currentOperand) return {...state, currentOperand: `0${action.payload}`}
            return {
                ...state,
                currentOperand: `${state.currentOperand}${action.payload}`
            }
        case CLEAR_DIGITS:
            return initState
        case CHOOSE_OPERATION:
            if (!state.currentOperand && !state.prevOperand) return state
            if (!state.prevOperand) {
                return {
                    ...state,
                    prevOperand: state.currentOperand,
                    currentOperand: "",
                    operation: action.payload
                }
            }
            if (!state.currentOperand) {
                return state.operation === action.payload ? state : {...state, operation: action.payload}
            }
            return {
                ...state,
                prevOperand: calculate(state.prevOperand,state.currentOperand,state.operation),
                currentOperand: "",
                operation: action.payload
            }
        case GIVE_RESULT:
            if (state.currentOperand && state.prevOperand && state.operation) {
                return {
                    ...state,
                    prevOperand: "",
                    operation: "",
                    currentOperand: calculate(state.prevOperand, state.currentOperand, state.operation),
                    refresh: true
                }
            }
            return state
        case DELETE_DIGIT:
            if (state.refresh) return {...state, refresh: false}
            if (state.currentOperand.length === 1) return {...state, currentOperand: ""}
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }
        default:
            return state
    }
}