const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let shouldClearDisplay = false;

// Mapeo de teclas a botones
const keyMap = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    "Enter": "=",
    "Backspace": "C",
    "c": "C",
    "C": "C",
};

// Función para manejar clics en los botones
function handleButtonClick(buttonText) {
    if (buttonText.match(/[0-9]/)) {
        if (shouldClearDisplay || display.textContent === "0") {
            display.textContent = ""; // Limpia el display si es el primer número o después de un operador
            shouldClearDisplay = false;
        }
        display.textContent += buttonText;
    } else if (buttonText === "C") {
        display.textContent = "0";
        currentInput = "";
        currentOperator = "";
    } else if (buttonText === "=") {
        if (currentOperator && currentInput) {
            const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(display.textContent));
            display.textContent = result;
            currentInput = result.toString();
            currentOperator = "";
            shouldClearDisplay = true;
        }
    } else if (buttonText.match(/[\+\-\*\/]/)) {
        if (currentOperator && currentInput) {
            const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(display.textContent));
            display.textContent = result;
            currentInput = result.toString();
        } else {
            currentInput = display.textContent;
        }
        currentOperator = buttonText;
        shouldClearDisplay = true;
    }
}

// Evento para clics en los botones
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        handleButtonClick(buttonText);
    });
});

// Evento para teclas del teclado
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (keyMap[key]) {
        handleButtonClick(keyMap[key]);
    }
});

// Función para realizar cálculos
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error";
            }
        default:
            return num2;
    }
}