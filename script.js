const passwordInput = document.getElementById('password');
const generateBtn = document.querySelector('button');
const copyBtn = document.querySelector('.copy-btn');

function generatePassword(length = 12) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

generateBtn.addEventListener('click', () => {
    passwordInput.value = generatePassword();
});

copyBtn.addEventListener('click', () => {
    if (passwordInput.value) {
        passwordInput.select();
        document.execCommand('copy');
        copyBtn.style.filter = "brightness(1.5)";
        setTimeout(() => copyBtn.style.filter = "", 400);
    }
});