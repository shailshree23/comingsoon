// Example: Handling login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Example: Send credentials to server for validation
    if (email && password) {
        // You would send these details to the backend for authentication
        alert('Logging in...');
        // Redirect user to the dashboard after successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Please fill out both fields.');
    }
});
