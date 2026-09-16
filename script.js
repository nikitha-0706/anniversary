const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");


/* =========================
   FORCE MUSIC FILE
========================= */

music.src = "./anniversary-song.mp3";

music.load();


/* =========================
   PLAY / PAUSE
========================= */

musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(function () {

                musicButton.textContent = "❚❚";

            })
            .catch(function (error) {

                console.log("Music Error:", error);

                alert(
                    "Song play aagala 😢\n\n" +
                    "Please check:\n\n" +
                    "music folder → anniversary-song.mp3"
                );

            });

    } else {

        music.pause();

        musicButton.textContent = "▶";

    }

});


/* =========================
   SONG ENDED
========================= */

music.addEventListener("ended", function () {

    musicButton.textContent = "▶";

});
