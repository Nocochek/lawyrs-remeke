const item = document.querySelectorAll(".anim");

const checkBoxes = () => {
  const trigger = (window.innerHeight / 5) * 4;
  for (const box of item) {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  }
};

setTimeout(() => {
  checkBoxes();
}, 1000);

window.addEventListener("scroll", checkBoxes);





