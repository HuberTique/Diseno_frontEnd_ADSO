document.addEventListener('DOMContentLoaded', function() {
    // Limpiar campos de las pantallas
    function clearLoginFields() {
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');
        if (usernameField) usernameField.value = '';
        if (passwordField) passwordField.value = '';
    }

    function clearRegisterFields() {
        const nameField = document.getElementById('name');
        const employeeIdField = document.getElementById('employee-id');
        const passwordRegField = document.getElementById('password-reg');
        const repeatPasswordField = document.getElementById('repeat-password');
        if (nameField) nameField.value = '';
        if (employeeIdField) employeeIdField.value = '';
        if (passwordRegField) passwordRegField.value = '';
        if (repeatPasswordField) repeatPasswordField.value = '';
    }

    // Mostrar pantalla de error
    function showErrorScreen() {
        window.location.href = 'error.html';
    }

    // Validar inicio de sesión
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                showErrorScreen();
            } else {
                // Aquí iría la lógica de validación de usuario
                // Si es incorrecto, llamamos a showErrorScreen()
                const validUser = false; // Cambia esta lógica por la validación real

                if (!validUser) {
                    showErrorScreen();
                } else {
                    window.location.href = 'app.html';
                }
            }
        });
    }

    const cancelBtn = document.getElementById('cancel-btn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            clearLoginFields();
            window.location.href = 'index.html';
        });
    }

    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Lógica de registro
            window.location.href = 'login.html';
        });
    }

    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            clearRegisterFields();
            window.location.href = 'index.html';
        });
    }

    const errorBackBtn = document.getElementById('error-back-btn');
    if (errorBackBtn) {
        errorBackBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    const exitBtn = document.getElementById('exit-btn');
    if (exitBtn) {
        exitBtn.addEventListener('click', function() {
            console.log('Botón "Atrás" clickeado');
            window.location.href = 'register.html';
        });
    }
});