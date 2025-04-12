const questions = [
    { question: "¿Qué órgano bombea la sangre?", correct: "Corazón", options: ["Corazón", "Pulmones", "Estómago"], image: "corazon.jpg" },
    { question: "¿Qué sistema nos ayuda a respirar?", correct: "Sistema Respiratorio", options: ["Sistema Digestivo", "Sistema Nervioso", "Sistema Respiratorio"], image: "sistema respiratorio.jpg" },
    { question: "¿Qué parte del cuerpo procesa los alimentos?", correct: "Estómago", options: ["Pulmones", "Cerebro", "Estómago"], image: "stomach.jpg" }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("questionText").textContent = q.question;
    document.getElementById("questionImage").src = q.image;
    let options = shuffle(q.options);
    document.getElementById("option1").textContent = options[0];
    document.getElementById("option2").textContent = options[1];
    document.getElementById("option3").textContent = options[2];
    document.getElementById("answerMessage").textContent = "";
}

function checkAnswer(button) {
    if (button.textContent === questions[currentQuestionIndex].correct) {
        document.getElementById("answerMessage").textContent = "✅ ¡Correcto!";
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        setTimeout(loadQuestion, 1000);
    } else {
        document.getElementById("answerMessage").textContent = "❌ Intenta de nuevo";
    }
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

loadQuestion();

const images = [
    "cerebro.jpg",
    "corazon.jpg",
    "sistema respiratorio.jpg",
    "estomago.jpg",
];
let memoramaCards = images.concat(images);
memoramaCards = shuffle(memoramaCards);
let revealedCards = [];
let gameBoard = document.getElementById("gameBoard");

memoramaCards.forEach((img, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = img;
    let image = document.createElement("img");
    image.src = img;
    card.appendChild(image);
    card.addEventListener("click", () => revealCard(card));
    gameBoard.appendChild(card);
});

function revealCard(card) {
    if (revealedCards.length < 2 && !card.classList.contains("revealed")) {
        card.classList.add("revealed");
        revealedCards.push(card);
        if (revealedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    if (revealedCards[0].dataset.name === revealedCards[1].dataset.name) {
        revealedCards = [];
    } else {
        revealedCards.forEach(card => card.classList.remove("revealed"));
        revealedCards = [];
    }
}
