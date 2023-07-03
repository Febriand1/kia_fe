export function validasiForm(event) {
  event.preventDefault();

  let tugas = {
    tugas1: document.getElementById("tugas1").value,
    tugas2: document.getElementById("tugas2").value,
    tugas3: document.getElementById("tugas3").value,
    tugas4: document.getElementById("tugas4").value,
    tugas5: document.getElementById("tugas5").value,
    uts: document.getElementById("uts").value,
    uas: document.getElementById("uas").value,
  };

  var nama = document.getElementById("nama").value;
  var npm = document.getElementById("npm").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var jumlahkehadiran = document.getElementById("jumlahkehadiran").value;
  var nama_mk = document.getElementById("nama_mk").value;
  var sks = document.getElementById("sks").value;
  var nik = document.getElementById("nik").value;
  var namadosen = document.getElementById("namadosen").value;
  var phonenumberd = document.getElementById("phonenumberd").value;
  var jammasuk = document.getElementById("jammasuk").value;
  var jamkeluar = document.getElementById("jamkeluar").value;
  var hari = document.getElementById("hari").value;
  var namagrade = document.getElementById("namagrade").value;
  var skala = document.getElementById("skala").value;

  var errorText = document.getElementById("errorText");

  if (nama === "") {
    errorText.textContent = "Nama tidak boleh kosong!";
  }
  if (npm === "") {
    errorText.textContent = "NPM tidak boleh kosong!";
  }
  if (phonenumber === "") {
    errorText.textContent = "No.HP Mahasiswa tidak boleh kosong!";
  }
  if (jumlahkehadiran === "") {
    errorText.textContent = "Jumlah Kehadiran tidak boleh kosong!";
  }
  if (nama_mk === "") {
    errorText.textContent = "Matakuliah tidak boleh kosong!";
  }
  if (sks === "") {
    errorText.textContent = "SKS tidak boleh kosong!";
  }
  if (nik === "") {
    errorText.textContent = "NIK tidak boleh kosong!";
  }
  if (namadosen === "") {
    errorText.textContent = "Dosen tidak boleh kosong!";
  }
  if (phonenumberd === "") {
    errorText.textContent = "No.HP Dosen tidak boleh kosong!";
  }
  if (jammasuk === "") {
    errorText.textContent = "Jam Masuk tidak boleh kosong!";
  }
  if (jamkeluar === "") {
    errorText.textContent = "Jam Keluar tidak boleh kosong!";
  }
  if (hari === "") {
    errorText.textContent = "Hari tidak boleh kosong!";
  }
  if (tugas === "") {
    errorText.textContent = "Tugas tidak boleh kosong!";
  }
  if (namagrade === "") {
    errorText.textContent = "Grade tidak boleh kosong!";
  }
  if (skala === "") {
    errorText.textContent = "Rata-Rata tidak boleh kosong!";
  } else {
    errorText.textContent = "";
  }
}

document.getElementById("formInsert").addEventListener("submit", validasiForm);
