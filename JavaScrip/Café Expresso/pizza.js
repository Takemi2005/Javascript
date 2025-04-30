function verificarBrinde() {
    const pizza1 = document.getElementById("pizza1").value.toLowerCase();
    const pizza2 = document.getElementById("pizza2").value.toLowerCase();
    let mensagem = "";

    if (pizza1 === "grande" && pizza2 === "grande") {
        mensagem = "Você ganhou um refrigerante de 2 litros!";
    } else if (
        (pizza1 === "média" && pizza2 === "pequena") ||
        (pizza1 === "pequena" && pizza2 === "média")
    ) {
        mensagem = "Você ganhou uma porção de pão de alho!";
    } else {
        mensagem = "Você não ganhou nenhum brinde.";
    }

    document.getElementById("resultado").textContent = mensagem;
}