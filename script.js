const display = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
const actionBtns = document.querySelectorAll(".action");

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
            if (operand2 !== "0") {
                return display.textContent = "3rr0r D1V-0";
            } else {
                return divide(operand1, operand2);                
            }
    }
};

let operand1 = 0;
let operand2 = 0;
let operation = "";
const clearValues = () => {
    operand1 = 0;
    operand2 = 0;
    operation = "";
}

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
        operand1 = parseFloat(display.textContent);
        operation = operator.value;
        display.textContent = "0";
        
        //to-do: need to handle cases where user clicks the operator more than once
    });
});

equalsBtn.addEventListener("click", () => {
    if (!operation) {
        display.textContent = "0";
    } else {
        operand2 = parseFloat(display.textContent);
        display.textContent = operate(operation, operand1, operand2);
        clearValues();
    }
});

actionBtns.forEach(action => {
    action.addEventListener("click", () => {
        if (action.id === "clear") {
            display.textContent = "0";
            clearValues();
        } else {
            if (display.textContent.length > 1) {
                let displayArr = display.textContent.split("");
                displayArr.pop();
                display.textContent = displayArr.join("");
            } else {
                display.textContent = "0";
            }
        }
    });
});