function calcularTroco() {
    let produto = prompt("Informe o produto que deseja comprar:");
    let valorProduto = parseFloat(prompt("Informe o valor do produto:"));
    let valorPago = parseFloat(prompt("Informe o valor pago pelo produto:"));

    if (isNaN(valorProduto) || isNaN(valorPago)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    let troco = valorPago - valorProduto;

    if (troco < 0) {
        alert("O valor pago é insuficiente para comprar o produto.");
    } else {
        alert(`Produto: ${produto}\nValor do Produto: R$${valorProduto.toFixed(2)}\nValor Pago: R$${valorPago.toFixed(2)}\nTroco: R$${troco.toFixed(2)}`);
    }
}