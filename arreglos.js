// VARIABLES Y ARREGLOS

// LET
let arreglo1 = [1, 2, 3, 4, 5];
let arreglo2 = [10, 20, 30, 40, 50];
let arreglo3 = [100, 200, 300, 400, 500];
let arreglo4 = [1000, 2000, 3000, 4000, 5000];

let suma1 = arreglo1.reduce((acum, valor) => acum + valor, 0);
let suma2 = arreglo2.reduce((acum, valor) => acum + valor, 0);
let suma3 = arreglo3.reduce((acum, valor) => acum + valor, 0);
let suma4 = arreglo4.reduce((acum, valor) => acum + valor, 0);

let filtrado1 = arreglo1.filter(valor => valor > 2);
let filtrado2 = arreglo2.filter(valor => valor > 20);
let filtrado3 = arreglo3.filter(valor => valor > 200);
let filtrado4 = arreglo4.filter(valor => valor > 2000);

let mapeado1 = arreglo1.map(valor => valor * 2);
let mapeado2 = arreglo2.map(valor => valor * 2);
let mapeado3 = arreglo3.map(valor => valor * 2);
let mapeado4 = arreglo4.map(valor => valor * 2);

let forEach1 = arreglo1.forEach(valor => console.log(`Valor del arreglo1: ${valor}`));
let forEach2 = arreglo2.forEach(valor => console.log(`Valor del arreglo2: ${valor}`));
let forEach3 = arreglo3.forEach(valor => console.log(`Valor del arreglo3: ${valor}`));
let forEach4 = arreglo4.forEach(valor => console.log(`Valor del arreglo4: ${valor}`));

// RESULTADOS
console.log("Resultados de .reduce():");
console.log(`Suma arreglo1: ${suma1}`);
console.log(`Suma arreglo2: ${suma2}`);
console.log(`Suma arreglo3: ${suma3}`);
console.log(`Suma arreglo4: ${suma4}`);

console.log("\nResultados de .filter():");
console.log(`Filtrado arreglo1: ${filtrado1}`);
console.log(`Filtrado arreglo2: ${filtrado2}`);
console.log(`Filtrado arreglo3: ${filtrado3}`);
console.log(`Filtrado arreglo4: ${filtrado4}`);

console.log("\nResultados de .map():");
console.log(`Mapeado arreglo1: ${mapeado1}`);
console.log(`Mapeado arreglo2: ${mapeado2}`);
console.log(`Mapeado arreglo3: ${mapeado3}`);
console.log(`Mapeado arreglo4: ${mapeado4}`);

// FUNCIONES FLECHA


const saludo = () => console.log("Hola Mundo");

// un parametro
const cuadrado = num => num * num;

// dos parametros
const sumar = (a, b) => a + b;

// tres parametros
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

// con retorno
const crearPersona = (nombre, edad) => ({ nombre, edad });

// LLAMADAS A LAS FUNCIONES FLECHA
saludo();
console.log(`Cuadrado de 5: ${cuadrado(5)}`);
console.log(`Suma de 3 y 4: ${sumar(3, 4)}`);
console.log(`Area de un triangulo de base 10 y altura 5: ${calcularAreaTriangulo(10, 5)}`);
console.log(crearPersona('Juan', 25));