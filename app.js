//array donde van los 'amigos' ingresados
let amigos = [];

//capturando el input
let input = document.getElementById("amigo");
// validamos si el input se encuentra vacio
// if (input == '') {
//     alert('campo vacio')
// }else{
//     alert('hola')
// }

// elemento html donde se van a mostrar los li
let listaAmigos = document.getElementById("listaAmigos");

// elemento html donde se va a mostrar el ganador
let ganador = document.getElementById("resultado");

//agregar amigos
function agregarAmigo() {
  let cadena = input.value;

  if (cadena == "") {
    alert("Por favor, inserte un nombre.");
    ganadorSorteo();
  } else {
    amigos.push(cadena);
    input.value = "";
    mostrarLista();
    ganadorSorteo();
  }
}

//generar array en el dom
function mostrarLista() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `
                        <li>${amigos[i]}</li>

    `;
  }
}

function ganadorSorteo() {
  if (amigos.length > 0) {

  } else if (amigos.length == 0) {
  }
}


function sortearAmigo(params) {
     let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[indiceAleatorio];

    ganador.innerHTML = "";

    ganador.innerHTML = `
                        <li>${amigoAleatorio}</li>
    `;
}