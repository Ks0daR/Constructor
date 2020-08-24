import { TitleBlock, TextBlock } from "./blocks";

export class SideBar {
  constructor(selector, update) {
    this.$elem = document.querySelector(selector);
    this.update = update;
    this.init();
  }

  init() {
    this.$elem.addEventListener("submit", this.handleSubmit.bind(this));
    this.$elem.innerHTML = this.template;
  }

  get template() {
    return [blockForm("title"), blockForm("text")].join("");
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const type = evt.target.name;
    const value = evt.target.value.value;
    const styles = evt.target.styles.value;

    const Constructor = type === "title" ? TitleBlock : TextBlock;

    const newBlock = new Constructor(value, { styles });
    
    this.update(newBlock);

    evt.target.value.value = "";
    evt.target.styles.value = "";
  }
}

function blockForm(title = "") {
  return `
<form name=${title}>
<h3>${title}</h3>  
    <input type="text" class="form-control" name="value" placeholder="Input text">
    <input type="text" class="form-control" name="styles" placeholder="Styles">  
  <button type="submit" class="btn btn-primary">Добавить</button>
</form>`;
}
