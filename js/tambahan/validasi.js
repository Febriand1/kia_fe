import { getValue } from "https://bukulapak.github.io/element/process.js";

export function validasiForm() {
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
    isNaN(tugas1) ||
    isNaN(tugas2) ||
    isNaN(tugas3) ||
    isNaN(tugas4) ||
    isNaN(tugas5) ||
    isNaN(uts) ||
    isNaN(uas) ||
    namagrade.trim() === "" ||
    skala.trim() === "" ||
    nama_mk.trim() === "" ||
    isNaN(sks) ||
    jammasuk.trim() === "" ||
    jamkeluar.trim() === "" ||
    hari.trim() === "" ||
    namadosen.trim() === "" ||
    nik.trim() === "" ||
    phonenumberd.trim() === "" ||
    isNaN(jumlahkehadiran) ||
    nama.trim() === "" ||
    isNaN(npm) ||
    phonenumber.trim() === ""
  ) {
    alert("Please fill in all the required fields.");
    return false;
  }
  return true;
}
