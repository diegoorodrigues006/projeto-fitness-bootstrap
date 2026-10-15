// ==========================================
// 1. INICIALIZAÇÃO E SELEÇÃO DE ELEMENTOS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura os botões e os textos centrais
    const orbitButtons = document.querySelectorAll(".orbit-btn");
    const circleTitle = document.getElementById("circle-title");
    const circleDesc = document.getElementById("circle-desc");


    // ==========================================
    // 2. EVENTOS DO CÍRCULO INTERATIVO
    // ==========================================
    orbitButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const clickedBtn = event.currentTarget;

            // 2.1 Gestão de Classes (Ativar botão clicado)
            orbitButtons.forEach(btn => btn.classList.remove("active"));
            clickedBtn.classList.add("active");

            // 2.2 Captura de Dados (Buscar novo título e texto)
            const newTitle = clickedBtn.getAttribute("data-title");
            const newDesc = clickedBtn.getAttribute("data-desc");


            // ==========================================
            // 3. ANIMAÇÃO DE TRANSIÇÃO (Fade In/Out)
            // ==========================================
            // Apaga o texto atual (Fade out)
            circleTitle.style.opacity = 0;
            circleDesc.style.opacity = 0;

            // Espera 300ms (tempo do CSS), troca o texto e acende novamente (Fade in)
            setTimeout(() => {
                circleTitle.textContent = newTitle;
                circleDesc.textContent = newDesc;
                
                circleTitle.style.opacity = 1;
                circleDesc.style.opacity = 1;
            }, 300); 
        });
    });

});