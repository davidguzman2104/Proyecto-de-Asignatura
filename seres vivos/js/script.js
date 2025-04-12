function startCourse() {
    document.querySelector('.intro').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
}

function showGame() {
    document.getElementById('content').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert("¡Correcto! 🌱 Este es un ser vivo.");
    } else {
        alert("❌ Incorrecto. Intenta de nuevo.");
    }
}
