// OBJETOS EN JAVASCRIPT

// 1. OBJETO LITERAL BÁSICO
console.log("=== OBJETO LITERAL BÁSICO ===");
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};
console.log(persona);
console.log(typeof persona); // object


// 2. ACCESO A PROPIEDADES
console.log("\n=== ACCESO A PROPIEDADES ===");
console.log("Nombre:", persona.nombre); // Notación punto
console.log("Edad:", persona["edad"]); // Notación corchetes

const propiedad = "ciudad";
console.log("Ciudad:", persona[propiedad]); // Con variable


// 3. MODIFICAR PROPIEDADES
console.log("\n=== MODIFICAR PROPIEDADES ===");
const producto = {
  nombre: "Laptop",
  precio: 800,
  stock: 10
};
console.log("Antes:", producto);

producto.precio = 750;
producto["stock"] = 8;
console.log("Después:", producto);


// 4. AÑADIR NUEVAS PROPIEDADES
console.log("\n=== AÑADIR PROPIEDADES ===");
const usuario = {
  nombre: "Carlos",
  email: "carlos@email.com"
};
console.log("Antes:", usuario);

usuario.telefono = "555-1234";
usuario["direccion"] = "Calle Principal 123";
console.log("Después:", usuario);


// 5. ELIMINAR PROPIEDADES
console.log("\n=== ELIMINAR PROPIEDADES ===");
const estudiante = {
  nombre: "Laura",
  edad: 22,
  calificacion: 85,
  carrera: "Ingeniería"
};
console.log("Antes:", estudiante);

delete estudiante.carrera;
console.log("Después de delete:", estudiante);


// 6. VERIFICAR SI EXISTE PROPIEDAD
console.log("\n=== VERIFICAR PROPIEDADES ===");
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
};

console.log("¿Tiene marca?:", "marca" in coche); // true
console.log("¿Tiene color?:", "color" in coche); // false
console.log("¿Tiene propiedad marca?:", coche.hasOwnProperty("marca")); // true


// 7. MÉTODOS EN OBJETOS
console.log("\n=== MÉTODOS EN OBJETOS ===");
const calculator = {
  numero1: 10,
  numero2: 5,
  
  sumar: function() {
    return this.numero1 + this.numero2;
  },
  
  restar: function() {
    return this.numero1 - this.numero2;
  },
  
  multiplicar: function() {
    return this.numero1 * this.numero2;
  }
};

console.log("Suma:", calculator.sumar());
console.log("Resta:", calculator.restar());
console.log("Multiplicación:", calculator.multiplicar());


// 8. MÉTODOS CON ARROW FUNCTION
console.log("\n=== MÉTODOS CON ARROW FUNCTION ===");
const usuario2 = {
  nombre: "Pedro",
  saludar: () => {
    console.log("Hola");
  },
  
  presentarse() {
    console.log("Me llamo " + this.nombre);
  }
};

usuario2.saludar();
usuario2.presentarse();


// 9. DESESTRUCTURACIÓN
console.log("\n=== DESESTRUCTURACIÓN ===");
const libro = {
  titulo: "1984",
  autor: "George Orwell",
  año: 1949,
  paginas: 328
};

// Desestructuración básica
const { titulo, autor } = libro;
console.log("Título:", titulo);
console.log("Autor:", autor);

// Desestructuración con renombre
const { titulo: nombreLibro, paginas: totalPaginas } = libro;
console.log("Nombre del libro:", nombreLibro);
console.log("Total de páginas:", totalPaginas);

// Con valor por defecto
const { editor = "Desconocido" } = libro;
console.log("Editor:", editor);


// 10. SPREAD OPERATOR (...)
console.log("\n=== SPREAD OPERATOR ===");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combinar objetos
const combinado = { ...obj1, ...obj2 };
console.log("Combinado:", combinado);

// Copiar objeto
const original = { x: 10, y: 20 };
const copia = { ...original };
console.log("Original:", original);
console.log("Copia:", copia);

// Sobrescribir propiedades
const mejorado = { ...obj1, b: 99 };
console.log("Mejorado:", mejorado);


// 11. OBJECT.KEYS(), VALUES(), ENTRIES()
console.log("\n=== OBJECT METHODS ===");
const settings = {
  tema: "oscuro",
  idioma: "español",
  notificaciones: true
};

