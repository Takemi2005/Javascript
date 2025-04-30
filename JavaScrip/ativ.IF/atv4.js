function verificarDesconto() {
    let quantidadeItens = parseInt(prompt("Digite a quantidade de itens comprados:"));
    let clienteVIP = prompt("Você é um cliente VIP? (sim/não)").toLowerCase();

    let desconto = 0;

    if (quantidadeItens > 10 && clienteVIP === "sim") {
        desconto = 20;
    } else if (quantidadeItens > 10) {
        desconto = 10;
    } else if (clienteVIP === "sim") {
        desconto = 5;
    }

    if (desconto > 0) {
        alert(`Você tem direito a um desconto de ${desconto}%.`);
    } else {
        alert("Você não tem direito a um desconto.");
    }
}

verificarDesconto();