function checkFields() {
    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const message = document.getElementById('message');
    if (field1 && field2) {
        message.textContent = "Обидва поля заповнені";
    } else {
        message.textContent = "Не всі поля заповнені";
    }
}

function checkSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sumMessage = document.getElementById('sumMessage');
    if (num1 + num2 > 10) {
        sumMessage.textContent = "Сума більша за 10";
    } else {
        sumMessage.textContent = "Сума менша або дорівнює 10";
    }
}

function checkText() {
    const text = document.getElementById('textField').value;
    const textMessage = document.getElementById('textMessage');
    if (text.includes("JavaScript")) {
        textMessage.textContent = "Текст містить слово JavaScript";
    } else {
        textMessage.textContent = "Текст не містить слово JavaScript";
    }
}

function checkNumberRange() {
    const number = parseFloat(document.getElementById('numberField').value);
    const rangeMessage = document.getElementById('rangeMessage');
    if (number > 10 && number < 20) {
        rangeMessage.textContent = "Число входить в діапазон від 10 до 20";
    } else {
        rangeMessage.textContent = "Число не входить в діапазон від 10 до 20";
    }
}

function validateForm() {
    const name = document.getElementById('nameField').value;
    const email = document.getElementById('emailField').value;
    const password = document.getElementById('passwordField').value;
    const formMessage = document.getElementById('formMessage');
    const isValidEmail = email.includes('@') && email.indexOf('.') > email.indexOf('@');
    const isValidPassword = password.length >= 6;
    if (name.length >= 3 && isValidEmail && isValidPassword) {
        formMessage.textContent = "Дані правильні, перенаправлення...";
        window.location.href = "https://example.com"; // Заміна URL на потрібну сторінку
    } else {
        formMessage.textContent = "Помилка: Перевірте правильність введених даних";
    }
}