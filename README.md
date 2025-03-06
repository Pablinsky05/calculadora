document.querySelector(".display");
Selecciona el primer elemento del documento que tenga la clase display.

const buttons = document.querySelectorAll("button");
Selecciona todos los elementos <button> del documento y los almacena en una lista.

buttonText = button.textContent;
Obtiene el texto contenido dentro de un elemento <button>.

buttons.forEach((button) => { ... });
Recorre cada elemento de la lista buttons y ejecuta una función para cada uno.

button.addEventListener("click", () => { });
Agrega un evento de clic a un botón, ejecutando una función cuando se hace clic en él.
