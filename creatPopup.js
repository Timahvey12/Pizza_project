export function createPopup() {
  const divPopup = document.createElement("div");
  divPopup.classList.add("popup");
  const wrapperOrder = document.querySelector(".wrapper");
  wrapperOrder.before(divPopup);
  const textOrder = document.createElement("div");
  textOrder.classList.add("textOrder");
  textOrder.textContent = "Ваш заказ принят";
  divPopup.after(textOrder);
}
