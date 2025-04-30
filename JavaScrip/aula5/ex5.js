const numeros = require("readline");

const num = numeros.createInterface({
    input: process.stdin,
    output: process.stdout,
});

num.question("Digite o primeiro número: ", (num1) => {
    num.question("Digite o segundo número: ",(num2) => {
        num.question("Digite o terceiro número: ",(num3) => {
            num.question("Digite o quarto número: ",(num4) => {
        let soma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
        console.log(`A soma dos números é: ${soma}`);
        num.close();
        });
    });
});
});



