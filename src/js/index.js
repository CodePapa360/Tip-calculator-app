"use strict";
import "../sass/main.scss";

const inpBill = document.getElementById("bill");
const parcents = document.querySelector(".percentages-container");
const inpCustom = document.querySelector(".input-custom");
const inpPerson = document.getElementById("persons");
const allRadio = document.querySelectorAll(".radio-parcent");
const errorMsgEl = document.querySelector(".error-msg");
const btnReset = document.querySelector(".btn-reset");

const outputTip = document.getElementById("tip");
const outputTotal = document.getElementById("total");

///////////////
// Tip calcutor
const calcTip = function (bill, percent, person) {
  const totalTip = (bill * percent) / 100;
  const tip = totalTip / person;
  const total = (bill + totalTip) / person;

  return { tip: tip, total: total };
};

/////////////////
////////////////
let curBill, curPers, curPerson;

const verifier = function () {
  if (!curBill || !curBill || !curPerson) return;

  renderOutput(calcTip(curBill, curPers, curPerson));
};

////////////////
parcents.addEventListener("click", function (event) {
  const radioEl = event.target.closest(".radio-parcent");
  if (!radioEl) return;

  curPers = +radioEl.value;
  inpCustom.value = "";

  verifier();
});

//////////////////
inpCustom.addEventListener("input", function () {
  curPers = +inpCustom.value;
  allRadio.forEach((radio) => {
    if (radio.checked) radio.checked = false;
  });

  verifier();
});

//////////////////
inpBill.addEventListener("input", function () {
  curBill = +inpBill.value;

  verifier();
});

inpPerson.addEventListener("input", function () {
  if (+inpPerson.value < 1) {
    inpPerson.style.borderColor = "var(--red)";
    errorMsgEl.textContent = "Can't be zero";
    return;
  }

  inpPerson.style.borderColor = null;
  errorMsgEl.textContent = "";
  curPerson = +inpPerson.value;

  verifier();
});

/////////////
const renderOutput = function (obj) {
  outputTip.textContent = obj.tip.toFixed(2);
  outputTotal.textContent = obj.total.toFixed(2);
};

//reset funtionality
const reset = function () {
  inpBill.value = "";
  inpCustom.value = "";
  inpPerson.value = "";
  curBill = undefined;
  curPers = undefined;
  curPerson = undefined;

  allRadio.forEach((rad) => (rad.checked = false));
  renderOutput(calcTip(0, 0, 1));
};

reset();

btnReset.addEventListener("click", function () {
  reset();
});
