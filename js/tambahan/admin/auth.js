function checkAuthentication() {
  var token = localStorage.getItem("jwtToken");

  if (!token) {
    redirectToLoginAdmin();
  } else {
    // Token exists, perform local authentication logic here
    if (isValidToken(token)) {
      // Token is valid, proceed with the current page
      // Add your logic here to handle the authenticated state
    } else {
      redirectToLoginAdmin();
    }
  }
}

function isValidToken(token) {
  // Add your token validation logic here
  // You can decode and verify the token's integrity, expiration, or any other custom validation you require
  // Return true if the token is valid, otherwise return false
  return true; // Replace with your actual token validation logic
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
