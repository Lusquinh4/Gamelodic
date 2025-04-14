// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

//Faz com que as animações executem quando aparece a seção na tela
//cria o observador
const observadorEntradaDireita = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("animate-entrada-direita");
      observadorEntradaDireita.unobserve(entrada.target);
    } else {
      entrada.target.classList.remove("animate-entrada-direita");
    }
  });
});

//Seleciona os elementos que serão observados e adicona o observador a eles
const entradaDireita = document.querySelectorAll("#home-anim");
entradaDireita.forEach((elemento) => {
  observadorEntradaDireita.observe(elemento);
});

const observadorFadeIn = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("animate-entrada-fade-in");
      observadorFadeIn.unobserve(entrada.target);
    } else {
      entrada.target.classList.remove("animate-entrada-fade-in");
    }
  });
});

const FadeIn = document.querySelectorAll(
  "#projetos-anim, .obj-home, #violino, #sax, #guitarra, #violao"
);
FadeIn.forEach((elemento) => {
  observadorFadeIn.observe(elemento);
});

// Texto dos instrumentos | Adiciona fundo ao texto vindo do atributo "fundo" das imagens
const imagens = document.querySelectorAll("img[data-txt]"); // Seleciona imagens com o atributo data-txt
const espaco = document.getElementById("caixa");
imagens.forEach((imagem) => {
  imagem.addEventListener("mouseover", () => {
    const texto = imagem.getAttribute("data-txt"); // Obtém o texto do atributo data-txt
    espaco.textContent = texto; // Define o texto no elemento 'caixa'
    espaco.classList.remove("opacity-0", "overflow-hidden"); // Torna o elemento visível
    espaco.style.backgroundImage = "url(" + imagem.getAttribute("fundo") + ")";
    espaco.classList.add("bg-center", "bg-no-repeat");

    // animação entrada
    let opacidade = 0;
    function fadeIn() {
      opacidade += 0.02;
      espaco.style.opacity = opacidade;
      if (opacidade < 1) {
        requestAnimationFrame(fadeIn);
      }
    }
    fadeIn();
  });

  imagem.addEventListener("mouseout", () => {
    // animação saída
    let opacidade = 1;
    function fadeOut() {
      opacidade -= 0.05;
      espaco.style.opacity = opacidade;
      if (opacidade > 0) {
        requestAnimationFrame(fadeOut);
      }
    }
    fadeOut();
  });
});

// Animação instrumentos
const observadorInstrumentos = new instersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-instrumentos");
    } else {
      entry.target.classList.remove("animate-instrumentos");
    }
  });
});
