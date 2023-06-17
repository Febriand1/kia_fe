document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var target_url = "https://ws-nilai.herokuapp.com/admin";

  var data = {
    username: username,
    password: password,
  };

  var requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect ke halaman setelah login berhasil
        window.location.href = "../../template/index.html";
      } else {
        // Tampilkan pesan kesalahan
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
