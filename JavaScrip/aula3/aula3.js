// Operador logico E valores
let a = true;
let b = false;
let c = true;
let d = false;

console.log("Resultado de a && b: " + (a && b));//falso
console.log("a && true"); // verdadeiro
console.log("Resultado de a c:" + a && c);//verdadeiro

// Operador logico OU (||) com valores booleanos
let e = true;
let f = false;
let g = false;
let h = true;


console.log("Resultado de e || f: " + ( e || f));//verdadeiro
console.log("Resultado de f || h: " + (f || h));//falso
console.log("Resultado de f || g: " + (f || g));//verdadeiro
console.log("Resultado de g || h: " + (g || h));//verdadeiro

// Operador logico NÃO (!) booleanos

let i = true;
let j = false;
let k = true;
let l = true;

console.log("Resultado !i:" + !i); //falso
console.log("Resultado de !j:" + !j); //verdadeiro
console.log("Resultadode !k:"+ !k); //falso
console.log("Resultadode !l:"+ !l); //falso
  


// Operador E (&&)

let ab = true;
let bc = true;

let eResultado = ab && bc;
console.log("Resultado de ab && bc: " + eResultado);//falso

// Operador OU (||)
let ouResultado = ab || bc;
console.log("Resultado de a || b: " + eResultado);//verdadeiro

// Operador NÃO (!)
let naoResultado = !ab;
console.log("Resultado de ! ab: " + naoResultado);//

//Combinação de operadores lógicos 
let combinados = (ab && !bc) || (!ab && bc);
console.log("Resultado de ab ");


// Exemplos de operadores lógicos com valors numéricos 

let x = 10;
let y = 5;
let z = 0;

// Operador E (&&) com valores numéricos
let ResultadoE = (x > y) && (y > z);
console.log("Resultado de (x > y) && (y > z): " + ResultadoE);//verdadeiro
console.log("Resultado de (z < y) && (x > z):" + (z < y) && (x > z));//

// Operadores OU (||) com valores numéricos 
let ResultadoOU = (x < y) || (y > z);
console.log("Resultado de (x < y) || (y > z): " + ResultadoOU);//



// Operador NÃO (!) com valores numéricos 
let ResultadoN = !(x < y );
console.log("Resultado de ! (x < y):" + ResultadoN);//

// Combinação de operadores lógicos com valores numéricos 
let ResultadoC = ((x > y) && (y > z)) || ((x < y ) && (z > y));
console.log("Resultado de ((x > y) && (y > z)) || ((x < y) && (z > y)):" + ResultadoC); //



