export let urlLOGIN = "https://ws-nilai.herokuapp.com/loginadmin";

export function AmbilResponse(result) {
  console.log(result.status);
  alert(result.message);
  if (result.status === 200) {
    window.location.href = "index.html";
  }
}
