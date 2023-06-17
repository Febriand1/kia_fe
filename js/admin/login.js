// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   // Lakukan validasi login di sini
//   if (username === "admin" && password === "password") {
//     // Jika login berhasil, arahkan pengguna ke halaman index.html
//     window.location.href = "index.html";
//   } else {
//     // Jika login gagal, tampilkan pesan kesalahan
//     document.getElementById("loginErrorMessage").classList.remove("hidden");
//   }
// });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var target_url = "https://ws-nilai.herokuapp.com/admin";

  var requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect ke halaman setelah login berhasil
        window.location.href = "index.html";
      } else {
        // Tampilkan pesan kesalahan
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
