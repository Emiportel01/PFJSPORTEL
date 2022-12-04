function calcular_prestamo(monto, cuotas) {

    monto = parseFloat(monto);
    let prestamo = 0;

    if (monto > 0 && cuotas == 3) {
        prestamo = monto + (monto * 0.15);
        return prestamo
    }
    else if (monto > 0 && cuotas == 6) {
        prestamo = monto + (monto * 0.30);
        return prestamo
    }
    else if (monto > 0 && cuotas == 12) {
        prestamo = monto + (monto * 0.50);
        return prestamo
    }

}


let monto = "";

console.log("Calcular prestamo")

while (monto != "FIN") {

    monto = prompt("Ingrese el monto que desea o ingrese FIN para salir")
    let cuotas = prompt("Ingrese la cantidad de cuotas 3, 6 o 12");

    let resultado = calcular_prestamo(monto, cuotas);

    console.log("Pediste: ", monto);
    console.log("En tantas cuotas: ", cuotas);
    console.log("Tenes que devolver: ", resultado);

    console.log("Volver a calcular");
}