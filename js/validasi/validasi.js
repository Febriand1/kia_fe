export function validasiForm(data) {
  // Validasi tugas
  for (let tugas in data.alltugas) {
    if (isNaN(data.alltugas[tugas])) {
      alert("Nilai tugas harus berupa angka");
      return false;
    }
  }

  // Validasi nilai UTS dan UAS
  if (isNaN(data.uts) || isNaN(data.uas)) {
    alert("Nilai UTS dan UAS harus berupa angka");
    return false;
  }

  // Validasi nama grade dan skala
  if (data.grade.namagrade.trim() === "" || data.grade.skala.trim() === "") {
    alert("Nama grade dan skala harus diisi");
    return false;
  }

  // Validasi kategori
  if (
    data.kategori.nama_mk.trim() === "" ||
    isNaN(data.kategori.sks) ||
    data.kategori.jadwal.jammasuk.trim() === "" ||
    data.kategori.jadwal.jamkeluar.trim() === "" ||
    data.kategori.jadwal.hari.length === 0 ||
    data.kategori.pengampu.namadosen.trim() === "" ||
    isNaN(data.kategori.pengampu.nik) ||
    data.kategori.pengampu.phonenumberd.trim() === ""
  ) {
    alert("Data kategori harus diisi dengan benar");
    return false;
  }

  // Validasi absensi
  if (isNaN(data.absensi.jumlahkehadiran) || data.absensi.biodata.nama.trim() === "" || isNaN(data.absensi.biodata.npm) || data.absensi.biodata.phonenumber.trim() === "") {
    alert("Data absensi harus diisi dengan benar");
    return false;
  }

  return true;
}
