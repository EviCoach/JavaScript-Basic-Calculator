var numsArray = [];

var btn0 = document.getElementById('zer');
var btn1 = document.getElementById('one');
var btn2 = document.getElementById('two');
var btn3 = document.getElementById('thre');
var btn4 = document.getElementById('fou');
var btn5 = document.getElementById('fiv');
var btn6 = document.getElementById('six');
var btn7 = document.getElementById('sev');
var btn8 = document.getElementById('eig');
var btn9 = document.getElementById('nin');
var btnAdd = document.getElementById('add');
var btnSub = document.getElementById('subtract');
var btnMult = document.getElementById('multiply');
var btnDiv = document.getElementById('divide');
var btnEquals = document.getElementById('equals');
var btnClear = document.getElementById('clear');
var screen = document.getElementById('calculator-screen');

var btnArray = [
    btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,
    btnAdd, btnSub, btnMult, btnDiv, btnEquals
];
var btnValue;
var screenResult = "";
var arrayOfStringToNums = [];
var sumArr = [], divideArr = [], subtractArr = [], multiplyArr = [];
var finalResult = 0;
var resultToDisplay = 0;
var displayResult = 0;

function calculate() {
    divide(arr);
    multiply(arr);
    add(arr);
    subtract(arr);

    return result;
}

btnClear.addEventListener('click', () => {
    window.location.reload();
});

btnEquals.addEventListener('click', calculate, false);



for (var i = 0; i < btnArray.length; i++) {

    btnArray[i].addEventListener('click', (event) => {
        var btnVal = event.target.value.toString();
        screenResult += event.target.value.toString();
        // mathSign = btnVal == "+" || btnVal == "-" || btnVal == "x" || btnVal == "/";
        displayResult = screenResult;
        if (btnVal == "+") {
            var sumNum = screenResult;
            sumNum.replace("+", "");
            realNum = Number(sumNum);
            sumArr.push(realNum);
            screenResult = "";
            resultToDisplay = sum(finalResult, sumArr);
        }

        if (btnVal == "x") {
            var sumNum = screenResult;
            sumNum.replace("x", "");
            realNum = Number(sumNum);
            multiplyArr.push(realNum);
            screenResult = "";
            resultToDisplay = multiply(finalResult, multiplyArr);
        }

        if (btnVal == "-") {
            var sumNum = screenResult;
            sumNum.replace("-", "");
            realNum = Number(sumNum);
            subtractArr.push(realNum);
            screenResult = "";
            resultToDisplay = subtract(finalResult, subtractArr);
        }

        if (btnVal == "/") {
            var sumNum = screenResult;
            sumNum.replace("/", "");
            realNum = Number(sumNum);
            divideArr.push(realNum);
            screenResult = "";
            resultToDisplay = divide(finalResult, divideArr);
        }


        screen.innerHTML = displayResult;
    }, false);
}




function sum(val, arr) {
    for (var i = 0; i < arr.length; i++) {
        val += arr[i];
    }
    return val;
}

function subtract(val, arr) {
    for (var i = 0; i < arr.length; i++) {
        val -= arr[i];
    }
    return val;
}

function multiply(val, arr) {
    for (var i = 0; i < arr.length; i++) {
        val *= arr[i];
    }
    return val;
}

function divide(val, arr) {
    for (var i = 0; i < arr[1].length; i++) {
        val /= arr[i];
    }
    return val
}

function calculate() {
    displayResult += " = " + resultToDisplay.toString();
}