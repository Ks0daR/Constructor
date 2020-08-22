import { row, col } from "../helpers";

export class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("Этот метод должен присутствовать");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag, styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, alt, imgStyles } = this.options;
    const html = `<img src=${this.value} alt=${alt} style="${imgStyles}"`;
    return row(col(html, styles));
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag, styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class TextColumnBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    const content = this.value.map((item) => col(item));
    return row(content.join(""), styles);
  }
}
