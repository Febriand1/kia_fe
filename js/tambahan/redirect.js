// Memeriksa apakah pengguna telah terautentikasi
function checkAuthentication() {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    // Jika tidak ada token, arahkan pengguna ke halaman login
    window.location.href = "login_admin.html";
  }
}

// Panggil fungsi checkAuthentication saat halaman selesai dimuat
window.addEventListener("DOMContentLoaded", checkAuthentication);
