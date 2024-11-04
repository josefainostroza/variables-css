// # Ejercicios

// ## VARIABLES CSS

// - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

// - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

// - Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón*/

// - Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.

const rootStyles = document.documentElement.style;
const printButtonRGB = document.getElementById('button');
const printButtonHEXA = document.getElementById('button1');
const printTitle = document.getElementById('title');
const wordHexa = '0123456789ABCDEF';

const random = (num) => {
  return Math.floor(Math.random() * num + 1);
};

const randomHEXA = () => {
  let resultHexa = '';
  for (let i = 0; i < 6; i++) {
    resultHexa += wordHexa.charAt(random(wordHexa.length - 1));
  }
  rootStyles.setProperty('--bg-color', `#${resultHexa}`);
};

const randomRGB = () => {
  rootStyles.setProperty(
    '--bg-color',
    `rgb(${random(255)},${random(255)},${random(255)})`
  );
};

const scrollHeight = () => {
  let windowScroll =
    (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight);

  rootStyles.setProperty('--var-scroll', `${windowScroll}%`);
  printTitle.textContent = `Te has desplazado: ${Math.ceil(windowScroll)}%`;
};

const mousePrint = (event) => {
  rootStyles.setProperty('--mouse-moveY', `${event.pageY}px`);
  rootStyles.setProperty('--mouse-moveX', `${event.pageX}px`);

  console.log(event);
};
printButtonHEXA.addEventListener('click', randomHEXA);
printButtonRGB.addEventListener('click', randomRGB);
document.addEventListener('scroll', scrollHeight);
document.addEventListener('mousemove', mousePrint);
