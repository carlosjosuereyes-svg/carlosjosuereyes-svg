// STRINGS EN JAVASCRIPT

// 1. CREAR STRINGS
console.log("=== CREAR STRINGS ===");
const texto1 = "Hola Mundo"; // Comillas dobles
const texto2 = 'Hola Mundo'; // Comillas simples
const texto3 = `Hola Mundo`; // Template literals

console.log(texto1);
console.log(texto2);
console.log(texto3);

console.log("Tipo de dato:", typeof texto1); // string


// 2. TEMPLATE LITERALS (BACKTICKS)
console.log("\n=== TEMPLATE LITERALS ===");
const nombre = "Ana";
const edad = 25;

const mensaje = `Me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje);

const resultado = `2 + 3 = ${2 + 3}`;
console.log(resultado);

// Múltiples líneas
const texto = `Esto es una
cadena de texto
en múltiples líneas`;
console.log(texto);


// 3. CONCATENACIÓN
console.log("\n=== CONCATENACIÓN ===");
const primerNombre = "Juan";
const apellido = "Pérez";

// Con +
const nombreCompleto = primerNombre + " " + apellido;
console.log(nombreCompleto);

// Con +=
let mensaje2 = "Hola ";
mensaje2 += "Mundo";
console.log(mensaje2);

// Con concat()
const frase = "Hola".concat(" ", "a", " ", "todos");
console.log(frase);


// 4. LONGITUD
console.log("\n=== LONGITUD (length) ===");
const palabra = "JavaScript";
console.log("Palabra:", palabra);
console.log("Longitud:", palabra.length); // 10

const vacio = "";
console.log("String vacío:", vacio.length); // 0


// 5. ACCEDER A CARACTERES
console.log("\n=== ACCEDER A CARACTERES ===");
const texto4 = "Hola";
console.log("Primer carácter:", texto4[0]); // H
console.log("Tercer carácter:", texto4[2]); // l
console.log("Último carácter:", texto4[texto4.length - 1]); // a

console.log("Con charAt():", texto4.charAt(1)); // o
console.log("Con charCodeAt():", texto4.charCodeAt(0)); // 72 (código ASCII)


// 6. BÚSQUEDA EN STRINGS
console.log("\n=== BÚSQUEDA ===");
const frase2 = "JavaScript es un lenguaje de programación";

// indexOf - primera posición
console.log("indexOf('es'):", frase2.indexOf("es")); // 11

// lastIndexOf - última posición
console.log("lastIndexOf('e'):", frase2.lastIndexOf("e")); // 34

// includes - ¿contiene?
console.log("¿Contiene 'programación'?:", frase2.includes("programación")); // true

// startsWith - ¿comienza con?
console.log("¿Comienza con 'Java'?:", frase2.startsWith("Java")); // true

// endsWith - ¿termina con?
console.log("¿Termina con 'ción'?:", frase2.endsWith("ción")); // true


// 7. MAYÚSCULAS Y MINÚSCULAS
console.log("\n=== MAYÚSCULAS Y MINÚSCULAS ===");
const texto5 = "Hola Mundo";

console.log("toUpperCase():", texto5.toUpperCase()); // HOLA MUNDO
console.log("toLowerCase():", texto5.toLowerCase()); // hola mundo

// Capitalizar (primera letra mayúscula)
const capitalizado = texto5.charAt(0).toUpperCase() + texto5.slice(1).toLowerCase();
console.log("Capitalizado:", capitalizado); // Hola mundo


// 8. SLICE - EXTRAER PARTE
console.log("\n=== SLICE ===");
const palabra2 = "JavaScript";

console.log("slice(0, 4):", palabra2.slice(0, 4)); // Java
console.log("slice(4, 10):", palabra2.slice(4, 10)); // Script
console.log("slice(-6):", palabra2.slice(-6)); // Script (últimos 6)


// 9. SUBSTRING vs SUBSTR
console.log("\n=== SUBSTRING Y SUBSTR ===");
const texto6 = "Desarrollo Web";

console.log("substring(0, 9):", texto6.substring(0, 9)); // Desarrollo
console.log("substring(11, 14):", texto6.substring(11, 14)); // Web

console.log("substr(0, 9):", texto6.substr(0, 9)); // Desarrollo (inicio, longitud)


// 10. TRIM - ELIMINAR ESPACIOS
console.log("\n=== TRIM ===");
const textoConEspacios = "   Hola Mundo   ";

console.log("Original:", "|" + textoConEspacios + "|");
console.log("trim():", "|" + textoConEspacios.trim() + "|");
console.log("trimStart():", "|" + textoConEspacios.trimStart() + "|");
console.log("trimEnd():", "|" + textoConEspacios.trimEnd() + "|");


// 11. REPLACE - REEMPLAZAR
console.log("\n=== REPLACE ===");
const frase3 = "Gato gato gato";

console.log("replace('gato', 'perro'):", frase3.replace("gato", "perro")); // Gato perro gato
console.log("replaceAll('gato', 'perro'):", frase3.replaceAll("gato", "perro")); // Gato perro perro


// 12. SPLIT - DIVIDIR EN ARRAY
console.log("\n=== SPLIT ===");
const frase4 = "Hola Mundo JavaScript";
const palabras = frase4.split(" ");
console.log("Palabras:", palabras); // ["Hola", "Mundo", "JavaScript"]

const letras = "Hola".split("");
console.log("Letras:", letras); // ["H", "o", "l", "a"]

const csv = "Ana,Carlos,Laura,Juan";
const nombres = csv.split(",");
console.log("Nombres:", nombres);


// 13. SPLIT CON LÍMITE
console.log("\n=== SPLIT CON LÍMITE ===");
const texto7 = "a-b-c-d-e-f";
const limitado = texto7.split("-", 3); // Solo los primeros 3
console.log("Con límite 3:", limitado);


// 14. REPEAT - REPETIR
console.log("\n=== REPEAT ===");
console.log("'Ha' repetido 3 veces:", "Ha".repeat(3)); // HaHaHa
console.log("'=== ' repetido 5 veces:", "=== ".repeat(5));


// 15. PADSTART Y PADEND
console.log("\n=== PAD START Y PAD END ===");
const numero = "5";

console.log("padStart(3, '0'):", numero.padStart(3, "0")); // 005
console.log("padEnd(5, '!'):", numero.padEnd(5, "!")); // 5!!!!

// Números de tarjeta
const tarjeta = "1234";
const oculta = "*".repeat(12) + tarjeta.slice(-4);
console.log("Tarjeta oculta:", oculta); // ************1234


// 16. MATCH - EXPRESIONES REGULARES
console.log("\n=== MATCH ===");
const texto8 = "Tengo 25 años y 3 gatos";

const numeros = texto8.match(/\d+/g); // Todos los números
console.log("Números encontrados:", numeros); // ["25", "3"]

const vocales = "Hola Mundo".match(/[aeiou]/gi); // Todas las vocales
console.log("Vocales:", vocales);


// 17. SEARCH - BUSCAR CON REGEX
console.log("\n=== SEARCH ===");
const email = "contacto@ejemplo.com";

const posicion = email.search("@");
console.log("Posición de @:", posicion); // 8

const conRegex = "123-456-7890".search(/\d{3}/);
console.log("Primer grupo de 3 dígitos en:", conRegex);


// 18. COMPARACIÓN DE STRINGS
console.log("\n=== COMPARACIÓN ===");
console.log("'abc' < 'def':", "abc" < "def"); // true
console.log("'Hola' === 'Hola':", "Hola" === "Hola"); // true
console.log("'10' === 10:", "10" === 10); // false

console.log("localeCompare():");
console.log("'a'.localeCompare('b'):", "a".localeCompare("b")); // -1
console.log("'b'.localeCompare('a'):", "b".localeCompare("a")); // 1
console.log("'a'.localeCompare('a'):", "a".localeCompare("a")); // 0


// 19. EJEMPLOS PRÁCTICOS: VALIDAR EMAIL
console.log("\n=== VALIDAR EMAIL ===");
function esEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log("ana@email.com:", esEmailValido("ana@email.com")); // true
console.log("email-invalido:", esEmailValido("email-invalido")); // false
console.log("juan@ejemplo.co.uk:", esEmailValido("juan@ejemplo.co.uk")); // true


// 20. EJEMPLOS PRÁCTICOS: FORMATEAR TELÉFONO
console.log("\n=== FORMATEAR TELÉFONO ===");
function formatearTelefono(numero) {
  const limpio = numero.replace(/\D/g, ""); // Remove non-digits
  if (limpio.length !== 10) return "Inválido";
  return "(" + limpio.slice(0, 3) + ") " + limpio.slice(3, 6) + "-" + limpio.slice(6);
}

console.log("1234567890:", formatearTelefono("1234567890")); // (123) 456-7890
console.log("123-456-7890:", formatearTelefono("123-456-7890")); // (123) 456-7890


// 21. EJEMPLOS PRÁCTICOS: SLUG (URL AMIGABLE)
console.log("\n=== CREAR SLUG ===");
function crearSlug(texto) {
  return texto
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remover caracteres especiales
    .replace(/\s+/g, "-") // Espacios a guiones
    .replace(/-+/g, "-"); // Múltiples guiones a uno
}

console.log("Mi Primer Artículo:", crearSlug("Mi Primer Artículo"));
console.log("¿Cómo aprender JavaScript?:", crearSlug("¿Cómo aprender JavaScript?"));


// 22. EJEMPLOS PRÁCTICOS: TRUNCAR TEXTO
console.log("\n=== TRUNCAR TEXTO ===");
function truncar(texto, longitud = 50) {
  if (texto.length <= longitud) {
    return texto;
  }
  return texto.slice(0, longitud) + "...";
}

const textoLargo = "Este es un texto muy largo que necesita ser truncado para la visualización en la página";
console.log(truncar(textoLargo, 30));
console.log(truncar("Texto corto", 30));


// 23. EJEMPLOS PRÁCTICOS: CAPITALIZAR PALABRAS
console.log("\n=== CAPITALIZAR PALABRAS ===");
function capitalizarPalabras(texto) {
  return texto
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(" ");
}

console.log(capitalizarPalabras("hola mundo javascript"));
console.log(capitalizarPalabras("desarrollo WEB moderno"));


// 24. EJEMPLOS PRÁCTICOS: CONTAR PALABRAS
console.log("\n=== CONTAR PALABRAS ===");
function contarPalabras(texto) {
  return texto.trim().split(/\s+/).length;
}

function contarCaracteres(texto, sinEspacios = false) {
  if (sinEspacios) {
    return texto.replace(/\s/g, "").length;
  }
  return texto.length;
}

const texto9 = "JavaScript es un lenguaje de programación";
console.log("Palabras:", contarPalabras(texto9)); // 6
console.log("Caracteres (con espacios):", contarCaracteres(texto9)); // 42
console.log("Caracteres (sin espacios):", contarCaracteres(texto9, true)); // 35


// 25. EJEMPLOS PRÁCTICOS: INVERTIR STRING
console.log("\n=== INVERTIR STRING ===");
function invertir(texto) {
  return texto.split("").reverse().join("");
}

console.log("Hola:", invertir("Hola")); // aloH
console.log("JavaScript:", invertir("JavaScript")); // tpircSavaJ


// 26. EJEMPLOS PRÁCTICOS: DETECTAR PALÍNDROMO
console.log("\n=== DETECTAR PALÍNDROMO ===");
function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/\s/g, "");
  const invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}

console.log("Anilina:", esPalindromo("Anilina")); // true
console.log("La ruta nos aporta otro paso natural:", esPalindromo("La ruta nos aporta otro paso natural")); // true
console.log("Hola:", esPalindromo("Hola")); // false


// 27. EJEMPLOS PRÁCTICOS: RESALTAR BÚSQUEDA
console.log("\n=== RESALTAR BÚSQUEDA ===");
function resaltarBusqueda(texto, busqueda) {
  const regex = new RegExp(busqueda, "gi");
  return texto.replace(regex, (match) => `**${match}**`);
}

console.log(resaltarBusqueda("Me encanta JavaScript y JavaScript es genial", "javascript"));


// 28. EJEMPLOS PRÁCTICOS: CONVERTIR A CAMELCASE
console.log("\n=== CONVERTIR A CAMELCASE ===");
function toCamelCase(texto) {
  return texto
    .split(/[\s-_]+/)
    .map((palabra, index) => {
      if (index === 0) {
        return palabra.toLowerCase();
      }
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
    .join("");
}

console.log("mi variable nombre:", toCamelCase("mi variable nombre")); // miVariableNombre
console.log("mi-variable-nombre:", toCamelCase("mi-variable-nombre")); // miVariableNombre
console.log("MI_VARIABLE_NOMBRE:", toCamelCase("MI_VARIABLE_NOMBRE")); // miVariableNombre


// 29. EJEMPLOS PRÁCTICOS: EXTRAER NÚMEROS
console.log("\n=== EXTRAER NÚMEROS ===");
function extraerNumeros(texto) {
  const numeros = texto.match(/\d+/g);
  return numeros ? numeros.map(Number) : [];
}

console.log("Tengo 25 años y 3 gatos:", extraerNumeros("Tengo 25 años y 3 gatos"));
console.log("Código: 12345:", extraerNumeros("Código: 12345"));


// 30. EJEMPLOS PRÁCTICOS: PROTEGER INFORMACIÓN
console.log("\n=== PROTEGER INFORMACIÓN ===");
function ocultarEmail(email) {
  const [usuario, dominio] = email.split("@");
  const usuarioOculto = usuario.charAt(0) + "*".repeat(usuario.length - 2) + usuario.charAt(usuario.length - 1);
  return usuarioOculto + "@" + dominio;
}

console.log("ana@email.com:", ocultarEmail("ana@email.com")); // a*@email.com
console.log("carlos.martinez@empresa.com:", ocultarEmail("carlos.martinez@empresa.com")); // c*****.m@empresa.com
