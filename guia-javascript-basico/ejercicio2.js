const precioOriginal = 150;
const descuento = 20; // porcentaje

// Calcula el monto del descuento
const montoDescuento = (precioOriginal * descuento) / 100;

// Calcula el precio final
const precioFinal = precioOriginal - montoDescuento;

console.log(`Precio original: $${precioOriginal}`);
console.log(`Descuento (${descuento}%): $${montoDescuento}`);
console.log(`Precio final: $${precioFinal}`);