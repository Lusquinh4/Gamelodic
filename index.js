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



// Teste
const imagens = document.querySelectorAll('img[data-txt]'); // Seleciona imagens com o atributo data-txt
const espaco = document.getElementById('caixa');
imagens.forEach((imagem) => {
    imagem.addEventListener('mouseover', () => {
        const texto = imagem.getAttribute('data-txt'); // Obtém o texto do atributo data-txt
        espaco.textContent = texto; // Define o texto no elemento 'caixa'
        espaco.classList.remove('hidden'); // Torna o elemento visível
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










// //Função instrumentos
// function violao() {
//     const violaoImage = document.getElementById('violao-img');
//     const violaoTxt = document.getElementById('violao-txt');
//     const violaoFundo = document.getElementById('violao');
//     if (violaoTxt.classList.contains('hidden')) {
//         violaoTxt.classList.remove('hidden');
//         violaoFundo.classList.add('bg-yellow-500');
//         violaoFundo.classList.add('border-4');
//         violaoFundo.classList.add('border-orange-500/40');
//         violaoImage.classList.remove('rounded-full');
//     }
// }
// function violaoOut(){
//     const violaoFundo = document.getElementById('violao');
//     const violaoImage = document.getElementById('violao-img');
//     const violaoTxt = document.getElementById('violao-txt');
//     if (!violaoTxt.classList.contains('hidden')) {
//         violaoTxt.classList.add('hidden');
//         violaoImage.classList.add('rounded-full');
//         violaoImage.classList.add('border-none');
//         violaoImage.classList.add('rounded-full');
//         violaoFundo.classList.remove('bg-yellow-500');
//         violaoFundo.classList.remove('border-4');
//         violaoFundo.classList.remove('border-orange-500/40');

//     }
// }

// function sax() {
//     const saxTxt = document.getElementById('sax-txt');
//     if (saxTxt.classList.contains('hidden')) {
//         saxTxt.classList.remove('hidden');
//     } else {
//         saxTxt.classList.add('hidden');
//     }
// }
// function saxOut(){
//     const saxTxt = document.getElementById('sax-txt');
//     if (!saxTxt.classList.contains('hidden')) {
//         saxTxt.classList.add('hidden');
//     }
// }

// function guitarra() {
//     const guitarraTxt = document.getElementById('guitarra-txt');
//     if (guitarraTxt.classList.contains('hidden')) {
//         guitarraTxt.classList.remove('hidden');
//     } else {
//         guitarraTxt.classList.add('hidden');
//     }
// }
// function guitarraOut(){
//     const guitarraTxt = document.getElementById('guitarra-txt');
//     if (!guitarraTxt.classList.contains('hidden')) {
//         guitarraTxt.classList.add('hidden');
//     }
// }
// function violino() {
//     const violinoTxt = document.getElementById('violino-txt');
//     if (violinoTxt.classList.contains('hidden')) {
//         violinoTxt.classList.remove('hidden');
//     } else {
//         violinoTxt.classList.add('hidden');
//     }
// }
// function violinoOut(){
//     const violinoTxt = document.getElementById('violino-txt');
//     if (!violinoTxt.classList.contains('hidden')) {
//         violinoTxt.classList.add('hidden');
//     }
// }
        saxTxt.classList.add('hidden');
//     }
// }

// function guitarra() {
//     const guitarraTxt = document.getElementById('guitarra-txt');
//     if (guitarraTxt.classList.contains('hidden')) {
//         guitarraTxt.classList.remove('hidden');
//     } else {
//         guitarraTxt.classList.add('hidden');
//     }
// }
// function guitarraOut(){
//     const guitarraTxt = document.getElementById('guitarra-txt');
//   