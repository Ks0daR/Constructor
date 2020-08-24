import { model } from "./model";
import "./styles/main.css";
import { templates } from "./templates";
import { Site } from "./classes/site";
import { SideBar } from "./classes/sideBar";

function updateModel(newBlock) {
  model.push(newBlock);
  site.render(model);
}

const site = new Site("#site");

new SideBar("#panel", updateModel);

site.render(model);
