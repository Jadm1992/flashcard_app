let term = document.querySelector('.term');
let checkButton = document.querySelector('.check');
let nextButton = document.querySelector('.next');
let definition = document.querySelector('.definition');

const words = {
    Hello: "Hola",
    Goodbye: "Adiós",
    "I drink water": "Yes"
}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

checkButton.addEventListener('click', function () {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function () {
    getRandomWord();
});
