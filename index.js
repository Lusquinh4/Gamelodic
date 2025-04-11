// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


// Função do topo

/*const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleMenu);
        
function toggleMenu() {
const menu = document.getElementById('nav')
const linhaTopo = document.getElementById('linha-topo')
const titulo = document.getElementById('titulo')

    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        titulo.classList.add('hidden')
    } else  {
        menu.classList.add('hidden')
        titulo.classList.remove('hidden')
    }
                
    }
*/

//Faz com que as animações executem quando aparece a seção na tela
//cria o observador
const observadorEntradaDireita = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('animate-entrada-direita');
            observadorEntradaDireita.unobserve(entrada.target)
        } else {
            entrada.target.classList.remove('animate-entrada-direita');
        }
    });
});

//Seleciona os elementos que serão observados e adicona o observador a eles
const entradaDireita = document.querySelectorAll('#home-anim');
entradaDireita.forEach((elemento) => {
    observadorEntradaDireita.observe(elemento);
});

const observadorFadeIn = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('animate-entrada-fade-in');
            observadorFadeIn.unobserve(entrada.target)
        } else {
            entrada.target.classList.remove('animate-entrada-fade-in');
        }
    });
});

const FadeIn = document.querySelectorAll('#projetos-anim, .obj-home, #violino, #sax, #guitarra, #violao');
FadeIn.forEach((elemento) => {
    observadorFadeIn.observe(elemento);
});



// Texto dos instrumentos | Adiciona fundo ao texto vindo do atributo "fundo" das imagens
const imagens = document.querySelectorAll('img[data-txt]'); // Seleciona imagens com o atributo data-txt
const espaco = document.getElementById('caixa');
imagens.forEach((imagem) => {
    imagem.addEventListener('mouseover', () => {
        const texto = imagem.getAttribute('data-txt'); // Obtém o texto do atributo data-txt
        espaco.textContent = texto; // Define o texto no elemento 'caixa'
        espaco.classList.remove('hidden', 'overflow-hidden'); // Torna o elemento visível
        espaco.style.backgroundImage = 'url(' + imagem.getAttribute('fundo') + ')';
        espaco.classList.add('bg-center', 'bg-no-repeat');
    });

    imagem.addEventListener('mouseout', () => {
        espaco.classList.add('hidden'); // Oculta o elemento quando o mouse sai
    });
});

// Animação instrumentos
        const observadorInstrumentos = new instersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
            entry.target.classList.add('animate-instrumentos')
        } else {
            entry.target.classList.remove('animate-instrumentos')
                }
            });
        });

        const instrumentos = document.querySelectorAll('.instrumentos')
        instrumentos.forEach((elemento) => {
            observadorInstrumentos.observe(elemento);
        });


