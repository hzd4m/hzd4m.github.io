document.addEventListener("DOMContentLoaded", () => {
    const highlight = document.querySelector(".highlight");
    const text = "Hassan Zeidam";
  
    let i = 0;
  
    function typeEffect() {
      if (i < text.length) {
        highlight.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
      }
    }
  
    highlight.innerHTML = ""; // Limpa o conteúdo antes de começar
    typeEffect();
  });
  