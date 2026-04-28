// CONDICIONALES EN JAVASCRIPT

// 1. IF SIMPLE
console.log("=== IF SIMPLE ===");
const edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}

const temperatura = 35;
if (temperatura > 30) {
  console.log("Hace calor");
}


// 2. IF...ELSE
console.log("\n=== IF...ELSE ===");
const numero = 5;
if (numero > 10) {
  console.log("Número mayor a 10");
} else {
  console.log("Número menor o igual a 10");
}

const hora = 14;
if (hora < 12) {
  console.log("Buenos días");
} else {
  console.log("Buenas tardes/noches");
}


// 3. IF...ELSE IF...ELSE
console.log("\n=== IF...ELSE IF...ELSE ===");
const calificacion = 85;
if (calificacion >= 90) {
  console.log("Excelente (A)");
} else if (calificacion >= 80) {
  console.log("Muy bien (B)");
} else if (calificacion >= 70) {
  console.log("Bien (C)");
} else if (calificacion >= 60) {
  console.log("Aprobado (D)");
} else {
  console.log("Reprobado (F)");
}

// Clasificación de edad
const edad2 = 15;
if (edad2 < 13) {
  console.log("Niño");
} else if (edad2 < 18) {
  console.log("Adolescente");
} else if (edad2 < 65) {
  console.log("Adulto");
} else {
  console.log("Adulto mayor");
}


// 4. OPERADOR TERNARIO (? :)
console.log("\n=== OPERADOR TERNARIO ===");
const edad3 = 25;
const estado = edad3 >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(estado);

const numero2 = 7;
const resultado = numero2 % 2 === 0 ? "Par" : "Impar";
console.log(numero2 + " es " + resultado);

// Ternario anidado
const promedio = 75;
const aprobacion = promedio >= 90 ? "Excelente" : 
                   promedio >= 80 ? "Muy bien" : 
                   promedio >= 70 ? "Bien" : "Reprobado";
console.log("Calificación:", aprobacion);


// 5. SWITCH
console.log("\n=== SWITCH ===");
const dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día inválido");
}

// Switch con strings
const fruta = "manzana";
switch (fruta) {
  case "manzana":
    console.log("Es roja o verde");
    break;
  case "plátano":
    console.log("Es amarillo");
    break;
  case "naranja":
    console.log("Es naranja");
    break;
  default:
    console.log("Fruta desconocida");
}

// Switch sin break (fall-through)
console.log("\n--- Switch con fall-through ---");
const nivel = 2;
switch (nivel) {
  case 1:
  case 2:
    console.log("Acceso a nivel básico");
    break;
  case 3:
  case 4:
    console.log("Acceso a nivel intermedio");
    break;
  case 5:
    console.log("Acceso a nivel premium");
    break;
  default:
    console.log("Nivel inválido");
}


// 6. OPERADORES LÓGICOS EN CONDICIONALES
console.log("\n=== OPERADORES LÓGICOS (&&, ||, !) ===");

// AND (&&)
const usuario = { nombre: "Ana", edad: 25, premium: true };
if (usuario.edad >= 18 && usuario.premium) {
  console.log("Usuario premium mayor de edad");
}

// OR (||)
const tiempoLluvia = false;
const tiempoNieve = true;
if (tiempoLluvia || tiempoNieve) {
  console.log("Lleva abrigo");
}

// NOT (!)
const tieneInternet = false;
if (!tieneInternet) {
  console.log("No tienes conexión a internet");
}

// Combinación
const edad4 = 30;
const tieneCarnet = true;
const estaMultado = false;
if (edad4 >= 18 && tieneCarnet && !estaMultado) {
  console.log("Puedes conducir");
}


// 7. CONDICIONALES CON ARRAYS
console.log("\n=== CONDICIONALES CON ARRAYS ===");
const numeros = [10, 20, 30, 40, 50];
if (numeros.includes(30)) {
  console.log("El 30 está en el array");
}

if (numeros.length > 3) {
  console.log("El array tiene más de 3 elementos");
}

const compras = [];
if (compras.length === 0) {
  console.log("El carrito está vacío");
}


// 8. CONDICIONALES CON OBJETOS
console.log("\n=== CONDICIONALES CON OBJETOS ===");
const producto = { nombre: "Laptop", precio: 800, stock: 5 };
if (producto.stock > 0) {
  console.log(producto.nombre + " está disponible");
}

if (producto.precio > 500) {
  console.log("Producto de alto precio");
}

