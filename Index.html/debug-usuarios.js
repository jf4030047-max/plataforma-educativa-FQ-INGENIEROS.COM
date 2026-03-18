// Diagnóstico: Mostrar todos los usuarios registrados en localStorage
// Útil para depuración de problemas de acceso

document.addEventListener('DOMContentLoaded', function() {
    const div = document.createElement('div');
    div.style.display = 'none'; // Oculta el recuadro de debug
    div.style.background = '#fffbe6';
    div.style.border = '1px solid #ffe58f';
    div.style.padding = '1rem';
    div.style.margin = '1rem 0';
    div.style.fontSize = '0.95rem';
    div.innerHTML = '<b>Usuarios registrados en localStorage:</b><br><pre id="usuariosDebug"></pre>';
    document.body.insertBefore(div, document.body.firstChild);
    const pre = document.getElementById('usuariosDebug');
    try {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        pre.textContent = JSON.stringify(usuarios, null, 2);
    } catch (e) {
        pre.textContent = 'No se pudo leer localStorage.';
    }
});
