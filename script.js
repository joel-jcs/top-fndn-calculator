const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
const actionBtns = document.querySelectorAll(".action");
const toggleSignBtn = document.getElementById("toggle-sign");
const decimalBtn = document.getElementById("decimal");

// Arithmetic operations
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

// Function to filter which arithmetic operation function to use
const operate = (operator, operand1, operand2) => {
    switch (operator) {
        case "+":
            return Number((add(operand1, operand2)).toFixed(10));
        case "-":
            return Number((subtract(operand1, operand2)).toFixed(10));
        case "*":
            return Number((multiply(operand1, operand2)).toFixed(10));
        case "/":
            if (operand2 === 0) {
                return display.textContent = "3rr0r D1V-0"; // Display error message for division by zero
            } else {
                return Number((divide(operand1, operand2)).toFixed(10));
            }
    }
};

let operand1 = 0;
let operand2 = 0;
let operation = "";
let result = 0;

const clearValues = () => {
    operand1 = 0;
    operand2 = 0;
    operation = "";
}

// Function to show the result of the calculation when pressing equalsBtn (or operator if pressed before)
const showResult = () => {
    operand2 = parseFloat(display.textContent);
    result = operate(operation, operand1, operand2);
    operand1 = result;
    display.textContent = operand1;
    isOperatorActive = true;
}

let isOperatorActive = false;
let isDecimalActive = false;

numberBtns.forEach(number => {
    const MAX_DIGITS = 14;
    number.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }

        if (display.textContent.length < MAX_DIGITS) {
            if (isOperatorActive) {
                if (isDecimalActive) {
                    display.textContent += number.value;    
                    isOperatorActive = false;
                    isDecimalActive = false;
                } else {
                    display.textContent = number.value;
                    isOperatorActive = false;
                }
            } else {
                display.textContent += number.value;
            }
        }
    });
});

// Event listeners for operator buttons (+,-,*,/)
operatorBtns.forEach(operator => {
    operator.addEventListener("click", () => {
        if (!operation) {
            operand1 = parseFloat(display.textContent);
            operation = operator.value;
            isOperatorActive = true;
        } else {
            showResult();
            operation = operator.value;
        }
    });
});

equalsBtn.addEventListener("click", () => {
    if (!operation) {
        display.textContent = "0";
    } else {
        showResult();
        clearValues();
    }
});

// Event listeners for action buttons (clear and backspace)
actionBtns.forEach(action => {
    action.addEventListener("click", () => {
        if (action.id === "clear") {
            display.textContent = "0";
            clearValues();
            result = 0;
        } 

        if (display.textContent.length > 1) {
            let displayArr = display.textContent.split("");
            displayArr.pop();
            display.textContent = displayArr.join("");
        } else {
            display.textContent = "0";
        }
    });
});

toggleSignBtn.addEventListener("click", () => {
    let displayArr = display.textContent.split("");

    if (displayArr[0] === "-") {
        displayArr.shift();
        display.textContent = displayArr.join("");
    } else {
        displayArr.unshift("-");
        display.textContent = displayArr.join("");
    }
});

decimalBtn.addEventListener("click", () => {
    const decimal = decimalBtn.value;
    let displayArr = display.textContent.split("");

    if (isOperatorActive) {
        display.textContent = "0.";
        isDecimalActive = true;
    } else {
        if (!displayArr.includes(decimal)) {
            displayArr.push(decimal);
            display.textContent = displayArr.join("");
        }
    }
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Check if the key pressed is a number key
    if (!isNaN(key) && key !== " ") {
        const numberButton = document.querySelector(`.number[value="${key}"]`);
        if (numberButton) {
            numberButton.click();
        }
    }

    // Check if the key pressed is an operator key
    if (["+", "-", "*", "/"].includes(key)) {
        const operatorButton = document.querySelector(`.operator[value="${key}"]`);
        if (operatorButton) {
            operatorButton.click();
        }
    }

    if (key === "Enter" || key === "=") {
        equalsBtn.click();
    }

    if (key === ".") {
        decimalBtn.click();
    }

    if (key === "Escape") {
        clearBtn.click();
    }

    if (key === "Backspace") {
        backspaceBtn.click();
    }
});