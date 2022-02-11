import React from 'react';

interface OperationButtonProps {
    operation: string,
    chooseOperation: (operation: string) => void
}

const OperationButton = ({operation, chooseOperation}: OperationButtonProps) => {
    return (
        <button onClick={() => chooseOperation(operation)} className="operation-button btn-general"
                data-testid={operation}>{operation}</button>
    );
};

export default OperationButton;