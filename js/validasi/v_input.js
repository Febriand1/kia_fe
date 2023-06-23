function validateForm() {
  // Mendapatkan nilai input dari form
  var nama = document.forms["myForm"]["nama"].value;
  var npm = document.forms["myForm"]["npm"].value;
  var nohpm = document.forms["myForm"]["phonenumber"].value;
  var hadir = document.forms["myForm"]["jumlahkehadiran"].value;
  var matkul = document.forms["myForm"]["nama_mk"].value;
  var sks = document.forms["myForm"]["sks"].value;
  var nik = document.forms["myForm"]["nik"].value;
  var dosen = document.forms["myForm"]["namadosen"].value;
  var nohpd = document.forms["myForm"]["phonenumberd"].value;
  var jammasuk = document.forms["myForm"]["jammasuk"].value;
  var jamkeluar = document.forms["myForm"]["jamkeluar"].value;
  var hari = document.forms["myForm"]["hari"].value;
  var tugas1 = document.forms["myForm"]["tugas1"].value;
  var tugas2 = document.forms["myForm"]["tugas2"].value;
  var tugas3 = document.forms["myForm"]["tugas3"].value;
  var tugas4 = document.forms["myForm"]["tugas4"].value;
  var tugas5 = document.forms["myForm"]["tugas5"].value;
  var uts = document.forms["myForm"]["uts"].value;
  var uas = document.forms["myForm"]["uas"].value;
  var grade = document.forms["myForm"]["grade"].value;
  var rata_rata = document.forms["myForm"]["skala"].value;

  // Melakukan validasi
  if (nama == "") {
    alert("Harus diisi");
    return false;
  }

  if (npm == "") {
    alert("Harus diisi");
    return false;
  }
  if (nohpm == "") {
    alert("Harus diisi");
    return false;
  }
  if (hadir == "") {
    alert("Harus diisi");
    return false;
  }
  if (matkul == "") {
    alert("Harus diisi");
    return false;
  }
  if (sks == "") {
    alert("Harus diisi");
    return false;
  }
  if (nik == "") {
    alert("Harus diisi");
    return false;
  }
  if (dosen == "") {
    alert("Harus diisi");
    return false;
  }
  if (nohpd == "") {
    alert("Harus diisi");
    return false;
  }
  if (jammasuk == "") {
    alert("Harus diisi");
    return false;
  }
  if (jamkeluar == "") {
    alert("Harus diisi");
    return false;
  }
  if (hari == "") {
    alert("Harus diisi");
    return false;
  }
  if (tugas1 == "") {
    alert("Harus diisi");
    return false;
  }
  if (tugas2 == "") {
    alert("Harus diisi");
    return false;
  }
  if (tugas3 == "") {
    alert("Harus diisi");
    return false;
  }
  if (tugas4 == "") {
    alert("Harus diisi");
    return false;
  }
  if (tugas5 == "") {
    alert("Harus diisi");
    return false;
  }
  if (uts == "") {
    alert("Harus diisi");
    return false;
  }
  if (uas == "") {
    alert("Harus diisi");
    return false;
  }
  if (grade == "") {
    alert("Harus diisi");
    return false;
  }
  if (rata_rata == "") {
    alert("Harus diisi");
    return false;
  }

  //   if ((nama, npm, nohpm, hadir, matkul, sks, nik, dosen, nohpd, jammasuk, jamkeluar, hari, tugas1, tugas2, tugas3, tugas4, tugas5, uts, uas, grade, rata_rata == "")) {
  //     alert("Harus diisi");
  //     return false;
  //   }
}
