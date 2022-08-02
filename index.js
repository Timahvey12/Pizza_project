import { ingr, orderState } from "./constans.js";

const test = document.getElementById("test");
test.addEventListener("change", ({ target }) => {
  // console.log(target.checked);
  if (target.name === "main_base" || target.name === "sauce") {
    orderState[target.name][0] = ingr[target.name][target.value];
<<<<<<< HEAD
    // document.getElementById("hiden2").style.backgroundColor =
    //   "rgba(0, 0, 0, 0)";
=======

    // function eddTagIngr() {
    //   const order_abaut = document.querySelector("order_abaut");
    //   console.log(order_abaut);
    //   const newDiv = order_abaut.innerHTML;
    //   newDiv.innerHTML = `<p>${orderState[target.name][0]}</p>`;
    //   return newDiv;
    // }
>>>>>>> f2fdbc0bb9ec2541561008201e72bddc3244e49f
  } else {
    if (target.checked) {
      if (orderState[target.name].length < 2) {
        orderState[target.name].push(ingr[target.name][target.value]);
<<<<<<< HEAD
        // document.getElementById("hiden1").style.backgroundColor =
        //   "rgba(0, 0, 0, 0)";
=======
>>>>>>> f2fdbc0bb9ec2541561008201e72bddc3244e49f
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
<<<<<<< HEAD

  // console.log(orderState[target.value].price);
  addRemoveElemMain();
  addRemoveElemMeat();
  addRemoveElemSauce();
  addRemoveElemVegit();
  orderPrice();
=======
  console.log(orderState[target.name]);
>>>>>>> f2fdbc0bb9ec2541561008201e72bddc3244e49f
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
