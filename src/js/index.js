"use strict";
// import "../sass/main.scss";

const inpBill = +document.getElementById("bill");
const parcents = document.querySelector(".percentages-container");
const inpPerson = +document.getElementById("persons");
const allRadio = document.querySelectorAll(".radio-parcent");

const calcTip = function (bill, percent, person) {
  const totalTip = (bill * percent) / 100;
  const tip = totalTip / person;
  const total = (bill + totalTip) / person;
  console.log({ tip: tip, total: total });
  return { tip: tip, total: total };
};

/////////////////
////////////////
console.log(parcents);
let curPers = 0;

parcents.addEventListener("click", function (event) {
  const radio = event.target.closest(".radio-parcent");
  const custom = event.target.closest(".input-custom");

  if (!radio && !custom) return;

  if (radio) {
    curPers = +radio.value;
  }

  if (custom) {
    allRadio.forEach((rad) => {
      if (rad.checked) rad.checked = false;
    });
  }
});

bill.addEventListener("input", function () {
  // calcTip(+bill.value, );
});