const usuario2 = { nombre: "Carlos", admin: false };
if (!usuario2.admin) {
  console.log("No tienes permisos de administrador");
}


// 9. CONDICIONALES ANIDADOS
console.log("\n=== CONDICIONALES ANIDADOS ===");
const usuario3 = { edad: 22, registrado: true, verificado: true };
if (usuario3.edad >= 18) {
  if (usuario3.registrado) {
    if (usuario3.verificado) {
      console.log("Acceso permitido");
    } else {
      console.log("Por favor verifica tu email");
    }
  } else {
    console.log("Por favor regístrate");
  }
} else {
  console.log("Debes ser mayor de 18 años");
}


// 10. EJEMPLOS PRÁCTICOS: VALIDACIÓN DE CONTRASEÑA
console.log("\n=== VALIDACIÓN DE CONTRASEÑA ===");
const password = "Abc@1234";
if (password.length < 8) {
  console.log("La contraseña debe tener al menos 8 caracteres");
} else if (!/[A-Z]/.test(password)) {
  console.log("La contraseña debe tener una mayúscula");
} else if (!/[0-9]/.test(password)) {
  console.log("La contraseña debe tener un número");
} else if (!/[!@#$%^&*]/.test(password)) {
  console.log("La contraseña debe tener un carácter especial");
} else {
  console.log("Contraseña válida");
}


// 11. EJEMPLOS PRÁCTICOS: SISTEMA DE DESCUENTOS
console.log("\n=== SISTEMA DE DESCUENTOS ===");
const cantidad = 15;
const precioPorUnidad = 50;
let descuento = 0;

if (cantidad >= 20) {
  descuento = 0.20; // 20% descuento
} else if (cantidad >= 10) {
  descuento = 0.10; // 10% descuento
} else if (cantidad >= 5) {
  descuento = 0.05; // 5% descuento
}

const subtotal = cantidad * precioPorUnidad;
const total = subtotal * (1 - descuento);
console.log("Cantidad: " + cantidad);
console.log("Subtotal: $" + subtotal);
console.log("Descuento: " + (descuento * 100) + "%");
console.log("Total: $" + total);


// 12. EJEMPLOS PRÁCTICOS: CLASIFICACIÓN DE PELÍCULA
console.log("\n=== CLASIFICACIÓN DE PELÍCULA ===");
const edad5 = 16;
const clasificacion = "PG-13";

let puedeVer = false;
switch (clasificacion) {
  case "G":
    puedeVer = true;
    break;
  case "PG":
    puedeVer = edad5 >= 6;
    break;
  case "PG-13":
    puedeVer = edad5 >= 13;
    break;
  case "R":
    puedeVer = edad5 >= 17;
    break;
  case "NC-17":
    puedeVer = edad5 >= 18;
    break;
  default:
    puedeVer = false;
}

if (puedeVer) {
  console.log("Puedes ver películas clasificadas como " + clasificacion);
} else {
  console.log("No puedes ver películas clasificadas como " + clasificacion);
}


// 13. OPERADOR NULLISH COALESCING EN CONDICIONALES
console.log("\n=== NULLISH COALESCING (??) ===");
let nombreUsuario;
const nombre = nombreUsuario ?? "Anónimo";
console.log("Bienvenido " + nombre);

let saldo = 0;
if (saldo ?? false) {
  console.log("Tienes saldo");
} else {
  console.log("No tienes saldo");
}


// 14. EARLY RETURN (SALIDA TEMPRANA)
console.log("\n=== EARLY RETURN ===");
function validarUsuario(usuario) {
  if (!usuario) {
    console.log("Usuario no existe");
    return;
  }
  
  if (usuario.edad < 18) {
    console.log("Usuario menor de edad");
    return;
  }
  
  if (!usuario.verificado) {
    console.log("Usuario no verificado");
    return;
  }
  
  console.log("Usuario válido: " + usuario.nombre);
}

validarUsuario({ nombre: "Laura", edad: 25, verificado: true });
validarUsuario({ nombre: "Pedro", edad: 15, verificado: true });
validarUsuario(null);


// 15. SHORT-CIRCUIT EVALUATION
console.log("\n=== SHORT-CIRCUIT EVALUATION ===");
const usuario4 = { nombre: "María", activo: true };
usuario4.activo && console.log("Usuario " + usuario4.nombre + " está activo");

const usuario5 = { nombre: "Juan", activo: false };
usuario5.activo && console.log("Usuario " + usuario5.nombre + " está activo");

const valor = null;
console.log(valor || "Valor por defecto"); // "Valor por defecto"
