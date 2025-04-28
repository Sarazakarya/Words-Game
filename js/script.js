const inputContainers = document.querySelector(".inputs"),
    disc = document.querySelector(".disc"),
    guessCount = document.querySelector(".guess-count"),
    resetBtn = document.querySelector("button"),
    typing = document.querySelector(".typing"),
    winner = document.querySelector(".winner");

let maxGuess = 12;
let word;
let countWin = []

// all Words
const words = [
    {
        word: "react",
        disc: "JavaScript library",
    },
    {
        word: "vue",
        disc: "JavaScript Framework",
    },
    {
        word: "angular",
        disc: "JavaScript MVW Framework",
    },
    {
        word: "nodejs",
        disc: "JavaScript runtime environment",
    },
    {
        word: "php",
        disc: "general-purpose scripting language",
    },
    {
        word: "ruby",
        disc: "open source programming language",
    },
    {
        word: "python",
        disc: "Programming Language",
    },
    {
        word: "tailwind",
        disc: "A utility-first CSS framework",
    },
    {
        word: "bootstrap",
        disc: "world's most famous free CSS framework",
    },
];

document.addEventListener("keydown", () => typing.focus());
resetBtn.addEventListener("click", getRoundomWord)
typing.addEventListener("input", startGame)
typing.addEventListener("focus", () => typing.focus());

function getRoundomWord() {
    reset()
    let randomWod = words[Math.floor(Math.random() * words.length)]
    let discripton = randomWod.disc;
    word = randomWod.word;
    disc.innerHTML += discripton;

    guessCount.innerText = maxGuess;
    let inp = "";
    for (let i = 0; i < word.length; i++) {
        inp += ` <input type="text" disabled>`

    }
    inputContainers.innerHTML = inp;
}

getRoundomWord()

function startGame(e) {
    let char = e.target.value;
    if (!char.match(/[a-z]/i)) return;
    if (word.includes(char)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === char && !inputContainers.querySelectorAll("input")[i].value) {
                inputContainers.querySelectorAll("input")[i].value = char;
                countWin.push(char)
            }
        }
    }
    else {
        maxGuess--;
    }
    guessCount.innerText = maxGuess;
    typing.value = "";


    // looser
    setTimeout(() => {
        if (maxGuess <= 0) {
            alert(" مش هتكسب يا حلو😉")
            for (let i = 0; i < word.length; i++) {
                inputContainers.querySelectorAll("input")[i].value = word[i]
            }

        }
    }
    )

    // winner
    if (countWin.length === word.length) {
        countWin = [];
        winner.classList.remove("hidden");


    }
}
function reset() {
    maxGuess = 12;
    winner.classList.add("hidden");
    countWin = [];
}
