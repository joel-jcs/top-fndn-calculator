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

const display = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
const actionBtns = document.querySelectorAll(".action");

// add numbers to display
numberBtns.forEach(number => {
    const MAX_DIGITS = 14;
    number.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        if (display.textContent.length < MAX_DIGITS) {
            display.textContent += number.value;
        }
    });
});

operatorBtns.forEach(operator => {
    operator.addEventListener("click", () => {
        
    });
});

actionBtns.forEach(action => {
    action.addEventListener("click", () => {
        if (action.id === "clear") {
            display.textContent = "0";
        }
    });
});