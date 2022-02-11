import React from 'react';
import DigitButton from "./DigitButton";
import {CalculatorReducer} from "../ducks/reducer";
import {connect} from "react-redux";
import {addDigit, chooseOperation, clearDigits, deleteDigit, giveResult} from "../ducks/actions";
import OperationButton from "./OperationButton";
import SubmitButton from "./SubmitButton";


interface CalculatorProps {
    currentOperand: string,
    prevOperand: string,
    operation: string,
    addDigit: (digit: string) => void,
    clearDigits: () => void,
    chooseOperation: (operation: string) => void,
    giveResult: () => void,
    deleteDigit: () => void
}

const Calculator = ({
                        currentOperand,
                        prevOperand,
                        operation,
                        addDigit,
                        clearDigits,
                        chooseOperation,
                        giveResult,
                        deleteDigit
                    }: CalculatorProps) => {

    return (
        <div>
            <div className="calculator-main-box">
                <div className="result">
                    <div className="prev">{prevOperand && <span>{prevOperand} {operation && operation}</span>}</div>
                    <div className="curr">{currentOperand &&
                    <span data-testid="currentOperand">{currentOperand}</span>}</div>
                </div>
                <button className="ac-button btn-general" onClick={() => clearDigits()}>AC</button>
                <button className="btn-general submit-delete-button" onClick={() => deleteDigit()}>DEL</button>

                <DigitButton digit='7' addDigit={addDigit}/>
                <DigitButton digit='8' addDigit={addDigit}/>
                <DigitButton digit='9' addDigit={addDigit}/>
                <OperationButton operation='/' chooseOperation={chooseOperation}/>


                <DigitButton digit='4' addDigit={addDigit}/>
                <DigitButton digit='5' addDigit={addDigit}/>
                <DigitButton digit='6' addDigit={addDigit}/>
                <OperationButton operation='*' chooseOperation={chooseOperation}/>


                <DigitButton digit='1' addDigit={addDigit}/>
                <DigitButton digit='2' addDigit={addDigit}/>
                <DigitButton digit='3' addDigit={addDigit}/>
                <OperationButton operation='-' chooseOperation={chooseOperation}/>

                <DigitButton digit='0' addDigit={addDigit}/>
                <DigitButton digit='.' addDigit={addDigit}/>
                <SubmitButton giveResult={giveResult}/>
                <OperationButton operation='+' chooseOperation={chooseOperation}/>

            </div>
        </div>
    );
};

const mapStateToProps = (state: ReturnType<typeof CalculatorReducer>) => {
    return {
        currentOperand: state.currentOperand,
        prevOperand: state.prevOperand,
        operation: state.operation
    }
}

const mapDispatchToProps = {
    addDigit,
    clearDigits,
    chooseOperation,
    giveResult,
    deleteDigit
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);