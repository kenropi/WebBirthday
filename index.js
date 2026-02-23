const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {

    // Show message
    surprise.classList.remove("hidden");

    // Confetti effect
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Floating hearts
    for (let i = 0; i < 20; i++) {
        createHeart();
    }

    btn.style.display = "none";
});

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.innerText = "🎈";

    // posisi random horizontal
    balloon.style.left = Math.random() * 100 + "vw";

    // durasi random biar natural
    balloon.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 7000);
}