// Se espera a que el DOM se cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Se obtienen las referencias a elementos del formulario de creación
    const formularioCreacion = document.getElementById("formularioCreacion");
    const resultadoCreacion = document.getElementById("resultadoCreacion");

    // Se obtienen las referencias a elementos del formulario de JSON
    const formularioJSON = document.getElementById("formularioJSON");
    const tablaJSON = document.getElementById("tablaJSON");

    // Evento de envío del formulario de creación
    formularioCreacion.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir envío por defecto del formulario

        // Se capturan los valores de los campos de entrada
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;

        // Se crea un objeto JavaScript con los valores capturados
        const entidad = {
            nombre: nombre,
            edad: parseInt(edad)
        };

        // Se convierte el objeto a formato JSON y se muestra en el resultado
        const entidadJSON = JSON.stringify(entidad, null, 2);
        resultadoCreacion.innerHTML = `
            <h3>Resultado de Creación:</h3>
            <pre>${entidadJSON}</pre>
        `;
    });

    // Evento de envío del formulario de JSON
    formularioJSON.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir envío por defecto del formulario

        // Se obtiene la cadena JSON ingresada en el campo
        const cadenaJSON = document.getElementById("cadenaJSON").value;

        try {
            // Se intenta parsear la cadena JSON a un objeto JavaScript
            const objetoJSON = JSON.parse(cadenaJSON);

            // Se construye una tabla HTML con las propiedades y valores del objeto
            let tablaHTML = "<tr><th>Propiedad</th><th>Valor</th></tr>";
            for (const propiedad in objetoJSON) {
                tablaHTML += `<tr><td>${propiedad}</td><td>${objetoJSON[propiedad]}</td></tr>`;
            } // END for (const propiedad in objetoJSON)

            // Se muestra la tabla en el elemento tablaJSON
            tablaJSON.innerHTML = tablaHTML;
        } catch (error) {
            // Si hay un error en el análisis JSON, se muestra un mensaje de error
            tablaJSON.innerHTML = "<p class='error'>Error al parsear JSON. Verifique la cadena.</p>";
        }
    });
});
