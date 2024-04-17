document.getElementById("form").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var passInput = document.getElementById("pass");
    var emailInput = document.getElementById("email");
    var tellInput = document.getElementById("tell");

    if (!isValidName(nameInput.value)) {
        alert("Введите имя");
    }

    if (!isValidPassword(passInput.value)) {
        alert("Введите пароль от 6ти символов");
    }

    if (!isValidEmail(emailInput.value)) {
        alert("Введите корректный email");
    }

    if (!isValidPhone(tellInput.value)) {
        alert("Введите корректный номер телефона");
    }
});

function isValidName(name) {
    return name.trim() !== '';
}

function isValidPassword(password) {
    return password.length >= 6;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    var phoneRegex = /^((\+7)|8)\d{10}$/;
    return phone;
}