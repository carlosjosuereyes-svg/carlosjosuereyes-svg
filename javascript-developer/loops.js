// LOOPS (BUCLES) EN JAVASCRIPT

// 1. FOR BÁSICO
console.log("=== FOR BÁSICO ===");
for (let i = 0; i < 5; i++) {
  console.log("Iteración " + i);
}

console.log("\nRecorrer 1 a 10:");
for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

console.log("\nContar hacia atrás:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("¡Despegue!");


// 2. FOR CON ARRAY
console.log("\n=== FOR CON ARRAY ===");
const frutas = ["manzana", "plátano", "naranja", "fresa"];
for (let i = 0; i < frutas.length; i++) {
  console.log(i + ": " + frutas[i]);
}

const numeros = [10, 20, 30, 40, 50];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("Suma:", suma); // 150


// 3. FOR...OF (ITERAR VALORES)
console.log("\n=== FOR...OF ===");
const colores = ["rojo", "verde", "azul"];
for (const color of colores) {
  console.log(color);
}

console.log("\nCon números:");
const numeros2 = [5, 10, 15, 20];
for (const numero of numeros2) {
  console.log(numero * 2);
}

console.log("\nCon strings:");
const palabra = "Hola";
for (const letra of palabra) {
  console.log(letra);
}


// 4. FOR...IN (ITERAR ÍNDICES/PROPIEDADES)
console.log("\n=== FOR...IN ===");
const persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
for (const propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

console.log("\nCon array (obtiene índices):");
const animales = ["perro", "gato", "pajaro"];
for (const indice in animales) {
  console.log(indice + ": " + animales[indice]);
}


// 5. WHILE
console.log("\n=== WHILE ===");
let contador = 1;
while (contador <= 5) {
  console.log("Contador: " + contador);
  contador++;
}

console.log("\nWhile con condición compleja:");
let numero = 10;
while (numero > 0) {
  console.log(numero);
  numero -= 2;
}


// 6. DO...WHILE
console.log("\n=== DO...WHILE ===");
let i = 1;
do {
  console.log("Número: " + i);
  i++;
} while (i <= 3);

console.log("\nDo...while siempre ejecuta al menos una vez:");
let x = 10;
do {
  console.log("Se ejecuta aunque x no cumpla la condición");
} while (x < 5);


// 7. BREAK (SALIR DEL LOOP)
console.log("\n=== BREAK ===");
console.log("Buscar el número 3:");
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    console.log("¡Encontrado! Saliendo...");
    break;
  }
  console.log("Verificando: " + i);
}

console.log("\nBuscar palabra en array:");
const palabras = ["manzana", "plátano", "cereza", "naranja"];
let encontrada = false;
for (const palabra of palabras) {
  if (palabra === "cereza") {
    console.log("Palabra encontrada!");
    encontrada = true;
    break;
  }
}


// 8. CONTINUE (SALTAR A LA SIGUIENTE ITERACIÓN)
console.log("\n=== CONTINUE ===");
console.log("Imprimir números excepto impares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; // Salta esta iteración
  }
  console.log(i);
}

console.log("\nSaltar números específicos:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Saltando 3");
    continue;
  }
  console.log("Número: " + i);
}


// 9. LOOPS ANIDADOS
console.log("\n=== LOOPS ANIDADOS ===");
console.log("Tabla de multiplicar:");
for (let i = 1; i <= 3; i++) {
  console.log("--- Tabla del " + i + " ---");
  for (let j = 1; j <= 5; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
}

console.log("\nGenerar matriz:");
for (let fila = 1; fila <= 3; fila++) {
  let linea = "";
  for (let columna = 1; columna <= 4; columna++) {
    linea += "*";
  }
  console.log(linea);
}


// 10. FOREACH CON ARRAYS
console.log("\n=== FOREACH ===");
const frutas2 = ["manzana", "plátano", "naranja"];
frutas2.forEach(function(fruta) {
  console.log(fruta);
});

console.log("\nCon índice:");
frutas2.forEach(function(fruta, indice) {
  console.log(indice + ": " + fruta);
});

console.log("\nCon arrow function:");
const numeros3 = [1, 2, 3, 4, 5];
numeros3.forEach(num => console.log(num * 2));


// 11. MAP - TRANSFORMAR ARRAY
console.log("\n=== MAP ===");
const numeros4 = [1, 2, 3, 4, 5];
const duplicados = numeros4.map(n => n * 2);
console.log("Original:", numeros4);
console.log("Duplicados:", duplicados);

const palabras2 = ["hola", "mundo"];
const mayusculas = palabras2.map(p => p.toUpperCase());
console.log("Mayúsculas:", mayusculas);


// 12. FILTER - FILTRAR ARRAY
console.log("\n=== FILTER ===");
const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros5.filter(n => n % 2 === 0);
console.log("Números pares:", pares);

const mayoresDe5 = numeros5.filter(n => n > 5);
console.log("Mayores a 5:", mayoresDe5);

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Laura", edad: 30 }
];
const mayoresDeEdad = personas.filter(p => p.edad >= 18);
console.log("Mayores de edad:", mayoresDeEdad);


