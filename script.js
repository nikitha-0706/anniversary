const music = new Audio("./anniversary-song.mp3");

// Correct music file
const music = new Audio("./music/anniversary-song.mp3");

music.preload = "auto";
music.loop = false;

// Play / Pause
musicButton.onclick = async function () {

    try {

        if (music.paused) {

            await music.play();

            musicButton.textContent = "❚❚";

        } else {

            music.pause();

            musicButton.textContent = "▶";

        }

    } catch (error) {

        console.log("Music Error:", error);

        alert("Song play aagala. Please check the music file.");

    }
};

// When song finishes
music.addEventListener("ended", function () {

    musicButton.textContent = "▶";

});