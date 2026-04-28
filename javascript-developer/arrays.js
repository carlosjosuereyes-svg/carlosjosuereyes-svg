// ARRAYS EN JAVASCRIPT - EJEMPLOS COMPLETOS

// 1. CREAR UN ARRAY SIMPLE
console.log("=== CREAR ARRAYS ===");
const frutas = ["manzana", "plátano", "naranja"];
console.log(frutas);

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

const mixto = [1, "texto", true, 3.14, null];
console.log(mixto);

// Array vacío
const vacio = [];
console.log(vacio);

// Array usando constructor
const arr = new Array(1, 2, 3, 4);
console.log(arr);


// 2. ACCEDER A ELEMENTOS
console.log("\n=== ACCEDER A ELEMENTOS ===");
const colores = ["rojo", "verde", "azul", "amarillo"];
console.log(colores[0]); // rojo
console.log(colores[2]); // azul
console.log(colores[colores.length - 1]); // amarillo (último)

// Destructuring
const [primero, segundo, ...resto] = colores;
console.log("Primero:", primero);
console.log("Segundo:", segundo);
console.log("Resto:", resto);


// 3. PROPIEDADES BÁSICAS
console.log("\n=== PROPIEDADES ===");
const animales = ["perro", "gato", "pajaro", "pez"];
console.log("Longitud:", animales.length); // 4
console.log("¿Es un array?:", Array.isArray(animales)); // true
console.log("¿Es un array los números?:", Array.isArray(numeros)); // true


// 4. AGREGAR Y ELIMINAR ELEMENTOS
console.log("\n=== AGREGAR Y ELIMINAR ===");

// PUSH - Agregar al final
let lista = [1, 2, 3];
lista.push(4);
console.log("Después de push(4):", lista); // [1, 2, 3, 4]
lista.push(5, 6);
console.log("Después de push(5, 6):", lista); // [1, 2, 3, 4, 5, 6]

// POP - Eliminar del final
let eliminado = lista.pop();
console.log("Eliminado:", eliminado); // 6
console.log("Lista:", lista); // [1, 2, 3, 4, 5]

// UNSHIFT - Agregar al inicio
lista.unshift(0);
console.log("Después de unshift(0):", lista); // [0, 1, 2, 3, 4, 5]

// SHIFT - Eliminar del inicio
eliminado = lista.shift();
console.log("Eliminado:", eliminado); // 0
console.log("Lista:", lista); // [1, 2, 3, 4, 5]


// 5. BUSCAR ELEMENTOS
console.log("\n=== BUSCAR ELEMENTOS ===");
const numeros2 = [10, 20, 30, 40, 50];

// indexOf - Primera posición
console.log("Índice de 30:", numeros2.indexOf(30)); // 2
console.log("Índice de 99:", numeros2.indexOf(99)); // -1

// lastIndexOf - Última posición
const duplicados = [5, 10, 15, 10, 20];
console.log("Último índice de 10:", duplicados.lastIndexOf(10)); // 3

// includes - ¿Está presente?
console.log("¿Contiene 40?:", numeros2.includes(40)); // true
console.log("¿Contiene 99?:", numeros2.includes(99)); // false


// 6. RECORRER ARRAYS
console.log("\n=== RECORRER ARRAYS ===");

// FOR tradicional
console.log("--- FOR tradicional ---");
for (let i = 0; i < frutas.length; i++) {
  console.log(i + ":", frutas[i]);
}

// FOR...OF
console.log("--- FOR...OF ---");
for (const fruta of frutas) {
  console.log(fruta);
}

// WHILE
console.log("--- WHILE ---");
let contador = 0;
while (contador < frutas.length) {
  console.log(frutas[contador]);
  contador++;
}


// 7. EJEMPLOS PRÁCTICOS
console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Estudiantes con calificaciones
const estudiantes = [
  { nombre: "Ana", calificacion: 85 },
  { nombre: "Carlos", calificacion: 92 },
  { nombre: "Laura", calificacion: 78 },
  { nombre: "Juan", calificacion: 88 }
];
console.log("Estudiantes:", estudiantes);

// Obtener solo nombres
const nombres = estudiantes.map(est => est.nombre);
console.log("Nombres:", nombres);

// Filtrar aprobados (>= 80)
const aprobados = estudiantes.filter(est => est.calificacion >= 80);
console.log("Aprobados:", aprobados);

// Calcular promedio
const suma = estudiantes.reduce((acum, est) => acum + est.calificacion, 0);
const promedio = suma / estudiantes.length;
console.log("Promedio:", promedio);


// 8. COMBINAR ARRAYS
console.log("\n=== COMBINAR ARRAYS ===");
const grupo1 = ["Alice", "Bob"];
const grupo2 = ["Charlie", "David"];

// concat
const todos = grupo1.concat(grupo2);
console.log("Con concat:", todos);

// spread operator
const todos2 = [...grupo1, ...grupo2];
console.log("Con spread:", todos2);

// Agregar elemento en medio
const mitad = [...grupo1, "Eve", ...grupo2];
console.log("Con elemento en medio:", mitad);


// 9. COPIAR ARRAYS
console.log("\n=== COPIAR ARRAYS ===");
const original = [1, 2, 3, 4, 5];

// Copia superficial
const copia1 = [...original];
const copia2 = original.slice();

console.log("Original:", original);
console.log("Copia 1:", copia1);
console.log("Copia 2:", copia2);

// Modificar copia no afecta original
copia1[0] = 999;
console.log("Después de modificar copia:", original); // [1, 2, 3, 4, 5]
console.log("Copia modificada:", copia1); // [999, 2, 3, 4, 5]


// 10. VERIFICACIONES
console.log("\n=== VERIFICACIONES ===");
const numeros3 = [2, 4, 6, 8, 10];
const numeros4 = [2, 4, 5, 8, 10];

// some - ¿Alguno cumple?
console.log("¿Hay número > 8?:", numeros3.some(n => n > 8)); // true

// every - ¿Todos cumplen?
console.log("¿Todos son pares (nums3)?:", numeros3.every(n => n % 2 === 0)); // true
console.log("¿Todos son pares (nums4)?:", numeros4.every(n => n % 2 === 0)); // false


// 11. FLATTEN Y SPREAD
console.log("\n=== APLANAR ARRAYS ===");
const anidado = [1, [2, 3], [4, [5, 6]]];
const plano1 = anidado.flat(); // Un nivel
console.log("flat():", plano1); // [1, 2, 3, 4, [5, 6]]

const plano2 = anidado.flat(2); // Dos niveles
console.log("flat(2):", plano2); // [1, 2, 3, 4, 5, 6]

// flatMap - map + flat
const numeros5 = [1, 2, 3];
const resultado = numeros5.flatMap(n => [n, n * 2]);
console.log("flatMap:", resultado); // [1, 2, 2, 4, 3, 6]
