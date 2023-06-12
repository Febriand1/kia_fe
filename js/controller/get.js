import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTableNilai(results) {
  results.forEach(isiRow);
  console.log(results);
}

function isiRow(value) {
  let content = isiTabel
    .replace("#NPM#", value.absensi.biodata.npm)
    .replace("#NAMA#", value.absensi.biodata.nama)
    .replace("#NOHP#", value.absensi.biodata ? value.absensi.biodata.phonenumber : "#NOHP#")
    .replace("#MATAKULIAH#", value.kategori.nama_mk)
    .replace("#SKS#", value.kategori.sks)
    .replace("#NIK#", value.kategori.pengampu ? value.kategori.pengampu.nik : "#NIK#")
    .replace("#DOSEN#", value.kategori.pengampu ? value.kategori.pengampu.namadosen : "#DOSEN#")
    .replace("#NOHPD#", value.kategori.pengampu.phonenumberd)
    .replace("#JAMMASUK#", value.kategori.jadwal ? value.kategori.jadwal.jammasuk : "#JAMMASUK#")
    .replace("#JAMKELUAR#", value.kategori.jadwal.jamkeluar)
    .replace("#HARI#", value.kategori.jadwal.hari)
    .replace("#HADIR#", value.absensi.jumlahkehadiran)
    .replace("#TUGAS1#", value.alltugas.tugas1)
    .replace("#TUGAS2#", value.alltugas.tugas2)
    .replace("#TUGAS3#", value.alltugas.tugas3)
    .replace("#TUGAS4#", value.alltugas.tugas4)
    .replace("#TUGAS5#", value.alltugas.tugas5)
    .replace("#UTS#", value.uts)
    .replace("#UAS#", value.uts)
    .replace("#GRADE#", value.grade.namagrade)
    .replace("#SKALA#", value.grade.skala)
    .replace("#IDEDIT#", value._id)
    .replace("#DELETE#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
