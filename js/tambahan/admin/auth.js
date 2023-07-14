function checkAuthentication() {
  var token = localStorage.getItem("jwtToken");

  if (!token) {
    redirectToLoginAdmin();
  }

  var urlAuth = "https://ws-nilai.herokuapp.com/auth";
  //   console.log(urlAuth);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", token); // Mengirim token JWT dalam header Authorization

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(urlAuth, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      if (result.status === 200) {
        console.log(result.status);
        // User is authenticated, proceed to index.html or auth/antrian.html
      } else {
        redirectToLoginAdmin();
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function redirectToLoginAdmin() {
  alert("Session expired. Please log in again.");
  // Redirect to the appropriate sign-in page
  const currentPath = window.location.pathname.split("/").pop();
  if (currentPath === "index.html") {
    window.location.href = "login_admin.html";
  } else {
    window.location.href = "login_admin.html";
  }
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;
