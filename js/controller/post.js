import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue, setValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

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

function updateGradeAndSkala() {
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
  namagradeInput.value = hasilPerhitungan.rataRata.toFixed(2);
  skalaInput.value = hasilPerhitungan.skala;
}

function pushData() {
  let data = {
    alltugas: {
      tugas1: parseInt(getValue("tugas1")),
      tugas2: parseInt(getValue("tugas2")),
      tugas3: parseInt(getValue("tugas3")),
      tugas4: parseInt(getValue("tugas4")),
      tugas5: parseInt(getValue("tugas5")),
    },
    uts: parseInt(getValue("uts")),
    uas: parseInt(getValue("uas")),
    grade: {
      namagrade: getValue("namagrade"),
      skala: getValue("skala"),
    },
    kategori: {
      nama_mk: getValue("nama_mk"),
      sks: parseInt(getValue("sks")),
      jadwal: {
        jammasuk: getValue("jammasuk"),
        jamkeluar: getValue("jamkeluar"),
        hari: getValue("hari").split(","),
      },
      pengampu: {
        namadosen: getValue("namadosen"),
        nik: getValue("nik"),
        phonenumberd: getValue("phonenumberd"),
      },
    },
    absensi: {
      jumlahkehadiran: parseInt(getValue("jumlahkehadiran")),
      biodata: {
        nama: getValue("nama"),
        npm: parseInt(getValue("npm")),
        phonenumber: getValue("phonenumber"),
      },
    },
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);

const inputElements = document.querySelectorAll("input[type='text'], input[type='number']");
inputElements.forEach((input) => {
  input.addEventListener("input", updateGradeAndSkala);
});
