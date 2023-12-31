import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";
import { validasiInput } from "../tambahan/validasi.js";

function pushData() {
  if (!validasiInput()) {
    return;
  }
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
  putData(urlPUT, data, AmbilResponse);
}

onClick("button1", pushData);
