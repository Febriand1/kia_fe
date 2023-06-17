document.getElementById("loginForm").addEventListener("submit", loginUser);

function loginUser(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var target_url = "https://ws-nilai.herokuapp.com/insadmin";

  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  var requestOptions = {
    method: "DELETE",
    body: formData,
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Login success
        document.getElementById("message").innerHTML = "Login successful!";
        // Redirect to another page
        window.location.href = "/dashboard";
      } else {
        // Login failed
        document.getElementById("message").innerHTML = "Invalid username or password";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
