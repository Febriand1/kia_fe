import { getValue } from "https://bukulapak.github.io/element/process.js";

export function validasiInput() {
  var tugas1 = parseInt(getValue("tugas1"));
  var tugas2 = parseInt(getValue("tugas2"));
  var tugas3 = parseInt(getValue("tugas3"));
  var tugas4 = parseInt(getValue("tugas4"));
  var tugas5 = parseInt(getValue("tugas5"));
  var uts = parseInt(getValue("uts"));
  var uas = parseInt(getValue("uas"));
  var namagrade = getValue("namagrade");
  var skala = getValue("skala");
  var nama_mk = getValue("nama_mk");
  var sks = parseInt(getValue("sks"));
  var jammasuk = getValue("jammasuk");
  var jamkeluar = getValue("jamkeluar");
  var hari = getValue("hari");
  var namadosen = getValue("namadosen");
  var nik = getValue("nik");
  var phonenumberd = getValue("phonenumberd");
  var jumlahkehadiran = parseInt(getValue("jumlahkehadiran"));
  var nama = getValue("nama");
  var npm = parseInt(getValue("npm"));
  var phonenumber = getValue("phonenumber");

  if (
    tugas1.trim() === "" ||
    tugas2.trim() === "" ||
    tugas3.trim() === "" ||
    tugas4.trim() === "" ||
    tugas5.trim() === "" ||
    uts.trim() === "" ||
    uas.trim() === "" ||
    namagrade.trim() === "" ||
    skala.trim() === "" ||
    nama_mk.trim() === "" ||
    sks.trim() === "" ||
    jammasuk.trim() === "" ||
    jamkeluar.trim() === "" ||
    hari.trim() === "" ||
    namadosen.trim() === "" ||
    nik.trim() === "" ||
    phonenumberd.trim() === "" ||
    jumlahkehadiran.trim() === "" ||
    nama.trim() === "" ||
    npm.trim() === "" ||
    phonenumber.trim() === ""
  ) {
    alert("Data tidak boleh kosong!");
    return false;
  }

  if (!isValidLength(uts, 3)) {
    return false;
  }

  if (!isValidLength(nama_mk, 10)) {
    return false;
  }

  return true;
}

function isValidLength(value, maxLength) {
  return value.length <= maxLength;
}
