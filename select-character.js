// Tangkap semua elemen karakter
const characters = document.querySelectorAll('.character');

characters.forEach(character => {
  character.addEventListener('click', () => {
    const name = character.dataset.name;

    // Simpan karakter yang dipilih ke localStorage
    localStorage.setItem('selectedCharacter', name);

    // Tambahkan efek visual (jika perlu)
    characters.forEach(c => c.classList.remove('selected'));
    character.classList.add('selected');

    // Tunggu sebentar lalu pindah ke halaman map.html
    setTimeout(() => {
      window.location.href = 'map.html';
    }, 500);
  });
});
