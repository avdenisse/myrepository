// Visibilidad de secciones
function showSection(sectionId) {
    //Oculta las temas secciones
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // muestra la seccion elegida
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = "block";
}

// Inicio default
window.onload = function() {
    showSection('inicio');
};