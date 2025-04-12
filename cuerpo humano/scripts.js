function mostrarConsejos() {
    const consejos = [
        "🌱 Planta un árbol y cuida de las plantas.",
        "🚯 No tires basura en el suelo; usa los basureros.",
        "💧 Ahorra agua cerrando el grifo mientras te cepillas los dientes.",
        "🔌 Apaga las luces y aparatos electrónicos cuando no los uses.",
        "♻ Separa la basura en orgánica e inorgánica para reciclar."
    ];
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "<ul>" + consejos.map(consejo => "<li>" + consejo + "</li>").join("") + "</ul>";
}

// Lógica del juego de arrastrar y soltar
let elementos = document.querySelectorAll(".draggable");
let zonas = document.querySelectorAll(".dropzone");

elementos.forEach(elemento => {
    elemento.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text", event.target.id);
    });
});

zonas.forEach(zona => {
    zona.addEventListener("dragover", event => {
        event.preventDefault();
    });

    zona.addEventListener("drop", event => {
        event.preventDefault();
        let idElemento = event.dataTransfer.getData("text");
        let elemento = document.getElementById(idElemento);

        if ((zona.id === "animales" && idElemento === "ave") ||
            (zona.id === "plantas" && idElemento === "arbol") ||
            (zona.id === "hongos" && idElemento === "hongo")) {
            
            zona.appendChild(elemento);
            document.getElementById("resultado").textContent = "¡Muy bien! Has clasificado correctamente. 🎉";
        } else {
            document.getElementById("resultado").textContent = "Ups, intenta de nuevo. 😃";
        }
    });
});
