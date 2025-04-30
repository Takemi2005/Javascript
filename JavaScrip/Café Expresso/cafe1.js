let total = 0;

    function adicionarItem() {
        const itemSelect = document.getElementById('item');
        const valor = parseFloat(itemSelect.value);
        const texto = itemSelect.options[itemSelect.selectedIndex].text;

        const pedidoList = document.getElementById('pedido');
        const listItem = document.createElement('li');
        listItem.textContent = texto;
        pedidoList.appendChild(listItem);

        total += valor;
        document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
    }