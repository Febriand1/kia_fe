function checkAuthentication() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("jwtToken");
  var raw = JSON.stringify({
    token: token,
  });

  var urlAuth = "https://ws-nilai.herokuapp.com/auth";

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  if (!token) {
    redirectToSignIn();
  } else {
    // Make a GET request to the autentikasi endpoint
    fetch(urlAuth, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
        } else {
          redirectToSignIn();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        redirectToSignIn();
      });
  }
}

function redirectToLoginAdmin() {
  alert("Session expired. Please log in again.");
  // Redirect to the appropriate sign-in page
  const currentPath = window.location.pathname.split("/").pop();
  if (currentPath === "index.html") {
    window.location.href = "../login_admin.html";
  } else {
    // Redirect to login_admin.html for all other pages
    window.location.href = "login_admin.html";
  }
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;
