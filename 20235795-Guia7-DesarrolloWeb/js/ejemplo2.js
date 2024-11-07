// Obteniendo la referencia de los elementos
//Accediendo a los datos del formulario
const nombre = document.getElementById("idNombre");
const apellidos = document.getElementById("idApellidos");
const fechaNacimiento = document.getElementById("idFechaNac");
const correo = document.getElementById("idCorreo");
const password = document.getElementById("idPassword");
const password2 = document.getElementById("idPasswordRepetir");
const carrera = document.getElementById("idRdCarrera");
const pais = document.getElementById("idCmPais");
const intereses = document.querySelectorAll('input[type="checkbox"]'); 

// por medio de arreglos asociativos
// aquí se está utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];
const button2 = document.getElementById("idBtnVerFormControl")

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

//Validaciones
// validar que no esten vacios
const validarCamposVacios = () => {
    let Valido = true;
    [nombre, apellidos, fechaNacimiento, correo, password, password2].forEach(elemento => {
        if (elemento.value.trim() === "") {
            alert(`El campo ${elemento.name} no debe estar vacío`);
            Valido = false;
        }
    });
    return Valido;
};

// Validar fecha de nacimiento no mayor a la fecha actual
const validarFechaNacimiento = () => {
    //Se busco como obtener la fecha actual
    const fechaActual = new Date().toISOString().split("T")[0];
    if (fechaNacimiento.value > fechaActual) {
        alert("La fecha de nacimiento no puede ser posterior a la fecha actual");
        return false;
    }
    return true;
};

// Comprobar formato de email
const validarEmail = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo.value)) {
        alert("El correo electrónico no es válido");
        return false;
    }
    return true;
};

// Validar que las contraseñas sean iguales
const validarContrasenas = () => {
    if (password.value !== password2.value) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    return true;
};

// Validar que se haya seleccionado al menos un interés
const validarIntereses = () => {
    const algunoSeleccionado = Array.from(intereses).some(checkbox => checkbox.checked);
    if (!algunoSeleccionado) {
        alert("Debe seleccionar al menos un interés");
        return false;
    }
    return true;
};

// Verificar que el usuario seleccione una carrera
const validarCarrera = () => {
    if (carrera.value === "") {
        alert("Debe seleccionar una carrera");
        return false;
    }
    return true;
};

// Verificar que se seleccione un país de origen
const validarPais = () => {
    if (pais.value === "") {
        alert("Debe seleccionar un país de origen");
        return false;
    }
    return true;
};

const mostrarDatosModal = () => {
    if (
        validarCamposVacios() &&
        validarFechaNacimiento() &&
        validarEmail() &&
        validarContrasenas() &&
        validarIntereses() &&
        validarCarrera() &&
        validarPais()
    ) {
        // Obtener los datos del formulario
        const datosFormulario = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            fechaNacimiento: fechaNacimiento.value,
            correo: correo.value,
            carrera: document.querySelector('input[name="idRdCarrera"]:checked'),
            pais: pais.options[pais.selectedIndex].text,
            intereses: Array.from(intereses).filter(checkbox => checkbox.checked).map(checkbox => checkbox.nextElementSibling.textContent)
        };

        // Crear una tabla para mostrar los datos
        const tabla = document.createElement("table");
        tabla.classList.add("table", "table-striped");

        // filas para que se muestren los datos
        let fila = tabla.insertRow();
        fila.insertCell().textContent = "Nombres";
        fila.insertCell().textContent = datosFormulario.nombre;

        fila = tabla.insertRow();
        fila.insertCell().textContent = "Apellidos";
        fila.insertCell().textContent = datosFormulario.apellidos;

        fila = tabla.insertRow();
        fila.insertCell().textContent = "Fecha de Nacimiento";
        fila.insertCell().textContent = datosFormulario.fechaNacimiento;

        fila = tabla.insertRow();
        fila.insertCell().textContent = "Correo Electrónico";
        fila.insertCell().textContent = datosFormulario.correo;

        fila = tabla.insertRow();
        fila.insertCell().textContent = "Carrera";
        fila.insertCell().textContent = datosFormulario.carrera;

        fila = tabla.insertRow();
        fila.insertCell().textContent = "País de Origen";
        fila.insertCell().textContent = datosFormulario.pais;

        fila = tabla.insertRow();
        fila.insertCell().textContent = "Intereses";
        fila.insertCell().textContent = datosFormulario.intereses.join(", ") || "Ninguno";

        // Limpiar el contenido previo y agregar la nueva tabla al cuerpo del modal
        bodyModal.innerHTML = "";
        bodyModal.appendChild(tabla);

        // Mostrar el modal
        modal.show();
    }
};


// Validar y mostrar datos al hacer clic en el botón de registro
button.onclick = () => {
    mostrarDatosModal();
};

// Recorrer el formulario
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        // Accediendo a cada hijo del formulario
        let elemento = elementos[index];

        // verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        // verificando el tipo de nodo
        let tipoNode = elemento.nodeName;


        // Contabilizando el total de INPUT TYPE = TEXT
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }
        // Contabilizando el total de INPUT TYPE = PASSWORD
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }
        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }
        // Contabilizando el total de INPUT TYPE = RADIO
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }
        // Contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }
        // Contabilizando el total de INPUT TYPE = FILE
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        // Contabilizando el total de INPUT TYPE = DATE
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        // Contabilizando el total de INPUT TYPE = SELECT
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
        `;

    bodyModal.innerHTML = resultado;
    // Función que permite mostrar el modal de Bootstrap
    // Esta función es definida por Bootstrap
    modal.show();
};

// Agregando eventos al botón
button2.onclick = () => {
    recorrerFormulario();
};