console.log("Propiedades:", Object.keys(settings));
console.log("Valores:", Object.values(settings));
console.log("Pares clave-valor:", Object.entries(settings));

// Iterar con entries
for (const [clave, valor] of Object.entries(settings)) {
  console.log(clave + ": " + valor);
}


// 12. OBJECT.ASSIGN()
console.log("\n=== OBJECT.ASSIGN() ===");
const base = { a: 1, b: 2 };
const extension = { c: 3 };
const merged = Object.assign({}, base, extension);
console.log("Resultado:", merged);

// Modificar original
const target = { x: 1 };
const source = { y: 2, z: 3 };
Object.assign(target, source);
console.log("Target modificado:", target);


// 13. OBJECT.FREEZE() Y OBJECT.SEAL()
console.log("\n=== FREEZE Y SEAL ===");

// Freeze: no se puede modificar, añadir ni eliminar
const frozen = Object.freeze({ nombre: "Ana", edad: 25 });
console.log("Frozen antes:", frozen);
frozen.edad = 30; // No hace nada
console.log("Frozen después:", frozen); // Sigue igual

// Seal: se puede modificar pero no añadir ni eliminar
const sealed = Object.seal({ ciudad: "Madrid" });
console.log("Sealed antes:", sealed);
sealed.ciudad = "Barcelona"; // Funciona
sealed.pais = "España"; // No funciona
console.log("Sealed después:", sealed);


// 14. OBJETOS ANIDADOS
console.log("\n=== OBJETOS ANIDADOS ===");
const empresa = {
  nombre: "TechCorp",
  empleados: [
    { nombre: "Ana", puesto: "Desarrolladora" },
    { nombre: "Carlos", puesto: "Diseñador" }
  ],
  direccion: {
    calle: "Avenida Principal",
    ciudad: "Madrid",
    codigoPostal: 28001
  },
  contacto: {
    email: "info@techcorp.com",
    telefonos: ["555-1234", "555-5678"]
  }
};

console.log("Empresa:", empresa.nombre);
console.log("Primer empleado:", empresa.empleados[0].nombre);
console.log("Ciudad:", empresa.direccion.ciudad);
console.log("Email:", empresa.contacto.email);
console.log("Primer teléfono:", empresa.contacto.telefonos[0]);


// 15. CONSTRUCTOR CON FUNCIÓN
console.log("\n=== CONSTRUCTOR CON FUNCIÓN ===");
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log("Hola, soy " + this.nombre);
  };
}

const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Carlos", 30);

console.log(persona1);
console.log(persona2);
persona1.saludar();
persona2.saludar();


// 16. CLASES (SYNTAX MODERNO)
console.log("\n=== CLASES ===");
class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  
  obtenerInfo() {
    return this.marca + " " + this.modelo;
  }
}

const auto = new Vehiculo("Toyota", "Corolla");
const moto = new Vehiculo("Honda", "CB500");

console.log(auto.obtenerInfo());
console.log(moto.obtenerInfo());


// 17. HERENCIA CON CLASES
console.log("\n=== HERENCIA ===");
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  
  hablar() {
    return this.nombre + " hace ruido";
  }
}

class Perro extends Animal {
  hablar() {
    return this.nombre + " ladra: ¡Guau!";
  }
}

class Gato extends Animal {
  hablar() {
    return this.nombre + " maúlla: ¡Miau!";
  }
}

const perro = new Perro("Rex");
const gato = new Gato("Misi");

console.log(perro.hablar());
console.log(gato.hablar());


// 18. GETTERS Y SETTERS
console.log("\n=== GETTERS Y SETTERS ===");
class Rectangulo {
  constructor(ancho, alto) {
    this._ancho = ancho;
    this._alto = alto;
  }
  
  get area() {
    return this._ancho * this._alto;
  }
  
  get perimetro() {
    return 2 * (this._ancho + this._alto);
  }
  
  set ancho(valor) {
    if (valor > 0) {
      this._ancho = valor;
    }
  }
  
  set alto(valor) {
    if (valor > 0) {
      this._alto = valor;
    }
  }
}

const rect = new Rectangulo(10, 5);
console.log("Área:", rect.area); // usa el getter
console.log("Perímetro:", rect.perimetro);

