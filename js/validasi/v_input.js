export function validateForm() {
  // Mendapatkan nilai input dari elemen
  var nama = document.getElementById("nama").value;

  // Mendapatkan elemen untuk menampilkan pesan kesalahan
  var errorContainer = document.getElementById("error-container");
  var errorMessage = document.getElementById("error-message");

  // Menghapus pesan kesalahan sebelumnya (jika ada)
  errorContainer.style.display = "none";

  // Validasi nama
  if (nama == "") {
    errorMessage.innerHTML = "Nama harus diisi";
    errorContainer.style.display = "block";
    return false;
  }

  // Jika semua validasi berhasil
  return true;
}
