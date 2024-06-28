// Contoh JavaScript untuk interaktivitas

// Fungsi untuk merubah warna latar belakang secara acak
function changeBackgroundColor() {
    const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Event listener untuk merubah warna latar belakang saat tombol diklik
document.addEventListener("DOMContentLoaded", function() {
    const changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.addEventListener("click", changeBackgroundColor);
});
