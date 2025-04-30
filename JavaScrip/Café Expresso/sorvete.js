function pedido(tipo) {
    let mensagem = '';
    if (tipo === 'casquinha') {
        mensagem = 'Você pediu uma casquinha e ganhou outra de graça!';
    } else if (tipo === 'picolé') {
        mensagem = 'Você pediu um picolé e ganhou um cupom de desconto para a próxima compra!';
    }
    document.getElementById('resultado').innerText = mensagem;
}
