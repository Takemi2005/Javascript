function verificarAcesso() {
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    const usuario = prompt("Digite seu nome de usuário:");
    const senha = prompt("Digite sua senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Acesso concedido!");
    } else {
        alert("Acesso negado!");
    }
}

verificarAcesso();