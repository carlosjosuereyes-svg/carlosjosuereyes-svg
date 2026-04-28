// OPERADORES DE COMPARACIÓN EN JAVASCRIPT

// 1. IGUALDAD (==)
console.log("=== IGUALDAD == (conversión de tipos) ===");
console.log(5 == "5");      // true (convierte "5" a número)
console.log(5 == 5);        // true
console.log(true == 1);     // true (true se convierte a 1)
console.log(false == 0);    // true (false se convierte a 0)
console.log(null == undefined); // true
console.log([] == false);   // true


// 2. DESIGUALDAD (!=)
console.log("\n=== DESIGUALDAD != (conversión de tipos) ===");
console.log(5 != "5");      // false (ambos son iguales)
console.log(5 != 10);       // true (son diferentes)
console.log("hola" != "hola"); // false
console.log(true != 1);     // false (true == 1)


// 3. IGUALDAD ESTRICTA (===)
console.log("\n=== IGUALDAD ESTRICTA === (sin conversión) ===");
console.log(5 === "5");     // false (número vs string)
console.log(5 === 5);       // true
console.log(true === 1);    // false (boolean vs número)
console.log(false === 0);   // false
console.log(null === undefined); // false (diferentes tipos)
console.log([] === []);     // false (diferentes objetos)


// 4. DESIGUALDAD ESTRICTA (!==)
console.log("\n=== DESIGUALDAD ESTRICTA !== (sin conversión) ===");
console.log(5 !== "5");     // true (diferentes tipos)
console.log(5 !== 5);       // false (son iguales)
console.log(true !== 1);    // true (diferentes tipos)
console.log("hola" !== "hola"); // false


// 5. MAYOR QUE (>)
console.log("\n=== MAYOR QUE > ===");
console.log(10 > 5);        // true
console.log(5 > 10);        // false
console.log(5 > 5);         // false
console.log("z" > "a");     // true (comparación alfabética)
console.log("10" > "9");    // false ("1" viene antes que "9" alfabéticamente)
console.log(10 > "5");      // true (convierte "5" a número)


// 6. MENOR QUE (<)
console.log("\n=== MENOR QUE < ===");
console.log(5 < 10);        // true
console.log(10 < 5);        // false
console.log(5 < 5);         // false
console.log("a" < "z");     // true
console.log(5 < "10");      // true


// 7. MAYOR O IGUAL (>=)
console.log("\n=== MAYOR O IGUAL >= ===");
console.log(10 >= 5);       // true
console.log(5 >= 5);        // true
console.log(3 >= 5);        // false
console.log(5 >= "5");      // true (convierte a número)


// 8. MENOR O IGUAL (<=)
console.log("\n=== MENOR O IGUAL <= ===");
console.log(5 <= 10);       // true
console.log(5 <= 5);        // true
console.log(10 <= 5);       // false
console.log("5" <= 10);     // true


// 9. COMPARACIÓN CON NULL Y UNDEFINED
console.log("\n=== NULL Y UNDEFINED ===");
console.log(null == undefined);      // true
console.log(null === undefined);     // false
console.log(undefined == null);      // true
console.log(undefined === null);     // false
console.log(null == 0);              // false
console.log(undefined == 0);         // false
console.log(null > 0);               // false
console.log(null >= 0);              // true


// 10. COMPARACIÓN CON NaN
console.log("\n=== NaN ===");
console.log(NaN === NaN);            // false
console.log(NaN == NaN);             // false
console.log(isNaN(NaN));             // true
console.log(Number.isNaN(NaN));      // true
const resultado = "texto" * 2;
console.log("'texto' * 2:", resultado); // NaN


// 11. TRUTHY Y FALSY
console.log("\n=== TRUTHY Y FALSY ===");
// FALSY (se comportan como false)
console.log("-- FALSY --");
console.log(Boolean(false));         // false
console.log(Boolean(0));             // false
console.log(Boolean(""));            // false
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false
console.log(Boolean(NaN));           // false

// TRUTHY (se comportan como true)
console.log("-- TRUTHY --");
console.log(Boolean(true));          // true
console.log(Boolean(1));             // true
console.log(Boolean("texto"));       // true
console.log(Boolean([]));            // true
console.log(Boolean({}));            // true


// 12. COMPARACIÓN EN CONDICIONALES
console.log("\n=== EN CONDICIONALES ===");
const edad = 18;
const tieneCarnet = true;

