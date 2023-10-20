document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button__contact-us');
    const logoMail = document.querySelector('.logo__mail');
    const emailIconImg = document.getElementById('mail')
    const emailIconHoverImg = document.getElementById('mail-hover')
    const originalIcon = logoMail.getAttribute('src');

    button.addEventListener('mouseenter', function () {
        logoMail.setAttribute('src', hoverIcon);

    });

    button.addEventListener('mouseleave', function () {
        logoMail.setAttribute('src', originalIcon);
    });
});