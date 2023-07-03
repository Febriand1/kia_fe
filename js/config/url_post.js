export let urlPOST = "https://ws-nilai.herokuapp.com/insnilai";

export function ambilResponse(result) {
  console.log(result); //menampilkan response API pada console
  confirm(result.message); //menampilkan response API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}
