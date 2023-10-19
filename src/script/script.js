document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button__contact-us');
    const logoMail = document.querySelector('.logo__mail');
    const originalIcon = logoMail.getAttribute('src');
    const hoverIcon = logoMail.getAttribute('data-hover-icon');

    button.addEventListener('mouseenter', function() {
        logoMail.setAttribute('src', hoverIcon);
    });

    button.addEventListener('mouseleave', function() {
        logoMail.setAttribute('src', originalIcon);
    });
});