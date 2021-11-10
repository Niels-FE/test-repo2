const menuButton = document.getElementById('menu-button');
const hiddenMenu = document.getElementById('hidden-menu');
const title = document.querySelector('h1');
const colorInputs = document.querySelectorAll('input');
const colors = {
    white: {
        name: "White",
        class: "bg-white",
    },
    red: {
        name: "Red",
        class: "bg-red",
    },
    blue: {
        name: "Blue",
        class: "bg-blue",
    },
    gold: {
        name: "Gold",
        class: "bg-gold",
    },
    random: {
        name: "Suprise",
        class: "bg-suprise",
    },
};
let currentIntervalColor = "bg-gold";
let currentIntervalName = "Gold";
let menuOpen = false;
let menuClickOpen = false;

menuButton.addEventListener('click', (event) => {
    if (!menuClickOpen) {
        if (!menuOpen) {
            menuClickOpen = true;
            menuOpen = true;
            hiddenMenu.classList.add('transform-translate-open');
        } else {
            menuClickOpen = true;
        }
    } else {
        menuClickOpen = false;
        menuOpen = false;
        hiddenMenu.classList.remove('transform-translate-open');
    }
})
menuButton.addEventListener('mouseenter', () => {
    if (!menuClickOpen) {
        menuOpen = true;
        hiddenMenu.classList.add('transform-translate-open');
    };
});
menuButton.addEventListener("mouseleave", () => {
    if (!menuClickOpen) {
        menuOpen = false;
        hiddenMenu.classList.remove('transform-translate-open');
    }
});
colorInputs.forEach(colors => {
    colors.addEventListener('change', (event) => {
        if (event.target.dataset.id == "bg-random") {
            document.body.className = currentIntervalColor;
            title.innerText = currentIntervalName + " background!";
        } else {
            document.body.className = event.target.id;
            title.innerText = event.target.value + " background!";
        }
        hiddenMenu.classList.remove('transform-translate-open');
        menuOpen = false;
        menuClickOpen = false;
    });
})

window.addEventListener('keydown', (e) => {
    if (e.code.includes("Digit")) {
        let number = e.code.slice(5);
        if (parseInt(number) < 6) document.querySelector(`input[value="${Object.keys(colors)[number - 1]}"]`).click();
    }
})
const colorInterval = setInterval(() => {
    const randomLi = document.getElementById("random")
    randomLi.classList.remove(currentIntervalColor);
    let randomColor = Object.keys(colors)[parseInt(Math.random() * (5 - 1) + 1)];
    currentIntervalColor = colors[randomColor].class
    currentIntervalName = colors[randomColor].name
    randomLi.classList.add(currentIntervalColor);
}, 500);
