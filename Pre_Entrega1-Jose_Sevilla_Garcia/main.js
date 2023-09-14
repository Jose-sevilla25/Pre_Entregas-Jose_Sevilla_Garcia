'use strict'

//Notas: Hay variables que se repiten en distintos ejercicios, por eso al principio tira error en Visual Code;

//Crear un algoritmo con un condicional.

//Ejercicio 1: 
const edad = prompt("Ingrese su edad:");

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Todavia eres menor de edad");
}

//Ejercicio 2:

const numero = parseFloat(prompt("Ingrese un número:"));

if (numero > 0) {
    console.log("El número que ingreso es positivo");
} else if (numero < 0) {
    console.log("El número que ingreso es negativo");
} else {
    console.log("El numero es igual a cero");
}

//Crear un algoritmo utilizando un ciclo.

//Ejercicio 1:
const numero = 2;

for (let i = 0; i <= 20; i += 5) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} es igual a ${resultado}`);
}

//Ejercicio 2: FizzBuzz

// 3, 6, 9, 12, 15... Fizz
// 5, 10, 15, 20... Buzz
// 15, 30, 45, 60... FizzBuzz

for(let i = 1; i <= 100; i++){
    if ( i % 15 === 0) {
        console.log(`${i} Fizz Buzz`)
    } else if ( i % 3 === 0) {
        console.log(`${i} Fizz`)
    } else if ( i % 5 === 0) {
        console.log(`${i} Buzz`)
    }
}

//Ejercicio 3: Adivina el número 

const numero = Math.ceil(Math.random() * 100);
let intentos = 0;
let adivinanza;

while ( adivinanza !== numero) {
    adivinanza = parseInt(prompt("Ingresa un número del 1 al cien"));
    intentos++

    if (adivinanza < numero) {
        console.log("El número es mas alto");
    } else if (adivinanza > numero) {
        console.log("El número es mas bajo");
    }
}
console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);

//Ejercicio 4:

let numeroInicial = parseInt(prompt("Ingrese el número que inicia:"));
let numeroFinal = parseInt(prompt("Ingrese el número donde termina:"));

if (numeroInicial < numeroFinal) {
    let contador = numeroInicial;

    while( contador <= numeroFinal) {
        console.log(contador)
        contador++;
    }
} else {
    console.log("El número inicial debe ser mayor al número final");
}

//Armar un simulador interactivo:
//El simulador es un examen de matematica en el que cuando terminas te dice automaticamente si estas aprobado o desaprobado;

//Funcion para realizar la pregunta
function hacerPregunta(pregunta) {
    return prompt(pregunta);
}

//Funcion para realizar el examen
function realizarExamen() {
    let puntaje = 0;

    for ( let i = 1; i <= 5; i++) {
        const respuesta = hacerPregunta(`Pregunta ${i}: ¿Cuanto es 2 * ${i}`);
        const respuestaCorrecta = 2 * i;

        if(parseInt(respuesta) === respuestaCorrecta) {
            puntaje++;
        }
    }

    return puntaje;
}

//Funcion para mostrar el resultado del examen

function mostrarResultado(puntaje) {
    if (puntaje >= 3) {
        alert(`¡Felicidades! aprobaste el con  ${puntaje}/5`);
    } else {
        alert(`¡Desaprobaste! tu puntaje fue ${puntaje}/5`);
    }
}

const puntajeObtenido = realizarExamen();
mostrarResultado(puntajeObtenido);