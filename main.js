// Función para cargar componentes HTML y ejecutar un callback después de la carga
function loadComponent(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // Ejecuta el callback después de la carga
    });
}

// Cargar header y footer
loadComponent("header", "header.html", highlightActiveLink);
loadComponent("footer", "footer.html");

// Función para resaltar el enlace activo y deshabilitarlo
function highlightActiveLink() {
  let currentPage = window.location.pathname.split("/").pop() || "index.html"; // Si está en la raíz, asigna index.html

  let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    let linkPage = link.getAttribute("href").split("/").pop(); // Obtiene solo el archivo de la ruta

    if (linkPage === currentPage) {
      link.classList.add("active", "disabled-link"); // Resalta y deshabilita el enlace
    } else {
      link.classList.remove("active", "disabled-link");
    }
  });
}

// Validación del formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioContacto");
  const feedback = document.getElementById("formFeedback");

  if (form) { // Verifica que el formulario exista antes de agregar el evento
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        feedback.classList.remove("d-none", "alert-success");
        feedback.classList.add("alert-danger");
        feedback.textContent = "Por favor, completa todos los campos obligatorios.";
      } else {
        event.preventDefault(); // Se puede quitar para permitir el envío real
        feedback.classList.remove("d-none", "alert-danger");
        feedback.classList.add("alert-success");
        feedback.textContent = "¡Formulario enviado correctamente!";
      }
      form.classList.add("was-validated");
    });
  }
});
