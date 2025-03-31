document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const eventosContainer = document.getElementById("eventos-container");
    const cursosContainer = document.getElementById("produtos");

    function filtrarCategoria(category) {
        console.log("category",category)
        if (category === "cursos") {
            cursosContainer.style.display = "flex";  // Mostra os cursos
            eventosContainer.style.display = "none"; // Esconde os eventos
        } else {
            cursosContainer.style.display = "none";  // Esconde os cursos
            eventosContainer.style.display = "flex"; // Mostra os eventos
        }

        // Atualiza o botão ativo
        buttons.forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-category") === category) {
                btn.classList.add("active");
            }
        });
    }

    // Adiciona evento de clique nos botões
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
           console.log("botao clicado", category);
            filtrarCategoria(category);
        });
    });

    // Exibir os cursos por padrão ao carregar a página
    filtrarCategoria("cursos");
});
