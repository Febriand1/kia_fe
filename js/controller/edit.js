import { updateGradeAndSkala } from "../tambahan/rata-rata.js";
import { validasiForm } from "../tambahan/validasi.js";

export function isiData(results) {
  const inputMapping = [
    { id: "tugas1", path: "alltugas.tugas1" },
    { id: "tugas2", path: "alltugas.tugas2" },
    { id: "tugas3", path: "alltugas.tugas3" },
    { id: "tugas4", path: "alltugas.tugas4" },
    { id: "tugas5", path: "alltugas.tugas5" },
    { id: "uts", path: "uts" },
    { id: "uas", path: "uas" },
    { id: "namagrade", path: "grade.namagrade" },
    { id: "skala", path: "grade.skala" },
    { id: "nama_mk", path: "kategori.nama_mk" },
    { id: "sks", path: "kategori.sks" },
    { id: "jammasuk", path: "kategori.jadwal.jammasuk" },
    { id: "jamkeluar", path: "kategori.jadwal.jamkeluar" },
    { id: "hari", path: "kategori.jadwal.hari" },
    { id: "namadosen", path: "kategori.pengampu.namadosen" },
    { id: "nik", path: "kategori.pengampu.nik" },
    { id: "phonenumberd", path: "kategori.pengampu.phonenumberd" },
    { id: "jumlahkehadiran", path: "absensi.jumlahkehadiran" },
    { id: "nama", path: "absensi.biodata.nama" },
    { id: "npm", path: "absensi.biodata.npm" },
    { id: "phonenumber", path: "absensi.biodata.phonenumber" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
    if (id.startsWith("tugas") || id === "uts" || id === "uas") {
      inputElement.addEventListener("input", updateGradeAndSkala);
    }
    if (validasiForm()) {
      return;
    }
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path.split(".").reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    return value[index][property];
  }

  return value;
}

const inputElements = document.querySelectorAll('input[type="text"], input[type="number"]');
inputElements.forEach((input) => {
  input.addEventListener("input", updateGradeAndSkala);
});
