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
      if (result.status) {
        alert(result.message);
        console.log(result.status);
        window.location.href = "index.html";
      } else {
        console.log(result.status);
        // Menampilkan pesan kesalahan atau notifikasi login tidak valid
        alert("Login tidak valid. Silakan coba lagi.");
      }
    })
    .catch((error) => console.log("Error:", error));
}
document.getElementById("loginForm").addEventListener("submit", loginAdmin);
