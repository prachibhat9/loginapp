document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('error-message');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password === confirmPassword) {
            // Redirect to the login page
            window.location.href = 'index.html';
        } else {
            // Display an error message
            errorMessage.textContent = 'Passwords do not match. Please try again.';
        }
    });
});
