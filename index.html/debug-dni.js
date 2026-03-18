// Diagnóstico: Mostrar los DNIs registrados y el DNI ingresado para acceso

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) return;
    const debugDiv = document.createElement('div');
    debugDiv.style.display = 'none'; // Oculta el recuadro de debug de DNIs
    debugDiv.style.background = '#e6f7ff';
    debugDiv.style.border = '1px solid #91d5ff';
    debugDiv.style.padding = '1rem';
    debugDiv.style.margin = '1rem 0';
    debugDiv.style.fontSize = '0.95rem';
    debugDiv.innerHTML = '<b>DNIs registrados:</b><br><pre id="dnisDebug"></pre>';
    document.body.insertBefore(debugDiv, document.body.firstChild);
    const pre = document.getElementById('dnisDebug');
    try {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        pre.textContent = usuarios.map(u => u.dni).join('\n') || 'No hay DNIs registrados.';
    } catch (e) {
        pre.textContent = 'No se pudo leer localStorage.';
    }
    // No hacer nada en submit, solo mostrar la lista siempre
    // Así la depuración permanece visible
    // Si quieres mostrar el DNI ingresado, puedes hacerlo en el alert de login.js
    // pero no borres la lista aquí
    // (No se necesita código en submit)
});
