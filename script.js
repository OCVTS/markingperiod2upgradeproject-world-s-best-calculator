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
function add(numbers) {
    return numbers + numbers;
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

    num2 = parseInt(userInput);

    switch(userOperator) { //This switch statement is what allows the buttons to properly work. Without this they won't work when pressed
        case '+':
            calcDisplay.innerHTML = add(num1, num2, num3);
            break;
        case '-':
            calcDisplay.innerHTML = subtract(num1, num2);
            break;
        case 'x':
            calcDisplay.innerHTML = multiply(num1, num2);
            break;
        case '÷':
            calcDisplay.innerHTML = divide(num1, num2);
            break;
        case '<':
            calcDisplay.innerHTML = lessThan(num1,num2);
            break;
        case '>':
            calcDisplay.innerHTML = greaterThan(num1,num2);
            break;
        case '√':
            calcDisplay.innerHTML = appendSquareRoot(num1,num2);
            break;
        case '%':
            calcDisplay.innerHTML = modulous(num1, num2);
            break;
        case '.':
            calcDisplay.innerHTML = decimal(num1, num2);
            break;
         case '^':
            calcDisplay.innerHTML = exponent(num1, num2);
            break;
        case '/':
            calcDisplay.innerHTML = fraction(num1, num2);
            break;
         case '≈':
            calcDisplay.innerHTML = round(num1, num2);
            break;
         case '(':
            calcDisplay.innerHTML = parentheses(num1, num2);
            break;
        case ')':
            calcDisplay.innerHTML = parentheses(num1, num2);
            break;
        case 'del':
             calcDisplay.innerHTML = del();
            break;
        default:
            calcDisplay.innerHTML = 'ERROR';
            break;
    }
}

// The operator function is what enables the operators to properly work. By having them allowed to be pressed by the user
function operator (op) {
    userOperator = op;
    num1 = parseInt(userInput);
    userInput= '';
    calcDisplay.innerHTML = userOperator;
}
