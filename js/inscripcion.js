const serviceID = "service_6dunyyq";
const templateID = "template_je3remf";

document.getElementById("formInscripcion").addEventListener("submit", async function(e) {
    e.preventDefault();
    const form = e.target;

    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const email = form.email.value.trim();
    const curso = form.curso.value;

    if (!nombre || !apellido || !email || !curso) {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Guardar datos en localStorage
    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("apellidoUsuario", apellido);
    localStorage.setItem("emailUsuario", email);
    localStorage.setItem("cursoUsuario", curso);

    // Enviar datos a EmailJS (opcional si quieres registrar inscripción)
    const templateParams = { nombre, apellido, email, curso };
    try {
        await emailjs.send(serviceID, templateID, templateParams);
        window.location.href = "examen.html"; // Redirigir al examen
    } catch (err) {
        console.error("Error al enviar inscripción:", err);
        alert("Error al enviar inscripción, intenta nuevamente.");
    }
});
