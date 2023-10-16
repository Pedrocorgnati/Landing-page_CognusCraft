let emails = [];

function saveEmail() {
    const emailInput = document.querySelector('.input__email');
    if (emailInput && emailInput.value) {
        emails.push(emailInput.value);
        console.log('E-mail adicionado:', emailInput.value);
    } else {
        console.log('Please, insert your E-mail.');
    }
}

document.querySelector('.input__email').addEventListener('change', addEmailToArray);