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
        window.location.href = "https://febriand1.github.io/kia_fe/template/login_admin.html/index.html";
      } else {
        alert(result.message);
      }
    })
    .catch((error) => console.log("Error:", error));
}
