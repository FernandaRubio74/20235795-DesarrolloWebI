//Accedemos al contenedor donde se mostrará los estudiantes
const contanierResultado = document.querySelector("#idContainerResultado");

//Accedemos a cada botón por medio de la API DOM
const btnCalcular = document.querySelector("#idBtnCalcular");

//Agregamos el evento click al botón calcular, se le asigna la función que rrealizará la operación
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla(){
    const inputTabla = document.querySelector("#inputTabla").value;

    let contador = 1;

    if (inputTabla > 0) {
        let tabla = `<h2>Tabla de multiplicar del ${inputTabla}</h2>`;
        //utilizaremos do while para generar la tabla de multiplicar
        do{
            let resultado = contador * inputTabla;
            tabla += `<div class="row text-center">`;
            tabla += `<div class="col-md-1 column"><h3>${contador}</h3></div>`;
            tabla += `<div class="col-md-1 column-green"><h3>x</h3></div>`;
            tabla += `<div class="col-md-1 column"><h3>${inputTabla}</h3></div>`;
            tabla += `<div class="col-md-1 column-green"><h3>=</h3></div>`;
            tabla += `<div class="col-md-1 column"><h3>${resultado}</h3></div>`;
            tabla += `</div>`;

            //incrementamos el valor del contador para que podamos salir del do while
            contador++;
        }while (contador <= 12);

        document.querySelector("#inputTabla").value=1;
        document.querySelector("#inputTabla").focus();
        contanierResultado.innerHTML = tabla;
    }else{
        alert("No se ha ingresado un numero valido")
    }
}