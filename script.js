const display = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
const actionBtns = document.querySelectorAll(".action");
const decimalBtn =document.getElementById("decimal")

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
            return Number((add(operand1, operand2)).toFixed(10));
        case "-":
            return Number((subtract(operand1, operand2)).toFixed(10));
        case "*":
            return Number((multiply(operand1, operand2)).toFixed(10));
        case "/":
            if (operand2 === 0) {
                return display.textContent = "3rr0r D1V-0";
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

const showResult = () => {
    operand2 = parseFloat(display.textContent);
    result = operate(operation, operand1, operand2);
    display.textContent = result;
}

let replaceDisplay = false;
// add numbers to display
numberBtns.forEach(number => {
    const MAX_DIGITS = 14;
    number.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }

        if (display.textContent.length < MAX_DIGITS) {
            if (replaceDisplay) {
                display.textContent = number.value;
                replaceDisplay = false;
            } else {
                display.textContent += number.value;
            }
        }
    });
});

operatorBtns.forEach(operator => {
    operator.addEventListener("click", () => {
        if (!operation) {
            operand1 = parseFloat(display.textContent);
            operation = operator.value;
            replaceDisplay = true;
        } else {
            showResult();
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

decimalBtn.addEventListener("click", () => {
    const decimal = decimalBtn.value;
    //if displayArr doesnt contain decimal already, add decimal.value
        let displayArr = display.textContent.split("");
        if (!displayArr.includes(decimal)) {
            displayArr.push(decimal);
            display.textContent = displayArr.join("");
        }
    //else don't add it
});