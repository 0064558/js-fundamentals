import { sum, multiply, isNumber } from "./calculator.js";

const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultBox = document.getElementById("result-box");

const plusButton = document.getElementById("btn-plus");
const timesButton = document.getElementById("btn-times");
const clearButton = document.getElementById("btn-clear");

plusButton.addEventListener("click", () => {
    // 1. Validar rawNumber1 e rawNumber2
    const rawNumber1 = number1Input.value.trim();
    const rawNumber2 = number2Input.value.trim();

    // 2. Adicionar ou remover a classe input-error
    const number1IsValid = isNumber(rawNumber1);
    const number2IsValid = isNumber(rawNumber2);
    // 3. Adicionar ou remover a classe input-error
    number1Input.classList.toggle("input-error", !number1IsValid);
    number2Input.classList.toggle("input-error", !number2IsValid);

    if (!number1IsValid || !number2IsValid) {
        // se houver algum input inválido, não prosseguir com a soma
        return;
    }

    // 4. Converter os valores para Number
    const number1 = Number(rawNumber1);
    const number2 = Number(rawNumber2);
    // 5. Chamar sum(number1, number2)
    const result = sum(number1, number2);
    // 6. Atualizar resultBox.textContent
    resultBox.textContent = result;
});

timesButton.addEventListener("click", () => {
    // 1. Validar rawNumber1 e rawNumber2
    const rawNumber1 = number1Input.value.trim();
    const rawNumber2 = number2Input.value.trim();

    // 2. Adicionar ou remover a classe input-error
    const number1IsValid = isNumber(rawNumber1);
    const number2IsValid = isNumber(rawNumber2);
    // 3. Adicionar ou remover a classe input-error
    number1Input.classList.toggle("input-error", !number1IsValid);
    number2Input.classList.toggle("input-error", !number2IsValid);

    if (!number1IsValid || !number2IsValid) {
        // se houver algum input inválido, não prosseguir com a multiplicação
        return;
    }

    // 4. Converter os valores para Number
    const number1 = Number(rawNumber1);
    const number2 = Number(rawNumber2);
    // 5. Chamar multiply(number1, number2)
    const result = multiply(number1, number2);
    // 6. Atualizar resultBox.textContent
    resultBox.textContent = result;
})

clearButton.addEventListener("click", () => {
    number1Input.value = "";
    number2Input.value = "";
    resultBox.textContent = "0";
    number1Input.classList.remove("input-error");
    number2Input.classList.remove("input-error");
});