function validasiForm() {
  var nama = document.getElementById("nama");
  var namaError = document.getElementById("namaError");

  // Menghapus pesan error sebelumnya
  namaError.innerHTML = "";

  // Validasi form
  if (nama.value === "") {
    nama.classList.add("error");
    namaError.innerHTML = "Nama harus diisi";
  } else {
    nama.classList.remove("error");
  }
}
