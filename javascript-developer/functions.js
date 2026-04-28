// FUNCIONES EN JAVASCRIPT

// 1. FUNCIÓN BÁSICA (DECLARACIÓN)
console.log("=== FUNCIÓN BÁSICA ===");
function saludar() {
  console.log("¡Hola!");
}
saludar(); // Llamar a la función


// 2. FUNCIÓN CON PARÁMETROS
console.log("\n=== FUNCIÓN CON PARÁMETROS ===");
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3)); // 8
console.log(sumar(10, 20)); // 30

function presentarse(nombre, edad) {
  console.log("Soy " + nombre + " y tengo " + edad + " años");
}
presentarse("Ana", 25);
presentarse("Carlos", 30);


// 3. FUNCIÓN CON VALOR POR DEFECTO
console.log("\n=== VALOR POR DEFECTO ===");
function saludo(nombre = "Visitante") {
  console.log("Bienvenido " + nombre);
}
saludo("Juan");    // Bienvenido Juan
saludo();          // Bienvenido Visitante

function descuento(precio, porcentaje = 0.10) {
  return precio * (1 - porcentaje);
}
console.log(descuento(100));      // 90 (10% descuento)
console.log(descuento(100, 0.20)); // 80 (20% descuento)


// 4. FUNCIÓN CON MÚLTIPLES RETORNOS
console.log("\n=== MÚLTIPLES RETORNOS ===");
function evaluarCalificacion(calificacion) {
  if (calificacion >= 90) {
    return "Excelente";
  } else if (calificacion >= 80) {
    return "Muy bien";
  } else if (calificacion >= 70) {
    return "Bien";
  } else {
    return "Reprobado";
  }
}
console.log(evaluarCalificacion(95)); // Excelente
console.log(evaluarCalificacion(75)); // Bien
console.log(evaluarCalificacion(60)); // Reprobado


// 5. FUNCIÓN QUE RETORNA UN OBJETO
console.log("\n=== RETORNA OBJETO ===");
function crearUsuario(nombre, email) {
  return {
    nombre: nombre,
    email: email,
    activo: true,
    fechaRegistro: new Date()
  };
}
const usuario = crearUsuario("Laura", "laura@email.com");
console.log(usuario);


// 6. FUNCIÓN QUE RETORNA UN ARRAY
console.log("\n=== RETORNA ARRAY ===");
function obtenerCalificaciones() {
  return [85, 90, 78, 92, 88];
}
const calificaciones = obtenerCalificaciones();
console.log(calificaciones);

function generarRango(inicio, fin) {
  const rango = [];
  for (let i = inicio; i <= fin; i++) {
    rango.push(i);
  }
  return rango;
}
console.log(generarRango(1, 5)); // [1, 2, 3, 4, 5]


// 7. FUNCIÓN EXPRESIÓN (ANONYMOUS FUNCTION)
console.log("\n=== FUNCIÓN EXPRESIÓN ===");
const multiplicar = function(a, b) {
  return a * b;
};
console.log(multiplicar(4, 5)); // 20

const obtenerDia = function(numero) {
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  return dias[numero - 1];
};
console.log(obtenerDia(3)); // Miércoles


// 8. ARROW FUNCTION (FUNCIÓN FLECHA)
console.log("\n=== ARROW FUNCTION ===");
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // 5

const saludarPersona = (nombre) => "Hola " + nombre;
console.log(saludarPersona("Pedro")); // Hola Pedro

// Arrow function con múltiples líneas
const calcularPromedio = (numeros) => {
  const suma = numeros.reduce((a, b) => a + b, 0);
  return suma / numeros.length;
};
console.log(calcularPromedio([85, 90, 95])); // 90


// 9. FUNCIÓN DENTRO DE FUNCIÓN (CLOSURE)
console.log("\n=== CLOSURE ===");
function crearMultiplicador(multiplicador) {
  return function(numero) {
    return numero * multiplicador;
  };
}
const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
console.log(duplicar(5));  // 10
console.log(triplicar(5)); // 15

function contador() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const contar = contador();
console.log(contar()); // 1
console.log(contar()); // 2
console.log(contar()); // 3


// 10. FUNCIÓN CON NÚMERO VARIABLE DE ARGUMENTOS
console.log("\n=== ARGUMENTOS VARIABLES ===");
function sumarTodos(...numeros) {
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}
console.log(sumarTodos(1, 2, 3));        // 6
console.log(sumarTodos(1, 2, 3, 4, 5)); // 15

function mostrarPersonas(...personas) {
  personas.forEach((persona, index) => {
    console.log((index + 1) + ". " + persona);
  });
}
mostrarPersonas("Ana", "Carlos", "Laura");


// 11. FUNCIÓN QUE RETORNA FUNCIÓN
console.log("\n=== RETORNA FUNCIÓN ===");
function operacionMatematica(tipo) {
  if (tipo === "suma") {
    return (a, b) => a + b;
  } else if (tipo === "resta") {
    return (a, b) => a - b;
  } else if (tipo === "multiplicacion") {
    return (a, b) => a * b;
  }
}
const sumar2 = operacionMatematica("suma");
const restar = operacionMatematica("resta");
console.log(sumar2(10, 5));    // 15
console.log(restar(10, 5));    // 5


