import React from 'react';

interface DigitButtonProps {
    digit: string,
    addDigit: (digit: string) => void
}

const DigitButton = ({digit, addDigit}: DigitButtonProps) => {
    return (
        <button onClick={() => addDigit(digit)} className="digit-button btn-general"
                data-testid={digit}>{digit}</button>
    );
};

export default DigitButton;