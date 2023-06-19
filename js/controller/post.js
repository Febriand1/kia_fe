import { getValue, setValue } from "https://bukulapak.github.io/element/process.js";
import { hitungRataRata } from "./post_avg.js";
import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

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

// Mendapatkan referensi ke elemen form
const tugas1Input = document.getElementById("tugas1");
const tugas2Input = document.getElementById("tugas2");
const tugas3Input = document.getElementById("tugas3");
const tugas4Input = document.getElementById("tugas4");
const tugas5Input = document.getElementById("tugas5");
const utsInput = document.getElementById("uts");
const uasInput = document.getElementById("uas");
const namagradeInput = document.getElementById("namagrade");
const skalaInput = document.getElementById("skala");

// Menambahkan event listener ke form tugas1 sampai tugas5, uts, dan uas
[tugas1Input, tugas2Input, tugas3Input, tugas4Input, tugas5Input, utsInput, uasInput].forEach((input) => {
  input.addEventListener("input", updateGradeAndSkala);
});

// Fungsi untuk mengupdate nilai pada form namagrade dan skala
function updateGradeAndSkala() {
  // Mendapatkan nilai dari form tugas1 sampai tugas5, uts, dan uas
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

// import { postData } from "https://bukulapak.github.io/api/process.js";
// import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
// import { urlPOST, AmbilResponse } from "../config/url_post.js";

// function pushData() {
//   let data = {
//     alltugas: {
//       tugas1: parseInt(getValue("tugas1")),
//       tugas2: parseInt(getValue("tugas2")),
//       tugas3: parseInt(getValue("tugas3")),
//       tugas4: parseInt(getValue("tugas4")),
//       tugas5: parseInt(getValue("tugas5")),
//     },
//     uts: parseInt(getValue("uts")),
//     uas: parseInt(getValue("uas")),
//     grade: {
//       namagrade: getValue("namagrade"),
//       skala: getValue("skala"),
//     },
//     kategori: {
//       nama_mk: getValue("nama_mk"),
//       sks: parseInt(getValue("sks")),
//       jadwal: {
//         jammasuk: getValue("jammasuk"),
//         jamkeluar: getValue("jamkeluar"),
//         hari: getValue("hari").split(","),
//       },
//       pengampu: {
//         namadosen: getValue("namadosen"),
//         nik: getValue("nik"),
//         phonenumberd: getValue("phonenumberd"),
//       },
//     },
//     absensi: {
//       jumlahkehadiran: parseInt(getValue("jumlahkehadiran")),
//       biodata: {
//         nama: getValue("nama"),
//         npm: parseInt(getValue("npm")),
//         phonenumber: getValue("phonenumber"),
//       },
//     },
//   };
//   postData(urlPOST, data, AmbilResponse);
// }

// onClick("button", pushData);
