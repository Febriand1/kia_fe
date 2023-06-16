//mendapatkan paramerter dari url
const urlParams = new URLSearchParams(window.location.search);
const nilaiId = urlParams.get("nilaiId");

export let urlPUT = "https://ws-nilai.herokuapp.com/updnilai/" + nilaiId;

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}
