document.addEventListener("DOMContentLoaded", function() {
    const orbitButtons = document.querySelectorAll(".orbit-btn");
    const circleTitle = document.getElementById("circle-title");
    const circleDesc = document.getElementById("circle-desc");

    if (orbitButtons.length > 0) {
        orbitButtons.forEach(button => {
            button.addEventListener("click", function() {
                // Remove a classe 'active' de todos os botões
                orbitButtons.forEach(btn => btn.classList.remove("active"));
                
                // Adiciona a classe 'active' ao botão clicado
                this.classList.add("active");

                // Atualiza o texto do círculo central baseado no botão clicado
                const newTitle = this.getAttribute("data-title");
                const newDesc = this.getAttribute("data-desc");

                // Efeito suave de transição (opcional)
                circleTitle.style.opacity = 0;
                circleDesc.style.opacity = 0;

                setTimeout(() => {
                    circleTitle.textContent = newTitle;
                    circleDesc.textContent = newDesc;
                    circleTitle.style.opacity = 1;
                    circleDesc.style.opacity = 1;
                }, 200);
            });
        });
    }
});