// 12. FUNCIÓN RECURSIVA
console.log("\n=== FUNCIÓN RECURSIVA ===");
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log("Factorial de 5:", factorial(5)); // 120

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci 7:", fibonacci(7)); // 13

// Conteo regresivo
function conteoRegresivo(n) {
  if (n <= 0) {
    console.log("¡Listo!");
    return;
  }
  console.log(n);
  conteoRegresivo(n - 1);
}
conteoRegresivo(3);


// 13. FUNCIÓN CON CALLBACKS
console.log("\n=== CALLBACKS ===");
function procesar(numero, callback) {
  const resultado = numero * 2;
  callback(resultado);
}
procesar(5, function(resultado) {
  console.log("El resultado es: " + resultado);
});

function traerDatos(callback) {
  setTimeout(function() {
    const datos = { id: 1, nombre: "Usuario" };
    callback(datos);
  }, 1000);
}
traerDatos(function(datos) {
  console.log("Datos recibidos:", datos);
});


// 14. FUNCIÓN CON DESTRUCTURING
console.log("\n=== DESTRUCTURING ===");
function mostrarProducto({ nombre, precio, stock }) {
  console.log(nombre + ": $" + precio + " (Stock: " + stock + ")");
}
mostrarProducto({ nombre: "Laptop", precio: 800, stock: 5 });

function mostrarPersona({ nombre, edad = 0 }) {
  console.log(nombre + " tiene " + edad + " años");
}
mostrarPersona({ nombre: "Ana", edad: 25 });
mostrarPersona({ nombre: "Pedro" });


// 15. FUNCIÓN CON REST Y SPREAD
console.log("\n=== REST Y SPREAD ===");
function unirDatos(primero, segundo, ...resto) {
  console.log("Primero:", primero);
  console.log("Segundo:", segundo);
  console.log("Resto:", resto);
}
unirDatos("a", "b", "c", "d", "e");

function combinarArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(combinarArrays([1, 2], [3, 4])); // [1, 2, 3, 4]


// 16. MÉTODOS DE ARRAYS CON FUNCIONES
console.log("\n=== ARRAY METHODS ===");
const numeros = [1, 2, 3, 4, 5];

// Map
const duplicados = numeros.map(n => n * 2);
console.log("Map:", duplicados);

// Filter
const pares = numeros.filter(n => n % 2 === 0);
console.log("Filter:", pares);

// Reduce
const suma = numeros.reduce((acum, n) => acum + n, 0);
console.log("Reduce (suma):", suma);

// Sort
const numeros2 = [40, 15, 25, 10];
numeros2.sort((a, b) => a - b);
console.log("Sort:", numeros2);


// 17. FUNCIÓN IFIE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
console.log("\n=== IIFE ===");
(function() {
  const mensaje = "Soy una función autoinvocada";
  console.log(mensaje);
})();

(function(nombre) {
  console.log("Hola " + nombre);
})("David");


// 18. FUNCIÓN PURA
console.log("\n=== FUNCIÓN PURA ===");
// Función pura: siempre retorna lo mismo con los mismos argumentos
function sumarNumeros(a, b) {
  return a + b;
}
console.log(sumarNumeros(5, 3)); // 8
console.log(sumarNumeros(5, 3)); // 8 (siempre igual)

// Función NO pura: depende de estado externo
let contador2 = 0;
function incrementar() {
  contador2++;
  return contador2;
}
console.log(incrementar()); // 1
console.log(incrementar()); // 2 (diferente)


// 19. HOISTING DE FUNCIONES
console.log("\n=== HOISTING ===");
// Las funciones declaradas se suben al inicio (hoisting)
console.log(restar2(10, 3)); // 7 (funciona aunque se llame antes)

function restar2(a, b) {
  return a - b;
}

// Pero las expresiones de función NO se suben
// console.log(multiplicar2(5, 2)); // Error: multiplicar2 is not defined
const multiplicar2 = function(a, b) {
  return a * b;
};
console.log(multiplicar2(5, 2)); // 10


// 20. EJEMPLOS PRÁCTICOS
console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Validador de email
function esEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
console.log(esEmailValido("ana@email.com")); // true
console.log(esEmailValido("email-invalido")); // false

// Calculadora
function calculadora(a, b, operacion) {
  switch(operacion) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return "Operación no válida";
  }
}
console.log("5 + 3 =", calculadora(5, 3, "+")); // 8
console.log("10 * 2 =", calculadora(10, 2, "*")); // 20

// Ordenar objetos por propiedad
function ordenarPorPropiedad(array, propiedad) {
  return array.sort((a, b) => {
    if (a[propiedad] < b[propiedad]) return -1;
    if (a[propiedad] > b[propiedad]) return 1;
    return 0;
  });
}
const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 75 }
];
const ordenados = ordenarPorPropiedad(productos, "precio");
console.log("Ordenados por precio:", ordenados);
