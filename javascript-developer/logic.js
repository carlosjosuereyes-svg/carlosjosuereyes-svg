// LÓGICA EN JAVASCRIPT

// 1. OPERADOR AND (&&)
console.log("=== OPERADOR AND (&&) ===");
console.log("Tabla de verdad:");
console.log("true && true =", true && true);       // true
console.log("true && false =", true && false);     // false
console.log("false && true =", false && true);     // false
console.log("false && false =", false && false);   // false

console.log("\nEjemplos:");
const edad = 25;
const tieneCarnet = true;
console.log(edad >= 18 && tieneCarnet); // true (puede conducir)

const edad2 = 16;
const tieneCarnet2 = true;
console.log(edad2 >= 18 && tieneCarnet2); // false (no puede conducir)


// 2. OPERADOR OR (||)
console.log("\n=== OPERADOR OR (||) ===");
console.log("Tabla de verdad:");
console.log("true || true =", true || true);       // true
console.log("true || false =", true || false);     // true
console.log("false || true =", false || true);     // true
console.log("false || false =", false || false);   // false

console.log("\nEjemplos:");
const esFinDeSemana = false;
const esVacaciones = true;
console.log(esFinDeSemana || esVacaciones); // true (puede descansar)

const tiempoLluvia = false;
const tiempoNieve = false;
console.log(tiempoLluvia || tiempoNieve); // false (no hay mal tiempo)


// 3. OPERADOR NOT (!)
console.log("\n=== OPERADOR NOT (!) ===");
console.log("Tabla de verdad:");
console.log("!true =", !true);     // false
console.log("!false =", !false);   // true

console.log("\nEjemplos:");
const tieneInternet = false;
console.log(!tieneInternet); // true (no tiene internet)

const estaRegistrado = true;
if (!estaRegistrado) {
  console.log("Por favor regístrate");
} else {
  console.log("Bienvenido de vuelta");
}


// 4. COMBINACIÓN DE OPERADORES
console.log("\n=== COMBINACIÓN DE OPERADORES ===");

// AND y OR
const edad3 = 30;
const tieneCarnet3 = true;
const estaMultado = false;

if ((edad3 >= 18 && tieneCarnet3) || estaMultado === false) {
  console.log("Puedes conducir");
}

// NOT con AND
const usuario = { logueado: true, verificado: true };
if (!usuario.logueado && usuario.verificado) {
  console.log("Debes ingresar");
} else if (usuario.logueado && usuario.verificado) {
  console.log("Acceso completo");
}

// NOT con OR
const tieneLlaveA = false;
const tieneLlaveB = true;
if (!(tieneLlaveA || tieneLlaveB)) {
  console.log("No tienes acceso");
} else {
  console.log("Acceso permitido");
}


// 5. SHORT-CIRCUIT EVALUATION (&&)
console.log("\n=== SHORT-CIRCUIT EVALUATION ===");

console.log("--- AND (&&) Short-circuit ---");
let variable1;
const resultado1 = false && (variable1 = "asignado");
console.log("variable1:", variable1); // undefined (no se asigna)

let variable2;
const resultado2 = true && (variable2 = "asignado");
console.log("variable2:", variable2); // "asignado" (se asigna)

console.log("\n--- OR (||) Short-circuit ---");
let variable3;
const resultado3 = true || (variable3 = "asignado");
console.log("variable3:", variable3); // undefined (no se asigna)

let variable4;
const resultado4 = false || (variable4 = "asignado");
console.log("variable4:", variable4); // "asignado" (se asigna)


// 6. LÓGICA CON VALORES TRUTHY Y FALSY
console.log("\n=== TRUTHY Y FALSY ===");

// FALSY: false, 0, "", null, undefined, NaN
console.log("--- FALSY ---");
if (!false) console.log("false es falsy");
if (!0) console.log("0 es falsy");
if (!"") console.log("'' es falsy");
if (!null) console.log("null es falsy");
if (!undefined) console.log("undefined es falsy");
if (!NaN) console.log("NaN es falsy");

// TRUTHY: todo lo demás
console.log("\n--- TRUTHY ---");
if (true) console.log("true es truthy");
if (1) console.log("1 es truthy");
if ("texto") console.log("'texto' es truthy");
if ([]) console.log("[] es truthy");
if ({}) console.log("{} es truthy");


// 7. LÓGICA PARA VALORES POR DEFECTO
console.log("\n=== VALORES POR DEFECTO ===");

let nombreUsuario = "";
const nombre = nombreUsuario || "Anónimo";
console.log("Nombre:", nombre); // "Anónimo"

let saldo = 0;
const saldoFinal = saldo || 100;
console.log("Saldo:", saldoFinal); // 100

let contador = null;
const contadorFinal = contador || 0;
console.log("Contador:", contadorFinal); // 0


// 8. VALIDACIONES LÓGICAS
console.log("\n=== VALIDACIONES ===");

