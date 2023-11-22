// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється `<div>`.
// При пропажі фокусу `<div>` так само пропадає

const input = document.querySelector('#inputField');

input.addEventListener('focusin', function() {
    const guestDiv = document.createElement('div');

    guestDiv.classList.add('ghost');
    this.after(guestDiv);
});

input.addEventListener('focusout', function() {
    this.nextElementSibling.remove();
});
