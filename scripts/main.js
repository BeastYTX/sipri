document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'sipri1') {
        window.location.href = 'profile.html';
    } else {
        alert('Incorrect password.');
    }
});

document.getElementById('profilePasswordForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const memberPasswords = {
        'waris.html': 'Sachinrahutendulkar',
        'ayan.html': 'JomnyDick',
        'riyazudeen.html': 'Riyaz',
        'faris.html': 'FARIS@123',
        'rehan.html': 'agent',
        'paramveer.html': 'param123',
    };
    const password = document.getElementById('profilePassword').value;
    const page = window.location.pathname.split('/').pop();
    if (password === memberPasswords[page]) {
        alert('Access granted.');
        // Display the member profile information here.
    } else {
        alert('Incorrect password.');
    }
});
