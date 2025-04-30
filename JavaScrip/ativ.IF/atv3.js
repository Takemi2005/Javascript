function verificarVoto() {
    var idade = prompt("Digite sua idade:");
    var nacionalidade = prompt("Digite sua nacionalidade:");

    idade = parseInt(idade);

    if (nacionalidade.toLowerCase() === "brasileira" && idade >= 16) {
        alert("Você pode votar.");
    } else {
        alert("Você não pode votar.");
    }
}

verificarVoto();