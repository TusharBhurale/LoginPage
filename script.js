document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    // Toggle to registration form
    document.getElementById('show-register-link').addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Toggle to login form
    document.getElementById('show-login-link').addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Handle login form submission
    document.querySelector('#login-form form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = this.querySelector('input[type="text"]').value.trim();
        const password = this.querySelector('input[type="password"]').value.trim();

        if (username === '' || password === '') {
            Toastify({
                text: "Please fill out all fields.",
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #ff6b6b, #f06595)",
            }).showToast();
            return;
        }

        Toastify({
            text: "Login successful!",
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    });

    // Handle registration form submission
    document.querySelector('#register-form form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const password = this.querySelector('input[type="password"]').value.trim();
        const confirmPassword = this.querySelector('input[type="password"]').nextElementSibling.value.trim();

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            Toastify({
                text: "Please fill out all fields.",
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #ff6b6b, #f06595)",
            }).showToast();
            return;
        }

        if (password !== confirmPassword) {
            Toastify({
                text: "Passwords do not match.",
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #ff6b6b, #f06595)",
            }).showToast();
            return;
        }

        Toastify({
            text: "Registration successful!",
            duration: 3000,
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    });
});
