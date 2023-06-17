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
      switch (result.status) {
        case true:
          alert(result.message);
          window.location.href = "index.html";
          break;
        case false:
          alert(result.message);
          break;
        default:
          console.log("Unexpected status:", result.status);
      }
    })
    .catch((error) => console.log("Error:", error));
}
