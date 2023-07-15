function checkAuthentication() {
  var token = localStorage.getItem("jwtToken");

  if (!token) {
    redirectToLoginAdmin();
  }

  var urlAuth = "https://ws-nilai.herokuapp.com/auth";
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(urlAuth, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      if (result === "authenticated") {
        // User is authenticated, proceed with the current page
        // Add your logic here to handle the authenticated state
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
    window.location.href = "../login_admin.html";
  } else {
    // Redirect to login_admin.html for all other pages
    window.location.href = "login_admin.html";
  }
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;
