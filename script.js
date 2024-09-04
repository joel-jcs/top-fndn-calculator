let operand1 = 1;
let operand2 = 2;
let operator = "";

const add = () => {
    operator = "+";
    return operand1 + operand2;
}

const subtract = () => {
    operator = "-";
    return operand1 - operand2;
}

const multiply = () => {
    operator = "*";
    return operand1 * operand2;
}

const divide = () => {
    operator = "/";
    return operand1 / operand2;
}

console.log(add());
console.log(subtract());
console.log(multiply());
console.log(divide())