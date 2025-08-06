// Ambil semua elemen karakter
const characters = document.querySelectorAll('.character');

characters.forEach(character => {
  character.addEventListener('click', () => {
    const name = character.dataset.name;

    // Simpan nama ke localStorage
    localStorage.setItem('selectedCharacter', name);

    // Pindah ke map.html
    window.location.href = 'map.html';
  });
});
