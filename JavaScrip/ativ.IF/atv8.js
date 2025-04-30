function escolherPlanoStreaming() {
    const planos = {
        'Netflix': 39.90,
        'Amazon Prime': 9.90,
        'Disney+': 27.90,
        'HBO Max': 34.90
    };

    let mensagem = "Escolha um plano de streaming:\n";
    for (let plano in planos) {
        mensagem += `${plano}: R$${planos[plano].toFixed(2)}\n`;
    }

    let escolha = prompt(mensagem);
    if (planos[escolha]) {
        alert(`Você escolheu o plano ${escolha} com o valor de R$${planos[escolha].toFixed(2)}`);
    } else {
        alert("Plano inválido. Por favor, tente novamente.");
    }
}

escolherPlanoStreaming();