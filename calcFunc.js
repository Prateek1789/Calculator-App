let output = 0;
let inputEquation = ``;
let currentNum = ``;

const displayInput = document.querySelector("#input");
const displayOutput = document.querySelector("#output");

const allClear = document.querySelector(".allClear");
const deleteNum = document.querySelector(".delete");
const modulo = document.querySelector(".modulo");

const btn = [...document.querySelectorAll(`.btn`)];

btn.forEach(itm => {
    itm.addEventListener("click", () => {
        if (Number(itm.dataset.value) || Number(itm.dataset.value) == 0 || itm.dataset.value == '.') {
            currentNum += itm.dataset.value;
            inputEquation += itm.dataset.value;
            displayOutput.value = Number(currentNum);
            displayInput.value = inputEquation;
        }
        else if (!Number(itm.dataset.operator)) {
            inputEquation += `${itm.dataset.operator}`;
            displayInput.value = inputEquation;
            currentNum = '';
        }

        if (itm.dataset.operator == '=') {
            const arrEquation = [...inputEquation];
            arrEquation.pop();
            displayOutput.value = eval(arrEquation.join(''));
        }
    })
})

deleteNum.addEventListener("click", () => {
    let arrayEquation = [...inputEquation];
    arrayEquation.length != [] ? arrayEquation.pop() : arrayEquation = [];
    inputEquation = arrayEquation.join('');
    displayInput.value = inputEquation;

    let arrayNum = [...currentNum];
    arrayNum.length != [] ? arrayNum.pop() : arrayNum = [];
    displayOutput.value = displayOutput.value.slice(0, -1);
    currentNum = arrayNum.join('');
    displayOutput.value = currentNum;
})

allClear.addEventListener("click", () => {
    displayInput.value = '';
    displayOutput.value = '';
    currentNum = '';
    inputEquation = '';
})