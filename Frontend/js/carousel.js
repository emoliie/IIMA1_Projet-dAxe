const carousel = document.querySelector(".carousel");

const dragging = (event) => {
  carousel.scrollleft = event.pageX;
};

carousel.addEventListener("mousemove", dragging);
