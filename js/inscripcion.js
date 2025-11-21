const serviceID = "service_6dunyyq";
const templateID = "template_je3remf";
const publicKey = "EdeNOwbMBpBqhSrMF";

document.getElementById("formInscripcion").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = {
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        email: form.email.value,
        curso: form.curso.value
    };

    // Guardar datos en localStorage
    localStorage.setItem("nombreUsuario", formData.nombre + " " + formData.apellido);
    localStorage.setItem("emailUsuario", formData.email);
    localStorage.setItem("cursoUsuario", formData.curso);

    // Enviar Email
    emailjs.send(serviceID, templateID, formData, publicKey)
        .then(() => {
            document.getElementById("mensajeEnvio").innerText = "¡Inscripción enviada correctamente!";
            form.reset();
            // Redirigir al examen automáticamente
            window.location.href = "examen.html";
        })
        .catch((err) => {
            console.error("Error al enviar:", err);
            document.getElementById("mensajeEnvio").innerText = "Error al enviar el formulario. Intenta nuevamente.";
        });
});
