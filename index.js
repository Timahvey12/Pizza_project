import { ingr, orderState } from "./constans.js";

const test = document.getElementById("test");
test.addEventListener("change", ({ target }) => {
  console.log(target.name);
  console.log(ingr[target.name][target.value]);
  console.log(ingr[target.name][target.value]["name"]);
  orderState[target.name].push(ingr[target.name][target.value]);
  console.log(orderState);
  console.log(target.checked);

  console.log(orderState[target.name].push(ingr[target.name]));
  console.log("ura");
});
