document.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem("nombreUsuario");
    const curso = localStorage.getItem("cursoUsuario");

    if (!nombre || !curso) {
        alert("Debes registrarte primero.");
        window.location.href = "inscripcion.html";
        return;
    }

    const mensajeUsuario = document.getElementById("mensajeUsuario");
    mensajeUsuario.innerText = `Hola ${nombre}, estas son tus preguntas de ${curso}:`;

    const examenContainer = document.getElementById("examenContainer");

    // Preguntas generales
    const preguntasGenerales = [
        {
            pregunta: "¿Cuál es el lenguaje de programación más usado?",
            tipo: "opcion",
            opciones: ["Python", "Java", "C++", "Ruby"]
        },
        {
            pregunta: "¿El Hardware es la parte física del computador?",
            tipo: "opcion",
            opciones: ["Verdadero", "Falso"]
        },
        {
            pregunta: "¿Qué es HTML?",
            tipo: "texto"
        },
        {
            pregunta: "¿Qué significa CPU?",
            tipo: "opcion",
            opciones: ["Central Process Unit", "Central Program Unit", "Central Processing Unit", "Computer Processing Unit"]
        },
        {
            pregunta: "¿El sistema operativo es un software?",
            tipo: "opcion",
            opciones: ["Verdadero", "Falso"]
        }
    ];

    // Preguntas adicionales según curso
    let preguntasCurso = preguntasGenerales;
    if (curso === "Python") {
        preguntasCurso.unshift({ pregunta: "¿Qué significa PEP en Python?", tipo: "texto" });
    } else if (curso === "Java") {
        preguntasCurso.unshift({ pregunta: "¿Qué es la JVM?", tipo: "texto" });
    } else if (curso === "SQL") {
        preguntasCurso.unshift({ pregunta: "¿Qué comando se usa para consultar datos en SQL?", tipo: "texto" });
    } else if (curso === "CSS") {
        preguntasCurso.unshift({ pregunta: "¿Qué propiedad se usa para cambiar el color de fondo?", tipo: "texto" });
    }

    // Renderizar preguntas
    preguntasCurso.forEach((p, index) => {
        const div = document.createElement("div");
        div.classList.add("pregunta");

        const label = document.createElement("label");
        label.innerText = `${index + 1}. ${p.pregunta}`;
        div.appendChild(label);

        if (p.tipo === "opcion") {
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
        } else if (p.tipo === "texto") {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `pregunta${index}`;
            div.appendChild(input);
        }

        examenContainer.appendChild(div);
    });
});
