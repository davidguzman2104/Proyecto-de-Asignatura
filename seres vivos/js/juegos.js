// Juego 1: Adivina el animal
const pistas = [
    { pista: "Soy el rey de la selva", respuesta: "león" },
    { pista: "Soy un ave que repite lo que dices", respuesta: "loro" },
    { pista: "Vivo en el agua y tengo aletas", respuesta: "pez" }
];

function mostrarPregunta() {
    let indice = Math.floor(Math.random() * pistas.length);
    document.getElementById("pista").textContent = pistas[indice].pista;
    document.getElementById("pista").dataset.respuesta = pistas[indice].respuesta;
}

function verificarRespuesta() {
    let respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();
    let respuestaCorrecta = document.getElementById("pista").dataset.respuesta;

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById("resultado").textContent = "✅ ¡Correcto!";
    } else {
        document.getElementById("resultado").textContent = "❌ Inténtalo de nuevo.";
    }
}

// Juego 2: Clasificación
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let categoria = event.target.getAttribute("data-categoria");

    if (data === categoria) {
        event.target.innerHTML += `✅ ${document.getElementById(data).textContent}`;
        document.getElementById(data).style.display = "none";
        document.getElementById("mensaje").textContent = "¡Bien hecho!";
    } else {
        document.getElementById("mensaje").textContent = "Intenta otra vez.";
    }
}

// Juego 3: Memoria
let tarjetasVolteadas = [];
function voltear(elemento) {
    if (tarjetasVolteadas.length < 2) {
        elemento.style.background = "#FFD700";
        tarjetasVolteadas.push(elemento);
    }

    if (tarjetasVolteadas.length === 2) {
        setTimeout(() => {
            if (tarjetasVolteadas[0].textContent === tarjetasVolteadas[1].textContent) {
                tarjetasVolteadas[0].style.visibility = "hidden";
                tarjetasVolteadas[1].style.visibility = "hidden";
                document.getElementById("memoriaMensaje").textContent = "¡Pareja encontrada!";
            } else {
                tarjetasVolteadas[0].style.background = "";
                tarjetasVolteadas[1].style.background = "";
            }
            tarjetasVolteadas = [];
        }, 1000);
    }
}
