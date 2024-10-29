// Otra forma de acceder a un elemento HTML es utilizando el getElementById del DOM
// Nótese que para este caso no se antepone el carácter #
const campo = document.getElementById("idTxtNumero");

// Definimos una función anónima que permite validar en tiempo real el ingreso de un número
const validarNumero = function (e) {
    // Creamos una expresión regular que valida que sean números
    let validar = /[0-9]{1}/;
    let tecla = e.key;

    /*
    .test valida que la expresión regular coincida con el valor ingresado
    Podrás observar que al intentar teclear una letra u otro carácter diferente
    a un número, este no se escribe en el campo
    */
    if (!validar.test(tecla)) e.preventDefault();
};

// Definiendo el evento keypress para el campo
campo.addEventListener("keypress", validarNumero);

// Trabajando con el botón Calcular
const boton = document.getElementById("idBtnCalcular");

// Definiendo una función anónima para calcular el factorial de un número
function calcularFactorial(numero) {
    return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
}

// Definimos una función de tipo flecha para imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero} es ${resultado}`;
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

// Definiendo una funcion tradicional
function calcular() {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero != "") {
        // Llamamos a la funcion anonima para que calcule el factorial
        let resultado = calcularFactorial(numero);
        // Enviando el resultado a una funcion de tipo flecha
        imprimir(numero, resultado);
    } else {
        alert("Debe ingresar un numero válido");
    }
}

// Definiendo el evento click para el boton
boton.addEventListener("click", calcular);