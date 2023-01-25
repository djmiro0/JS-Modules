//app logic goes here

import stringhelper from "./stringhelper.js";

const result = document.querySelector("#result");
const btnUppercase = document.querySelector("#btn-uppercase");
const input = document.querySelector(".form-control");
const btnLowercase = document.querySelector("#btn-lowercase");
const firstLetter = document.querySelector("#btn-uppercase-first-letter");

btnUppercase.addEventListener("click", (e) => {
  return (result.innerText = stringhelper.uppercase(input.value));
});

btnLowercase.addEventListener("click", (e) => {
  return (result.innerText = stringhelper.lowercase(input.value));
});

firstLetter.addEventListener("click", (e) => {
  return (result.innerText = stringhelper.firstLetter(input.value));
});
