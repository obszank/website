document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const messageElement = document.getElementById('message');

    // Load users from localStorage
    const loadUsers = () => {
        return JSON.parse(localStorage.getItem('users')) || [];
    };

    // Save users to localStorage
    const saveUsers = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    // Registration handler
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (username && password) {
            const users = loadUsers();
            const userExists = users.some(user => user.username === username);

            if (userExists) {
                messageElement.textContent = 'Username already exists!';
                messageElement.style.color = 'red';
            } else {
                users.push({ username, password });
                saveUsers(users);
                messageElement.textContent = 'Registration successful!';
                messageElement.style.color = 'green';
            }
        }
    });

    // Login handler
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username && password) {
            const users = loadUsers();
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                messageElement.textContent = 'Login successful!';
                messageElement.style.color = 'green';
            } else {
                messageElement.textContent = 'Invalid username or password!';
                messageElement.style.color = 'red';
            }
        }
    });
});
