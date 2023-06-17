document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var data = {
    username: username,
    password: password,
  };

  fetch("https://ws-nilai.herokuapp.com/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        window.location.href = "index.html"; // Redirect ke halaman setelah login berhasil
      } else {
        document.getElementById("loginErrorMessage").style.display = "block";
      }
    })
    .catch((error) => console.error("Error:", error));
});
