document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const includeSpaces = document.getElementById('spaces').checked;

    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    if (includeSpaces) charset += ' ';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
    updateStrength(password);
}

function copyPassword() {
    const password = document.getElementById('password');
    password.select();
    password.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function updateStrength(password) {
    const strength = document.getElementById('strength');
    if (password.length < 14) {
        strength.textContent = 'Zayıf';
        strength.style.color = 'red';
    } else if (password.length < 20) {
        strength.textContent = 'Orta';
        strength.style.color = 'orange';
    } else {
        strength.textContent = 'Güçlü';
        strength.style.color = 'yellow';
    }
    if (password.length >= 26) {
        strength.textContent = 'Çok Güçlü';
        strength.style.color = 'lime';
    }
}














      