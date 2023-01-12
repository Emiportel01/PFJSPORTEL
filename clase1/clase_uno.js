function agregarEmpleado() {

    let personal = [];
    let empleados = [];
    personal.push(document.getElementById('txtNombre').value);
    personal.push(document.getElementById('txtApellido').value);
    personal.push(document.getElementById('txtEdad').value);
    personal.push(document.getElementById('txtSueldo').value);
    empleados.push(personal);
    
}

function mostrarEmpleados() {

    let llenarTabla = document.getElementById('tbDAtos');
    llenarTabla.innerHTML = "";

    for(let x=0;x<empleados.length; x++ ){

        tr=document.createElement('tr');
        personal=empleados[x];

        for(let y=0; personal.length;y++){
            celda=personal[];
            td=document.createElement('td');
            dt.innerHTML=celda;
            tr.appendChild(td);

        }
    }
}