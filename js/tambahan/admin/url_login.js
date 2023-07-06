export let urlLOGIN = "https://ws-nilai.herokuapp.com/loginadmin";

export function AmbilResponse(result) {
  console.log(result.status);
  if (result.status === 200) {
    alert(result.data.message);
    const token = result.data.token;
    localStorage.setItem("jwtToken", token);
    window.location.href = "index.html";
  } else {
    alert(result.data.message);
  }
}
