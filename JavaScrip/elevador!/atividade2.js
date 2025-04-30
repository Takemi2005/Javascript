function finalizarServico() {
    const clientName = document.getElementById('clientName').value.trim();
    const service = document.getElementById('service');
    const serviceValue = parseInt(service.value);
    const serviceText = service.options[service.selectedIndex].text;

    if (!clientName) {
        alert('Por favor, insira o nome do cliente.');
        return;
    }

    if (serviceValue === 0) {
        alert('Por favor, selecione um serviço.');
        return;
    }

    const summary = `
        Serviço realizado: ${serviceText.split(' - ')[0]}<br>
        Nome do cliente: ${clientName}<br>
        Valor total: R$${serviceValue},00
    `;

    document.getElementById('summary').innerHTML = summary;
}