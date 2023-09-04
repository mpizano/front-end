// Espera a que el DOM esté completamente cargado antes de iniciar la manipulación.
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene referencias a elementos del DOM.
    const btnCallback = document.getElementById("btnCallback");
    const btnPromise = document.getElementById("btnPromise");
    const inputText = document.getElementById("inputText");
    const resultadoCallback = document.getElementById("resultadoCallback");
    const resultadoPromise = document.getElementById("resultadoPromise");

    // Agrega un evento de clic al botón "Llamada Asíncrona con Callback".
    btnCallback.addEventListener("click", () => {
        // Invoca la función fetchDataWithCallback pasando el valor del input y una función de callback.
        fetchDataWithCallback(inputText.value, (response, error) => {
            if (error) {
                // Si hay un error en la llamada, muestra una alerta de Bootstrap con clase "danger".
                displayAlert(resultadoCallback, "danger", "Error: " + error);
            } else {
                // Si la llamada fue exitosa, muestra una alerta de Bootstrap con clase "info".
                displayAlert(resultadoCallback, "info", response);
            }
        });
    });

    // Agrega un evento de clic al botón "Llamada Asíncrona con Promise".
    btnPromise.addEventListener("click", () => {
        // Invoca la función fetchDataWithPromise y utiliza then/catch para manejar resultados y errores.
        fetchDataWithPromise(inputText.value)
            .then((response) => {
                // Si la Promise se resuelve con éxito, muestra una alerta de Bootstrap con clase "primary".
                displayAlert(resultadoPromise, "primary", response);
            })
            .catch((error) => {
                // Si la Promise es rechazada, muestra una alerta de Bootstrap con clase "danger".
                displayAlert(resultadoPromise, "danger", "Error: " + error);
            });
    });

    // Simula una llamada asíncrona utilizando callbacks.
    function fetchDataWithCallback(input, callback) {
        setTimeout(() => {
            if (input) {
                callback("Callback: " + input.toUpperCase());
            } else {
                callback(null, "Input vacío");
            }
        }, 1000); // Simula un retraso de 1 segundo.
    }

    // Simula una llamada asíncrona utilizando Promises.
    function fetchDataWithPromise(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (input) {
                    resolve("Promise: " + input.toLowerCase());
                } else {
                    reject("Input vacío");
                }
            }, 1500); // Simula un retraso de 1.5 segundos.
        });
    }

    // Muestra una alerta de Bootstrap en un elemento del DOM.
    function displayAlert(element, alertType, message) {
        element.innerHTML = `<div class="alert alert-${alertType}" role="alert">${message}</div>`;
    }
});
