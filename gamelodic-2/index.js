// Função do topo

const toggleButton = document.getElementById('toggleButton');
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

function animarEntradas() {
//Faz com que as animações executem quando aparece a seção na tela
//cria o observador
    const observadorEntradaDireita = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('animate-entrada-direita');
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
            } else {
                entrada.target.classList.remove('animate-entrada-fade-in');
            }
        });
    });

    const FadeIn = document.querySelectorAll('#projetos-anim');
        FadeIn.forEach((elemento) => {
            observadorFadeIn.observe(elemento);
        });
    }