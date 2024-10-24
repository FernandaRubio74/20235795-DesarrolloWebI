function aviso() {
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion() {
    //Los valores que pueden almacenar la variable confirmacion
    // son true o false

    let confirmacion = confirm("¿Desea salir de la Sesión?");
    /* para imprimir una variable en una cadena podemos utilizar las comillas simples inversas `` y luego hacemos el llamado de la variable con ${aqui va la variable}*/

    alert(`Valor seleccionado ${confirmacion}`);
}

function capturaDatos() {
    let nombre = prompt("¿Cuál es su nombre?");
    //Notese que en un campo del prompt se mostrara cero por defecto
    let edad = prompt("¿Cuál es su edad?", 0);

    alert(`Su nombre es ${nombre} y su edad es ${edad}`)
}

function dibujarParrafo() {
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el parrafo"
    );

    /* Utilizaremos la API DOM para acceder el elemento*/

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}