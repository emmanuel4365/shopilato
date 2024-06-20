export function rightClick() {
  //select DOM elements
  let photos = Array.from(document.querySelectorAll(".image"));
  let imageContainer = document.querySelector(".image-container");
  let circles = Array.from(document.querySelectorAll(".circle"));
  let circlesContainer = document.querySelector(".banner-circles-container");

  //firstly, overwrite transform property for each image to reflect the current position
  photos.map((item) => {
    let num = Number(item.dataset.translate);
    // console.log(num);
    let cal = num - 100;
    // console.log(cal);
    item.style.transform = `translateX(${cal}%)`;
    item.dataset.translate = cal;
  });

  //next, overwrite dataset.selected attribute value
  let el = photos.find((item) => item.dataset.selected === "true");
  let circle = circles.find((circle) => circle.classList.contains("selected"));

  if (el.dataset.selected === "true" && !el.nextElementSibling) {
    el.dataset.selected = "false";
    circle.classList.remove("selected");
    let loadedPhotos = photos.map((item, index) => {
      item.style.transform = `translateX(${index * 100}%)`;
      item.dataset.translate = `${index * 100}`;
      return item;
    });
    loadedPhotos[0].dataset.selected = "true";
    circles[0].classList.add("selected");

    return;
  }

  el.dataset.selected = "false";
  circle.classList.remove("selected");

  if (!el.nextElementSibling) {
    imageContainer.firstElementChild.dataset.selected = "true";
    circlesContainer.firstElementChild.classList.add("selected");
  } else {
    el.nextElementSibling.dataset.selected = "true";
    circle.nextElementSibling.classList.add("selected");
  }
}
