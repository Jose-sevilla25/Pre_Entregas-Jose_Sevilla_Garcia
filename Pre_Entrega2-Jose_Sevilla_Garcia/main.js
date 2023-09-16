'use strict'

//Programa de lista de contactos, se pueden guardar y eliminar contactos... Tambien buscar el contacto por su nombre y cerrar el programa;

const listaContacto = [];

while (true) {
    const comando = prompt('Ingrese un comando: "agregar", "eliminar", "buscar", "salir".');

    switch (comando) {
        case "agregar":

            const nombre = prompt('Ingrese el nombre del contacto:');
            const telefono = prompt('Ingrese el numero de telefono:');

            listaContacto.push({ nombre, telefono });
            alert('Contacto agendado con exito');
            break;

        case "eliminar":

            const eliminarContacto = prompt('Ingrese el nombre del contacto que quiere eliminar:');
            const eliminar = listaContacto.findIndex(contacto => contacto.nombre === eliminarContacto);

            if (eliminar !== -1) {
                listaContacto.splice(eliminar, 1);
                alert('Contacto eliminado con exito');
            } else {
                alert('El contacto no existe en la lista');
            }
            break;

        case "buscar":

            const buscarNombre = prompt('Ingresa el nombre del contacto que quieres buscar');
            const contactoEncontrado = listaContacto.find(contacto => contacto.nombre === buscarNombre);

            if (contactoEncontrado) {
                alert(`Nombre: ${contactoEncontrado.nombre}, su numero de telefono es:${contactoEncontrado.telefono}`);
            } else {
                alert('El contacto no fue encontrado');
            }
            break;

        case "salir":

            alert('Saliste de la lista de contactos');
            process.exit(0);
            break;

        default:
            alert('Comando no conocido. Por favor ingrese un comando valido.');
    }
}

//Programa de registro de gastos, el usuario puede ingresar los gastos que va teniendo por d�a y conseguir una suma de lo que gasto;

let totalGastos = 0;
const gastos = [];

function ingresarGasto() {
    const montoGasto = parseFloat(prompt('Ingresa cuanto dinero gastaste:'));

    if (isNaN(montoGasto) || montoGasto === null || montoGasto === 'fin') {
        return false;
    } else {
        gastos.push(montoGasto);
        return true;
    }
}

function mostrarResumenGasto() {
    let detallesGasto = 'Detalles de gastos:\n';

    for (let i = 0; i < gastos.length; i++) {
        detallesGasto += `Gasto ${i + 1}: $${gastos[i].toFixed(2)}\n`;
    }

    console.log('Resumen de gastos:');
    console.log(detallesGasto);
    console.log(`Total de gastos: $${totalGastos.toFixed(2)}`);
  
    alert('Resumen de gastos:\n\n' + detallesGasto + '\nTotal de gastos: $' + totalGastos.toFixed(2));
}

let continuar = true;

while (continuar) {
  continuar = ingresarGasto();
  if (continuar) {
    totalGastos += gastos[gastos.length - 1];
  }
}

mostrarResumenGasto();









