let itens = [];


function adicionarItem() {
    const codigo = parseInt(document.getElementById("codigo").value);
    const preco = parseFloat(document.getElementById("preco").value);
    if (!codigo || isNaN(preco)) return alert("Campos inválidos!");

    itens.push({ codigo, preco });
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaItens");
    lista.innerHTML = '';
    itens.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Código: ${item.codigo}, Preço: R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });
}


function calcularTotal() {
    let total = 0;
    itens.forEach(item => {
        total += (item.codigo === 1 || item.codigo === 10) ? item.preco * 1.10 : item.preco;
    });
    document.getElementById("total").textContent = total.toFixed(2);
}
