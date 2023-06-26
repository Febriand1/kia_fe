function validateForm(event) {

  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");

  // Menghapus pesan error sebelumnya
  nameError.innerHTML = "";

  // Validasi form
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameError.innerHTML = "Nama harus diisi";
  } else {
    nameInput.classList.remove("error");
  }
}
