
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const password = params.get('password');

    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPassword').textContent = password;
});
