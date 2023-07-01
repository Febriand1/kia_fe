export function validasiForm(event) {
  event.preventDefault();
  var nama = document.getElementById("nama").value;
  var errorText = document.getElementById("errorText");

  if (nama === "") {
    errorText.textContent = "nama tidak boleh kosong!";
  } else {
    errorText.textContent = "";
  }
}
document.getElementById("formInsert").addEventListener("button", validasiForm);
