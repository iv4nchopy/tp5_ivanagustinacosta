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
    let nombre = localStorage.getItem("nombreUsuario");

    if (!nombre) {
        let nombreIngresado = prompt("Ingresa tu nombre y apellido:");
        if (nombreIngresado) {
            localStorage.setItem("nombreUsuario", nombreIngresado);
            nombre = nombreIngresado;
        }
    }

    if (nombre) {
        document.getElementById("mensajeUsuario").innerText =
            "Bienvenido, " + nombre + "!";
    }
});