// 13. REDUCE - ACUMULAR VALORES
console.log("\n=== REDUCE ===");
const numeros6 = [1, 2, 3, 4, 5];
const suma2 = numeros6.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma:", suma2); // 15

const producto = numeros6.reduce((acum, num) => acum * num, 1);
console.log("Producto:", producto); // 120

console.log("\nContar ocurrencias:");
const frutas3 = ["manzana", "plátano", "manzana", "fresa", "manzana"];
const conteo = frutas3.reduce((acum, fruta) => {
  acum[fruta] = (acum[fruta] || 0) + 1;
  return acum;
}, {});
console.log("Conteo:", conteo);


// 14. EJEMPLOS PRÁCTICOS: BUSCAR ELEMENTO
console.log("\n=== BUSCAR ELEMENTO ===");
const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "Laura" }
];

console.log("Usando find():");
const usuario = usuarios.find(u => u.id === 2);
console.log("Usuario encontrado:", usuario);

console.log("\nUsando filter():");
const resultados = usuarios.filter(u => u.nombre.includes("a"));
console.log("Usuarios con 'a':", resultados);


// 15. EJEMPLOS PRÁCTICOS: VALIDAR TODO EL ARRAY
console.log("\n=== VALIDAR TODO EL ARRAY ===");
const numeros7 = [2, 4, 6, 8, 10];
const todosPares = numeros7.every(n => n % 2 === 0);
console.log("¿Todos son pares?:", todosPares); // true

const numeros8 = [2, 4, 5, 8];
const todosPares2 = numeros8.every(n => n % 2 === 0);
console.log("¿Todos son pares?:", todosPares2); // false

console.log("\nVerificar si alguno cumple:");
const hayMayorDe5 = numeros8.some(n => n > 5);
console.log("¿Hay alguno mayor a 5?:", hayMayorDe5); // true


// 16. EJEMPLOS PRÁCTICOS: TRANSFORMAR DATOS
console.log("\n=== TRANSFORMAR DATOS ===");
const precios = [100, 200, 300];
const conDescuento = precios.map(p => p * 0.9);
console.log("Precios originales:", precios);
console.log("Con 10% descuento:", conDescuento);

const personas2 = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 }
];
const nombres = personas2.map(p => p.nombre);
console.log("Solo nombres:", nombres);


// 17. EJEMPLOS PRÁCTICOS: CALCULAR TOTALES
console.log("\n=== CALCULAR TOTALES ===");
const compras = [
  { producto: "Laptop", precio: 800, cantidad: 1 },
  { producto: "Mouse", precio: 25, cantidad: 2 },
  { producto: "Teclado", precio: 75, cantidad: 1 }
];

const total = compras.reduce((acum, item) => {
  return acum + (item.precio * item.cantidad);
}, 0);
console.log("Total de compra: $" + total);

const cantidadTotal = compras.reduce((acum, item) => {
  return acum + item.cantidad;
}, 0);
console.log("Cantidad total de items: " + cantidadTotal);


// 18. EJEMPLOS PRÁCTICOS: AGRUPAR DATOS
console.log("\n=== AGRUPAR DATOS ===");
const estudiantes = [
  { nombre: "Ana", calificacion: 85 },
  { nombre: "Carlos", calificacion: 92 },
  { nombre: "Laura", calificacion: 78 },
  { nombre: "Juan", calificacion: 88 }
];

const aprobados = estudiantes.filter(e => e.calificacion >= 80);
const reprobados = estudiantes.filter(e => e.calificacion < 80);
console.log("Aprobados:", aprobados);
console.log("Reprobados:", reprobados);


// 19. EJEMPLOS PRÁCTICOS: COMBINAR ARRAYS
console.log("\n=== COMBINAR ARRAYS ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log("Usando concat:");
const combinado = arr1.concat(arr2);
console.log(combinado);

console.log("\nUsando spread operator:");
const combinado2 = [...arr1, ...arr2];
console.log(combinado2);

console.log("\nUsando flat:");
const anidado = [[1, 2], [3, 4], [5, 6]];
const aplanado = anidado.flat();
console.log(aplanado);


// 20. EJEMPLOS PRÁCTICOS: ELIMINAR DUPLICADOS
console.log("\n=== ELIMINAR DUPLICADOS ===");
const numeros9 = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const unicos = [...new Set(numeros9)];
console.log("Con duplicados:", numeros9);
console.log("Sin duplicados:", unicos);

console.log("\nCon filter:");
const numeros10 = [1, 2, 2, 3, 3, 4];
const unicosFil = numeros10.filter((n, i) => numeros10.indexOf(n) === i);
console.log("Sin duplicados (filter):", unicosFil);
