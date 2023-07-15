// Fungsi untuk logout
function logout() {
  // Menampilkan konfirmasi
  var result = confirm("Are you sure you want to logout?");

  if (result) {
    // Menghapus token dari local storage atau cookie
    localStorage.removeItem("jwtToken"); // Jika menggunakan local storage
    localStorage.removeItem("previousPageURL"); // Jika menggunakan local storage
    // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Jika menggunakan cookie

    // Redirect atau lakukan tindakan lain setelah logout
    const currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "index.html") {
      window.location.href = "login_admin.html";
    } else {
      window.location.href = "login_admin.html";
    }
  }
}

document.getElementById("logoutButton").addEventListener("click", logout);
