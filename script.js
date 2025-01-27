// These are the variables I used
let userInput = ''; // Stores user input as a string to handle numbers and operations
let numbers = []; // Array to store numbers entered by the user
let operators = []; // Array to store operators entered by the user

// This function enables the user to input numbers by taking the number and adding it to calcDisplay
function calcAdd(num) {
    userInput += num;
    calcDisplay.innerHTML = userInput;
}

// The add function will add the first inputted number and the second one if the + button is clicked
function add(num1, num2) {
    return num1 + num2;
}

// The subtract function will subtract the first inputted number and the second one if the - button is clicked
function subtract(num1, num2) {
    return num1 - num2;
}

// The multiply function will multiply the first inputted number and the second one if the x button is clicked
function multiply(num1, num2) {
    return num1 * num2;
}

// The divide function will divide the first inputted number and the second one if the ÷ button is clicked
function divide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0; // Prevent division by zero
    }
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

// The appendSquareRoot function will give the square root of the first inputted number
function appendSquareRoot() {
    return Math.sqrt(parseInt(userInput));
}

// The modulous function will show the remainder of the first and second inputted number when divided
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

// The decimal function allows for a decimal to be inputted
function decimal() {
    if (!userInput.includes('.')) {
        userInput += '.';
        calcDisplay.innerHTML = userInput;
    }
}

// The exponent function calculates the result of a base raised to an exponent
function exponent(base, exp) {
    return Math.pow(base, exp);
}

// The fraction function divides two numbers
function fraction(num1, num2) {
    return num1 / num2;
}

// The round function rounds a number to the nearest integer
function round(num) {
    return Math.round(num);
}

// The random function generates a random integer between 0 and 99
function random() {
    return Math.floor(Math.random() * 100);
}

// The pie function returns the mathematical constant π
function pie() {
    return Math.PI;
}

// The calculate function processes all numbers and operators to compute the final result
function calculate() {
    numbers.push(parseFloat(userInput)); // Push the last inputted number
    let result = numbers[0]; // Initialize result with the first number

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
            case '≈':
                result = round(result);
                break;
            case '/':
                result = fraction(result, numbers[i]);
                break;
            case 'R':
                result = random();
                break;
            case 'π':
                result = pie();
                break;
            default:
                calcDisplay.innerHTML = 'ERROR';
                return;
        }
    }

    calcDisplay.innerHTML = result; // Display the final result
    numbers = []; // Reset the numbers array
    operators = []; // Reset the operators array
    userInput = ''; // Reset user input
}

// The operator function processes operators and prepares for the next input
function operator(op) {
    numbers.push(parseFloat(userInput)); // Push the current number
    operators.push(op); // Push the current operator
    userInput = ''; // Reset user input for the next number
    calcDisplay.innerHTML = op; // Display the operator
}
