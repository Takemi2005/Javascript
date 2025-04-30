function criarDisco() {
    let titulo = prompt("Digite o título do disco:");
    let artista = prompt("Digite o nome do artista:");
    let anoLancamento = prompt("Digite o ano de lançamento:");
    let preco = prompt("Digite o preço do disco:");

    let disco = {
        titulo: titulo,
        artista: artista,
        anoLancamento: anoLancamento,
        preco: preco
    };

    return disco;
}

let novoDisco = criarDisco();
console.log(novoDisco);