fetch("https://ws-nilai.herokuapp.com/mhs")
  .then((response) => response.json())
  .then((result) => {
    const nama = document.getElementById("nama");
    // Mengisi dropdown dengan opsi-opsi dari data API
    result.forEach((mhs) => {
      const option = document.createElement("option");
      option.text = mhs.nama; // Teks opsi
      option.value = mhs._id; // Nilai opsi
      option.value = mhs.npm; // Nilai opsi
      option.value = mhs.phonenumber; // Nilai opsi

      nama.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
