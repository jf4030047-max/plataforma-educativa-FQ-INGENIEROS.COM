// Este archivo gestiona el inicio de sesión solo con DNI

document.addEventListener('DOMContentLoaded', function() {
    // Validar disponibilidad de localStorage
    let localStorageOk = true;
    try {
        const testKey = '__test_ls__';
        localStorage.setItem(testKey, '1');
        localStorage.removeItem(testKey);
    } catch (e) {
        localStorageOk = false;
    }
    if (!localStorageOk) {
        document.body.innerHTML = '<div style="background:#ffe0e0; color:#a00; border:1px solid #a00; padding:2rem; margin:2rem auto; max-width:500px; text-align:center; font-size:1.2rem; border-radius:8px;">' +
            'No es posible iniciar sesión porque tu navegador no permite guardar datos locales.<br><br>' +
            'Por favor, habilita el almacenamiento local (cookies y datos del sitio) o usa una ventana normal (no incógnito).<br><br>' +
            'Si usas extensiones de privacidad, desactívalas temporalmente para este sitio.' +
            '</div>';
        return;
    }
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let dniInput = form.querySelector('input[placeholder="DNI"]');
        let dni = dniInput.value.trim();
        dni = dni.replace(/^0+/, '').replace(/\s+/g, '').toUpperCase();
        let valid = true;
        if (!dni || !/^\d{8}$/.test(dni)) {
            dniInput.classList.add('is-invalid');
            valid = false;
        } else {
            dniInput.classList.remove('is-invalid');
        }
        if (!valid) return;
        let usuarios = [];
        try {
            usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        } catch (err) {
            // Si hay corrupción, limpiar y avisar
            localStorage.removeItem('usuarios');
            alert('Se detectó un problema con los datos almacenados. El sistema ha restaurado el acceso. Por favor, regístrate nuevamente.');
            return;
        }
        const usuario = usuarios.find(u => ((u.dni || '').replace(/^0+/, '').replace(/\s+/g, '').toUpperCase() === dni));
        if (usuario) {
            sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
            window.location.href = 'presentacion.html';
        } else {
            dniInput.classList.add('is-invalid');
            setTimeout(() => {
                dniInput.classList.remove('is-invalid');
            }, 1500);
        }
    });
});
