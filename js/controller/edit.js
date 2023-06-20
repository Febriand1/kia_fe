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
  });
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
  setValue("namagrade", hasilPerhitungan.skala);
  setValue("skala", hasilPerhitungan.rataRata.toFixed(2));
}

const inputElements = document.querySelectorAll('input[type="text"], input[type="number"]');
inputElements.forEach((input) => {
  input.addEventListener("input", updateGradeAndSkala);
});

function getNestedValue(obj, path, index, property) {
  const value = path.split(".").reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    return value[index][property];
  }

  return value;
}
