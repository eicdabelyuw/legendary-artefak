// Ambil semua elemen karakter
const characters = document.querySelectorAll('.character');

characters.forEach(character => {
  character.addEventListener('click', () => {
    const name = character.dataset.name;

    // DEBUG: Cek di console
    console.log("Karakter dipilih:", name);

    // Simpan ke localStorage
    localStorage.setItem('selectedCharacter', name);

    // Pindah ke map.html
    window.location.href = 'map.html';
  });
});
