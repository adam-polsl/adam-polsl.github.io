"use strict";
Object.prototype.SetAriaExpanded = function (state) {
  this.setAttribute("aria-expanded", state);
};

class Accordion {
  #currentlyOpen = null;
  constructor(items) {
    this.#currentlyOpen = Array.from(items).find(
      (item) => item.getAttribute("aria-expanded") === "true"
    );
    console.log(this.#currentlyOpen);
    if (!this.#currentlyOpen) {
      this.#currentlyOpen = items[0];
      this.#currentlyOpen.SetAriaExpanded("true");
    }
  }

  toggle(button) {
    if (this.#currentlyOpen == button) {
      return;
    }
    this.#currentlyOpen.SetAriaExpanded("false");
    button.SetAriaExpanded("true");
    this.#currentlyOpen = button;
  }
}
const accrdionItems = document.querySelectorAll(".accordion-item");
const accordion = new Accordion(accrdionItems);
accrdionItems.forEach((item) =>
  item.addEventListener("click", () => accordion.toggle(item))
);
