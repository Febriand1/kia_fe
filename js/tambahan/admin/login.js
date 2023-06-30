import { getValue, container } from "https://bukulapak.github.io/element/process.js";

function loginAdmin(event) {
  event.preventDefault();

  var username = getValue("username");
  var password = getValue("password");
  var target_url = "https://ws-nilai.herokuapp.com/loginadmin";

  var data = {
    username: username,
    password: password,
  };

  var raw = JSON.stringify(data);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      console.log(result.status);
      if (result.status === 200) {
        window.location.href = "index.html";
      }
    })
    .catch((error) => console.log("Error:", error));
}
container("loginForm").addEventListener("submit", loginAdmin);