if (edad >= 18 && tieneCarnet) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}

const calificacion = 75;
if (calificacion >= 90) {
  console.log("Excelente");
} else if (calificacion >= 80) {
  console.log("Muy bien");
} else if (calificacion >= 70) {
  console.log("Bien");
} else if (calificacion >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}


// 13. OPERADOR TERNARIO
console.log("\n=== OPERADOR TERNARIO ===");
const numero = 15;
const resultado2 = numero > 10 ? "Mayor a 10" : "Menor o igual a 10";
console.log(resultado2);

const usuario = { nombre: "Ana", admin: true };
const permiso = usuario.admin ? "Acceso total" : "Acceso limitado";
console.log(permiso);


// 14. OPERADOR LÓGICO AND (&&)
console.log("\n=== AND (&&) ===");
console.log(true && true);          // true
console.log(true && false);         // false
console.log(false && true);         // false
console.log(false && false);        // false

const usuario2 = { nombre: "Carlos", edad: 25 };
if (usuario2.nombre && usuario2.edad > 18) {
  console.log("Usuario válido y mayor de edad");
}


// 15. OPERADOR LÓGICO OR (||)
console.log("\n=== OR (||) ===");
console.log(true || true);          // true
console.log(true || false);         // true
console.log(false || true);         // true
console.log(false || false);        // false

let nombre = "";
let nombreFinal = nombre || "Anónimo";
console.log("Nombre:", nombreFinal); // "Anónimo"


// 16. OPERADOR LÓGICO NOT (!)
console.log("\n=== NOT (!) ===");
console.log(!true);                 // false
console.log(!false);                // true
console.log(!0);                    // true
console.log(!1);                    // false
console.log(!"");                   // true
console.log(!"texto");              // false


// 17. OPERADOR NULLISH COALESCING (??)
console.log("\n=== NULLISH COALESCING ?? ===");
let valor1;
console.log(valor1 ?? "valor por defecto"); // "valor por defecto"

let valor2 = 0;
console.log(valor2 ?? "valor por defecto"); // 0 (no es null/undefined)

let valor3 = null;
console.log(valor3 ?? "valor por defecto"); // "valor por defecto"


// 18. COMPARACIÓN DE OBJETOS Y ARRAYS
console.log("\n=== COMPARACIÓN DE OBJETOS Y ARRAYS ===");
const obj1 = { nombre: "Ana" };
const obj2 = { nombre: "Ana" };
const obj3 = obj1;

console.log(obj1 == obj2);          // false (referencias diferentes)
console.log(obj1 === obj2);         // false (referencias diferentes)
console.log(obj1 === obj3);         // true (misma referencia)

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2);          // false (referencias diferentes)
console.log(arr1 === arr2);         // false (referencias diferentes)


// 19. MÉTODO INCLUDES PARA ARRAYS
console.log("\n=== INCLUDES EN ARRAYS ===");
const frutas = ["manzana", "plátano", "naranja"];
console.log(frutas.includes("plátano")); // true
console.log(frutas.includes("piña"));    // false

const numeros = [10, 20, 30, 40];
console.log(numeros.includes(20));   // true
console.log(numeros.includes(25));   // false


// 20. EJEMPLOS PRÁCTICOS
console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Sistema de clasificación de edad
const edades = [5, 15, 25, 65];
edades.forEach(edad => {
  if (edad < 13) {
    console.log(`${edad} años: Niño`);
  } else if (edad < 18) {
    console.log(`${edad} años: Adolescente`);
  } else if (edad < 65) {
    console.log(`${edad} años: Adulto`);
  } else {
    console.log(`${edad} años: Adulto mayor`);
  }
});

// Validación de contraseña
const password = "Abc@1234";
const esValida = 
  password.length >= 8 &&
  /[A-Z]/.test(password) &&
  /[0-9]/.test(password) &&
  /[!@#$%^&*]/.test(password);
console.log("¿Contraseña válida?:", esValida);

// Descuento basado en cantidad
const cantidad = 5;
let descuento;
if (cantidad >= 10) {
  descuento = 0.20;
} else if (cantidad >= 5) {
  descuento = 0.10;
} else {
  descuento = 0;
}
const precio = 100;
const total = precio * (1 - descuento);
console.log(`Cantidad: ${cantidad}, Descuento: ${descuento * 100}%, Total: $${total}`);
