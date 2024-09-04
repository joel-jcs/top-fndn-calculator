const add = (operand1, operand2) => {
    return operand1 + operand2;
}

const subtract = (operand1, operand2) => {
    return operand1 - operand2;
}

const multiply = (operand1, operand2) => {
    return operand1 * operand2;
}

const divide = (operand1, operand2) => {
    return operand1 / operand2;
}

const operate = (operator, operand1, operand2) => {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
    }
};



console.log(operate("+",1,4));
console.log(operate("-",1,4));
console.log(operate("*",1,4));
console.log(operate("/",1,4));