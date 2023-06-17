document.getElementById("loginForm").addEventListener("submit", loginAdmin);

function loginAdmin(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var target_url = "https://ws-nilai.herokuapp.com/loginadmin";

  var data = {
    username: username,
    password: password,
  };

  fetch(target_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        alert(result.message);
        window.location.href = "index.html";
      }
      // else {
      //   alert(result.message);
      // }
      // location.reload();
    })
    .catch((error) => console.log("Error:", error));
}
// .then(function (response) {
//   if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error("Login failed");
//   }
// })
// .then(function (data) {
//   if (data.success) {
//     // Login berhasil
//     document.getElementById("message").innerHTML = "Login berhasil!";
//     // Redirect ke halaman admin
//     window.location.href = "../../template/index.html";
//   } else {
//     // Login gagal
//     document.getElementById("message").innerHTML = "Username atau password salah";
//   }
// })
// .catch(function (error) {
//   console.error(error);
//   document.getElementById("message").innerHTML = "Terjadi kesalahan saat login";
// });
