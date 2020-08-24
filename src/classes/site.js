export class Site {
  constructor(selector) {
    this.$elem = document.querySelector(selector);
  }

  render(model) {
    this.$elem.innerHTML = "";
    model.forEach((block) =>
      this.$elem.insertAdjacentHTML("beforeend", block.toHTML())
    );
  }
}
