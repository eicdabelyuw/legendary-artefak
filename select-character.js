document.addEventListener("DOMContentLoaded", function () {
  const characters = document.querySelectorAll(".character");

  characters.forEach((char) => {
    char.addEventListener("click", () => {
      characters.forEach((c) => c.classList.remove("selected"));
      char.classList.add("selected");

      const selectedName = char.getAttribute("data-name");
      alert("Kamu memilih karakter: " + selectedName);
    });
  });
});
