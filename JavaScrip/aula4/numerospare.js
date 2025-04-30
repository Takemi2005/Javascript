// imprimir números pares de 1 a 20

for (let i = 1; i <= 20; i++) 

    if (i % 2 === 0) {
        console.log(i);
    }

    let numero = 5;
    numero = Number(numero)

    let fatoral = 1;
    for (let i = 1; i <= numero; i++) {
        fatoral = fatoral *= i;
    }

    console.log(`o fatorial de ${numero} é ${fatoral}`);

    // Iterar sobre um array
    let frutas = ["maça", "banana", "laranja", ];
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }   

    // Iterar sobre um objeto
    let marcas = ['apple', 'samsung', 'motorola'];
    for (let i = 0; i < marcas.length; i++) {
        console.log(marcas[i]);
    }
    console.log(marcas);


    //calcular a soma de numeros

    let soma = 0 
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    console.log(soma);

    