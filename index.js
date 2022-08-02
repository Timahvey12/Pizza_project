import { ingr, orderState } from "./constans.js";

const test = document.getElementById("test");
test.addEventListener("change", ({ target }) => {
  // console.log(target.checked);
  if (target.name === "main_base" || target.name === "sauce") {
    orderState[target.name][0] = ingr[target.name][target.value];

    // function eddTagIngr() {
    //   const order_abaut = document.querySelector("order_abaut");
    //   console.log(order_abaut);
    //   const newDiv = order_abaut.innerHTML;
    //   newDiv.innerHTML = `<p>${orderState[target.name][0]}</p>`;
    //   return newDiv;
    // }
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
  console.log(orderState[target.name]);
});
