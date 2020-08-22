import image from "./img/1.jpg";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Site title", {
    styles: "color: #fff; background: blue;",
    tag: "h2",
  }),

  new ImageBlock(image, {
    styles: "text-align: center",
    imgStyles: "width: 300px",
    alt: "Cat",
  }),

  new TextBlock("text item", {
    styles: "color: #aaa; background: yellow;",
    tag: "h2",
  }),

  new TextColumnBlock(["text 1", "text 2", "text 3"], {
    styles: "color: #fff; background: green;",
    tag: "h2",
  }),
];
