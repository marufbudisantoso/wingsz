// ============ Confetti Love Effect ============
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

function createConfetti() {
  confetti = [];
  const jumlahConfetti = window.innerWidth < 768 ? 20 : 35;

  for (let i = 0; i < jumlahConfetti; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 15 + 10,
      speed: Math.random() * 2 + 1,
      drift: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c) => {
    ctx.globalAlpha = c.opacity;
    ctx.fillStyle = "#FF69B4";
    ctx.font = `${c.size}px Arial`;
    ctx.fillText("❤", c.x, c.y);

    c.y += c.speed;
    c.x += c.drift;

    if (c.y > canvas.height) {
      c.y = -20;
      c.x = Math.random() * canvas.width;
    }

    if (c.x < 0 || c.x > canvas.width) {
      c.x = Math.random() * canvas.width;
    }
  });

  ctx.globalAlpha = 1;
  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();

window.addEventListener("resize", createConfetti);

// ============ Welcome Popup ============
const welcomePopup = document.getElementById("welcomePopup");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  welcomePopup.classList.add("hidden");
  setTimeout(() => {
    welcomePopup.style.display = "none";
  }, 500);
});

// ============ Navigation System ============
const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-page");

    // Remove active class from all buttons
    navButtons.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    // Hide all pages
    pages.forEach((p) => p.classList.remove("active"));

    // Show target page
    document.getElementById(targetPage).classList.add("active");
  });
});

// ============ Photo Loading ============
// Fungsi untuk menampilkan foto jika file ada
function loadPhoto(imgElement, placeholder) {
  imgElement.addEventListener("load", function () {
    placeholder.style.display = "none";
    imgElement.style.display = "block";
  });

  imgElement.addEventListener("error", function () {
    placeholder.style.display = "flex";
    imgElement.style.display = "none";
  });
}

const photos = document.querySelectorAll(".photo");
const placeholders = document.querySelectorAll(".photo-placeholder");

photos.forEach((photo, index) => {
  loadPhoto(photo, placeholders[index]);
});
