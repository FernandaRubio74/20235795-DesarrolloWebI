document.getElementById('form-Estudiante').addEventListener('submit', function (event) {
    event.preventDefault(); //En la investigación, encontre que esta funcion ayuda a que el formulario no se envíe y permita validar los datos

    //Datos del HTML 
    const carnet = document.getElementById('carnet').value;
    const nombre = document.getElementById('nombre').value;
    const dui = document.getElementById('dui').value;
    const nit = document.getElementById('nit').value;
    const fecha = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const errorMsg = document.getElementById('error');

    //expresiones para validar datos
    const ValCarnet = /^[A-Z]{2}\d{3}$/;
    const ValNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Solo letras y espacios
    const ValDUI = /^\d{8}-\d$/; //Válido solo si son 8 números y un guión
    const ValNIT = /^\d{4}-\d{6}-\d{3}-\d$/;  //valido si son 4, 6 y 3 números separados por guión
    const ValCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Correo válido, '@' y dominio
    const ValEdad = /^\d+$/; // Solo números

    // Validaciones - Mensajes de error para cada campo del formulario
    if (!ValCarnet.test(carnet)) {
      errorMsg.textContent = "Carnet inválido (formato: AB001)";
      return;
    }
    if (!ValNombre.test(nombre)) {
      errorMsg.textContent = "Nombre inválido (solo letras y espacios permitidos)";
      return;
    }
    if (!ValDUI.test(dui)) {
      errorMsg.textContent = "DUI inválido (formato: ########-#)";
      return;
    }
    if (!ValNIT.test(nit)) {
      errorMsg.textContent = "NIT inválido (formato: ####-######-###-#)";
      return;
    }
    if (!fecha) {
      errorMsg.textContent = "Debe ingresar una fecha de nacimiento válida";
      return;
    }
    if (!ValCorreo.test(correo)) {
      errorMsg.textContent = "Correo electrónico inválido";
      return;
    }
    if (!ValEdad.test(edad) || parseInt(edad) <= 0) {
      errorMsg.textContent = "Edad inválida (solo números positivos)";
      return;
    }

    errorMsg.textContent = ""; 
    alert("Formulario enviado correctamente");
  });