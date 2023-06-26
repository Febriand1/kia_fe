import { getValue, setValue } from "https://bukulapak.github.io/element/process.js";

const namagradeInput = getValue("namagrade");
const skalaInput = getValue("skala");

function hitungRataRata(tugas, uts, uas) {
  const jumlahTugas = tugas.tugas1 + tugas.tugas2 + tugas.tugas3 + tugas.tugas4 + tugas.tugas5;
  const totalNilai = jumlahTugas + uts + uas;
  const rataRata = totalNilai / 7;

  let skala;
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

  return { rataRata, skala };
}

export function updateGradeAndSkala() {
  const tugas1 = parseInt(getValue("tugas1"));
  const tugas2 = parseInt(getValue("tugas2"));
  const tugas3 = parseInt(getValue("tugas3"));
  const tugas4 = parseInt(getValue("tugas4"));
  const tugas5 = parseInt(getValue("tugas5"));
  const uts = parseInt(getValue("uts"));
  const uas = parseInt(getValue("uas"));

  // Menghitung rata-rata
  const hasilPerhitungan = hitungRataRata({ tugas1, tugas2, tugas3, tugas4, tugas5 }, uts, uas);

  // Mengisi nilai pada form namagrade dan skala
  setValue("namagrade", hasilPerhitungan.skala);
  setValue("skala", hasilPerhitungan.rataRata.toFixed(2));
  // namagradeInput.value = hasilPerhitungan.rataRata.toFixed(2);
  // skalaInput.value = hasilPerhitungan.skala;
}
