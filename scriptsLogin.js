document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Limpiar campos de las pantallas
    function clearLoginFields() {
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');

        if (usernameField) {
            usernameField.value = '';
        }
        if (passwordField) {
            passwordField.value = '';
        }
    }

    function clearRegisterFields() {
        document.getElementById('name').value = '';
        document.getElementById('employee-id').value = '';
        document.getElementById('password-reg').value = '';
        document.getElementById('repeat-password').value = '';
    }

    // Eventos de botones
    const loginBtn = document.getElementById('login-btn');
    const cancelBtn = document.getElementById('cancel-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // Lógica de inicio de sesión
            window.location.href = 'app.html';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            clearLoginFields();
            window.location.href = 'index.html';
        });
    }

    const registerBtn = document.getElementById('register-btn');
    const backBtn = document.getElementById('back-btn');
    const errorBackBtn = document.getElementById('error-back-btn');
    const exitBtn = document.getElementById('exit-btn');

    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Lógica de registro
            window.location.href = 'login.html';
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            clearRegisterFields();
            window.location.href = 'index.html';
        });
    }

    if (errorBackBtn) {
        errorBackBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    if (exitBtn) {
        exitBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});