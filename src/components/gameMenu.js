import { PHOTO_MODE, NAME_MODE, FAMILY_NAME_MODE } from "./API/newQuestion";

const modes = {
  "Character-name": PHOTO_MODE,
  "Name-character": NAME_MODE,
  "Character-family": FAMILY_NAME_MODE
}

const mapToMode = (innerHtml) => {
  return modes[innerHtml]; // krótszy i czytelniejszy zapis, omija niepotrzebną składnię, ew. dodać `if`, jeżeli chcemy obsługiwać error

  switch (innerHtml) {
    case "Character-name":
      return PHOTO_MODE;
    case "Name-character":
      return NAME_MODE;
    case "Character-family":
      return FAMILY_NAME_MODE;
    default:
      throw new Error("Unknown game mode");
  }
};

export const menuCreator = () => {
  const container = document.createElement("div");
  container.classList.add("menu");
  const choose = document.createElement("div");
  choose.classList.add("choose");
  choose.innerHTML = "Choose your quiz";
  const btn1 = document.createElement("button");
  btn1.classList.add("selection");
  btn1.innerHTML = "Character-name";
  const btn2 = document.createElement("button");
  btn2.classList.add("selection");
  btn2.innerHTML = "Name-character";
  const btn3 = document.createElement("button");
  btn3.classList.add("selection");
  btn3.innerHTML = "Character-family";
  container.append(choose, btn1, btn2, btn3);
  return container;
};
export function getCurrentGameMode(passGameMode) {
  // getting buttons and conv to array
  const buttonsN = document.querySelectorAll(".selection");
  const buttons = [...buttonsN];
  // Adding active state to clicked button
  function changeColor(e) {
    buttons.map((button) => button.classList.remove("active"));
    e.currentTarget.classList.toggle("active");
    passGameMode(mapToMode(e.currentTarget.innerHTML));
  }

  buttons.map((button) => button.addEventListener("click", changeColor));
}
