// Obtener el botón y la ventana emergente
let openButton = document.getElementById("openPopup");
let popup = document.getElementById("popup");

// Cuando se hace clic en el botón, mostrar la ventana emergente
openButton.addEventListener("click", function () {
    popup.classList.remove("hidden");
});

// Obtener el botón de cerrar
let closeButton = document.getElementById("closePopup");

// Cuando se hace clic en el botón de cerrar, ocultar la ventana emergente
closeButton.addEventListener("click", function () {
    popup.classList.add("hidden");
});

// Cuando el usuario hace clic fuera de la ventana emergente, ocultarla
window.addEventListener("click", function (event) {
    if (event.target == popup) {
        popup.classList.add("hidden");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup.classList.add("hidden");
    }
});





let openButton1 = document.getElementById("openPopup1");
let popup1 = document.getElementById("popup1");

// Cuando se hace clic en el botón, mostrar la ventana emergente
openButton1.addEventListener("click", function () {
    popup1.classList.remove("hidden");
});

// Obtener el botón de cerrar
let closeButton1 = document.getElementById("closePopup1");

// Cuando se hace clic en el botón de cerrar, ocultar la ventana emergente
closeButton1.addEventListener("click", function () {
    popup1.classList.add("hidden");
});

// Cuando el usuario hace clic fuera de la ventana emergente, ocultarla
window.addEventListener("click", function (event) {
    if (event.target == popup1) {
        popup1.classList.add("hidden");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup1.classList.add("hidden");
    }
});





let openButton2 = document.getElementById("openPopup2");
let popup2 = document.getElementById("popup2");

// Cuando se hace clic en el botón, mostrar la ventana emergente
openButton2.addEventListener("click", function () {
    popup2.classList.remove("hidden");
});

// Obtener el botón de cerrar
let closeButton2 = document.getElementById("closePopup2");

// Cuando se hace clic en el botón de cerrar, ocultar la ventana emergente
closeButton2.addEventListener("click", function () {
    popup2.classList.add("hidden");
});

// Cuando el usuario hace clic fuera de la ventana emergente, ocultarla
window.addEventListener("click", function (event) {
    if (event.target == popup2) {
        popup2.classList.add("hidden");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup2.classList.add("hidden");
    }
});






let openButton3 = document.getElementById("openPopup3");
let popup3 = document.getElementById("popup3");

// Cuando se hace clic en el botón, mostrar la ventana emergente
openButton3.addEventListener("click", function () {
    popup3.classList.remove("hidden");
});

// Obtener el botón de cerrar
let closeButton3 = document.getElementById("closePopup3");

// Cuando se hace clic en el botón de cerrar, ocultar la ventana emergente
closeButton3.addEventListener("click", function () {
    popup3.classList.add("hidden");
});

// Cuando el usuario hace clic fuera de la ventana emergente, ocultarla
window.addEventListener("click", function (event) {
    if (event.target == popup3) {
        popup3.classList.add("hidden");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup3.classList.add("hidden");
    }
});






let openButton4 = document.getElementById("openPopup4");
let popup4 = document.getElementById("popup4");

// Cuando se hace clic en el botón, mostrar la ventana emergente
openButton4.addEventListener("click", function () {
    popup4.classList.remove("hidden");
});

// Obtener el botón de cerrar
let closeButton4 = document.getElementById("closePopup4");

// Cuando se hace clic en el botón de cerrar, ocultar la ventana emergente
closeButton4.addEventListener("click", function () {
    popup4.classList.add("hidden");
});

// Cuando el usuario hace clic fuera de la ventana emergente, ocultarla
window.addEventListener("click", function (event) {
    if (event.target == popup4) {
        popup4.classList.add("hidden");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup4.classList.add("hidden");
    }
});







let openButton5 = document.getElementById("openPopup5");
let popup5 = document.getElementById("popup5");

// Cuando se hace clic en el botón, mostrar la ventana emergente
openButton5.addEventListener("click", function () {
    popup5.classList.remove("hidden");
});

// Obtener el botón de cerrar
let closeButton5 = document.getElementById("closePopup5");

// Cuando se hace clic en el botón de cerrar, ocultar la ventana emergente
closeButton5.addEventListener("click", function () {
    popup5.classList.add("hidden");
});

// Cuando el usuario hace clic fuera de la ventana emergente, ocultarla
window.addEventListener("click", function (event) {
    if (event.target == popup5) {
        popup5.classList.add("hidden");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup5.classList.add("hidden");
    }
});