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
    // .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      if (result.status) {
        window.location.href = "index.html";
      } else {
        // Reset form fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      }
    })
    .catch((error) => console.log("Error:", error));
}
