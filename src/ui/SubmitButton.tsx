import React from 'react';

interface SubmitButtonProps {
    giveResult: () => void
}

const SubmitButton = ({giveResult}: SubmitButtonProps) => {
    return (
        <button onClick={giveResult} className="btn-general submit-delete-button" data-testid="=">=</button>
    );
};

export default SubmitButton;