function changeColor() {
    const option = document.getElementById('colorOption').value;
    const message = document.getElementById('message');

    if (option == 1) {
        message.textContent = 'Vermelho';
        message.className = 'red';
    } else if (option == 2) {
        message.textContent = 'Verde';
        message.className = 'green';
    } else if (option == 3) {
        message.textContent = 'Laranja';
        message.className = 'orange';
    } else {
        message.textContent = 'Opção inválida!';
        message.className = '';
    }
}