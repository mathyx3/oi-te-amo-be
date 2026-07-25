// Tela inicial

const intro = document.getElementById("intro");
const content = document.getElementById("content");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        content.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

});


// Botões Revelar

const revealButtons = document.querySelectorAll(".reveal-btn");

revealButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if(content.style.display === "block"){

            content.style.display = "none";
            button.textContent = "Revelar 💜";

        }else{

            content.style.display = "block";
            button.textContent = "Esconder 💜";

        }

    });

});
