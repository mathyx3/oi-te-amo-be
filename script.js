// =========================
// Tela inicial
// =========================

const intro = document.getElementById("intro");
const content = document.getElementById("content");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    intro.style.display = "none";
    content.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// Revelar lembranças
// =========================

const revealButtons = document.querySelectorAll(".reveal-btn");

revealButtons.forEach(button => {

    button.addEventListener("click", () => {

        const hidden = button.nextElementSibling;

        if(hidden.style.display === "block"){

            hidden.style.display = "none";
            button.textContent = "Revelar";

        }else{

            hidden.style.display = "block";
            button.textContent = "Esconder";

        }

    });

});


// =========================
// Abrir player
// =========================

const openPlayer = document.getElementById("openPlayer");
const musicIntro = document.getElementById("musicIntro");
const spotifyPlayer = document.getElementById("spotifyPlayer");

openPlayer.addEventListener("click", () => {

    musicIntro.style.display = "none";
    spotifyPlayer.style.display = "block";

});


// =========================
// Player
// =========================

const audio = document.getElementById("player");

const playButton = document.getElementById("playButton");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("currentTime");

const duration = document.getElementById("duration");

const albumCover = document.querySelector(".albumCover");


// Play / Pause

playButton.addEventListener("click", () => {

    if(audio.paused){

        audio.play();

        playButton.textContent = "⏸";

        albumCover.style.transform = "rotate(360deg)";
        albumCover.style.transition = "1s";

    }else{

        audio.pause();

        playButton.textContent = "▶";

    }

});


// Atualizar tempo

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

});

audio.addEventListener("timeupdate", () => {

    progress.value = (audio.currentTime / audio.duration) * 100;

    currentTime.textContent = formatTime(audio.currentTime);

});


// Barra

progress.addEventListener("input", () => {

    audio.currentTime = (progress.value / 100) * audio.duration;

});


// Quando terminar

audio.addEventListener("ended", () => {

    playButton.textContent = "▶";

    progress.value = 0;

    albumCover.style.transform = "rotate(0deg)";

});


// Função de tempo

function formatTime(time){

    const minutes = Math.floor(time / 60);

    let seconds = Math.floor(time % 60);

    if(seconds < 10){

        seconds = "0" + seconds;

    }

    return minutes + ":" + seconds;

}
