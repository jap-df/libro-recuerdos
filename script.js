// Selección de elementos
const cartaImagen = document.querySelector('.carta-imagen');
const cartaMensaje = document.querySelector('.carta-mensaje');
const carta = document.querySelector('.carta');
const contenidoWeb = document.getElementById('contenido-web');
const musica = document.getElementById('musica');
const loveLetter = document.getElementById('love-letter');

// Texto de la carta de amor
const text = `Querida Theresse,\n\nDesde el momento en que te conocí, mi vida cambió para siempre.\n\Eres muy especial en mi mundo, y cada día a tu lado es un regalo. Este pequeño libro de recuerdos es solo una muestra de todo lo que significas para mí.\n\nTe amo ya seas una ardilla, pollito o pato.\n\nCon todo mi corazón,\nJose Carlos`;

let index = 0;

// Efecto de escritura
function typeLetter() {
  if (index < text.length) {
    loveLetter.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 50); // Ajusta la velocidad de escritura
  }
}

// Cuando se hace clic en la carta cerrada
cartaImagen.addEventListener('click', () => {
  carta.classList.add('flip'); // Animación de voltear la carta
  setTimeout(() => {
    cartaMensaje.classList.add('mostrar'); // Mostrar el mensaje con animación
  }, 500); // Esperar a que la carta se voltee
});

// Cuando se hace clic en "Abrir carta"
document.getElementById('abrir-carta').addEventListener('click', () => {
  carta.style.opacity = '0'; // Desvanecer la carta
  setTimeout(() => {
    carta.style.display = 'none'; // Ocultar la carta
    contenidoWeb.style.display = 'block'; // Mostrar el contenido principal
    contenidoWeb.classList.add('mostrar'); // Efecto de fade-in
    musica.play(); // Reproducir música
    document.body.style.overflow = 'auto'; // Habilitar el scroll
    typeLetter(); // Iniciar el efecto de escritura
  }, 1000); // Esperar a que termine la animación
});

const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselPrev = document.querySelector(".carousel-prev");
const carouselNext = document.querySelector(".carousel-next");
let currentIndex = 0;

// Función para mover el carrusel
function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

// Botón Anterior
carouselPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1; // Vuelve al último
  }
  updateCarousel();
});

// Botón Siguiente
carouselNext.addEventListener("click", () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Vuelve al primero
  }
  updateCarousel();
});


// Fecha de inicio de la relación (cambia esta fecha por la tuya)
const fechaInicio = new Date('2021-06-01'); // Año-Mes-Día

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  // Cálculo del tiempo
  const segundos = Math.floor(diferencia / 1000) % 60;
  const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
  const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) % 30;
  const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30)) % 12;
  const anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));

  // Actualizar el contador en el HTML
  document.getElementById('anos').textContent = anos;
  document.getElementById('meses').textContent = meses;
  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Iniciar el contador al cargar la página
actualizarContador();

// Preguntas y respuestas 
const preguntas = [
  { pregunta: "¿Te está gustando mi regalo por ahora?", respuesta: "tu respuesta" },
  { pregunta: "Es la primera vez que hago esto así que espero que sí, ¿Sabes que día es hoy?", respuesta: "tu respuesta" },
  { pregunta: "San Valentín, así que ya sabrás lo que estoy apunto de hacer", respuesta: "tu respuesta" },
  { pregunta: "Aunque no tienes opción gg, puedes probar todas las veces que quieras que todos los caminos llevan mi", respuesta: "tu respuesta" }
  
];

let preguntaActual = 0;
let respuestasCorrectas = 0;

// Elementos del DOM
const preguntaTexto = document.getElementById('pregunta-texto');
const respuestaInput = document.getElementById('respuesta-input');
const siguientePreguntaBtn = document.getElementById('siguiente-pregunta');
const animacionCorazones = document.getElementById('animacion-corazones');
const resultado = document.getElementById('resultado');
const preguntasContainer = document.getElementById('preguntas');
const corazonesContainer = document.getElementById('corazones-container');

// Mostrar la primera pregunta
function mostrarPregunta() {
  preguntaTexto.textContent = preguntas[preguntaActual].pregunta;
}

mostrarPregunta();

// Verificar la respuesta
siguientePreguntaBtn.addEventListener('click', () => {
  const respuestaUsuario = respuestaInput.value.trim().toLowerCase();
  const respuestaCorrecta = preguntas[preguntaActual].respuesta.toLowerCase();

  if (respuestaUsuario === respuestaCorrecta) {
    respuestasCorrectas++;
  }

  preguntaActual++;
  respuestaInput.value = '';

  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    // Mostrar resultado
    preguntasContainer.style.display = 'none';
    resultado.style.display = 'block';
  }
});

// Botón "Sí" en resultado final
document.getElementById('si-btn').addEventListener('click', () => {
  resultado.style.display = 'none';
  animacionCorazones.style.display = 'block';
  crearCorazones();
});

// Manejar el botón "No" para cambiar a "Sí"
document.getElementById('no-btn').addEventListener('click', function () {
  this.textContent = '¡Sí!';
  this.removeEventListener('click', arguments.callee);
  this.addEventListener('click', () => {
    resultado.style.display = 'none';
    animacionCorazones.style.display = 'block';
    crearCorazones();
  });
});

// Crear corazones animados
function crearCorazones() {
  for (let i = 0; i < 20; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = '❤️';
    corazon.style.left = `${Math.random() * 100}vw`;
    corazon.style.top = `${Math.random() * 100}vh`;
    corazon.style.animationDuration = `${Math.random() * 3 + 2}s`;
    corazonesContainer.appendChild(corazon);

    setTimeout(() => corazon.remove(), 4000); // Eliminar después de la animación
  }
}

// Botón final "Sí"
document.getElementById('si-btn-final').addEventListener('click', () => {
  // Ocultar todas las secciones anteriores
  document.getElementById('animacion-corazones').style.display = 'none';
  document.getElementById('juego-san-valentin').style.display = 'none';

  // Mostrar la sección de los videos
  document.getElementById('video-besos').style.display = 'block';
});



// Botón final "No" cambia a "Sí"
document.getElementById('no-btn-final').addEventListener('click', function () {
  this.textContent = '¡Sí!';
  this.removeEventListener('click', arguments.callee);
  this.addEventListener('click', () => {
    alert('¡Eres la mejor! ¡Feliz San Valentín, mi amor! 💖');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cartas = document.querySelectorAll(".carta-pdf");

  // Agregar evento a cada carta
  cartas.forEach((carta) => {
      carta.addEventListener("click", () => {
          const pdfUrl = carta.getAttribute("data-pdf");
          verPDF(pdfUrl);
      });
  });
});

// Función para abrir el PDF
function verPDF(pdfUrl) {
  if (pdfUrl) {
      console.log(`Abriendo PDF: ${pdfUrl}`);
      window.open(pdfUrl, "_blank");
  } else {
      console.error("Error: No se encontró la URL del PDF");
  }
}


