// --------------------- LOGIN -----------------------
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Data login yang benar
const benarNama = "Andini Novela Putri";
const benarPass = "28 Nov 2006";

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = usernameInput.value.trim();
  const pass = passwordInput.value.trim();

  // Validasi kosong
  if (nama === "" || pass === "") {
    Swal.fire({
      icon: "warning",
      title: "Waduh!",
      text: "Nama dan Password harus diisi!",
      confirmButtonColor: "#FF69B4",
      background: "#FFF0F5",
    });
    return;
  }

  // Cek login
  if (nama === benarNama && pass === benarPass) {
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Login berhasil! Tunggu sebentar... 🎉",
      confirmButtonColor: "#FF69B4",
      background: "#FFF0F5",
      timer: 1500,
      showConfirmButton: false,
    });
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    // Pesan error spesifik
    if (nama !== benarNama && pass !== benarPass) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama dan Password salah! Coba lagi ya 😊",
        confirmButtonColor: "#FF69B4",
        background: "#FFF0F5",
      });
    } else if (nama !== benarNama) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama salah! Cek lagi namamu yang di atas 👆",
        confirmButtonColor: "#FF69B4",
        background: "#FFF0F5",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password salah! Cek lagi tanggal lahirmu yang di atas 👆",
        confirmButtonColor: "#FF69B4",
        background: "#FFF0F5",
      });
    }
  }
});

// ------------------- CONFETTI LOVE --------------------
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

// Set ukuran canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

// Buat confetti
function createConfetti() {
  confetti = []; // Reset array
  const jumlahConfetti = window.innerWidth < 768 ? 15 : 25;

  for (let i = 0; i < jumlahConfetti; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 12 + 8,
      speed: Math.random() * 2 + 1,
      drift: Math.random() * 0.5 - 0.25,
    });
  }
}

// Gambar confetti
function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c) => {
    ctx.fillStyle = "#FF69B4";
    ctx.font = `${c.size}px Arial`;
    ctx.fillText("❤", c.x, c.y);

    c.y += c.speed;
    c.x += c.drift;

    // Reset posisi jika keluar canvas
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }

    if (c.x < 0 || c.x > canvas.width) {
      c.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();

// Re-create confetti saat resize
window.addEventListener("resize", createConfetti);

