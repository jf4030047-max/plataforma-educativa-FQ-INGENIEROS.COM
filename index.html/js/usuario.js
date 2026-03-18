// js/usuario.js
document.addEventListener('DOMContentLoaded', function() {
	// Recuperar usuario actual (último registrado)
	let usuarios = [];
	try {
		usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
	} catch (err) { usuarios = []; }
	const usuario = usuarios.length > 0 ? usuarios[usuarios.length - 1] : null;
	if (!usuario) return;
	// Actualizar datos en el perfil
	const perfilDatos = document.querySelector('.perfil-datos');
	if (perfilDatos) {
		perfilDatos.innerHTML = `
			<h2>${usuario.nombres} ${usuario.apellidos}</h2>
			<div>Email: ${usuario.correo}</div>
			<div>Provincia: ${usuario.provincia}</div>
			<div>Dirección: ${usuario.direccion}</div>
			<div>Teléfono: ${usuario.telefono}</div>
			<div>DNI: ${usuario.dni}</div>
		`;
	}

	// Simulación de cursos inscritos y progreso
	let cursos = JSON.parse(localStorage.getItem('cursos') || '[]');
	// Si no hay cursos, forzar uno para mostrar botones
	if (!cursos || cursos.length === 0) {
		cursos = [{
			id: 1,
			titulo: 'SEGURIDAD Y SALUD EN EL TRABAJO EN OBRAS CIVILES',
			descripcion: 'Curso sobre seguridad y salud en el trabajo en obras civiles.',
			categoria: 'negocios',
			nivel: 'basico',
			duracion: '6 semanas'
		}];
		localStorage.setItem('cursos', JSON.stringify(cursos));
	}
	// Simulación: el usuario terminó el primer curso
	const cursoFinalizado = cursos[0];
	// Estado de pago
	let pagoCertificado = localStorage.getItem('pagoCertificado') === 'true';

	// Renderizar estado de certificado/constancia
	const estadoCertificado = document.getElementById('estado-certificado');
	const accionesCertificado = document.getElementById('acciones-certificado');
	const listaCert = document.getElementById('certificados-list');
	listaCert.innerHTML = '';

	if (cursoFinalizado) {
		if (pagoCertificado) {
			estadoCertificado.textContent = `¡Felicidades! Has obtenido el certificado oficial del curso "${cursoFinalizado.titulo}".`;
			listaCert.innerHTML = `<li><a href="#" class="certificado-link">Descargar Certificado PDF</a></li>`;
			accionesCertificado.innerHTML = '';
		} else {
			estadoCertificado.textContent = `Has finalizado el curso "${cursoFinalizado.titulo}".`;
			listaCert.innerHTML = `<li><a href="#" class="certificado-link">Descargar Constancia PDF</a></li>`;
			accionesCertificado.innerHTML = `
				<button id="btn-descargar-constancia" style="background:#e0e0e0;color:#0078d7;border:none;padding:0.7rem 1.5rem;border-radius:7px;font-weight:600;cursor:pointer;margin-bottom:1rem;">Descargar constancia gratuita</button><br>
				<button id="btn-pagar-certificado" style="background:#00bfae;color:#fff;border:none;padding:0.7rem 1.5rem;border-radius:7px;font-weight:600;cursor:pointer;margin-top:0.7rem;">Pagar para obtener certificado</button>
			`;
			// Medios de pago
			const mediosPago = document.getElementById('medios-pago');
			mediosPago.innerHTML = `
				<div style="margin-top:1.2rem;">
					<h4 style="color:#0078d7;margin-bottom:0.7rem;">Medios de pago disponibles:</h4>
					<button id="pago-paypal" style="background:#ffc439;color:#222;border:none;padding:0.6rem 1.2rem;border-radius:7px;font-weight:600;margin-right:1rem;cursor:pointer;">PayPal</button>
					<button id="pago-tarjeta" style="background:#0078d7;color:#fff;border:none;padding:0.6rem 1.2rem;border-radius:7px;font-weight:600;margin-right:1rem;cursor:pointer;">Tarjeta</button>
					<button id="pago-transferencia" style="background:#00bfae;color:#fff;border:none;padding:0.6rem 1.2rem;border-radius:7px;font-weight:600;margin-right:1rem;cursor:pointer;">Transferencia</button>
					<button id="pago-yape" style="background:#6ad01b;color:#fff;border:none;padding:0.6rem 1.2rem;border-radius:7px;font-weight:600;cursor:pointer;">Yape</button>
				</div>
			`;
			document.getElementById('btn-descargar-constancia').onclick = function() {
				alert('Descargando constancia gratuita... (simulación)');
			};
			document.getElementById('btn-pagar-certificado').onclick = function() {
				mediosPago.scrollIntoView({behavior:'smooth'});
			};
			document.getElementById('pago-paypal').onclick = function() {
				alert('Redirigiendo a PayPal... (simulación)');
				localStorage.setItem('pagoCertificado', 'true');
				window.location.reload();
			};
			document.getElementById('pago-tarjeta').onclick = function() {
				alert('Pago con tarjeta... (simulación)');
				localStorage.setItem('pagoCertificado', 'true');
				window.location.reload();
			};
			document.getElementById('pago-transferencia').onclick = function() {
				alert('Instrucciones para transferencia bancaria... (simulación)');
				localStorage.setItem('pagoCertificado', 'true');
				window.location.reload();
			};
			document.getElementById('pago-yape').onclick = function() {
				alert('Pago por Yape... (simulación)');
				localStorage.setItem('pagoCertificado', 'true');
				window.location.reload();
			};
		}
	} else {
		estadoCertificado.textContent = 'No hay cursos finalizados.';
		accionesCertificado.innerHTML = '';
	}
});