function esNumeroValido(numero) {
  return typeof numero === "number" && !isNaN(numero) && isFinite(numero);
}
console.log(esNumeroValido(5)); // true
console.log(esNumeroValido("5")); // false
console.log(esNumeroValido(NaN)); // false

function esContrasenaValida(password) {
  return password.length >= 8 && 
         /[A-Z]/.test(password) && 
         /[0-9]/.test(password) &&
         /[!@#$%^&*]/.test(password);
}
console.log(esContrasenaValida("Abc@1234")); // true
console.log(esContrasenaValida("abc1234")); // false


// 9. LÓGICA CON ARRAYS
console.log("\n=== LÓGICA CON ARRAYS ===");

const numeros = [1, 2, 3, 4, 5];

// Verificar si existe un elemento
const tiene3 = numeros.includes(3);
console.log("¿Contiene 3?:", tiene3); // true

// Verificar si algún elemento cumple
const hayMayorDe3 = numeros.some(n => n > 3);
console.log("¿Hay alguno mayor a 3?:", hayMayorDe3); // true

// Verificar si todos cumplen
const todosMayorDe0 = numeros.every(n => n > 0);
console.log("¿Todos son mayor a 0?:", todosMayorDe0); // true

const todosPares = numeros.every(n => n % 2 === 0);
console.log("¿Todos son pares?:", todosPares); // false


// 10. LÓGICA CON OBJETOS
console.log("\n=== LÓGICA CON OBJETOS ===");

const producto = { nombre: "Laptop", precio: 800, stock: 5 };

// Verificar propiedad
const tiene_nombre = "nombre" in producto;
console.log("¿Tiene propiedad nombre?:", tiene_nombre); // true

// Verificar si tiene stock
const tieneStock = producto.stock > 0;
console.log("¿Tiene stock?:", tieneStock); // true

// Validar objeto completo
function esProductoValido(prod) {
  return prod && 
         typeof prod.nombre === "string" &&
         typeof prod.precio === "number" &&
         typeof prod.stock === "number" &&
         prod.precio > 0 &&
         prod.stock >= 0;
}
console.log(esProductoValido(producto)); // true


// 11. LÓGICA PARA BÚSQUEDA
console.log("\n=== BÚSQUEDA CON LÓGICA ===");

const usuarios = [
  { id: 1, nombre: "Ana", edad: 25, activo: true },
  { id: 2, nombre: "Carlos", edad: 30, activo: false },
  { id: 3, nombre: "Laura", edad: 28, activo: true }
];

// Encontrar activos
const activos = usuarios.filter(u => u.activo === true);
console.log("Usuarios activos:", activos);

// Encontrar mayores de 25
const mayores = usuarios.filter(u => u.edad > 25);
console.log("Mayores de 25:", mayores);

// Combinación: activos Y mayores de 25
const criterio = usuarios.filter(u => u.activo && u.edad > 25);
console.log("Activos y mayores de 25:", criterio);


// 12. LÓGICA DE PERMISOS
console.log("\n=== LÓGICA DE PERMISOS ===");

const usuario2 = { 
  nombre: "Juan", 
  rol: "admin",
  permisos: ["leer", "escribir", "eliminar"]
};

function puedeAcceder(usuario, accion) {
  // Tiene el rol correcto
  const esAdmin = usuario.rol === "admin";
  
  // O tiene el permiso específico
  const tienePermiso = usuario.permisos && 
                       usuario.permisos.includes(accion);
  
  return esAdmin || tienePermiso;
}

console.log(puedeAcceder(usuario2, "leer")); // true
console.log(puedeAcceder(usuario2, "escribir")); // true
console.log(puedeAcceder(usuario2, "eliminar")); // true


// 13. LÓGICA DE RANGO
console.log("\n=== LÓGICA DE RANGO ===");

function obtenerRangoEdad(edad) {
  if (edad < 13) {
    return "Niño";
  } else if (edad >= 13 && edad < 18) {
    return "Adolescente";
  } else if (edad >= 18 && edad < 65) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
}

console.log("Edad 5:", obtenerRangoEdad(5));
console.log("Edad 15:", obtenerRangoEdad(15));
console.log("Edad 30:", obtenerRangoEdad(30));
console.log("Edad 70:", obtenerRangoEdad(70));


// 14. LÓGICA INVESA (NEGACIÓN)
console.log("\n=== LÓGICA INVERSA ===");

const items = [1, 2, 3, 4, 5];

// Verificar si NO existe
const no_tiene_10 = !items.includes(10);
console.log("¿No contiene 10?:", no_tiene_10); // true

// Verificar si NO cumple alguno
const noHayNegativo = !items.some(n => n < 0);
console.log("¿No hay negativos?:", noHayNegativo); // true

// Verificar si NO todos cumplen
const noTodosPares = !items.every(n => n % 2 === 0);
console.log("¿No todos son pares?:", noTodosPares); // true


// 15. LÓGICA CON EXPRESIONES REGULARES
console.log("\n=== EXPRESIONES REGULARES ===");

function esEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
console.log("ana@email.com:", esEmailValido("ana@email.com")); // true
console.log("email-invalido:", esEmailValido("email-invalido")); // false

function esNumeroTelefono(telefono) {
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  return regex.test(telefono);
}
console.log("123-456-7890:", esNumeroTelefono("123-456-7890")); // true
console.log("1234567890:", esNumeroTelefono("1234567890")); // false


// 16. LÓGICA BOOLEANA COMPLEJA
console.log("\n=== LÓGICA COMPLEJA ===");

const cliente = {
  nombre: "Roberto",
  edad: 45,
  tieneMembresia: true,
  estaActivo: true,
  comprasAnuales: 5000,
  puntos: 500
};

// Puede comprar con descuento especial si:
// - Tiene membresía Y está activo
// - O si tiene más de 4000 en compras anuales
// - Y tiene más de 100 puntos
function puedeObtenerDescuento(cliente) {
  const memberActivo = cliente.tieneMembresia && cliente.estaActivo;
  const clienteVIP = cliente.comprasAnuales > 4000 && cliente.puntos > 100;
  return memberActivo || clienteVIP;
}

console.log(cliente.nombre + " puede obtener descuento:", 
            puedeObtenerDescuento(cliente)); // true


// 17. EJEMPLOS PRÁCTICOS: SISTEMA DE PUNTUACIÓN
console.log("\n=== SISTEMA DE PUNTUACIÓN ===");

function obtenerMedalla(puntos) {
  if (puntos >= 1000 && puntos < 2000) {
    return "Bronce";
  } else if (puntos >= 2000 && puntos < 5000) {
    return "Plata";
  } else if (puntos >= 5000 && puntos < 10000) {
    return "Oro";
  } else if (puntos >= 10000) {
    return "Platino";
  } else {
    return "Sin medalla";
  }
}

console.log("1500 puntos:", obtenerMedalla(1500)); // Bronce
console.log("3000 puntos:", obtenerMedalla(3000)); // Plata
console.log("7000 puntos:", obtenerMedalla(7000)); // Oro
console.log("15000 puntos:", obtenerMedalla(15000)); // Platino


// 18. EJEMPLOS PRÁCTICOS: ELIGIBILIDAD DE PRÉSTAMO
console.log("\n=== ELIGIBILIDAD DE PRÉSTAMO ===");

function esEligibleParaPrestamo(cliente) {
  const tieneBuenoCredito = cliente.calificacionCredito >= 600;
  const tieneIngresoSuficiente = cliente.ingresoMensual >= 3000;
  const noTieneMuchaDeuda = cliente.deudaActual < cliente.ingresoMensual * 3;
  
  return tieneBuenoCredito && tieneIngresoSuficiente && noTieneMuchaDeuda;
}

const solicitante = {
  nombre: "Pedro",
  calificacionCredito: 720,
  ingresoMensual: 5000,
  deudaActual: 8000
};

console.log(solicitante.nombre + " es elegible:", 
            esEligibleParaPrestamo(solicitante)); // true


// 19. EJEMPLOS PRÁCTICOS: ACCESO A RECURSO
console.log("\n=== ACCESO A RECURSO ===");

function tieneAcceso(usuario, recurso) {
  // Administrador tiene acceso a todo
  if (usuario.rol === "admin") {
    return true;
  }
  
  // Recurso público, todos pueden acceder
  if (recurso.publico === true) {
    return true;
  }
  
  // Verifica permisos específicos
  if (usuario.permisos && usuario.permisos.includes(recurso.id)) {
    return true;
  }
  
  return false;
}

const usuarios2 = [
  { nombre: "Ana", rol: "admin", permisos: [] },
  { nombre: "Carlos", rol: "user", permisos: [1, 2] },
  { nombre: "Laura", rol: "user", permisos: [1] }
];

const recurso1 = { id: 1, nombre: "Documento", publico: false };
const recurso2 = { id: 2, nombre: "Imagen", publico: true };

console.log("Ana accede a recurso 1:", tieneAcceso(usuarios2[0], recurso1)); // true
console.log("Carlos accede a recurso 1:", tieneAcceso(usuarios2[1], recurso1)); // true
console.log("Laura accede a recurso 1:", tieneAcceso(usuarios2[2], recurso1)); // true
console.log("Laura accede a recurso 2:", tieneAcceso(usuarios2[2], recurso2)); // true


// 20. OPERADOR NULLISH COALESCING EN LÓGICA
console.log("\n=== NULLISH COALESCING (???) ===");

let valor1 = null;
let valor2 = undefined;
let valor3 = 0;
let valor4 = "";

console.log(valor1 ?? "default");  // "default"
console.log(valor2 ?? "default");  // "default"
console.log(valor3 ?? "default");  // 0 (NO es null/undefined)
console.log(valor4 ?? "default");  // "" (NO es null/undefined)

// Comparar con ||
console.log(valor3 || "default");  // "default" (0 es falsy)
console.log(valor4 || "default");  // "default" ("" es falsy)
