function loadComponent(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // Ejecuta el callback cuando el header se carga
    });
}

// Cargar header y footer
loadComponent("header", "header.html", highlightActiveLink);
loadComponent("footer", "footer.html");

// Función para resaltar el enlace activo
function highlightActiveLink() {
  let currentPage = window.location.pathname.split("/").pop(); // Obtiene solo el nombre del archivo

  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    let linkPage = link.getAttribute("href").split("/").pop(); // Elimina directorios y obtiene solo el archivo

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

