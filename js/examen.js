const serviceID = "service_6dunyyq";
const templateID = "template_examen"; // Nuevo template para examen

document.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem("nombreUsuario");
    const apellido = localStorage.getItem("apellidoUsuario");
    const email = localStorage.getItem("emailUsuario");
    const curso = localStorage.getItem("cursoUsuario");

    if (!nombre || !apellido || !email || !curso) {
        alert("Debes registrarte primero.");
        window.location.href = "inscripcion.html";
        return;
    }

    const mensajeUsuario = document.getElementById("mensajeUsuario");
    mensajeUsuario.innerText = `Hola ${nombre} ${apellido}, estas son tus preguntas de ${curso}:`;

    const examenContainer = document.getElementById("examenContainer");

    const preguntas = [
        { pregunta: "Lenguaje más usado", tipo: "opcion", opciones: ["Python", "Java", "C++", "Ruby"] },
        { pregunta: "Hardware es físico", tipo: "opcion", opciones: ["Verdadero", "Falso"] },
        { pregunta: "¿Qué es HTML?", tipo: "texto" },
        { pregunta: "Significado de CPU", tipo: "opcion", opciones: ["Central Process Unit", "Central Program Unit", "Central Processing Unit", "Computer Processing Unit"] },
        { pregunta: "Sistema operativo es software", tipo: "opcion", opciones: ["Verdadero", "Falso"] }
    ];

    // Preguntas adicionales según curso
    if(curso === "Python") preguntas.unshift({ pregunta: "¿Qué significa PEP en Python?", tipo: "texto" });
    if(curso === "Java") preguntas.unshift({ pregunta: "¿Qué es la JVM?", tipo: "texto" });
    if(curso === "SQL") preguntas.unshift({ pregunta: "¿Qué comando se usa para consultar datos en SQL?", tipo: "texto" });
    if(curso === "CSS") preguntas.unshift({ pregunta: "¿Qué propiedad se usa para cambiar el color de fondo?", tipo: "texto" });

    // Renderizar preguntas
    preguntas.forEach((p, index) => {
        const div = document.createElement("div");
        div.classList.add("pregunta");

        const label = document.createElement("label");
        label.innerText = `Pregunta ${index + 1} - ${p.pregunta}:`;
        div.appendChild(label);

        if(p.tipo === "opcion") {
            p.opciones.forEach(opt => {
                const opcionDiv = document.createElement("div");
                opcionDiv.classList.add("opcion");

                const input = document.createElement("input");
                input.type = "radio";
                input.name = `pregunta${index}`;
                input.value = opt;

                const span = document.createElement("span");
                span.innerText = opt;

                opcionDiv.appendChild(input);
                opcionDiv.appendChild(span);
                div.appendChild(opcionDiv);
            });
        } else {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `pregunta${index}`;
            div.appendChild(input);
        }

        examenContainer.appendChild(div);
    });

    // Enviar respuestas por EmailJS
    document.getElementById("examenForm").addEventListener("submit", async function(e){
        e.preventDefault();

        const respuestas = preguntas.map((p, index) => {
            const inputTexto = examenContainer.querySelector(`.pregunta:nth-child(${index+1}) input[type=text]`);
            if(inputTexto) return `Pregunta ${index+1} - ${p.pregunta}: ${inputTexto.value}`;
            const inputRadio = examenContainer.querySelector(`.pregunta:nth-child(${index+1}) input[type=radio]:checked`);
            return `Pregunta ${index+1} - ${p.pregunta}: ${inputRadio ? inputRadio.value : "No respondida"}`;
        });

        const templateParams = {
            nombre,
            apellido,
            email,
            curso,
            respuestas: respuestas.join("\n")
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams);
            alert("Examen enviado correctamente!");
            window.location.href = "../index.html";
        } catch(err) {
            console.error("Error al enviar examen:", err);
            alert("Error al enviar el examen, intenta nuevamente.");
        }
    });

});
