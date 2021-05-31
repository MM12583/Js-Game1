"use strict";

const reciprocal = document.querySelector(".reciprocal");
const start = document.querySelector(".start");

let reciprocalSec = 60;

function startReciprocal() {
  setInterval(displayTimes, 1000);
}

function displayTimes() {
  reciprocalSec -= 1;
  reciprocal.innerText = `剩餘時間 : ${reciprocalSec} 秒`;
}

function doFirst() {
  start.addEventListener("click", startReciprocal);
}

window.addEventListener("load", doFirst);
