/*// Obtener el modal
let modal = document.getElementById("myModal");

// Obtener el botón para cerrar el modal
let span = document.getElementsByClassName("close")[0];

// Mostrar el modal al cargar la página
window.onload = function() {
  modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la 'x'
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/


// Obtener elementos del DOM
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let btn = document.getElementById("openModalBtn");
let span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
  modalImg.src = "/src/images/ficha1.jpg"; // Reemplaza "imagen.jpg" con la ruta de tu imagen
}

// Cuando se hace clic en <span> (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
