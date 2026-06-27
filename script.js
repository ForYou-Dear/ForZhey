function bukaSurat() {
    // 1. Putar lagu lokal mp3
    var musik = document.getElementById("backgroundMusic");
    if (musik) {
        musik.play().catch(function(error) {
            console.log("Gagal memutar musik:", error);
        });
    }

    // 2. Ganti tampilan halaman secara instan
    document.getElementById("pembukaan").style.display = "none";
    document.getElementById("kontenUtama").style.display = "block";
}

// Efek dekorasi hati berguguran
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💖', '💝', '💕', '🥰', '😘'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-drop');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
        heart.style.opacity = Math.random();
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        container.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 5000);
    }, 300);
}
window.onload = createHearts;
