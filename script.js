{
    let optionImages = document.querySelectorAll(".options img");
    let statusText = document.getElementById("playing");
    let audioPlayer = document.getElementById("audio-player");

    optionImages.forEach(function(img) {

        img.style.cursor = "pointer";

        img.addEventListener("click", function() {

            let artist = img.dataset.artist;
            let song = img.dataset.song || "a song";
            let music = img.dataset.src;

            statusText.textContent = "Loading " + song + " by " + artist;

            audioPlayer.src = music;
            audioPlayer.load();

            audioPlayer.play().then(function() {
                statusText.textContent = "Playing " + song + " by " + artist;
            }).catch(function() {
                statusText.textContent = "Could not play the song. Check the music file path!";
            });

        });

    });
}