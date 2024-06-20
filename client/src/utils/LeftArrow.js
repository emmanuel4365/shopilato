export function leftClick() {
  let photos = Array.from(document.querySelectorAll(".image"));
  let imageContainer = document.querySelector(".image-container");
  let circles = Array.from(document.querySelectorAll(".circle"));
  let circlesContainer = document.querySelector(".banner-circles-container");

  let el = photos.find((item) => item.dataset.selected === "true");
  let circle = circles.find((circle) => circle.classList.contains("selected"));

  if (el.dataset.selected === "true" && !el.previousElementSibling) {
    el.dataset.selected = "false";
    let circlesCopy = [...circles];
    let circlesReverse = circlesCopy.reverse();
    let arrCopy = [...photos];
    let arrayReverse = arrCopy.reverse();
    let loadedPhotos = arrayReverse.map((item, index) => {
      item.style.transform = `translateX(${index * -100}%)`;
      item.dataset.translate = `${index * -100}`;
      return item;
    });
    loadedPhotos[0].dataset.selected = "true";
    circlesReverse[0].classList.add("selected");
    circle.classList.remove("selected");
    return;
  }

  el.dataset.selected = "false";
  circle.classList.remove("selected");

  if (!el.previousElementSibling) {
    imageContainer.lastElementChild.dataset.selected = "true";
    circlesContainer.lastElementChild.classList.add("selected");
  } else {
    el.previousElementSibling.dataset.selected = "true";
    circle.previousElementSibling.classList.add("selected");
  }

  photos.map((item) => {
    let num = Number(item.dataset.translate);
    let cal = num + 100;
    item.style.transform = `translateX(${cal}%)`;
    item.dataset.translate = cal;
    console.log(cal);
  });
}
