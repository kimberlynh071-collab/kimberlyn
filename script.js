const botonInicio = document.getElementById("boton-inicio");
const pregunta = document.getElementById("pregunta");
const respuestaFinal = document.getElementById("respuesta-final");

botonInicio.addEventListener("click", () => {
    document.getElementById("mensaje-inicial").style.display = "none";
    botonInicio.style.display = "none";
    pregunta.style.display = "block";
});

function mostrarRespuesta(opcion) {
    pregunta.style.display = "none";
    respuestaFinal.style.display = "block";
    
    // Crear pétalos cayendo
    for (let i = 0; i < 20; i++) {
        let petalo = document.createElement("div");
        petalo.classList.add("petalos");
        petalo.style.left = Math.random() * window.innerWidth + "px";
        petalo.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(petalo);

        setTimeout(() => petalo.remove(), 5000);
    }
}