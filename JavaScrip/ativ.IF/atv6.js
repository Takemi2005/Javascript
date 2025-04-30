// Função para criar um objeto móvel
function criarMovel(tipo, material, cor, preco) {
    return {
        tipo: tipo,
        material: material,
        cor: cor,
        preco: preco
    };
}

// Lista para armazenar os móveis
let listaDeMoveis = [];

// Função para adicionar um novo móvel à lista
function adicionarMovel() {
    let tipo = prompt("Digite o tipo do móvel (cadeira, mesa, etc.):");
    let material = prompt("Digite o material do móvel:");
    let cor = prompt("Digite a cor do móvel:");
    let preco = parseFloat(prompt("Digite o preço do móvel:"));

    let movel = criarMovel(tipo, material, cor, preco);
    listaDeMoveis.push(movel);

    console.log("Móvel adicionado com sucesso!");
    console.log(listaDeMoveis);
}

// Exemplo de uso
adicionarMovel();