import {cleanup, render, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import Calculator from "../ui/Calculator";
import {createStore} from "redux";
import {CalculatorReducer} from "../ducks/reducer";

afterEach(cleanup)


function renderWithRedux(component, store = createStore(CalculatorReducer)) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

it("1 + 1 test", () => {
    const {getByTestId, getByText} = renderWithRedux(<Calculator/>)
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("+"))
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("="))
    expect(getByTestId("currentOperand")).toHaveTextContent("2")
})

it("1 * 0 test", () => {
    const {getByTestId, getByText} = renderWithRedux(<Calculator/>)
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("*"))
    fireEvent.click(getByTestId("0"))
    fireEvent.click(getByTestId("="))
    expect(getByTestId("currentOperand")).toHaveTextContent("0")
})

it("312 / 3 test", () => {
    const {getByTestId, getByText} = renderWithRedux(<Calculator/>)
    fireEvent.click(getByTestId("3"))
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("2"))
    fireEvent.click(getByTestId("/"))
    fireEvent.click(getByTestId("3"))
    fireEvent.click(getByTestId("="))
    expect(getByTestId("currentOperand")).toHaveTextContent("104")
})

it("(444912 * 2)/4 test", () => {
    const {getByTestId} = renderWithRedux(<Calculator/>)
    fireEvent.click(getByTestId("4"))
    fireEvent.click(getByTestId("4"))
    fireEvent.click(getByTestId("4"))
    fireEvent.click(getByTestId("9"))
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("2"))
    fireEvent.click(getByTestId("*"))
    fireEvent.click(getByTestId("2"))
    fireEvent.click(getByTestId("/"))
    fireEvent.click(getByTestId("4"))
    fireEvent.click(getByTestId("="))
    expect(getByTestId("currentOperand")).toHaveTextContent("222456")
})

it("1/3 test", () => {
    const {getByTestId} = renderWithRedux(<Calculator/>)
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("/"))
    fireEvent.click(getByTestId("3"))
    fireEvent.click(getByTestId("="))
    expect(getByTestId("currentOperand")).toHaveTextContent(/^0.33/)
})

it("(((9*8)+(4-3))/2)-98777 (negative float) test", () => {
    const {getByTestId} = renderWithRedux(<Calculator/>)
    fireEvent.click(getByTestId("9"))
    fireEvent.click(getByTestId("*"))
    fireEvent.click(getByTestId("8"))
    fireEvent.click(getByTestId("+"))
    fireEvent.click(getByTestId("4"))
    fireEvent.click(getByTestId("-"))
    fireEvent.click(getByTestId("3"))
    fireEvent.click(getByTestId("/"))
    fireEvent.click(getByTestId("2"))
    fireEvent.click(getByTestId("-"))
    fireEvent.click(getByTestId("9"))
    fireEvent.click(getByTestId("8"))
    fireEvent.click(getByTestId("7"))
    fireEvent.click(getByTestId("7"))
    fireEvent.click(getByTestId("7"))
    fireEvent.click(getByTestId("="))
    expect(getByTestId("currentOperand")).toHaveTextContent("-98740.5")
})

it("adding some floats (9.5+12.43+4.12+10.01", () => {
    const {getByTestId} = renderWithRedux(<Calculator/>)
    fireEvent.click(getByTestId("9"))
    fireEvent.click(getByTestId("."))
    fireEvent.click(getByTestId("5"))
    fireEvent.click(getByTestId("+"))
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("2"))
    fireEvent.click(getByTestId("."))
    fireEvent.click(getByTestId("4"))
    fireEvent.click(getByTestId("3"))
    fireEvent.click(getByTestId("+"))
    fireEvent.click(getByTestId("4"))
    fireEvent.click(getByTestId("."))
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("2"))
    fireEvent.click(getByTestId("+"))
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("0"))
    fireEvent.click(getByTestId("."))
    fireEvent.click(getByTestId("0"))
    fireEvent.click(getByTestId("1"))
    fireEvent.click(getByTestId("="))
    expect(getByTestId("currentOperand")).toHaveTextContent("36.06")
})