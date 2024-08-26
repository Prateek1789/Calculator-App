let output = 0;
let inputEquationShow = ``;
let inputEquationEval = ``;
let currentNum = ``;

const displayInput = document.querySelector("#input");
const displayOutput = document.querySelector("#output");

const allClear = document.querySelector(".allClear");
const deleteNum = document.querySelector(".delete");
const modulo = document.querySelector(".modulo");

const btn = [...document.querySelectorAll(`.btn`)];
const convert = document.querySelector(".conversion");

btn.forEach(itm => {
    itm.addEventListener("click", () => {
        if (Number(itm.dataset.value) || Number(itm.dataset.value) == 0 || itm.dataset.value == '.') {
            currentNum += itm.dataset.value;
            inputEquationShow += itm.dataset.value;
            inputEquationEval += itm.dataset.value;
            displayOutput.value = currentNum;
            displayInput.value = inputEquationShow;
        }
        else if (!Number(itm.dataset.operator)) {
            inputEquationShow += `${itm.textContent}`;
            inputEquationEval += `${itm.dataset.operator}`;
            console.log(inputEquationEval);
            displayInput.value = inputEquationShow;
            currentNum = ``;
        }

        if (itm.dataset.operator == '=') {
            const arrEquation = [...inputEquationEval];
            arrEquation.pop();
            displayOutput.value = eval(arrEquation.join(''));
            currentNum = ``;
            inputEquationShow = ``;
            inputEquationEval = ``;
        }
    })
})

convert.addEventListener("click", () => {
    if (!displayOutput.value && !displayInput.value) {
        return; 
    }
    else if (displayOutput.value && displayOutput.value > 0) {
        currentNum = displayOutput.value / -1;
        displayOutput.value = currentNum;
        inputEquationShow += `${currentNum}`;
        console.log(inputEquationShow);
        displayInput.value = inputEquationShow;
    }
    else if (displayOutput.value && displayOutput.value < 0) {
        currentNum = displayOutput.value * -1;
        displayOutput.value = currentNum;
    }
})

deleteNum.addEventListener("click", () => {
    let arrayEquation = [...inputEquationShow];
    arrayEquation.length != [] ? arrayEquation.pop() : arrayEquation = [];
    inputEquationShow = arrayEquation.join('');
    displayInput.value = inputEquationShow;

    let arrayNum = [...currentNum];
    arrayNum.length != [] ? arrayNum.pop() : arrayNum = [];
    displayOutput.value = displayOutput.value.slice(0, -1);
    currentNum = arrayNum.join('');
    displayOutput.value = currentNum;
})

allClear.addEventListener("click", () => {
    displayInput.value = ``;
    displayOutput.value = ``;
    currentNum = ``;
    inputEquationShow = ``;
    inputEquationEval = ``;
})