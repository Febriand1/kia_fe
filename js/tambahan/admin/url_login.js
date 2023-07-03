export let urlLOGIN = "https://ws-nilai.herokuapp.com/loginadmin";

export function AmbilResponse(result) {
  alert(result.message);
  console.log(result.status);
  if (result.status === 200) {
    window.location.href = "index.html";
  }
}
