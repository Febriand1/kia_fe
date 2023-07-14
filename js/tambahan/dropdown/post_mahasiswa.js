fetch("https://ws-nilai.herokuapp.com/mhs")
  .then((response) => response.json())
  .then((result) => {
    const namaDropdown = document.getElementById("nama");
    const npmInput = document.getElementById("npm");
    const phoneNumberInput = document.getElementById("phonenumber");

    // Mengisi dropdown dengan opsi-opsi dari data API
    result.forEach((item) => {
      const option = document.createElement("option");
      option.text = item.nama; // Teks opsi
      option.value = item._id; // Nilai opsi
      namaDropdown.appendChild(option);
    });

    // Mendengarkan event change pada dropdown
    namaDropdown.addEventListener("change", () => {
      const selectedOption = namaDropdown.options[namaDropdown.selectedIndex];
      const selectedValue = selectedOption.value;

      // Cari data mahasiswa yang sesuai dengan nilai yang dipilih
      const selectedMahasiswa = result.find((item) => item._id === selectedValue);

      // Mengisi nilai npm dan no.hp pada input
      if (selectedMahasiswa) {
        npmInput.value = selectedMahasiswa.npm;
        phoneNumberInput.value = selectedMahasiswa.phonenumber;
      } else {
        npmInput.value = "";
        phoneNumberInput.value = "";
      }
    });
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
