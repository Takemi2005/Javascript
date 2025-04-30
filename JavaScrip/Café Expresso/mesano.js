function exibirMesesComIf() {
    const lista = document.getElementById("mesesLista");

    for (let i = 1; i <= 12; i++) {
        let mes;
        if (i === 1) mes = "Janeiro";
        else if (i === 2) mes = "Fevereiro";
        else if (i === 3) mes = "Março";
        else if (i === 4) mes = "Abril";
        else if (i === 5) mes = "Maio";
        else if (i === 6) mes = "Junho";
        else if (i === 7) mes = "Julho";
        else if (i === 8) mes = "Agosto";
        else if (i === 9) mes = "Setembro";
        else if (i === 10) mes = "Outubro";
        else if (i === 11) mes = "Novembro";
        else if (i === 12) mes = "Dezembro";

        const li = document.createElement("li");
        li.textContent = mes;
        lista.appendChild(li);
    
    }
}

// Chama a função para exibir os meses na lista ao carregar a página
exibirMesesComIf();
