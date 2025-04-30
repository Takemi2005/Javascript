// exercicios

// imprimr 11 vezes olá mundo

let hello = "Olá Mundo";
for (let i = 0; i < 11; i++) {
    console.log(hello);
}

// imprimir uma tabuada 
let tabuada = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}

// imprimir a soma dos numeros impares de 1 a 100
let impares = 1; 
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        impares += i;
        console.log(i);
    }
}

console.log(impares);


// imprimir o resultado contagem regresiva de 10 a 1 e feliz ano novo

for (let i = 10; i >= 1; i--) {
    console.log(i);
    if (i === 1) {
        console.log("Feliz Ano Novo");
    }
}

// Exemplo 1: Verificação de Categoria de Idade

let idade = 15;
if (idade < 12) {
    console.log("Criança");
} else if (idade < 18) {    
    console.log("Adolescente");
}   else if (idade < 60) {  
    console.log("Adulto");
}   else { 
    console.log("Idoso");
}

//Exemplo 2: Verificação de Nota com Mensagem

let nota = 100;
function verificarNota(nota) {
    if (nota >= 90 && nota <= 100) {
        console.log("A");
    } else if (nota >= 80 && nota < 90) {
        console.log("B");
    } else if (nota >= 70 && nota < 80) {
        console.log("C");
    } else if (nota >= 60 && nota < 70) {    
        console.log("D");
    } else if (nota >= 50 && nota < 60) {
        console.log("E");
    } else if (nota < 50 && nota >= 0) {
        console.log("F");
    } else {
        console.log("Nota inválida");
    }   
}
verificarNota(nota);

//Exemplo 3: Verificação de Dia da Semana

let dia = 1;
function verificarDia(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Dia inválido");
    }
}
verificarDia(dia);

//Exemplo 4: Verificação de Horário do Dia

let hora = 12;
function verificarHora(hora) {
    if (hora >= 0 && hora < 12) {
        console.log("Bom dia");
    } else if (hora >= 12 && hora < 18) {
        console.log("Boa tarde");
    } else if (hora >= 18 && hora <= 23) {
        console.log("Boa noite");
    } else {
        console.log("Hora inválida");
    }
}
verificarHora(hora);

//Exemplo 5: Verificação de Peso Ideal
let altura = 1.70;
let sexo = "F";
function verificarPesoIdeal(altura, sexo) { 
    let pesoIdeal;
    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "F") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        console.log("Sexo inválido");
    }
    console.log(`O peso ideal é ${pesoIdeal.toFixed(2)} kg`);
}
verificarPesoIdeal(altura, sexo);

//Exemplo 6: Verificação de Número Primo
let numero = 7;
function verificarPrimo(numero) {
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }
    if (divisores === 2) {
        console.log("É primo");
    } else {
        console.log("Não é primo");
    }
}
verificarPrimo(numero);

// ### Exemplo 7: Verificação de Ano Bissexto
let ano = 2020;
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log("É bissexto");
    } else {
        console.log("Não é bissexto");
    }
}
verificarAnoBissexto(ano);

//Exemplo 8: Verificação de Nota com Mensagem Personalizada
let nota2 = 100;
let mensagem;
function verificarNotaPersonalizada(nota2) {
    if (nota2 >= 90 && nota2 <= 100) {
        mensagem = "Parabéns, você tirou a nota A!";
    } else if (nota2 >= 80 && nota2 < 90) {
        mensagem = "Muito bem, você tirou a nota B!";
    } else if (nota2 >= 70 && nota2 < 80) {
        mensagem = "Você tirou a nota C!";
    } else if (nota2 >= 60 && nota2 < 70) {
        mensagem = "Você tirou a nota D!";
    } else if (nota2 >= 50 && nota2 < 60) {
        mensagem = "Você tirou a nota E!";
    } else if (nota2 < 50 && nota2 >= 0) {
        mensagem = "Você tirou a nota F!";
    } else {
        mensagem = "Nota inválida";
    }
    console.log(mensagem);
}
verificarNotaPersonalizada(nota2);

// Exemplo 9: Verificação de Temperatura com Mensagem
let temperatura = 25;
let mensagem2;
function verificarTemperatura(temperatura) {
    if (temperatura < 10) {
        mensagem2 = "Está muito frio!";
    } else if (temperatura >= 10 && temperatura < 20) {
        mensagem2 = "Está frio!";
    } else if (temperatura >= 20 && temperatura < 30) {
        mensagem2 = "Está agradável!";
    } else if (temperatura >= 30 && temperatura < 40) {
        mensagem2 = "Está quente!";
    } else if (temperatura >= 40) {
        mensagem2 = "Está muito quente!";
    } else {
        mensagem2 = "Temperatura inválida";
    }
    console.log(mensagem2);
}
verificarTemperatura(temperatura);

//Exemplo 10: Verificação de Desempenho de Vendas
let vendas = 10000;
function verificarDesempenho(vendas) {
    if (vendas < 10000) {
        console.log("Desempenho ruim");
    } else if (vendas >= 10000 && vendas < 50000) {
        console.log("Desempenho bom");
    } else if (vendas >= 50000 && vendas < 100000) {
        console.log("Desempenho ótimo");
    } else if (vendas >= 100000) {
        console.log("Desempenho excelente");
    } else {
        console.log("Valor de vendas inválido");
    }
}
verificarDesempenho(vendas);

//