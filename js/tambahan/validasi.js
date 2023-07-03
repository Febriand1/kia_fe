export function validasiForm(event) {
  event.preventDefault();

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
  var tugas1 = document.getElementById("tugas1").value;
  var tugas2 = document.getElementById("tugas2").value;
  var tugas3 = document.getElementById("tugas3").value;
  var tugas4 = document.getElementById("tugas4").value;
  var tugas5 = document.getElementById("tugas5").value;
  var uts = document.getElementById("uts").value;
  var uas = document.getElementById("uas").value;
  var namagrade = document.getElementById("namagrade").value;
  var skala = document.getElementById("skala").value;

  if (
    nama != "" &&
    npm != "" &&
    phonenumber != "" &&
    jumlahkehadiran != "" &&
    nama_mk != "" &&
    sks != "" &&
    nik != "" &&
    namadosen != "" &&
    phonenumberd != "" &&
    jammasuk != "" &&
    jamkeluar != "" &&
    hari != "" &&
    tugas1 != "" &&
    tugas2 != "" &&
    tugas3 != "" &&
    tugas4 != "" &&
    tugas5 != "" &&
    uts != "" &&
    uas != "" &&
    namagrade != "" &&
    skala != ""
  ) {
    console.log("Form is valid");
    return true;
  }
  return false;
}
