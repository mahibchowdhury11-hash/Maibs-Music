{
    const optionImages = document.querySelectorAll(".options img");
    const statusText = document.getElementById("playing");
    const audioPlayer = document.getElementById("audio-player");

    if (optionImages.length > 0 && statusText) {
        optionImages.forEach((img) => {
            img.style.cursor = "pointer";

            img.addEventListener("click", () => {
                const artist = img.dataset.artist || img.alt || "Artist";
                const song = img.dataset.song || "a song";

                statusText.textContent = `Playing "${song}" by ${artist}...`;

                if (audioPlayer && img.dataset.src) {
                    audioPlayer.src = img.dataset.src;
                    audioPlayer.play().catch(() => {});
                }
            });
        });
    }
}