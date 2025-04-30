function calcularIngressos() {
    let quantidade = parseInt(prompt("Digite a quantidade de ingressos:"));
    let tipoIngresso = prompt("Digite o tipo de ingresso (VIP, Pista, Arquibancada):");

    let valorIngresso;
    switch (tipoIngresso.toLowerCase()) {
        case 'vip':
            valorIngresso = 200;
            break;
        case 'pista':
            valorIngresso = 100;
            break;
        case 'arquibancada':
            valorIngresso = 50;
            break;
        default:
            alert("Tipo de ingresso inválido!");
            return;
    }

    let valorTotal = quantidade * valorIngresso;

    alert(`Você comprou ${quantidade} ingressos do tipo ${tipoIngresso}.\nValor total: R$ ${valorTotal}`);
}

calcularIngressos();