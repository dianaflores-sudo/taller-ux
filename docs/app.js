const formulario = document.getElementById("form-notas");
const mensaje = document.getElementById("mensaje-estado");
const contenedorNotas = document.getElementById("contenedor-notas");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formulario.classList.add("validado");

  // Prevención de errores (Validación)
  if (!formulario.checkValidity()) {
    mostrarMensaje("Por favor completa todos los campos requeridos.", "error");
    formulario.querySelector("input:invalid, select:invalid, textarea:invalid").focus();
    return;
  }

  const titulo = document.getElementById("titulo-nota").value;
  const categoria = document.getElementById("categoria-nota").value;
  const contenido = document.getElementById("contenido-nota").value;

  // Crear elemento de la nota
  const elementoNota = document.createElement("article");
  elementoNota.className = "tarjeta-nota";
  elementoNota.innerHTML = `
    <span class="cat">${categoria}</span>
    <h3>${titulo}</h3>
    <p>${contenido}</p>
    <button type="button" class="boton-eliminar">Eliminar nota</button>
  `;

  // Evento de eliminación con confirmación (Control y Libertad)
  elementoNota.querySelector(".boton-eliminar").addEventListener("click", function () {
    if (confirm(`¿Estás seguro de que deseas eliminar la nota "${titulo}"?`)) {
      elementoNota.remove();
      mostrarMensaje("Nota eliminada correctamente.", "info");
    }
  });

  contenedorNotas.appendChild(elementoNota);
  formulario.reset();
  formulario.classList.remove("validado");
  mostrarMensaje("¡Nota agregada con éxito!", "exito");
});

formulario.addEventListener("reset", function (evento) {
  if (!confirm("¿Deseas limpiar todos los campos del formulario?")) {
    evento.preventDefault();
    return;
  }
  formulario.classList.remove("validado");
  mostrarMensaje("Campos del formulario limpios.", "info");
});