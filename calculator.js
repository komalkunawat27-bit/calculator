let answer = document.querySelector(".screen");

let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let division = document.querySelector(".division");

let ac = document.querySelector(".ac");
let equals = document.querySelector(".equals");

let numbers = document.querySelectorAll(".num");

let firstNumber = "";
let secondNumber = "";
let operator = "";


// NUMBER BUTTONS
numbers.forEach((button) => {

    button.addEventListener("click", () => {

        if (operator === "") {
            firstNumber += button.textContent;
        } 
        else {
            secondNumber += button.textContent;
        }

        answer.innerHTML = firstNumber + " " + operator + " " + secondNumber;

    });

});


// OPERATORS
add.addEventListener("click", () => {

    if (firstNumber !== "" && secondNumber !== "") {
        calculate();
    }

    operator = "+";

    answer.innerHTML = firstNumber + " " + operator;
});


subtract.addEventListener("click", () => {

    if (firstNumber !== "" && secondNumber !== "") {
        calculate();
    }

    operator = "-";

    answer.innerHTML = firstNumber + " " + operator;
});


multiply.addEventListener("click", () => {

    if (firstNumber !== "" && secondNumber !== "") {
        calculate();
    }

    operator = "*";

    answer.innerHTML = firstNumber + " " + operator;
});


division.addEventListener("click", () => {

    if (firstNumber !== "" && secondNumber !== "") {
        calculate();
    }

    operator = "/";

    answer.innerHTML = firstNumber + " " + operator;
});


// CALCULATE FUNCTION
function calculate() {

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }

    if (operator === "-") {
        result = num1 - num2;
    }

    if (operator === "*") {
        result = num1 * num2;
    }

    if (operator === "/") {
        result = num1 / num2;
    }

    firstNumber = result;
    secondNumber = "";

    answer.innerHTML = result;
}


// EQUALS
equals.addEventListener("click", () => {

    if (firstNumber !== "" && secondNumber !== "") {
        calculate();
        operator = "";
    }

});


// AC
ac.addEventListener("click", () => {

    firstNumber = "";
    secondNumber = "";
    operator = "";

    answer.innerHTML = "";

});