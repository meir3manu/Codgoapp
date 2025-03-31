document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const eventosContainer = document.getElementById("eventos-container");
    const cursosContainer = document.getElementById("produtos");

    function filtrarCategoria(category) {
        if (category === "cursos") {
            cursosContainer.style.display = "flex";  // Mostra os cursos
            eventosContainer.style.display = "none"; // Esconde os eventos
        } else {
            cursosContainer.style.display = "none";  // Esconde os cursos
            eventosContainer.style.display = "flex"; // Mostra os eventos
        }

        // Atualiza o botão ativo
        buttons.forEach(btn => btn.classList.remove("active"));
        const activeButton = document.querySelector(`[data-category="${category}"]`);
        if (activeButton) {
            activeButton.classList.add("active");
        }
    }

    // Adiciona evento de clique nos botões
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            filtrarCategoria(category);
        });
    });

    // Exibir os cursos por padrão ao carregar a página
    filtrarCategoria("cursos");
});
