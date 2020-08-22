import { model } from "./model";
import "./styles/main.css";
import { templates } from "./templates";

const ref = document.querySelector("#site");

model.forEach((block) => ref.insertAdjacentHTML("beforeend", block.toHTML()));
