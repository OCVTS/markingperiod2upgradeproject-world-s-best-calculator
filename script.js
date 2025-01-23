//These are the variables I used
let userInput = '';
let numbers = [];
let operators = [];

// This function enables the user to input numbers by taken the number and adding it to calDisplay
function calcAdd(num) {
    userInput += num;
    calcDisplay.innerHTML = userInput;
}

// The add function will add the first inputed number and the second one if the + button is clicked
function add(num1, num2) {
    return num1 + num2;
}

// The subtract function will subtract the first inputed number and the second one if the - button is clicked
function subtract(num1, num2) {
    return num1 - num2;
}

// The multiply function will multiply the first inputed number and the second one if the x button is clicked
function multiply(num1, num2) {
    return num1 * num2;
}

// The divide function will divide the first inputed number and the second one if the ÷ button is clicked
function divide(num1, num2) {
    return num1 / num2;
}

// The lessThan function will determine if the second number is less than the first one when the < button is clicked
function lessThan(num1, num2) {
    return num1 < num2;
}

// The greaterThan function will determine if the first number is greater than the second one when the > button is clicked
function greaterThan(num1, num2) {
    return num1 > num2;
}

// The appendSquareRoot function will give the sqaure root of the first inputed number
function appendSquareRoot() {
    return Math.sqrt(parseInt(userInput));
  
}

// The modulous function will show the remander of the first and second inputed number when divided
function modulous(num1, num2) {
    return num1 % num2;
}

// The del function will delete all inputs and reset everything back to before. Simply making the inputs equal nothing and the display equal 0
function del() {
    numbers = [];
    operators = [];
    userInput = '';
    calcDisplay.innerHTML = 0;
}

// The decimal funtion allows for a decimal to be imputed 
function decimal() {
    if (!userInput.includes('.')) {
        userInput += '.';
        calcDisplay.innerHTML = userInput;
    }
}
//
function exponent(base, exp) {
    return Math.pow(base, exp);
}
//
function fraction(num) {
    return 1 / num;
}

//
function round(num) {
    return Math.round(num);
}

//
function parentheses() {
}



// The calculate function stores every possible number and variable, which allows them to be activated. It will also allow the calculation inputed by the user to be done.
function calculate() {
    numbers.push(parseFloat(userInput)); // Push the last inputted number
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        switch (operators[i - 1]) {
            case '+':
                result = add(result, numbers[i]);
                break;
            case '-':
                result = subtract(result, numbers[i]);
                break;
            case 'x':
                result = multiply(result, numbers[i]);
                break;
            case '÷':
                result = divide(result, numbers[i]);
                break;
            case '<':
                result = lessThan(result, numbers[i]);
                break;
            case '>':
                result = greaterThan(result, numbers[i]);
                break;
            case '%':
                result = modulous(result, numbers[i]);
                break;
            case '^':
                result = exponent(result, numbers[i]);
                break;
            default:
                calcDisplay.innerHTML = 'ERROR';
                return;
        }
    }

    calcDisplay.innerHTML = result;
    numbers = [];
    operators = [];
    userInput = '';
}

// The operator function is what enables the operators to properly work
function operator(op) {
    numbers.push(parseFloat(userInput)); // Push the current number
    operators.push(op);                  // Push the current operator
    userInput = '';
    calcDisplay.innerHTML = op;
}