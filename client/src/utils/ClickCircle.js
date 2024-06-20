export function clickCircle(e) {
  let photos = Array.from(document.querySelectorAll(".image"));
  let imageContainer = document.querySelector(".image-container");
  let circles = Array.from(document.querySelectorAll(".circle"));
  let circlesContainer = document.querySelector(".banner-circles-container");

  if (!e.currentTarget.classList.contains("selected")) {
    let circle = circles.find((circle) =>
      circle.classList.contains("selected")
    );
    circle.classList.remove("selected");
    e.currentTarget.classList.add("selected");
    let circleID = e.currentTarget.id;
    let photo = photos.find((photo) => photo.id === circleID);
    let photoTranslate = photo.dataset.translate;
    console.log(photoTranslate);
    photos.map((item) => {
      if (item.id === circleID) {
        item.dataset.selected = "true";
      } else {
        item.dataset.selected = "false";
      }
      let num = Number(item.dataset.translate);
      let cal = num - photoTranslate;
      item.style.transform = `translateX(${cal}%)`;
      item.dataset.translate = cal;
      console.log(cal);
    });
  }
}
