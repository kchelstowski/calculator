export const ADD_DIGIT = 'ADD_DIGIT'
export const SUBTRACT = 'SUBTRACT'
export const CLEAR_DIGITS = 'CLEAR_DIGITS'
export const CHOOSE_OPERATION = 'CHOOSE_OPERATION'
export const GIVE_RESULT = 'GIVE_RESULT'
export const DELETE_DIGIT = 'DELETE_DIGIT'

interface CalculatorAdd {
    type: typeof ADD_DIGIT,
    payload: string
}

interface CalculatorSubtract {
    type: typeof SUBTRACT,
    payload: string
}

interface CalculatorClear {
    type: typeof CLEAR_DIGITS
}

interface CalculatorOperation {
    type: typeof CHOOSE_OPERATION,
    payload: string
}

interface CalculatorGiveResult {
    type: typeof GIVE_RESULT
}

interface CalculatorDeleteDigit {
    type: typeof DELETE_DIGIT
}

export type CalculatorDispatchTypes = CalculatorAdd | CalculatorSubtract | CalculatorClear
    | CalculatorOperation | CalculatorGiveResult | CalculatorDeleteDigit
