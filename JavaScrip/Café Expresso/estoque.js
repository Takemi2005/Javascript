function verificarEstoque() {
    const produtos = [
        { nome: "Café", quantidade: 25 },
        { nome: "Açúcar", quantidade: 120 },
        { nome: "Leite", quantidade: 80 }
    ];

    let resultado = "";

    produtos.forEach(produto => {
        if (produto.quantidade < 30) {
            resultado += `${produto.nome}: Estoque Baixo<br>`;
        } else if (produto.quantidade > 100) {
            resultado += `${produto.nome}: Estoque Bom<br>`;
        } else {
            resultado += `${produto.nome}: Estoque Regular<br>`;
        }
    });

    document.getElementById("resultado").innerHTML = resultado;
}