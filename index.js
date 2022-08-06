import { ingr, orderState } from "./constans.js";
import { createButton } from "./addElements.js";
const test = document.getElementById("test");
test.addEventListener("change", ({ target }) => {
  if (target.name === "main_base" || target.name === "sauce") {
    orderState[target.name][0] = ingr[target.name][target.value];
  } else {
    if (target.checked) {
      if (orderState[target.name].length < 2) {
        orderState[target.name].push(ingr[target.name][target.value]);
      } else {
        target.checked = false;
      }
    } else {
      const idx = orderState[target.name].indexOf(
        ingr[target.name][target.value]
      );
      orderState[target.name].splice(idx, 1);
    }
  }

  addRemoveElemMain();
  addRemoveElemMeat();
  addRemoveElemSauce();
  addRemoveElemVegit();
  hiddenDivs();
  hiddenSouce();
  hiddenMeatVegitablesIngr();
  orderPriceCounter();
});

function addRemoveElemMain() {
  const ingrPmain = document.querySelector(".ingr-main_base");
  ingrPmain.textContent = orderState.main_base[0]?.name;
}
function addRemoveElemMeat() {
  const ingrPMeat = document.querySelector(".ingr-meat");
  ingrPMeat.textContent = `${orderState.meat[0]?.name || ""}, ${
    orderState.meat[1]?.name || ""
  }`;
}
function addRemoveElemVegit() {
  const ingrPVegit = document.querySelector(".ingr-vegit");
  ingrPVegit.textContent = `${orderState.vegetables[0]?.name || ""}, ${
    orderState.vegetables[1]?.name || ""
  }`;
}
function addRemoveElemSauce() {
  const ingrPSouce = document.querySelector(".ingr-souce");
  ingrPSouce.textContent = orderState.sauce[0]?.name;
}

export function orderPriceCounter() {
  let fullPrice = 0;
  orderState.vegetables.forEach((element) => {
    fullPrice += element.price;
  });
  orderState.meat.forEach((element) => {
    fullPrice += element.price;
  });
  orderState.sauce.forEach((element) => {
    fullPrice += element.price;
  });
  orderState.main_base.forEach((element) => {
    fullPrice += element.price;
  });
  const orderPrise = document.querySelector(".countPrice");
  return (orderPrise.textContent = fullPrice + `$`);
}

function hiddenDivs() {
  if (orderState.main_base[0]) {
    const fsdf = document.querySelector(".hiden1");
    fsdf.style.backgroundColor = "rgba(253, 253, 253, 0)";
  }
}
function hiddenSouce() {
  if (orderState.sauce[0]) {
    const souce = document.querySelector(".hiden4");
    souce.style.backgroundColor = "rgba(253, 253, 253, 0)";
  }
}

function hiddenMeatVegitablesIngr() {
  if (orderState.meat.length > 1) {
    document.querySelector(".hiden2").style.backgroundColor =
      "rgba(253, 253, 253, 0)";
  } else if (orderState.meat.length <= 1) {
    document.querySelector(".hiden2").style.backgroundColor =
      "rgba(212, 42, 42, 0.801)";
  }
  if (orderState.vegetables.length > 1) {
    document.querySelector(".hiden3").style.backgroundColor =
      "rgba(253, 253, 253, 0)";
  } else if (orderState.vegetables.length <= 1) {
    document.querySelector(".hiden3").style.backgroundColor =
      "rgba(212, 42, 42, 0.801)";
  }
}
createButton();
