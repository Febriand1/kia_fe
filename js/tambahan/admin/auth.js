function checkAuthentication() {
  const token = localStorage.getItem("jwtToken");
  console.log(token);
  if (!token) {
    redirectToLoginAdmin();
  } else {
    // Make a GET request to the autentikasi endpoint
    fetch("https://ws-nilai.herokuapp.com/auth", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          // User is authenticated, proceed to index.html or auth/antrian.html
        } else {
          redirectToLoginAdmin();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        redirectToLoginAdmin();
      });
  }
}

function redirectToLoginAdmin() {
  console.log(result.status);
  alert(result.message).then(() => {
    // Redirect to the appropriate sign-in page
    const currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "index.html") {
      window.location.href = "login_admin.html";
    } else {
      window.location.href = "login_admin.html";
    }
  });
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;
