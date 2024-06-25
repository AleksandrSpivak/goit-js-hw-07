function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.getElementById("controls");
  const input = controls.querySelector('input[type="number"]');
  const createBtn = controls.querySelector("button[data-create]");
  const destroyBtn = controls.querySelector("button[data-destroy]");
  const boxes = document.getElementById("boxes");

  createBtn.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100");
      return;
    }
    createBoxes(amount);
    input.value = "";
  });

  destroyBtn.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); // Clear previous boxes before creating new ones
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px"; // Optional styling for spacing
      fragment.appendChild(box);
      size += 10;
    }

    boxes.appendChild(fragment);
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }
});
