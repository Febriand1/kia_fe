// Function to display the login form initially
function displayLoginForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.style.display = "block";
}

// Function to handle the login submission
function loginAdmin(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
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

// Add event listener to the window load event
window.addEventListener("load", function () {
  displayLoginForm(); // Display the login form initially

  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", loginAdmin);
});
