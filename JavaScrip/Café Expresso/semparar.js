document.getElementById('placaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const placa = document.getElementById('placa').value.toUpperCase();
    const resultado = document.getElementById('resultado');

    if (placa.startsWith('ABC')) {
        resultado.textContent = 'Acesso liberado. Sem cobrança de tarifa.';
    } else {
        resultado.textContent = 'Acesso cobrado. Valor: R$1,00.';
    }
});