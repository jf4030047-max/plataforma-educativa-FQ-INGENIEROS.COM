// js/cursos.js
// Lógica para cargar y mostrar el catálogo de cursos sincronizado

// Inicializa cursos en localStorage si no existen
function inicializarCursos() {
	if (!localStorage.getItem('cursos')) {
		const cursosIniciales = [
			{
				id: 1,
				titulo: "SEGURIDAD Y SALUD EN EL TRABAJO EN OBRAS CIVILES",
				descripcion: "Curso sobre seguridad y salud en el trabajo en obras civiles.",
				categoria: "negocios",
				nivel: "basico",
				duracion: "6 semanas"
			}
		];
		localStorage.setItem('cursos', JSON.stringify(cursosIniciales));
	}
}

// Obtiene cursos desde localStorage
function obtenerCursos() {
	try {
		return JSON.parse(localStorage.getItem('cursos')) || [];
	} catch (e) {
		return [];
	}
}

// Agrega un nuevo curso y sincroniza
function agregarCurso(curso) {
	const cursos = obtenerCursos();
	curso.id = cursos.length > 0 ? cursos[cursos.length - 1].id + 1 : 1;
	cursos.push(curso);
	localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Exporta funciones globalmente
window.inicializarCursos = inicializarCursos;
window.obtenerCursos = obtenerCursos;
window.agregarCurso = agregarCurso;
