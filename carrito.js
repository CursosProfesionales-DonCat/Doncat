console.log("JS cargado correctamente");

const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Función para mover las imágenes hacia el índice deseado
function moveCarouselTo(index) {
  // Calculamos la posición que debe tener el contenedor
  const offset = -index * 100; // Por cada imagen, desplazamos el contenedor el 100%
  carouselInner.style.transform = `translateX(${offset}%)`; // Deslizar las imágenes
}

// Avanzar al siguiente elemento
function nextItem() {
  currentIndex = (currentIndex + 1) % items.length; // Ciclo circular
  moveCarouselTo(currentIndex);
}

// Retroceder al elemento anterior
function prevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Ciclo circular inverso
  moveCarouselTo(currentIndex);
}

// Agregar eventos a los botones
nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

// Cambio automático de imágenes cada 5 segundos
setInterval(nextItem, 5000);

// Inicializar el primer elemento
moveCarouselTo(currentIndex);



const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);