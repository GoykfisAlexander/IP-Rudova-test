import image from "../images/image.svg";
import { Quiz } from "./Quiz";
export const App = () => {
  containerContent.appendChild(Quiz());
  return container;
};
const container = document.createElement("sectoin");
container.classList.add("container");

const containerContent = document.createElement("div");
containerContent.classList.add("container__content");

const titleBox = document.createElement("sectoin");
titleBox.classList.add("titleBox");

const title = document.createElement("h1");
title.innerHTML = "Подберём вуз мечты";
title.classList.add("title");

const paragraph = document.createElement("p");
paragraph.innerHTML =
  "Ответьте на 8 простых вопросов, и мы составим<br/> список наболее подходящих для вас вузов";
paragraph.classList.add("paragraph");

const img = document.createElement("img");
img.src = image;
img.classList.add("img");

titleBox.appendChild(title);
titleBox.appendChild(paragraph);
titleBox.appendChild(img);
containerContent.appendChild(titleBox);
container.appendChild(containerContent);
