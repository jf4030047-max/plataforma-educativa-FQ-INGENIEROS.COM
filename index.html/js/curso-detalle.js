// js/curso-detalle.js
// Aquí irá la lógica para mostrar el detalle de un curso, inscripción, materiales, evaluaciones, etc.

// Muestra el detalle del curso según el parámetro id de la URL

document.addEventListener('DOMContentLoaded', function() {
    // Catálogo de cursos
    const cursos = [
        {
            id: 1,
            titulo: "Introducción a la Programación",
            duracion: "6 semanas",
            nivel: "Básico",
            categoria: "Programación",
            descripcion: "Aprende los fundamentos de la programación desde cero. Este curso cubre lógica, algoritmos, variables, estructuras de control y resolución de problemas con ejercicios prácticos.",
            temario: [
                "Semana 1: Introducción y lógica básica",
                "Semana 2: Variables y tipos de datos",
                "Semana 3: Estructuras de control",
                "Semana 4: Funciones y procedimientos",
                "Semana 5: Algoritmos y resolución de problemas",
                "Semana 6: Proyecto final"
            ],
            profesor: "Ing. Laura Torres",
            modalidad: "100% online, acceso 24/7",
            evaluaciones: [
                "Quiz de lógica y variables (Semana 2)",
                "Ejercicio práctico de estructuras de control (Semana 3)",
                "Proyecto final (Semana 6)"
            ]
        },
        {
            id: 2,
            titulo: "Ingeniería de Software Avanzada",
            duracion: "8 semanas",
            nivel: "Avanzado",
            categoria: "Ingeniería",
            descripcion: "Metodologías, patrones y arquitectura de software profesional.",
            temario: [
                "Semana 1: Arquitectura de software",
                "Semana 2: Patrones de diseño",
                "Semana 3: Metodologías ágiles",
                "Semana 4: Testing avanzado",
                "Semana 5: Integración continua",
                "Semana 6: DevOps",
                "Semana 7: Seguridad en software",
                "Semana 8: Proyecto final"
            ],
            profesor: "Ing. Carlos Pérez",
            modalidad: "Online y presencial",
            evaluaciones: [
                "Quiz de patrones (Semana 2)",
                "Proyecto DevOps (Semana 6)",
                "Proyecto final (Semana 8)"
            ]
        },
        {
            id: 3,
            titulo: "Cálculo y Matemática para Ingenieros",
            duracion: "10 semanas",
            nivel: "Intermedio",
            categoria: "Ciencias",
            descripcion: "Refuerza tus bases matemáticas para ingeniería y ciencias.",
            temario: [
                "Semana 1: Álgebra básica",
                "Semana 2: Funciones y gráficos",
                "Semana 3: Derivadas",
                "Semana 4: Integrales",
                "Semana 5: Ecuaciones diferenciales",
                "Semana 6: Series",
                "Semana 7: Probabilidad",
                "Semana 8: Estadística",
                "Semana 9: Aplicaciones en ingeniería",
                "Semana 10: Proyecto final"
            ],
            profesor: "Ing. Ana Ruiz",
            modalidad: "Online",
            evaluaciones: [
                "Quiz de derivadas (Semana 3)",
                "Ejercicio de integrales (Semana 4)",
                "Proyecto final (Semana 10)"
            ]
        },
        {
            id: 4,
            titulo: "Gestión de Proyectos Empresariales",
            duracion: "5 semanas",
            nivel: "Intermedio",
            categoria: "Negocios",
            descripcion: "Herramientas y técnicas para liderar proyectos exitosos.",
            temario: [
                "Semana 1: Introducción a la gestión",
                "Semana 2: Planificación",
                "Semana 3: Ejecución",
                "Semana 4: Control",
                "Semana 5: Cierre de proyectos"
            ],
            profesor: "Lic. Mario Gómez",
            modalidad: "Online",
            evaluaciones: [
                "Quiz de planificación (Semana 2)",
                "Ejercicio de control (Semana 4)",
                "Proyecto final (Semana 5)"
            ]
        },
        {
            id: 5,
            titulo: "SEGURIDAD Y SALUD EN EL TRABAJO EN OBRAS CIVILES",
            duracion: "6 semanas",
            nivel: "Básico",
            categoria: "Negocios",
            descripcion: "Curso sobre seguridad y salud en el trabajo en obras civiles.",
            temario: [
                "Semana 1: Introducción a la seguridad",
                "Semana 2: Normas legales",
                "Semana 3: Riesgos en obras civiles",
                "Semana 4: Prevención de accidentes",
                "Semana 5: Salud ocupacional",
                "Semana 6: Proyecto final"
            ],
            profesor: "Ing. Luis Salazar",
            modalidad: "Online",
            evaluaciones: [
                "Quiz de normas (Semana 2)",
                "Ejercicio de prevención (Semana 4)",
                "Proyecto final (Semana 6)"
            ]
        }
    ];

    // Obtener el parámetro id de la URL
    function getCursoId() {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get('id'), 10);
    }

    // Permitir acceso libre al curso de Seguridad y Salud
    let curso = null;
    const cursoId = getCursoId();
    if (cursoId === 5 || isNaN(cursoId)) {
        curso = cursos.find(c => c.id === 5);
    } else {
        curso = cursos.find(c => c.id === cursoId);
    }

    if (!curso) {
        document.getElementById('curso-titulo').innerText = 'Curso no encontrado';
        document.getElementById('curso-info').innerHTML = '<div style="color:red;font-weight:bold;font-size:1.2rem;">No existe información para este curso.<br>Verifica que el id sea correcto y que el script esté cargando.</div>';
        document.getElementById('evaluaciones').innerHTML = '';
        return;
    }

    document.getElementById('curso-titulo').innerText = curso.titulo;
    document.getElementById('curso-info').innerHTML = `
        <h2>${curso.titulo}</h2>
        <div class="curso-meta">Duración: ${curso.duracion} &nbsp;|&nbsp; Nivel: ${curso.nivel} &nbsp;|&nbsp; Categoría: ${curso.categoria}</div>
        <p>${curso.descripcion}</p>
        <ul>
            <li><b>Temario:</b>
                <ul>
                    ${curso.temario.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </li>
            <li><b>Profesor:</b> ${curso.profesor}</li>
            <li><b>Modalidad:</b> ${curso.modalidad}</li>
        </ul>
        <button class="inscribirse-btn">Inscribirse</button>
    `;

    document.getElementById('evaluaciones').innerHTML = `
        <h3>Evaluaciones</h3>
        <ul>
            ${curso.evaluaciones.map(e => `<li>${e}</li>`).join('')}
        </ul>
    `;
});
