// Obtención de elementos del DOM
const searchForm = document.getElementById("search-form"); // Formulario de búsqueda
const searchInput = document.getElementById("search-input"); // Campo de entrada de búsqueda
const tableBody = document.getElementById("table-body"); // Cuerpo de la tabla

// Variable para almacenar los datos obtenidos del JSON
let allData = [];

// Evento de envío del formulario
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const searchTerm = searchInput.value.toLowerCase(); // Obtener y convertir el término de búsqueda a minúsculas

  // Filtrar los datos según el término de búsqueda
  const filteredData = allData.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm)
  );

  // Limpiar la tabla antes de agregar nuevos datos
  tableBody.innerHTML = "";

  // Recorrer los datos filtrados y agregarlos a la tabla
  filteredData.forEach((item) => {
    const row = document.createElement("tr"); // Crear una nueva fila
    row.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.edad}</td>
      <td>${item.pais}</td>
    `; // Agregar celdas con los valores correspondientes
    tableBody.appendChild(row); // Agregar la fila a la tabla
  });
});

/**
 * Función para obtener los datos mediante fetch.
 * @returns {Promise<Array>} - Datos obtenidos en formato de array.
 */
/**
 * Función para obtener datos directamente desde un archivo JSON en GitHub.
 * @returns {Promise<Array>} - Datos obtenidos en formato de array.
 */
async function fetchData() {
  try {
    // Paso 1: Realizar una solicitud al archivo JSON en GitHub (reemplaza con tu URL)
    const response = await fetch('https://raw.githubusercontent.com/mpizano/front-end/main/2.Integradora/data.json');

    // Paso 2: Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Solicitud fallida con estado: ${response.status}`);
    }

    // Paso 3: Convertir la respuesta a formato JSON
    const data = await response.json();

    // Paso 4: Almacenar los datos obtenidos en la variable allData
    allData = data;

    // Paso 5: Devolver los datos obtenidos
    return data;
  } catch (error) {
    // En caso de error, mostrar un mensaje de error en la consola y devolver un array vacío
    console.error("Error al obtener los datos:", error);
    return [];
  }
}

/*
async function fetchData() {
  try {
    // const response = await fetch(`URL_DEL_SERVIDOR?search=${searchTerm}`);
    const response = await fetch(`data.json`); // Obtener los datos del archivo JSON
    const data = await response.json(); // Convertir la respuesta a formato JSON
    allData = data; // Almacenar todos los datos en la variable
    return data; // Devolver los datos obtenidos
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return []; // En caso de error, devolver un array vacío
  }
}

*/

// Llamar a fetchData al cargar la página
fetchData();
