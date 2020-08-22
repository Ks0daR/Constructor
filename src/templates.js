const { row, col } = require("./helpers");

function title(value, options) {
  const { tag, styles } = options;
  return row(col(`<${tag}>${value}</${tag}>`), styles);
}

function image(value, options) {
  const { styles, alt, imgStyles } = options;
  const html = `<img src=${value} alt=${alt} style="${imgStyles}"`;
  return row(col(html, styles));
}

function text(value, options) {
  const { tag, styles } = options;
  return row(col(`<${tag}>${value}</${tag}>`), styles);
}

function textColumns(value, options) {
  const { styles } = options;
  const content = value.map((item) => col(item));
  return row(content.join(""), styles);
}

export const templates = {
  title,
  image,
  text,
  textColumns,
};
