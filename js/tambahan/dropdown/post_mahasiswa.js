const dropdown = document.getElementById("nama");
const npmInput = document.getElementById("npm");
const phoneNumberInput = document.getElementById("phonenumber");

dropdown.addEventListener("change", () => {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  const selectedValue = selectedOption.value;

  // Mengambil data mahasiswa dari API berdasarkan pilihan dropdown
  fetch(`https://ws-nilai.herokuapp.com/mhs${selectedValue}`)
    .then((response) => response.json())
    .then((data) => {
      // Mengisi nilai npm dan no.hp berdasarkan data mahasiswa yang diperoleh
      npmInput.value = data.npm;
      phoneNumberInput.value = data.phonenumber;
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
});
