import { ingr, orderState } from "./constans.js";

const test = document.getElementById("test");
test.addEventListener("change", ({ target }) => {
  // console.log(target.checked);
  if (target.name === "main_base" || target.name === "sauce") {
    orderState[target.name][0] = ingr[target.name][target.value];
    // document.getElementById("hiden2").style.backgroundColor =
    //   "rgba(0, 0, 0, 0)";
  } else {
    if (target.checked) {
      if (orderState[target.name].length < 2) {
        orderState[target.name].push(ingr[target.name][target.value]);
        // document.getElementById("hiden1").style.backgroundColor =
        //   "rgba(0, 0, 0, 0)";
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

  // console.log(orderState[target.value].price);
  addRemoveElemMain();
  addRemoveElemMeat();
  addRemoveElemSauce();
  addRemoveElemVegit();
  orderPrice();
});
function addRemoveElemMain() {
  const ingrPmain = document.querySelector(".ingr-main_base");
  ingrPmain.textContent = orderState.main_base[0]?.name;
}
function addRemoveElemMeat() {
  const ingrPMeat = document.querySelector(".ingr-meat");
  ingrPMeat.textContent = `${orderState.meat[0]?.name}, ${orderState.meat[1]?.name}`;
}
function addRemoveElemVegit() {
  const ingrPVegit = document.querySelector(".ingr-vegit");
  ingrPVegit.textContent = `${orderState.vegetables[0]?.name}, ${orderState.vegetables[1]?.name}`;
}
function addRemoveElemSauce() {
  const ingrPSouce = document.querySelector(".ingr-souce");
  ingrPSouce.textContent = orderState.sauce[0]?.name;
}
