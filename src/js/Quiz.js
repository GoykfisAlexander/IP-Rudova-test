import okImage from "../images/ok.svg";
import vectorImage from "../images/vector.svg";
import { questions } from "./utils";
import { state } from "..";
import {
  Answers,
  answersElements,
  container as answersContainer,
} from "./Answers";
export const Quiz = () => {
  render();
  return container;
};
const render = () => {
  answersContainer.classList.remove("answers-active");
  question.textContent = questions[state.step];
  step.textContent = `Шаг ${state.step + 1}/${questions.length}`;
  switch (state.step) {
    case 1:
      dropdownAppointment.textContent = "Город";
      dropdown.classList.add("dropdown-active");
      break;
    case 2:
      dropdownAppointment.textContent = "Специальность";
      dropdown.classList.remove("dropdown-active");

      break;
  }
  const value = Array.from(answersElements[state.step].children).filter(
    (label) => label.lastElementChild.checked
  )[0]?.textContent;
  dropdownValue.textContent = value ? value : "Любая";
  const answers = Answers();
  const oldChild = container.children[1];

  if ([1, 6].includes(state.step)) {
    container.insertBefore(dropdown, answers);
  }

  container.replaceChild(answers, oldChild);

  if (
    Array.from(answersElements[state.step].children).some(
      (label) => label.lastElementChild.checked
    )
  ) {
    further.classList.add("active");
  } else {
    further.classList.remove("active");
  }

  if (!state.step) {
    back.style.visibility = "collapse";
  } else {
    back.style.visibility = "";
  }
  if (state.step === questions.length - 1) {
    buttons.replaceChild(buttonForm, back);
    buttons.replaceChild(agreement, further);
    buttons.className = "buttons-form";
  }
};
const animation = () => {
  container.classList.add("animation");

  setTimeout(() => {
    render();
  }, 500);
  setTimeout(() => {
    container.classList.remove("animation");
  }, 1000);
};
const quizBack = () => {
  state.step--;
  animation();
};
const quizFurther = () => {
  if (further.classList.contains("active")) {
    state.step++;
    animation();
  }
};
const ok = () => {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/users/octocat";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      container.innerHTML = "";
      container.appendChild(sectionOk);
    } else {
      console.log("Произошла ошибка: " + xhr.status);
    }
  };
  xhr.send();
};

const container = document.createElement("sectoin");
container.classList.add("quiz");

const containerQuestions = document.createElement("div");
containerQuestions.classList.add("container-questions");

const question = document.createElement("span");
question.classList.add("question");

const step = document.createElement("span");
step.classList.add("step");

const buttons = document.createElement("div");
buttons.classList.add("buttons");

const back = document.createElement("button");
back.classList.add("back");
back.textContent = "< Назад";
back.onclick = quizBack;

export const further = document.createElement("button");
further.classList.add("further");
further.textContent = "Далее >";
further.onclick = quizFurther;

const dropdown = document.createElement("div");
dropdown.classList.add("dropdown");

const dropdownAppointment = document.createElement("span");
dropdownAppointment.classList.add("dropdown-appointment");

export const dropdownValue = document.createElement("span");
dropdownValue.classList.add("dropdown-value");

const vector = document.createElement("img");
vector.classList.add("vector");

vector.src = vectorImage;
vector.onclick = () => {
  answersContainer.classList.toggle("answers-active");
};

const sectionOk = document.createElement("section");
sectionOk.classList.add("section-ok");

const titleOk = document.createElement("h1");
titleOk.textContent = "Отлично, спасибо!";
titleOk.classList.add("title-ok");

const textOk = document.createElement("p");
textOk.innerHTML =
  "Мы отправили подборку вам на почту.<br/> Если подборка не приходит — проверьте<br/> спам, возможно, она попала туда.";
textOk.classList.add("text-ok");

const imageOk = document.createElement("img");
imageOk.src = okImage;
imageOk.classList.add("image-ok");

const buttonForm = document.createElement("button");
buttonForm.classList.add("button-form");
buttonForm.textContent = "Получить подборку";
buttonForm.onclick = ok;

const agreement = document.createElement("div");
agreement.classList.add("agreement");
agreement.textContent =
  "Нажимая на кнопку, вы даете согласие на обработку своих ";

const link = document.createElement("a");
link.textContent = "Персональных данных";
link.href = "";

dropdown.appendChild(dropdownAppointment);
dropdown.appendChild(dropdownValue);
dropdown.appendChild(vector);
containerQuestions.appendChild(question);
containerQuestions.appendChild(step);
agreement.appendChild(link);
sectionOk.appendChild(imageOk);
sectionOk.appendChild(titleOk);
sectionOk.appendChild(textOk);
buttons.appendChild(back);
buttons.appendChild(further);
container.appendChild(containerQuestions);
container.appendChild(document.createElement("div"));
container.appendChild(buttons);
