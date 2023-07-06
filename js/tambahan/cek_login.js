// Periksa status login saat halaman dimuat
window.addEventListener("DOMContentLoaded", function () {
  if (!isLoggedIn() && !isLoginPage()) {
    window.location.href = "/";
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

// Fungsi untuk memeriksa apakah halaman saat ini adalah halaman login
function isLoginPage() {
  const currentPage = window.location.pathname;
  const loginPage = "/login_admin.html";
  return currentPage === loginPage;
}
