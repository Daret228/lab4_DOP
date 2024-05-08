document.getElementById("form").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var passInput = document.getElementById("pass");
    var emailInput = document.getElementById("email");
    var tellInput = document.getElementById("tell");

    if (!isValidName(nameInput.value)) {
        document.getElementById("nameError").textContent = "Введите имя";
        event.preventDefault();
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (!isValidPassword(passInput.value)) {
        document.getElementById("passError").textContent = "Введите больше 8 символов";
        event.preventDefault();
    } else {
        document.getElementById("passError").textContent = "";
    }

    if (!isValidEmail(emailInput.value)) {
        document.getElementById("emailError").textContent = "Введите email в формате пример@пример.пример";
        event.preventDefault();
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (!isValidPhone(tellInput.value)) {
        document.getElementById("tellError").textContent = "Введите корректный номер телефона";
        event.preventDefault();
    } else {
        document.getElementById("tellError").textContent = "";
    }
});

function isValidName(name) {
    return name.trim() !== '';
}

function isValidPassword(password) {
    return password.length >= 8;
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    let phoneRegex = /^((\+7)|8)\d{10}$/;
    return phoneRegex.test(phone);
}