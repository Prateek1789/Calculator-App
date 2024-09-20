let output = 0;
let inputEquationShow = ``;
let inputEquationEval = ``;
let currentNum = ``;

const displayInput = document.querySelector("#input");
const displayOutput = document.querySelector("#output");

const allClear = document.querySelector(".allClear");
const deleteNum = document.querySelector(".delete");
const modulo = document.querySelector(".modulo");
const convert = document.querySelector(".btn-X");

/* const btn = [...document.querySelectorAll(`.btn`)]; */
const operand = [...document.querySelectorAll(`.operand`)];
const operator = [...document.querySelectorAll(`.operator`)];

operand.forEach(itm => {
    itm.addEventListener("click", () => {
        currentNum += itm.dataset.value;
        displayOutput.value = currentNum;
        inputEquationShow += itm.dataset.value;
        inputEquationEval += itm.dataset.value;
        displayInput.value = inputEquationShow;
    })
})

operator.forEach(itm => {
    itm.addEventListener("click", () => {
        if (itm.dataset.operator != '=') {
            inputEquationShow += itm.dataset.operator;
            inputEquationEval += itm.dataset.operator
            displayInput.value = inputEquationShow;
            currentNum = ``;
        }
        else {
            displayOutput.value = eval(inputEquationEval);
            currentNum = displayOutput.value;
            /* currentNum = ``;
            inputEquationShow = ``;
            inputEquationEval = ``; */
        }
    })  
})

deleteNum.addEventListener("click", () => {
    let arrayEquation = [...inputEquationShow];
    arrayEquation.length != [] ? arrayEquation.pop() : arrayEquation = [];
    inputEquationShow = arrayEquation.join('');
    inputEquationEval = inputEquationShow;
    displayInput.value = inputEquationShow;

    let arrayNum = [...currentNum];
    arrayNum.length != [] ? arrayNum.pop() : arrayNum = [];
    currentNum = arrayNum.join('');
    displayOutput.value = currentNum;
})

/* convert.addEventListener("click", () => {
    let newNum = Number(currentNum);
    console.log(newNum);
    if (newNum > 0) {
        currentNum = newNum / -1;
        displayOutput.value = currentNum;
    }
}) */

allClear.addEventListener("click", () => {
    displayInput.value = ``;
    displayOutput.value = ``;
    currentNum = ``;
    inputEquationShow = ``;
    inputEquationEval = ``;
})