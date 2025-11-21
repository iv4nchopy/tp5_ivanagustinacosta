document.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem("nombreUsuario");

    if (!nombre) {
        alert("Debes registrarte primero.");
        window.location.href = "inscripcion.html";
    } else {
        document.getElementById("mensajeUsuario").innerText = "Hola " + nombre + ", listo para tu examen";
    }
});
