function mostrarAntecessorSucessor() {
    const numero = parseInt(document.getElementById('numero').value);
    const antecessor = numero - 1;
    const sucessor = numero + 1;
    alert(`O número ${numero} possui o antecessor ${antecessor} e o sucessor ${sucessor}.`);
}