// Swiper Carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Modal
const modal = document.getElementById("modal");
const requestBtn = document.getElementById("requestBtn");
const cancelBtn = document.getElementById("cancelBtn");

requestBtn.onclick = () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

cancelBtn.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Video Play/Pause
const video = document.getElementById("promoVideo");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "block";
  }
});

video.addEventListener("pause", () => playBtn.style.display = "block");
video.addEventListener("play", () => playBtn.style.display = "none");
