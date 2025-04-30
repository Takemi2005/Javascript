document.getElementById('reserveButton').addEventListener('click', function() {
    const nomeCliente = prompt("Digite o nome do cliente:");
    const produto = prompt("Digite o nome do produto:");
    const quantidade = prompt("Digite a quantidade:");

    if (nomeCliente && produto && quantidade) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p><strong>Reserva Confirmada!</strong></p>
            <p>Cliente: ${nomeCliente}</p>
            <p>Produto: ${produto}</p>
            <p>Quantidade: ${quantidade}</p>
        `;
    } else {
        alert("Por favor, preencha todas as informações.");
    }
});