function enviarFormulario() {
    const name = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const course = document.querySelector("input[name='course']:checked");

    if (!name || !last || !email || !course) {
        alert("Complete todos los campos.");
        return;
    }

    alert(
        "Inscripción enviada:\n" +
        "Nombre: " + name + " " + last + "\n" +
        "Email: " + email + "\n" +
        "Curso: " + course.value
    );
}
