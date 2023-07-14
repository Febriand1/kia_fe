fetch("https://ws-nilai.herokuapp.com/matkul")
  .then((response) => response.json())
  .then((result) => {
    const matkulDropdown = document.getElementById("nama_mk");
    const sksInput = document.getElementById("sks");
    const jadwalInput = {
      jammasuk: document.getElementById("jammasuk"),
      jamkeluar: document.getElementById("jamkeluar"),
      hari: document.getElementById("hari"),
    };
    const pengampuInput = {
      namadosen: document.getElementById("namadosen"),
      nik: document.getElementById("nik"),
      phonenumberd: document.getElementById("phonenumberd"),
    };

    // Mengisi dropdown dengan opsi-opsi dari data API
    result.forEach((item) => {
      const option = document.createElement("option");
      option.text = item.nama_mk; // Teks opsi
      option.value = item.nama_mk; // Nilai opsi
      matkulDropdown.appendChild(option);
    });

    // Mendengarkan event change pada dropdown
    matkulDropdown.addEventListener("change", () => {
      const selectedOption = matkulDropdown.options[matkulDropdown.selectedIndex];
      const selectedValue = selectedOption.value;

      // Cari data matkul yang sesuai dengan nilai yang dipilih
      const selectedMatkul = result.find((item) => item.nama_mk === selectedValue);

      // Mengisi nilai sks pada input
      if (selectedMatkul) {
        sksInput.value = selectedMatkul.sks;

        // Mengisi nilai jadwal pada input
        jadwalInput.jammasuk.value = selectedMatkul.jadwal.jammasuk;
        jadwalInput.jamkeluar.value = selectedMatkul.jadwal.jamkeluar;
        jadwalInput.hari.value = selectedMatkul.jadwal.hari[0];

        // Mengisi nilai pengampu pada input
        pengampuInput.namadosen.value = selectedMatkul.pengampu.namadosen;
        pengampuInput.nik.value = selectedMatkul.pengampu.nik;
        pengampuInput.phonenumberd.value = selectedMatkul.pengampu.phonenumberd;
      } else {
        sksInput.value = "";
        jadwalInput.jammasuk.value = "";
        jadwalInput.jamkeluar.value = "";
        jadwalInput.hari.value = "";
        pengampuInput.namadosen.value = "";
        pengampuInput.nik.value = "";
        pengampuInput.phonenumberd.value = "";
      }
    });
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
