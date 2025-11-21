const serviceID = "service_6dunyyq";
const templateID = "template_je3remf";

document.getElementById("formInscripcion").addEventListener("submit", async function(e) {
    e.preventDefault();
    const form = e.target;

    const templateParams = {
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        email: form.email.value,
        curso: form.curso.value
    };

    // Guardar datos localmente
    localStorage.setItem("nombreUsuario", templateParams.nombre + " " + templateParams.apellido);
    localStorage.setItem("emailUsuario", templateParams.email);
    localStorage.setItem("cursoUsuario", templateParams.curso);

    try {
        await emailjs.send(serviceID, templateID, templateParams);
        form.reset();
        window.location.href = "examen.html"; // Redirige al examen
    } catch (err) {
        console.error("Error al enviar:", err);
        document.getElementById("mensajeEnvio").innerText = "Error al enviar el formulario. Intenta nuevamente.";
    }
});
