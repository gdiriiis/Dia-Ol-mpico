document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    // Aqui você pode adicionar a lógica para enviar esses dados para um servidor
    console.log('Inscrição realizada:', name, email, age);

    alert('Obrigado por se inscrever, ' + name + '!');
};