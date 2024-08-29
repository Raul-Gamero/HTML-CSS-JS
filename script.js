document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;

    if (email === '' || nombre === '') {
      alert('Completa todos los campos.');
    } else {
      alert(`Gracias por contactarnos ${nombre}!`);
      form.reset();
    }
  });
});
