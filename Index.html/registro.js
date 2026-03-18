// Este archivo almacena los registros de usuarios en localStorage
// y gestiona el registro desde el formulario de registro.html

window.onerror = function (msg, url, line, col, error) {
    if (msg && msg.toString().includes('NS_ERROR_FILE_CORRUPTED')) {
        try { localStorage.clear(); } catch (e) {}
        alert('Se detectó un problema grave con el almacenamiento local. El sistema lo ha restaurado automáticamente. Por favor, recarga la página e inténtalo de nuevo.');
        setTimeout(function() { location.reload(); }, 500);
        return true;
    }
};

document.addEventListener('DOMContentLoaded', function() {
        // Datos de ejemplo: distritos y centros poblados por provincia
        // Datos completos de distritos y centros poblados de Junín (ejemplo estándar, puedes ampliar los centros poblados según necesidad)
        const data = {
            'Huancayo': {
                'Huancayo': ['Azapampa', 'Cooperativa Santa Isabel', 'Ingenio', 'Uñas', 'Otros'],
                'Chilca': ['Chilca', 'Cerrito de la Libertad', 'Otros'],
                'Chongos Alto': ['Chongos Alto', 'Otros'],
                'Chupuro': ['Chupuro', 'Otros'],
                'Colca': ['Colca', 'Otros'],
                'Cullhuas': ['Cullhuas', 'Otros'],
                'El Tambo': ['El Tambo', 'San Carlos', 'Otros'],
                'Huacrapuquio': ['Huacrapuquio', 'Otros'],
                'Hualhuas': ['Hualhuas', 'Otros'],
                'Huancan': ['Huancan', 'Otros'],
                'Huasicancha': ['Huasicancha', 'Otros'],
                'Huayucachi': ['Huayucachi', 'Otros'],
                'Ingenio': ['Ingenio', 'Otros'],
                'Pariahuanca': ['Pariahuanca', 'Otros'],
                'Pilcomayo': ['Pilcomayo', 'Otros'],
                'Pucara': ['Pucara', 'Otros'],
                'Quichuay': ['Quichuay', 'Otros'],
                'Quilcas': ['Quilcas', 'Otros'],
                'San Agustin': ['San Agustin', 'Otros'],
                'San Jeronimo de Tunan': ['San Jeronimo de Tunan', 'Otros'],
                'Saño': ['Saño', 'Otros'],
                'Sapallanga': ['Sapallanga', 'Otros'],
                'Sicaya': ['Sicaya', 'Otros'],
                'Santo Domingo de Acobamba': ['Santo Domingo de Acobamba', 'Otros'],
                'Viques': ['Viques', 'Otros']
            },
            'Concepción': {
                'Aco': ['Aco', 'Otros'],
                'Andamarca': ['Andamarca', 'Otros'],
                'Chambara': ['Chambara', 'Otros'],
                'Cochas': ['Cochas', 'Otros'],
                'Comas': ['Comas', 'Otros'],
                'Concepción': ['Concepción', 'Otros'],
                'Heroínas Toledo': ['Heroínas Toledo', 'Otros'],
                'Manzanares': ['Manzanares', 'Otros'],
                'Mariscal Castilla': ['Mariscal Castilla', 'Otros'],
                'Matahuasi': ['Matahuasi', 'Otros'],
                'Mito': ['Mito', 'Otros'],
                'Nueve de Julio': ['Nueve de Julio', 'Otros'],
                'Orcotuna': ['Orcotuna', 'Otros'],
                'San Jose de Quero': ['San Jose de Quero', 'Otros'],
                'Santa Rosa de Ocopa': ['Santa Rosa de Ocopa', 'Otros']
            },
            'Chanchamayo': {
                'Chanchamayo': ['Chanchamayo', 'Otros'],
                'Perene': ['Perene', 'Otros'],
                'Pichanaqui': ['Pichanaqui', 'Otros'],
                'San Luis de Shuaro': ['San Luis de Shuaro', 'Otros'],
                'San Ramon': ['San Ramon', 'Otros'],
                'Vitoc': ['Vitoc', 'Otros']
            },
            'Jauja': {
                'Acolla': ['Acolla', 'Otros'],
                'Apata': ['Apata', 'Otros'],
                'Ataura': ['Ataura', 'Otros'],
                'Canchayllo': ['Canchayllo', 'Otros'],
                'Curicaca': ['Curicaca', 'Otros'],
                'El Mantaro': ['El Mantaro', 'Otros'],
                'Huamali': ['Huamali', 'Otros'],
                'Huaripampa': ['Huaripampa', 'Otros'],
                'Huertas': ['Huertas', 'Otros'],
                'Janjaillo': ['Janjaillo', 'Otros'],
                'Jauja': ['Jauja', 'Otros'],
                'Julcan': ['Julcan', 'Otros'],
                'Leonor Ordoñez': ['Leonor Ordoñez', 'Otros'],
                'Llocllapampa': ['Llocllapampa', 'Otros'],
                'Marco': ['Marco', 'Otros'],
                'Masma': ['Masma', 'Otros'],
                'Masma Chicche': ['Masma Chicche', 'Otros'],
                'Molinos': ['Molinos', 'Otros'],
                'Monobamba': ['Monobamba', 'Otros'],
                'Muqui': ['Muqui', 'Otros'],
                'Muquiyauyo': ['Muquiyauyo', 'Otros'],
                'Paca': ['Paca', 'Otros'],
                'Paccha': ['Paccha', 'Otros'],
                'Pancan': ['Pancan', 'Otros'],
                'Parco': ['Parco', 'Otros'],
                'Pomacancha': ['Pomacancha', 'Otros'],
                'Ricran': ['Ricran', 'Otros'],
                'San Lorenzo': ['San Lorenzo', 'Otros'],
                'San Pedro de Chunan': ['San Pedro de Chunan', 'Otros'],
                'Sausa': ['Sausa', 'Otros'],
                'Sincos': ['Sincos', 'Otros'],
                'Tunan Marca': ['Tunan Marca', 'Otros'],
                'Yauli': ['Yauli', 'Otros'],
                'Yauyos': ['Yauyos', 'Otros']
            },
            'Junín': {
                'Carhuamayo': ['Carhuamayo', 'Otros'],
                'Junín': ['Junín', 'Otros'],
                'Ondores': ['Ondores', 'Otros'],
                'Ulcumayo': ['Ulcumayo', 'Otros']
            },
            'Satipo': {
                'Coviriali': ['Coviriali', 'Otros'],
                'Llaylla': ['Llaylla', 'Otros'],
                'Mazamari': ['Mazamari', 'Otros'],
                'Pampa Hermosa': ['Pampa Hermosa', 'Otros'],
                'Pangoa': ['Pangoa', 'Otros'],
                'Río Negro': ['Río Negro', 'Otros'],
                'Río Tambo': ['Río Tambo', 'Otros'],
                'Satipo': ['Satipo', 'Otros']
            },
            'Tarma': {
                'Acobamba': ['Acobamba', 'Otros'],
                'Huaricolca': ['Huaricolca', 'Otros'],
                'Huasahuasi': ['Huasahuasi', 'Otros'],
                'La Unión': ['La Unión', 'Otros'],
                'Palca': ['Palca', 'Otros'],
                'Palcamayo': ['Palcamayo', 'Otros'],
                'San Pedro de Cajas': ['San Pedro de Cajas', 'Otros'],
                'Tapo': ['Tapo', 'Otros'],
                'Tarma': ['Tarma', 'Otros']
            },
            'Yauli': {
                'Chacapalpa': ['Chacapalpa', 'Otros'],
                'Huay-Huay': ['Huay-Huay', 'Otros'],
                'La Oroya': ['La Oroya', 'Otros'],
                'Marcapomacocha': ['Marcapomacocha', 'Otros'],
                'Morococha': ['Morococha', 'Otros'],
                'Paccha': ['Paccha', 'Otros'],
                'Santa Barbara de Carhuacayan': ['Santa Barbara de Carhuacayan', 'Otros'],
                'Santa Rosa de Sacco': ['Santa Rosa de Sacco', 'Otros'],
                'Suitucancha': ['Suitucancha', 'Otros'],
                'Yauli': ['Yauli', 'Otros']
            },
            'Chupaca': {
                'Ahuac': ['Ahuac', 'Otros'],
                'Chongos Bajo': ['Chongos Bajo', 'Otros'],
                'Chupaca': ['Chupaca', 'Otros'],
                'Huachac': ['Huachac', 'Otros'],
                'Huamancaca Chico': ['Huamancaca Chico', 'Otros'],
                'San Juan de Iscos': ['San Juan de Iscos', 'Otros'],
                'San Juan de Jarpa': ['San Juan de Jarpa', 'Otros'],
                'Tres de Diciembre': ['Tres de Diciembre', 'Otros'],
                'Yanacancha': ['Yanacancha', 'Otros']
            }
        };

        const provinciaSelect = document.getElementById('provincia');
        // El campo distrito y centro poblado ya no existen, así que no se procesan.
    const form = document.getElementById('registroForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        console.log('Intentando registrar usuario...');
        e.preventDefault();

        const nombres = form.querySelector('input[placeholder="Nombre(s)"]').value.trim();
        const apellidos = form.querySelector('input[placeholder="Apellidos"]').value.trim();
        // Normalizar DNI: quitar ceros a la izquierda y todos los espacios
        let dni = form.querySelector('input[placeholder="DNI"]').value.trim().replace(/^0+/, '').replace(/\s+/g, '');
        const correo = form.querySelector('input[placeholder="Correo electrónico"]').value.trim();
        const provincia = provinciaSelect.value;
        const direccion = form.querySelector('input[placeholder="Dirección"]').value.trim();
        const telefono = form.querySelector('input[placeholder="Teléfono"]').value.trim();

        // Validación avanzada
        if (!nombres || !apellidos || !dni || !correo || !provincia || !direccion || !telefono) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        // Validar correo electrónico
        if (!/^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9\.-]+)\.([a-zA-Z]{2,})$/.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(nombres)) {
            alert('El campo Nombre(s) solo debe contener letras y espacios.');
            return;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(apellidos)) {
            alert('El campo Apellidos solo debe contener letras y espacios.');
            return;
        }
        if (!/^\d{8}$/.test(dni)) {
            alert('El DNI debe tener exactamente 8 dígitos numéricos.');
            return;
        }
        if (!/^\d{9}$/.test(telefono)) {
            alert('El teléfono debe tener exactamente 9 dígitos numéricos.');
            return;
        }

        // Recuperar usuarios existentes
        let usuarios = [];
        try {
            usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        } catch (err) {
            // Si hay corrupción, limpiar y recargar automáticamente
            try {
                localStorage.removeItem('usuarios');
            } catch (e) {}
            alert('Se detectó un problema con los datos almacenados. El sistema ha restaurado el acceso. La página se recargará.');
            setTimeout(function() { location.reload(); }, 500);
            return;
        }
        console.log('Usuarios antes de registrar:', usuarios);
        // Verificar si el DNI ya existe (ignorando ceros a la izquierda y espacios)
        if (usuarios.some(u => (u.dni || '') === dni)) {
            alert('El DNI ya está registrado.');
            return;
        }
        // Guardar nuevo usuario
        usuarios.push({ nombres, apellidos, dni, correo, provincia, direccion, telefono });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        console.log('Usuarios después de registrar:', JSON.parse(localStorage.getItem('usuarios')));
        // Mensaje de éxito y redirección automática
        alert('Registro exitoso. Serás redirigido al acceso.');
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 500);
    });
});
