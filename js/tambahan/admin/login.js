import { postData } from "https://bukulapak.github.io/api/process.js";
import { getValue } from "https://bukulapak.github.io/element/process.js";
import { urlLOGIN, AmbilResponse } from "./url_login.js";

function loginAdmin(event) {
  event.preventDefault();

  let data = {
    username: getValue("username"),
    password: getValue("password"),
  };
  postData(urlLOGIN, data, AmbilResponse);
}
document.getElementById("loginForm").addEventListener("submit", loginAdmin);
