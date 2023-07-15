function checkAuthentication() {
  var urlAuth = "https://ws-nilai.herokuapp.com/auth";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("jwtToken");
  var raw = JSON.stringify({
    tokenstring: token,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  if (!token) {
    redirectToLoginAdmin();
  } else {
    // Make a GET request to the autentikasi endpoint
    fetch(urlAuth, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
        } else {
          redirectToLoginAdmin();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
}

function redirectToLoginAdmin() {
  alert("Session expired. Please log in again.");
  // Redirect to the appropriate sign-in page
  const currentPath = window.location.pathname.split("/").pop();
  if (currentPath === "index.html") {
    window.location.href = "login_admin.html";
  } else {
    // Redirect to login_admin.html for all other pages
    window.location.href = "login_admin.html";
  }
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;
