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

var inputArr = [];
var numConcat = "";

for (var i = 0; i < btnArray.length; i++) {

    btnArray[i].addEventListener('click', (event) => {


        if (event.target.value.toString() === "x") {
            inputArr.push(numConcat);
            inputArr.push("*");
            numConcat = "";
            screen.innerHTML += event.target.value.toString();
        } else if (event.target.value.toString() == "=") {
            inputArr.push(numConcat);
            numConcat = "";
            screen.innerHTML += event.target.value.toString() + eval(inputArr.join(''));
        } else if (event.target.value.toString() == "="
            || event.target.value.toString() == "+"
            || event.target.value.toString() == "-"
            || event.target.value.toString() == "/"
            || event.target.value.toString() == "x") {
            inputArr.push(numConcat);
            inputArr.push(event.target.value.toString());
            numConcat = "";
            screen.innerHTML += event.target.value.toString();
        } else if (event.target.value.toString() !== "="
            || event.target.value.toString() !== "+"
            || event.target.value.toString() !== "-"
            || event.target.value.toString() !== "/"
            || event.target.value.toString() !== "x") {
            numConcat += event.target.value.toString();
            screen.innerHTML += event.target.value.toString();

        }
        console.log(inputArr);
        console.log(numConcat);
        console.log(eval(inputArr.join('')));
    }, false);
}