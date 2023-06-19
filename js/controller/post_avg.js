export function hitungRataRata(alltugas, uts, uas) {
  let tugas1 = parseInt(alltugas.tugas1);
  let tugas2 = parseInt(alltugas.tugas2);
  let tugas3 = parseInt(alltugas.tugas3);
  let tugas4 = parseInt(alltugas.tugas4);
  let tugas5 = parseInt(alltugas.tugas5);

  let jumlahTugas = tugas1 + tugas2 + tugas3 + tugas4 + tugas5;
  let totalNilai = jumlahTugas + parseInt(uts) + parseInt(uas);
  let rataRata = totalNilai / 7;

  let skala = "";
  if (rataRata >= 80) {
    skala = "A";
  } else if (rataRata >= 70) {
    skala = "B";
  } else if (rataRata >= 60) {
    skala = "C";
  } else if (rataRata >= 50) {
    skala = "D";
  } else {
    skala = "E";
  }

  return {
    rataRata: rataRata,
    skala: skala,
  };
}