rect.ancho = 20; // usa el setter
console.log("Nueva área:", rect.area);


// 19. EJEMPLOS PRÁCTICOS: CARRITO DE COMPRAS
console.log("\n=== CARRITO DE COMPRAS ===");
const carrito = {
  items: [
    { producto: "Laptop", precio: 800, cantidad: 1 },
    { producto: "Mouse", precio: 25, cantidad: 2 },
    { producto: "Teclado", precio: 75, cantidad: 1 }
  ],
  
  agregarItem(producto, precio, cantidad) {
    this.items.push({ producto, precio, cantidad });
  },
  
  eliminarItem(producto) {
    this.items = this.items.filter(item => item.producto !== producto);
  },
  
  obtenerTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0);
  },
  
  obtenerResumen() {
    return {
      totalItems: this.items.length,
      totalProductos: this.items.reduce((sum, item) => sum + item.cantidad, 0),
      precioTotal: this.obtenerTotal()
    };
  }
};

console.log("Carrito:", carrito.items);
console.log("Total:", carrito.obtenerTotal());
console.log("Resumen:", carrito.obtenerResumen());


// 20. EJEMPLOS PRÁCTICOS: USUARIO CON MÉTODOS
console.log("\n=== USUARIO CON MÉTODOS ===");
class Usuario {
  constructor(nombre, email, edad = 0) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.activo = true;
  }
  
  esMayorDeEdad() {
    return this.edad >= 18;
  }
  
  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  
  desactivar() {
    this.activo = false;
  }
  
  obtenerPerfil() {
    return {
      nombre: this.nombre,
      email: this.email,
      estado: this.activo ? "Activo" : "Inactivo",
      mayoresDeEdad: this.esMayorDeEdad() ? "Sí" : "No"
    };
  }
}

const usuario3 = new Usuario("Laura", "laura@email.com", 28);
console.log("¿Mayor de edad?:", usuario3.esMayorDeEdad());
console.log("Perfil:", usuario3.obtenerPerfil());

usuario3.cambiarNombre("Laura García");
console.log("Nuevo nombre:", usuario3.nombre);

usuario3.desactivar();
console.log("Perfil actualizado:", usuario3.obtenerPerfil());


// 21. OBJETO JSON
console.log("\n=== TRABAJAR CON JSON ===");
const personaObj = {
  nombre: "Diego",
  edad: 35,
  ciudad: "Barcelona"
};

// Convertir a JSON
const jsonString = JSON.stringify(personaObj);
console.log("JSON string:", jsonString);

// Convertir de JSON a objeto
const personaRecuperada = JSON.parse(jsonString);
console.log("Objeto recuperado:", personaRecuperada);

// Con indentación
const jsonFormato = JSON.stringify(personaObj, null, 2);
console.log("JSON formateado:");
console.log(jsonFormato);


// 22. COMPARACIÓN DE OBJETOS
console.log("\n=== COMPARACIÓN DE OBJETOS ===");
const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 2 };
const obj5 = obj3;

console.log("obj3 === obj4:", obj3 === obj4); // false (referencias diferentes)
console.log("obj3 === obj5:", obj3 === obj5); // true (misma referencia)
console.log("Contenido igual:", JSON.stringify(obj3) === JSON.stringify(obj4)); // true


// 23. COPIAR OBJETOS PROFUNDAMENTE
console.log("\n=== COPIA PROFUNDA ===");
const original2 = {
  nombre: "Ana",
  datos: {
    edad: 25,
    ciudad: "Madrid"
  }
};

// Copia superficial (spread)
const copia1 = { ...original2 };
copia1.datos.edad = 30;
console.log("Después de modificar copia superficial:");
console.log("Original.datos.edad:", original2.datos.edad); // 30 (también cambió)

// Copia profunda (JSON)
const original3 = {
  nombre: "Carlos",
  datos: {
    edad: 30,
    ciudad: "Barcelona"
  }
};
const copia2 = JSON.parse(JSON.stringify(original3));
copia2.datos.edad = 35;
console.log("\nDespués de modificar copia profunda:");
console.log("Original.datos.edad:", original3.datos.edad); // 30 (no cambió)
console.log("Copia.datos.edad:", copia2.datos.edad); // 35
