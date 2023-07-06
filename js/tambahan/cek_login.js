// Periksa status login saat halaman dimuat
window.addEventListener("DOMContentLoaded", function () {
  if (!isLoggedIn() && window.location.pathname !== "/login_admin.html") {
    window.location.href = "login_admin.html";
  }
});

// Fungsi untuk memeriksa apakah pengguna sudah login atau belum
function isLoggedIn() {
  const token = localStorage.getItem("jwtToken");
  // Gantikan kondisi di bawah ini dengan validasi sesuai kebutuhan
  if (token) {
    // Pengguna telah login
    return true;
  } else {
    // Pengguna belum login
    return false;
  }
}
