let nombreCompleto = "Carlos Reyes"
let titulo = 'Lic. Informática Educativa'
let edad = 28
let calificacionCoach = 9.5
let coachActivo = true
let usuario = null
let preguntas = undefined
let fecha = new Date();

console.log(fecha)
console.log(fecha.toDateString())

console.log(fecha.toLocaleDateString('es-SV',
    {
        timeZone: 'America/El_Salvador',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
))
