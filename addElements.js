import { orderState } from "./constans.js";
import { createPopup } from "./creatPopup.js";

export function createButton() {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "ЗАКАЗАТЬ";
  const mainOrder = document.querySelector(".main-order");
  mainOrder.after(button);
  button.addEventListener("click", () => {
    orderState.main_base.forEach((element) => console.log(element));
    orderState.sauce.forEach((element) => console.log(element));
    orderState.vegetables.forEach((element) => console.log(element));
    orderState.meat.forEach((element) => console.log(element));

    createPopup();
  });
}
