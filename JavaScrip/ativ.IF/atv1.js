
function verificarHabilitacao(temHabilitacao) {
 let idade = prompt('Informe a sua idade: ');   
 
 if (idade >= 18 && temHabilitacao) {
        alert('Maior de idade e possui habilitação para dirigir');
    } else if (idade >= 18 && !temHabilitacao) {
        alert('Maior de idade, mas não possui habilitação para dirigir');
    } else {
       alert('Menor de idade e não pode dirigir');
    }
}


// Exemplo de uso da função
verificarHabilitacao(20, true); // Maior de idade e possui habilitação para dirigir
verificarHabilitacao(20, false); // Maior de idade, mas não possui habilitação para dirigir
verificarHabilitacao(16, false); // Menor de idade e não pode dirigir