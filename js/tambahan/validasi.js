export function validasiForm(event) {
  var nama = document.getElementById("nama").value;
  var errorText = document.getElementById("errorText");

  if (nama === "") {
    errorText.textContent = "nama tidak boleh kosong!";
    event.preventDefault();
  } else {
    errorText.textContent = "";
  }
}
