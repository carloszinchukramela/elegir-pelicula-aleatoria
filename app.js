let botonElem = document.getElementById("boton-cambiar-peli");
let peliElem = document.getElementById("peli");
let generoElem = document.getElementById("genero");

function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

function cambiarPeli(){
  let indiceAleatorio = generarEnteroAleatorio(0, pelis.length);
  peliElem.innerText = pelis[indiceAleatorio].nombre;
  generoElem.innerText = pelis[indiceAleatorio].genero;
}

cambiarPeli();

botonElem.addEventListener("click", cambiarPeli);