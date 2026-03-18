// main.js: Muestra los datos del usuario logueado

document.addEventListener('DOMContentLoaded', function() {
    const userInfoDiv = document.getElementById('userInfo');
    // Obtener el usuario logueado desde sessionStorage
    const usuario = JSON.parse(sessionStorage.getItem('usuarioLogueado') || 'null');
    if (!usuario) {
        userInfoDiv.innerHTML = '<b>No hay sesión activa.</b>';
        return;
    }
    userInfoDiv.innerHTML = `
        <b>Nombre:</b> ${(usuario.nombres || usuario.nombre || '') + ' ' + (usuario.apellidos || '')}<br>
        <b>DNI:</b> ${usuario.dni || ''}<br>
        <b>Provincia:</b> ${usuario.provincia || ''}<br>
        <b>Distrito:</b> ${usuario.distrito || ''}<br>
        <b>Dirección:</b> ${usuario.direccion || ''}<br>
        <b>Correo electrónico:</b> ${usuario.correo || ''}<br>
        <b>Teléfono:</b> ${usuario.telefono || ''}
    `;
});
