// Funciones de Array en JavaScript
//Hola

//Transformar cada elemento y retorna un nuevo array
console.log("=== TRANSFORMAR() ===");
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(num => num * 2);
console.log("Original:", numeros);
console.log("Duplicados:", duplicados); // [2, 4, 6, 8, 10]

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 },
  { nombre: "María", edad: 28 }
];
const nombres = personas.map(p => p.nombre);
console.log("Nombres:", nombres); // ["Ana", "Juan", "María"]


//Filtrar elementos que cumplan una condición
console.log("\n=== FILTRAR() ===");
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros2.filter(num => num % 2 === 0);
console.log("Pares:", pares); // [2, 4, 6, 8, 10]

const mayoresDeEdad = personas.filter(p => p.edad >= 18);
console.log("Mayores de edad:", mayoresDeEdad);


//Acumular valores en un solo resultado
console.log("\n=== ACUMULAR() ===");
const numeros3 = [1, 2, 3, 4, 5];
const suma = numeros3.reduce((acumulador, num) => acumulador + num, 0);
console.log("Suma:", suma); // 15

const producto = numeros3.reduce((acum, num) => acum * num, 1);
console.log("Producto:", producto); // 120

// Contar ocurrencias
const frutas = ["manzana", "plátano", "manzana", "fresa", "plátano", "manzana"];
const conteo = frutas.reduce((acum, fruta) => {
  acum[fruta] = (acum[fruta] || 0) + 1;
  return acum;
}, {});
console.log("Conteo:", conteo); // { manzana: 3, plátano: 2, fresa: 1 }


//Iterar sobre cada elemento (sin retornar nuevo array)
console.log("\n=== FOREACH() ===");
const colores = ["rojo", "verde", "azul"];
colores.forEach((color, indice) => {
  console.log(`${indice}: ${color}`);
});


// 5. FIND() - Encuentra el PRIMER elemento que cumple la condición
console.log("\n=== FIND() ===");
const usuarios = [
  { id: 1, nombre: "Carlos" },
  { id: 2, nombre: "Laura" },
  { id: 3, nombre: "Pedro" }
];
const usuario = usuarios.find(u => u.id === 2);
console.log("Usuario encontrado:", usuario); // { id: 2, nombre: "Laura" }


// 6. FINDINDEX() - Encuentra el ÍNDICE del primer elemento que cumple
console.log("\n=== FINDINDEX() ===");
const indiceUsuario = usuarios.findIndex(u => u.nombre === "Pedro");
console.log("Índice:", indiceUsuario); // 2


// 7. SOME() - Verifica si AL MENOS UNO cumple la condición
console.log("\n=== SOME() ===");
const numeros4 = [10, 20, 25, 30];
const hayMayorDe30 = numeros4.some(num => num > 30);
const hayMayorDe20 = numeros4.some(num => num > 20);
console.log("¿Hay mayor a 30?:", hayMayorDe30); // false
console.log("¿Hay mayor a 20?:", hayMayorDe20); // true


// 8. EVERY() - Verifica si TODOS cumplen la condición
console.log("\n=== EVERY() ===");
const numeros5 = [2, 4, 6, 8, 10];
const todosPares = numeros5.every(num => num % 2 === 0);
console.log("¿Todos son pares?:", todosPares); // true

const numeros6 = [2, 4, 5, 8, 10];
const todosPares2 = numeros6.every(num => num % 2 === 0);
console.log("¿Todos son pares?:", todosPares2); // false


// 9. INCLUDES() - Verifica si el array contiene un elemento
console.log("\n=== INCLUDES() ===");
const letras = ["a", "b", "c", "d"];
console.log("¿Contiene 'b'?:", letras.includes("b")); // true
console.log("¿Contiene 'z'?:", letras.includes("z")); // false

const numeros7 = [10, 20, 30, 40];
console.log("¿Contiene 25?:", numeros7.includes(25)); // false


// 10. SORT() - Ordena los elementos del array
console.log("\n=== SORT() ===");
const numeros8 = [40, 15, 20, 3, 100];
console.log("Original:", numeros8);
numeros8.sort((a, b) => a - b); // Ascendente
console.log("Ascendente:", numeros8);

const numeros9 = [40, 15, 20, 3, 100];
numeros9.sort((a, b) => b - a); // Descendente
console.log("Descendente:", numeros9);

const personas2 = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 30 }
];
personas2.sort((a, b) => a.edad - b.edad);
console.log("Por edad:", personas2);


// 11. COMBINANDO FUNCIONES
console.log("\n=== COMBINANDO FUNCIONES ===");
const numeros10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = numeros10
  .filter(num => num > 3)           // [4, 5, 6, 7, 8, 9, 10]
  .map(num => num * 2)              // [8, 10, 12, 14, 16, 18, 20]
  .reduce((acum, num) => acum + num, 0); // suma = 98
console.log("Resultado:", resultado);


// 12. CONCAT() - Combina arrays
console.log("\n=== CONCAT() ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = arr1.concat(arr2);
console.log("Combinado:", combinado); // [1, 2, 3, 4, 5, 6]


// 13. SLICE() - Copia una parte del array
console.log("\n=== SLICE() ===");
const numeros11 = [0, 1, 2, 3, 4, 5];
const parte = numeros11.slice(2, 5);
console.log("Original:", numeros11);
console.log("Slice(2,5):", parte); // [2, 3, 4]


// 14. REVERSE() - Invierte el orden del array
console.log("\n=== REVERSE() ===");
const numeros12 = [1, 2, 3, 4, 5];
numeros12.reverse();
console.log("Invertido:", numeros12); // [5, 4, 3, 2, 1]


// 15. JOIN() - Convierte array a string
console.log("\n=== JOIN() ===");
const palabras = ["Hola", "Mundo", "JavaScript"];
const frase = palabras.join(" ");
console.log("Frase:", frase); // "Hola Mundo JavaScript"
