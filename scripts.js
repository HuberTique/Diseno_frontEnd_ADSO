document.addEventListener('DOMContentLoaded', function () {
    // Limpiar campos de las pantallas
    function clearFields() {
        document.getElementById('ean-plu').value = '';
        document.getElementById('description').value = '';
        document.getElementById('cost').value = '';
        document.getElementById('detalle-compra').value = '';
    }

    document.getElementById('exit-btn').addEventListener('click', function() {
        clearFields();
        console.log('Botón "Salir" clickeado');
        window.location.href = 'index.html';
    });
});


