
// calculadora
let historial = [];

// Función para realizar una operación
function realizarOperacion(operacion) {
    let num1 = parseFloat(prompt("Ingrese el número 1"));
    let num2 = parseFloat(prompt("Ingrese el número 2"));
    let resultado;

    switch (operacion) {
        case 1: // Suma
            resultado = num1 + num2;
            alert("Resultado de la suma: " + resultado);
            historial.push({ operacion: 'suma', resultado: resultado });
            break;
        case 2: // Resta
            resultado = num1 - num2;
            alert("Resultado de la resta: " + resultado);
            historial.push({ operacion: 'resta', resultado: resultado });
            break;
        case 3: // Multiplicación
            resultado = num1 * num2;
            alert("Resultado de la multiplicación: " + resultado);
            historial.push({ operacion: 'multiplicacion', resultado: resultado });
            break;
        case 4: // División
            resultado = num1 / num2;
            alert("Resultado de la división: " + resultado);
            historial.push({ operacion: 'division', resultado: resultado });
            break;
        default:
            alert("Operación no válida");
            return;
    }

    mostrarHistorial();
}

// Función para mostrar el historial
function mostrarHistorial() {
    let historialTexto = '';
    for (let i = 0; i < historial.length; i++) {
        historialTexto += 'Operación: ' + historial[i].operacion + ', Resultado: ' + historial[i].resultado + '\n';
    }
    alert("Historial:\n" + historialTexto);
}

// Función para filtrar el historial por operación
function filtrarHistorial(operacion) {
    let historialFiltrado = historial.filter(function(item) {
        return item.operacion === operacion;
    });

    let historialTexto = '';
    for (let i = 0; i < historialFiltrado.length; i++) {
        historialTexto += 'Operación: ' + historialFiltrado[i].operacion + ', Resultado: ' + historialFiltrado[i].resultado + '\n';
    }
    alert("Historial filtrado:\n" + historialTexto);
}

// Bucle para seguir realizando operaciones
let continuar = true;
while (continuar) {
    // Obtener la operación seleccionada por el usuario
    let opcion = parseInt(prompt("Seleccione una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"));

    // Realizar la operación seleccionada
    realizarOperacion(opcion);

    // Preguntar al usuario si desea continuar
    let respuesta = prompt("¿Desea realizar otra operación? (S/N)").toUpperCase();
    if (respuesta !== "S") {
        continuar = false;
    } 
}
// Obtener la operación para filtrar el historial
let opcionFiltro = prompt("Seleccione una operación para filtrar el historial:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");

// Filtrar y mostrar el historial según la operación seleccionada
filtrarHistorial(opcionFiltro);
