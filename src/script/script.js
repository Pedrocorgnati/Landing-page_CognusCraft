/*let emails = [];

function saveEmail() {
    const emailInput = document.querySelector('.input__email');
    if (emailInput && emailInput.value) {
        emails.push(emailInput.value);
        console.log('E-mail adicionado:', emailInput.value);
    } else {
        console.log('Please, insert your E-mail.');
    }
}

document.querySelector('.input__email').addEventListener('change', saveEmail); 

/*Color testing*/
document.getElementsByClassName('button__testing-color')[0].addEventListener('click', function() { 
    const selectedColor = document.getElementsByClassName('select__primary-color')[0].value; 
    const rootStyle = document.documentElement.style;
    
    rootStyle.setProperty('--primary-background', selectedColor);
    rootStyle.setProperty('--primary-color', selectedColor);
});

document.getElementsByClassName('button__testing-color')[0].addEventListener('click', function() { 
    const selectedColor = document.getElementsByClassName('select__secondary-color')[0].value; 
    const rootStyle = document.documentElement.style;
    
    rootStyle.setProperty('--secondary-background', selectedColor);
    rootStyle.setProperty('--secondary-color', selectedColor);
});