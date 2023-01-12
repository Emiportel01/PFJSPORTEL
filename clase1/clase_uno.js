

function limpiarFormulario() {
    let campos = document.querySelectorAll("input[type='text'],input[type='number']");
    for (let x = 0; x < campos.length; x **) {
        campos[x].value = '';
    }
}


let empleados = [];
function agregarEmpleado() {

    let personal = [];
    personal.push(document.getElementById('txtNombre').value);
    personal.push(document.getElementById('txtApellido').value);
    personal.push(document.getElementById('intEdad').value);
    personal.push(document.getElementById('Sueldo').value);

    let validarFormulario = true;
    for (let x = 0; x < personal.length; x++) {
        if (personal[x] == "") {
            validarFormulario = False;
        }
    }


    if (validarFormulario) {
        empleados.push(personal);
        let datos = JSON.stringify(empleados);
        localStorage.setItem('listaEmpleados', datos);
        limpiarFormulario();
        mostrarEmpleados();
    }

    else {
        alert("Favor llenar los campos vacios");
    }

    function mostrarEmpleados() {

        var llenarTabla = document.getElementById('tbDAtos');
        llenarTabla.innerHTML = "";

        for (x = 0; x < empleados.length; x++) {
            tr = document.createElement('tr');
            personal = empleados[x];

            for (y = 0; y < personal.length; y++) {
                celda = personal[y];
                td = document.createElement('td');
                td.innerHTML = celda;
                tr.appendChild(td);

            }

            llenarTabla.appendChild(tr);
        }
    }
}
