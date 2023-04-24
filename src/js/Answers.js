import { answers } from "./utils";
import { state } from "..";
import { dropdownValue, further } from "./Quiz";
export const answersElements = [];
export const Answers = () => {
  container.innerHTML = "";
  container.appendChild(answersElements[state.step]);
  if ([1, 6].includes(state.step)) {
    container.classList.add("answers-container");
  } else {
    container.classList.remove("answers-container");
  }

  return container;
};
const change = ({ target }) => {
  if ([1, 6].includes(state.step)) {
    Array.from(answersElements[state.step].children).forEach((label) => {
      label.lastElementChild.checked = false;
      label.lastElementChild.classList.remove("checked-dropdown");
      label.lastElementChild.style.background = "";
    });
    target.style.background = `url("../src/images/checked.svg")center no-repeat,#383838`;

    target.checked = true;
    dropdownValue.textContent = target.name;
    target.classList.toggle("checked-dropdown");
  } else {
    target.classList.toggle("checked");
    target.parentElement.classList.toggle("label-checked");
  }
  if (
    Array.from(answersElements[state.step].children).some(
      (label) => label.lastElementChild.checked
    )
  ) {
    further.classList.add("active");
  } else {
    further.classList.remove("active");
  }
};

export const container = document.createElement("sectoin");
answers.forEach((e, i) => {
  answersElements[i] = document.createElement("div");
  answersElements[i].classList.add("answers");
  answersElements[i].classList.add(`answers_${i}`);

  e.forEach((answer, j) => {
    const label = document.createElement("div");
    label.classList.add([1, 6].includes(i) ? "dropdown-label" : "label");

    const input = document.createElement("input");
    input.type = i === 8 ? "text" : "checkbox";
    input.name = answer;
    input.onchange = change;
    if (i === 1 && !j) {
      input.checked = true;
      input.style.background = `url("../src/images/checked.svg")center no-repeat,#383838`;
    }

    if (i !== 8) {
      label.textContent = answer;
      input.classList.add([1, 6].includes(i) ? "input-dropdown" : "input");
    } else {
      input.placeholder = answer;
      input.classList.add("input-form");
    }
    label.appendChild(input);

    answersElements[i].appendChild(label);
  });
});
