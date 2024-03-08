// alert("hello")
let input = document.getElementById("input");
// console.log(input);
let result = document.getElementById("result");
console.log(result);
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;



input.addEventListener("keyup", myResult);
result.addEventListener("keyup", myInput);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);
// inputTypeValue = inputType.value;
// resultTypeValue = resultType.value;
function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  if (inputTypeValue === "metre" && resultTypeValue === "kilometre") {
    result.value = Number(input.value) / 1000;
  } else if (inputTypeValue === "metre" && resultTypeValue === "centimetre") {
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === "metre" && resultTypeValue === "metre") {
    result.value = input.value;
  } else if (
    inputTypeValue === "kilometre" &&
    resultTypeValue === "kilometre"
  ) {
    result.value = input.value;
  } else if (
    inputTypeValue === "kilometre" &&
    resultTypeValue === "centimetre"
  ) {
    result.value = Number(input.value) * 100000;
  } else if (inputTypeValue === "kilometre" && resultTypeValue === "metre") {
    result.value = Number(input.value) * 1000;
  } else if (
    inputTypeValue === "centimetre" &&
    resultTypeValue === "kilometre"
  ) {
    result.value = Number(input.value) / 100000;
  } else if (
    inputTypeValue === "centimetre" &&
    resultTypeValue === "centimetre"
  ) {
    result.value = input.value;
  } else if (inputTypeValue === "centimetre" && resultTypeValue === "metre") {
    result.value = Number(input.value) / 100;
  }
}

function myInput() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  if (inputTypeValue === "metre" && resultTypeValue === "kilometre") {
    input.value = Number(result.value) * 1000;
  } else if (inputTypeValue === "metre" && resultTypeValue === "centimetre") {
    input.value = Number(result.value) / 100;
  } else if (inputTypeValue === "metre" && resultTypeValue === "metre") {
    input.value = result.value;
  } else if (
    inputTypeValue === "kilometre" &&
    resultTypeValue === "kilometre"
  ) {
    input.value = result.value;
  } else if (
    inputTypeValue === "kilometre" &&
    resultTypeValue === "centimetre"
  ) {
    input.value = Number(result.value) / 100000;
  } else if (inputTypeValue === "kilometre" && resultTypeValue === "metre") {
    input.value = Number(result.value) / 1000;
  } else if (
    inputTypeValue === "centimetre" &&
    resultTypeValue === "kilometre"
  ) {
    input.value = Number(result.value) * 100000;
  } else if (
    inputTypeValue === "centimetre" &&
    resultTypeValue === "centimetre"
  ) {
    input.value = result.value;
  } else if (inputTypeValue === "centimetre" && resultTypeValue === "metre") {
    input.value = Number(result.value) * 100;
  }
}
