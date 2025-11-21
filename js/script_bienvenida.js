function irAInscripcion() {
    window.location.href = "templates/inscripcion.html";
}

function irAExamen() {
    const nombre = localStorage.getItem("nombreUsuario");
    if (!nombre) {
        alert("Debes registrarte primero.");
        window.location.href = "templates/inscripcion.html";
    } else {
        window.location.href = "templates/examen.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem("nombreUsuario");
    if (nombre) {
        document.getElementById("mensajeUsuario").innerText = "Bienvenido, " + nombre + "!";
    }
});
