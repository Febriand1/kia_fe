function checkAuthentication() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = localStorage.getItem("jwtToken");
  var raw = JSON.stringify({
    tokenstring: token,
  });

  if (!token) {
    redirectLoginAdmin();
  } else {
    // Make a GET request to the autentikasi endpoint
    fetch("https://ws-nilai.herokuapp.com/auth", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
        } else {
          redirectLoginAdmin();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        redirectLoginAdmin();
      });
  }
}

function redirectLoginAdmin() {
  alert("Session expired. Please log in again.");
  // Redirect to login.html
  const currentPath = window.location.pathname.split("/").pop();
  if (currentPath === "index.html") {
    window.location.href = "login_admin.html";
  } else {
    window.location.href = "login_admin.html";
  }
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;
