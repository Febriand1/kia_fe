//mendapatkan paramerter dari url
const urlParams = new URLSearchParams(window.location.search);
const nilaiId = urlParams.get("nilaiId");


export let urlFetch = "https://ws-nilai.herokuapp.com/nilai/" + nilaiId;
