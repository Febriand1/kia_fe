export let urlPOST = "https://ws-nilai.herokuapp.com/insnilai";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}
