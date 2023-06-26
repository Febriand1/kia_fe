import { getValue } from "https://bukulapak.github.io/element/process.js";

export function validasiForm(event) {
  event.preventDefault();

  var nama = getValue("nama");
  var namaError = getValue("namaError");

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
