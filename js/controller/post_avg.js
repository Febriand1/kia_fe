export function hitungRataRata(alltugas, uts, uas) {
  let tugas1 = parseInt(alltugas.tugas1);
  let tugas2 = parseInt(alltugas.tugas2);
  let tugas3 = parseInt(alltugas.tugas3);
  let tugas4 = parseInt(alltugas.tugas4);
  let tugas5 = parseInt(alltugas.tugas5);
  let uts = parseInt(uts);
  let uas = parseInt(uas);

  let jumlahTugas = tugas1 + tugas2 + tugas3 + tugas4 + tugas5;
  let totalNilai = jumlahTugas + uts + uas;
  let rataRata = totalNilai / 7;

  let namagrade = "";
  if (rataRata >= 80) {
    namagrade = "A";
  } else if (rataRata >= 70) {
    namagrade = "B";
  } else if (rataRata >= 60) {
    namagrade = "C";
  } else if (rataRata >= 50) {
    namagrade = "D";
  } else {
    namagrade = "E";
  }

  return {
    rataRata: rataRata,
    namagrade: namagrade,
  };
}
