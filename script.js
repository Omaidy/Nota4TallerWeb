document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('correo').value;
    const password = document.getElementById('contra').value;

    // Guardar los datos en localStorage
    localStorage.setItem('correo', email);
    localStorage.setItem('contra', password);


    window.location.href = 'index2.html';
});
