document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Lakukan validasi login di sini
  if (username === "admin" && password === "password") {
    // Jika login berhasil, arahkan pengguna ke halaman index.html
    window.location.href = "index.html";
  } else {
    // Jika login gagal, tampilkan pesan kesalahan
    document.getElementById("loginErrorMessage").classList.remove("hidden");
  }
});
